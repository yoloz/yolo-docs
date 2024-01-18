"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[2560],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"java/\u83b7\u53d6jar\u6587\u4ef6\u8def\u5f84",id:"java/\u83b7\u53d6jar\u6587\u4ef6\u8def\u5f84",title:"\u83b7\u53d6jar\u6587\u4ef6\u8def\u5f84",description:"springboot\u5305",source:"@site/docs/java/\u83b7\u53d6jar\u6587\u4ef6\u8def\u5f84.md",sourceDirName:"java",slug:"/java/\u83b7\u53d6jar\u6587\u4ef6\u8def\u5f84",permalink:"/docs/java/\u83b7\u53d6jar\u6587\u4ef6\u8def\u5f84",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/java/\u83b7\u53d6jar\u6587\u4ef6\u8def\u5f84.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7ebf\u7a0b\u5b89\u5168\u7684\u5355\u4f8b",permalink:"/docs/java/\u7ebf\u7a0b\u5b89\u5168\u7684\u5355\u4f8b"},next:{title:"\u865a\u62df\u5185\u5b58\u9ad8\u7684\u95ee\u9898",permalink:"/docs/java/\u865a\u62df\u5185\u5b58\u9ad8\u7684\u95ee\u9898"}},p={},c=[{value:"<code>springboot</code>\u5305",id:"springboot\u5305",level:2},{value:"\u4e00\u822c<code>jar</code>\u6587\u4ef6",id:"\u4e00\u822cjar\u6587\u4ef6",level:2},{value:"\u4f7f\u7528\u7c7b\u8def\u5f84",id:"\u4f7f\u7528\u7c7b\u8def\u5f84",level:3},{value:"\u4f7f\u7528 JVM",id:"\u4f7f\u7528-jvm",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"springboot\u5305"},(0,a.kt)("inlineCode",{parentName:"h2"},"springboot"),"\u5305"),(0,a.kt)("p",null,"\u5176\u5185\u90e8\u7c7b\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u83b7\u53d6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ApplicationHome h = new ApplicationHome(getClass());\nFile jarF = h.getSource();\nSystem.out.println(jarF.getParentFile().toString());\n")),(0,a.kt)("h2",{id:"\u4e00\u822cjar\u6587\u4ef6"},"\u4e00\u822c",(0,a.kt)("inlineCode",{parentName:"h2"},"jar"),"\u6587\u4ef6"),(0,a.kt)("h3",{id:"\u4f7f\u7528\u7c7b\u8def\u5f84"},"\u4f7f\u7528\u7c7b\u8def\u5f84"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String path = this.getClass().getProtectionDomain().getCodeSource().getLocation().getPath();\n// \u7a0b\u5e8f\u5df2\u7ecf\u88ab\u6253\u5305\u6210jar\u5305\uff0cgetPath()\u548cgetFile()\u5728\u8fd9\u91cc\u7684\u8fd4\u56de\u503c\u662f\u4e00\u6837\u7684\uff1a/xxx/xxx.jar\u8fd9\u79cd\u5f62\u5f0f\nString path = this.getClass().getProtectionDomain().getCodeSource().getLocation().getFile();\n// \u5982\u679c\u8def\u5f84\u5305\u542bUnicode\u5b57\u7b26\u5982\u4e2d\u6587\uff0c\u8fd8\u9700\u8981\u5c06\u8def\u5f84\u8f6c\u7801\npath = java.net.URLDecoder.decode(path, "UTF-8");\n')),(0,a.kt)("h3",{id:"\u4f7f\u7528-jvm"},"\u4f7f\u7528 JVM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'//\u5229\u7528java\u8fd0\u884c\u65f6\u7684\u7cfb\u7edf\u5c5e\u6027\u6765\u5f97\u5230jar\u6587\u4ef6\u4f4d\u7f6e\uff0c\u4e5f\u662f/xxx/xxx.jar\u8fd9\u79cd\u5f62\u5f0f\nString path = System.getProperty("java.class.path");\n')),(0,a.kt)("p",null,"\u901a\u8fc7\u8fdb\u4e00\u6b65\u5904\u7406\uff0c\u5c31\u53ef\u4ee5\u5f97\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"jar"),"\u5305\u7684\u76ee\u5f55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'int firstIndex = path.lastIndexOf(System.getProperty("path.separator")) + 1;\nint lastIndex = path.lastIndexOf(File.separator) + 1;\npath = path.substring(firstIndex, lastIndex);\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"path.separator"),"\u5728 Windows \u7cfb\u7edf\u4e0b\u662f\u5206\u53f7(;),\u5728 Linux \u4e0b\u662f\u5192\u53f7(:),\u4e5f\u5c31\u662f\u73af\u5883\u53d8\u91cf\u4e2d\u5e38\u7528\u6765\u5206\u5272\u8def\u5f84\u7684\u4e24\u4e2a\u7b26\u53f7;"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"File.separator"),"\u5728 Windows \u4e0b\u662f\u53cd\u659c\u6760(",")","\uff0c\u5728 Linux \u4e0b\u662f\u659c\u6760(/);")))}d.isMDXComponent=!0}}]);