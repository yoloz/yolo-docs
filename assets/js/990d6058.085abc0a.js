"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[4088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a=void 0,l={unversionedId:"linux/\u538b\u7f29\u6587\u4ef6\u5206\u5272",id:"linux/\u538b\u7f29\u6587\u4ef6\u5206\u5272",title:"\u538b\u7f29\u6587\u4ef6\u5206\u5272",description:"\u6587\u4ef6\u538b\u7f29",source:"@site/docs/linux/\u538b\u7f29\u6587\u4ef6\u5206\u5272.md",sourceDirName:"linux",slug:"/linux/\u538b\u7f29\u6587\u4ef6\u5206\u5272",permalink:"/docs/linux/\u538b\u7f29\u6587\u4ef6\u5206\u5272",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/linux/\u538b\u7f29\u6587\u4ef6\u5206\u5272.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ssh\u514d\u5bc6\u767b\u5f55",permalink:"/docs/linux/ssh\u514d\u5bc6\u767b\u5f55"},next:{title:"\u670d\u52a1\u81ea\u542f\u52a8",permalink:"/docs/linux/\u670d\u52a1\u81ea\u542f\u52a8"}},p={},c=[{value:"\u6587\u4ef6\u538b\u7f29",id:"\u6587\u4ef6\u538b\u7f29",level:2},{value:"\u6587\u4ef6\u5206\u5272",id:"\u6587\u4ef6\u5206\u5272",level:2},{value:"\u6587\u4ef6\u5408\u5e76",id:"\u6587\u4ef6\u5408\u5e76",level:2},{value:"\u6587\u4ef6\u89e3\u538b",id:"\u6587\u4ef6\u89e3\u538b",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6587\u4ef6\u538b\u7f29"},"\u6587\u4ef6\u538b\u7f29"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tar -zcvf test.tar.gz test/")),(0,o.kt)("admonition",{title:"\u53c2\u6570\u542b\u4e49",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"-z\uff1a\u662f\u5426\u540c\u65f6\u5177\u6709 gzip \u5c5e\u6027\uff0c\u662f\u5426\u9700\u8981 gzip \u538b\u7f29\uff1b\n-c\uff1a\u5efa\u7acb\u4e00\u4e2a\u538b\u7f29\u6587\u4ef6\u6307\u4ee4\uff1b\n-v\uff1a\u538b\u7f29\u8fc7\u7a0b\u4e2d\u662f\u5426\u663e\u793a\u6587\u4ef6\uff1b\n-f \uff1a\u4f7f\u7528\u6863\u540d\uff1b")),(0,o.kt)("h2",{id:"\u6587\u4ef6\u5206\u5272"},"\u6587\u4ef6\u5206\u5272"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"split -b 40M -d -a 2 test.tar.gz test.tar.gz.")),(0,o.kt)("admonition",{title:"\u53c2\u6570\u542b\u4e49",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"-b\uff1a\u6307\u5b9a\u6bcf\u4e2a\u6587\u4ef6\u7684\u5927\u5c0f\uff0c\u5355\u4f4d\u53ef\u4ee5\u4e3a B\u3001K\u3001M \uff1b\n-d\uff1a\u4f7f\u7528\u6570\u5b57\u800c\u4e0d\u662f\u5b57\u6bcd\u4f5c\u4e3a\u540e\u7f00\u540d \uff1b\n-a\uff1a\u540e\u7f00\u540d\u957f\u5ea6\uff0c\u9ed8\u8ba4\u4e3a 2\uff1b")),(0,o.kt)("h2",{id:"\u6587\u4ef6\u5408\u5e76"},"\u6587\u4ef6\u5408\u5e76"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cat test.tar.gz.* > test_new.tar.gz")),(0,o.kt)("h2",{id:"\u6587\u4ef6\u89e3\u538b"},"\u6587\u4ef6\u89e3\u538b"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tar -zxvf test_new.tar.gz -C ./Directory/")),(0,o.kt)("admonition",{title:"\u53c2\u6570\u8bf4\u660e",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"-z\uff1a\u662f\u5426\u540c\u65f6\u5177\u6709 gzip \u5c5e\u6027\uff0c\u662f\u5426\u9700\u8981 gzip \u538b\u7f29\uff1b\n-x\uff1a\u89e3\u538b\u7f29\u6307\u4ee4\uff1b\n-v\uff1a\u538b\u7f29\u8fc7\u7a0b\u4e2d\u662f\u5426\u663e\u793a\u6587\u4ef6\uff1b\n-f \uff1a\u4f7f\u7528\u6863\u540d\uff1b")))}s.isMDXComponent=!0}}]);