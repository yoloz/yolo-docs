"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[8598],{3905:(t,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>m});var n=o(7294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function u(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?u(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function a(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},u=Object.keys(t);for(n=0;n<u.length;n++)o=u[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)o=u[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var l=n.createContext({}),d=function(t){var e=n.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):s(s({},e),t)),o},p=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},i=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,u=t.originalType,l=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),i=d(o),m=r,f=i["".concat(l,".").concat(m)]||i[m]||c[m]||u;return o?n.createElement(f,s(s({ref:e},p),{},{components:o})):n.createElement(f,s({ref:e},p))}));function m(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var u=o.length,s=new Array(u);s[0]=i;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a.mdxType="string"==typeof t?t:r,s[1]=a;for(var d=2;d<u;d++)s[d]=o[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}i.displayName="MDXCreateElement"},1003:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>u,metadata:()=>a,toc:()=>d});var n=o(7462),r=(o(7294),o(3905));const u={},s=void 0,a={unversionedId:"devOps/su\u4e0esudo",id:"devOps/su\u4e0esudo",title:"su\u4e0esudo",description:"su \u548c sudo \u547d\u4ee4\u90fd\u5141\u8bb8\u7528\u6237\u6267\u884c\u975e\u7279\u6743\u7528\u6237\u4e0d\u5141\u8bb8\u505a\u7684\u7cfb\u7edf\u7ba1\u7406\u4efb\u52a1\uff0c\u5373\u53ea\u6709 root \u7528\u6237\u80fd\u6267\u884c\u7684\u547d\u4ee4\u3002",source:"@site/docs/devOps/su\u4e0esudo.md",sourceDirName:"devOps",slug:"/devOps/su\u4e0esudo",permalink:"/docs/devOps/su\u4e0esudo",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/devOps/su\u4e0esudo.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u5e93\u7c7b\u578b",permalink:"/docs/database/\u6570\u636e\u5e93\u7c7b\u578b"},next:{title:"\u4f20\u9012\u53c2\u6570xargs",permalink:"/docs/devOps/\u4f20\u9012\u53c2\u6570xargs"}},l={},d=[{value:"sudo",id:"sudo",level:2},{value:"su",id:"su",level:2},{value:"\u7ed5\u8fc7 root \u88ab\u9501\u5b9a",id:"\u7ed5\u8fc7-root-\u88ab\u9501\u5b9a",level:2},{value:"sudo: xxx: command not found",id:"sudo-xxx-command-not-found",level:2}],p={toc:d};function c(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"su \u548c sudo \u547d\u4ee4\u90fd\u5141\u8bb8\u7528\u6237\u6267\u884c\u975e\u7279\u6743\u7528\u6237\u4e0d\u5141\u8bb8\u505a\u7684\u7cfb\u7edf\u7ba1\u7406\u4efb\u52a1\uff0c\u5373\u53ea\u6709 root \u7528\u6237\u80fd\u6267\u884c\u7684\u547d\u4ee4\u3002"),(0,r.kt)("p",null,"sudo \u548c su \u8fd9\u4e24\u4e2a\u547d\u4ee4\u90fd\u80fd\u591f\u63d0\u6743\u4e3a root \u7528\u6237\uff0c\u4f46\u5b83\u4eec\u5b9e\u73b0\u7684\u65b9\u5f0f\u5927\u4e0d\u76f8\u540c\u3002\u8fd9\u79cd\u5dee\u5f02\u662f\u7531\u4e8e\u5b83\u4eec\u6700\u521d\u6253\u7b97\u7528\u4e8e\u4e0d\u540c\u7684\u60c5\u51b5\u3002"),(0,r.kt)("h2",{id:"sudo"},"sudo"),(0,r.kt)("p",null,"sudo \u547d\u4ee4\u7684\u521d\u8877\u662f\u8ba9 root \u7528\u6237\u80fd\u591f\u8ba9\u51e0\u4e2a\u975e root \u7528\u6237\u8bbf\u95ee\u4ed6\u4eec\u7ecf\u5e38\u9700\u8981\u7684\u4e00\u4e24\u4e2a\u7279\u6743\u547d\u4ee4\u3002sudo \u547d\u4ee4\u5141\u8bb8\u975e root \u7528\u6237\u6682\u65f6\u5730\u83b7\u5f97\u66f4\u9ad8\u6743\u9650\uff0c\u6765\u6267\u884c\u4e00\u4e9b\u7279\u6743\u547d\u4ee4\uff0c\u4f8b\u5982\u6dfb\u52a0\u548c\u5220\u9664\u7528\u6237\u3001\u5220\u9664\u5c5e\u4e8e\u5176\u4ed6\u7528\u6237\u7684\u6587\u4ef6\u3001\u5b89\u88c5\u65b0\u8f6f\u4ef6\u4ee5\u53ca\u7ba1\u7406\u73b0\u4ee3 Linux \u4e3b\u673a\u6240\u9700\u7684\u4efb\u4f55\u547d\u4ee4\u3002"),(0,r.kt)("p",null,"sudo \u547d\u4ee4\u4e0d\u4f1a\u5c06\u7528\u6237\u5e10\u6237\u5207\u6362\u4e3a root \u7528\u6237\uff0c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0csudo \u5141\u8bb8\u7528\u6237\u6267\u884c\u4e00\u4e24\u4e2a\u547d\u4ee4\uff0c\u7136\u540e\u63d0\u6743\u5c31\u4f1a\u8fc7\u671f\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u8fd9\u4e2a\u901a\u5e38\u4e3a 5 \u5206\u949f\u7684\u77ed\u6682\u7684\u63d0\u6743\u65f6\u95f4\u5185\uff0c\u7528\u6237\u53ef\u4ee5\u6267\u884c\u4efb\u4f55\u9700\u8981\u63d0\u6743\u7684\u7ba1\u7406\u547d\u4ee4\u3002\u9700\u8981\u7ee7\u7eed\u4f7f\u7528\u63d0\u6743\u7684\u7528\u6237\u53ef\u4ee5\u8fd0\u884c sudo -v \u547d\u4ee4\u6765\u91cd\u65b0\u9a8c\u8bc1 root \u8bbf\u95ee\u6743\u9650\uff0c\u5e76\u5c06\u63d0\u6743\u65f6\u95f4\u518d\u5ef6\u957f 5 \u5206\u949f\u3002")),(0,r.kt)("p",null,"\u4f7f\u7528 sudo \u547d\u4ee4\u8fd8\u6709\u4e00\u4e9b\u526f\u4f5c\u7528\uff0c\u4f8b\u5982\u751f\u6210\u975e root \u7528\u6237\u4f7f\u7528\u547d\u4ee4\u7684\u65e5\u5fd7\u6761\u76ee\u53ca\u5176 ID\u3002\u8fd9\u4e9b\u65e5\u5fd7\u53ef\u4ee5\u5728\u4e4b\u540e\u4f5c\u4e3a\u51fa\u73b0\u95ee\u9898\u7684\u68c0\u9a8c\u6765\u8ffd\u8d23\u3002"),(0,r.kt)("h2",{id:"su"},"su"),(0,r.kt)("p",null,"su \u547d\u4ee4\u80fd\u591f\u5c06\u975e root \u7528\u6237\u63d0\u6743\u5230 root \u6743\u9650\u3002\u4e8b\u5b9e\u4e0a\uff0c\u80fd\u8ba9\u975e root \u7528\u6237\u6210\u4e3a root \u7528\u6237\u3002\u552f\u4e00\u7684\u8981\u6c42\u662f\u7528\u6237\u77e5\u9053 root \u5bc6\u7801\u3002"),(0,r.kt)("p",null,"su \u547d\u4ee4\u6240\u63d0\u4f9b\u7684\u63d0\u6743\u6ca1\u6709\u65f6\u95f4\u9650\u5236\u3002\u7528\u6237\u53ef\u4ee5\u4f5c\u4e3a root \u6267\u884c\u547d\u4ee4\uff0c\u4e0d\u9700\u8981\u8fdb\u884c\u91cd\u65b0\u9a8c\u8bc1\u662f\u5426\u6709 root \u6743\u9650\u3002\u5b8c\u6210\u4efb\u52a1\u540e\uff0c\u7528\u6237\u53ef\u4ee5\u6267\u884c\u9000\u51fa\u547d\u4ee4 exit\uff0c\u4ece root \u7528\u6237\u6062\u590d\u5230\u81ea\u5df1\u539f\u6765\u7684\u975e root \u5e10\u6237\u3002"),(0,r.kt)("h2",{id:"\u7ed5\u8fc7-root-\u88ab\u9501\u5b9a"},"\u7ed5\u8fc7 root \u88ab\u9501\u5b9a"),(0,r.kt)("p",null,"\u4ee5 ubuntu \u4e3a\u4f8b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ee5 student \u7528\u6237\u8eab\u4efd\u767b\u5f55 Ubuntu\uff0c\u5e76\u6253\u5f00\u7ec8\u7aef\u3002\u67e5\u770b /etc/shadow \u6587\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"student@ubuntu1:~$ cat /etc/shadow\ncat: /etc/shadow: Permission denied\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u4f7f\u7528 su - \u547d\u4ee4\u6765\u6210\u4e3a root \u7528\u6237")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"student@ubuntu1:~$ su -\nPassword: <Enter root password \u2013 but there isn't one>\nsu: Authentication failure\n")),(0,r.kt)("p",null,"\u8ba4\u8bc1\u5931\u8d25\u7684\u539f\u56e0\u662f\u56e0\u4e3a root \u5e10\u6237\u6ca1\u6709\u5bc6\u7801\u3001\u5e76\u4e14\u88ab\u9501\u5b9a\u4e86"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63a5\u4e0b\u6765\uff0c\u4f7f\u7528 sudo \u547d\u4ee4\u67e5\u770b /etc/shadow \u6587\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"student@ubuntu1:~$ sudo cat /etc/shadow\n[sudo] password for student: <enter the student password>\nroot:!:17595:0:99999:7:::\n# ...\nstudent:$6$tUB/y2dt$A5ML1UEdcL4tsGMiq3KOwfMkbtk3WecMroKN/:17597:0:99999:7:::\n# ...\n")),(0,r.kt)("p",null,"\u5404\u4e2a\u5b57\u6bb5\u4ee5\u5192\u53f7\uff08:\uff09\u5206\u9694\uff0c\u7b2c\u4e8c\u4e2a\u5b57\u6bb5\u662f\u5bc6\u7801\u3002\u8bf7\u6ce8\u610f\uff0croot \u7684\u5bc6\u7801\u5b57\u6bb5\u662f\u4e00\u4e2a\u611f\u53f9\u53f7\uff08!\uff09\uff0c\u8fd9\u8868\u660e root \u5e10\u6237\u5df2\u88ab\u9501\u5b9a\uff0c\u4e14\u65e0\u6cd5\u4f7f\u7528\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u73b0\u5728\uff0c\u8981\u5c06 root \u5e10\u6237\u53d8\u6210\u4e00\u4e2a\u5408\u9002\u7684\u7cfb\u7edf\u7ba1\u7406\u5458\uff0c\u4f60\u53ea\u9700\u4e3a root \u5e10\u6237\u8bbe\u7f6e\u5bc6\u7801\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"student@ubuntu1:~$ sudo su -\n[sudo] password for student: <Enter password for student>\nroot@ubuntu1:~# passwd root\nEnter new UNIX password: <Enter new root password>\nRetype new UNIX password: <Re-enter new root password>\npasswd: password updated successfully\nroot@ubuntu1:~#\n\n")),(0,r.kt)("h2",{id:"sudo-xxx-command-not-found"},"sudo: xxx: command not found"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u547d\u4ee4\u786e\u5b9e\u4e0d\u5b58\u5728"),(0,r.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u4e0d\u662f\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0csudo\u4f1a\u53bb\u627e\u4e8c\u8fdb\u5236\u6587\u4ef6\u8fd0\u884c\u3002\u7531\u4e8e\u627e\u4e0d\u5230xxx\u7684\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u6545\u62a5\u9519\u3002 \u7c7b\u4f3c\u7684\u547d\u4ee4\u6709\uff1aulimit,cd")))}c.isMDXComponent=!0}}]);