import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const RecommendList = [
  {
    title: '閉域網でサーバレスなアプリケーションを開発する',
    link: '/blog/closed-serverless-app',
  },
  {
    title: 'AWS Samples の Simple NFT Marketplace を触ってみた',
    link: '/blog/simple-nft-marketplace',
  },
  {
    title: 'AWS CDK で静的サイトをデプロイする (CloudFront + S3 + CF2)',
    link: '/blog/cdk-static-website',
  },
];

function Recommend({title, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Link className={styles.link} to={link}>
          <div className={styles.card}>
            <h3>{title}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function Recommends() {
  return (
    <div className={styles.recommends}>
      <h1 className={styles.title}>オススメの記事</h1>
      <section className={styles.articles}>
        <div className="container">
          <div className="row">
            {RecommendList.map((props, idx) => (
              <Recommend key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
