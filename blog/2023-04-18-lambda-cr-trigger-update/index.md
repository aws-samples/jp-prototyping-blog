---
title: "リソース外ソースコードの変更に応じてLambda-backedカスタムリソースの更新をトリガーする"
slug: lambda-cr-trigger-update
tags: [cdk]
authors: [statefb]
---

AWS CloudFormation がサポートしていないリソースやアクションをカスタマイズするために便利な[Lambda-backed カスタムリソース](https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/template-custom-resources-lambda.html)ですが、スタックが直接参照しないコードに変更があり更新をかける場合は一工夫必要となります。本記事ではその方法について CDK の具体的なコード例を交えながら紹介します。

<!-- truncate -->

ここでは具体的に下記のようなケースを想定します。

- カスタムリソースを含む独自の[コンストラクト](https://docs.aws.amazon.com/ja_jp/cdk/v2/guide/constructs.html): `MyConstruct` を作成している
- `MyConstruct`では指定されたフォルダの内容を S3 へアップロードし、リソースのライフサイクルイベント (`Create`・`Update`・`Delete`) をハンドリングする Lambda から上記 S3 オブジェクトを取得し何らかの処理を実行する

```typescript
// 利用側
const myConstruct = new MyConstruct(this, "MyConstruct", {
  path: "/path/to/dir",
});
```

```typescript
// MyConstruct本体の定義

interface MyConstructProps {
  path: string;
}

export class MyConstruct extends Construct {
  constructor(scope: Construct, id: string, props: MyConstructProps) {
    super(scope, id);

    // path内のファイルをS3へデプロイ
    declare const bucket: s3.Bucket;
    new s3deploy.BucketDeployment(this, "S3Deploy", {
      sources: [s3deploy.Source.asset(props.path)],
      destinationBucket: bucket,
    });

    // Lambda-backedプロバイダー
    declare const handler: lambda.Function;
    const provider = new cr.Provider(this, "Provider", {
      onEventHandler: handler,
    });

    // カスタムリソースの定義
    const customResource = new CustomResource(this, `CustomResource`, {
      serviceToken: provider.serviceToken,
    });
  }
}
```

```javascript
// Lambda
// ...略...

async function onUpdate(event) {
  // S3バケットの中身を取得し何らかの処理を行う
}

exports.handler = async function (event) {
  switch (event.RequestType) {
    case "Create":
      response = await onCreate(event);
      break;
    case "Update":
      response = await onUpdate(event);
      break;
    case "Delete":
      response = await onDelete(event);
      break;
  }
  // ...略...
};
```

上記のコードをデプロイした場合、スタックの作成時と削除時には`onCreate`および`onDelete`がコールされますが、指定されたフォルダ（ここでは`/path/to/dir`）内のコードに変更を加えても`onUpdate`は実行されません。[ドキュメント](https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/crpg-ref-requesttypes-update.html)ではカスタムリソースのプロパティに変更があった場合更新がされると記載があるので、ここでは該当フォルダ内のハッシュ値を計算しプロパティに付与する方法で更新をトリガーします。具体的にはたとえば下記のように実装します。

```typescript
export class MyConstruct extends Construct {
  constructor(scope: Construct, id: string, props: MyConstructProps) {
    // ...略...

    // ディレクトリのハッシュを計算
    const hash = calculateDirHash(props.path);

    const customResource = new CustomResource(this, `CustomResource`, {
      serviceToken: provider.serviceToken
      properties: {
        // カスタムリソースはプロパティの値が変更されると更新がトリガーされる
        hash: hash,
      },
    });
  }
}

function calculateDirHashRecursive(dirPath: string, hash: crypto.Hash): void {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isFile()) {
      const stats = fs.statSync(fullPath);
      // ファイルのパス・更新時刻・サイズに基づいてハッシュ値を更新
      hash.update(fullPath + stats.size + stats.mtimeMs);
    } else if (entry.isDirectory()) {
      calculateDirHashRecursive(fullPath, hash);
    }
  }
}

function calculateDirHash(dirPath: string): string {
  const hash = crypto.createHash("sha256");
  calculateDirHashRecursive(dirPath, hash);
  return hash.digest("hex");
}

```

## おわりに

本記事では、AWS CDK を使用して、リソース外のソースコードの変更に応じて Lambda-backed カスタムリソースの更新をトリガーする方法を紹介しました。ディレクトリ内のファイルのハッシュを計算し、カスタムリソースのプロパティとして設定することで、ファイルの変更があった際に自動的にカスタムリソースの更新がトリガーされるようになります。

この方法を利用することで、AWS CloudFormation スタックが直接参照していないコードにも対応した柔軟なインフラ管理が可能になります。今後も AWS CDK や Lambda-backed カスタムリソースを使用して、効率的なインフラ管理を実現していきましょう。
