# AWS JP Prototyping Blog

AWS JP Prototyping チームが日々の知見を蓄積するブログです。

## ご指摘・ご質問

記事の内容に関するご指摘・ご質問は大歓迎です。[Issue](https://github.com/aws-samples/jp-prototyping-blog/issues) にてお待ちしております。

## 記事の書き方 (Prototyping チーム用)

1. `/blog` ディレクトリに、`YYYY-MM-DD-<slug>` の命名規則でディレクトリを作成してください。`<slug>` は各記事の Identifier に置き換えてください。
1. 作成したディレクトリ内に index.md を作成してください。記事本体を表すファイルです。
  1. 記事の先頭には `title` `slug` `tags` `authors` を含んだ Header を追加しください。
    1. Header の書き方は既存の記事を参考にしてください。
    1. `/blog/authors.yml` に自分の id がない場合は追加してください。
  1. 冒頭には記事の概要を記述し、本文との間に `<!-- truncate -->` を追加してください。本文のボリュームが極端に少ない場合は省略しても構いません。
    1. `<!-- truncate -->` 以前の内容がリストで並べた際に表示されます。
  1. 画像はディレクトリ内に適当な命名で配置し、index.md から参照してください。
1. 書き終わったら Pull Request を作成し、チームにレビューを依頼してください。

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
