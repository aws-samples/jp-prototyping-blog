"use strict";(self.webpackChunkjp_prototyping_blog=self.webpackChunkjp_prototyping_blog||[]).push([[4463],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>y});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return t?r.createElement(y,o(o({ref:n},l),{},{components:t})):r.createElement(y,o({ref:n},l))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9080:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const s={title:"CDK \u3067 instanceProps \u3092\u4f7f\u3063\u305f RDS (Aurora) \u3092 writer \u3068 readers \u3092\u4f7f\u3063\u305f\u66f8\u304d\u65b9\u306b\u79fb\u884c\u3059\u308b",slug:"cdk-aurora-migration",tags:["cdk","rds","aurora"],authors:["kudtomoy"]},o=void 0,i={permalink:"/blog/cdk-aurora-migration",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2023-08-17-cdk-aurora-migration/index.md",source:"@site/blog/2023-08-17-cdk-aurora-migration/index.md",title:"CDK \u3067 instanceProps \u3092\u4f7f\u3063\u305f RDS (Aurora) \u3092 writer \u3068 readers \u3092\u4f7f\u3063\u305f\u66f8\u304d\u65b9\u306b\u79fb\u884c\u3059\u308b",description:"AWS CDK \u306e v2.82.0 \u306b\u3066\u3001Aurora Serverless V2 \u306b\u5bfe\u5fdc\u3057\u305f\u3068\u540c\u6642\u306b\u3001RDS (Aurora) \u306e\u8a18\u8ff0\u65b9\u6cd5\u304c\u5909\u308f\u308a\u307e\u3057\u305f\u3002",date:"2023-08-17T00:00:00.000Z",formattedDate:"2023\u5e748\u670817\u65e5",tags:[{label:"cdk",permalink:"/blog/tags/cdk"},{label:"rds",permalink:"/blog/tags/rds"},{label:"aurora",permalink:"/blog/tags/aurora"}],readingTime:2.095,hasTruncateMarker:!0,authors:[{name:"Tomoya Kudo",title:"Prototyping Engineer",url:"https://github.com/kudtomoy",imageURL:"https://github.com/kudtomoy.png",key:"kudtomoy"}],frontMatter:{title:"CDK \u3067 instanceProps \u3092\u4f7f\u3063\u305f RDS (Aurora) \u3092 writer \u3068 readers \u3092\u4f7f\u3063\u305f\u66f8\u304d\u65b9\u306b\u79fb\u884c\u3059\u308b",slug:"cdk-aurora-migration",tags:["cdk","rds","aurora"],authors:["kudtomoy"]},prevItem:{title:"AWS HealthOmics \u3068 Step Functions \u3067\u30aa\u30df\u30af\u30b9\u30c7\u30fc\u30bf\u5206\u6790\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u69cb\u7bc9\u3059\u308b",permalink:"/blog/aws-healthomics-analysis-app"},nextItem:{title:"Lambda SnapStart \u3092 Java \u4ee5\u5916\u3067\u6709\u52b9\u5316\u3059\u308b\u65b9\u6cd5",permalink:"/blog/snapstart-any-langs"}},c={authorsImageUrls:[void 0]},p=[{value:"v2.81.0 \u4ee5\u524d\u306e\u66f8\u304d\u65b9",id:"v2810-\u4ee5\u524d\u306e\u66f8\u304d\u65b9",level:2},{value:"v2.82.0 \u4ee5\u964d\u306e\u66f8\u304d\u65b9",id:"v2820-\u4ee5\u964d\u306e\u66f8\u304d\u65b9",level:2},{value:"\u65e2\u5b58\u306e RDS (Aurora) \u3092\u79fb\u884c\u3059\u308b\u624b\u9806",id:"\u65e2\u5b58\u306e-rds-aurora-\u3092\u79fb\u884c\u3059\u308b\u624b\u9806",level:2}],l={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"AWS CDK \u306e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aws/aws-cdk/releases/tag/v2.82.0"},"v2.82.0")," \u306b\u3066\u3001Aurora Serverless V2 \u306b\u5bfe\u5fdc\u3057\u305f\u3068\u540c\u6642\u306b\u3001RDS (Aurora) \u306e\u8a18\u8ff0\u65b9\u6cd5\u304c\u5909\u308f\u308a\u307e\u3057\u305f\u3002"),(0,a.kt)("h2",{id:"v2810-\u4ee5\u524d\u306e\u66f8\u304d\u65b9"},"v2.81.0 \u4ee5\u524d\u306e\u66f8\u304d\u65b9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const cluster = new rds.DatabaseCluster(this, 'Database', {\n  engine: rds.DatabaseClusterEngine.auroraMysql({\n    version: rds.AuroraMysqlEngineVersion.VER_3_03_0,\n  }),\n  instances: 2,\n  instanceProps: {\n    instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.SMALL),\n    vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },\n    vpc,\n  },\n});\n")),(0,a.kt)("p",null,"v2.18.0 \u4ee5\u524d\u306f\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u8a2d\u5b9a\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"instances")," \u3084 ",(0,a.kt)("inlineCode",{parentName:"p"},"instanceProps")," \u3092\u4f7f\u3063\u3066\u3044\u307e\u3057\u305f\u3002"),(0,a.kt)("h2",{id:"v2820-\u4ee5\u964d\u306e\u66f8\u304d\u65b9"},"v2.82.0 \u4ee5\u964d\u306e\u66f8\u304d\u65b9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const cluster = new rds.DatabaseCluster(this, 'Database', {\n    engine: rds.DatabaseClusterEngine.auroraMysql({\n    version: rds.AuroraMysqlEngineVersion.VER_3_03_0,\n    }),\n    vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },\n    vpc,\n    writer: rds.ClusterInstance.provisioned('Writer', {\n    instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.SMALL),\n    }),\n    readers: [\n    rds.ClusterInstance.provisioned('Reader1', {\n        instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.SMALL),\n    }),\n    ],\n});\n")),(0,a.kt)("p",null,"v2.82.0 \u4ee5\u964d\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"instances")," \u3068 ",(0,a.kt)("inlineCode",{parentName:"p"},"instanceProps")," \u304c Deprecated \u306b\u306a\u308a\u3001\u4ee3\u308f\u308a\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"writer")," \u3068 ",(0,a.kt)("inlineCode",{parentName:"p"},"readers")," \u3092\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u65e2\u5b58\u306e-rds-aurora-\u3092\u79fb\u884c\u3059\u308b\u624b\u9806"},"\u65e2\u5b58\u306e RDS (Aurora) \u3092\u79fb\u884c\u3059\u308b\u624b\u9806"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"instances")," \u3068 ",(0,a.kt)("inlineCode",{parentName:"p"},"instanceProps")," \u3092\u4f7f\u3063\u3066\u3044\u305f\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092 ",(0,a.kt)("inlineCode",{parentName:"p"},"writer")," \u3068 ",(0,a.kt)("inlineCode",{parentName:"p"},"readers")," \u3092\u4f7f\u3063\u305f\u66f8\u304d\u65b9\u306b\u79fb\u884c\u3059\u308b\u305f\u3081\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"isFromLegacyInstanceProps")," \u3068\u3044\u3046\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u307e\u305f Coustruct ID \u3082\u4ee5\u524d\u306e\u3082\u306e\u306b\u5408\u308f\u305b\u308b (\u4eca\u56de\u306f Instance1-2) \u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const cluster = new rds.DatabaseCluster(this, 'Database', {\n    engine: rds.DatabaseClusterEngine.auroraMysql({\n    version: rds.AuroraMysqlEngineVersion.VER_3_03_0,\n    }),\n    vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },\n    vpc,\n    writer: rds.ClusterInstance.provisioned('Instance1', {\n    instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.LARGE),\n    isFromLegacyInstanceProps: true,\n    }),\n    readers: [\n    rds.ClusterInstance.provisioned('Instance2', {\n        instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.LARGE),\n        isFromLegacyInstanceProps: true,\n    }),\n    ],\n});\n")),(0,a.kt)("p",null,"\u30c7\u30d7\u30ed\u30a4\u524d\u306b\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"cdk diff")," \u3092\u4f7f\u3063\u3066\u5dee\u5206\u304c\u306a\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\u3002\n\u5dee\u5206\u304c\u3042\u308b\u5834\u5408\u306b\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u3001\u4e00\u5ea6\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u524a\u9664\u3055\u308c\u3066\u3057\u307e\u3046\u3053\u3068\u304c\u5206\u304b\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"% cdk diff\nStack SampleStack\nResources\n[-] AWS::RDS::DBInstance Database/Instance1 DatabaseInstance1844F58FD destroy\n[-] AWS::RDS::DBInstance Database/Instance2 DatabaseInstance2AA380DEE destroy\n[+] AWS::RDS::DBInstance Database/Instance1 DatabaseInstance14A23AADF \n[+] AWS::RDS::DBInstance Database/Instance2 DatabaseInstance20B30A4F7 \n")),(0,a.kt)("p",null,"\u5dee\u5206\u304c\u306a\u3044\u5834\u5408\u306b\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"% cdk diff\nStack SampleStack\nThere were no differences\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"isFromLegacyInstanceProps")," \u306f CDK v2.89.0 \u4ee5\u964d\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"))}d.isMDXComponent=!0}}]);