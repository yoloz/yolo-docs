"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[2068],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,v=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(v,l(l({ref:n},u),{},{components:t})):r.createElement(v,l({ref:n},u))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3612:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={},l=void 0,s={unversionedId:"vue/vue3\u914d\u7f6emockjs",id:"vue/vue3\u914d\u7f6emockjs",title:"vue3\u914d\u7f6emockjs",description:"\u5b89\u88c5\u4f9d\u8d56",source:"@site/docs/vue/vue3\u914d\u7f6emockjs.md",sourceDirName:"vue",slug:"/vue/vue3\u914d\u7f6emockjs",permalink:"/docs/vue/vue3\u914d\u7f6emockjs",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/vue/vue3\u914d\u7f6emockjs.md",tags:[],version:"current",lastUpdatedAt:1688378919,formattedLastUpdatedAt:"2023\u5e747\u67083\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"monorepo\u7ba1\u7406\u9879\u76ee",permalink:"/docs/vue/monorepo\u7ba1\u7406\u9879\u76ee"},next:{title:"\u5927\u6587\u4ef6\u4e0a\u4f20",permalink:"/docs/vue/\u5927\u6587\u4ef6\u4e0a\u4f20"}},i={},c=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u4fee\u6539 vite.config.ts",id:"\u4fee\u6539-viteconfigts",level:2},{value:"\u542f\u7528 mock \u914d\u7f6e",id:"\u542f\u7528-mock-\u914d\u7f6e",level:2},{value:"\u4fee\u6539 axios \u5165\u53e3",id:"\u4fee\u6539-axios-\u5165\u53e3",level:2},{value:"\u5b9a\u4e49 mock \u6570\u636e\u6587\u4ef6",id:"\u5b9a\u4e49-mock-\u6570\u636e\u6587\u4ef6",level:2}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm install mockjs -D\n$ pnpm install vite-plugin-mock -D\n")),(0,o.kt)("h2",{id:"\u4fee\u6539-viteconfigts"},"\u4fee\u6539 vite.config.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { viteMockServe } from "vite-plugin-mock";\n//...\n\nconst localEnabled: boolean = (process.env.USE_MOCK as unknown as boolean) || false;\nconst prodEnabled: boolean = (process.env.USE_CHUNK_MOCK as unknown as boolean) || false;\n\n// https://vitejs.dev/config/\nexport default ({ mode }: any) =>\n  defineConfig({\n    //...\n    plugins: [\n      vue(),\n      //...\n      viteMockServe({\n        // \u5177\u4f53\u914d\u7f6e\u53ef\u89c1\uff1ahttps://www.viterc.cn/en/vite-plugin-mock.html\n        mockPath: "mock",\n        localEnabled: localEnabled,  // \u5f00\u53d1\u6253\u5305\u5f00\u5173\n        prodEnabled: prodEnabled, // \u751f\u4ea7\u6253\u5305\u5f00\u5173\n        supportTs: true, // \u6253\u5f00\u540e\uff0c\u53ef\u4ee5\u8bfb\u53d6 ts \u6587\u4ef6\u6a21\u5757\u3002 \u8bf7\u6ce8\u610f\uff0c\u6253\u5f00\u540e\u5c06\u65e0\u6cd5\u76d1\u89c6.js \u6587\u4ef6\u3002\n        watchFiles: true, // \u76d1\u89c6\u6587\u4ef6\u66f4\u6539\n      }),\n    ],\n    // ...\n  });\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"'localEnabled' does not exist in type 'ViteMockOptions',\u6682\u65f6\u672a\u89e3\u51b3\uff0c\u4f7f\u7528\u5931\u8d25\uff1b"))),(0,o.kt)("h2",{id:"\u542f\u7528-mock-\u914d\u7f6e"},"\u542f\u7528 mock \u914d\u7f6e"),(0,o.kt)("p",null,"process.env.VITE_USE_MOCK \u7684\u5b9a\u4e49\uff0c \u6709\u4e24\u79cd\u65b9\u6848\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install cross-env -D")," \u7136\u540e\u4fee\u6539 package.json\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// package.json\n"scripts": {\n    "dev": "vite",\n    "build": "vite build",\n    "dev:mock": "cross-env USE_MOCK=true vite",\n    "build:mock":"cross-env USE_CHUNK_MOCK=true vite build"\n  }\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728\u6839\u76ee\u5f55\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"li"},".env.development"),"\u6587\u4ef6\u5e76\u914d\u7f6e:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"# Whether to open mock\nVITE_USE_MOCK = true\nUSE_CHUNK_MOCK = false\n")),(0,o.kt)("h2",{id:"\u4fee\u6539-axios-\u5165\u53e3"},"\u4fee\u6539 axios \u5165\u53e3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//...\nconst httpRequest = new HttpRequest();\n\nhttpRequest.instance.defaults.baseURL = import.meta.env.VITE_BASE_URL;\nhttpRequest.instance.defaults.timeout = 10000;\n\nhttpRequest.instance.interceptors.request.use(\n  (config: any) => {\n    //...\n    return config;\n  },\n  (error: any) => {\n    return Promise.reject(error);\n  }\n);\n\nhttpRequest.instance.interceptors.response.use(\n  (result: any) => {\n    //...\n    return result;\n  },\n  (error: any) => {\n    // ...\n    return Promise.reject(error);\n  }\n);\n\nexport default httpRequest;\n")),(0,o.kt)("h2",{id:"\u5b9a\u4e49-mock-\u6570\u636e\u6587\u4ef6"},"\u5b9a\u4e49 mock \u6570\u636e\u6587\u4ef6"),(0,o.kt)("p",null,"\u4e00\u822c\u76f4\u63a5\u5728\u6839\u76ee\u5f55\u4e0b\u521b\u5efa mock \u6587\u4ef6\u5939\uff0c\u7136\u540e\u91cc\u9762\u521b\u5efa index.ts \u53ca data \u76ee\u5f55"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { MockMethod } from 'vite-plugin-mock'\n\nimport { menuList } from './data/menuList'\n\nexport default [\n    {\n        url: '/menu/list',\n        method: 'get',\n        response: ({ query }) => {\n            return {\n                code: 200,\n                data: menuList\n            }\n        }\n    }\n] as MockMethod[]\n")))}m.isMDXComponent=!0}}]);