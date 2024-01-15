---
title: 'Amazon CognitoとXを連携させ、Web3AuthでBlockchainのWalletを作成する'
slug: amazon-cognito-with-x-for-web3auth
tags: [cognito,blockchain,web3auth,wallet]
authors: [fsatsuki,YutaOkoshi]
---

## 現状の課題

NFTの受け取りや暗号資産の授受といったWeb3などのBlockchainを使用したサービスを利用するためにはほとんどの場合Walletが必要となります。Walletを使用するには秘密鍵管理などBlockchainの知識が必要となり、Blockchainに詳しくない人たちにとって技術的にも心理的にもハードルが高く、サービスの利用開始までの障壁が高くなってしまっています。
スタンプラリーなどのイベントでNFTを配りたいと考えても、ターゲット層がBlockchainに詳しくない人たちであるため、ユーザーがWalletを作成して使用するまでの障壁を可能な限り低くすることが重要です。

<!-- truncate -->

## Walletとは

Web3とBlockchainの技術が進化する中、安全かつ効果的な暗号資産取引を実現するためには、ユーザー1人1人が自らの機密データを管理できる仕組みが求められています。その中心に位置するのが、Wallet（ウォレット）と呼ばれるデジタル鍵管理の要素です。Web3Authを含む新しいプロトコルが舞台裏で動いていますが、その中でもWalletが果たす主要な3つの役割に焦点を当ててみましょう。

1. 公開鍵の保管

公開鍵は他のユーザーに暗号資産を送信してもらうために不可欠です。これを保管するのがWalletの最初の役割です。公開鍵はその名の通り公開され、取引相手が送金先を特定できるようになります。
ただし、厳密には公開鍵の末尾20文字がアドレスとして使用されており、公開鍵全体ががブロックチェーンのネットワーク上で公開されているわけではありません。

2. 秘密鍵の保管

秘密鍵は厳重に秘匿されなければなりません。これが他者に知られてしまうと、不正な取引が行われる可能性があります。ユーザーが自身の秘密鍵を保護し、安全に管理できることが求められます。

3. シードフレーズの発行と秘密鍵の復元

シードフレーズは秘密鍵を紛失した場合に備え、秘密鍵を復元するための12, 15, 18, 21もしくは24の英単語のセットです。これも秘密鍵同様に厳重に保管されるべきです。

### Walletの形態

Walletには複数の形態が存在しますが大きく分けて「ホットウォレット」と「コールドウォレット」の２つが存在します。

#### ホットウォレット

ホットウォレットは、インターネットに接続しオンライン上で秘密鍵を管理・保管するウォレットです。リアルタイムで送金が必要なサービスでは利便性が高い一方で、不正アクセスの標的にもなりやすい特性があります。

#### コールドウォレット

一方でコールドウォレットは、インターネットに接続せずに秘密鍵を管理・保管します。秘密鍵がオフラインで保存されるため、漏洩のリスクが低いですが、取引や送金が行われる場合にはパソコンと物理的な紙にメモやハードウェアウォレットなどを利用する必要があります。


## Web3Authとは

