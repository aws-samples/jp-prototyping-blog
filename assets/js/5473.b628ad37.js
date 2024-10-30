"use strict";(self.webpackChunk_aws_samples_jp_prototyping_blog=self.webpackChunk_aws_samples_jp_prototyping_blog||[]).push([[5473],{8478:(e,t,a)=>{a.d(t,{A:()=>r});var l=a(6540),n=a(2303);function r(e){let{children:t,fallback:a}=e;return(0,n.A)()?l.createElement(l.Fragment,null,t?.()):a??null}},6669:(e,t,a)=>{a.d(t,{A:()=>h});var l=a(6540),n=a(53),r=a(1402),s=a(4581),o=a(5489),i=a(1312);const m={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function c(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.A)(m.sidebar,"thin-scrollbar"),"aria-label":(0,i.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.A)(m.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.A)(m.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:m.sidebarItem},l.createElement(o.A,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var u=a(5600);function d(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(o.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(u.GX,{component:d,props:e})}function p(e){let{sidebar:t}=e;const a=(0,s.l)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(c,{sidebar:t}):null}function h(e){const{sidebar:t,toc:a,children:s,...o}=e,i=t&&t.items.length>0;return l.createElement(r.A,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(p,{sidebar:t}),l.createElement("main",{className:(0,n.A)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},9283:(e,t,a)=>{a.d(t,{A:()=>p});var l=a(6540),n=a(53),r=a(7131),s=a(1943),o=a(2053),i=a(8168),m=a(1312),c=a(5489);function u(){return l.createElement("b",null,l.createElement(m.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function d(e){const{blogPostTitle:t,...a}=e;return l.createElement(c.A,(0,i.A)({"aria-label":(0,m.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(u,null))}const g={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function p(){const{metadata:e,isBlogPostPage:t}=(0,r.e)(),{tags:a,title:i,editUrl:m,hasTruncateMarker:c}=e,u=!t&&c,p=a.length>0;return p||u||m?l.createElement("footer",{className:(0,n.A)("row docusaurus-mt-lg",t&&g.blogPostFooterDetailsFull)},p&&l.createElement("div",{className:(0,n.A)("col",{"col--9":u})},l.createElement(o.A,{tags:a})),t&&m&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(s.A,{editUrl:m})),u&&l.createElement("div",{className:(0,n.A)("col text--right",{"col--3":p})},l.createElement(d,{blogPostTitle:i,to:e.permalink}))):null}},1219:(e,t,a)=>{a.d(t,{A:()=>d});var l=a(6540),n=a(53),r=a(1312),s=a(5846),o=a(7131);const i={container:"container_mt6G"};function m(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,s.W)();return t=>{const a=Math.ceil(t);return e(a,(0,r.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function c(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function u(){return l.createElement(l.Fragment,null," \xb7 ")}function d(e){let{className:t}=e;const{metadata:a}=(0,o.e)(),{date:r,formattedDate:s,readingTime:d}=a;return l.createElement("div",{className:(0,n.A)(i.container,"margin-vert--md",t)},l.createElement(c,{date:r,formattedDate:s}),void 0!==d&&l.createElement(l.Fragment,null,l.createElement(u,null),l.createElement(m,{readingTime:d})))}},1959:(e,t,a)=>{a.d(t,{A:()=>_});var l=a(6540),n=a(53),r=a(7131),s=a(6025);function o(e){let{children:t,className:a}=e;const{frontMatter:n,assets:o}=(0,r.e)(),{withBaseUrl:i}=(0,s.h)(),m=o.image??n.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&l.createElement("meta",{itemProp:"image",content:i(m,{absolute:!0})}),t)}var i=a(5489);const m={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=(0,r.e)(),{permalink:o,title:c}=a,u=s?"h1":"h2";return l.createElement(u,{className:(0,n.A)(m.title,t),itemProp:"headline"},s?c:l.createElement(i.A,{itemProp:"url",to:o},c))}var u=a(4010);function d(e){return e.href?l.createElement(i.A,e):l.createElement(l.Fragment,null,e.children)}function g(e){let{author:t,className:a}=e;const{name:r,title:s,url:o,imageURL:i,email:m}=t,c=o||m&&`mailto:${m}`||void 0;return l.createElement("div",{className:(0,n.A)("avatar margin-bottom--sm",a)},i&&l.createElement(d,{href:c,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:i,alt:r})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(d,{href:c,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),s&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},s)))}const p={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function h(e){let{className:t}=e;const{metadata:{authors:a},assets:s}=(0,r.e)();if(0===a.length)return null;const o=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",o?p.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.A)(!o&&"col col--6",o?p.imageOnlyAuthorCol:p.authorCol),key:t},l.createElement(g,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})))))}function E(){return l.createElement("header",null,l.createElement(c,null),l.createElement(u.A,null),l.createElement(h,null))}var b=a(440),f=a(6502);function v(e){let{children:t,className:a}=e;const{isBlogPostPage:s}=(0,r.e)();return l.createElement("div",{id:s?b.blogPostContainerID:void 0,className:(0,n.A)("markdown",a),itemProp:"articleBody"},l.createElement(f.A,null,t))}var A=a(7455);function _(e){let{children:t,className:a}=e;const s=function(){const{isBlogPostPage:e}=(0,r.e)();return e?void 0:"margin-bottom--xl"}();return l.createElement(o,{className:(0,n.A)(s,a)},l.createElement(E,null),l.createElement(v,null,t),l.createElement(A.A,null))}},1943:(e,t,a)=>{a.d(t,{A:()=>c});var l=a(6540),n=a(1312),r=a(7559),s=a(8168),o=a(53);const i={iconEdit:"iconEdit_Z9Sw"};function m(e){let{className:t,...a}=e;return l.createElement("svg",(0,s.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.A)(i.iconEdit,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.G.common.editThisPage},l.createElement(m,null),l.createElement(n.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9022:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(6540),n=a(53),r=a(5489);function s(e){const{permalink:t,title:a,subLabel:s,isNext:o}=e;return l.createElement(r.A,{className:(0,n.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&l.createElement("div",{className:"pagination-nav__sublabel"},s),l.createElement("div",{className:"pagination-nav__label"},a))}},6133:(e,t,a)=>{a.d(t,{A:()=>o});var l=a(6540),n=a(53),r=a(5489);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function o(e){let{permalink:t,label:a,count:o}=e;return l.createElement(r.A,{href:t,className:(0,n.A)(s.tag,o?s.tagWithCount:s.tagRegular)},a,o&&l.createElement("span",null,o))}},2053:(e,t,a)=>{a.d(t,{A:()=>i});var l=a(6540),n=a(53),r=a(1312),s=a(6133);const o={tags:"tags_jXut",tag:"tag_QGVx"};function i(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.A)(o.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:o.tag},l.createElement(s.A,{label:t,permalink:a}))}))))}},7131:(e,t,a)=>{a.d(t,{e:()=>o,i:()=>s});var l=a(6540),n=a(9532);const r=l.createContext(null);function s(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const s=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:s},t)}function o(){const e=(0,l.useContext)(r);if(null===e)throw new n.dV("BlogPostProvider");return e}},5846:(e,t,a)=>{a.d(t,{W:()=>m});var l=a(6540),n=a(4586);const r=["zero","one","two","few","many","other"];function s(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function m(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return l[Math.min(r,l.length-1)]}(a,t,e)}}}}]);