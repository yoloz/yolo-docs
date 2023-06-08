"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[5410],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,c={unversionedId:"bigdata/hive\u7684JDBC",id:"bigdata/hive\u7684JDBC",title:"hive\u7684JDBC",description:"\u539f\u751f\u65b9\u5f0f",source:"@site/docs/bigdata/hive\u7684JDBC.md",sourceDirName:"bigdata",slug:"/bigdata/hive\u7684JDBC",permalink:"/docs/bigdata/hive\u7684JDBC",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/hive\u7684JDBC.md",tags:[],version:"current",lastUpdatedAt:1686217402,formattedLastUpdatedAt:"2023\u5e746\u67088\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"hive\u4f7f\u7528",permalink:"/docs/bigdata/hive\u4f7f\u7528"},next:{title:"kafka\u4f18\u5316\u914d\u7f6e",permalink:"/docs/bigdata/kafka\u4f18\u5316\u914d\u7f6e"}},p={},s=[{value:"\u539f\u751f\u65b9\u5f0f",id:"\u539f\u751f\u65b9\u5f0f",level:2},{value:"cdh \u7248",id:"cdh-\u7248",level:2},{value:"AuthMech=0",id:"authmech0",level:3},{value:"\u5916\u94fe",id:"\u5916\u94fe",level:2}],l={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u539f\u751f\u65b9\u5f0f"},"\u539f\u751f\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void hiveTest() {\n    String url = "jdbc:hive2://127.0.0.1:10000/default";\n    try {\n        Properties properties = new Properties();\n        Class.forName("org.apache.hive.jdbc.HiveDriver");\n        try (Connection conn = DriverManager.getConnection(url, properties);\n            Statement stmt = conn.createStatement();\n            ResultSet rs = stmt.executeQuery("show databases")) {\n            while (rs.next()) {\n                System.out.println(rs.getString(1));\n            }\n        }\n    } catch (Exception e) {\n        e.printStackTrace();\n    }\n}\n@Test\npublic void hiveKerberosTest() {\n    String url = "jdbc:hive2://127.0.0.1:10000/default;principal=hive/cdh1.com@CDHKDC.COM";\n    try {\n        Properties properties = new Properties();\n        org.apache.hadoop.conf.Configuration conf = new org.apache.hadoop.conf.Configuration();\n        conf.set("hadoop.security.authentication", "Kerberos");\n        UserGroupInformation.setConfiguration(conf);\n        UserGroupInformation.loginUserFromKeytab("wufang", "/tmp/wufang.keytab");\n        Class.forName("org.apache.hive.jdbc.HiveDriver");\n        try (Connection conn = DriverManager.getConnection(url, properties);\n                Statement stmt = conn.createStatement();\n                ResultSet rs = stmt.executeQuery("show databases")) {\n            while (rs.next()) {\n                System.out.println(rs.getString(1));\n            }\n        }\n    } catch (Exception e) {\n        e.printStackTrace();\n    }\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"url \u5982\u4e0b\uff1a")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"jdbc:hive2://127.0.0.1:10000/default"),(0,a.kt)("li",{parentName:"ul"},"jdbc:hive2://127.0.0.1:10000/default;principal=hive/",(0,a.kt)("a",{parentName:"li",href:"mailto:cdh1.com@CDHKDC.COM"},"cdh1.com@CDHKDC.COM")),(0,a.kt)("li",{parentName:"ul"},"jdbc:hive2://hdp1:2181,hdp2:2181,hdp3:2181/;serviceDiscoveryMode=zooKeeper;zooKeeperNamespace=hiveserver2")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"dependencies")),(0,a.kt)("p",{parentName:"admonition"},"commons-collections-3.2.2.jar",(0,a.kt)("br",{parentName:"p"}),"\n","commons-configuration-1.6.jar",(0,a.kt)("br",{parentName:"p"}),"\n","commons-lang-2.6.jar",(0,a.kt)("br",{parentName:"p"}),"\n","hadoop-auth-2.6.0-cdh5.8.3.jar",(0,a.kt)("br",{parentName:"p"}),"\n","hadoop-common-2.7.3.jar",(0,a.kt)("br",{parentName:"p"}),"\n","hive-exec-1.1.0-cdh5.8.3.jar",(0,a.kt)("br",{parentName:"p"}),"\n","hive-jdbc-1.1.0-cdh5.8.3.jar",(0,a.kt)("br",{parentName:"p"}),"\n","hive-metastore-1.1.0-cdh5.8.3.jar",(0,a.kt)("br",{parentName:"p"}),"\n","hive-serde-1.1.0-cdh5.8.3.jar",(0,a.kt)("br",{parentName:"p"}),"\n","hive-service-1.1.0-cdh5.8.3.jar",(0,a.kt)("br",{parentName:"p"}),"\n","httpclient-4.4.jar",(0,a.kt)("br",{parentName:"p"}),"\n","httpcore-4.4.jar",(0,a.kt)("br",{parentName:"p"}),"\n","libthrift-0.9.3.jar")),(0,a.kt)("h2",{id:"cdh-\u7248"},"cdh \u7248"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void cdhHiveTest() {\n        //principal: hive/cdh162@ZHDS.CO\n        //LogLevel,LogPath\u8bb0\u5f55\u8fde\u63a5\u65e5\u5fd7\uff0c\u7528\u4e8e\u6d4b\u8bd5\n        String url = "jdbc:hive2://192.168.124.162:10000/default;AuthMech=1;" +\n                "KrbRealm=ZHDS.CO;KrbHostFQDN=cdh162;" +\n                "KrbServiceName=hive;LogLevel=6;LogPath=/tmp/kblog";\n        //\u65e0\u9a8c\u8bc1\u65b9\u5f0f\uff1anosasl\n        url = "jdbc:hive2://192.168.124.236:10000/default;AuthMech=0;transportMode=binary;";\n        //\u7528\u6237\u540d\u5bc6\u7801\u65b9\u5f0f:none,custom\n        url = "jdbc:hive2://192.168.124.236:10000/default;AuthMech=3;UID=test;PWD=test;";\n    try {\n        Properties properties = new Properties();\n        // Class.forName("com.cloudera.hive.jdbc41.HS2Driver");\n        try (Connection conn = DriverManager.getConnection(url, properties);\n                Statement stmt = conn.createStatement();\n                ResultSet rs = stmt.executeQuery("show databases")) {\n            while (rs.next()) {\n                System.out.println(rs.getString(1));\n            }\n        }\n    } catch (Exception e) {\n        e.printStackTrace();\n    }\n}\n')),(0,a.kt)("h3",{id:"authmech0"},"AuthMech=0"),(0,a.kt)("p",null,"hiveserver1 \u6216\u8005 hiveserver2 \u4e2d hive-site.xml \u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"hive.server2.authentication=nosasl")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u670d\u52a1\u7aef",(0,a.kt)("inlineCode",{parentName:"p"},"hive.server2.authentication=NONE"),"\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"AuthMech=0"),"\u65b9\u5f0f\u8fde\u63a5(\u6b63\u786e\uff1a\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"AuthMech=3"),"\u65b9\u5f0f\uff0c\u7528\u6237\u5bc6\u7801\u968f\u4fbf\u586b\u5199\u4e0d\u9a8c\u8bc1)\uff1a"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u62a5\u9519")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-log"},"java.sql.SQLException: [Cloudera][HiveJDBCDriver](500593) Communication link failure. Failed to connect to server. Reason: Socket is closed by peer. OpenSession.\n...\nCaused by: com.cloudera.hiveserver2.support.exceptions.ErrorException: [Cloudera][HiveJDBCDriver](500593) Communication link failure. Failed to connect to server. Reason: Socket is closed by peer. OpenSession.\n...\nCaused by: com.cloudera.hive.jdbc42.internal.apache.thrift.transport.TTransportException: Socket is closed by peer.\n...\n\n")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef hive.log \u62a5\u9519")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-log"},"2023-03-22T08:37:45,840 ERROR [HiveServer2-Handler-Pool: Thread-39] server.TThreadPoolServer: Error occurred during processing of message.\njava.lang.RuntimeException: org.apache.thrift.transport.TTransportException: Invalid status -128\n...\nCaused by: org.apache.thrift.transport.TTransportException: Invalid status -128\n...\n")),(0,a.kt)("p",{parentName:"admonition"},"\u670d\u52a1\u7aef",(0,a.kt)("inlineCode",{parentName:"p"},"hive.server2.authentication=nosasl"),"\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"AuthMech=3"),"\u65b9\u5f0f\u8fde\u63a5(\u6b63\u786e\uff1a\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"AuthMech=0"),"\u65b9\u5f0f)\uff1a"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u62a5\u9519")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-log"},"java.sql.SQLException: [Cloudera][HiveJDBCDriver](500164) Error initialized or created transport for authentication: Socket is closed by peer..\n...\nCaused by: com.cloudera.hiveserver2.support.exceptions.GeneralException: [Cloudera][HiveJDBCDriver](500164) Error initialized or created transport for authentication: Socket is closed by peer..\n...\nCaused by: com.cloudera.hive.jdbc42.internal.apache.thrift.transport.TTransportException: Socket is closed by peer.\n...\n\n")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef hive.log \u62a5\u9519")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-log"},"2023-03-22T10:29:40,525 ERROR [HiveServer2-Handler-Pool: Thread-39] server.TThreadPoolServer: Thrift error occurred during processing of message.\norg.apache.thrift.protocol.TProtocolException: Missing version in readMessageBegin, old client?\n...\n"))),(0,a.kt)("h2",{id:"\u5916\u94fe"},"\u5916\u94fe"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cloudera.com/documentation/enterprise/latest/topics/hive_jdbc_odbc_driver_install.html#hive_installing_jdbc_odbc_drivers"},"Installing Cloudera JDBC and ODBC Drivers on Clients in CDH")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cloudera.com/documentation/other/connectors/hive-jdbc/latest.html"},"Cloudera JDBC latest Driver Documentation for Apache Hive")))}u.isMDXComponent=!0}}]);