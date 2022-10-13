import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Search() {
  return (
    <div className={styles.search}>
      <h1 className={styles.title}>記事を探す</h1>
      <div className="container">
        <div className={styles.links}>
          <Link className={styles.tag} to="/search/">
            文字で検索
          </Link>
          <Link className={styles.tag} to="/blog/tags">
            タグ一覧を見る
          </Link>
        </div>
      </div>
    </div>
  );
}
