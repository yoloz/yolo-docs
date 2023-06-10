"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[5178],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},k="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),k=d(a),o=r,N=k["".concat(m,".").concat(o)]||k[o]||g[o]||l;return a?n.createElement(N,p(p({ref:e},u),{},{components:a})):n.createElement(N,p({ref:e},u))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=o;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[k]="string"==typeof t?t:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},1479:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={},p=void 0,i={unversionedId:"golang/fmt\u7684\u5360\u4f4d\u7b26",id:"golang/fmt\u7684\u5360\u4f4d\u7b26",title:"fmt\u7684\u5360\u4f4d\u7b26",description:"golang \u7684 fmt \u5305\u5b9e\u73b0\u4e86\u683c\u5f0f\u5316 I/O \u51fd\u6570\uff0c\u7c7b\u4f3c\u4e8e C \u7684 printf \u548c scanf",source:"@site/docs/golang/fmt\u7684\u5360\u4f4d\u7b26.md",sourceDirName:"golang",slug:"/golang/fmt\u7684\u5360\u4f4d\u7b26",permalink:"/docs/golang/fmt\u7684\u5360\u4f4d\u7b26",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/golang/fmt\u7684\u5360\u4f4d\u7b26.md",tags:[],version:"current",lastUpdatedAt:1686370023,formattedLastUpdatedAt:"2023\u5e746\u670810\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"defer\u53ca\u5f02\u5e38\u5904\u7406",permalink:"/docs/golang/defer\u53ca\u5f02\u5e38\u5904\u7406"},next:{title:"new\u548cmake",permalink:"/docs/golang/new\u548cmake"}},m={},d=[{value:"\u666e\u901a\u5360\u4f4d\u7b26",id:"\u666e\u901a\u5360\u4f4d\u7b26",level:2},{value:"\u5e03\u5c14\u5360\u4f4d\u7b26",id:"\u5e03\u5c14\u5360\u4f4d\u7b26",level:2},{value:"\u6574\u6570\u5360\u4f4d\u7b26",id:"\u6574\u6570\u5360\u4f4d\u7b26",level:2},{value:"\u6d6e\u70b9\u6570\u548c\u590d\u6570\u7684\u7ec4\u6210\u90e8\u5206\uff08\u5b9e\u90e8\u548c\u865a\u90e8\uff09",id:"\u6d6e\u70b9\u6570\u548c\u590d\u6570\u7684\u7ec4\u6210\u90e8\u5206\u5b9e\u90e8\u548c\u865a\u90e8",level:2},{value:"\u5b57\u7b26\u4e32\u4e0e\u5b57\u8282\u5207\u7247",id:"\u5b57\u7b26\u4e32\u4e0e\u5b57\u8282\u5207\u7247",level:2},{value:"\u6307\u9488",id:"\u6307\u9488",level:2}],u={toc:d},k="wrapper";function g(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"golang \u7684 fmt \u5305\u5b9e\u73b0\u4e86\u683c\u5f0f\u5316 I/O \u51fd\u6570\uff0c\u7c7b\u4f3c\u4e8e C \u7684 printf \u548c scanf"),(0,r.kt)("h2",{id:"\u666e\u901a\u5360\u4f4d\u7b26"},"\u666e\u901a\u5360\u4f4d\u7b26"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5360\u4f4d\u7b26"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3e\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8f93\u51fa"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%v"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76f8\u5e94\u503c\u7684\u9ed8\u8ba4\u683c\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%v", people)'),(0,r.kt)("td",{parentName:"tr",align:null},"{zhangsan}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%+v"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6253\u5370\u7ed3\u6784\u4f53\u65f6\uff0c\u4f1a\u6dfb\u52a0\u5b57\u6bb5\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%+v", people)'),(0,r.kt)("td",{parentName:"tr",align:null},"{Name:zhangsan}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%#v"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76f8\u5e94\u503c\u7684 Go \u8bed\u6cd5\u8868\u793a"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("#v", people)'),(0,r.kt)("td",{parentName:"tr",align:null},'main.Human{Name:"zhangsan"}')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%T"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76f8\u5e94\u503c\u7684\u7c7b\u578b\u7684 Go \u8bed\u6cd5\u8868\u793a"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%T", people)'),(0,r.kt)("td",{parentName:"tr",align:null},"main.Human")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%%"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u9762\u4e0a\u7684\u767e\u5206\u53f7\uff0c\u5e76\u975e\u503c\u7684\u5360\u4f4d\u7b26"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%%")'),(0,r.kt)("td",{parentName:"tr",align:null},"%")))),(0,r.kt)("h2",{id:"\u5e03\u5c14\u5360\u4f4d\u7b26"},"\u5e03\u5c14\u5360\u4f4d\u7b26"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5360\u4f4d\u7b26"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3e\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8f93\u51fa"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%t"),(0,r.kt)("td",{parentName:"tr",align:null},"true \u6216 false"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%t", true)'),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h2",{id:"\u6574\u6570\u5360\u4f4d\u7b26"},"\u6574\u6570\u5360\u4f4d\u7b26"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5360\u4f4d\u7b26"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3e\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8f93\u51fa"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8c\u8fdb\u5236\u8868\u793a"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%b", 5)'),(0,r.kt)("td",{parentName:"tr",align:null},"101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76f8\u5e94 Unicode \u7801\u70b9\u6240\u8868\u793a\u7684\u5b57\u7b26"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%c", 0x4E2D)'),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5341\u8fdb\u5236\u8868\u793a"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%d", 0x12)'),(0,r.kt)("td",{parentName:"tr",align:null},"18")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%o"),(0,r.kt)("td",{parentName:"tr",align:null},"\u516b\u8fdb\u5236\u8868\u793a"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%d", 10)'),(0,r.kt)("td",{parentName:"tr",align:null},"12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%q"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u5f15\u53f7\u56f4\u7ed5\u7684\u5b57\u7b26\u5b57\u9762\u503c\uff0c\u7531 Go \u8bed\u6cd5\u5b89\u5168\u5730\u8f6c\u4e49"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%q", 0x4E2D)'),(0,r.kt)("td",{parentName:"tr",align:null},"'\u4e2d'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%x"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5341\u516d\u8fdb\u5236\u8868\u793a\uff0c\u5b57\u6bcd\u5f62\u5f0f\u4e3a\u5c0f\u5199(a-f)"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%x", 13)'),(0,r.kt)("td",{parentName:"tr",align:null},"d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%X"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5341\u516d\u8fdb\u5236\u8868\u793a\uff0c\u5b57\u6bcd\u5f62\u5f0f\u4e3a\u5927\u5199(A-F)"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%x", 13)'),(0,r.kt)("td",{parentName:"tr",align:null},"D")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%U"),(0,r.kt)("td",{parentName:"tr",align:null},'Unicode \u683c\u5f0f\uff1aU+1234\uff0c\u7b49\u540c\u4e8e "U+%04X"'),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%U", 0x4E2D)'),(0,r.kt)("td",{parentName:"tr",align:null},"U+4E2D")))),(0,r.kt)("h2",{id:"\u6d6e\u70b9\u6570\u548c\u590d\u6570\u7684\u7ec4\u6210\u90e8\u5206\u5b9e\u90e8\u548c\u865a\u90e8"},"\u6d6e\u70b9\u6570\u548c\u590d\u6570\u7684\u7ec4\u6210\u90e8\u5206\uff08\u5b9e\u90e8\u548c\u865a\u90e8\uff09"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5360\u4f4d\u7b26"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3e\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8f93\u51fa"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0\u5c0f\u6570\u90e8\u5206\u7684\uff0c\u6307\u6570\u4e3a\u4e8c\u7684\u5e42\u7684\u79d1\u5b66\u8ba1\u6570\u6cd5\uff0c\u4e0e strconv.FormatFloat \u7684 'b' \u8f6c\u6362\u683c\u5f0f\u4e00\u81f4,\u4f8b\u5982 -123456p-78"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%e"),(0,r.kt)("td",{parentName:"tr",align:null},"\u79d1\u5b66\u8ba1\u6570\u6cd5\uff0c\u4f8b\u5982 -1234.456e+78"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%e", 10.2)'),(0,r.kt)("td",{parentName:"tr",align:null},"1.020000E+01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6709\u5c0f\u6570\u70b9\u800c\u65e0\u6307\u6570\uff0c\u4f8b\u5982 123.456"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%f", 10.2)'),(0,r.kt)("td",{parentName:"tr",align:null},"10.200000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%g"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u60c5\u51b5\u9009\u62e9 %e \u6216 %f \u4ee5\u4ea7\u751f\u66f4\u7d27\u51d1\u7684\uff08\u65e0\u672b\u5c3e\u7684 0\uff09\u8f93\u51fa"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%g", 10.20)'),(0,r.kt)("td",{parentName:"tr",align:null},"10.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%G"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u60c5\u51b5\u9009\u62e9 %E \u6216 %f \u4ee5\u4ea7\u751f\u66f4\u7d27\u51d1\u7684\uff08\u65e0\u672b\u5c3e\u7684 0\uff09\u8f93\u51fa"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%G", 10.20+2i)'),(0,r.kt)("td",{parentName:"tr",align:null},"(10.2+2i)")))),(0,r.kt)("h2",{id:"\u5b57\u7b26\u4e32\u4e0e\u5b57\u8282\u5207\u7247"},"\u5b57\u7b26\u4e32\u4e0e\u5b57\u8282\u5207\u7247"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5360\u4f4d\u7b26"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3e\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8f93\u51fa"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%s"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u5b57\u7b26\u4e32\u8868\u793a\uff08string \u7c7b\u578b\u6216[]byte)"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%s", []byte("Go \u8bed\u8a00"))'),(0,r.kt)("td",{parentName:"tr",align:null},"Go \u8bed\u8a00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%q"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53cc\u5f15\u53f7\u56f4\u7ed5\u7684\u5b57\u7b26\u4e32\uff0c\u7531 Go \u8bed\u6cd5\u5b89\u5168\u5730\u8f6c\u4e49"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%q", "Go \u8bed\u8a00")'),(0,r.kt)("td",{parentName:"tr",align:null},'"Go \u8bed\u8a00"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%x"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5341\u516d\u8fdb\u5236\uff0c\u5c0f\u5199\u5b57\u6bcd\uff0c\u6bcf\u5b57\u8282\u4e24\u4e2a\u5b57\u7b26"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%x", "golang")'),(0,r.kt)("td",{parentName:"tr",align:null},"676f6c616e67")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%X"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5341\u516d\u8fdb\u5236\uff0c\u5927\u5199\u5b57\u6bcd\uff0c\u6bcf\u5b57\u8282\u4e24\u4e2a\u5b57\u7b26"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%X", "golang")'),(0,r.kt)("td",{parentName:"tr",align:null},"676F6C616E67")))),(0,r.kt)("h2",{id:"\u6307\u9488"},"\u6307\u9488"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5360\u4f4d\u7b26"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3e\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8f93\u51fa"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%p"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5341\u516d\u8fdb\u5236\u8868\u793a\uff0c\u524d\u7f00 0x"),(0,r.kt)("td",{parentName:"tr",align:null},'Printf("%p", &people)'),(0,r.kt)("td",{parentName:"tr",align:null},"0x4f57f0")))))}g.isMDXComponent=!0}}]);