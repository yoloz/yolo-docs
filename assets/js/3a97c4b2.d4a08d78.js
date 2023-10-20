"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[5335],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>l});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},h=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,h=d(e,["components","mdxType","originalType","parentName"]),c=i(r),f=o,l=c["".concat(s,".").concat(f)]||c[f]||u[f]||a;return r?n.createElement(l,p(p({ref:t},h),{},{components:r})):n.createElement(l,p({ref:t},h))}));function l(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[c]="string"==typeof e?e:o,p[1]=d;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84345:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={},p=void 0,d={unversionedId:"bigdata/hdfs\u4f7f\u7528",id:"bigdata/hdfs\u4f7f\u7528",title:"hdfs\u4f7f\u7528",description:"\u5e38\u7528\u547d\u4ee4",source:"@site/docs/bigdata/hdfs\u4f7f\u7528.md",sourceDirName:"bigdata",slug:"/bigdata/hdfs\u4f7f\u7528",permalink:"/docs/bigdata/hdfs\u4f7f\u7528",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/hdfs\u4f7f\u7528.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"hbase\u5b89\u88c5",permalink:"/docs/bigdata/hbase\u5b89\u88c5"},next:{title:"hiverServer2\u9a8c\u8bc1",permalink:"/docs/bigdata/hiverServer2\u9a8c\u8bc1"}},s={},i=[{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2}],h={toc:i},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u76ee\u5f55\u5982\u4e0b\u65b9\u5f0f\u5747\u53ef\nzhds@apache250:/opt/hadoop-2.7.1$ bin/hadoop fs -mkdir -p /user/hive/warehouse\nzhds@apache250:/opt/hadoop-2.7.1$ bin/hdfs dfs -mkdir -p /input\n\n# \u67e5\u770b\u4e24\u8005\u4e00\u6837\nzhds@apache250:/opt/hadoop-2.7.1$ bin/hadoop fs -ls /\nzhds@apache250:/opt/hadoop-2.7.1$ bin/hdfs dfs -ls /\nFound 3 items\ndrwxr-xr-x   - zhds supergroup          0 2023-04-01 08:26 /input\ndrwx-wx-wx   - zhds supergroup          0 2023-04-01 08:12 /tmp\ndrwxr-xr-x   - zhds supergroup          0 2023-04-01 06:59 /user\n\n# \u4fee\u6539\u6743\u9650\nzhds@apache250:/opt/hadoop-2.7.1$ bin/hadoop fs -chmod -R 777 /\nzhds@apache250:/opt/hadoop-2.7.1$ bin/hdfs dfs -chmod -R 777 /\n\n# \u52a0\u8f7d\u672c\u5730\u6587\u4ef6\nzhds@apache250:/opt/hadoop-2.7.1$ bin/hadoop fs -put /home/zhds/hive-udf-1.0-SNAPSHOT.jar  /input\nzhds@apache250:/opt/hadoop-2.7.1$ bin/hdfs dfs -put /home/zhds/hive-udf-1.0-SNAPSHOT.jar  /input\nzhds@apache250:/opt/hadoop-2.7.1$ bin/hadoop fs -ls /input\nFound 1 items\n-rw-r--r--   1 zhds supergroup       6414 2023-04-01 08:31 /input/hive-udf-1.0-SNAPSHOT.jar\n# \u6216\u8005\nzhds@apache250:/opt/hadoop-2.7.1$ bin/hadoop fs -moveFromLocal /home/zhds/hive-udf-1.0-SNAPSHOT.jar  /input\nzhds@apache250:/opt/hadoop-2.7.1$ bin/hdfs dfs -moveFromLocal /home/zhds/hive-udf-1.0-SNAPSHOT.jar  /input\n\n# \u5220\u9664\u6587\u4ef6\uff0c\u6b64\u79cd\u65b9\u5f0fusr\u76ee\u5f55\u4e5f\u4f1a\u5220\u6389\nzhds@apache250:/opt/hadoop-2.7.1$ bin/hdfs dfs -rm -r /usr\nzhds@apache250:/opt/hadoop-2.7.1$ bin/hadoop fs -rm -r /usr\n\nzhds@apache250:/opt/hadoop-2.7.1$ bin/hdfs dfs -rm -f /input/hive-udf-1.0-SNAPSHOT.jar\n23/04/01 09:24:25 INFO fs.TrashPolicyDefault: Namenode trash configuration: Deletion interval = 0 minutes, Emptier interval = 0 minutes.\nDeleted /input/hive-udf-1.0-SNAPSHOT.jar\nzhds@apache250:/opt/hadoop-2.7.1$\n\n")))}u.isMDXComponent=!0}}]);