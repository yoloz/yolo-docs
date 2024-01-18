"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[6732],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(g,l(l({ref:n},s),{},{components:t})):r.createElement(g,l({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={},l=void 0,i={unversionedId:"golang/\u5e38\u89c1\u9519\u8bef",id:"golang/\u5e38\u89c1\u9519\u8bef",title:"\u5e38\u89c1\u9519\u8bef",description:"undefined: methodName",source:"@site/docs/golang/\u5e38\u89c1\u9519\u8bef.md",sourceDirName:"golang",slug:"/golang/\u5e38\u89c1\u9519\u8bef",permalink:"/docs/golang/\u5e38\u89c1\u9519\u8bef",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/golang/\u5e38\u89c1\u9519\u8bef.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5e38\u7528\u7c7b\u578b\u4e92\u8f6c",permalink:"/docs/golang/\u5e38\u7528\u7c7b\u578b\u4e92\u8f6c"},next:{title:"\u5e76\u53d1\u7f16\u7a0b",permalink:"/docs/golang/\u5e76\u53d1\u7f16\u7a0b"}},u={},c=[{value:"undefined: methodName",id:"undefined-methodname",level:2},{value:"fatal error: stdlib.h",id:"fatal-error-stdlibh",level:2},{value:"no Go source files",id:"no-go-source-files",level:2}],s={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"undefined-methodname"},"undefined: methodName"),(0,o.kt)("p",null,"\u5728 golang \u4e2d\u540c\u4e00\u4e2a\u5305\u4e2d\u6709\u4e24\u4e2a\u6587\u4ef6\uff0c\u5206\u522b\u4e3a main.go \u548c a.go\uff0cmain \u51fd\u6570\u5728 main.go \u4e2d\uff0c\u5e76\u4e14\u5728 main \u51fd\u6570\u4e2d\u8c03\u7528\u4e86 a.go \u4e2d\u7684\u4e00\u4e2a\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yoloz@debian:~/projects/xxx$ go run main.go\n# command-line-arguments\n./main.go:45:21: undefined: removeSpace\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"go run\uff1a \u4f1a\u5148\u8fdb\u884c\u7f16\u8bd1\u64cd\u4f5c\uff0c\u800c\u5728\u6b64\u5904\u7684\u7f16\u8bd1\u5b83\u53ea\u4f1a\u4ee5\u8fd9\u4e2a main.go \u4e3a\u51c6\uff0c\u5bfc\u81f4\u5f15\u7528\u5176\u4ed6\u6587\u4ef6\u51fa\u73b0\u627e\u4e0d\u5230\u7684\u60c5\u51b5"),(0,o.kt)("li",{parentName:"ul"},"go build\uff1a\u4e0d\u4e00\u6837\uff0c\u5b83\u4f1a\u81ea\u52a8\u67e5\u627e\u5f15\u7528\u6587\u4ef6\u5e76\u6253\u5305")),(0,o.kt)("p",null,"\u89e3\u51b3\u529e\u6cd5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u4e00\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"go run main.go a.go")),(0,o.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u4e8c\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"go run *.go")),(0,o.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u4e09\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"go build"))),(0,o.kt)("h2",{id:"fatal-error-stdlibh"},"fatal error: stdlib.h"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'yolo@debian:~/vmsummary$ /opt/go/bin/go build -buildmode=c-shared -ldflags "-s -w" -o libvms.so vmsummary.go diskImpl.go netImpl.go processImpl.go\n# runtime/cgo\n_cgo_export.c:3:10: fatal error: stdlib.h: No such file or directory\n #include <stdlib.h>\n          ^~~~~~~~~~\ncompilation terminated.\nyolo@debian:~/vmsummary$\n')),(0,o.kt)("p",null,"\u89e3\u51b3\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"sudo apt install build-essential")),(0,o.kt)("h2",{id:"no-go-source-files"},"no Go source files"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yolo@debian:~/projects/xxx/test$ go run test.go\ngo: no Go source files\nyolo@debian:~/projects/xxx/test$\n")),(0,o.kt)("p",null,"\u539f\u56e0\u65f6\u56e0\u4e3a\u6ca1\u6709\u5b89\u88c5",(0,o.kt)("inlineCode",{parentName:"p"},"gcc"),",\u5b89\u88c5",(0,o.kt)("inlineCode",{parentName:"p"},"sudo apt install gcc"),"\u540e\u53ef\u4ee5\u8fd0\u884c\u4ee5\u53ca\u7f16\u8bd1\u4e86"))}d.isMDXComponent=!0}}]);