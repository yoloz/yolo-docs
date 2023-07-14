"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[6127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},i=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||s;return n?o.createElement(f,a(a({ref:t},i),{},{components:n})):o.createElement(f,a({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:r,a[1]=u;for(var l=2;l<s;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const s={},a=void 0,u={unversionedId:"vue/\u4f7f\u7528component\u52a0\u8f7d\u7ec4\u4ef6",id:"vue/\u4f7f\u7528component\u52a0\u8f7d\u7ec4\u4ef6",title:"\u4f7f\u7528component\u52a0\u8f7d\u7ec4\u4ef6",description:"\u4e0d\u4f7f\u7528 setup \u8bed\u6cd5\u7cd6\uff0c\u8fd9\u79cd\u65b9\u5f0f\u548c vue2 \u5dee\u4e0d\u591a\uff0cis \u53ef\u4ee5\u662f\u4e2a\u5b57\u7b26\u4e32",source:"@site/docs/vue/\u4f7f\u7528component\u52a0\u8f7d\u7ec4\u4ef6.md",sourceDirName:"vue",slug:"/vue/\u4f7f\u7528component\u52a0\u8f7d\u7ec4\u4ef6",permalink:"/docs/vue/\u4f7f\u7528component\u52a0\u8f7d\u7ec4\u4ef6",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/vue/\u4f7f\u7528component\u52a0\u8f7d\u7ec4\u4ef6.md",tags:[],version:"current",lastUpdatedAt:1689307169,formattedLastUpdatedAt:"2023\u5e747\u670814\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"websocket-ts",permalink:"/docs/vue/websocket-ts"},next:{title:"\u5927\u6587\u4ef6\u4e0a\u4f20",permalink:"/docs/vue/\u5927\u6587\u4ef6\u4e0a\u4f20"}},c={},l=[{value:"\u4e0d\u4f7f\u7528 setup \u8bed\u6cd5\u7cd6\uff0c\u8fd9\u79cd\u65b9\u5f0f\u548c vue2 \u5dee\u4e0d\u591a\uff0cis \u53ef\u4ee5\u662f\u4e2a\u5b57\u7b26\u4e32",id:"\u4e0d\u4f7f\u7528-setup-\u8bed\u6cd5\u7cd6\u8fd9\u79cd\u65b9\u5f0f\u548c-vue2-\u5dee\u4e0d\u591ais-\u53ef\u4ee5\u662f\u4e2a\u5b57\u7b26\u4e32",level:2},{value:"\u4f7f\u7528 setup \u8bed\u6cd5\u7cd6\uff0c\u8fd9\u65f6\u5019\u7684 is \u5982\u679c\u4f7f\u7528\u5b57\u7b26\u4e32\u4f1a\u52a0\u8f7d\u4e0d\u51fa\u6765\uff0c\u5f97\u4f7f\u7528\u7ec4\u4ef6\u5b9e\u4f8b",id:"\u4f7f\u7528-setup-\u8bed\u6cd5\u7cd6\u8fd9\u65f6\u5019\u7684-is-\u5982\u679c\u4f7f\u7528\u5b57\u7b26\u4e32\u4f1a\u52a0\u8f7d\u4e0d\u51fa\u6765\u5f97\u4f7f\u7528\u7ec4\u4ef6\u5b9e\u4f8b",level:2},{value:"\u65b9\u5f0f\u4e00",id:"\u65b9\u5f0f\u4e00",level:3},{value:"\u65b9\u5f0f\u4e8c",id:"\u65b9\u5f0f\u4e8c",level:3}],i={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e0d\u4f7f\u7528-setup-\u8bed\u6cd5\u7cd6\u8fd9\u79cd\u65b9\u5f0f\u548c-vue2-\u5dee\u4e0d\u591ais-\u53ef\u4ee5\u662f\u4e2a\u5b57\u7b26\u4e32"},"\u4e0d\u4f7f\u7528 setup \u8bed\u6cd5\u7cd6\uff0c\u8fd9\u79cd\u65b9\u5f0f\u548c vue2 \u5dee\u4e0d\u591a\uff0cis \u53ef\u4ee5\u662f\u4e2a\u5b57\u7b26\u4e32"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<script lang=\"ts\">\n\nimport { storeToRefs } from 'pinia'\n\nimport { useSystemStore } from '@/stores/systemStore'\n\nimport Double from './double/double-index.vue'\nimport Classic from './classic/classic-index.vue'\n\nexport default {\n    components: { Double, Classic },\n    setup() {\n        const systemStore = useSystemStore()\n        const { getLayout } = storeToRefs(systemStore)\n        return {\n            getLayout\n        }\n    }\n}\n<\/script>\n\n<template>\n    <component :is=\"getLayout.layoutMode\"></component>\n</template>\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528-setup-\u8bed\u6cd5\u7cd6\u8fd9\u65f6\u5019\u7684-is-\u5982\u679c\u4f7f\u7528\u5b57\u7b26\u4e32\u4f1a\u52a0\u8f7d\u4e0d\u51fa\u6765\u5f97\u4f7f\u7528\u7ec4\u4ef6\u5b9e\u4f8b"},"\u4f7f\u7528 setup \u8bed\u6cd5\u7cd6\uff0c\u8fd9\u65f6\u5019\u7684 is \u5982\u679c\u4f7f\u7528\u5b57\u7b26\u4e32\u4f1a\u52a0\u8f7d\u4e0d\u51fa\u6765\uff0c\u5f97\u4f7f\u7528\u7ec4\u4ef6\u5b9e\u4f8b"),(0,r.kt)("h3",{id:"\u65b9\u5f0f\u4e00"},"\u65b9\u5f0f\u4e00"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<script lang=\"ts\" setup>\n\nimport { storeToRefs } from 'pinia'\nimport { onMounted, shallowRef, watch } from 'vue'\n\nimport { useSystemStore } from '@/stores/systemStore'\n\nimport Double from './double/double-index.vue'\nimport Classic from './classic/classic-index.vue'\n\nconst systemStore = useSystemStore()\nconst { getLayout } = storeToRefs(systemStore)\n\n// \u8fd9\u91cc\u7528ref\u7684\u8bdd\uff0cvue\u7ed9\u51fa\u8b66\u544a\u63a5\u6536\u5230\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u8be5\u7ec4\u4ef6\u88ab\u5236\u6210\u53cd\u5e94\u5bf9\u8c61\u3002\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e0d\u5fc5\u8981\u7684\u6027\u80fd\u5f00\u9500\uff0c\u5e94\u8be5\u901a\u8fc7\u5c06\u7ec4\u4ef6\u6807\u8bb0\u4e3a\u201cmarkRaw\u201d\u6216\u4f7f\u7528\u201cshallowRef\u201d\u800c\u4e0d\u662f\u201cref\u201d\u6765\u907f\u514d\u3002\n// \u5982\u679c\u4f7f\u7528 markRaw \u90a3\u4e48currentComp\u5c06\u6c38\u8fdc\u4e0d\u4f1a\u518d\u6210\u4e3a\u54cd\u5e94\u5f0f\u5bf9\u8c61\u3002 \u6240\u4ee5\u5f97\u4f7f\u7528 shallowRef\nconst currentComp = shallowRef()\n\nwatch(getLayout, (ly) => {\n    if (ly.layoutMode === 'Classic') {\n        currentComp.value = Classic\n    } else {\n        currentComp.value = Double\n    }\n})\n\nonMounted(() => {\n    if (getLayout.value.layoutMode === 'Classic') {\n        currentComp.value = Classic\n    } else {\n        currentComp.value = Double\n    }\n})\n<\/script>\n\n<template>\n    <component :is=\"currentComp\"></component>\n</template>\n")),(0,r.kt)("h3",{id:"\u65b9\u5f0f\u4e8c"},"\u65b9\u5f0f\u4e8c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<script lang=\"ts\" setup>\n\nimport { storeToRefs } from 'pinia'\n\nimport { useSystemStore } from '@/stores/systemStore'\n\nimport Double from './double/double-index.vue'\nimport Classic from './classic/classic-index.vue'\n\nconst systemStore = useSystemStore()\nconst { getLayout } = storeToRefs(systemStore)\n\n<\/script>\n\n<template>\n    <component :is=\"getLayout.layoutMode\"></component>\n</template>\n\n\x3c!-- \u53ea\u6709\u5728 components \u9009\u9879\u4e2d\u7684\u7ec4\u4ef6\u53ef\u4ee5\u88ab\u52a8\u6001\u7ec4\u4ef6\u4f7f\u7528--\x3e\n<script lang=\"ts\">\nexport default {\n    components: { Double, Classic }\n}\n<\/script>\n")))}m.isMDXComponent=!0}}]);