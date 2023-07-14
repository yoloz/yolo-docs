"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[3809],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return a?r.createElement(k,i(i({ref:t},d),{},{components:a})):r.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5442:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={},i=void 0,o={unversionedId:"database/Mysql\u7cfb\u7edf\u53c2\u6570",id:"database/Mysql\u7cfb\u7edf\u53c2\u6570",title:"Mysql\u7cfb\u7edf\u53c2\u6570",description:"\u67e5\u770b\u6570\u636e\u5e93\u53c2\u6570",source:"@site/docs/database/Mysql\u7cfb\u7edf\u53c2\u6570.md",sourceDirName:"database",slug:"/database/Mysql\u7cfb\u7edf\u53c2\u6570",permalink:"/docs/database/Mysql\u7cfb\u7edf\u53c2\u6570",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/database/Mysql\u7cfb\u7edf\u53c2\u6570.md",tags:[],version:"current",lastUpdatedAt:1689307169,formattedLastUpdatedAt:"2023\u5e747\u670814\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mysql\u7684COLLATE",permalink:"/docs/database/Mysql\u7684COLLATE"},next:{title:"Mysql\u9519\u8bef\u5904\u7406",permalink:"/docs/database/Mysql\u9519\u8bef\u5904\u7406"}},s={},p=[{value:"\u67e5\u770b\u6570\u636e\u5e93\u53c2\u6570",id:"\u67e5\u770b\u6570\u636e\u5e93\u53c2\u6570",level:2},{value:"\u5f00\u542f skip-name-resolve \u548c skip-networking \u4f18\u5316",id:"\u5f00\u542f-skip-name-resolve-\u548c-skip-networking-\u4f18\u5316",level:2},{value:"Percona Server",id:"percona-server",level:3},{value:"bind-address=IP",id:"bind-addressip",level:2},{value:"\u5bc6\u7801\u5f3a\u5ea6\u7b56\u7565",id:"\u5bc6\u7801\u5f3a\u5ea6\u7b56\u7565",level:2},{value:"Public Key Retrieval is not allowed",id:"public-key-retrieval-is-not-allowed",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u67e5\u770b\u6570\u636e\u5e93\u53c2\u6570"},"\u67e5\u770b\u6570\u636e\u5e93\u53c2\u6570"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"mysqladmin -u test -h 192.168.1.116 -p variables | grep -E 'skip_networking'")),(0,n.kt)("h2",{id:"\u5f00\u542f-skip-name-resolve-\u548c-skip-networking-\u4f18\u5316"},"\u5f00\u542f skip-name-resolve \u548c skip-networking \u4f18\u5316"),(0,n.kt)("p",null,"\u5728\u914d\u7f6e\u6587\u4ef6\u91cc","[","mysqld","]","\u4e0b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"skip-name-resolve\n\u4f7f\u7528 skip-name-resolve \u589e\u52a0\u8fdc\u7a0b\u8fde\u63a5\u901f\u5ea6,\u8be5\u9009\u9879\u8868\u793a\u7981\u7528 DNS \u89e3\u6790\uff0c\u5c5e\u4e8e\u5b98\u65b9\u4e00\u4e2a\u7cfb\u7edf\u4e0a\u7684\u7279\u6b8a\u8bbe\u5b9a\u4e0d\u7ba1\uff0c\u94fe\u63a5\u7684\u7684\u65b9\u5f0f\u662f\u7ecf\u8fc7 hosts \u6216\u662f IP \u7684\u6a21\u5f0f\uff0c\u4ed6\u90fd\u4f1a\u5bf9 DNS \u505a\u53cd\u67e5\uff0c\u7531\u4e8e\u53cd\u67e5\u89e3\u6790\u8fc7\u6162\uff0c\u5c31\u4f1a\u65e0\u6cd5\u5e94\u4ed8\u8fc7\u91cf\u7684\u67e5\u8be2\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"skip-networking\n\u5355\u673a\u8fd0\u884c MySQL \u4f7f\u7528 skip-networking \u5173\u95ed MySQL \u7684 TCP/IP \u8fde\u63a5\u65b9\u5f0f,\u5f00\u542f\u8be5\u9009\u9879\u540e\u5c31\u4e0d\u80fd\u8fdc\u7a0b\u8bbf\u95ee MySQL.",(0,n.kt)("inlineCode",{parentName:"p"},"SHOW VARIABLES LIKE 'skip_networking';")))),(0,n.kt)("h3",{id:"percona-server"},"Percona Server"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-log"},"#\n# The Percona Server 8.0 configuration file.\n#\n# For explanations see\n# http://dev.mysql.com/doc/mysql/en/server-system-variables.html\n\n[mysqld]\npid-file        = /var/run/mysqld/mysqld.pid\nsocket          = /var/run/mysqld/mysqld.sock\ndatadir         = /var/lib/mysql\nlog-error       = /var/log/mysql/error.log\n#skip-grant-tables\n#\u6ce8\u91ca\u6389\u4e0a\u884c\u5219skip-networking\u5173\u95ed\uff0c\u5426\u5219\u53ea\u53ef\u672c\u673a\u8fde\u63a5\n")),(0,n.kt)("h2",{id:"bind-addressip"},"bind-address=IP"),(0,n.kt)("p",null,"\u4e3a\u5b89\u5168\u8003\u8651\u5e0c\u671b\u6307\u5b9a\u7684 IP \u8bbf\u95ee MySQL\uff0c\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u589e\u52a0 bind-address=IP\uff0c\u524d\u63d0\u662f\u5173\u95ed skip-networking"),(0,n.kt)("h2",{id:"\u5bc6\u7801\u5f3a\u5ea6\u7b56\u7565"},"\u5bc6\u7801\u5f3a\u5ea6\u7b56\u7565"),(0,n.kt)("p",null,"\u67e5\u770b\u5bc6\u7801\u7b56\u7565",(0,n.kt)("inlineCode",{parentName:"p"},"show variables like 'validate_password%';"),"\n\u5c06\u5404\u4e2a\u5c5e\u6027\u4fee\u6539\u4e3a 0\uff0c\u5373\u53ef\u964d\u4f4e\u5bc6\u7801\u4e25\u683c\u5ea6"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"set global validate_password_length =0;\nset global validate_password_mixed_case_count=0;\nset global validate_password_number_count=0;\nset global validate_password_policy=0;\nset global validate_password_special_char_count =0;\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable_name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"validate_password_check_user_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OFF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"validate_password_dictionary_file"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"validate_password_length"),(0,n.kt)("td",{parentName:"tr",align:"left"},"4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"validate_password_mixed_case_count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"validate_password_number_count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"validate_password_policy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"LOW")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"validate_password_special_char_count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0")))),(0,n.kt)("p",null,"\u4fee\u6539\u540e\u91cd\u7f6e\u5bc6\u7801",(0,n.kt)("inlineCode",{parentName:"p"},"alter user 'root'@'localhost' identified by '1234';")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"mysql \u542f\u52a8\u5931\u8d25\u770b\u65e5\u5fd7\uff1a/var/log/mysqld.log")),(0,n.kt)("h2",{id:"public-key-retrieval-is-not-allowed"},"Public Key Retrieval is not allowed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"url \u4e2d\u6dfb\u52a0 allowPublicKeyRetrieval=true;"),(0,n.kt)("li",{parentName:"ul"},"\u5de5\u5177\u4e0a\u5728\u5c5e\u6027\u91cc\u5c06\u6b64\u9009\u9879\u8bbe\u4e3a true;")))}m.isMDXComponent=!0}}]);