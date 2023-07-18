"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7793],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=m(a),d=r,y=p["".concat(i,".").concat(d)]||p[d]||u[d]||l;return a?n.createElement(y,s(s({ref:t},c),{},{components:a})):n.createElement(y,s({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var m=2;m<l;m++)s[m]=a[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},56850:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={},s=void 0,o={unversionedId:"database/Mysql\u5bfc\u5165\u5bfc\u51fa",id:"database/Mysql\u5bfc\u5165\u5bfc\u51fa",title:"Mysql\u5bfc\u5165\u5bfc\u51fa",description:"limit \u8bed\u53e5",source:"@site/docs/database/Mysql\u5bfc\u5165\u5bfc\u51fa.md",sourceDirName:"database",slug:"/database/Mysql\u5bfc\u5165\u5bfc\u51fa",permalink:"/docs/database/Mysql\u5bfc\u5165\u5bfc\u51fa",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/database/Mysql\u5bfc\u5165\u5bfc\u51fa.md",tags:[],version:"current",lastUpdatedAt:1689650905,formattedLastUpdatedAt:"2023\u5e747\u670818\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Join\u8868\u7684\u6267\u884c\u987a\u5e8f",permalink:"/docs/database/Join\u8868\u7684\u6267\u884c\u987a\u5e8f"},next:{title:"Mysql\u7528\u6237\u76f8\u5173",permalink:"/docs/database/Mysql\u7528\u6237\u76f8\u5173"}},i={},m=[{value:"limit \u8bed\u53e5",id:"limit-\u8bed\u53e5",level:2},{value:"\u5bfc\u5165\u5bfc\u51fa\u67e5\u8be2\u7ed3\u679c",id:"\u5bfc\u5165\u5bfc\u51fa\u67e5\u8be2\u7ed3\u679c",level:2},{value:"\u5bfc\u5165\u5bfc\u51fa\u7ed3\u6784\u548c\u6570\u636e",id:"\u5bfc\u5165\u5bfc\u51fa\u7ed3\u6784\u548c\u6570\u636e",level:2},{value:"\u5bfc\u51fa",id:"\u5bfc\u51fa",level:3},{value:"\u5bfc\u5165",id:"\u5bfc\u5165",level:3}],c={toc:m},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"limit-\u8bed\u53e5"},"limit \u8bed\u53e5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'select * from "operativeLogs" ORDER BY "sysTimestamp" DESC LIMIT 5 OFFSET 5    #postgresql\nselect * from "operativeLogs" ORDER BY "sysTimestamp" DESC LIMIT 5,10        #mysql\n')),(0,r.kt)("h2",{id:"\u5bfc\u5165\u5bfc\u51fa\u67e5\u8be2\u7ed3\u679c"},"\u5bfc\u5165\u5bfc\u51fa\u67e5\u8be2\u7ed3\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"select\u8bed\u53e5 into outfile '/opt/file';\n\nload data local infile '/opt/file' into table \u8868\u540d character set utf8;\n")),(0,r.kt)("h2",{id:"\u5bfc\u5165\u5bfc\u51fa\u7ed3\u6784\u548c\u6570\u636e"},"\u5bfc\u5165\u5bfc\u51fa\u7ed3\u6784\u548c\u6570\u636e"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"mysqldump -u \u7528\u6237\u540d -p ","[-d or -t]"," db_name ","[tbl_name ...]"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"-d:do not write any table row information,\u5373\u4e0d\u5bfc\u51fa\u8868\u5185\u5bb9\uff1b"),(0,r.kt)("li",{parentName:"ul"},"-t: do not write create table statements that create each dumped tables,\u5373\u4e0d\u5bfc\u51fa\u521b\u5efa\u8868\u7ed3\u6784\uff1b")),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u53ea\u6709 db_name \u5219\u5bfc\u51fa\u5168\u5e93\uff0c\u5426\u5219\u53ea\u5bfc\u51fa\u5e93\u4e2d\u7684\u6307\u5b9a\u8868\uff1b")),(0,r.kt)("h3",{id:"\u5bfc\u51fa"},"\u5bfc\u51fa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump -uxxx -p -d database > database.sql #\u5bfc\u51fa\u6570\u636e\u5e93\u8868\u7ed3\u6784\nmysqldump -uxxx -p database > database.sql #\u5bfc\u51fa\u6570\u636e\u5e93\u8868\u7ed3\u6784\u548c\u6570\u636e\nmysqldump -uxxx -p -t database tablename > tablename.sql #\u5bfc\u51fa\u6570\u636e\u8868\u6570\u636e\nmysqldump -uxxx -p database tablename > tablename.sql #\u5bfc\u51fa\u6570\u636e\u8868\u7ed3\u6784\u548c\u6570\u636e\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5bfc\u51fa\u6570\u636e")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b\u53ef\u5bfc\u51fa\u4f4d\u7f6e\uff08\u4e0d\u7136\u4f1a\u6d89\u53ca\u5230\u6743\u9650\u95ee\u9898\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysql> show variables like 'secure_file_priv';\n+------------------+-----------------------+\n| Variable_name    | Value                 |\n+------------------+-----------------------+\n| secure_file_priv | /var/lib/mysql-files/ | \u3000\u3000//\u5982\u679c\u51fa\u73b0\u6743\u9650\u95ee\u9898\uff0c\u5c1d\u8bd5\u628a\u8be5\u76ee\u5f55\u6240\u6709\u8005\u6539\u6210mysql\n+------------------+-----------------------+\n1 row in set (0.00 sec)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u5bfc\u51fa\u547d\u4ee4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump -udcap -p -t -T /var/lib/mysql-files/  dcap_data metaTableColumns --fields-terminated-by=',' --fields-enclosed-by='\\\"'\n")),(0,r.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[root@server-10 ~]# ls -l /var/lib/mysql-files/\ntotal 4\n-rw-r--r-- 1 root  root    0 Aug 28 15:35 metaTableColumns.sql\u3000\u3000//\u4f1a\u540c\u6b65\u751f\u6210\u540c\u540dsql\u6587\u4ef6\uff0c\u5185\u5bb9\u4e3a\u7a7a\n-rw-rw-rw- 1 mysql mysql 458 Aug 28 15:35 metaTableColumns.txt\n[root@server-10 ~]# cat /var/lib/mysql-files/metaTableColumns.txt\n"10001","Coyote Inc.","200 Maple Lane","Detroit","MI","44444","USA","Y Lee","ylee@coyote.com"\n"10002","Mouse House","333 Fromage Lane","Columbus","OH","43333","USA","Jerry Mouse",\\N\n"10003","Wascals","1 Sunny Place","Muncie","IN","42222","USA","Jim Jones","rabbit@wascally.com"\n"10004","Yosemite Place","829 Riverside Drive","Phoenix","AZ","88888","USA","Y Sam","sam@yosemite.com"\n"10005","E Fudd","4545 53rd Street","Chicago","IL","54545","USA","E Fudd",\\N\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0d\u9700\u8981\u6bcf\u4e2a\u5b57\u6bb5\u5e26\u5192\u53f7\uff0c\u5219\u7701\u7565--fields-enclosed-by='\\\"'\u5373\u53ef"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump -udcap -p -t -T /var/lib/mysql-files/  dcap_data metaTableColumns --fields-terminated-by=','\n")),(0,r.kt)("p",{parentName:"admonition"},"\u6267\u884c\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@server-10 ~]# cat /var/lib/mysql-files/metaTableColumns.txt\n10001,Coyote Inc.,200 Maple Lane,Detroit,MI,44444,USA,Y Lee,ylee@coyote.com\n10002,Mouse House,333 Fromage Lane,Columbus,OH,43333,USA,Jerry Mouse,\\N\n10003,Wascals,1 Sunny Place,Muncie,IN,42222,USA,Jim Jones,rabbit@wascally.com\n10004,Yosemite Place,829 Riverside Drive,Phoenix,AZ,88888,USA,Y Sam,sam@yosemite.com\n10005,E Fudd,4545 53rd Street,Chicago,IL,54545,USA,E Fudd,\\N\n"))),(0,r.kt)("h3",{id:"\u5bfc\u5165"},"\u5bfc\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#\u65b9\u5f0f\u4e00\n$ mysql\xa0-u\u7528\u6237\u540d -p\nmysql> create database test;\nmysql> exit;\n$ mysql -u\u7528\u6237\u540d -p test < /home/test.sql\n#\u65b9\u5f0f\u4e8c\n$ mysql\xa0-u\u7528\u6237\u540d -p\nmysql> create database test;\nmysql> use test;\nmysql> source /home/test.sql;\nmysql> exit;\n")))}u.isMDXComponent=!0}}]);