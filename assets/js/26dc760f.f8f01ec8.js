"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[2138],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>y});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=r.createContext({}),p=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=p(n.components);return r.createElement(l.Provider,{value:e},n.children)},s="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,l=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),s=p(t),m=o,y=s["".concat(l,".").concat(m)]||s[m]||d[m]||a;return t?r.createElement(y,i(i({ref:e},u),{},{components:t})):r.createElement(y,i({ref:e},u))}));function y(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c[s]="string"==typeof n?n:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3049:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={},i=void 0,c={unversionedId:"concurrent/JAVA\u7ba1\u7a0b\u6a21\u578b",id:"concurrent/JAVA\u7ba1\u7a0b\u6a21\u578b",title:"JAVA\u7ba1\u7a0b\u6a21\u578b",description:"\u7ba1\u7a0b",source:"@site/docs/concurrent/JAVA\u7ba1\u7a0b\u6a21\u578b.md",sourceDirName:"concurrent",slug:"/concurrent/JAVA\u7ba1\u7a0b\u6a21\u578b",permalink:"/docs/concurrent/JAVA\u7ba1\u7a0b\u6a21\u578b",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/concurrent/JAVA\u7ba1\u7a0b\u6a21\u578b.md",tags:[],version:"current",lastUpdatedAt:1689650905,formattedLastUpdatedAt:"2023\u5e747\u670818\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JAVA\u7684\u9501\u5b66\u4e60",permalink:"/docs/concurrent/JAVA\u7684\u9501\u5b66\u4e60"},next:{title:"JAVA\u7ebf\u7a0b\u534f\u4f5c",permalink:"/docs/concurrent/JAVA\u7ebf\u7a0b\u534f\u4f5c"}},l={},p=[{value:"\u7ba1\u7a0b",id:"\u7ba1\u7a0b",level:2},{value:"MESA \u89e3\u51b3\u4e92\u65a5",id:"mesa-\u89e3\u51b3\u4e92\u65a5",level:2},{value:"MESA \u89e3\u51b3\u540c\u6b65",id:"mesa-\u89e3\u51b3\u540c\u6b65",level:2},{value:"synchronized \u5355\u6761\u4ef6\u53d8\u91cf\u7ba1\u7a0b\u6a21\u578b",id:"synchronized-\u5355\u6761\u4ef6\u53d8\u91cf\u7ba1\u7a0b\u6a21\u578b",level:2}],u={toc:p},s="wrapper";function d(n){let{components:e,...a}=n;return(0,o.kt)(s,(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u7ba1\u7a0b"},"\u7ba1\u7a0b"),(0,o.kt)("p",null,"\u7ef4\u57fa\u767e\u79d1\uff1a\u7ba1\u7a0b(Monitors\uff0c\u4e5f\u79f0\u4e3a\u76d1\u89c6\u5668) \u662f\u4e00\u79cd\u7a0b\u5e8f\u7ed3\u6784\uff0c\u7ed3\u6784\u5185\u7684\u591a\u4e2a\u5b50\u7a0b\u5e8f\uff08\u5bf9\u8c61\u6216\u6a21\u5757\uff09\u5f62\u6210\u7684\u591a\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u4e92\u65a5\u8bbf\u95ee\u5171\u4eab\u8d44\u6e90\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u7ba1\u7a0b\u5c31\u662f\u6307\u7ba1\u7406\u5171\u4eab\u53d8\u91cf\uff0c\u4ee5\u53ca\u5bf9\u5171\u4eab\u53d8\u91cf\u7684\u76f8\u5173\u64cd\u4f5c\u3002\u5177\u4f53\u5230 Java \u8bed\u8a00\u4e2d\uff0c\u7ba1\u7a0b\u5c31\u662f\u7ba1\u7406\u7c7b\u7684\u6210\u5458\u53d8\u91cf\u548c\u65b9\u6cd5\uff0c\u8ba9\u8fd9\u4e2a\u7c7b\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002")),(0,o.kt)("p",null,"\u7ba1\u7a0b\u8fd9\u4e2a\u6982\u5ff5\u6700\u65e9\u6765\u6e90\u4e8e\u64cd\u4f5c\u7cfb\u7edf\uff0c\u64cd\u4f5c\u7cfb\u7edf\u53d1\u5c55\u4e86\u90a3\u4e48\u591a\u5e74\uff0c\u7ba1\u7a0b\u7684\u5b9e\u73b0\u4e5f\u6709\u591a\u79cd\u65b9\u5f0f\uff0c\u4e3b\u6d41\u7684\u6709\u4e09\u79cd\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hasen \u6a21\u578b"),(0,o.kt)("li",{parentName:"ul"},"Hoare \u6a21\u578b"),(0,o.kt)("li",{parentName:"ul"},"MESA \u6a21\u578b(Java \u501f\u9274\u7684\u662f\u6b64\u6a21\u578b)")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u64cd\u4f5c\u7cfb\u7edf\u4f7f\u7528\u4fe1\u53f7\u91cf\u89e3\u51b3\u5e76\u53d1\u95ee\u9898\uff0cJava \u9009\u62e9\u4f7f\u7528\u7ba1\u7a0b\uff08Monitor\uff09\u89e3\u51b3\u5e76\u53d1\u95ee\u9898\u3002\u4fe1\u53f7\u91cf\u548c\u7ba1\u7a0b\u662f\u7b49\u4ef7\u7684\uff0c\u53ef\u4ee5\u4f7f\u7528\u4fe1\u53f7\u91cf\u5b9e\u73b0\u7ba1\u7a0b\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u7ba1\u7a0b\u5b9e\u73b0\u4fe1\u53f7\u91cf\u3002")),(0,o.kt)("p",null,"\u6211\u4eec\u7528\u7ba1\u7a0b\u6a21\u578b\u4e3b\u8981\u662f\u89e3\u51b3\u5e76\u53d1\u7f16\u7a0b\u4e2d\u7684\u4e24\u4e2a\u6838\u5fc3\u95ee\u9898:\u4e92\u65a5(\u540c\u4e00\u65f6\u523b\u53ea\u5141\u8bb8\u4e00\u4e2a\u7ebf\u7a0b\u8bbf\u95ee\u5171\u4eab\u8d44\u6e90)\uff1b\u540c\u6b65(\u7ebf\u7a0b\u4e4b\u95f4\u5982\u4f55\u901a\u4fe1\uff0c\u534f\u4f5c)\u3002"),(0,o.kt)("h2",{id:"mesa-\u89e3\u51b3\u4e92\u65a5"},"MESA \u89e3\u51b3\u4e92\u65a5"),(0,o.kt)("p",null,"\u5728\u64cd\u4f5c\u5171\u4eab\u53d8\u91cf\u4e4b\u524d\uff0c\u589e\u52a0\u4e00\u4e2a\u7b49\u5f85\u961f\u5217\uff0c\u6bcf\u4e00\u4e2a\u7ebf\u7a0b\u60f3\u8981\u64cd\u4f5c\u5171\u4eab\u53d8\u91cf\u7684\u8bdd\uff0c\u90fd\u9700\u8981\u5728\u7b49\u5f85\u961f\u5217\u4e2d\u7b49\u5f85\uff0c\u76f4\u5230\u7ba1\u7a0b\u9009\u51fa\u4e00\u4e2a\u7ebf\u7a0b\u64cd\u4f5c\u5171\u4eab\u53d8\u91cf\u3002"),(0,o.kt)("h2",{id:"mesa-\u89e3\u51b3\u540c\u6b65"},"MESA \u89e3\u51b3\u540c\u6b65"),(0,o.kt)("p",null,"\u7ebf\u7a0b\u5728\u64cd\u4f5c\u5171\u4eab\u53d8\u91cf\u65f6\u5019\uff0c\u5b83\u4e0d\u4e00\u5b9a\u662f\u76f4\u63a5\u6267\u884c\uff0c\u53ef\u80fd\u6709\u4e00\u4e9b\u81ea\u5df1\u7684\u6267\u884c\u6761\u4ef6\u9650\u5236\uff08\u6bd4\u5982\u53d6\u94b1\u64cd\u4f5c\u8981\u6c42\u8d26\u6237\u91cc\u4e00\u5b9a\u8981\u6709\u94b1\uff0c\u51fa\u961f\u64cd\u4f5c\u8981\u6c42\u961f\u5217\u4e00\u5b9a\u4e0d\u80fd\u662f\u7a7a\u7684\uff09\uff0c\u6211\u4eec\u5c06\u8fd9\u4e9b\u9650\u5236\u79f0\u4e4b\u4e3a\u6761\u4ef6\u53d8\u91cf\uff0c\u6bcf\u4e00\u4e2a\u6761\u4ef6\u53d8\u91cf\u4e5f\u6709\u81ea\u5df1\u5bf9\u5e94\u7684\u7b49\u5f85\u961f\u5217\uff0c\u5f53\u7ebf\u7a0b\u53d1\u73b0\u81ea\u5df1\u7684\u6761\u4ef6\u53d8\u91cf\u4e0d\u6ee1\u8db3\u65f6\uff0c\u5c31\u8fdb\u5165\u76f8\u5e94\u7684\u7b49\u5f85\u961f\u5217\u4e2d\u6392\u961f\uff0c\u76f4\u81f3\u6761\u4ef6\u53d8\u91cf\u6ee1\u8db3\uff0c\u90a3\u4e48\u5176\u7b49\u5f85\u961f\u5217\u4e2d\u7684\u7ebf\u7a0b\u4e5f\u4e0d\u4f1a\u662f\u7acb\u9a6c\u6267\u884c\uff0c\u800c\u662f\u5230\u6700\u5f00\u59cb\u5171\u4eab\u53d8\u91cf\u5bf9\u5e94\u7684\u7b49\u5f85\u961f\u5217\u4e2d\u518d\u6b21\u6392\u961f\uff0c\u91cd\u590d\u4e4b\u524d\u7684\u8fc7\u7a0b\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u53bb\u533b\u9662\u5c31\u533b,\u60a3\u8005\u9996\u5148\u9700\u8981\u6392\u961f\u7b49\u5f85\u533b\u751f\u53eb\u53f7\uff0c\u533b\u751f\u8bca\u65ad\u88ab\u53eb\u5230\u53f7\u7684\u60a3\u8005\u3002\u671f\u95f4\uff0c\u60a3\u8005\u5982\u679c\u9700\u8981\u8fdb\u884c\u5176\u4ed6\u8f85\u52a9\u7684\u68c0\u67e5\uff0c\u6bd4\u5982\u8bf4\u62cd\u4e2a X \u5149\uff0c\u5c31\u9700\u8981\u53bb\u7b49\u5f85\u62cd X \u5149\u7684\u533b\u751f\u53eb\u53f7\u3002\u60a3\u8005\u62cd\u5b8c X \u5149\u4e4b\u540e\uff0c\u518d\u6b21\u56de\u5230\u4e0a\u4e00\u4e2a\u533b\u751f\u90a3\u91cc\uff0c\u7b49\u5f85\u533b\u751f\u518d\u6b21\u8bca\u65ad\u3002")),(0,o.kt)("h2",{id:"synchronized-\u5355\u6761\u4ef6\u53d8\u91cf\u7ba1\u7a0b\u6a21\u578b"},"synchronized \u5355\u6761\u4ef6\u53d8\u91cf\u7ba1\u7a0b\u6a21\u578b"),(0,o.kt)("p",null,"Java \u8bed\u8a00\u5185\u7f6e\u7684\u7ba1\u7a0b\uff08synchronized\uff09\u5bf9 MESA \u6a21\u578b\u8fdb\u884c\u4e86\u7cbe\u7b80\u3002MESA \u6a21\u578b\u4e2d\uff0c\u6761\u4ef6\u53d8\u91cf\u53ef\u4ee5\u6709\u591a\u4e2a\uff0c",(0,o.kt)("a",{parentName:"p",href:"/docs/concurrent/%E5%85%B3%E9%94%AE%E5%AD%97synchronized"},"synchronized"),"\u91cc\u53ea\u6709\u4e00\u4e2a\u6761\u4ef6\u53d8\u91cf\u3002\n",(0,o.kt)("img",{alt:"synchronized.png",src:t(68849).Z,width:"1074",height:"400"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Java SDK \u5e76\u53d1\u5305\u5b9e\u73b0\u7684\u7ba1\u7a0b\u652f\u6301\u591a\u4e2a\u6761\u4ef6\u53d8\u91cf\uff0c\u4e0d\u8fc7\u5e76\u53d1\u5305\u91cc\u7684\u9501\uff0c\u9700\u8981\u5f00\u53d1\u4eba\u5458\u81ea\u5df1\u8fdb\u884c\u52a0\u9501\u548c\u89e3\u9501\u64cd\u4f5c\u3002\u5982\u4e0b\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class BlockedQueue<T> {\n  final Lock lock = new ReentrantLock();\n  // \u6761\u4ef6\u53d8\u91cf\uff1a\u961f\u5217\u4e0d\u6ee1\n  final Condition notFull = lock.newCondition();\n  // \u6761\u4ef6\u53d8\u91cf\uff1a\u961f\u5217\u4e0d\u7a7a\n  final Condition notEmpty = lock.newCondition();\n\n  // \u5165\u961f\n  void enq(T x) {\n    lock.lock();\n    try {\n      while (\u961f\u5217\u5df2\u6ee1) {\n        // \u7b49\u5f85\u961f\u5217\u4e0d\u6ee1\n        notFull.await();\n      }\n      // \u7701\u7565\u5165\u961f\u64cd\u4f5c...\n      //\u5165\u961f\u540e,\u901a\u77e5\u53ef\u51fa\u961f\n      notEmpty.signal();\n    } finally {\n      lock.unlock();\n    }\n  }\n\n  // \u51fa\u961f\n  void deq() {\n    lock.lock();\n    try {\n      while (\u961f\u5217\u5df2\u7a7a) {\n        // \u7b49\u5f85\u961f\u5217\u4e0d\u7a7a\n        notEmpty.await();\n      }\n      // \u7701\u7565\u51fa\u961f\u64cd\u4f5c...\n      //\u51fa\u961f\u540e\uff0c\u901a\u77e5\u53ef\u5165\u961f\n      notFull.signal();\n    } finally {\n      lock.unlock();\n    }\n  }\n}\n"))))}d.isMDXComponent=!0},68849:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/synchronized-6c735f723485c43a25874b91bbe3fadf.png"}}]);