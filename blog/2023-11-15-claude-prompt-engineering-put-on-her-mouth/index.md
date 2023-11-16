---
title: 'ClaudeでJSON出力を安定させるコツを一つ紹介します'
slug: claude-prompt-engineering-put-on-her-mouth
tags: [bedrock, prompt engineering, claude]
authors: [tmokmss]
---

Amazon Bedrock上のClaudeをサービスに組み込む場合、安定してJSONを出力させたいと思うことは多いですよね。今日はそのためのコツを一つ紹介します。

<!-- truncate -->

## コツ
プロンプトの最後に `Assistant: {` を渡しましょう。末尾の `{` がポイントです。これにより回答が必ず `{` から始まるようになり、JSON出力が比較的安定化します。

プロンプトの例:

```
Human: 挨拶の文章を考えてください。回答は以下のJSONで返してください。
<example>
{ "greeting": "こんにちは" }
</example>

Assistant: {
```

Assistant側の回答もプロンプトに含められる、Claudeならではの手法ですね。

## 効果の検証
これだけだとホンマか？と思う人もいるでしょうから、簡単な検証を行ってみます。末尾に `{` をつけた場合とつけない場合とで正しいJSONを返せた割合を比較しました。

結果を下表に示します。大きな差があることが見て取れますね。

|       | { をつけた  | { なし  |
|-------|-----|----|
| 正しいJSONの割合 | 100 % | 78 % |


なお、検証の諸条件は以下のとおりです:

* 呼び出し回数: 100回
* temperature: 0.6
* 元のプロンプト:

```
挨拶の文章を考えてください。回答は以下のJSONで返してください。
<example>
{ "greeting": "こんにちは" }
</example>
```

再現のための全コードは[こちらから](https://gist.github.com/tmokmss/4b1bbf04f864372a7d6b78561ff09953)確認できます。

## まとめ
ClaudeでJSON出力を安定化させる一つのコツを紹介しました。この小技を使って、Claudeの能力を最大限に引き出しましょう!

P.S. Claude特有のテクニックはこちらの公式ドキュメントにもまとまっています: [Anthropic の迅速なエンジニアリング リソースのガイド
](https://docs.anthropic.com/claude/docs/guide-to-anthropics-prompt-engineering-resources)。特に[スライド](https://docs.google.com/presentation/d/1tjvAebcEyR8la3EmVwvjC7PHR8gfSrcsGKfTPAaManw/edit#slide=id.g297e9aa6f0f_0_1222)は要確認です！
