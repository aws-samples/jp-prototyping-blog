"use strict";(self.webpackChunk_aws_samples_jp_prototyping_blog=self.webpackChunk_aws_samples_jp_prototyping_blog||[]).push([[4839],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>b});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=o.createContext({}),u=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return o.createElement(c.Provider,{value:e},t.children)},s="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=u(n),m=a,b=s["".concat(c,".").concat(m)]||s[m]||g[m]||r;return n?o.createElement(b,i(i({ref:e},p),{},{components:n})):o.createElement(b,i({ref:e},p))}));function b(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[s]="string"==typeof t?t:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6168:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={title:"Amazon Cognito\u3068X\u3092\u9023\u643a\u3055\u305b\u3001Web3Auth\u3067Blockchain\u306eWallet\u3092\u4f5c\u6210\u3059\u308b",slug:"amazon-cognito-with-x-for-web3auth",tags:["cognito","blockchain","web3auth","wallet"],authors:["fsatsuki","YutaOkoshi"]},i=void 0,l={permalink:"/blog/amazon-cognito-with-x-for-web3auth",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2023-12-22-amazon-cognito-with-x-for-web3auth/index.md",source:"@site/blog/2023-12-22-amazon-cognito-with-x-for-web3auth/index.md",title:"Amazon Cognito\u3068X\u3092\u9023\u643a\u3055\u305b\u3001Web3Auth\u3067Blockchain\u306eWallet\u3092\u4f5c\u6210\u3059\u308b",description:"\u73fe\u72b6\u306e\u8ab2\u984c",date:"2023-12-22T00:00:00.000Z",formattedDate:"2023\u5e7412\u670822\u65e5",tags:[{label:"cognito",permalink:"/blog/tags/cognito"},{label:"blockchain",permalink:"/blog/tags/blockchain"},{label:"web3auth",permalink:"/blog/tags/web-3-auth"},{label:"wallet",permalink:"/blog/tags/wallet"}],readingTime:12.1,hasTruncateMarker:!0,authors:[{name:"Satsuki Fukazu",title:"Prototyping Engineer",url:"https://github.com/fsatsuki",imageURL:"https://github.com/fsatsuki.png",key:"fsatsuki"},{name:"Yuta Okoshi",title:"Solution Architect",url:"https://github.com/YutaOkoshi",imageURL:"https://github.com/YutaOkoshi.png",key:"YutaOkoshi"}],frontMatter:{title:"Amazon Cognito\u3068X\u3092\u9023\u643a\u3055\u305b\u3001Web3Auth\u3067Blockchain\u306eWallet\u3092\u4f5c\u6210\u3059\u308b",slug:"amazon-cognito-with-x-for-web3auth",tags:["cognito","blockchain","web3auth","wallet"],authors:["fsatsuki","YutaOkoshi"]},nextItem:{title:"AWS Amplify JavaScript \u30e9\u30a4\u30d6\u30e9\u30ea v6 \u304c\u30ea\u30ea\u30fc\u30b9\u3055\u308c\u305f\u306e\u3067 v5 \u304b\u3089\u30de\u30a4\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u3057\u3066\u307f\u305f",permalink:"/blog/amplify-v6-migration"}},c={authorsImageUrls:[void 0,void 0]},u=[{value:"\u73fe\u72b6\u306e\u8ab2\u984c",id:"\u73fe\u72b6\u306e\u8ab2\u984c",level:2}],p={toc:u},s="wrapper";function g(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u73fe\u72b6\u306e\u8ab2\u984c"},"\u73fe\u72b6\u306e\u8ab2\u984c"),(0,a.kt)("p",null,"NFT\u306e\u53d7\u3051\u53d6\u308a\u3084\u6697\u53f7\u8cc7\u7523\u306e\u6388\u53d7\u3068\u3044\u3063\u305fWeb3\u306a\u3069\u306eBlockchain\u3092\u4f7f\u7528\u3057\u305f\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3059\u308b\u305f\u3081\u306b\u306f\u307b\u3068\u3093\u3069\u306e\u5834\u5408Wallet\u304c\u5fc5\u8981\u3068\u306a\u308a\u307e\u3059\u3002Wallet\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u79d8\u5bc6\u9375\u7ba1\u7406\u306a\u3069Blockchain\u306e\u77e5\u8b58\u304c\u5fc5\u8981\u3068\u306a\u308a\u3001Blockchain\u306b\u8a73\u3057\u304f\u306a\u3044\u4eba\u305f\u3061\u306b\u3068\u3063\u3066\u6280\u8853\u7684\u306b\u3082\u5fc3\u7406\u7684\u306b\u3082\u30cf\u30fc\u30c9\u30eb\u304c\u9ad8\u304f\u3001\u30b5\u30fc\u30d3\u30b9\u306e\u5229\u7528\u958b\u59cb\u307e\u3067\u306e\u969c\u58c1\u304c\u9ad8\u304f\u306a\u3063\u3066\u3057\u307e\u3063\u3066\u3044\u307e\u3059\u3002\n\u30b9\u30bf\u30f3\u30d7\u30e9\u30ea\u30fc\u306a\u3069\u306e\u30a4\u30d9\u30f3\u30c8\u3067NFT\u3092\u914d\u308a\u305f\u3044\u3068\u8003\u3048\u3066\u3082\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\u5c64\u304cBlockchain\u306b\u8a73\u3057\u304f\u306a\u3044\u4eba\u305f\u3061\u3067\u3042\u308b\u305f\u3081\u3001\u30e6\u30fc\u30b6\u30fc\u304cWallet\u3092\u4f5c\u6210\u3057\u3066\u4f7f\u7528\u3059\u308b\u307e\u3067\u306e\u969c\u58c1\u3092\u53ef\u80fd\u306a\u9650\u308a\u4f4e\u304f\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002"))}g.isMDXComponent=!0}}]);