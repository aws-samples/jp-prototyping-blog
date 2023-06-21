---
title: 'API Loader を使ってプレビューリリースバージョンの AWS Service を SDK から利用する'
slug: preview-service-apiloader
tags: [sdk]
authors: [kuridaik]
---

プレビューリリース段階の AWS Service では、それを利用するための API が AWS SDK に用意されていないことがあります。このような場合、プレビューリリースバージョンの Service API を、API Loader を使い AWS SDK に登録して利用するケースがありますので、その例を紹介します。

**Note:** 本記事で利用する SDK は AWS SDK for JavaScript v2 です。v3 では利用できないためご注意ください

<!-- truncate -->

1. プレビューサービス API のモデルファイルを入手します

   モデルファイルは [こちら](https://github.com/aws-samples/healthlake-imaging-to-dicom-python-module/blob/dc781e327c24fedff9b2794c8e25beecc760386e/example/service-2.json) のような形式の JSON データです。決まった入手方法があるわけではないため詳細は記載できませんが、プレビューサービスを利用する場合はまず必要になるデータです。

```jsonc
{
  "version":"2.0",
  "metadata":{
    "apiVersion":"2023-06-21",
    "endpointPrefix":"preview-service",
    "jsonVersion":"1.1",
    "protocol":"rest-json",
    "serviceFullName":"Amazon Preview Service",
    "serviceId":"Preview Service",
    "signatureVersion":"v4",
    "signingName":"preview-service",
    "uid":"preview-service-2023-06-21"
  },
  "operations":{
    "CreateDatastore":{
      "name":"CreateDatastore",
      "http":{
        "method":"POST",
        "requestUri":"/datastore",
        "responseCode":200
      },
      // ...
```

2. API Loader を使ってモデルデータを読み込み、サービスを定義します

```js
// lib/preview_service.js
const AWS = require('aws-sdk/lib/core')
const Service = AWS.Service
const apiLoader = AWS.apiLoader

apiLoader.services['preview-service'] = {}
AWS.PreviewService = Service.defineService('preview-service', ['2023-06-21'])
Object.defineProperty(apiLoader.services['preview-service'], '2023-06-21', {
  get: function get() {
    const model = require('./preview-service.json')
    model.paginators = {}
    model.waiters = {}
    return model
  },
  enumerable: true,
  configurable: true,
})

module.exports = AWS.PreviewService
```

**Note:** サービスによっては `paginators.json` や `waiters.json` なども提供されています。必要に応じてそれぞれ `model.paginators` や `model.waiters` に指定します

```js
model.paginators = require('./paginators.json').pagination
```

3. あとは定義したサービスを利用するだけです

```js
const PreviewService = require('./lib/preview_service')
const ps = new PreviewService({
  apiVersion: '2023-06-21',
  region: 'us-east-1',

  // 必要に応じてプレビューサービス用のエンドポイントを指定
  endpoint: new AWS.Endpoint('preview.service.endpoint.amazonaws.example.com'),
})

const main = async () => {
  const data = await ps.getData().promise()
  console.log(data)
}

main()
```

**Note:** 定義したサービスにどのような API があるかはプレビューサービスのドキュメントなどから学習できますが、モデルファイルの JSON にも各 API の定義とドキュメントが含まれています。こちらを参照して学習することも可能です
