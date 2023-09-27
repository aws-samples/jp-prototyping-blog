"use strict";(self.webpackChunk_aws_samples_jp_prototyping_blog=self.webpackChunk_aws_samples_jp_prototyping_blog||[]).push([[7991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||k[m]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={title:"Jenkins\u306eEC2\u30d7\u30e9\u30b0\u30a4\u30f3\u306f2\u3064\u3042\u308b",slug:"jenkins-ec2",tags:["jenkins","ec2"],authors:["tmokmss"]},i=void 0,o={permalink:"/blog/jenkins-ec2",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2022-12-05-jenkins-ec2/index.md",source:"@site/blog/2022-12-05-jenkins-ec2/index.md",title:"Jenkins\u306eEC2\u30d7\u30e9\u30b0\u30a4\u30f3\u306f2\u3064\u3042\u308b",description:"Jenkins\u3001\u4fbf\u5229\u3067\u3059\u3088\u306d\uff01\u30ef\u30f3\u30b9\u30c8\u30c3\u30d7\u306aCI/CD\u30c4\u30fc\u30eb\u3067\u3001\u30aa\u30f3\u30d7\u30ec\u6642\u4ee3\u304b\u3089\u306e\u611b\u597d\u5bb6\u3082\u591a\u3044\u306e\u3067\u306f\u306a\u3044\u304b\u3068\u601d\u3044\u307e\u3059\u3002",date:"2022-12-05T00:00:00.000Z",formattedDate:"2022\u5e7412\u67085\u65e5",tags:[{label:"jenkins",permalink:"/blog/tags/jenkins"},{label:"ec2",permalink:"/blog/tags/ec-2"}],readingTime:7.465,hasTruncateMarker:!0,authors:[{name:"Masashi Tomooka",title:"Prototyping Engineer",url:"https://github.com/tmokmss",imageURL:"https://github.com/tmokmss.png",key:"tmokmss"}],frontMatter:{title:"Jenkins\u306eEC2\u30d7\u30e9\u30b0\u30a4\u30f3\u306f2\u3064\u3042\u308b",slug:"jenkins-ec2",tags:["jenkins","ec2"],authors:["tmokmss"]},prevItem:{title:"\u65b0\u898f AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3067 CodeBuild \u3092\u5229\u7528\u3059\u308b\u969b\u306e\u6ce8\u610f\u70b9",permalink:"/blog/codebuild-concurrency"},nextItem:{title:"React \u74b0\u5883\u3067 3Dmol.js \u3092\u4f7f\u3046",permalink:"/blog/react-3dmol"}},p={authorsImageUrls:[void 0]},s=[{value:"1. Amazon EC2 \u30d7\u30e9\u30b0\u30a4\u30f3",id:"1-amazon-ec2-\u30d7\u30e9\u30b0\u30a4\u30f3",level:2},{value:"2. EC2 Fleet \u30d7\u30e9\u30b0\u30a4\u30f3",id:"2-ec2-fleet-\u30d7\u30e9\u30b0\u30a4\u30f3",level:2},{value:"\u79c1\u898b",id:"\u79c1\u898b",level:2},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2}],c={toc:s},u="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Jenkins\u3001\u4fbf\u5229\u3067\u3059\u3088\u306d\uff01\u30ef\u30f3\u30b9\u30c8\u30c3\u30d7\u306aCI/CD\u30c4\u30fc\u30eb\u3067\u3001\u30aa\u30f3\u30d7\u30ec\u6642\u4ee3\u304b\u3089\u306e\u611b\u597d\u5bb6\u3082\u591a\u3044\u306e\u3067\u306f\u306a\u3044\u304b\u3068\u601d\u3044\u307e\u3059\u3002\nAWS\u306fJenkins\u3068\u3068\u3066\u3082\u76f8\u6027\u304c\u826f\u304f\u3001\u6700\u8fd1\u3082",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/devops/jenkins-high-availability-and-disaster-recovery-on-aws/"},"Jenkins\u306eHA\u69cb\u6210\u3092\u5b9f\u73fe\u3059\u308b\u30d6\u30ed\u30b0"),"\u304c\u66f8\u304b\u308c\u3066\u3044\u305f\u308a\u3001",(0,a.kt)("a",{parentName:"p",href:"https://plugins.jenkins.io/ui/search?query=aws"},"AWS\u95a2\u9023\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u3082\u591a\u6570\u516c\u958b"),"\u3055\u308c\u3066\u3044\u305f\u308a\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4eca\u65e5\u306f\u305d\u306e\u4e2d\u3067\u3082\u7279\u306b\u3001Jenkins\u306e\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u3068\u3057\u3066EC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u5229\u7528\u3059\u308b\u305f\u3081\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002\u5b9f\u306f\u307b\u307c\u540c\u3058\u7528\u9014\u306e\u3082\u306e\u304c2\u3064\u3042\u308b\u306e\u3067\u3001\u6bd4\u3079\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)("h2",{id:"1-amazon-ec2-\u30d7\u30e9\u30b0\u30a4\u30f3"},"1. ",(0,a.kt)("a",{parentName:"h2",href:"https://plugins.jenkins.io/ec2/"},"Amazon EC2 \u30d7\u30e9\u30b0\u30a4\u30f3")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://plugins.jenkins.io/ec2/"},"Documentation")," / ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jenkinsci/ec2-plugin"},"GitHub")),(0,a.kt)("p",null,"Jenkins\u306eMaster\u30ce\u30fc\u30c9\u304b\u3089EC2 API\u3092\u53e9\u304d\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306eEC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u8d77\u52d5\uff65\u7dad\u6301\uff65\u7d42\u4e86\u3059\u308b\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u3059\u3002\nJenkins\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u81ea\u4f53\u306fSSH\u7d4c\u7531\u3067\u81ea\u52d5\u7684\u306b\u884c\u308f\u308c\u308b\u306e\u3067\u3001\u4e8b\u524d\u306eAMI\u69cb\u7bc9\u304c\u697d\u306b\u306a\u3063\u3066\u826f\u3044\u3067\u3059\u306d\u3002"),(0,a.kt)("p",null,"\u3088\u308a\u6614\u304b\u3089\u3042\u308b\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u305f\u3081\u30e6\u30fc\u30b6\u30fc\u6570\u306f\u591a\u304f\u3001\u307e\u305f\u4eca\u3082\u3057\u3063\u304b\u308a\u3068\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u3055\u308c\u3066\u3044\u308b\u3088\u3046\u3067\u3059\u3002\u3053\u3061\u3089\u3057\u304b\u77e5\u3089\u306a\u304b\u3063\u305f\u3068\u3044\u3046\u65b9\u3082\u3044\u308b\u3093\u3067\u306f\u306a\u3044\u3067\u3057\u3087\u3046\u304b\u3002"),(0,a.kt)("p",null,"\u5185\u90e8\u5b9f\u88c5\u3068\u3057\u3066\u306f\u3001ec2:RunInstance API\u3092\u76f4\u63a5\u53e9\u3044\u3066\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u8d77\u52d5\u3059\u308b\u306a\u3069\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u81ea\u8eab\u3067\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u7ba1\u7406\u3092\u884c\u3046\u5f62\u306b\u306a\u308a\u307e\u3059\u3002\n\u3053\u306e\u305f\u3081\u3001EC2\u306e\u8d77\u52d5\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092\u3059\u3079\u3066Jenkins\u306b\u767b\u9332\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u305f\u3081\u306b\u3001\u8a2d\u5b9a\u9805\u76ee\u304c\u591a\u3081\u3067\u3084\u3084\u7169\u96d1\u306a\u5370\u8c61\u3082\u53d7\u3051\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"\u3068\u306f\u3044\u3048\u67af\u308c\u3066\u3044\u3066\u30e6\u30fc\u30b6\u30fc\u6570\u3082\u591a\u3044\u3068\u3044\u3046\u70b9\u3067\u7121\u96e3\u306a\u9078\u629e\u80a2\u3067\u306f\u306a\u3044\u304b\u3068\u601d\u3044\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"2-ec2-fleet-\u30d7\u30e9\u30b0\u30a4\u30f3"},"2. ",(0,a.kt)("a",{parentName:"h2",href:"https://plugins.jenkins.io/ec2-fleet/"},"EC2 Fleet \u30d7\u30e9\u30b0\u30a4\u30f3")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://plugins.jenkins.io/ec2-fleet/"},"Documentation")," / ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jenkinsci/ec2-fleet-plugin"},"GitHub")),(0,a.kt)("p",null,"\u6a5f\u80fd\u7684\u306b\u306f1\u3068\u5927\u304d\u306a\u9055\u3044\u306f\u3042\u308a\u307e\u305b\u3093\u3002EC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u8d77\u52d5\uff65\u7d42\u4e86\u3084SSH\u306b\u3088\u308b\u81ea\u52d5\u8a2d\u5b9a\u3082\u540c\u69d8\u306b\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u5927\u304d\u306a\u9055\u3044\u306f\u3001\u30ce\u30fc\u30c9\u3092\u7ba1\u7406\u3059\u308b\u4ed5\u7d44\u307f\u3068\u3057\u3066AWS\u30de\u30cd\u30fc\u30b8\u30c9\u306eAuto Scaling Group\u3092\u5229\u7528\u3057\u3066\u3044\u308b\u3053\u3068\u3067\u3059\u3002\n\u3053\u308c\u306b\u3088\u308a\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u81ea\u4f53\u306e\u5b9f\u88c5\u306f\u5358\u7d14\u306b\u306a\u308a\u3001\u307e\u305fASG\u306b\u6163\u308c\u3066\u3044\u308b\u4eba\u306b\u306f\u3088\u308a\u7406\u89e3\u3057\u3084\u3059\u3044\u6319\u52d5\u3092\u5f97\u3089\u308c\u308b\u3067\u3057\u3087\u3046\u3002\nAllocation strategy\u306a\u3069ASG\u306e\u8c4a\u5bcc\u306a\u6a5f\u80fd\u3092\u305d\u306e\u307e\u307e\u4f7f\u3048\u308b\u306e\u3082\u9b45\u529b\u3067\u3059\u3002\n",(0,a.kt)("a",{parentName:"p",href:"https://plugins.jenkins.io/ec2-fleet/#plugin-content-comparison-to-ec2-plugin"},"EC2\u30d7\u30e9\u30b0\u30a4\u30f3\u3068\u306e\u3088\u308a\u8a73\u7d30\u306a\u6bd4\u8f03\u306f\u3053\u3061\u3089\u306b\u3042\u308b"),"\u306e\u3067\u3001\u305c\u3072\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"\u5143\u3005\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"github.com/awslabs")," \u914d\u4e0b\u306e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/awslabs/ec2-spot-jenkins-plugin"},"ec2-spot-jenkins-plugin")," \u3068\u3044\u3046\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3060\u3063\u305f\u3088\u3046\u3067\u3001AWS\u516c\u5f0f\u306b\u63d0\u4f9b\u3055\u308c\u3066\u3044\u305f\u3088\u3046\u3067\u3059\u3002\n\u30b3\u30df\u30c3\u30c8\u30ed\u30b0\u3092\u898b\u308b\u9650\u308a\u3001\u4eca\u3082AWS\u3084Amazon\u306e\u958b\u767a\u8005\u304c\u95a2\u308f\u3063\u3066\u3044\u308b\u69d8\u5b50\u304c\u7aba\u3048\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u307e\u305f\u3001\u500b\u4eba\u7684\u306b\u306fEC2\u306e\u8d77\u52d5\u8a2d\u5b9a (\u3069\u306eAMI\u3084\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u30bf\u30a4\u30d7\u3092\u4f7f\u3046\u304b\u306a\u3069) \u3092\u3001ASG\u3084Launch template\u306e\u8a2d\u5b9a\u3068\u3057\u3066AWS\u5074\u3067\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u308b\u306e\u3082\u826f\u3044\u3068\u601d\u3044\u307e\u3057\u305f\u3002\n\u3053\u308c\u306b\u3088\u308a\u3001AWS CDK\u3084Terraform\u306a\u3069\u6163\u308c\u305fIaC\u30c4\u30fc\u30eb\u3067\u305d\u308c\u3089\u306e\u8a2d\u5b9a\u3092\u8a18\u8ff0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u4e00\u65b9\u3059\u3079\u3066Jenkins\u5074\u3067\u7ba1\u7406\u3057\u305f\u3044\u65b9\u3082\u3044\u308b\u3068\u601d\u3046\u306e\u3067\u3001\u3053\u3053\u306f\u597d\u307f\u306e\u554f\u984c\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\u70b9\u3068\u3057\u3066\u3001\u307e\u3060\u67af\u308c\u3066\u3044\u306a\u3044\u305b\u3044\u304b\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304c\u4e00\u90e8\u305d\u306e\u307e\u307e\u52d5\u304b\u306a\u3044\u70b9\u304c\u3042\u308a\u307e\u3057\u305f\u3002\u4f8b\u3048\u3070Groovy\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u305d\u306e\u307e\u307e\u3067\u306f\u30a8\u30e9\u30fc\u306b\u306a\u308a\u307e\u3059\u3002\n\u3053\u306e\u8fba\u308a\u3092\u30ab\u30d0\u30fc\u3059\u308b\u305f\u3081\u306b\u5f8c\u307b\u3069\u52d5\u4f5c\u3059\u308b\u30b5\u30f3\u30d7\u30eb\u3092\u516c\u958b\u3059\u308b\u4e88\u5b9a\u3067\u3059\u306e\u3067\u3001\u305d\u3061\u3089\u3082\u305c\u3072\u5408\u308f\u305b\u3066\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",{id:"\u79c1\u898b"},"\u79c1\u898b"),(0,a.kt)("p",null,"2\u3064\u306e\u5927\u304d\u306a\u9055\u3044\u306f\u3001\u30ce\u30fc\u30c9\u306e\u7ba1\u7406\u306bAWS\u30de\u30cd\u30fc\u30b8\u30c9\u306aAuto Scaling Group\u3092\u4f7f\u3046\u304b\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u81ea\u8eab\u304c\u7ba1\u7406\u3059\u308b\u304b\u3068\u3044\u3046\u70b9\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u500b\u4eba\u7684\u306b\u306f\u3001\u305d\u306e\u3088\u3046\u306a\u4f4e\u30ec\u30d9\u30eb\u306a\u51e6\u7406\u306f\u3067\u304d\u308b\u3060\u3051AWS\u306b\u5bc4\u305b\u305f\u307b\u3046\u304c\u30d7\u30e9\u30b0\u30a4\u30f3\u81ea\u4f53\u306e\u958b\u767a\uff65\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u306f\u697d\u306b\u306a\u308b\u306e\u3067\u306f\u3068\u601d\u3044\u307e\u3059\u3002\n\u697d\u306a\u3082\u306e\u306f\u7dad\u6301\u3055\u308c\u3084\u3059\u3044\u306e\u3067\u3001\u30b5\u30b9\u30c6\u30a4\u30ca\u30d3\u30ea\u30c6\u30a3\u306e\u9762\u3067\u306fEC2 Fleet\u306e\u65b9\u304c\u826f\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002(\u3068\u306f\u3044\u3048\u30e6\u30fc\u30b6\u30fc\u6570\u306e\u5dee\u306f\u5927\u304d\u3044\u306e\u3067\u4eca\u306f\u5224\u65ad\u304c\u96e3\u3057\u3044\u3067\u3059\u304c)"),(0,a.kt)("p",null,"\u4e00\u65b9\u3067\u3001\u30ce\u30fc\u30c9\u306e\u8d77\u52d5\u6642\u9593\u306a\u3069\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u9762\u3067\u306fEC2\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u512a\u308c\u3066\u3044\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u81ea\u524d\u3067\u5b9f\u88c5\u3057\u3066\u3044\u308b\u5206\u3001\u6700\u9069\u5316\u306e\u4f59\u5730\u304c\u3088\u308a\u5927\u304d\u3044\u305f\u3081\u3067\u3059\u3002\n\u30ce\u30fc\u30c9\u8d77\u52d5\u6642\u9593\u306b\u30b7\u30d3\u30a2\u306a\u8981\u6c42\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u3053\u3061\u3089\u306b\u8ecd\u914d\u304c\u4e0a\u304c\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u6bd4\u8f03\u3092\u3057\u3066\u3044\u3066\u3001\u4f3c\u305f\u3088\u3046\u306a\u8a71\u3092\u601d\u3044\u51fa\u3057\u307e\u3057\u305f\u3002Amazon EKS\u306e\u30ce\u30fc\u30c9\u306e\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u306e\u4ed5\u7d44\u307f\u3068\u3057\u3066\u3001Cluster Autoscaler(CAS) \u3068 Karpenter \u306e2\u3064\u304c\u3042\u308b\u3068\u3044\u3046\u8a71\u3067\u3059\u3002\n\u524d\u8005\u306fASG\u3092\u5229\u7528\u3057\u3001\u5f8c\u8005\u306f\u81ea\u524d\u5b9f\u88c5\u3067EC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002Karpenter\u306e\u65b9\u304c\u6027\u80fd\u304c\u826f\u3044\u306a\u3069\u306e\u7406\u7531\u3067\u3001\u6700\u8fd1\u306f",(0,a.kt)("a",{parentName:"p",href:"https://aws.github.io/aws-eks-best-practices/karpenter/"},"CAS\u3088\u308a\u63a8\u5968\u3055\u308c\u308b"),"\u3053\u3068\u3082\u3042\u308b\u3088\u3046\u3067\u3059\u3002\nEKS\u306e\u3088\u3046\u306a\u6c4e\u7528\u57fa\u76e4\u3067\u306f\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u6700\u91cd\u8981\u8996\u3055\u308c\u308b\u305f\u3081\u3001\u30ce\u30fc\u30c9\u3092\u3044\u3061\u65e9\u304f\u8d77\u52d5\u3067\u304d\u308b\u5f8c\u8005\u306e\u9078\u629e\u80a2\u304c\u751f\u307e\u308c\u305f\u306e\u3067\u3057\u3087\u3046\u3002"),(0,a.kt)("p",null,"Jenkins\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5834\u5408\u306fCI/CD\u7528\u306e\u30ce\u30fc\u30c9\u3092\u7ba1\u7406\u3059\u308b\u3053\u3068\u306b\u7279\u5316\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u30ce\u30fc\u30c9\u306e\u8d77\u52d5\u6642\u9593\u306f\u6700\u512a\u5148\u3067\u306f\u306a\u3044\u3068\u3082\u8003\u3048\u3089\u308c\u307e\u3059\u3002\n\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u304c\u4e3b\u5c0e\u3059\u308bOSS\u3067\u3042\u308b\u90fd\u5408\u4e0a\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u81ea\u4f53\u306e\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6027\u3084\u958b\u767a\u5bb9\u6613\u6027\u306b\u3082\u512a\u5148\u5ea6\u304c\u7f6e\u304b\u308c\u308b\u3053\u3068\u3082\u3042\u308b\u3067\u3057\u3087\u3046\u3002\n\u3053\u306e\u305f\u3081\u3001EC2 Fleet\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u5f8c\u767a\u3067\u767b\u5834\u3057\u305f\u306e\u3067\u306f\u306a\u3044\u3067\u3057\u3087\u3046\u304b\u3002"),(0,a.kt)("p",null,"Jenkins\u3068EKS\u306e\u30ce\u30fc\u30c9\u7ba1\u7406\u3001\u4f3c\u305f\u3088\u3046\u306a\u8a71\u3067\u3042\u308a\u306a\u304c\u3089\u9006\u306e\u65b9\u5411\u306b\u9032\u5316\u3057\u3066\u3044\u308b\u306e\u304c\u9762\u767d\u3044\u3067\u3059\u306d\u3002"),(0,a.kt)("h2",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),(0,a.kt)("p",null,"Jenkins\u306eEC2\u30d7\u30e9\u30b0\u30a4\u30f3\u30922\u3064\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002\n\u7279\u306b\u307e\u3060EC2 Fleet\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u77e5\u540d\u5ea6\u306f\u3084\u3084\u4f4e\u3044\u3088\u3046\u306a\u306e\u3067\u3001\u305c\u3072\u3053\u306e\u6a5f\u4f1a\u306b\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\uff01"))}k.isMDXComponent=!0}}]);