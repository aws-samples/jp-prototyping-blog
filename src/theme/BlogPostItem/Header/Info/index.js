import React from 'react';
import Info from '@theme-original/BlogPostItem/Header/Info';
import { useLocation } from '@docusaurus/router';
import ShareButtons from '../../../../components/ShareButtons';

export default function InfoWrapper(props) {
  const location = useLocation();

  if (location.pathname === '/blog' ||
      location.pathname === '/blog/' ||
      location.pathname.startsWith('/blog/tags/')) {
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
