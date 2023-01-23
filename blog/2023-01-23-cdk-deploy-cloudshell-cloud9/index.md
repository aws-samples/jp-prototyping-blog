---
title: 'CDK のデプロイ環境を CloudShell と Cloud9 を使い爆速で構築する'
slug: cdk-deploy-cloudshell-cloud9
tags: [cdk, cloudshell, cloud9]
authors: [kuridaik]
---

Prototyping チームでは実装したシステムをお客様にお渡ししますが、お客様の環境は様々です。
お渡しするシステムは CDK を使ったものがほとんどですが、nodejs のインストールや docker のインストールといった事前準備の手順は、お客様の環境によって変わります。

環境ごとの手順を用意するのは大変なので、その対策として、Prototyping チームでは CloudShell と Cloud9 を併用した手段をご提案する場合があります。今回はその手順をご紹介させていただきます。

<!-- truncate -->

## 構築手順

1. AWS Console から AWS CloudShell を起動
2. CloudShell のプロンプトで下記コマンドを実行

```sh
git clone https://github.com/aws-samples/cloud9-setup-for-prototyping
cd cloud9-setup-for-prototyping
./bin/bootstrap
```

3. AWS Console から AWS Cloud9 に移動して `cloud9-for-prototyping` を起動
4. AWS Cloud9 のメニューにある File から `Upload Local Files` を押下
5. CDK プロジェクトのソース zip ファイルを `Drag & drop file here` に投下
6. AWS Cloud9 のターミナルで下記コマンドを実行

```sh
Admin:~/environment $ unzip prototype.zip
Admin:~/environment $ cd prototype/
```

7. プロジェクトのデプロイ方法に従いコマンドを実行

```sh
## 実行例です。プロジェクトによって変化します
Admin:~/environment $ npx cdk deploy --all
```

**Note:** 4-6. の手順で Cloud9 にプロジェクトをアップロードしていますが、もしプロジェクトが GitHub などで公開されている場合はもちろん Cloud9 のターミナルから git コマンドで取得していただいても構いません。

この Cloud9 を利用中は EC2 の利用料金がかかりますが、使用していない場合は一定時間後に自動停止し、料金も発生しなくなります。AWS CLI v2 / Python / Node.js / Docker といった頻繁に利用する依存ソフトウェアも導入済みで、Cloud9 にありがちなメモリ不足も抑えられるように調整されています。

本記事では CDK のデプロイ用途として紹介しましたが、この用途に限らず、クリーンな UNIX 環境を素早く簡単に構築できる手段です。是非お試しください。
