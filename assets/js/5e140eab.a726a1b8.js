"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[8552],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=l,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4422:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(7462),l=(t(7294),t(3905));const r={},i=void 0,s={unversionedId:"script/shell\u4f18\u5316\u5efa\u8bae",id:"script/shell\u4f18\u5316\u5efa\u8bae",title:"shell\u4f18\u5316\u5efa\u8bae",description:"\u5f00\u5934\u6709\u201cshebang\u201d",source:"@site/docs/script/shell\u4f18\u5316\u5efa\u8bae.md",sourceDirName:"script",slug:"/script/shell\u4f18\u5316\u5efa\u8bae",permalink:"/docs/script/shell\u4f18\u5316\u5efa\u8bae",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/script/shell\u4f18\u5316\u5efa\u8bae.md",tags:[],version:"current",lastUpdatedAt:1681052426,formattedLastUpdatedAt:"2023\u5e744\u67089\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"shell\u4e2d\u5b57\u7b26\u4e32\u5ffd\u7565\u5927\u5c0f\u5199",permalink:"/docs/script/shell\u4e2d\u5b57\u7b26\u4e32\u5ffd\u7565\u5927\u5c0f\u5199"},next:{title:"shell\u5e38\u7528\u6761\u4ef6\u5224\u65ad",permalink:"/docs/script/shell\u5e38\u7528\u6761\u4ef6\u5224\u65ad"}},o={},p=[{value:"\u5f00\u5934\u6709\u201cshebang\u201d",id:"\u5f00\u5934\u6709shebang",level:2},{value:"\u592a\u957f\u8981\u5206\u884c",id:"\u592a\u957f\u8981\u5206\u884c",level:2},{value:"\u591a\u7528\u53cc\u5f15\u53f7",id:"\u591a\u7528\u53cc\u5f15\u53f7",level:2},{value:"\u811a\u672c\u7ed3\u6784\u5316",id:"\u811a\u672c\u7ed3\u6784\u5316",level:2},{value:"\u4f5c\u7528\u57df",id:"\u4f5c\u7528\u57df",level:2},{value:"\u51fd\u6570\u8fd4\u56de\u503c",id:"\u51fd\u6570\u8fd4\u56de\u503c",level:2},{value:"\u95f4\u63a5\u5f15\u7528",id:"\u95f4\u63a5\u5f15\u7528",level:2},{value:"\u5de7\u7528 heredocs",id:"\u5de7\u7528-heredocs",level:2},{value:"\u5176\u4ed6\u7528\u6cd5\uff1a",id:"\u5176\u4ed6\u7528\u6cd5",level:3},{value:"\u83b7\u53d6\u8def\u5f84",id:"\u83b7\u53d6\u8def\u5f84",level:2},{value:"readlink",id:"readlink",level:3},{value:"\u7b80\u77ed\u4e0e\u6548\u7387",id:"\u7b80\u77ed\u4e0e\u6548\u7387",level:2},{value:"\u5e76\u884c\u5316",id:"\u5e76\u884c\u5316",level:2},{value:"\u5176\u4ed6\u5efa\u8bae",id:"\u5176\u4ed6\u5efa\u8bae",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5f00\u5934\u6709shebang"},"\u5f00\u5934\u6709\u201cshebang\u201d"),(0,l.kt)("p",null,'\u811a\u672c\u7b2c\u4e00\u884c\u4ee5"#!"\u5f00\u5934\u7684\u6ce8\u91ca\uff0c\u6807\u660e\u5728\u6ca1\u6709\u6307\u5b9a\u89e3\u91ca\u5668\u7684\u65f6\u5019\u9ed8\u8ba4\u7684\u89e3\u91ca\u5668\uff0c\u4e00\u822c\u5982 ',(0,l.kt)("inlineCode",{parentName:"p"},"#!/bin/bash")," , \u89e3\u91ca\u5668\u6709\u5f88\u591a\uff0c\u9664 bash \u4e4b\u5916\u53ef\u4ee5\u7528\u547d\u4ee4\u67e5\u770b\u672c\u673a\u652f\u6301\u7684\u89e3\u91ca\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat /etc/shells\n# /etc/shells: valid login shells\n/bin/sh\n/bin/dash\n/bin/bash\n/bin/rbash\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5f53\u6211\u4eec\u76f4\u63a5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"./xxx.sh"),"\u6267\u884c\u811a\u672c\u7684\u65f6\u5019\uff0c\u5982\u679c\u6ca1\u6709 shebang, \u5219\u9ed8\u8ba4\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"$SHELL"),"\u6307\u5b9a\u7684\u89e3\u91ca\u5668\uff0c\u5426\u5219\u7528 shebang \u6307\u5b9a\u7684\u89e3\u91ca\u5668\u3002\u7136\u800c\u4e0a\u9762\u7684\u5199\u6cd5\u53ef\u80fd\u6709\u4e9b\u73af\u5883\u4e0d\u517c\u5bb9\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u65b9\u5f0f\u6765\u6307\u5b9a shebang",(0,l.kt)("inlineCode",{parentName:"p"},"#!/usr/bin/env bash"))),(0,l.kt)("h2",{id:"\u592a\u957f\u8981\u5206\u884c"},"\u592a\u957f\u8981\u5206\u884c"),(0,l.kt)("p",null,"\u5728\u8c03\u7528\u67d0\u4e9b\u7a0b\u5e8f\u7684\u65f6\u5019\uff0c\u53c2\u6570\u53ef\u80fd\u4f1a\u5f88\u957f\uff0c\u8fd9\u65f6\u5019\u4e3a\u4e86\u8f83\u597d\u7684\u9605\u8bfb\u4f53\u9a8c\uff0c\u53ef\u4ee5\u7528\u53cd\u659c\u6760\u6765\u5206\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./configure \\\n-prefix=/usr \\\n-sbin-path=/usr/sbin/nginx \\\n-conf-path=/etc/nginx/nginx.conf \\\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\u5728\u53cd\u659c\u6760\u524d\u6709\u4e2a\u7a7a\u683c")),(0,l.kt)("h2",{id:"\u591a\u7528\u53cc\u5f15\u53f7"},"\u591a\u7528\u53cc\u5f15\u53f7"),(0,l.kt)("p",null,"\u63a8\u8350\u5728\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"$"),"\u6765\u83b7\u53d6\u53d8\u91cf\u7684\u65f6\u5019\u52a0\u4e0a\u53cc\u5f15\u53f7\uff0c\u5426\u5219\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\u4f1a\u51fa\u73b0\u9ebb\u70e6\uff0c\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\n#\u5f53\u524d\u6587\u4ef6\u4e0b\u6709a.sh\u6587\u4ef6\nvar="*.sh"\necho $var\necho "$var"\n\n#\u8fd0\u884c\u7ed3\u679c\n#a.sh\n#*.sh\n')),(0,l.kt)("h2",{id:"\u811a\u672c\u7ed3\u6784\u5316"},"\u811a\u672c\u7ed3\u6784\u5316"),(0,l.kt)("p",null,"\u5177\u4f53\u529f\u80fd\u4f7f\u7528\u51fd\u6570\u5b9a\u4e49\uff0c\u7136\u540e\u5165\u53e3\u8c03\u7528\uff0c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\n\nfunc1(){\n    #do sth\n}\nfunc2(){\n    #do sth\n}\nmain(){\n    func1\n    func2\n}\nmain "$@"\n')),(0,l.kt)("h2",{id:"\u4f5c\u7528\u57df"},"\u4f5c\u7528\u57df"),(0,l.kt)("p",null,"shell \u4e2d\u9ed8\u8ba4\u7684\u53d8\u91cf\u4f5c\u7528\u57df\u662f\u5168\u5c40\u7684\uff0c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\nvar=1\nfunc(){\n  var=2\n}\nfunc\necho "$var"\n#\u8f93\u51fa\u7ed3\u679c\u662f2\u4e0d\u662f1\n\nfunction Hello(){\n#local\u4e00\u822c\u7528\u4e8e\u5c40\u90e8\u53d8\u91cf\u58f0\u660e\uff0c\u591a\u5728\u5728\u51fd\u6570\u5185\u90e8\u4f7f\u7528\nlocal text="Hello World!!!"\necho $text\n}\n\n#readonly\u547d\u4ee4\u7528\u4e8e\u5b9a\u4e49\u53ea\u8bfbshell\u53d8\u91cf\u548cshell\u51fd\u6570\n\n')),(0,l.kt)("h2",{id:"\u51fd\u6570\u8fd4\u56de\u503c"},"\u51fd\u6570\u8fd4\u56de\u503c"),(0,l.kt)("p",null,"shell \u4e2d\u51fd\u6570\u7684\u8fd4\u56de\u503c\u53ea\u80fd\u662f\u6574\u6570\uff0c\u53ef\u4ee5\u901a\u8fc7 echo \u6216\u8005 print \u4e4b\u7c7b\u7684\u4f20\u9012\u5b57\u7b26\u4e32\uff0c\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'func1(){\n  echo "2333"\n}\nres=$(func1)\necho "This is from $res."\n')),(0,l.kt)("h2",{id:"\u95f4\u63a5\u5f15\u7528"},"\u95f4\u63a5\u5f15\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\nvar1="1234"\nvar2="var1"\n')),(0,l.kt)("p",null,"\u73b0\u5728\u9700\u8981\u901a\u8fc7 var2 \u6765\u83b7\u53d6 var1 \u7684\u503c\uff0c\u53ef\u4ee5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 eval \u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"li"},"eval echo \\$var2")," \uff0c\u4e0d\u63a8\u8350\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u540d\u524d\u52a0\u4e00\u4e2a! ",(0,l.kt)("inlineCode",{parentName:"li"},"echo ${!var2}"))),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u8fd9\u79cd\u53ea\u80fd\u505a\u5230\u53d6\u503c\uff0c\u5982\u679c\u8981\u8d4b\u503c\u8fd8\u662f\u7528 eval \u6765\u5904\u7406"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'var1=var2\neval $var1="1234"\necho "$var2"\n')),(0,l.kt)("h2",{id:"\u5de7\u7528-heredocs"},"\u5de7\u7528 heredocs"),(0,l.kt)("p",null,'\u4e00\u79cd\u591a\u884c\u8f93\u5165\u65b9\u6cd5\uff0c\u5728"<<"\u540e\u5b9a\u4e00\u4e2a\u6807\u8bc6\u7b26\uff0c\u63a5\u7740\u6211\u4eec\u53ef\u4ee5\u8f93\u5165\u591a\u884c\u5185\u5bb9\uff0c\u76f4\u5230\u518d\u6b21\u9047\u5230\u6807\u8bc6\u7b26\u4e3a\u6b62\u3002\u5b9a\u4e49\u5f62\u5f0f\u4e3a'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u547d\u4ee4 << HERE\n...\nHERE\n")),(0,l.kt)("p",null,"\u4f7f\u7528 heredocs\uff0c\u53ef\u4ee5\u8f83\u65b9\u4fbf\u7684\u751f\u6210\u4e00\u4e9b\u6a21\u677f\u6587\u4ef6\uff0c\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat >> /etc/rsyncd.conf << EOF\nlog file = /usr/local/logs/rsyncd.log\nlog format = %t %m %f %b\nEOF\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"HERE \u53ea\u662f\u4e00\u4e2a\u6807\u8bc6\uff0c\u53ef\u4ee5\u6362\u6210\u4efb\u610f\u5176\u4ed6\u5408\u6cd5\u5b57\u7b26\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u7ed3\u675f\u7684\u6807\u8bc6\u7b26\u4e00\u5b9a\u8981\u9876\u683c\u5199\uff0c\u524d\u9762\u4e0d\u80fd\u6709\u4efb\u4f55\u5b57\u7b26, \u540e\u9762\u4e5f\u4e0d\u80fd\u6709\u4efb\u4f55\u5b57\u7b26\uff0c\u5305\u62ec\u7a7a\u683c;"),(0,l.kt)("li",{parentName:"ul"},"\u8d77\u59cb\u7684\u6807\u8bc6\u7b26\u524d\u540e\u7a7a\u683c\u4f1a\u88ab\u7701\u7565\uff1b"))),(0,l.kt)("h3",{id:"\u5176\u4ed6\u7528\u6cd5"},"\u5176\u4ed6\u7528\u6cd5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u53d8\u91cf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'var1="just test"\nvar2=`cat << H\nline 1\nline 2\n$var1\nH`\necho "$var2"\n#\u8f93\u51fa\n# line 1\n# line 2\n# just test\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e00\u6bb5\u6279\u6ce8\uff0c(\u5355\u884c\u6279\u6ce8#\u6ce8\u91ca)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},":<<HERE\n\u6279\u6ce8\u4e00\n\u6279\u6ce8\u4e8c\n...\nHERE\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},": \u4ee3\u8868\u4ec0\u4e48\u90fd\u4e0d\u505a")),(0,l.kt)("h2",{id:"\u83b7\u53d6\u8def\u5f84"},"\u83b7\u53d6\u8def\u5f84"),(0,l.kt)("p",null,"\u5f88\u591a\u60c5\u51b5\u4e0b\u9700\u8981\u83b7\u53d6\u811a\u672c\u7684\u8def\u5f84\uff0c\u7136\u540e\u4ee5\u6b64\u8def\u5f84\u4e3a\u57fa\u51c6\u53bb\u627e\u5176\u4ed6\u7684\u8def\u5f84\u3002\u76f4\u63a5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"pwd")," \u83b7\u53d6\u662f\u4e0d\u4e25\u8c28\u7684\uff0c\u5176\u83b7\u5f97\u662f\u5f53\u524d shell \u7684\u6267\u884c\u8def\u5f84\uff0c\u5e76\u4e0d\u662f\u5f53\u524d\u811a\u672c\u7684\u6267\u884c\u8def\u5f84\u3002\u6b63\u786e\u505a\u6cd5\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"script_dir=$(cd `dirname $0` && pwd)\nscript_dir=$(dirname `readlink -f $0` )\n")),(0,l.kt)("h3",{id:"readlink"},"readlink"),(0,l.kt)("p",null,"readlink print value of a symbolic link or canonical file name(\u8f93\u51fa\u7b26\u53f7\u94fe\u63a5\u503c\u6216\u8005\u6743\u5a01\u6587\u4ef6\u540d)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ readlink /usr/bin/awk\n# /etc/alternatives/awk  #\u8fd9\u4e2a\u8fd8\u662f\u4e00\u4e2a\u7b26\u53f7\u8fde\u63a5\n$ readlink /etc/alternatives/awk\n# /usr/bin/gawk  #\u8fd9\u4e2a\u662f\u771f\u6b63\u7684\u53ef\u6267\u884c\u6587\u4ef6\n########################################\n$ readlink -f /usr/bin/awk\n#/usr/bin/gawk\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"-f \u9012\u5f52\u7b26\u53f7\u94fe\u63a5, \u76f4\u5230\u975e\u7b26\u53f7\u94fe\u63a5\u7684\u6587\u4ef6\u4f4d\u7f6e, \u9650\u5236\u662f\u6700\u540e\u5fc5\u987b\u5b58\u5728\u4e00\u4e2a\u975e\u7b26\u53f7\u94fe\u63a5\u7684\u6587\u4ef6")),(0,l.kt)("h2",{id:"\u7b80\u77ed\u4e0e\u6548\u7387"},"\u7b80\u77ed\u4e0e\u6548\u7387"),(0,l.kt)("p",null,"\u539f\u5219\u4e0a\u80fd\u4e00\u6761\u547d\u4ee4\u89e3\u51b3\u7684\u95ee\u9898\u4e0d\u7528\u591a\u6761\u547d\u4ee4\u89e3\u51b3\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","",(0,l.kt)("inlineCode",{parentName:"p"},"cat /etc/passwd | grep root")," ==> ",(0,l.kt)("inlineCode",{parentName:"p"},"grep root /etc/passwd"),"\n\u7b80\u77ed\u6709\u65f6\u5019\u8fd8\u80fd\u63d0\u5347\u6548\u7387\uff0c\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'find . -name "*.txt" |xargs sed -i s/233/666/g\nfind . -name "*.txt" |xargs sed -i s/235/626/g\nfind . -name "*.txt" |xargs sed -i s/333/616/g\nfind . -name "*.txt" |xargs sed -i s/233/664/g\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'find . -name "*.txt" |xargs sed -i "s/233/666/g;s/235/626/g;s/333/616/g;s/233/664/g"\n')),(0,l.kt)("p",null,"\u8fd9\u4e24\u79cd\u65b9\u6cd5\u505a\u7684\u4e8b\u60c5\u4e00\u6837\uff0c\u67e5\u627e\u6240\u6709\u7684.txt \u540e\u7f00\u7684\u6587\u4ef6\u5e76\u505a\u4e00\u7cfb\u5217\u66ff\u6362\u3002\u524d\u8005\u662f\u591a\u6b21\u6267\u884c find\uff0c\u540e\u8005\u662f\u6267\u884c\u4e00\u6b21 find\uff0c\u4f46\u662f\u589e\u52a0\u4e86 sed \u7684\u6a21\u5f0f\u4e32\u3002\u7b2c\u4e00\u79cd\u66f4\u76f4\u89c2\u4e00\u70b9\uff0c\u4f46\u662f\u5f53\u66ff\u6362\u7684\u91cf\u53d8\u5927\u7684\u65f6\u5019\uff0c\u7b2c\u4e8c\u79cd\u7684\u901f\u5ea6\u5c31\u4f1a\u6bd4\u7b2c\u4e00\u79cd\u5feb\u5f88\u591a\u3002\u8fd9\u91cc\u6548\u7387\u63d0\u5347\u7684\u539f\u56e0\uff0c\u5c31\u662f\u7b2c\u4e8c\u79cd\u53ea\u8981\u6267\u884c\u4e00\u6b21\u547d\u4ee4\uff0c\u800c\u7b2c\u4e00\u79cd\u8981\u6267\u884c\u591a\u6b21\u3002\u5e76\u4e14\uff0c\u5de7\u7528 xargs \u547d\u4ee4\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u5341\u5206\u65b9\u4fbf\u7684\u8fdb\u884c\u5e76\u884c\u5316\u5904\u7406:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"find . -name '*.txt' |xargs -P $(nproc) sed -i \"s/233/666/g;s/235/626/g;s/333/616/g;s/233/664/g\"\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"-P \u6307\u5b9a\u5e76\u884c\u5ea6\uff0c\u8fdb\u4e00\u6b65\u52a0\u5feb\u6267\u884c\u6548\u7387\u3002")),(0,l.kt)("h2",{id:"\u5e76\u884c\u5316"},"\u5e76\u884c\u5316"),(0,l.kt)("p",null,"shell \u4e2d\u6700\u7b80\u5355\u7684\u5e76\u884c\u5316\u662f\u901a\u8fc7\u201d&\u201d\u4ee5\u53ca\u201dwait\u201d\u547d\u4ee4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"func1(){\n    #do sth\n\uff5d\nfor((i=0;i<10;i++))do\n    func1 &\ndone\nwait\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u5f53\u7136\uff0c\u8fd9\u91cc\u5e76\u884c\u7684\u6b21\u6570\u4e0d\u80fd\u592a\u591a\uff0c\u5426\u5219\u673a\u5668\u4f1a\u5361\u6b7b\u3002\u5982\u679c\u56fe\u7701\u4e8b\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"parallel")," \u547d\u4ee4\u6765\u505a\uff0c\u6216\u8005\u662f\u7528\u4e0a\u9762\u63d0\u5230\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"xargs")," \u6765\u5904\u7406\u3002")),(0,l.kt)("h2",{id:"\u5176\u4ed6\u5efa\u8bae"},"\u5176\u4ed6\u5efa\u8bae"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"func(){}"),"\u6765\u5b9a\u4e49\u51fd\u6570\uff0c\u800c\u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"func{}")),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"[[]]"),"\u6765\u4ee3\u66ff",(0,l.kt)("inlineCode",{parentName:"li"},"[]")),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"$()"),"\u5c06\u547d\u4ee4\u7684\u7ed3\u679c\u8d4b\u7ed9\u53d8\u91cf\uff0c\u800c\u4e0d\u662f\u53cd\u5f15\u53f7"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"printf")," \u4ee3\u66ff ",(0,l.kt)("inlineCode",{parentName:"li"},"echo")," \u8fdb\u884c\u56de\u663e")))}u.isMDXComponent=!0}}]);