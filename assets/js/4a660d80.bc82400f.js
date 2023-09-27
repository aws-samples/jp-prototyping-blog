"use strict";(self.webpackChunk_aws_samples_jp_prototyping_blog=self.webpackChunk_aws_samples_jp_prototyping_blog||[]).push([[2314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={title:"Fluentd \u304b\u3089 Kinesis Data Streams \u3078\u30b5\u30a4\u30ba\u304c\u5927\u304d\u3044\u30c7\u30fc\u30bf\u3092\u8ee2\u9001\u3059\u308b",slug:"fluentd-kds",tags:["fluentd","kinesis data streams","kinesis"],authors:["statefb"]},i=void 0,o={permalink:"/blog/fluentd-kds",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2023-01-05-fluentd-kds/index.md",source:"@site/blog/2023-01-05-fluentd-kds/index.md",title:"Fluentd \u304b\u3089 Kinesis Data Streams \u3078\u30b5\u30a4\u30ba\u304c\u5927\u304d\u3044\u30c7\u30fc\u30bf\u3092\u8ee2\u9001\u3059\u308b",description:"Kinesis Data Streams \u306b\u306f\u30011 \u30ec\u30b3\u30fc\u30c9\u306e\u30b5\u30a4\u30ba\u306f 1MB \u4ee5\u4e0b\u3067\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u5236\u7d04\u304c\u3042\u308a\u3001\u30b5\u30a4\u30ba\u306e\u5927\u304d\u3044\u30c7\u30fc\u30bf\u3092\u8ee2\u9001\u3059\u308b\u306b\u306f\u5de5\u592b\u304c\u5fc5\u8981\u3068\u306a\u308a\u307e\u3059\u3002\u307e\u305f\u5229\u7528\u6599\u91d1\u306f\u30b9\u30c8\u30ea\u30fc\u30e0\u306b\u8aad\u307f\u66f8\u304d\u3055\u308c\u308b\u30c7\u30fc\u30bf\u91cf\u306b\u57fa\u3065\u3044\u3066\u6c7a\u5b9a\u3055\u308c\u308b\u305f\u3081\u3001\u30b5\u30a4\u30ba\u304c\u5927\u304d\u3044\u3068\u8ab2\u91d1\u984d\u3082\u5897\u3048\u3066\u3057\u307e\u3044\u307e\u3059\u3002\u672c\u8a18\u4e8b\u3067\u306f Publisher \u304c Fluentd \u306e\u5834\u5408\u306b\u304a\u3044\u3066\u3001\u4e0a\u8a18\u8ab2\u984c\u3092\u89e3\u6c7a\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u3054\u7d39\u4ecb\u3057\u307e\u3059\u3002\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30e1\u30bf\u30c7\u30fc\u30bf\u3068\u672c\u4f53\u306b\u5206\u5272\u3057\u3001\u672c\u4f53\u306f S3 \u7d4c\u7531\u3067 Consumer \u306b\u6e21\u3057\u3001\u30e1\u30bf\u30c7\u30fc\u30bf\u306e\u307f\u3092 Kinesis Data Streams \u3078\u9001\u308b\u3053\u3068\u3067\u5b9f\u73fe\u3057\u307e\u3059\u3002",date:"2023-01-05T00:00:00.000Z",formattedDate:"2023\u5e741\u67085\u65e5",tags:[{label:"fluentd",permalink:"/blog/tags/fluentd"},{label:"kinesis data streams",permalink:"/blog/tags/kinesis-data-streams"},{label:"kinesis",permalink:"/blog/tags/kinesis"}],readingTime:12.29,hasTruncateMarker:!0,authors:[{name:"Takehiro Suzuki",title:"Prototyping Engineer",url:"https://github.com/statefb",imageURL:"https://github.com/statefb.png",key:"statefb"}],frontMatter:{title:"Fluentd \u304b\u3089 Kinesis Data Streams \u3078\u30b5\u30a4\u30ba\u304c\u5927\u304d\u3044\u30c7\u30fc\u30bf\u3092\u8ee2\u9001\u3059\u308b",slug:"fluentd-kds",tags:["fluentd","kinesis data streams","kinesis"],authors:["statefb"]},prevItem:{title:"Cognito Identity Pools \u306e Unauthenticated Role \u3067 Amazon Kendra \u306b\u30a2\u30af\u30bb\u30b9\u3057\u305f\u3089 AccessDeniedException \u3060\u3063\u305f\u8a71",permalink:"/blog/identity-pool-unauth"},nextItem:{title:"Ruby on Rails \u3092 API Gateway + Lambda \u3067\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u904b\u7528\u3059\u308b\u65b9\u6cd5",permalink:"/blog/rails-lambda"}},l={authorsImageUrls:[void 0]},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...s}=e;return(0,a.kt)(c,(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/jp/kinesis/data-streams/"},"Kinesis Data Streams")," \u306b\u306f\u30011 \u30ec\u30b3\u30fc\u30c9\u306e\u30b5\u30a4\u30ba\u306f 1MB \u4ee5\u4e0b\u3067\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u5236\u7d04\u304c\u3042\u308a\u3001\u30b5\u30a4\u30ba\u306e\u5927\u304d\u3044\u30c7\u30fc\u30bf\u3092\u8ee2\u9001\u3059\u308b\u306b\u306f\u5de5\u592b\u304c\u5fc5\u8981\u3068\u306a\u308a\u307e\u3059\u3002\u307e\u305f\u5229\u7528\u6599\u91d1\u306f\u30b9\u30c8\u30ea\u30fc\u30e0\u306b\u8aad\u307f\u66f8\u304d\u3055\u308c\u308b\u30c7\u30fc\u30bf\u91cf\u306b\u57fa\u3065\u3044\u3066\u6c7a\u5b9a\u3055\u308c\u308b\u305f\u3081\u3001\u30b5\u30a4\u30ba\u304c\u5927\u304d\u3044\u3068\u8ab2\u91d1\u984d\u3082\u5897\u3048\u3066\u3057\u307e\u3044\u307e\u3059\u3002\u672c\u8a18\u4e8b\u3067\u306f Publisher \u304c Fluentd \u306e\u5834\u5408\u306b\u304a\u3044\u3066\u3001\u4e0a\u8a18\u8ab2\u984c\u3092\u89e3\u6c7a\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u3054\u7d39\u4ecb\u3057\u307e\u3059\u3002\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30e1\u30bf\u30c7\u30fc\u30bf\u3068\u672c\u4f53\u306b\u5206\u5272\u3057\u3001\u672c\u4f53\u306f S3 \u7d4c\u7531\u3067 Consumer \u306b\u6e21\u3057\u3001\u30e1\u30bf\u30c7\u30fc\u30bf\u306e\u307f\u3092 Kinesis Data Streams \u3078\u9001\u308b\u3053\u3068\u3067\u5b9f\u73fe\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(709).Z,width:"511",height:"250"})))}m.isMDXComponent=!0},709:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/arch-65816c847eb129ab558e9547a43a095d.png"}}]);