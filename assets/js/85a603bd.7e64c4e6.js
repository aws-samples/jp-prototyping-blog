"use strict";(self.webpackChunkjp_prototyping_blog=self.webpackChunkjp_prototyping_blog||[]).push([[6714],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(i,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Amazon Lex, Amazon Kendra \u306e\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u958b\u767a\u3067\u96c6\u3081\u305f Tips",slug:"lex-kendra-dev",tags:["lex","kendra","cdk"],authors:["tbrand"]},l=void 0,p={permalink:"/blog/lex-kendra-dev",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2023-02-08-lex-kendra-dev/index.md",source:"@site/blog/2023-02-08-lex-kendra-dev/index.md",title:"Amazon Lex, Amazon Kendra \u306e\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u958b\u767a\u3067\u96c6\u3081\u305f Tips",description:"\u5f0a\u793e Prototyping \u30c1\u30fc\u30e0\u3068 ML Specialist \u5408\u540c\u3067\u4f5c\u6210\u3057\u305f simple-lex-kendra-jp \u3068\u3044\u3046\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u958b\u767a\u4e2d\u306b\u96c6\u3081\u305f Tips \u3092\u7d39\u4ecb\u3044\u305f\u3057\u307e\u3059\u3002\u5305\u62ec\u7684\u306a\u5185\u5bb9\u3067\u306f\u306a\u304f\u3001\u6563\u6587\u7684\u306a\u5185\u5bb9\u306b\u306a\u308b\u3053\u3068\u3092\u3054\u4e86\u627f\u304f\u3060\u3055\u3044\u3002\u307e\u305f\u3001Amazon Lex\u3001Amazon Kendra \u306b\u76f4\u63a5\u95a2\u4fc2\u306e\u306a\u3044 Tips \u3082\u3042\u308a\u307e\u3059\u3002",date:"2023-02-08T00:00:00.000Z",formattedDate:"2023\u5e742\u67088\u65e5",tags:[{label:"lex",permalink:"/blog/tags/lex"},{label:"kendra",permalink:"/blog/tags/kendra"},{label:"cdk",permalink:"/blog/tags/cdk"}],readingTime:12.575,hasTruncateMarker:!0,authors:[{name:"Taichiro Suzuki",title:"Prototyping Engineer",url:"https://github.com/tbrand",imageURL:"https://github.com/tbrand.png",key:"tbrand"}],frontMatter:{title:"Amazon Lex, Amazon Kendra \u306e\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u958b\u767a\u3067\u96c6\u3081\u305f Tips",slug:"lex-kendra-dev",tags:["lex","kendra","cdk"],authors:["tbrand"]},prevItem:{title:"AWS CDK \u3067 MAC \u30a2\u30c9\u30ec\u30b9\u3068 IP \u30a2\u30c9\u30ec\u30b9\u3092\u56fa\u5b9a\u3057\u305f EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b",permalink:"/blog/primary-eni-with-cdk"},nextItem:{title:"EC2 Mac\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f7f\u3046\u4e0a\u30673\u3064\u306e\u6ce8\u610f\u70b9",permalink:"/blog/ec2-mac-instances"}},i={authorsImageUrls:[void 0]},s=[{value:"simple-lex-kendra-jp \u306b\u3064\u3044\u3066",id:"simple-lex-kendra-jp-\u306b\u3064\u3044\u3066",level:2},{value:"Tips",id:"tips",level:2},{value:"CDK \u3067 Frontend \u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u969b\u306b\u74b0\u5883\u5909\u6570\u3092\u7d44\u307f\u8fbc\u3080\u65b9\u6cd5",id:"cdk-\u3067-frontend-\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u969b\u306b\u74b0\u5883\u5909\u6570\u3092\u7d44\u307f\u8fbc\u3080\u65b9\u6cd5",level:3},{value:"npm workspace \u4f7f\u3063\u3066\u307f\u305f",id:"npm-workspace-\u4f7f\u3063\u3066\u307f\u305f",level:3},{value:"Amazon Lex \u306e Bot \u30d0\u30fc\u30b8\u30e7\u30f3\u3092 CDK \u3067\u81ea\u52d5\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3059\u308b",id:"amazon-lex-\u306e-bot-\u30d0\u30fc\u30b8\u30e7\u30f3\u3092-cdk-\u3067\u81ea\u52d5\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3059\u308b",level:3},{value:"Amazon Lex \u306e nluConfidenceThreshold \u306f\u9ad8\u3081\u306b\u8a2d\u5b9a\u3057\u305f\u65b9\u304c\u826f\u3044",id:"amazon-lex-\u306e-nluconfidencethreshold-\u306f\u9ad8\u3081\u306b\u8a2d\u5b9a\u3057\u305f\u65b9\u304c\u826f\u3044",level:3},{value:"Amazon Kendra \u306e Custom Data Source \u306e Attribute \u306b\u306f <code>_source_uri</code> \u3092\u3064\u3051\u308b\u3068\u826f\u3044",id:"amazon-kendra-\u306e-custom-data-source-\u306e-attribute-\u306b\u306f-_source_uri-\u3092\u3064\u3051\u308b\u3068\u826f\u3044",level:3},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5f0a\u793e Prototyping \u30c1\u30fc\u30e0\u3068 ML Specialist \u5408\u540c\u3067\u4f5c\u6210\u3057\u305f ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aws-samples/simple-lex-kendra-jp"},"simple-lex-kendra-jp")," \u3068\u3044\u3046\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u958b\u767a\u4e2d\u306b\u96c6\u3081\u305f Tips \u3092\u7d39\u4ecb\u3044\u305f\u3057\u307e\u3059\u3002\u5305\u62ec\u7684\u306a\u5185\u5bb9\u3067\u306f\u306a\u304f\u3001\u6563\u6587\u7684\u306a\u5185\u5bb9\u306b\u306a\u308b\u3053\u3068\u3092\u3054\u4e86\u627f\u304f\u3060\u3055\u3044\u3002\u307e\u305f\u3001Amazon Lex\u3001Amazon Kendra \u306b\u76f4\u63a5\u95a2\u4fc2\u306e\u306a\u3044 Tips \u3082\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"simple-lex-kendra-jp-\u306b\u3064\u3044\u3066"},"simple-lex-kendra-jp \u306b\u3064\u3044\u3066"),(0,r.kt)("p",null,'AWS \u3067\u306f "\u8a00\u8a9e" \u306b\u95a2\u3059\u308b ML \u30b5\u30fc\u30d3\u30b9\u3092\u3044\u304f\u3064\u304b\u5c55\u958b\u3057\u3066\u3044\u307e\u3059\u304c\u3001Amazon Lex \u3068 Amazon Kendra \u3082\u305d\u308c\u306b\u5c5e\u3057\u307e\u3059\u3002Amazon Lex \u306f\u4f1a\u8a71\u578b AI \u3092\u4f7f\u7528\u3057\u3066\u30c1\u30e3\u30c3\u30c8\u30dc\u30c3\u30c8\u3068\u97f3\u58f0\u30dc\u30c3\u30c8\u3092\u69cb\u7bc9\u3059\u308b\u30b5\u30fc\u30d3\u30b9\u3067\u3001Amazon Kendra \u306f\u3055\u307e\u3056\u307e\u306a\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306b\u5b58\u5728\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u5bfe\u3057\u3066\u6a5f\u68b0\u5b66\u7fd2\u3092\u6d3b\u7528\u3057\u3066\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30c8\u306a\u691c\u7d22\u3092\u63d0\u4f9b\u3059\u308b\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002\u307e\u305f\u3001Amazon Lex \u3068 Amazon Kendra \u3092\u7d71\u5408\u3059\u308b\u3053\u3068\u3067\u3001\u30c1\u30e3\u30c3\u30c8\u30dc\u30c3\u30c8\u304b\u3089\u691c\u7d22\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aws-samples/simple-lex-kendra-jp"},"simple-lex-kendra-jp")," \u306f\u65e5\u672c\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u6700\u9069\u5316\u3057\u305f Amazon Lex \u3068 Amazon Kendra \u306e\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304c\u65e5\u672c\u8a9e\u3067\u3042\u308b\u3053\u3068\u306f\u3082\u3061\u308d\u3093\u306e\u3053\u3068\u3001\u5185\u5bb9\u3082\u65e5\u672c\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u5411\u3051\u3066\u6700\u9069\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u3001\u67b6\u7a7a\u306e\u4f1a\u793e\u306e\u793e\u5185\u691c\u7d22\u30b7\u30b9\u30c6\u30e0\u3068\u793e\u5185\u30b5\u30dd\u30fc\u30c8\u306e\u30c1\u30e3\u30c3\u30c8\u30dc\u30c3\u30c8\u5bfe\u5fdc\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"tips"},"Tips"),(0,r.kt)("p",null,"\u3067\u306f\u3001\u3053\u3053\u304b\u3089\u306f\u958b\u767a\u4e2d\u306b\u5f97\u305f Tips \u3092\u3054\u7d39\u4ecb\u3044\u305f\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"cdk-\u3067-frontend-\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u969b\u306b\u74b0\u5883\u5909\u6570\u3092\u7d44\u307f\u8fbc\u3080\u65b9\u6cd5"},"CDK \u3067 Frontend \u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u969b\u306b\u74b0\u5883\u5909\u6570\u3092\u7d44\u307f\u8fbc\u3080\u65b9\u6cd5"),(0,r.kt)("p",null,"\u305d\u3082\u305d\u3082\u3001\u306a\u305c CDK \u3067\u74b0\u5883\u5909\u6570\u304c\u5fc5\u8981\u306a Frontend \u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u969b\u306b\u8003\u616e\u304c\u5fc5\u8981\u306a\u306e\u304b\u3068\u3044\u3046\u3068\u3001\u3054\u5b58\u77e5\u306e\u901a\u308a\u3001Frontend \u306f\u30d3\u30eb\u30c9\u3059\u308b\u969b\u306b\u74b0\u5883\u5909\u6570\u3092\u7d44\u307f\u8fbc\u3080\u305f\u3081\u3001\u30d3\u30eb\u30c9\u6642\u306b\u306f\u5fc5\u8981\u306a\u74b0\u5883\u5909\u6570\u304c\u89e3\u6c7a\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308b\u305f\u3081\u3067\u3059\u3002\u4e00\u65b9\u3067\u3001CDK \u3067 Backend \u3068 Frontend \u3092\u540c\u6642\u306b\u30c7\u30d7\u30ed\u30a4\u3057\u305f\u3044\u5834\u5408 1) Frontend \u306f\u30d3\u30eb\u30c9\u6e08\u307f\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308b (S3 \u306a\u3069\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u305f\u3081) 2) Backend \u306e\u60c5\u5831\u306f\u672a\u89e3\u6c7a\u3067\u3042\u308b (API Endpoint \u306a\u3069) \u306e 2 \u70b9\u304c\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u56f0\u3063\u3066\u3057\u307e\u3046\u3068\u3044\u3046\u8a33\u3067\u3059\u3002\u4e00\u756a\u7d20\u76f4\u306b\u89e3\u6c7a\u3059\u308b\u65b9\u6cd5\u3068\u3057\u3066\u306f\u3001Backend \u3068 Frontend \u306e Stack \u3092\u5206\u3051\u3066\u3057\u307e\u3046\u3068\u3044\u3046\u3082\u306e\u306b\u306a\u308a\u307e\u3059\u30021) Backend \u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b 2) \u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a\u3057\u3066 Frontend \u3092\u30d3\u30eb\u30c9\u3059\u308b 3) \u30d3\u30eb\u30c9\u3057\u305f Frontend \u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u3001\u306e\u624b\u9806\u3092\u8e0f\u3081\u3070\u30c7\u30d7\u30ed\u30a4\u53ef\u80fd\u3067\u3059\u3002\u305f\u3060\u3057\u3001\u7279\u306b\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u624b\u8efd\u3055\u3092\u58f2\u308a\u306b\u3057\u305f\u3044\u306e\u3067\u30011 Stack \u3067\u30c7\u30d7\u30ed\u30a4\u3057\u305f\u3044\u3068\u3053\u308d\u3067\u3059\u3002"),(0,r.kt)("p",null,"simple-lex-kendra-jp \u3067\u306f\u3001\u5f0a\u30c1\u30fc\u30e0\u30e1\u30f3\u30d0\u30fc\u304c\u958b\u767a\u3057\u3066\u3044\u308b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tmokmss/deploy-time-build"},"deploy-time-build")," \u3092\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u3061\u3089\u306e Construct \u3092\u4f7f\u3046\u3068\u3001Backend \u306e\u30ea\u30bd\u30fc\u30b9\u304c\u672a\u89e3\u6c7a\u306a\u72b6\u614b\u3067\u3082 Frontend \u306e\u74b0\u5883\u5909\u6570\u3068\u3057\u3066\u8a2d\u5b9a\u3067\u304d\u308b\u305f\u3081\u30011 Stack \u3067\u30c7\u30d7\u30ed\u30a4\u3067\u304d\u307e\u3059\u3002\u4ed5\u7d44\u307f\u3068\u3057\u3066\u306f\u3001CDK \u306e CustomResource \u3092\u4f7f\u3044\u3001Lambda \u95a2\u6570\u5185\u3067 Frontend \u3092\u30d3\u30eb\u30c9\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u3046\u3059\u308b\u3053\u3068\u3067\u30011 Stack \u5185\u3067\u524d\u8ff0\u3057\u305f (1) ~ (3) \u306e\u624b\u9806\u304c\u518d\u73fe\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4ed6\u306b\u3082\u65b9\u6cd5\u306f\u3042\u3063\u3066\u3001\u305d\u308c\u305e\u308c\u306e Pros/Cons \u306f ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tmokmss/deploy-time-build"},"deploy-time-build \u306e README.md")," \u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u305c\u3072\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h3",{id:"npm-workspace-\u4f7f\u3063\u3066\u307f\u305f"},"npm workspace \u4f7f\u3063\u3066\u307f\u305f"),(0,r.kt)("p",null,"\u672c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f CDK\u3001Amazon Lex \u306e Frontend\u3001Amazon Kendra \u306e Frontend \u3068 3 \u3064\u306e TypeScript \u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u5185\u5305\u3057\u3066\u3044\u308b\u308f\u3051\u3067\u3059\u304c\u3001\u3053\u306e\u3088\u3046\u306a\u5834\u5408\u3001npm \u306e workspace \u6a5f\u80fd\u304c\u4fbf\u5229\u3067\u3059\u3002npm workspace \u306f npm \u306e 7.x.x \u304b\u3089\u5c0e\u5165\u3055\u308c\u305f\u6a5f\u80fd\u3067\u3001\u8907\u6570\u306e npm \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u5185\u5305\u3057\u3066\u3044\u308b\u30e2\u30ce\u30ea\u30b7\u30c3\u30af\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u7ba1\u7406\u3092\u4fbf\u5229\u306b\u884c\u3063\u3066\u304f\u308c\u308b\u3082\u306e\u3067\u3059\u3002\u4f8b\u3048\u3070\u3001Backend \u3068 Frontend \u3067\u5171\u901a\u3067\u5229\u7528\u3059\u308b\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u5207\u308a\u51fa\u3059\u3053\u3068\u3067\u3001\u7279\u5225\u306a\u6307\u5b9a\u3092\u3059\u308b\u3053\u3068\u306a\u304f\u3001Backend \u3068 Frontend \u304b\u3089\u305d\u306e\u5171\u901a\u30e2\u30b8\u30e5\u30fc\u30eb\u3092 import \u3067\u304d\u307e\u3059\u3002\u4eca\u56de\u306f\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u76f8\u4e92\u306b\u53c2\u7167\u3059\u308b\u3053\u3068\u306f\u306a\u304b\u3063\u305f\u305f\u3081\u3001\u305d\u306e\u3088\u3046\u306a\u6a5f\u80fd\u306f\u4f7f\u3063\u3066\u3044\u306a\u3044\u306e\u3067\u3059\u304c\u3001\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u79fb\u52d5\u3057\u306a\u304c\u3089 npm \u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u306a\u3044\u305f\u3081\u3001\u305d\u308c\u3060\u3051\u3067\u5341\u5206\u4fbf\u5229\u3067\u3057\u305f\u3002"),(0,r.kt)("p",null,"npm workspace \u6a5f\u80fd\u3092\u4f7f\u3046\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b package.json \u306b workspaces \u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002(",(0,r.kt)("inlineCode",{parentName:"p"},"cdk"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"web-kendra"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"web-lexv2")," \u3068\u3044\u3046 3 \u3064\u306e npm \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5185\u5305\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f8b)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\u7701\u7565...\n  "workspaces": [\n    "cdk",\n    "web-kendra",\n    "web-lexv2"\n  ]\n}\n')),(0,r.kt)("p",null,"\u7d9a\u3044\u3066\u3001\u5177\u4f53\u7684\u306b\u4f7f\u3063\u305f\u30b3\u30de\u30f3\u30c9\u3092\u66f8\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067\u3001\u5168\u3066\u306e\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3057\u305f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# --workspaces \u306f -ws \u3067\u3082\u53ef\nnpm install --workspaces\n")),(0,r.kt)("p",null,"Workspace \u3092\u6307\u5b9a\u3057\u3064\u3064\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"npm exec")," \u3092\u5b9f\u884c\u3057\u307e\u3057\u305f\u3002\u306a\u304a\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"npm exec")," \u304c workspace \u5bfe\u5fdc\u3057\u305f\u306e\u306f ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/npm/cli/releases/tag/v7.7.0"},"v7.7.0")," \u304b\u3089\u306e\u3088\u3046\u3067\u3059\u306e\u3067\u3001\u4f7f\u7528\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u3054\u7559\u610f\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# workspace=cdk \u3092\u6307\u5b9a\u3057\u3064\u3064\u3001cdk \u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3044\u308b\nnpm exec -w cdk -- cdk deploy SimpleKendraStack\n")),(0,r.kt)("p",null,"Workspace \u3092\u6307\u5b9a\u3057\u3064\u3064\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"npm run")," \u3092\u5b9f\u884c\u3057\u307e\u3057\u305f\u3002\u306a\u304a\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"npm run")," \u3082 workspace \u5bfe\u5fdc\u3057\u305f\u306e\u306f ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/npm/cli/releases/tag/v7.7.0"},"v7.7.0")," \u304b\u3089\u306e\u3088\u3046\u3067\u3059\u306e\u3067\u3001workspace \u6a5f\u80fd\u3092\u4f7f\u3046\u5834\u5408\u306f v7.7.0 \u4ee5\u964d\u306e npm \u3092\u5229\u7528\u3059\u308b\u306e\u304c\u3088\u3055\u305d\u3046\u3067\u3059\u306d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start -w web-kendra\n")),(0,r.kt)("h3",{id:"amazon-lex-\u306e-bot-\u30d0\u30fc\u30b8\u30e7\u30f3\u3092-cdk-\u3067\u81ea\u52d5\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3059\u308b"},"Amazon Lex \u306e Bot \u30d0\u30fc\u30b8\u30e7\u30f3\u3092 CDK \u3067\u81ea\u52d5\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3059\u308b"),(0,r.kt)("p",null,"Amazon Lex \u3067\u306f\u3001\u8907\u6570\u306e Bot \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3001Alias \u3092\u7279\u5b9a\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u5411\u3051\u308b\u3053\u3068\u3067 Bot \u3092\u5229\u7528\u3057\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001Bot\u3001Bot Version\u3001Bot Alias \u306e 3 \u3064\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u958b\u767a\u4e2d\u3001\u3042\u308b\u3044\u306f\u3001\u672c\u756a\u904b\u7528\u30d5\u30a7\u30fc\u30ba\u306b\u304a\u3044\u3066\u3082\u3001\u5e38\u306b\u6700\u65b0\u306e Bot \u3092\u6307\u3059 Bot Version \u304c\u5fc5\u8981\u306b\u306a\u308b\u30b1\u30fc\u30b9\u304c\u307b\u3068\u3093\u3069\u3060\u3068\u601d\u3044\u307e\u3059\u3002\u305d\u306e\u969b\u3001\u305f\u3060 CDK \u3067 Bot Version \u3092\u4f5c\u6210\u3057\u305f\u3060\u3051\u3067\u306f\u3001Bot \u306e\u5185\u5bb9\u304c\u5909\u66f4\u3055\u308c\u305f\u3068\u3057\u3066\u3082\u3001Bot Version \u81ea\u4f53\u306b\u306f\u5909\u66f4\u304c\u5165\u3063\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u6700\u65b0\u306b\u5411\u3044\u3066\u3044\u308b\u3068\u601d\u3063\u3066\u3044\u308b Bot Version \u304c\u53e4\u3044 Bot \u3092\u793a\u3059\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"simple-lex-kendra-jp \u3067\u306f\u3001\u3053\u306e\u3088\u3046\u306a\u3053\u3068\u304c\u8d77\u3053\u3089\u306a\u3044\u3088\u3046\u306b\u3001\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u305f\u3073\u306b\u4f5c\u6210\u3057\u306a\u304a\u3059 Bot Version \u3092\u4f5c\u6210\u3057\u3066\u3044\u307e\u3059\u3002(\u5e38\u306b\u6700\u65b0\u306b\u5411\u3044\u3066\u3044\u307e\u3059\u3002) \u5177\u4f53\u7684\u306b\u306f\u30ea\u30bd\u30fc\u30b9\u306e Logical ID \u306b\u81ea\u52d5\u3067\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3055\u308c\u308b\u6570\u5b57\u3092\u542b\u307e\u305b\u308b\u3053\u3068\u3067\u3001\u6bce\u56de\u4f5c\u6210\u3057\u306a\u304a\u3059\u3068\u3044\u3046\u3053\u3068\u3092\u884c\u3063\u3066\u3044\u307e\u3059\u3002\u81ea\u52d5\u3067\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3059\u308b\u65b9\u6cd5\u3068\u3057\u3066\u306f\u3001CloudFormation \u306e Output \u3068\u3057\u3066\u73fe\u5728\u306e Bot Version Number \u3092\u51fa\u529b\u3057\u3001\u6b21\u56de\u30c7\u30d7\u30ed\u30a4\u6642\u306b\u305d\u306e\u6570\u5024 + 1 \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u5229\u7528\u3059\u308b\u3001\u3068\u3044\u3046\u3053\u3068\u3092\u884c\u3063\u3066\u3044\u307e\u3059\u3002\u3061\u306a\u307f\u306b\u3001\u3053\u306e\u3088\u3046\u306a\u7528\u9014\u3067\u3042\u308c\u3070\u3001\u5358\u306b\u30e9\u30f3\u30c0\u30e0\u306a Hex \u5024\u3092 Logical ID \u306b\u5165\u308c\u308b\u3068\u3044\u3046\u5b9f\u88c5\u3067\u3082\u826f\u3044\u3068\u601d\u3044\u307e\u3059\u3002\u4eca\u56de\u306f\u3001\u7279\u5b9a\u306e Bot Version Number \u3092\u672c\u756a\u3067\u5229\u7528\u3059\u308b\u3082\u306e\u3068\u3057\u3066 Fix \u3059\u308b\u3068\u3044\u3046\u7528\u9014\u3082\u898b\u636e\u3048\u3066\u6570\u5024\u3092\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3059\u308b\u5b9f\u88c5\u306b\u3057\u307e\u3057\u305f\u3002(\u305d\u306e\u3088\u3046\u306a\u5b9f\u88c5\u306f\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u306b\u306f\u542b\u307e\u308c\u3066\u3044\u307e\u305b\u3093\u3002)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aws-samples/simple-lex-kendra-jp/blob/main/cdk/bin/simple-lex-kendra-jp.ts#L8-L24"},"\u524d\u56de\u30c7\u30d7\u30ed\u30a4\u6642\u306e Bot Version Number \u3092\u53d6\u5f97")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aws-samples/simple-lex-kendra-jp/blob/main/cdk/lib/simple-lexv2-stack.ts#L191"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aws-samples/simple-lex-kendra-jp/blob/main/cdk/lib/simple-lexv2-stack.ts#L304-L306"},"\u73fe\u5728\u306e Bot Version Number \u3092\u51fa\u529b"))),(0,r.kt)("h3",{id:"amazon-lex-\u306e-nluconfidencethreshold-\u306f\u9ad8\u3081\u306b\u8a2d\u5b9a\u3057\u305f\u65b9\u304c\u826f\u3044"},"Amazon Lex \u306e nluConfidenceThreshold \u306f\u9ad8\u3081\u306b\u8a2d\u5b9a\u3057\u305f\u65b9\u304c\u826f\u3044"),(0,r.kt)("p",null,"Amazon Lex \u3067\u306f\u3001\u767a\u8a71\u306b\u5bfe\u3057\u3066\u3069\u306e Intent \u3092\u8d77\u52d5\u3059\u308b\u306e\u304b\u306e\u95be\u5024\u3092 0.0 ~ 1.0 \u3067\u8a2d\u5b9a\u3057\u307e\u3059\u3002CloudFormation \u7684\u306b\u306f nluConfidenceThreshold \u3068\u3044\u3046\u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u3001AWS Management Console \u7684\u306b\u306f Confidence score threshold \u3068\u3044\u3046\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u306a\u308a\u307e\u3059\u3002\u95be\u5024\u3092\u9ad8\u304f\u3059\u308b\u3068\u3001\u3042\u3089\u304b\u3058\u3081\u8a2d\u5b9a\u3057\u305f\u767a\u8a71\u30d1\u30bf\u30fc\u30f3\u306b\u8fd1\u304f\u306a\u3044\u3068 Intent \u304c\u8d77\u52d5\u3057\u306a\u3044\u3068\u3044\u3046\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\u4f4e\u304f\u3059\u308b\u3068\u3001\u3056\u3063\u304f\u308a\u3068\u3057\u305f\u3082\u306e\u3067\u3082 Intent \u3067\u62fe\u3048\u308b\u3088\u3046\u306b\u306a\u308b\u4e00\u65b9\u3001\u4e0d\u6b63\u78ba\u306a Intent \u304c\u30ad\u30c3\u30af\u3055\u308c\u308b\u53ef\u80fd\u6027\u3082\u9ad8\u304f\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u5024\u306f\u904b\u7528\u4e2d\u306b\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0\u3057\u3066\u3044\u304f\u3053\u3068\u306b\u306f\u306a\u308b\u306e\u3067\u3059\u304c\u3001\u57fa\u672c\u7684\u306b\u306f\u9ad8\u3081\u306b\u8a2d\u5b9a\u3057\u3066\u304a\u304f\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u7406\u7531\u3068\u3057\u3066\u306f\u3001\u305d\u308c\u305e\u308c\u306e Cons \u3068\u3057\u3066\u4ee5\u4e0b\u306e 2 \u70b9\u3092\u66f8\u304d\u307e\u3057\u305f\u304c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ad8\u3044\u5834\u5408: \u3042\u3089\u304b\u3058\u3081\u8a2d\u5b9a\u3057\u305f\u767a\u8a71\u30d1\u30bf\u30fc\u30f3\u306b\u8fd1\u304f\u306a\u3044\u3068 Intent \u304c\u8d77\u52d5\u3057\u306a\u3044"),(0,r.kt)("li",{parentName:"ul"},"\u4f4e\u3044\u5834\u5408: \u4e0d\u6b63\u78ba\u306a Intent \u304c\u30ad\u30c3\u30af\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u9ad8\u3044")),(0,r.kt)("p",null,"\u3053\u306e\u3046\u3061\u3001\u9ad8\u3044\u5834\u5408\u306e Cons \u306b\u3064\u3044\u3066\u306f\u904b\u7528\u3067\u30ab\u30d0\u30fc\u304c\u53ef\u80fd\u306a\u305f\u3081\u3067\u3059\u3002\u5177\u4f53\u7684\u306b\u306f\u3001Amazon Lex \u306e Analytics \u6a5f\u80fd\u304b\u3089 Utterances statistics \u3092\u958b\u304d\u3001Missed (\u5bfe\u8c61\u306e Intent \u304c\u308f\u304b\u3089\u306a\u304b\u3063\u305f\u767a\u8a71) \u3092\u53ce\u96c6\u3057\u3066\u3001Slot \u3092\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0\u3057\u305f\u308a\u3001\u65b0\u3057\u304f Intent \u3092\u8ffd\u52a0\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u306a\u305f\u3081\u3067\u3059\u3002\u4e00\u65b9\u3001\u4f4e\u3044\u5834\u5408\u306f\u3001\u30ad\u30c3\u30af\u3055\u308c\u305f Intent \u304c\u4e0d\u6b63\u78ba\u3060\u3063\u305f\u304b\u3069\u3046\u304b\u3092\u8abf\u67fb\u3059\u308b\u306e\u304c\u3001\u304b\u306a\u308a\u9762\u5012\u306b\u306a\u308a\u307e\u3059\u3002\u3088\u3063\u3066\u3001\u6700\u521d\u306b\u9ad8\u3044\u6570\u5024\u3092\u8a2d\u5b9a\u3057\u304a\u304d\u3001\u5f90\u3005\u306b\u767a\u8a71\u30d1\u30bf\u30fc\u30f3\u3092\u5145\u586b\u3055\u305b\u3066\u3044\u304f\u3068\u3044\u3046\u904b\u7528\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u306a\u304a\u3001\u767a\u8a71\u306b\u95a2\u3057\u3066\u306f ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListAggregatedUtterances.html"},"API \u3067\u3082\u53d6\u5f97\u3067\u304d\u308b")," \u305f\u3081\u3001\u5b9a\u671f\u7684\u306b\u904b\u7528\u30c1\u30fc\u30e0\u306b\u30ec\u30dd\u30fc\u30c8\u3059\u308b\u3068\u3044\u3063\u305f\u904b\u7528\u306b\u3057\u3066\u3082\u826f\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u306d\u3002"),(0,r.kt)("h3",{id:"amazon-kendra-\u306e-custom-data-source-\u306e-attribute-\u306b\u306f-_source_uri-\u3092\u3064\u3051\u308b\u3068\u826f\u3044"},"Amazon Kendra \u306e Custom Data Source \u306e Attribute \u306b\u306f ",(0,r.kt)("inlineCode",{parentName:"h3"},"_source_uri")," \u3092\u3064\u3051\u308b\u3068\u826f\u3044"),(0,r.kt)("p",null,"\u57fa\u672c\u7684\u306b\u306f ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/kendra/latest/dg/data-source-custom.html"},"\u3053\u3061\u3089")," \u306e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u66f8\u304b\u308c\u3066\u3044\u308b\u901a\u308a\u306a\u306e\u3067\u3059\u304c\u3001Custom Data Source \u306b\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"_source_uri")," \u306e Attribute \u3082\u3064\u3051\u305f\u65b9\u304c\u826f\u3044\u3068\u8003\u3048\u307e\u3059\u3002(\u5fc5\u9808\u306a Attributes \u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"_data_source_id")," \u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},"_data_source_sync_job_execution_id")," \u306e\u307f\u3067\u3059\u3002) \u7406\u7531\u3068\u3057\u3066\u306f\u3001\u4ed6\u306e\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9 (S3 Bucket \u306a\u3069) \u3067\u306f\u30bd\u30fc\u30b9\u306e URI \u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u307b\u3068\u3093\u3069\u3067\u3042\u308b\u305f\u3081\u3001UI \u3092\u5b9f\u88c5\u3059\u308b\u4e0a\u3067\u540c\u69d8\u306b\u6271\u3048\u305f\u65b9\u304c\u826f\u3044\u3068\u8003\u3048\u308b\u305f\u3081\u3067\u3059\u3002"),(0,r.kt)("h2",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),(0,r.kt)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aws-samples/simple-lex-kendra-jp"},"simple-lex-kendra-jp")," \u958b\u767a\u4e2d\u306b\u5f97\u305f Tips \u3092\u307e\u3068\u3081\u3066\u307f\u307e\u3057\u305f\u3002\u3053\u308c\u3089\u4ee5\u5916\u306b\u3082\u3053\u3061\u3089\u306e\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304b\u3089\u5f97\u3089\u308c\u305f\u77e5\u898b\u3092\u4ee5\u4e0b\u306b\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://prototyping-blog.com/blog/identity-pool-unauth"},"Cognito Identity Pools \u306e Unauthenticated Role \u3067 Amazon Kendra \u306b\u30a2\u30af\u30bb\u30b9\u3057\u305f\u3089 AccessDeniedException \u3060\u3063\u305f\u8a71")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aws-samples/simple-lex-kendra-jp/blob/main/docs/05_TECH_KNOWLEDGE.md"},"Tech Knowledge (Amazon Lex v2 \u3068 Amazon Kendra \u306b\u3064\u3044\u3066\u306e\u77e5\u898b\u3092\u307e\u3068\u3081\u305f\u3082\u306e)"))))}d.isMDXComponent=!0}}]);