"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[9666],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=l,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(87462),l=(n(67294),n(3905));const a={},i=void 0,o={unversionedId:"database/Mysql\u9519\u8bef\u5904\u7406",id:"database/Mysql\u9519\u8bef\u5904\u7406",title:"Mysql\u9519\u8bef\u5904\u7406",description:"\u9501\u8868",source:"@site/docs/database/Mysql\u9519\u8bef\u5904\u7406.md",sourceDirName:"database",slug:"/database/Mysql\u9519\u8bef\u5904\u7406",permalink:"/docs/database/Mysql\u9519\u8bef\u5904\u7406",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/database/Mysql\u9519\u8bef\u5904\u7406.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mysql\u7cfb\u7edf\u53c2\u6570",permalink:"/docs/database/Mysql\u7cfb\u7edf\u53c2\u6570"},next:{title:"SQLServer\u652f\u6301\u77e9\u9635",permalink:"/docs/database/SQLServer\u652f\u6301\u77e9\u9635"}},s={},d=[{value:"\u9501\u8868",id:"\u9501\u8868",level:2},{value:"\u65f6\u533a\u95ee\u9898",id:"\u65f6\u533a\u95ee\u9898",level:2},{value:"ERROR! MySQL server PID file could not be found!",id:"error-mysql-server-pid-file-could-not-be-found",level:2},{value:"unknown variable",id:"unknown-variable",level:2},{value:"the server quit without updating PID file",id:"the-server-quit-without-updating-pid-file",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u9501\u8868"},"\u9501\u8868"),(0,l.kt)("p",null,"\u9519\u8bef:",(0,l.kt)("inlineCode",{parentName:"p"},"com.mysql.cj.jdbc.exceptions.MySQLTransactionRollbackException: Lock wait timeout exceeded; try restarting transaction")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"--\u8fde\u63a5\u6570\u636e\u5e93\u627e\u5230\u9501\nSELECT trx_mysql_thread_id FROM information_schema.INNODB_TRX;\n--\u6740\u6389process\nkill trx_mysql_thread_id;\n--\u67e5\u770bprocess id\nshow processlist;\n--\u67e5\u770b\u88ab\u9501\u4f4f\u7684\nselect * from information_schema.innodb_locks;\n\n")),(0,l.kt)("h2",{id:"\u65f6\u533a\u95ee\u9898"},"\u65f6\u533a\u95ee\u9898"),(0,l.kt)("p",null,"\u9519\u8bef\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"java.sql.SQLException: The server time zone value '\xd6\xd0\xb9\xfa\xb1\xea\xd7\xbc\xca\xb1\xbc\xe4' is unrecognized")),(0,l.kt)("p",null,"\u5728\u4f7f\u7528 MySQL 8.0 \u4ee5\u4e0a\u7248\u672c\uff08MySQL \u8fde\u63a5\u9a71\u52a8\u548c\u7248\u672c\u90fd\u662f 8.0 \u4ee5\u4e0a\uff09\u7684\u65f6\u5019\u51fa\u73b0\u7684\u95ee\u9898\u9519\u8bef\uff0c\u9700\u8981\u5728\u8bbf\u95ee\u6570\u636e\u5e93\u7684 Url \u540e\u9762\u52a0\u4e0a",(0,l.kt)("inlineCode",{parentName:"p"},"serverTimezone"),"\uff0c\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"jdbc:mysql://localhost:3306/yd?serverTimezone=GMT%2B8")),(0,l.kt)("h2",{id:"error-mysql-server-pid-file-could-not-be-found"},"ERROR! MySQL server PID file could not be found!"),(0,l.kt)("p",null,"mysql \u7684\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305\u5b89\u88c5\u811a\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# ...\n/usr/local/mysql/bin/mysqld --initialize --user=mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data 2>&1 | tee $log\n# ...\ncp /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld\n# ...\nchmod +x /etc/init.d/mysqld\n/etc/init.d/mysqld restart\n# ...\n")),(0,l.kt)("p",null,"\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/init.d/mysqld restart"),"\u8fd9\u6761\u547d\u4ee4\uff0c\u5728 ubuntu18.04 \u4e2d\u6ca1\u95ee\u9898\uff0c\u5728 openEuler22.03 \u4e2d\u8f93\u51fa\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-log"},"ERROR! MySQL server PID file could not be found!\nStarting MySQL.Logging to '/usr/local/mysql/data/localhost.localdomain.err'.\n. SUCCESS!\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u867d\u7136\u8f93\u51fa\u62a5\u9519\uff0c\u6700\u540e mysql \u53ef\u7528")),(0,l.kt)("p",null,"\u539f\u56e0\u8fdb\u7a0b\u5360\u7528\uff0c\u5148\u524d\u5df2\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"bin/mysqld"),"\u542f\u52a8\uff0c\u53ef\u4ee5\u5148 kill \u6389\u8fdb\u7a0b\u7136\u540e start, \u800c",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/init.d/mysqld restart"),"\u4e2d stop \u4f1a\u62a5 PID file \u627e\u4e0d\u5230\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# ...\nPID=$(ps -ef | grep 'mysql' | grep -v grep | awk '{print $2}')\nif [[ -n \"$PID\" ]]; then\nkill ${PID} >/dev/null\nfi\nchmod +x /etc/init.d/mysqld\n/etc/init.d/mysqld start\n# ...\n")),(0,l.kt)("h2",{id:"unknown-variable"},"unknown variable"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mysql: [ERROR] unknown variable 'basedir=xxx'"),"\nmysql \u7684\u914d\u7f6e\u6587\u4ef6(my.cnf,my.ini)\u683c\u5f0f\u9519\u8bef\uff0c\u5982\u5934\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"[mysqld]")),(0,l.kt)("h2",{id:"the-server-quit-without-updating-pid-file"},"the server quit without updating PID file"),(0,l.kt)("p",null,"\u542f\u52a8 mysql \u62a5\u9519",(0,l.kt)("inlineCode",{parentName:"p"},"the server quit without updating PID file..."),"\n\u539f\u56e0\u662f\u914d\u7f6e\u6587\u4ef6(my.cnf)\u4e2d\u6709\u914d\u7f6e\u4e0d\u652f\u6301\u6216\u8005\u9519\u8bef\uff0c\u67e5\u770b mysql \u6570\u636e\u5e93 data \u76ee\u5f55\u91cc\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"xxx.err"),"\u6587\u4ef6\u53ef\u77e5\u3002"))}u.isMDXComponent=!0}}]);