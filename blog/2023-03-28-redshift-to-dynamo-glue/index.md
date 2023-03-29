---
title: "Glue Sparkを使ってRedshiftのデータをDynamoDBへ書き出す"
slug: redshift-to-dynamo-glue
tags: [dynamodb, redshift, glue, spark]
authors: [statefb]
---

AWS 上でデータ分析用の基盤を構築する際、データウェアハウスとして Redshift、データマートとして DynamoDB を利用したいことがあると思います。たとえば Redshift 上のデータを集計した結果に頻繁にアクセスする場合において、オフロード先として DynamoDB を採用する等のケースを想定しています。本記事では Glue Spark を用いて Redshift から DynamoDB へデータを ETL する方法を具体例を交えて紹介します。

<!-- truncate -->

## 問題設定

ここでは下記のような購買履歴データを取り扱うものとします。

| user_id | item_id |
| ------- | ------- |
| user001 | item001 |
| user001 | item002 |
| user001 | item003 |
| user002 | item010 |
| user003 | item002 |
| user003 | item010 |
| ...     | ...     |

上記データが Redshift の`transaction`テーブルに存在するとします。これを下記のように`user_id` ごとに整理し、DynamoDB へ書き込む状況を考えます。

| user_id | items                     |
| ------- | ------------------------- |
| user001 | [item001,item002,item003] |
| user002 | [item010]                 |
| user003 | [item002,item010]         |
| ...     | ...                       |

## Redshift からデータを読み込む (Extract)

Spark では JDBC を使って Redshift にアクセスすることができます。たとえば Glue PySpark では下記のように記述することでデータを読み込むことができます。

```glue.py
from awsglue.context import GlueContext
from pyspark.context import SparkContext

sc = SparkContext()
glueContext = GlueContext(sc)

df = (
    glueContext.read.format("jdbc")
    .option("url", "jdbc:redshift://host.amazonaws.com:5439/default_db")
    .option("user", "user")
    .option("password", "password")
    .option("dbtable","transaction")
    .load()
)
```

上記コードは単一の Executor によって処理されるため、データサイズが小さい場合は動作しますが、大量のデータを読み込む場合メモリ不足等の原因により ETL ジョブは失敗に終わります。複数の Executor により並行に処理するには適切なパーティショニングを実施する必要があります。
パーティショニングするためには下記 3 つのオプションを指定します。

- `partitionColumn`
  - パーティションのキーとなるカラム。数値・日付・タイムスタンプのどれかの型を持つカラムを指定できる
- `numPartitions`
  - パーティションの数
- `lowerBound`, `upperBound`
  - パーティションのレンジを定義するために利用されるパラメータ

たとえばパーティションとなるカラム: `example_col`が 1 から 1000 の範囲の整数をとる場合において`numPartitions`を 10、 `lowerBound`を 1、`upperBound`を 1000 とした場合、それぞれのパーティションにおいて個別に下記のようなクエリが発行されます。

```example.sql
SELECT * FROM table WHERE example_col < 100
SELECT * FROM table WHERE example_col >= 100 and example_col < 200
SELECT * FROM table WHERE example_col >= 200 and example_col < 300
...
SELECT * FROM table WHERE example_col >= 900
```

