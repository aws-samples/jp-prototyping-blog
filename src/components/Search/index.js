import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Search() {
  return (
    <div className="container">
      <div className={styles.links}>
        <Link to="/blog/tags">
          タグ一覧
        </Link>
      </div>
    </div>
  );
}
