"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7012],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=i(n),k=c,d=u["".concat(l,".").concat(k)]||u[k]||m[k]||o;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function d(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,p=new Array(o);p[0]=k;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:c,p[1]=a;for(var i=2;i<o;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},44281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var r=n(87462),c=(n(67294),n(3905));const o={},p=void 0,a={unversionedId:"network/tcp\u6700\u5927\u8fde\u63a5\u6570",id:"network/tcp\u6700\u5927\u8fde\u63a5\u6570",title:"tcp\u6700\u5927\u8fde\u63a5\u6570",description:"\u5728 Linux \u5e73\u53f0\u4e0a\uff0c\u65e0\u8bba\u7f16\u5199\u5ba2\u6237\u7aef\u7a0b\u5e8f\u8fd8\u662f\u670d\u52a1\u7aef\u7a0b\u5e8f\uff0c\u5728\u8fdb\u884c\u9ad8\u5e76\u53d1 TCP \u8fde\u63a5\u5904\u7406\u65f6\uff0c\u6700\u9ad8\u7684\u5e76\u53d1\u6570\u91cf\u90fd\u8981\u53d7\u5230\u7cfb\u7edf\u5bf9\u7528\u6237\u5355\u4e00\u8fdb\u7a0b\u540c\u65f6\u53ef\u6253\u5f00\u6587\u4ef6\u6570\u91cf\u7684\u9650\u5236\uff08\u7cfb\u7edf\u4e3a\u6bcf\u4e2a TCP \u8fde\u63a5\u90fd\u8981\u521b\u5efa\u4e00\u4e2a socket \u53e5\u67c4\uff0c\u6bcf\u4e2a socket \u53e5\u67c4\u540c\u65f6\u4e5f\u662f\u4e00\u4e2a\u6587\u4ef6\u53e5\u67c4\uff09. \u53ef\u4f7f\u7528 ulimit -n \u67e5\u770b\u7cfb\u7edf\u5141\u8bb8\u5f53\u524d\u7528\u6237\u5355\u4e2a\u8fdb\u7a0b\u6253\u5f00\u7684\u6587\u4ef6\u6570\u9650\u5236\uff0c\u6392\u9664\u6bcf\u4e2a\u8fdb\u7a0b\u5fc5\u7136\u6253\u5f00\u7684\u6807\u51c6\u8f93\u5165\uff0c\u6807\u51c6\u8f93\u51fa\uff0c\u6807\u51c6\u9519\u8bef\uff0c\u670d\u52a1\u5668\u76d1\u542c socket, \u8fdb\u7a0b\u95f4\u901a\u8baf\u7684 unix \u57df socket \u7b49\u6587\u4ef6\uff0c\u5b9e\u9645\u80fd\u591f\u5e76\u53d1\u7684 TCP \u8fde\u63a5\u6570\u8981\u6bd4\u9650\u5236\u503c\u5c11\u3002",source:"@site/docs/network/tcp\u6700\u5927\u8fde\u63a5\u6570.md",sourceDirName:"network",slug:"/network/tcp\u6700\u5927\u8fde\u63a5\u6570",permalink:"/docs/network/tcp\u6700\u5927\u8fde\u63a5\u6570",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/network/tcp\u6700\u5927\u8fde\u63a5\u6570.md",tags:[],version:"current",lastUpdatedAt:1689650905,formattedLastUpdatedAt:"2023\u5e747\u670818\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tcpdump",permalink:"/docs/network/tcpdump"},next:{title:"tcp\u7f13\u51b2\u533a\u53c2\u6570",permalink:"/docs/network/tcp\u7f13\u51b2\u533a\u53c2\u6570"}},l={},i=[{value:"\u4fee\u6539\u7f51\u7edc\u5185\u6838\u5bf9 TCP \u8fde\u63a5\u7684\u6709\u5173\u9650\u5236",id:"\u4fee\u6539\u7f51\u7edc\u5185\u6838\u5bf9-tcp-\u8fde\u63a5\u7684\u6709\u5173\u9650\u5236",level:2},{value:"\u5185\u6838\u53c2\u6570 sysctl.conf \u7684\u4f18\u5316",id:"\u5185\u6838\u53c2\u6570-sysctlconf-\u7684\u4f18\u5316",level:2}],s={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,c.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u5728 Linux \u5e73\u53f0\u4e0a\uff0c\u65e0\u8bba\u7f16\u5199\u5ba2\u6237\u7aef\u7a0b\u5e8f\u8fd8\u662f\u670d\u52a1\u7aef\u7a0b\u5e8f\uff0c\u5728\u8fdb\u884c\u9ad8\u5e76\u53d1 TCP \u8fde\u63a5\u5904\u7406\u65f6\uff0c\u6700\u9ad8\u7684\u5e76\u53d1\u6570\u91cf\u90fd\u8981\u53d7\u5230\u7cfb\u7edf\u5bf9\u7528\u6237\u5355\u4e00\u8fdb\u7a0b\u540c\u65f6\u53ef\u6253\u5f00\u6587\u4ef6\u6570\u91cf\u7684\u9650\u5236\uff08\u7cfb\u7edf\u4e3a\u6bcf\u4e2a TCP \u8fde\u63a5\u90fd\u8981\u521b\u5efa\u4e00\u4e2a socket \u53e5\u67c4\uff0c\u6bcf\u4e2a socket \u53e5\u67c4\u540c\u65f6\u4e5f\u662f\u4e00\u4e2a\u6587\u4ef6\u53e5\u67c4\uff09. \u53ef\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"ulimit -n")," \u67e5\u770b\u7cfb\u7edf\u5141\u8bb8\u5f53\u524d\u7528\u6237\u5355\u4e2a\u8fdb\u7a0b\u6253\u5f00\u7684\u6587\u4ef6\u6570\u9650\u5236\uff0c\u6392\u9664\u6bcf\u4e2a\u8fdb\u7a0b\u5fc5\u7136\u6253\u5f00\u7684\u6807\u51c6\u8f93\u5165\uff0c\u6807\u51c6\u8f93\u51fa\uff0c\u6807\u51c6\u9519\u8bef\uff0c\u670d\u52a1\u5668\u76d1\u542c socket, \u8fdb\u7a0b\u95f4\u901a\u8baf\u7684 unix \u57df socket \u7b49\u6587\u4ef6\uff0c\u5b9e\u9645\u80fd\u591f\u5e76\u53d1\u7684 TCP \u8fde\u63a5\u6570\u8981\u6bd4\u9650\u5236\u503c\u5c11\u3002"),(0,c.kt)("h2",{id:"\u4fee\u6539\u7f51\u7edc\u5185\u6838\u5bf9-tcp-\u8fde\u63a5\u7684\u6709\u5173\u9650\u5236"},"\u4fee\u6539\u7f51\u7edc\u5185\u6838\u5bf9 TCP \u8fde\u63a5\u7684\u6709\u5173\u9650\u5236"),(0,c.kt)("p",null,"\u5728 Linux \u4e0a\u7f16\u5199\u652f\u6301\u9ad8\u5e76\u53d1 TCP \u8fde\u63a5\u7684\u5ba2\u6237\u7aef\u901a\u8baf\u5904\u7406\u7a0b\u5e8f\u65f6\uff0c\u6709\u65f6\u4f1a\u53d1\u73b0\u5c3d\u7ba1\u5df2\u7ecf\u89e3\u9664\u4e86\u7cfb\u7edf\u5bf9\u7528\u6237\u540c\u65f6\u6253\u5f00\u6587\u4ef6\u6570\u7684\u9650\u5236\uff0c\u4f46\u4ecd\u4f1a\u51fa\u73b0\u5e76\u53d1 TCP \u8fde\u63a5\u6570\u589e\u52a0\u5230\u4e00\u5b9a\u6570\u91cf\u65f6\uff0c\u518d\u4e5f\u65e0\u6cd5\u6210\u529f\u5efa\u7acb\u65b0\u7684 TCP \u8fde\u63a5\u7684\u73b0\u8c61, \u51fa\u73b0\u8fd9\u79cd\u73b0\u5728\u7684\u539f\u56e0\u6709\u591a\u79cd:"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u53ef\u80fd\u662f\u56e0\u4e3a Linux \u7f51\u7edc\u5185\u6838\u5bf9\u672c\u5730\u7aef\u53e3\u53f7\u8303\u56f4\u6709\u9650\u5236"),', \u8fdb\u4e00\u6b65\u5206\u6790\u4e3a\u4ec0\u4e48\u65e0\u6cd5\u5efa\u7acb TCP \u8fde\u63a5\uff0c\u4f1a\u53d1\u73b0\u95ee\u9898\u51fa\u5728 connect()\u8c03\u7528\u8fd4\u56de\u5931\u8d25\uff0c\u67e5\u770b\u7cfb\u7edf\u9519\u8bef\u63d0\u793a\u6d88\u606f\u662f"Can\'t assign requested address", \u540c\u65f6\u7528 tcpdump \u5de5\u5177\u76d1\u89c6\u7f51\u7edc\u4f1a\u53d1\u73b0\u6839\u672c\u6ca1\u6709 TCP \u8fde\u63a5\u65f6\u5ba2\u6237\u7aef\u53d1 SYN \u5305\u7684\u7f51\u7edc\u6d41\u91cf, \u8fd9\u4e9b\u60c5\u51b5\u8bf4\u660e\u95ee\u9898\u5728\u4e8e\u672c\u5730 Linux \u7cfb\u7edf\u5185\u6838\u4e2d\u6709\u9650\u5236\u3002'),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},'\u6839\u672c\u539f\u56e0\u5728\u4e8e Linux \u5185\u6838\u7684 TCP/IP \u534f\u8bae\u5b9e\u73b0\u6a21\u5757\u5bf9\u7cfb\u7edf\u4e2d\u6240\u6709\u7684\u5ba2\u6237\u7aef TCP \u8fde\u63a5\u5bf9\u5e94\u7684\u672c\u5730\u7aef\u53e3\u53f7\u7684\u8303\u56f4\u8fdb\u884c\u4e86\u9650\u5236\uff08\u5982\u5185\u6838\u9650\u5236\u672c\u5730\u7aef\u53e3\u53f7\u7684\u8303\u56f4\u4e3a 1024~32768 \u4e4b\u95f4\uff09\u3002\u5f53\u7cfb\u7edf\u4e2d\u67d0\u4e00\u65f6\u523b\u540c\u65f6\u5b58\u5728\u592a\u591a\u7684 TCP \u5ba2\u6237\u7aef\u8fde\u63a5\u65f6\uff0c\u7531\u4e8e\u6bcf\u4e2a TCP \u5ba2\u6237\u7aef\u8fde\u63a5\u90fd\u8981\u5360\u7528\u4e00\u4e2a\u552f\u4e00\u7684\u672c\u5730\u7aef\u53e3\u53f7\uff08\u6b64\u7aef\u53e3\u53f7\u5728\u7cfb\u7edf\u7684\u672c\u5730\u7aef\u53e3\u53f7\u8303\u56f4\u9650\u5236\u4e2d\uff09\uff0c\u5982\u679c\u73b0\u6709\u7684 TCP \u5ba2\u6237\u7aef\u8fde\u63a5\u5df2\u5c06\u6240\u6709\u7684\u672c\u5730\u7aef\u53e3\u53f7\u5360\u6ee1\uff0c\u5219\u6b64\u65f6\u5c31\u65e0\u6cd5\u4e3a\u65b0\u7684 TCP \u5ba2\u6237\u7aef\u8fde\u63a5\u5206\u914d\u4e00\u4e2a\u672c\u5730\u7aef\u53e3\u53f7\u4e86\uff0c\u56e0\u6b64\u7cfb\u7edf\u4f1a\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u5728 connect()\u8c03\u7528\u4e2d\u8fd4\u56de\u5931\u8d25\uff0c\u5e76\u5c06\u9519\u8bef\u63d0\u793a\u6d88\u606f\u8bbe\u4e3a"Can\'t assign requested address".')),(0,c.kt)("p",null,"\u589e\u5927\u672c\u5730\u7aef\u53e3\u8303\u56f4\u9650\u5236:",(0,c.kt)("br",{parentName:"p"}),"\n","1, \u4fee\u6539/etc/sysctl.conf \u6587\u4ef6\uff0c\u5728\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u884c\uff1a ",(0,c.kt)("inlineCode",{parentName:"p"},"net.ipv4.ip_local_port_range = 1024 65000")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u5c06\u7cfb\u7edf\u5bf9\u672c\u5730\u7aef\u53e3\u8303\u56f4\u9650\u5236\u8bbe\u7f6e\u4e3a 1024~65000 \u4e4b\u95f4\u3002\u6ce8\u610f: \u672c\u5730\u7aef\u53e3\u8303\u56f4\u7684\u6700\u5c0f\u503c\u5fc5\u987b\u5927\u4e8e\u6216\u7b49\u4e8e 1024, \u6700\u5927\u503c\u5219\u5e94\u5c0f\u4e8e\u6216\u7b49\u4e8e 65535")),(0,c.kt)("p",null,"2, \u6267\u884c ",(0,c.kt)("inlineCode",{parentName:"p"},"sysctl -p")," \uff0c\u5982\u679c\u7cfb\u7edf\u6ca1\u6709\u9519\u8bef\u63d0\u793a\uff0c\u5c31\u8868\u660e\u65b0\u7684\u672c\u5730\u7aef\u53e3\u8303\u56f4\u8bbe\u7f6e\u6210\u529f\u3002\u5982\u679c\u6309\u4e0a\u8ff0\u7aef\u53e3\u8303\u56f4\u8fdb\u884c\u8bbe\u7f6e\uff0c\u5219\u7406\u8bba\u4e0a\u5355\u72ec\u4e00\u4e2a\u8fdb\u7a0b\u6700\u591a\u53ef\u4ee5\u540c\u65f6\u5efa\u7acb 60000 \u591a\u4e2a TCP \u5ba2\u6237\u7aef\u8fde\u63a5"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u53ef\u80fd\u662f\u56e0\u4e3a Linux \u7f51\u7edc\u5185\u6838\u7684\u9632\u706b\u5899\u5bf9\u6700\u5927\u8ddf\u8e2a\u7684 TCP \u8fde\u63a5\u6570\u6709\u9650\u5236"),"\uff0c\u6b64\u65f6\u7a0b\u5e8f\u4f1a\u8868\u73b0\u4e3a\u5728 connect()\u8c03\u7528\u4e2d\u963b\u585e\uff0c\u5982\u540c\u6b7b\u673a\uff0c\u5982\u679c\u7528 tcpdump \u5de5\u5177\u76d1\u89c6\u7f51\u7edc\uff0c\u4e5f\u4f1a\u53d1\u73b0\u6839\u672c\u6ca1\u6709 TCP \u8fde\u63a5\u65f6\u5ba2\u6237\u7aef\u53d1 SYN \u5305\u7684\u7f51\u7edc\u6d41\u91cf\u3002"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u9632\u706b\u5899\u5728\u5185\u6838\u4e2d\u4f1a\u5bf9\u6bcf\u4e2a TCP \u8fde\u63a5\u7684\u72b6\u6001\u8fdb\u884c\u8ddf\u8e2a\uff0c\u8ddf\u8e2a\u4fe1\u606f\u5c06\u4f1a\u653e\u5728\u4f4d\u4e8e\u5185\u6838\u5185\u5b58\u4e2d\u7684 conntrackdatabase \u4e2d\uff0c\u8fd9\u4e2a\u6570\u636e\u5e93\u7684\u5927\u5c0f\u6709\u9650\uff0c\u5f53\u7cfb\u7edf\u4e2d\u5b58\u5728\u8fc7\u591a\u7684 TCP \u8fde\u63a5\u65f6\uff0c\u6570\u636e\u5e93\u5bb9\u91cf\u4e0d\u8db3\uff0cIP_TABLE \u65e0\u6cd5\u4e3a\u65b0\u7684 TCP \u8fde\u63a5\u5efa\u7acb\u8ddf\u8e2a\u4fe1\u606f\uff0c\u4e8e\u662f\u8868\u73b0\u4e3a\u5728 connect()\u8c03\u7528\u4e2d\u963b\u585e.")),(0,c.kt)("p",null,"\u589e\u5927\u5185\u6838\u5bf9\u6700\u5927\u8ddf\u8e2a\u7684 TCP \u8fde\u63a5\u6570\u7684\u9650\u5236:\n1, \u4fee\u6539/etc/sysctl.conf \u6587\u4ef6\uff0c\u5728\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u884c\uff1a ",(0,c.kt)("inlineCode",{parentName:"p"},"net.ipv4.ip_conntrack_max = 10240")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u5c06\u7cfb\u7edf\u5bf9\u6700\u5927\u8ddf\u8e2a\u7684 TCP \u8fde\u63a5\u6570\u9650\u5236\u8bbe\u7f6e\u4e3a 10240. \u6ce8\u610f: \u6b64\u9650\u5236\u503c\u8981\u5c3d\u91cf\u5c0f\uff0c\u4ee5\u8282\u7701\u5bf9\u5185\u6838\u5185\u5b58\u7684\u5360\u7528")),(0,c.kt)("p",null,"2, \u6267\u884c ",(0,c.kt)("inlineCode",{parentName:"p"},"sysctl -p")," \uff0c\u5982\u679c\u7cfb\u7edf\u6ca1\u6709\u9519\u8bef\u63d0\u793a\uff0c\u5c31\u8868\u660e\u7cfb\u7edf\u5bf9\u65b0\u7684\u6700\u5927\u8ddf\u8e2a\u7684 TCP \u8fde\u63a5\u6570\u9650\u5236\u4fee\u6539\u6210\u529f\u3002\u5982\u679c\u6309\u4e0a\u8ff0\u53c2\u6570\u8fdb\u884c\u8bbe\u7f6e\uff0c\u5219\u7406\u8bba\u4e0a\u5355\u72ec\u4e00\u4e2a\u8fdb\u7a0b\u6700\u591a\u53ef\u4ee5\u540c\u65f6\u5efa\u7acb 10000 \u591a\u4e2a TCP \u5ba2\u6237\u7aef\u8fde\u63a5"),(0,c.kt)("h2",{id:"\u5185\u6838\u53c2\u6570-sysctlconf-\u7684\u4f18\u5316"},"\u5185\u6838\u53c2\u6570 sysctl.conf \u7684\u4f18\u5316"),(0,c.kt)("p",null,"/etc/sysctl.conf \u662f\u7528\u6765\u63a7\u5236 linux \u7f51\u7edc\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5bf9\u4e8e\u4f9d\u8d56\u7f51\u7edc\u7684\u7a0b\u5e8f\uff08\u5982 web \u670d\u52a1\u5668\u548c cache \u670d\u52a1\u5668\uff09\u975e\u5e38\u91cd\u8981\uff0c\u63a8\u8350\u914d\u7f6e\u5982\u4e0b:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'#cp /etc/sysctl.conf /etc/sysctl.conf.bak\n#echo ""> /etc/sysctl.conf\n#vim /etc/sysctl.conf\nnet.ipv4.ip_local_port_range = 1024 65535\nnet.core.rmem_max = 16777216\nnet.core.wmem_max = 16777216\nnet.ipv4.tcp_rmem = 4096 87380 16777216\nnet.ipv4.tcp_wmem = 4096 65536 16777216\nnet.ipv4.tcp_fin_timeout = 10\nnet.ipv4.tcp_tw_recycle = 1\nnet.ipv4.tcp_timestamps = 0\nnet.ipv4.tcp_window_scaling = 0\nnet.ipv4.tcp_sack = 0\nnet.core.netdev_max_backlog = 30000\nnet.ipv4.tcp_no_metrics_save = 1\nnet.core.somaxconn = 10240\nnet.ipv4.tcp_syncookies = 0\nnet.ipv4.tcp_max_orphans = 262144\nnet.ipv4.tcp_max_syn_backlog = 262144\nnet.ipv4.tcp_synack_retries = 2\nnet.ipv4.tcp_syn_retries = 2\n')),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},'\u8fd9\u4e2a\u914d\u7f6e\u53c2\u8003\u4e8e cache \u670d\u52a1\u5668 varnish \u7684\u63a8\u8350\u914d\u7f6e\u548c SunOne \u670d\u52a1\u5668\u7cfb\u7edf\u4f18\u5316\u7684\u63a8\u8350\u914d\u7f6e\n\u53ef\u80fd"net.ipv4.tcp_fin_timeout = 3"\u7684\u914d\u7f6e\u4f1a\u5bfc\u81f4\u9875\u9762\u7ecf\u5e38\u6253\u4e0d\u5f00\uff0c\u53ef\u4ee5\u8c03\u6574"net.ipv4.tcp_fin_timeout = 10", \u5728 10s \u7684\u60c5\u51b5\u4e0b\u4e00\u822c\u6ca1\u95ee\u9898\u4e86\n\u4fee\u6539\u540e\u6267\u884c ',(0,c.kt)("inlineCode",{parentName:"p"},"sysctl -p")," \u751f\u6548")),(0,c.kt)("p",null,"linux \u7cfb\u7edf\u4f18\u5316\u5b8c\u7f51\u7edc\u5fc5\u987b\u8c03\u9ad8\u7cfb\u7edf\u5141\u8bb8\u6253\u5f00\u7684\u6587\u4ef6\u6570\u624d\u80fd\u652f\u6301\u5927\u7684\u5e76\u53d1\uff0c\u5982\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'echo "ulimit -HSn 65536" >> /etc/rc.local\necho "ulimit -HSn 65536" >> /root/.bash_profile\n')))}m.isMDXComponent=!0}}]);