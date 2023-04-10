"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},l=void 0,o={unversionedId:"linux/\u7cfb\u7edf\u53c2\u6570\u8c03\u6574",id:"linux/\u7cfb\u7edf\u53c2\u6570\u8c03\u6574",title:"\u7cfb\u7edf\u53c2\u6570\u8c03\u6574",description:"max file descriptors",source:"@site/docs/linux/\u7cfb\u7edf\u53c2\u6570\u8c03\u6574.md",sourceDirName:"linux",slug:"/linux/\u7cfb\u7edf\u53c2\u6570\u8c03\u6574",permalink:"/docs/linux/\u7cfb\u7edf\u53c2\u6570\u8c03\u6574",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/linux/\u7cfb\u7edf\u53c2\u6570\u8c03\u6574.md",tags:[],version:"current",lastUpdatedAt:1681124787,formattedLastUpdatedAt:"2023\u5e744\u670810\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u78c1\u76d8\u6302\u8f7d",permalink:"/docs/linux/\u78c1\u76d8\u6302\u8f7d"},next:{title:"\u7cfb\u7edf\u9632\u706b\u5899",permalink:"/docs/linux/\u7cfb\u7edf\u9632\u706b\u5899"}},s={},c=[{value:"max file descriptors",id:"max-file-descriptors",level:2},{value:"\u91cd\u542f\u4e0d\u751f\u6548\u95ee\u9898",id:"\u91cd\u542f\u4e0d\u751f\u6548\u95ee\u9898",level:3},{value:"\u64cd\u4f5c\u7cfb\u7edf\u53c2\u6570",id:"\u64cd\u4f5c\u7cfb\u7edf\u53c2\u6570",level:3},{value:"max threads number",id:"max-threads-number",level:2},{value:"max virtual memory",id:"max-virtual-memory",level:2},{value:"system limit for file watchers",id:"system-limit-for-file-watchers",level:2},{value:"\u4e34\u65f6\u589e\u52a0\u9650\u989d",id:"\u4e34\u65f6\u589e\u52a0\u9650\u989d",level:3},{value:"\u6c38\u4e45\u589e\u52a0\u9650\u989d",id:"\u6c38\u4e45\u589e\u52a0\u9650\u989d",level:3}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"max-file-descriptors"},"max file descriptors"),(0,a.kt)("p",null,"\u9519\u8bef\uff1a",(0,a.kt)("strong",{parentName:"p"},"max file descriptors ","[4096]"," for elasticsearch process is too low, increase to at least ","[65535]")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e34\u65f6\u6027\u89e3\u51b3\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},'sudo sh -c "ulimit -n 65535 && exec su $LOGNAME"')),(0,a.kt)("li",{parentName:"ul"},"\u6c38\u4e45\u6027\u89e3\u51b3\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vim /etc/security/limits.conf\n# \u914d\u7f6e\u5185\u5bb9   *\u8868\u793a\u6240\u6709\u7528\u6237\u751f\u6548\n# ubuntu\u7684root\u7528\u6237\u5728\u67d0\u4e9b\u7248\u672c\u4e0b\u9700\u8981\u5355\u72ec\u5199\n* soft nofile 65536\n* hard nofile 65536\n\n# \u91cd\u65b0\u767b\u5f55\u5373\u53ef\u751f\u6548\n# \u53ef\u4f7f\u7528\u547d\u4ee4\u67e5\u770b\u662f\u5426\u751f\u6548\nulimit  -H -n\n\n")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Linux \u64cd\u4f5c\u7cfb\u7edf\u4e91\u670d\u52a1\u5668\u4e2d\u9650\u5236\u8d44\u6e90\u4f7f\u7528\u7684\u914d\u7f6e\u6587\u4ef6\u662f/etc/security/limits.conf \u548c/etc/security/limits.d/\u76ee\u5f55\uff0c/etc/security/limits.d/\u76ee\u5f55\u4e2d\u7684\u914d\u7f6e\u4f18\u5148\u7ea7\u9ad8\u4e8e/etc/security/limits.conf \u7684\u914d\u7f6e\uff0c\u6ce8\u610f\u4e0d\u8981\u51b2\u7a81\uff0c\u4e00\u822c limits.d \u76ee\u5f55\u4e3a\u7a7a\u3002")),(0,a.kt)("h3",{id:"\u91cd\u542f\u4e0d\u751f\u6548\u95ee\u9898"},"\u91cd\u542f\u4e0d\u751f\u6548\u95ee\u9898"),(0,a.kt)("p",null,"\u6392\u9664\u4e0a\u8ff0\u7684\u53ef\u80fd\u914d\u7f6e\u51b2\u7a81\u95ee\u9898\uff0c\u5219\u5982\u4e0b\u6392\u67e5\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u68c0\u67e5/etc/ssh/sshd_config \u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"UsePAM yes"),"\u9009\u9879\u662f\u5426\u5f00\u542f"),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"UsePAM yes \u9009\u9879\u5f00\u542f\u540e\uff0c\u8868\u793a\u542f\u7528 pam \u6a21\u5757\uff0c\u5728/etc/pam.d/sshd \u4e2d\u9ed8\u8ba4\u5df2\u5b58\u5728\u4e00\u9879 session include password-auth \u914d\u7f6e\uff0cinclude \u8868\u793a\u9700\u8981\u901a\u8fc7 password-auth \u6a21\u5757\u8ba4\u8bc1\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u68c0\u67e5/etc/pam.d/login,/etc/pam.d/su,/etc/pam.d/sshd \u4e2d\u662f\u5426\u5b58\u5728 session required pam_limits.so \u8fd9\u4e00\u9879\uff0c\u8868\u793a\u4f7f\u7528/etc/security/limits.conf \u8fd9\u4e2a\u914d\u7f6e"),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4e00\u822c\u8fd9\u4e00\u9879\u90fd\u5b58\u5728")))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u91cd\u542f\u6216\u8005\u91cd\u65b0\u767b\u5f55\u540e\u4ecd\u672a\u751f\u6548\uff0c\u5219\u9010\u4e2a\u6392\u67e5/etc/pam.d \u4e0b\u76f8\u5173\u8fde\u7684\u6587\u4ef6\u662f\u5426\u5c06 session required pam_limits.so \u8fd9\u4e00\u4e0b\u9879\u6ce8\u91ca\u6216\u5220\u9664\u4e86")),(0,a.kt)("h3",{id:"\u64cd\u4f5c\u7cfb\u7edf\u53c2\u6570"},"\u64cd\u4f5c\u7cfb\u7edf\u53c2\u6570"),(0,a.kt)("p",null,"\u53e6\u5916\u5f71\u54cd\u6700\u5927\u6253\u5f00\u6587\u4ef6\u53e5\u67c4\u6570\u91cf\u7684\u8fd8\u6709/etc/sysctl.conf \u6587\u4ef6\u7684\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"fs.file-max = 102400 #\u5185\u6838\u53ef\u5206\u914d\u7684\u6700\u5927\u6587\u4ef6\u6570\nfs.nr_open = 1048576 #\u5355\u4e2a\u8fdb\u7a0b\u53ef\u5206\u914d\u7684\u6700\u5927\u6587\u4ef6\u6570\nfs.inotify.max_user_instances = 65535 #\u6bcf\u4e2a\u7528\u6237\u6700\u5927\u53ef\u521b\u5efainotify instances\u6570\u91cf\nfs.inotify.max_user_watches = 102400 #\u6bcf\u4e2a\u7528\u6237\u53ef\u540c\u65f6\u6dfb\u52a0\u7684watch\u6570\u91cf\n")),(0,a.kt)("h2",{id:"max-threads-number"},"max threads number"),(0,a.kt)("p",null,"\u9519\u8bef\uff1a",(0,a.kt)("strong",{parentName:"p"},"max number of threads ","[3818]"," for user ","[es]"," is too low, increase to at least ","[4096]")),(0,a.kt)("p",null,"\u95ee\u9898\u540c\u4e0a\uff0c\u6700\u5927\u7ebf\u7a0b\u4e2a\u6570\u592a\u4f4e\u3002\u4fee\u6539\u914d\u7f6e\u6587\u4ef6/etc/security/limits.conf\uff0c\u589e\u52a0\u914d\u7f6e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"*               soft    nproc           4096\n*               hard    nproc           4096\n")),(0,a.kt)("h2",{id:"max-virtual-memory"},"max virtual memory"),(0,a.kt)("p",null,"\u9519\u8bef\uff1a",(0,a.kt)("strong",{parentName:"p"},"max virtual memory areas vm.max_map_count ","[65530]"," is too low, increase to at least ","[262144]")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e34\u65f6\u6267\u884c\u547d\u4ee4",(0,a.kt)("inlineCode",{parentName:"p"},"sysctl -w vm.max_map_count=262144"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4fee\u6539/etc/sysctl.conf \u6587\u4ef6\uff0c\u589e\u52a0\u914d\u7f6e vm.max_map_count = 262144,\u7136\u540e\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"sysctl -p"),"\u751f\u6548"))),(0,a.kt)("h2",{id:"system-limit-for-file-watchers"},"system limit for file watchers"),(0,a.kt)("p",null,"Error: ENOSPC: System limit for number of file watchers reached:\u6587\u4ef6\u76d1\u89c6\u7a0b\u5e8f\u7684\u7cfb\u7edf\u4ea7\u751f\u4e86\u9650\u5236\uff0c\u8fbe\u5230\u4e86\u9ed8\u8ba4\u7684\u4e0a\u9650\uff0c\u9700\u8981\u589e\u52a0\u9650\u989d"),(0,a.kt)("p",null,"\u67e5\u770b\u9650\u989d:",(0,a.kt)("inlineCode",{parentName:"p"},"cat /proc/sys/fs/inotify/max_user_watches")),(0,a.kt)("h3",{id:"\u4e34\u65f6\u589e\u52a0\u9650\u989d"},"\u4e34\u65f6\u589e\u52a0\u9650\u989d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo sysctl fs.inotify.max_user_watches=524288\n$ sudo sysctl -p\n")),(0,a.kt)("h3",{id:"\u6c38\u4e45\u589e\u52a0\u9650\u989d"},"\u6c38\u4e45\u589e\u52a0\u9650\u989d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo fs.inotify.max_user_watches = 524288 | sudo tee -a /etc/sysctl.conf\nsudo sysctl -p\n")))}p.isMDXComponent=!0}}]);