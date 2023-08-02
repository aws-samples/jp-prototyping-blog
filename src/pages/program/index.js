import React from "react";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./styles.module.css";
import logo from "./logo.png";
import cloudNativeLogo from "./cloud-native.png";
import analyticsLogo from "./analytics.png";
import containerLogo from "./container.png";
import devopsLogo from "./devops.png";

function Hero(props) {
  return (
    <div className={props.className}>
      <header className={styles.hero}>
        <div className={clsx("container padding--none", styles.fullWidth)}>
          <div className="row row--no-gutters">
            <div className="col col--8">
              <div className="padding-vert--lg padding-horiz--xl">
                <h1 className={clsx("padding-vert--lg", styles.title)}>
                  Prototyping Program
                </h1>
                <div className={styles.description}>
                  ビジネスニーズにあわせたプロトタイプを開発することで、お客様のイノベーションを加速する
                </div>
              </div>
            </div>
            <div className="col col--4">
              <div
                className={clsx(
                  "padding-top--lg padding-bottom--sm padding-horiz--xl",
                  styles.imageContainer
                )}
              >
                <img className={styles.logo} src={logo} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

function Overview(props) {
  return (
    <div className={props.className}>
      <div
        className={clsx(
          "container padding-vert--lg padding-horiz--xl",
          styles.fullWidth
        )}
      >
        <p>
          Prototyping Program
          は、実現したいシステムのプロトタイプをお客様に代わって、あるいはお客様と共に
          AWS
          上に開発するプログラムです。プロトタイプを開発することにより、お客様の環境で
          AWS
          サービスがどのように動作するか、より深い洞察や理解を得ることができます。
        </p>

        <p>
          プロトタイピングチームは、あらゆる業界やセグメントで活動しており、サーバーレスやコンテナテクノロジーを活用したモダンなアプリケーション開発から、
          Analytics、AI/ML、IoT、Blockchain、Spatial Computing
          といった革新的なワークロードにまで幅広く対応することが可能です。複数の技術領域や多種多様な
          AWS
          サービスを組み合わせ迅速にプロトタイプを構築することにより、お客様のビジネス課題を解決し、円滑なクラウドの導入を支援します。
        </p>

        <p>
          Prototyping Program はおよそ 1 ヶ月から 2
          ヶ月程度の期間に渡って行われ、お客様が実現したい要件のヒアリング、プロトタイプを構成するアーキテクチャの設計、プロトタイプの開発、プロトタイプの引き渡しといった
          4 つのフェーズに渡って実施されます。
        </p>
      </div>
    </div>
  );
}

function Advantage(props) {
  return (
    <div className={props.className}>
      <div
        className={clsx(
          "container padding-vert--lg padding-horiz--xl",
          styles.fullWidth
        )}
      >
        <div className="row">
          <div className="col">
            <h2>お客様にとっての主な利点</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--6">
            <h3 className="margin-vert--sm">技術的なブロッカーを解決する</h3>
            <p>
              新規性の高い技術領域を採用する場合や、パフォーマンス要件が厳しい場合などの状況下で、プロトタイプを開発して実現性を検証することができます。
            </p>
          </div>
          <div className="col col--6">
            <h3 className="margin-vert--sm">開発ノウハウの拡充</h3>
            <p>
              今後のプロダクション開発に向けた土台を作り、第一歩を踏み出すことに繋がります。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Faq(props) {
  const faq = [
    {
      question:
        "社内メンバーのスキルアップを目的としたプログラムの利用は可能でしょうか？",
      answer:
        "商品化やサービスリリースを目指されることを念頭にご提供できるプログラムで、社内の勉強会や、スキルアップなどを目的としたご利用はできません。ただし、ご提供したプロトタイプが商品化に進められなかった場合も、契約違反になることはありません。",
    },
    {
      question: "プロトタイプはどこまでが開発範囲となるのでしょうか？",
      answer:
        "プロトタイプの開発範囲については、およそ 1 ヶ月から 2 ヶ月の期間で収まる範囲で、担当する Prototyping Engineer とお客様との間で協議の上に決定します。",
    },
    {
      question: "開発したプロトタイプを商用環境で利用可能でしょうか？",
      answer:
        "提供するプロトタイプは、プロダクション環境での利用を想定するものではありません。そのため、プロダクション環境での動作を保証することはできませんPrototyping Program では、品質保証や保守作業は対象外としておりますが、プロトタイピングチームでのコードレビューやセキュリティチェックを実施しております。",
    },
    {
      question:
        "プロトタイプ開発に必要なデータはどのようなものが利用可能でしょうか？",
      answer:
        "インターネットから誰でも取得可能であるなど公開されているデータ、もしくは、フォーマットを揃えたテストデータ (プロダクション環境で実際に利用されているものではないデータ) をもとに、プロトタイプ開発を行うことが可能です。",
    },
    {
      question: "開発するプロトタイプにはどのような内容が含まれますか？",
      answer:
        "内容はプロトタイプの開発要件により異なりますが、AWS のサービスを自動で構築する Infrastructure as Code、AWS 上で動作するアプリケーション、プロトタイプの内容を解説するドキュメントの 3 点が一般的な構成となります。",
    },
  ];

  return (
    <div className={props.className}>
      <div
        className={clsx(
          "container padding-vert--lg padding-horiz--xl",
          styles.fullWidth
        )}
      >
        <div className="row">
          <div className="col">
            <h2>よくある質問</h2>
          </div>
        </div>
        {faq.map(({ question, answer }, i) => (
          <div className="row" key={i}>
            <div className="col">
              <h4>{question}</h4>
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UseCase(props) {
  return (
    <div className={props.className}>
      <div
        className={clsx(
          "container padding-vert--lg padding-horiz--xl",
          styles.fullWidth
        )}
      >
        <div className="row">
          <div className="col">
            <h2>ユースケース例</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--3">
            <div className="card">
              <div className={clsx("padding--md", styles.imageContainer)}>
                <img className={styles.cardImage} src={cloudNativeLogo} />
              </div>
              <div className="card__header">
                <h4>
                  サービスやアプリケーションのクラウドネイティブ化を加速する
                </h4>
              </div>
              <div className="card__body">
                <p>
                  サーバーレスなテクノロジーを活用した API
                  や、モダンなフロントエンドフレームワークを採用した GUI
                  の構築を通して、AWS
                  をフル活用した開発におけるベストプラクティスを学び、マネージドサービスの利用による運用負荷の軽減を図ります。
                </p>
              </div>
            </div>
          </div>
          <div className="col col--3">
            <div className="card">
              <div className={clsx("padding--md", styles.imageContainer)}>
                <img className={styles.cardImage} src={analyticsLogo} />
              </div>
              <div className="card__header">
                <h4>社内のデータ分析基盤をクラウドネイティブに構築する</h4>
              </div>
              <div className="card__body">
                <p>
                  データの加工を行う ETL
                  パイプラインの整備や、蓄積したデータへのクエリを実行する分析基盤を構築することで、データの利活用を推進しビジネスにおけるインサイトに繋げるための土台を構築します。
                </p>
              </div>
            </div>
          </div>
          <div className="col col--3">
            <div className="card">
              <div className={clsx("padding--md", styles.imageContainer)}>
                <img className={styles.cardImage} src={containerLogo} />
              </div>
              <div className="card__header">
                <h4>コンテナ化によりアジリティの高い開発プロセスを実現する</h4>
              </div>
              <div className="card__body">
                <p>
                  マネージドなコンテナサービスの導入や、既存サービスやアプリケーションのコンテナ化するための検証を行うことで、アプリケーション開発の効率化およびリソースの利用効率の最適化を図ります。
                </p>
              </div>
            </div>
          </div>
          <div className="col col--3">
            <div className="card">
              <div className={clsx("padding--md", styles.imageContainer)}>
                <img className={styles.cardImage} src={devopsLogo} />
              </div>
              <div className="card__header">
                <h4>継続的かつ迅速に改善サイクルを回すための環境を整備する</h4>
              </div>
              <div className="card__body">
                <p>
                  CI/CD パイプラインの構築や IaC
                  ツールの導入を支援することで、より迅速に新たな機能や修正をリリースするための基盤を整備します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudy(props) {
  const links = [
    {
      title:
        "エーザイ創薬研究チームがゲノム解析環境のプロトタイピングを爆速で実現してみた",
      link: "https://aws.amazon.com/jp/builders-flash/202307/eisai-omics-prototyping/",
    },
    {
      title:
        "開発期間を2ヶ月短縮。運用工数もほぼゼロに。コンシェルジュ社の Amazon OpenSearch Service 活用",
      link: "https://aws.amazon.com/jp/blogs/startup/tech-interview-conciergeu-2023/",
    },
    {
      title: "株式会社日立製作所 様: AWS 導入事例",
      link: "https://aws.amazon.com/jp/solutions/case-studies/hitachi-serverless/",
    },
    {
      title:
        "【開催報告 & 資料公開】AWS AI/ML Updateと事例紹介 〜AI/ML で解決したいビジネスの課題、AI/ML サービス活用のコツについてご紹介〜",
      link: "https://aws.amazon.com/jp/blogs/news/aws-aiml-jirei-july/",
    },
    {
      title:
        "株式会社ベガコーポレーション 様: GraphQL caching ②AWS Prototyping program を利用した開発",
      link: "https://qiita.com/datahaikuninja/items/e3c5302602c38b6a8b71",
    },
    {
      title:
        "株式会社ファミリーマート 様: クラウド推進組織のつくりかた ～突然クラウド推進担当になった！！～",
      link: "https://pages.awscloud.com/rs/112-TZM-766/images/I3-01.pdf",
    },
    {
      title:
        "JPX総研、AWSの支援のもと日本の金融商品市場のグローバルにおける魅力向上と競争力強化を推進",
      link: "https://www.jpx.co.jp/corporate/news/news-releases/6020/20220823-01.html",
    },
    {
      title:
        "プロトタイピングのススメ ⼿早くサービスを作って検証するための実践的ノウハウ",
      link: "https://pages.awscloud.com/rs/112-TZM-766/images/AWS-12_AWS-Summit-2023_Modern-apps.pdf",
    },
    {
      title:
        "AWS Tech talk Night#1 ～Amazon メカニズムによるイノベーション創出からプロトタイプ開発まで～",
      link: "https://techplay.jp/event/869454",
    },
  ];

  return (
    <div className={props.className}>
      <div
        className={clsx(
          "container padding-vert--lg padding-horiz--xl",
          styles.fullWidth
        )}
      >
        <div className="row">
          <div className="col">
            <h2>過去の事例やブログ投稿</h2>
          </div>
        </div>
        {links.map((_, i) => {
          if (i % 2 == 0) {
            return (
              <div className="row margin-vert--md" key={i}>
                <div className="col col--6">
                  <Link to={links[i].link}>{links[i].title}</Link>
                </div>
                {i + 1 < links.length ? (
                  <div className="col col--6">
                    <Link to={links[i + 1].link}>{links[i + 1].title}</Link>
                  </div>
                ) : (
                  <div className="col col--6"></div>
                )}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

function Program() {
  return (
    <Layout>
      <Head />
      <Hero />
      <main>
        <Overview />
        <UseCase className={styles.bgGray} />
        <Advantage />
        <CaseStudy className={styles.bgGray} />
        <Faq />
      </main>
    </Layout>
  );
}

export default Program;
