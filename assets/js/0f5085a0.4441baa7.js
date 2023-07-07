"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},s=void 0,a={unversionedId:"vue/\u95ee\u9898\u5f52\u96c6",id:"vue/\u95ee\u9898\u5f52\u96c6",title:"\u95ee\u9898\u5f52\u96c6",description:"process is not defined",source:"@site/docs/vue/\u95ee\u9898\u5f52\u96c6.md",sourceDirName:"vue",slug:"/vue/\u95ee\u9898\u5f52\u96c6",permalink:"/docs/vue/\u95ee\u9898\u5f52\u96c6",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/vue/\u95ee\u9898\u5f52\u96c6.md",tags:[],version:"current",lastUpdatedAt:1688721072,formattedLastUpdatedAt:"2023\u5e747\u67087\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5f3a\u5236\u91cd\u65b0\u6e32\u67d3\u9875\u9762",permalink:"/docs/vue/\u5f3a\u5236\u91cd\u65b0\u6e32\u67d3\u9875\u9762"},next:{title:"nsis\u5b89\u88c5\u5305\u5236\u4f5c",permalink:"/docs/window/nsis\u5b89\u88c5\u5305\u5236\u4f5c"}},p={},l=[{value:"process is not defined",id:"process-is-not-defined",level:2},{value:"process.cwd is not a function",id:"processcwd-is-not-a-function",level:2},{value:"el-menu \u4e0d\u5c55\u5f00\u95ee\u9898",id:"el-menu-\u4e0d\u5c55\u5f00\u95ee\u9898",level:2},{value:"is either missing a &quot;component(s)&quot; or &quot;children&quot; property.",id:"is-either-missing-a-components-or-children-property",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"process-is-not-defined"},"process is not defined"),(0,o.kt)("p",null,"vite+vue3 \u6dfb\u52a0\u4f9d\u8d56(path-browserify)\u8fd0\u884c\u540e\u51fa\u73b0,\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"vite.config.ts"),"\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"define:{'process.env':{}}"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"}," export default ({ mode }: any) => defineConfig({\n    // ...\n    plugins: [\n    //    ...\n    ],\n    define: {\n        'process.env': {}\n    },\n    // ...\n")),(0,o.kt)("h2",{id:"processcwd-is-not-a-function"},"process.cwd is not a function"),(0,o.kt)("p",null,"vite+vue3 \u6dfb\u52a0\u4f9d\u8d56(path-browserify)\u8fd0\u884c\u540e\u51fa\u73b0,\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://github.com/browserify/path-browserify/issues/29#issuecomment-1600002373"},"https://github.com/browserify/path-browserify/issues/29")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm install process\n$ pnpm install @rollup/plugin-inject -D\n")),(0,o.kt)("p",null,"vite.config.ts \u4e2d\u914d\u7f6e\u6ce8\u5165 process"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\n// ...\nimport inject from '@rollup/plugin-inject'\n\n// https://vitejs.dev/config/\nexport default ({ mode }: any) => defineConfig({\n    // ...\n    plugins: [\n    //    ...\n        inject({\n            process: 'process/browser'\n        })\n    ],\n// ...\n")),(0,o.kt)("p",null,"\u5982\u679c",(0,o.kt)("inlineCode",{parentName:"p"},"vite.config.ts"),"\u6587\u4ef6\u62a5\u9519\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"Type 'Plugin' is not assignable to type 'PluginOption'")),(0,o.kt)("p",null,"\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vitest-dev/vitest/issues/1706"},"https://github.com/vitest-dev/vitest/issues/1706")),(0,o.kt)("p",null,"\u5c06 vite \u5347\u7ea7\u5230\u6700\u65b0\u7248\u5373\u53ef",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install vite@latest")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u6ce8\u5165\u4e86 process,\u4e0a\u9762\u7684 define \u53ef\u4ee5\u53bb\u9664\uff1b")),(0,o.kt)("p",null,"\u4f46\u662f\u6d4f\u89c8\u5668\u62a5\u9519\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"Uncaught SyntaxError: The requested module '/@fs/xxx/node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js?v=0ada4f31' does not provide an export named 'default'")),(0,o.kt)("p",null,"\u6298\u817e\u4e86\u4e0d\u5c11\u65f6\u95f4\uff0c\u6682\u65f6\u624b\u52a8\u5b9e\u73b0",(0,o.kt)("inlineCode",{parentName:"p"},"resolve()"),"\u7684\u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"el-menu-\u4e0d\u5c55\u5f00\u95ee\u9898"},"el-menu \u4e0d\u5c55\u5f00\u95ee\u9898"),(0,o.kt)("p",null,"\u5982\u4e0a\uff0c\u6839\u636e\u8def\u7531\u9012\u5f52\u751f\u6210 el-menu \u7684\u65f6\u5019\uff0c\u624b\u52a8\u5b9e\u73b0 reslove()\uff0c\u5bfc\u81f4\u6700\u540e el-item \u7684 index \u4e2d path \u548c tag \u6807\u7b7e\u91cc\u5b58\u50a8\u7684 path \u4e0d\u4e00\u81f4\uff0c\u6bd4\u5982(\u83dc\u5355\u4e2d\uff1a/abc/def,\u800c tag \u662f:/abc/def/)"),(0,o.kt)("h2",{id:"is-either-missing-a-components-or-children-property"},'is either missing a "component(s)" or "children" property.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "\u7528\u6237\u7ba1\u7406",\n  "path": "users",\n  "permission": "",\n  "meta": { "icon": "icon-usernav", "type": 0, "hidden": false, "order": 0 },\n  "component": "@/rbac/users/index.vue"\n}\n')),(0,o.kt)("p",null,"\u4e0a\u6587 component \u7684\u8def\u5f84\u9519\u8bef\uff0c\u53bb\u9664\u524d\u9762\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"@/"),"\uff0c\u56e0\u4e3a\u52a8\u6001\u52a0\u8f7d\u7684\u65f6\u5019\u4f1a\u7ed9\u524d\u9762\u62fc\u63a5\u4e0a\u8def\u5f84"))}d.isMDXComponent=!0}}]);