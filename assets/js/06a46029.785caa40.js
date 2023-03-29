"use strict";(self.webpackChunkjp_prototyping_blog=self.webpackChunkjp_prototyping_blog||[]).push([[9188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,k=u["".concat(i,".").concat(c)]||u[c]||s[c]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={title:"Glue Spark\u3092\u4f7f\u3063\u3066Redshift\u306e\u30c7\u30fc\u30bf\u3092DynamoDB\u3078\u66f8\u304d\u51fa\u3059",slug:"redshift-to-dynamo-glue",tags:["dynamodb","redshift","glue","spark"],authors:["statefb"]},o=void 0,p={permalink:"/blog/redshift-to-dynamo-glue",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2023-03-28-redshift-to-dynamo-glue/index.md",source:"@site/blog/2023-03-28-redshift-to-dynamo-glue/index.md",title:"Glue Spark\u3092\u4f7f\u3063\u3066Redshift\u306e\u30c7\u30fc\u30bf\u3092DynamoDB\u3078\u66f8\u304d\u51fa\u3059",description:"AWS \u4e0a\u3067\u30c7\u30fc\u30bf\u5206\u6790\u7528\u306e\u57fa\u76e4\u3092\u69cb\u7bc9\u3059\u308b\u969b\u3001\u30c7\u30fc\u30bf\u30a6\u30a7\u30a2\u30cf\u30a6\u30b9\u3068\u3057\u3066 Redshift\u3001\u30c7\u30fc\u30bf\u30de\u30fc\u30c8\u3068\u3057\u3066 DynamoDB \u3092\u5229\u7528\u3057\u305f\u3044\u3053\u3068\u304c\u3042\u308b\u3068\u601d\u3044\u307e\u3059\u3002\u305f\u3068\u3048\u3070 Redshift \u4e0a\u306e\u30c7\u30fc\u30bf\u3092\u96c6\u8a08\u3057\u305f\u7d50\u679c\u306b\u983b\u7e41\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5834\u5408\u306b\u304a\u3044\u3066\u3001\u30aa\u30d5\u30ed\u30fc\u30c9\u5148\u3068\u3057\u3066 DynamoDB \u3092\u63a1\u7528\u3059\u308b\u7b49\u306e\u30b1\u30fc\u30b9\u3092\u60f3\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002\u672c\u8a18\u4e8b\u3067\u306f Glue Spark \u3092\u7528\u3044\u3066 Redshift \u304b\u3089 DynamoDB \u3078\u30c7\u30fc\u30bf\u3092 ETL \u3059\u308b\u65b9\u6cd5\u3092\u5177\u4f53\u4f8b\u3092\u4ea4\u3048\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002",date:"2023-03-28T00:00:00.000Z",formattedDate:"2023\u5e743\u670828\u65e5",tags:[{label:"dynamodb",permalink:"/blog/tags/dynamodb"},{label:"redshift",permalink:"/blog/tags/redshift"},{label:"glue",permalink:"/blog/tags/glue"},{label:"spark",permalink:"/blog/tags/spark"}],readingTime:6.95,hasTruncateMarker:!0,authors:[{name:"Takehiro Suzuki",title:"Prototyping Engineer",url:"https://github.com/statefb",imageURL:"https://github.com/statefb.png",key:"statefb"}],frontMatter:{title:"Glue Spark\u3092\u4f7f\u3063\u3066Redshift\u306e\u30c7\u30fc\u30bf\u3092DynamoDB\u3078\u66f8\u304d\u51fa\u3059",slug:"redshift-to-dynamo-glue",tags:["dynamodb","redshift","glue","spark"],authors:["statefb"]},nextItem:{title:"\u6700\u65b0\u306e nvidia-driver \u5bfe\u5fdc\u306e Amazon Linux 2 \u30d9\u30fc\u30b9\u306e EKS AMI \u306e\u4f5c\u308a\u65b9",permalink:"/blog/amazon-eks-gpu-ami"}},i={authorsImageUrls:[void 0]},m=[{value:"\u554f\u984c\u8a2d\u5b9a",id:"\u554f\u984c\u8a2d\u5b9a",level:2},{value:"Redshift \u304b\u3089\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u8fbc\u3080 (Extract)",id:"redshift-\u304b\u3089\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u8fbc\u3080-extract",level:2},{value:"\u30c7\u30fc\u30bf\u306e\u5909\u63db (Transform)",id:"\u30c7\u30fc\u30bf\u306e\u5909\u63db-transform",level:2},{value:"DynamoDB \u3078\u66f8\u304d\u8fbc\u307f (Load)",id:"dynamodb-\u3078\u66f8\u304d\u8fbc\u307f-load",level:2},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2}],d={toc:m};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"AWS \u4e0a\u3067\u30c7\u30fc\u30bf\u5206\u6790\u7528\u306e\u57fa\u76e4\u3092\u69cb\u7bc9\u3059\u308b\u969b\u3001\u30c7\u30fc\u30bf\u30a6\u30a7\u30a2\u30cf\u30a6\u30b9\u3068\u3057\u3066 Redshift\u3001\u30c7\u30fc\u30bf\u30de\u30fc\u30c8\u3068\u3057\u3066 DynamoDB \u3092\u5229\u7528\u3057\u305f\u3044\u3053\u3068\u304c\u3042\u308b\u3068\u601d\u3044\u307e\u3059\u3002\u305f\u3068\u3048\u3070 Redshift \u4e0a\u306e\u30c7\u30fc\u30bf\u3092\u96c6\u8a08\u3057\u305f\u7d50\u679c\u306b\u983b\u7e41\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5834\u5408\u306b\u304a\u3044\u3066\u3001\u30aa\u30d5\u30ed\u30fc\u30c9\u5148\u3068\u3057\u3066 DynamoDB \u3092\u63a1\u7528\u3059\u308b\u7b49\u306e\u30b1\u30fc\u30b9\u3092\u60f3\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002\u672c\u8a18\u4e8b\u3067\u306f Glue Spark \u3092\u7528\u3044\u3066 Redshift \u304b\u3089 DynamoDB \u3078\u30c7\u30fc\u30bf\u3092 ETL \u3059\u308b\u65b9\u6cd5\u3092\u5177\u4f53\u4f8b\u3092\u4ea4\u3048\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u554f\u984c\u8a2d\u5b9a"},"\u554f\u984c\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u4e0b\u8a18\u306e\u3088\u3046\u306a\u8cfc\u8cb7\u5c65\u6b74\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u6271\u3046\u3082\u306e\u3068\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"user_id"),(0,r.kt)("th",{parentName:"tr",align:null},"item_id"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user001"),(0,r.kt)("td",{parentName:"tr",align:null},"item001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user001"),(0,r.kt)("td",{parentName:"tr",align:null},"item002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user001"),(0,r.kt)("td",{parentName:"tr",align:null},"item003")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user002"),(0,r.kt)("td",{parentName:"tr",align:null},"item010")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user003"),(0,r.kt)("td",{parentName:"tr",align:null},"item002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user003"),(0,r.kt)("td",{parentName:"tr",align:null},"item010")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"...")))),(0,r.kt)("p",null,"\u4e0a\u8a18\u30c7\u30fc\u30bf\u304c Redshift \u306e",(0,r.kt)("inlineCode",{parentName:"p"},"transaction"),"\u30c6\u30fc\u30d6\u30eb\u306b\u5b58\u5728\u3059\u308b\u3068\u3057\u307e\u3059\u3002\u3053\u308c\u3092\u4e0b\u8a18\u306e\u3088\u3046\u306b",(0,r.kt)("inlineCode",{parentName:"p"},"user_id")," \u3054\u3068\u306b\u6574\u7406\u3057\u3001DynamoDB \u3078\u66f8\u304d\u8fbc\u3080\u72b6\u6cc1\u3092\u8003\u3048\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"user_id"),(0,r.kt)("th",{parentName:"tr",align:null},"items"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user001"),(0,r.kt)("td",{parentName:"tr",align:null},"[item001,item002,item003]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user002"),(0,r.kt)("td",{parentName:"tr",align:null},"[item010]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user003"),(0,r.kt)("td",{parentName:"tr",align:null},"[item002,item010]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"...")))),(0,r.kt)("h2",{id:"redshift-\u304b\u3089\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u8fbc\u3080-extract"},"Redshift \u304b\u3089\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u8fbc\u3080 (Extract)"),(0,r.kt)("p",null,"Spark \u3067\u306f JDBC \u3092\u4f7f\u3063\u3066 Redshift \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u305f\u3068\u3048\u3070 Glue PySpark \u3067\u306f\u4e0b\u8a18\u306e\u3088\u3046\u306b\u8a18\u8ff0\u3059\u308b\u3053\u3068\u3067\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-glue.py"},'from awsglue.context import GlueContext\nfrom pyspark.context import SparkContext\n\nsc = SparkContext()\nglueContext = GlueContext(sc)\n\ndf = (\n    glueContext.read.format("jdbc")\n    .option("url", "jdbc:redshift://host.amazonaws.com:5439/default_db")\n    .option("user", "user")\n    .option("password", "password")\n    .option("dbtable","transaction")\n    .load()\n)\n')),(0,r.kt)("p",null,"\u4e0a\u8a18\u30b3\u30fc\u30c9\u306f\u5358\u4e00\u306e Executor \u306b\u3088\u3063\u3066\u51e6\u7406\u3055\u308c\u308b\u305f\u3081\u3001\u30c7\u30fc\u30bf\u30b5\u30a4\u30ba\u304c\u5c0f\u3055\u3044\u5834\u5408\u306f\u52d5\u4f5c\u3057\u307e\u3059\u304c\u3001\u5927\u91cf\u306e\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u8fbc\u3080\u5834\u5408\u30e1\u30e2\u30ea\u4e0d\u8db3\u7b49\u306e\u539f\u56e0\u306b\u3088\u308a ETL \u30b8\u30e7\u30d6\u306f\u5931\u6557\u306b\u7d42\u308f\u308a\u307e\u3059\u3002\u8907\u6570\u306e Executor \u306b\u3088\u308a\u4e26\u884c\u306b\u51e6\u7406\u3059\u308b\u306b\u306f\u9069\u5207\u306a\u30d1\u30fc\u30c6\u30a3\u30b7\u30e7\u30cb\u30f3\u30b0\u3092\u5b9f\u65bd\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u30d1\u30fc\u30c6\u30a3\u30b7\u30e7\u30cb\u30f3\u30b0\u3059\u308b\u305f\u3081\u306b\u306f\u4e0b\u8a18 3 \u3064\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"partitionColumn"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30d1\u30fc\u30c6\u30a3\u30b7\u30e7\u30f3\u306e\u30ad\u30fc\u3068\u306a\u308b\u30ab\u30e9\u30e0\u3002\u6570\u5024\u30fb\u65e5\u4ed8\u30fb\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u306e\u3069\u308c\u304b\u306e\u578b\u3092\u6301\u3064\u30ab\u30e9\u30e0\u3092\u6307\u5b9a\u3067\u304d\u308b"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"numPartitions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30d1\u30fc\u30c6\u30a3\u30b7\u30e7\u30f3\u306e\u6570"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lowerBound"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"upperBound"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30d1\u30fc\u30c6\u30a3\u30b7\u30e7\u30f3\u306e\u30ec\u30f3\u30b8\u3092\u5b9a\u7fa9\u3059\u308b\u305f\u3081\u306b\u5229\u7528\u3055\u308c\u308b\u30d1\u30e9\u30e1\u30fc\u30bf")))),(0,r.kt)("p",null,"\u305f\u3068\u3048\u3070\u30d1\u30fc\u30c6\u30a3\u30b7\u30e7\u30f3\u3068\u306a\u308b\u30ab\u30e9\u30e0: ",(0,r.kt)("inlineCode",{parentName:"p"},"example_col"),"\u304c 1 \u304b\u3089 1000 \u306e\u7bc4\u56f2\u306e\u6574\u6570\u3092\u3068\u308b\u5834\u5408\u306b\u304a\u3044\u3066",(0,r.kt)("inlineCode",{parentName:"p"},"numPartitions"),"\u3092 10\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"lowerBound"),"\u3092 1\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"upperBound"),"\u3092 1000 \u3068\u3057\u305f\u5834\u5408\u3001\u305d\u308c\u305e\u308c\u306e\u30d1\u30fc\u30c6\u30a3\u30b7\u30e7\u30f3\u306b\u304a\u3044\u3066\u500b\u5225\u306b\u4e0b\u8a18\u306e\u3088\u3046\u306a\u30af\u30a8\u30ea\u304c\u767a\u884c\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-example.sql"},"SELECT * FROM table WHERE example_col < 100\nSELECT * FROM table WHERE example_col >= 100 and example_col < 200\nSELECT * FROM table WHERE example_col >= 200 and example_col < 300\n...\nSELECT * FROM table WHERE example_col >= 900\n")),(0,r.kt)("p",null,"\u3057\u305f\u304c\u3063\u3066\u3001\u5404\u30d1\u30fc\u30c6\u30a3\u30b7\u30e7\u30f3\u3067\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"example_col"),"\u306e\u5024\u304c 1~99, 100~199, 200~299, ..., 900~1000 \u3067\u3042\u308b\u30ec\u30b3\u30fc\u30c9\u3092\u53d6\u308a\u6271\u3046\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\n\u8a73\u7d30\u306f",(0,r.kt)("a",{parentName:"p",href:"http://mogile.web.fc2.com/spark/sql-data-sources-jdbc.html"},"Spark \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002\u306a\u304a Redshift \u3067\u306f\u30af\u30a8\u30ea\u5c65\u6b74\u306f\u4e0b\u8a18\u306e\u3088\u3046\u306a\u30af\u30a8\u30ea\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-history.sql"},"SELECT query_text, execution_time, start_time FROM sys_query_history\n")),(0,r.kt)("p",null,"\u4eca\u56de\u306e\u30b1\u30fc\u30b9\u3067\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"user_id"),"\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"partitionColumn"),"\u306b\u6307\u5b9a\u3059\u308b\u30a2\u30a4\u30c7\u30a2\u304c\u8003\u3048\u3089\u308c\u307e\u3059\u304c\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"user_id"),"\u306f\u6587\u5b57\u5217\u578b\u3067\u3042\u308b\u305f\u3081\u76f4\u63a5\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002\u307e\u305f\u6570\u5024\u578b\u3067\u3042\u3063\u305f\u3068\u3057\u3066\u3082\u5206\u5e03\u304c\u5747\u7b49\u3067\u306a\u3044\u30b1\u30fc\u30b9\u304c\u5b58\u5728\u3059\u308b\u3053\u3068\u3082\u5bb9\u6613\u306b\u60f3\u50cf\u3067\u304d\u307e\u3059\uff08\u30d8\u30d3\u30fc\u30e6\u30fc\u30b6\u30fc\u3068\u30e9\u30a4\u30c8\u30e6\u30fc\u30b6\u30fc\u3067\u306f\u5c65\u6b74\u306e\u6570\u304c\u7570\u306a\u308b\u306a\u3069\uff09\u3002\u5747\u7b49\u3067\u306a\u3044\u5834\u5408\u30c7\u30fc\u30bf\u306e\u504f\u308a\u304c\u767a\u751f\u3057\u3001\u305d\u306e\u7d50\u679c\u30e1\u30e2\u30ea\u4e0d\u8db3\u306b\u95a2\u9023\u3057\u305f\u554f\u984c\u304c\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u3001\u3053\u3053\u3067\u306f\u30cf\u30c3\u30b7\u30e5\u306e\u5270\u4f59\u3092\u5229\u7528\u3057\u307e\u3059\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"user_id"),"\u306e\u30cf\u30c3\u30b7\u30e5\u5024\u3092\u30d1\u30fc\u30c6\u30a3\u30b7\u30e7\u30f3\u6570\u3067\u5272\u3063\u305f\u4f59\u308a\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"partitionColumn"),"\u306b\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u4e0a\u8ff0\u306e\u554f\u984c\u3092\u56de\u907f\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u30cf\u30c3\u30b7\u30e5\u5024\u306e\u8a08\u7b97\u306b Redshift \u306e",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ja_jp/redshift/latest/dg/r_CHECKSUM.html"},"CHECKSUM \u95a2\u6570"),"\u3092\u5229\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-glue.py"},'NUM_PARTITIONS = 30\nLOWER_BOUND = 0\nUPPER_BOUND = NUM_PARTITIONS\n\nsql = """\nSELECT\n    user_id,\n    item_id,\n    CHECKSUM(user_id) % {} as partition\nFROM\n    recommend\n""".format(NUM_PARTITIONS)\n\njdbc_properties = {\n    "url": "jdbc:redshift://host.amazonaws.com:5439/default_db",\n    "user": "user",\n    "password": "password",\n}\n\ndf = (\n    glueContext.read.format("jdbc")\n    .option("url", "jdbc:redshift://host.amazonaws.com:5439/default_db")\n    .option("user", "user")\n    .option("password", "password")\n    .option(\n        "dbtable",\n        f"({sql}) as tmp",\n    )\n    .option("partitionColumn", "partition")\n    .option("lowerBound", str(LOWER_BOUND))\n    .option("upperBound", str(UPPER_BOUND))\n    .option("numPartitions", str(NUM_PARTITIONS))\n    .load()\n)\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://mogile.web.fc2.com/spark/sql-data-sources-jdbc.html"},"Spark \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u306b\u3042\u308b\u3088\u3046\u306b\u3001\u3053\u3053\u3067\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"dbtable"),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u76f4\u63a5\u30af\u30a8\u30ea\u6587\u3092\u6307\u5b9a\u3057\u3066\u3044\u308b\u70b9\u306b\u7559\u610f\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"read \u30d1\u30b9\u3067\u305d\u308c\u3092\u4f7f\u3046\u5834\u5408\u306f\u3001SQL \u30af\u30a8\u30ea\u306e FROM \u53e5\u3067\u6709\u52b9\u306a\u3082\u306e\u3092\u5168\u3066\u4f7f\u7528\u3067\u304d\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u4f8b\u3048\u3070\u3001\u5b8c\u5168\u306a\u30c6\u30fc\u30d6\u30eb\u306e\u4ee3\u308f\u308a\u306b\u3001\u4e38\u62ec\u5f27\u5185\u306e\u30b5\u30d6\u30af\u30a8\u30ea\u3082\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,r.kt)("p",null,"\u306a\u304a\u30d1\u30fc\u30c6\u30a3\u30b7\u30e7\u30f3\u6570: ",(0,r.kt)("inlineCode",{parentName:"p"},"NUM_PARTITIONS"),"\u306b\u306f 30 \u3092\u6307\u5b9a\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u30d1\u30fc\u30c6\u30a3\u30b7\u30e7\u30f3\u6570\u3092\u5897\u3084\u3059\u3068 Redshift \u3078\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u6570\u3082\u5897\u52a0\u3059\u308b\u70b9\u306b\u7559\u610f\u304f\u3060\u3055\u3044\u3002\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u30af\u30a8\u30ea\u30ad\u30e5\u30fc\u306b\u7a4d\u307e\u308c\u9806\u6b21\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002\u8a73\u7d30\u306f",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ja_jp/redshift/latest/dg/cm-c-defining-query-queues.html"},"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"\u30c7\u30fc\u30bf\u306e\u5909\u63db-transform"},"\u30c7\u30fc\u30bf\u306e\u5909\u63db (Transform)"),(0,r.kt)("p",null,"Spark \u306e ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/3.1.1/api/python/reference/api/pyspark.sql.DataFrame.html"},"DataFrame API")," \u3092\u5229\u7528\u3057\u4e0b\u8a18\u306e\u3088\u3046\u306b\u5909\u63db\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-glue.py"},'from pyspark.sql.functions import collect_list\n\ndf_transformed = (\n    df.groupBy("user_id")\n    .agg(\n        collect_list("item_id").alias("items"),\n    )\n)\n')),(0,r.kt)("h2",{id:"dynamodb-\u3078\u66f8\u304d\u8fbc\u307f-load"},"DynamoDB \u3078\u66f8\u304d\u8fbc\u307f (Load)"),(0,r.kt)("p",null,"Spark DataFrame \u3092 Dynamic Frame \u3078\u5909\u63db\u5f8c\u3001",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ja_jp/glue/latest/dg/aws-glue-api-crawler-pyspark-extensions-dynamic-frame-writer.html#aws-glue-api-crawler-pyspark-extensions-dynamic-frame-writer-from_options"},"write_dynamic_frame_from_options"),"\u3092\u5229\u7528\u3057 DynamoDB \u3078\u66f8\u304d\u8fbc\u307f\u307e\u3059\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"connectionType"),"\u306b",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ja_jp/glue/latest/dg/aws-glue-programming-etl-connect.html#aws-glue-programming-etl-connect-dynamodb"},(0,r.kt)("inlineCode",{parentName:"a"},"dynamodb")),"\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u66f8\u304d\u8fbc\u307f\u306e\u91cf\u306b\u5bfe\u3057\u3066\u5341\u5206\u306a WCU \u304c\u78ba\u4fdd\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u306e\u3067\u3054\u7559\u610f\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-glue.py"},'dyf = DynamicFrame.fromDF(df_transformed, glueContext)\n\nglueContext.write_dynamic_frame_from_options(\n    frame=dyf,\n    connection_type="dynamodb",\n    connection_options={\n        "dynamodb.output.tableName": "output_table",\n        "dynamodb.throughput.write.percent": "1.0",\n    },\n)\n\njob.commit()\n')),(0,r.kt)("h2",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),(0,r.kt)("p",null,"\u4ee5\u4e0a\u3001Redshift \u304b\u3089 DynamoDB \u3078 Glue Spark \u3092\u5229\u7528\u3057\u305f ETL \u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002Redshift \u4ee5\u5916\u306e JDBC \u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306b\u3082\u5fdc\u7528\u3067\u304d\u307e\u3059\u306e\u3067\u3001\u3054\u53c2\u8003\u306b\u3057\u3066\u3044\u305f\u3060\u3051\u305f\u3089\u5e78\u3044\u3067\u3059\u3002"))}s.isMDXComponent=!0}}]);