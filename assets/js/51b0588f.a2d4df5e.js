"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[4502],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(c,".").concat(g)]||d[g]||s[g]||o;return n?t.createElement(m,l(l({ref:r},p),{},{components:n})):t.createElement(m,l({ref:r},p))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6779:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=n(87462),a=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"golang/range\u5173\u952e\u5b57",id:"golang/range\u5173\u952e\u5b57",title:"range\u5173\u952e\u5b57",description:"range \u8fd4\u56de\u7684\u662f\u6bcf\u4e2a\u5143\u7d20\u7684\u526f\u672c\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u8fd4\u56de\u5bf9\u8be5\u5143\u7d20\u7684\u5f15\u7528",source:"@site/docs/golang/range\u5173\u952e\u5b57.md",sourceDirName:"golang",slug:"/golang/range\u5173\u952e\u5b57",permalink:"/docs/golang/range\u5173\u952e\u5b57",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/golang/range\u5173\u952e\u5b57.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pointer\u548cuintptr",permalink:"/docs/golang/pointer\u548cuintptr"},next:{title:"\u53d8\u91cf\u548c\u5e38\u91cf",permalink:"/docs/golang/\u53d8\u91cf\u548c\u5e38\u91cf"}},c={},u=[],p={toc:u},d="wrapper";function s(e){let{components:r,...n}=e;return(0,a.kt)(d,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"range \u8fd4\u56de\u7684\u662f\u6bcf\u4e2a\u5143\u7d20\u7684\u526f\u672c\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u8fd4\u56de\u5bf9\u8be5\u5143\u7d20\u7684\u5f15\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// \u521b\u5efa\u4e00\u4e2a\u6574\u578b\u5207\u7247\uff0c\u5e76\u8d4b\u503c\nslice := []int{10, 20, 30, 40}\n// \u8fed\u4ee3\u6bcf\u4e2a\u5143\u7d20\uff0c\u5e76\u663e\u793a\u503c\u548c\u5730\u5740\nfor index, value := range slice {\n    fmt.Printf("Value: %d Value-Addr: %X ElemAddr: %X\\n", value, &value, &slice[index])\n}\n')),(0,a.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"Value: 10 Value-Addr: 10500168 ElemAddr: 1052E100\nValue: 20 Value-Addr: 10500168 ElemAddr: 1052E104\nValue: 30 Value-Addr: 10500168 ElemAddr: 1052E108\nValue: 40 Value-Addr: 10500168 ElemAddr: 1052E10C\n")),(0,a.kt)("p",null,"\u56e0\u4e3a\u8fed\u4ee3\u8fd4\u56de\u7684\u53d8\u91cf\u662f\u4e00\u4e2a\u5728\u8fed\u4ee3\u8fc7\u7a0b\u4e2d\u6839\u636e\u5207\u7247\u4f9d\u6b21\u8d4b\u503c\u7684\u65b0\u53d8\u91cf\uff0c\u6240\u4ee5 value \u7684\u5730\u5740\u603b\u662f\u76f8\u540c\u7684\uff0c\u8981\u60f3\u83b7\u53d6\u6bcf\u4e2a\u5143\u7d20\u7684\u5730\u5740\uff0c\u9700\u8981\u4f7f\u7528\u5207\u7247\u53d8\u91cf\u548c\u7d22\u5f15\u503c\uff08\u4f8b\u5982\u4e0a\u9762\u4ee3\u7801\u4e2d\u7684 &slice","[index]","\uff09\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u9700\u8981\u7d22\u5f15\u503c\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e0b\u5212\u7ebf",(0,a.kt)("inlineCode",{parentName:"li"},"_"),"\u6765\u5ffd\u7565\u8fd9\u4e2a\u503c;"),(0,a.kt)("li",{parentName:"ul"},"range \u5173\u952e\u5b57\u4e0d\u4ec5\u4ec5\u53ef\u4ee5\u7528\u6765\u904d\u5386\u5207\u7247\uff0c\u5b83\u8fd8\u53ef\u4ee5\u7528\u6765\u904d\u5386\u6570\u7ec4\u3001\u5b57\u7b26\u4e32\u3001map \u6216\u8005\u901a\u9053\u7b49;")))}s.isMDXComponent=!0}}]);