"use strict";(self.webpackChunk_aws_samples_jp_prototyping_blog=self.webpackChunk_aws_samples_jp_prototyping_blog||[]).push([[8610],{9703:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(5999),r=a(2244);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&n.createElement(r.Z,{permalink:s,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(9460),r=a(4845);function s(e){let{items:t,component:a=r.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},1714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(7294),l=a(6010),r=a(5999),s=a(8824),o=a(1944),c=a(5281),m=a(9960),i=a(9058),g=a(9703),u=a(197),p=a(9985);function h(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function d(e){let{tag:t}=e;const a=h(t);return n.createElement(n.Fragment,null,n.createElement(o.d,{title:a}),n.createElement(u.Z,{tag:"blog_tags_posts"}))}function b(e){let{tag:t,items:a,sidebar:l,listMetadata:s}=e;const o=h(t);return n.createElement(i.Z,{sidebar:l},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,o),n.createElement(m.Z,{href:t.allTagsPath},n.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(p.Z,{items:a}),n.createElement(g.Z,{metadata:s}))}function E(e){return n.createElement(o.FG,{className:(0,l.Z)(c.k.wrapper.blogPages,c.k.page.blogTagPostListPage)},n.createElement(d,e),n.createElement(b,e))}},2436:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294);const l={shareButtons:"shareButtons_axSt",shareButton:"shareButton_a3eR"};var r=a(1262);function s(){return n.createElement(r.Z,null,(()=>{const e=document.createElement("script");e.src="https://platform.twitter.com/widgets.js",e.charSet="utf-8",e.async="async";const t=document.createElement("script");return t.src="https://b.st-hatena.com/js/bookmark_button.js",t.type="text/javascript",t.charSet="utf-8",t.async="async",document.body.appendChild(e),document.body.appendChild(t),n.createElement("div",{className:l.shareButtons},n.createElement("div",{className:l.shareButton},n.createElement("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",className:"twitter-share-button","data-show-count":"false"},"Tweet")),n.createElement("div",{className:l.shareButton},n.createElement("a",{href:"https://b.hatena.ne.jp/entry/",className:"hatena-bookmark-button","data-hatena-bookmark-layout":"basic-label",title:"\u3053\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u3092\u306f\u3066\u306a\u30d6\u30c3\u30af\u30de\u30fc\u30af\u306b\u8ffd\u52a0"},n.createElement("img",{src:"https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png",alt:"\u3053\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u3092\u306f\u3066\u306a\u30d6\u30c3\u30af\u30de\u30fc\u30af\u306b\u8ffd\u52a0",width:"20",height:"20",style:{border:"none"}}))))}))}},4516:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(2046),r=a(6550),s=a(2436);function o(e){const t=(0,r.TH)();return"/blog"===t.pathname||"/blog/"===t.pathname||t.pathname.startsWith("/blog/tags/")?n.createElement(n.Fragment,null,n.createElement(l.Z,e)):n.createElement(n.Fragment,null,n.createElement(l.Z,e),n.createElement("div",{style:{marginTop:".8em"}},n.createElement(s.Z,null)))}},1324:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(7624),r=a(6550),s=a(2436);function o(e){const t=(0,r.TH)();return"/blog"===t.pathname||"/blog/"===t.pathname||t.pathname.startsWith("/blog/tags/")?n.createElement(n.Fragment,null,n.createElement(l.Z,e)):n.createElement(n.Fragment,null,n.createElement(l.Z,e),n.createElement(s.Z,null))}}}]);