"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7624],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,f=s["".concat(l,".").concat(m)]||s[m]||y[m]||a;return r?n.createElement(f,u(u({ref:t},i),{},{components:r})):n.createElement(f,u({ref:t},i))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,u[1]=c;for(var p=2;p<a;p++)u[p]=r[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},u=void 0,c={unversionedId:"vue/vue3\u4e2dproxy\u53d6\u503c",id:"vue/vue3\u4e2dproxy\u53d6\u503c",title:"vue3\u4e2dproxy\u53d6\u503c",description:"vue3 \u4e2d\u7684\u5bf9\u8c61\u4e3a proxy \u5bf9\u8c61\u5982\u4f55\u83b7\u53d6\u503c:",source:"@site/docs/vue/vue3\u4e2dproxy\u53d6\u503c.md",sourceDirName:"vue",slug:"/vue/vue3\u4e2dproxy\u53d6\u503c",permalink:"/docs/vue/vue3\u4e2dproxy\u53d6\u503c",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/vue/vue3\u4e2dproxy\u53d6\u503c.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"monorepo\u7ba1\u7406\u9879\u76ee",permalink:"/docs/vue/monorepo\u7ba1\u7406\u9879\u76ee"},next:{title:"vue3\u914d\u7f6emockjs",permalink:"/docs/vue/vue3\u914d\u7f6emockjs"}},l={},p=[],i={toc:p},s="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"vue3 \u4e2d\u7684\u5bf9\u8c61\u4e3a proxy \u5bf9\u8c61\u5982\u4f55\u83b7\u53d6\u503c:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u79cd\u83b7\u53d6 target \u503c\u7684\u65b9\u5f0f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { toRaw } from "@vue/reactivity";\nvar list = toRaw(proxyobject);\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u79cd\u83b7\u53d6 target \u503c\u7684\u65b9\u5f0f\uff0c\u901a\u8fc7 json \u5e8f\u5217\u5316\u4e4b\u540e\u53ef\u83b7\u53d6\u503c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"JSON.parse(JSON.stringify(proxyobject));\n")))}y.isMDXComponent=!0}}]);