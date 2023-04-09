"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[6998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"linux/\u914d\u7f6e\u9759\u6001\u5730\u5740",id:"linux/\u914d\u7f6e\u9759\u6001\u5730\u5740",title:"\u914d\u7f6e\u9759\u6001\u5730\u5740",description:"ubuntu",source:"@site/docs/linux/\u914d\u7f6e\u9759\u6001\u5730\u5740.md",sourceDirName:"linux",slug:"/linux/\u914d\u7f6e\u9759\u6001\u5730\u5740",permalink:"/docs/linux/\u914d\u7f6e\u9759\u6001\u5730\u5740",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/linux/\u914d\u7f6e\u9759\u6001\u5730\u5740.md",tags:[],version:"current",lastUpdatedAt:1681052426,formattedLastUpdatedAt:"2023\u5e744\u67089\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u5361\u542f\u505c\u53ca\u914d\u7f6e",permalink:"/docs/linux/\u7f51\u5361\u542f\u505c\u53ca\u914d\u7f6e"},next:{title:"linux\u5185\u6838\u63a5\u6536\u7f51\u7edc\u5305",permalink:"/docs/network/linux\u5185\u6838\u63a5\u6536\u7f51\u7edc\u5305"}},p={},u=[{value:"ubuntu",id:"ubuntu",level:2},{value:"ubuntu 18.04",id:"ubuntu-1804",level:3},{value:"centos",id:"centos",level:2},{value:"\u914d\u7f6e\u9759\u6001\u8def\u7531",id:"\u914d\u7f6e\u9759\u6001\u8def\u7531",level:3}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ubuntu"},"ubuntu"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5 ubuntu 18.04 \u5931\u6548"),(0,a.kt)("p",null,"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("em",{parentName:"p"},"/etc/network/interfaces")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"auto eth0                  #\u8bbe\u7f6e\u81ea\u52a8\u542f\u52a8eth0\u63a5\u53e3\niface eth0 inet static     #\u914d\u7f6e\u9759\u6001IP\naddress 192.168.11.88      #IP\u5730\u5740\nnetmask 255.255.255.0      #\u5b50\u7f51\u63a9\u7801\ngateway 192.168.11.1       #\u9ed8\u8ba4\u7f51\u5173\n")),(0,a.kt)("p",null,"\u91cd\u542f\u7f51\u7edc\uff0c\u4f7f\u914d\u7f6e\u751f\u6548",(0,a.kt)("inlineCode",{parentName:"p"},"$ sudo /etc/init.d/networking restart"),"\n\u67e5\u770b ip \u662f\u5426\u914d\u7f6e\u6210\u529f ",(0,a.kt)("inlineCode",{parentName:"p"},"$ ifconfig")),(0,a.kt)("h3",{id:"ubuntu-1804"},"ubuntu 18.04"),(0,a.kt)("p",null,"\u5728 Ubuntu 18.04 \u4e2d\u5982\u679c\u518d\u901a\u8fc7\u539f\u6765\u7684 ifupdown \u5de5\u5177\u5305\u7ee7\u7eed\u5728 /etc/network/interfaces \u6587\u4ef6\u91cc\u914d\u7f6e\u7ba1\u7406\u7f51\u7edc\u63a5\u53e3\u662f\u65e0\u6548\u7684\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u67e5\u770b\u7f51\u5173\u5730\u5740",(0,a.kt)("inlineCode",{parentName:"li"},"route -n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"user@ubuntu:~$ route -n\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\n0.0.0.0         192.168.1.1     0.0.0.0         UG    100    0        0 enp0s3\n169.254.0.0     0.0.0.0         255.255.0.0     U     1000   0        0 enp0s3\n192.168.1.0     0.0.0.0         255.255.255.0   U     100    0        0 enp0s3\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,a.kt)("a",{parentName:"li",href:"./netplan"},"Netplan"),"\u914d\u7f6e\u9759\u6001 ip")),(0,a.kt)("p",null,"\u4fee\u6539 ",(0,a.kt)("em",{parentName:"p"},"/etc/netplan/50-cloud-init.yaml")," \u6587\u4ef6 \uff0c\u684c\u9762\u7248\u7684\u662f ",(0,a.kt)("em",{parentName:"p"},"/etc/netplan/01-network-manager-all.yaml")," \u4fee\u6539\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"network:\n  ethernets:\n    ens33:\n      addresses: [192.168.36.202/24]\n      gateway4: 192.168.36.1\n      dhcp4: no\n      nameservers:\n        addresses: [114.114.114.114, 180.76.76.76]\n  version: 2\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"ens33 \u662f\u7f51\u5361\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},"gateway4 \u914d\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"route -n"),"\u67e5\u770b\u5230\u7684\u7f51\u5173"),(0,a.kt)("li",{parentName:"ul"},"dhcp4 no \u4ee3\u8868\u4e0d\u662f\u7528 dhcp \u52a8\u6001\u83b7\u53d6 ip\uff0cyes \u4ee3\u8868\u4f7f\u7528 dhcp \u52a8\u6001\u83b7\u53d6 ip"),(0,a.kt)("li",{parentName:"ul"},"nameservers dns \u5730\u5740"))),(0,a.kt)("p",null,"\u4f7f\u5f97\u914d\u7f6e\u6587\u4ef6\u751f\u6548",(0,a.kt)("inlineCode",{parentName:"p"},"netplan apply")),(0,a.kt)("h2",{id:"centos"},"centos"),(0,a.kt)("p",null,"\u4fee\u6539 ",(0,a.kt)("em",{parentName:"p"},"/etc/sysconfig/network-scripts/ifcfg-\u7f51\u5361")," \u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"BOOTPROTO=static          #\u9759\u6001ip\nIPADDR=192.168.1.20       #IP\u5730\u5740\nNETMASK=255.255.255.0     #\u5b50\u7f51\u63a9\u7801\nGATEWAY=192.168.1.1       #\u9ed8\u8ba4\u7f51\u5173\nDNS1=192.168.1.1          #DNS\u670d\u52a1\u5668\nONBOOT=yes                #\u662f\u5426\u6fc0\u6d3b\u7f51\u5361\n")),(0,a.kt)("p",null,"\u4f7f\u5f97\u914d\u7f6e\u751f\u6548 ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl restart network"),"(centos7) ",(0,a.kt)("inlineCode",{parentName:"p"},"service network restart"),"(centos6)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u514b\u9686\u51fa\u4e00\u53f0\u65b0\u7684\u865a\u62df\u673a\u9700\u8981\u901a\u8fc7\u865a\u62df\u673a\u7ba1\u7406\u5de5\u5177\u5220\u9664\u65e7\u7684\u7f51\u7edc\u751f\u6210\u65b0\u7684\u7f51\u7edc,\u5426\u5219 mac \u51b2\u7a81\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"yum install \u62a5\u9519 Cannot find a valid baseurl for repo: base/7/x86_64\uff0c\u9700\u8981\u5728\u7f51\u5361\u6587\u4ef6\u4e2d\u6dfb\u52a0 DNS"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"DNS1=114.114.114.114\nDNS2=8.8.8.8\n")),(0,a.kt)("h3",{id:"\u914d\u7f6e\u9759\u6001\u8def\u7531"},"\u914d\u7f6e\u9759\u6001\u8def\u7531"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e34\u65f6\u914d\u7f6e")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ip route add 192.168.100.0/24 via 172.16.16.254 dev eth0"),"\n\u6b64\u65f6\uff0c\u8bbf\u95ee 192.168.100.0/24 \u7f51\u6bb5\uff0c\u5c06\u901a\u8fc7 eth0 \u7f51\u5361\u8f6c\u51fa\uff0c\u4e0b\u4e00\u8df3\u6307\u5411 172.16.16.254\u3002",(0,a.kt)("strong",{parentName:"p"},"\u4e34\u65f6\u6dfb\u52a0\u8def\u7531\u7684\u65b9\u6cd5\u65e0\u9700\u91cd\u542f\u7f51\u5361\uff0c\u7acb\u5373\u751f\u6548\uff0c\u4f46\u662f\u5982\u679c\u5bf9\u7f51\u5361\u8fdb\u884c\u4e86\u91cd\u542f\uff0c\u4e34\u65f6\u8def\u7531\u4f1a\u7acb\u5373\u4e22\u5931")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6c38\u4e45\u914d\u7f6e")),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/network-scripts/"),"\u76ee\u5f55\u4e0b\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"route-eth*"),"\u914d\u7f6e\u6587\u4ef6\uff0c\u5176\u4e2d eth","*","\u4e3a\u5bf9\u5e94\u7684\u7f51\u5361\u7f16\u53f7\uff0c\u5373\u9759\u6001\u8def\u7531\u7684\u51fa\u53e3\u7f51\u5361\uff0c\u8be5\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u8def\u7531\u51fa\u53e3\u4fe1\u606f\uff0c\u5fc5\u987b\u4e0e\u6b64\u6587\u4ef6\u540d\u7f16\u53f7\u4e00\u81f4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"#cat /etc/sysconfig/network-scripts/route-eth0\n192.168.101.0/24 via 172.16.16.254 dev eth0\n192.168.102.0/24 via 172.16.16.254 dev eth0\n192.168.103.0/24 via 172.16.16.254 dev eth0\n\n#\u67e5\u770b\u8def\u7531\u4fe1\u606f\n[root@server]# route -n\nKernel IP routing table\nDestination      Gateway          Genmask        Flags     Metric     Ref    Use Iface\n0.0.0.0         192.168.3.254     0.0.0.0        UG\u3000\u3000     100\u3000\u3000\u3000\u3000\u30000      0\u3000\u3000eth1\n172.16.0.0      0.0.0.0           255.255.0.0    U\u3000\u3000      100\u3000\u3000\u3000\u3000\u30000      0\u3000\u3000eth0\n192.168.3.0     0.0.0.0           255.255.255.0  U\u3000\u3000      100\u3000\u3000\u3000\u3000\u30000      0\u3000\u3000eth1\n192.168.101.0   172.16.16.254\u3000\u3000\u3000255.255.255.0  UG\u3000\u3000     100\u3000\u3000\u3000\u3000\u30000      0\u3000\u3000eth0\n192.168.102.0   172.16.16.254\u3000\u3000\u3000255.255.255.0  UG \u3000\u3000    100\u3000\u3000\u3000\u3000\u30000      0\u3000\u3000eth0\n192.168.103.0   172.16.16.254\u3000\u3000\u3000255.255.255.0  UG\u3000\u3000     100\u3000\u3000\u3000\u3000\u30000      0\u3000\u3000eth0\n")))}c.isMDXComponent=!0}}]);