したがって、各パーティションでは`example_col`の値が 1~99, 100~199, 200~299, ..., 900~1000 であるレコードを取り扱うことになります。
詳細は[Spark のドキュメント](http://mogile.web.fc2.com/spark/sql-data-sources-jdbc.html)を参照ください。なお Redshift ではクエリ履歴は下記のようなクエリで確認できます。

```history.sql
SELECT query_text, execution_time, start_time FROM sys_query_history
```

今回のケースでは`user_id`を`partitionColumn`に指定するアイデアが考えられますが、`user_id`は文字列型であるため直接指定することができません。また数値型であったとしても分布が均等でないケースが存在することも容易に想像できます（ヘビーユーザーとライトユーザーでは履歴の数が異なるなど）。均等でない場合データの偏りが発生し、その結果メモリ不足に関連した問題が発生する可能性があります。これを解決するため、ここではハッシュの剰余を利用します。`user_id`のハッシュ値をパーティション数で割った余りを`partitionColumn`に指定することで、上述の問題を回避することができます。ここではハッシュ値の計算に Redshift の[CHECKSUM 関数](https://docs.aws.amazon.com/ja_jp/redshift/latest/dg/r_CHECKSUM.html)を利用します。

```glue.py
NUM_PARTITIONS = 30
LOWER_BOUND = 0
UPPER_BOUND = NUM_PARTITIONS

sql = """
SELECT
    user_id,
    item_id,
    CHECKSUM(user_id) % {} as partition
FROM
    recommend
""".format(NUM_PARTITIONS)

jdbc_properties = {
    "url": "jdbc:redshift://host.amazonaws.com:5439/default_db",
    "user": "user",
    "password": "password",
}

df = (
    glueContext.read.format("jdbc")
    .option("url", "jdbc:redshift://host.amazonaws.com:5439/default_db")
    .option("user", "user")
    .option("password", "password")
    .option(
        "dbtable",
        f"({sql}) as tmp",
    )
    .option("partitionColumn", "partition")
    .option("lowerBound", str(LOWER_BOUND))
    .option("upperBound", str(UPPER_BOUND))
    .option("numPartitions", str(NUM_PARTITIONS))
    .load()
)
```

[Spark のドキュメント](http://mogile.web.fc2.com/spark/sql-data-sources-jdbc.html)にあるように、ここでは`dbtable`プロパティに直接クエリ文を指定している点に留意ください。

> read パスでそれを使う場合は、SQL クエリの FROM 句で有効なものを全て使用できることに注意してください。例えば、完全なテーブルの代わりに、丸括弧内のサブクエリも使うことができます。

なおパーティション数: `NUM_PARTITIONS`には 30 を指定していますが、パーティション数を増やすと Redshift へのリクエスト数も増加する点に留意ください。リクエストはクエリキューに積まれ順次実行されます。詳細は[ドキュメント](https://docs.aws.amazon.com/ja_jp/redshift/latest/dg/cm-c-defining-query-queues.html)をご確認ください。

## データの変換 (Transform)

Spark の [DataFrame API](https://spark.apache.org/docs/3.1.1/api/python/reference/api/pyspark.sql.DataFrame.html) を利用し下記のように変換します。

```glue.py
from pyspark.sql.functions import collect_list

df_transformed = (
    df.groupBy("user_id")
    .agg(
        collect_list("item_id").alias("items"),
    )
)
```

## DynamoDB へ書き込み (Load)

Spark DataFrame を Dynamic Frame へ変換後、[write_dynamic_frame_from_options](https://docs.aws.amazon.com/ja_jp/glue/latest/dg/aws-glue-api-crawler-pyspark-extensions-dynamic-frame-writer.html#aws-glue-api-crawler-pyspark-extensions-dynamic-frame-writer-from_options)を利用し DynamoDB へ書き込みます。`connectionType`に[`dynamodb`](https://docs.aws.amazon.com/ja_jp/glue/latest/dg/aws-glue-programming-etl-connect.html#aws-glue-programming-etl-connect-dynamodb)を指定します。書き込みの量に対して十分な WCU が確保されている必要がありますのでご留意ください。

```glue.py
dyf = DynamicFrame.fromDF(df_transformed, glueContext)

glueContext.write_dynamic_frame_from_options(
    frame=dyf,
    connection_type="dynamodb",
    connection_options={
        "dynamodb.output.tableName": "output_table",
        "dynamodb.throughput.write.percent": "1.0",
    },
)

job.commit()
```

## まとめ

以上、Redshift から DynamoDB へ Glue Spark を利用した ETL について紹介しました。Redshift 以外の JDBC データソースにも応用できますので、ご参考にしていただけたら幸いです。
