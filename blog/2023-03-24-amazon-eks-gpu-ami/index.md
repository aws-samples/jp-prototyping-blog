---
title: '最新の nvidia-driver 対応の Amazon Linux 2 ベースの EKS AMI の作り方'
slug: amazon-eks-gpu-ami
tags: [eks, packer]
authors: [kudtomoy]
---

最新の nvidia-driver (2023年3月時点)をインストールした Amazon Linux 2 ベースの EKS AMI の作り方を紹介します。

<!-- truncate -->
## GPU ワークロード用 EKS AMI を自作する
GPU ワークロードに対応した [Amazon EKS optimized accelerated Amazon Linux AMI](https://docs.aws.amazon.com/ja_jp/eks/latest/userguide/eks-optimized-ami.html) に含まれる `nvidia-driver` の version は2023年3月現在 `470.161.03` であり、ワークロードによってはより新しいドライバが必要になることがあります。

通常の AMI はビルドに必要なスクリプトが [GitHub](https://github.com/awslabs/amazon-eks-ami) に公開されていますが、GPU ワークロード用のものは公開されていません。通常のAMI をベースに最新の `nvidia-driver` をインストールした AMI を作るサンプルを [GitHub](https://github.com/kudtomoy/amazon-eks-gpu-ami) に公開しました。EKS version `1.24` と `1.25` で動作確認を行なっています。`nvidia-driver` は `scripts/setup_gpu.sh` 内で `cuda_12.0.1_525.85.12` をインストールしていますが、必要なバージョンに書き換えてご利用ください。

ビルドの手順としては Linux インスタンスへの [NVIDIA ドライバーのインストール](https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/install-nvidia-driver.html) を参考に `nvidia-driver` など必要なソフトウェアのインストールと設定を行なっています。Amazon Linux 2 の場合は通常の `gcc` ではなく `/usr/bin/gcc10-cc` を使うなど細かいポイントがあるため、一度目を通すことをおすすめします。
