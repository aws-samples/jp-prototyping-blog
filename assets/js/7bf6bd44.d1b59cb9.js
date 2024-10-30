"use strict";(self.webpackChunk_aws_samples_jp_prototyping_blog=self.webpackChunk_aws_samples_jp_prototyping_blog||[]).push([[1450],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,y=p["".concat(u,".").concat(m)]||p[m]||s[m]||l;return n?r.createElement(y,a(a({ref:t},d),{},{components:n})):r.createElement(y,a({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(8168),o=(n(6540),n(5680));const l={title:"\u65b0\u898f AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3067 CodeBuild \u3092\u5229\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9",slug:"codebuild-concurrency",tags:["codebuild"],authors:["yukimine"]},a=void 0,i={permalink:"/blog/codebuild-concurrency",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2022-12-05-codebuild-concurrency/index.md",source:"@site/blog/2022-12-05-codebuild-concurrency/index.md",title:"\u65b0\u898f AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3067 CodeBuild \u3092\u5229\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9",description:"AWS \u306e\u30b5\u30fc\u30d3\u30b9\u306b\u306f\u3001\u65b0\u898f\u4f5c\u6210\u3057\u305f\u3070\u304b\u308a\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3088\u308a\u3082\u4f4e\u3044\u4e0a\u9650\u3092\u8a2d\u3051\u3066\u3044\u308b\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002\u4eca\u56de\u306f\u3001AWS CodeBuild \u306b\u9069\u7528\u3055\u308c\u308b\u4e8b\u304c\u3042\u308b\u5236\u9650\u3092\u3054\u7d39\u4ecb\u3057\u307e\u3059\u3002",date:"2022-12-05T00:00:00.000Z",formattedDate:"2022\u5e7412\u67085\u65e5",tags:[{label:"codebuild",permalink:"/blog/tags/codebuild"}],readingTime:4.065,hasTruncateMarker:!0,authors:[{name:"Yukinobu Mine",title:"Prototyping Engineer",url:"https://github.com/Yukinobu-Mine",imageURL:"https://github.com/Yukinobu-Mine.png",key:"yukimine"}],frontMatter:{title:"\u65b0\u898f AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3067 CodeBuild \u3092\u5229\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9",slug:"codebuild-concurrency",tags:["codebuild"],authors:["yukimine"]},prevItem:{title:"Ruby on Rails \u3092 API Gateway + Lambda \u3067\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u904b\u7528\u3059\u308b\u65b9\u6cd5",permalink:"/blog/rails-lambda"},nextItem:{title:"Jenkins\u306eEC2\u30d7\u30e9\u30b0\u30a4\u30f3\u306f2\u3064\u3042\u308b",permalink:"/blog/jenkins-ec2"}},u={authorsImageUrls:[void 0]},c=[{value:"AWS CodeBuild \u3068\u306f",id:"aws-codebuild-\u3068\u306f",level:2},{value:"AWS CodeBuild \u306e\u30d3\u30eb\u30c9\u540c\u6642\u5b9f\u884c\u6570",id:"aws-codebuild-\u306e\u30d3\u30eb\u30c9\u540c\u6642\u5b9f\u884c\u6570",level:2},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2}],d={toc:c},p="wrapper";function s(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"AWS \u306e\u30b5\u30fc\u30d3\u30b9\u306b\u306f\u3001\u65b0\u898f\u4f5c\u6210\u3057\u305f\u3070\u304b\u308a\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3088\u308a\u3082\u4f4e\u3044\u4e0a\u9650\u3092\u8a2d\u3051\u3066\u3044\u308b\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002\u4eca\u56de\u306f\u3001AWS CodeBuild \u306b\u9069\u7528\u3055\u308c\u308b\u4e8b\u304c\u3042\u308b\u5236\u9650\u3092\u3054\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,o.yg)("h2",{id:"aws-codebuild-\u3068\u306f"},"AWS CodeBuild \u3068\u306f"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://aws.amazon.com/codebuild/"},"AWS CodeBuild")," \u306f\u3001\u30d5\u30eb\u30de\u30cd\u30fc\u30b8\u30c9\u306a\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u958b\u767a\u74b0\u5883\u3092\u63d0\u4f9b\u3059\u308b Code \u30b7\u30ea\u30fc\u30ba\u306e\u30b5\u30fc\u30d3\u30b9\u306e1\u3064\u3067\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u30d3\u30eb\u30c9\u3084\u30c6\u30b9\u30c8\u306e\u30d5\u30a7\u30fc\u30ba\u3092\u62c5\u5f53\u3057\u3066\u3044\u307e\u3059\u3002CodeBuild \u3092\u4f7f\u3046\u4e8b\u3067\u3001\u30d3\u30eb\u30c9\u3084\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u30b5\u30fc\u30d0\u30fc\u306e\u69cb\u7bc9\u3084\u904b\u7528\u304b\u3089\u89e3\u653e\u3055\u308c\u3001\u5fc5\u8981\u306a\u6642\u306b\u5fc5\u8981\u306a\u3060\u3051\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u6301\u3064\u30a4\u30f3\u30d5\u30e9\u3067\u81ea\u52d5\u7684\u306b\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002CodeBuild \u306e\u8a73\u3057\u3044\u4f7f\u3044\u65b9\u306b\u3064\u3044\u3066\u77e5\u308a\u305f\u3044\u65b9\u306f\u3001",(0,o.yg)("a",{parentName:"p",href:"https://youtu.be/Zzv1_ztf-B0"},"Black Belt Online Seminar")," \u306e\u52d5\u753b\u3092\u898b\u3066\u9802\u3051\u308c\u3070\u3068\u601d\u3044\u307e\u3059\u3002"),(0,o.yg)("h2",{id:"aws-codebuild-\u306e\u30d3\u30eb\u30c9\u540c\u6642\u5b9f\u884c\u6570"},"AWS CodeBuild \u306e\u30d3\u30eb\u30c9\u540c\u6642\u5b9f\u884c\u6570"),(0,o.yg)("p",null,"AWS CodeBuild \u3067\u306f\u3001\u8907\u6570\u306e\u30d3\u30eb\u30c9\u3092\u4e26\u5217\u3067\u5b9f\u884c\u3059\u308b\u4e8b\u304c\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u4f9d\u5b58\u95a2\u4fc2\u306e\u306a\u3044\u30d3\u30eb\u30c9\u3092\u4e26\u5217\u3067\u5b9f\u884c\u3059\u308b\u4e8b\u3067\u30d3\u30eb\u30c9\u306b\u304b\u304b\u308b\u6642\u9593\u3092\u5927\u304d\u304f\u77ed\u7e2e\u3059\u308b\u4e8b\u304c\u3067\u304d\u307e\u3059\u304c\u3001\u540c\u6642\u5b9f\u884c\u3067\u304d\u308b\u30d3\u30eb\u30c9\u306e\u6570\u306b\u306f\u30a2\u30ab\u30a6\u30f3\u30c8\u6bce\u306b\u4e0a\u9650\u304c\u8a2d\u3051\u3089\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/codebuild/latest/userguide/limits.html"},"AWS CodeBuild \u306e\u30af\u30a9\u30fc\u30bf"),"\u306e\u30da\u30fc\u30b8\u3092\u898b\u308b\u3068\u3001\u300c\u30d3\u30eb\u30c9\u306e\u540c\u6642\u5b9f\u884c\u300d\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u4e0a\u9650\u306f\u300c60\u300d\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u304c\u3001\u4e0b\u306e\u65b9\u306b\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u6ce8\u91c8\u304c\u66f8\u304b\u308c\u3066\u3044\u307e\u3059\u3002(2022\u5e7412\u6708\u73fe\u5728)"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"\u540c\u6642\u5b9f\u884c\u30d3\u30eb\u30c9\u306e\u6700\u5927\u6570\u306e\u30af\u30a9\u30fc\u30bf\u306f\u3001\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30bf\u30a4\u30d7\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002\n\u4e00\u90e8\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3068\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30bf\u30a4\u30d7\u3067\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306f 20 \u3067\u3059\u3002\n\u65b0\u3057\u3044\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u5834\u5408\u3001\u30af\u30a9\u30fc\u30bf\u306f\u6700\u4f4e 5 \u306b\u306a\u308a\u307e\u3059\u3002")),(0,o.yg)("p",null,"\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30bf\u30a4\u30d7\u306b\u3064\u3044\u3066\u306f\u3001",(0,o.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html"},"\u30d3\u30eb\u30c9\u74b0\u5883\u306e\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30bf\u30a4\u30d7"),"\u306e\u30da\u30fc\u30b8\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002\u8a73\u7d30\u306f\u975e\u516c\u8868\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u304c\u3001\u4e00\u90e8\u306e\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30bf\u30a4\u30d7\u306b\u306f\u7570\u306a\u308b\u4e0a\u9650\u304c\u8a2d\u3051\u3089\u308c\u3066\u3044\u307e\u3059\u3002\u73fe\u5728\u306e\u4e0a\u9650\u304c\u3044\u304f\u3064\u3067\u3042\u308b\u304b\u306f\u3001\u5b9f\u969b\u306b\u5b9f\u884c\u3057\u3066\u307f\u3066\u300c",(0,o.yg)("inlineCode",{parentName:"p"},"Cannot have more than X builds in queue for the account"),"\u300d\u3068\u3044\u3063\u305f\u30a8\u30e9\u30fc\u304c\u51fa\u308b\u4e8b\u3067\u3057\u304b\u78ba\u8a8d\u3067\u304d\u307e\u305b\u3093\u3002"),(0,o.yg)("p",null,"\u305d\u3057\u3066\u3001\u4eca\u56de\u306e\u672c\u984c\u3067\u3042\u308b\u300c\u65b0\u898f AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u9069\u7528\u3055\u308c\u308b\u5236\u9650\u300d\u306b\u3064\u3044\u3066\u3082\u8a18\u8f09\u3055\u308c\u3066\u304a\u308a\u3001\u300c\u65b0\u3057\u3044\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u5834\u5408\u3001\u30af\u30a9\u30fc\u30bf\u306f\u6700\u4f4e 5 \u306b\u306a\u308a\u307e\u3059\u300d\u3068\u3042\u308a\u307e\u3059\u304c\u3001\u672c\u5f53\u306b\u65b0\u898f\u4f5c\u6210\u3057\u305f\u3070\u304b\u308a\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u5834\u5408\u3001\u5236\u9650\u304c 5 \u3067\u306f\u306a\u304f 1 \u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u305d\u306e\u72b6\u614b\u3067\u306f\u4e26\u5217\u30d3\u30eb\u30c9\u306e\u6a5f\u80fd\u3092\u4f7f\u3046\u4e8b\u304c\u3067\u304d\u305a\u3001\u9010\u6b21\u5b9f\u884c\u3055\u305b\u308b\u5fc5\u8981\u304c\u3042\u308b\u3068\u3044\u3046\u4e8b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,o.yg)("p",null,"\u7121\u6599\u67a0\u306e\u7bc4\u56f2\u5185\u3067\u3082\u69cb\u3044\u307e\u305b\u3093\u306e\u3067\u3001AWS \u30b5\u30fc\u30d3\u30b9\u306e\u5229\u7528\u5b9f\u614b\u3092\u3042\u308b\u7a0b\u5ea6\u7a4d\u3080\u4e8b\u3067\u3053\u306e\u5236\u9650\u306f\u89e3\u9664\u3055\u308c\u308b\u3088\u3046\u3067\u3059\u304c\u3001\u65b0\u898f\u4f5c\u6210\u3057\u305f AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3067 CodeBuild \u306e\u4e26\u5217\u5b9f\u884c\u3092\u884c\u3044\u305f\u3044\u5834\u5408\u306f\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002"),(0,o.yg)("h2",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"AWS CodeBuild \u306e\u30d3\u30eb\u30c9\u540c\u6642\u5b9f\u884c\u6570\u306e\u4e0a\u9650\u306f\u4e00\u5f8b\u3067\u306f\u306a\u304f\u3001\u6761\u4ef6\u306b\u3088\u3063\u3066\u7570\u306a\u308b"),(0,o.yg)("li",{parentName:"ul"},"\u65b0\u898f\u4f5c\u6210\u3057\u305f\u3070\u304b\u308a\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u306f\u3001\u540c\u6642\u5b9f\u884c\u6570\u306e\u4e0a\u9650\u304c 1 \u3067\u4e26\u5217\u30d3\u30eb\u30c9\u304c\u3067\u304d\u306a\u3044\u5834\u5408\u304c\u3042\u308b")))}s.isMDXComponent=!0}}]);