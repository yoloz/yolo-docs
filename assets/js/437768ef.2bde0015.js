"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[1456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,g=s["".concat(c,".").concat(m)]||s[m]||p[m]||a;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},l=void 0,i={unversionedId:"golang/\u4e0d\u540c\u7cfb\u7edf\u7684\u6784\u5efa",id:"golang/\u4e0d\u540c\u7cfb\u7edf\u7684\u6784\u5efa",title:"\u4e0d\u540c\u7cfb\u7edf\u7684\u6784\u5efa",description:"Golang \u652f\u6301\u5728\u4e00\u4e2a\u5e73\u53f0\u4e0b\u751f\u6210\u53e6\u4e00\u4e2a\u5e73\u53f0\u53ef\u6267\u884c\u7a0b\u5e8f\u7684\u4ea4\u53c9\u7f16\u8bd1\u529f\u80fd\u3002",source:"@site/docs/golang/\u4e0d\u540c\u7cfb\u7edf\u7684\u6784\u5efa.md",sourceDirName:"golang",slug:"/golang/\u4e0d\u540c\u7cfb\u7edf\u7684\u6784\u5efa",permalink:"/docs/golang/\u4e0d\u540c\u7cfb\u7edf\u7684\u6784\u5efa",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/golang/\u4e0d\u540c\u7cfb\u7edf\u7684\u6784\u5efa.md",tags:[],version:"current",lastUpdatedAt:1681551353,formattedLastUpdatedAt:"2023\u5e744\u670815\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fmt\u7684\u5360\u4f4d\u7b26",permalink:"/docs/golang/fmt\u7684\u5360\u4f4d\u7b26"},next:{title:"\u7248\u672c\u4f9d\u8d56",permalink:"/docs/golang/\u7248\u672c\u4f9d\u8d56"}},c={},u=[{value:"Mac",id:"mac",level:2},{value:"Linux",id:"linux",level:2},{value:"Windows",id:"windows",level:2}],d={toc:u},s="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Golang \u652f\u6301\u5728\u4e00\u4e2a\u5e73\u53f0\u4e0b\u751f\u6210\u53e6\u4e00\u4e2a\u5e73\u53f0\u53ef\u6267\u884c\u7a0b\u5e8f\u7684\u4ea4\u53c9\u7f16\u8bd1\u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"mac"},"Mac"),(0,o.kt)("p",null,"Mac \u4e0b\u7f16\u8bd1 Linux, Windows \u5e73\u53f0\u7684 64 \u4f4d\u53ef\u6267\u884c\u7a0b\u5e8f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build test.go\n$ CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build test.go\n")),(0,o.kt)("h2",{id:"linux"},"Linux"),(0,o.kt)("p",null,"Linux \u4e0b\u7f16\u8bd1 Mac, Windows \u5e73\u53f0\u7684 64 \u4f4d\u53ef\u6267\u884c\u7a0b\u5e8f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build test.go\n$ CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build test.go\n")),(0,o.kt)("h2",{id:"windows"},"Windows"),(0,o.kt)("p",null,"Windows \u4e0b\u7f16\u8bd1 Mac, Linux \u5e73\u53f0\u7684 64 \u4f4d\u53ef\u6267\u884c\u7a0b\u5e8f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ SET CGO_ENABLED=0 SET GOOS=darwin3 SET GOARCH=amd64 go build test.go\n$ SET CGO_ENABLED=0 SET GOOS=linux SET GOARCH=amd64 go build test.go\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u7f16\u8bd1 web \u7b49\u5de5\u7a0b\u9879\u76ee\uff0c\u76f4\u63a5 cd \u5230\u5de5\u7a0b\u76ee\u5f55\u4e0b\u76f4\u63a5\u6267\u884c\u4ee5\u4e0a\u547d\u4ee4"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"GOOS\uff1a\u76ee\u6807\u53ef\u6267\u884c\u7a0b\u5e8f\u8fd0\u884c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u652f\u6301 darwin\uff0cfreebsd\uff0clinux\uff0cwindows"),(0,o.kt)("li",{parentName:"ul"},"GOARCH\uff1a\u76ee\u6807\u53ef\u6267\u884c\u7a0b\u5e8f\u64cd\u4f5c\u7cfb\u7edf\u6784\u67b6\uff0c\u5305\u62ec 386\uff0camd64\uff0carm"),(0,o.kt)("li",{parentName:"ul"},"Golang version 1.5 \u4ee5\u524d\u7248\u672c\u5728\u9996\u6b21\u4ea4\u53c9\u7f16\u8bd1\u65f6\u8fd8\u9700\u8981\u914d\u7f6e\u4ea4\u53c9\u7f16\u8bd1\u73af\u5883(\u7565)"))))}p.isMDXComponent=!0}}]);