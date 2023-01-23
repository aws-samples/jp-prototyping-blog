---
title: "Congito Identity Pools の Unauthenticated Role で Amazon Kendra にアクセスしたら AccessDeniedException だった話"
slug: identity-pool-unauth
tags: [congito, kendra]
authors: [tbrand]
---

フロントエンドから直接 AWS サービスを実行する際に、Cognito の Identity Pools で取得した認証情報を利用することは多々あると思います。この記事では、知らないとハマってしまうかもしれない仕様について、ご紹介いたします。

<!-- truncate -->

## Cognito Identity Pools

認証されたユーザー及びゲストユーザーに一時的な AWS 認証情報を提供するため、Cognito Identity Pools を利用することがあると思います。その認証情報を用いることで、フロントエンドから直接 AWS サービスを呼び出すことが可能です。

詳細な説明は省きますが、例えば、AWS SDK for JavaScript v3 なら以下のように記述することで認証付きのクライアントを作成できます。(`<IDENTITY_POOL_ID>` は適切な値に書き換えが必要)

```javascript
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

const client = new FooClient({
  ...
  credentials: fromCognitoIdentityPool({
    identityPoolId: '<IDENTITY_POOL_ID>',
    ...
  }),
});
```

## Unauthenticated Role

筆者が [Amazon Lex](https://aws.amazon.com/jp/lex/) と [Amazon Kendra](https://aws.amazon.com/jp/kendra/) を使ったサンプルコード [simple-lex-kendra-jp](https://github.com/aws-samples/simple-lex-kendra-jp) を開発するにあたり、Cognito Identity Pools を使って、フロントエンドから直接それらの AWS サービスにアクセスしようと考えていました。ユーザーは全てゲストユーザーです。

Amazon Lex に関しては問題なくアクセスできたのですが、Amazon Kendra にアクセスを試みた際に、以下のような AccessDeniedException が発生してしまいました。

```
An error occurred (AccessDeniedException) when calling the Query operation: User: <省略> is not authorized to perform: kendra:Query on resource: <省略>
```

エラー文からして権限が足りないのかと思い、取り急ぎ AdministratorAccess などを付与して実験したものの、解消しませんでした。
結論として、原因は [Unauthenticated Role の認証情報でアクセスできる AWS サービスに制限がある](https://docs.aws.amazon.com/cognito/latest/developerguide/iam-roles.html#access-policies) ためでした。
この表によると、Amazon Lex や Amazon Transcribe などは呼び出し可能ですが、確かに Amazon Kendra はリストにありません。
最終的に、Amazon Kendra を呼び出すことが可能な API Endpoint を作成することで、これを回避しました。

ちなみに、ゲストユーザーではなく、認証されたユーザーであれば呼び出し可能です。例えば Cognito で認証した場合、ID Token を取得して以下のように設定してください。(`<IDENTITY_POOL_ID>`、`<REGION>`、`<CONGITO_USER_POOL_ID>` と `<ID Token>` は適切な値に書き換えが必要) ([参考](https://docs.aws.amazon.com/ja_jp/sdk-for-javascript/v3/developer-guide/loading-browser-credentials-cognito.html))

```javascript
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

const client = new FooClient({
  ...
  credentials: fromCognitoIdentityPool({
    identityPoolId: '<IDENTITY_POOL_ID>',
    logins: {
      ['cognito-idp.<REGION>.amazonaws.com/<COGNITO_USER_POOL_ID>']: '<ID Token>',
    },
    ...
  }),
});
```

## まとめ
- Cognito Identity Pools の Unauthenticated Role の認証情報ではポリシーに関わらずアクセスできない AWS サービス (例: Amazon Kendra) がある
- その際は API を作成してバックエンドから呼び出すか、要認証とする
