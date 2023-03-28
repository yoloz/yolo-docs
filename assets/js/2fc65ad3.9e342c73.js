"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[1181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>v,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},v=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,v=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,u=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(u,i(i({ref:t},v),{},{components:n})):r.createElement(u,i({ref:t},v))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"bigdata/hive\u4f7f\u7528",id:"bigdata/hive\u4f7f\u7528",title:"hive\u4f7f\u7528",description:"\u5355\u673a\u5b89\u88c5",source:"@site/docs/bigdata/hive\u4f7f\u7528.md",sourceDirName:"bigdata",slug:"/bigdata/hive\u4f7f\u7528",permalink:"/docs/bigdata/hive\u4f7f\u7528",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/hive\u4f7f\u7528.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"hiverServer2\u9a8c\u8bc1",permalink:"/docs/bigdata/hiverServer2\u9a8c\u8bc1"},next:{title:"hive\u7684JDBC",permalink:"/docs/bigdata/hive\u7684JDBC"}},p={},s=[{value:"\u5355\u673a\u5b89\u88c5",id:"\u5355\u673a\u5b89\u88c5",level:2},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:3},{value:"HiveServer1 \u548c HiveServer2",id:"hiveserver1-\u548c-hiveserver2",level:2}],v={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5355\u673a\u5b89\u88c5"},"\u5355\u673a\u5b89\u88c5"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Requirements:jdk, hadoop")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tar -zxvf apache-hive-2.1.0-bin.tar.gz -C ~")),(0,a.kt)("h3",{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"hive-env.sh")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cp $HIVE_HOME/conf/hive-env.sh.template $HIVE_HOME/conf/hive-env.sh"),'\n\u4e3b\u8981\u662f\u914d\u7f6e hadoop \u7684\u8def\u5f84, \u627e\u5230"HADOOP_HOME=="\uff0c\u586b\u5199 hadoop \u8def\u5f84'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"hive-site.xml")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cp $HIVE_HOME/conf/hive-default.xml.template $HIVE_HOME/conf/hive-site.xml"),"\n\u4e3b\u8981\u662f\u914d\u7f6e metadata \u5b58\u50a8\u53ca hive \u6570\u636e\u5b58\u50a8\u5728 hdfs \u7684\u4f4d\u7f6e, \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u9ed8\u8ba4\u7684 derby\uff0c\u5982\u4e0b\u4f7f\u7528 mysql:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n<property>\n<name>javax.jdo.option.ConnectionURL</name>\n<value\n    >jdbc:mysql://localhost:3306/hive_metastore?createDatabaseIfNotExist=true&amp;characterEncoding=UTF-8&amp;useSSL=false</value>\n<description>metastore_db\u4e3a\u8981\u521b\u5efa\u7684\u6570\u636e\u5e93\u540d,\u6ce8\u610f\u5b57\u7b26\u96c6\u8bbe\u7f6e</description>\n</property>\n<property>\n<name>javax.jdo.option.ConnectionDriverName</name>\n<value>com.mysql.jdbc.Driver</value>\n</property>\n<property>\n<name>javax.jdo.option.ConnectionUserName</name>\n<value>root</value>\n<description>\u767b\u5f55\u8d26\u6237\u540d</description>\n</property>\n<property>\n<name>javax.jdo.option.ConnectionPassword</name>\n<value>123456</value>\n<description>\u767b\u5f55\u5bc6\u7801</description>\n</property>\n<property>\n<name>hive.metastore.warehouse.dir</name>\n<value>/user/hive/warehouse</value>\n<description>hive\u8868\u5728hdfs\u7684\u4f4d\u7f6e</description>\n</property>\n</configuration>\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528 mysql, \u9700\u8981\u5c06\u5bf9\u5e94\u7684 jdbc \u9a71\u52a8 jar \u79fb\u5230 lib \u4e0b")),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#hadoop\u5df2\u542f\u52a8\nexport HADOOP_HOME=<hadoop-install-dir>\n$HIVE_HOME/bin/schematool -dbType <db type> -initSchema  # use "derby" as db type or "mysql"\n')),(0,a.kt)("h3",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},'$HIVE_HOME/bin/hiveserver2 &  #"&" \u8868\u793a\u540e\u53f0\u8fd0\u884c\n$HIVE_HOME/bin/beeline\nbeeline> !connect jdbc:hive2://localhost:10000/default\nConnecting to jdbc:hive2://localhost:10000/default\nEnter username for jdbc:hive2://localhost:10000/default:(\u76f4\u63a5\u56de\u8f66)\nEnter password for jdbc:hive2://localhost:10000/default:(\u76f4\u63a5\u56de\u8f66)\nError: Failed to open new session: java.lang.RuntimeException: org.apache.hadoop.ipc.RemoteException(org.apache.hadoop.security.authorize.AuthorizationException): User: zhds is not allowed to impersonate anonymous (state=,code=0)\nbeeline>\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4 hive-site.xml \u4e2d hive.server2.authentication \u4e3a NONE\uff08no authentication check \u2013 plain SASL transport\uff09,\u7528\u6237\u5bc6\u7801\u968f\u610f\u4e0d\u505a\u68c0\u67e5"),(0,a.kt)("p",{parentName:"admonition"},"\u6216\u8005",(0,a.kt)("inlineCode",{parentName:"p"},"$HIVE_HOME/bin/hive --service hiveserver2"),"\uff0cUsage\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"$HIVE_HOME/bin/hive <parameters> --service serviceName <service parameters>")),(0,a.kt)("p",{parentName:"admonition"},"Service List: beeline cleardanglingscratchdir cli hbaseimport hbaseschematool help hiveburninclient hiveserver2 hplsql hwi jar lineage llapdump llap llapstatus metastore metatool orcfiledump rcfilecat schemaTool version")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u95ee\u9898\u4e00\uff1a\u5bf9\u4e8e\u4e0a\u8ff0\u7684 Error, \u4fee\u6539 hadoop \u7684 core-site.xml(\u7136\u540e\u91cd\u542f hadooop):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<property>\n<name>hadoop.proxyuser.zhds.hosts</name>\n<value>*</value>\n</property>\n<property>\n<name>hadoop.proxyuser.zhds.groups</name>\n<value>*</value>\n</property>\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u8be6\u89c1:",(0,a.kt)("a",{parentName:"p",href:"./hadoop%E4%BD%BF%E7%94%A8"},"Hadoop \u4e2d\u7684 ProxyUser"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u95ee\u9898\u4e8c\uff1a",(0,a.kt)("strong",{parentName:"li"},"\u542f\u52a8\u540e\u8fdb\u7a0b\u5b58\u5728\u76d1\u542c\u7aef\u53e3 10000 \u4e0d\u5b58\u5728"))),(0,a.kt)("p",null,"\u6253\u5f00 hive \u65e5\u5fd7"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd $HIVE_HOME/conf\n$ cp hive-log4j2.properties.template hive-log4j2.properties\n$ nano hive-log4j2.properties\n#property.hive.log.dir = $HIVE_HOME/logs\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u67e5\u770b\u751f\u6210\u7684 hive.log"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"2023-03-21T10:32:50,756  WARN [main] server.HiveServer2: Error starting HiveServer2 on attempt 1, will retry in 60 seconds\njava.lang.RuntimeException: Error applying authorization policy on hive configuration: java.net.URISyntaxException: Relative path in absolute URI: ${system:java.io.tmpdir%7D/$%7Bsystem:user.name%7D\n...\nCaused by: java.lang.IllegalArgumentException: java.net.URISyntaxException: Relative path in absolute URI: ${system:java.io.tmpdir%7D/$%7Bsystem:user.name%7D\n...\nCaused by: java.net.URISyntaxException: Relative path in absolute URI: ${system:java.io.tmpdir%7D/$%7Bsystem:user.name%7D\n...\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u62a5\u9519\u4fe1\u606f\u663e\u793a\u662f\u8def\u5f84\u5199\u6cd5\u4e0d\u5bf9,\u67e5\u770b hive-site.xml \u53ef\u4ee5\u53d1\u73b0\u5f88\u591a",(0,a.kt)("inlineCode",{parentName:"p"},"<value>${system:java.io.tmpdir}/${system:user.name}</value>"),"\u8fd9\u79cd\u914d\u7f6e\uff0c\u5c06\u5176\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"system:"),"\u53bb\u6389\u91cd\u542f",(0,a.kt)("inlineCode",{parentName:"p"},"sed -i 's/${system:/${/g' conf/hive-site.xml")),(0,a.kt)("h2",{id:"hiveserver1-\u548c-hiveserver2"},"HiveServer1 \u548c HiveServer2"),(0,a.kt)("p",null,"HiveServer \u662f\u5efa\u7acb\u5728 Apache ThriftTM\uff08",(0,a.kt)("a",{parentName:"p",href:"http://thrift.apache.org/%EF%BC%89"},"http://thrift.apache.org/\uff09")," \u4e4b\u4e0a\u7684\uff0c\u56e0\u6b64\u6709\u65f6\u4f1a\u88ab\u79f0\u4e3a Thrift Server\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6df7\u4e71\uff0c\u56e0\u4e3a\u65b0\u670d\u52a1 HiveServer2 \u4e5f\u662f\u5efa\u7acb\u5728 Thrift \u4e4b\u4e0a\u7684\uff0e\u81ea\u4ece\u5f15\u5165 HiveServer2 \u540e\uff0cHiveServer \u4e5f\u88ab\u79f0\u4e3a HiveServer1"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"HiveServer \u65e0\u6cd5\u5904\u7406\u6765\u81ea\u591a\u4e2a\u5ba2\u6237\u7aef\u7684\u5e76\u53d1\u8bf7\u6c42.\u8fd9\u5b9e\u9645\u4e0a\u662f HiveServer \u5bfc\u51fa\u7684 Thrift \u63a5\u53e3\u6240\u65bd\u52a0\u7684\u9650\u5236\uff0c\u4e5f\u4e0d\u80fd\u901a\u8fc7\u4fee\u6539 HiveServer \u6e90\u4ee3\u7801\u6765\u89e3\u51b3\u3002"),(0,a.kt)("p",{parentName:"admonition"},"HiveServer2 \u5bf9 HiveServer \u8fdb\u884c\u4e86\u91cd\u5199\uff0c\u6765\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\uff0c\u4ece Hive 0.11.0 \u7248\u672c\u5f00\u59cb,\u5efa\u8bae\u4f7f\u7528 HiveServer2\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u4ece Hive1.0.0 \u7248\u672c\uff08\u4ee5\u524d\u79f0\u4e3a 0.14.1 \u7248\u672c\uff09\u5f00\u59cb\uff0cHiveServer \u5f00\u59cb\u88ab\u5220\u9664,\u8bf7\u5207\u6362\u5230 HiveServer2\u3002")))}c.isMDXComponent=!0}}]);