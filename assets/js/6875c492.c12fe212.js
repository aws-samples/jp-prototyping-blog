"use strict";(self.webpackChunk_aws_samples_jp_prototyping_blog=self.webpackChunk_aws_samples_jp_prototyping_blog||[]).push([[4813],{7713:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(6540),l=a(1312),r=a(9022);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.A,{permalink:a,title:n.createElement(l.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&n.createElement(r.A,{permalink:s,title:n.createElement(l.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},3892:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(6540),l=a(7131),r=a(1959);function s(e){let{items:t,component:a=r.A}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.i,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},3069:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(6540),l=a(53),r=a(1312),s=a(5846),o=a(1003),c=a(7559),m=a(5489),i=a(6669),g=a(7713),u=a(1463),p=a(3892);function h(e){const t=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,r.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function d(e){let{tag:t}=e;const a=h(t);return n.createElement(n.Fragment,null,n.createElement(o.be,{title:a}),n.createElement(u.A,{tag:"blog_tags_posts"}))}function b(e){let{tag:t,items:a,sidebar:l,listMetadata:s}=e;const o=h(t);return n.createElement(i.A,{sidebar:l},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,o),n.createElement(m.A,{href:t.allTagsPath},n.createElement(r.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(p.A,{items:a}),n.createElement(g.A,{metadata:s}))}function E(e){return n.createElement(o.e3,{className:(0,l.A)(c.G.wrapper.blogPages,c.G.page.blogTagPostListPage)},n.createElement(d,e),n.createElement(b,e))}},8830:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(6540);const l={shareButtons:"shareButtons_axSt",shareButton:"shareButton_a3eR"};var r=a(8478);function s(){return n.createElement(r.A,null,(()=>{const e=document.createElement("script");e.src="https://platform.twitter.com/widgets.js",e.charSet="utf-8",e.async="async";const t=document.createElement("script");return t.src="https://b.st-hatena.com/js/bookmark_button.js",t.type="text/javascript",t.charSet="utf-8",t.async="async",document.body.appendChild(e),document.body.appendChild(t),n.createElement("div",{className:l.shareButtons},n.createElement("div",{className:l.shareButton},n.createElement("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",className:"twitter-share-button","data-show-count":"false"},"Tweet")),n.createElement("div",{className:l.shareButton},n.createElement("a",{href:"https://b.hatena.ne.jp/entry/",className:"hatena-bookmark-button","data-hatena-bookmark-layout":"basic-label",title:"\u3053\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u3092\u306f\u3066\u306a\u30d6\u30c3\u30af\u30de\u30fc\u30af\u306b\u8ffd\u52a0"},n.createElement("img",{src:"https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png",alt:"\u3053\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u3092\u306f\u3066\u306a\u30d6\u30c3\u30af\u30de\u30fc\u30af\u306b\u8ffd\u52a0",width:"20",height:"20",style:{border:"none"}}))))}))}},7455:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(6540),l=a(9283),r=a(6347),s=a(8830);function o(e){const t=(0,r.zy)();return"/blog"===t.pathname||"/blog/"===t.pathname||t.pathname.startsWith("/blog/tags/")?n.createElement(n.Fragment,null,n.createElement(l.A,e)):n.createElement(n.Fragment,null,n.createElement(l.A,e),n.createElement("div",{style:{marginTop:".8em"}},n.createElement(s.A,null)))}},4010:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(6540),l=a(1219),r=a(6347),s=a(8830);function o(e){const t=(0,r.zy)();return"/blog"===t.pathname||"/blog/"===t.pathname||t.pathname.startsWith("/blog/tags/")?n.createElement(n.Fragment,null,n.createElement(l.A,e)):n.createElement(n.Fragment,null,n.createElement(l.A,e),n.createElement(s.A,null))}}}]);