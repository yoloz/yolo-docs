"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[5250],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>E});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",L={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),p=l,E=m["".concat(c,".").concat(p)]||m[p]||L[p]||r;return n?a.createElement(E,i(i({ref:t},s),{},{components:n})):a.createElement(E,i({ref:t},s))}));function E(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>L,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r={},i=void 0,o={unversionedId:"database/Mysql\u7684COLLATE",id:"database/Mysql\u7684COLLATE",title:"Mysql\u7684COLLATE",description:"\u5728 mysql \u4e2d\u6267\u884cshow create table \u6307\u4ee4\uff0c\u53ef\u4ee5\u770b\u5230\u4e00\u5f20\u8868\u7684\u5efa\u8868\u8bed\u53e5\uff0cexample \u5982\u4e0b\uff1a",source:"@site/docs/database/Mysql\u7684COLLATE.md",sourceDirName:"database",slug:"/database/Mysql\u7684COLLATE",permalink:"/docs/database/Mysql\u7684COLLATE",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/database/Mysql\u7684COLLATE.md",tags:[],version:"current",lastUpdatedAt:1681551353,formattedLastUpdatedAt:"2023\u5e744\u670815\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mysql\u7528\u6237\u76f8\u5173",permalink:"/docs/database/Mysql\u7528\u6237\u76f8\u5173"},next:{title:"Mysql\u7cfb\u7edf\u53c2\u6570",permalink:"/docs/database/Mysql\u7cfb\u7edf\u53c2\u6570"}},c={},u=[{value:"\u5404\u79cd COLLATE \u7684\u533a\u522b",id:"\u5404\u79cd-collate-\u7684\u533a\u522b",level:2},{value:"utf8mb4_bin \u7684\u6bd4\u8f83\u65b9\u6cd5\u5176\u5b9e\u5c31\u662f\u76f4\u63a5\u5c06\u6240\u6709\u5b57\u7b26\u770b\u4f5c\u4e8c\u8fdb\u5236\u4e32\uff0c\u7136\u540e\u4ece\u6700\u9ad8\u4f4d\u5f80\u6700\u4f4e\u4f4d\u6bd4\u5bf9\u3002\u6240\u4ee5\u5f88\u663e\u7136\u5b83\u662f\u533a\u5206\u5927\u5c0f\u5199\u7684\u3002",id:"utf8mb4_bin-\u7684\u6bd4\u8f83\u65b9\u6cd5\u5176\u5b9e\u5c31\u662f\u76f4\u63a5\u5c06\u6240\u6709\u5b57\u7b26\u770b\u4f5c\u4e8c\u8fdb\u5236\u4e32\u7136\u540e\u4ece\u6700\u9ad8\u4f4d\u5f80\u6700\u4f4e\u4f4d\u6bd4\u5bf9\u6240\u4ee5\u5f88\u663e\u7136\u5b83\u662f\u533a\u5206\u5927\u5c0f\u5199\u7684",level:3},{value:"utf8mb4_unicode_ci \u548c utf8mb4_general_ci",id:"utf8mb4_unicode_ci-\u548c-utf8mb4_general_ci",level:3},{value:"COLLATE \u8bbe\u7f6e\u7ea7\u522b\u53ca\u5176\u4f18\u5148\u7ea7",id:"collate-\u8bbe\u7f6e\u7ea7\u522b\u53ca\u5176\u4f18\u5148\u7ea7",level:2}],s={toc:u},m="wrapper";function L(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728 mysql \u4e2d\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"show create table <tablename>"),"\u6307\u4ee4\uff0c\u53ef\u4ee5\u770b\u5230\u4e00\u5f20\u8868\u7684\u5efa\u8868\u8bed\u53e5\uff0cexample \u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `table1` (\n\xa0 \xa0 `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,\n\xa0 \xa0 `field1` text COLLATE utf8_unicode_ci NOT NULL COMMENT '\u5b57\u6bb51',\n\xa0 \xa0 `field2` varchar(128) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '\u5b57\u6bb52',\n\xa0 \xa0 PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8_unicode_ci;\n")),(0,l.kt)("p",null,"COLLATE \u662f\u7528\u6765\u505a\u4ec0\u4e48\u7684\uff1f\u6240\u8c13 utf8_unicode_ci\uff0c\u5176\u5b9e\u662f\u7528\u6765\u6392\u5e8f\u7684\u89c4\u5219\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e mysql \u4e2d\u90a3\u4e9b\u5b57\u7b26\u7c7b\u578b\u7684\u5217\uff0c\u5982 VARCHAR\uff0cCHAR\uff0cTEXT \u7c7b\u578b\u7684\u5217\uff0c\u90fd\u9700\u8981\u6709\u4e00\u4e2a COLLATE \u7c7b\u578b\u6765\u544a\u77e5 mysql \u5982\u4f55\u5bf9\u8be5\u5217\u8fdb\u884c\u6392\u5e8f\u548c\u6bd4\u8f83\u3002\u7b80\u800c\u8a00\u4e4b\uff0cCOLLATE \u4f1a\u5f71\u54cd\u5230 ORDER BY \u8bed\u53e5\u7684\u987a\u5e8f\uff0c\u4f1a\u5f71\u54cd\u5230 WHERE \u6761\u4ef6\u4e2d\u5927\u4e8e\u5c0f\u4e8e\u53f7\u7b5b\u9009\u51fa\u6765\u7684\u7ed3\u679c\uff0c\u4f1a\u5f71\u54cd",(0,l.kt)("strong",{parentName:"p"},"DISTINCT"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"GROUP BY"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"HAVING"),"\u8bed\u53e5\u7684\u67e5\u8be2\u7ed3\u679c\u3002\u53e6\u5916\uff0cmysql \u5efa\u7d22\u5f15\u7684\u65f6\u5019\uff0c\u5982\u679c\u7d22\u5f15\u5217\u662f\u5b57\u7b26\u7c7b\u578b\uff0c\u4e5f\u4f1a\u5f71\u54cd\u7d22\u5f15\u521b\u5efa\uff0c\u53ea\u4e0d\u8fc7\u8fd9\u79cd\u5f71\u54cd\u6211\u4eec\u611f\u77e5\u4e0d\u5230\u3002\u603b\u4e4b\uff0c\u51e1\u662f\u6d89\u53ca\u5230\u5b57\u7b26\u7c7b\u578b\u6bd4\u8f83\u6216\u6392\u5e8f\u7684\u5730\u65b9\uff0c\u90fd\u4f1a\u548c COLLATE \u6709\u5173\u3002")),(0,l.kt)("h2",{id:"\u5404\u79cd-collate-\u7684\u533a\u522b"},"\u5404\u79cd COLLATE \u7684\u533a\u522b"),(0,l.kt)("p",null,"COLLATE \u901a\u5e38\u662f\u548c\u6570\u636e\u7f16\u7801\uff08CHARSET\uff09\u76f8\u5173\u7684\uff0c\u4e00\u822c\u6765\u8bf4\u6bcf\u79cd CHARSET \u90fd\u6709\u591a\u79cd\u5b83\u6240\u652f\u6301\u7684 COLLATE\uff0c\u5e76\u4e14\u6bcf\u79cd CHARSET \u90fd\u6307\u5b9a\u4e00\u79cd COLLATE \u4e3a\u9ed8\u8ba4\u503c\u3002\u4f8b\u5982 Latin1 \u7f16\u7801\u7684\u9ed8\u8ba4 COLLATE \u4e3a latin1_swedish_ci\uff0cGBK \u7f16\u7801\u7684\u9ed8\u8ba4 COLLATE \u4e3a gbk_chinese_ci\uff0cutf8mb4 \u7f16\u7801\u7684\u9ed8\u8ba4\u503c\u4e3a utf8mb4_general_ci\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u987a\u4fbf\u8bb2\u4e2a\u9898\u5916\u8bdd\uff0cmysql \u4e2d\u6709 utf8 \u548c utf8mb4 \u4e24\u79cd\u7f16\u7801\uff0c\u5728 mysql \u4e2d\u8bf7\u5927\u5bb6\u5fd8\u8bb0",(0,l.kt)("strong",{parentName:"p"},"utf8"),"\uff0c\u6c38\u8fdc\u4f7f\u7528",(0,l.kt)("strong",{parentName:"p"},"utf8mb4"),"\u3002\u8fd9\u662f mysql \u7684\u4e00\u4e2a\u9057\u7559\u95ee\u9898\uff0cmysql \u4e2d\u7684 utf8 \u6700\u591a\u53ea\u80fd\u652f\u6301 3bytes \u957f\u5ea6\u7684\u5b57\u7b26\u7f16\u7801\uff0c\u5bf9\u4e8e\u4e00\u4e9b\u9700\u8981\u5360\u636e 4bytes \u7684\u6587\u5b57\uff0cmysql \u7684 utf8 \u5c31\u4e0d\u652f\u6301\u4e86\uff0c\u8981\u4f7f\u7528 utf8mb4 \u624d\u884c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f88\u591a COLLATE \u90fd\u5e26\u6709","_","ci \u5b57\u6837\uff0c\u8fd9\u662f Case Insensitive \u7684\u7f29\u5199\uff0c\u5373\u5927\u5c0f\u5199\u65e0\u5173"),'\uff0c\u4e5f\u5c31\u662f\u8bf4"A"\u548c"a"\u5728\u6392\u5e8f\u548c\u6bd4\u8f83\u7684\u65f6\u5019\u662f\u4e00\u89c6\u540c\u4ec1\u7684\u3002',(0,l.kt)("inlineCode",{parentName:"p"},'selection * from table1 where field1="a"'),'\u540c\u6837\u53ef\u4ee5\u628a field1 \u4e3a"A"\u7684\u503c\u9009\u51fa\u6765\u3002\u4e0e\u6b64\u540c\u65f6\uff0c',(0,l.kt)("strong",{parentName:"p"},"\u5bf9\u4e8e\u90a3\u4e9b","_","cs \u540e\u7f00\u7684 COLLATE\uff0c\u5219\u662f Case Sensitive\uff0c\u5373\u5927\u5c0f\u5199\u654f\u611f\u7684"),"\u3002"),(0,l.kt)("p",null,"\u5728 mysql \u4e2d\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"show collation"),"\u6307\u4ee4\u53ef\u4ee5\u67e5\u770b\u5230 mysql \u6240\u652f\u6301\u7684\u6240\u6709 COLLATE\u3002\u5728\u56fd\u5185\u6bd4\u8f83\u5e38\u7528\u7684\u662f utf8mb4_general_ci\uff08\u9ed8\u8ba4\uff09\u3001utf8mb4_unicode_ci\u3001utf8mb4_bin \u8fd9\u4e09\u4e2a\u3002\u6211\u4eec\u6765\u63a2\u7a76\u4e00\u4e0b\u8fd9\u4e09\u4e2a\u7684\u533a\u522b\uff1a"),(0,l.kt)("h3",{id:"utf8mb4_bin-\u7684\u6bd4\u8f83\u65b9\u6cd5\u5176\u5b9e\u5c31\u662f\u76f4\u63a5\u5c06\u6240\u6709\u5b57\u7b26\u770b\u4f5c\u4e8c\u8fdb\u5236\u4e32\u7136\u540e\u4ece\u6700\u9ad8\u4f4d\u5f80\u6700\u4f4e\u4f4d\u6bd4\u5bf9\u6240\u4ee5\u5f88\u663e\u7136\u5b83\u662f\u533a\u5206\u5927\u5c0f\u5199\u7684"},"utf8mb4_bin \u7684\u6bd4\u8f83\u65b9\u6cd5\u5176\u5b9e\u5c31\u662f\u76f4\u63a5\u5c06\u6240\u6709\u5b57\u7b26\u770b\u4f5c\u4e8c\u8fdb\u5236\u4e32\uff0c\u7136\u540e\u4ece\u6700\u9ad8\u4f4d\u5f80\u6700\u4f4e\u4f4d\u6bd4\u5bf9\u3002\u6240\u4ee5\u5f88\u663e\u7136\u5b83\u662f\u533a\u5206\u5927\u5c0f\u5199\u7684\u3002"),(0,l.kt)("h3",{id:"utf8mb4_unicode_ci-\u548c-utf8mb4_general_ci"},"utf8mb4_unicode_ci \u548c utf8mb4_general_ci"),(0,l.kt)("p",null,'\u5bf9\u4e8e\u4e2d\u6587\u548c\u82f1\u6587\u6765\u8bf4\uff0c\u5176\u5b9e\u662f\u6ca1\u6709\u4efb\u4f55\u533a\u522b\u7684\u3002\u5bf9\u4e8e\u6211\u4eec\u5f00\u53d1\u7684\u56fd\u5185\u4f7f\u7528\u7684\u7cfb\u7edf\u6765\u8bf4\uff0c\u968f\u4fbf\u9009\u54ea\u4e2a\u90fd\u884c\u3002\u53ea\u662f\u5bf9\u4e8e\u67d0\u4e9b\u897f\u65b9\u56fd\u5bb6\u7684\u5b57\u6bcd\u6765\u8bf4\uff0cutf8mb4_unicode_ci \u4f1a\u6bd4 utf8mb4_general_ci \u66f4\u7b26\u5408\u4ed6\u4eec\u7684\u8bed\u8a00\u4e60\u60ef\u4e00\u4e9b\uff0cgeneral \u662f mysql \u4e00\u4e2a\u6bd4\u8f83\u8001\u7684\u6807\u51c6\u4e86\u3002\u4f8b\u5982\uff0c\u5fb7\u8bed\u5b57\u6bcd\u201c\xdf\u201d\uff0c\u5728 utf8mb4_unicode_ci \u4e2d\u662f\u7b49\u4ef7\u4e8e"ss"\u4e24\u4e2a\u5b57\u6bcd\u7684\uff08\u8fd9\u662f\u7b26\u5408\u5fb7\u56fd\u4eba\u4e60\u60ef\u7684\u505a\u6cd5\uff09\uff0c\u800c\u5728 utf8mb4_general_ci \u4e2d\uff0c\u5b83\u5374\u548c\u5b57\u6bcd\u201cs\u201d\u7b49\u4ef7\u3002\u4e0d\u8fc7\uff0c\u8fd9\u4e24\u79cd\u7f16\u7801\u7684\u90a3\u4e9b\u5fae\u5c0f\u7684\u533a\u522b\uff0c\u5bf9\u4e8e\u6b63\u5e38\u7684\u5f00\u53d1\u6765\u8bf4\uff0c\u5f88\u96be\u611f\u77e5\u5230\u3002\u672c\u8eab\u6211\u4eec\u4e5f\u5f88\u5c11\u76f4\u63a5\u7528\u6587\u5b57\u5b57\u6bb5\u53bb\u6392\u5e8f\uff0c\u9000\u4e00\u6b65\u8bf4\uff0c\u5373\u4f7f\u8fd9\u4e2a\u5b57\u6bcd\u6392\u9519\u4e86\u4e00\u4e24\u4e2a\uff0c\u771f\u7684\u80fd\u7ed9\u7cfb\u7edf\u5e26\u6765\u707e\u96be\u6027\u540e\u679c\u4e48\uff1f\u4ece\u7f51\u4e0a\u627e\u7684\u5404\u79cd\u5e16\u5b50\u8ba8\u8bba\u6765\u8bf4\uff0c\u66f4\u591a\u4eba\u63a8\u8350\u4f7f\u7528 utf8mb4_unicode_ci\uff0c\u4f46\u662f\u5bf9\u4e8e\u4f7f\u7528\u4e86\u9ed8\u8ba4\u503c\u7684\u7cfb\u7edf\uff0c\u4e5f\u5e76\u6ca1\u6709\u975e\u5e38\u6392\u65a5\uff0c\u5e76\u4e0d\u8ba4\u4e3a\u6709\u4ec0\u4e48\u5927\u95ee\u9898\u3002\u7ed3\u8bba\uff1a\u63a8\u8350\u4f7f\u7528 utf8mb4_unicode_ci\uff0c\u5bf9\u4e8e\u5df2\u7ecf\u7528\u4e86 utf8mb4_general_ci \u7684\u7cfb\u7edf\uff0c\u4e5f\u6ca1\u6709\u5fc5\u8981\u82b1\u65f6\u95f4\u6539\u9020\u3002'),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u4ece mysql 8.0 \u5f00\u59cb\uff0cmysql \u9ed8\u8ba4\u7684 CHARSET \u5df2\u7ecf\u4e0d\u518d\u662f Latin1 \u4e86\uff0c\u6539\u4e3a\u4e86 utf8mb4\uff0c\u5e76\u4e14\u9ed8\u8ba4\u7684 COLLATE \u4e5f\u6539\u4e3a\u4e86 utf8mb4_0900_ai_ci\u3002utf8mb4_0900_ai_ci \u5927\u4f53\u4e0a\u5c31\u662f unicode \u7684\u8fdb\u4e00\u6b65\u7ec6\u5206\uff0c0900 \u6307\u4ee3 unicode \u6bd4\u8f83\u7b97\u6cd5\u7684\u7f16\u53f7\uff08 Unicode Collation Algorithm version\uff09\uff0cai \u8868\u793a accent insensitive\uff08\u53d1\u97f3\u65e0\u5173\uff09\uff0c\u4f8b\u5982 e, \xe8, \xe9, \xea \u548c \xeb \u662f\u4e00\u89c6\u540c\u4ec1\u7684\u3002")),(0,l.kt)("h2",{id:"collate-\u8bbe\u7f6e\u7ea7\u522b\u53ca\u5176\u4f18\u5148\u7ea7"},"COLLATE \u8bbe\u7f6e\u7ea7\u522b\u53ca\u5176\u4f18\u5148\u7ea7"),(0,l.kt)("p",null,"\u8bbe\u7f6e COLLATE \u53ef\u4ee5\u5728\u5b9e\u4f8b\u7ea7\u522b\u3001\u5e93\u7ea7\u522b\u3001\u8868\u7ea7\u522b\u3001\u5217\u7ea7\u522b\u3001\u4ee5\u53ca SQL \u6307\u5b9a\u3002\u5b9e\u4f8b\u7ea7\u522b\u7684 COLLATE \u8bbe\u7f6e\u5c31\u662f mysql \u914d\u7f6e\u6587\u4ef6\u6216\u542f\u52a8\u6307\u4ee4\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"collation_connection"),"\u7cfb\u7edf\u53d8\u91cf\u3002"),(0,l.kt)("p",null,"\u5e93\u7ea7\u522b\u8bbe\u7f6e COLLATE \u7684\u8bed\u53e5\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE <db_name> DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\n")),(0,l.kt)("p",null,"\u5982\u679c\u5e93\u7ea7\u522b\u6ca1\u6709\u8bbe\u7f6e CHARSET \u548c COLLATE\uff0c\u5219\u5e93\u7ea7\u522b\u9ed8\u8ba4\u7684 CHARSET \u548c COLLATE \u4f7f\u7528\u5b9e\u4f8b\u7ea7\u522b\u7684\u8bbe\u7f6e\u3002\u5728 mysql8.0 \u4ee5\u4e0b\u7248\u672c\u4e2d\uff0c\u4f60\u5982\u679c\u4ec0\u4e48\u90fd\u4e0d\u4fee\u6539\uff0c\u9ed8\u8ba4\u7684 CHARSET \u662f Latin1\uff0c\u9ed8\u8ba4\u7684 COLLATE \u662f latin1_swedish_ci\u3002\u4ece mysql8.0 \u5f00\u59cb\uff0c\u9ed8\u8ba4\u7684 CHARSET \u5df2\u7ecf\u6539\u4e3a\u4e86 utf8mb4\uff0c\u9ed8\u8ba4\u7684 COLLATE \u6539\u4e3a\u4e86 utf8mb4_0900_ai_ci\u3002"),(0,l.kt)("p",null,"\u8868\u7ea7\u522b\u7684 COLLATE \u8bbe\u7f6e\uff0c\u5219\u662f\u5728 CREATE TABLE \u7684\u65f6\u5019\u52a0\u4e0a\u76f8\u5173\u8bbe\u7f6e\u8bed\u53e5\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE () ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;\n")),(0,l.kt)("p",null,"\u5982\u679c\u8868\u7ea7\u522b\u6ca1\u6709\u8bbe\u7f6e CHARSET \u548c COLLATE\uff0c\u5219\u8868\u7ea7\u522b\u4f1a\u7ee7\u627f\u5e93\u7ea7\u522b\u7684 CHARSET \u4e0e COLLATE\u3002"),(0,l.kt)("p",null,"\u5217\u7ea7\u522b\u7684\u8bbe\u7f6e\uff0c\u5219\u5728 CREATE TABLE \u4e2d\u58f0\u660e\u5217\u7684\u65f6\u5019\u6307\u5b9a\uff0c\u4f8b\u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE (\n`field1` VARCHAR\uff0864\uff09 CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',\n-- .....\n)\n")),(0,l.kt)("p",null,"\u5982\u679c\u5217\u7ea7\u522b\u6ca1\u6709\u8bbe\u7f6e CHARSET \u548c COLATE\uff0c\u5219\u5217\u7ea7\u522b\u4f1a\u7ee7\u627f\u8868\u7ea7\u522b\u7684 CHARSET \u4e0e COLLATE\u3002"),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728\u5199 SQL \u67e5\u8be2\u7684\u65f6\u5019\u663e\u793a\u58f0\u660e COLLATE \u6765\u8986\u76d6\u4efb\u4f55\u5e93\u8868\u5217\u7684 COLLATE \u8bbe\u7f6e\uff0c\u4e0d\u592a\u5e38\u7528\uff0c\u4e86\u89e3\u5373\u53ef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT field1 COLLATE utf8mb4_general_ci FROM table1;\n\nSELECT field1, field2 FROM table1 ORDER BY field1 COLLATE utf8mb4_unicode_ci;\n")),(0,l.kt)("p",null,"\u5982\u679c\u5168\u90fd\u663e\u793a\u8bbe\u7f6e\u4e86\uff0c\u90a3\u4e48\u4f18\u5148\u7ea7\u987a\u5e8f\u662f SQL \u8bed\u53e5 > \u5217\u7ea7\u522b\u8bbe\u7f6e > \u8868\u7ea7\u522b\u8bbe\u7f6e > \u5e93\u7ea7\u522b\u8bbe\u7f6e > \u5b9e\u4f8b\u7ea7\u522b\u8bbe\u7f6e\u3002\u4e5f\u5c31\u662f\u8bf4\u5217\u4e0a\u6240\u6307\u5b9a\u7684 COLLATE \u53ef\u4ee5\u8986\u76d6\u8868\u4e0a\u6307\u5b9a\u7684 COLLATE\uff0c\u8868\u4e0a\u6307\u5b9a\u7684 COLLATE \u53ef\u4ee5\u8986\u76d6\u5e93\u7ea7\u522b\u7684 COLLATE\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u7ee7\u627f\u4e0b\u4e00\u7ea7\u7684\u8bbe\u7f6e\u3002\u5373\u5217\u4e0a\u9762\u6ca1\u6709\u6307\u5b9a COLLATE\uff0c\u5219\u8be5\u5217\u7684 COLLATE \u548c\u8868\u4e0a\u8bbe\u7f6e\u7684\u4e00\u6837\u3002"))}L.isMDXComponent=!0}}]);