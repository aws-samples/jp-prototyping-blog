---
title: 'React と Amazon Transcribe でストリーミング文字起こしを行う方法'
slug: transcribe-in-react
tags: [react,typescript,transcribe]
authors: [wadabee]
---

[Amazon Transcribe](https://aws.amazon.com/jp/transcribe/) (以降、Transcribe) は、音声をテキストに変換するサービスです。  
SDK を利用したストリーミング文字起こしを行うことで、リアルタイムに文字起こしを行うことができます。  
本記事では、React で実装された Web アプリで Transcribe のストリーミング文字起こし機能を使う際に、Polyfill の設定が必要になるためそれを中心に解説します。  

<!-- truncate -->

本記事のベースとなっているコードは、[こちらの GitHub リポジトリ](https://github.com/wadabee/react-transcribe)で公開していますので、併せてご確認ください。

## ストリーミング文字起こしについて
Transcribe のストリーミング文字起こしは、[@aws-sdk/client-transcribe-streaming](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-transcribe-streaming/) と [microphone-stream](https://github.com/microphone-stream/microphone-stream#readme) を利用することで簡単に実装するできます。  
[@aws-sdk/client-transcribe-streaming](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-transcribe-streaming/) のドキュメントで紹介されているサンプルコードを、ほぼそのまま流用することが可能ですが、Polyfill の設定をしないとエラーが発生し実行することができません。  
この記事では、[@aws-sdk/client-transcribe-streaming](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-transcribe-streaming/) で紹介されているサンプルコードを実装する際のエラー解消方法を解説します。  

また、`webpack` と `Vite` で対応方法が異なるため、それぞれで適切対応を取る必要があります。  
`webpack` と `Vite` それぞれの、Polyfill の設定方法をご紹介します。  

### Polyfill とは
プログラムの解説に入る前に、簡単に Polyfill について解説します。  
Polyfill とは、JavaScript の実行環境の差異を吸収するためのコードのことです。  

JavaScript の実行環境（ブラウザや Node.js など）は多岐にわたるため、実行環境によってはある文法やある機能をサポートしていない場合があります。  
Polyfill はそのサポートしていない文法や機能を実現するためのコードになります（サポートしている古い文法・機能を使って、サポートしていない新しい文法・機能を再現します）。  

利用するライブラリやアプリを動かす実行環境によっては、Polyfill の設定が必要になることがあります。  

### webpack の対応方法
サンプルコードを Polyfill の設定を行わずに実行すると、以下のようなビルドエラーが発生します。  

```bash
BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.
```

こちらは、webpack 5 から Node.js の Polyfill のコードが含まれなくなっているため、上記のエラーが発生しています。  
必要な Polyfill のコードを手動でインストールする必要があります。  
今回は、`buffer` と `process` が必要なので、それぞれインストールします。  

```bash
npm install buffer process
```

これでビルドエラーは解消できますが、Transcribe　を実行すると以下のようなエラーが発生します。  

```bash
index.js:35 Uncaught ReferenceError: Buffer is not defined
    at fromArrayBuffer (index.js:35:1)
    at Object.bufferFrom [as default] (index.js:60:1)
    at ScriptProcessorNode.recorderProcess (microphone-stream.js:108:1)
```

このエラーは、`index.tsx` などに、以下の Polyfill 用のコードを追加することで解消できます。

```tsx
import { Buffer } from "buffer";
import * as process from "process";

window.process = process;
window.Buffer = Buffer;
```

これで、正常に Transcribe の実行ができるようになります。

### Vite の対応方法

`Vite` も `webpack` と同様で、 Polyfill の設定を行わずにサンプルコードを実行すると、エラーが発生します。  

```bash
index.js:37 Uncaught ReferenceError: Buffer is not defined
    at fromArrayBuffer (index.js:37:11)
    at Object.bufferFrom [as default] (index.js:60:12)
    at ScriptProcessorNode.recorderProcess (microphone-stream.js:110:37)
```

`webpack` と同様に、必要な Polyfill のコードをインストールした後に、`main.tsx` などに以下のコードを追記してください。  
ただ、`Vite` では `process` は利用しませんので、こちらは不要です。  

```bash
npm install buffer
```

```tsx
import { Buffer } from "buffer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).Buffer = Buffer;
```

`Vite` の場合は、上記の対応だけでは不十分で、Transcribe を実行すると以下のエラーが発生します。  

```bash
Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'call')
    at MicrophoneStream2.Readable (_stream_readable.js:178:10)
    at new MicrophoneStream2 (microphone-stream.js:46:28)
    at startTranscription (useTranscribe.ts:120:17)
    at HTMLUnknownElement.callCallback2 (react-dom.development.js:4164:14)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:4213:16)
    at invokeGuardedCallback (react-dom.development.js:4277:31)
    at invokeGuardedCallbackAndCatchFirstError (react-dom.development.js:4291:25)
    at executeDispatch (react-dom.development.js:9041:3)
    at processDispatchQueueItemsInOrder (react-dom.development.js:9073:7)
    at processDispatchQueue (react-dom.development.js:9086:5)
```

こちらのエラーは、Node.js の Core Module の Polyfill を行う Vite プラグインを導入することで解消できます。  
プラグインは、[vite-plugin-node-polyfills](<https://github.com/davidmyersdev/vite-plugin-node-polyfills>) を利用します。  
プラグインをインストールしてから、`vite/vite.config.ts` を以下のように修正してください。

```bash
npm install -D vite-plugin-node-polyfills
```

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }),
  ],
});
```

これで、`Vite` でも正常に Transcribe の実行ができるようになります。

## さいごに
以上が、React で Transcribe を使ったストリーミング文字起こしを実装する方法でした。  
[こちらの GitHub リポジトリ](https://github.com/wadabee/react-transcribe)でコードを公開していますので、詳細な実装はこちらでご確認ください。
