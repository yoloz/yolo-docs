"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[6478],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"golang/new\u548cmake",id:"golang/new\u548cmake",title:"new\u548cmake",description:"\u9002\u7528\u8303\u56f4",source:"@site/docs/golang/new\u548cmake.md",sourceDirName:"golang",slug:"/golang/new\u548cmake",permalink:"/docs/golang/new\u548cmake",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/golang/new\u548cmake.md",tags:[],version:"current",lastUpdatedAt:1686217402,formattedLastUpdatedAt:"2023\u5e746\u67088\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fmt\u7684\u5360\u4f4d\u7b26",permalink:"/docs/golang/fmt\u7684\u5360\u4f4d\u7b26"},next:{title:"pointer\u548cuintptr",permalink:"/docs/golang/pointer\u548cuintptr"}},c={},u=[{value:"\u9002\u7528\u8303\u56f4",id:"\u9002\u7528\u8303\u56f4",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2},{value:"\u586b\u5145\u503c",id:"\u586b\u5145\u503c",level:2}],p={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9002\u7528\u8303\u56f4"},"\u9002\u7528\u8303\u56f4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"new(T) \u4e3a\u6bcf\u4e2a\u65b0\u7684\u7c7b\u578b T \u5206\u914d\u4e00\u7247\u5185\u5b58\uff0c\u521d\u59cb\u5316\u4e3a 0 \u5e76\u4e14\u8fd4\u56de\u7c7b\u578b\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"*T")," \u7684\u5185\u5b58\u5730\u5740\uff0c\u53ef\u4ee5\u5bf9\u6240\u6709\u7c7b\u578b(\u9002\u7528\u4e8e\u503c\u7c7b\u578b\u5982\u6570\u7ec4\u548c\u7ed3\u6784\u4f53\uff0c\u76f8\u5f53\u4e8e &T{})\uff1b"),(0,a.kt)("li",{parentName:"ul"},"make(T) \u8fd4\u56de\u4e00\u4e2a\u7c7b\u578b\u4e3a T \u7684\u521d\u59cb\u503c\uff0c\u5b83\u53ea\u9002\u7528\u4e8e 3 \u79cd\u5185\u5efa\u7684\u5f15\u7528\u7c7b\u578b\uff1a\u5207\u7247\u3001map \u548c channel")),(0,a.kt)("p",null,"\u6362\u8a00\u4e4b\uff0cnew \u51fd\u6570\u4ec5\u9650\u5206\u914d\u5185\u5b58\uff0cmake \u51fd\u6570\u4f1a\u521d\u59cb\u5316"),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"new \u8fd4\u56de\u6307\u9488;"),(0,a.kt)("li",{parentName:"ul"},"make \u8fd4\u56de\u5f15\u7528;")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"new \u8fd4\u56de\u4e00\u4e2a\u6307\u5411\u5df2\u6e05\u96f6\u5185\u5b58\u7684\u6307\u9488\uff0c\u800c make \u8fd4\u56de\u4e00\u4e2a\u590d\u6742\u7684\u7ed3\u6784\u3002\u5982 make \u8fd4\u56de\u590d\u6742\u7684\u7ed3\u6784\u4e3a slice \u65f6:\u5b83\u662f\u4e00\u4e2a\u5305\u542b 3 \u4e2a\u57df\u7684\u7ed3\u6784\u4f53\uff1a\u6307\u5411 slice \u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u6307\u9488\uff0cslice \u7684\u957f\u5ea6\uff0c\u4ee5\u53ca slice \u7684\u5bb9\u91cf\u3002")),(0,a.kt)("h2",{id:"\u586b\u5145\u503c"},"\u586b\u5145\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"new \u586b\u5145\u96f6\u503c;"),(0,a.kt)("li",{parentName:"ul"},"make \u586b\u5145\u975e\u96f6\u503c;")),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"make([]int, 10, 100) \u5148\u5206\u914d\u4e00\u4e2a\u6709 100 \u4e2a int \u7684\u6570\u7ec4\uff0c\u7136\u540e\u57fa\u4e8e\u6570\u7ec4\u521b\u5efa\u4e00\u4e2a\u957f\u5ea6\u4e3a 10\uff0c\u5bb9\u91cf\u4e3a 100 \u7684 slice \u7ed3\u6784\uff1b"),(0,a.kt)("li",{parentName:"ul"},"new([]int)\u8fd4\u56de\u4e00\u4e2a\u6307\u5411\u65b0\u5206\u914d\u7684\uff0c\u88ab\u7f6e\u96f6\u7684 slice \u7ed3\u6784\u4f53\u7684\u6307\u9488\uff0c\u5373\u6307\u5411\u503c\u4e3a nil \u7684 slice \u7684\u6307\u9488")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u76f4\u63a5\u4f7f\u7528 struct{} \u6765\u521d\u59cb\u5316 strut \u65f6\uff0c\u8fd4\u56de\u7684\u662f\u4e00\u4e2a struct \u7c7b\u578b\u7684\u503c\uff0c\u800c\u4e0d\u662f\u6307\u9488")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type Student struct{\n    name string\n    age int\n}\n\nfunc main(){\n    var s1 *Student = new(Student)\n    s1.age = 22\n    s1.name = "tcy"\n    var s2 Student = Student{age:21,name:"tcy"}\n    fmt.Println(s1,s2)      //&{tcy 22} {tcy 21}\n}\n')))}m.isMDXComponent=!0}}]);