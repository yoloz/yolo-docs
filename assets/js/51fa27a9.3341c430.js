"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[5649],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(a),h=i,k=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3129:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={},l=void 0,o={unversionedId:"bigdata/kerberos\u5e38\u89c1\u95ee\u9898",id:"bigdata/kerberos\u5e38\u89c1\u95ee\u9898",title:"kerberos\u5e38\u89c1\u95ee\u9898",description:"kinit: Cannot contact any KDC...",source:"@site/docs/bigdata/kerberos\u5e38\u89c1\u95ee\u9898.md",sourceDirName:"bigdata",slug:"/bigdata/kerberos\u5e38\u89c1\u95ee\u9898",permalink:"/docs/bigdata/kerberos\u5e38\u89c1\u95ee\u9898",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/kerberos\u5e38\u89c1\u95ee\u9898.md",tags:[],version:"current",lastUpdatedAt:1686370023,formattedLastUpdatedAt:"2023\u5e746\u670810\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"kerberos\u4f7f\u7528",permalink:"/docs/bigdata/kerberos\u4f7f\u7528"},next:{title:"memcache\u5b66\u4e60",permalink:"/docs/bigdata/memcache\u5b66\u4e60"}},c={},s=[{value:"kinit: Cannot contact any KDC...",id:"kinit-cannot-contact-any-kdc",level:2},{value:"kinit: Password incorrect ...",id:"kinit-password-incorrect-",level:2},{value:"Peer indicated failure: Unsupported mechanism ...",id:"peer-indicated-failure-unsupported-mechanism-",level:2},{value:"Server not found in Kerberos database",id:"server-not-found-in-kerberos-database",level:2},{value:"Peer indicated failure: GSS initiate failed",id:"peer-indicated-failure-gss-initiate-failed",level:2},{value:"Keytab contains no suitable keys for...",id:"keytab-contains-no-suitable-keys-for",level:2},{value:"javax.security.auth.login.LoginException: Checksum failed",id:"javaxsecurityauthloginloginexception-checksum-failed",level:2},{value:"Failure unspecified at GSS-API level...",id:"failure-unspecified-at-gss-api-level",level:2},{value:"GSS initiate failed-No valid credentials provided...",id:"gss-initiate-failed-no-valid-credentials-provided",level:2},{value:"Unable to obtain Principal Name for authentication",id:"unable-to-obtain-principal-name-for-authentication",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"kinit-cannot-contact-any-kdc"},"kinit: Cannot contact any KDC..."),(0,i.kt)("p",null,"kinit: Cannot contact any KDC for realm 'ZHDS.CO' while getting initial credentials"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u548c KDC \u4e4b\u95f4\u7684\u7f51\u7edc\u95ee\u9898"),(0,i.kt)("li",{parentName:"ul"},"krb5.conf \u4e2d\u7684 KDC \u8be6\u7ec6\u4fe1\u606f\u4e0d\u6b63\u786e"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u672a\u542f\u52a8")),(0,i.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"$ KRB5_TRACE=/dev/stderr kinit -kt test.keytab test"),"\u67e5\u770b\u5177\u4f53\u8fde\u63a5\u8fc7\u7a0b;"),(0,i.kt)("h2",{id:"kinit-password-incorrect-"},"kinit: Password incorrect ..."),(0,i.kt)("p",null,"kinit: Password incorrect while getting initial credentials"),(0,i.kt)("p",null,"kdc \u4e0a\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"ktadd -k user.keytab user"),"\u751f\u6210 keytab \u6587\u4ef6\u540e\uff0c\u5728\u7ec8\u7aef\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"kinit -kt test.keytab test"),"\u6ca1\u6709\u95ee\u9898\uff0c\u4f46\u662f\u76f4\u63a5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"kinit test"),"\u4f1a\u62a5\u9519\u5bc6\u7801\u4e0d\u5bf9(\u5982\u4e0a)\u3002"),(0,i.kt)("p",null,"\u539f\u56e0\uff1a\u751f\u6210\u79d8\u94a5\u6587\u4ef6\u65f6\uff0c\u5bc6\u7801\u53ef\u80fd\u4f1a\u8fdb\u884c\u6539\u53d8\uff0c\u89e3\u51b3\u529e\u6cd5\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"ktadd -k user.keytab -norandkey user")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u751f\u6210\u79d8\u94a5 keytab \u6587\u4ef6\u65f6\uff0c\u6dfb\u52a0\u53c2\u6570-norandkey")),(0,i.kt)("h2",{id:"peer-indicated-failure-unsupported-mechanism-"},"Peer indicated failure: Unsupported mechanism ..."),(0,i.kt)("p",null,"Peer indicated failure: Unsupported mechanism type PLAIN (state=08S01,code=0)"),(0,i.kt)("p",null,"\u76f4\u63a5\u547d\u4ee4\u884c\u8fde\u63a5\u542f\u7528\u4e86 kerberos \u7684 hive \u5bfc\u81f4(\u672a\u643a\u5e26 principal):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},'[zhds@cdh162 ~]$  /opt/cloudera/parcels/CDH-5.12.0-1.cdh5.12.0.p0.29/bin/beeline -u "jdbc:hive2://192.168.124.162:10000/"\nscan complete in 24ms\nConnecting to jdbc:hive2://192.168.124.162:10000/\nUnknown HS2 problem when communicating with Thrift server.\nError: Could not open client transport with JDBC Uri: jdbc:hive2://192.168.124.162:10000/: Peer indicated failure: Unsupported mechanism type PLAIN (state=08S01,code=0)\nBeeline version 1.1.0-cdh5.12.0 by Apache Hive\nbeeline>\n')),(0,i.kt)("h2",{id:"server-not-found-in-kerberos-database"},"Server not found in Kerberos database"),(0,i.kt)("p",null,"\u5728 kdc \u91cc\u9762\u521b\u5efa\u4e00\u4e2a principal(",(0,i.kt)("a",{parentName:"p",href:"mailto:test@ZHDS.CO"},"test@ZHDS.CO"),"),\u7136\u540e\u5bfc\u51fa\u5176 keytab \u6587\u4ef6\uff0cjdbc \u8fde\u63a5 hive \u62a5\u9519\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"javax.security.sasl.SaslException: GSS initiate failed\n....\nCaused by: org.ietf.jgss.GSSException: No valid credentials provided (Mechanism level: Server not found in Kerberos database (7) - UNKNOWN_SERVER)\n....\nCaused by: sun.security.krb5.KrbException: Server not found in Kerberos database (7) - UNKNOWN_SERVER\n....\nCaused by: sun.security.krb5.Asn1Exception: Identifier doesn't match expected value (906)\n")),(0,i.kt)("p",null,"jdbc(cloudera hive jar) \u8fde\u63a5\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},' String url = "jdbc:hive2://192.168.124.162:10000/default;AuthMech=1;" +\n                "KrbRealm=ZHDS.CO;KrbHostFQDN=cdh160;" +\n                "KrbServiceName=hive;LogLevel=6;LogPath=/var/log/kblog";\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"LogLevel \u548c LogPath:\u7528\u4e8e\u8f93\u51fa\u8fde\u63a5 trace \u4fe1\u606f(\u6d4b\u8bd5)\uff1b")),(0,i.kt)("p",null,"\u4ee5\u4e0a url \u4e2d\u4fe1\u606f\u62fc\u51fa\u7684 principal",(0,i.kt)("inlineCode",{parentName:"p"},"hive/cdh160@ZHDS.CO"),"\uff0c\u5b9e\u9645 KDC \u53ea\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"hive/cdh161@ZHDS.CO,hive/cdh162@ZHDS.CO"),"\u4e14\u53ea\u6709 cdh162 \u5f00\u542f\u4e86 10000 \u7aef\u53e3\uff0c\u4fee\u6539 url \u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},' String url = "jdbc:hive2://192.168.124.162:10000/default;AuthMech=1;" +\n                "KrbRealm=ZHDS.CO;KrbHostFQDN=cdh162;" +\n                "KrbServiceName=hive;LogLevel=6;LogPath=/var/log/kblog";\n')),(0,i.kt)("p",null,"\u62a5\u9519\uff1aUnable to connect to server: Peer indicated failure: GSS initiate failed(\u89c1\u4e0b\u6587\uff0ckeytab \u4e0d\u5bf9)"),(0,i.kt)("h2",{id:"peer-indicated-failure-gss-initiate-failed"},"Peer indicated failure: GSS initiate failed"),(0,i.kt)("p",null,"\u4e0a\u8ff0\u968f\u610f\u5bfc\u51fa\u548c hive \u65e0\u5173\u7684",(0,i.kt)("a",{parentName:"p",href:"mailto:test@ZHDS.CO"},"test@ZHDS.CO"),",\u6b64\u65f6\u901a\u8fc7\u4ece KDC \u4e2d\u5bfc\u51fa hive \u7684 keytab"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#kdc\u5bfc\u51fa\n$ kadmin: ktadd -k /tmp/testHive.keytab -glob hive/cdh162\n#162\u767b\u9646\n$ kinit -kt testHive.keytab hive/cdh162\n#\u67e5\u770b\u767b\u9646\u7ed3\u679c\n$ klist\n")),(0,i.kt)("p",null,"\u5e76\u767b\u9646:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},'[zhds@cdh162 ~]$  /opt/cloudera/parcels/CDH-5.12.0-1.cdh5.12.0.p0.29/bin/beeline -u "jdbc:hive2://192.168.124.162:10000/;principal=hive/cdh162@ZHDS.CO"\nscan complete in 2ms\nConnecting to jdbc:hive2://192.168.124.162:10000/;principal=hive/cdh162@ZHDS.CO\nUnknown HS2 problem when communicating with Thrift server.\nError: Could not open client transport with JDBC Uri: jdbc:hive2://192.168.124.162:10000/;principal=hive/cdh162@ZHDS.CO: Peer indicated failure: GSS initiate failed (state=08S01,code=0)\nBeeline version 1.1.0-cdh5.12.0 by Apache Hive\nbeeline>\n')),(0,i.kt)("p",null,"\u62a5\u9519\uff1aPeer indicated failure: GSS initiate failed\u3002"),(0,i.kt)("p",null,"\u95ee\u9898\u51fa\u5728 keytab \u4e0a\uff0c\u5176\u4e00\u968f\u4fbf\u4ece KDC \u91cc\u5bfc\u51fa\u4e00\u4e2a principal(",(0,i.kt)("a",{parentName:"p",href:"mailto:test@ZHDS.CO"},"test@ZHDS.CO"),")\u4e0e\u8fde\u63a5\u7684 hive \u6ca1\u6709\u5173\u7cfb\uff0c\u5176\u4e8c\u5bfc\u51fa hive \u7684 keytab \u4e0d\u5bf9(\u548c agent \u7684\u76f8\u6bd4\u7f3a\u5c11 http \u4e14\u5bfc\u81f4 key \u7248\u672c\u53f7\u589e\u52a0\uff0c\u8fdb\u800c\u5f15\u8d77\u96c6\u7fa4\u8fde\u63a5\u4e0d\u7545)\u3002\u4ece hive \u8282\u70b9\u4e0a\u641c\u7d22 cloudera-scm-agent \u4f7f\u7528\u7684 keytab \u6587\u4ef6\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[zhds@cdh162 ~]$ sudo find / -name hive.keytab\n/var/run/cloudera-scm-agent/process/885-hive-HIVESERVER2/hive.keytab\n#...more\n[zhds@cdh162 ~]$ sudo klist -kt /var/run/cloudera-scm-agent/process/885-hive-HIVESERVER2/hive.keytab\nKeytab name: FILE:/var/run/cloudera-scm-agent/process/885-hive-HIVESERVER2/hive.keytab\nKVNO Timestamp         Principal\n---- ----------------- --------------------------------------------------------\n   5 02/04/21 16:43:44 hive/cdh162@ZHDS.CO\n   ......\n   5 02/04/21 16:43:44 HTTP/cdh162@ZHDS.CO\n\n[zhds@cdh162 ~]$ klist -kt testHive.keytab\nKeytab name: FILE:testHive.keytab\nKVNO Timestamp         Principal\n---- ----------------- --------------------------------------------------------\n   6 03/20/23 14:11:59 hive/cdh162@ZHDS.CO\n   ......\n   7 03/20/23 14:12:00 hive/cdh162@ZHDS.CO\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u7f3a\u5c11 HTTP\uff1b"),(0,i.kt)("li",{parentName:"ul"},"key \u7684\u7248\u672c(KVNO)\u589e\u52a0\u4e86"))),(0,i.kt)("p",null,"\u76f4\u63a5\u4f7f\u7528\u96c6\u7fa4\u91cc\u7684 keytab \u5373\u53ef\u3002"),(0,i.kt)("h2",{id:"keytab-contains-no-suitable-keys-for"},"Keytab contains no suitable keys for..."),(0,i.kt)("p",null,"\u76f4\u63a5\u62ff CDH \u96c6\u7fa4\u91cc\u7684 keytab \u4f7f\u7528,\u62a5\u9519:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ klist -ke hive.keytab\nKeytab name: FILE:hive.keytab\nKVNO Principal\n---- --------------------------------------------------------------------------\n   8 hive/cdh162@ZHDS.CO (aes256-cts-hmac-sha1-96)\n   8 hive/cdh162@ZHDS.CO (aes128-cts-hmac-sha1-96)\n   8 hive/cdh162@ZHDS.CO (DEPRECATED:des3-cbc-sha1)\n   8 hive/cdh162@ZHDS.CO (DEPRECATED:arcfour-hmac)\n   8 hive/cdh162@ZHDS.CO (DEPRECATED:des-hmac-sha1)\n   8 hive/cdh162@ZHDS.CO (DEPRECATED:des-cbc-md5)\n   5 HTTP/cdh162@ZHDS.CO (aes256-cts-hmac-sha1-96)\n   5 HTTP/cdh162@ZHDS.CO (aes128-cts-hmac-sha1-96)\n   5 HTTP/cdh162@ZHDS.CO (DEPRECATED:des3-cbc-sha1)\n   5 HTTP/cdh162@ZHDS.CO (DEPRECATED:arcfour-hmac)\n   5 HTTP/cdh162@ZHDS.CO (DEPRECATED:des-hmac-sha1)\n   5 HTTP/cdh162@ZHDS.CO (DEPRECATED:des-cbc-md5)\n\n$ kinit -kt hive.keytab hive/chd162\nkinit: Keytab contains no suitable keys for hive/chd162@ZHDS.CO while getting initial credentials\n")),(0,i.kt)("p",null,"Keytab \u4e2d\u7684 user/host@realm \u4e0e\u5c1d\u8bd5\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u7684 principal ",(0,i.kt)("inlineCode",{parentName:"p"},"hive/cdh162")," \u4e0d\u5339\u914d\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5b9e\u9645\u662f\u5339\u914d\u7684(\u4e00\u756a\u6298\u817e\uff0c\u6709\u6548\u7684\u64cd\u4f5c\uff1a1. \u5c06 Hue,Impala,Ooze \u542f\u52a8\u4e86(\u5148\u524d\u5173\u95ed);2. \u901a\u8fc7\u9875\u9762 Hue \u67e5\u8be2\u4e86 hive; 2. \u5c06 cloudera-scm-agent \u91cd\u542f\u4e86)\uff0c\u7136\u540e\u6267\u884c\u5c31\u597d\u4e86\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u4e8b\u540e\u624d\u60f3\u8d77\u6765\u53ef\u4ee5\u67e5\u770b trace \u4fe1\u606f\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"KRB5_TRACE=/dev/stderr kinit -kt hive.keytab hive/cdh162"),"\uff0c\u6682\u65f6\u65e0\u73af\u5883\u6d4b\u8bd5\u3002")),(0,i.kt)("p",null,"\u67e5\u770b CDH \u96c6\u7fa4\u7684\u89d2\u8272\u65e5\u5fd7\uff0c\u9519\u8bef\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,i.kt)("h2",{id:"javaxsecurityauthloginloginexception-checksum-failed"},"javax.security.auth.login.LoginException: Checksum failed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"org.apache.thrift.transport.TTransportException: org.apache.hadoop.security.KerberosAuthException: Login failure for user: hive/cdh162@ZHDS.CO from keytab hive.keytab javax.security.auth.login.LoginException: Checksum failed\n...\nCaused by: org.apache.hadoop.security.KerberosAuthException: Login failure for user: hive/cdh162@ZHDS.CO from keytab hive.keytab javax.security.auth.login.LoginException: Checksum failed\n...\nCaused by: javax.security.auth.login.LoginException: Checksum failed\n...\nCaused by: KrbException: Checksum failed\n...\nCaused by: java.security.GeneralSecurityException: Checksum failed\n...\n")),(0,i.kt)("p",null,"\u539f\u56e0\u5728\u4e8e cloudera-scm-agent \u4ecd\u4f7f\u7528\u7684\u662f\u8001\u7684 keytab\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[zhds@cdh162 ~]$ sudo find / -name hive.keytab\n/var/run/cloudera-scm-agent/process/887-hive-HIVESERVER2/hive.keytab\n#...more\n[zhds@cdh162 ~]$ sudo klist -kt /var/run/cloudera-scm-agent/process/887-hive-HIVESERVER2/hive.keytab\nKeytab name: FILE:/var/run/cloudera-scm-agent/process/887-hive-HIVESERVER2/hive.keytab\nKVNO Timestamp         Principal\n---- ----------------- --------------------------------------------------------\n   5 02/04/21 16:43:44 hive/cdh162@ZHDS.CO\n   ......\n   5 02/04/21 16:43:44 HTTP/cdh162@ZHDS.CO\n")),(0,i.kt)("p",null,"\u800c\u5728 KDC \u4e2d\u5bfc\u51fa\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"hive/cdh162@ZHDS.CO"),",\u5982\u4e0a hive.keytab \u7684 key \u7248\u672c\u53f7(KVNO) \u4ece 5 \u589e\u52a0\u5230 6,7\uff1b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[zhds@cdh162 ~]$ klist -kt testHive.keytab\nKeytab name: FILE:testHive.keytab\nKVNO Timestamp         Principal\n---- ----------------- --------------------------------------------------------\n   6 03/20/23 14:11:59 hive/cdh162@ZHDS.CO\n   ......\n   7 03/20/23 14:12:00 hive/cdh162@ZHDS.CO\n")),(0,i.kt)("p",null,"\u89e3\u51b3\uff1a"),(0,i.kt)("p",null,"\u767b\u9646 CDH=>\u505c\u6b62 hive,\u7136\u540e\u7ba1\u7406=>\u5b89\u5168=>kerberos \u51ed\u636e=>\u9009\u4e2d",(0,i.kt)("inlineCode",{parentName:"p"},"hive/cdh162@ZHDS.CO"),"=>\u91cd\u65b0\u751f\u6210\u6240\u9009\u9879"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u901a\u8fc7\u9875\u9762\u91cd\u542f hive \u540e\uff0cagent \u624d\u4f1a\u66f4\u65b0 keytab \u6587\u4ef6(\u9700\u8981\u91cd\u542f hive)\uff1a"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[zhds@cdh162 ~]$ sudo find / -name hive.keytab\n/var/run/cloudera-scm-agent/process/889-hive-HIVESERVER2/hive.keyta\n#...more\n[zhds@cdh162 ~]$ sudo klist -kt /var/run/cloudera-scm-agent/process/889-hive-HIVESERVER2/hive.keytab\nKeytab name: FILE:/var/run/cloudera-scm-agent/process/889-hive-HIVESERVER2/hive.keytab\nKVNO Timestamp         Principal\n---- ----------------- --------------------------------------------------------\n   8 03/20/23 15:40:34 hive/cdh162@ZHDS.CO\n   ......\n   5 03/20/23 15:40:36 HTTP/cdh162@ZHDS.CO\n"))),(0,i.kt)("h2",{id:"failure-unspecified-at-gss-api-level"},"Failure unspecified at GSS-API level..."),(0,i.kt)("p",null,"\u4e0a\u8ff0\u901a\u8fc7 CDH \u91cd\u65b0\u751f\u6210 hive.keytab \u91cd\u542f\u6210\u529f\u540e\u4e00\u4f1a\u513f\uff0c\u63d0\u793a",(0,i.kt)("strong",{parentName:"p"},"\u5b58\u5728\u9690\u60a3 : Hive Metastore canary \u56e0\u672a\u77e5\u539f\u56e0\u5931\u8d25\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"javax.security.sasl.SaslException: GSS initiate failed [Caused by GSSException: Failure unspecified at GSS-API level (Mechanism level: Specified version of key is not available (44))]\n    ...\nCaused by: GSSException: Failure unspecified at GSS-API level (Mechanism level: Specified version of key is not available (44))\n    ...\nCaused by: KrbException: Specified version of key is not available (44)\n...\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u6216\u670d\u52a1\u6b63\u5728\u5c1d\u8bd5\u4f7f\u7528\u65e7\u7684 keytab \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002\n\u81ea\u53d1\u5e03\u6b64 keytab \u4ee5\u6765\uff0c\u6709\u4eba\u91cd\u65b0\u751f\u6210\u4e86 Principal\uff0c\u4ece\u800c\u4f7f key \u7684\u7248\u672c\u503c\u589e\u52a0\u4e86\u3002\u5982\u679c\u6709\u4eba\u4f7f\u7528 Cloudera Manager \u91cd\u65b0\u751f\u6210 key \u4f46\u4e0d\u91cd\u65b0\u542f\u52a8\u670d\u52a1\uff0c\u6216\u8005\u5bf9\u4e8e\u5c1a\u672a\u5206\u53d1\u65b0 keytab \u7684\u624b\u52a8\u914d\u7f6e\uff0c\u53ef\u80fd\u4f1a\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u67d0\u4e9b\u670d\u52a1\u9700\u8981\u4e00\u4e9b\u5bc6\u94a5\uff0c\u4f8b\u5982 MapReduce / HDFS \u9700\u8981 HTTP \u5bc6\u94a5\u3002\u5982\u679c\u91cd\u65b0\u751f\u6210\u4e86 HDFS \u670d\u52a1\u5bc6\u94a5\uff0c\u5219 HTTP \u7684\u7248\u672c\u4e5f\u4f1a\u589e\u52a0\uff0c\u5e76\u4e14\u66f4\u65b0\u540e\u7684\u5bc6\u94a5\u5fc5\u987b\u540c\u65f6\u90e8\u7f72\u5230\u8fd9\u4e24\u4e2a\u670d\u52a1\u5e76\u91cd\u65b0\u542f\u52a8")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u6b64\u5904 Hive Metastore canary \u4f1a\u81ea\u6211\u4fee\u590d\u89e3\u51b3\uff1b")),(0,i.kt)("h2",{id:"gss-initiate-failed-no-valid-credentials-provided"},"GSS initiate failed-No valid credentials provided..."),(0,i.kt)("p",null,"\u76f4\u63a5\u5728 CDH \u96c6\u7fa4\u7684 hive \u8282\u70b9\u4e0a\u64cd\u4f5c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},'[zhds@cdh162 ~]$ hive\n\nLogging initialized using configuration in jar:file:/opt/cloudera/parcels/CDH-5.12.0-1.cdh5.12.0.p0.29/jars/hive-common-1.1.0-cdh5.12.0.jar!/hive-log4j.properties\nException in thread "main" java.lang.RuntimeException: java.io.IOException: Failed on local exception: java.io.IOException: javax.security.sasl.SaslException: GSS initiate failed [Caused by GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos tgt)]; Host Details : local host is: "cdh162/192.168.124.162"; destination host is: "cdh160":8020;\n...\nCaused by: java.io.IOException: Failed on local exception: java.io.IOException: javax.security.sasl.SaslException: GSS initiate failed [Caused by GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos tgt)]; Host Details : local host is: "cdh162/192.168.124.162"; destination host is: "cdh160":8020;\n...\nCaused by: java.io.IOException: javax.security.sasl.SaslException: GSS initiate failed [Caused by GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos tgt)]\n...\nCaused by: javax.security.sasl.SaslException: GSS initiate failed [Caused by GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos tgt)]\n...\nCaused by: GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos tgt)\n...\n')),(0,i.kt)("p",null,"\u65e0\u6709\u6548 credentials\uff0c\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"kinit -kt hive.keytab hive/cdh162"),"\u540e\u518d\u6267\u884c hive \u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u5728\u4f7f\u7528 JDBC \u8fde\u63a5\u7684\u65f6\u5019\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528 klist \u67e5\u770b\u4fe1\u606f\u6b63\u5e38\uff0c\u4f46\u662f\u4ecd\u62a5\u9519\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"javax.security.sasl.SaslException: GSS initiate failed\n        at com.sun.security.sasl.gsskerb.GssKrb5Client.evaluateChallenge(GssKrb5Client.java:211) ~[?:1.8.0_331]\n...\nCaused by: org.ietf.jgss.GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos tgt)\n...\n")),(0,i.kt)("p",null,"\u767b\u9646\u7528\u6237",(0,i.kt)("inlineCode",{parentName:"p"},"klist"),"\u6b63\u5e38\uff0c\u4f46\u662f\u8fdb\u7a0b\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"sudo xxx"),"\u542f\u52a8\uff0c\u6240\u4ee5\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019",(0,i.kt)("inlineCode",{parentName:"p"},"sudo kinit xxx"),"\u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u8fd8\u6709\u95ee\u9898\uff1a"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://hbase.apache.org/book.html#trouble.client.security.rpc"},"https://hbase.apache.org/book.html#trouble.client.security.rpc")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"hbase \u94fe\u63a5\u91cc\u63d0\u5230 jdk \u7684 JCE \u65e0\u9650\u5236\u6743\u9650\u7b56\u7565\u6587\u4ef6\u4fee\u6539\n\u9488\u5bf9 jdk1.8.44 \u4ee5\u4e0a\u7248\u672c\uff0c\u8bf7\u5c06 jre/lib/security/java.security \u6587\u4ef6\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"#crypto.policy=unlimited"),"\u6539\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"crypto.policy=unlimited")),(0,i.kt)("p",{parentName:"admonition"},"\u9488\u5bf9 jdk1.8.44 \u4ee5\u4e0b\u7248\u672c\uff0c\u8bf7\u5c06 jre/lib/security/ \u4e0b \u7684 local_policy.jar \u548c US_export_policy.jar \u66ff\u6362\u4e3a\u5b98\u65b9\u7f51\u7ad9\u63d0\u4f9b\u4e86 JCE \u65e0\u9650\u5236\u6743\u9650\u7b56\u7565\u6587\u4ef6")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../java/jgss%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98"},"oracle troubleshooting")),(0,i.kt)("h2",{id:"unable-to-obtain-principal-name-for-authentication"},"Unable to obtain Principal Name for authentication"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"java.sql.SQLException: [Cloudera][HiveJDBCDriver](500168) Error creating login context using ticket cache: Unable to obtain Principal Name for authentication .\n...\nCaused by: com.cloudera.hiveserver2.support.exceptions.GeneralException: [Cloudera][HiveJDBCDriver](500168) Error creating login context using ticket cache: Unable to obtain Principal Name for authentication .\n...\nCaused by: javax.security.auth.login.LoginException: Unable to obtain Principal Name for authentication\n...\n")),(0,i.kt)("p",null,"\u5ba2\u6237\u7aef\u7684 klist \u6570\u636e\u6b63\u5e38\uff0c\u542f\u52a8\u7684 JDBC \u8fde\u63a5\u62a5\u9519\uff0c\u60c5\u51b5\u662f\u8fde\u63a5\u8fdb\u7a0b\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"kinit"),"\u4e4b\u524d\u5df2\u7ecf\u542f\u52a8\uff0c\u91cd\u542f\u8fdb\u7a0b\u5373\u53ef\u3002"))}u.isMDXComponent=!0}}]);