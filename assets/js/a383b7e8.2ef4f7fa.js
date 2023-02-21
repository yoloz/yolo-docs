"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[214],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=i(r),d=o,h=f["".concat(s,".").concat(d)]||f[d]||u[d]||l;return r?n.createElement(h,c(c({ref:t},p),{},{components:r})):n.createElement(h,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,c=new Array(l);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var i=2;i<l;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6126:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const l={},c=void 0,a={unversionedId:"script/shell\u4e2d\u5b57\u7b26\u4e32\u5305\u542b",id:"script/shell\u4e2d\u5b57\u7b26\u4e32\u5305\u542b",title:"shell\u4e2d\u5b57\u7b26\u4e32\u5305\u542b",description:"\u5229\u7528 grep \u67e5\u627e",source:"@site/docs/script/shell\u4e2d\u5b57\u7b26\u4e32\u5305\u542b.md",sourceDirName:"script",slug:"/script/shell\u4e2d\u5b57\u7b26\u4e32\u5305\u542b",permalink:"/docs/script/shell\u4e2d\u5b57\u7b26\u4e32\u5305\u542b",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/script/shell\u4e2d\u5b57\u7b26\u4e32\u5305\u542b.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"shell\u4e2d\u5355\u4e2d\u62ec\u53f7\u4e0e\u53cc\u4e2d\u62ec\u53f7",permalink:"/docs/script/shell\u4e2d\u5355\u4e2d\u62ec\u53f7\u4e0e\u53cc\u4e2d\u62ec\u53f7"},next:{title:"shell\u4e2d\u5b57\u7b26\u4e32\u5ffd\u7565\u5927\u5c0f\u5199",permalink:"/docs/script/shell\u4e2d\u5b57\u7b26\u4e32\u5ffd\u7565\u5927\u5c0f\u5199"}},s={},i=[{value:"\u5229\u7528 grep \u67e5\u627e",id:"\u5229\u7528-grep-\u67e5\u627e",level:2},{value:"\u5229\u7528\u5b57\u7b26\u4e32\u8fd0\u7b97\u7b26",id:"\u5229\u7528\u5b57\u7b26\u4e32\u8fd0\u7b97\u7b26",level:2},{value:"\u5229\u7528\u901a\u914d\u7b26",id:"\u5229\u7528\u901a\u914d\u7b26",level:2}],p={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5229\u7528-grep-\u67e5\u627e"},"\u5229\u7528 grep \u67e5\u627e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'strA="long string"\nstrB="string"\nresult=$(echo $strA | grep "${strB}")\nif [[ "$result" != "" ]]\nthen\n    echo "\u5305\u542b"\nelse\n    echo "\u4e0d\u5305\u542b"\nfi\n')),(0,o.kt)("h2",{id:"\u5229\u7528\u5b57\u7b26\u4e32\u8fd0\u7b97\u7b26"},"\u5229\u7528\u5b57\u7b26\u4e32\u8fd0\u7b97\u7b26"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'strA="helloworld"\nstrB="low"\nif [[ $strA =~ $strB ]]\nthen\n    echo "\u5305\u542b"\nelse\n    echo "\u4e0d\u5305\u542b"\nfi\n')),(0,o.kt)("h2",{id:"\u5229\u7528\u901a\u914d\u7b26"},"\u5229\u7528\u901a\u914d\u7b26"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'A="helloworld"\nB="low"\nif [[ $A == *$B* ]]\nthen\n    echo "\u5305\u542b"\nelse\n    echo "\u4e0d\u5305\u542b"\nfi\n')))}u.isMDXComponent=!0}}]);