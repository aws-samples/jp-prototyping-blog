---
title: 'AWS Amplify JavaScript ライブラリ v6 がリリースされたので v5 からマイグレーションしてみた'
slug: amplify-v6-migration
tags: [amplify, cognito, react]
authors: [coyanagiaws]
---

11 月 15 日に AWS Amplify JavaScript ライブラリ v6 が[リリースされました](https://aws.amazon.com/jp/about-aws/whats-new/2023/11/aws-amplify-javascript-v6/)。早速 Amplify ライブラリ v5 で開発したコードを v6 にマイグレーションしたので、どのような修正を行ったかを紹介します。

<!-- truncate -->

## AWS Amplify とは

[AWS Amplify](https://aws.amazon.com/jp/amplify/) は AWS でフルスタックアプリケーションを簡単に構築できるフルスタックの開発フレームワークです。`Amplify CLI` や `Amplify Web Hosting`、`Amplify Studio`、`Amplify Libraries` と `Amplify UI Components` といったツールやサービスで構成されていて、全てを利用することも、あるいはユースケースに合わせて一部を利用することもできる柔軟性を備えています。

今回マイグレーションを行ったアプリケーションは React で実装した Single-page Application で、`Amplify Libraries` と `Amplify UI Components` を利用しています。ライブラリの利用用途は主に Cognito との連携と AWS_IAM オーサライザーを設定した API Gateway との連携です。このアプリケーションで利用する Cognito や API Gateway は Amplify CLI を使わず手動でデプロイしているため、フロントエンドのコード内で `Amplify.configure()` を呼んで Cognito インスタンスのユーザープール ID や API エンドポイントをセットしています。これにより、Amplify のライブラリと Cognito や API が連携できるようになります。

## Amplify ライブラリのアップデート

早速アプリケーションに対し、`npm-check-updates` を使ってアップデート可能なライブラリを確認します。下記の通り `aws-amplify` は v5.3.3、`@aws-amplify/ui-react` は v.5.0.4 を利用しています。今回はそれぞれ v6.0.5 と v6.0.3 にアップデートします。

```bash
% npx npm-check-updates
Checking /repo/frontend/package.json
[====================] 14/14 100%

 aws-amplify                         ^5.3.3  →    ^6.0.5
 @aws-amplify/ui-react               ^5.0.4  →    ^6.0.3

% npx npm-check-updates -u
Run npm install to install new versions.

% npm install
added 431 packages, and audited 432 packages in 19s

46 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

アップデート後のソースコードを確認すると、数箇所で TS エラーが見つかりました。その箇所を修正していきます。

## コード修正

### 1. Amplify.configure に渡すデータを修正

発生した TS エラー

```bash
Type '{ identityPoolId: string; region: string; userPoolId: string; userPoolWebClientId: string; }' is not assignable to type 'AuthConfig | undefined'.
  Object literal may only specify known properties, and 'identityPoolId' does not exist in type 'AuthConfig'.ts(2322)
```

```bash
Type '{ endpoints: { name: string; endpoint: string; region: string; }[]; }' is not assignable to type 'APIConfig | undefined'.
  Object literal may only specify known properties, and 'endpoints' does not exist in type 'APIConfig'.ts(2322)
```

修正内容

Amplify.configure で渡すデータ構造がアップデートで変更されています。v6 では `Auth` の下に `Cognito` の階層が増えています。また `userPoolWebClientId` が `userPoolClientId` に変わっています。`API` は `endpoints` から `REST` に変更されていて、v5 で `name` にセットしていた値は v6 ではキーとして設定する必要があります。

v5

```typescript
Amplify.configure({
  Auth: {
    identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
    userPoolId: 'XX-XXXX-X_abcd1234',
    userPoolWebClientId: 'a1b2c3d4e5f6g7h8i9j0k1l2m3',
    region: 'XX-XXXX-X',
  },
  API: {
    endpoints: [
      {
        name: 'restApi',
        endpoint: 'https://1234567890-abcdefgh.amazonaws.com',
        region: 'XX-XXXX-X',
      },
    ],
  },
});
```

v6

```typescript
Amplify.configure({
  Auth: {
    Cognito: {
      identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
      userPoolId: 'XX-XXXX-X_abcd1234',
      userPoolClientId: 'a1b2c3d4e5f6g7h8i9j0k1l2m3',
    },
  },
  API: {
    REST: {
      restApi: {
        endpoint: 'https://1234567890-abcdefgh.amazonaws.com',
        region: 'XX-XXXX-X',
      },
    },
  },
});
```

### 2. API の呼び出し部分を修正

発生した TS エラー

```bash
Module '"aws-amplify"' has no exported member 'API'.ts(2305)
```

修正内容

API Gateway の API の呼び出しの実装は、v5 の場合は `aws-amplify` の `API` を利用していましたが、v6 では代わりに `aws-amplify/api` の `get` や `post` などの関数を利用します。

v5

```typescript
import { API } from 'aws-amplify';

try {
  const response = await API.get('restApi', '/items', {});
  setItems(response);
} catch (error) {
  console.error(JSON.stringify(error));
  if (error instanceof Error) {
    setErrorMessage(error.message);
  }
}
```

v6

```typescript
import { get } from 'aws-amplify/api';

try {
  const restOperation = get({
    apiName: 'restApi',
    path: '/items',
  });
  const response = await restOperation.response;
  const json = await response.body.json();
  setItems(json as Item[]);
} catch (error) {
  console.error(error);
  if (error instanceof Error) {
    setErrorMessage(error.message);
  }
}
```

変更されたのは API(REST) だけではなく、例えば API(GraphQL) の場合は `API` から `client.graphql` に置き換わっています。

v5

```
await API.graphql(graphqlOperation(createTodo, { input: todo }));
```

v6

```
const client = generateClient();

const newTodo = await client.graphql({
  query: createTodo,
  variables: { input: todoDetails }
});
```

他のサービスに関しての変更の詳細は[マイグレーションのページ](https://docs.amplify.aws/react/build-a-backend/troubleshooting/migrate-from-javascript-v5-to-v6/)があるのでそちらを参考にしてください。

### 3. ユーザーの attributes の取得方法を修正

発生した TS エラー

```bash
Property 'attributes' does not exist on type 'AuthUser'.ts(2339)
```

修正内容

email を取得するために user オブジェクトの attributes プロパティを参照していましたが、v6 の user オブジェクトは attributes が存在しないため、専用の fetchUserAttributes という関数を使って取得します。

v5

```typescript
import { useAuthenticator } from '@aws-amplify/ui-react';

const { user, signOut } = useAuthenticator((context) => [context.user]);
conosole.log(user.attributes?.email);
```

v6

```typescript
import { fetchUserAttributes } from 'aws-amplify/auth';

const attributes = await fetchUserAttributes();
console.log(attributes.email ?? '');
```

`aws-amplify/auth` 配下には他にも JWT などセッション情報を取得するための `fetchAuthSession` や、`signIn`、`signOut` などの関数がまとまっています。v5 で `aws-amplify` の `Auth` を利用していた部分は `aws-amplify/auth` への置き換えが必要になりそうです。

### 4. UI コンポーネントのスタイルやクラスに関する変更

上記の修正を加えたところでエラーが消え、画面が表示されるようになりました。

しかしスタイルの崩れやスタイルが当たっていない箇所があるようです。`Amplify UI Components` の [マイグレーションのページ](https://ui.docs.amplify.aws/react/getting-started/migration#migrate-from-5x-to-6x) を参考しながら修正します。

- カラートークンの namespcae が変更されている

`tokens.colors.brand.primary` の `brand` namespace が消え、`tokens.colors.primary` に変更されていました。これに伴い、該当する CSS 変数名からも `brand` が消えているため、この変数を利用していた箇所を修正する必要がありました。

v5

```css
td:first-child {
  color: var(--amplify-colors-brand-primary-80);
}

td:last-child {
  color: var(--amplify-colors-brand-secondary-80);
}
```

v6

```css
td:first-child {
  color: var(--amplify-colors-primary-80);
}

td:last-child {
  color: var(--amplify-colors-secondary-80);
}
```

- コンポーネントのクラス名が変更されている

v6 でいくつかのコンポーネントのクラス名が変更されています。これらのクラス名を override するなどで参照している場合は修正が必要です。本記事のアプリケーションではメニューコンポーネントのスタイル定義に、`amplify-menu-content` クラスを利用しているため、`amplify-menu__content` に変更する必要があります。実際には今後同様の変更が行われても問題が起こらないよう新しいクラスを定義し、そちらでスタイリングを行うように修正しました。

v5

```
.amplify-menu-content {
  ..
}
```

v6

```
.amplify-menu__content {
  ...
}

または

.header-menu { //独自クラス
    ...
}
<Menu className="header-menu" />

```

以上二点の修正を加えることで期待した通りのスタイルが適用されるようになりました。

今回のアプリケーションでは触れていませんが、[Authenticator](https://ui.docs.amplify.aws/react/connected-components/authenticator#step-3-add-the-authenticator)、[Accordion](https://ui.docs.amplify.aws/react/components/accordion)、[Tabs](https://ui.docs.amplify.aws/react/components/tabs) コンポーネントもアップデートにより変更があります。記事の最後に記載したリファレンスからアップデート内容をご確認ください。

## おわりに

本記事では Amplify ライブラリのアップデートに伴う具体的な修正を列挙しました。Amplify ライブラリのアップデートを行う際の参考となれば幸いです。また、PubSub 実装など今回説明していない部分で Amplify ライブラリを利用している場合は、下記のマイグレーションのページを参考にしてください。

- Amplify Libraries - Migrate from Amplify JavaScript v5 to v6

  https://docs.amplify.aws/react/build-a-backend/troubleshooting/migrate-from-javascript-v5-to-v6/

- Amplify UI Components - Migrate from 5.x to 6.x

  https://ui.docs.amplify.aws/react/getting-started/migration#migrate-from-5x-to-6x
