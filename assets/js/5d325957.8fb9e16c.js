"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[1542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,S=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?o.createElement(S,a(a({ref:t},s),{},{components:n})):o.createElement(S,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const l={},a=void 0,i={unversionedId:"concept/\u5bf9\u8c61\u5b58\u50a8S3",id:"concept/\u5bf9\u8c61\u5b58\u50a8S3",title:"\u5bf9\u8c61\u5b58\u50a8S3",description:"\u4ec0\u4e48\u662f S3\uff1f",source:"@site/docs/concept/\u5bf9\u8c61\u5b58\u50a8S3.md",sourceDirName:"concept",slug:"/concept/\u5bf9\u8c61\u5b58\u50a8S3",permalink:"/docs/concept/\u5bf9\u8c61\u5b58\u50a8S3",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/concept/\u5bf9\u8c61\u5b58\u50a8S3.md",tags:[],version:"current",lastUpdatedAt:1681381815,formattedLastUpdatedAt:"2023\u5e744\u670813\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"yaml\u683c\u5f0f",permalink:"/docs/concept/yaml\u683c\u5f0f"},next:{title:"\u5e94\u7528\u7a0b\u5e8f\u63a5\u53e3",permalink:"/docs/concept/\u5e94\u7528\u7a0b\u5e8f\u63a5\u53e3"}},p={},c=[{value:"S3 \u534f\u8bae",id:"s3-\u534f\u8bae",level:2},{value:"S3 API",id:"s3-api",level:2},{value:"S3 SDK",id:"s3-sdk",level:2},{value:"S3 \u57fa\u672c\u6982\u5ff5",id:"s3-\u57fa\u672c\u6982\u5ff5",level:2},{value:"Bucket",id:"bucket",level:3},{value:"Object",id:"object",level:3},{value:"Keys",id:"keys",level:3},{value:"Versioning",id:"versioning",level:3},{value:"Regions",id:"regions",level:3},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u5bf9\u8c61\u5b58\u50a8\u4e0e HDFS",id:"\u5bf9\u8c61\u5b58\u50a8\u4e0e-hdfs",level:2},{value:"HDFS \u7684\u6807\u51c6\u4e09\u526f\u672c\u914d\u7f6e\u5bb9\u91cf\u66f4\u5927",id:"hdfs-\u7684\u6807\u51c6\u4e09\u526f\u672c\u914d\u7f6e\u5bb9\u91cf\u66f4\u5927",level:3},{value:"HDFS \u4e3b\u8282\u70b9\u7684\u9ad8\u53ef\u7528\u6027\u9700\u8981\u989d\u5916\u63aa\u65bd",id:"hdfs-\u4e3b\u8282\u70b9\u7684\u9ad8\u53ef\u7528\u6027\u9700\u8981\u989d\u5916\u63aa\u65bd",level:3},{value:"HDFS \u4e0d\u80fd\u8fdb\u884c\u5355\u72ec\u6269\u5c55\u8ba1\u7b97\u6216\u5b58\u50a8",id:"hdfs-\u4e0d\u80fd\u8fdb\u884c\u5355\u72ec\u6269\u5c55\u8ba1\u7b97\u6216\u5b58\u50a8",level:3}],s={toc:c};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4ec0\u4e48\u662f S3\uff1f\n\u82f1\u6587\u5168\u79f0\uff1aAmazon Simple Storage Service(\u4e9a\u9a6c\u900a\u7b80\u5355\u5b58\u50a8\u670d\u52a1)"),(0,r.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u53ef\u4ee5\u770b\u51fa S3 \u662f Amazon \u516c\u53f8\u7684\u4ea7\u54c1\uff0c\u4e9a\u9a6c\u900a\u7f51\u7edc\u670d\u52a1 (AWS) \u5df2\u6210\u4e3a\u516c\u5171\u4e91\u8ba1\u7b97\u4e2d\u7684\u4e3b\u5bfc\u670d\u52a1\uff0cAmazon \u5728 2006 \u5e74\u9996\u6b21\u63d0\u4f9b S3\uff0c\u5982\u4eca\uff0c\u8be5\u7cfb\u7edf\u5b58\u50a8\u4e86\u6570\u5341\u4e07\u4ebf\u4e2a\u5bf9\u8c61\uff0c\u5355\u4e2a\u5bf9\u8c61\u7684\u5927\u5c0f\u8303\u56f4\u53ef\u4ee5\u4ece\u51e0\u5343\u5b57\u8282\u5230 5TB\uff0c\u5e76\u4e14\u5bf9\u8c61\u88ab\u6392\u5217\u6210\u79f0\u4e3a\u201c\u6876\u201d\u7684\u96c6\u5408\u3002")),(0,r.kt)("h2",{id:"s3-\u534f\u8bae"},"S3 \u534f\u8bae"),(0,r.kt)("p",null,"\u591a\u5e74\u6765\uff0cAmazon S3 \u63a5\u53e3\u5df2\u7ecf\u53d1\u5c55\u6210\u4e3a\u4e00\u4e2a\u975e\u5e38\u5f3a\u5927\u7684\u6570\u636e\u7ba1\u7406\u63a5\u53e3\uff0c\u4e0e\u4f20\u7edf\u7684\u6587\u4ef6\u7cfb\u7edf\u63a5\u53e3\u4e0d\u540c\uff0c\u5b83\u4e3a\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u4e86\u4e00\u79cd\u901a\u8fc7\u4e30\u5bcc\u7684 API \u96c6\u63a7\u5236\u6570\u636e\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u65b9\u6cd5\u6162\u6162\u7684\u53d1\u5c55\u6210\u4e86 S3 \u534f\u8bae\uff0c\u5728\u56fd\u5185\u5916\u5f88\u591a\u4e91\u5b58\u50a8\u5382\u5546\u90fd\u662f\u57fa\u4e8e S3 \u534f\u8bae\uff0c\u5e76\u4e14\u90fd\u652f\u6301\u901a\u7528\u7684 S3 \u63a5\u53e3\uff0c\u6bd4\u5982\u56fd\u5185\u8457\u540d\u7684\u963f\u91cc\u4e91\u7684 oss\u3001\u817e\u8baf\u4e91\u7684 cos\u3001\u534e\u4e3a\u4e91\u7684 obs \u7b49\u7b49\u3002"),(0,r.kt)("h2",{id:"s3-api"},"S3 API"),(0,r.kt)("p",null,"S3 API \u662f\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7f16\u7a0b\u63a5\u53e3\uff0c\u5e38\u7528\u7684 API \u5c31\u662f\u8bfb\u3001\u5199\u3001\u589e\u3001\u5220\u3001\u6539\u3001\u67e5\u7b49\u7b49\u3002\u4f7f\u7528\u6807\u51c6\u7684 SOAP \u548c REST \u5b9a\u4e49\u3002"),(0,r.kt)("p",null,"\u8fd8\u6709\u5176\u4ed6\u529f\u80fd\uff0c\u6bd4\u5982\uff1a\u5143\u6570\u636e\u3001\u591a\u79df\u6237\u3001\u5b89\u5168\u548c\u7b56\u7565\u3001\u751f\u547d\u5468\u671f\u7ba1\u7406\u3001\u539f\u5b50\u66f4\u65b0\u3001\u641c\u7d22\u3001\u65e5\u5fd7\u8bb0\u5f55\u3001\u901a\u77e5\u3001\u590d\u5236\u3001\u52a0\u5bc6\u3001\u8ba1\u8d39\u7b49\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u5bf9\u8c61\u7684\u83b7\u53d6\uff0c\u9664\u4e86\u7528 http \u76f4\u63a5\u6309\u7167 C/S \u65b9\u5f0f\u83b7\u53d6\u4e4b\u5916\uff0c\u4e9a\u9a6c\u900a\u652f\u6301 BT \u534f\u8bae\uff0c\u4e5f\u5c31\u662f\u8bf4\u63d0\u4f9b\u79cd\u5b50\u3002")),(0,r.kt)("h2",{id:"s3-sdk"},"S3 SDK"),(0,r.kt)("p",null,"\u5404\u79cd\u8bed\u8a00\u7684 SDK(\u7565)"),(0,r.kt)("h2",{id:"s3-\u57fa\u672c\u6982\u5ff5"},"S3 \u57fa\u672c\u6982\u5ff5"),(0,r.kt)("h3",{id:"bucket"},"Bucket"),(0,r.kt)("p",null,"\u7c7b\u6bd4\u4e8e\u6587\u4ef6\u7cfb\u7edf\u7684\u76ee\u5f55\uff0c\u4e0d\u80fd\u5d4c\u5957\uff0c\u4e5f\u5c31\u662f\u4e0d\u80fd\u6709\u5b50 bucket\uff0c\u5b98\u65b9\u7684\u8bf4\u6cd5\u662f\u8d77\u5230 namespace \u7684\u4f5c\u7528\uff0c\u662f\u8bbf\u95ee\u63a7\u5236\u7684\u57fa\u672c\u5355\u4f4d\u3002\u4e0d\u8fc7\u53ef\u4ee5\u7528 Object \u6765\u6a21\u62df\u591a\u7ea7\u76ee\u5f55\u8fd9\u79cd\u3002"),(0,r.kt)("h3",{id:"object"},"Object"),(0,r.kt)("p",null,"\u7c7b\u6bd4\u6587\u4ef6\u7cfb\u7edf\u7684\u6587\u4ef6,\u5bf9\u8c61\u4e2d\u5e26\u6709\u5bf9\u8c61\u540d\u540d\uff0c\u5bf9\u8c61\u5c5e\u6027\uff0cVersioning \u5c5e\u6027(\u65e9\u671f\u7684 S3 \u8d44\u6599\u4e2d\u6ca1\u6709\u8fd9\u4e00\u6982\u5ff5\uff0c\u5e94\u8be5\u662f\u6f14\u8fdb\u7684\u7ed3\u679c\uff0c\u5176\u9762\u5bf9\u7684\u662f\u6709\u7248\u672c\u63a7\u5236\u7684\u9700\u6c42\u7684\u7528\u6237)\u7b49\u3002"),(0,r.kt)("h3",{id:"keys"},"Keys"),(0,r.kt)("p",null,"\u7c7b\u6bd4\u6587\u4ef6\u540d\uff0ckey \u7684\u6837\u5f0f\u4e5f\u662f URL\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4e9a\u9a6c\u900a\u7684\u670d\u52a1\u90fd\u662f\u4f7f\u7528 Web Service \u6216 REST \u65b9\u5f0f\u8bbf\u95ee\u7684\u3002\u4f8b\u5982:",(0,r.kt)("a",{parentName:"p",href:"http://doc.s3.amazonaws.com/2006-03-01/AmazonS3.wsdl,%E5%85%B6%E4%B8%AD%E2%80%98doc%E2%80%99%E5%B0%B1%E6%98%AF%E7%9B%AE%E5%BD%95%E5%90%8D%EF%BC%88bucket%EF%BC%89%EF%BC%8C%E2%80%9D2006-03-01/AmazonS3.wsdl%E2%80%9D%E6%98%AF%E6%96%87%E4%BB%B6%E5%90%8D%EF%BC%88%E5%AF%B9%E8%B1%A1%E5%90%8D%EF%BC%89%E3%80%82%E5%A6%82%E6%9E%9C%E5%BC%95%E5%85%A5%E4%BA%86version%E5%88%99bucket"},"http://doc.s3.amazonaws.com/2006-03-01/AmazonS3.wsdl,\u5176\u4e2d\u2018doc\u2019\u5c31\u662f\u76ee\u5f55\u540d\uff08bucket\uff09\uff0c\u201d2006-03-01/AmazonS3.wsdl\u201d\u662f\u6587\u4ef6\u540d\uff08\u5bf9\u8c61\u540d\uff09\u3002\u5982\u679c\u5f15\u5165\u4e86version\u5219bucket")," + key + version \u552f\u4e00\u6807\u793a\u4e00\u4e2a\u7248\u672c\u7684\u6587\u4ef6")),(0,r.kt)("h3",{id:"versioning"},"Versioning"),(0,r.kt)("p",null,"\u7c7b\u6bd4 CVS \u4e2d\u7684\u4e00\u4e2a\u7248\u672c\uff0c\u8fd9\u4e2a\u662f\u6587\u4ef6\u7cfb\u7edf\u4e0d\u5177\u5907\u7684\u3002\u540c\u540d\u6587\u4ef6\u7684\u5199\u5165\u5e76\u4e0d\u8986\u76d6\u5df2\u6709\u6587\u4ef6\u800c\u662f\u589e\u52a0\u4e86\u4e00\u4e2a\u6700\u65b0\u7684\u6587\u4ef6\u7248\u672c\u3002\u540c\u6837\u5220\u9664\u4e5f\u4e0d\u662f\u771f\u6b63\u5220\u9664\uff0c\u800c\u662f mark \u4e86\u5220\u9664\u6807\u8bb0\u3002"),(0,r.kt)("h3",{id:"regions"},"Regions"),(0,r.kt)("p",null,"\u6587\u4ef6\u5b58\u50a8\u7684\u5730\u7406\u4f4d\u7f6e\uff0c\u8fd9\u4e2a\u4e5f\u662f\u6587\u4ef6\u7cfb\u7edf\u4e2d\u4e0d\u5b58\u5728\u7684\uff0c\u5c31\u662f\u4e0d\u540c\u7684\u5730\u7406\u533a\u57df\uff0c\u7528\u6237\u53ef\u4ee5\u6307\u5b9a\u5c06\u6587\u4ef6\u5b58\u5728\u67d0\u4e2a\u56fd\u5bb6\u7684\u670d\u52a1\u5668\u3002"),(0,r.kt)("h2",{id:"\u5de5\u4f5c\u539f\u7406"},"\u5de5\u4f5c\u539f\u7406"),(0,r.kt)("p",null,"Amazon Simple Storage Service (Amazon S3) \u662f\u4e00\u79cd\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\uff0c\u63d0\u4f9b\u884c\u4e1a\u9886\u5148\u7684\u53ef\u6269\u5c55\u6027\u3001\u6570\u636e\u53ef\u7528\u6027\u3001\u5b89\u5168\u6027\u548c\u6027\u80fd\u3002\u5404\u79cd\u89c4\u6a21\u548c\u884c\u4e1a\u7684\u5ba2\u6237\u53ef\u4ee5\u4e3a\u51e0\u4e4e\u4efb\u4f55\u4f7f\u7528\u6848\u4f8b\u5b58\u50a8\u548c\u4fdd\u62a4\u4efb\u610f\u6570\u91cf\u7684\u6570\u636e\uff0c\u4f8b\u5982\u6570\u636e\u6e56\u3001\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u548c\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\u3002\u501f\u52a9\u9ad8\u6210\u672c\u6548\u76ca\u7684\u5b58\u50a8\u7c7b\u548c\u6613\u4e8e\u4f7f\u7528\u7684\u7ba1\u7406\u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u4f18\u5316\u6210\u672c\u3001\u7ec4\u7ec7\u6570\u636e\u5e76\u914d\u7f6e\u7cbe\u7ec6\u8c03\u6574\u8fc7\u7684\u8bbf\u95ee\u63a7\u5236\uff0c\u4ece\u800c\u6ee1\u8db3\u7279\u5b9a\u7684\u4e1a\u52a1\u3001\u7ec4\u7ec7\u548c\u5408\u89c4\u6027\u8981\u6c42\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"s3\u5de5\u4f5c\u539f\u7406",src:n(6373).Z,width:"1180",height:"445"})),(0,r.kt)("p",null,"\u6b64\u793a\u610f\u56fe\u663e\u793a\u4e86\u5982\u4f55\u5c06\u6570\u636e\u79fb\u52a8\u5230 Amazon S3\uff0c\u7ba1\u7406\u5b58\u50a8\u5728 Amazon S3 \u4e2d\u7684\u6570\u636e\uff0c\u4ee5\u53ca\u5229\u7528\u5176\u4ed6\u670d\u52a1\u5206\u6790\u6570\u636e\u3002\u4e09\u4e2a\u90e8\u5206\u4ece\u5de6\u81f3\u53f3\u4f9d\u6b21\u663e\u793a\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e00\u90e8\u5206\u662f\u4e00\u4e2a\u6570\u636e\u5e93\u3001\u4e00\u4e2a\u670d\u52a1\u5668\u548c\u4e00\u4e2a\u6587\u6863\u7684\u793a\u610f\u56fe\u3002\u7b2c\u4e00\u90e8\u5206\u7684\u6807\u9898\u4e3a\u201c\u79fb\u52a8\u6570\u636e\u201d\u3002 \u7b2c\u4e00\u90e8\u5206\u7684\u6b63\u6587\u4e3a\uff1a\u201c\u5c06\u6570\u636e\u4ece\u4efb\u4f55\u4f4d\u7f6e\u79fb\u52a8\u5230 Amazon S3 \u2013 \u65e0\u8bba\u662f\u5728\u4e91\u7aef\u3001\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u8fd8\u662f\u5728\u672c\u5730\u201d\u3002 \u9644\u8fd1\u7684\u56fe\u6807\u663e\u793a\u4e86\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\uff1a\u201c\u5206\u6790\u6570\u636e\u201d\u3001\u201c\u65e5\u5fd7\u6587\u4ef6\u201d\u3001\u201c\u5e94\u7528\u7a0b\u5e8f\u6570\u636e\u201d\u3001\u201c\u89c6\u9891\u548c\u56fe\u7247\u201d\u4ee5\u53ca\u201c\u5907\u4efd\u548c\u5f52\u6863\u201d\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e8c\u90e8\u5206\u662f\u4e00\u4e2a\u7a7a\u6876\u7684\u793a\u610f\u56fe\u3002\u7b2c\u4e8c\u90e8\u5206\u7684\u6807\u9898\u4e3a\u201cAmazon S3\u201d\u3002 \u7b2c\u4e8c\u90e8\u5206\u7684\u6b63\u6587\u4e3a\uff1a\u201c\u4e3a\u4e86\u4ece\u4efb\u610f\u4f4d\u7f6e\u5b58\u50a8\u548c\u68c0\u7d22\u4efb\u610f\u6570\u91cf\u7684\u6570\u636e\u800c\u6784\u5efa\u7684\u5bf9\u8c61\u5b58\u50a8\u201d\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e8c\u90e8\u5206\u7684\u201c\u5b58\u50a8\u6570\u636e\u201d\u6807\u9898\u4e0b\u8fd8\u6709\u66f4\u591a\u5185\u5bb9\u3002 \u5177\u4f53\u5185\u5bb9\u4e3a\uff1a\u201c\u521b\u5efa\u5b58\u50a8\u6876\uff0c\u6307\u5b9a\u533a\u57df\u3001\u8bbf\u95ee\u63a7\u5236\u548c\u7ba1\u7406\u9009\u9879\u3002\u4e0a\u4f20\u4efb\u610f\u6570\u91cf\u7684\u6570\u636e\u201d\u3002 \u9644\u8fd1\u7684\u793a\u610f\u56fe\u663e\u793a\u4e86\u4e00\u4e2a\u5305\u542b\u4e00\u4e2a\u65b9\u5757\u3001\u4e00\u4e2a\u5706\u5f62\u548c\u4e00\u4e2a\u4e09\u89d2\u5f62\u7684\u6876\u3002\n\u7b2c\u4e8c\u90e8\u5206\u8fd8\u5305\u542b\u663e\u793a\u4e0d\u540c Amazon S3 \u529f\u80fd\u7684\u56fe\u6807\u3002\u6b64\u5904\u663e\u793a\u7684\u529f\u80fd\u6709\uff1a\u201c\u63a7\u5236\u6570\u636e\u8bbf\u95ee\u6743\u9650\u201d\u3001\u201c\u5229\u7528\u5b58\u50a8\u7c7b\u4f18\u5316\u6210\u672c\u201d\u3001\u201c\u5c06\u6570\u636e\u590d\u5236\u5230\u4efb\u610f\u533a\u57df\u201d\u3001\u201c\u4ece\u672c\u5730\u6216 VPC \u8bbf\u95ee\u201d\u3001\u201c\u4fdd\u62a4\u6570\u636e\u5b89\u5168\u201d\u548c\u201c\u968f\u65f6\u638c\u63e1\u60a8\u7684\u5b58\u50a8\u201d\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e09\u90e8\u5206\u7684\u6807\u9898\u4e3a\u201c\u5206\u6790\u6570\u636e\u201d\u3002 \u7b2c\u4e09\u90e8\u5206\u7684\u6b63\u6587\u4e3a\uff1a\u201c\u4f7f\u7528 AWS \u548c\u7b2c\u4e09\u65b9\u670d\u52a1\u5206\u6790\u6570\u636e\uff0c\u4ee5\u83b7\u53d6\u89c1\u89e3\u201d\u3002 \u9644\u8fd1\u7684\u56fe\u6807\u663e\u793a\u4e86\u4e0d\u540c\u7684\u6570\u636e\u5206\u6790\u65b9\u5f0f\uff1a\u201c\u4eba\u5de5\u667a\u80fd\uff08AI\uff09\u201d\u3001\u201c\u9ad8\u7ea7\u5206\u6790\u201d\u548c\u201c\u673a\u5668\u5b66\u4e60\uff08ML\uff09\u201d\u3002"),(0,r.kt)("h2",{id:"\u5bf9\u8c61\u5b58\u50a8\u4e0e-hdfs"},"\u5bf9\u8c61\u5b58\u50a8\u4e0e HDFS"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/nucdy/p/6274022.html"},"\u4e09\u4e2a\u7406\u7531\u544a\u8bc9\u4f60\u5bf9\u8c61\u5b58\u50a8\u66ff\u6362 HDFS \u8fd8\u4e0d\u9519")),(0,r.kt)("h3",{id:"hdfs-\u7684\u6807\u51c6\u4e09\u526f\u672c\u914d\u7f6e\u5bb9\u91cf\u66f4\u5927"},"HDFS \u7684\u6807\u51c6\u4e09\u526f\u672c\u914d\u7f6e\u5bb9\u91cf\u66f4\u5927"),(0,r.kt)("p",null,"\u5bf9\u8c61\u5b58\u50a8\u53ef\u63d0\u4f9b\u66f4\u597d\u7684\u6570\u636e\u4fdd\u62a4 \u867d\u7136 HDFS \u80fd\u591f\u5229\u7528\u5185\u90e8\u7684\u670d\u52a1\u5668\u7ea7\u5b58\u50a8\uff0c\u5b83\u5b9e\u9645\u4e0a\u662f\u6309\u7167\u5176\u6807\u51c6\u7684\u6570\u636e\u4fdd\u62a4\u7b56\u7565\u5c06\u6240\u6709\u6570\u636e\u505a\u4e86\u4e09\u4e2a\u526f\u672c\u3002\u56e0\u6b64\uff0c\u5c3d\u7ba1\u53ef\u4ee5\u4f7f\u7528\u8f83\u4fbf\u5b9c\u7684\u670d\u52a1\u5668\u5185\u90e8\u7684\u786c\u76d8\u9a71\u52a8\u5668\uff0c\u5b83\u53ef\u80fd\u5e76\u4e0d\u50cf\u6700\u521d\u5e0c\u671b\u7684\u90a3\u6837\u7ecf\u6d4e\uff0c\u56e0\u4e3a\u5bb9\u91cf\u9700\u6c42\u8981\u4e58\u4ee5 3\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u57fa\u4e8e\u5bf9\u8c61\u7684\u5b58\u50a8\u7cfb\u7edf\uff0c\u63d0\u4f9b\u4e9a\u9a6c\u900a\u7b80\u5355\u5b58\u50a8\u670d\u52a1\uff08S3\uff09\u534f\u8bae\u8bbf\u95ee\uff0c\u8fd9\u662f Hadoop \u9664\u4e86 HDFS \u4e5f\u540c\u6837\u652f\u6301\u7684\u3002\u8fd9\u4e9b\u7cfb\u7edf\u53ef\u4ee5\u662f\u7eaf\u8f6f\u4ef6\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528\u5546\u7528\u670d\u52a1\u5668\u548c\u670d\u52a1\u5668\u7ea7\u5b58\u50a8\u3002\u4f46\u4e0d\u540c\u4e8e\u9ed8\u8ba4\u7684 HDFS\uff0c\u8bb8\u591a\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf\u90fd\u63d0\u4f9b\u7ea0\u5220\u7f16\u7801\u3002\u8fd9\u79cd\u6570\u636e\u4fdd\u62a4\u673a\u5236\u7c7b\u4f3c\u4e8e RAID \u4f46\u7c92\u5ea6\u66f4\u7ec6\uff0c\u53ef\u4ee5\u5728\u5bf9\u8c61\u6216\u5b50\u5bf9\u8c61\u7684\u5c42\u9762\u64cd\u4f5c\uff0c\u628a\u6570\u636e\u548c\u5947\u5076\u6821\u9a8c\u4f4d\u5206\u5e03\u5230\u5b58\u50a8\u96c6\u7fa4\u7684\u5404\u4e2a\u8282\u70b9\u4e0a\u3002\u5176\u7ed3\u679c\u662f\uff0c\u53ef\u4ee5\u8fbe\u5230\u76f8\u4f3c\u6216\u66f4\u9ad8\u6c34\u5e73\u7684\u6570\u636e\u5197\u4f59\u6027\uff0c\u800c\u53ea\u9700\u5927\u7ea6 25\uff05\u81f3 30\uff05\u7684\u989d\u5916\u5f00\u9500\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0c HDFS \u7684\u6807\u51c6\u4e09\u526f\u672c\u914d\u7f6e\u4e0b\u7684\u989d\u5916\u5bb9\u91cf\u5f00\u9500\u4e3a 200\uff05\u3002"),(0,r.kt)("h3",{id:"hdfs-\u4e3b\u8282\u70b9\u7684\u9ad8\u53ef\u7528\u6027\u9700\u8981\u989d\u5916\u63aa\u65bd"},"HDFS \u4e3b\u8282\u70b9\u7684\u9ad8\u53ef\u7528\u6027\u9700\u8981\u989d\u5916\u63aa\u65bd"),(0,r.kt)("p",null,"HDFS \u5177\u6709\u4e00\u4e2a\u4e3b\u8282\u70b9\u548c\u4e00\u7cfb\u5217\u4ece\u8282\u70b9\u3002\u4ece\u8282\u70b9\u5904\u7406\u6570\u636e\u5e76\u5c06\u7ed3\u679c\u53d1\u9001\u7ed9\u4e3b\u8282\u70b9\u3002\u4e3b\u8282\u70b9\u8fd8\u9700\u8981\u7ef4\u62a4\u6570\u636e\u590d\u5236\u7b56\u7565\u4ee5\u53ca\u57fa\u672c\u7684\u96c6\u7fa4\u7ba1\u7406\u3002\u5982\u679c\u4e3b\u8282\u70b9\u53d1\u751f\u6545\u969c\uff0c\u96c6\u7fa4\u7684\u5176\u4f59\u8282\u70b9\u5c06\u4e0d\u80fd\u88ab\u8bbf\u95ee\u3002 HDFS \u5bf9\u4e3b\u8282\u70b9\u53ea\u63d0\u4f9b\u4e86\u6709\u9650\u7684\u4fdd\u62a4\uff0c\u6240\u4ee5\u4f01\u4e1a\u9700\u8981\u91c7\u53d6\u7279\u6b8a\u63aa\u65bd\u6765\u5b9e\u73b0\u4e3b\u8282\u70b9\u7684\u9ad8\u53ef\u7528\u6027\u3002"),(0,r.kt)("p",null,"\u5982\u4e0a\u6240\u8ff0\uff0c\u5728\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf\u4e2d\uff0c\u4e3b\u8282\u70b9\u4e0e\u4ece\u8282\u70b9\u90fd\u80fd\u53d7\u5230\u76f8\u540c\u7684\u7ea0\u5220\u7f16\u7801\u7684\u6570\u636e\u4fdd\u62a4\u3002\u6b64\u5916\uff0c\u7531\u4e3b\u8282\u70b9\u7ef4\u62a4\u7684\u7ba1\u7406 Hadoop \u96c6\u7fa4\u6240\u9700\u7684\u6240\u6709\u5143\u6570\u636e(metadata)\u90fd\u53ef\u4ee5\u5b58\u50a8\u5728\u96c6\u4e2d\u5316\u7684\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf\u4e2d\u3002\u8fd9\u6837\u5f53\u4e3b\u8282\u70b9\u53d1\u751f\u6545\u969c\u65f6\uff0c\u4ece\u8282\u70b9\u6216\u5907\u7528\u8282\u70b9\u53ef\u4ee5\u8fc5\u901f\u53d8\u6210\u4e3a\u4e3b\u8282\u70b9\u3002"),(0,r.kt)("h3",{id:"hdfs-\u4e0d\u80fd\u8fdb\u884c\u5355\u72ec\u6269\u5c55\u8ba1\u7b97\u6216\u5b58\u50a8"},"HDFS \u4e0d\u80fd\u8fdb\u884c\u5355\u72ec\u6269\u5c55\u8ba1\u7b97\u6216\u5b58\u50a8"),(0,r.kt)("p",null,"\u50cf\u4efb\u4f55\u5176\u4ed6\u67b6\u6784\u4e00\u6837\uff0cHadoop \u5bf9\u8ba1\u7b97\u548c\u5b58\u50a8\u5bb9\u91cf\u4e5f\u4f1a\u6709\u4e0d\u540c\u7a0b\u5ea6\u7684\u9700\u6c42\u3002\u95ee\u9898\u662f\uff0cHDFS \u8981\u6c42\u8ba1\u7b97\u80fd\u529b\u548c\u5b58\u50a8\u5bb9\u91cf\u9700\u8981\u6309\u6bd4\u4f8b\u8fdb\u884c\u6269\u5c55\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u4e0d\u80fd\u5355\u72ec\u5bf9\u67d0\u4e00\u79cd\u8d44\u6e90\u8fdb\u884c\u6269\u5145\u3002"),(0,r.kt)("p",null,"\u8981\u8bf4\u660e\u8fd9\u4e00\u70b9\u6700\u5e38\u89c1\u7684\u65b9\u5f0f\u662f\u5f53\u4e00\u4e2a Hadoop \u67b6\u6784\u7684\u5b58\u50a8\u5bb9\u91cf\u7528\u5c3d\u65f6\uff0c\u56e0\u4e3a\u589e\u52a0\u66f4\u591a\u5bb9\u91cf\u5c31\u610f\u5473\u7740\u52a0\u5165\u53e6\u4e00\u4e2a\u88c5\u6ee1\u786c\u76d8\u7684\u8282\u70b9\uff0c\u8fd9\u4e5f\u589e\u52a0\u4e86\u66f4\u591a\u7684\u8ba1\u7b97\u80fd\u529b\u3002\u53cd\u4e4b\u4ea6\u5982\u6b64\uff0c\u4f5c\u4e3a Hadoop \u57fa\u7840\u8bbe\u65bd\uff0c\u5f80\u5f80\u9700\u8981\u66f4\u591a\u7684\u5904\u7406\u80fd\u529b\uff0c\u4f46\u5b58\u50a8\u7a7a\u95f4\u5374\u5f88\u5145\u88d5\u3002\u5927\u591a\u6570\u65f6\u5019\uff0c\u5f53\u8d2d\u7f6e\u4e86\u4e00\u4e2a\u65b0\u7684\u670d\u52a1\u5668\u4ee5\u589e\u52a0\u8ba1\u7b97\u80fd\u529b\u65f6\uff0c\u5b83\u4e5f\u5e26\u6765\u4e86\u65b0\u7684\u5b58\u50a8\u7a7a\u95f4\u3002\u5176\u7ed3\u679c\u662f\uff0cHadoop \u67b6\u6784\u603b\u662f\u5728\u67d0\u79cd\u8d44\u6e90\u4e0a\u6d6a\u8d39\u91d1\u94b1\uff0c\u800c\u5bf9\u53e6\u4e00\u79cd\u8d44\u6e90\u5374\u603b\u662f\u7f3a\u4e4f\u3002"),(0,r.kt)("p",null,"\u5bf9\u8c61\u5b58\u50a8\u5141\u8bb8\u5bb9\u91cf\u548c\u8ba1\u7b97\u80fd\u529b\u5404\u81ea\u72ec\u7acb\u5730\u8fdb\u884c\u6269\u5c55\u3002\u8ba1\u7b97\u8282\u70b9\u53ef\u4ee5\u662f 1U \u6216 2U \u7684\u673a\u7bb1\uff0c\u901a\u8fc7\u56fa\u6001\u5b58\u50a8\u5f15\u5bfc\u3002\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf\u53ef\u4ee5\u88c5\u6ee1\u9ad8\u5bb9\u91cf\u9a71\u52a8\u5668\uff0c\u4ece\u800c\u4fdd\u6301\u6bcf GB \u6210\u672c\u6700\u4f4e\u3002\u66f4\u91cd\u8981\u7684\u662f\uff0c\u968f\u7740\u5e94\u7528\u73af\u5883\u7684\u53d8\u5316\uff0c\u6bcf\u4e00\u5c42\u90fd\u53ef\u4ee5\u72ec\u7acb\u6269\u5c55\u3002"),(0,r.kt)("p",null,"HDFS \u4e4b\u4e8e Hadoop \u7684\u4e3b\u8981\u4f18\u70b9\u662f\u4f4e\u6210\u672c\u548c\u9ad8\u6027\u80fd\uff0c\u8fd9\u5f97\u76ca\u4e8e\u6570\u636e\u5b58\u653e\u4e8e\u672c\u5730\u3002\u800c\u5229\u7528\u5546\u4e1a\u5b58\u50a8\u786c\u4ef6\u7684\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf\u540c\u6837\u53ef\u4ee5\u63d0\u4f9b\u7c7b\u4f3c\u7684\u4f4e\u6210\u672c\uff0c\u5c24\u5176\u662f\u5f53\u91c7\u7528\u7ea0\u5220\u7f16\u7801\u6765\u63d0\u9ad8\u6570\u636e\u4fdd\u62a4\u6548\u7387\u65f6\u66f4\u662f\u5982\u6b64\u300210 GbE \u7684\u9ad8\u901f\u7f51\u7edc\u73b0\u5728\u5df2\u7ecf\u5f88\u5b9e\u60e0\uff0c\u8fd9\u4e9b\u90fd\u4f7f HDFS \u5c06\u6570\u636e\u548c\u8ba1\u7b97\u653e\u5728\u4e00\u8d77\u6240\u5e26\u6765\u7684\u6027\u80fd\u4f18\u52bf\u4e0d\u590d\u5b58\u5728\u3002\u5bf9\u8c61\u5b58\u50a8\u63d0\u4f9b\u4e86\u4e00\u79cd\u66f4\u5177\u6210\u672c\u6548\u76ca\uff0c\u66f4\u53ef\u9760\uff0c\u800c\u4e14\u6027\u80fd\u81f3\u5c11\u8ddf HDFS \u76f8\u5f53\u7684\u57fa\u7840\u67b6\u6784\uff0c\u5b83\u7406\u6240\u5f53\u7136\u5e94\u8be5\u6210\u4e3a\u4e00\u79cd\u53ef\u884c\u7684 HDFS \u66ff\u4ee3\u89e3\u51b3\u65b9\u6848\u3002"))}d.isMDXComponent=!0},6373:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/s3-eb3ba3c454e8fb5d0a60c511dea4fb50.png"}}]);