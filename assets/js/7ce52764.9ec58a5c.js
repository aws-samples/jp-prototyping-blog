"use strict";(self.webpackChunk_aws_samples_jp_prototyping_blog=self.webpackChunk_aws_samples_jp_prototyping_blog||[]).push([[9708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(n),g=a,d=s["".concat(i,".").concat(g)]||s[g]||c[g]||l;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={title:"Claude\u3067JSON\u51fa\u529b\u3092\u5b89\u5b9a\u3055\u305b\u308b\u30b3\u30c4\u3092\u4e00\u3064\u7d39\u4ecb\u3057\u307e\u3059",slug:"claude-prompt-engineering-put-on-her-mouth",tags:["bedrock","prompt engineering","claude"],authors:["tmokmss"]},o=void 0,p={permalink:"/blog/claude-prompt-engineering-put-on-her-mouth",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2023-11-15-claude-prompt-engineering-put-on-her-mouth/index.md",source:"@site/blog/2023-11-15-claude-prompt-engineering-put-on-her-mouth/index.md",title:"Claude\u3067JSON\u51fa\u529b\u3092\u5b89\u5b9a\u3055\u305b\u308b\u30b3\u30c4\u3092\u4e00\u3064\u7d39\u4ecb\u3057\u307e\u3059",description:"Amazon Bedrock\u4e0a\u306eClaude\u3092\u30b5\u30fc\u30d3\u30b9\u306b\u7d44\u307f\u8fbc\u3080\u5834\u5408\u3001\u5b89\u5b9a\u3057\u3066JSON\u3092\u51fa\u529b\u3055\u305b\u305f\u3044\u3068\u601d\u3046\u3053\u3068\u306f\u591a\u3044\u3067\u3059\u3088\u306d\u3002\u4eca\u65e5\u306f\u305d\u306e\u305f\u3081\u306e\u30b3\u30c4\u3092\u4e00\u3064\u7d39\u4ecb\u3057\u307e\u3059\u3002",date:"2023-11-15T00:00:00.000Z",formattedDate:"2023\u5e7411\u670815\u65e5",tags:[{label:"bedrock",permalink:"/blog/tags/bedrock"},{label:"prompt engineering",permalink:"/blog/tags/prompt-engineering"},{label:"claude",permalink:"/blog/tags/claude"}],readingTime:2.22,hasTruncateMarker:!0,authors:[{name:"Masashi Tomooka",title:"Prototyping Engineer",url:"https://github.com/tmokmss",imageURL:"https://github.com/tmokmss.png",key:"tmokmss"}],frontMatter:{title:"Claude\u3067JSON\u51fa\u529b\u3092\u5b89\u5b9a\u3055\u305b\u308b\u30b3\u30c4\u3092\u4e00\u3064\u7d39\u4ecb\u3057\u307e\u3059",slug:"claude-prompt-engineering-put-on-her-mouth",tags:["bedrock","prompt engineering","claude"],authors:["tmokmss"]},nextItem:{title:"AWS HealthOmics \u3067 AlphaFold \u3092\u5b9f\u884c\u3057\u3001\u30bf\u30f3\u30d1\u30af\u8cea\u306e\u7acb\u4f53\u69cb\u9020\u3092\u53ef\u8996\u5316\u3059\u308b",permalink:"/blog/aws-healthomics-analysis-app-alphafold"}},i={authorsImageUrls:[void 0]},u=[{value:"\u30b3\u30c4",id:"\u30b3\u30c4",level:2},{value:"\u52b9\u679c\u306e\u691c\u8a3c",id:"\u52b9\u679c\u306e\u691c\u8a3c",level:2},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2}],m={toc:u},s="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Amazon Bedrock\u4e0a\u306eClaude\u3092\u30b5\u30fc\u30d3\u30b9\u306b\u7d44\u307f\u8fbc\u3080\u5834\u5408\u3001\u5b89\u5b9a\u3057\u3066JSON\u3092\u51fa\u529b\u3055\u305b\u305f\u3044\u3068\u601d\u3046\u3053\u3068\u306f\u591a\u3044\u3067\u3059\u3088\u306d\u3002\u4eca\u65e5\u306f\u305d\u306e\u305f\u3081\u306e\u30b3\u30c4\u3092\u4e00\u3064\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30b3\u30c4"},"\u30b3\u30c4"),(0,a.kt)("p",null,"\u30d7\u30ed\u30f3\u30d7\u30c8\u306e\u6700\u5f8c\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"Assistant: {")," \u3092\u6e21\u3057\u307e\u3057\u3087\u3046\u3002\u672b\u5c3e\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"{")," \u304c\u30dd\u30a4\u30f3\u30c8\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u56de\u7b54\u304c\u5fc5\u305a ",(0,a.kt)("inlineCode",{parentName:"p"},"{")," \u304b\u3089\u59cb\u307e\u308b\u3088\u3046\u306b\u306a\u308a\u3001JSON\u51fa\u529b\u304c\u6bd4\u8f03\u7684\u5b89\u5b9a\u5316\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30d7\u30ed\u30f3\u30d7\u30c8\u306e\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Human: \u6328\u62f6\u306e\u6587\u7ae0\u3092\u8003\u3048\u3066\u304f\u3060\u3055\u3044\u3002\u56de\u7b54\u306f\u4ee5\u4e0b\u306eJSON\u3067\u8fd4\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n<example>\n{ "greeting": "\u3053\u3093\u306b\u3061\u306f" }\n</example>`;\n\nAssistant: {\n')),(0,a.kt)("p",null,"Assistant\u5074\u306e\u56de\u7b54\u3082\u30d7\u30ed\u30f3\u30d7\u30c8\u306b\u542b\u3081\u3089\u308c\u308b\u3001Claude\u306a\u3089\u3067\u306f\u306e\u624b\u6cd5\u3067\u3059\u306d\u3002"),(0,a.kt)("h2",{id:"\u52b9\u679c\u306e\u691c\u8a3c"},"\u52b9\u679c\u306e\u691c\u8a3c"),(0,a.kt)("p",null,"\u3053\u308c\u3060\u3051\u3060\u3068\u30db\u30f3\u30de\u304b\uff1f\u3068\u601d\u3046\u4eba\u3082\u3044\u308b\u3067\u3057\u3087\u3046\u304b\u3089\u3001\u7c21\u5358\u306a\u691c\u8a3c\u3092\u884c\u3063\u3066\u307f\u307e\u3059\u3002\u672b\u5c3e\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"{")," \u3092\u3064\u3051\u305f\u5834\u5408\u3068\u3064\u3051\u306a\u3044\u5834\u5408\u3068\u3067\u6b63\u3057\u3044JSON\u3092\u8fd4\u305b\u305f\u5272\u5408\u3092\u6bd4\u8f03\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"\u7d50\u679c\u3092\u4e0b\u8868\u306b\u793a\u3057\u307e\u3059\u3002\u5927\u304d\u306a\u5dee\u304c\u3042\u308b\u3053\u3068\u304c\u898b\u3066\u53d6\u308c\u307e\u3059\u306d\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"{ \u3092\u3064\u3051\u305f"),(0,a.kt)("th",{parentName:"tr",align:null},"{ \u306a\u3057"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6b63\u3057\u3044JSON\u306e\u5272\u5408"),(0,a.kt)("td",{parentName:"tr",align:null},"100 %"),(0,a.kt)("td",{parentName:"tr",align:null},"78 %")))),(0,a.kt)("p",null,"\u306a\u304a\u3001\u691c\u8a3c\u306e\u8af8\u6761\u4ef6\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u547c\u3073\u51fa\u3057\u56de\u6570: 100\u56de"),(0,a.kt)("li",{parentName:"ul"},"temperature: 0.6"),(0,a.kt)("li",{parentName:"ul"},"\u5143\u306e\u30d7\u30ed\u30f3\u30d7\u30c8:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u6328\u62f6\u306e\u6587\u7ae0\u3092\u8003\u3048\u3066\u304f\u3060\u3055\u3044\u3002\u56de\u7b54\u306f\u4ee5\u4e0b\u306eJSON\u3067\u8fd4\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n<example>\n{ "greeting": "\u3053\u3093\u306b\u3061\u306f" }\n</example>\n')),(0,a.kt)("p",null,"\u518d\u73fe\u306e\u305f\u3081\u306e\u5168\u30b3\u30fc\u30c9\u306f",(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/tmokmss/4b1bbf04f864372a7d6b78561ff09953"},"\u3053\u3061\u3089\u304b\u3089"),"\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),(0,a.kt)("p",null,"Claude\u3067JSON\u51fa\u529b\u3092\u5b89\u5b9a\u5316\u3055\u305b\u308b\u4e00\u3064\u306e\u30b3\u30c4\u3092\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002\u3053\u306e\u5c0f\u6280\u3092\u4f7f\u3063\u3066\u3001Claude\u306e\u80fd\u529b\u3092\u6700\u5927\u9650\u306b\u5f15\u304d\u51fa\u3057\u307e\u3057\u3087\u3046!"))}c.isMDXComponent=!0}}]);