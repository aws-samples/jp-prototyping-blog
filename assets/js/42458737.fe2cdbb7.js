"use strict";(self.webpackChunk_aws_samples_jp_prototyping_blog=self.webpackChunk_aws_samples_jp_prototyping_blog||[]).push([[4552],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),h=r,f=m["".concat(p,".").concat(h)]||m[h]||u[h]||l;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7838:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={title:"AWS HealthOmics \u3067 AlphaFold \u3092\u5b9f\u884c\u3057\u3001\u30bf\u30f3\u30d1\u30af\u8cea\u306e\u7acb\u4f53\u69cb\u9020\u3092\u53ef\u8996\u5316\u3059\u308b",slug:"aws-healthomics-analysis-app-alphafold",tags:["aws","healthomics","omics","alphafold"],authors:["yukimine"]},o=void 0,i={permalink:"/blog/aws-healthomics-analysis-app-alphafold",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2023-10-25-aws-healthomics-analysis-app-alphafold/index.md",source:"@site/blog/2023-10-25-aws-healthomics-analysis-app-alphafold/index.md",title:"AWS HealthOmics \u3067 AlphaFold \u3092\u5b9f\u884c\u3057\u3001\u30bf\u30f3\u30d1\u30af\u8cea\u306e\u7acb\u4f53\u69cb\u9020\u3092\u53ef\u8996\u5316\u3059\u308b",description:"AWS HealthOmics \u3067\u306f\u3001\u8a2d\u5b9a\u4e0d\u8981\u3067\u624b\u8efd\u306b\u5229\u7528\u3067\u304d\u308b Ready2Run \u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3068\u3057\u3066\u3001\u30bf\u30f3\u30d1\u30af\u8cea\u306e\u7acb\u4f53\u69cb\u9020\u3092\u4e88\u6e2c\u3059\u308b\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3067\u3042\u308b AlphaFold \u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u4eca\u56de\u306f\u3001\u4ee5\u524d\u306e\u8a18\u4e8b\u3067\u7d39\u4ecb\u3057\u305f\u300cAWS HealthOmics Analysis App\u300d\u3067 AlphaFold \u3092\u5b9f\u884c\u3057\u3001\u4e88\u6e2c\u3055\u308c\u305f\u30bf\u30f3\u30d1\u30af\u8cea\u306e\u7acb\u4f53\u69cb\u9020\u3092\u53ef\u8996\u5316\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002",date:"2023-10-25T00:00:00.000Z",formattedDate:"2023\u5e7410\u670825\u65e5",tags:[{label:"aws",permalink:"/blog/tags/aws"},{label:"healthomics",permalink:"/blog/tags/healthomics"},{label:"omics",permalink:"/blog/tags/omics"},{label:"alphafold",permalink:"/blog/tags/alphafold"}],readingTime:7.78,hasTruncateMarker:!0,authors:[{name:"Yukinobu Mine",title:"Prototyping Engineer",url:"https://github.com/Yukinobu-Mine",imageURL:"https://github.com/Yukinobu-Mine.png",key:"yukimine"}],frontMatter:{title:"AWS HealthOmics \u3067 AlphaFold \u3092\u5b9f\u884c\u3057\u3001\u30bf\u30f3\u30d1\u30af\u8cea\u306e\u7acb\u4f53\u69cb\u9020\u3092\u53ef\u8996\u5316\u3059\u308b",slug:"aws-healthomics-analysis-app-alphafold",tags:["aws","healthomics","omics","alphafold"],authors:["yukimine"]},prevItem:{title:"Claude\u3067JSON\u51fa\u529b\u3092\u5b89\u5b9a\u3055\u305b\u308b\u30b3\u30c4\u3092\u4e00\u3064\u7d39\u4ecb\u3057\u307e\u3059",permalink:"/blog/claude-prompt-engineering-put-on-her-mouth"},nextItem:{title:"AWS HealthOmics \u3068 Step Functions \u3067\u30aa\u30df\u30af\u30b9\u30c7\u30fc\u30bf\u5206\u6790\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u69cb\u7bc9\u3059\u308b",permalink:"/blog/aws-healthomics-analysis-app"}},p={authorsImageUrls:[void 0]},s=[],c={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"AWS HealthOmics \u3067\u306f\u3001\u8a2d\u5b9a\u4e0d\u8981\u3067\u624b\u8efd\u306b\u5229\u7528\u3067\u304d\u308b Ready2Run \u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3068\u3057\u3066\u3001\u30bf\u30f3\u30d1\u30af\u8cea\u306e\u7acb\u4f53\u69cb\u9020\u3092\u4e88\u6e2c\u3059\u308b\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3067\u3042\u308b AlphaFold \u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u4eca\u56de\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://prototyping-blog.com/blog/aws-healthomics-analysis-app"},"\u4ee5\u524d\u306e\u8a18\u4e8b"),"\u3067\u7d39\u4ecb\u3057\u305f\u300cAWS HealthOmics Analysis App\u300d\u3067 AlphaFold \u3092\u5b9f\u884c\u3057\u3001\u4e88\u6e2c\u3055\u308c\u305f\u30bf\u30f3\u30d1\u30af\u8cea\u306e\u7acb\u4f53\u69cb\u9020\u3092\u53ef\u8996\u5316\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002"))}u.isMDXComponent=!0}}]);