[Web3Auth](https://web3auth.io/)は、Walletとアプリケーションのための認証ツールです。
Web3ネイティブユーザーは、Metamask、Phantom、Ledgerなど、お好みのWalletサービスに接続し使用することができますし、Web2ネイティブユーザーはGoogleやTwitterなどのソーシャルアカウントを用いたログインフローを利用することができます。
そのため、Web3Authを利用することで高いセキュリティを維持し、多彩なログイン手段をユーザーに提供しつつ、ユーザーがDappsを使い始める時のオンボーディングが簡単になります。


## 対処方法

Web2でよく使われているアカウントの作成/ログインの方法である "SNSのアカウントを利用したログイン" は広く普及している方法であり、多くのサービスで利用されています。ユーザーがサービスを利用する開始する際のアカウント登録の手間を限りなく低くすることができます。これをWeb3の世界でも応用することができれば、ユーザーのWallet作成の負荷や心理的、技術的なハードルを下げることができるようになります。

Web3Authは [Federated / Identity Providers にAmazon Cognitoを使用する](https://web3auth.io/docs/auth-provider-setup/federated-identity-providers#set-up-aws-cognito-verifier
)ことができます。これを使用することでAmazon Cognitoに登録されたユーザーの情報を使用してWalletを作成することができます。Amazon CognitoはアイデンティティプロバイダーにSNSやSAML, OpenID Connect(OIDC)を使用することができますが、X(旧Twitter)は対応していませんでした。今回実施したプロトタイピングではXのOAuth2.0を使用した「Xでログイン」（または「Xでサインイン」）機能をAmazon Cognitoのアイデンティティプロバイダーと連携するためのProxyを作成しました。OAuth2.0対応後に取得できるCredentialsなどの情報をAmazon CognitoのOIDCを連携させるために、Amazon API GatewayやAWS Lambdaを使用して連携に必要なInterfaceになるように変換させています。

実装したソースコードはGithubの[aws-samples/amazon-cognito-with-x-for-web3auth](https://github.com/aws-samples/amazon-cognito-with-x-for-web3auth) で公開しています。

> このサンプルコードはデモンストレーションのみを目的としており、実稼働環境での使用は強くお勧めしません。本番環境への導入を検討する前に、強固なセキュリティ対策を実施し、例外的なケースを注意深く処理し、徹底的なテストを実施することが不可欠です。ご留意ください。

## アーキテクチャ

![Architecture](./Architecture.png)

Amazon Cognitoの画面からユーザーがログインもしくは新規アカウントの作成を実施すると、"Xでログイン" の画面がポップアップするので、ユーザーがXとの連携を許可します。その際にAPI GatewayとLambdaが動作しており、連携を許可した際のCredentialsがLambdaによって処理され、Amazon ElastiCacheにキャッシュとして記録します。CredentialsはCognitoに返され、Cognitoのuserpoolsに登録され、ユーザー登録が完了します。

OAuth2.0の処理フローについては、[OAuth 2.0 全フローの図解と動画](https://qiita.com/TakahikoKawasaki/items/200951e5b5929f840a1f) が参考になります。

API GatewayとLambdaでは次のようなAPIを実装しています。
|API|用途|
|---|---|
|GET /v2/authorize| Xとの連携を許可する画面をユーザーに表示する|
|POST /v2/token| アクセストークンの発行|
|GET /oauth/callback|Xの連携を許諾するボタンを押した後に実行する|
|GET /v2/userInfo|連携を許可した後にアカウントの情報を取得する。ユーザー名等がここで取得できる|
|GET /.well-known/jwks.json|JSON Web Tokenの有効性を確認するためのエンドポイント. 今回の実装では使用しない。|

Cognito, API Gateway, Lambdaがそれぞれがどのような処理を行うのかについて、詳細なフローを図解したものがこちらです
![](./flow.png)

処理のフローは下記のような４ステップに分かれています。


### Step1

* まず初めにWebappの画面でログインボタンを押下すると、Cognitoのログイン画面に遷移します。ログイン画面では何を使用してアカウントを作成もしくはログインをするかを選択できます。例えばemailでアカウントを作成したり、X(旧Twitter)等を使用することができます。X(旧Twitter)を選択するとAPI Gatewayのエンドポイントが呼び出され次の処理に遷移します。

### Step2

* API GatewayのバックエンドにあるAWS LambdaがX(旧Twitter)のAPIを使用してOauthRequestTokenを生成し、"Xでログインの連携を許可する"画面に遷移します。

### Step3

* ユーザーが連携を許可するボタンを押下すると、Xのアカウント情報を取得するためのCredentialが取得できます。それを使用してXのアカウント情報を取得します。Lambda内部で一時的な認証情報を作成し、Xのアカウント情報と紐付けてAmazon ElastiCacheに保存します。一時的な認証情報がブラウザに返ります。

### Step4

* 一時的な認証情報をCognitoに返すことによって、再びAPI GatewayとLambdaが動作します。一時的な認証情報をアクセストークンに変換され、アクセストークンはElastiCacheに保存されます。アクセストークンをJWTの形式でブラウザに返る。以降はこのJWTを使用することでユーザーの識別を行います。


これらの処理を行うAPI GatewayとLambdaを実装し、Cognitoのアイデンティティプロバイダーとして設定することで、X(旧Twitter)でログインしたアカウントの情報を利用して、Web3のWalletを使用することができるようになります。
具体的な環境構築の方法や、Web3Authの設定は [環境構築手順書](https://github.com/aws-samples/amazon-cognito-with-x-for-web3auth/blob/main/docs/jp/%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89.md) や Web3Authのドキュメントの(Using AWS Cognito with Web3Auth)[https://web3auth.io/docs/content-hub/guides/cognito] を参照してください


## 最後に

このサンプルコードを使用することでWeb3AuthのWalletがXのアカウントで作成できるようになりました。Web2のようにSNSのアカウントでWebアプリケーションにログインができ、すぐにWeb3のWalletが利用できることは、Web3/Blockchain技術に慣れ親しんでいない人たちにもサービスを届けることができることができるため、マスアダプションに向けた1歩として重要な要素となります。

Web3Authについて詳しく知りたい方は[公式サイト](https://web3auth.io/)と[ドキュメント](https://web3auth.io/docs/index.html)を参照してください。
