"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[1242],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),k=p(t),m=i,u=k["".concat(d,".").concat(m)]||k[m]||c[m]||r;return t?a.createElement(u,o(o({ref:n},s),{},{components:t})):a.createElement(u,o({ref:n},s))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[k]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const r={},o=void 0,l={unversionedId:"bigdata/kerberos\u4f7f\u7528",id:"bigdata/kerberos\u4f7f\u7528",title:"kerberos\u4f7f\u7528",description:"kadmin",source:"@site/docs/bigdata/kerberos\u4f7f\u7528.md",sourceDirName:"bigdata",slug:"/bigdata/kerberos\u4f7f\u7528",permalink:"/docs/bigdata/kerberos\u4f7f\u7528",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/kerberos\u4f7f\u7528.md",tags:[],version:"current",lastUpdatedAt:1686217402,formattedLastUpdatedAt:"2023\u5e746\u67088\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"kerberos\u4e86\u89e3",permalink:"/docs/bigdata/kerberos\u4e86\u89e3"},next:{title:"kerberos\u5e38\u89c1\u95ee\u9898",permalink:"/docs/bigdata/kerberos\u5e38\u89c1\u95ee\u9898"}},d={},p=[{value:"kadmin",id:"kadmin",level:2},{value:"kadmin \u7684 acl \u914d\u7f6e",id:"kadmin-\u7684-acl-\u914d\u7f6e",level:3},{value:"\u751f\u6210 keytab \u914d\u7f6e\u6587\u4ef6",id:"\u751f\u6210-keytab-\u914d\u7f6e\u6587\u4ef6",level:2},{value:"kerberos \u5ba2\u6237\u7aef",id:"kerberos-\u5ba2\u6237\u7aef",level:2},{value:"window",id:"window",level:3},{value:"linux",id:"linux",level:3},{value:"cache \u6587\u4ef6\u53ca\u9a8c\u8bc1",id:"cache-\u6587\u4ef6\u53ca\u9a8c\u8bc1",level:2}],s={toc:p},k="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(k,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"kadmin"},"kadmin"),(0,i.kt)("p",null,"\u8fdb\u5165\u7ba1\u7406\u5458\u547d\u4ee4\u884c"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"kadmin","[.local]"),(0,i.kt)("p",{parentName:"admonition"},"\u4f55\u65f6\u4f7f\u7528 kadmin.local \u548c kadmin\n\u521b\u5efa Kerberos \u4e3b\u4f53\u548c Keytab \u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 kadmin.local(\u9700\u8981\u5728 KDC server \u4e0a\u9762\u64cd\u4f5c) \u6216 kadmin(\u53ef\u4ee5\u5728\u4efb\u4f55\u4e00\u53f0 KDC \u9886\u57df\u7684\u7cfb\u7edf\u4e0a\u9762\u64cd\u4f5c)\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u60a8\u7684\u8bbf\u95ee\u6743\u9650\u548c\u5e10\u6237\uff1a"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u5bf9 KDC \u673a\u5668\u5177\u6709 root \u7528\u6237\u8bbf\u95ee\u6743\u9650\uff0c\u4f46\u60a8\u6ca1\u6709 Kerberos \u7ba1\u7406\u5458\u5e10\u6237\uff0c\u53ef\u4ee5\u4f7f\u7528 kadmin.local;"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u5bf9 KDC \u673a\u5668\u4e0d\u5177\u6709 root \u7528\u6237\u8bbf\u95ee\u6743\u9650\uff0c\u4f46\u60a8\u62e5\u6709 Kerberos \u7ba1\u7406\u5458\u5e10\u6237\uff0c\u53ef\u4ee5\u4f7f\u7528 kadmin;"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u540c\u65f6\u62e5\u6709 KDC \u673a\u5668\u7684 root \u7528\u6237\u8bbf\u95ee\u6743\u9650\u548c Kerberos \u7ba1\u7406\u5458\u5e10\u6237\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u5176\u4e2d\u4efb\u4f55\u4e00\u4e2a;"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#\u5728kdc\u8282\u70b9\u4e0a\n[zhds@cdh160 ~]$ sudo kadmin.local\n[sudo] password for zhds:\nAuthenticating as principal root/admin@ZHDS.CO with password.\n#?\u53ef\u4ee5\u67e5\u770b\u5e2e\u52a9\nkadmin.local:  listprincs\nHTTP/cdh160@ZHDS.CO\nhive/cdh161@ZHDS.CO\n#....\n\n[zhds@cdh160 ~]$ sudo kadmin.local -q "list_principals"\nHTTP/cdh160@ZHDS.CO\nhive/cdh161@ZHDS.CO\n#....\n[zhds@cdh160 ~]$ kadmin -q "list_principals"\n#Couldn\'t open log file /var/log/kadmind.log: Permission denied\n#Authenticating as principal zhds/admin@ZHDS.CO with password.\n#kadmin: Client not found in Kerberos database while initializing kadmin interface\n[zhds@cdh160 ~]$ sudo kadmin.local -q "addprinc zhds/admin"\n[sudo] password for zhds:\n#Authenticating as principal root/admin@ZHDS.CO with password.\n#WARNING: no policy specified for zhds/admin@ZHDS.CO; defaulting to no policy\n#Enter password for principal "zhds/admin@ZHDS.CO":\n#Re-enter password for principal "zhds/admin@ZHDS.CO":\n#Principal "zhds/admin@ZHDS.CO" created.\n[zhds@cdh160 ~]$ kadmin -q "list_principals"\n#Couldn\'t open log file /var/log/kadmind.log: Permission denied\n#Authenticating as principal zhds/admin@ZHDS.CO with password.\n#Password for zhds/admin@ZHDS.CO:\nHTTP/cdh160@ZHDS.CO\nhive/cdh161@ZHDS.CO\n#....\n\n#\u67e5\u770bkeytab\u6587\u4ef6\u5185\u5bb9\n[zhds@cdh160 ~]$ klist -kt test.keytab\nKeytab name: FILE:test.keytab\nKVNO Timestamp         Principal\n---- ----------------- --------------------------------------------------------\n   1 02/04/21 17:23:52 test@ZHDS.CO\n#....\n\n')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u62a5\u9519",(0,i.kt)("strong",{parentName:"p"},"kadmin: Client not found in Kerberos database while initializing kadmin interface"),"\uff1a"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u4e0a\u8ff0\u7684\u6dfb\u52a0(",(0,i.kt)("inlineCode",{parentName:"li"},"addprinc"),")\u662f\u6b64\u65f6\u7f13\u5b58\u4e86",(0,i.kt)("inlineCode",{parentName:"li"},"zhds/admin"),"\uff0c\u5b9e\u9645\u662f",(0,i.kt)("inlineCode",{parentName:"li"},'kadmin -p zhds/admin -q "list_principals"'),"\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u79d1\u5b66\u7684\u7528\u6cd5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"kadmin"),"\u65f6\u643a\u5e26 principal,\u5373\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},'kadmin -p kadmin/admin -q "list_principals"'),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Couldn't open log file /var/log/kadmind.log: Permission denied",(0,i.kt)("br",{parentName:"p"}),"\n","Authenticating as principal kadmin/admin with password.",(0,i.kt)("br",{parentName:"p"}),"\n","Password for kadmin/",(0,i.kt)("a",{parentName:"p",href:"mailto:admin@ZHDS.CO"},"admin@ZHDS.CO"),":"))),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c principal \u7684\u5bc6\u7801\u5fd8\u8bb0",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'[zhds@cdh160 ~]$ sudo kadmin.local\n[sudo] password for zhds:\nAuthenticating as principal root/admin@ZHDS.CO with password.\nkadmin.local:  cpw kadmin/admin\nEnter password for principal "kadmin/admin@ZHDS.CO":\nRe-enter password for principal "kadmin/admin@ZHDS.CO":\nPassword for "kadmin/admin@ZHDS.CO" changed.\nkadmin.local:\n'))))),(0,i.kt)("h3",{id:"kadmin-\u7684-acl-\u914d\u7f6e"},"kadmin \u7684 acl \u914d\u7f6e"),(0,i.kt)("p",null,"\u7ba1\u7406\u5458\u4e3b\u4f53\u9700\u8981\u5177\u6709\u9002\u5f53\u7684\u8bbf\u95ee\u63a7\u5236\u5217\u8868 \uff08ACL\uff09 \u6743\u9650\u3002\u6743\u9650\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/krb5kdc/kadm5.acl"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"/var/kerberos/krb5kdc/kadm5.acl")," \u6587\u4ef6\u4e2d\u914d\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"kadmin/admin@ZHDS.CO        *\n#\u6216\u8005\u901a\u7528\u7684\n*/admin@ZHDS.CO        *\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The above will grant all privileges to any admin instance of a principal."),(0,i.kt)("li",{parentName:"ul"},"\u4fee\u6539\u540e\u9700\u8981\u91cd\u542f kdc \u670d\u52a1\u751f\u6548"))),(0,i.kt)("h2",{id:"\u751f\u6210-keytab-\u914d\u7f6e\u6587\u4ef6"},"\u751f\u6210 keytab \u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u4e0b\u6587\u4e2d\u7684\u547d\u4ee4\u5de5\u5177\u91cc\u7684\u53c2\u6570\u662f principal(\u5982\uff1akadmin/admin,yoloz,test \u7b49,\u7cfb\u7edf\u91cc\u914d\u7f6e\u4e86 realm \u7b80\u5199\u7684\uff0c\u4e5f\u53ef\u4ee5\u5199\u6210\u5168\u540d\u79f0),\u8be6\u60c5\u53ef\u89c1",(0,i.kt)("a",{parentName:"p",href:"/docs/bigdata/kerberos%E4%BA%86%E8%A7%A3"},"kerberos \u4e86\u89e3"),"\u91cc\u7684\u6982\u5ff5\u8bf4\u660e\u3002")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8fdb\u5165 Kerberos \u7684 admin \u5ba2\u6237\u7aef\uff1b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#\u6216\u8005 kadmin.local\n[zhds@cdh160 ~]$ kadmin -p kadmin/admin\nCouldn't open log file /var/log/kadmind.log: Permission denied\nAuthenticating as principal kadmin/admin with password.\nPassword for kadmin/admin@ZHDS.CO:\nkadmin:  ?\nAvailable kadmin requests:\n\nadd_principal, addprinc, ank\n                         Add principal\ndelete_principal, delprinc\n#...\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5728 Kerberos \u5ba2\u6237\u7aef\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u5c06\u5177\u6709 Hive \u8bbf\u95ee\u6743\u9650\u7684 hive/cdh162 \u7528\u6237\u6dfb\u52a0\u5230\u5bc6\u94a5\u5206\u53d1\u4e2d\u5fc3\uff08KDC\uff09\uff0c\u5e76\u67e5\u770b\u662f\u5426\u6dfb\u52a0\u6210\u529f")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#\u5c06\u5177\u6709Hive\u8bbf\u95ee\u6743\u9650\u7684test\u7528\u6237\u6dfb\u52a0\u5230KDC\u4e2d\nkadmin:  addprinc -pw <pwd> yoloz\nWARNING: no policy specified for yoloz@ZHDS.CO; defaulting to no policy\nPrincipal "yoloz@ZHDS.CO" created.\n#\u67e5\u770b\u662f\u5426\u6dfb\u52a0\u6210\u529f\nkadmin:  listprincs\nHTTP/cdh160@ZHDS.CO\nyoloz@ZHDS.CO\n#....\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u5728 Kerberos \u5ba2\u6237\u7aef\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u5728\u7528\u6237\u76ee\u5f55\u4e0b(",(0,i.kt)("inlineCode",{parentName:"li"},"/home/zhds"),")\u751f\u6210 keytab \u914d\u7f6e\u6587\u4ef6")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kadmin:  ktadd\nUsage: ktadd [-k[eytab] keytab] [-q] [-e keysaltlist] [principal | -glob princ-exp] [...]\n#ktadd -k /home/zhds/yoloz.keytab yoloz@ZHDS.CO\nkadmin:  ktadd -k /home/zhds/yoloz.keytab -glob yoloz\nEntry for principal yoloz@ZHDS.CO with kvno 2, encryption type aes256-cts-hmac-sha1-96 added to keytab WRFILE:/home/zhds/yoloz.keytab.\n#...\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u4e0a\u8ff0\u751f\u6210\u7684 keytab \u6587\u4ef6\uff0c\u53ef\u80fd\u5bc6\u7801\u4f1a\u88ab\u6539\u53d8\uff0c\u5373\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"kinit -kt test.keytab test"),"\u6ca1\u6709\u95ee\u9898\uff0c\u4f46\u662f\u76f4\u63a5",(0,i.kt)("inlineCode",{parentName:"p"},"kinit test"),"\u8ba9\u8f93\u5165\u5bc6\u7801\u7684\u65f6\u5019\u5bc6\u7801\u4e0d\u662f\u5148\u524d\u8bbe\u7f6e\u7684\u3002\u9700\u8981\u5728\u751f\u6210\u6587\u4ef6\u7684\u65f6\u5019\u6dfb\u52a0\u53c2\u6570-norandkey\uff0c\u5373",(0,i.kt)("inlineCode",{parentName:"p"},"ktadd -k /home/zhds/yoloz.keytab -norandkey -glob yoloz"))),(0,i.kt)("h2",{id:"kerberos-\u5ba2\u6237\u7aef"},"kerberos \u5ba2\u6237\u7aef"),(0,i.kt)("p",null,"cdh \u542f\u7528 kerberos \u540e\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981\u672c\u5730\u8fde impala \u6216\u8005 hive(\u672c\u5730\u4ee3\u7801\u6d4b\u8bd5\u6216\u8005 jdbc \u5de5\u5177)\uff0c\u90fd\u9700\u8981\u5728\u672c\u5730\u88c5 kerberos\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u522b\u7684\u670d\u52a1\u5668\u9700\u8981\u901a\u8fc7 jdbc \u8bbf\u95ee cdh \u7684\u670d\u52a1\uff0c\u4e5f\u9700\u8981\u5b89\u88c5 kerberos \u5ba2\u6237\u7aef\u3002"),(0,i.kt)("p",null,"\u73af\u5883\u53d8\u91cf",(0,i.kt)("inlineCode",{parentName:"p"},"KRB5CCNAME"),"\u975e\u5fc5\u8981(linux \u5df2\u9a8c\u8bc1)"),(0,i.kt)("h3",{id:"window"},"window"),(0,i.kt)("p",null,"\u4e0b\u8f7d",(0,i.kt)("a",{parentName:"p",href:"https://web.mit.edu/kerberos/dist/index.html"},"MIT Kerberos for Windows"),"\uff0c\u5b89\u88c5\u5b8c\u6210\u4f1a\u63d0\u793a\u9700\u8981\u91cd\u542f\uff0c\u53ef\u4ee5\u5148\u914d\u73af\u5883\u53d8\u91cf\u518d\u91cd\u542f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"KRB5_CONFIG=C:\\ProgramData\\MIT\\Kerberos5\\krb5.ini\nKRB5CCNAME=C:\\picc\\krb5cache\n")),(0,i.kt)("admonition",{title:"\u73af\u5883\u53d8\u91cf",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"C \u76d8\u6ca1\u6709 ProgramData \u7684\u8bdd\u67e5\u770b\u9690\u85cf\u6587\u4ef6\u5373\u53ef;"),(0,i.kt)("li",{parentName:"ul"},"KRB5_CONFIG \u8def\u5f84\u662f\u56fa\u5b9a\u7684;"),(0,i.kt)("li",{parentName:"ul"},"KRB5CCNAME \u4efb\u610f\u76ee\u5f55\u90fd\u53ef\u4ee5\uff0cpicc \u76ee\u5f55\u5fc5\u987b\u624b\u52a8\u521b\u5efa\uff0ckrb5cache \u65e0\u9700\u521b\u5efa;"),(0,i.kt)("li",{parentName:"ul"},"\u4fee\u6539 KRB5_CONFIG \u91cc\u7684 krb5.ini\uff0c\u53c2\u8003 kerberos \u670d\u52a1\u7aef\u7684 krb5.conf \u5185\u5bb9\u4fee\u6539 krb5.ini;"))),(0,i.kt)("p",null,"\u4fee\u6539 host \u6587\u4ef6\uff0c\u5c06 cdh \u6240\u6709\u7684\u8282\u70b9\u7684 ip \u4e3b\u673a\u540d\u90fd\u6dfb\u52a0\u8fdb\u6765\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u91cd\u542f\u4e86\u3002"),(0,i.kt)("admonition",{title:"\u91cd\u542f\u540e",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5ba2\u6237\u7aef\u5de5\u5177\u64cd\u4f5c\uff0cGet Ticket=>\u8f93\u5165 pricipal \u548c\u5bc6\u7801"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7 cmd \u547d\u4ee4\u884c\u64cd\u4f5c\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"kinit -kt D:\\\\test.keytab test")))),(0,i.kt)("h3",{id:"linux"},"linux"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ubuntu.com/server/docs/kerberos-introduction"},"ubuntu kerberos")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/system-level_authentication_guide/using_kerberos"},"redhat kerberos")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\u7684\u65f6\u5019\u8ba9\u8f93\u5165 default realm,\u8df3\u8fc7\u4e0d\u586b\uff0c\u6700\u540e\u624b\u52a8\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\n# \u5b98\u65b9:yum install krb5-workstation krb5-libs,\u5176\u4e2dworkstation\u53ef\u80fd\u975e\u5fc5\u8981(\u672a\u6d4b\u8bd5)\n$ sudo yum install krb5-libs\n# \u5b98\u65b9:sudo apt install krb5-user sssd-krb5,\u5176\u4e2dsssd-krb5\u975e\u5fc5\u8981(\u5df2\u6d4b\u8bd5)\n$ sudo apt install krb5-user\n")),(0,i.kt)("admonition",{title:"\u73af\u5883\u53d8\u91cf",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003 kerberos \u670d\u52a1\u7aef\u7684 krb5.conf \u5185\u5bb9\u4fee\u6539/etc/krb5.conf;"),(0,i.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u7ea7\u4fee\u6539\u6587\u4ef6",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/profile"),"\uff0c\u7528\u6237\u7ea7",(0,i.kt)("inlineCode",{parentName:"li"},"\uff5e/.profile"),"(\u6ca1\u6709\u624b\u52a8\u521b\u5efa)",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-log"},"export KRB5CONF=/etc/krb5.conf\n#krb5cache\u6587\u4ef6\u4e0d\u9700\u8981\u63d0\u524d\u521b\u5efa(\u975e\u5fc5\u8981\uff0c\u9ed8\u8ba4/tmp/krb5cc_[id])\nexport KRB5CCNAME=/tmp/krb5cache\n"))),(0,i.kt)("li",{parentName:"ul"},"source ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/profile"),"\u6216",(0,i.kt)("inlineCode",{parentName:"li"},"\uff5e/.profile")))),(0,i.kt)("p",null,"\u4fee\u6539/etc/hosts\uff0c\u5c06 cdh \u6240\u6709\u8282\u70b9\u7684 ip \u4e3b\u673a\u540d\u90fd\u6dfb\u52a0\u8fdb\u6765,\u7136\u540e\u4f7f\u7528 kinit \u547d\u4ee4\uff0c\u7f13\u5b58 principal \u548c keytab \u6587\u4ef6\uff0c\u5e76\u4f7f\u7528 klist \u547d\u4ee4\uff0c\u67e5\u770b\u662f\u5426\u7f13\u5b58\u6210\u529f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# kinit -kt [keytab file] [principal]\n$ kinit -kt /tmp/test.keytab test\n# \u67e5\u770b\u662f\u5426\u7f13\u5b58\u6210\u529f\n$ klist\nTicket cache: FILE:/tmp/krb5cache\nDefault principal: test@ZHDS.CO\n\nValid starting       Expires              Service principal\n03/18/2023 15:02:33  03/19/2023 15:02:33  krbtgt/ZHDS.CO@ZHDS.CO\n")),(0,i.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u672a\u5728/etc/hosts \u91cc\u6dfb\u52a0\u6620\u5c04\u5173\u7cfb\uff0c\u76f4\u63a5\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"kinit"),"\u4f1a\u62a5\u9519\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"kinit: Resource temporarily unavailable while getting initial credentials"))),(0,i.kt)("h2",{id:"cache-\u6587\u4ef6\u53ca\u9a8c\u8bc1"},"cache \u6587\u4ef6\u53ca\u9a8c\u8bc1"),(0,i.kt)("p",null,"The new user principal can be tested using the kinit utility:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kinit ubuntu/admin\nPassword for ubuntu/admin@EXAMPLE.COM:\n#After entering the password, use the klist(\u5217\u51fa\u5f53\u524d\u8d26\u53f7\u4fe1\u606f) utility to view information about the Ticket Granting Ticket (TGT):\n$ klist\nTicket cache: FILE:/tmp/krb5cc_1000\nDefault principal: ubuntu/admin@EXAMPLE.COM\n\nValid starting     Expires            Service principal\n04/03/20 19:16:57  04/04/20 05:16:57  krbtgt/EXAMPLE.COM@EXAMPLE.COM\n        renew until 04/04/20 19:16:55\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Where the cache filename ",(0,i.kt)("inlineCode",{parentName:"li"},"krb5cc_1000")," is composed of the prefix ",(0,i.kt)("inlineCode",{parentName:"li"},"krb5cc_")," and the user id (uid), which in this case is 1000."),(0,i.kt)("li",{parentName:"ul"},"kinit(\u7528\u6237\u767b\u5f55) will inspect /etc/krb5.conf to find out which KDC to contact, and its address."),(0,i.kt)("li",{parentName:"ul"},"kdestroy(\u9500\u6bc1\u767b\u5f55\u4fe1\u606f),\u9500\u6bc1\u540e\u6267\u884c klist:",(0,i.kt)("inlineCode",{parentName:"li"},"klist: No credentials cache found (filename: /tmp/krb5cc_1000)")))),(0,i.kt)("p",null,"A very quick and useful way to troubleshoot what kinit is doing is to set the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"KRB5_TRACE")," to a file, or stderr, and it will show extra information. The output is quite verbose:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ KRB5_TRACE=/dev/stderr kinit ubuntu/admin\n[2898] 1585941845.278578: Getting initial credentials for ubuntu/admin@EXAMPLE.COM\n[2898] 1585941845.278580: Sending unauthenticated request\n[2898] 1585941845.278581: Sending request (189 bytes) to EXAMPLE.COM\n[2898] 1585941845.278582: Resolving hostname kdc01.example.com\n#...\n")))}c.isMDXComponent=!0}}]);