---
title: 'Kendra で S3 ドキュメントのアクセスコントロールを行う方法'
slug: kendra-s3-access-control
tags: [kendra]
authors: [wadabee]
---

[Amazon Kendra](https://aws.amazon.com/jp/kendra/) (以降、Kendra) は、機械学習 (ML) を利用したインテリジェント検索サービスです。  
この記事では、ユーザの権限によって検索ドキュメントのアクセスコントロールを行う方法をご紹介します。  


<!-- truncate -->

本記事で紹介するアクセスコントロールのサンプルコードは、[simple-lex-kendra-jp](https://github.com/aws-samples/simple-lex-kendra-jp/) という GitHub リポジトリで公開しておりますので、合わせてご確認ください。  

## Kendra のアクセスコントロールについて
現状 (2023/05) 、アクセスコントロール機能は Amazon S3 (以降、S3) の Data source connection に限り行うことができます。   
S3 以外でアクセスコントロールを実現したい場合は、Index を分けて IAM を使って制御する実装が一つの案として考えられますが、本記事では S3 ドキュメントに絞ってご紹介します。  

## アクセスコントロールの種類
Amazon S3 ドキュメントのアクセスコントロールは、「メタデータ使う方法」と「設定ファイルを使う方法」の2つがあります。  

* メタデータを使う方法
  * Amazon S3 ドキュメントにはメタデータを設定することができますが、そのメタデータの一つとして `AccessControlList` があります。
  * `AccessControlList` にアクセス条件を設定することで、ファイルごとにアクセスコントロールを行うことができます。
* 設定ファイルを使う方法
  * アクセスコントロール設定用の JSON ファイルを定義することで、一元的にアクセスコントロールを設定することが可能です。 
  * フォルダ単位または、ファイル単位で、アクセスコントロールを行うことができます。 

## メタデータによるアクセスコントロール
メタデータファイルを使用して、S3 ドキュメントに対してメタデータを設定することができます。  
メタデータはアクセスコントロール以外の用途でも利用することが可能で、各属性を設定することにより属性を考慮したドキュメント検索を行うことができる様になります。  
詳細については、[こちらのドキュメント (Amazon S3 document metadata)](https://docs.aws.amazon.com/kendra/latest/dg/s3-metadata.html) をご確認ください。

### アクセスコントロールの定義
メタデータファイルに `AccessControlList` を設定することで、ファイルごとにアクセスコントロールを行うことができます。  
`AccessControlList` は以下の通り設定することが可能です。  
```json
"AccessControlList": [
  {
      "Name": "user name",
      "Type": "GROUP | USER",
      "Access": "ALLOW | DENY"
  }
],
```
* Name: アクセスコントロール対象の ユーザ名 or グループ名 を設定
* Type: ユーザ単位で制御するか、グループ単位で制御するかを設定
* Access: 当該ユーザを「許可」するか「拒否」するかを設定  

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
S3 のデータソースに対して、1 つの設定ファイルを定義することができます。  
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

* メタデータのユースケース
  * メータデータファイルを自動で生成できる仕組みがある場合（大量のファイルに対して手動でファイル作成するのは現実的ではないため）
    * ファイル単位できめ細やかなアクセスコントロールを行いたい場合
    * アクセスコントロール以外の属性も設定して、検索に活かしたい場合
* 設定ファイルのユースケース
  * フォルダ単位でアクセスコントロールを行いたい場合
    * 権限を考慮したフォルダ体系であれば、簡単にアクセスコントロールを実装できます
  * 一元的にアクセスコントロールのルールを管理したい場合

## 認証について
Kendra では、各種認証サービスの発行した JWT トークンを利用してアクセスコントロールを実現することが可能です。  
今回は [Amazon Cognito](https://aws.amazon.com/jp/cognito/) (以降、Cognito) を利用した認証について解説を行います。  
[simple-lex-kendra-jp](https://github.com/aws-samples/simple-lex-kendra-jp/) リポジトリの `SimpleKendraAuth` のスタックはここで紹介する Cognito を利用する方法で実装をしています。  
Kendra のトークンを使ったアクセスコントロールについては、[こちらのドキュメント (Controlling access to documents in an index)](https://docs.aws.amazon.com/kendra/latest/dg/create-index-access-control.html) をご覧ください。

### Kendra の Index の設定
アクセス制限を行う際は、Kendra の Index に対して設定を行う必要があります。  

Index 設定画面の「Configure user access control (ユーザアクセスコントロールの設定)」の中に「Token configuration（トークン設定）」という項目があり、そこで設定を行うことができます。  
Coginito を利用する場合は、「Token Type」で「OpenID」を選択してください。  
JWT トークンの正当性を検証するための「Signing key URL」を設定する必要がありますが、Cognito を利用する場合は以下を設定してください。([参考](https://docs.aws.amazon.com/ja_jp/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html))  
```
https://cognito-idp.<Region>.amazonaws.com/<userPoolId>/.well-known/jwks.json
```

#### ユーザ名とグループ名について
Kendra では、ユーザ名とグループ名でアクセスコントロールを行うことができますが、JWT トークンのペイロードの中のどの項目でアクセスコントロールを行うかを設定することができます。  
例えば、「Username」 に `email` を設定すればメールアドレスでアクセスコントロールが可能ですし、それ以外のカスタム属性を指定することも可能です。  
「Groups」に `cognito:groups` を設定することで、Cognito ユーザグループでアクセスコントロールを行うことが可能です。  
参考：[ユーザプール属性](https://docs.aws.amazon.com/ja_jp/cognito/latest/developerguide/user-pool-settings-attributes.html)  
参考：[ユーザプルにグループを追加する](https://docs.aws.amazon.com/ja_jp/cognito/latest/developerguide/cognito-user-pools-user-groups.html)  
参考：[ID トークンのペイロード](https://docs.aws.amazon.com/ja_jp/cognito/latest/developerguide/amazon-cognito-user-pools-using-the-id-token.html)

### Kendra の Query 実行
Kendra では検索を行う際に Query を実行しますが、Query を実行する際に JWT トークンを設定することでアクセスコントロールを行うことができます。  
Query のオプションである `--user-context` に `Token` という項目があるので、そちらに Cognito から発行された JWT トークンを設定してください。  
参考：[AWS CLI Referense kendra qurey](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/kendra/query.html)

Cognito には、アクセストークンと ID トークンの2種類の JWT トークンがあります。  
Kendra の Query では、どちらのトークンも利用することが可能ですが、認証されたユーザの属性（アイデンティティ）を利用することが主な目的ですので、ID トークンを利用する方が適切です。  

### ゲストユーザの取り扱い
Kendra のユースケースにおいて、「機密情報や個人情報にアクセス可能なユーザ」と「認証不要でライトに使いたいユーザ」を同一アプリで運用したい場合があるかもしれません。  

前項で解説した Query の `Token` を設定せずに実行した場合は、アクセスコントロールが未設定のファイルだけ参照可能になります。  
機密情報や個人情報には「アクセスコントロールを設定する」、それ以外は「アクセスコントロールを設定しない」という設定にすれば、ゲストユーザを含む環境でも安全に運用可能です。  
**注意：Kendra のアクセスコントロールでは、 S3 バケット自体のアクセス制限はできません。S3 バケットの権限設定は適切に行ってください。**

ゲストユーザが不要（利用者全員が認証必須）な場合は、[API Gateway の Cognito オーソライザー](https://docs.aws.amazon.com/ja_jp/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html)等を利用して、API 自体の利用を制限する方がより安全です。

## さいごに
以上が、Kendra のアクセスコントロールを行う方法でした。  
適切にアクセスコントロールを行うことで、より安全に、より便利に Kendra を利用できるようになります。  
気になる方は、[simple-lex-kendra-jp](https://github.com/aws-samples/simple-lex-kendra-jp/) のリポジトリで気軽にお試し可能ですので、ぜひお試しください。  
バグや要望がございましたら、気軽に Issue を起票していただければ幸いです！
