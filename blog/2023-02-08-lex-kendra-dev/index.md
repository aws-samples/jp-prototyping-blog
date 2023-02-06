---
title: 'Amazon Lex, Amazon Kendra のサンプルプロジェクト開発で集めた Tips'
slug: lex-kendra-dev
tags: [lex, kendra, cdk]
authors: [taichirs]
---

弊社 Prototyping チームと ML Specialist 合同で作成した [simple-lex-kendra-jp](https://github.com/aws-samples/simple-lex-kendra-jp) というサンプルプロジェクト開発中に集めた Tips を紹介いたします。包括的な内容ではなく、散文的な内容になることをご了承ください。また、Amazon Lex、Amazon Kendra に直接関係のない Tips もあります。

<!-- truncate -->

## simple-lex-kendra-jp について

AWS では "言語" についての ML サービスをいくつか展開していますが、Amazon Lex と Amazon Kendra もそれに属します。Amazon Lex は会話型 AI を使用してチャットボットと音声ボットを構築するサービスで、Amazon Kendra はさまざまなデータソースに存在するドキュメントに対して機械学習を活用してインテリジェントな検索を提供するサービスです。また、Amazon Lex と Amazon Kendra を統合することで、チャットボットから検索が可能になります。

[simple-lex-kendra-jp](https://github.com/aws-samples/simple-lex-kendra-jp) は日本のユーザーに最適化した Amazon Lex と Amazon Kendra のサンプルプロジェクトです。ドキュメントが日本語であることももちろんのこと、内容も日本のユーザーに向けて最適化されています。このサンプルプロジェクトでは、架空の会社の社内検索システムと社内サポートのチャットボット対応を構築します。

## Tips

では、ここからは開発中に得た Tips をご紹介いたします。

### CDK で Frontend をデプロイする際に環境変数を組み込む方法

そもそも、なぜ CDK で環境変数が必要な Frontend をデプロイする際に考慮が必要なのかというと、ご存知の通り、Frontend はビルドする際に環境変数を組み込むため、ビルド時には必要な環境変数が解決されている必要があるためです。一方で、CDK で Backend と Frontend を同時にデプロイしたい場合 1) Frontend はビルド済みである必要がある (S3 などにアップロードするため) 2) Backend の情報は未解決である (API Endpoint など) の 2 点がコンフリクトしているため、困ってしまうという訳です。一番素直に解決する方法としては、Backend と Frontend の Stack を分けてしまうというものになります。1) Backend をデプロイする 2) 環境変数を設定して Frontend をビルドする 3) ビルドした Frontend をデプロイする、の手順を踏めばデプロイ可能です。ただし、特にサンプルプロジェクトでは手軽さを売りにしたいので、1 Stack でデプロイしたいところです。

