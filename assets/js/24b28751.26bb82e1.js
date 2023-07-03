"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[9211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=l,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const o={},r=void 0,i={unversionedId:"linux/linux\u7cfb\u7edf\u65f6\u95f4",id:"linux/linux\u7cfb\u7edf\u65f6\u95f4",title:"linux\u7cfb\u7edf\u65f6\u95f4",description:"\u68c0\u67e5\u5f53\u524d\u65f6\u533a",source:"@site/docs/linux/linux\u7cfb\u7edf\u65f6\u95f4.md",sourceDirName:"linux",slug:"/linux/linux\u7cfb\u7edf\u65f6\u95f4",permalink:"/docs/linux/linux\u7cfb\u7edf\u65f6\u95f4",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/linux/linux\u7cfb\u7edf\u65f6\u95f4.md",tags:[],version:"current",lastUpdatedAt:1688378919,formattedLastUpdatedAt:"2023\u5e747\u67083\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"centos\u914d\u7f6evault\u6e90",permalink:"/docs/linux/centos\u914d\u7f6evault\u6e90"},next:{title:"netplan",permalink:"/docs/linux/netplan"}},c={},s=[{value:"\u68c0\u67e5\u5f53\u524d\u65f6\u533a",id:"\u68c0\u67e5\u5f53\u524d\u65f6\u533a",level:2},{value:"\u66f4\u6539\u65f6\u533a",id:"\u66f4\u6539\u65f6\u533a",level:2},{value:"\u786c\u4ef6\u65f6\u949f",id:"\u786c\u4ef6\u65f6\u949f",level:2},{value:"\u67e5\u770b\u786c\u4ef6\u65f6\u949f",id:"\u67e5\u770b\u786c\u4ef6\u65f6\u949f",level:3},{value:"\u8bbe\u7f6e\u786c\u4ef6\u65f6\u949f",id:"\u8bbe\u7f6e\u786c\u4ef6\u65f6\u949f",level:3},{value:"\u7cfb\u7edf\u65f6\u949f",id:"\u7cfb\u7edf\u65f6\u949f",level:2},{value:"\u67e5\u770b\u7cfb\u7edf\u65f6\u949f",id:"\u67e5\u770b\u7cfb\u7edf\u65f6\u949f",level:3},{value:"\u4fee\u6539\u7cfb\u7edf\u65f6\u949f",id:"\u4fee\u6539\u7cfb\u7edf\u65f6\u949f",level:3},{value:"\u786c\u4ef6\u65f6\u949f\u4e0e\u7cfb\u7edf\u65f6\u949f\u95f4\u7684\u540c\u6b65",id:"\u786c\u4ef6\u65f6\u949f\u4e0e\u7cfb\u7edf\u65f6\u949f\u95f4\u7684\u540c\u6b65",level:2},{value:"\u4ece\u786c\u4ef6\u65f6\u949f\u540c\u6b65\u65f6\u95f4\u81f3\u7cfb\u7edf\u65f6\u949f",id:"\u4ece\u786c\u4ef6\u65f6\u949f\u540c\u6b65\u65f6\u95f4\u81f3\u7cfb\u7edf\u65f6\u949f",level:3},{value:"\u4ece\u7cfb\u7edf\u65f6\u949f\u540c\u6b65\u65f6\u95f4\u81f3\u786c\u4ef6\u65f6\u949f",id:"\u4ece\u7cfb\u7edf\u65f6\u949f\u540c\u6b65\u65f6\u95f4\u81f3\u786c\u4ef6\u65f6\u949f",level:3}],p={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u68c0\u67e5\u5f53\u524d\u65f6\u533a"},"\u68c0\u67e5\u5f53\u524d\u65f6\u533a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[root@localhost ~]# timedatectl\n               Local time: Wed 2022-12-28 23:19:07 CST\n           Universal time: Wed 2022-12-28 15:19:07 UTC\n                 RTC time: Wed 2022-12-28 15:19:51\n                Time zone: Asia/Shanghai (CST, +0800)\nSystem clock synchronized: yes\n              NTP service: active\n          RTC in local TZ: no\n\n")),(0,l.kt)("admonition",{title:"\u8bf4\u660e",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Local time \u662f\u6307\u5730\u65b9\u65f6;",(0,l.kt)("br",{parentName:"p"}),"\n","Universal time \u662f\u6307\u4e16\u754c\u65f6;",(0,l.kt)("br",{parentName:"p"}),"\n","RTC time \u6307\u786c\u4ef6\u65f6\u949f;",(0,l.kt)("br",{parentName:"p"}),"\n","Time zone \u6307\u65f6\u533a;",(0,l.kt)("br",{parentName:"p"}),"\n","NTP enabled: yes\uff0cyes \u662f\u6307 NTP \u5df2\u7ecf\u542f\u7528\uff0c\u5f53\u5176\u503c\u4e3a no \u65f6\u8bf4\u660e NTP \u672a\u542f\u7528;",(0,l.kt)("br",{parentName:"p"}),"\n","NTP synchronized: yes\uff0cyes \u662f\u6307\u5b8c\u6210\u8fc7 NTP \u540c\u6b65\uff0cno \u8bf4\u660e\u672a\u5b8c\u6210\u8fc7 NTP \u540c\u6b65;")),(0,l.kt)("p",null,"\u8fd8\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b/etc/localtime \u88ab\u94fe\u63a5\u5230\u54ea\u4e2a\u6587\u4ef6\u8fdb\u884c\u786e\u5b9a\u5f53\u524d\u65f6\u533a\u5c5e\u4e8e\u54ea\u4e2a\u65f6\u533a,\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[root@localhost ~]# ll /etc/localtime\nlrwxrwxrwx. 1 root root 35 Dec 28 23:15 /etc/localtime -> ../usr/share/zoneinfo/Asia/Shanghai\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b\u5f53\u524d\u65f6\u95f4/\u65e5\u671f/\u65f6\u533a\uff1atimedatectl \u6216\u8005 timedatectl status"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b\u6240\u6709\u53ef\u7528\u65f6\u533a\uff1atimedatectl list-timezones"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u65f6\u533a\uff1atimedatectl set-timezone \u201c\u65f6\u533a\u4fe1\u606f\u201d"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e UTC\uff1atimedatectl set-timezone UTC"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u65f6\u95f4\uff1atimedatectl set-time HH:MM:SS"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u65e5\u671f\uff1atimedatectl set-time YYYY-MM-DD"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u65e5\u671f\u65f6\u95f4\uff1atimedatectl set-time \u201cYYYY-MM-DD HH:MM:SS\u201d"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u786c\u4ef6\u65f6\u949f\u4e3a\u672c\u5730\u65f6\u95f4\uff1atimedatectl set-local-rtc 1"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u786c\u4ef6\u65f6\u949f\u4e3a UTC \u65f6\u95f4\uff1atimedatectl set-local-rtc 0"),(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8 NTP \u65f6\u95f4\u540c\u6b65\uff08\u542f\u7528 NTP \u670d\u52a1\u6216\u8005 Chrony \u670d\u52a1\uff09\uff1atimedatectl set-ntp true"),(0,l.kt)("li",{parentName:"ul"},"\u7981\u7528 NTP \u65f6\u95f4\u540c\u6b65\uff1atimedatectl set-ntp false"))),(0,l.kt)("h2",{id:"\u66f4\u6539\u65f6\u533a"},"\u66f4\u6539\u65f6\u533a"),(0,l.kt)("p",null,"\u65f6\u533a\u7684\u547d\u540d\u7ea6\u5b9a\u683c\u5f0f\u4e3a\u201c\u5730\u533a/\u57ce\u5e02\u540d\u201d\u65b9\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7 timedatectl list-timezone \u547d\u4ee4\u67e5\u8be2\u7cfb\u7edf\u4e2d\u6240\u6709\u53ef\u7528\u7684\u65f6\u533a(\u96f6\u65f6\u533a",(0,l.kt)("inlineCode",{parentName:"p"},"UTC"),")"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[root@localhost ~]# timedatectl list-timezones\nAfrica/Abidjan\nAfrica/Accra\nAfrica/Addis_Ababa\nAfrica/Algiers\nAfrica/Asmara\n#....\n")),(0,l.kt)("p",null,"\u786e\u5b9a\u5b8c\u8981\u4fee\u6539\u7684\u65f6\u533a\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u4fee\u6539"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[root@localhost ~]# timedatectl set-timezone Asia/Shanghai\n[root@localhost ~]# timedatectl\n               Local time: Wed 2022-12-28 23:15:54 CST\n           Universal time: Wed 2022-12-28 15:15:54 UTC\n                 RTC time: Wed 2022-12-28 15:15:54\n                Time zone: Asia/Shanghai (CST, +0800)\nSystem clock synchronized: yes\n              NTP service: active\n          RTC in local TZ: no\n[root@localhost ~]# date\nWed Dec 28 23:16:02 CST 2022\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5728 Linux \u64cd\u4f5c\u7cfb\u7edf\u4e2d\u6709\u4e24\u79cd\u65f6\u949f\uff0c\u7b2c\u4e00\u79cd\u662f\u786c\u4ef6\u65f6\u949f\uff0c\u53c8\u79f0\u4e3a RTC, CMOS \u65f6\u949f\u6216 BIOS clock\uff0c\u8fd9\u79cd\u65f6\u949f\u7684\u8fd0\u8f6c\u9760\u7684\u662f\u4e3b\u677f\u4e0a\u7684\u7535\u6c60\uff0c\u6240\u4ee5\u5373\u4f7f\u5173\u673a\u4e86\u4f9d\u7136\u53ef\u4ee5\u8ba1\u65f6\uff1b\u7b2c\u4e8c\u79cd\u662f\u7cfb\u7edf\u65f6\u949f\uff0c\u8be5\u65f6\u949f\u6709\u64cd\u4f5c\u7cfb\u7edf\u7ef4\u62a4\uff0c\u7cfb\u7edf\u542f\u52a8\u65f6\u4f1a\u8bfb\u53d6\u786c\u4ef6\u65f6\u949f\u5e76\u5c06\u5176\u8bbe\u7f6e\u4e3a\u7cfb\u7edf\u65f6\u949f\uff0c\u5373\u4e0e\u786c\u4ef6\u65f6\u949f\u540c\u6b65\u4e00\u6b21\uff1b\u6709\u8da3\u7684\u662f\u5728\u540e\u7eed\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u7cfb\u7edf\u65f6\u949f\u548c\u786c\u4ef6\u65f6\u949f\uff0c\u5e76\u4e0d\u4f1a\u81ea\u52a8\u540c\u6b65\uff0c\u800c\u662f\u4ee5\u5f02\u6b65\u7684\u65b9\u5f0f\u8fd0\u884c\uff0c\u4e92\u4e0d\u5e72\u6270\u3002")),(0,l.kt)("h2",{id:"\u786c\u4ef6\u65f6\u949f"},"\u786c\u4ef6\u65f6\u949f"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 hwcolck \u6216 clock \u547d\u4ee4\u64cd\u4f5c\u786c\u4ef6\u65f6\u949f"),(0,l.kt)("h3",{id:"\u67e5\u770b\u786c\u4ef6\u65f6\u949f"},"\u67e5\u770b\u786c\u4ef6\u65f6\u949f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[root@localhost ~]# hwclock --show\n2022-12-28 23:29:11.369054+08:00\n\n[root@localhost ~]# clock --show\n2022-12-28 23:29:16.494536+08:00\n")),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u786c\u4ef6\u65f6\u949f"},"\u8bbe\u7f6e\u786c\u4ef6\u65f6\u949f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'[root@localhost ~]# hwclock --set --date="2002-08-29 06:30:00"\n[root@localhost ~]# hwclock --show\n2002-08-29 06:30:10.587418+08:00\n')),(0,l.kt)("h2",{id:"\u7cfb\u7edf\u65f6\u949f"},"\u7cfb\u7edf\u65f6\u949f"),(0,l.kt)("h3",{id:"\u67e5\u770b\u7cfb\u7edf\u65f6\u949f"},"\u67e5\u770b\u7cfb\u7edf\u65f6\u949f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[root@localhost ~]# date\nWed Dec 28 23:32:58 CST 2022\n")),(0,l.kt)("h3",{id:"\u4fee\u6539\u7cfb\u7edf\u65f6\u949f"},"\u4fee\u6539\u7cfb\u7edf\u65f6\u949f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'[root@localhost ~]# date -s "2023-01-01 01:00:00"    //\u683c\u5f0f\u4e3a yyyy-MM-dd HH:mm:ss\nSun Jan  1 01:00:00 CST 2023\n[root@localhost ~]# date\nSun Jan  1 01:00:01 CST 2023\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u53ef\u80fd\u4f1a\u9047\u5230\u4fee\u6539\u540e\u65e0\u6548\u7684\u60c5\u51b5\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ef\u80fd\u7684\u539f\u56e0\u662f\u4ece\u4e92\u8054\u7f51\u540c\u6b65\u65f6\u95f4\u7684\u529f\u80fd\u5904\u4e8e\u5f00\u542f\u72b6\u6001\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u5c06\u5176\u5173\u95ed",(0,l.kt)("inlineCode",{parentName:"p"},"timedatectl set-ntp false"))),(0,l.kt)("h2",{id:"\u786c\u4ef6\u65f6\u949f\u4e0e\u7cfb\u7edf\u65f6\u949f\u95f4\u7684\u540c\u6b65"},"\u786c\u4ef6\u65f6\u949f\u4e0e\u7cfb\u7edf\u65f6\u949f\u95f4\u7684\u540c\u6b65"),(0,l.kt)("h3",{id:"\u4ece\u786c\u4ef6\u65f6\u949f\u540c\u6b65\u65f6\u95f4\u81f3\u7cfb\u7edf\u65f6\u949f"},"\u4ece\u786c\u4ef6\u65f6\u949f\u540c\u6b65\u65f6\u95f4\u81f3\u7cfb\u7edf\u65f6\u949f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[root@localhost ~]# hwclock --hctosys\n[root@localhost ~]# date\nWed Dec 28 23:23:19 CST 2022\n\n[root@localhost ~]# clock --hctosys\n[root@localhost ~]# date\nWed Dec 28 23:25:36 CST 2022\n")),(0,l.kt)("h3",{id:"\u4ece\u7cfb\u7edf\u65f6\u949f\u540c\u6b65\u65f6\u95f4\u81f3\u786c\u4ef6\u65f6\u949f"},"\u4ece\u7cfb\u7edf\u65f6\u949f\u540c\u6b65\u65f6\u95f4\u81f3\u786c\u4ef6\u65f6\u949f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[root@localhost ~]# hwclock --systohc\n[root@localhost ~]# date\nSun Jan  1 01:06:37 CST 2023\n\n[root@localhost ~]# clock --systohc\n[root@localhost ~]# date\nSun Jan  1 01:06:48 CST 2023\n")))}d.isMDXComponent=!0}}]);