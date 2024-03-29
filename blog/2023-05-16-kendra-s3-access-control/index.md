---
title: "Kendra で S3 ドキュメントのアクセスコントロールを行う方法"
slug: kendra-s3-access-control
tags: [kendra]
authors: [wadabee]
---

[Amazon Kendra](https://aws.amazon.com/jp/kendra/) (以降、Kendra) は、機械学習 (ML) を利用したインテリジェント検索サービスです。  
この記事では、ユーザの権限によって検索ドキュメントのアクセスコントロールを行う方法をご紹介します。  
**[2023/07/12]：記事の内容をアップデートしました。**

<!-- truncate -->

本記事で紹介するアクセスコントロールのサンプルコードは、[simple-lex-kendra-jp](https://github.com/aws-samples/simple-lex-kendra-jp/) という GitHub リポジトリで公開しておりますので、合わせてご確認ください。

## Kendra のアクセスコントロールについて

Kendra では、`AccessControlList` を利用してアクセスコントロールを行うことが可能です。`AccessControlList` は `ACL` と省略して表現されることもあります。

本記事では、 Amazon S3 (以降、S3) の Data source connection のアクセスコントロールについて解説します。

## アクセスコントロールの種類

Amazon S3 ドキュメントのアクセスコントロールは、「メタデータ使う方法」と「設定ファイルを使う方法」の 2 つがあります。

- メタデータを使う方法
  - Amazon S3 ドキュメントにはメタデータを設定できますが、そのメタデータのひとつとして `AccessControlList` があります。
  - `AccessControlList` にアクセス条件を設定することで、ファイルごとにアクセスコントロールを行うことができます。
  - 本題とはそれますが、FAQ にもアクセスコントロール用のメタデータが用意されているため、そちらを利用することで S3 ドキュメントと同様のアクセスコントロールが可能です（[参考](https://docs.aws.amazon.com/ja_jp/kendra/latest/dg/in-creating-faq.html)）。
- 設定ファイルを使う方法
  - アクセスコントロール設定用の JSON ファイルを定義することで、一元的にアクセスコントロールを設定することが可能です。
  - フォルダ単位または、ファイル単位で、アクセスコントロールを行うことができます。

## メタデータによるアクセスコントロール

メタデータファイルを使用して、S3 ドキュメントに対してメタデータを設定できます。  
メタデータはアクセスコントロール以外の用途でも利用することが可能で、各属性を設定することにより属性を考慮したドキュメント検索（絞り込みやキーワード検索）を行うことが可能になります。  
詳細については、[こちらのドキュメント (Amazon S3 document metadata)](https://docs.aws.amazon.com/kendra/latest/dg/s3-metadata.html) をご確認ください。

### アクセスコントロールの定義

メタデータファイルに `AccessControlList` を設定することで、ファイルごとにアクセスコントロールを行うことができます。  
`AccessControlList` は以下の通り設定することが可能です。

```json
"AccessControlList": [
  {
      "Name": "group name | user name",
      "Type": "GROUP | USER",
      "Access": "ALLOW | DENY"
  }
],
```

- Name: アクセスコントロール対象の「グループ名 or ユーザ名」を設定
- Type: グループ単位で制御するか、ユーザ単位で制御するかを設定
- Access: 当該ユーザを「許可」するか「拒否」するかを設定

### アクセスコントロールの定義内容と挙動

`AccessControlList` が未設定の場合は、すべてのユーザが「アクセス許可」となります。  
`AccessControlList` に 1 つでも定義がある場合は、「アクセス許可」として定義されたユーザを除き、全員が「アクセス拒否」となります。  
そのため、**あるグループ以外のすべてのグループを「アクセス許可」という設定はできません。**

以下のように、`AdminGroup` のみ `ALLOW` を設定すると `AdminGroup` に所属しているユーザのみ、ドキュメントを参照することが可能になります。

```json
"AccessControlList": [
  {
      "Name": "AdminGroup",
      "Type": "GROUP",
      "Access": "ALLOW"
  }
],
```

以下のように、`AdminGroup` のみに `DENY` が設定されているため `AdminGroup` に所属していないユーザーはこのファイルを参照できそうに思えますが、実際はそうではありません。  
`ALLOW` の設定がないため、このファイルには誰もアクセスすることができません。

```json
"AccessControlList": [
  {
      "Name": "AdminGroup",
      "Type": "GROUP",
      "Access": "DENY"
  }
],
```

`DENY` のユースケースとしては、あるグループが内包しているサブグループのみアクセスを拒否したり、特定のユーザのみアクセスを拒否するといったものが考えられます。

```json
"AccessControlList": [
  {
      "Name": "AnyGroup",
      "Type": "GROUP",
      "Access": "ALLOW"
  },
  // AnyGroup が内包している特定のサブグループのみ拒否
  {
    "Name": "AnySubGroup",
    "Type": "GROUP",
    "Access": "DENY"
  },
  // AnyGroup に所属している特定のユーザのみ拒否
  {
    "Name": "AnyUser",
    "Type": "USER",
    "Access": "DENY"
  }
],
```

## 設定ファイルによるアクセスコントロール

アクセスコントロール用の設定ファイル (JSON 形式) を使って、一元的にアクセスコントロールを設定することが可能です。  
S3 のデータソースに対して、1 つの設定ファイルを定義できます。  
詳細については、[こちらのドキュメント (Access control for Amazon S3 data sources)](https://docs.aws.amazon.com/kendra/latest/dg/s3-acl.html) をご確認ください。

### アクセスコントロールの定義

[S3 のプレフィックス](https://docs.aws.amazon.com/ja_jp/AmazonS3/latest/userguide/using-prefixes.html)を利用して、アクセスコントロール対象を指定します。  
ディレクトリ単位または、オブジェクト単位で、アクセスコントロールの設定を行うことができます。

> プレフィックスの指定は、`s3://` から始まるフルパスで指定する必要があるので、ご注意ください。

`aclEntries` は、「メタデータによるアクセスコントロール」の `AccessControlList` と同じ定義となります。

```json
[
  {
    "keyPrefix": "s3://prefix1",
    "aclEntries": [
      {
        "Name": "user name",
        "Type": "GROUP | USER",
        "Access": "ALLOW | DENY"
      }
    ]
  }
]
```

### アクセスコントロールの定義内容と挙動

「メタデータによるアクセスコントロール」と同じ挙動になります。

## メタデータと設定ファイルの使い分けについて

ここまで、メタデータと設定ファイルでアクセスコントロールを実現できることを紹介しました。  
メタデータと設定ファイルでは設定方法が異なるだけで、実現できるアクセスコントロールの内容は同じです。  
それでは、それぞれの使い分けについての一例をご紹介します。

- メタデータのユースケース
  - メータデータファイルを自動で生成できる仕組みがある場合（大量のファイルに対して手動でファイル作成するのは現実的ではないため）
    - ファイル単位できめ細やかなアクセスコントロールを行いたい場合
    - アクセスコントロール以外の属性も設定して、検索に活かしたい場合
- 設定ファイルのユースケース
  - フォルダ単位でアクセスコントロールを行いたい場合
    - 権限を考慮したフォルダ体系であれば、簡単にアクセスコントロールを実装できます
  - 一元的にアクセスコントロールのルールを管理したい場合

## ユーザコンテキストについて

`AccessControlList` で、ユーザごと・グループごとのアクセスコントロールの定義を行いましたが、Kendra の Query を実行する際に、ユーザの情報を設定しなければアクセスコントロールは実施されません。  
ユーザの情報を設定していない場合は、`AccessControlList` の設定有無に関係なく、すべてのドキュメントが検索されるので、ご注意ください。

ユーザの情報を設定してアクセスコントロールを行う方法は、大きく 2 つあります。

- ユーザコンテキスト
  - [Query](https://docs.aws.amazon.com/ja_jp/kendra/latest/dg/API_Query.html) の `UserContext` に、以下の方法でユーザ情報を設定することが可能です。
    - JWT トークン
      - JWT トークンのペイロードを元にアクセスコントロールを行います。
      - 認証基盤に設定されている権限情報をそのまま利用して、アクセスコントロールを行いたい場合に便利です。
    - ユーザ ID とグループ名
      - ユーザ ID とグループ名を直接 Query に設定して、アクセスコントロールを行います。
      - JWT トークンを利用できない場合、認証基盤とは異なる情報でアクセスコントロールを行いたい場合に便利です。
    - DataSourceGroup
      - [PutPrincipalMapping](https://docs.aws.amazon.com/ja_jp/kendra/latest/APIReference/API_PutPrincipalMapping.html) の機能を使って、Kendra 用に所属グループの設定を行うことが可能です。
        - 組織構造が複雑な場合や、アクセスコントロールの要件が複雑な場合に便利です。
        - 設定ファイルを用いた管理も可能です。
- ユーザ属性フィルタリング
  - [Query](https://docs.aws.amazon.com/ja_jp/kendra/latest/dg/API_Query.html) の `AttributeFilter` を設定することで、メタデータによるフィルタリングを行うことが可能です。
    - `AccessControlList` で「許可」しているユーザは `_user_id`、「許可」しているグループは `_group_ids` という属性でマッピングされています。
    - `_user_id` と `_group_ids` をフィルタリングの条件として利用することで、「許可」されたドキュメントのみ検索対象に含めることが可能になります。
    - **条件式によっては、`AccessControlList` が未設定のドキュメントが検索できないのでご注意ください。**

参考：[ユーザーコンテキストでのフィルタリング](https://docs.aws.amazon.com/ja_jp/kendra/latest/dg/user-context-filter.html)

## 認証・認可について

前項で説明した通り、各種認証サービスの発行した JWT トークンを利用してアクセスコントロールを実現することが可能です。この機能は、Kendra 自体のアクセス制限を行うのではなく、ドキュメントの検索可否を制御するだけなのでご注意ください。

今回は [Amazon Cognito](https://aws.amazon.com/jp/cognito/) (以降、Cognito) を利用した認証について解説を行います。  
[simple-lex-kendra-jp](https://github.com/aws-samples/simple-lex-kendra-jp/) リポジトリの `SimpleKendraAuth` のスタックはここで紹介する Cognito を利用する方法で実装をしています。  
Kendra のトークンを使ったアクセスコントロールについては、[こちらのドキュメント (Controlling access to documents in an index)](https://docs.aws.amazon.com/kendra/latest/dg/create-index-access-control.html) をご覧ください。

### Kendra の JWT トークン設定の要否

前項でも説明した通り、JWT トークンを利用しても Kendra 自体のアクセス制限を行うことはできません。すべてのファイルに `AccessControlList` を設定していれば、未認証ユーザが検索してもドキュメントは 1 件もヒットしませんが、Kendra への Query 発行はできます。

未認証ユーザの Kendra へのアクセス自体を制限したい場合は、[API Gateway の Cognito オーソライザー](https://docs.aws.amazon.com/ja_jp/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html)等を利用して Query を発行する前に、アクセスをブロックする仕組みにする必要があります。[simple-lex-kendra-jp](https://github.com/aws-samples/simple-lex-kendra-jp/) の「Amazon Kendra Auth プロジェクト」に、こちらの実装サンプルがあるので合わせてご確認ください。

#### パターン別の対応方法

構築するシステムの要件によって、さまざまな Kendra の設定パターンがありますので、よくあるパターン別に対応方法をご紹介します。  
**こちらは、IAM や [VPC](https://docs.aws.amazon.com/ja_jp/kendra/latest/dg/vpc-interface-endpoints.html) の設定が正しくできており、 Kendra へ直接 Query が発行できない状態になっていることを前提としています。**  
**注意：Kendra のアクセスコントロールでは、 S3 バケット自体のアクセス制限はできません。S3 バケットの権限設定は適切に行ってください。**

- 認証ユーザのみ Kendra のアクセスを許可したい
  - 共通
    - API Gateway 等で未認証ユーザをブロックしてください。
  - JWT トークンの情報でドキュメントのアクセスコントロールを実施したい
    - Index に JWT トークンの設定し、Query 発行時に JWT トークンをセットしてください。
  - Kendra 独自のユーザ・グループの定義でドキュメントのアクセスコントロールを実施したい
    - Index に JWT トークンの設定は不要です。
    - Query 発行時に、ユーザ ID・グループ ID または、DataSourceGroup をセットしてください。
      - JWT トークンのペイロードの情報を元に、ユーザ ID・グループ ID または、DataSourceGroup をセットする方法も考えられます。
      - APIGateway + Lambda の構成だと、認証に利用した JWT トークンのペイロードを簡単に取得できます (`event.requestContext.authorizer` でペイロードが取得できます [[参考]](https://docs.aws.amazon.com/ja_jp/apigateway/latest/developerguide/http-api-jwt-authorizer.html))。
  - ドキュメントのアクセスコントロールを実施しない
    - Index に JWT トークンの設定は不要です。
    - ドキュメントに `AccessControlList` を設定しないでください。
    - Query 発行時にユーザコンテキストとユーザ属性フィルタリングの設定をしないでください。
- 未認証ユーザも Kendra のアクセスを許可したい
  - ドキュメントのアクセスコントロールを実施したい
    - 未認証ユーザに公開したくないドキュメント**すべて**に `AccessControlList` を設定してください。
    - 非公開ドキュメントを参照できるユーザは認証を必須としてください。
      - 対応方法は「認証ユーザのみ Kendra のアクセスを許可したい」と同様です。
    - `AccessControlList` が設定されていないドキュメントは、未認証ユーザでもアクセス可能となります。
      - 未認証ユーザの場合は、Query 発行時にユーザコンテキストとユーザ属性フィルタリングの設定をしないでください。
  - ドキュメントのアクセスコントロールを実施しない
    - Index に JWT トークンの設定は不要です。
    - ドキュメントに `AccessControlList` を設定しないでください。
    - Query 発行時にユーザコンテキストとユーザ属性フィルタリングの設定をしないでください。

### Kendra の JWT トークンの設定方法

#### Index の設定

JWT トークンを利用したアクセス制限を行う際は、Kendra の Index に対して設定を行う必要があります。

Index 設定画面の「Configure user access control (ユーザアクセスコントロールの設定)」の中に「Token configuration（トークン設定）」という項目があり、そこで設定を行うことができます。  
Coginito を利用する場合は、「Token Type」で「OpenID」を選択してください。  
JWT トークンの正当性を検証するための「Signing key URL」を設定する必要がありますが、Cognito を利用する場合は以下を設定してください。([参考](https://docs.aws.amazon.com/ja_jp/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html))

```text
https://cognito-idp.<Region>.amazonaws.com/<userPoolId>/.well-known/jwks.json
```

#### ユーザ名とグループ名について

Kendra では、ユーザ名とグループ名でアクセスコントロールを行うことができますが、JWT トークンのペイロードの中のどの項目でアクセスコントロールを行うかを設定できます。  
たとえば、「Username」に `email` を設定すればメールアドレスでアクセスコントロールが可能ですし、それ以外のカスタム属性を指定することも可能です。  
「Groups」に `cognito:groups` を設定することで、Cognito ユーザグループでアクセスコントロールを行うことが可能です。  
参考：[ユーザプール属性](https://docs.aws.amazon.com/ja_jp/cognito/latest/developerguide/user-pool-settings-attributes.html)  
参考：[ユーザプルにグループを追加する](https://docs.aws.amazon.com/ja_jp/cognito/latest/developerguide/cognito-user-pools-user-groups.html)  
参考：[ID トークンのペイロード](https://docs.aws.amazon.com/ja_jp/cognito/latest/developerguide/amazon-cognito-user-pools-using-the-id-token.html)

#### Kendra の Query 実行

Query のオプションである `--user-context` に `Token` という項目があるので、そちらに Cognito から発行された JWT トークンを設定してください。JWT トークンの検証および、ドキュメントのアクセスコントロールが実施されます。  
参考：[AWS CLI Referense kendra qurey](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/kendra/query.html)

Cognito には、アクセストークンと ID トークンの 2 種類の JWT トークンがあります。  
Kendra の Query では、どちらのトークンも利用することが可能ですが、認証されたユーザの属性（アイデンティティ）を利用することが主な目的ですので、ID トークンを利用する方が適切です。

## さいごに

以上が、Kendra のアクセスコントロールを行う方法でした。  
適切にアクセスコントロールを行うことで、より安全に、より便利に Kendra を利用できるようになります。  
気になる方は、[simple-lex-kendra-jp](https://github.com/aws-samples/simple-lex-kendra-jp/) のリポジトリで気軽にお試し可能ですので、ぜひお試しください。  
バグや要望がございましたら、気軽に Issue を起票していただければ幸いです！
