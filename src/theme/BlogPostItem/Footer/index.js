import React from 'react';
import Footer from '@theme-original/BlogPostItem/Footer';
import { useLocation } from '@docusaurus/router';
import ShareButtons from '../../../components/ShareButtons';

export default function FooterWrapper(props) {
  const location = useLocation();

  if (location.pathname === '/blog' ||
      location.pathname === '/blog/' ||
      location.pathname.startsWith('/blog/tags/')) {
    return (
      <>
        <Footer {...props} />
      </>
    );
  } else {
    return (
      <>
        <Footer {...props} />
        <div style={{marginTop: '.8em'}}>
          <ShareButtons />
        </div>
      </>
    );
  }
}
