---
title: 'cdk destory しても残ってしまうリソースへの対処法'
slug: clean-cdk-resources
tags: [cdk]
authors: [kudtomoy]
---

CDK で deploy や destroy を繰り返していると、不要なリソースが削除されずに残ってしまうことがあります。この記事ではそれらの `cdk destory` しても残ってしまうリソースへの対処法を説明します。

<!-- truncate -->
## 全てのリソースの RemovalPolicy を DESTROY に設定する
リソースの `RemovalPolicy` が `RETAIN` になっていると、`cdk destory` してもそのリソースは残ります。
開発環境などで全てのリソースに `RemovalPolicy.DESTROY` を付けたい場合は [Aspects](https://docs.aws.amazon.com/cdk/v2/guide/aspects.html) を使うと簡単です。
以下のように使います。

```
export class DeletionPolicySetter implements cdk.IAspect {
    constructor(private readonly policy: cdk.RemovalPolicy) {}
    visit(node: IConstruct): void {
        if (node instanceof cdk.CfnResource) {
            node.applyRemovalPolicy(this.policy);
        }
    }
}

cdk.Aspects.of(myStack).add(new DeletionPolicySetter(cdk.RemovalPolicy.DESTROY));
```

## 中身があると消せないリソースは、中身も消すように設定する
`RemovalPolicy` が `DESTROY` になっていても `cdk destroy` で消えない場合があります。
たとえば S3 Bucket に中身が入っている状態で `cdk destroy` をすると以下のようなエラーで失敗します。

```
x:xx:xx | DELETE_FAILED        | AWS::S3::Bucket       | Bucketxxxx
The bucket you tried to delete is not empty (Service: Amazon S3; Status Code: 409; Error Code: BucketNotEmpty; Request ID: ...)
```

S3 Bucket の場合は `autoDeleteObjects` を設定することで `cdk destory` 時にオブジェクトを含めて削除してくれます。
ECR の `autoDeleteImages` なども同様です。


## すでに Stack が無いのに残っているリソースを削除する
"すでに Stack は削除済みなのに消し忘れたリソースがたくさんある" 状態に対処するために、[Stack に紐づいていないリソースをリストアップ・削除するツール](https://github.com/kudtomoy/clean-orphaned-resources)を作りました。

インストール方法などは README に記載があります。

`list` コマンドを使用すると CloudFormation Stack に紐づいていないリソースの一覧を出力します。
出力されたファイルの一覧を見て、消したくないリソースの行を削除しておきます。
```
$ clean-orphaned-resources list > orphaned_resources.txt
```


その後 `destroy` コマンドを使用することでファイルに書かれているリソースを削除できます。
```
$ clean-orphaned-resources destroy < orphaned_resources.txt
```
