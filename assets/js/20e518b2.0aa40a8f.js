"use strict";(self.webpackChunk_aws_samples_jp_prototyping_blog=self.webpackChunk_aws_samples_jp_prototyping_blog||[]).push([[7036],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>g});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4539:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(8168),a=(r(6540),r(5680));const o={title:"React \u74b0\u5883\u3067 3Dmol.js \u3092\u4f7f\u3046",slug:"react-3dmol",tags:["react"],authors:["kuridaik"]},i=void 0,l={permalink:"/blog/react-3dmol",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2022-12-02-react-3dmol/index.md",source:"@site/blog/2022-12-02-react-3dmol/index.md",title:"React \u74b0\u5883\u3067 3Dmol.js \u3092\u4f7f\u3046",description:"3dmol.js \u306f\u5206\u5b50\u3092\u7acb\u4f53\u8868\u793a\u3059\u308b JavaScript \u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002React \u74b0\u5883\u3067\u52d5\u4f5c\u3055\u305b\u308b\u5834\u5408\u3001\u5c11\u3057\u30b3\u30c4\u304c\u5fc5\u8981\u3067\u3057\u305f\u306e\u3067\u7d39\u4ecb\u3057\u307e\u3059\u3002",date:"2022-12-02T00:00:00.000Z",formattedDate:"2022\u5e7412\u67082\u65e5",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:2.03,hasTruncateMarker:!0,authors:[{name:"Daiki Kuriyama",title:"Prototyping Engineer",url:"https://github.com/kuridaik",imageURL:"https://github.com/kuridaik.png",key:"kuridaik"}],frontMatter:{title:"React \u74b0\u5883\u3067 3Dmol.js \u3092\u4f7f\u3046",slug:"react-3dmol",tags:["react"],authors:["kuridaik"]},prevItem:{title:"Jenkins\u306eEC2\u30d7\u30e9\u30b0\u30a4\u30f3\u306f2\u3064\u3042\u308b",permalink:"/blog/jenkins-ec2"},nextItem:{title:"CDK \u306e NOTICES \u306b\u3064\u3044\u3066\u3056\u3063\u3068\u8abf\u3079\u3066\u307f\u305f",permalink:"/blog/cdk-notices"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.yg)(m,(0,n.A)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"3dmol.js \u306f\u5206\u5b50\u3092\u7acb\u4f53\u8868\u793a\u3059\u308b JavaScript \u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002React \u74b0\u5883\u3067\u52d5\u4f5c\u3055\u305b\u308b\u5834\u5408\u3001\u5c11\u3057\u30b3\u30c4\u304c\u5fc5\u8981\u3067\u3057\u305f\u306e\u3067\u7d39\u4ecb\u3057\u307e\u3059\u3002\n",(0,a.yg)("a",{parentName:"p",href:"https://3dmol.csb.pitt.edu/doc/index.html"},"https://3dmol.csb.pitt.edu/doc/index.html")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"3dmol.png",src:r(6110).A,width:"1152",height:"842"})))}u.isMDXComponent=!0},6110:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/3dmol-e70bc053c47dc9eafd7bf2b164956572.png"}}]);