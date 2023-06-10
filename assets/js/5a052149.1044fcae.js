"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[908],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(n),d=l,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:l,a[1]=s;for(var i=2;i<o;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(7462),l=(n(7294),n(3905));const o={},a=void 0,s={unversionedId:"devOps/\u67e5\u770b\u786c\u4ef6lshw",id:"devOps/\u67e5\u770b\u786c\u4ef6lshw",title:"\u67e5\u770b\u786c\u4ef6lshw",description:"lshw \u547d\u4ee4\u4ecb\u7ecd",source:"@site/docs/devOps/\u67e5\u770b\u786c\u4ef6lshw.md",sourceDirName:"devOps",slug:"/devOps/\u67e5\u770b\u786c\u4ef6lshw",permalink:"/docs/devOps/\u67e5\u770b\u786c\u4ef6lshw",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/devOps/\u67e5\u770b\u786c\u4ef6lshw.md",tags:[],version:"current",lastUpdatedAt:1686370023,formattedLastUpdatedAt:"2023\u5e746\u670810\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u67e5\u627e\u547d\u4ee4find",permalink:"/docs/devOps/\u67e5\u627e\u547d\u4ee4find"},next:{title:"\u7edf\u8ba1wc",permalink:"/docs/devOps/\u7edf\u8ba1wc"}},p={},i=[{value:"lshw \u547d\u4ee4\u4ecb\u7ecd",id:"lshw-\u547d\u4ee4\u4ecb\u7ecd",level:2},{value:"\u8bed\u6cd5\u683c\u5f0f",id:"\u8bed\u6cd5\u683c\u5f0f",level:2},{value:"\u53c2\u8003\u5b9e\u4f8b",id:"\u53c2\u8003\u5b9e\u4f8b",level:2}],c={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"lshw-\u547d\u4ee4\u4ecb\u7ecd"},"lshw \u547d\u4ee4\u4ecb\u7ecd"),(0,l.kt)("p",null,"lshw\uff08ls hardware\uff09\u662f\u4e00\u4e2a\u63d0\u53d6\u673a\u5668\u786c\u4ef6\u914d\u7f6e\u8be6\u7ec6\u4fe1\u606f\u7684\u5de5\u5177\uff0c\u5b83\u80fd\u4e3a\u6211\u4eec\u63d0\u4f9b\u5185\u5b58\u914d\u7f6e\u3001\u56fa\u4ef6\u7248\u672c\u3001\u4e3b\u677f\u914d\u7f6e\u4fe1\u606f\u3001cpu \u7248\u672c\u548c\u901f\u5ea6\u3001cache \u4fe1\u606f\u3001\u603b\u7ebf\u901f\u5ea6\u7b49\u3002\u5e76\u4e14\u80fd\u5c06\u7ed3\u679c\u8f93\u51fa\u6210 HTML\u3001XML\u3001json \u7b49\u683c\u5f0f\u3002"),(0,l.kt)("p",null,"lshw \u4e0d\u4ec5\u662f\u4e00\u4e2a\u53ef\u4ee5\u67e5\u770b\u786c\u4ef6\u4fe1\u606f\u7684\u5de5\u5177\uff0c\u5b83\u8fd8\u53ef\u4ee5\u7528\u6765\u505a\u4e00\u4e9b\u786c\u4ef6\u7684 benchmark\uff0c\u7528\u4e8e\u8bc4\u4f30\u8ba1\u7b97\u673a\u786c\u4ef6\u7684\u6027\u80fd\u7279\u5f81\u3002lshw \u5de5\u5177\u5176\u5b9e\u5c31\u662f\u8bfb\u53d6 /proc \u91cc\u9762\u7684\u4e00\u4e9b\u6587\u4ef6\u6765\u663e\u793a\u76f8\u5173\u7684\u4fe1\u606f\uff0c\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-log"},"/proc/cpuinfo  # \u663e\u793aCPU\u4fe1\u606f\n/proc/bus/pci  # \u663e\u793apci\u4fe1\u606f\n/proc/scsi     # \u663e\u793ascsi\u4fe1\u606f\n/proc/net/dev  # \u663e\u793a\u7f51\u7edc\u8bbe\u5907\u4fe1\u606f\n/proc/kcore    # \u4ece\u5185\u5b58\u6620\u50cf\u8bfb\u53d6\u76f8\u5173\u4fe1\u606f\n/proc/ide      # \u663e\u793aIDE\u8bbe\u5907\u4fe1\u606f\n/proc/devices\n/proc/mounts\n/proc/fstab\n")),(0,l.kt)("h2",{id:"\u8bed\u6cd5\u683c\u5f0f"},"\u8bed\u6cd5\u683c\u5f0f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lshw [-format] [-options...]"),"\n",(0,l.kt)("strong",{parentName:"p"},"\u5efa\u8bae\u4ee5 root \u8eab\u4efd\u6267\u884c lshw \u547d\u4ee4\u4ee5\u83b7\u53d6\u5b8c\u6574\u786c\u4ef6\u4fe1\u606f")),(0,l.kt)("p",null,"format\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"-html \u5c06\u7ed3\u679c\u4ee5 HTML \u683c\u5f0f\u6253\u5370"),(0,l.kt)("li",{parentName:"ul"},"-xml \u5c06\u7ed3\u679c\u4ee5 xml \u683c\u5f0f\u6253\u5370"),(0,l.kt)("li",{parentName:"ul"},"-json \u5c06\u7ed3\u679c\u4ee5 json \u683c\u5f0f\u6253\u5370"),(0,l.kt)("li",{parentName:"ul"},"-short \u8f93\u51fa\u786c\u4ef6\u8def\u5f84"),(0,l.kt)("li",{parentName:"ul"},"-businfo \u8f93\u51fa\u603b\u7ebf\u4fe1\u606f\u3002SCSI\u3001USB\u3001IDE\u3001PCI \u5730\u5740\u7b49")),(0,l.kt)("p",null,"options\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"-dump filename")),(0,l.kt)("p",null,"\u5c06\u6536\u96c6\u5230\u7684\u4fe1\u606f\u8f93\u51fa\u5230\u4e00\u4e2a SQLite \u6570\u636e\u5e93\u4e2d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"-class CLASS")),(0,l.kt)("p",null,"\u4ec5\u663e\u793a\u6307\u5b9a\u7c7b\u578b\u7684\u786c\u4ef6\uff0c\u53ef\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"lshw -sort")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"lshw -businfo")," \u67e5\u627e CLASS\u3002\u5e38\u89c1\u7684 CLASS\uff1asystem\u3001bus\u3001memory\u3001processor\u3001bridge\u3001display\u3001network\u3001input\u3001multimedia\u3001communication\u3001generic\u3001storage\u3001disk\u3001volume"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"-C CLASS")),(0,l.kt)("p",null,"\u7b49\u540c\u4e8e\u2019-class CLASS\u2019"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"-c CLASS")),(0,l.kt)("p",null,"\u7b49\u540c\u4e8e\u2018-C CLASS\u2019"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"-enable TEST")),(0,l.kt)("p",null,"\u542f\u7528\u6d4b\u8bd5\uff0c\u6d4b\u8bd5\u9879\u5305\u542b\uff1admi\u3001device-tree\u3001spd\u3001memory\u3001cpuinfo\u3001cpuid\u3001pci\u3001isapnp\u3001pcmcia\u3001ide\u3001usb\u3001scsi\u3001network"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"-disable TEST")),(0,l.kt)("p",null,"\u7981\u7528\u6d4b\u8bd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"-quiet")),(0,l.kt)("p",null,"\u4e0d\u663e\u793a\u72b6\u6001"),(0,l.kt)("h2",{id:"\u53c2\u8003\u5b9e\u4f8b"},"\u53c2\u8003\u5b9e\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#\u5c06\u786c\u4ef6\u914d\u7f6e\u4fe1\u606f\u4ee5html\u683c\u5f0f\u8f93\u51fa\n[root@localhost ~]# lshw -html\n#\u663e\u793a\u786c\u4ef6\u8bbe\u5907\u5217\u8868\uff0c\u8f93\u51fa\u603b\u7ebf\u4fe1\u606f\n[root@localhost ~]# lshw -businfo\n#\u663e\u793a\u5185\u5b58\u76f8\u5173\u7684\u786c\u4ef6\u4fe1\u606f\n[root@localhost ~]# lshw -c memory\n#\u663e\u793a\u7f51\u7edc\u8bbe\u5907\u4fe1\u606f\n[root@localhost ~]# lshw -c network\n")))}m.isMDXComponent=!0}}]);