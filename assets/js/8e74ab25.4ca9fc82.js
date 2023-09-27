"use strict";(self.webpackChunk_aws_samples_jp_prototyping_blog=self.webpackChunk_aws_samples_jp_prototyping_blog||[]).push([[3053],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),s=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=s(t.components);return n.createElement(i.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=s(r),d=a,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(b,l(l({ref:e},p),{},{components:r})):n.createElement(b,l({ref:e},p))}));function b(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c[u]="string"==typeof t?t:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9644:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"Amazon CloudWatch RUM \u3067\u6708\u6b21\u30a2\u30af\u30bb\u30b9\u6570\u3092\u96c6\u8a08\u3057\u3066\u307f\u305f",slug:"cloudwatch-rum-stats",tags:["cloudwatch","rum","stats"],authors:["tbrand"]},l=void 0,c={permalink:"/blog/cloudwatch-rum-stats",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2022-09-16-cloudwatch-rum-stats/index.md",source:"@site/blog/2022-09-16-cloudwatch-rum-stats/index.md",title:"Amazon CloudWatch RUM \u3067\u6708\u6b21\u30a2\u30af\u30bb\u30b9\u6570\u3092\u96c6\u8a08\u3057\u3066\u307f\u305f",description:"\u6982\u8981",date:"2022-09-16T00:00:00.000Z",formattedDate:"2022\u5e749\u670816\u65e5",tags:[{label:"cloudwatch",permalink:"/blog/tags/cloudwatch"},{label:"rum",permalink:"/blog/tags/rum"},{label:"stats",permalink:"/blog/tags/stats"}],readingTime:8.04,hasTruncateMarker:!0,authors:[{name:"Taichiro Suzuki",title:"Prototyping Engineer",url:"https://github.com/tbrand",imageURL:"https://github.com/tbrand.png",key:"tbrand"}],frontMatter:{title:"Amazon CloudWatch RUM \u3067\u6708\u6b21\u30a2\u30af\u30bb\u30b9\u6570\u3092\u96c6\u8a08\u3057\u3066\u307f\u305f",slug:"cloudwatch-rum-stats",tags:["cloudwatch","rum","stats"],authors:["tbrand"]},prevItem:{title:"\u9589\u57df\u7db2\u3067\u30b5\u30fc\u30d0\u30ec\u30b9\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u767a\u3059\u308b",permalink:"/blog/closed-serverless-app"},nextItem:{title:"AWS Samples \u306e Simple NFT Marketplace \u3092\u89e6\u3063\u3066\u307f\u305f",permalink:"/blog/simple-nft-marketplace"}},i={authorsImageUrls:[void 0]},s=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2}],p={toc:s},u="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,a.kt)("p",null,"\u672c\u8a18\u4e8b\u3067\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/cloudwatch/home#rum:dashboard?tab=overview"},"Amazon CloudWatch RUM")," \u3092\u5229\u7528\u3057\u305f\u6708\u6b21\u30a2\u30af\u30bb\u30b9\u6570\u306e\u96c6\u8a08\u65b9\u6cd5\u3092\u5b9f\u969b\u306e\u30b3\u30fc\u30c9\u3068\u5408\u308f\u305b\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002"))}m.isMDXComponent=!0}}]);