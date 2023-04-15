"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[4278],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},A=Object.keys(e);for(r=0;r<A.length;r++)a=A[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(r=0;r<A.length;r++)a=A[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),o=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,A=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=o(a),p=n,u=h["".concat(i,".").concat(p)]||h[p]||d[p]||A;return a?r.createElement(u,s(s({ref:t},c),{},{components:a})):r.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var A=a.length,s=new Array(A);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[h]="string"==typeof e?e:n,s[1]=l;for(var o=2;o<A;o++)s[o]=a[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4402:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>A,metadata:()=>l,toc:()=>o});var r=a(7462),n=(a(7294),a(3905));const A={},s=void 0,l={unversionedId:"bigdata/hbase\u5b66\u4e60",id:"bigdata/hbase\u5b66\u4e60",title:"hbase\u5b66\u4e60",description:"\u5185\u5bb9\u548c\u7ed3\u6784\u4e3b\u8981\u6765\u81eaCarol McDonald \u7684\u6587\u7ae0\uff0c\u5bf9\u7167\u5b98\u65b9\u6587\u6863\u68b3\u7406\u5b66\u4e60\u4e86\u4e00\u904d\uff0c\u8bb0\u5f55\u5907\u5fd8\u3002",source:"@site/docs/bigdata/hbase\u5b66\u4e60.md",sourceDirName:"bigdata",slug:"/bigdata/hbase\u5b66\u4e60",permalink:"/docs/bigdata/hbase\u5b66\u4e60",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/hbase\u5b66\u4e60.md",tags:[],version:"current",lastUpdatedAt:1681551353,formattedLastUpdatedAt:"2023\u5e744\u670815\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"hadoop\u4f7f\u7528",permalink:"/docs/bigdata/hadoop\u4f7f\u7528"},next:{title:"hbase\u5b89\u88c5",permalink:"/docs/bigdata/hbase\u5b89\u88c5"}},i={},o=[{value:"Regions",id:"regions",level:2},{value:"Region",id:"region",level:3},{value:"Region Split",id:"region-split",level:3},{value:"Read Load Balancing",id:"read-load-balancing",level:3},{value:"HBase Hmaster",id:"hbase-hmaster",level:2},{value:"ZooKeeper: The Coordinator",id:"zookeeper-the-coordinator",level:3},{value:"How the Components Work Together",id:"how-the-components-work-together",level:3},{value:"HBase First Read or Write",id:"hbase-first-read-or-write",level:3},{value:"HBase Meta Table",id:"hbase-meta-table",level:3},{value:"Region Server Components",id:"region-server-components",level:3},{value:"HBase Write",id:"hbase-write",level:3},{value:"HBase MemStore",id:"hbase-memstore",level:3},{value:"HBase Region Flush",id:"hbase-region-flush",level:3},{value:"HBase HFile",id:"hbase-hfile",level:3},{value:"HBase HFile Structure",id:"hbase-hfile-structure",level:3},{value:"HBase Read Merge",id:"hbase-read-merge",level:3},{value:"HBase Compaction",id:"hbase-compaction",level:3},{value:"minor compact",id:"minor-compact",level:3},{value:"major compact",id:"major-compact",level:3},{value:"HDFS Data Replication",id:"hdfs-data-replication",level:3},{value:"HBase Crash Recovery",id:"hbase-crash-recovery",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],c={toc:o},h="wrapper";function d(e){let{components:t,...A}=e;return(0,n.kt)(h,(0,r.Z)({},c,A,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\u5185\u5bb9\u548c\u7ed3\u6784\u4e3b\u8981\u6765\u81ea",(0,n.kt)("a",{parentName:"em",href:"https://mapr.com/blog/in-depth-look-hbase-architecture/"},"Carol McDonald \u7684\u6587\u7ae0"),"\uff0c\u5bf9\u7167\u5b98\u65b9\u6587\u6863\u68b3\u7406\u5b66\u4e60\u4e86\u4e00\u904d\uff0c\u8bb0\u5f55\u5907\u5fd8\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch1.jpg",src:a(8840).Z,width:"603",height:"389"})),(0,n.kt)("p",null,"\u5b83\u4eec\u7684\u4e3b\u8981\u529f\u80fd\u6709\uff1a"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hmaster:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7ba1\u7406 HregionServer\uff0c\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u548c\u5206\u914d Hregion, \u5982 Hregion split \u65f6\u5206\u914d\u65b0\u7684 Hregion, HregionServer \u9000\u51fa\u65f6\u8fc1\u79fb\u5176\u4e0b\u7684 Hregion \u5230\u5176\u4ed6 HregionServer \u4e0a\uff1b"),(0,n.kt)("li",{parentName:"ul"},"DDL \u64cd\u4f5c(table, columnfamily \u7684\u589e\u5220\u6539\u7b49)\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u7ba1\u7406 namespace \u548c table \u7684\u5143\u6570\u636e(\u5b58\u50a8\u5728 hdfs \u4e0a)\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u6743\u9650\u63a7\u5236(ACL)\uff1b")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"HregionServer:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b58\u653e\u548c\u7ba1\u7406\u672c\u5730\u7684 Hregion;"),(0,n.kt)("li",{parentName:"ul"},"\u8bfb\u5199 hdfs\uff0c\u7ba1\u7406 table \u4e2d\u7684\u6570\u636e\uff1b"),(0,n.kt)("li",{parentName:"ul"},"client \u901a\u8fc7 HregionServer \u8bfb\u5199\u6570\u636e\uff1b")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"zookeeper:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b58\u653e Hbase \u96c6\u7fa4\u7684\u5143\u6570\u636e\u53ca\u96c6\u7fa4\u7684\u72b6\u6001\u4fe1\u606f\uff1b"),(0,n.kt)("li",{parentName:"ul"},"Hmaster \u4e3b\u4ece\u8282\u70b9\u7684 active;")),(0,n.kt)("p",null,"HRegion \u6240\u5904\u7406\u7684\u6570\u636e\u5c3d\u91cf\u548c\u6570\u636e\u6240\u5728\u7684 DataNode \u5728\u4e00\u8d77\uff0c\u5b9e\u73b0\u6570\u636e\u7684\u672c\u5730\u5316\u3002\u6570\u636e\u672c\u5730\u5316\u5e76\u4e0d\u662f\u603b\u80fd\u5b9e\u73b0\uff0c\u5982\u5728 HRegion \u79fb\u52a8(Split)\u65f6\uff0c\u9700\u8981\u7b49\u4e0b\u4e00\u6b21 Compact \u624d\u80fd\u7ee7\u7eed\u56de\u5230\u672c\u5730\u5316\u3002Hmaster \u548c namenode \u90fd\u652f\u6301\u591a\u4e2a\u70ed\u5907\u4efd\uff0c\u4f7f\u7528 zookeeper \u6765\u505a\u534f\u8c03\u3002Hregionserver \u548c datanode \u4e00\u822c\u4f1a\u653e\u5728\u76f8\u540c\u7684 server \u4e0a\u5b9e\u73b0\u6570\u636e\u7684\u672c\u5730\u5316\u3002\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch2.png",src:a(2202).Z,width:"632",height:"343"})),(0,n.kt)("h2",{id:"regions"},"Regions"),(0,n.kt)("p",null,"Hbase \u4f7f\u7528 rowkey \u5c06\u8868\u6c34\u5e73\u5206\u5272\u6210\u591a\u4e2a hregion, region \u5206\u914d\u7ed9\u76f8\u5e94\u7684 regionserver \u7ba1\u7406. \u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch3.png",src:a(7092).Z,width:"724",height:"337"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch4.png",src:a(567).Z,width:"958",height:"187"})),(0,n.kt)("h3",{id:"region"},"Region"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A table can be divided horizontally into one or more regions. A region contains a contiguous, sorted range of rows between a start key and an end key;"),(0,n.kt)("li",{parentName:"ul"},"Each region is 1GB in size (default)\uff1b"),(0,n.kt)("li",{parentName:"ul"},"A region of a table is served to the client by a RegionServer\uff1b"),(0,n.kt)("li",{parentName:"ul"},"A region server can serve about 1, 000 regions (which may belong to the same table or different tables)\uff1b")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch5.png",src:a(4423).Z,width:"494",height:"258"})),(0,n.kt)("h3",{id:"region-split"},"Region Split"),(0,n.kt)("p",null,"\u6700\u521d\u4e00\u4e2a\u8868\u4e00\u4e2a region\uff0c\u968f\u7740\u6570\u636e\u589e\u591a\uff0cregion \u5206\u88c2\u6210\u4e24\u4e2a\uff0c\u4e24\u4e2a\u65b0\u7684 region \u4f1a\u5728\u540c\u4e00\u4e2a HRegionServer \u4e2d\u521b\u5efa\uff0c\u5b83\u4eec\u5404\u81ea\u5305\u542b\u7236 region \u4e00\u534a\u7684\u6570\u636e\uff0csplit \u5b8c\u6210\u540e\uff0c\u7236 region \u4e0b\u7ebf\uff0c\u800c\u65b0\u7684\u4e24\u4e2a\u5b50 region \u5411 HMaster \u6ce8\u518c\u4e0a\u7ebf\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch6.png",src:a(1319).Z,width:"583",height:"314"})),(0,n.kt)("h3",{id:"read-load-balancing"},"Read Load Balancing"),(0,n.kt)("p",null,"\u5206\u5272\u8d77\u521d\u53d1\u751f\u5728\u4e00\u4e2a regionserver \u4e0a\uff0c\u7531\u4e8e\u8d1f\u8f7d\u5747\u8861\uff0cmaster \u4f1a\u5c06\u65b0\u751f\u6210\u7684 region \u5206\u914d\u5230\u5176\u4ed6\u7684 regionserver \u4e0a\uff0c\u8fd9\u6837\u4f1a\u6709\u53ef\u80fd\u4e00\u4e9b regionserver \u5904\u7406\u7684\u6570\u636e\u6682\u65f6\u5728\u8fdc\u7a0b\u673a\u5668\u4e0a\uff0c\u5728 major compact \u7684\u65f6\u5019\u4f1a\u5c06\u8fdc\u7a0b\u6570\u636e\u6587\u4ef6\u79fb\u52a8\u5230\u672c\u5730\u6765\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch7.png",src:a(2569).Z,width:"492",height:"259"})),(0,n.kt)("h2",{id:"hbase-hmaster"},"HBase Hmaster"),(0,n.kt)("p",null,"HMaster \u6ca1\u6709\u5355\u70b9\u6545\u969c\u95ee\u9898\uff0c\u53ef\u4ee5\u542f\u52a8\u591a\u4e2a HMaster\uff0c\u901a\u8fc7 ZooKeeper \u7684 Master Election \u673a\u5236\u4fdd\u8bc1\u540c\u65f6\u53ea\u6709\u4e00\u4e2a HMaster \u51fa\u4e8e Active \u72b6\u6001\uff0c\u5176\u4ed6\u7684 HMaster \u5219\u5904\u4e8e\u70ed\u5907\u4efd\u72b6\u6001\u3002\u4e3b\u8981\u804c\u8d23\u6709\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u534f\u8c03 HRegionServer"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u542f\u52a8\u65f6 region \u7684\u5206\u914d\uff0c\u4ee5\u53ca\u8d1f\u8f7d\u5747\u8861\u548c\u4fee\u590d\u65f6 region \u7684\u91cd\u65b0\u5206\u914d;"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u76d1\u63a7\u96c6\u7fa4\u4e2d\u6240\u6709 regionServer \u7684\u72b6\u6001(\u901a\u8fc7 Heartbeat \u548c\u76d1\u542c ZooKeeper \u4e2d\u7684\u72b6\u6001)\u3002"))),(0,n.kt)("li",{parentName:"ul"},"Admin \u804c\u80fd\uff0c\u521b\u5efa\u3001\u5220\u9664\u3001\u4fee\u6539 Table \u7684\u5b9a\u4e49\u3002\u5982\u4e0b\uff1a")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch8.png",src:a(5086).Z,width:"579",height:"302"})),(0,n.kt)("h3",{id:"zookeeper-the-coordinator"},"ZooKeeper: The Coordinator"),(0,n.kt)("p",null,"Hbase \u4f7f\u7528 zookeeper \u6765\u534f\u8c03\u96c6\u7fa4\u7684\u7ba1\u7406\u3002\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch9.png",src:a(6615).Z,width:"647",height:"279"})),(0,n.kt)("h3",{id:"how-the-components-work-together"},"How the Components Work Together"),(0,n.kt)("p",null,"zooKeeper \u534f\u8c03\u96c6\u7fa4\u6240\u6709\u8282\u70b9\u7684\u5171\u4eab\u4fe1\u606f\uff0c\u5728 master \u548c regionserver \u8fde\u63a5\u5230 zooKeeper \u540e\u521b\u5efa Ephemeral \u8282\u70b9\uff0c\u4f7f\u7528\u5fc3\u8df3\u673a\u5236\u7ef4\u6301\u8fd9\u4e2a\u8282\u70b9\u7684\u5b58\u6d3b\u72b6\u6001\uff0c\u5982\u679c\u67d0\u4e2a Ephemeral \u8282\u70b9\u5b9e\u6548\uff0c\u5219 HMaster \u4f1a\u6536\u5230\u901a\u77e5\uff0c\u5e76\u505a\u76f8\u5e94\u7684\u5904\u7406\u3002\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch10.png",src:a(9914).Z,width:"597",height:"279"})),(0,n.kt)("h3",{id:"hbase-first-read-or-write"},"HBase First Read or Write"),(0,n.kt)("p",null,"Hbase \u4e2d\u6709\u4e00\u4e2a\u7279\u6b8a\u7684\u76ee\u5f55\u8868 META \u8868\uff0c\u5b58\u50a8\u4e86\u96c6\u7fa4\u7684\u6240\u6709 regions \u4f4d\u7f6e\uff0czookeeper \u5b58\u50a8\u4e86\u8fd9\u4e2a meta \u8868\u7684\u4f4d\u7f6e\u3002\u5927\u6982\u6d41\u7a0b\u5982\u4e0b\uff1a",(0,n.kt)("br",{parentName:"p"}),"\n","1, \u4ece zooKeeper \u4e2d\u83b7\u53d6\u5b58\u50a8 meta \u8868\u7684 regionserver \u7684\u4f4d\u7f6e\uff1b",(0,n.kt)("br",{parentName:"p"}),"\n","2, \u4ece meta \u4e2d\u67e5\u8be2\u7528\u6237 table \u5bf9\u5e94\u8bf7\u6c42\u7684 rowkey \u6240\u5728\u7684 regionserver \u4f4d\u7f6e\uff1b",(0,n.kt)("br",{parentName:"p"}),"\n","3, \u4ece\u67e5\u8be2\u5230 regionServer \u4e2d\u83b7\u53d6\u6570\u636e\uff1b"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch11.png",src:a(8043).Z,width:"578",height:"335"})),(0,n.kt)("h3",{id:"hbase-meta-table"},"HBase Meta Table"),(0,n.kt)("p",null,"hbase:meta \u8868\u5b58\u50a8\u4e86\u6240\u6709 region \u7684\u4f4d\u7f6e\u4fe1\u606f(The -ROOT- table was removed in HBase 0.96.0)\uff0c\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch12.png",src:a(7795).Z,width:"521",height:"263"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch13.png",src:a(841).Z,width:"954",height:"352"})),(0,n.kt)("h3",{id:"region-server-components"},"Region Server Components"),(0,n.kt)("p",null,"regionserver \u4e00\u822c\u548c hdfs \u7684 datanode \u5728\u540c\u4e00\u53f0\u673a\u5668\u4e0a\u8fd0\u884c\uff0c\u5b9e\u73b0\u6570\u636e\u7684\u672c\u5730\u6027\uff0c\u5305\u542b\u591a\u4e2a region\uff0c\u7531 WAL\u3001BlockCache\u3001MemStore\u3001HFile \u7ec4\u6210\u3002\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch14.png",src:a(5576).Z,width:"565",height:"287"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"WAL: Write Ahead Log is a file on the distributed file system. The WAL is used to store new data that hasn't yet been persisted to permanent storage; it is used for recovery in the case of failure."),(0,n.kt)("li",{parentName:"ul"},"BlockCache: is the read cache. It stores frequently read data in memory. Least Recently Used data is evicted when full."),(0,n.kt)("li",{parentName:"ul"},"MemStore: is the write cache. It stores new data which has not yet been written to disk. It is sorted before writing to disk. There is one MemStore per column family per region."),(0,n.kt)("li",{parentName:"ul"},"Hfiles store the rows as sorted KeyValues on disk.")),(0,n.kt)("h3",{id:"hbase-write"},"HBase Write"),(0,n.kt)("p",null,"\u5f53\u5ba2\u6237\u7aef\u53d1\u8d77\u4e00\u4e2a Put \u8bf7\u6c42\u65f6\uff0c\u9996\u5148\u5b83\u4ece hbase:meta \u8868\u4e2d\u67e5\u51fa\u8be5 Put \u6570\u636e\u6700\u7ec8\u9700\u8981\u53bb\u7684 regionserver\u3002\u7136\u540e\u5ba2\u6237\u7aef\u5c06 Put \u8bf7\u6c42\u53d1\u9001\u7ed9\u76f8\u5e94\u7684 regionserver\uff0c\u5728 regionserver \u4e2d\u5b83\u9996\u5148\u4f1a\u5c06\u8be5 Put \u64cd\u4f5c\u5199\u5165 WAL \u65e5\u5fd7\u6587\u4ef6\u4e2d(Flush \u5230\u78c1\u76d8\u4e2d)\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch15.png",src:a(1429).Z,width:"494",height:"234"})),(0,n.kt)("p",null,"\u5199\u5b8c WAL \u65e5\u5fd7\u6587\u4ef6\u540e\uff0cregionserver \u6839\u636e Put \u4e2d\u7684 tablename \u548c rowkey \u627e\u5230\u5bf9\u5e94\u7684 region\uff0c\u5e76\u6839\u636e column family \u627e\u5230\u5bf9\u5e94\u7684 store\uff0c\u5e76\u5c06 Put \u5199\u5165\u5230\u8be5 store \u7684 memstore \u4e2d\u3002\u6b64\u65f6\u5199\u6210\u529f\uff0c\u5e76\u8fd4\u56de\u901a\u77e5\u5ba2\u6237\u7aef\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch16.png",src:a(1057).Z,width:"516",height:"202"})),(0,n.kt)("h3",{id:"hbase-memstore"},"HBase MemStore"),(0,n.kt)("p",null,"MemStore \u662f\u4e00\u4e2a In Memory Sorted Buffer\uff0c\u5728\u6bcf\u4e2a store \u4e2d\u90fd\u6709\u4e00\u4e2a memstore\uff0cstore \u5bf9\u5e94 region \u4e2d\u7684 columnfamily\u3002\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch17.png",src:a(2514).Z,width:"507",height:"243"})),(0,n.kt)("h3",{id:"hbase-region-flush"},"HBase Region Flush"),(0,n.kt)("p",null,"\u5f53 memstore \u79ef\u7d2f\u6ee1\u6570\u636e\u540e\uff0c\u5176\u4e2d\u7684\u5185\u5bb9(\u6392\u5e8f\u96c6\u5408)flush \u8fdb storeFile(hfile)\u4e2d\u3002\u6ce8\u610f\u7684\u662f memstore \u7684\u6700\u5c0f flush \u5355\u5143\u662f region \u800c\u4e0d\u662f\u5355\u4e2a memstore(\u5373\u4e00\u4e2a flush\uff0c\u5176\u4e2d\u6240\u6709\u7684\u90fd flush)\u3002\u53ef\u80fd\u8fd9\u4e5f\u662f hbase \u4e2d\u7684 columnfamily \u4e0d\u80fd\u65e0\u9650\u5236\u7684\u589e\u52a0\u7684\u539f\u56e0(region \u4e2d\u5f88\u591a columnfamily \u540c\u65f6 flush)\u3002\u5728 flush \u8fc7\u7a0b\u4e2d\uff0c\u8fd8\u4f1a\u5728\u5c3e\u90e8\u8ffd\u52a0\u4e00\u4e9b\u6570\u636e\uff0c\u5176\u4e2d\u5c31\u5305\u62ec flush \u65f6\u6700\u5927\u7684 WAL sequence \u503c\uff0c\u544a\u8bc9 hbase \u8fd9\u4e2a hfile \u5199\u5165\u7684\u6700\u65b0\u6570\u636e\u7684\u5e8f\u5217\uff0c\u5728 recover \u65f6\u5c31\u77e5\u9053\u4ece\u54ea\u91cc\u5f00\u59cb\uff0c\u5728 HRegion \u542f\u52a8\u65f6\uff0c\u8fd9\u4e2a sequence \u4f1a\u88ab\u8bfb\u53d6\uff0c\u5e76\u53d6\u6700\u5927\u7684\u4f5c\u4e3a\u4e0b\u4e00\u6b21\u66f4\u65b0\u65f6\u7684\u8d77\u59cb sequence\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch18.png",src:a(7538).Z,width:"487",height:"205"})),(0,n.kt)("h3",{id:"hbase-hfile"},"HBase HFile"),(0,n.kt)("p",null,"\u6570\u636e\u4ee5 key/value(cell)\u7684\u5f62\u5f0f\u987a\u5e8f\u7684\u5b58\u50a8\u5728 storefile \u4e2d\uff0c\u5728 memstore \u79ef\u7d2f\u5230\u8db3\u591f\u7684\u6570\u636e\u540e flush \u5230\u78c1\u76d8\u751f\u6210 hfile(memstore \u4e2d\u5b58\u50a8\u7684 cell \u9075\u5faa\u76f8\u540c\u7684\u6392\u5217\u987a\u5e8f\uff0c\u6240\u4ee5\u662f\u987a\u5e8f\u5199\uff0c\u6027\u80fd\u5f88\u9ad8\uff0c\u4e0d\u9700\u8981\u4e0d\u505c\u7684\u79fb\u52a8\u78c1\u76d8\u6307\u9488)\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch19.png",src:a(8244).Z,width:"515",height:"235"})),(0,n.kt)("h3",{id:"hbase-hfile-structure"},"HBase HFile Structure"),(0,n.kt)("p",null,"Hfile \u7684\u683c\u5f0f\u7ecf\u5386\u4e09\u6b21\u66f4\u6539\uff0c\u73b0\u5728\u662f v3, \u8be6\u60c5\u5b98\u65b9\u6587\u6863(Appendix H: HFile format)\u3002"),(0,n.kt)("h3",{id:"hbase-read-merge"},"HBase Read Merge"),(0,n.kt)("p",null,"\u5982\u524d\u6587\u6240\u8ff0\uff0c\u6bcf\u4e2a memstore \u542b\u6709\u591a\u4e2a hfile, \u8bfb\u53d6\u65f6\u626b\u63cf\u8fc7\u591a\u6587\u4ef6\u4f1a\u5f71\u54cd\u6027\u80fd\u3002\u626b\u7784\u7684\u987a\u5e8f\u4f9d\u6b21\u662f\uff1aBlockCache\u3001MemStore\u3001StoreFile(HFile)\u3002\u5176\u4e2d StoreFile \u7684\u626b\u7784\u5148\u4f1a\u4f7f\u7528 Bloom Filter \u8fc7\u6ee4\u90a3\u4e9b\u4e0d\u53ef\u80fd\u7b26\u5408\u6761\u4ef6\u7684 HFile\uff0c\u7136\u540e\u4f7f\u7528 Block Index \u5feb\u901f\u5b9a\u4f4d Cell\uff0c\u5e76\u5c06\u5176\u52a0\u8f7d\u5230 BlockCache \u4e2d\uff0c\u7136\u540e\u4ece BlockCache \u4e2d\u8bfb\u53d6\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch20.png",src:a(8632).Z,width:"535",height:"225"})),(0,n.kt)("h3",{id:"hbase-compaction"},"HBase Compaction"),(0,n.kt)("p",null,"compaction \u5206\u4e3a\u4e24\u79cd\uff1a"),(0,n.kt)("h3",{id:"minor-compact"},"minor compact"),(0,n.kt)("p",null,"\u9009\u53d6\u4e00\u4e9b\u5c0f\u7684\u3001\u76f8\u90bb\u7684 hfile \u5408\u5e76\u6210\u4e00\u4e2a\u66f4\u5927\u7684 hfile\uff0c\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u5904\u7406\u5df2\u7ecf deleted \u6216 expired \u7684 cell;"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch21.png",src:a(2732).Z,width:"510",height:"224"})),(0,n.kt)("h3",{id:"major-compact"},"major compact"),(0,n.kt)("p",null,"\u6240\u6709\u7684 hfile \u5408\u5e76\u6210\u4e00\u4e2a hfile\uff0c\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u6807\u8bb0\u4e3a deleted \u7684 cell \u4f1a\u88ab\u5220\u9664\uff0c\u800c\u90a3\u4e9b\u5df2\u7ecf expired \u7684 cell \u4f1a\u88ab\u4e22\u5f03\u3002major compaction \u7684\u7ed3\u679c\u662f\u4e00\u4e2a HStore \u53ea\u6709\u4e00\u4e2a hfile \u5b58\u5728(one hfile per column family)\u3002\u53ef\u4ee5\u624b\u52a8\u6216\u81ea\u52a8\u89e6\u53d1\uff0c\u7531\u4e8e\u5b83\u4f1a\u5f15\u8d77\u5f88\u591a\u7684 IO \u64cd\u4f5c\u800c\u5f71\u54cd\u6027\u80fd\uff0c\u4e00\u822c\u5efa\u8bae\u5b89\u6392\u5728\u5468\u672b\u7b49\u6bd4\u8f83\u95f2\u7684\u65f6\u95f4\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch22.png",src:a(202).Z,width:"461",height:"230"})),(0,n.kt)("h3",{id:"hdfs-data-replication"},"HDFS Data Replication"),(0,n.kt)("p",null,"hbase \u4f9d\u8d56 hdfs \u6765\u786e\u4fdd\u6570\u636e\u4e0d\u4e22\u5931\uff0chdfs \u5c06\u6570\u636e\u5907\u4efd\u5230\u5176\u4ed6\u8282\u70b9\u4e0a\u3002"),(0,n.kt)("h3",{id:"hbase-crash-recovery"},"HBase Crash Recovery"),(0,n.kt)("p",null,"\u5f53 zookeeper \u76d1\u6d4b\u4e0d\u5230 regionserver \u7684\u5fc3\u8df3\u5305\uff0c\u901a\u77e5 master \u8fd9\u4e2a regionserver \u5b95\u673a\u3002master \u5c31\u4f1a\u5bf9\u5b95\u673a server \u4e2d\u7684 region \u5206\u914d\u7ed9\u6d3b\u7740\u7684 regionserver\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hbasearch23.png",src:a(7348).Z,width:"509",height:"252"})),(0,n.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.blogjava.net/DLevin/archive/2015/08/22/426877.html"},"\u6df1\u5165 HBase \u67b6\u6784\u89e3\u6790")))}d.isMDXComponent=!0},8840:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch1-1e74c5892fd4c9868c12480db3ee8c36.jpg"},9914:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch10-ee9e66fa45eaac09dbd1710a781e0a5d.png"},8043:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch11-904d58d62a7df57edd2bb0c889733797.png"},7795:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch12-b89e438238a5ffee7d3302fdd172c774.png"},841:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch13-d73298c4b24341d1510ae60737f24cc7.png"},5576:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch14-926f89cc368f9d69c583cadd8e569ddd.png"},1429:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch15-4e667d0b445bf4ddf77da3d011b44b82.png"},1057:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch16-5a7be94cb30bff765abb6f38cf9d25f2.png"},2514:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch17-b4ab589f690f84c61274cb60ff4ecb87.png"},7538:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch18-3a3f640d3dedb5f3711760f6e4c49864.png"},8244:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch19-27642037350f70ee5e7e20b1f5c3db74.png"},2202:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch2-13163402febac7942b4f6da64ba0247b.png"},8632:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch20-97ba03585d70c70e1ae87ba9788014de.png"},2732:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch21-4526039025c444589036ca796ec1bf05.png"},202:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch22-be0fef275a19b8f030e2cef2d476c54f.png"},7348:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch23-becaa71be6f0e0e07d4e95fca24a6983.png"},7092:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch3-7f724f8e977a9771043d42448fbe98d1.png"},567:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},4423:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch5-a0e89d0ead398f25938499922f9e78c4.png"},1319:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch6-f6fa7cd56b938f55942297f01446597f.png"},2569:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch7-0114057f8278f14e607c593a841c75f6.png"},5086:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch8-e6e2e7f91d10192fd7f851c23c5c34dd.png"},6615:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hbasearch9-dc05f1a61430a1624a109b552e4e4306.png"}}]);