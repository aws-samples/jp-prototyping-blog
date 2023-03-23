---
title: 'Amazon EKS の 複数 Pod 間で GPU を共有する (Time-Slicing 編)'
slug: eks-gpu-time-slicing
tags: [eks, gpu, machine-learning]
authors: [kudtomoy]
---

NVIDIA device plugin の Time-Slicing 機能を使って、Amazon EKS の 複数 Pod 間で GPU を共有する方法について紹介します。

<!-- truncate -->
## はじめに
Amazon EKS で GPU ベースのワークロードを有効化するには [NVIDIA device plugin for Kubernetes](https://github.com/NVIDIA/k8s-device-plugin) をクラスターの DaemonSet として適用する必要があります。手順は [Amazon EKS 最適化 Amazon Linux AMI](https://docs.aws.amazon.com/ja_jp/eks/latest/userguide/eks-optimized-ami.html) に書かれています。

Pod をコンテナに割り当てる際は下記のようにマニフェストの `resources` で使用する GPU数を指定します。
```
apiVersion: v1
kind: Pod
metadata:
  name: nvidia-smi
spec:
  restartPolicy: OnFailure
  containers:
  - name: nvidia-smi
    image: nvidia/cuda:9.2-devel
    args:
    - "nvidia-smi"
    resources:
      limits:
        nvidia.com/gpu: 1
```

ここで指定できる数は整数であるため1つの Pod が1つ以上の GPU を占有することになりますが、実際のワークロードでは1つの GPU に複数の Pod を割り当てたい場合があると思います。

NVIDIA の GPU を複数の Pod で共有する方法として Time-Slicing、Multi-Instance GPU (MIG)、および Multi-Process Service (MPS) 等がありますが、今回は Time-Slicing の設定方法を紹介します。Time-Slicing は MIG や MPS と比較するとオーバーヘッドは大きめですが、GPU を選ばす NVIDIA device plugin で簡単に利用できるメリットがあります。

## 設定方法
NVIDIA device plugin がインストールされていない状態の EKS Cluster を用意してください。次に、下記のような設定ファイルを `nvidia-device-plugin-config.yaml` として保存します。今回の例では1つの GPU を10つに分割しています。

```
version: v1
sharing:
  timeSlicing:
    resources:
      - name: nvidia.com/gpu
        replicas: 10
```

その後、helm で 設定ファイルを指定して NVIDIA device plugin をインストールします。 Time-Slicing は `v0.12.0` 以降の機能なので、それ以降の version を指定します。
```
$ helm repo add nvdp https://nvidia.github.io/k8s-device-plugin
$ helm repo update
$ helm upgrade -i nvdp nvdp/nvidia-device-plugin \
    --namespace nvidia-device-plugin \
    --create-namespace \
    --version 0.13.0 \
    --set-file config.map.config=./nvidia-device-plugin-config.yaml
```

しばらくして DaemonSet がデプロイされると `kubectl` から見える GPU が増えているはずです。
```
$ kubectl describe node | grep nvidia.com/gpu:
  nvidia.com/gpu:              10
  nvidia.com/gpu:              10
```

より詳しい設定例などは、NVIDIA device plugin の [Shared Access to GPUs with CUDA Time-Slicing](https://github.com/NVIDIA/k8s-device-plugin#shared-access-to-gpus-with-cuda-time-slicing) を参照してください。
