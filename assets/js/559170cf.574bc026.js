"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7273],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(p,".").concat(d)]||u[d]||k[d]||l;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26747:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const l={},o=void 0,i={unversionedId:"devOps/\u6587\u672c\u5206\u6790awk",id:"devOps/\u6587\u672c\u5206\u6790awk",title:"\u6587\u672c\u5206\u6790awk",description:"awk \u662f\u4e00\u79cd\u7f16\u7a0b\u8bed\u8a00\uff0c\u7528\u4e8e\u5728 linux/unix \u4e0b\u5bf9\u6587\u672c\u548c\u6570\u636e\u8fdb\u884c\u5904\u7406\u3002\u6570\u636e\u53ef\u4ee5\u6765\u81ea\u6807\u51c6\u8f93\u5165\u3001\u4e00\u4e2a\u6216\u591a\u4e2a\u6587\u4ef6\uff0c\u6216\u5176\u5b83\u547d\u4ee4\u7684\u8f93\u51fa\u3002\u5b83\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u548c\u52a8\u6001\u6b63\u5219\u8868\u8fbe\u5f0f\u7b49\u5148\u8fdb\u529f\u80fd\uff0c\u662f linux/unix \u4e0b\u7684\u4e00\u4e2a\u5f3a\u5927\u7f16\u7a0b\u5de5\u5177\u3002\u5b83\u5728\u547d\u4ee4\u884c\u4e2d\u4f7f\u7528\uff0c\u4f46\u66f4\u591a\u662f\u4f5c\u4e3a\u811a\u672c\u6765\u4f7f\u7528\u3002",source:"@site/docs/devOps/\u6587\u672c\u5206\u6790awk.md",sourceDirName:"devOps",slug:"/devOps/\u6587\u672c\u5206\u6790awk",permalink:"/docs/devOps/\u6587\u672c\u5206\u6790awk",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/devOps/\u6587\u672c\u5206\u6790awk.md",tags:[],version:"current",lastUpdatedAt:1689650905,formattedLastUpdatedAt:"2023\u5e747\u670818\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6587\u4ef6\u7cfb\u7edfdu\u548cdf",permalink:"/docs/devOps/\u6587\u4ef6\u7cfb\u7edfdu\u548cdf"},next:{title:"\u6587\u672c\u641c\u7d22grep",permalink:"/docs/devOps/\u6587\u672c\u641c\u7d22grep"}},p={},s=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u9ed8\u8ba4\u5206\u9694\u7b26\u8f93\u51fa",id:"\u9ed8\u8ba4\u5206\u9694\u7b26\u8f93\u51fa",level:3},{value:"\u6307\u5b9a\u5206\u9694\u7b26\u8f93\u51fa",id:"\u6307\u5b9a\u5206\u9694\u7b26\u8f93\u51fa",level:3},{value:"\u5b57\u7b26\u622a\u53d6",id:"\u5b57\u7b26\u622a\u53d6",level:3},{value:"\u8bbe\u7f6e\u53d8\u91cf",id:"\u8bbe\u7f6e\u53d8\u91cf",level:2},{value:"\u8fd0\u7b97\u7b26\u4f7f\u7528",id:"\u8fd0\u7b97\u7b26\u4f7f\u7528",level:2},{value:"\u8fc7\u6ee4\u7b2c\u4e00\u5217\u5927\u4e8e 2 \u7684\u884c",id:"\u8fc7\u6ee4\u7b2c\u4e00\u5217\u5927\u4e8e-2-\u7684\u884c",level:3},{value:"\u8fc7\u6ee4\u7b2c\u4e00\u5217\u7b49\u4e8e 2 \u7684\u884c",id:"\u8fc7\u6ee4\u7b2c\u4e00\u5217\u7b49\u4e8e-2-\u7684\u884c",level:3},{value:"\u8fc7\u6ee4\u7b2c\u4e00\u5217\u5927\u4e8e 2 \u5e76\u4e14\u7b2c\u4e8c\u5217\u7b49\u4e8e&#39;Are&#39;\u7684\u884c",id:"\u8fc7\u6ee4\u7b2c\u4e00\u5217\u5927\u4e8e-2-\u5e76\u4e14\u7b2c\u4e8c\u5217\u7b49\u4e8eare\u7684\u884c",level:3},{value:"\u6b63\u5219\u5b57\u7b26\u4e32\u5339\u914d",id:"\u6b63\u5219\u5b57\u7b26\u4e32\u5339\u914d",level:2},{value:"\u5ffd\u7565\u5927\u5c0f\u5199",id:"\u5ffd\u7565\u5927\u5c0f\u5199",level:2},{value:"\u6a21\u5f0f\u53d6\u53cd",id:"\u6a21\u5f0f\u53d6\u53cd",level:2},{value:"\u8ba1\u7b97\u6587\u4ef6\u5927\u5c0f",id:"\u8ba1\u7b97\u6587\u4ef6\u5927\u5c0f",level:2},{value:"\u4ece\u6587\u4ef6\u4e2d\u627e\u51fa\u957f\u5ea6\u5927\u4e8e 80 \u7684\u884c",id:"\u4ece\u6587\u4ef6\u4e2d\u627e\u51fa\u957f\u5ea6\u5927\u4e8e-80-\u7684\u884c",level:2},{value:"\u8f93\u51fa\u8fdb\u7a0b pid",id:"\u8f93\u51fa\u8fdb\u7a0b-pid",level:2},{value:"\u5927\u5c0f\u5199\u8f6c\u6362",id:"\u5927\u5c0f\u5199\u8f6c\u6362",level:2}],c={toc:s},u="wrapper";function k(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"awk \u662f\u4e00\u79cd\u7f16\u7a0b\u8bed\u8a00\uff0c\u7528\u4e8e\u5728 linux/unix \u4e0b\u5bf9\u6587\u672c\u548c\u6570\u636e\u8fdb\u884c\u5904\u7406\u3002\u6570\u636e\u53ef\u4ee5\u6765\u81ea\u6807\u51c6\u8f93\u5165\u3001\u4e00\u4e2a\u6216\u591a\u4e2a\u6587\u4ef6\uff0c\u6216\u5176\u5b83\u547d\u4ee4\u7684\u8f93\u51fa\u3002\u5b83\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u548c\u52a8\u6001\u6b63\u5219\u8868\u8fbe\u5f0f\u7b49\u5148\u8fdb\u529f\u80fd\uff0c\u662f linux/unix \u4e0b\u7684\u4e00\u4e2a\u5f3a\u5927\u7f16\u7a0b\u5de5\u5177\u3002\u5b83\u5728\u547d\u4ee4\u884c\u4e2d\u4f7f\u7528\uff0c\u4f46\u66f4\u591a\u662f\u4f5c\u4e3a\u811a\u672c\u6765\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"awk \u7684\u5904\u7406\u6587\u672c\u548c\u6570\u636e\u7684\u65b9\u5f0f\u662f\u8fd9\u6837\u7684\uff0c\u5b83\u9010\u884c\u626b\u63cf\u6587\u4ef6\uff0c\u4ece\u7b2c\u4e00\u884c\u5230\u6700\u540e\u4e00\u884c\uff0c\u5bfb\u627e\u5339\u914d\u7684\u7279\u5b9a\u6a21\u5f0f\u7684\u884c\uff0c\u5e76\u5728\u8fd9\u4e9b\u884c\u4e0a\u8fdb\u884c\u4f60\u60f3\u8981\u7684\u64cd\u4f5c\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u5904\u7406\u52a8\u4f5c\uff0c\u5219\u628a\u5339\u914d\u7684\u884c\u663e\u793a\u5230\u6807\u51c6\u8f93\u51fa(\u5c4f\u5e55)\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u6a21\u5f0f\uff0c\u5219\u6240\u6709\u88ab\u64cd\u4f5c\u6240\u6307\u5b9a\u7684\u884c\u90fd\u88ab\u5904\u7406\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"awk \u5206\u522b\u4ee3\u8868\u5176\u4f5c\u8005\u59d3\u6c0f\u7684\u7b2c\u4e00\u4e2a\u5b57\u6bcd\u3002\u56e0\u4e3a\u5b83\u7684\u4f5c\u8005\u662f\u4e09\u4e2a\u4eba\uff0c\u5206\u522b\u662f Alfred Aho\u3001Brian Kernighan\u3001Peter Weinberger\u3002")),(0,r.kt)("p",null,"gawk \u662f awk \u7684 GNU \u7248\u672c\uff0c\u5b83\u63d0\u4f9b\u4e86 Bell \u5b9e\u9a8c\u5ba4\u548c GNU \u7684\u4e00\u4e9b\u6269\u5c55"),(0,r.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"awk [\u9009\u9879\u53c2\u6570] 'script' var=value file(s)\n\u6216\nawk [\u9009\u9879\u53c2\u6570] -f scriptfile var=value file(s)\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"-f scripfile or --file scriptfile\n\u4ece\u811a\u672c\u6587\u4ef6\u4e2d\u8bfb\u53d6 awk \u547d\u4ee4",(0,r.kt)("inlineCode",{parentName:"p"},"awk -f cal.awk log.txt"))),(0,r.kt)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,r.kt)("p",null,"log.txt \u6587\u672c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"2 this is a test\n3 Do you like awk\nThis's a test\n10 There are orange,apple,mongo\n")),(0,r.kt)("h3",{id:"\u9ed8\u8ba4\u5206\u9694\u7b26\u8f93\u51fa"},"\u9ed8\u8ba4\u5206\u9694\u7b26\u8f93\u51fa"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u6bcf\u884c\u6309\u7a7a\u683c\u6216 TAB \u5206\u9694"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#\u8f93\u51fa\u6587\u672c\u4e2d\u7684 1\u30014 \u9879\n[roc@roclinux ~]$ awk '{print $1,$4}' log.txt\n ---------------------------------------------\n 2 a\n 3 like\n This's\n 10 orange,apple,mongo\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u884c\u5339\u914d\u8bed\u53e5 awk '' \u53ea\u80fd\u7528\u5355\u5f15\u53f7")),(0,r.kt)("h3",{id:"\u6307\u5b9a\u5206\u9694\u7b26\u8f93\u51fa"},"\u6307\u5b9a\u5206\u9694\u7b26\u8f93\u51fa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8f93\u51fa\u6587\u4ef6/etc/sysctl.conf\u4e2d\u542b\u6709\u5185\u5bb9vm.max_map_count\u7684\u4ee5=\u5206\u9694\u7684\u6700\u540e\u4e00\u5217\u5185\u5bb9\n# ...\n# vm.max_map_count=524288\n# ...\n[roc@roclinux ~]$ echo $(grep vm.max_map_count /etc/sysctl.conf | awk -F= '{print $NF}')\n ---------------------------------------------\n524288\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"-F fs or --field-separator fs\n\u6307\u5b9a\u8f93\u5165\u6587\u4ef6\u884c\u5206\u9694\u7b26\uff0cfs \u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u6216\u8005\u662f\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f")),(0,r.kt)("p",null,"-F \u76f8\u5f53\u4e8e\u5185\u7f6e\u53d8\u91cf FS, \u6307\u5b9a\u5206\u9694\u5b57\u7b26\uff0c\u76f4\u63a5\u4f7f\u7528\u5185\u5efa\u53d8\u91cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[roc@roclinux ~]$ awk 'BEGIN{FS=\",\"} {print $1,\\$2}' log.txt\n ---------------------------------------------\n2 this is a test\n3 Do you like awk\nThis's a test\n10 There are orange apple\n")),(0,r.kt)("h3",{id:"\u5b57\u7b26\u622a\u53d6"},"\u5b57\u7b26\u622a\u53d6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo \"SHA256 Fingerprint=0288:24:7B:4B:0A:0B:1F:F3:46:B0:F4:7A:1A:E3:7E:84:D2:57:91:21:76:59:55:5D:F9:04:60:5D:2E:DE:4A\" | awk -F '=' '{print $2}'\n# 0288:24:7B:4B:0A:0B:1F:F3:46:B0:F4:7A:1A:E3:7E:84:D2:57:91:21:76:59:55:5D:F9:04:60:5D:2E:DE:4A\n")),(0,r.kt)("h2",{id:"\u8bbe\u7f6e\u53d8\u91cf"},"\u8bbe\u7f6e\u53d8\u91cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[roc@roclinux ~]$ awk -va=1 '{print $1,$1+a}' log.txt\n ---------------------------------------------\n 2 3\n 3 4\n This's 1\n 10 11\n\n[roc@roclinux ~]$ awk -va=1 -vb=s '{print $1,$1+a,$1b}' log.txt\n ---------------------------------------------\n 2 3 2s\n 3 4 3s\n This's 1 This'ss\n 10 11 10s\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"-v var=value or --asign var=value\n\u8d4b\u503c\u4e00\u4e2a\u7528\u6237\u5b9a\u4e49\u53d8\u91cf")),(0,r.kt)("h2",{id:"\u8fd0\u7b97\u7b26\u4f7f\u7528"},"\u8fd0\u7b97\u7b26\u4f7f\u7528"),(0,r.kt)("h3",{id:"\u8fc7\u6ee4\u7b2c\u4e00\u5217\u5927\u4e8e-2-\u7684\u884c"},"\u8fc7\u6ee4\u7b2c\u4e00\u5217\u5927\u4e8e 2 \u7684\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[roc@roclinux ~]$ awk '$1>2' log.txt\n#\u8f93\u51fa\n3 Do you like awk\nThis's a test\n10 There are orange,apple,mongo\n")),(0,r.kt)("h3",{id:"\u8fc7\u6ee4\u7b2c\u4e00\u5217\u7b49\u4e8e-2-\u7684\u884c"},"\u8fc7\u6ee4\u7b2c\u4e00\u5217\u7b49\u4e8e 2 \u7684\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[roc@roclinux ~]$ awk '$1==2 {print $1,$3}' log.txt\n#\u8f93\u51fa\n2 is\n")),(0,r.kt)("h3",{id:"\u8fc7\u6ee4\u7b2c\u4e00\u5217\u5927\u4e8e-2-\u5e76\u4e14\u7b2c\u4e8c\u5217\u7b49\u4e8eare\u7684\u884c"},"\u8fc7\u6ee4\u7b2c\u4e00\u5217\u5927\u4e8e 2 \u5e76\u4e14\u7b2c\u4e8c\u5217\u7b49\u4e8e'Are'\u7684\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[roc@roclinux ~]$ awk '$1>2 && $2==\"Are\" {print $1,$2,$3}' log.txt\n#\u8f93\u51fa\n3 Are you\n")),(0,r.kt)("h2",{id:"\u6b63\u5219\u5b57\u7b26\u4e32\u5339\u914d"},"\u6b63\u5219\u5b57\u7b26\u4e32\u5339\u914d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8f93\u51fa\u7b2c\u4e8c\u5217\u5305\u542b \"th\"\uff0c\u5e76\u6253\u5370\u7b2c\u4e8c\u5217\u4e0e\u7b2c\u56db\u5217\n[roc@roclinux ~]$ awk '$2 ~ /th/ {print $2,$4}' log.txt\n---------------------------------------------\nthis a\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"~ \u8868\u793a\u6a21\u5f0f\u5f00\u59cb\u3002// \u91cc\u662f\u6a21\u5f0f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8f93\u51fa\u5305\u542b \"re\" \u7684\u884c\n[roc@roclinux ~]$ awk '/re/ ' log.txt\n---------------------------------------------\n3 Do you like awk\n10 There are orange,apple,mongo\n")),(0,r.kt)("h2",{id:"\u5ffd\u7565\u5927\u5c0f\u5199"},"\u5ffd\u7565\u5927\u5c0f\u5199"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[roc@roclinux ~]$ awk 'BEGIN{IGNORECASE=1} /this/' log.txt\n---------------------------------------------\n2 this is a test\nThis's a test\n")),(0,r.kt)("h2",{id:"\u6a21\u5f0f\u53d6\u53cd"},"\u6a21\u5f0f\u53d6\u53cd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[roc@roclinux ~]$ awk '$2 !~ /th/ {print $2,$4}' log.txt\n---------------------------------------------\nAre like\na\nThere orange,apple,mongo\n[roc@roclinux ~]$ awk '!/th/ {print $2,$4}' log.txt\n---------------------------------------------\nAre like\na\nThere orange,apple,mongo\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"~ \u548c !~ \u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0f\u548c\u4e0d\u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0f",(0,r.kt)("br",{parentName:"p"}),"\n","! \u903b\u8f91\u975e")),(0,r.kt)("h2",{id:"\u8ba1\u7b97\u6587\u4ef6\u5927\u5c0f"},"\u8ba1\u7b97\u6587\u4ef6\u5927\u5c0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[roc@roclinux ~]$ ls -l *.txt | awk '{sum+=$5} END {print sum}'\n--------------------------------------------------\n666581\n")),(0,r.kt)("h2",{id:"\u4ece\u6587\u4ef6\u4e2d\u627e\u51fa\u957f\u5ea6\u5927\u4e8e-80-\u7684\u884c"},"\u4ece\u6587\u4ef6\u4e2d\u627e\u51fa\u957f\u5ea6\u5927\u4e8e 80 \u7684\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[roc@roclinux ~]$ awk 'length>80' log.txt\n")),(0,r.kt)("h2",{id:"\u8f93\u51fa\u8fdb\u7a0b-pid"},"\u8f93\u51fa\u8fdb\u7a0b pid"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[roc@roclinux ~]$ ps -ef |grep hello |awk '{print $2}'\n")),(0,r.kt)("h2",{id:"\u5927\u5c0f\u5199\u8f6c\u6362"},"\u5927\u5c0f\u5199\u8f6c\u6362"),(0,r.kt)("p",null,"\u4f7f\u7528\u81ea\u5e26\u7684 tolower \u51fd\u6570\u80fd\u591f\u5c06\u6307\u5b9a\u7684\u5b57\u6bb5\u5168\u90e8\u5b57\u7b26\u8f6c\u6362\u6210\u5c0f\u5199\uff0c\u4f7f\u7528 toupper \u51fd\u6570\u80fd\u591f\u5c06\u5168\u90e8\u5b57\u7b26\u8f6c\u6362\u6210\u5927\u5199\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528awk\u547d\u4ee4tolower\u51fd\u6570\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u6210\u5c0f\u5199\necho \"Tom Andersen\" | awk '{print tolower($0)}'\n# tom andersen\n\n# \u4f7f\u7528awk\u547d\u4ee4toupper\u51fd\u6570\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u6210\u5927\u5199\necho \"Tom Andersen\" | awk '{print toupper($0)}'\n# TOM ANDERSEN\n")))}k.isMDXComponent=!0}}]);