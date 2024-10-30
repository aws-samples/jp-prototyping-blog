"use strict";(self.webpackChunk_aws_samples_jp_prototyping_blog=self.webpackChunk_aws_samples_jp_prototyping_blog||[]).push([[3557],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>g});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(8168),o=(r(6540),r(5680));const a={title:"AWS CDK \u3067\u9759\u7684\u30b5\u30a4\u30c8\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b (CloudFront + S3 + CF2)",slug:"cdk-static-website",tags:["cdk","cloudfront","s3"],authors:["kudtomoy"]},l=void 0,i={permalink:"/blog/cdk-static-website",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2022-08-04-cdk-static-website/index.md",source:"@site/blog/2022-08-04-cdk-static-website/index.md",title:"AWS CDK \u3067\u9759\u7684\u30b5\u30a4\u30c8\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b (CloudFront + S3 + CF2)",description:"\u306f\u3058\u3081\u306b",date:"2022-08-04T00:00:00.000Z",formattedDate:"2022\u5e748\u67084\u65e5",tags:[{label:"cdk",permalink:"/blog/tags/cdk"},{label:"cloudfront",permalink:"/blog/tags/cloudfront"},{label:"s3",permalink:"/blog/tags/s-3"}],readingTime:8.145,hasTruncateMarker:!0,authors:[{name:"Tomoya Kudo",title:"Prototyping Engineer",url:"https://github.com/kudtomoy",imageURL:"https://github.com/kudtomoy.png",key:"kudtomoy"}],frontMatter:{title:"AWS CDK \u3067\u9759\u7684\u30b5\u30a4\u30c8\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b (CloudFront + S3 + CF2)",slug:"cdk-static-website",tags:["cdk","cloudfront","s3"],authors:["kudtomoy"]},prevItem:{title:"AWS Samples \u306e Simple NFT Marketplace \u3092\u89e6\u3063\u3066\u307f\u305f",permalink:"/blog/simple-nft-marketplace"},nextItem:{title:"Amazon CloudWatch RUM \u3067 Jekyll \u306e\u9759\u7684\u30b5\u30a4\u30c8\u306e\u30a2\u30af\u30bb\u30b9\u89e3\u6790\u3092\u884c\u3046",permalink:"/blog/jekyll-cloudwatch-rum"}},c={authorsImageUrls:[void 0]},p=[{value:"\u306f\u3058\u3081\u306b",id:"\u306f\u3058\u3081\u306b",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),(0,o.yg)("p",null,"\u9759\u7684 Web \u30b5\u30a4\u30c8\u3092 AWS CDK \u3092\u4f7f\u3044\u3001CloudFront + S3 \u306e\u69cb\u6210\u3067\u30c7\u30d7\u30ed\u30a4\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002\u3053\u306e\u7d44\u307f\u5408\u308f\u305b\u306f\u5b9a\u756a\u306a\u306e\u3067\u3044\u308d\u3044\u308d\u306a\u6240\u3067\u7d39\u4ecb\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001\n\u60c5\u5831\u304c\u53e4\u304f\u306a\u3063\u3066\u3057\u307e\u3063\u3066\u3044\u308b\u3082\u306e\u3082\u3042\u308b\u305f\u30812022\u5e748\u6708\u306e\u6642\u70b9\u3067\u826f\u3055\u305d\u3046\u3060\u3068\u601d\u3063\u305f\u4f5c\u308a\u65b9\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,o.yg)("p",null,"CDK \u30a2\u30d7\u30ea\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u5168\u4f53\u306f ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/kudtomoy/aws-cdk-samples/tree/main/static-website"},"GitHub")," \u3067\u516c\u958b\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u4eca\u56de\u306e CDK \u30a2\u30d7\u30ea\u306e\u66f8\u304d\u65b9\u306e\u30dd\u30a4\u30f3\u30c8\u3084\u7406\u7531\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u3066\u3044\u304d\u307e\u3059\u3002"))}m.isMDXComponent=!0}}]);