"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[8201],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const l={},a=void 0,c={unversionedId:"concurrent/\u9003\u9038\u5206\u6790",id:"concurrent/\u9003\u9038\u5206\u6790",title:"\u9003\u9038\u5206\u6790",description:"\u5b9a\u4e49",source:"@site/docs/concurrent/\u9003\u9038\u5206\u6790.md",sourceDirName:"concurrent",slug:"/concurrent/\u9003\u9038\u5206\u6790",permalink:"/docs/concurrent/\u9003\u9038\u5206\u6790",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/concurrent/\u9003\u9038\u5206\u6790.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7ebf\u7a0b\u6b7b\u9501\u95ee\u9898",permalink:"/docs/concurrent/\u7ebf\u7a0b\u6b7b\u9501\u95ee\u9898"},next:{title:"\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\u9501\u7684\u4f7f\u7528\u6280\u5de7",permalink:"/docs/concurrent/\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\u9501\u7684\u4f7f\u7528\u6280\u5de7"}},i={},u=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u5e94\u7528",id:"\u5e94\u7528",level:2},{value:"\u9003\u9038\u5206\u6790\u5f00\u5173",id:"\u9003\u9038\u5206\u6790\u5f00\u5173",level:2},{value:"\u6808\u4e0a\u5206\u914d",id:"\u6808\u4e0a\u5206\u914d",level:2}],p={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,o.kt)("p",null,"\u9003\u9038\u5206\u6790\u7684\u662f\u4e00\u4e2a\u5bf9\u8c61\u7684\u52a8\u6001\u4f5c\u7528\u57df\uff0c\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u65b9\u6cd5\u9003\u9038\uff1a\u5bf9\u8c61\u901a\u8fc7\u53c2\u6570\u4f20\u9012\u4f20\u7ed9\u4e86\u53e6\u4e00\u4e2a\u65b9\u6cd5"),(0,o.kt)("li",{parentName:"ol"},"\u7ebf\u7a0b\u9003\u9038\uff1a\u5bf9\u8c61\u6709\u53e6\u5916\u7684\u7ebf\u7a0b\u8bbf\u95ee")),(0,o.kt)("p",null,"\u9003\u9038\u5206\u6790\u7684\u76ee\u7684\u662f\u786e\u8ba4\u4e00\u4e2a\u5bf9\u8c61\u662f\u5426\u53ea\u53ef\u80fd\u5f53\u524d\u7ebf\u7a0b\u80fd\u8bbf\u95ee"),(0,o.kt)("h2",{id:"\u5e94\u7528"},"\u5e94\u7528"),(0,o.kt)("p",null,"\u5982\u679c\u5bf9\u8c61\u5206\u6790\u540e\u4e0d\u80fd\u53d1\u751f\u9003\u9038\uff0c\u5982\u65b9\u6cd5\u4e2d\u521b\u5efa\u7684\u4e34\u65f6\u5bf9\u8c61\uff0c\u5219 JVM \u53ef\u8fdb\u884c\u5982\u4e0b\u4f18\u5316\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6808\u4e0a\u5206\u914d")),(0,o.kt)("p",null,"\u5728\u6808\u4e0a\u5206\u914d\u5bf9\u8c61\uff0c\u5e94\u8be5\u53ea\u6709\u5f53\u524d\u7ebf\u7a0b\u4f7f\u7528\uff0c\u968f\u65b9\u6cd5\u7684\u9000\u51fa\u81ea\u52a8\u9500\u6bc1\uff0c\u63d0\u5347\u6027\u80fd"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u6807\u91cf\u66ff\u6362")),(0,o.kt)("p",null,"\u6240\u8c13\u6807\u91cf\u5c31\u662f\u4e0d\u80fd\u518d\u5206\u5272\u7684\u53d8\u91cf\u3002\u5982 Java \u57fa\u672c\u6570\u636e\u7c7b\u578b\n\u5982\u679c\u7528\u5230\u5bf9\u8c61\u7684\u6807\u91cf\uff0c\u53ef\u4ee5\u4e0d\u5206\u914d\u5bf9\u8c61\uff0c\u6539\u4e3a\u521b\u5efa\u5355\u72ec\u7684\u6807\u91cf\u653e\u5165\u6808\u6216\u5bc4\u5b58\u5668\u4e2d\u3002"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u9501\u6d88\u9664")),(0,o.kt)("p",null,"\u56e0\u4e3a\u53ea\u6709\u5f53\u524d\u7ebf\u7a0b\u4f7f\u7528\uff0c\u6240\u4ee5\u5bf9\u6b64\u5bf9\u8c61\u7684\u9501\u64cd\u4f5c\u53ef\u4ee5\u4f18\u5316\u53bb\u9664"),(0,o.kt)("h2",{id:"\u9003\u9038\u5206\u6790\u5f00\u5173"},"\u9003\u9038\u5206\u6790\u5f00\u5173"),(0,o.kt)("p",null,"Java8 \u9003\u9038\u5206\u6790\u9ed8\u8ba4\u662f\u6253\u5f00\u7684\uff0c\u4e5f\u53ef\u901a\u8fc7\u5f00\u5173\u63a7\u5236"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-XX:+DoEscapeAnalysis\u5f00\u542f\u9003\u9038\u5206\u6790\n-XX:-DoEscapeAnalysis \u5173\u95ed\u9003\u9038\u5206\u6790\n\n-XX:+EliminateAllocations\u5f00\u542f\u6807\u91cf\u66ff\u6362\n-XX:-EliminateAllocations \u5173\u95ed\u6807\u91cf\u66ff\u6362\n\n-XX:+EliminateLocks\u5f00\u542f\u9501\u6d88\u9664\uff08jdk1.8\u9ed8\u8ba4\u5f00\u542f\uff0c\u5176\u5b83\u7248\u672c\u672a\u6d4b\u8bd5\uff09\n-XX:-EliminateLocks \u5173\u95ed\u9501\u6d88\u9664\n\uff08\u5f00\u542f\u6807\u91cf\u66ff\u6362\u6216\u9501\u6d88\u9664 \u5fc5\u987b\u6253\u5f00\u9003\u9038\u5206\u6790\u5f00\u5173\uff09\n")),(0,o.kt)("h2",{id:"\u6808\u4e0a\u5206\u914d"},"\u6808\u4e0a\u5206\u914d"),(0,o.kt)("p",null,"\u9003\u9038\u5f00\u5173\u5f00\u542f\uff0c\u4e14\u786e\u8ba4\u5bf9\u8c61\u4e0d\u53d1\u751f\u9003\u9038\uff0c\u4e5f\u5e76\u975e\u6240\u6709\u7684\u5bf9\u8c61\u5168\u662f\u6808\u4e0a\u5206\u914d\u7684\n\u9996\u5148\u9003\u9038\u5206\u6790\u662f\u4f9d\u8d56 JIT \u5373\u65f6\u7f16\u8bd1\u7684\uff0c\u800c\u89e6\u53d1 JIT \u5fc5\u987b\u662f\u70ed\u70b9\u4ee3\u7801\uff0cServer \u6a21\u5f0f\u9ed8\u8ba4\u81f3\u5c11 10000 \u6b21\u65b9\u6cd5\u6267\u884c\u624d\u8ba4\u4e3a\u6b64\u65b9\u6cd5\u662f\u70ed\u70b9\u65b9\u6cd5\n\u4ece\u8fd9\u4e2a\u89d2\u5ea6\u770b\uff0c\u90a3\u4e00\u5f00\u59cb\u6240\u6709\u7684\u5bf9\u8c61\u8fd8\u662f\u5728\u5806\u4e2d\u5206\u914d\u3002\u5f53\u524d\u54ea\u4e2a\u5206\u914d\u662f\u4e00\u4e2a\u590d\u6742\u7684\u5206\u6790\u8fc7\u7a0b\uff0c\u6211\u4eec\u8981\u53ea\u8981\u8fd9\u56de\u4e8b\u5373\u53ef\uff08\u6808\u4e0a\u5206\u914d\u4e0d\u662f\u7edd\u5bf9\u7684\uff09"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.nps.ink/329647.html"},"\u6765\u6e90")))}d.isMDXComponent=!0}}]);