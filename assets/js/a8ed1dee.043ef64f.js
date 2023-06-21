"use strict";(self.webpackChunkjp_prototyping_blog=self.webpackChunkjp_prototyping_blog||[]).push([[934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={title:"React \u3068 Amazon Transcribe \u3067\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u6587\u5b57\u8d77\u3053\u3057\u3092\u884c\u3046\u65b9\u6cd5",slug:"transcribe-in-react",tags:["react","typescript","transcribe"],authors:["wadabee"]},i=void 0,o={permalink:"/blog/transcribe-in-react",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2023-06-01-transcribe-in-react/index.md",source:"@site/blog/2023-06-01-transcribe-in-react/index.md",title:"React \u3068 Amazon Transcribe \u3067\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u6587\u5b57\u8d77\u3053\u3057\u3092\u884c\u3046\u65b9\u6cd5",description:"Amazon Transcribe (\u4ee5\u964d\u3001Transcribe) \u306f\u3001\u97f3\u58f0\u3092\u30c6\u30ad\u30b9\u30c8\u306b\u5909\u63db\u3059\u308b\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002",date:"2023-06-01T00:00:00.000Z",formattedDate:"2023\u5e746\u67081\u65e5",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"typescript",permalink:"/blog/tags/typescript"},{label:"transcribe",permalink:"/blog/tags/transcribe"}],readingTime:6.135,hasTruncateMarker:!0,authors:[{name:"Yusuke Wada",title:"Prototyping Engineer",url:"https://github.com/wadabee",imageURL:"https://github.com/wadabee.png",key:"wadabee"}],frontMatter:{title:"React \u3068 Amazon Transcribe \u3067\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u6587\u5b57\u8d77\u3053\u3057\u3092\u884c\u3046\u65b9\u6cd5",slug:"transcribe-in-react",tags:["react","typescript","transcribe"],authors:["wadabee"]},prevItem:{title:"Amazon Linux 2023 \u306e EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089 CloudWatch Logs \u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30ed\u30b0\u3092\u8ee2\u9001\u3059\u308b",permalink:"/blog/ec2-cloudwatchlogs-al2023"},nextItem:{title:"Kendra \u3067 S3 \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30a2\u30af\u30bb\u30b9\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3092\u884c\u3046\u65b9\u6cd5",permalink:"/blog/kendra-s3-access-control"}},p={authorsImageUrls:[void 0]},s=[{value:"\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u6587\u5b57\u8d77\u3053\u3057\u306b\u3064\u3044\u3066",id:"\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u6587\u5b57\u8d77\u3053\u3057\u306b\u3064\u3044\u3066",level:2},{value:"Polyfill \u3068\u306f",id:"polyfill-\u3068\u306f",level:3},{value:"webpack \u306e\u5bfe\u5fdc\u65b9\u6cd5",id:"webpack-\u306e\u5bfe\u5fdc\u65b9\u6cd5",level:3},{value:"Vite \u306e\u5bfe\u5fdc\u65b9\u6cd5",id:"vite-\u306e\u5bfe\u5fdc\u65b9\u6cd5",level:3},{value:"\u3055\u3044\u3054\u306b",id:"\u3055\u3044\u3054\u306b",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/jp/transcribe/"},"Amazon Transcribe")," (\u4ee5\u964d\u3001Transcribe) \u306f\u3001\u97f3\u58f0\u3092\u30c6\u30ad\u30b9\u30c8\u306b\u5909\u63db\u3059\u308b\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","SDK \u3092\u5229\u7528\u3057\u305f\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u6587\u5b57\u8d77\u3053\u3057\u3092\u884c\u3046\u3053\u3068\u3067\u3001\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306b\u6587\u5b57\u8d77\u3053\u3057\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u672c\u8a18\u4e8b\u3067\u306f\u3001React \u3067\u5b9f\u88c5\u3055\u308c\u305f Web \u30a2\u30d7\u30ea\u3067 Transcribe \u306e\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u6587\u5b57\u8d77\u3053\u3057\u6a5f\u80fd\u3092\u4f7f\u3046\u969b\u306b\u3001Polyfill \u306e\u8a2d\u5b9a\u304c\u5fc5\u8981\u306b\u306a\u308b\u305f\u3081\u305d\u308c\u3092\u4e2d\u5fc3\u306b\u89e3\u8aac\u3057\u307e\u3059\u3002  "),(0,a.kt)("p",null,"\u672c\u8a18\u4e8b\u306e\u30d9\u30fc\u30b9\u3068\u306a\u3063\u3066\u3044\u308b\u30b3\u30fc\u30c9\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wadabee/react-transcribe"},"\u3053\u3061\u3089\u306e GitHub \u30ea\u30dd\u30b8\u30c8\u30ea"),"\u3067\u516c\u958b\u3057\u3066\u3044\u307e\u3059\u306e\u3067\u3001\u4f75\u305b\u3066\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",{id:"\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u6587\u5b57\u8d77\u3053\u3057\u306b\u3064\u3044\u3066"},"\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u6587\u5b57\u8d77\u3053\u3057\u306b\u3064\u3044\u3066"),(0,a.kt)("p",null,"Transcribe \u306e\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u6587\u5b57\u8d77\u3053\u3057\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-transcribe-streaming/"},"@aws-sdk/client-transcribe-streaming")," \u3068 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microphone-stream/microphone-stream#readme"},"microphone-stream")," \u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u7c21\u5358\u306b\u5b9f\u88c5\u3059\u308b\u3067\u304d\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-transcribe-streaming/"},"@aws-sdk/client-transcribe-streaming")," \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u7d39\u4ecb\u3055\u308c\u3066\u3044\u308b\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u3001\u307b\u307c\u305d\u306e\u307e\u307e\u6d41\u7528\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u304c\u3001Polyfill \u306e\u8a2d\u5b9a\u3092\u3057\u306a\u3044\u3068\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-transcribe-streaming/"},"@aws-sdk/client-transcribe-streaming")," \u3067\u7d39\u4ecb\u3055\u308c\u3066\u3044\u308b\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u5b9f\u88c5\u3059\u308b\u969b\u306e\u30a8\u30e9\u30fc\u89e3\u6d88\u65b9\u6cd5\u3092\u89e3\u8aac\u3057\u307e\u3059\u3002  "),(0,a.kt)("p",null,"\u307e\u305f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"webpack")," \u3068 ",(0,a.kt)("inlineCode",{parentName:"p"},"Vite")," \u3067\u5bfe\u5fdc\u65b9\u6cd5\u304c\u7570\u306a\u308b\u305f\u3081\u3001\u305d\u308c\u305e\u308c\u3067\u9069\u5207\u5bfe\u5fdc\u3092\u53d6\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"webpack")," \u3068 ",(0,a.kt)("inlineCode",{parentName:"p"},"Vite")," \u305d\u308c\u305e\u308c\u306e\u3001Polyfill \u306e\u8a2d\u5b9a\u65b9\u6cd5\u3092\u3054\u7d39\u4ecb\u3057\u307e\u3059\u3002  "),(0,a.kt)("h3",{id:"polyfill-\u3068\u306f"},"Polyfill \u3068\u306f"),(0,a.kt)("p",null,"\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u89e3\u8aac\u306b\u5165\u308b\u524d\u306b\u3001\u7c21\u5358\u306b Polyfill \u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","Polyfill \u3068\u306f\u3001JavaScript \u306e\u5b9f\u884c\u74b0\u5883\u306e\u5dee\u7570\u3092\u5438\u53ce\u3059\u308b\u305f\u3081\u306e\u30b3\u30fc\u30c9\u306e\u3053\u3068\u3067\u3059\u3002  "),(0,a.kt)("p",null,"JavaScript \u306e\u5b9f\u884c\u74b0\u5883\uff08\u30d6\u30e9\u30a6\u30b6\u3084 Node.js \u306a\u3069\uff09\u306f\u591a\u5c90\u306b\u308f\u305f\u308b\u305f\u3081\u3001\u5b9f\u884c\u74b0\u5883\u306b\u3088\u3063\u3066\u306f\u3042\u308b\u6587\u6cd5\u3084\u3042\u308b\u6a5f\u80fd\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","Polyfill \u306f\u305d\u306e\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u306a\u3044\u6587\u6cd5\u3084\u6a5f\u80fd\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306e\u30b3\u30fc\u30c9\u306b\u306a\u308a\u307e\u3059\uff08\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u53e4\u3044\u6587\u6cd5\u30fb\u6a5f\u80fd\u3092\u4f7f\u3063\u3066\u3001\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u306a\u3044\u65b0\u3057\u3044\u6587\u6cd5\u30fb\u6a5f\u80fd\u3092\u518d\u73fe\u3057\u307e\u3059\uff09\u3002  "),(0,a.kt)("p",null,"\u5229\u7528\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u3084\u30a2\u30d7\u30ea\u3092\u52d5\u304b\u3059\u5b9f\u884c\u74b0\u5883\u306b\u3088\u3063\u3066\u306f\u3001Polyfill \u306e\u8a2d\u5b9a\u304c\u5fc5\u8981\u306b\u306a\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002  "),(0,a.kt)("h3",{id:"webpack-\u306e\u5bfe\u5fdc\u65b9\u6cd5"},"webpack \u306e\u5bfe\u5fdc\u65b9\u6cd5"),(0,a.kt)("p",null,"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092 Polyfill \u306e\u8a2d\u5b9a\u3092\u884c\u308f\u305a\u306b\u5b9f\u884c\u3059\u308b\u3068\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30d3\u30eb\u30c9\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.\nThis is no longer the case. Verify if you need this module and configure a polyfill for it.\n")),(0,a.kt)("p",null,"\u3053\u3061\u3089\u306f\u3001webpack 5 \u304b\u3089 Node.js \u306e Polyfill \u306e\u30b3\u30fc\u30c9\u304c\u542b\u307e\u308c\u306a\u304f\u306a\u3063\u3066\u3044\u308b\u305f\u3081\u3001\u4e0a\u8a18\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u3066\u3044\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5fc5\u8981\u306a Polyfill \u306e\u30b3\u30fc\u30c9\u3092\u624b\u52d5\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4eca\u56de\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"buffer")," \u3068 ",(0,a.kt)("inlineCode",{parentName:"p"},"process")," \u304c\u5fc5\u8981\u306a\u306e\u3067\u3001\u305d\u308c\u305e\u308c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install buffer process\n")),(0,a.kt)("p",null,"\u3053\u308c\u3067\u30d3\u30eb\u30c9\u30a8\u30e9\u30fc\u306f\u89e3\u6d88\u3067\u304d\u307e\u3059\u304c\u3001Transcribe\u3000\u3092\u5b9f\u884c\u3059\u308b\u3068\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"index.js:35 Uncaught ReferenceError: Buffer is not defined\n    at fromArrayBuffer (index.js:35:1)\n    at Object.bufferFrom [as default] (index.js:60:1)\n    at ScriptProcessorNode.recorderProcess (microphone-stream.js:108:1)\n")),(0,a.kt)("p",null,"\u3053\u306e\u30a8\u30e9\u30fc\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"index.tsx")," \u306a\u3069\u306b\u3001\u4ee5\u4e0b\u306e Polyfill \u7528\u306e\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u89e3\u6d88\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Buffer } from "buffer";\nimport * as process from "process";\n\nwindow.process = process;\nwindow.Buffer = Buffer;\n')),(0,a.kt)("p",null,"\u3053\u308c\u3067\u3001\u6b63\u5e38\u306b Transcribe \u306e\u5b9f\u884c\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"vite-\u306e\u5bfe\u5fdc\u65b9\u6cd5"},"Vite \u306e\u5bfe\u5fdc\u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Vite")," \u3082 ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack")," \u3068\u540c\u69d8\u3067\u3001 Polyfill \u306e\u8a2d\u5b9a\u3092\u884c\u308f\u305a\u306b\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"index.js:37 Uncaught ReferenceError: Buffer is not defined\n    at fromArrayBuffer (index.js:37:11)\n    at Object.bufferFrom [as default] (index.js:60:12)\n    at ScriptProcessorNode.recorderProcess (microphone-stream.js:110:37)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"webpack")," \u3068\u540c\u69d8\u306b\u3001\u5fc5\u8981\u306a Polyfill \u306e\u30b3\u30fc\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u5f8c\u306b\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"main.tsx")," \u306a\u3069\u306b\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092\u8ffd\u8a18\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u305f\u3060\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Vite")," \u3067\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"process")," \u306f\u5229\u7528\u3057\u307e\u305b\u3093\u306e\u3067\u3001\u3053\u3061\u3089\u306f\u4e0d\u8981\u3067\u3059\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install buffer\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Buffer } from "buffer";\n\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\n(window as any).Buffer = Buffer;\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Vite")," \u306e\u5834\u5408\u306f\u3001\u4e0a\u8a18\u306e\u5bfe\u5fdc\u3060\u3051\u3067\u306f\u4e0d\u5341\u5206\u3067\u3001Transcribe \u3092\u5b9f\u884c\u3059\u308b\u3068\u4ee5\u4e0b\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'call')\n    at MicrophoneStream2.Readable (_stream_readable.js:178:10)\n    at new MicrophoneStream2 (microphone-stream.js:46:28)\n    at startTranscription (useTranscribe.ts:120:17)\n    at HTMLUnknownElement.callCallback2 (react-dom.development.js:4164:14)\n    at Object.invokeGuardedCallbackDev (react-dom.development.js:4213:16)\n    at invokeGuardedCallback (react-dom.development.js:4277:31)\n    at invokeGuardedCallbackAndCatchFirstError (react-dom.development.js:4291:25)\n    at executeDispatch (react-dom.development.js:9041:3)\n    at processDispatchQueueItemsInOrder (react-dom.development.js:9073:7)\n    at processDispatchQueue (react-dom.development.js:9086:5)\n")),(0,a.kt)("p",null,"\u3053\u3061\u3089\u306e\u30a8\u30e9\u30fc\u306f\u3001Node.js \u306e Core Module \u306e Polyfill \u3092\u884c\u3046 Vite \u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u5c0e\u5165\u3059\u308b\u3053\u3068\u3067\u89e3\u6d88\u3067\u304d\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://github.com/davidmyersdev/vite-plugin-node-polyfills"},"vite-plugin-node-polyfills")," \u3092\u5229\u7528\u3057\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304b\u3089\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"vite/vite.config.ts")," \u3092\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D vite-plugin-node-polyfills\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { defineConfig } from "vite";\nimport react from "@vitejs/plugin-react";\nimport { nodePolyfills } from "vite-plugin-node-polyfills";\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [\n    react(),\n    nodePolyfills({\n      // Whether to polyfill `node:` protocol imports.\n      protocolImports: true,\n    }),\n  ],\n});\n')),(0,a.kt)("p",null,"\u3053\u308c\u3067\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Vite")," \u3067\u3082\u6b63\u5e38\u306b Transcribe \u306e\u5b9f\u884c\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u3055\u3044\u3054\u306b"},"\u3055\u3044\u3054\u306b"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u304c\u3001React \u3067 Transcribe \u3092\u4f7f\u3063\u305f\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u6587\u5b57\u8d77\u3053\u3057\u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5\u3067\u3057\u305f\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wadabee/react-transcribe"},"\u3053\u3061\u3089\u306e GitHub \u30ea\u30dd\u30b8\u30c8\u30ea"),"\u3067\u30b3\u30fc\u30c9\u3092\u516c\u958b\u3057\u3066\u3044\u307e\u3059\u306e\u3067\u3001\u8a73\u7d30\u306a\u5b9f\u88c5\u306f\u3053\u3061\u3089\u3067\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"))}d.isMDXComponent=!0}}]);