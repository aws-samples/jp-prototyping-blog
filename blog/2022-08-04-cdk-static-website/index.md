---
title: "AWS CDK で静的サイトをデプロイする (CloudFront + S3 + CF2)"
slug: cdk-static-website
tags: [cdk, cloudfront, s3]
authors: [kudtomoy]
---

## はじめに
静的 Web サイトを AWS CDK を使い、CloudFront + S3 の構成でデプロイ方法について説明します。この組み合わせは定番なのでいろいろな所で紹介されていますが、
情報が古くなってしまっているものもあるため2022年8月の時点で良さそうだと思った作り方を紹介します。

CDK アプリのソースコード全体は [GitHub](https://github.com/kudtomoy/aws-cdk-samples/tree/main/static-website) で公開しています。この記事では、今回の CDK アプリの書き方のポイントや理由について説明していきます。

<!-- truncate -->

使用した Node.js と CDK のバージョンは以下になります:
```bash
$ node --version
v16.14.0

$ cdk --version
2.28.1 (build d035432)
```

## ホストゾーンと証明書の情報を Parameter Store から取得する
```typescript
    const recordName = ssm.StringParameter.valueFromLookup(
      this,
      '/static-website/record-name'
    )
    const domainName = ssm.StringParameter.valueFromLookup(
      this,
      '/static-website/domain-name'
    )
    const certificateArn = ssm.StringParameter.valueFromLookup(
      this,
      '/static-website/certificate-arn'
    )
```

AWS マネジメントコンソール上で Amazon Route53 のホストゾーンと AWS Certificate Manager (ACM) の証明書をあらかじめ作成しておき、それらの情報を AWS Systems Manager の Parameter Store に保存して、テンプレート生成時に読み込んでいます。

今回 CDK でホストゾーンや証明書を管理しなかった理由は以下です:
- ドメインの取得や移管には手作業が発生するし、何度も繰り返す作業ではない
- Amazon CloudFront で ACM の証明書を使用するには証明書が `us-east-1` リージョンで発行されている必要があり、クロススタック参照になって手間が増える

ACM も CDK で管理したい場合は [AWS CDK（cdk-remote-stack）でACMとCloudFrontのクロスリージョン参照を実装する](https://dev.classmethod.jp/articles/cdk-remote-stack-for-acm-and-cloudfront/) の記事が参考になると思います。

また ARN 等をソースコードに書きたくなかったので Parameter Store を利用しましたが、ここはお好みでベタ書きしたり、CDK の Context を利用するなどしても良いと思います。Parameter Store を利用する場合は AWS CLI で以下のように値を保存します。

```bash
aws ssm put-parameter --type 'String' --name '/static-website/record-name' --value 'sample.com'
aws ssm put-parameter --type 'String' --name '/static-website/domain-name' --value 'sample.com'
aws ssm put-parameter --type 'String' --name '/static-website/certificate-arn' --value 'arn:aws:acm:us-east-1:xxxx:certificate/xxxx'
```


## S3 Origin + Origin Access Identity を使用する
```typescript
    const bucket = new s3.Bucket(this, 'Bucket', {
      autoDeleteObjects: true,
      removalPolicy: RemovalPolicy.DESTROY,
    })

    const originAccessIdentity = new cloudfront.OriginAccessIdentity(
      this,
      'OriginAccessIdentity'
    )

    const bucketPolicyStatement = new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      effect: iam.Effect.ALLOW,
      principals: [
        new iam.CanonicalUserPrincipal(
          originAccessIdentity.cloudFrontOriginAccessIdentityS3CanonicalUserId
        ),
      ],
      resources: [`${bucket.bucketArn}/*`],
    })

    bucket.addToResourcePolicy(bucketPolicyStatement)
```
CloudFront 経由 で Amazon S3 のデータを配信する方法は2種類あります:

1. CloudFront のオリジンに S3 バケットそのものを指定する
2. CloudFront のオリジンに S3 バケットの Static website hosting のエンドポイントを指定する

今回は S3 に直接アクセスされたくなかったので Static website hosting を有効にせず、Origin Access Identity(OAI) を作成して CloudFront からのみアクセスできる1の構成にしました。

この場合、デフォルトルートオブジェクトのファイル名 (`index.html`) をディストリビューションで指定しているオリジンのルートにしか設定できません。たとえば `https://sample.com/posts/` にアクセスすると `https://sample.com/posts/index.html` は表示されずに403エラーになります。この問題は次の CloudFront Functions で解決します。

## CloudFront Functions でファイル名を含まない URL に対応する
```typescript
    const rewriteUrlFunction = new cloudfront.Function(
      this,
      'RewriteUrlFunction',
      {
        functionName: 'rewrite-url',
        code: cloudfront.FunctionCode.fromFile({
          filePath: 'functions/rewrite-url/index.js',
        }),
      }
    )
```

`functions/rewrite-url/index.js` は [公式ドキュメント](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/example-function-add-index.html) のコードをそのまま使用しています:
```js
function handler(event) {
    var request = event.request;
    var uri = request.uri;

    // Check whether the URI is missing a file name.
    if (uri.endsWith('/')) {
        request.uri += 'index.html';
    }
    // Check whether the URI is missing a file extension.
    else if (!uri.includes('.')) {
        request.uri += '/index.html';
    }

    return request;
}

```

ファイル名を含まない URL でアクセスされた時に `index.html` を返せるように CloudFront Functions (CF2) を設定します。CF2 は GA が比較的最近 (2021年5月) だったこともあり、同じことを Lambda@Edge でやっている例がよく紹介されています。 1回あたりの呼び出しは CF2 の方が安くレイテンシも小さいですが、Lambda@Edge は CloudFront のキャッシュにヒットしなかった場合のみ実行できるという利点があり、このあたりの選択はお好みだと思います。

Lambda@Edge を利用する場合は Lambda を `us-east-1` にデプロイする必要があり、CDK でやろうとするとクロススタック参照をする必要があります。この場合は Experimental ではありますが [EdgeFunction](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_cloudfront.experimental.EdgeFunction.html) を使うとかんたんに書くことができます。

## CloudFrontWebDistribution ではなく Distribution API を使用する
```typescript
    const distribution = new cloudfront.Distribution(this, 'Distribution', {
      defaultRootObject: 'index.html',
      defaultBehavior: {
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        origin: new cloudfrontOrigins.S3Origin(bucket, {
          originAccessIdentity,
        }),
        functionAssociations: [
          {
            eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
            function: rewriteUrlFunction,
          },
        ],
      },
      priceClass: cloudfront.PriceClass.PRICE_CLASS_200,
      certificate: acm.Certificate.fromCertificateArn(
        this,
        'Certificate',
        Lazy.string({ produce: () => certificateArn })
      ),
      domainNames: [recordName],
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
    })
```

CDK で CloudFront の Distribution を作成する高レベル Constructs は `CloudFrontWebDistribution` と `Distribution` の2つが用意されていますが、`Distribution` の方が新しく、[ドキュメント](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_cloudfront-readme.html)でもこちらの使用が推奨されています。

> The CloudFrontWebDistribution construct is the original construct written for working with CloudFront distributions. Users are encouraged to use the newer Distribution instead, as it has a simpler interface and receives new features faster.

他に、`priceClass` は日本のエッジロケーションを使用したいので `PRICE_CLASS_200` としています。また `certificateArn` を渡すのに `Lazy` を使用しているのは [Issue#8699](https://github.com/aws/aws-cdk/issues/8699) に対応するためです。

## BucketDeployment を使ってファイルを S3 にアップロードする
```typescript
    new s3Deployment.BucketDeployment(this, 'BucketDeployment', {
      sources: [
        s3Deployment.Source.asset(path.resolve(__dirname, '../web/public')),
      ],
      destinationBucket: bucket,
      distribution: distribution,
      distributionPaths: ['/*'],
    })
```
[BucketDeployment](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_s3_deployment.BucketDeployment.html) はローカルのファイルをS3バケットにデプロイします。また、先ほど作成した `Distribution` がこのバケットを Origin とするように設定しています。`../web/public` はデプロイしたいファイルがある場所に合わせて修正して下さい。

## IPv4 と IPv6 両方に対応する
```typescript
    const hostedZone = route53.HostedZone.fromLookup(this, 'HostedZone', {
      domainName,
    })

    const propsForRoute53Records = {
      zone: hostedZone,
      recordName,
      target: route53.RecordTarget.fromAlias(
        new route53Targets.CloudFrontTarget(destribution)
      ),
    }

    new route53.ARecord(this, 'ARecord', propsForRoute53Records)
    new route53.AaaaRecord(this, 'AaaaRecord', propsForRoute53Records)
```
A と AAAA の2つのレコードを追加することで、IPv4 と IPv6 両方に対応しています。

## おわりに
本記事では CDK で 静的ウェブサイトをデプロイする方法についてご紹介しました。CloudFront + S3 の組み合わせでファイル名を含まない URL に対応するためには少し工夫が必要になりますが、CDK であれば管理も簡単なのでおすすめです。

## あわせて読みたい
- [CloudFront を使用して、Amazon S3 でホストされた静的ウェブサイトを公開するにはどうすればよいですか?](https://aws.amazon.com/jp/premiumsupport/knowledge-center/cloudfront-serve-static-website/)
- [CloudFront FunctionsはLambda@Edgeより安い。それ本当？！](https://dev.classmethod.jp/articles/sometimes-cf2-price-is-higher-than-lae/)
