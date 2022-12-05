---
title: 'JenkinsのEC2プラグインは2つある'
slug: jenkins-ec2
tags: [jenkins, ec2]
authors: [tmokmss]
---

Jenkins、便利ですよね！ワンストップなCI/CDツールで、オンプレ時代からの愛好家も多いのではないかと思います。
AWSはJenkinsととても相性が良く、最近も[JenkinsのHA構成を実現するブログ](https://aws.amazon.com/blogs/devops/jenkins-high-availability-and-disaster-recovery-on-aws/)が書かれていたり、[AWS関連のプラグインも多数公開](https://plugins.jenkins.io/ui/search?query=aws)されていたりします。

今日はその中でも特に、JenkinsのエージェントノードとしてEC2インスタンスを利用するためのプラグインを紹介します。実はほぼ同じ用途のものが2つあるので、比べてみましょう。

<!-- truncate -->

## 1. [Amazon EC2 プラグイン](https://plugins.jenkins.io/ec2/)
[Documentation](https://plugins.jenkins.io/ec2/) / [GitHub](https://github.com/jenkinsci/ec2-plugin)

JenkinsのMasterノードからEC2 APIを叩き、必要に応じてエージェントノードのEC2インスタンスを起動･維持･終了するプラグインです。
Jenkinsエージェントのセットアップ自体はSSH経由で自動的に行われるので、事前のAMI構築が楽になって良いですね。

より昔からあるプラグインのためユーザー数は多く、また今もしっかりとメンテナンスされているようです。こちらしか知らなかったという方もいるんではないでしょうか。

内部実装としては、ec2:RunInstance APIを直接叩いてインスタンスを起動するなど、プラグインが自身でインスタンスの管理を行う形になります。
このため、EC2の起動に必要な情報をすべてJenkinsに登録する必要があります。このために、設定項目が多めでやや煩雑な印象も受けました。

とはいえ枯れていてユーザー数も多いという点で無難な選択肢ではないかと思います。

## 2. [EC2 Fleet プラグイン](https://plugins.jenkins.io/ec2-fleet/)
[Documentation](https://plugins.jenkins.io/ec2-fleet/) / [GitHub](https://github.com/jenkinsci/ec2-fleet-plugin)

機能的には1と大きな違いはありません。EC2インスタンスの起動･終了やSSHによる自動設定も同様に利用可能です。

大きな違いは、ノードを管理する仕組みとしてAWSマネージドのAuto Scaling Groupを利用していることです。
これにより、プラグイン自体の実装は単純になり、またASGに慣れている人にはより理解しやすい挙動を得られるでしょう。
Allocation strategyなどASGの豊富な機能をそのまま使えるのも魅力です。
[EC2プラグインとのより詳細な比較はこちらにある](https://plugins.jenkins.io/ec2-fleet/#plugin-content-comparison-to-ec2-plugin)ので、ぜひご確認ください。

元々は `github.com/awslabs` 配下の [ec2-spot-jenkins-plugin](https://github.com/awslabs/ec2-spot-jenkins-plugin) というプロジェクトだったようで、AWS公式に提供されていたようです。
コミットログを見る限り、今もAWSやAmazonの開発者が関わっている様子が窺えます。

また、個人的にはEC2の起動設定 (どのAMIやインスタンスタイプを使うかなど) を、ASGやLaunch templateの設定としてAWS側で持つことができるのも良いと思いました。
これにより、AWS CDKやTerraformなど慣れたIaCツールでそれらの設定を記述することができます。
一方すべてJenkins側で管理したい方もいると思うので、ここは好みの問題かもしれません。

注意点として、まだ枯れていないせいか、ドキュメントが一部そのまま動かない点がありました。例えばGroovyスクリプトはそのままではエラーになります。
この辺りをカバーするために後ほど動作するサンプルを公開する予定ですので、そちらもぜひ合わせてご確認ください。

## 私見
2つの大きな違いは、ノードの管理にAWSマネージドなAuto Scaling Groupを使うか、プラグイン自身が管理するかという点です。

個人的には、そのような低レベルな処理はできるだけAWSに寄せたほうがプラグイン自体の開発･メンテナンスは楽になるのではと思います。
楽なものは維持されやすいので、サステイナビリティの面ではEC2 Fleetの方が良いかもしれません。(とはいえユーザー数の差は大きいので今は判断が難しいですが)

一方で、ノードの起動時間などパフォーマンスの面ではEC2プラグインが優れているかもしれません。自前で実装している分、最適化の余地がより大きいためです。
ノード起動時間にシビアな要求がある場合は、こちらに軍配が上がるかもしれません。

この比較をしていて、似たような話を思い出しました。Amazon EKSのノードのスケーリングの仕組みとして、Cluster Autoscaler(CAS) と Karpenter の2つがあるという話です。
前者はASGを利用し、後者は自前実装でEC2インスタンスを管理します。Karpenterの方が性能が良いなどの理由で、最近は[CASより推奨される](https://aws.github.io/aws-eks-best-practices/karpenter/)こともあるようです。
EKSのような汎用基盤ではパフォーマンスが最重要視されるため、ノードをいち早く起動できる後者の選択肢が生まれたのでしょう。

Jenkinsプラグインの場合はCI/CD用のノードを管理することに特化しているため、ノードの起動時間は最優先ではないとも考えられます。
コミュニティが主導するOSSである都合上、プラグイン自体のメンテナンス性や開発容易性にも優先度が置かれることもあるでしょう。
このため、EC2 Fleetプラグインが後発で登場したのではないでしょうか。

JenkinsとEKSのノード管理、似たような話でありながら逆の方向に進化しているのが面白いですね。

## まとめ
JenkinsのEC2プラグインを2つ紹介しました。
特にまだEC2 Fleetプラグインの知名度はやや低いようなので、ぜひこの機会にお試しください！
