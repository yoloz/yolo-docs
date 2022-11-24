"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[1702],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=u(n),c=r,g=s["".concat(o,".").concat(c)]||s[c]||m[c]||l;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2831:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={},i=void 0,p={unversionedId:"database/\u6570\u636e\u5e93\u7c7b\u578b",id:"database/\u6570\u636e\u5e93\u7c7b\u578b",title:"\u6570\u636e\u5e93\u7c7b\u578b",description:"Mysql",source:"@site/docs/database/\u6570\u636e\u5e93\u7c7b\u578b.md",sourceDirName:"database",slug:"/database/\u6570\u636e\u5e93\u7c7b\u578b",permalink:"/docs/database/\u6570\u636e\u5e93\u7c7b\u578b",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/database/\u6570\u636e\u5e93\u7c7b\u578b.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SQL\u8fde\u63a5\u8bed\u53e5",permalink:"/docs/database/SQL\u8fde\u63a5\u8bed\u53e5"},next:{title:"AIpine\u7cfb\u7edf",permalink:"/docs/devOps/AIpine\u7cfb\u7edf"}},o={},u=[{value:"Mysql",id:"mysql",level:2},{value:"pgsql",id:"pgsql",level:2}],d={toc:u};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mysql"},"Mysql"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},'"\u6d6e\u70b9\u578b"\u7684\u957f\u5ea6\u662f\u7528\u6765\u9650\u5236\u6570\u5b57\u5b58\u50a8\u8303\u56f4\u7684. \u6bd4\u5982 float(3,2) \u53ea\u80fd\u591f\u5199\u5165 0.00~999.99.'),(0,r.kt)("li",{parentName:"ul"},'"\u6574\u578b"\u7684\u957f\u5ea6\u5e76\u4e0d\u4f1a\u9650\u5236\u5b58\u50a8\u7684\u6570\u5b57\u8303\u56f4. \u6bd4\u5982, int \u548c int(3) \u7684\u5b58\u50a8\u8303\u56f4\u90fd\u662f -2147483648 ~ 2147483647, int unsigned \u548c int(3) unsigned \u7684\u5b58\u50a8\u8303\u56f4\u90fd\u662f 0 ~ 4294967295.'))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/integer-types.html"},"11.1.2 Integer Types (Exact Value) - INTEGER, INT, SMALLINT, TINYINT, MEDIUMINT, BIGINT"),"\nRequired Storage and Range for Integer Types Supported by MySQL:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Storage (Bytes)"),(0,r.kt)("th",{parentName:"tr",align:null},"Minimum Value Signed"),(0,r.kt)("th",{parentName:"tr",align:null},"Minimum Value Unsigned"),(0,r.kt)("th",{parentName:"tr",align:null},"Maximum Value Signed"),(0,r.kt)("th",{parentName:"tr",align:null},"Maximum Value Unsigned"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"-128"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"127"),(0,r.kt)("td",{parentName:"tr",align:null},"255")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"-32768"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"32767"),(0,r.kt)("td",{parentName:"tr",align:null},"65535")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MEDIUMINT"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"-8388608"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"8388607"),(0,r.kt)("td",{parentName:"tr",align:null},"16777215")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"-2147483648"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"2147483647"),(0,r.kt)("td",{parentName:"tr",align:null},"4294967295")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"-263"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"2^63-1"),(0,r.kt)("td",{parentName:"tr",align:null},"2^64-1")))),(0,r.kt)("h2",{id:"pgsql"},"pgsql"),(0,r.kt)("p",null,"\u7c7b\u4f3c mysql\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/sql-syntax-lexical.html#SQL-SYNTAX-CONSTANTS-NUMERIC"},"4.1.2.6. Numeric Constants")))}m.isMDXComponent=!0}}]);