"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[1390],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>m});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=t.createContext({}),i=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},s=function(e){var n=i(e.components);return t.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=i(a),m=r,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return a?t.createElement(f,l(l({ref:n},s),{},{components:a})):t.createElement(f,l({ref:n},s))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=a[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2845:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var t=a(7462),r=(a(7294),a(3905));const o={},l=void 0,p={unversionedId:"bigdata/hadoop\u5b89\u88c5",id:"bigdata/hadoop\u5b89\u88c5",title:"hadoop\u5b89\u88c5",description:"\u5355\u673a",source:"@site/docs/bigdata/hadoop\u5b89\u88c5.md",sourceDirName:"bigdata",slug:"/bigdata/hadoop\u5b89\u88c5",permalink:"/docs/bigdata/hadoop\u5b89\u88c5",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/hadoop\u5b89\u88c5.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"elasticsearch",permalink:"/docs/bigdata/elasticsearch"},next:{title:"hbase\u5b66\u4e60",permalink:"/docs/bigdata/hbase\u5b66\u4e60"}},d={},i=[{value:"\u5355\u673a",id:"\u5355\u673a",level:2},{value:"\u521b\u5efa hadoop \u6587\u4ef6\u76ee\u5f55",id:"\u521b\u5efa-hadoop-\u6587\u4ef6\u76ee\u5f55",level:3},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:3},{value:"\u914d\u7f6e yarn",id:"\u914d\u7f6e-yarn",level:3}],s={toc:i};function u(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5355\u673a"},"\u5355\u673a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requirements:jdk")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tar -zxvf hadoop-2.7.3.tar.gz -C ~")),(0,r.kt)("h3",{id:"\u521b\u5efa-hadoop-\u6587\u4ef6\u76ee\u5f55"},"\u521b\u5efa hadoop \u6587\u4ef6\u76ee\u5f55"),(0,r.kt)("p",null,"\u5728\u5b89\u88c5\u76ee\u5f55\u4e0b\u521b\u5efa 4 \u4e2a\u6587\u4ef6\u76ee\u5f55, \u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/hadoop-2.7.3/data/tmp\nmkdir -p ~/hadoop-2.7.3/data/hdfs/name\nmkdir -p ~/hadoop-2.7.3/data/hdfs/data\nmkdir -p ~/hadoop-2.7.3/data/log\n")),(0,r.kt)("h3",{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,"\u6700\u57fa\u672c\u8981\u4fee\u6539 3 \u4e2a\u6587\u4ef6\uff1ahadoop-env.sh, core-site.xml, hdfs-site.xml"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hadoop-env.sh")),(0,r.kt)("p",null,'\u4e3b\u8981\u662f\u914d\u7f6e jdk \u7684\u8def\u5f84, \u627e\u5230"export JAVA_Home="\uff0c\u586b\u5199 jdk \u8def\u5f84'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"core-site.xml")),(0,r.kt)("p",null,"\u914d\u7f6e hdfs \u8bbf\u95ee\u8def\u5f84\u548c namenode \u4e34\u65f6\u6587\u4ef6\u5939\u8def\u5f84, \u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n<property>\n<name>fs.defaultFS</name>\n<value>hdfs://${hostname}:9000</value>\n<description>hdfs\u5185\u90e8\u901a\u8baf\u8bbf\u95ee\u5730\u5740</description>\n</property>\n<property>\n<name>hadoop.tmp.dir</name>\n<value>file:/home/ylz/hadoop-2.7.3/data/tmp</value>\n<description>\u4e34\u65f6\u6587\u4ef6\u76ee\u5f55</description>\n</property>\n</configuration>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hdfs-site.xml")),(0,r.kt)("p",null,"\u914d\u7f6e\u5143\u6570\u636e\u548c datanode \u6570\u636e\u7684\u5b58\u653e\u8def\u5f84, \u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n<property>\n<name>dfs.namenode.name.dir</name>\n<value>file:/home/ylz/hadoop-2.7.3/data/hdfs/name</value>\n<description>namenode\u5b58\u653ename table(fsimage)\u672c\u5730\u76ee\u5f55</description>\n</property>\n<property>\n<name>dfs.namenode.data.dir</name>\n<value>file:/home/ylz/hadoop-2.7.3/data/hdfs/data</value>\n<description>datanode\u5b58\u653eblock\u672c\u5730\u76ee\u5f55</description>\n</property>\n<property>\n<name>dfs.replication</name>\n<value>1</value>\n<description>\u7531\u4e8e\u53ea\u6709\u4e00\u53f0\u673a\u5668,hdfs\u7684\u526f\u672c\u6570\u5c31\u6307\u5b9a\u4e3a1</description>\n</property>\n</configuration>\n")),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$HADOOP_HOME/bin/hdfs namenode -format")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"INFO common. Storage: Storage directory /home/ylz/hadoop-2.7.3/data/hdfs/name has been successfully formatted\n")),(0,r.kt)("p",null,"\u5230\u8fd9\u91cc hadoop \u5355\u673a\u7248\u5df2\u7ecf\u5b89\u88c5\u6210\u529f, \u63a5\u4e0b\u6765\u5c31\u662f\u542f\u52a8 hadoop"),(0,r.kt)("h3",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,r.kt)("p",null,"\u5206\u522b\u542f\u52a8 namenode\u3001secondarynamenode\u3001datanode, \u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$HADOOP_HOME/sbin/hadoop-daemon.sh start namenode\n$HADOOP_HOME/sbin/hadoop-daemon.sh start secondarynamenode\n$HADOOP_HOME/sbin/hadoop-daemon.sh start datanode\n#$HADOOP_HOME/bin/hadoop fs -ls /   #\u6ca1\u6709\u9519\u8bef\u8bf4\u660e\u542f\u52a8\u6210\u529f\n")),(0,r.kt)("h3",{id:"\u914d\u7f6e-yarn"},"\u914d\u7f6e yarn"),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u5230 yarn, \u914d\u7f6e\u65f6\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mapred-site.xml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n<property>\n<name>mapreduce.framework.name</name>\n<value>yarn</value>\n</property>\n</configuration>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"yarn-site.xml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n<property>\n<name>yarn.nodemanager.aux-services</name>\n<value>mapreduce_shuffle</value>\n</property>\n</configuration>\n")))}u.isMDXComponent=!0}}]);