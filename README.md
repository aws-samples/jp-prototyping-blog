# AWS JP Prototyping Blog

[![Website](https://img.shields.io/badge/AWS%20Prototyping%20Blog-Website-blue)](https://aws-samples.github.io/jp-prototyping-blog/)
[![Deploy to GitHub Pages](https://github.com/aws-samples/jp-prototyping-blog/actions/workflows/deploy.yml/badge.svg)](https://github.com/aws-samples/jp-prototyping-blog/actions/workflows/deploy.yml)

AWS JP Prototyping チームが日々の知見を蓄積するブログです。

## ご指摘・ご質問

記事の内容に関するご指摘・ご質問は大歓迎です。[Issue](https://github.com/aws-samples/jp-prototyping-blog/issues) にてお待ちしております。

## 記事の書き方 (Prototyping チーム用)

1. `/blog` ディレクトリに、`YYYY-MM-DD-<slug>` の命名規則でディレクトリを作成してください。`<slug>` は各記事の Identifier に置き換えてください。
1. 作成したディレクトリ内に index.md を作成してください。記事本体を表すファイルです。
1. 記事の先頭には `title` `slug` `tags` `authors` を含んだ Header を追加しください。Header の書き方は既存の記事を参考にしてください。`/blog/authors.yml` に自分の id がない場合は追加してください。
1. 冒頭には概要を記述し、本文との間に `<!-- truncate -->` を追加してください。本文のボリュームが極端に少ない場合は省略しても構いません。`<!-- truncate -->` 以前の内容がリストで並べた際に表示されます。
1. 画像はディレクトリ内に適当な命名で配置し、index.md から参照してください。
1. 書き終わったら Pull Request を作成し、チームにレビューを依頼してください。

## 手元で確認する方法

```bash
npm install
npm start
```

## レビューの依頼

デフォルトではランダムで reviewer がアサインされます。手動でアサインする場合は Pull Request のタイトルに "DNA" (= Do Not Assign) を含めて、手動でアサインしてください。

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
