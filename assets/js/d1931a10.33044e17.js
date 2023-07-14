"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(n),m=o,g=s["".concat(u,".").concat(m)]||s[m]||f[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,p={unversionedId:"golang/pointer\u548cuintptr",id:"golang/pointer\u548cuintptr",title:"pointer\u548cuintptr",description:"unsafe.Pointer \u548c uintptr",source:"@site/docs/golang/pointer\u548cuintptr.md",sourceDirName:"golang",slug:"/golang/pointer\u548cuintptr",permalink:"/docs/golang/pointer\u548cuintptr",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/golang/pointer\u548cuintptr.md",tags:[],version:"current",lastUpdatedAt:1689307169,formattedLastUpdatedAt:"2023\u5e747\u670814\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"new\u548cmake",permalink:"/docs/golang/new\u548cmake"},next:{title:"range\u5173\u952e\u5b57",permalink:"/docs/golang/range\u5173\u952e\u5b57"}},u={},l=[{value:"unsafe.Pointer \u548c uintptr",id:"unsafepointer-\u548c-uintptr",level:2}],c={toc:l},s="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"unsafepointer-\u548c-uintptr"},"unsafe.Pointer \u548c uintptr"),(0,o.kt)("p",null,"uintptr:\u662f\u4e00\u4e2a\u6574\u6570\u7c7b\u578b,\u4e0d\u662f\u6307\u9488,\u4f46\u8db3\u591f\u4fdd\u5b58\u4efb\u4f55\u4e00\u79cd\u6307\u9488\u7c7b\u578b\u3002unsafe \u5305\u652f\u6301\u4e86\u8fd9\u4e9b\u65b9\u6cd5\u6765\u5b8c\u6210\u3010\u7c7b\u578b\u3011=> uintptr \u7684\u8f6c\u6362\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// \u8fd4\u56de\u7c7b\u578b x \u6240\u5360\u636e\u7684\u5b57\u8282\u6570\uff0c\u4f46\u4e0d\u5305\u542b x \u6240\u6307\u5411\u7684\u5185\u5bb9\u7684\u5927\u5c0f\u3002\nfunc Sizeof(x ArbitraryType) uintptr\n// \u8fd4\u56de\u7ed3\u6784\u4f53\u6210\u5458\u5728\u5185\u5b58\u4e2d\u7684\u4f4d\u7f6e\u79bb\u7ed3\u6784\u4f53\u8d77\u59cb\u5904\u7684\u5b57\u8282\u6570\uff0c\u6240\u4f20\u53c2\u6570\u5fc5\u987b\u662f\u7ed3\u6784\u4f53\u7684\u6210\u5458\nfunc Offsetof(x ArbitraryType) uintptr\n// \u8fd4\u56de m\uff0cm \u662f\u6307\u5f53\u7c7b\u578b\u8fdb\u884c\u5185\u5b58\u5bf9\u9f50\u65f6\uff0c\u5b83\u5206\u914d\u5230\u7684\u5185\u5b58\u5730\u5740\u80fd\u6574\u9664 m\nfunc Alignof(x ArbitraryType) uintptr\n")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u4efb\u610f\u7c7b\u578b\u53d8\u91cf\u8f6c\u5165\uff0c\u83b7\u53d6\u5bf9\u5e94\u8bed\u4e49\u7684 uintptr\uff0c\u7528\u6765\u540e\u7eed\u8ba1\u7b97\u5185\u5b58\u5730\u5740(\u6bd4\u5982\u57fa\u4e8e\u4e00\u4e2a\u7ed3\u6784\u4f53\u5b57\u6bb5\u5730\u5740\uff0c\u83b7\u53d6\u4e0b\u4e00\u4e2a\u5b57\u6bb5\u5730\u5740\u7b49)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Pointer => uintptr\nuintptr(unsafe.Pointer(&s))\n// uintptr => Pointer\nunsafe.Pointer(unsafe.Offsetof(s.f))\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u53d8\u91cf\u5230 uintptr \u7684\u8f6c\u6362\u4ee5\u53ca\u8ba1\u7b97\u5fc5\u987b\u5728\u4e00\u4e2a\u8868\u8fbe\u5f0f\u4e2d\u5b8c\u6210\uff08\u9700\u8981\u4fdd\u8bc1\u539f\u5b50\u6027\uff09\n\u9519\u8bef\u7684\u4f8b\u5b50\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"u := uintptr(p)\np = unsafe.Pointer(u + offset)\n")),(0,o.kt)("p",{parentName:"admonition"},"uintptr \u5230 Pointer \u7684\u8f6c\u6362\u4e00\u5b9a\u8981\u5728\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff0c\u4e0d\u80fd\u7528 uintptr \u5b58\u8d77\u6765\u3002")),(0,o.kt)("p",null,"uintptr + offset \u7b97\u5730\u5740\uff0c\u518d\u8ddf Pointer \u8f6c\u5316\u5176\u5b9e\u662f\u4e00\u4e2a\u5f88\u5f3a\u5927\u7684\u80fd\u529b,\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\nimport (\n    "fmt"\n    "unsafe"\n)\nfunc main() {\n    length := 6\n    arr := make([]int, length)\n    for i := 0; i < length; i++ {\n        arr[i] = i\n    }\n    fmt.Println(arr)\n    // [0 1 2 3 4 5]\n    // \u53d6slice\u7684\u7b2c5\u4e2a\u5143\u7d20\uff1a\u901a\u8fc7\u8ba1\u7b97\u7b2c1\u4e2a\u5143\u7d20 + 4 \u4e2a\u5143\u7d20\u7684size \u5f97\u51fa\n    end := unsafe.Pointer(uintptr(unsafe.Pointer(&arr[0])) + 4*unsafe.Sizeof(arr[0]))\n\n    fmt.Println(*(*int)(end)) // 4\n    fmt.Println(arr[4]) // 4\n\n}\n')))}f.isMDXComponent=!0}}]);