"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[1701],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return t?n.createElement(k,l(l({ref:a},d),{},{components:t})):n.createElement(k,l({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6525:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const o={},l=void 0,i={unversionedId:"bigdata/CDH\u4f7f\u7528",id:"bigdata/CDH\u4f7f\u7528",title:"CDH\u4f7f\u7528",description:"\u5b89\u88c5",source:"@site/docs/bigdata/CDH\u4f7f\u7528.md",sourceDirName:"bigdata",slug:"/bigdata/CDH\u4f7f\u7528",permalink:"/docs/bigdata/CDH\u4f7f\u7528",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/CDH\u4f7f\u7528.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"About",permalink:"/docs/About"},next:{title:"elasticsearch",permalink:"/docs/bigdata/elasticsearch"}},s={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u8d44\u6e90\u76ee\u5f55",id:"\u8d44\u6e90\u76ee\u5f55",level:2},{value:"\u89d2\u8272\u8c03\u6574",id:"\u89d2\u8272\u8c03\u6574",level:2},{value:"\u914d\u7f6e 1 \u7ea7 TLS",id:"\u914d\u7f6e-1-\u7ea7-tls",level:2},{value:"Cloudera Management Service \u8282\u70b9\u8bc1\u4e66",id:"cloudera-management-service-\u8282\u70b9\u8bc1\u4e66",level:3},{value:"Cloudera Manager Admin Console \u914d\u7f6e TLS",id:"cloudera-manager-admin-console-\u914d\u7f6e-tls",level:3},{value:"Cloudera Manager Agents \u914d\u7f6e TLS",id:"cloudera-manager-agents-\u914d\u7f6e-tls",level:3},{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"\u65e0\u6cd5\u63a5\u6536 Agent \u53d1\u51fa\u7684\u68c0\u6d4b\u4fe1\u53f7",id:"\u65e0\u6cd5\u63a5\u6536-agent-\u53d1\u51fa\u7684\u68c0\u6d4b\u4fe1\u53f7",level:3},{value:"\u96c6\u7fa4\u8bbe\u7f6e\u4e2d Hive \u62a5\u9519",id:"\u96c6\u7fa4\u8bbe\u7f6e\u4e2d-hive-\u62a5\u9519",level:3},{value:"Canary \u6d4b\u8bd5\u65e0\u6cd5\u4e3a/tmp/.cloudera_health_monitoring_canary_files \u521b\u5efa\u7236\u76ee\u5f55",id:"canary-\u6d4b\u8bd5\u65e0\u6cd5\u4e3atmpcloudera_health_monitoring_canary_files-\u521b\u5efa\u7236\u76ee\u5f55",level:3},{value:"hdfs \u7684\u7b80\u5355\u64cd\u4f5c",id:"hdfs-\u7684\u7b80\u5355\u64cd\u4f5c",level:3},{value:"Error applying authorization policy on hive configuration",id:"error-applying-authorization-policy-on-hive-configuration",level:3},{value:"Namenode and SecondaryNamenode Have different heapsizes",id:"namenode-and-secondarynamenode-have-different-heapsizes",level:3}],d={toc:c};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u811a\u672c\u4e00\u952e\u5b89\u88c5\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wget https://archive.cloudera.com/cm6/6.3.1/cloudera-manager-installer.bin\n$ chmod u+x cloudera-manager-installer.bin\n$ sudo ./cloudera-manager-installer.bin\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"6.3.3 \u53ca\u4ee5\u4e0a requires authentication;"),(0,r.kt)("li",{parentName:"ul"},"\u4f1a\u5b89\u88c5 oracle_jdk\uff0c\u9700\u8981\u7f51\u7edc\u53ef\u8fbe\u6216\u8005\u4f7f\u7528\u4ee3\u7406 ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo proxychains ./cloudera-manager-installer.bin"),";"))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u9875\u9762\u7ee7\u7eed\u5b89\u88c5,\u5730\u5740:http://ip:7180 \u7528\u6237\u5bc6\u7801 admin/admin")),(0,r.kt)("p",null,"\u5728\u63d0\u4f9b SSH \u767b\u5f55\u51ed\u636e\u8fd9\u4e00\u6b65\u9aa4\u4e2d\u9700\u8981 sudo \u65e0\u5bc6\u7801\uff0c\u53ef\u5982\u4e0b\u64cd\u4f5c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo groupadd cloudera\nsudo useradd -m cloudera -g cloudera\nsudo passwd cloudera\nsudo vim /etc/sudoers\n#\u6dfb\u52a0\u3000cloudera ALL =(ALL) NOPASSWD: ALL\n")),(0,r.kt)("p",null,"\u7136\u540e\u9009\u62e9\u7528\u6237\u586b\u5199 cloudera,\u4e0b\u9762\u7684\u5bc6\u7801\u5373\u521a\u624d passed \u8bbe\u7f6e\u7684"),(0,r.kt)("h2",{id:"\u8d44\u6e90\u76ee\u5f55"},"\u8d44\u6e90\u76ee\u5f55"),(0,r.kt)("p",null,"\u65e5\u5fd7: /var/log/cloudera-scm-x\n\u914d\u7f6e: /etc/cloudera-scm-x"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u79fb\u52a8\u673a\u5668\uff0c\u66f4\u6362\u673a\u5668\u5730\u5740\u540e\uff0c\u542f\u52a8 CDH \u767b\u9646\u9875\u9762\uff0cCloudera Management Service \u8fd0\u884c\u4e0d\u6b63\u5e38\uff0c\u91cd\u542f\u540e\u5931\u8d25(5 \u4e2a\u5b9e\u4f8b\u62a5\u9519\u8fde\u63a5\u8d85\u65f6)\uff0c\u67e5\u770b\u65e5\u5fd7/var/log/cloudera-scm-agent/cloudera-scm-agent.log \u53ef\u4ee5\u67e5\u770b\u8fde\u63a5 cloudera server \u4ecd\u662f\u539f\u5148\u7684\u5730\u5740\u3002\u4fee\u6539\u914d\u7f6e\u6587\u4ef6/etc/cloudera-scm-agent/config.ini \u7684 server_host,\u91cd\u542f",(0,r.kt)("inlineCode",{parentName:"p"},"sudo service cloudera-scm-agent restart")),(0,r.kt)("p",{parentName:"admonition"},"\u6b63\u5e38\u540e\u4f1a\u6709\u5404\u7ec4\u4ef6\u914d\u7f6e\u8fc7\u671f\u544a\u8b66(\u5730\u5740\u53d8\u66f4)\uff0c\u91cd\u542f\u7ec4\u4ef6\u5e94\u7528\u65b0\u914d\u7f6e\u5373\u53ef\u3002")),(0,r.kt)("h2",{id:"\u89d2\u8272\u8c03\u6574"},"\u89d2\u8272\u8c03\u6574"),(0,r.kt)("p",null,"\u5728 Cloudera Manager \u5b89\u88c5 CDH \u7684\u8fc7\u7a0b\u4e2d\uff0c\u6700\u521d\u7684\u4e3b\u673a\u89d2\u8272\u914d\u7f6e\u4e0d\u591f\u6070\u5f53\uff0c\u90a3\u4e4b\u540e\u5728\u4f7f\u7528 CDH \u7684\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u91cd\u65b0\u914d\u7f6e\u4e3b\u673a\u89d2\u8272"),(0,r.kt)("p",null,"\u67e5\u9605\u5b98\u65b9\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://docs.cloudera.com/documentation/enterprise/5-7-x/topics/cm_mc_role_instances.html#cmug_topic_5_2__section_nsf_xnw_ym"},"Role Instances | 5.7.x | Cloudera Documentation")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9996\u5148\u5728\u4e3b\u9875\u70b9\u51fb\u5404\u7ec4\u4ef6(\u5982 Impala);"),(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb Impala \u7684\u5b9e\u4f8b\u5bfc\u822a\uff0c\u53ef\u4ee5\u770b\u5230\u5404\u8282\u70b9\u6240\u5b89\u88c5\u7684\u670d\u52a1\uff1b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9009\u62e9\u670d\u52a1\uff0c\u5148\u505c\u6b62\uff0c\u7136\u540e\u5220\u9664\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u9009\u62e9\u6dfb\u52a0\u89d2\u8272\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u7ed9\u8282\u70b9\u5b89\u88c5\u5177\u4f53\u670d\u52a1\uff0c\u7136\u540e\u542f\u52a8\uff1b")),(0,r.kt)("h2",{id:"\u914d\u7f6e-1-\u7ea7-tls"},"\u914d\u7f6e 1 \u7ea7 TLS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5e38\u89c4\u8b66\u544a\uff1a \u4e3a CDH \u7fa4\u96c6\u542f\u7528 Kerberos \u65f6\uff0cCloudera \u5efa\u8bae\u81f3\u5c11\u662f 1 \u7ea7 TLS\u3002")),(0,r.kt)("p",null,"\u5b98\u7f51\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://docs.cloudera.com/documentation/enterprise/5-2-x/topics/cm_sg_config_tls_security.html"},"Configuring TLS Security for Cloudera Manager")),(0,r.kt)("p",null,"\u66f4\u5177\u4f53\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_43215250/article/details/83307894"},"Cloudera Manager \u914d\u7f6e TLS \u52a0\u5bc6")),(0,r.kt)("p",null,"\u751f\u6210\u8bc1\u4e66\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u516c\u5171 CA \u7b7e\u540d\u8bc1\u4e66\uff0c\u6b64\u7c7b\u8bc1\u4e66\u7531\u516c\u5171\u8bc1\u4e66\u9881\u53d1\u673a\u6784\uff08CA\uff09\uff08\u5982 Symantec \u6216 Comodo\uff09\u7b7e\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u90e8 CA \u7b7e\u540d\u8bc1\u4e66\uff0c\u6b64\u7c7b\u8bc1\u4e66\u7531\u60a8\u7ec4\u7ec7\u7684\u5185\u90e8 CA \u7b7e\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u7b7e\u540d\u8bc1\u4e66\uff0c\u81ea\u7b7e\u540d\u8bc1\u4e66\u53ef\u7528\u4e8e\u975e\u751f\u4ea7\u90e8\u7f72\uff0c\u4f8b\u5982\u6982\u5ff5\u9a8c\u8bc1\u8bbe\u7f6e\u3002")),(0,r.kt)("p",null,"\u4e0b\u9762\u4f7f\u7528\u81ea\u7b7e\u540d\u8bc1\u4e66\u8fdb\u884c TLS(\u6d4b\u8bd5\u73af\u5883)"),(0,r.kt)("h3",{id:"cloudera-management-service-\u8282\u70b9\u8bc1\u4e66"},"Cloudera Management Service \u8282\u70b9\u8bc1\u4e66"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"JDK \u73af\u5883\u51c6\u5907\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ export JAVA_HOME=/usr/java/jdk1.7.0_67-cloudera\n$ export PATH=$JAVA_HOME/bin:$PATH\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u8bc1\u4e66\u7684\u76ee\u5f55")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo mkdir -p /opt/cloudera/security/jks/\n$ sudo chmod 777 /opt/cloudera/security/jks/\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u751f\u6210\u5bc6\u94a5\u548c\u81ea\u7b7e\u540d\u8bc1\u4e66")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#keypass must be set to the same password value as storepass for Cloudera Manager to be able to access the keystore\n#keypass or storepass must be changeit, keystore will import to jdk certs(this pass is default changeit)\n#CN\u8fd9\u4e48\u5b9a\u4e49\u662f\u56e0\u4e3acloudera service \u5185\u90e8\u4f1a\u6709\uff1ahttps://hostname:7183 \u8bf7\u6c42\n$ keytool -genkeypair -alias cdh -keyalg RSA -keysize 2048 -keystore /opt/cloudera/security/jks/cdh-keystore.jks -dname  "CN=$(hostname -f),OU=xx,O=xx,L=xx,ST=xx,C=CN"\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"keytool xxxx -ext san=dns:$(hostname -f)"),":\nSAN(Subject Alternative Name) \u662f SSL \u6807\u51c6 x509 \u4e2d\u5b9a\u4e49\u7684\u4e00\u4e2a\u6269\u5c55\u3002\u4f7f\u7528\u4e86 SAN \u5b57\u6bb5\u7684 SSL \u8bc1\u4e66\uff0c\u53ef\u4ee5\u6269\u5c55\u6b64\u8bc1\u4e66\u652f\u6301\u7684\u57df\u540d\uff0c\u4f7f\u5f97\u4e00\u4e2a\u8bc1\u4e66\u53ef\u4ee5\u652f\u6301\u591a\u4e2a\u4e0d\u540c\u57df\u540d\u7684\u89e3\u6790\u3002")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u590d\u5236\u9ed8\u8ba4 Java \u4fe1\u4efb\u5e93\uff08cacerts \u4e2d\uff09\u5230\u5907\u7528\u7cfb\u7edf\u4fe1\u4efb\u5e93\uff08jssecacerts\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo cp $JAVA_HOME/jre/lib/security/cacerts $JAVA_HOME/jre/lib/security/jssecacerts\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u4ece\u5bc6\u94a5\u5e93\u4e2d\u5bfc\u51fa\u8bc1\u4e66")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#keystore password\u8f93\u5165\u7b7e\u540d\u8bc1\u4e66\u7684keypass\n$ keytool -export -alias cdh -keystore /opt/cloudera/security/jks/cdh-keystore.jks -rfc -file /opt/cloudera/security/jks/cdh.cer\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"\u5c06\u516c\u94a5\u5bfc\u5165 Java \u4fe1\u4efb\u5e93(jssecacerts)")),(0,r.kt)("p",null,"\u8fd9\u53f0\u673a\u5668\u4e0a\u7528 Java \u8fd0\u884c\u7684\u4efb\u4f55\u8fdb\u7a0b\u90fd\u4f1a\u4fe1\u4efb\u8be5\u5bc6\u94a5,Java \u4fe1\u4efb\u5e93\u7684\u9ed8\u8ba4\u5bc6\u7801\u662f changeit(\u6b65\u9aa4 2 \u4e2d\u4e3a\u5bc6\u94a5\u5e93\u521b\u5efa\u7684\u5bc6\u7801\u8bbe\u7f6e\u4e3a changeit)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo chmod 777 $JAVA_HOME/jre/lib/security/jssecacerts\n#keystore password changeit\n$ keytool -import -alias cdh -file /opt/cloudera/security/jks/cdh.cer -keystore $JAVA_HOME/jre/lib/security/jssecacerts\n$ sudo chmod 644 $JAVA_HOME/jre/lib/security/jssecacerts\n")),(0,r.kt)("h3",{id:"cloudera-manager-admin-console-\u914d\u7f6e-tls"},"Cloudera Manager Admin Console \u914d\u7f6e TLS"),(0,r.kt)("p",null,"\u767b\u5f55 Cloudera Manager Admin Console\uff0c \u9009\u62e9\u7ba1\u7406 > \u8bbe\u7f6e > \u5b89\u5168\u6027"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5bf9 Admin Console \u4f7f\u7528 TLS \u52a0\u5bc6(\u52fe\u9009)\uff1b"),(0,r.kt)("li",{parentName:"ol"},"Cloudera Manager TLS/SSL \u670d\u52a1\u5668 JKS Keystore \u6587\u4ef6\u4f4d\u7f6e\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"/opt/cloudera/security/jks/cdh-keystore.jks"),"\uff1b"),(0,r.kt)("li",{parentName:"ol"},"Cloudera Manager TLS/SSL \u670d\u52a1\u5668 JKS Keystore \u6587\u4ef6\u5bc6\u7801\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"changeit"),";"),(0,r.kt)("li",{parentName:"ol"},"\u4fdd\u5b58\u66f4\u6539;")),(0,r.kt)("p",null,"\u91cd\u542f Cloudera Manager",(0,r.kt)("inlineCode",{parentName:"p"},"sudo service cloudera-scm-server restart")),(0,r.kt)("p",null,"\u91cd\u542f Cloudera Management Service \u670d\u52a1:\u767b\u5f55 Cloudera Manager Admin Console(\u4f1a\u81ea\u52a8\u4ee5 https \u8df3\u5230 7183 \u7aef\u53e3),\u8fdb\u5165 Cloudera Management Service > \u64cd\u4f5c > \u91cd\u65b0\u542f\u52a8"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c Host Monitor \u548c Service Monitor \u7b49\u89d2\u8272\u65e0\u6cd5\u8fde\u63a5\u5230 Cloudera Manager Server\uff0c\u53ef\u80fd\u9700\u8981\u624b\u52a8\u6307\u5b9a SSL Truststore \u5c5e\u6027\uff1a"),(0,r.kt)("p",{parentName:"admonition"},"\u767b\u5f55 Cloudera Manager Admin Console \u5e76\u8f6c\u5230 Cloudera Management Service \u670d\u52a1\uff0c\u914d\u7f6e > \u8303\u56f4 > Cloudera Management Service(\u670d\u52a1\u8303\u56f4)\uff0c\u7136\u540e\u9009\u62e9 \u7c7b\u522b > \u5b89\u5168\u6027"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"TLS/SSL \u5ba2\u6237\u7aef Truststore \u6587\u4ef6\u4f4d\u7f6e\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/java/jdk1.7.0_67-cloudera/jre/lib/security/jssecacerts"),";"),(0,r.kt)("li",{parentName:"ol"},"Cloudera Manager Server TLS/SSL \u8bc1\u4e66\u4fe1\u4efb\u5b58\u50a8\u5e93\u5bc6\u7801\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"changeit"),";"),(0,r.kt)("li",{parentName:"ol"},"\u4fdd\u5b58\u66f4\u6539;"))),(0,r.kt)("h3",{id:"cloudera-manager-agents-\u914d\u7f6e-tls"},"Cloudera Manager Agents \u914d\u7f6e TLS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u767b\u5f55 Cloudera Manager Admin Console > \u7ba1\u7406 > \u8bbe\u7f6e > \u5b89\u5168\u6027\uff0c\u52fe\u9009\u4e3a\u4ee3\u7406\u4f7f\u7528 TLS \u52a0\u5bc6\uff0c\u5e76\u4fdd\u5b58;"),(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539\u5404 agent \u7684\u914d\u7f6e\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/cloudera-scm-agent/config.ini"),"\uff0c\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"use_tls"),"\u914d\u7f6e\u4e3a 1(\u5305\u62ec service \u8fd9\u53f0\u8282\u70b9);"),(0,r.kt)("li",{parentName:"ol"},"service \u8282\u70b9\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"li"},"sudo service cloudera-scm-server restart"),";"),(0,r.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u8282\u70b9\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"li"},"sudo service cloudera-scm-agent restart"),";")),(0,r.kt)("h2",{id:"\u95ee\u9898"},"\u95ee\u9898"),(0,r.kt)("h3",{id:"\u65e0\u6cd5\u63a5\u6536-agent-\u53d1\u51fa\u7684\u68c0\u6d4b\u4fe1\u53f7"},"\u65e0\u6cd5\u63a5\u6536 Agent \u53d1\u51fa\u7684\u68c0\u6d4b\u4fe1\u53f7"),(0,r.kt)("p",null,"\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"sudo service cloudera-scm-agent status"),"\u53ef\u4ee5\u53d1\u73b0\u63d0\u793a\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},'Traceback (most recent call last):\nMay 22 07:05:06 cdh_183 cm[11441]:   File "/opt/cloudera/cm-agent/lib/python2.7/site-packages/cmf/main.py", line 105, in main_impl\nMay 22 07:05:06 cdh_183 cm[11441]:     ag.configure_service()\nMay 22 07:05:06 cdh_183 cm[11441]:   File "/opt/cloudera/cm-agent/lib/python2.7/site-packages/cmf/agent.py", line 608, in configure_service\nMay 22 07:05:06 cdh_183 cm[11441]:     raise Exception("Hostname is invalid; it contains an underscore character.")\nMay 22 07:05:06 cdh_183 cm[11441]: Exception: Hostname is invalid; it contains an underscore character.\n')),(0,r.kt)("p",null,"\u539f\u56e0\uff1a"),(0,r.kt)("p",null,"The Internet standards (Request for Comments) for protocols mandate that component hostname labels may contain only the ASCII letters 'a' through 'z' (in a case-insensitive manner), the digits '0' through '9', and the hyphen ('-'). The original specification of hostnames in RFC 952, mandated that labels could not start with a digit or with a hyphen, and must not end with a hyphen. However, a subsequent specification (RFC 1123) permitted hostname labels to start with digits. No other symbols, punctuation characters, or white space are permitted."),(0,r.kt)("p",null,"\u914d\u7f6e\u4e2d\u7684 hostname \u540d\u79f0\u4e0d\u5408\u89c4\u5219\uff1ahostnames(cdh","*","183) with ","*"," is illegal"),(0,r.kt)("h3",{id:"\u96c6\u7fa4\u8bbe\u7f6e\u4e2d-hive-\u62a5\u9519"},"\u96c6\u7fa4\u8bbe\u7f6e\u4e2d Hive \u62a5\u9519"),(0,r.kt)("p",null,"\u6570\u636e\u5e93\u8bbe\u7f6e\u4e2d\u9009\u62e9\u9ed8\u8ba4\u7684\u5d4c\u5165\u5f0f postgresql \u5e93\uff0c\u6267\u884c\u5230\u547d\u4ee4\u8be6\u7ec6\u4fe1\u606f\u6b65\u9aa4\u62a5\u9519\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"Run a set of services for the first time\n\u4ec5\u5b8c\u6210 2/3 \u4e2a\u6b65\u9aa4\u3002\u9996\u4e2a\u5931\u8d25\uff1a\u547d\u4ee4 (Create Hive Metastore database tables (53)) \u5df2\u5931\u8d25\n\u4f9d\u6b21\u8fd0\u884c 8 \u6b65\u9aa4\n\u4ec5\u5b8c\u6210 2/3 \u4e2a\u6b65\u9aa4\u3002\u9996\u4e2a\u5931\u8d25\uff1a\u547d\u4ee4 (Create Hive Metastore database tables (53)) \u5df2\u5931\u8d25\n\u5e76\u884c\u8fd0\u884c 3 \u6b65\u9aa4\n\u4ec5\u5b8c\u6210 2/3 \u4e2a\u6b65\u9aa4\u3002\u9996\u4e2a\u5931\u8d25\uff1a\u547d\u4ee4 (Create Hive Metastore database tables (53)) \u5df2\u5931\u8d25\n\u6b63\u5728\u521b\u5efa Hive Metastore \u6570\u636e\u5e93\u8868\n\u547d\u4ee4 (Create Hive Metastore database tables (53)) \u5df2\u5931\u8d25\nHive Metastore Server (cdh183)\n\u521b\u5efa Hive Metastore \u6570\u636e\u5e93\u8868\nCommand aborted because of exception: Command timed-out after 150 seconds\nHive Metastore Server (cdh183)\n")),(0,r.kt)("p",null,"\u7f3a\u5c11\u9a71\u52a8\u5305\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"sudo cp CDH-6.3.2-1.cdh6.3.2.p0.1605554/jars/postgresql-42.2.5.jar CDH-6.3.2-1.cdh6.3.2.p0.1605554/lib/hive/lib/"),"\u540e\u91cd\u8bd5\u5373\u53ef\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u865a\u62df\u673a\u91cd\u542f\u540e\u9ed8\u8ba4 cloudera manager \u4f1a\u81ea\u542f\uff0c\u9875\u9762\u8bbf\u95ee ip:7180 \u5219\u9700\u7b49\u5f85\u4e00\u4f1a")),(0,r.kt)("h3",{id:"canary-\u6d4b\u8bd5\u65e0\u6cd5\u4e3atmpcloudera_health_monitoring_canary_files-\u521b\u5efa\u7236\u76ee\u5f55"},"Canary \u6d4b\u8bd5\u65e0\u6cd5\u4e3a/tmp/.cloudera_health_monitoring_canary_files \u521b\u5efa\u7236\u76ee\u5f55"),(0,r.kt)("p",null,"\u4e00\u822c\u8fc7\u4e00\u4f1a\u513f\u5c31\u597d\u4e86\uff0c\u5982\u679c\u6ca1\u597d\u53ef\u4ee5\u624b\u52a8\u521b\u5efa\uff0c\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"sudo -u hdfs hdfs dfs -mkdir /tmp"),"\u5373\u53ef\uff0c\u7a0d\u540e\u9875\u9762\u544a\u8b66\u5c31\u4f1a\u6d88\u5931"),(0,r.kt)("h3",{id:"hdfs-\u7684\u7b80\u5355\u64cd\u4f5c"},"hdfs \u7684\u7b80\u5355\u64cd\u4f5c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b\u6839\u76ee\u5f55\uff1asudo -u hdfs hdfs dfs -ls /"),(0,r.kt)("li",{parentName:"ul"},"\u4fee\u6539 hdfs \u7684\u6839\u76ee\u5f55\u7684\u6743\u9650\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"hdfs dfs -chmod 777 /"))),(0,r.kt)("p",null,"\u62a5\u9519",(0,r.kt)("strong",{parentName:"p"},"chmod: changing permissions of '/': Permission denied. user=root is not the owner of inode=/")," \uff1a\u9ed8\u8ba4\u7528\u6237\u662f hdfs\uff0c\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"sudo -u hdfs hdfs dfs -chmod 777 /"),"\u5373\u53ef"),(0,r.kt)("h3",{id:"error-applying-authorization-policy-on-hive-configuration"},"Error applying authorization policy on hive configuration"),(0,r.kt)("p",null,'Error applying authorization policy on hive configuration: org.apache.hadoop.security.AccessControlException: Permission denied: user=hive, access=WRITE, inode="/tmp":hdfs:supergroup:drwxr-xr-x'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo -u hdfs hdfs dfs -chmod a+rwx /tmp"),"\u8fd9\u6837/tmp \u9664\u4e86\u6240\u6709\u8005\u6709\u8bfb\u5199\u6267\u884c\u6743\u9650\u5916\uff0c\u5176\u4ed6\u7528\u6237\u4e5f\u6709\u8bfb\u5199\u6267\u884c\u6743\u9650"),(0,r.kt)("h3",{id:"namenode-and-secondarynamenode-have-different-heapsizes"},"Namenode and SecondaryNamenode Have different heapsizes"),(0,r.kt)("p",null,"To change the heap size for NameNode and Secondary NameNode:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"open the HDFS service in Cloudera Manager"),(0,r.kt)("li",{parentName:"ol"},'select "Configuration" from the menu'),(0,r.kt)("li",{parentName:"ol"},'enter "Java Heap Size " in the search field\uff0cHere you can configure heap size for NameNode and Secondary NameNode.')))}u.isMDXComponent=!0}}]);