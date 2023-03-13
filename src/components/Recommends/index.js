import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { usePluginData } from '@docusaurus/useGlobalData';

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
  const recentPosts = usePluginData('get-recent-posts');
  const recommends = recentPosts.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className={styles.recommends}>
      <h1 className={styles.title}>オススメの記事</h1>
      <section className={styles.articles}>
        <div className="container">
          <div className="row">
            {recommends.map((props, idx) => (
              <Recommend key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
