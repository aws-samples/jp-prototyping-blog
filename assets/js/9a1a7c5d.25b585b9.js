"use strict";(self.webpackChunk_aws_samples_jp_prototyping_blog=self.webpackChunk_aws_samples_jp_prototyping_blog||[]).push([[4814],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,g=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Amazon Linux 2023 \u306e EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089 CloudWatch Logs \u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30ed\u30b0\u3092\u8ee2\u9001\u3059\u308b",slug:"ec2-cloudwatchlogs-al2023",tags:["ec2","cloudwatch"],authors:["kuridaik"]},l=void 0,i={permalink:"/blog/ec2-cloudwatchlogs-al2023",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2023-06-20-ec2-cloudwatchlogs-al2023/index.md",source:"@site/blog/2023-06-20-ec2-cloudwatchlogs-al2023/index.md",title:"Amazon Linux 2023 \u306e EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089 CloudWatch Logs \u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30ed\u30b0\u3092\u8ee2\u9001\u3059\u308b",description:"Amazon Linux 2023 \u306f systemd \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c 252 \u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u306f StandardOutput \u306a\u3069\u306e\u51fa\u529b\u30aa\u30d7\u30b7\u30e7\u30f3\u3067 append \u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u304c\u5229\u7528\u3067\u304d\u308b\u305f\u3081\u3001EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5185\u3067\u52d5\u4f5c\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ed\u30b0\u3092\u624b\u8efd\u306b\u30d5\u30a1\u30a4\u30eb\u51fa\u529b\u3057\u3066 CloudWatch Logs \u306b\u8ee2\u9001\u3067\u304d\u307e\u3059\u3002",date:"2023-06-20T00:00:00.000Z",formattedDate:"2023\u5e746\u670820\u65e5",tags:[{label:"ec2",permalink:"/blog/tags/ec-2"},{label:"cloudwatch",permalink:"/blog/tags/cloudwatch"}],readingTime:2.02,hasTruncateMarker:!0,authors:[{name:"Daiki Kuriyama",title:"Prototyping Engineer",url:"https://github.com/kuridaik",imageURL:"https://github.com/kuridaik.png",key:"kuridaik"}],frontMatter:{title:"Amazon Linux 2023 \u306e EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089 CloudWatch Logs \u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30ed\u30b0\u3092\u8ee2\u9001\u3059\u308b",slug:"ec2-cloudwatchlogs-al2023",tags:["ec2","cloudwatch"],authors:["kuridaik"]},prevItem:{title:"API Loader \u3092\u4f7f\u3063\u3066\u30d7\u30ec\u30d3\u30e5\u30fc\u30ea\u30ea\u30fc\u30b9\u30d0\u30fc\u30b8\u30e7\u30f3\u306e AWS Service \u3092 SDK \u304b\u3089\u5229\u7528\u3059\u308b",permalink:"/blog/preview-service-apiloader"},nextItem:{title:"React \u3068 Amazon Transcribe \u3067\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u6587\u5b57\u8d77\u3053\u3057\u3092\u884c\u3046\u65b9\u6cd5",permalink:"/blog/transcribe-in-react"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Amazon Linux 2023 \u306f systemd \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c 252 \u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"StandardOutput")," \u306a\u3069\u306e\u51fa\u529b\u30aa\u30d7\u30b7\u30e7\u30f3\u3067 ",(0,a.kt)("inlineCode",{parentName:"p"},"append")," \u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u304c\u5229\u7528\u3067\u304d\u308b\u305f\u3081\u3001EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5185\u3067\u52d5\u4f5c\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ed\u30b0\u3092\u624b\u8efd\u306b\u30d5\u30a1\u30a4\u30eb\u51fa\u529b\u3057\u3066 CloudWatch Logs \u306b\u8ee2\u9001\u3067\u304d\u307e\u3059\u3002"))}d.isMDXComponent=!0}}]);