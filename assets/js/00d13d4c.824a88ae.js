"use strict";(self.webpackChunkjp_prototyping_blog=self.webpackChunkjp_prototyping_blog||[]).push([[9823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"AWS CDK \u3067 MAC \u30a2\u30c9\u30ec\u30b9\u3068 IP \u30a2\u30c9\u30ec\u30b9\u3092\u56fa\u5b9a\u3057\u305f EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b",slug:"primary-eni-with-cdk",tags:["cdk","ec2","unity"],authors:["ymhiroki"]},l=void 0,o={permalink:"/blog/primary-eni-with-cdk",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2023-02-20-primary-eni-with-cdk/index.md",source:"@site/blog/2023-02-20-primary-eni-with-cdk/index.md",title:"AWS CDK \u3067 MAC \u30a2\u30c9\u30ec\u30b9\u3068 IP \u30a2\u30c9\u30ec\u30b9\u3092\u56fa\u5b9a\u3057\u305f EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b",description:"\u672c\u8a18\u4e8b\u3067\u306f AWS CDK \u3092\u4f7f\u3044\u3001\u6307\u5b9a\u3057\u305f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9 (ENI) \u3092\u30d7\u30e9\u30a4\u30de\u30ea\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9 (primary ENI) \u3068\u3057\u3066\u30a2\u30bf\u30c3\u30c1\u3057\u3001MAC \u30a2\u30c9\u30ec\u30b9\u3068 IP \u30a2\u30c9\u30ec\u30b9\u3092\u56fa\u5b9a\u3057\u305f EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002",date:"2023-02-20T00:00:00.000Z",formattedDate:"2023\u5e742\u670820\u65e5",tags:[{label:"cdk",permalink:"/blog/tags/cdk"},{label:"ec2",permalink:"/blog/tags/ec-2"},{label:"unity",permalink:"/blog/tags/unity"}],readingTime:5.77,hasTruncateMarker:!0,authors:[{name:"Hiroki Yamazaki",title:"Solutions Architect",url:"https://github.com/ymhiroki",imageURL:"https://github.com/ymhiroki.png",key:"ymhiroki"}],frontMatter:{title:"AWS CDK \u3067 MAC \u30a2\u30c9\u30ec\u30b9\u3068 IP \u30a2\u30c9\u30ec\u30b9\u3092\u56fa\u5b9a\u3057\u305f EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b",slug:"primary-eni-with-cdk",tags:["cdk","ec2","unity"],authors:["ymhiroki"]},nextItem:{title:"Amazon Lex, Amazon Kendra \u306e\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u958b\u767a\u3067\u96c6\u3081\u305f Tips",permalink:"/blog/lex-kendra-dev"}},c={authorsImageUrls:[void 0]},p=[{value:"EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3068 ENI \u306b\u3064\u3044\u3066",id:"ec2-\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3068-eni-\u306b\u3064\u3044\u3066",level:2},{value:"ENI \u3092 AWS CDK \u3067\u4f5c\u6210\u3059\u308b",id:"eni-\u3092-aws-cdk-\u3067\u4f5c\u6210\u3059\u308b",level:2},{value:"ENI \u3092 EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e primary ENI \u306b\u6307\u5b9a\u3059\u308b",id:"eni-\u3092-ec2-\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e-primary-eni-\u306b\u6307\u5b9a\u3059\u308b",level:2},{value:"Unity Build Server \u3067\u306e\u5fdc\u7528\u4f8b",id:"unity-build-server-\u3067\u306e\u5fdc\u7528\u4f8b",level:2},{value:"\u304a\u308f\u308a\u306b",id:"\u304a\u308f\u308a\u306b",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u8a18\u4e8b\u3067\u306f AWS CDK \u3092\u4f7f\u3044\u3001\u6307\u5b9a\u3057\u305f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9 (ENI) \u3092\u30d7\u30e9\u30a4\u30de\u30ea\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9 (primary ENI) \u3068\u3057\u3066\u30a2\u30bf\u30c3\u30c1\u3057\u3001MAC \u30a2\u30c9\u30ec\u30b9\u3068 IP \u30a2\u30c9\u30ec\u30b9\u3092\u56fa\u5b9a\u3057\u305f EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"MAC \u30a2\u30c9\u30ec\u30b9\u3084 IP \u30a2\u30c9\u30ec\u30b9\u3092\u56fa\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306a\u3069\u306b\u672c\u8a18\u4e8b\u3067\u7d39\u4ecb\u3059\u308b\u65b9\u6cd5\u3092\u3054\u6d3b\u7528\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"ec2-\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3068-eni-\u306b\u3064\u3044\u3066"},"EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3068 ENI \u306b\u3064\u3044\u3066"),(0,r.kt)("p",null,"primary ENI \u3092\u6307\u5b9a\u3057\u3066\u8d77\u52d5\u3059\u308b\u3053\u3068\u3067\u3001IP \u30a2\u30c9\u30ec\u30b9\u3084 MAC \u30a2\u30c9\u30ec\u30b9\u3092 EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u9593\u3067\u5f15\u304d\u7d99\u3050\u3053\u3068\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002\nEC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3067\u306f AWS CLI \u306e\u30b3\u30de\u30f3\u30c9\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067 ENI \u3092\u8ffd\u52a0 (\u30a2\u30bf\u30c3\u30c1)\u30fb\u524a\u9664 (\u30c7\u30bf\u30c3\u30c1) \u3067\u304d\u307e\u3059\u304c\u3001primary ENI \u306b\u9650\u3063\u3066\u306f\u5909\u66f4\u3067\u304d\u306a\u3044\u3053\u3068\u304c\u660e\u8a18\u3055\u308c\u3066\u3044\u307e\u3059 (",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/using-eni.html"},"\u53c2\u8003"),")\u3002"),(0,r.kt)("p",null,"\u30de\u30cd\u30b8\u30e1\u30f3\u30c8\u30b3\u30f3\u30bd\u30fc\u30eb\u7d4c\u7531\u3067 ENI \u3092\u6307\u5b9a\u3057\u3066\u8d77\u52d5\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u4ed6\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u7b49\u3067\u3082\u7d39\u4ecb\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001AWS CDK \u3067\u3082\u5b9f\u73fe\u53ef\u80fd\u3067\u3042\u308b\u3053\u3068\u3092\u77e5\u3063\u3066\u3044\u305f\u3060\u3051\u308c\u3070\u3068\u601d\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u672c\u8a18\u4e8b\u306e\u6700\u5f8c\u306b\u306f Unity Build Server \u3067\u306e\u5fdc\u7528\u4f8b\u3092\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3068\u3068\u3082\u306b\u3054\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4eca\u56de\u4f7f\u7528\u3057\u305f Node.js \u3068 CDK \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ node --version\nv18.13.0\n\n$ cdk --version\n2.63.0 (build 7f4e35e)\n")),(0,r.kt)("h2",{id:"eni-\u3092-aws-cdk-\u3067\u4f5c\u6210\u3059\u308b"},"ENI \u3092 AWS CDK \u3067\u4f5c\u6210\u3059\u308b"),(0,r.kt)("p",null,"\u307e\u305a\u3001EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u30a2\u30bf\u30c3\u30c1\u3059\u308b ENI \u3092 AWS CDK \u3067\u4f5c\u6210\u3057\u307e\u3059\u3002\n\u65e2\u306b\u5b58\u5728\u3059\u308b ENI \u3092\u5229\u7528\u3057\u305f\u3044\u5834\u5408\u3001",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/resource-import-existing-stack.html"},"CloudFormation \u3078\u306e\u30a4\u30f3\u30dd\u30fc\u30c8")," \u3084 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ja_jp/cdk/v2/guide/use_cfn_template.html"},"CloudFormation \u306e\u30a4\u30f3\u30dd\u30fc\u30c8")," \u3092\u53c2\u8003\u306b\u3057\u3001\u30ea\u30bd\u30fc\u30b9\u3092 CDK \u7ba1\u7406\u4e0b\u306b\u79fb\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u672c\u8a18\u4e8b\u57f7\u7b46\u6642\u70b9\u3067\u306f AWS CDK \u306b ENI \u306e L2 \u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30c8\u306f\u5b58\u5728\u3057\u307e\u305b\u3093\u3002\n\u305d\u3053\u3067\u4eca\u56de\u306f\u3088\u308a CloudFormation \u306b\u8fd1\u3044 L1 \u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30c8\u306e ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cdk/api/v1/docs/@aws-cdk_aws-ec2.CfnNetworkInterface.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ec2.CfnNetworkInterface"))," \u3092\u4f7f\u3063\u3066 ENI \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\nENI \u304c\u8aa4\u3063\u3066\u524a\u9664\u3055\u308c\u3066\u3057\u307e\u3046\u3053\u3068\u3092\u9632\u6b62\u3057\u305f\u3044\u5834\u5408\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u524a\u9664\u30dd\u30ea\u30b7\u30fc\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"Retain")," \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"CDK \u306e\u30b3\u30fc\u30c9\u306f\u305d\u308c\u305e\u308c\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002(\u4e00\u90e8\u629c\u7c8b\u3001\u4ee5\u4e0b\u540c\u69d8)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as cdk from 'aws-cdk-lib';\nimport * as ec2 from 'aws-cdk-lib/aws-ec2';\nimport { Construct } from 'constructs';\nimport { RemovalPolicy } from 'aws-cdk-lib';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const vpc = new ec2.Vpc(this, 'Vpc', {});\nconst subnetId = vpc.privateSubnets[0].subnetId;\nconst eni = new ec2.CfnNetworkInterface(this, 'Eni', {\n  subnetId: subnetId,\n});\neni.applyRemovalPolicy(RemovalPolicy.RETAIN);\n")),(0,r.kt)("h2",{id:"eni-\u3092-ec2-\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e-primary-eni-\u306b\u6307\u5b9a\u3059\u308b"},"ENI \u3092 EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e primary ENI \u306b\u6307\u5b9a\u3059\u308b"),(0,r.kt)("p",null,"\u8d77\u52d5\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8 (",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ec2.LaunchTemplate.html"},"LaunchTemplate"),")\u3092\u5229\u7528\u3057\u3066 EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u8d77\u52d5\u3059\u308b\u305f\u3081\u3001CDK \u3067\u8d77\u52d5\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const launchTemplate = new ec2.LaunchTemplate(this, 'LaunchTemplate', {\n  instanceType: new ec2.InstanceType('t3.small'),\n  machineImage: new ec2.AmazonLinuxImage({\n    generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2,\n  }),\n});\n")),(0,r.kt)("p",null,"\u8d77\u52d5\u6642\u306b\u30a2\u30bf\u30c3\u30c1\u3059\u308b ENI \u3092\u6307\u5b9a\u3059\u308b\u306b\u306f\u8d77\u52d5\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html#cfn-ec2-launchtemplate-launchtemplatedata-networkinterfaces"},"NetworkInterfaces")," \u3092\u5909\u66f4\u3059\u308c\u3070\u3088\u3044\u306e\u3067\u3059\u304c\u3001\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f L2 \u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30c8 ",(0,r.kt)("inlineCode",{parentName:"p"},"ec2.LaunchTemplate")," \u3067\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\n\u305d\u3053\u3067\u4eca\u56de\u306f AWS CDK \u306e ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ja_jp/cdk/v2/guide/cfn_layer.html"},"\u30a8\u30b9\u30b1\u30fc\u30d7\u30cf\u30c3\u30c1")," \u3084 raw \u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3068\u547c\u3070\u308c\u308b\u6a5f\u80fd\u3092\u5229\u7528\u3057\u3066\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5b9f\u969b\u306e\u30b3\u30fc\u30c9\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const cfnLaunchTemplate = launchTemplate.node.findChild('Resource') as ec2.CfnLaunchTemplate;\ncfnLaunchTemplate.addPropertyOverride('LaunchTemplateData.NetworkInterfaces', [\n  {\n    DeviceIndex: 0,\n    DeleteOnTermination: false,\n    NetworkInterfaceId: eni.ref,\n  },\n]);\n")),(0,r.kt)("p",null,"\u8d77\u52d5\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u8a2d\u5b9a\u304c\u5b8c\u4e86\u3057\u305f\u306e\u3067\u3001EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u4f5c\u6210\u306b\u79fb\u308a\u307e\u3059\u3002\n\u305f\u3060\u3057\u3001\u4eca\u56de\u306f L2 Construct \u306e\u3000",(0,r.kt)("inlineCode",{parentName:"p"},"ec2.Instance")," \u3092\u5229\u7528\u3059\u308b\u3068\u30d7\u30ed\u30b0\u30e9\u30e0\u304c\u8907\u96d1\u306b\u306a\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002\n\u3053\u308c\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"ec2.Instance")," \u3067\u306f\u81ea\u52d5\u7684\u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u30b5\u30d6\u30cd\u30c3\u30c8\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u308c\u308b\u306e\u3067\u3059\u304c\u3001ENI \u3068\u30b5\u30d6\u30cd\u30c3\u30c8 ID \u3092\u540c\u6642\u306b\u6307\u5b9a\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u306a\u3044\u3068\u3044\u3046\u5236\u7d04\u304c\u3042\u308b\u305f\u3081\u3067\u3059\u3002(\u5b9f\u969b\u306b\u30c7\u30d7\u30ed\u30a4\u3057\u3088\u3046\u3068\u3059\u308b\u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},"Network interfaces and an instance-level subnet ID may not be specified on the same request (Service: AmazonEC2; Status Code: 400; Error Code: InvalidParameterCombination; ...")," \u3068\u3044\u3063\u305f\u30a8\u30e9\u30fc\u304c\u8fd4\u3055\u308c\u307e\u3059)"),(0,r.kt)("p",null,"\u305d\u3053\u3067 EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e L1 Construct \u3067\u3042\u308b ",(0,r.kt)("inlineCode",{parentName:"p"},"ec2.CfnInstance")," \u3092\u5229\u7528\u3057\u3066\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u30b3\u30fc\u30c9\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"new ec2.CfnInstance(this, 'Instance', {\n  launchTemplate: {\n  version: launchTemplate.versionNumber,\n  launchTemplateId: launchTemplate.launchTemplateId,\n  },\n});\n")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u3067\u6307\u5b9a\u3057\u305f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092 primary ENI \u3068\u3057\u3066\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3067\u304d\u307e\u3057\u305f\u3002"),(0,r.kt)("h2",{id:"unity-build-server-\u3067\u306e\u5fdc\u7528\u4f8b"},"Unity Build Server \u3067\u306e\u5fdc\u7528\u4f8b"),(0,r.kt)("p",null,"MAC \u30a2\u30c9\u30ec\u30b9\u306e\u56fa\u5b9a\u304c\u6c42\u3081\u3089\u308c\u308b\u5834\u9762\u306e\u4f8b\u3068\u3057\u3066\u3001Unity Build Server \u3092 AWS \u4e0a\u306b\u69cb\u7bc9\u3059\u308b\u30b1\u30fc\u30b9\u304c\u6319\u3052\u3089\u308c\u307e\u3059\u3002\naws-samples \u306b",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aws-samples/unity-build-server-with-aws-cdk"},"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9")," \u3092\u516c\u958b\u3057\u3066\u3044\u307e\u3059\u306e\u3067\u3001\u3054\u5229\u7528\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u30e9\u30a4\u30bb\u30f3\u30b9\u6761\u9805\u7b49\u3092\u3054\u78ba\u8a8d\u306e\u4e0a\u3001\u3054\u6d3b\u7528\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"\u304a\u308f\u308a\u306b"},"\u304a\u308f\u308a\u306b"),(0,r.kt)("p",null,"\u672c\u8a18\u4e8b\u3067\u306f AWS CDK \u3092\u4f7f\u3044\u3001\u6307\u5b9a\u3057\u305f ENI \u3092 primary ENI \u3068\u3057\u3066\u30a2\u30bf\u30c3\u30c1\u3057\u3001MAC \u30a2\u30c9\u30ec\u30b9\u3068 IP \u30a2\u30c9\u30ec\u30b9\u3092\u56fa\u5b9a\u3057\u305f EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002\n\u3053\u308c\u306b\u3088\u308a EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u9593\u3067 MAC \u30a2\u30c9\u30ec\u30b9\u3084 IP \u30a2\u30c9\u30ec\u30b9\u3092\u5f15\u304d\u7d99\u3044\u3067\u8d77\u52d5\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\n\u307e\u305f\u3001Unity Build Server \u3092 AWS \u306b\u69cb\u7bc9\u3059\u308b\u5834\u5408\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u306b\u3064\u3044\u3066\u3082\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002"))}m.isMDXComponent=!0}}]);