"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[5816],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>c});var a=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=a.createContext({}),i=function(e){var r=a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},u=function(e){var r=i(e.components);return a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=i(n),c=t,y=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return n?a.createElement(y,p(p({ref:r},u),{},{components:n})):a.createElement(y,p({ref:r},u))}));function c(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,p=new Array(o);p[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,p[1]=l;for(var i=2;i<o;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},795:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=n(7462),t=(n(7294),n(3905));const o={},p=void 0,l={unversionedId:"bigdata/hadoop\u4f7f\u7528",id:"bigdata/hadoop\u4f7f\u7528",title:"hadoop\u4f7f\u7528",description:"\u5355\u673a\u5b89\u88c5",source:"@site/docs/bigdata/hadoop\u4f7f\u7528.md",sourceDirName:"bigdata",slug:"/bigdata/hadoop\u4f7f\u7528",permalink:"/docs/bigdata/hadoop\u4f7f\u7528",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/hadoop\u4f7f\u7528.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"filebeat\u4f7f\u7528",permalink:"/docs/bigdata/filebeat\u4f7f\u7528"},next:{title:"hbase\u5b66\u4e60",permalink:"/docs/bigdata/hbase\u5b66\u4e60"}},s={},i=[{value:"\u5355\u673a\u5b89\u88c5",id:"\u5355\u673a\u5b89\u88c5",level:2},{value:"\u521b\u5efa hadoop \u6587\u4ef6\u76ee\u5f55",id:"\u521b\u5efa-hadoop-\u6587\u4ef6\u76ee\u5f55",level:3},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"\u542f\u52a8\u548c\u505c\u6b62",id:"\u542f\u52a8\u548c\u505c\u6b62",level:3},{value:"\u914d\u7f6e yarn",id:"\u914d\u7f6e-yarn",level:3},{value:"Hadoop \u4e2d\u7684 ProxyUser",id:"hadoop-\u4e2d\u7684-proxyuser",level:2},{value:"PROXYUSER \u7684\u4f7f\u7528\u548c\u76f8\u5173\u914d\u7f6e",id:"proxyuser-\u7684\u4f7f\u7528\u548c\u76f8\u5173\u914d\u7f6e",level:3}],u={toc:i};function d(e){let{components:r,...o}=e;return(0,t.kt)("wrapper",(0,a.Z)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"\u5355\u673a\u5b89\u88c5"},"\u5355\u673a\u5b89\u88c5"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Requirements:jdk")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"tar -zxvf hadoop-2.7.3.tar.gz -C ~")),(0,t.kt)("h3",{id:"\u521b\u5efa-hadoop-\u6587\u4ef6\u76ee\u5f55"},"\u521b\u5efa hadoop \u6587\u4ef6\u76ee\u5f55"),(0,t.kt)("p",null,"\u5728\u5b89\u88c5\u76ee\u5f55\u4e0b\u521b\u5efa 4 \u4e2a\u6587\u4ef6\u76ee\u5f55, \u5982\u4e0b:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/hadoop-2.7.3/data/tmp\nmkdir -p ~/hadoop-2.7.3/data/hdfs/name\nmkdir -p ~/hadoop-2.7.3/data/hdfs/data\nmkdir -p ~/hadoop-2.7.3/data/log\n")),(0,t.kt)("h3",{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,t.kt)("p",null,"\u6700\u57fa\u672c\u8981\u4fee\u6539 3 \u4e2a\u6587\u4ef6(etc/hadoop/xxx)\uff1ahadoop-env.sh, core-site.xml, hdfs-site.xml"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"hadoop-env.sh")),(0,t.kt)("p",null,'\u4e3b\u8981\u662f\u914d\u7f6e jdk \u7684\u8def\u5f84, \u627e\u5230"export JAVA_HOME="\uff0c\u586b\u5199 jdk \u8def\u5f84'),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"core-site.xml")),(0,t.kt)("p",null,"\u914d\u7f6e hdfs \u8bbf\u95ee\u8def\u5f84\u548c namenode \u4e34\u65f6\u6587\u4ef6\u5939\u8def\u5f84, \u5982\u4e0b:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n<property>\n<name>fs.defaultFS</name>\n<value>hdfs://${hostname}:9000</value>\n<description>hdfs\u5185\u90e8\u901a\u8baf\u8bbf\u95ee\u5730\u5740</description>\n</property>\n<property>\n<name>hadoop.tmp.dir</name>\n<value>file:/home/ylz/hadoop-2.7.3/data/tmp</value>\n<description>\u4e34\u65f6\u6587\u4ef6\u76ee\u5f55</description>\n</property>\n</configuration>\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"hdfs-site.xml")),(0,t.kt)("p",null,"\u914d\u7f6e\u5143\u6570\u636e\u548c datanode \u6570\u636e\u7684\u5b58\u653e\u8def\u5f84, \u5982\u4e0b:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n<property>\n<name>dfs.namenode.name.dir</name>\n<value>file:/home/ylz/hadoop-2.7.3/data/hdfs/name</value>\n<description>namenode\u5b58\u653ename table(fsimage)\u672c\u5730\u76ee\u5f55</description>\n</property>\n<property>\n<name>dfs.namenode.data.dir</name>\n<value>file:/home/ylz/hadoop-2.7.3/data/hdfs/data</value>\n<description>datanode\u5b58\u653eblock\u672c\u5730\u76ee\u5f55</description>\n</property>\n<property>\n<name>dfs.replication</name>\n<value>1</value>\n<description>\u7531\u4e8e\u53ea\u6709\u4e00\u53f0\u673a\u5668,hdfs\u7684\u526f\u672c\u6570\u5c31\u6307\u5b9a\u4e3a1</description>\n</property>\n</configuration>\n")),(0,t.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"$HADOOP_HOME/bin/hdfs namenode -format")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-log"},"INFO common. Storage: Storage directory /home/ylz/hadoop-2.7.3/data/hdfs/name has been successfully formatted\n")),(0,t.kt)("p",null,"\u5230\u8fd9\u91cc hadoop \u5355\u673a\u7248\u5df2\u7ecf\u5b89\u88c5\u6210\u529f, \u63a5\u4e0b\u6765\u5c31\u662f\u542f\u52a8 hadoop"),(0,t.kt)("h3",{id:"\u542f\u52a8\u548c\u505c\u6b62"},"\u542f\u52a8\u548c\u505c\u6b62"),(0,t.kt)("p",null,"\u5206\u522b\u542f\u52a8 namenode\u3001secondarynamenode\u3001datanode, \u5982\u4e0b:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"$HADOOP_HOME/sbin/hadoop-daemon.sh start namenode\n$HADOOP_HOME/sbin/hadoop-daemon.sh start secondarynamenode\n$HADOOP_HOME/sbin/hadoop-daemon.sh start datanode\n#$HADOOP_HOME/bin/hadoop fs -ls /   #\u6ca1\u6709\u9519\u8bef\u8bf4\u660e\u542f\u52a8\u6210\u529f\n\n#\u505c\u6b62\u5982\u4e0b\n$HADOOP_HOME/sbin/hadoop-daemon.sh stop datanode\n$HADOOP_HOME/sbin/hadoop-daemon.sh stop secondarynamenode\n$HADOOP_HOME/sbin/hadoop-daemon.sh stop namenode\n")),(0,t.kt)("h3",{id:"\u914d\u7f6e-yarn"},"\u914d\u7f6e yarn"),(0,t.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u5230 yarn, \u914d\u7f6e\u65f6\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"mapred-site.xml")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n<property>\n<name>mapreduce.framework.name</name>\n<value>yarn</value>\n</property>\n</configuration>\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"yarn-site.xml")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n<property>\n<name>yarn.nodemanager.aux-services</name>\n<value>mapreduce_shuffle</value>\n</property>\n</configuration>\n")),(0,t.kt)("h2",{id:"hadoop-\u4e2d\u7684-proxyuser"},"Hadoop \u4e2d\u7684 ProxyUser"),(0,t.kt)("p",null,"\u94fe\u63a5\uff1a",(0,t.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/a27bc8651533"},"https://www.jianshu.com/p/a27bc8651533")),(0,t.kt)("p",null,"Hadoop2.0 \u7248\u672c\u5f00\u59cb\u652f\u6301 ProxyUser \u7684\u673a\u5236\u3002\u542b\u4e49\u662f\u4f7f\u7528 User A \u7684\u7528\u6237\u8ba4\u8bc1\u4fe1\u606f\uff0c\u4ee5 User B \u7684\u540d\u4e49\u53bb\u8bbf\u95ee hadoop \u96c6\u7fa4\u3002\u5bf9\u4e8e\u670d\u52a1\u7aef\u6765\u8bf4\u5c31\u8ba4\u4e3a\u6b64\u65f6\u662f User B \u5728\u8bbf\u95ee\u96c6\u7fa4\uff0c\u76f8\u5e94\u5bf9\u8bbf\u95ee\u8bf7\u6c42\u7684\u9274\u6743\uff08\u5305\u62ec HDFS \u6587\u4ef6\u7cfb\u7edf\u7684\u6743\u9650\uff0cYARN \u63d0\u4ea4\u4efb\u52a1\u961f\u5217\u7684\u6743\u9650\uff09\u90fd\u4ee5\u7528\u6237 User B \u6765\u8fdb\u884c\u3002User A \u88ab\u8ba4\u4e3a\u662f superuser\uff08\u8fd9\u91cc superuser \u5e76\u4e0d\u7b49\u540c\u4e8e hdfs \u4e2d\u7684\u8d85\u7ea7\u7528\u6237\uff0c\u53ea\u662f\u62e5\u6709\u4ee3\u7406\u67d0\u4e9b\u7528\u6237\u7684\u6743\u9650\uff0c\u5bf9\u4e8e hdfs \u6765\u8bf4\u672c\u8eab\u4e5f\u662f\u666e\u901a\u7528\u6237\uff09\uff0cUser B \u88ab\u8ba4\u4e3a\u662f proxyuser\u3002"),(0,t.kt)("p",null,"\u5728 Hadoop \u7684\u7528\u6237\u8ba4\u8bc1\u673a\u5236\u4e2d\uff0c\u5982\u679c\u4f7f\u7528\u7684\u662f Simple \u8ba4\u8bc1\u673a\u5236\uff0c\u5b9e\u9645\u4e0a ProxyUser \u7684\u4f7f\u7528\u610f\u4e49\u5e76\u4e0d\u5927\uff0c\u56e0\u4e3a\u5ba2\u6237\u7aef\u672c\u8eab\u5c31\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u7528\u6237\u5bf9\u670d\u52a1\u7aef\u8fdb\u884c\u8bbf\u95ee\uff0c\u670d\u52a1\u7aef\u5e76\u4e0d\u4f1a\u505a\u8ba4\u8bc1\u3002\u800c\u5728\u4f7f\u7528\u4e86\u5b89\u5168\u8ba4\u8bc1\u673a\u5236\uff08\u4f8b\u5982 Kerberos\uff09\u7684\u60c5\u51b5\u4e0b\uff0cProxyUser \u8ba4\u8bc1\u673a\u5236\u5c31\u5f88\u6709\u4f5c\u7528\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u7528\u6237\u7684\u7ba1\u7406\u4f1a\u6bd4\u8f83\u7e41\u7410\uff0c\u6bcf\u589e\u52a0\u4e00\u4e2a\u65b0\u7684\u7528\u6237\uff0c\u90fd\u9700\u8981\u7ef4\u62a4\u76f8\u5e94\u7684\u8ba4\u8bc1\u4fe1\u606f\uff08kerberosKeyTab\uff09\uff0c\u4f7f\u7528 ProxyUser \u7684\u8bdd\uff0c\u53ea\u9700\u8981\u7ef4\u62a4\u5c11\u91cf superuser \u7684\u8ba4\u8bc1\u4fe1\u606f\uff0c\u800c\u65b0\u589e\u7528\u6237\u53ea\u9700\u8981\u6dfb\u52a0 proxyuser \u5373\u53ef\uff0cproxyuser \u672c\u8eab\u4e0d\u9700\u8981\u8ba4\u8bc1\u4fe1\u606f\u3002"),(0,t.kt)("li",{parentName:"ul"},"\u901a\u5e38\u7684\u5b89\u5168\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u9002\u5408\u573a\u666f\u662f\u4e0d\u540c\u7528\u6237\u5728\u4e0d\u540c\u7684\u5ba2\u6237\u7aef\u4e0a\u63d0\u4ea4\u5bf9\u96c6\u7fa4\u7684\u8bbf\u95ee\uff1b\u800c\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u901a\u5e38\u6709\u7b2c\u4e09\u65b9\u7528\u6237\u5e73\u53f0\u6216\u7cfb\u7edf\u4f1a\u7edf\u4e00\u7528\u6237\u5bf9\u96c6\u7fa4\u7684\u8bbf\u95ee\uff0c\u5e76 \u4e14\u6267\u884c\u4e00\u7cfb\u5217\u4efb\u52a1\u8c03\u5ea6\u903b\u8f91\uff0c\u4f8b\u5982 Oozie\u3001\u534e\u4e3a\u7684 BDI \u7cfb\u7edf\u7b49\u3002\u6b64\u65f6\u8bbf\u95ee\u96c6\u7fa4\u63d0\u4ea4\u4efb\u52a1\u7684\u5b9e\u9645\u53ea\u6709\u4e00\u4e2a\u5ba2\u6237\u7aef\u3002\u4f7f\u7528 ProxyUser \u673a\u5236\uff0c\u5219\u53ef\u4ee5\u5728\u8fd9\u4e00 \u4e2a\u5ba2\u6237\u7aef\u4e0a\uff0c\u5b9e\u73b0\u591a\u4e2a\u7528\u6237\u5bf9\u96c6\u7fa4\u7684\u8bbf\u95ee\u3002")),(0,t.kt)("p",null,"\u975e ProxyUser \u65b9\u5f0f\u8bbf\u95ee hadoop \u96c6\u7fa4\uff0cUGI \u4e2d\u53ea\u5305\u542b\u4e86\u666e\u901a\u7528\u6237\u53ca\u5176\u8ba4\u8bc1\u4fe1\u606f\u3002"),(0,t.kt)("p",null,"\u4f7f\u7528 ProxyUser \u65b9\u5f0f\u8bbf\u95ee hadoop \u96c6\u7fa4\uff0c\u8bbf\u95ee\u8bf7\u6c42\u7684 UGI \u5bf9\u8c61\u4e2d\u5b9e\u9645\u5305\u542b\u4e86\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"proxyUser \u7528\u6237\u540d;"),(0,t.kt)("li",{parentName:"ul"},"superUser \u7528\u6237\u540d;"),(0,t.kt)("li",{parentName:"ul"},"superUser \u7684\u8ba4\u8bc1\u4fe1\u606f(kerberos \u7b49\u5b89\u5168\u8ba4\u8bc1\u6a21\u5f0f\u4e0b),\u901a\u8fc7 ProxyUser \u65b9\u5f0f\u8bbf\u95ee hadoop \u96c6\u7fa4\uff0c\u8ba4\u8bc1\u9274\u6743\u6d41\u7a0b\u5982\u4e0b\uff1a\n",(0,t.kt)("img",{alt:"proxyuser",src:n(5548).Z,width:"558",height:"239"}))),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("ul",{parentName:"admonition"},(0,t.kt)("li",{parentName:"ul"},"\u5bf9 SuperUser \u8fdb\u884c\u8ba4\u8bc1\uff0c\u5728 Simple \u8ba4\u8bc1\u6a21\u5f0f\u4e0b\u76f4\u63a5\u901a\u8fc7\u8ba4\u8bc1\uff0c\u5728 Kerberos \u8ba4\u8bc1\u6a21\u5f0f\u4e0b\uff0c\u4f1a\u9a8c\u8bc1 ticket \u7684\u5408\u6cd5\u6027\u3002"),(0,t.kt)("li",{parentName:"ul"},"\u4ee3\u7406\u6743\u9650\u8ba4\u8bc1\uff0c\u5373\u8ba4\u8bc1 SuperUser \u662f\u5426\u6709\u6743\u9650\u4ee3\u7406 proxyUser\u3002\u8fd9\u91cc\u6743\u9650\u8ba4\u8bc1\u7684\u903b\u8f91\u7684\u5b9e\u73b0\u53ef\u4ee5\u901a\u8fc7",(0,t.kt)("inlineCode",{parentName:"li"},"hadoop.security.impersonation.provider.class")," \u53c2\u6570\u6307\u5b9a\u3002\u5728\u9ed8\u8ba4\u5b9e\u73b0\u4e2d\u901a\u8fc7\u4e00\u7cfb\u5217\u53c2\u6570\u6307\u5b9a\u6bcf\u4e2a SuperUser \u5141\u8bb8\u4ee3\u7406\u7528\u6237\u7684\u8303\u56f4(\u5373\u4e0b\u6587\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6)\u3002"),(0,t.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u8bf7\u6c42\u9274\u6743\uff0c\u5373\u9a8c\u8bc1 proxyUser \u662f\u5426\u6709\u6743\u9650\u5bf9\u96c6\u7fa4\uff08hdfs \u6587\u4ef6\u7cfb\u7edf\u8bbf\u95ee\u6216\u8005 yarn \u63d0\u4ea4\u4efb\u52a1\u5230\u8d44\u6e90\u961f\u5217\uff09\u7684\u8bbf\u95ee\u3002\u8fd9\u91cc\u7684\u9274\u6743\u53ea\u9488\u5bf9 proxyUser \u7528\u6237\u4e0e SuperUser \u7528\u6237\u65e0\u5173\uff0c\u5373\u4f7f superUser \u7528\u6237\u6709\u6743\u9650\u8bbf\u95ee\u67d0\u4e2a\u76ee\u5f55\uff0c\u800c proxyUser \u65e0\u6743\u9650\u8bbf\u95ee\uff0c\u6b64\u65f6\u9274\u6743\u4e5f\u4f1a\u8fd4\u56de\u5931\u8d25\u3002"))),(0,t.kt)("h3",{id:"proxyuser-\u7684\u4f7f\u7528\u548c\u76f8\u5173\u914d\u7f6e"},"PROXYUSER \u7684\u4f7f\u7528\u548c\u76f8\u5173\u914d\u7f6e"),(0,t.kt)("p",null,"ProxyUser \u5bf9\u8c61\u901a\u8fc7 UserGroupInformation.createProxy(\u201cproxyUser\u201d,superUgi)\u6765\u521b\u5efa\uff0c\u8bbf\u95ee\u96c6\u7fa4\u65f6\u901a\u8fc7 proxyUser.doAs \u65b9\u5f0f\u8fdb\u884c\u8c03\u7528:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"// \u521b\u5efasuperUser\u7528\u6237\nUserGroupInformation superUser = UserGroupInformation.getCurrentUser();\n//\u521b\u5efaproxyUser\u7528\u6237\nUserGroupInformation proxyUgi = UserGroupInformation.createProxyUser(\u201cproxyUser\u201d, superUser);\n// \u4f7f\u7528proxyUser\u7528\u6237\u8bbf\u95ee\u96c6\u7fa4\nproxyUgi.doAs(new PrivilegedExceptionAction<Void>() {\n@Override\npublic Void run() throws Exception {\n// \u4f7f\u7528proxy\u7528\u6237\u8bbf\u95eehdfs\nFileSystem fs = FileSystem.get(conf);\nfs.mkdirs(new Path(\u201c/proxyUserDir\u201d));\n// \u4f7f\u7528proxy\u7528\u6237\u63d0\u4ea4mr\u4f5c\u4e1a\nJobClient jc = new JobClient(conf);\n\njc.submitJob(conf);\n\n    return null;\n    }\n});\n")),(0,t.kt)("p",null,"\u670d\u52a1\u7aef\u9700\u8981\u5728 NameNode \u548c ResourceManager \u7684 core-site.xml \u4e2d\u8fdb\u884c\u4ee3\u7406\u6743\u9650\u76f8\u5173\u914d\u7f6e\u3002 \u5bf9\u4e8e\u6bcf\u4e00\u4e2a superUser \u7528\u6237\uff0c\u914d\u7f6e\u53c2\u6570\uff1a"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),(0,t.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"hadoop.proxyuser.$superuser.hosts"),(0,t.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u8be5 superUser \u5141\u8bb8\u901a\u8fc7\u4ee3\u7406\u8bbf\u95ee\u7684\u4e3b\u673a\u8282\u70b9")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"hadoop.proxyuser.$superuser.groups"),(0,t.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u8be5 superUser \u5141\u8bb8\u4ee3\u7406\u7684\u7528\u6237\u6240\u5c5e\u7ec4")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"hadoop.proxyuser.$superuser.users"),(0,t.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u8be5 superUser \u5141\u8bb8\u4ee3\u7406\u7684\u7528\u6237")))),(0,t.kt)("admonition",{type:"note"},(0,t.kt)("ul",{parentName:"admonition"},(0,t.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6bcf\u4e2a superUser \u7528\u6237\uff0chosts \u5fc5\u987b\u8fdb\u884c\u914d\u7f6e\uff0c\u800c groups \u548c users \u81f3\u5c11\u9700\u8981\u914d\u7f6e\u4e00\u4e2a;"),(0,t.kt)("li",{parentName:"ul"},"\u8fd9\u51e0\u4e2a\u914d\u7f6e\u9879\u7684\u503c\u90fd\u53ef\u4ee5\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"li"},"*"),"\u6765\u8868\u793a\u5141\u8bb8\u6240\u6709\u7684\u4e3b\u673a/\u7528\u6237\u7ec4/\u7528\u6237"))),(0,t.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- \u8868\u793a\u5141\u8bb8\u7528\u6237userA\uff0c\u5728\u4efb\u610f\u4e3b\u673a\u8282\u70b9\uff0c\u4ee3\u7406\u7528\u6237user1\u548cuser2 --\x3e\n<property>\n<name>hadoop.proxyuser.userA.hosts</name>\n<value>*</value>\n</property>\n<property>\n<name>hadoop.proxyuser.userA.users</name>\n<value>user1,user2</value>\n</property>\n")),(0,t.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"\u4ee3\u7406\u7528\u6237\u6743\u9650\u76f8\u5173\u914d\u7f6e\u7684\u6539\u52a8\uff0c\u9700\u8981\u4fee\u6539 core-site.xml \u6587\u4ef6\u4e2d\u76f8\u5173\u914d\u7f6e\u3002\u4fee\u6539\u540e\u914d\u7f6e\u5e76\u4e0d\u4f1a\u81ea\u52a8\u66f4\u65b0\u5230\u670d\u52a1\u5668\uff08\u8fd9\u4e0e fair-scheduler.xml \u914d\u7f6e\u4f1a\u81ea\u52a8\u66f4\u65b0\u4e0d\u540c\uff09\u3002\u4fee\u6539\u914d\u7f6e\u540e\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u540c\u6b65\uff0c\u5206\u522b\u5c06\u4fe1\u606f\u66f4\u65b0\u5230 namenode \u548c resourcemananger \u4e0a\u3002"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs dfsadmin \u2013refreshSuperUserGroupsConfiguration\nyarn rmadmin \u2013refreshSuperUserGroupsConfiguration\n"))))}d.isMDXComponent=!0},5548:(e,r,n)=>{n.d(r,{Z:()=>a});const a=n.p+"assets/images/proxyuser-05530afe3d992a5ed87cf6592762fe78.png"}}]);