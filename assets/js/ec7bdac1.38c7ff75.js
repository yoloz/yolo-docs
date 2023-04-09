"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const o={},i=void 0,a={unversionedId:"script/\u6267\u884cshell\u7684\u65b9\u5f0f",id:"script/\u6267\u884cshell\u7684\u65b9\u5f0f",title:"\u6267\u884cshell\u7684\u65b9\u5f0f",description:"sh",source:"@site/docs/script/\u6267\u884cshell\u7684\u65b9\u5f0f.md",sourceDirName:"script",slug:"/script/\u6267\u884cshell\u7684\u65b9\u5f0f",permalink:"/docs/script/\u6267\u884cshell\u7684\u65b9\u5f0f",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/script/\u6267\u884cshell\u7684\u65b9\u5f0f.md",tags:[],version:"current",lastUpdatedAt:1681052426,formattedLastUpdatedAt:"2023\u5e744\u67089\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"shell\u9010\u884c\u8bfb\u53d6\u6587\u4ef6",permalink:"/docs/script/shell\u9010\u884c\u8bfb\u53d6\u6587\u4ef6"},next:{title:"Proxmox(PVE)\u4f7f\u7528",permalink:"/docs/tools/Proxmox(PVE)\u4f7f\u7528"}},s={},p=[{value:"sh",id:"sh",level:2},{value:"source",id:"source",level:2},{value:"exec",id:"exec",level:2},{value:"fork",id:"fork",level:2},{value:"./",id:"",level:2},{value:"./\u548csh\u7684\u4f7f\u7528\u533a\u522b",id:"\u548csh\u7684\u4f7f\u7528\u533a\u522b",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"sh"},"sh"),(0,l.kt)("p",null,"\u200bsh\u662f\u901a\u8fc7\u521b\u5efa\u5b50\u8fdb\u7a0b(subshell)\u53bb\u6267\u884c\u811a\u672c\uff0c\u7236\u8fdb\u7a0b\u65e0\u6cd5\u4f7f\u7528\u5b50\u8fdb\u7a0b\u4e2d\u7684\u53d8\u91cf\uff0c\u800c\u5b50\u8fdb\u7a0b\u5bf9\u73af\u5883\u53d8\u91cf\u7684\u4fee\u6539\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u5230\u7236\u8fdb\u7a0b\u3002\u7236\u8fdb\u7a0b\u4e2d\u7684\u5c40\u90e8\u53d8\u91cf\u5b50\u8fdb\u7a0b\u4e5f\u65e0\u6cd5\u4f7f\u7528\uff0c\u5b50\u8fdb\u7a0b\u4f1a\u7ee7\u627f\u7236\u8fdb\u7a0b\u7684\u73af\u5883\u53d8\u91cf;"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"$ sh script.sh")," \u6267\u884c\u811a\u672c\u65f6\uff0c\u5f53\u524dshell\u662f\u7236\u8fdb\u7a0b\uff0c\u751f\u6210\u4e00\u4e2a\u5b50shell\u8fdb\u7a0b\uff0c\u5728\u5b50shell\u4e2d\u6267\u884c\u811a\u672c\u3002\u811a\u672c\u6267\u884c\u5b8c\u6bd5\uff0c\u9000\u51fa\u5b50shell\uff0c\u56de\u5230\u5f53\u524dshell."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u811a\u672c\u4e0d\u9700\u8981\u6267\u884c\u6743\u9650;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$ ./script.sh")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"li"},"$ sh script.sh")," \u7b49\u6548;"))),(0,l.kt)("h2",{id:"source"},"source"),(0,l.kt)("p",null,"\u4f7f\u7528source\u6216\u8005\u201c.\u201d\u6765\u8c03\u7528\u5916\u90e8\u811a\u672c\uff0c\u4e0d\u4f1a\u4ea7\u751f\u65b0\u7684\u8fdb\u7a0b\uff0c\u7ee7\u627f\u5f53\u524dshell\u73af\u5883\u53d8\u91cf\uff0c\u800c\u4e14\u88ab\u8c03\u7528\u7684\u811a\u672c\u8fd0\u884c\u7ed3\u675f\u540e\uff0c\u5b83\u62e5\u6709\u7684\u73af\u5883\u53d8\u91cf\u548c\u58f0\u660e\u53d8\u91cf\u4f1a\u88ab\u5f53\u524dshell\u4fdd\u7559\uff0c\u7c7b\u4f3c\u5c06\u8c03\u7528\u811a\u672c\u7684\u5185\u5bb9\u590d\u5236\u8fc7\u6765\u76f4\u63a5\u6267\u884c\u3002\u6267\u884c\u5b8c\u6bd5\u540e\u539f\u4e3bshell\u7ee7\u7eed\u8fd0\u884c\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u811a\u672c\u4e0d\u9700\u8981\u6267\u884c\u6743\u9650;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"source")," \u65b9\u5f0f\u4e5f\u53eb\u70b9\u547d\u4ee4\uff0c ",(0,l.kt)("inlineCode",{parentName:"li"},"$ . script.sh")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"li"},"$ source script.sh")," \u7b49\u6548;")),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u5728\u70b9\u547d\u4ee4\u4e2d\uff0c ",(0,l.kt)("inlineCode",{parentName:"strong"},".")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"strong"},"script.sh")," \u4e4b\u95f4\u6709\u4e00\u4e2a\u7a7a\u683c\u3002"))),(0,l.kt)("h2",{id:"exec"},"exec"),(0,l.kt)("p",null,"\u4f7f\u7528exec\u6267\u884c\u811a\u672c\uff0c\u88ab\u6267\u884c\u7684\u811a\u672c\u4f1a\u7ee7\u627f\u5f53\u524dshell\u7684\u73af\u5883\u53d8\u91cf\uff0cexec\u76f8\u5f53\u4e8e\u521b\u5efa\u4e86\u65b0\u8fdb\u7a0b\uff0c\u5b83\u4f1a\u5c06\u4e3b\u8fdb\u7a0b\u7684\u8fdb\u7a0b\u8d44\u6e90\u5360\u7528\uff0c\u4f7f\u7528\u4e3b\u8fdb\u7a0b\u7684pid\uff0c\u800cexec\u8bed\u53e5\u6267\u884c\u5b8c\u4e4b\u540e\uff0c\u540e\u7eed\u7684\u8bed\u53e5\u4e0d\u518d\u6267\u884c; ",(0,l.kt)("inlineCode",{parentName:"p"},"exec command")," \u6216",(0,l.kt)("inlineCode",{parentName:"p"},"./test.sh exec")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u811a\u672c\u9700\u8981\u6267\u884c\u6743\u9650;")),(0,l.kt)("h2",{id:"fork"},"fork"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"./test fork"),"\u6216\u76f4\u63a5",(0,l.kt)("inlineCode",{parentName:"p"},"/directory/script.sh"),"\n\u4f7f\u7528fork\u6267\u884c\u811a\u672c\u7684\u65f6\u5019\u4f1a\u521b\u5efa\u4e00\u4e2a\u5b50\u8fdb\u7a0b\u53bb\u6267\u884c\u8be5\u811a\u672c\uff0c\u5b50\u8fdb\u7a0b\u4f1a\u7ee7\u627f\u7236\u8fdb\u7a0b\u7684\u73af\u5883\u53d8\u91cf\u548c\u58f0\u660e\u53d8\u91cf\u3002\u5f53\u5b50\u8fdb\u7a0b\u6267\u884c\u5b8c\u6bd5\u540e\u4f1a\u8fd4\u56de\u7236\u8fdb\u7a0b\uff0c\u4f46\u662f\u7236\u8fdb\u7a0b\u7684\u73af\u5883\u53d8\u91cf\u4e0d\u4f1a\u56e0\u5b50\u8fdb\u7a0b\u7684\u6539\u53d8\u800c\u6539\u53d8\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u811a\u672c\u9700\u8981\u6267\u884c\u6743\u9650;")),(0,l.kt)("h2",{id:""},"./"),(0,l.kt)("p",null,"\u200b\u521b\u5efa\u4e00\u4e2a\u5b50\u8fdb\u7a0b\u53bb\u6267\u884c\u811a\u672c"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u811a\u672c\u9700\u8981\u6267\u884c\u6743\u9650;")),(0,l.kt)("h2",{id:"\u548csh\u7684\u4f7f\u7528\u533a\u522b"},"./\u548csh\u7684\u4f7f\u7528\u533a\u522b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u201c./\u201d\u6267\u884c\u811a\u672c\uff0c\u5bf9\u5e94\u7684xxx.sh\u811a\u672c\u5fc5\u987b\u8981\u6709\u6267\u884c\u6743\u9650,\u4f7f\u7528\u201csh\u201d \u6267\u884c\u811a\u672c\uff0c\u5bf9\u5e94\u7684xxx.sh\u6ca1\u6709\u6267\u884c\u6743\u9650\uff0c\u4ea6\u53ef\u6267\u884c\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u811a\u672c\u5f00\u5934\u4f7f\u7528#\uff01\u8bbe\u7f6e\u4f7f\u7528\u7684shell\u7c7b\u578b\u65f6\uff0c\u4f7f\u7528\u201c./\u201d\u6267\u884c\u811a\u672c\u65f6\uff0c\u5219\u4f7f\u7528\u201c#\uff01\u201d\u6807\u5fd7\u7684shell\u6267\u884c\u811a\u672c\uff1b\u82e5\u65e0\u4f7f\u7528\u201c#\uff01\u201d\u6807\u8bb0\uff0c\u5219\u4f7f\u7528\u7cfb\u7edf\u8bbe\u7f6e\u7684\u9ed8\u8ba4shell\u6267\u884c\u811a\u672c\uff1b")))}u.isMDXComponent=!0}}]);