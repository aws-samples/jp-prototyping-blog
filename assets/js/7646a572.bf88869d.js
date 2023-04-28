"use strict";(self.webpackChunkjp_prototyping_blog=self.webpackChunkjp_prototyping_blog||[]).push([[2674],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>c});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),l=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=l(e.components);return r.createElement(o.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},b=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(t),b=n,c=d["".concat(o,".").concat(b)]||d[b]||u[b]||p;return t?r.createElement(c,i(i({ref:a},m),{},{components:t})):r.createElement(c,i({ref:a},m))}));function c(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=b;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<p;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},7510:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var r=t(7462),n=(t(7294),t(3905));const p={title:"Lambda Web Adapter \u3068 Prisma \u3092\u5229\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9",slug:"lambda-web-adapter-with-prisma",tags:["lambda","prisma","typescript"],authors:["wadabee"]},i=void 0,s={permalink:"/blog/lambda-web-adapter-with-prisma",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2023-03-02-lambda-web-adapter-with-prisma/index.md",source:"@site/blog/2023-03-02-lambda-web-adapter-with-prisma/index.md",title:"Lambda Web Adapter \u3068 Prisma \u3092\u5229\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9",description:"Lambda Web Adapter \u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3001 \u30b3\u30f3\u30c6\u30ca\u30a4\u30e1\u30fc\u30b8\u3068\u3057\u3066\u5b9f\u88c5\u3057\u305f Web \u30b7\u30b9\u30c6\u30e0\u3092\u7c21\u5358\u306b Lambda \u3067\u52d5\u304b\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002",date:"2023-03-02T00:00:00.000Z",formattedDate:"2023\u5e743\u67082\u65e5",tags:[{label:"lambda",permalink:"/blog/tags/lambda"},{label:"prisma",permalink:"/blog/tags/prisma"},{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:9.965,hasTruncateMarker:!0,authors:[{name:"Yusuke Wada",title:"Prototyping Engineer",url:"https://github.com/wadabee",imageURL:"https://github.com/wadabee.png",key:"wadabee"}],frontMatter:{title:"Lambda Web Adapter \u3068 Prisma \u3092\u5229\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9",slug:"lambda-web-adapter-with-prisma",tags:["lambda","prisma","typescript"],authors:["wadabee"]},prevItem:{title:"OpenAI API \u3092\u4f7f\u3063\u3066 Discord Bot \u3092\u4f5c\u308b",permalink:"/blog/openai-discord-bot"},nextItem:{title:"AWS CDK \u3067 MAC \u30a2\u30c9\u30ec\u30b9\u3068 IP \u30a2\u30c9\u30ec\u30b9\u3092\u56fa\u5b9a\u3057\u305f EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b",permalink:"/blog/primary-eni-with-cdk"}},o={authorsImageUrls:[void 0]},l=[{value:"Lambda Web Adapter \u306b\u3064\u3044\u3066",id:"lambda-web-adapter-\u306b\u3064\u3044\u3066",level:2},{value:"Prisma \u306b\u3064\u3044\u3066",id:"prisma-\u306b\u3064\u3044\u3066",level:2},{value:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u56f3",id:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u56f3",level:2},{value:"Lambda Web Adapter \u3068 Prisma \u3092\u5229\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9",id:"lambda-web-adapter-\u3068-prisma-\u3092\u5229\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9",level:2},{value:"Lambda \u95a2\u6570\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u4e0d\u4e00\u81f4\u306b\u3088\u308b\u5b9f\u884c\u30a8\u30e9\u30fc",id:"lambda-\u95a2\u6570\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u4e0d\u4e00\u81f4\u306b\u3088\u308b\u5b9f\u884c\u30a8\u30e9\u30fc",level:3},{value:"AWS CodeBuild \u3092\u5229\u7528\u3057\u3066\u30b3\u30f3\u30c6\u30ca\u30a4\u30e1\u30fc\u30b8\u3092\u30d3\u30eb\u30c9\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9",id:"aws-codebuild-\u3092\u5229\u7528\u3057\u3066\u30b3\u30f3\u30c6\u30ca\u30a4\u30e1\u30fc\u30b8\u3092\u30d3\u30eb\u30c9\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9",level:4},{value:"Prisma \u3068 OpenSSL \u306e\u4e92\u63db\u6027\u30a8\u30e9\u30fc",id:"prisma-\u3068-openssl-\u306e\u4e92\u63db\u6027\u30a8\u30e9\u30fc",level:3},{value:"Prisma \u304c DB \u30a2\u30af\u30bb\u30b9\u3059\u308b\u4ed5\u7d44\u307f",id:"prisma-\u304c-db-\u30a2\u30af\u30bb\u30b9\u3059\u308b\u4ed5\u7d44\u307f",level:4},{value:"Prisma \u3067 OpenSSL \u306e\u4e92\u63db\u6027\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3059\u308b\u30d1\u30bf\u30fc\u30f3",id:"prisma-\u3067-openssl-\u306e\u4e92\u63db\u6027\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3059\u308b\u30d1\u30bf\u30fc\u30f3",level:4},{value:"\u4e92\u63db\u6027\u30a8\u30e9\u30fc\u306e\u89e3\u6d88\u65b9\u6cd5",id:"\u4e92\u63db\u6027\u30a8\u30e9\u30fc\u306e\u89e3\u6d88\u65b9\u6cd5",level:4},{value:"Prisma \u3067\u306f RDS Proxy \u3092\u5229\u7528\u3059\u308b\u30e1\u30ea\u30c3\u30c8\u304c\u306a\u3044",id:"prisma-\u3067\u306f-rds-proxy-\u3092\u5229\u7528\u3059\u308b\u30e1\u30ea\u30c3\u30c8\u304c\u306a\u3044",level:3},{value:"Prisma \u3092\u5229\u7528\u3059\u308b\u3068\u30d4\u30f3\u7559\u3081\u304c\u767a\u751f\u3059\u308b\u7406\u7531",id:"prisma-\u3092\u5229\u7528\u3059\u308b\u3068\u30d4\u30f3\u7559\u3081\u304c\u767a\u751f\u3059\u308b\u7406\u7531",level:4},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:3}],m={toc:l},d="wrapper";function u(e){let{components:a,...p}=e;return(0,n.kt)(d,(0,r.Z)({},m,p,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Lambda Web Adapter \u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u3001 \u30b3\u30f3\u30c6\u30ca\u30a4\u30e1\u30fc\u30b8\u3068\u3057\u3066\u5b9f\u88c5\u3057\u305f Web \u30b7\u30b9\u30c6\u30e0\u3092\u7c21\u5358\u306b Lambda \u3067\u52d5\u304b\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u3053\u306e Lambda Web Adapter \u3092\u5229\u7528\u3057\u3066\u3001 TypeScript \u306e ORM \u30c4\u30fc\u30eb\u3067\u3042\u308b Prisma \u3092\u4f7f\u7528\u3059\u308b\u969b\u306b\u6ce8\u610f\u3059\u3079\u304d\u30dd\u30a4\u30f3\u30c8\u304c\u3042\u308a\u307e\u3057\u305f\u306e\u3067\u3001\u305d\u3061\u3089\u3092\u3054\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"lambda-web-adapter-\u306b\u3064\u3044\u3066"},"Lambda Web Adapter \u306b\u3064\u3044\u3066"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/awslabs/aws-lambda-web-adapter"},"Lambda Web Adapter")," \u3068\u306f\u3001\u958b\u767a\u8005\u304c\u4f7f\u3044\u6163\u308c\u305f Web \u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u307b\u307c\u305d\u306e\u307e\u307e AWS Lambda \u4e0a\u3067\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u30c4\u30fc\u30eb\u3067\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u3053\u306e\u30c4\u30fc\u30eb\u3092\u4f7f\u3046\u3053\u3068\u3067\u3001\u30b3\u30f3\u30c6\u30ca\u7528\u306b\u5b9f\u88c5\u3057\u305f Web \u30a2\u30d7\u30ea\u306b\u5909\u66f4\u3092\u52a0\u3048\u308b\u3053\u3068\u306a\u304f\u3001Lambda \u4e0a\u3067\u5b9f\u884c\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"Lambda Web Adapter \u306b\u3064\u3044\u3066\u306f\u3001\u5f0a\u30c1\u30fc\u30e0\u30e1\u30f3\u30d0\u30fc\u304c\u8a18\u8f09\u3057\u305f ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/jp/builders-flash/202301/lambda-web-adapter/"},"builders.flash \u306e\u8a18\u4e8b"),"\u306b\u3066\u5177\u4f53\u7684\u306a\u4f7f\u3044\u65b9\u3084\u6027\u80fd\u9762\u306a\u3069\u8a73\u3057\u304f\u7d39\u4ecb\u3055\u308c\u3066\u3044\u307e\u3059\u306e\u3067\u3001\u3053\u3061\u3089\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",{id:"prisma-\u306b\u3064\u3044\u3066"},"Prisma \u306b\u3064\u3044\u3066"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.prisma.io/"},"Prisma")," \u3068\u306f\u3001Node.js \u306e ORM \u30c4\u30fc\u30eb\u3067\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","TypeScript \u306b\u5bfe\u5fdc\u3057\u3066\u304a\u308a\u3001\u578b\u5b89\u5168\u306a\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u64cd\u4f5c\u3001\u81ea\u52d5\u88dc\u5b8c\u6a5f\u80fd\u306b\u3088\u308b\u52b9\u7387\u306e\u826f\u3044\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u306a\u3069\u3092\u5b9f\u73fe\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002  "),(0,n.kt)("h2",{id:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u56f3"},"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u56f3"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u56f3",src:t(5556).Z,width:"411",height:"111"})),(0,n.kt)("p",null,"Lambda \u306b\u306f\u3001\u30b3\u30f3\u30c6\u30ca\u30a4\u30e1\u30fc\u30b8\u3067\u5b9f\u88c5\u3057\u305f\u4ee5\u4e0b\u306e Web \u30a2\u30d7\u30ea\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30d9\u30fc\u30b9\u30a4\u30e1\u30fc\u30b8\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://hub.docker.com/layers/library/node/18.14-bullseye-slim/images/sha256-1ce35098327311d9cb16504d10abf4d5644ecd181279655a5906bb7100c91606"},"node:18.14-bullseye-slim"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Prisma \u3092\u52d5\u4f5c\u3055\u305b\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u306e\u3067\u3001Dockerfile \u5185\u3067 openssl \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"RUN apt-get -y install openssl")))),(0,n.kt)("li",{parentName:"ul"},"Web \u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://expressjs.com/"},"Express"))),(0,n.kt)("h2",{id:"lambda-web-adapter-\u3068-prisma-\u3092\u5229\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9"},"Lambda Web Adapter \u3068 Prisma \u3092\u5229\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9"),(0,n.kt)("h3",{id:"lambda-\u95a2\u6570\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u4e0d\u4e00\u81f4\u306b\u3088\u308b\u5b9f\u884c\u30a8\u30e9\u30fc"},"Lambda \u95a2\u6570\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u4e0d\u4e00\u81f4\u306b\u3088\u308b\u5b9f\u884c\u30a8\u30e9\u30fc"),(0,n.kt)("p",null,"\u3053\u3061\u3089\u306f\u3001Prisma \u3068\u306f\u76f4\u63a5\u95a2\u4fc2\u306e\u306a\u3044\u3082\u306e\u3068\u306a\u308a\u307e\u3059\u304c\u3001\u30cf\u30de\u308a\u3084\u3059\u3044\u30dd\u30a4\u30f3\u30c8\u306e\u305f\u3081\u3054\u7d39\u4ecb\u3057\u307e\u3059\u3002  "),(0,n.kt)("p",null,"Lambda \u95a2\u6570\u306b\u306f\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"arm64")," \u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3068 ",(0,n.kt)("inlineCode",{parentName:"p"},"x86_64")," \u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306e2\u7a2e\u985e\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\uff08",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/foundation-arch.html"},"\u53c2\u8003"),"\uff09\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","Lambda \u95a2\u6570\u3067\u5229\u7528\u3059\u308b\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3068\u30b3\u30f3\u30c6\u30ca\u30a4\u30e1\u30fc\u30b8\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u304c\u4e00\u81f4\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"exec format error")," \u3068\u3044\u3046\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u5b9f\u884c\u3067\u304d\u307e\u305b\u3093\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","Docker \u3092\u5229\u7528\u3057\u3066\u30b3\u30f3\u30c6\u30ca\u30a4\u30e1\u30fc\u30b8\u3092\u30d3\u30eb\u30c9\u3059\u308b\u969b\u306f\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"--platform")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u5229\u7528\u3057\u3066\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3092\u4e00\u81f4\u3055\u305b\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\uff08",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/build/building/multi-platform/#building-multi-platform-images"},"\u53c2\u8003"),"\uff09\u3002  "),(0,n.kt)("h4",{id:"aws-codebuild-\u3092\u5229\u7528\u3057\u3066\u30b3\u30f3\u30c6\u30ca\u30a4\u30e1\u30fc\u30b8\u3092\u30d3\u30eb\u30c9\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9"},"AWS CodeBuild \u3092\u5229\u7528\u3057\u3066\u30b3\u30f3\u30c6\u30ca\u30a4\u30e1\u30fc\u30b8\u3092\u30d3\u30eb\u30c9\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9"),(0,n.kt)("p",null,"CodeBuild \u306b\u306f",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ja_jp/codebuild/latest/userguide/build-env-ref-available.html"},"\u30d3\u30eb\u30c9\u7528\u74b0\u5883\u306e\u30a4\u30e1\u30fc\u30b8\u304c\u7528\u610f"),"\u3055\u308c\u3066\u3044\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u30b3\u30f3\u30c6\u30ca\u30a4\u30e1\u30fc\u30b8\u3092\u30d3\u30eb\u30c9\u3059\u308b\u969b\u306f\u3001\u4ee5\u4e0b\u306e\u30a4\u30e1\u30fc\u30b8\u3092\u9078\u629e\u3044\u305f\u3060\u3051\u308c\u3070\u305d\u308c\u305e\u308c\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u30d3\u30eb\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"arm64")," \u306e\u5834\u5408\u306f\u3001",(0,n.kt)("inlineCode",{parentName:"li"},"aws/codebuild/amazonlinux2-aarch64-standard:2.0"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x86_64"),"\u306e\u5834\u5408\u306f\u3001",(0,n.kt)("inlineCode",{parentName:"li"},"aws/codebuild/amazonlinux2-x86_64-standard:4.0")," \u307e\u305f\u306f\u3001",(0,n.kt)("inlineCode",{parentName:"li"},"aws/codebuild/standard:6.0"))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"arm64")," \u3067\u30d3\u30eb\u30c9\u3092\u884c\u3044\u305f\u3044\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306b\u3064\u3044\u3066\u6ce8\u610f\u304c\u5fc5\u8981\u3067\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"aws/codebuild/amazonlinux2-aarch64-standard:2.0")," \u306b\u30d7\u30ea\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b Node.js \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f ",(0,n.kt)("inlineCode",{parentName:"p"},"10.24.1")," \u3068\u975e\u5e38\u306b\u53e4\u3044\u3082\u306e\u306b\u306a\u3063\u3066\u3044\u307e\u3059\uff08",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aws/aws-codebuild-docker-images/blob/master/al2/aarch64/standard/2.0/Dockerfile#L233"},"\u53c2\u8003"),"\uff09\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u3053\u308c\u3067\u306f\u30012023\u5e7403\u6708 \u73fe\u5728\u3088\u304f\u4f7f\u308f\u308c\u3066\u3044\u308b v16, v18 \u3092\u5229\u7528\u3057\u3066\u958b\u767a\u3092\u884c\u306a\u3063\u3066\u3044\u305f\u5834\u5408\u306b\u3001CodeBuild \u5185\u3067  ",(0,n.kt)("inlineCode",{parentName:"p"},"npm ci")," \u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u306b\u5931\u6557\u3057\u3066\u3057\u307e\u3044\u307e\u3059\uff08\u6ce8\u610f\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nodejs/Release"},"v16 \u306f 2023-09-11 EOL \u4e88\u5b9a"),"\uff09\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u203b v15 \u4ee5\u4e0a\u306e Node.js \u306f lockfileVersion \u304c 3 \u3067\u3042\u308b\u305f\u3081\u3001pakage-lock.json \u306e\u4e92\u63db\u6027\u304c\u306a\u304f\u306a\u308a\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"npm ci")," \u30b3\u30de\u30f3\u30c9\u304c\u5931\u6557\u3057\u307e\u3059\uff08",(0,n.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json#file-format"},"\u53c2\u8003"),"\uff09\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u305d\u306e\u305f\u3081\u3001Node.js \u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u305f\u30ab\u30b9\u30bf\u30e0\u30a4\u30e1\u30fc\u30b8\u3092\u5229\u7528\u3059\u308b\u304b\u3001",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ja_jp/codebuild/latest/userguide/build-spec-ref.html"},"buildspec")," \u306b\u3066 Node.js \u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"prisma-\u3068-openssl-\u306e\u4e92\u63db\u6027\u30a8\u30e9\u30fc"},"Prisma \u3068 OpenSSL \u306e\u4e92\u63db\u6027\u30a8\u30e9\u30fc"),(0,n.kt)("h4",{id:"prisma-\u304c-db-\u30a2\u30af\u30bb\u30b9\u3059\u308b\u4ed5\u7d44\u307f"},"Prisma \u304c DB \u30a2\u30af\u30bb\u30b9\u3059\u308b\u4ed5\u7d44\u307f"),(0,n.kt)("p",null,"OpenSSL \u4e92\u63db\u6027\u30a8\u30e9\u30fc\u306e\u8a71\u306b\u5165\u308b\u524d\u306b\u3001Prisma \u304c DB \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u4ed5\u7d44\u307f\u306e\u4e00\u90e8\u3092\u7c21\u5358\u306b\u3054\u8aac\u660e\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","Prisma \u306f\u3001",(0,n.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/concepts/components/prisma-engines"},"Prisma\u30a8\u30f3\u30b8\u30f3")," \u3068\u547c\u3070\u308c\u308b\u30d0\u30a4\u30ca\u30ea\u3092\u5229\u7528\u3057\u3066 DB \u306b\u30a2\u30af\u30bb\u30b9\u3092\u3057\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u3053\u306e\u4e2d\u306b\u306f ",(0,n.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/concepts/components/prisma-engines/query-engine"},"Query \u30a8\u30f3\u30b8\u30f3"),"\u3068\u3044\u3046\u3082\u306e\u304c\u542b\u307e\u308c\u3066\u304a\u308a\u3001\u3053\u306e Query \u30a8\u30f3\u30b8\u30f3\u306f DB \u3078\u306e\u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u5229\u7528\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u306e Query \u30a8\u30f3\u30b8\u30f3\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f Node-API \u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u3057\u3066\u30ed\u30fc\u30c9\u3055\u308c\u3001Node.js \u4e0a\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","Node-API \u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u3057\u3066\u30ed\u30fc\u30c9\u3057\u305f\u5834\u5408\u306f\u3001\u30aa\u30fc\u30d0\u30d8\u30c3\u30c9\u3092\u6700\u5c0f\u9650\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u3082\u30461\u3064\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u3068\u3057\u3066\u3001\u30d0\u30a4\u30ca\u30ea\u3092\u30b5\u30a4\u30c9\u30ab\u30fc\u30d7\u30ed\u30bb\u30b9\u3068\u3057\u3066\u8d77\u52d5\u3059\u308b\u3053\u3068\u3067\u3001Node.js \u306b\u4f9d\u5b58\u3057\u306a\u3044\u5f62\u3067 Query \u30a8\u30f3\u30b8\u30f3\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u3053\u3061\u3089\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/concepts/components/prisma-engines/query-engine#the-query-engine-at-runtime"},"Prisma \u306e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3068",(0,n.kt)("a",{parentName:"p",href:"https://github.com/prisma/prisma-engines#query-engine"},"Prisma \u30a8\u30f3\u30b8\u30f3\u306eGitHub")," \u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h4",{id:"prisma-\u3067-openssl-\u306e\u4e92\u63db\u6027\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3059\u308b\u30d1\u30bf\u30fc\u30f3"},"Prisma \u3067 OpenSSL \u306e\u4e92\u63db\u6027\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3059\u308b\u30d1\u30bf\u30fc\u30f3"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Node-API\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u3057\u3066Query\u30a8\u30f3\u30b8\u30f3\u3092\u5229\u7528\u3057\u305f\u5834\u5408"),"\u306b\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3068 Node.js \u306e\u7d44\u307f\u5408\u308f\u305b\u306b\u3088\u3063\u3066\u3001OpenSSL \u306e\u4e92\u63db\u6027\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u3066\u3057\u307e\u3044\u307e\u3059\u3002  "),(0,n.kt)("p",null,"Node.js \u306f OpenSSL 1.1.1 \u306e\u8106\u5f31\u6027\u5bfe\u5fdc\u3068\u3057\u3066\u3001v17 \u304b\u3089 OpenSSL3 \u3078\u79fb\u884c\u3055\u308c\u307e\u3057\u305f\uff08",(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/en/blog/announcements/nodejs16-eol/"},"\u53c2\u8003"),"\uff09\u3002\nNode.js v17 \u4ee5\u964d\u3067\u306f\u3001OpenSSL1 \u7cfb\u3067\u5b9f\u88c5\u3055\u308c\u305f\u30d7\u30ed\u30b0\u30e9\u30e0\u3068\u306e\u4e92\u63db\u6027\u554f\u984c\u304c\u767a\u751f\u3057\u3001\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u3066\u3057\u307e\u3046\u5834\u5408\u304c\u3042\u308a\u307e\u3059\uff08",(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/es/blog/release/v17.0.0/#openssl-3-0"},"\u53c2\u8003"),"\uff09\u3002"),(0,n.kt)("p",null,"Linux \u306e Prisma \u30a8\u30f3\u30b8\u30f3\u306e\u30d0\u30a4\u30ca\u30ea\u306f OpenSSL \u306b\u4f9d\u5b58\u3057\u3066\u3044\u308b\u306e\u3067\u3059\u304c\u3001\u305d\u3053\u3067 Node.js \u3068 \u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u5074\u306e OpenSSL \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u9055\u3044\u304c\u3042\u308b\u3068\u4e92\u63db\u6027\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u3066\u3057\u307e\u3044\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#binarytargets-options"},"\u3053\u3061\u3089"),"\u3092\u898b\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u3068\u308f\u304b\u308a\u307e\u3059\u901a\u308a\u3001Prisma \u30a8\u30f3\u30b8\u30f3\u306f\u3054\u304f\u4e00\u90e8\u306e Linux \u30c7\u30a3\u30b9\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u9664\u304d\u3001OpenSSL1 \u7cfb\u306b\u4f9d\u5b58\u3057\u3066\u3044\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u4e0a\u8a18\u306e OpenSSL1 \u7cfb\u306b\u4f9d\u5b58\u3057\u305f\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3092\u30d9\u30fc\u30b9\u30a4\u30e1\u30fc\u30b8\u306b\u3057\u305f\u30b3\u30f3\u30c6\u30ca\u30a4\u30e1\u30fc\u30b8\u3067 v17 \u4ee5\u4e0a\u306e Node.js \u3092\u5b9f\u884c\u3059\u308b\u3068\u3001Prisma \u304c\u30a8\u30e9\u30fc\u3068\u306a\u308a\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u305d\u306e\u305f\u3081\u3001\u30ed\u30fc\u30ab\u30eb\u30de\u30b7\u30f3\uff08Windows \u3084 Mac\uff09\u306e Docker \u4e0a\u3067\u52d5\u4f5c\u3057\u3066\u3044\u305f\u3082\u306e\u304c\u3001Lambda \u4e0a\u3067\u306f\u5b9f\u884c\u3067\u304d\u306a\u3044\u3068\u3044\u3046\u72b6\u614b\u306b\u306a\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002"),(0,n.kt)("h4",{id:"\u4e92\u63db\u6027\u30a8\u30e9\u30fc\u306e\u89e3\u6d88\u65b9\u6cd5"},"\u4e92\u63db\u6027\u30a8\u30e9\u30fc\u306e\u89e3\u6d88\u65b9\u6cd5"),(0,n.kt)("p",null,"\u4e0a\u8a18\u3067\u8aac\u660e\u3057\u305f\u901a\u308a\u3001\u3053\u306e\u4e92\u63db\u6027\u30a8\u30e9\u30fc\u306f Node.js \u3068 Prisma \u30a8\u30f3\u30b8\u30f3\u306e\u30d0\u30a4\u30ca\u30ea\u3068\u3067 OpenSSL \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u7570\u306a\u308b\u305f\u3081\u306b\u767a\u751f\u3057\u3066\u3044\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u305d\u306e\u305f\u3081\u3001Prisma \u30a8\u30f3\u30b8\u30f3\u3092 Node-API \u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u3057\u3066\u30ed\u30fc\u30c9\u305b\u305a\u306b\u3001\u30d0\u30a4\u30ca\u30ea\u3092\u30b5\u30a4\u30c9\u30ab\u30fc\u30d7\u30ed\u30bb\u30b9\u3068\u3057\u3066 Node.js \u3068\u5207\u308a\u96e2\u3057\u3066\u5b9f\u884c\u3059\u308c\u3070\u3001\u30a8\u30e9\u30fc\u3092\u89e3\u6d88\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/concepts/components/prisma-engines/query-engine#defining-the-query-engine-type-for-prisma-client"},"\u3053\u3061\u3089\u306e\u8a2d\u5b9a"),"\u3092\u884c\u3046\u3053\u3068\u3067\u3001\u30a8\u30f3\u30b8\u30f3\u30bf\u30a4\u30d7\u3092 ",(0,n.kt)("inlineCode",{parentName:"p"},"binary")," \u306b\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"prisma-\u3067\u306f-rds-proxy-\u3092\u5229\u7528\u3059\u308b\u30e1\u30ea\u30c3\u30c8\u304c\u306a\u3044"},"Prisma \u3067\u306f RDS Proxy \u3092\u5229\u7528\u3059\u308b\u30e1\u30ea\u30c3\u30c8\u304c\u306a\u3044"),(0,n.kt)("p",null,"\u3053\u3061\u3089\u306e\u8a71\u984c\u306f\u3001Lambda Web Adapter \u3068\u306f\u76f4\u63a5\u95a2\u4fc2\u306e\u306a\u3044\u8a71\u984c\u3068\u306a\u308a\u307e\u3059\u304c\u3001\nLambda + RDS\uff08Aurora\uff09\u306e\u69cb\u6210\u306e\u5834\u5408\u306b\u3001\u30b3\u30cd\u30af\u30b7\u30e7\u30f3\u3092\u52b9\u7387\u7684\u306b\u7ba1\u7406\u3059\u308b\u305f\u3081\u306b RDS Proxy \u3092\u5229\u7528\u3059\u308b\u30b1\u30fc\u30b9\u304c\u3042\u308b\u304b\u3068\u601d\u3044\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u3057\u304b\u3057\u3001Prisma \u3092\u5229\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001RDS Proxy \u304c\u30b3\u30cd\u30af\u30b7\u30e7\u30f3\u3092\u30d4\u30f3\u7559\u3081\uff08\u30b3\u30cd\u30af\u30b7\u30e7\u30f3\u304c\u56fa\u5b9a\u5316\u3055\u308c\u3066\u3001\u4ed6\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u518d\u5229\u7528\u3067\u304d\u306a\u304f\u306a\u308b\uff09\u3057\u3066\u3057\u307e\u3044\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u305d\u306e\u305f\u3081\u3001Prisma \u3092\u5229\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f RDS Proxy \u3092\u5229\u7528\u3059\u308b\u30e1\u30ea\u30c3\u30c8\u304c\u306a\u3044\u3068 Prisma \u306e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u8a18\u8f09\u304c\u3055\u308c\u3066\u3044\u307e\u3059\u3002  "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Prisma is compatible with AWS RDS Proxy. However, there is no benefit in using it for connection pooling with Prisma due to the way RDS Proxy pins connections:")),(0,n.kt)("p",null,"\u5f15\u7528\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/guides/deployment/deployment-guides/caveats-when-deploying-to-aws-platforms#aws-rds-proxy"},"https://www.prisma.io/docs/guides/deployment/deployment-guides/caveats-when-deploying-to-aws-platforms#aws-rds-proxy")),(0,n.kt)("h4",{id:"prisma-\u3092\u5229\u7528\u3059\u308b\u3068\u30d4\u30f3\u7559\u3081\u304c\u767a\u751f\u3059\u308b\u7406\u7531"},"Prisma \u3092\u5229\u7528\u3059\u308b\u3068\u30d4\u30f3\u7559\u3081\u304c\u767a\u751f\u3059\u308b\u7406\u7531"),(0,n.kt)("p",null,"RDS Proxy \u3092\u5229\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u591a\u91cd\u5316\u306b\u3088\u3063\u3066\u4e88\u671f\u305b\u306c\u52d5\u4f5c\u304c\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u5834\u5408\u306b\u3001\u30b3\u30cd\u30af\u30b7\u30e7\u30f3\u304c\u30d4\u30f3\u7559\u3081\u3055\u308c\u307e\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u305d\u3057\u3066\u3001\u3053\u306e\u30b3\u30cd\u30af\u30b7\u30e7\u30f3\u304c\u30d4\u30f3\u7559\u3081\u3055\u308c\u308b\u539f\u56e0\u306e1\u3064\u306b\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"Prepared statements \u3092\u5229\u7528\u3057\u3066SQL\u3092\u767a\u884c\u3059\u308b"),"\u3068\u3044\u3046\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The proxy pins the session to the current connection in the following situations where multiplexing might cause unexpected behavior:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Any statement with a text size greater than 16 KB causes the proxy to pin the session."),(0,n.kt)("li",{parentName:"ul"},"Prepared statements cause the proxy to pin the session. This rule applies whether the prepared statement uses SQL text or the binary protocol."))),(0,n.kt)("p",null,"\u5f15\u7528\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy-managing.html#rds-proxy-pinning"},"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy-managing.html#rds-proxy-pinning")),(0,n.kt)("p",null,"Prisma \u306f Prepared Statement \u3092\u5229\u7528\u3057\u3066 SQL \u3092\u767a\u884c\u3059\u308b\u4ed5\u69d8\u3067\u3042\u308b\u305f\u3081\u3001RDS Proxy \u3092\u5229\u7528\u3059\u308b\u3068\u5fc5\u305a\u30d4\u30f3\u7559\u3081\u304c\u767a\u751f\u3057\u307e\u3059\u3002  "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Because Prisma uses prepared statements for all queries, you won't see any benefit when using RDS Proxy with Prisma.")),(0,n.kt)("p",null,"\u5f15\u7528\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/guides/deployment/deployment-guides/caveats-when-deploying-to-aws-platforms#aws-rds-proxy"},"https://www.prisma.io/docs/guides/deployment/deployment-guides/caveats-when-deploying-to-aws-platforms#aws-rds-proxy")),(0,n.kt)("h3",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),(0,n.kt)("p",null,"\u4ee5\u4e0a\u3001Lambda Web Adapter \u3068 Prisma \u3092\u5229\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9\u3067\u3057\u305f\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","Lambda Web Adapter \u3068 Prisma \u306f\u3069\u3061\u3089\u3082\u4fbf\u5229\u306a\u30c4\u30fc\u30eb\u3067\u3059\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u7686\u3055\u3093\u3082\u305c\u3072\u4f7f\u3063\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"))}u.isMDXComponent=!0},5556:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/architecture-8e1db77ab8f2cf2a99492a731e37db66.png"}}]);