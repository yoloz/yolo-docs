"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[6278],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),m=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(t),k=r,d=u["".concat(i,".").concat(k)]||u[k]||c[k]||p;return t?a.createElement(d,l(l({ref:n},s),{},{components:t})):a.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,l=new Array(p);l[0]=k;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<p;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},55494:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var a=t(87462),r=(t(67294),t(3905));const p={},l=void 0,o={unversionedId:"vue/monorepo\u7ba1\u7406\u9879\u76ee",id:"vue/monorepo\u7ba1\u7406\u9879\u76ee",title:"monorepo\u7ba1\u7406\u9879\u76ee",description:"\u4ecb\u7ecd",source:"@site/docs/vue/monorepo\u7ba1\u7406\u9879\u76ee.md",sourceDirName:"vue",slug:"/vue/monorepo\u7ba1\u7406\u9879\u76ee",permalink:"/docs/vue/monorepo\u7ba1\u7406\u9879\u76ee",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/vue/monorepo\u7ba1\u7406\u9879\u76ee.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"import_meta_glob",permalink:"/docs/vue/import_meta_glob"},next:{title:"vue3\u4e2dproxy\u53d6\u503c",permalink:"/docs/vue/vue3\u4e2dproxy\u53d6\u503c"}},i={},m=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u521b\u5efa Monorepo",id:"\u521b\u5efa-monorepo",level:2},{value:"\u521b\u5efa\u9879\u76ee projects",id:"\u521b\u5efa\u9879\u76ee-projects",level:2},{value:"\u521b\u5efa management \u540e\u53f0\u7ba1\u7406\u9879\u76ee\uff08Vite+TypeScript+Element-Plus\uff09",id:"\u521b\u5efa-management-\u540e\u53f0\u7ba1\u7406\u9879\u76eevitetypescriptelement-plus",level:3},{value:"\u521b\u5efa website \u540e\u53f0\u7ba1\u7406\u9879\u76ee\uff08Vite+TypeScript+Element-Plus\uff09",id:"\u521b\u5efa-website-\u540e\u53f0\u7ba1\u7406\u9879\u76eevitetypescriptelement-plus",level:3},{value:"\u521b\u5efa\u516c\u5171\u5185\u5bb9 packages",id:"\u521b\u5efa\u516c\u5171\u5185\u5bb9-packages",level:2}],s={toc:m},u="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"Monorepo(monolithic repository) \u662f\u7ba1\u7406\u9879\u76ee\u4ee3\u7801\u7684\u4e00\u4e2a\u65b9\u5f0f\uff0c\u6307\u5728\u4e00\u4e2a\u9879\u76ee\u4ed3\u5e93 (repo) \u4e2d\u7ba1\u7406\u591a\u4e2a\u6a21\u5757/\u5305 (package)\uff0c\u4e0d\u540c\u4e8e\u5e38\u89c1\u7684\u6bcf\u4e2a\u6a21\u5757\u5efa\u4e00\u4e2a repo\u3002\u76ee\u524d\u4e0d\u5c11\u5927\u578b\u5f00\u6e90\u9879\u76ee\u91c7\u7528\u4e86\u8fd9\u79cd\u65b9\u5f0f\uff0c\u5982 Babel\u3001React\u3001Vue \u7b49\u3002monorepo \u7ba1\u7406\u4ee3\u7801\u53ea\u8981\u642d\u5efa\u4e00\u5957\u811a\u624b\u67b6\uff0c\u5c31\u80fd\u7ba1\u7406\uff08\u6784\u5efa\u3001\u6d4b\u8bd5\u3001\u53d1\u5e03\uff09\u591a\u4e2a package\u3002"),(0,r.kt)("admonition",{title:"\u80cc\u666f",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u516c\u53f8\u5f00\u53d1\u95e8\u6237\u7f51\u7ad9\u7cfb\u7edf\uff0c\u5bf9\u6b64\u6211\u4eec\u9700\u8981\u5f00\u53d1\u524d\u7aef\u5c55\u793a\u754c\u9762\u548c\u540e\u53f0\u8d44\u6e90\u7ef4\u62a4\u7ba1\u7406\u754c\u9762\u4e24\u5957\u524d\u7aef UI\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u524d\u7aef\u5185\u5bb9\u754c\u9762"),(0,r.kt)("li",{parentName:"ul"},"\u540e\u53f0\u8d44\u6e90\u7ba1\u7406\u754c\u9762\n\u7531\u4e8e\u4e24\u5957\u754c\u9762\u98ce\u683c\u5dee\u5f02\u8f83\u5927\uff0c\u6df7\u5408\u5728\u4e00\u8d77\u4e0d\u6613\u7ef4\u62a4\uff0c\u6240\u4ee5\u5e38\u89c4\u7684\u505a\u6cd5\u5c31\u662f\u5efa\u4e24\u4e2a\u4ed3\u5e93\uff0c\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"website"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"management"),"\u3002\u4f46\u662f\u5728\u8fd9\u4e24\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u90fd\u91c7\u7528\u4e86 vue3+vite+element \u67b6\u6784\uff0c\u90fd\u662f\u7528 axios \u8fdb\u884c\u8bf7\u6c42\uff0c\u7ec4\u4ef6\u5b58\u5728\u590d\u7528\u6027\uff0c\u4ee5\u53ca\u4e00\u4e9b\u5e38\u7528\u7684 utils \u7c7b\u3002\u5bf9\u6b64\u5e38\u89c4\u7684\u591a\u4ed3\u5e93\u5f00\u53d1\u6a21\u5f0f\u5c31\u4f1a\u5b58\u5728\u4e00\u5b9a\u7684\u91cd\u590d\u6027\u5de5\u4f5c\u3002")),(0,r.kt)("p",{parentName:"admonition"},"\u5728\u6b64\u573a\u666f\u4e0b\u6211\u4eec\u4f7f\u7528\u5355\u4ed3\u5e93\u591a\u9879\u76ee Monorepo \u7684\u65b9\u5f0f\u6765\u5f00\u53d1\u3002")),(0,r.kt)("h2",{id:"\u521b\u5efa-monorepo"},"\u521b\u5efa Monorepo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u9879\u76ee:",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm init")),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa pnpm-workspace.yaml \u6587\u4ef6\uff0c\u5b9a\u4e49\u5982\u4e0b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},'packages:\n  - "packages/**"\n  - "projects/**"\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"packages \u4e0b\u653e\u516c\u5171\u590d\u7528\u4ee3\u7801"),(0,r.kt)("li",{parentName:"ul"},"projects \u4e0b\u653e\u9879\u76ee")),(0,r.kt)("p",{parentName:"admonition"},"\u5f53\u524d\u9879\u76ee\u7ed3\u6784"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-log"},"\u251c\u2500\u2500 packages\n\u251c\u2500\u2500 projects\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pnpm-workspace.yaml\n"))),(0,r.kt)("h2",{id:"\u521b\u5efa\u9879\u76ee-projects"},"\u521b\u5efa\u9879\u76ee projects"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u9879\u76ee\u90fd\u4f7f\u7528 Vue3\u3001Vite\u3001TypeScript \u548c Element-Plus \u642d\u5efa\u6846\u67b6\u3002\u53ef\u4ee5\u81ea\u7531\u642d\u5efa\uff0c\u770b\u81ea\u5df1\u9700\u6c42\u548c\u504f\u597d\u3002"),(0,r.kt)("h3",{id:"\u521b\u5efa-management-\u540e\u53f0\u7ba1\u7406\u9879\u76eevitetypescriptelement-plus"},"\u521b\u5efa management \u540e\u53f0\u7ba1\u7406\u9879\u76ee\uff08Vite+TypeScript+Element-Plus\uff09"),(0,r.kt)("p",null,"cd \u5230 project\uff0c\u4f7f\u7528 npm \u547d\u4ee4\u884c\u4e00\u952e\u5b89\u88c5 vite+ts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd project\n\nnpm init vite@latest management -- --template vue-ts\n")),(0,r.kt)("p",null,"\u4fee\u6539\u5f53\u524d management \u540d\u79f0\uff08name\uff09\uff0c@g6 \u7528\u4f5c\u7ec4\u7ec7\u540d\u79f0\uff08\u53ef\u4efb\u610f\u53d6\uff09\uff0c\u65b9\u4fbf\u5404\u4e2a\u9879\u76ee\u4e4b\u95f4\u4e92\u76f8\u5bfc\u5165\u4f7f\u7528\uff0cpackage.json \u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": `@g6/management`\n  // ...\n}\n')),(0,r.kt)("p",null,"\u5b89\u88c5 element-Plus"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add element-plus\nor\npnpm add element-plus -w # \u5b89\u88c5\u5230\u5de5\u4f5c\u533a\uff08\u6839\u76ee\u5f55\uff09\uff0c\u4e0b\u4e00\u4e2a\u9879\u76ee\u5c31\u80fd\u4f7f\u7528\u5230 element-plus\n")),(0,r.kt)("p",null,"\u8fd0\u884c\uff0c\u67e5\u770b\u662f\u5426\u6210\u529f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm dev")),(0,r.kt)("admonition",{title:"\u63d0\u53d6\u516c\u5171\u4f9d\u8d56",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u62f7\u8d1d management \u4f9d\u8d56 ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," \u5185\u5bb9\u5230\u5de5\u4f5c\u533a\uff08\u6839\u76ee\u5f55\uff09",(0,r.kt)("inlineCode",{parentName:"li"},"package.json"),";"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u5de5\u4f5c\u533a\uff08\u6839\u76ee\u5f55\uff09package.json \u65b0\u589e script \u811a\u672c\uff0c\u7528\u4e8e\u542f\u52a8\u548c\u7f16\u8bd1\u9879\u76ee")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n"mg:dev": "pnpm run -F @g6/management dev",\n"mg:build": "pnpm run -F @g6/management build",\n// ...\n}\n')),(0,r.kt)("p",{parentName:"admonition"},"\u5220\u9664 management \u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u76ee\u5f55\uff0c\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\u9a8c\u8bc1\u662f\u5426\u63d0\u53d6\u516c\u5171\u4f9d\u8d56\u6210\u529f"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ../.. # \u56de\u5230\u6839\u76ee\u5f55\npnpm i # \u521d\u59cb\u5316\u6240\u6709\u5de5\u4f5c\u533a\u4f9d\u8d56\npnpm run mg:dev # \u8fd0\u884c management\n"))),(0,r.kt)("p",null,"\u5b89\u88c5 management \u6210\u529f"),(0,r.kt)("h3",{id:"\u521b\u5efa-website-\u540e\u53f0\u7ba1\u7406\u9879\u76eevitetypescriptelement-plus"},"\u521b\u5efa website \u540e\u53f0\u7ba1\u7406\u9879\u76ee\uff08Vite+TypeScript+Element-Plus\uff09"),(0,r.kt)("p",null,"\u540c\u5b89\u88c5 management \u4e00\u6837\uff0c\u8bb0\u5f97\u5c06 name \u4fee\u6539\uff0c\u63d0\u53d6\u516c\u7528\u4f9d\u8d56\u3002"),(0,r.kt)("p",null,"\u6b64\u65f6\uff0cmanagement \u548c website \u90fd\u80fd\u6b63\u5e38\u8fd0\u884c\u4f7f\u7528\uff0c\u5e76\u4e14\u5404\u81ea\u7684 package.json \u4e2d\u76f8\u540c\u4f9d\u8d56\u63d0\u53d6\u5230\u6839\u76ee\u5f55(\u5de5\u4f5c\u7a7a\u95f4)\uff0c\u5982\u6709\u4e0d\u5171\u7528\u5219\u5404\u81ea\u5b89\u88c5\u5728\u5404\u81ea\u5185\u90e8\u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"\u521b\u5efa\u516c\u5171\u5185\u5bb9-packages"},"\u521b\u5efa\u516c\u5171\u5185\u5bb9 packages"),(0,r.kt)("p",null,"packages \u4e0b\u8fd9\u91cc\u4e3b\u8981\u662f\u7528\u6765\u5b58\u653e\u516c\u5171\u5185\u5bb9\uff0c\u6bd4\u5982 utils\u3001hooks\u3001components \u7b49\u7b49\u3002\u4e0b\u9762\u4e3b\u8981\u4f7f\u7528 utils \u505a\u4e00\u4e2a\u793a\u4f8b\u3002"),(0,r.kt)("p",null,"\u521b\u5efa utils \u6587\u4ef6\u5939\uff0c\u5e76\u521d\u59cb\u5316"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"\u251c\u2500\u2500 packages\n| \u251c\u2500\u2500 utils\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd packages/utils\n\npnpm init\n")),(0,r.kt)("p",null,"\u540c\u7406\uff0c\u7f16\u8f91 package.json \u540d\u79f0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": `@g6/utils`\n  // ...\n}\n')),(0,r.kt)("p",null,"\u5f53\u524d\u6839\u76ee\u5f55\u65b0\u5efa index.ts \u7f16\u5199\u6d4b\u8bd5\u51fd\u6570\uff0c\u5e76\u4fee\u6539 package.json \u4e2d\u7684 main \u5b57\u6bb5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "description": "",\n  "main": "index.ts",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  }\n  //...\n}\n')),(0,r.kt)("p",null,"index.ts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * \u6d4b\u8bd5\u540d\u79f0\n * @returns\n */\nexport const testName = (): string => {\n  return "Hello Utils";\n};\n')),(0,r.kt)("p",null,"\u5230\u6b64\u5199\u5b8c\u4e00\u4e2a\u6d4b\u8bd5 utils \u5305\u4e86\uff0c\u4e0b\u9762\u5f00\u59cb\u6d4b\u8bd5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 management \u4e2d\u5b89\u88c5 utils\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add -F @g6/management @g6/utils"),";"),(0,r.kt)("li",{parentName:"ul"},"\u4fee\u6539 app.vue \u5185\u5bb9\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<script setup lang="ts">\nimport { testName } from "@g6/utils";\n<\/script>\n\n<template>\n  <h2>{{ testName() }}</h2>\n</template>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\uff0c\u67e5\u770b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm -w run mg:dev # -w \u6839\u76ee\u5f55\n")))}c.isMDXComponent=!0}}]);