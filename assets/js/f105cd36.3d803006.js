"use strict";(self.webpackChunk_aws_samples_jp_prototyping_blog=self.webpackChunk_aws_samples_jp_prototyping_blog||[]).push([[1775],{5680:(e,n,i)=>{i.d(n,{xA:()=>g,yg:()=>d});var t=i(6540);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=t.createContext({}),c=function(e){var n=t.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},g=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),s=c(i),m=r,d=s["".concat(p,".").concat(m)]||s[m]||u[m]||a;return i?t.createElement(d,o(o({ref:n},g),{},{components:i})):t.createElement(d,o({ref:n},g))}));function d(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=i[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}m.displayName="MDXCreateElement"},203:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=i(8168),r=(i(6540),i(5680));const a={title:"Amazon EKS \u306e \u8907\u6570 Pod \u9593\u3067 GPU \u3092\u5171\u6709\u3059\u308b (Time-Slicing \u7de8)",slug:"eks-gpu-time-slicing",tags:["eks","gpu","machine-learning"],authors:["kudtomoy"]},o=void 0,l={permalink:"/blog/eks-gpu-time-slicing",editUrl:"https://github.com/aws-samples/jp-prototyping-blog/edit/main/blog/2023-03-22-eks-gpu-time-slicing/index.md",source:"@site/blog/2023-03-22-eks-gpu-time-slicing/index.md",title:"Amazon EKS \u306e \u8907\u6570 Pod \u9593\u3067 GPU \u3092\u5171\u6709\u3059\u308b (Time-Slicing \u7de8)",description:"NVIDIA device plugin \u306e Time-Slicing \u6a5f\u80fd\u3092\u4f7f\u3063\u3066\u3001Amazon EKS \u306e \u8907\u6570 Pod \u9593\u3067 GPU \u3092\u5171\u6709\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002",date:"2023-03-22T00:00:00.000Z",formattedDate:"2023\u5e743\u670822\u65e5",tags:[{label:"eks",permalink:"/blog/tags/eks"},{label:"gpu",permalink:"/blog/tags/gpu"},{label:"machine-learning",permalink:"/blog/tags/machine-learning"}],readingTime:2.73,hasTruncateMarker:!0,authors:[{name:"Tomoya Kudo",title:"Prototyping Engineer",url:"https://github.com/kudtomoy",imageURL:"https://github.com/kudtomoy.png",key:"kudtomoy"}],frontMatter:{title:"Amazon EKS \u306e \u8907\u6570 Pod \u9593\u3067 GPU \u3092\u5171\u6709\u3059\u308b (Time-Slicing \u7de8)",slug:"eks-gpu-time-slicing",tags:["eks","gpu","machine-learning"],authors:["kudtomoy"]},prevItem:{title:"cdk destroy \u3057\u3066\u3082\u6b8b\u3063\u3066\u3057\u307e\u3046\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u5bfe\u51e6\u6cd5",permalink:"/blog/clean-cdk-resources"},nextItem:{title:"OpenAI API \u3092\u4f7f\u3063\u3066 Discord Bot \u3092\u4f5c\u308b",permalink:"/blog/openai-discord-bot"}},p={authorsImageUrls:[void 0]},c=[{value:"\u306f\u3058\u3081\u306b",id:"\u306f\u3058\u3081\u306b",level:2},{value:"\u8a2d\u5b9a\u65b9\u6cd5",id:"\u8a2d\u5b9a\u65b9\u6cd5",level:2}],g={toc:c},s="wrapper";function u(e){let{components:n,...i}=e;return(0,r.yg)(s,(0,t.A)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"NVIDIA device plugin \u306e Time-Slicing \u6a5f\u80fd\u3092\u4f7f\u3063\u3066\u3001Amazon EKS \u306e \u8907\u6570 Pod \u9593\u3067 GPU \u3092\u5171\u6709\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,r.yg)("h2",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),(0,r.yg)("p",null,"Amazon EKS \u3067 GPU \u30d9\u30fc\u30b9\u306e\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092\u6709\u52b9\u5316\u3059\u308b\u306b\u306f ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/NVIDIA/k8s-device-plugin"},"NVIDIA device plugin for Kubernetes")," \u3092\u30af\u30e9\u30b9\u30bf\u30fc\u306e DaemonSet \u3068\u3057\u3066\u9069\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u624b\u9806\u306f ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ja_jp/eks/latest/userguide/eks-optimized-ami.html"},"Amazon EKS \u6700\u9069\u5316 Amazon Linux AMI")," \u306b\u66f8\u304b\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.yg)("p",null,"Pod \u3092\u30b3\u30f3\u30c6\u30ca\u306b\u5272\u308a\u5f53\u3066\u308b\u969b\u306f\u4e0b\u8a18\u306e\u3088\u3046\u306b\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u306e ",(0,r.yg)("inlineCode",{parentName:"p"},"resources")," \u3067\u4f7f\u7528\u3059\u308b GPU\u6570\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: nvidia-smi\nspec:\n  restartPolicy: OnFailure\n  containers:\n  - name: nvidia-smi\n    image: nvidia/cuda:9.2-devel\n    args:\n    - "nvidia-smi"\n    resources:\n      limits:\n        nvidia.com/gpu: 1\n')),(0,r.yg)("p",null,"\u3053\u3053\u3067\u6307\u5b9a\u3067\u304d\u308b\u6570\u306f\u6574\u6570\u3067\u3042\u308b\u305f\u30811\u3064\u306e Pod \u304c1\u3064\u4ee5\u4e0a\u306e GPU \u3092\u5360\u6709\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u304c\u3001\u5b9f\u969b\u306e\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3067\u306f1\u3064\u306e GPU \u306b\u8907\u6570\u306e Pod \u3092\u5272\u308a\u5f53\u3066\u305f\u3044\u5834\u5408\u304c\u3042\u308b\u3068\u601d\u3044\u307e\u3059\u3002"),(0,r.yg)("p",null,"NVIDIA \u306e GPU \u3092\u8907\u6570\u306e Pod \u3067\u5171\u6709\u3059\u308b\u65b9\u6cd5\u3068\u3057\u3066 Time-Slicing\u3001Multi-Instance GPU (MIG)\u3001\u304a\u3088\u3073 Multi-Process Service (MPS) \u7b49\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u4eca\u56de\u306f Time-Slicing \u306e\u8a2d\u5b9a\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002Time-Slicing \u306f MIG \u3084 MPS \u3068\u6bd4\u8f03\u3059\u308b\u3068\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u306f\u5927\u304d\u3081\u3067\u3059\u304c\u3001GPU \u3092\u9078\u3070\u3059 NVIDIA device plugin \u3067\u7c21\u5358\u306b\u5229\u7528\u3067\u304d\u308b\u30e1\u30ea\u30c3\u30c8\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.yg)("h2",{id:"\u8a2d\u5b9a\u65b9\u6cd5"},"\u8a2d\u5b9a\u65b9\u6cd5"),(0,r.yg)("p",null,"NVIDIA device plugin \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u72b6\u614b\u306e EKS Cluster \u3092\u7528\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u6b21\u306b\u3001\u4e0b\u8a18\u306e\u3088\u3046\u306a\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092 ",(0,r.yg)("inlineCode",{parentName:"p"},"nvidia-device-plugin-config.yaml")," \u3068\u3057\u3066\u4fdd\u5b58\u3057\u307e\u3059\u3002\u4eca\u56de\u306e\u4f8b\u3067\u306f1\u3064\u306e GPU \u309210\u3064\u306b\u5206\u5272\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"version: v1\nsharing:\n  timeSlicing:\n    resources:\n      - name: nvidia.com/gpu\n        replicas: 10\n")),(0,r.yg)("p",null,"\u305d\u306e\u5f8c\u3001helm \u3067 \u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u6307\u5b9a\u3057\u3066 NVIDIA device plugin \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002 Time-Slicing \u306f ",(0,r.yg)("inlineCode",{parentName:"p"},"v0.12.0")," \u4ee5\u964d\u306e\u6a5f\u80fd\u306a\u306e\u3067\u3001\u305d\u308c\u4ee5\u964d\u306e version \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ helm repo add nvdp https://nvidia.github.io/k8s-device-plugin\n$ helm repo update\n$ helm upgrade -i nvdp nvdp/nvidia-device-plugin \\\n    --namespace nvidia-device-plugin \\\n    --create-namespace \\\n    --version 0.13.0 \\\n    --set-file config.map.config=./nvidia-device-plugin-config.yaml\n")),(0,r.yg)("p",null,"\u3057\u3070\u3089\u304f\u3057\u3066 DaemonSet \u304c\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u308b\u3068 ",(0,r.yg)("inlineCode",{parentName:"p"},"kubectl")," \u304b\u3089\u898b\u3048\u308b GPU \u304c\u5897\u3048\u3066\u3044\u308b\u306f\u305a\u3067\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ kubectl describe node | grep nvidia.com/gpu:\n  nvidia.com/gpu:              10\n  nvidia.com/gpu:              10\n")),(0,r.yg)("p",null,"\u3088\u308a\u8a73\u3057\u3044\u8a2d\u5b9a\u4f8b\u306a\u3069\u306f\u3001NVIDIA device plugin \u306e ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/NVIDIA/k8s-device-plugin#shared-access-to-gpus-with-cuda-time-slicing"},"Shared Access to GPUs with CUDA Time-Slicing")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}u.isMDXComponent=!0}}]);