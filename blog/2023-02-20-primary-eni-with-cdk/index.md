---
title: 'AWS CDK で MAC アドレスと IP アドレスを固定した EC2 インスタンスを作成する'
slug: primary-eni-with-cdk
tags: [cdk, ec2, unity]
authors: [ymhiroki]
---

本記事では AWS CDK を使い、指定したネットワークインターフェイス (ENI) をプライマリネットワークインターフェイス (primary ENI) としてアタッチし、MAC アドレスと IP アドレスを固定した EC2 インスタンスを作成する方法について紹介します。

MAC アドレスや IP アドレスを固定する必要がある場合などに本記事で紹介する方法をご活用ください。

<!-- truncate -->

## EC2 インスタンスと ENI について

primary ENI を指定して起動することで、IP アドレスや MAC アドレスを EC2 インスタンス間で引き継ぐことが可能になります。
EC2 インスタンスでは AWS CLI のコマンドを利用することで ENI を追加 (アタッチ)・削除 (デタッチ) できますが、primary ENI に限っては変更できないことが明記されています ([参考](https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/using-eni.html))。

マネジメントコンソール経由で ENI を指定して起動する方法については他のウェブサイト等でも紹介されていますが、AWS CDK でも実現可能であることを知っていただければと思います。

本記事の最後には Unity Build Server での応用例をサンプルコードとともにご紹介します。

今回使用した Node.js と CDK のバージョンは以下になります:

```sh
$ node --version
v18.13.0

$ cdk --version
2.63.0 (build 7f4e35e)
```

## ENI を AWS CDK で作成する

まず、EC2 インスタンスにアタッチする ENI を AWS CDK で作成します。
既に存在する ENI を利用したい場合、[CloudFormation へのインポート](https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/resource-import-existing-stack.html) や [CloudFormation のインポート](https://docs.aws.amazon.com/ja_jp/cdk/v2/guide/use_cfn_template.html) を参考にし、リソースを CDK 管理下に移行してください。

本記事執筆時点では AWS CDK に ENI の L2 コンストラクトは存在しません。
そこで今回はより CloudFormation に近い L1 コンストラクトの [`ec2.CfnNetworkInterface`](https://docs.aws.amazon.com/cdk/api/v1/docs/@aws-cdk_aws-ec2.CfnNetworkInterface.html) を使って ENI を作成します。
ENI が誤って削除されてしまうことを防止したい場合、必要に応じて削除ポリシーに `Retain` を指定します。

CDK のコードはそれぞれ以下のようになります。(一部抜粋、以下同様)

```typescript
import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { RemovalPolicy } from 'aws-cdk-lib';
```

```typescript
const vpc = new ec2.Vpc(this, 'Vpc', {});
const subnetId = vpc.privateSubnets[0].subnetId;
const eni = new ec2.CfnNetworkInterface(this, 'Eni', {
  subnetId: subnetId,
});
eni.applyRemovalPolicy(RemovalPolicy.RETAIN);
```

## ENI を EC2 インスタンスの primary ENI に指定する

起動テンプレート ([LaunchTemplate](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ec2.LaunchTemplate.html))を利用して EC2 インスタンスを起動するため、CDK で起動テンプレートを作成します。

```typescript
const launchTemplate = new ec2.LaunchTemplate(this, 'LaunchTemplate', {
  instanceType: new ec2.InstanceType('t3.small'),
  machineImage: new ec2.AmazonLinuxImage({
    generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2,
  }),
});
```

起動時にアタッチする ENI を指定するには起動テンプレートの [NetworkInterfaces](https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html#cfn-ec2-launchtemplate-launchtemplatedata-networkinterfaces) を変更すればよいのですが、このプロパティは L2 コンストラクト `ec2.LaunchTemplate` ではサポートされていません。
そこで今回は AWS CDK の [エスケープハッチ](https://docs.aws.amazon.com/ja_jp/cdk/v2/guide/cfn_layer.html) や raw オーバーライドと呼ばれる機能を利用して設定します。

実際のコードは以下のようになります。

```typescript
const cfnLaunchTemplate = launchTemplate.node.findChild('Resource') as ec2.CfnLaunchTemplate;
cfnLaunchTemplate.addPropertyOverride('LaunchTemplateData.NetworkInterfaces', [
  {
    DeviceIndex: 0,
    DeleteOnTermination: false,
    NetworkInterfaceId: eni.ref,
  },
]);
```

起動テンプレートの設定が完了したので、EC2 インスタンスの作成に移ります。
ただし、今回は L2 Construct の　`ec2.Instance` を利用するとプログラムが複雑になってしまいます。
これは `ec2.Instance` では自動的にデプロイするサブネットを設定してくれるのですが、ENI とサブネット ID を同時に指定することはできないという制約があるためです。(実際にデプロイしようとすると `Network interfaces and an instance-level subnet ID may not be specified on the same request (Service: AmazonEC2; Status Code: 400; Error Code: InvalidParameterCombination; ...` といったエラーが返されます)

そこで EC2 インスタンスの L1 Construct である `ec2.CfnInstance` を利用してインスタンスを作成します。コードは以下のようになります。

```typescript
new ec2.CfnInstance(this, 'Instance', {
  launchTemplate: {
  version: launchTemplate.versionNumber,
  launchTemplateId: launchTemplate.launchTemplateId,
  },
});
```

以上で指定したネットワークインターフェイスを primary ENI としてインスタンスを作成できました。

## Unity Build Server での応用例

MAC アドレスの固定が求められる場面の例として、Unity Build Server を AWS 上に構築するケースが挙げられます。
aws-samples に[サンプルコード](https://github.com/aws-samples/unity-build-server-with-aws-cdk) を公開していますので、ご利用のソフトウェアのライセンス条項等をご確認の上、ご活用ください。

## おわりに

本記事では AWS CDK を使い、指定した ENI を primary ENI としてアタッチし、MAC アドレスと IP アドレスを固定した EC2 インスタンスを作成する方法について紹介しました。
これにより EC2 インスタンス間で MAC アドレスや IP アドレスを引き継いで起動できるようになります。
また、Unity Build Server を AWS に構築する場合のサンプルコードについても紹介しました。
