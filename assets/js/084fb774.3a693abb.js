"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[4541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),b=r,h=p["".concat(l,".").concat(b)]||p[b]||u[b]||s;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={},o=void 0,i={unversionedId:"bigdata/hbase\u5b89\u88c5",id:"bigdata/hbase\u5b89\u88c5",title:"hbase\u5b89\u88c5",description:"\u5355\u673a",source:"@site/docs/bigdata/hbase\u5b89\u88c5.md",sourceDirName:"bigdata",slug:"/bigdata/hbase\u5b89\u88c5",permalink:"/docs/bigdata/hbase\u5b89\u88c5",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/hbase\u5b89\u88c5.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"hbase\u5b66\u4e60",permalink:"/docs/bigdata/hbase\u5b66\u4e60"},next:{title:"hdfs\u4f7f\u7528",permalink:"/docs/bigdata/hdfs\u4f7f\u7528"}},l={},c=[{value:"\u5355\u673a",id:"\u5355\u673a",level:2},{value:"\u4f2a\u5206\u5e03\u5f0f",id:"\u4f2a\u5206\u5e03\u5f0f",level:2},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"Check the HBase directory in HDFS",id:"check-the-hbase-directory-in-hdfs",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5355\u673a"},"\u5355\u673a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requirements:jdk")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tar -zxvf hbase-2.2.4-bin.tar.gz -C ~")),(0,r.kt)("p",null,"\u89e3\u538b\u540e\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"bin/start-hbase.sh"),"\u5373\u53ef\uff0c\u6d4f\u89c8\u5668\u8bbf\u95eehttp://ip:16010"),(0,r.kt)("p",null,"\u5e38\u7528\u547d\u4ee4\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ bin/hbase shell\n\n#Create a table\nhbase(main):001:0> create 'test', 'cf'\n0 row(s) in 0.4170 seconds\n\n=> Hbase::Table - test\n\n#List Information About your Table\nhbase(main):002:0> list 'test'\nTABLE\ntest\n1 row(s) in 0.0180 seconds\n\n=> [\"test\"]\n\n#use the describe command to see details\nhbase(main):003:0> describe 'test'\nTable test is ENABLED\ntest\nCOLUMN FAMILIES DESCRIPTION\n{NAME => 'cf', VERSIONS => '1', EVICT_BLOCKS_ON_CLOSE => 'false', NEW_VERSION_BEHAVIOR => 'false', KEEP_DELETED_CELLS => 'FALSE', CACHE_DATA_ON_WRITE =>\n'false', DATA_BLOCK_ENCODING => 'NONE', TTL => 'FOREVER', MIN_VERSIONS => '0', REPLICATION_SCOPE => '0', BLOOMFILTER => 'ROW', CACHE_INDEX_ON_WRITE => 'f\nalse', IN_MEMORY => 'false', CACHE_BLOOMS_ON_WRITE => 'false', PREFETCH_BLOCKS_ON_OPEN => 'false', COMPRESSION => 'NONE', BLOCKCACHE => 'true', BLOCKSIZE\n => '65536'}\n1 row(s)\nTook 0.9998 seconds\n\n#Put data into your table\nhbase(main):003:0> put 'test', 'row1', 'cf:a', 'value1'\n0 row(s) in 0.0850 seconds\n\nhbase(main):004:0> put 'test', 'row2', 'cf:b', 'value2'\n0 row(s) in 0.0110 seconds\n\nhbase(main):005:0> put 'test', 'row3', 'cf:c', 'value3'\n0 row(s) in 0.0100 seconds\n\n#Scan the table for all data at once\nhbase(main):006:0> scan 'test'\nROW                                      COLUMN+CELL\n row1                                    column=cf:a, timestamp=1421762485768, value=value1\n row2                                    column=cf:b, timestamp=1421762491785, value=value2\n row3                                    column=cf:c, timestamp=1421762496210, value=value3\n3 row(s) in 0.0230 seconds\n\n#Get a single row of data\nhbase(main):007:0> get 'test', 'row1'\nCOLUMN                                   CELL\n cf:a                                    timestamp=1421762485768, value=value1\n1 row(s) in 0.0350 seconds\n\n#Disable/Enable a table\nhbase(main):008:0> disable 'test'\n0 row(s) in 1.1820 seconds\n\nhbase(main):009:0> enable 'test'\n0 row(s) in 0.1770 seconds\n\n#Drop the table\nhbase(main):011:0> drop 'test'\n0 row(s) in 0.1370 seconds\n")),(0,r.kt)("h2",{id:"\u4f2a\u5206\u5e03\u5f0f"},"\u4f2a\u5206\u5e03\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requirements:jdk, hadoop")),(0,r.kt)("h2",{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,"\u4fee\u6539\u914d\u7f6e hbase-site.xml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<property>\n  <name>hbase.cluster.distributed</name>\n  <value>true</value>\n</property>\n<property>\n  <name>hbase.rootdir</name>\n  <value>hdfs://${hostname}:9000/hbase</value>\n</property>\n\x3c!--remove existing configuration for 'hbase.tmp.dir' and 'hbase.unsafe.stream.capability.enforce'--\x3e\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You do not need to create the directory in HDFS. HBase will do this for you. If you create the directory, HBase will attempt to do a migration, which is not what you want.")),(0,r.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"bin/start-hbase.sh")," command to start HBase. If your system is configured correctly, the jps command should show the HMaster and HRegionServer processes running."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u51fa\u73b0:Error: JAVA_HOME is not set \u5219\u624b\u52a8\u5728 conf/hbase-env.sh \u4e2d\u6dfb\u52a0")),(0,r.kt)("h3",{id:"check-the-hbase-directory-in-hdfs"},"Check the HBase directory in HDFS"),(0,r.kt)("p",null,"If everything worked correctly, HBase created its directory in HDFS. In the configuration above, it is stored in /hbase/ on HDFS. You can use the hadoop fs command in Hadoop\u2019s bin/ directory to list this directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ bin/hadoop fs -ls /hbase\nFound 7 items\ndrwxr-xr-x   - hbase users          0 2014-06-25 18:58 /hbase/.tmp\ndrwxr-xr-x   - hbase users          0 2014-06-25 21:49 /hbase/WALs\ndrwxr-xr-x   - hbase users          0 2014-06-25 18:48 /hbase/corrupt\ndrwxr-xr-x   - hbase users          0 2014-06-25 18:58 /hbase/data\n-rw-r--r--   3 hbase users         42 2014-06-25 18:41 /hbase/hbase.id\n-rw-r--r--   3 hbase users          7 2014-06-25 18:41 /hbase/hbase.version\ndrwxr-xr-x   - hbase users          0 2014-06-25 21:49 /hbase/oldWALs\n")))}u.isMDXComponent=!0}}]);