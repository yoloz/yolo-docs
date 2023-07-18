"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[5464],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},p=void 0,i={unversionedId:"tools/terminator",id:"tools/terminator",title:"terminator",description:"\u5b89\u88c5",source:"@site/docs/tools/terminator.md",sourceDirName:"tools",slug:"/tools/terminator",permalink:"/docs/tools/terminator",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/tools/terminator.md",tags:[],version:"current",lastUpdatedAt:1689650905,formattedLastUpdatedAt:"2023\u5e747\u670818\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tcpdump\u4f7f\u7528",permalink:"/docs/tools/tcpdump\u4f7f\u7528"},next:{title:"versions-maven-plugin",permalink:"/docs/tools/versions-maven-plugin"}},l={},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo add-apt-repository ppa:gnome-terminator\nsudo apt-get update\nsudo apt-get install terminator\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u62a5\u9519\uff1asudo: add-apt-repository: command not found\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"add-apt-repository")," \u547d\u4ee4\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"software-properties-common"),"\u5305\u7684\u4e00\u90e8\u5206\uff0c\u56e0\u6b64\u5b89\u88c5\u8fd9\u4e2a\u5305\u5c31 OK \u4e86:",(0,o.kt)("inlineCode",{parentName:"p"},"sudo apt install software-properties-common"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"apt update")," \u4f1a\u62a5\u9519 ",(0,o.kt)("inlineCode",{parentName:"p"},"The repository 'http://ppa.launchpad.net/gnome-terminator/ppa/ubuntu kinetic Release' does not have a Release file"),"\u6240\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"apt-get"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u79fb\u9664 ppa:",(0,o.kt)("inlineCode",{parentName:"p"},"sudo add-apt-repository --remove ppa:gnome-terminator"))))))}m.isMDXComponent=!0}}]);