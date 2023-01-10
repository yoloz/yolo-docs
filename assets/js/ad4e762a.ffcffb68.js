"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7271],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={},o=void 0,l={unversionedId:"bigdata/elasticsearch",id:"bigdata/elasticsearch",title:"elasticsearch",description:"max file descriptors",source:"@site/docs/bigdata/elasticsearch.md",sourceDirName:"bigdata",slug:"/bigdata/elasticsearch",permalink:"/docs/bigdata/elasticsearch",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/elasticsearch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CDH\u5b89\u88c5",permalink:"/docs/bigdata/CDH\u5b89\u88c5"},next:{title:"hadoop\u5b89\u88c5",permalink:"/docs/bigdata/hadoop\u5b89\u88c5"}},c={},s=[{value:"max file descriptors",id:"max-file-descriptors",level:2},{value:"max threads number",id:"max-threads-number",level:2},{value:"max virtual memory",id:"max-virtual-memory",level:2}],m={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"max-file-descriptors"},"max file descriptors"),(0,a.kt)("p",null,"\u9519\u8bef\uff1a",(0,a.kt)("strong",{parentName:"p"},"max file descriptors ","[4096]"," for elasticsearch process is too low, increase to at least ","[65535]")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e34\u65f6\u6027\u89e3\u51b3\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},'sudo sh -c "ulimit -n 65535 && exec su $LOGNAME"')),(0,a.kt)("li",{parentName:"ul"},"\u6c38\u4e45\u6027\u89e3\u51b3\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5728root\u7528\u6237\u4e0b\u8ffd\u52a0\u914d\u7f6e\nvim /etc/security/limits.conf\n# \u914d\u7f6e\u5185\u5bb9   *\u8868\u793a\u6240\u6709\u7528\u6237\u751f\u6548\n* soft nofile 65536\n* hard nofile 65536\n\n# \u91cd\u65b0\u767b\u5f55\u5373\u53ef\u751f\u6548\n# \u53ef\u4f7f\u7528\u547d\u4ee4\u67e5\u770b\u662f\u5426\u751f\u6548\nulimit  -H -n\n\n")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Linux \u64cd\u4f5c\u7cfb\u7edf\u4e91\u670d\u52a1\u5668\u4e2d\u9650\u5236\u8d44\u6e90\u4f7f\u7528\u7684\u914d\u7f6e\u6587\u4ef6\u662f/etc/security/limits.conf \u548c/etc/security/limits.d/\u76ee\u5f55\uff0c/etc/security/limits.d/\u76ee\u5f55\u4e2d\u7684\u914d\u7f6e\u4f18\u5148\u7ea7\u9ad8\u4e8e/etc/security/limits.conf \u7684\u914d\u7f6e\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4fee\u6539/etc/security/limits.conf \u6587\u4ef6\uff0c\u91cd\u542f\u540e\u4e0d\u751f\u6548\uff0c\u5219\u53ef\u80fd\u662f\u7531\u4e8e limits.conf \u4e2d\u7684\u4fee\u6539\u88ab/etc/security/limits.d/\u76ee\u5f55\u4e2d\u914d\u7f6e\u9879\u7684\u503c\u6240\u8986\u76d6,\u8bf7\u68c0\u67e5/etc/security/limits.d/\u76ee\u5f55\u4e2d\u914d\u7f6e\u9879\u7684\u503c\u3002")),(0,a.kt)("h2",{id:"max-threads-number"},"max threads number"),(0,a.kt)("p",null,"\u9519\u8bef\uff1a",(0,a.kt)("strong",{parentName:"p"},"max number of threads ","[3818]"," for user ","[es]"," is too low, increase to at least ","[4096]")),(0,a.kt)("p",null,"\u95ee\u9898\u540c\u4e0a\uff0c\u6700\u5927\u7ebf\u7a0b\u4e2a\u6570\u592a\u4f4e\u3002\u4fee\u6539\u914d\u7f6e\u6587\u4ef6/etc/security/limits.conf\uff0c\u589e\u52a0\u914d\u7f6e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"*               soft    nproc           4096\n*               hard    nproc           4096\n")),(0,a.kt)("h2",{id:"max-virtual-memory"},"max virtual memory"),(0,a.kt)("p",null,"\u9519\u8bef\uff1a",(0,a.kt)("strong",{parentName:"p"},"max virtual memory areas vm.max_map_count ","[65530]"," is too low, increase to at least ","[262144]")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e34\u65f6\u6267\u884c\u547d\u4ee4",(0,a.kt)("inlineCode",{parentName:"p"},"sysctl -w vm.max_map_count=262144"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4fee\u6539/etc/sysctl.conf \u6587\u4ef6\uff0c\u589e\u52a0\u914d\u7f6e vm.max_map_count = 262144,\u7136\u540e\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"sysctl -p"),"\u751f\u6548"))))}p.isMDXComponent=!0}}]);