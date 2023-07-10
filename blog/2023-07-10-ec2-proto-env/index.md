---
title: "5分でEC2 + Remote SSH開発環境を構築する"
slug: ec2-proto-env
tags: [ec2, cloudshell]
authors: [statefb]
---

開発環境の構築は慣れている人にとっては手間ではないものの、開発に不慣れな人にとっては躓きがちなポイントの一つとなります。このような場合選択肢の一つとして[Cloud9 を使った方法](https://prototyping-blog.com/blog/cdk-deploy-cloudshell-cloud9)が挙げられますが、チームの方針や好みなどで[Visual Studio Code](https://code.visualstudio.com/) (以降 vscode と呼称) を利用したいケースもあるでしょう。ここでは[Remote SSH](https://code.visualstudio.com/docs/remote/ssh) 用に、プロトタイピング用途でよく利用されるソフトウェアをプリインストールした EC2 インスタンスを手軽に構築する方法について紹介します。

<!-- truncate -->

## 背景

[AWS Cloud9](https://aws.amazon.com/jp/cloud9/)はプロトタイピング用途で頻繁に登場するソフトウェア (AWS CLI v2, Python, Node.js, Docker 等) がプリインストール済みのため、プロトタイプ開発用途に向いていると言えます。一方で何らかの事情により vscode を利用したいケースもあるでしょう。たとえばチーム開発でリンター・フォーマッターを導入しており、チーム共通の vscode プラグインや設定を使いたい場合などのケースが相当します。この場合ローカルに開発環境を作成する選択肢が考えられますが、主に Docker の環境構築に困難を伴うことがあるでしょう。例えば予算など組織的な事情により[Docker Desktop](https://www.docker.com/products/docker-desktop/)が利用できない場合、Windows の場合は WSL2、Mac OS の場合は[lima](https://github.com/lima-vm/lima)や[finch](https://github.com/runfinch/finch)がその代替となり得ますが、開発に不慣れな場合、自力でトラブルシューティングすることが難しい場合があります。このような場合、EC2 (Amazon Linux 2) 上に環境構築し、Remote SSH で開発する選択肢が有効と考えられます。なお Docker は ECS/EKS 以外にも、CDK 開発で頻出のコンストラクタ ([aws-lambda-python-alpha module](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-lambda-python-alpha-readme.html)など) においても利用されるため、導入しておくと便利です。

## 構築手順

1. AWS アカウントを用意します
2. [CloudShell](https://console.aws.amazon.com/cloudshell/home)を開きます
3. CloudShell のプロンプトで下記コマンドを実行します。なお`XX.XX.XX.XX`は接続元の IP アドレスで置換してください

```
git clone https://github.com/aws-samples/ec2-setup-for-prototyping
cd ec2-setup-for-prototyping
./bin.sh XX.XX.XX.XX/32 ProtoEnvStack
```

4. CloudFormation のスタック作成が完了するまで 5 分ほど待機します。完了後、下記の内容が出力されるため適当なエディタなどに控えておきます

```
Copy ssh key from here: ===============================
-----BEGIN RSA PRIVATE KEY-----
...
-----END RSA PRIVATE KEY-----
End of ssh key ===============================

HostPublicIP: YY.YY.YY.YY
```

5. `prototype.pem`などの名前で ssh key ファイルを作成します。作成後、控えた RSA PRIVATE KEY の内容を貼り付けます

6. 作成したファイルのパーミッションを変更します

```
chmod 400 prototype.pem
```

7. ssh コマンドでログインできることを確認します。なお`YY.YY.YY.YY`は 4.で控えた`HostPublicIP`です

```
ssh -i prototype.pem ec2-user@YY.YY.YY.YY
```

8. (optional) インストールされている各ソフトウェアのバージョンを下記コマンドで確認します。

```
docker -v
python3 -V
node -v
```

9. [Remote Development using SSH](https://code.visualstudio.com/docs/remote/ssh)の手順に従って、vscode をセットアップしたら完成です。

実装の詳細は[GitHub](https://github.com/aws-samples/ec2-setup-for-prototyping)を参照ください。

---

本記事では小規模のプロトタイプ用途を想定し EC2 インスタンスを SSH 接続先として構築しましたが、[CodeCatalyst for VS Code](https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/codecatalyst-service.html)をお使いいただくことでも同等のことが実現できます。より大規模でマネージドなプロジェクトを取り扱う場合は CodeCatalyst も検討してみてください。
