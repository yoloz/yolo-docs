"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7217],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>f});var n=i(7294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(i),c=l,f=p["".concat(s,".").concat(c)]||p[c]||d[c]||r;return i?n.createElement(f,a(a({ref:t},m),{},{components:i})):n.createElement(f,a({ref:t},m))}));function f(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=i.length,a=new Array(r);a[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,a[1]=o;for(var u=2;u<r;u++)a[u]=i[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},7900:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=i(7462),l=(i(7294),i(3905));const r={},a=void 0,o={unversionedId:"devOps/\u8d44\u6e90\u7ba1\u7406ulimit",id:"devOps/\u8d44\u6e90\u7ba1\u7406ulimit",title:"\u8d44\u6e90\u7ba1\u7406ulimit",description:"\u53c2\u8003 ulimit \u7684\u5e2e\u52a9\u6587\u6863\uff08\u6ce8\u610f\uff1a\u4e0d\u662f man ulimit\uff0c\u800c\u662f help ulimit\uff0c\u524d\u8005\u63d0\u4f9b\u7684\u662f C \u8bed\u8a00\u7684 ulimit \u5e2e\u52a9\uff09\uff1a",source:"@site/docs/devOps/\u8d44\u6e90\u7ba1\u7406ulimit.md",sourceDirName:"devOps",slug:"/devOps/\u8d44\u6e90\u7ba1\u7406ulimit",permalink:"/docs/devOps/\u8d44\u6e90\u7ba1\u7406ulimit",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/devOps/\u8d44\u6e90\u7ba1\u7406ulimit.md",tags:[],version:"current",lastUpdatedAt:1685008816,formattedLastUpdatedAt:"2023\u5e745\u670825\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8bed\u8a00\u73af\u5883locale",permalink:"/docs/devOps/\u8bed\u8a00\u73af\u5883locale"},next:{title:"\u8def\u7531\u8ffd\u8e2a",permalink:"/docs/devOps/\u8def\u7531\u8ffd\u8e2a"}},s={},u=[{value:"soft and hard limit",id:"soft-and-hard-limit",level:2},{value:"ulimit \u7684\u4fee\u6539\u4e0e\u751f\u6548",id:"ulimit-\u7684\u4fee\u6539\u4e0e\u751f\u6548",level:2},{value:"\u8fd0\u884c\u4e2d\u8fdb\u7a0b\u7684 limits \u7684\u67e5\u770b",id:"\u8fd0\u884c\u4e2d\u8fdb\u7a0b\u7684-limits-\u7684\u67e5\u770b",level:2},{value:"\u67e5\u770b\u7cfb\u7edf\u6253\u5f00\u6587\u4ef6\u6570",id:"\u67e5\u770b\u7cfb\u7edf\u6253\u5f00\u6587\u4ef6\u6570",level:2}],m={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,l.kt)(p,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u53c2\u8003 ulimit \u7684\u5e2e\u52a9\u6587\u6863\uff08\u6ce8\u610f\uff1a\u4e0d\u662f man ulimit\uff0c\u800c\u662f help ulimit\uff0c\u524d\u8005\u63d0\u4f9b\u7684\u662f C \u8bed\u8a00\u7684 ulimit \u5e2e\u52a9\uff09\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Modify shell resource limits. Provides control over the resources available to the shell and processes it creates, on systems that allow such control.")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa\uff0culimit \u63d0\u4f9b\u4e86\u5bf9 shell\uff08\u6216 shell \u521b\u5efa\u7684\u8fdb\u7a0b\uff09\u53ef\u7528\u8d44\u6e90\u7684\u7ba1\u7406\u3002\u9664\u4e86\u6253\u5f00\u6587\u4ef6\u6570\u4e4b\u5916\uff0c\u53ef\u7ba1\u7406\u7684\u8d44\u6e90\u6709\uff1a \u6700\u5927\u5199\u5165\u6587\u4ef6\u5927\u5c0f\u3001\u6700\u5927\u5806\u6808\u5927\u5c0f\u3001core dump \u6587\u4ef6\u5927\u5c0f\u3001cpu \u65f6\u95f4\u9650\u5236\u3001\u6700\u5927\u865a\u62df\u5185\u5b58\u5927\u5c0f\u7b49\u7b49\uff0chelp ulimit \u4f1a\u5217\u51fa\u6bcf\u4e2a option \u9650\u5236\u7684\u8d44\u6e90\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[root@linux ~]$ ulimit -a\ncore file size          (blocks, -c) 0\ndata seg size           (kbytes, -d) unlimited\nscheduling priority             (-e) 0\nfile size               (blocks, -f) 100\npending signals                 (-i) 15520\nmax locked memory       (kbytes, -l) 16384\nmax memory size         (kbytes, -m) unlimited\nopen files                      (-n) 1024\npipe size            (512 bytes, -p) 8\nPOSIX message queues     (bytes, -q) 819200\nreal-time priority              (-r) 0\nstack size              (kbytes, -s) 8192\ncpu time               (seconds, -t) unlimited\nmax user processes              (-u) 15520\nvirtual memory          (kbytes, -v) unlimited\nfile locks                      (-x) unlimited\n\nulimit -a # \u67e5\u770b\u6240\u6709soft\u503c\nulimit -Ha # \u67e5\u770b\u6240\u6709hard\u503c\nulimit -Hn # \u67e5\u770bnofile\u7684hard\u503c\nulimit -Sn 1000 # \u5c06nofile\u7684soft\u503c\u8bbe\u7f6e\u4e3a1000\nulimit -n 1000 # \u540c\u65f6\u5c06nofiles\u7684hard\u548csoft\u503c\u8bbe\u7f6e\u4e3a1000\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"ulimit")," \u65e0\u53c2\u6570\u76f8\u5f53\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"ulimit -f -S")," \u6307\u53ef\u5199\u5165\u7684\u6587\u4ef6\u6700\u5927 size")),(0,l.kt)("h2",{id:"soft-and-hard-limit"},"soft and hard limit"),(0,l.kt)("p",null,"ulimit \u5bf9\u8d44\u6e90\u7684\u9650\u5236\u533a\u5206\u4e3a soft \u548c hard \u4e24\u7c7b\uff0c\u5373\u540c\u4e00\u4e2a\u8d44\u6e90\uff08\u5982 nofile\uff09\u5b58\u5728 soft \u548c hard \u4e24\u4e2a\u503c\u3002\u5728\u547d\u4ee4\u4e0a\uff0culimit \u901a\u8fc7-S \u548c-H \u6765\u533a\u5206 soft \u548c hard\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a-S \u6216-H\uff0c\u5728\u663e\u793a\u65f6\u6307\u7684\u662f soft\uff0c\u800c\u5728\u8bbe\u7f6e\u7684\u65f6\u5019\u6307\u7684\u662f\u540c\u65f6\u8bbe\u7f6e soft \u548c hard \u503c\u3002"),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u65e0\u8bba\u4f55\u65f6\uff0csoft \u603b\u662f\u5c0f\u4e8e\u7b49\u4e8e hard;"),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u8bba\u662f\u8d85\u8fc7\u4e86 soft \u8fd8\u662f hard\uff0c\u64cd\u4f5c\u90fd\u4f1a\u88ab\u62d2\u7edd\u3002\u7ed3\u5408 soft<=hard \u8fd9\u53e5\u8bdd\u7b49\u4ef7\u4e8e\uff1a\u8d85\u8fc7\u4e86 soft \u9650\u5236\uff0c\u64cd\u4f5c\u4f1a\u88ab\u62d2\u7edd\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a process \u53ef\u4ee5\u4fee\u6539\u5f53\u524d process \u7684 soft \u6216 hard\u3002\u4f46\u4fee\u6539\u9700\u6ee1\u8db3\u89c4\u5219\uff1a",(0,l.kt)("br",{parentName:"li"}),"1, \u4fee\u6539\u540e soft \u4e0d\u80fd\u8d85\u8fc7 hard, \u4e5f\u5c31\u662f\u8bf4 soft \u589e\u5927\u65f6\uff0c\u4e0d\u80fd\u8d85\u8fc7 hard, \u82e5 hard \u964d\u4f4e\u5230\u6bd4\u5f53\u524d soft \u8fd8\u5c0f\uff0c\u90a3\u4e48 soft \u4e5f\u4f1a\u968f\u4e4b\u964d\u4f4e;",(0,l.kt)("br",{parentName:"li"}),"2, \u975e root \u6216 root \u8fdb\u7a0b\u90fd\u53ef\u4ee5\u5c06 soft \u5728","[0-hard]","\u7684\u8303\u56f4\u5185\u4efb\u610f\u589e\u52a0\u6216\u964d\u4f4e;",(0,l.kt)("br",{parentName:"li"}),"3, \u975e root \u8fdb\u7a0b\u53ef\u4ee5\u964d\u4f4e hard\uff0c\u4f46\u4e0d\u80fd\u589e\u52a0 hard\u3002\u5373 nofile \u539f\u6765\u662f 1000\uff0c\u4fee\u6539\u4e3a\u4e86 900\uff0c\u518d\u4fee\u6539\u4e3a 1000 \u662f\u4e0d\u884c\u7684\u3002\uff08\u8fd9\u662f\u4e00\u4e2a\u5355\u5411\u7684\uff0c\u53c8\u53bb\u65e0\u56de\u7684\u64cd\u4f5c\uff09\uff1b",(0,l.kt)("br",{parentName:"li"}),"4, root \u8fdb\u7a0b\u53ef\u4ee5\u4efb\u610f\u4fee\u6539 hard \u503c"),(0,l.kt)("li",{parentName:"ul"},"JDK \u7684\u5b9e\u73b0\u4e2d\u4f1a\u76f4\u63a5\u5c06 nofile \u7684 soft \u5148\u6539\u6210\u4e86\u548c hard \u4e00\u6837\u7684\u503c, \u5373 java \u8fdb\u7a0b soft \u548c hard \u4e00\u81f4"))),(0,l.kt)("h2",{id:"ulimit-\u7684\u4fee\u6539\u4e0e\u751f\u6548"},"ulimit \u7684\u4fee\u6539\u4e0e\u751f\u6548"),(0,l.kt)("p",null,"\u5173\u4e8e ulimit \u7684\u751f\u6548\uff0c\u6293\u4f4f\u51e0\u70b9\u5373\u53ef\uff1a"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"ulimit \u7684\u503c\u603b\u662f\u7ee7\u627f\u7236\u8fdb\u7a0b\u7684\u8bbe\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"ulimit \u547d\u4ee4\u53ef\u4fee\u6539\u5f53\u524d shell \u8fdb\u7a0b\u7684\u8bbe\u7f6e\uff0c\u8981\u4fdd\u8bc1\u4e0b\u6b21\u751f\u6548\u5219\u4fee\u6539\u7684\u5730\u65b9\u8981\u5177\u6709\u6301\u4e45\u6027\uff08\u81f3\u5c11\u76f8\u5f53\u4e8e\u76ee\u6807\u8fdb\u7a0b\u800c\u8a00\uff09\uff0c\u5982.bashrc \u6216\u8fdb\u7a0b\u7684\u542f\u52a8\u811a\u672c\uff0c\u8fd0\u884c\u4e2d\u7684\u8fdb\u7a0b\uff0c\u4e0d\u53d7 ulimit \u7684\u4fee\u6539\u5f71\u54cd\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u589e\u52a0 hard \u503c\uff0c\u53ea\u80fd\u901a\u8fc7 root \u5b8c\u6210\u3002"))),(0,l.kt)("p",null,"\u4e0b\u9762\u7ed9\u51fa\u4e24\u4e2a\u6848\u4f8b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6848\u4f8b 1\uff1a\u67d0\u975e root \u8fdb\u7a0b\u8981\u6c42 2048 \u7684 nofile\uff0c\u7ecf\u67e5\u770b\u5f53\u524d soft \u4e3a 1024\uff0chard \u4e3a 4096"),(0,l.kt)("br",{parentName:"p"}),"\n","\u53ef\u4ee5\u76f4\u63a5\u5728\u8be5\u8fdb\u7a0b\u542f\u52a8\u811a\u672c\u4e2d\uff0c\u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"ulimit -nS 2048")," \u5373\u53ef"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6848\u4f8b 2\uff1a\u67d0\u975e root \u8fdb\u7a0b\u8981\u6c42 10240 \u7684 nofile\uff0c\u7ecf\u67e5\u770b\u5f53\u524d soft \u4e3a 1024\uff0chard \u4e3a 4096"),(0,l.kt)("br",{parentName:"p"}),"\n","\u663e\u7136\uff0c\u975e root \u7528\u6237\u6ca1\u6cd5\u4fee\u6539\u53ea\u80fd\u901a\u8fc7 root \u4fee\u6539\uff0c\u4e00\u822c\u4fee\u6539/etc/security/limits.conf \u6587\u4ef6:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-log"},"\n*  hard nofile 10240\n*  soft nofile 10240\n\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u4e00\u6761\u8bb0\u5f55\u5305\u542b 4\ufe0f \u5217\uff0c\u5206\u522b\u662f:"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u8303\u56f4 domain\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"\u5373\u751f\u6548\u7684\u8303\u56f4\uff0c\u53ef\u4ee5\u662f\u7528\u6237\u540d\u3001group \u540d\u6216*\u4ee3\u8868\u6240\u6709\u975e root \u7528\u6237"),"\uff09\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b type\uff1a\u5373 soft\u3001hard\uff0c\u6216\u8005-\u4ee3\u8868\u540c\u65f6\u8bbe\u7f6e soft \u548c hard\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u9879\u76ee item\uff0c\u5373 ulimit \u4e2d\u7684\u8d44\u6e90\u63a7\u5236\u9879\u76ee\uff0c\u540d\u5b57\u679a\u4e3e\u53ef\u4ee5\u53c2\u8003\u6587\u4ef6\u4e2d\u7684\u6ce8\u91ca\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u540e\u5c31\u662f value"))),(0,l.kt)("h2",{id:"\u8fd0\u884c\u4e2d\u8fdb\u7a0b\u7684-limits-\u7684\u67e5\u770b"},"\u8fd0\u884c\u4e2d\u8fdb\u7a0b\u7684 limits \u7684\u67e5\u770b"),(0,l.kt)("p",null,"\u4fee\u6539 ulimit \u524d\u5c31\u542f\u52a8\u7684\u8fdb\u7a0b\uff0c\u5982\u4f55\u77e5\u9053\u5176 ulimit \u503c\u5462, \u53ef\u4ee5\u901a\u8fc7\u67e5\u770b\u8fdb\u7a0b\u76ee\u5f55\u4e0b\u7684 limits \u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[root@linux ~]$ cat /proc/4660/limits\nLimit                     Soft Limit           Hard Limit           Units\nMax cpu time              unlimited            unlimited            seconds\nMax file size             unlimited            unlimited            bytes\nMax data size             unlimited            unlimited            bytes\nMax stack size            8388608              unlimited            bytes\nMax core file size        0                    unlimited            bytes\nMax resident set          unlimited            unlimited            bytes\nMax processes             15520                15520                processes\nMax open files            2000                 2000                 files\nMax locked memory         16777216             16777216             bytes\nMax address space         unlimited            unlimited            bytes\nMax file locks            unlimited            unlimited            locks\nMax pending signals       15520                15520                signals\nMax msgqueue size         819200               819200               bytes\nMax nice priority         0                    0\nMax realtime priority     0                    0\n")),(0,l.kt)("h2",{id:"\u67e5\u770b\u7cfb\u7edf\u6253\u5f00\u6587\u4ef6\u6570"},"\u67e5\u770b\u7cfb\u7edf\u6253\u5f00\u6587\u4ef6\u6570"),(0,l.kt)("p",null,"losf \u547d\u4ee4\u867d\u7136\u4f5c\u7528\u662f\u201dlist open files\u201d\uff0c\u4f46\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"lsof | wc -l")," \u7edf\u8ba1\u6253\u5f00\u6587\u4ef6\u6570\u4e0d\u51c6\u786e, \u4e3b\u8981\u539f\u56e0\u6709:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4e00\u884c\u53ef\u80fd\u663e\u793a\u7684\u662f\u7ebf\u7a0b\uff0c\u800c\u4e0d\u662f\u8fdb\u7a0b\uff0c\u5bf9\u4e8e\u591a\u7ebf\u7a0b\u7684\u60c5\u51b5\uff0c\u5c31\u4f1a\u8bef\u4ee5\u4e3a\u4e00\u4e2a\u6587\u4ef6\u88ab\u91cd\u590d\u6253\u5f00\u4e86\u5f88\u591a\u6b21;"),(0,l.kt)("li",{parentName:"ul"},"\u5b50\u8fdb\u7a0b\u4f1a\u5171\u4eab file handler, \u5982\u679c\u7528 lsof \u7edf\u8ba1\uff0c\u5fc5\u987b\u4f7f\u7528\u7cbe\u5de7\u7684\u8fc7\u6ee4\u6761\u4ef6;")),(0,l.kt)("p",null,"\u7b80\u5355\u548c\u51c6\u786e\u7684\u65b9\u5f0f\u662f\u901a\u8fc7/proc \u76ee\u5f55\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/Documentation/sysctl/fs.txt"},"/proc/sys/fs/file-nr")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b\u4e00\u4e2a\u8fdb\u7a0b\u7684\u6253\u5f00\u6587\u4ef6\u6570\uff0c\u76f4\u63a5\u67e5\u770b\u76ee\u5f55/proc/\\$pid/fd \u91cc\u7684\u6587\u4ef6\u6570"),(0,l.kt)("li",{parentName:"ul"},"/proc/sys/fs/file-max \u8fd9\u4e2a\u6587\u4ef6\u63a7\u5236\u4e86\u7cfb\u7edf\u5185\u6838\u53ef\u4ee5\u6253\u5f00\u7684\u5168\u90e8\u6587\u4ef6\u603b\u6570")))}d.isMDXComponent=!0}}]);