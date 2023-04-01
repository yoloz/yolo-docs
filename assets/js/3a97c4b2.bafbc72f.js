"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[5335],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,h=u["".concat(s,".").concat(f)]||u[f]||l[f]||a;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4345:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,c={unversionedId:"bigdata/hdfs\u4f7f\u7528",id:"bigdata/hdfs\u4f7f\u7528",title:"hdfs\u4f7f\u7528",description:"\u5e38\u7528\u547d\u4ee4",source:"@site/docs/bigdata/hdfs\u4f7f\u7528.md",sourceDirName:"bigdata",slug:"/bigdata/hdfs\u4f7f\u7528",permalink:"/docs/bigdata/hdfs\u4f7f\u7528",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/hdfs\u4f7f\u7528.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"hbase\u5b89\u88c5",permalink:"/docs/bigdata/hbase\u5b89\u88c5"},next:{title:"hiverServer2\u9a8c\u8bc1",permalink:"/docs/bigdata/hiverServer2\u9a8c\u8bc1"}},s={},p=[{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2}],d={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nzhds@apache250:/opt/hadoop-2.7.1$ bin/hadoop fs -mkdir -p /user/hive/warehouse\n\nzhds@apache250:/opt/hadoop-2.7.1$ bin/hdfs dfs -ls /\nFound 2 items\ndrwx-wx-wx   - zhds supergroup          0 2023-03-21 10:10 /tmp\ndrwxr-xr-x   - zhds supergroup          0 2023-04-01 06:59 /user\n\n# \u7528hadoop\u4fee\u6539\u6743\u9650\nzhds@apache250:/opt/hadoop-2.7.1$ bin/hadoop fs -chmod -R 777 /\n\n")))}l.isMDXComponent=!0}}]);