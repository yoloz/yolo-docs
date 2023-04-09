"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[6869],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,k=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"database/SQL\u8bed\u53e5\u5206\u7c7b",id:"database/SQL\u8bed\u53e5\u5206\u7c7b",title:"SQL\u8bed\u53e5\u5206\u7c7b",description:"SQL(Structure Query Language)\u8bed\u8a00\u662f\u6570\u636e\u5e93\u7684\u6838\u5fc3\u8bed\u8a00\u3002",source:"@site/docs/database/SQL\u8bed\u53e5\u5206\u7c7b.md",sourceDirName:"database",slug:"/database/SQL\u8bed\u53e5\u5206\u7c7b",permalink:"/docs/database/SQL\u8bed\u53e5\u5206\u7c7b",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/database/SQL\u8bed\u53e5\u5206\u7c7b.md",tags:[],version:"current",lastUpdatedAt:1681052426,formattedLastUpdatedAt:"2023\u5e744\u67089\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SQL\u4e4bJoin\u8bed\u53e5",permalink:"/docs/database/SQL\u4e4bJoin\u8bed\u53e5"},next:{title:"SQL\u8fde\u63a5\u8bed\u53e5",permalink:"/docs/database/SQL\u8fde\u63a5\u8bed\u53e5"}},p={},u=[{value:"\u6570\u636e\u67e5\u8be2\u8bed\u8a00 DQL",id:"\u6570\u636e\u67e5\u8be2\u8bed\u8a00-dql",level:2},{value:"\u6570\u636e\u64cd\u7eb5\u8bed\u8a00 DML",id:"\u6570\u636e\u64cd\u7eb5\u8bed\u8a00-dml",level:2},{value:"\u6570\u636e\u5b9a\u4e49\u8bed\u8a00 DDL",id:"\u6570\u636e\u5b9a\u4e49\u8bed\u8a00-ddl",level:2},{value:"\u6570\u636e\u63a7\u5236\u8bed\u8a00 DCL",id:"\u6570\u636e\u63a7\u5236\u8bed\u8a00-dcl",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SQL(Structure Query Language)\u8bed\u8a00\u662f\u6570\u636e\u5e93\u7684\u6838\u5fc3\u8bed\u8a00\u3002"),(0,a.kt)("p",null,"SQL \u7684\u53d1\u5c55\u662f\u4ece 1974 \u5e74\u5f00\u59cb\u7684\uff0c\u5176\u53d1\u5c55\u8fc7\u7a0b\u5982\u4e0b\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n","1974 \u5e74-----\u7531 Boyce \u548c Chamberlin \u63d0\u51fa\uff0c\u5f53\u65f6\u79f0 SEQUEL\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","1976 \u5e74-----IBM \u516c\u53f8\u7684 Sanjase \u7814\u7a76\u6240\u5728\u7814\u5236 RDBMS SYSTEM R \u65f6\u6539\u4e3a SQL\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","1979 \u5e74-----ORACLE \u516c\u53f8\u53d1\u8868\u7b2c\u4e00\u4e2a\u57fa\u4e8e SQL \u7684\u5546\u4e1a\u5316 RDBMS \u4ea7\u54c1\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","1982 \u5e74-----IBM \u516c\u53f8\u51fa\u7248\u7b2c\u4e00\u4e2a RDBMS \u8bed\u8a00 SQL/DS\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","1985 \u5e74-----IBM \u516c\u53f8\u51fa\u7248\u7b2c\u4e00\u4e2a RDBMS \u8bed\u8a00 DB2\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","1986 \u5e74-----\u7f8e\u56fd\u56fd\u5bb6\u6807\u51c6\u5316\u7ec4\u7ec7 ANSI \u5ba3\u5e03 SQL \u4f5c\u4e3a\u6570\u636e\u5e93\u5de5\u4e1a\u6807\u51c6\u3002"),(0,a.kt)("p",null,"SQL \u662f\u4e00\u4e2a\u6807\u51c6\u7684\u6570\u636e\u5e93\u8bed\u8a00\uff0c\u662f\u9762\u5411\u96c6\u5408\u7684\u63cf\u8ff0\u6027\u975e\u8fc7\u7a0b\u5316\u8bed\u8a00\uff0c\u5373\u5927\u591a\u6570\u8bed\u53e5\u90fd\u662f\u72ec\u7acb\u6267\u884c\u7684\uff0c\u4e0e\u4e0a\u4e0b\u6587\u65e0\u5173\uff0c\u800c\u7edd\u5927\u90e8\u5206\u5e94\u7528\u90fd\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u8fc7\u7a0b\uff0c\u663e\u7136\u7528 SQL \u5b8c\u5168\u5b9e\u73b0\u8fd9\u4e9b\u529f\u80fd\u662f\u5f88\u56f0\u96be\u7684\u3002\u6240\u4ee5\u5927\u591a\u6570\u6570\u636e\u5e93\u516c\u53f8\u4e3a\u4e86\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u4f5c\u4e86\u5982\u4e0b\u4e24\u65b9\u9762\u7684\u5de5\u4f5c\uff1a(1)\u6269\u5145 SQL\uff0c\u5728 SQL \u4e2d\u5f15\u5165\u8fc7\u7a0b\u6027\u7ed3\u6784\uff1b(2)\u628a SQL \u5d4c\u5165\u5230\u9ad8\u7ea7\u8bed\u8a00\u4e2d\uff0c\u4ee5\u4fbf\u4e00\u8d77\u5b8c\u6210\u4e00\u4e2a\u5b8c\u6574\u7684\u5e94\u7528\u3002"),(0,a.kt)("p",null,"SQL \u8bed\u8a00\u5171\u5206\u4e3a\u56db\u5927\u7c7b\uff1a\u6570\u636e\u67e5\u8be2\u8bed\u8a00 DQL\uff0c\u6570\u636e\u64cd\u7eb5\u8bed\u8a00 DML\uff0c\u6570\u636e\u5b9a\u4e49\u8bed\u8a00 DDL\uff0c\u6570\u636e\u63a7\u5236\u8bed\u8a00 DCL\u3002"),(0,a.kt)("h2",{id:"\u6570\u636e\u67e5\u8be2\u8bed\u8a00-dql"},"\u6570\u636e\u67e5\u8be2\u8bed\u8a00 DQL"),(0,a.kt)("p",null,"\u6570\u636e\u67e5\u8be2\u8bed\u8a00 DQL \u57fa\u672c\u7ed3\u6784\u662f\u7531 SELECT \u5b50\u53e5\uff0cFROM \u5b50\u53e5\uff0cWHERE \u5b50\u53e5\u7ec4\u6210\u7684\u67e5\u8be2\u5757\uff1a"),(0,a.kt)("p",null,"SELECT <\u5b57\u6bb5\u540d\u8868> FROM <\u8868\u6216\u89c6\u56fe\u540d> WHERE <\u67e5\u8be2\u6761\u4ef6>"),(0,a.kt)("h2",{id:"\u6570\u636e\u64cd\u7eb5\u8bed\u8a00-dml"},"\u6570\u636e\u64cd\u7eb5\u8bed\u8a00 DML"),(0,a.kt)("p",null,"\u6570\u636e\u64cd\u7eb5\u8bed\u8a00 DML \u4e3b\u8981\u6709\u4e09\u79cd\u5f62\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u63d2\u5165\uff1aINSERT"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u65b0\uff1aUPDATE"),(0,a.kt)("li",{parentName:"ul"},"\u5220\u9664\uff1aDELETE")),(0,a.kt)("h2",{id:"\u6570\u636e\u5b9a\u4e49\u8bed\u8a00-ddl"},"\u6570\u636e\u5b9a\u4e49\u8bed\u8a00 DDL"),(0,a.kt)("p",null,"\u6570\u636e\u5b9a\u4e49\u8bed\u8a00 DDL \u7528\u6765\u521b\u5efa\u6570\u636e\u5e93\u4e2d\u7684\u5404\u79cd\u5bf9\u8c61-----\u8868\u3001\u89c6\u56fe\u3001\u7d22\u5f15\u3001\u540c\u4e49\u8bcd\u3001\u805a\u7c07\u7b49\u5982: CREATE TABLE/VIEW/INDEX/SYN/CLUSTER"),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"DDL \u64cd\u4f5c\u662f\u9690\u6027\u63d0\u4ea4\u7684,\u4e0d\u80fd rollback")),(0,a.kt)("h2",{id:"\u6570\u636e\u63a7\u5236\u8bed\u8a00-dcl"},"\u6570\u636e\u63a7\u5236\u8bed\u8a00 DCL"),(0,a.kt)("p",null,"\u6570\u636e\u63a7\u5236\u8bed\u8a00 DCL \u7528\u6765\u6388\u4e88\u6216\u56de\u6536\u8bbf\u95ee\u6570\u636e\u5e93\u7684\u67d0\u79cd\u7279\u6743\uff0c\u5e76\u63a7\u5236\u6570\u636e\u5e93\u64cd\u7eb5\u4e8b\u52a1\u53d1\u751f\u7684\u65f6\u95f4\u53ca\u6548\u679c\uff0c\u5bf9\u6570\u636e\u5e93\u5b9e\u884c\u76d1\u89c6\u7b49\u3002\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GRANT\uff1a\u6388\u6743"),(0,a.kt)("li",{parentName:"ul"},"ROLLBACK ","[WORK]"," TO ","[SAVEPOINT]","\uff1a\u56de\u9000\u5230\u67d0\u4e00\u70b9")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u56de\u6eda\u547d\u4ee4\u4f7f\u6570\u636e\u5e93\u72b6\u6001\u56de\u5230\u4e0a\u6b21\u6700\u540e\u63d0\u4ea4\u7684\u72b6\u6001")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"COMMIT ","[WORK]","\uff1a\u63d0\u4ea4")),(0,a.kt)("p",null,"\u5728\u6570\u636e\u5e93\u7684\u63d2\u5165\u3001\u5220\u9664\u548c\u4fee\u6539\u64cd\u4f5c\u65f6\uff0c\u53ea\u6709\u5f53\u4e8b\u52a1\u5728\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u65f6\u624d\u7b97\u5b8c\u6210\u3002\u5728\u4e8b\u52a1\u63d0\u4ea4\u524d,\u53ea\u6709\u64cd\u4f5c\u6570\u636e\u5e93\u7684\u8fd9\u4e2a\u4eba\u624d\u80fd\u6709\u6743\u770b\u5230\u6240\u505a\u7684\u4e8b\u60c5\uff0c\u522b\u4eba\u53ea\u6709\u5728\u6700\u540e\u63d0\u4ea4\u5b8c\u6210\u540e\u624d\u53ef\u4ee5\u770b\u5230\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u63d0\u4ea4\u6570\u636e\u6709\u4e09\u79cd\u7c7b\u578b\uff1a\u663e\u5f0f\u63d0\u4ea4\u3001\u9690\u5f0f\u63d0\u4ea4\u53ca\u81ea\u52a8\u63d0\u4ea4\u3002\u4e0b\u9762\u5206\u522b\u8bf4\u660e\u8fd9\u4e09\u79cd\u7c7b\u578b:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u663e\u5f0f\u63d0\u4ea4")),(0,a.kt)("p",{parentName:"admonition"},"\u7528 COMMIT \u547d\u4ee4\u76f4\u63a5\u5b8c\u6210\u7684\u63d0\u4ea4\u4e3a\u663e\u5f0f\u63d0\u4ea4\u3002\u5176\u683c\u5f0f\u4e3a\uff1aSQL>COMMIT\uff1b"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u9690\u5f0f\u63d0\u4ea4")),(0,a.kt)("p",{parentName:"admonition"},"\u7528 SQL \u547d\u4ee4\u95f4\u63a5\u5b8c\u6210\u7684\u63d0\u4ea4\u4e3a\u9690\u5f0f\u63d0\u4ea4\u3002\u8fd9\u4e9b\u547d\u4ee4\u662f\uff1a\nALTER\uff0cAUDIT\uff0cCOMMENT\uff0cCONNECT\uff0cCREATE\uff0cDISCONNECT\uff0cDROP\uff0c\nEXIT\uff0cGRANT\uff0cNOAUDIT\uff0cQUIT\uff0cREVOKE\uff0cRENAME\u3002"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u63d0\u4ea4")),(0,a.kt)("p",{parentName:"admonition"},"\u82e5\u628a AUTOCOMMIT \u8bbe\u7f6e\u4e3a ON\uff0c\u5219\u5728\u63d2\u5165\u3001\u4fee\u6539\u3001\u5220\u9664\u8bed\u53e5\u6267\u884c\u540e\uff0c\u7cfb\u7edf\u5c06\u81ea\u52a8\u8fdb\u884c\u63d0\u4ea4\uff0c\u8fd9\u5c31\u662f\u81ea\u52a8\u63d0\u4ea4\u3002\u5176\u683c\u5f0f\u4e3a\uff1aSQL>SET AUTOCOMMIT ON\uff1b")))}d.isMDXComponent=!0}}]);