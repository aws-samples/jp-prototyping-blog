"use strict";(self.webpackChunkjp_prototyping_blog=self.webpackChunkjp_prototyping_blog||[]).push([[2708],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(o),d=n,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return o?r.createElement(h,l(l({ref:t},c),{},{components:o})):r.createElement(h,l({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:n,l[1]=p;for(var s=2;s<a;s++)l[s]=o[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4095:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const a={title:"5\u5206\u3067EC2 + Remote SSH\u958b\u767a\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b",slug:"ec2-proto-env",tags:["ec2","cloudshell"],authors:["statefb"]},l=void 0,p={permalink:"/blog/ec2-proto-env",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2023-07-10-ec2-proto-env/index.md",source:"@site/blog/2023-07-10-ec2-proto-env/index.md",title:"5\u5206\u3067EC2 + Remote SSH\u958b\u767a\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b",description:"\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9\u306f\u6163\u308c\u3066\u3044\u308b\u4eba\u306b\u3068\u3063\u3066\u306f\u624b\u9593\u3067\u306f\u306a\u3044\u3082\u306e\u306e\u3001\u958b\u767a\u306b\u4e0d\u6163\u308c\u306a\u4eba\u306b\u3068\u3063\u3066\u306f\u8e93\u304d\u304c\u3061\u306a\u30dd\u30a4\u30f3\u30c8\u306e\u4e00\u3064\u3068\u306a\u308a\u307e\u3059\u3002\u3053\u306e\u3088\u3046\u306a\u5834\u5408\u9078\u629e\u80a2\u306e\u4e00\u3064\u3068\u3057\u3066Cloud9 \u3092\u4f7f\u3063\u305f\u65b9\u6cd5\u304c\u6319\u3052\u3089\u308c\u307e\u3059\u304c\u3001\u30c1\u30fc\u30e0\u306e\u65b9\u91dd\u3084\u597d\u307f\u306a\u3069\u3067Visual Studio Code (\u4ee5\u964d vscode \u3068\u547c\u79f0) \u3092\u5229\u7528\u3057\u305f\u3044\u30b1\u30fc\u30b9\u3082\u3042\u308b\u3067\u3057\u3087\u3046\u3002\u3053\u3053\u3067\u306fRemote SSH \u7528\u306b\u3001\u30d7\u30ed\u30c8\u30bf\u30a4\u30d4\u30f3\u30b0\u7528\u9014\u3067\u3088\u304f\u5229\u7528\u3055\u308c\u308b\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3092\u30d7\u30ea\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u624b\u8efd\u306b\u69cb\u7bc9\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002",date:"2023-07-10T00:00:00.000Z",formattedDate:"2023\u5e747\u670810\u65e5",tags:[{label:"ec2",permalink:"/blog/tags/ec-2"},{label:"cloudshell",permalink:"/blog/tags/cloudshell"}],readingTime:4.38,hasTruncateMarker:!0,authors:[{name:"Takehiro Suzuki",title:"Prototyping Engineer",url:"https://github.com/statefb",imageURL:"https://github.com/statefb.png",key:"statefb"}],frontMatter:{title:"5\u5206\u3067EC2 + Remote SSH\u958b\u767a\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b",slug:"ec2-proto-env",tags:["ec2","cloudshell"],authors:["statefb"]},nextItem:{title:"API Loader \u3092\u4f7f\u3063\u3066\u30d7\u30ec\u30d3\u30e5\u30fc\u30ea\u30ea\u30fc\u30b9\u30d0\u30fc\u30b8\u30e7\u30f3\u306e AWS Service \u3092 SDK \u304b\u3089\u5229\u7528\u3059\u308b",permalink:"/blog/preview-service-apiloader"}},i={authorsImageUrls:[void 0]},s=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u69cb\u7bc9\u624b\u9806",id:"\u69cb\u7bc9\u624b\u9806",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9\u306f\u6163\u308c\u3066\u3044\u308b\u4eba\u306b\u3068\u3063\u3066\u306f\u624b\u9593\u3067\u306f\u306a\u3044\u3082\u306e\u306e\u3001\u958b\u767a\u306b\u4e0d\u6163\u308c\u306a\u4eba\u306b\u3068\u3063\u3066\u306f\u8e93\u304d\u304c\u3061\u306a\u30dd\u30a4\u30f3\u30c8\u306e\u4e00\u3064\u3068\u306a\u308a\u307e\u3059\u3002\u3053\u306e\u3088\u3046\u306a\u5834\u5408\u9078\u629e\u80a2\u306e\u4e00\u3064\u3068\u3057\u3066",(0,n.kt)("a",{parentName:"p",href:"https://prototyping-blog.com/blog/cdk-deploy-cloudshell-cloud9"},"Cloud9 \u3092\u4f7f\u3063\u305f\u65b9\u6cd5"),"\u304c\u6319\u3052\u3089\u308c\u307e\u3059\u304c\u3001\u30c1\u30fc\u30e0\u306e\u65b9\u91dd\u3084\u597d\u307f\u306a\u3069\u3067",(0,n.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," (\u4ee5\u964d vscode \u3068\u547c\u79f0) \u3092\u5229\u7528\u3057\u305f\u3044\u30b1\u30fc\u30b9\u3082\u3042\u308b\u3067\u3057\u3087\u3046\u3002\u3053\u3053\u3067\u306f",(0,n.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/ssh"},"Remote SSH")," \u7528\u306b\u3001\u30d7\u30ed\u30c8\u30bf\u30a4\u30d4\u30f3\u30b0\u7528\u9014\u3067\u3088\u304f\u5229\u7528\u3055\u308c\u308b\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3092\u30d7\u30ea\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u624b\u8efd\u306b\u69cb\u7bc9\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/jp/cloud9/"},"AWS Cloud9"),"\u306f\u30d7\u30ed\u30c8\u30bf\u30a4\u30d4\u30f3\u30b0\u7528\u9014\u3067\u983b\u7e41\u306b\u767b\u5834\u3059\u308b\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2 (AWS CLI v2, Python, Node.js, Docker \u7b49) \u304c\u30d7\u30ea\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u6e08\u307f\u306e\u305f\u3081\u3001\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u958b\u767a\u7528\u9014\u306b\u5411\u3044\u3066\u3044\u308b\u3068\u8a00\u3048\u307e\u3059\u3002\u4e00\u65b9\u3067\u4f55\u3089\u304b\u306e\u4e8b\u60c5\u306b\u3088\u308a vscode \u3092\u5229\u7528\u3057\u305f\u3044\u30b1\u30fc\u30b9\u3082\u3042\u308b\u3067\u3057\u3087\u3046\u3002\u305f\u3068\u3048\u3070\u30c1\u30fc\u30e0\u958b\u767a\u3067\u30ea\u30f3\u30bf\u30fc\u30fb\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u5c0e\u5165\u3057\u3066\u304a\u308a\u3001\u30c1\u30fc\u30e0\u5171\u901a\u306e vscode \u30d7\u30e9\u30b0\u30a4\u30f3\u3084\u8a2d\u5b9a\u3092\u4f7f\u3044\u305f\u3044\u5834\u5408\u306a\u3069\u306e\u30b1\u30fc\u30b9\u304c\u76f8\u5f53\u3057\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u30ed\u30fc\u30ab\u30eb\u306b\u958b\u767a\u74b0\u5883\u3092\u4f5c\u6210\u3059\u308b\u9078\u629e\u80a2\u304c\u8003\u3048\u3089\u308c\u307e\u3059\u304c\u3001\u4e3b\u306b Docker \u306e\u74b0\u5883\u69cb\u7bc9\u306b\u56f0\u96e3\u3092\u4f34\u3046\u3053\u3068\u304c\u3042\u308b\u3067\u3057\u3087\u3046\u3002\u4f8b\u3048\u3070\u4e88\u7b97\u306a\u3069\u7d44\u7e54\u7684\u306a\u4e8b\u60c5\u306b\u3088\u308a",(0,n.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop/"},"Docker Desktop"),"\u304c\u5229\u7528\u3067\u304d\u306a\u3044\u5834\u5408\u3001Windows \u306e\u5834\u5408\u306f WSL2\u3001Mac OS \u306e\u5834\u5408\u306f",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lima-vm/lima"},"lima"),"\u3084",(0,n.kt)("a",{parentName:"p",href:"https://github.com/runfinch/finch"},"finch"),"\u304c\u305d\u306e\u4ee3\u66ff\u3068\u306a\u308a\u5f97\u307e\u3059\u304c\u3001\u958b\u767a\u306b\u4e0d\u6163\u308c\u306a\u5834\u5408\u3001\u81ea\u529b\u3067\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u3053\u3068\u304c\u96e3\u3057\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u3088\u3046\u306a\u5834\u5408\u3001EC2 (Amazon Linux 2) \u4e0a\u306b\u74b0\u5883\u69cb\u7bc9\u3057\u3001Remote SSH \u3067\u958b\u767a\u3059\u308b\u9078\u629e\u80a2\u304c\u6709\u52b9\u3068\u8003\u3048\u3089\u308c\u307e\u3059\u3002\u306a\u304a Docker \u306f ECS/EKS \u4ee5\u5916\u306b\u3082\u3001CDK \u958b\u767a\u3067\u983b\u51fa\u306e\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf (",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cdk/api/v2/docs/aws-lambda-python-alpha-readme.html"},"aws-lambda-python-alpha module"),"\u306a\u3069) \u306b\u304a\u3044\u3066\u3082\u5229\u7528\u3055\u308c\u308b\u305f\u3081\u3001\u5c0e\u5165\u3057\u3066\u304a\u304f\u3068\u4fbf\u5229\u3067\u3059\u3002"),(0,n.kt)("h2",{id:"\u69cb\u7bc9\u624b\u9806"},"\u69cb\u7bc9\u624b\u9806"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u7528\u610f\u3057\u307e\u3059"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/cloudshell/home"},"CloudShell"),"\u3092\u958b\u304d\u307e\u3059"),(0,n.kt)("li",{parentName:"ol"},"CloudShell \u306e\u30d7\u30ed\u30f3\u30d7\u30c8\u3067\u4e0b\u8a18\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u306a\u304a",(0,n.kt)("inlineCode",{parentName:"li"},"XX.XX.XX.XX"),"\u306f\u63a5\u7d9a\u5143\u306e IP \u30a2\u30c9\u30ec\u30b9\u3067\u7f6e\u63db\u3057\u3066\u304f\u3060\u3055\u3044")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git clone https://github.com/aws-samples/ec2-setup-for-prototyping\ncd ec2-setup-for-prototyping\n./bin.sh XX.XX.XX.XX/32 ProtoEnvStack\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"CloudFormation \u306e\u30b9\u30bf\u30c3\u30af\u4f5c\u6210\u304c\u5b8c\u4e86\u3059\u308b\u307e\u3067 5 \u5206\u307b\u3069\u5f85\u6a5f\u3057\u307e\u3059\u3002\u5b8c\u4e86\u5f8c\u3001\u4e0b\u8a18\u306e\u5185\u5bb9\u304c\u51fa\u529b\u3055\u308c\u308b\u305f\u3081\u9069\u5f53\u306a\u30a8\u30c7\u30a3\u30bf\u306a\u3069\u306b\u63a7\u3048\u3066\u304a\u304d\u307e\u3059")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Copy ssh key from here: ===============================\n-----BEGIN RSA PRIVATE KEY-----\n...\n-----END RSA PRIVATE KEY-----\nEnd of ssh key ===============================\n\nHostPublicIP: YY.YY.YY.YY\n")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"prototype.pem"),"\u306a\u3069\u306e\u540d\u524d\u3067 ssh key \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u4f5c\u6210\u5f8c\u3001\u63a7\u3048\u305f RSA PRIVATE KEY \u306e\u5185\u5bb9\u3092\u8cbc\u308a\u4ed8\u3051\u307e\u3059")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f5c\u6210\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u3092\u5909\u66f4\u3057\u307e\u3059"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"chmod 400 prototype.pem\n")),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"ssh \u30b3\u30de\u30f3\u30c9\u3067\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u306a\u304a",(0,n.kt)("inlineCode",{parentName:"li"},"YY.YY.YY.YY"),"\u306f 4.\u3067\u63a7\u3048\u305f",(0,n.kt)("inlineCode",{parentName:"li"},"HostPublicIP"),"\u3067\u3059")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ssh -i prototype.pem ec2-user@YY.YY.YY.YY\n")),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"(optional) \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5404\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4e0b\u8a18\u30b3\u30de\u30f3\u30c9\u3067\u78ba\u8a8d\u3057\u307e\u3059\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker -v\npython3 -V\nnode -v\n")),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/remote/ssh"},"Remote Development using SSH"),"\u306e\u624b\u9806\u306b\u5f93\u3063\u3066\u3001vscode \u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u305f\u3089\u5b8c\u6210\u3067\u3059\u3002")),(0,n.kt)("p",null,"\u5b9f\u88c5\u306e\u8a73\u7d30\u306f",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aws-samples/ec2-setup-for-prototyping"},"GitHub"),"\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\u672c\u8a18\u4e8b\u3067\u306f\u5c0f\u898f\u6a21\u306e\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u7528\u9014\u3092\u60f3\u5b9a\u3057 EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092 SSH \u63a5\u7d9a\u5148\u3068\u3057\u3066\u69cb\u7bc9\u3057\u307e\u3057\u305f\u304c\u3001",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/codecatalyst-service.html"},"CodeCatalyst for VS Code"),"\u3092\u304a\u4f7f\u3044\u3044\u305f\u3060\u304f\u3053\u3068\u3067\u3082\u540c\u7b49\u306e\u3053\u3068\u304c\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002\u3088\u308a\u5927\u898f\u6a21\u3067\u30de\u30cd\u30fc\u30b8\u30c9\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u53d6\u308a\u6271\u3046\u5834\u5408\u306f CodeCatalyst \u3082\u691c\u8a0e\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"))}u.isMDXComponent=!0}}]);