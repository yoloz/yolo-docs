"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[6470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(g,a(a({ref:t},p),{},{components:n})):o.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={},a=void 0,s={unversionedId:"tools/github\u62d2\u7edd\u8fde\u63a5",id:"tools/github\u62d2\u7edd\u8fde\u63a5",title:"github\u62d2\u7edd\u8fde\u63a5",description:"\u4f7f\u7528 443 \u7aef\u53e3",source:"@site/docs/tools/github\u62d2\u7edd\u8fde\u63a5.md",sourceDirName:"tools",slug:"/tools/github\u62d2\u7edd\u8fde\u63a5",permalink:"/docs/tools/github\u62d2\u7edd\u8fde\u63a5",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/tools/github\u62d2\u7edd\u8fde\u63a5.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Proxmox(PVE)\u4f7f\u7528",permalink:"/docs/tools/Proxmox(PVE)\u4f7f\u7528"},next:{title:"git\u4ed3\u5e93\u64cd\u4f5c",permalink:"/docs/tools/git\u4ed3\u5e93\u64cd\u4f5c"}},c={},l=[{value:"\u4f7f\u7528 443 \u7aef\u53e3",id:"\u4f7f\u7528-443-\u7aef\u53e3",level:2},{value:"\u4f7f\u7528 https \u534f\u8bae",id:"\u4f7f\u7528-https-\u534f\u8bae",level:2},{value:"DNS \u6c61\u67d3",id:"dns-\u6c61\u67d3",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git pull\nssh: connect to host github.com port 22: Connection refused\nfatal: Could not read from remote repository.\n\u200b\nPlease make sure you have the correct access rights\nand the repository exists.\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528-443-\u7aef\u53e3"},"\u4f7f\u7528 443 \u7aef\u53e3"),(0,r.kt)("p",null,"\u5148\u6267\u884c\u547d\u4ee4",(0,r.kt)("inlineCode",{parentName:"p"},"ssh -T -p 443 git@ssh.github.com"),"\u786e\u8ba4 443 \u7aef\u53e3\u662f\u5426\u53ef\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ nano ~/.ssh/config\n\n# \u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff0cconfig\u6587\u4ef6\u4e0d\u5b58\u5728\u624b\u52a8\u521b\u5efa\nHost github.com\n  Hostname ssh.github.com\n  Port 443\n\n# \u6587\u4ef6\u4fdd\u5b58\u540e\uff0c\u6d4b\u8bd5\u548cGitHub\u7684\u7f51\u7edc\u901a\u4fe1\u662f\u5426\u6b63\u5e38\n$ ssh -T git@github.com\nHi xxxxx! You've successfully authenticated, but GitHub does not\nprovide shell access.\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528-https-\u534f\u8bae"},"\u4f7f\u7528 https \u534f\u8bae"),(0,r.kt)("p",null,"\u5728\u672c\u5730 repo \u76ee\u5f55\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"git config --local -e"),",\u7136\u540e\u628a\u91cc\u9762\u7684 url \u914d\u7f6e\u9879\u4ece git \u683c\u5f0f",(0,r.kt)("inlineCode",{parentName:"p"},"url = git@github.com:username/repo.git"),"\n\u4fee\u6539\u4e3a https \u683c\u5f0f",(0,r.kt)("inlineCode",{parentName:"p"},"url = https://github.com/username/repo.git"),"\u3002\u8fd9\u4e2a\u5176\u5b9e\u4fee\u6539\u7684\u662f repo \u6839\u76ee\u5f55\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"./git/config"),"\u6587\u4ef6\u3002"),(0,r.kt)("h2",{id:"dns-\u6c61\u67d3"},"DNS \u6c61\u67d3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ssh -vT git@github.com\nOpenSSH_9.0p1, OpenSSL 1.1.1o  3 May 2022\ndebug1: Reading configuration data /etc/ssh/ssh_config\ndebug1: Connecting to github.com [::1] port 22.\ndebug1: connect to address ::1 port 22: Connection refused\ndebug1: Connecting to github.com [127.0.0.1] port 22.\ndebug1: connect to address 127.0.0.1 port 22: Connection refused\nssh: connect to host github.com port 22: Connection refused\n")),(0,r.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u4fe1\u606f\u53d1\u73b0\u8fde\u63a5",(0,r.kt)("inlineCode",{parentName:"p"},"github.com"),"\u7684\u5730\u5740\u5c45\u7136\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"::1"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"\u3002\u524d\u8005\u662f IPV6 \u7684 localhost \u5730\u5740\uff0c\u540e\u8005\u662f IPV4 \u7684 localhost \u5730\u5740\u3002\u5230\u8fd9\u91cc\u95ee\u9898\u5c31\u5f88\u660e\u786e\u4e86\uff0c\u662f DNS \u89e3\u6790\u51fa\u95ee\u9898\u4e86\uff0c\u5bfc\u81f4",(0,r.kt)("inlineCode",{parentName:"p"},"github.com"),"\u57df\u540d\u88ab\u89e3\u6790\u6210\u4e86 localhost \u7684 ip \u5730\u5740\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Windows \u4e0b\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"ipconfig /flushdns"),"\u6e05\u695a DNS \u7f13\u5b58;"),(0,r.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u4fee\u6539 hosts \u6587\u4ef6\uff0c\u589e\u52a0\u57df\u540d\u6620\u5c04",(0,r.kt)("inlineCode",{parentName:"p"},"140.82.113.4 github.com"),",\u5177\u4f53\u5730\u5740\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://www.ipaddress.com/"},"https://www.ipaddress.com/"),"\u67e5\u8be2\uff1b")))}d.isMDXComponent=!0}}]);