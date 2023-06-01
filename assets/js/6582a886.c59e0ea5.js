"use strict";(self.webpackChunkjp_prototyping_blog=self.webpackChunkjp_prototyping_blog||[]).push([[3264],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(b,c(c({ref:t},s),{},{components:r})):n.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9061:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"Kendra \u3067 S3 \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30a2\u30af\u30bb\u30b9\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3092\u884c\u3046\u65b9\u6cd5",slug:"kendra-s3-access-control",tags:["kendra"],authors:["wadabee"]},c=void 0,i={permalink:"/blog/kendra-s3-access-control",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2023-05-16-kendra-s3-access-control/index.md",source:"@site/blog/2023-05-16-kendra-s3-access-control/index.md",title:"Kendra \u3067 S3 \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30a2\u30af\u30bb\u30b9\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3092\u884c\u3046\u65b9\u6cd5",description:"Amazon Kendra (\u4ee5\u964d\u3001Kendra) \u306f\u3001\u6a5f\u68b0\u5b66\u7fd2 (ML) \u3092\u5229\u7528\u3057\u305f\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30c8\u691c\u7d22\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002",date:"2023-05-16T00:00:00.000Z",formattedDate:"2023\u5e745\u670816\u65e5",tags:[{label:"kendra",permalink:"/blog/tags/kendra"}],readingTime:12.065,hasTruncateMarker:!0,authors:[{name:"Yusuke Wada",title:"Prototyping Engineer",url:"https://github.com/wadabee",imageURL:"https://github.com/wadabee.png",key:"wadabee"}],frontMatter:{title:"Kendra \u3067 S3 \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30a2\u30af\u30bb\u30b9\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3092\u884c\u3046\u65b9\u6cd5",slug:"kendra-s3-access-control",tags:["kendra"],authors:["wadabee"]},prevItem:{title:"React \u3068 Amazon Transcribe \u3067\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u6587\u5b57\u8d77\u3053\u3057\u3092\u884c\u3046\u65b9\u6cd5",permalink:"/blog/transcribe-in-react"},nextItem:{title:"Vue3 + TypeScript \u3092\u5229\u7528\u3057\u305f\u578b\u5b89\u5168\u306a\u958b\u767a\u306e\u5b9f\u73fe",permalink:"/blog/vue3-typescript"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/jp/kendra/"},"Amazon Kendra")," (\u4ee5\u964d\u3001Kendra) \u306f\u3001\u6a5f\u68b0\u5b66\u7fd2 (ML) \u3092\u5229\u7528\u3057\u305f\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30c8\u691c\u7d22\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u30e6\u30fc\u30b6\u306e\u6a29\u9650\u306b\u3088\u3063\u3066\u691c\u7d22\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30a2\u30af\u30bb\u30b9\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3092\u884c\u3046\u65b9\u6cd5\u3092\u3054\u7d39\u4ecb\u3057\u307e\u3059\u3002"))}d.isMDXComponent=!0}}]);