simple-lex-kendra-jp では、弊チームメンバーが開発している [deploy-time-build](https://github.com/tmokmss/deploy-time-build) を利用しています。こちらの Construct を使うと、Backend のリソースが未解決な状態でも Frontend の環境変数として設定できるため、1 Stack でデプロイできます。仕組みとしては、CDK の CustomResource を使い、Lambda 関数内で Frontend をビルドしています。こうすることで、1 Stack 内で前述した (1) ~ (3) の手順が再現されています。

他にも方法はあって、それぞれの Pros/Cons は [deploy-time-build の README.md](https://github.com/tmokmss/deploy-time-build) に記載されているので、ぜひご覧ください。

### npm workspace 使ってみた

本プロジェクトは CDK、Amazon Lex の Frontend、Amazon Kendra の Frontend と 3 つの TypeScript のプロジェクトを内包しているわけですが、このような場合、npm の workspace 機能が便利です。npm workspace は npm の 7.x.x から導入された機能で、複数の npm プロジェクトを内包しているモノリシックなプロジェクトのパッケージ管理を便利に行ってくれるものです。例えば、Backend と Frontend で共通で利用するモジュールを切り出すことで、特別な指定をすることなく、Backend と Frontend からその共通モジュールを import できます。今回はパッケージが相互に参照することはなかったため、そのような機能は使っていないのですが、ディレクトリを移動しながら npm コマンドを実行する必要がないため、それだけで十分便利でした。

npm workspace 機能を使う場合は、以下のように package.json に workspaces を定義します。(`cdk`、`web-kendra`、`web-lexv2` という 3 つの npm パッケージを内包したプロジェクトの例)

```json
{
  ...省略...
  "workspaces": [
    "cdk",
    "web-kendra",
    "web-lexv2"
  ]
}
```

続いて、具体的に使ったコマンドを書きます。

以下のコマンドで、全てのワークスペースの依存パッケージをインストールしました。
```bash
# --workspaces は -ws でも可
npm install --workspaces
```

Workspace を指定しつつ、`npm exec` を実行しました。なお、`npm exec` が workspace 対応したのは [v7.7.0](https://github.com/npm/cli/releases/tag/v7.7.0) からのようですので、使用バージョンにご留意ください。
```bash
# workspace=cdk を指定しつつ、cdk コマンドを実行している
npm exec -w cdk -- cdk deploy SimpleKendraStack
```

Workspace を指定しつつ、`npm run` を実行しました。なお、`npm run` も workspace 対応したのは [v7.7.0](https://github.com/npm/cli/releases/tag/v7.7.0) からのようですので、workspace 機能を使う場合は v7.7.0 以降の npm を利用するのがよさそうですね。
```bash
npm run start -w web-kendra
```

### Amazon Lex の Bot バージョンを CDK で自動インクリメントする

Amazon Lex では、複数の Bot のバージョンを作成し、Alias を特定のバージョンに向けることで Bot を利用します。そのため、Bot、Bot Version、Bot Alias の 3 つを作成する必要があります。開発中、あるいは、本番運用フェーズにおいても、常に最新の Bot を指す Bot Version が必要になるケースがほとんどだと思います。その際、ただ CDK で Bot Version を作成しただけでは、Bot の内容が変更されたとしても、Bot Version 自体には変更が入っていないため、最新に向いていると思っている Bot Version が古い Bot を示す場合があります。

simple-lex-kendra-jp では、このようなことが起こらないように、デプロイするたびに作成しなおす Bot Version を作成しています。(常に最新に向いています。) 具体的にはリソースの Logical ID に自動でインクリメントされる数字を含ませることで、毎回作成しなおすということを行っています。自動でインクリメントする方法は、CloudFormation の Output として現在の Bot Version Number を出力し、次回デプロイ時にその数値 + 1 のバージョンを利用する、ということを行っています。ちなみに、このような用途であれば、単にランダムな Hex 値を Logical ID に入れるという実装でも良いと思います。今回は、特定の Bot Version Number を本番で利用するものとして Fix する、という用途も見据えて数値をインクリメントする実装にしました。(そのような実装はサンプルコードには含まれていません。)

<TODO: コードへのリンク>

### Amazon Lex の nluConfidenceThreshold は高めに設定した方が良い

Amazon Lex では、発話に対してどの Intent を起動するのかの閾値を設定します。CloudFormation 的には nluConfidenceThreshold というプロパティで、Management Console 的には Confidence score threshold というプロパティになります。この閾値は 0.0 ~ 1.0 で設定します。閾値を高くすると、あらかじめ設定した発話パターンに近くないと Intent が起動しないということになります。低くすると、ざっくりとしたものでも Intent で拾えるようになる一方、不正確な Intent がキックされる可能性も高くなります。

この値は運用中にチューニングしていくことにはなるのですが、基本的には高めに設定しておくことをお勧めします。理由としては、それぞれの Cons として以下の 2 点を書きましたが

- 高い場合: あらかじめ設定した発話パターンに近くないと Intent が起動しない
- 低い場合: 不正確な Intent がキックされる可能性が高い

このうち、高い場合の Cons については運用でカバーが可能なためです。具体的には、Amazon Lex の Analytics 機能から Utterances statistics を開き、Missed (対象の Intent がわからなかった発話) を収集して、Slot をチューニングしたり、新しく Intent を追加したりすることが可能なためです。一方、低い場合は、キックされた Intent が不正確だったかどうかを調査するのが、かなり面倒になります。よって、最初に高い数値を設定しおき、徐々に発話パターンを充填させていくという運用をお勧めします。

### Amazon Kendra の Custom Data Source の Attribute には `_source_uri` をつけると良い

基本的には [こちら](https://docs.aws.amazon.com/kendra/latest/dg/data-source-custom.html) の公式ドキュメントに書かれている通りなのですが、Custom Data Source には `_source_uri` の Attribute もつけた方が良いと考えます。(必須な Attributes は `_data_source_id` と `_data_source_sync_job_execution_id` のみです。) 理由としては、他のデータソース (S3 Bucket など) ではソースの URI が設定されていることがほとんどであるため、UI を実装する上で同様に扱えた方が良いと考えるためです。

## まとめ

IdentityProvider と tech knowledge について
