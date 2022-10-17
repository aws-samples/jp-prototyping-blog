import React from 'react';
import styles from './index.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function ShareButtons() {
  return (
    <BrowserOnly>
      {() => {
        const twitterScript = document.createElement('script');
        twitterScript.src = 'https://platform.twitter.com/widgets.js';
        twitterScript.charSet = 'utf-8';
        twitterScript.async = 'async';

        const hatenaScript = document.createElement('script');
        hatenaScript.src = 'https://b.st-hatena.com/js/bookmark_button.js';
        hatenaScript.type = 'text/javascript';
        hatenaScript.charSet = 'utf-8';
        hatenaScript.async = 'async';

        document.body.appendChild(twitterScript);
        document.body.appendChild(hatenaScript);

        return (
          <div className={styles.shareButtons}>
            <div className={styles.shareButton}>
              <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false">Tweet</a>
            </div>
            <div className={styles.shareButton}>
              <a href="https://b.hatena.ne.jp/entry/" className="hatena-bookmark-button" data-hatena-bookmark-layout="basic-label" title="このエントリーをはてなブックマークに追加">
                <img src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style={{border: 'none'}} />
              </a>
            </div>
          </div>
        );
      }}
    </BrowserOnly>
  );
}
