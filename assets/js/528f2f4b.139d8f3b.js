"use strict";(self.webpackChunkjp_prototyping_blog=self.webpackChunkjp_prototyping_blog||[]).push([[9843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),m=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=m(e.components);return l.createElement(i.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,h=u["".concat(i,".").concat(d)]||u[d]||s[d]||o;return n?l.createElement(h,r(r({ref:t},c),{},{components:n})):l.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,r[1]=p;for(var m=2;m<o;m++)r[m]=n[m];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var l=n(7462),a=(n(7294),n(3905));const o={title:"Amazon CloudWatch RUM \u3067 Jekyll \u306e\u9759\u7684\u30b5\u30a4\u30c8\u306e\u30a2\u30af\u30bb\u30b9\u89e3\u6790\u3092\u884c\u3046",slug:"jekyll-cloudwatch-rum",tags:["cloudwatch","rum","jekyll"],authors:["tbrand"]},r="\u6982\u8981",p={permalink:"/blog/jekyll-cloudwatch-rum",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2022-08-03-jekyll-cloudwatch-rum/index.md",source:"@site/blog/2022-08-03-jekyll-cloudwatch-rum/index.md",title:"Amazon CloudWatch RUM \u3067 Jekyll \u306e\u9759\u7684\u30b5\u30a4\u30c8\u306e\u30a2\u30af\u30bb\u30b9\u89e3\u6790\u3092\u884c\u3046",description:"\u672c\u8a18\u4e8b\u3067\u306f\u3001GitHub Pages \u3067\u5e83\u304f\u5229\u7528\u3055\u308c\u3066\u3044\u308b\u9759\u7684\u30b5\u30a4\u30c8\u4f5c\u6210\u30c4\u30fc\u30eb Jekyll \u3068 AWS \u306e Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u30c4\u30fc\u30eb\u3067\u3042\u308b Amazon CloudWatch RUM \u3092\u7d44\u307f\u5408\u308f\u305b\u305f\u30a2\u30af\u30bb\u30b9\u89e3\u6790\u53ef\u80fd\u306a\u9759\u7684\u30b5\u30a4\u30c8\u306e\u69cb\u7bc9\u65b9\u6cd5\u3092\u3054\u7d39\u4ecb\u3044\u305f\u3057\u307e\u3059\u3002\u306a\u304a\u3001\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u89e6\u308c\u307e\u305b\u3093\u3002",date:"2022-08-03T00:00:00.000Z",formattedDate:"2022\u5e748\u67083\u65e5",tags:[{label:"cloudwatch",permalink:"/blog/tags/cloudwatch"},{label:"rum",permalink:"/blog/tags/rum"},{label:"jekyll",permalink:"/blog/tags/jekyll"}],readingTime:6.47,hasTruncateMarker:!0,authors:[{name:"Taichiro Suzuki",title:"Prototyping Engineer",url:"https://github.com/tbrand",imageURL:"https://github.com/tbrand.png",key:"tbrand"}],frontMatter:{title:"Amazon CloudWatch RUM \u3067 Jekyll \u306e\u9759\u7684\u30b5\u30a4\u30c8\u306e\u30a2\u30af\u30bb\u30b9\u89e3\u6790\u3092\u884c\u3046",slug:"jekyll-cloudwatch-rum",tags:["cloudwatch","rum","jekyll"],authors:["tbrand"]},prevItem:{title:"AWS CDK \u3067\u9759\u7684\u30b5\u30a4\u30c8\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b (CloudFront + S3 + CF2)",permalink:"/blog/cdk-static-website"}},i={authorsImageUrls:[void 0]},m=[],c={toc:m},u="wrapper";function s(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,l.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u8a18\u4e8b\u3067\u306f\u3001GitHub Pages \u3067\u5e83\u304f\u5229\u7528\u3055\u308c\u3066\u3044\u308b\u9759\u7684\u30b5\u30a4\u30c8\u4f5c\u6210\u30c4\u30fc\u30eb Jekyll \u3068 AWS \u306e Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u30c4\u30fc\u30eb\u3067\u3042\u308b Amazon CloudWatch RUM \u3092\u7d44\u307f\u5408\u308f\u305b\u305f\u30a2\u30af\u30bb\u30b9\u89e3\u6790\u53ef\u80fd\u306a\u9759\u7684\u30b5\u30a4\u30c8\u306e\u69cb\u7bc9\u65b9\u6cd5\u3092\u3054\u7d39\u4ecb\u3044\u305f\u3057\u307e\u3059\u3002\u306a\u304a\u3001\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u89e6\u308c\u307e\u305b\u3093\u3002"),(0,a.kt)("h1",{id:"jekyll-\u306e\u6e96\u5099"},"Jekyll \u306e\u6e96\u5099"),(0,a.kt)("p",null,"\u57fa\u672c\u7684\u306b\u306f ",(0,a.kt)("a",{parentName:"p",href:"http://jekyllrb-ja.github.io/"},"Jekyll")," \u306e\u516c\u5f0f\u30b5\u30a4\u30c8\u306e\u624b\u9806\u3092\u306a\u305e\u308b\u5f62\u306b\u306a\u308a\u307e\u3059\u3002Jekyll \u306e\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30c4\u30fc\u30eb\u306f gem (Ruby \u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u5f62\u5f0f) \u3067\u516c\u958b\u3055\u308c\u3066\u3044\u307e\u3059\u306e\u3067\u3001\u624b\u5143\u306e\u74b0\u5883\u306b Ruby \u304c\u5fc5\u8981\u3060\u3068\u3044\u3046\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"jekyll")," \u30b3\u30de\u30f3\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"hello-rum")," \u3068\u3044\u3046\u30b5\u30a4\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gem install bundler jekyll\njekyll new hello-rum\ncd hello-rum\n")),(0,a.kt)("p",null,"\u516c\u5f0f\u306e\u624b\u9806\u3067\u306f\u6b21\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve")," \u3092\u5b9f\u884c\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u7b46\u8005\u306e\u624b\u5143\u306e\u74b0\u5883\u3067\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"webrick")," \u3068\u3044\u3046 gem \u304c\u5fc5\u8981\u3060\u3068\u3044\u3046\u30a8\u30e9\u30fc\u304c\u51fa\u307e\u3057\u305f\u3002\u540c\u69d8\u306e\u30a8\u30e9\u30fc\u306b\u906d\u9047\u3057\u305f\u5834\u5408\u3001Gemfile \u306b\u4ee5\u4e0b\u306e\u4e00\u6587\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'source "https://rubygems.org"\n\n...\u7701\u7565...\n\n# \u672b\u5c3e\u306b\u3053\u308c\u3092\u8ffd\u52a0\ngem "webrick"\n')),(0,a.kt)("p",null,"\u6700\u5f8c\u306b\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066 serve \u3092\u958b\u59cb\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bundle install\nbundle exec jekyll serve\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://localhost:4000"},"http://localhost:4000")," \u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001\u6b63\u5e38\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h1",{id:"amazon-cloudwatch-rum-\u306b\u3088\u308b-app-monitor-\u306e\u4f5c\u6210"},"Amazon CloudWatch RUM \u306b\u3088\u308b App monitor \u306e\u4f5c\u6210"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/cloudwatch/home#rum:dashboard?tab=overview"},"Amazon CloudWatch RUM")," \u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001\u53f3\u4e0a\u306e\u300cAdd app monitor\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066 App monitor \u306e\u4f5c\u6210\u3092\u958b\u59cb\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"App monitor \u540d\u306f\u300chello-rum\u300d\u306b\u3057\u307e\u3059\u3002Application domain \u306f\u691c\u8a3c\u76ee\u7684\u306e\u305f\u3081\u300clocalhost\u300d\u306b\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"App monitor 01",src:n(6354).Z,width:"875",height:"361"})),(0,a.kt)("p",null,"\u96c6\u3081\u308b\u30c7\u30fc\u30bf\u306b\u306f\u5168\u3066\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u307e\u3059\u3002\u4e0d\u5fc5\u8981\u306a\u3082\u306e\u304c\u3042\u308b\u5834\u5408\u306f\u30c1\u30a7\u30c3\u30af\u3092\u5916\u3057\u3066\u3082\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"App monitor 02",src:n(2421).Z,width:"876",height:"387"})),(0,a.kt)("p",null,"\u300cAllow cookies\u300d\u306e\u30c1\u30a7\u30c3\u30af\u306f\u5916\u3057\u307e\u3057\u305f\u3002\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u305f\u5834\u5408\u306f\u3001cookie \u3092\u8a2d\u5b9a\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u306e\u52d5\u5411\u3092\u8ffd\u8de1\u3067\u304d\u307e\u3059\u3002\u300cSession samples\u300d\u306f 100% \u306b\u3057\u307e\u3059\u3002\u300cData Storage\u300d\u306f\u6709\u52b9\u306b\u3057\u307e\u3057\u305f\u3002\u3053\u308c\u306b\u3088\u308a\u3001CloudWatch Logs \u3067\u30c7\u30fc\u30bf\u3092\u96c6\u8a08\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"App monitor 03",src:n(7073).Z,width:"873",height:"567"})),(0,a.kt)("p",null,"\u4f5c\u6210\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001\u7d44\u307f\u8fbc\u307f\u7528\u306e Snippet \u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002TypeScript\u3001JavaScript\u3001HTML \u304c\u9078\u629e\u3067\u304d\u307e\u3059\u304c\u3001Jekyll \u7528\u306b\u300cHTML\u300d\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u53f3\u4e0a\u304b\u3089 Snippet \u3092\u30b3\u30d4\u30fc\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"App monitor 04",src:n(9886).Z,width:"874",height:"681"})),(0,a.kt)("h1",{id:"jekyll-\u306b-app-monitor-\u3092\u7d44\u307f\u8fbc\u3080"},"Jekyll \u306b App monitor \u3092\u7d44\u307f\u8fbc\u3080"),(0,a.kt)("p",null,"jekyll (\u30d0\u30fc\u30b8\u30e7\u30f3 4.2.2) \u3067\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jekyll/minima"},"minima")," \u3068\u3044\u3046\u30c6\u30fc\u30de\u304c\u9069\u5fdc\u3055\u308c\u3066\u3044\u307e\u3059\u3002Snippet \u3092\u7d44\u307f\u8fbc\u3080 ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," \u30bf\u30b0\u3092\u4e0a\u66f8\u304d\u3059\u308b\u305f\u3081\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"hello-rum")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"_includes")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u4e2d\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"head.html")," \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"head.html")," \u306e\u5185\u5bb9\u306f\u4ee5\u4e0b\u306b\u3057\u307e\u3059\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"\x3c!-- \u3053\u3053\u306b App monitor \u306e\u30b9\u30cb\u30da\u30c3\u30c8\u3092\u8cbc\u308a\u4ed8\u3051\u308b --\x3e")," \u306f Snippet \u306b\u7f6e\u304d\u63db\u3048\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  <meta charset="utf-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  {%- seo -%}\n  <link rel="stylesheet" href="{{ "/assets/main.css" | relative_url }}">\n  {%- feed_meta -%}\n\n  \x3c!-- \u3053\u3053\u306b App monitor \u306e\u30b9\u30cb\u30da\u30c3\u30c8\u3092\u8cbc\u308a\u4ed8\u3051\u308b --\x3e\n</head>\n')),(0,a.kt)("p",null,"\u4e0a\u306e\u30b3\u30fc\u30c9\u306f\u307b\u3068\u3093\u3069 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jekyll/minima/blob/master/_includes/head.html"},"minima \u306e ",(0,a.kt)("inlineCode",{parentName:"a"},"_includes/head.html"))," \u306e\u5185\u5bb9\u3067\u3059\u304c\u3001\u4e0b\u90e8\u306b App monitor \u306e\u30b9\u30cb\u30da\u30c3\u30c8\u3092\u7d44\u307f\u8fbc\u307f\u307e\u3059\u3002\u307e\u305f\u3001minima \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u3088\u3063\u3066\u306f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jekyll/minima/blob/master/_includes/custom-head.html"},(0,a.kt)("inlineCode",{parentName:"a"},"_includes/custom-head.html"))," \u3082\u5229\u7528\u53ef\u80fd\u306a\u3088\u3046\u306a\u306e\u3067\u3001\u305d\u3061\u3089\u306b\u30b9\u30cb\u30da\u30c3\u30c8\u3092\u8cbc\u308a\u4ed8\u3051\u3066\u3082\u826f\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://localhost:4000"},"http://localhost:4000")," \u3092\u4f55\u5ea6\u304b\u30ea\u30ed\u30fc\u30c9\u3057\u305f\u308a\u8a18\u4e8b\u3092\u95b2\u89a7\u3057\u305f\u308a\u3057\u3066 App monitor \u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306b\u30c7\u30fc\u30bf\u304c\u8868\u793a\u3055\u308c\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u6210\u529f\u3057\u3066\u3044\u308b\u3068\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u30c7\u30fc\u30bf\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"App monitor 05",src:n(3655).Z,width:"1509",height:"850"})),(0,a.kt)("h1",{id:"production-\u74b0\u5883\u3078\u306e\u7d44\u307f\u8fbc\u307f"},"Production \u74b0\u5883\u3078\u306e\u7d44\u307f\u8fbc\u307f"),(0,a.kt)("p",null,"\u524d\u8ff0\u3057\u305f App monitor \u306f localhost \u306b\u8a2d\u5b9a\u3057\u305f\u958b\u767a\u7528\u306e\u3082\u306e\u3067\u3057\u305f\u3002\u672c\u756a\u7528\u306e App monitor \u3082\u7d44\u307f\u8fbc\u3093\u3067\u307f\u307e\u3059\u3002\u524d\u8ff0\u3057\u305f\u624b\u9806\u3068\u540c\u69d8\u306b App monitor \u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002App monitor \u540d\u306f\u300chello-rum-prod\u300d\u306b\u3057\u3066\u3001Application domain \u306f\u672c\u756a\u74b0\u5883\u3067\u4f7f\u3046\u30c9\u30e1\u30a4\u30f3\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002GitHub Pages \u306e\u5834\u5408\u300c",(0,a.kt)("inlineCode",{parentName:"p"},"<org\u540d>.github.io"),"\u300d\u306b\u306a\u308a\u307e\u3059\u3002\u4ed6\u306e\u8a2d\u5b9a\u306f\u540c\u3058\u3067\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002Snippet \u306f\u30b3\u30d4\u30fc\u3057\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"\u7d9a\u3044\u3066\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"head.html")," \u3092\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u7de8\u96c6\u3057\u307e\u3059\u3002\u672c\u756a\u74b0\u5883\u304b\u5426\u304b\u3092 ",(0,a.kt)("inlineCode",{parentName:"p"},'{% if jekyll.environment == "development" %}')," \u3067\u5224\u65ad\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  <meta charset="utf-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  {%- seo -%}\n  <link rel="stylesheet" href="{{ "/assets/main.css" | relative_url }}">\n  {%- feed_meta -%}\n\n  {% if jekyll.environment == "development" %}\n  \x3c!-- \u3053\u3053\u306b\u958b\u767a\u7528 (localhost) \u306e App monitor \u306e\u30b9\u30cb\u30da\u30c3\u30c8\u3092\u8cbc\u308a\u4ed8\u3051\u308b --\x3e\n  {% else %}\n  \x3c!-- \u3053\u3053\u306b\u672c\u756a\u7528\u306e App monitor \u306e\u30b9\u30cb\u30da\u30c3\u30c8\u3092\u8cbc\u308a\u4ed8\u3051\u308b --\x3e\n  {% endif %}\n</head>\n')),(0,a.kt)("p",null,"\u672c\u756a\u74b0\u5883\u306b\u30c7\u30d7\u30ed\u30a4\u3057\u305f\u3042\u3068\u3001\u6b63\u5e38\u306b\u30c7\u30fc\u30bf\u304c\u53d7\u4fe1\u3067\u304d\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u4ee5\u4e0a\u3067\u5168\u3066\u306e\u8a2d\u5b9a\u304c\u5b8c\u4e86\u3067\u3059\uff01"),(0,a.kt)("h1",{id:"\u304a\u308f\u308a\u306b"},"\u304a\u308f\u308a\u306b"),(0,a.kt)("p",null,"\u672c\u8a18\u4e8b\u3067\u306f Jekyll \u3067\u4f5c\u6210\u3057\u305f\u9759\u7684\u30b5\u30a4\u30c8\u306b Amazon CloudWatch RUM \u3092\u7d44\u307f\u8fbc\u3080\u624b\u9806\u3092\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002Amazon CloudWatch RUM \u3067\u306f\u30da\u30fc\u30b8\u3054\u3068\u306e\u30a2\u30af\u30bb\u30b9\u72b6\u6cc1\u3084\u30c7\u30d0\u30a4\u30b9\u7a2e\u5225\u306a\u3069\u306e\u30c7\u30fc\u30bf\u304c\u89e3\u6790\u53ef\u80fd\u3067\u3059\u3057\u3001CloudWatch Logs \u3068\u9023\u643a\u3055\u305b\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u67d4\u8edf\u306a\u96c6\u8a08\u3092\u884c\u3046\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002\u307e\u305f\u3001\u4eca\u56de\u306f Jekyll \u3078\u306e\u7d44\u307f\u8fbc\u307f\u3092\u884c\u3044\u307e\u3057\u305f\u304c\u3001React \u3084 Vue.js \u306a\u3069\u306e SPA \u306b\u3082\u7d44\u307f\u8fbc\u3080\u3053\u3068\u306f\u53ef\u80fd\u3067\u3059\u306e\u3067\u3001\u305c\u3072\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002"))}s.isMDXComponent=!0},6354:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/app-monitor-01-82f54281235ed3c3c3d244a64ac07510.png"},2421:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/app-monitor-02-cbc46e29bf198b949f50ab60221fbdbf.png"},7073:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/app-monitor-03-908ad9a3e639ac9c2066b8996516cf32.png"},9886:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/app-monitor-04-1ff096fdb5edaae90d38e482ed40006f.png"},3655:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/app-monitor-05-db4ef50bfc68c45136f55f5f37b4251a.png"}}]);