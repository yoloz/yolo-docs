"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7345],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(r),b=o,m=c["".concat(u,".").concat(b)]||c[b]||d[b]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9959:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},l=void 0,i={unversionedId:"tools/virtualbox",id:"tools/virtualbox",title:"virtualbox",description:"\u5171\u4eab\u6587\u4ef6\u5939\u6743\u9650\u95ee\u9898",source:"@site/docs/tools/virtualbox.md",sourceDirName:"tools",slug:"/tools/virtualbox",permalink:"/docs/tools/virtualbox",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/tools/virtualbox.md",tags:[],version:"current",lastUpdatedAt:1681052426,formattedLastUpdatedAt:"2023\u5e744\u67089\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"vim\u4f7f\u7528",permalink:"/docs/tools/vim\u4f7f\u7528"},next:{title:"vscode\u4f7f\u7528",permalink:"/docs/tools/vscode\u4f7f\u7528"}},u={},s=[{value:"\u5171\u4eab\u6587\u4ef6\u5939\u6743\u9650\u95ee\u9898",id:"\u5171\u4eab\u6587\u4ef6\u5939\u6743\u9650\u95ee\u9898",level:2},{value:"virtualbox failed to start raise network interfaces",id:"virtualbox-failed-to-start-raise-network-interfaces",level:2},{value:"\u5206\u8fa8\u7387\u8c03\u6574",id:"\u5206\u8fa8\u7387\u8c03\u6574",level:2},{value:"\u6dfb\u52a0 usb \u8bbe\u5907",id:"\u6dfb\u52a0-usb-\u8bbe\u5907",level:2},{value:"\u5b89\u88c5\u589e\u5f3a\u5de5\u5177\u5305",id:"\u5b89\u88c5\u589e\u5f3a\u5de5\u5177\u5305",level:2},{value:"ubuntu virtualbox \u5b89\u88c5\u51fa\u9519",id:"ubuntu-virtualbox-\u5b89\u88c5\u51fa\u9519",level:2},{value:"\u91cd\u65b0\u7f16\u8bd1\u5185\u6838\u63d2\u4ef6",id:"\u91cd\u65b0\u7f16\u8bd1\u5185\u6838\u63d2\u4ef6",level:2}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5171\u4eab\u6587\u4ef6\u5939\u6743\u9650\u95ee\u9898"},"\u5171\u4eab\u6587\u4ef6\u5939\u6743\u9650\u95ee\u9898"),(0,o.kt)("p",null,"\u4f7f\u7528 virtualbox \u6700\u65b9\u4fbf\u7684 host-guest \u4ea4\u6362\u6587\u4ef6\u65b9\u6848\u83ab\u8fc7\u4e8e\u5171\u4eab\u6587\u4ef6\u5939\u529f\u80fd\u4e86\u3002 \u6bd4\u5982 host \u6709\u4e2a\u53eb git \u7684\u6587\u4ef6\u5939\uff0c\u53ef\u4ee5\u76f4\u63a5\u5c06\u6b64\u6587\u4ef6\u5939\u8bbe\u7f6e\u4e3a\u5171\u4eab\u6587\u4ef6\u5939\u5e76\u81ea\u52a8 mount\uff0c\u8fd9\u6837\uff0c\u6bcf\u6b21\u5728\u865a\u62df\u673a\u4e00\u5f00\u673a\u5c31\u770b\u5230\u8fd9\u4e2a\u6587\u4ef6\u5939\u88ab\u6302\u8f7d\u4e3a/media/sf_git\u3002\u4f46\u662f\uff0c\u5728\u7528\u975e root \u7528\u6237\u65b9\u6cd5\u8fd9\u4e2a\u6587\u4ef6\u5939\u65f6\u5374\u4f1a\u9047\u5230\u6743\u9650\u4e0d\u8db3\u95ee\u9898\u3002\u6839\u6e90\u5728\u4e8e\u8fd9\u4e2a\u81ea\u52a8 mount \u7684\u6587\u4ef6\u5939\u7684\u6240\u6709\u8005\u4e3a root\uff0c\u6240\u5c5e\u7684\u7ec4\u662f vboxsf\uff0c\u5e76\u4e14\u53ea\u6709\u8fd9\u4e24\u4e2a\u7528\u6237\u6709\u8bbf\u95ee\u6743\u9650\u3002"),(0,o.kt)("p",null,"\u89e3\u51b3\u65b9\u6cd5\u4e5f\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5c06\u5f53\u671f\u767b\u5f55\u7528\u6237\u52a0\u5165\u5230 vboxsf \u7ec4\u5c31\u884c\u4e86:",(0,o.kt)("inlineCode",{parentName:"p"},"sudo usermod -aG vboxsf $(whoami)")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u8bb0\u5f97\u8981\u91cd\u542f\u4e00\u6b21\u7cfb\u7edf\u7ec4\u8bbe\u7f6e\u624d\u80fd\u751f\u6548\u3002")),(0,o.kt)("h2",{id:"virtualbox-failed-to-start-raise-network-interfaces"},"virtualbox failed to start raise network interfaces"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"ip addr \u67e5\u770b\u7f51\u5361\u540d\u79f0\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u67e5\u770b/etc/network/interface.d \u6587\u4ef6\u91cc\u7684 startup \u6587\u4ef6\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5c06 startup \u6587\u4ef6\u91cc\u7684\u542f\u52a8\u7f51\u5361\u540d\u79f0\u6539\u6210\u7b2c\u4e00\u6b65\u67e5\u51fa\u6765\u7684\uff1b")),(0,o.kt)("h2",{id:"\u5206\u8fa8\u7387\u8c03\u6574"},"\u5206\u8fa8\u7387\u8c03\u6574"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6253\u5f00 Oracle VM VirtualBox \u8f6f\u4ef6\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u4e3b\u673a\u9762\u83dc\u5355\u680f\u7684 File(\u7ba1\u7406)\u4e2d\u7684 preferences(\u5168\u5c40\u8bbe\u7f6e)\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb display(\u663e\u793a)\uff0c\u7c7b\u522b\u9009\u62e9 Hint(\u901a\u77e5)\uff0c\u7136\u540e\u81ea\u5b9a\u4e49\u663e\u793a\u5927\u5c0f\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u4e3b\u673a\u9762\u83dc\u5355\u680f\u7684 View(\u89c6\u56fe)\u4e2d\u7684 Auto-resize Gusest Display(\u81ea\u52a8\u8c03\u6574\u663e\u793a\u5c3a\u5bf8)\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u9f20\u6807\u62d6\u52a8\u865a\u62df\u673a\u5373\u53ef\u8fbe\u5230\u914d\u7f6e\u7684\u5206\u8fa8\u7387\u5927\u5c0f\uff1b")),(0,o.kt)("h2",{id:"\u6dfb\u52a0-usb-\u8bbe\u5907"},"\u6dfb\u52a0 usb \u8bbe\u5907"),(0,o.kt)("p",null,"\u4e00\u822c\u5b89\u88c5\u597d virtualbox \u540e\u4f1a\u751f\u6210\u7ec4 vboxusers\uff0c\u67e5\u770b\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"cat /etc/group |grep vboxusers")),(0,o.kt)("p",null,"\u5982\u679c\u5f53\u524d\u7528\u6237\u6ca1\u6709\u8ffd\u52a0\u5230\u8fd9\u4e2a\u7ec4\u4e2d\uff0cvitualbox \u65e0\u6cd5\u67e5\u770b usb \u8bbe\u5907\u3002\u8ba9 Ubuntu \u4e2d\u7684 Virtualbox \u4f7f\u7528 u \u76d8\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"sudo usermod -G vboxusers -a john"),"\uff0c\u5176\u4e2d john \u662f\u4f60\u8981\u4f7f\u7528 vbox \u7684\u5f53\u524d\u7528\u6237\u540d"),(0,o.kt)("li",{parentName:"ol"},"\u6ce8\u9500\u540e\u91cd\u65b0\u767b\u5165\u8fd9\u4e2a\u7528\u6237"),(0,o.kt)("li",{parentName:"ol"},"\u6253\u5f00 vbox \u70b9\u8bbe\u7f6e\uff0c\u70b9\u5de6\u4fa7\u7684 usb\uff0c\u53f3\u8fb9\u770b\u90a3\u4e2a\u7eff\u8272\u52a0\u53f7\uff0c\u5c31\u80fd\u770b\u5230\u4f60\u7684 usb \u8bbe\u5907\u4e86\uff0c\u6dfb\u52a0\u4e00\u4e0b\u3002")),(0,o.kt)("h2",{id:"\u5b89\u88c5\u589e\u5f3a\u5de5\u5177\u5305"},"\u5b89\u88c5\u589e\u5f3a\u5de5\u5177\u5305"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"menu bar")," \u4e2d\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"p"},"devices"),"\uff0c\u4e0b\u62c9\u83dc\u5355\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"insertguestadditionscdimage"),", virtualbox \u7684\u5b89\u88c5\u5305\u4e2d\u81ea\u5e26 VBoxGuestAdditions.iso\uff0c\u6dfb\u52a0\u5373\u53ef\uff0c\u5982\u679c\u6ca1\u6709\u865a\u62df\u5149\u9a71\uff0c\u5219\u5728\u865a\u62df\u673a\u7684\u7ba1\u7406\u754c\u9762\u7684\u5b58\u50a8\u4e2d\u6dfb\u52a0\u865a\u62df\u5149\u9a71"),(0,o.kt)("h2",{id:"ubuntu-virtualbox-\u5b89\u88c5\u51fa\u9519"},"ubuntu virtualbox \u5b89\u88c5\u51fa\u9519"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"vboxdrv.sh: Stopping VirtualBox services.\nvboxdrv.sh: Building VirtualBox kernel modules.\nThis system is currently not set up to build kernel modules.\nPlease install the gcc make perl packages from your distribution.\n\nThere were problems setting up VirtualBox.  To re-start the set-up process, run /sbin/vboxconfig as root.\n\nwhere: suplibOsInit what: 3 VERR_VM_DRIVER_NOT_INSTALLED - The support driver is not installed. On linux, open returned ENOENT.\n")),(0,o.kt)("p",null,"\u89e3\u51b3\u529e\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get upgrade\nsudo apt-get update\nsudo apt-get install dkms\nsudo apt-get install linux-headers-`uname -r` build-essential\nsudo /sbin/vboxconfig\n")),(0,o.kt)("h2",{id:"\u91cd\u65b0\u7f16\u8bd1\u5185\u6838\u63d2\u4ef6"},"\u91cd\u65b0\u7f16\u8bd1\u5185\u6838\u63d2\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/sbin/rcvboxadd quicksetup <version>  #\u76f4\u63a5\u5177\u4f53\u7248\u672c\n/sbin/rcvboxadd quicksetup all        #\u5df2\u7ecf\u4e0b\u8f7d\u7684\u6240\u6709\u7248\u672c\n")))}d.isMDXComponent=!0}}]);