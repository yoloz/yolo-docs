"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[3197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"database/Mysql\u7528\u6237\u76f8\u5173",id:"database/Mysql\u7528\u6237\u76f8\u5173",title:"Mysql\u7528\u6237\u76f8\u5173",description:"\u521b\u5efa",source:"@site/docs/database/Mysql\u7528\u6237\u76f8\u5173.md",sourceDirName:"database",slug:"/database/Mysql\u7528\u6237\u76f8\u5173",permalink:"/docs/database/Mysql\u7528\u6237\u76f8\u5173",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/database/Mysql\u7528\u6237\u76f8\u5173.md",tags:[],version:"current",lastUpdatedAt:1689307169,formattedLastUpdatedAt:"2023\u5e747\u670814\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mysql\u5bfc\u5165\u5bfc\u51fa",permalink:"/docs/database/Mysql\u5bfc\u5165\u5bfc\u51fa"},next:{title:"Mysql\u7684COLLATE",permalink:"/docs/database/Mysql\u7684COLLATE"}},s={},p=[{value:"\u521b\u5efa",id:"\u521b\u5efa",level:2},{value:"\u4fee\u6539",id:"\u4fee\u6539",level:2},{value:"\u5220\u9664",id:"\u5220\u9664",level:2},{value:"\u6743\u9650",id:"\u6743\u9650",level:2},{value:"\u8d4b\u6743",id:"\u8d4b\u6743",level:3},{value:"\u64a4\u6743",id:"\u64a4\u6743",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u521b\u5efa"},"\u521b\u5efa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"#\u6307\u5b9aip\uff1a192.118.1.1\u7684alex\u7528\u6237\u767b\u5f55\ncreate user 'alex'@'192.118.1.1' identified by '123';\n#\u6307\u5b9aip\uff1a192.118.1.\u5f00\u5934\u7684alex\u7528\u6237\u767b\u5f55\ncreate user 'alex'@'192.118.1.%' identified by '123';\n#\u6307\u5b9a\u4efb\u4f55ip\u7684alex\u7528\u6237\u767b\u5f55\ncreate user 'alex'@'%' identified by '123';\n")),(0,r.kt)("h2",{id:"\u4fee\u6539"},"\u4fee\u6539"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"#\u4fee\u6539\u5bc6\u7801\nSET PASSWORD FOR 'username'@'host' = PASSWORD('newpassword');\nSET PASSWORD = PASSWORD(\"newpassword\");   #\u4fee\u6539\u5f53\u524d\u7528\u6237\u5bc6\u7801\nmysqladmin -u\u7528\u6237\u540d -p\u65e7\u5bc6\u7801 password \u65b0\u5bc6\u7801  #-u\u7528\u6237\uff0c-p\u5bc6\u7801\u4e4b\u95f4\u4e0d\u8981\u7a7a\u683c\n#\u66f4\u65b0\u7528\u6237\u8868\nupdate mysql.user set authentication_string=password('\u65b0\u5bc6\u7801') where user='\u7528\u6237\u540d' and Host ='localhost';\n#\u4fee\u6539\u7528\u6237\nrename user '\u7528\u6237\u540d'@'IP\u5730\u5740' to '\u65b0\u7528\u6237\u540d'@'IP\u5730\u5740';\n")),(0,r.kt)("h2",{id:"\u5220\u9664"},"\u5220\u9664"),(0,r.kt)("p",null,"\u5220\u9664\u7528\u6237",(0,r.kt)("inlineCode",{parentName:"p"},"drop user '\u7528\u6237\u540d'@'IP\u5730\u5740';")),(0,r.kt)("h2",{id:"\u6743\u9650"},"\u6743\u9650"),(0,r.kt)("p",null,"\u67e5\u770b\u6743\u9650",(0,r.kt)("inlineCode",{parentName:"p"},"show grants for '\u7528\u6237'@'IP\u5730\u5740'")),(0,r.kt)("h3",{id:"\u8d4b\u6743"},"\u8d4b\u6743"),(0,r.kt)("p",null,"GRANT privileges ON dbName.tbName TO 'username'@'host'"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"privileges(SELECT,INSERT,UPDATE...),\u6240\u6709\u6743\u9650 ALL \u8868\u793a;"),(0,r.kt)("li",{parentName:"ul"},"\u6240\u6709\u6570\u636e\u5e93\u6216\u6240\u6709\u8868\u53ef\u7528","*","\u8868\u793a"),(0,r.kt)("li",{parentName:"ul"},"\u80fd\u7ed9\u5176\u4ed6\u7528\u6237\u6388\u6743\u5219\u540e\u9762\u8981\u52a0\u4e0a WITH GRANT OPTION"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"#\u6388\u6743alex\u7528\u6237\u4ec5\u5bf9db1.t1\u6587\u4ef6\u6709\u67e5\u8be2,\u63d2\u5165\u548c\u66f4\u65b0\u7684\u64cd\u4f5c\ngrant select,insert,update on db1.t1 to \"alex\"@'%';\n#\u8868\u793a\u6709\u6240\u6709\u7684\u6743\u9650\uff0c\u9664\u4e86grant\u8fd9\u4e2a\u547d\u4ee4\uff0c\u8fd9\u4e2a\u547d\u4ee4\u662froot\u624d\u6709\u7684\u3002alex\u7528\u6237\u5bf9db1\u4e0b\u7684t1\u6587\u4ef6\u6709\u4efb\u610f\u64cd\u4f5c\ngrant all privileges on db1.t1 to \"alex\"@'%';\n#alex\u7528\u6237\u5bf9db1\u6570\u636e\u5e93\u4e2d\u7684\u6587\u4ef6\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\ngrant all privileges on db1.* to \"alex\"@'%';\n#alex\u7528\u6237\u5bf9\u6240\u6709\u6570\u636e\u5e93\u4e2d\u6587\u4ef6\u6709\u4efb\u4f55\u64cd\u4f5c\ngrant all privileges on *.* to \"alex\"@'%';\n#\u80fd\u8d4b\u6743\u7ed9\u5176\u4ed6\u7528\u6237\nGRANT ALL ON *.* TO 'pig'@'%' WITH GRANT OPTION;\n")),(0,r.kt)("h3",{id:"\u64a4\u6743"},"\u64a4\u6743"),(0,r.kt)("p",null,"REVOKE privileges ON databasename.tablename FROM 'username'@'host';"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"#\u53d6\u6d88alex\u7528\u6237\u5bf9db1\u7684t1\u6587\u4ef6\u7684\u4efb\u610f\u64cd\u4f5c\nrevoke all on db1.t1 from 'alex'@\"%\";\n#\u53d6\u6d88alex\u7528\u6237\u5bf9\u6570\u636e\u5e93db1\u7684\u6240\u6709\u8868\u7684\u6240\u6709\u6743\u9650\nrevoke all on db1.* from 'alex'@\"%\";\n#\u53d6\u6d88alex\u7528\u6237\u6240\u6709\u6570\u636e\u5e93\u7684\u6240\u6709\u7684\u8868\u7684\u6743\u9650\nrevoke all privileges on *.* from 'alex'@'%';\n")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8d4b\u6743\u548c\u64a4\u6743\u7684\u5bf9\u8c61\u8981\u5bf9\u5e94\uff0c\u5426\u5219\u64a4\u6743\u4f1a\u65e0\u6548\uff0c\u5982\uff1a"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u6388\u6743\u7684\u65f6\u5019\u662f\u8fd9\u6837\u7684(\u6216\u7c7b\u4f3c\u7684):GRANT SELECT ON test.user TO 'pig'@'%', \u5219\u4f7f\u7528 REVOKE SELECT ON ",(0,r.kt)("em",{parentName:"li"},".")," FROM 'pig'@'%';\u5e76\u4e0d\u80fd\u64a4\u9500\u8be5\u7528\u6237\u5bf9 test \u6570\u636e\u5e93\u4e2d user \u8868\u7684 SELECT \u64cd\u4f5c;"),(0,r.kt)("li",{parentName:"ul"},"\u6388\u6743\u7684\u65f6\u5019\u662f\u8fd9\u6837\u7684:GRANT SELECT ON ",(0,r.kt)("em",{parentName:"li"},".")," TO 'pig'@'%';\u5219 REVOKE SELECT ON test.user FROM 'pig'@'%';\u4e5f\u4e0d\u80fd\u64a4\u9500\u8be5\u7528\u6237\u5bf9 test \u6570\u636e\u5e93\u4e2d user \u8868\u7684 Select \u6743\u9650."))))}c.isMDXComponent=!0}}]);