"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[8719],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(h,o(o({ref:t},i),{},{components:r})):n.createElement(h,o({ref:t},i))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8159:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={},o=void 0,s={unversionedId:"script/shell\u5b57\u7b26\u4e32\u5927\u5c0f\u5199\u8f6c\u6362",id:"script/shell\u5b57\u7b26\u4e32\u5927\u5c0f\u5199\u8f6c\u6362",title:"shell\u5b57\u7b26\u4e32\u5927\u5c0f\u5199\u8f6c\u6362",description:"\u4f7f\u7528 tr \u547d\u4ee4",source:"@site/docs/script/shell\u5b57\u7b26\u4e32\u5927\u5c0f\u5199\u8f6c\u6362.md",sourceDirName:"script",slug:"/script/shell\u5b57\u7b26\u4e32\u5927\u5c0f\u5199\u8f6c\u6362",permalink:"/docs/script/shell\u5b57\u7b26\u4e32\u5927\u5c0f\u5199\u8f6c\u6362",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/script/shell\u5b57\u7b26\u4e32\u5927\u5c0f\u5199\u8f6c\u6362.md",tags:[],version:"current",lastUpdatedAt:1686645043,formattedLastUpdatedAt:"2023\u5e746\u670813\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"shell\u4f18\u5316\u5efa\u8bae",permalink:"/docs/script/shell\u4f18\u5316\u5efa\u8bae"},next:{title:"shell\u5b57\u7b26\u4e32\u622a\u53d6",permalink:"/docs/script/shell\u5b57\u7b26\u4e32\u622a\u53d6"}},c={},p=[{value:"\u4f7f\u7528 tr \u547d\u4ee4",id:"\u4f7f\u7528-tr-\u547d\u4ee4",level:2},{value:"awk \u6216 sed",id:"awk-\u6216-sed",level:2},{value:"\u5229\u7528 Bash \u7279\u6027",id:"\u5229\u7528-bash-\u7279\u6027",level:2},{value:"\u4f7f\u7528 typeset/declare \u547d\u4ee4",id:"\u4f7f\u7528-typesetdeclare-\u547d\u4ee4",level:2}],i={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4f7f\u7528-tr-\u547d\u4ee4"},"\u4f7f\u7528 tr \u547d\u4ee4"),(0,a.kt)("p",null,"Linux \u4e2d\u7684 tr \u547d\u4ee4\u53ef\u4ee5\u7528\u4e8e\u8f6c\u6362\u6216\u5220\u9664\u6587\u672c\u4e2d\u7684\u6307\u5b9a\u5b57\u7b26\u3002tr \u547d\u4ee4\u9ed8\u8ba4\u4ece\u6807\u51c6\u8f93\u5165\u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u7ecf\u8fc7\u5b57\u7b26\u4e32\u8f6c\u4e49\u4e4b\u540e\uff0c\u5c06\u7ed3\u679c\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4f7f\u7528tr\u547d\u4ee4\u5c06\u5b57\u7b26\u4e32\u4e2d\u5c0f\u5199\u5b57\u7b26\u8f6c\u6362\u6210\u5927\u5199\necho "TomAndersen" | tr a-z A-Z\n# TOMANDERSEN\n\n# \u540c\u7406\u5927\u5199\u8f6c\u5c0f\u5199\necho "TomAndersen" | tr A-Z a-z\n# tomandersen\n\n# \u4f7f\u7528tr\u547d\u4ee4\u8f6c\u6362\u5b57\u7b26\u4e32\u4e2d\u5168\u90e8\u6307\u5b9a\u5b57\u7b26\necho "Hello Hello" | tr Ho hO\n# hellO hellO\n\n# \u4f7f\u7528tr\u547d\u4ee4\u5220\u9664\u6587\u672c\u4e2d\u5168\u90e8\u6307\u5b9a\u5b57\u7b26\necho "Hello Hello" | tr -d H\n# ello ello\n\n')),(0,a.kt)("h2",{id:"awk-\u6216-sed"},"awk \u6216 sed"),(0,a.kt)("p",null,"\u6b64\u4e24\u4e2a\u547d\u4ee4\u81ea\u5e26\u6709\u5927\u5c0f\u5199\u8f6c\u6362\uff0c\u5177\u4f53\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/devOps/%E6%96%87%E6%9C%AC%E5%88%86%E6%9E%90awk"},"\u6587\u672c\u5206\u6790 awk"),",",(0,a.kt)("a",{parentName:"p",href:"/docs/devOps/%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91sed"},"\u6587\u672c\u7f16\u8f91 sed")),(0,a.kt)("h2",{id:"\u5229\u7528-bash-\u7279\u6027"},"\u5229\u7528 Bash \u7279\u6027"),(0,a.kt)("p",null,"\u5728\u8bfb\u53d6\u53d8\u91cf\u65f6\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"^^"),"\u5b57\u7b26\u80fd\u591f\u5c06\u8f93\u51fa\u5b57\u7b26\u8f6c\u6362\u6210\u5168\u5927\u5199\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},",,"),"\u5b57\u7b26\u80fd\u591f\u5c06\u8f93\u51fa\u5b57\u7b26\u8f6c\u6362\u6210\u5168\u5c0f\u5199"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8bfb\u53d6\u53d8\u91cf\u8f93\u51fa\u5168\u5927\u5199\nvar1='TomAndersen'\necho ${var1^^}\n# TOMANDERSEN\n\n# \u8bfb\u53d6\u53d8\u91cf\u8f93\u51fa\u5168\u5c0f\u5199\nvar2='TomAndersen'\necho ${var2,,}\n# tomandersen\n\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528-typesetdeclare-\u547d\u4ee4"},"\u4f7f\u7528 typeset/declare \u547d\u4ee4"),(0,a.kt)("p",null,"\u4f7f\u7528 typeset \u6216\u8005 declare \u547d\u4ee4\u8bbe\u7f6e\u53d8\u91cf\u7684\u5c5e\u6027\uff0c\u4e24\u4e2a\u547d\u4ee4\u4f7f\u7528\u65b9\u5f0f\u5b8c\u5168\u76f8\u540c\u3002\u4f7f\u7528\u6b64\u547d\u4ee4\u65f6\u9700\u614e\u91cd\uff0c\u5f53\u4f7f\u7528 typeset/declare \u547d\u4ee4\u6539\u53d8\u53d8\u91cf\u7684\u5c5e\u6027\u65f6\uff0c\u8fd9\u79cd\u6539\u53d8\u662f\u957f\u671f\u6709\u6548\u7684\uff0c\u4e14\u5982\u679c\u5c06\u53d8\u91cf\u8bbe\u7f6e\u4e3a\u53ea\u8bfb\u547d\u4ee4\uff0c\u90a3\u4e48\u4e00\u822c\u60c5\u51b5\u4e0b\u5c06\u65e0\u6cd5\u4fee\u6539\u6b64\u53d8\u91cf\u7684\u53ea\u8bfb\u5c5e\u6027\uff08\u53ef\u4ee5\u901a\u8fc7 gdb \u5de5\u5177\u91cd\u7f6e\u53d8\u91cf\uff09\uff0c\u53ea\u8bfb\u53d8\u91cf\u751f\u547d\u5468\u671f\u4e00\u822c\u4e0e\u5f53\u524d Shell \u7ebf\u7a0b\u76f8\u540c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4f7f\u7528typeset/declare\u58f0\u660e\u53d8\u91cf\u7684\u5c5e\u6027,\u5c06\u5176\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u5927\u5199\ntypeset -u a\na="abc"\necho $a\n# ABC\n\n# \u4f7f\u7528typeset/declare\u58f0\u660e\u53d8\u91cf\u7684\u5c5e\u6027\uff0c\u5c06\u5176\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u5c0f\u5199\ntypeset -l a\na="ABC"\necho $a\n# abc\n')))}u.isMDXComponent=!0}}]);