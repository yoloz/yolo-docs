"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[2068],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,k=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return t?o.createElement(k,l(l({ref:n},m),{},{components:t})):o.createElement(k,l({ref:n},m))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3612:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(7462),a=(t(7294),t(3905));const r={},l=void 0,i={unversionedId:"vue/vue3\u914d\u7f6emockjs",id:"vue/vue3\u914d\u7f6emockjs",title:"vue3\u914d\u7f6emockjs",description:"\u5b89\u88c5\u4f9d\u8d56",source:"@site/docs/vue/vue3\u914d\u7f6emockjs.md",sourceDirName:"vue",slug:"/vue/vue3\u914d\u7f6emockjs",permalink:"/docs/vue/vue3\u914d\u7f6emockjs",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/vue/vue3\u914d\u7f6emockjs.md",tags:[],version:"current",lastUpdatedAt:1689307169,formattedLastUpdatedAt:"2023\u5e747\u670814\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"monorepo\u7ba1\u7406\u9879\u76ee",permalink:"/docs/vue/monorepo\u7ba1\u7406\u9879\u76ee"},next:{title:"websocket-ts",permalink:"/docs/vue/websocket-ts"}},s={},c=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u4fee\u6539 vite.config.ts",id:"\u4fee\u6539-viteconfigts",level:2},{value:"\u542f\u7528 mock \u914d\u7f6e",id:"\u542f\u7528-mock-\u914d\u7f6e",level:2},{value:"\u4fee\u6539 axios \u5165\u53e3",id:"\u4fee\u6539-axios-\u5165\u53e3",level:2},{value:"\u5b9a\u4e49 mock \u6570\u636e\u6587\u4ef6",id:"\u5b9a\u4e49-mock-\u6570\u636e\u6587\u4ef6",level:2},{value:"\u751f\u6210\u6570\u636e",id:"\u751f\u6210\u6570\u636e",level:2}],m={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm i mockjs vite-plugin-mock @types/mockjs -D\n")),(0,a.kt)("h2",{id:"\u4fee\u6539-viteconfigts"},"\u4fee\u6539 vite.config.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { viteMockServe } from "vite-plugin-mock";\n//...\n\nconst localEnabled: boolean = (process.env.VITE_USE_MOCK as unknown as boolean) || false;\nconst prodEnabled: boolean = (process.env.USE_CHUNK_MOCK as unknown as boolean) || false;\n\n// https://vitejs.dev/config/\nexport default ({ mode }: any) =>\n  defineConfig({\n    //...\n    plugins: [\n      vue(),\n      //...\n      viteMockServe({\n        // \u5177\u4f53\u914d\u7f6e\u53ef\u89c1\uff1ahttps://www.viterc.cn/en/vite-plugin-mock.html\n        mockPath: "./src/mock",\n        localEnabled: localEnabled,  // \u5f00\u53d1\u6253\u5305\u5f00\u5173\n        prodEnabled: prodEnabled, // \u751f\u4ea7\u6253\u5305\u5f00\u5173\n        supportTs: true, // \u6253\u5f00\u540e\uff0c\u53ef\u4ee5\u8bfb\u53d6 ts \u6587\u4ef6\u6a21\u5757\u3002 \u8bf7\u6ce8\u610f\uff0c\u6253\u5f00\u540e\u5c06\u65e0\u6cd5\u76d1\u89c6.js \u6587\u4ef6\u3002\n        watchFiles: true, // \u76d1\u89c6\u6587\u4ef6\u66f4\u6539\n      }),\n    ],\n    // ...\n  });\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"'localEnabled' does not exist in type 'ViteMockOptions',\u67e5\u770b\u6e90\u4ee3\u7801",(0,a.kt)("a",{parentName:"li",href:"https://github.com/vbenjs/vite-plugin-mock"},"vbenjs/vite-plugin-mock"),",\u53d1\u73b0\u5f00\u5173\u7edf\u4e00\u5230\u4e00\u4e2a enable \u5c5e\u6027\u4e2d\uff0c\u6ca1\u6709 localEnabled \u548c prodEnabled \u4e86"))),(0,a.kt)("h2",{id:"\u542f\u7528-mock-\u914d\u7f6e"},"\u542f\u7528 mock \u914d\u7f6e"),(0,a.kt)("p",null,"process.env.VITE_USE_MOCK \u7684\u5b9a\u4e49\uff0c \u6709\u4e24\u79cd\u65b9\u6848\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install cross-env -D")," \u7136\u540e\u4fee\u6539 package.json\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// package.json\n"scripts": {\n    "dev": "vite",\n    "build": "vite build",\n    "dev:mock": "cross-env USE_MOCK=true vite",\n    "build:mock":"cross-env USE_CHUNK_MOCK=true vite build"\n  }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u6839\u76ee\u5f55\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},".env.development"),"\u6587\u4ef6\u6dfb\u52a0\u914d\u7f6e\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"# Whether to open mock\nVITE_USE_MOCK = true\nUSE_CHUNK_MOCK = false\n")),(0,a.kt)("h2",{id:"\u4fee\u6539-axios-\u5165\u53e3"},"\u4fee\u6539 axios \u5165\u53e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//...\nconst httpRequest = new HttpRequest();\n\nhttpRequest.instance.defaults.baseURL = import.meta.env.VITE_BASE_URL;\nhttpRequest.instance.defaults.timeout = 10000;\n\nhttpRequest.instance.interceptors.request.use(\n  (config: any) => {\n    //...\n    return config;\n  },\n  (error: any) => {\n    return Promise.reject(error);\n  }\n);\n\nhttpRequest.instance.interceptors.response.use(\n  (result: any) => {\n    //...\n    return result;\n  },\n  (error: any) => {\n    // ...\n    return Promise.reject(error);\n  }\n);\n\nexport default httpRequest;\n")),(0,a.kt)("h2",{id:"\u5b9a\u4e49-mock-\u6570\u636e\u6587\u4ef6"},"\u5b9a\u4e49 mock \u6570\u636e\u6587\u4ef6"),(0,a.kt)("p",null,"\u4e00\u822c\u76f4\u63a5\u5728\u6839\u76ee\u5f55\u4e0b\u521b\u5efa mock \u6587\u4ef6\u5939\uff0c\u7136\u540e\u91cc\u9762\u521b\u5efa index.ts \u53ca data \u76ee\u5f55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { MockMethod } from 'vite-plugin-mock'\n\nimport { menuList } from './data/menuList'\n\nexport default [\n    {\n        url: '/menu/list',\n        method: 'get',\n        response: ({ query }) => {\n            return {\n                code: 200,\n                data: menuList\n            }\n        }\n    }\n] as MockMethod[]\n")),(0,a.kt)("h2",{id:"\u751f\u6210\u6570\u636e"},"\u751f\u6210\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { MockMethod } from \'vite-plugin-mock\'\nimport Mock from \'mockjs\'\n\nconst userList = mockJS.mock({\n  totalRow: 100,\n  "list|34": [\n    {\n      name: "@cname", //  \u968f\u673a\u751f\u6210\u59d3\u540d, \u5e76\u4e14\u4e0d\u91cd\u590d\n      "id|+1": 1, // id\u81ea\u589e\u4e00\n      entryData: Random.date("yyyy-MM-dd"),\n      "postion|1": [\n        "\u7814\u53d1\u90e8\u7ecf\u7406",\n        "\u524d\u7aef\u5f00\u53d1\u5de5\u7a0b\u5e08",\n        "\u540e\u7aef\u5f00\u53d1\u5de5\u7a0b\u5e08",\n        "\u6d4b\u8bd5\u5de5\u7a0b\u5e08",\n        "\u4ea7\u54c1\u7ecf\u7406",\n        "UI\u8bbe\u8ba1\u5e08",\n        "\u67b6\u6784\u5e08",\n        "\u8fd0\u7ef4\u5de5\u7a0b\u5e08",\n      ],\n      "salary|1000-2000": 1000, // \u85aa\u8d44\n      "phone": /^1(3|4|5|6|7|8|9)[0-9]\\d{8}$/,// \u968f\u673a\u751f\u6210\u7535\u8bdd\u53f7\u7801\n      "email": "@email"\uff0c// \u968f\u673a\u751f\u6210\u90ae\u7bb1\n      "sex|1": ["\u7537", "\u5973"],// \u968f\u673a\u83b7\u53d6\u4e00\u4e2a\u503c\n      "age|18-35": 0,// \u968f\u673a\u751f\u6210\u5e74\u9f84\uff0c\u503c\u572818-35\u4e4b\u95f4\n      "address": "@city"// \u968f\u673a\u751f\u6210\u57ce\u5e02\u540d\u79f0\n\n    }\n  ]\n})\n\nexport default [\n    {\n        url: \'/user/list\',\n        method: \'post\',\n        response: () => {\n            return {\n                code: 200,\n                data: userlist\n            }\n        }\n    }\n] as MockMethod[]\n')),(0,a.kt)("p",null,"\u5177\u4f53\u6d4b\u8bd5\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var Mock = require("mockjs");\nvar Random = Mock.Random;\n\nlet obj = {\n  id: Random.id(), // \u8eab\u4efd\u8bc1\u53f7\n  guid: Random.guid(),\n  name: Random.cname(),\n  age: Random.integer(20, 50),\n  asset: Random.float(200, 500000, 1, 6),\n  married: Random.boolean(),\n  birth: Random.datetime("yyyy-MM-dd HH:mm:ss"), // \u503c\u662f\u6307\u5b9a\u683c\u5f0f\u7684\u65e5\u671f\u5b57\u7b26\u4e32\n  // birth2: new Date(Random.datetime("yyyy-MM-dd HH:mm:ss")),  // \u503c\u662f Date \u7c7b\u578b\n  addr: `${Random.province()}-${Random.city()}-${Random.county()}`,\n  email: Random.email("qq.com"),\n  // word: Random.cword(2, 5),\n  // string: Random.string(),\n  title: Random.ctitle(10, 15),\n  // senetence: Random.csentence(15, 20),\n  // paragraph: Random.cparagraph(),\n};\nconsole.log(obj);\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u5176\u4e2d c \u5f00\u5934\u7684\u65b9\u6cd5\u8868\u793a\u662f\u751f\u6210\u4e2d\u6587\uff0c\u53bb\u6389 c \u5c31\u4f1a\u751f\u6210\u82f1\u6587\uff0c\u5982\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Random.cparagraph() \u751f\u6210\u4e00\u6bb5\u4e2d\u6587;"),(0,a.kt)("li",{parentName:"ul"},"Random.paragraph() \u751f\u6210\u4e00\u6bb5\u82f1\u6587;")))),(0,a.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u968f\u673a\u65b9\u6cd5\u89c1",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nuysoft/Mock/wiki/Mock.Random"},"Mock.Random"))),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import Mock, { Random } from "mockjs";\n')),(0,a.kt)("p",{parentName:"admonition"},"\u62a5\u9519:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-log"},"6:02:36 PM [vite:mock] mock reload error SyntaxError: Named export 'Random' not found. The requested module 'mockjs' is a CommonJS module, which may not support all module.exports as named exports.\nCommonJS modules can always be imported via the default export, for example using:\n\nimport pkg from 'mockjs';\nconst { Random } = pkg;\n")),(0,a.kt)("p",{parentName:"admonition"},"\u800c\u662f\u901a\u8fc7\u522b\u540d Mock \u53d6 Random:",(0,a.kt)("inlineCode",{parentName:"p"},"var Random = Mock.Random;"))))}u.isMDXComponent=!0}}]);