---
title: 'Amazon Linux 2023 の EC2 インスタンスから CloudWatch Logs にアプリケーションログを転送する'
slug: ec2-cloudwatchlogs-al2023
tags: [ec2, cloudwatch]
authors: [kuridaik]
---

Amazon Linux 2023 は systemd のバージョンが 252 にアップデートされています。このバージョンでは `StandardOutput` などの出力オプションで `append` プレフィックスが利用できるため、EC2 インスタンス内で動作するアプリケーションのログを手軽に CloudWatch Logs に転送できます。

<!-- truncate -->

1. ログの転送設定ファイルを作成します

   作成先に指定はありませんが後ほど参照するため、ここでは `/home/ec2-user/logtransfer.json` とします。下記例では ログファイル `/var/log/sampleapp.log` を CloudWatch Logs の `/ec2/sampleap/{instance_id}` に書き出します。

```jsonc
{
  "agent": {
    "logfile": "/opt/aws/amazon-cloudwatch-agent/logs/amazon-cloudwatch-agent.log"
  },
  "logs": {
    "log_stream_name": "{instance_id}",
    "force_flush_interval": 1,
    "logs_collected": {
      "files": {
        "collect_list": [
          {
            "file_path": "/var/log/sampleapp.log",
            "log_group_name": "/ec2/sampleapp",
            "log_stream_name": "{instance_id}"
          }
        ]
      }
    }
  }
}
```

2. `amazon-cloudwatch-agent` をインストールして設定ファイルを読み込みます

```sh
sudo dnf install amazon-cloudwatch-agent -y
sudo amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c file:/home/ec2-user/logtransfer.json
```

3. Systemd Unit 定義ファイルを作成して有効化します

```
[Unit]
Description=Sample Application
Requires=cloud-final.service
After=cloud-final.service

[Service]
Type=simple
WorkingDirectory=/var/app
ExecStart=/usr/bin/bash /var/app/sampleapp.sh
Restart=always
RestartSec=1s
LimitNOFILE=65535
TimeoutStopSec=20
StandardOutput=append:/var/log/sampleapp.log
StandardError=append:/var/log/sampleapp.log

[Install]
WantedBy=cloud-init.target
```

```sh
sudo cp sampleapp.service /usr/lib/systemd/system/sampleapp.service
sudo systemctl daemon-reload
sudo systemctl enable sampleapp.service
```

### 注意事項

この仕組みは EC2 インスタンスのログを必ず全て CloudWatch Logs に転送するというものではありません。例えば何らかの要因で強制的なシャットダウンが発生した場合などでは、`force_flush_interval` の間隔を下回るログをロストする可能性があります。また仮にログローテートを設定した場合は、`copytruncate` によるログのロストも考えられます。本記事に記載のログを転送する方法は「ロバストな方法」ではなく「簡単に設定できる方法」とお考えください。
