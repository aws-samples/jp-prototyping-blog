import React from 'react';
import Info from '@theme-original/BlogPostItem/Header/Info';
import { useLocation } from '@docusaurus/router';
import ShareButtons from '../../../../components/ShareButtons';

export default function InfoWrapper(props) {
  const location = useLocation();

  if (location.pathname === '/jp-prototyping-blog/blog') {
    return (
      <>
        <Info {...props} />
      </>
    );
  } else {
    return (
      <>
        <Info {...props} />
        <ShareButtons />
      </>
    );
  }
}
