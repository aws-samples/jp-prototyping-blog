"use strict";(self.webpackChunkjp_prototyping_blog=self.webpackChunkjp_prototyping_blog||[]).push([[5966],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),b=n,y=m["".concat(p,".").concat(b)]||m[b]||u[b]||o;return a?r.createElement(y,i(i({ref:t},c),{},{components:a})):r.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},7831:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={title:"Ruby on Rails \u3092 API Gateway + Lambda \u3067\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u904b\u7528\u3059\u308b\u65b9\u6cd5",slug:"rails-lambda",tags:["lambda","api gateway","ruby on rails"],authors:["yukimine"]},i=void 0,l={permalink:"/blog/rails-lambda",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2022-12-21-rails-lambda/index.md",source:"@site/blog/2022-12-21-rails-lambda/index.md",title:"Ruby on Rails \u3092 API Gateway + Lambda \u3067\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u904b\u7528\u3059\u308b\u65b9\u6cd5",description:"Ruby on Rails \u3067\u958b\u767a\u3055\u308c\u305f Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092 AWS \u3067\u7a3c\u50cd\u3055\u305b\u308b\u969b\u3001EC2 \u306e\u4eee\u60f3\u30b5\u30fc\u30d0\u30fc\u3084 ECS \u306e\u30b3\u30f3\u30c6\u30ca\u74b0\u5883\u3067\u5b9f\u884c\u3057\u3066 ALB \u7b49\u306e\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b5\u30fc\u3067\u516c\u958b\u3059\u308b\u306e\u304c\u4e00\u822c\u7684\u3067\u3059\u3002\u3053\u306e\u65b9\u6cd5\u306f\u7a3c\u50cd\u6642\u9593\u306b\u6bd4\u4f8b\u3057\u305f\u6599\u91d1\u3068\u306a\u308a\u307e\u3059\u304c\u3001\u3082\u30461\u3064\u306e\u9078\u629e\u80a2\u3068\u3057\u3066\u3001\u6642\u9593\u3067\u306f\u306a\u304f\u30ea\u30af\u30a8\u30b9\u30c8\u56de\u6570\u306b\u5fdc\u3058\u305f\u6599\u91d1\u3068\u306a\u308b API Gateway \u3068 Lambda \u3092\u4f7f\u3046\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002\u4eca\u56de\u306f\u3001Ruby on Rails \u3092 AWS Lambda \u3067\u52d5\u304b\u3059\u65b9\u6cd5\u3092\u89e3\u8aac\u3057\u307e\u3059\u3002",date:"2022-12-21T00:00:00.000Z",formattedDate:"2022\u5e7412\u670821\u65e5",tags:[{label:"lambda",permalink:"/blog/tags/lambda"},{label:"api gateway",permalink:"/blog/tags/api-gateway"},{label:"ruby on rails",permalink:"/blog/tags/ruby-on-rails"}],readingTime:13.69,hasTruncateMarker:!0,authors:[{name:"Yukinobu Mine",title:"Prototyping Engineer",url:"https://github.com/Yukinobu-Mine",imageURL:"https://github.com/Yukinobu-Mine.png",key:"yukimine"}],frontMatter:{title:"Ruby on Rails \u3092 API Gateway + Lambda \u3067\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u904b\u7528\u3059\u308b\u65b9\u6cd5",slug:"rails-lambda",tags:["lambda","api gateway","ruby on rails"],authors:["yukimine"]},prevItem:{title:"Fluentd \u304b\u3089 Kinesis Data Streams \u3078\u30b5\u30a4\u30ba\u304c\u5927\u304d\u3044\u30c7\u30fc\u30bf\u3092\u8ee2\u9001\u3059\u308b",permalink:"/blog/fluentd-kds"},nextItem:{title:"\u65b0\u898f AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3067 CodeBuild \u3092\u5229\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9",permalink:"/blog/codebuild-concurrency"}},p={authorsImageUrls:[void 0]},s=[],c={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Ruby on Rails \u3067\u958b\u767a\u3055\u308c\u305f Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092 AWS \u3067\u7a3c\u50cd\u3055\u305b\u308b\u969b\u3001",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/"},"EC2")," \u306e\u4eee\u60f3\u30b5\u30fc\u30d0\u30fc\u3084 ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ecs/"},"ECS")," \u306e\u30b3\u30f3\u30c6\u30ca\u74b0\u5883\u3067\u5b9f\u884c\u3057\u3066 ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/elasticloadbalancing/application-load-balancer/"},"ALB")," \u7b49\u306e\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b5\u30fc\u3067\u516c\u958b\u3059\u308b\u306e\u304c\u4e00\u822c\u7684\u3067\u3059\u3002\u3053\u306e\u65b9\u6cd5\u306f\u7a3c\u50cd\u6642\u9593\u306b\u6bd4\u4f8b\u3057\u305f\u6599\u91d1\u3068\u306a\u308a\u307e\u3059\u304c\u3001\u3082\u30461\u3064\u306e\u9078\u629e\u80a2\u3068\u3057\u3066\u3001\u6642\u9593\u3067\u306f\u306a\u304f\u30ea\u30af\u30a8\u30b9\u30c8\u56de\u6570\u306b\u5fdc\u3058\u305f\u6599\u91d1\u3068\u306a\u308b ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/api-gateway/"},"API Gateway")," \u3068 ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/jp/lambda/"},"Lambda")," \u3092\u4f7f\u3046\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002\u4eca\u56de\u306f\u3001Ruby on Rails \u3092 AWS Lambda \u3067\u52d5\u304b\u3059\u65b9\u6cd5\u3092\u89e3\u8aac\u3057\u307e\u3059\u3002"))}u.isMDXComponent=!0}}]);