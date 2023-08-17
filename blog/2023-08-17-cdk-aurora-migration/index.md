---
title: 'CDK で instanceProps を使った RDS (Aurora) を writer と readers を使った書き方に移行する'
slug: cdk-aurora-migration
tags: [cdk, rds, aurora]
authors: [kudtomoy]
---

AWS CDK の [v2.82.0](https://github.com/aws/aws-cdk/releases/tag/v2.82.0) にて、Aurora Serverless V2 に対応したと同時に、RDS (Aurora) の記述方法が変わりました。

<!-- truncate -->
## v2.81.0 以前の書き方
```
const cluster = new rds.DatabaseCluster(this, 'Database', {
  engine: rds.DatabaseClusterEngine.auroraMysql({
    version: rds.AuroraMysqlEngineVersion.VER_3_03_0,
  }),
  instances: 2,
  instanceProps: {
    instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.SMALL),
    vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },
    vpc,
  },
});
```
v2.18.0 以前はインスタンスの設定に `instances` や `instanceProps` を使っていました。

## v2.82.0 以降の書き方
```
const cluster = new rds.DatabaseCluster(this, 'Database', {
    engine: rds.DatabaseClusterEngine.auroraMysql({
    version: rds.AuroraMysqlEngineVersion.VER_3_03_0,
    }),
    vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },
    vpc,
    writer: rds.ClusterInstance.provisioned('Writer', {
    instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.SMALL),
    }),
    readers: [
    rds.ClusterInstance.provisioned('Reader1', {
        instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.SMALL),
    }),
    ],
});
```

v2.82.0 以降は `instances` と `instanceProps` が Deprecated になり、代わりに `writer` と `readers` を利用することが推奨されています。

## 既存の RDS (Aurora) を移行する手順
`instances` と `instanceProps` を使っていたインスタンスを `writer` と `readers` を使った書き方に移行するため、`isFromLegacyInstanceProps` というオプションが用意されています。
また Coustruct ID も以前のものに合わせる (今回は Instance1-2) 必要があります。

```
const cluster = new rds.DatabaseCluster(this, 'Database', {
    engine: rds.DatabaseClusterEngine.auroraMysql({
    version: rds.AuroraMysqlEngineVersion.VER_3_03_0,
    }),
    vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },
    vpc,
    writer: rds.ClusterInstance.provisioned('Instance1', {
    instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.LARGE),
    isFromLegacyInstanceProps: true,
    }),
    readers: [
    rds.ClusterInstance.provisioned('Instance2', {
        instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.LARGE),
        isFromLegacyInstanceProps: true,
    }),
    ],
});
```

デプロイ前には `cdk diff` を使って差分がないことを確認しましょう。
差分がある場合には以下のように表示され、一度インスタンスが削除されてしまうことが分かります。

```
% cdk diff
Stack SampleStack
Resources
[-] AWS::RDS::DBInstance Database/Instance1 DatabaseInstance1844F58FD destroy
[-] AWS::RDS::DBInstance Database/Instance2 DatabaseInstance2AA380DEE destroy
[+] AWS::RDS::DBInstance Database/Instance1 DatabaseInstance14A23AADF 
[+] AWS::RDS::DBInstance Database/Instance2 DatabaseInstance20B30A4F7 
```

差分がない場合には以下のように表示されます。

```
% cdk diff
Stack SampleStack
There were no differences
```

`isFromLegacyInstanceProps` は CDK v2.89.0 以降で使用できます。

