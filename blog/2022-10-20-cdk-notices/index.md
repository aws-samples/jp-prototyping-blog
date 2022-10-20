---
title: "CDK の NOTICES についてざっと調べてみた"
slug: cdk-notices
tags: [cdk]
authors: [tbrand]
---

## CDK NOTICES とは?

[ここ](https://github.com/aws/aws-cdk/tree/main/packages/aws-cdk#notices) に説明がありました。

> CDK Notices are important messages regarding security vulnerabilities, regressions, and usage of unsupported versions. Relevant notices appear on every command by default.

`cdk deploy` などのコマンドを実行すると、このようなメッセージがでます。

```
NOTICES

21902   apigateway: Unable to serialize value as aws-cdk-lib.aws_apigateway.IModel

        Overview: Users of CDK in any language other than TS/JS cannot use
                  values that return an instance of a deprecated class.

        Affected versions: framework: >=2.41.0 <=2.43.0

        More information at: https://github.com/aws/aws-cdk/issues/21902


If you don’t want to see a notice anymore, use "cdk acknowledge <id>". For example, "cdk acknowledge 21902".
```

## CDK の NOTICES はいつから出るようになった？

[v2.14.0](https://github.com/aws/aws-cdk/releases/tag/v2.14.0) に入っている[こちらの対応](https://github.com/aws/aws-cdk/pull/18936) で導入されたようです。

## CDK の NOTICES を消すには？

- Affected versions に書かれている通り、CDK のバージョンをアップデートするのが正攻法です。
- CDK のバージョンを都合によってアップデートできない場合、`cdk acknowledge <id>` で消すこともできます。
- CI で実行していて不要な場合などは `--no-notices` で非表示にすることも可能です。
- プロジェクト単位で NOTICES 対応が不要な場合は、cdk.json に `notices: false` を追加することで消すこともできます。

:::tip

ちなみに NOTICES を明示的に表示する `cdk notices` というコマンドがあるのですが、`cdk notices --no-notices` を実行したところ、NOTICES は表示されませんでした。

:::

## 一度消した NOTICES をもう一度出すためには？

CDK の NOTICES は `$HOME/.cdk/cache/notices.json` に状態が保存されているようです。
よって、これまで acknowledge した NOTICES は全てこちらで管理されています。
該当する項目を消すことで、筆者の手元で NOTICES がもう一度表示されることが確認できました。

## 複数のプロジェクトを運用している場合は注意が必要

CDK の NOTICES がユーザー単位で注目されていることに注意が必要です。

例えば、とあるプロジェクトには不要で、とあるプロジェクトには必要な NOTICES があった場合、不用意に `cdk acknowledge` をしてしまうと、必要なプロジェクトでも見えなくなります。
そのようなケースでは、根本原因である CDK のバージョンアップ、`--no-notices` フラグ、cdk.json の `notices: false` で対応するのが良いでしょう。

また、CDK のバージョンアップを行うと NOTICES が見えなくなりますが、実態としては自動的に `cdk acknowledge` されているようです。
つまり複数のプロジェクトに NOTICES がでていても、1 つのプロジェクトで対応すると見えなくなり、対応していないプロジェクトが放置される原因になります。
よって、CDK をアップデートする際は、同時に行うのが良いでしょう。
