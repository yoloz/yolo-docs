"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[6998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=i(n),k=r,d=c["".concat(u,".").concat(k)]||c[k]||m[k]||l;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},30831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={},o=void 0,p={unversionedId:"linux/\u914d\u7f6e\u9759\u6001\u5730\u5740",id:"linux/\u914d\u7f6e\u9759\u6001\u5730\u5740",title:"\u914d\u7f6e\u9759\u6001\u5730\u5740",description:"ubuntu",source:"@site/docs/linux/\u914d\u7f6e\u9759\u6001\u5730\u5740.md",sourceDirName:"linux",slug:"/linux/\u914d\u7f6e\u9759\u6001\u5730\u5740",permalink:"/docs/linux/\u914d\u7f6e\u9759\u6001\u5730\u5740",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/linux/\u914d\u7f6e\u9759\u6001\u5730\u5740.md",tags:[],version:"current",lastUpdatedAt:1689650905,formattedLastUpdatedAt:"2023\u5e747\u670818\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u5361\u542f\u505c\u53ca\u914d\u7f6e",permalink:"/docs/linux/\u7f51\u5361\u542f\u505c\u53ca\u914d\u7f6e"},next:{title:"\u4e86\u89e3netty\u5199",permalink:"/docs/netty/\u4e86\u89e3netty\u5199"}},u={},i=[{value:"ubuntu",id:"ubuntu",level:2},{value:"ubuntu 18.04",id:"ubuntu-1804",level:3},{value:"centos",id:"centos",level:2},{value:"\u914d\u7f6e\u9759\u6001\u8def\u7531",id:"\u914d\u7f6e\u9759\u6001\u8def\u7531",level:3},{value:"unknown host error",id:"unknown-host-error",level:2},{value:"\u67e5\u770b DNS",id:"\u67e5\u770b-dns",level:2}],s={toc:i},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ubuntu"},"ubuntu"),(0,r.kt)("p",null,"\u8be5\u65b9\u6cd5 ubuntu 18.04 \u5931\u6548"),(0,r.kt)("p",null,"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("em",{parentName:"p"},"/etc/network/interfaces")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"auto eth0                  #\u8bbe\u7f6e\u81ea\u52a8\u542f\u52a8eth0\u63a5\u53e3\niface eth0 inet static     #\u914d\u7f6e\u9759\u6001IP\naddress 192.168.11.88      #IP\u5730\u5740\nnetmask 255.255.255.0      #\u5b50\u7f51\u63a9\u7801\ngateway 192.168.11.1       #\u9ed8\u8ba4\u7f51\u5173\n")),(0,r.kt)("p",null,"\u91cd\u542f\u7f51\u7edc\uff0c\u4f7f\u914d\u7f6e\u751f\u6548",(0,r.kt)("inlineCode",{parentName:"p"},"$ sudo /etc/init.d/networking restart"),"\n\u67e5\u770b ip \u662f\u5426\u914d\u7f6e\u6210\u529f ",(0,r.kt)("inlineCode",{parentName:"p"},"$ ifconfig")),(0,r.kt)("h3",{id:"ubuntu-1804"},"ubuntu 18.04"),(0,r.kt)("p",null,"\u5728 Ubuntu 18.04 \u4e2d\u5982\u679c\u518d\u901a\u8fc7\u539f\u6765\u7684 ifupdown \u5de5\u5177\u5305\u7ee7\u7eed\u5728 /etc/network/interfaces \u6587\u4ef6\u91cc\u914d\u7f6e\u7ba1\u7406\u7f51\u7edc\u63a5\u53e3\u662f\u65e0\u6548\u7684\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u67e5\u770b\u7f51\u5173\u5730\u5740",(0,r.kt)("inlineCode",{parentName:"li"},"route -n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"user@ubuntu:~$ route -n\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\n0.0.0.0         192.168.1.1     0.0.0.0         UG    100    0        0 enp0s3\n169.254.0.0     0.0.0.0         255.255.0.0     U     1000   0        0 enp0s3\n192.168.1.0     0.0.0.0         255.255.255.0   U     100    0        0 enp0s3\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,r.kt)("a",{parentName:"li",href:"./netplan"},"Netplan"),"\u914d\u7f6e\u9759\u6001 ip")),(0,r.kt)("p",null,"\u4fee\u6539 ",(0,r.kt)("em",{parentName:"p"},"/etc/netplan/50-cloud-init.yaml")," \u6587\u4ef6 \uff0c\u684c\u9762\u7248\u7684\u662f ",(0,r.kt)("em",{parentName:"p"},"/etc/netplan/01-network-manager-all.yaml")," \u4fee\u6539\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"network:\n  ethernets:\n    ens33:\n      addresses: [192.168.36.202/24]\n      gateway4: 192.168.36.1\n      dhcp4: no\n      nameservers:\n        addresses: [114.114.114.114, 180.76.76.76]\n  version: 2\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"ens33 \u662f\u7f51\u5361\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"gateway4 \u914d\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"route -n"),"\u67e5\u770b\u5230\u7684\u7f51\u5173"),(0,r.kt)("li",{parentName:"ul"},"dhcp4 no \u4ee3\u8868\u4e0d\u662f\u7528 dhcp \u52a8\u6001\u83b7\u53d6 ip\uff0cyes \u4ee3\u8868\u4f7f\u7528 dhcp \u52a8\u6001\u83b7\u53d6 ip"),(0,r.kt)("li",{parentName:"ul"},"nameservers dns \u5730\u5740"))),(0,r.kt)("p",null,"\u4f7f\u5f97\u914d\u7f6e\u6587\u4ef6\u751f\u6548",(0,r.kt)("inlineCode",{parentName:"p"},"netplan apply")),(0,r.kt)("h2",{id:"centos"},"centos"),(0,r.kt)("p",null,"\u4fee\u6539 ",(0,r.kt)("em",{parentName:"p"},"/etc/sysconfig/network-scripts/ifcfg-\u7f51\u5361")," \u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"BOOTPROTO=static          #\u9759\u6001ip\nIPADDR=192.168.1.20       #IP\u5730\u5740\nNETMASK=255.255.255.0     #\u5b50\u7f51\u63a9\u7801\nGATEWAY=192.168.1.1       #\u9ed8\u8ba4\u7f51\u5173\nDNS1=192.168.1.1          #DNS\u670d\u52a1\u5668\nONBOOT=yes                #\u662f\u5426\u6fc0\u6d3b\u7f51\u5361\n")),(0,r.kt)("p",null,"\u4f7f\u5f97\u914d\u7f6e\u751f\u6548 ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl restart network"),"(centos7) ",(0,r.kt)("inlineCode",{parentName:"p"},"service network restart"),"(centos6)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u514b\u9686\u51fa\u4e00\u53f0\u65b0\u7684\u865a\u62df\u673a\u9700\u8981\u901a\u8fc7\u865a\u62df\u673a\u7ba1\u7406\u5de5\u5177\u5220\u9664\u65e7\u7684\u7f51\u7edc\u751f\u6210\u65b0\u7684\u7f51\u7edc,\u5426\u5219 mac \u51b2\u7a81\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"yum install \u62a5\u9519 Cannot find a valid baseurl for repo: base/7/x86_64\uff0c\u9700\u8981\u5728\u7f51\u5361\u6587\u4ef6\u4e2d\u6dfb\u52a0 DNS"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"DNS1=114.114.114.114\nDNS2=8.8.8.8\n")),(0,r.kt)("h3",{id:"\u914d\u7f6e\u9759\u6001\u8def\u7531"},"\u914d\u7f6e\u9759\u6001\u8def\u7531"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e34\u65f6\u914d\u7f6e")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ip route add 192.168.100.0/24 via 172.16.16.254 dev eth0"),"\n\u6b64\u65f6\uff0c\u8bbf\u95ee 192.168.100.0/24 \u7f51\u6bb5\uff0c\u5c06\u901a\u8fc7 eth0 \u7f51\u5361\u8f6c\u51fa\uff0c\u4e0b\u4e00\u8df3\u6307\u5411 172.16.16.254\u3002",(0,r.kt)("strong",{parentName:"p"},"\u4e34\u65f6\u6dfb\u52a0\u8def\u7531\u7684\u65b9\u6cd5\u65e0\u9700\u91cd\u542f\u7f51\u5361\uff0c\u7acb\u5373\u751f\u6548\uff0c\u4f46\u662f\u5982\u679c\u5bf9\u7f51\u5361\u8fdb\u884c\u4e86\u91cd\u542f\uff0c\u4e34\u65f6\u8def\u7531\u4f1a\u7acb\u5373\u4e22\u5931")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6c38\u4e45\u914d\u7f6e")),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/network-scripts/"),"\u76ee\u5f55\u4e0b\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"route-eth*"),"\u914d\u7f6e\u6587\u4ef6\uff0c\u5176\u4e2d eth","*","\u4e3a\u5bf9\u5e94\u7684\u7f51\u5361\u7f16\u53f7\uff0c\u5373\u9759\u6001\u8def\u7531\u7684\u51fa\u53e3\u7f51\u5361\uff0c\u8be5\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u8def\u7531\u51fa\u53e3\u4fe1\u606f\uff0c\u5fc5\u987b\u4e0e\u6b64\u6587\u4ef6\u540d\u7f16\u53f7\u4e00\u81f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"#cat /etc/sysconfig/network-scripts/route-eth0\n192.168.101.0/24 via 172.16.16.254 dev eth0\n192.168.102.0/24 via 172.16.16.254 dev eth0\n192.168.103.0/24 via 172.16.16.254 dev eth0\n\n#\u67e5\u770b\u8def\u7531\u4fe1\u606f\n[root@server]# route -n\nKernel IP routing table\nDestination      Gateway          Genmask        Flags     Metric     Ref    Use Iface\n0.0.0.0         192.168.3.254     0.0.0.0        UG\u3000\u3000     100\u3000\u3000\u3000\u3000\u30000      0\u3000\u3000eth1\n172.16.0.0      0.0.0.0           255.255.0.0    U\u3000\u3000      100\u3000\u3000\u3000\u3000\u30000      0\u3000\u3000eth0\n192.168.3.0     0.0.0.0           255.255.255.0  U\u3000\u3000      100\u3000\u3000\u3000\u3000\u30000      0\u3000\u3000eth1\n192.168.101.0   172.16.16.254\u3000\u3000\u3000255.255.255.0  UG\u3000\u3000     100\u3000\u3000\u3000\u3000\u30000      0\u3000\u3000eth0\n192.168.102.0   172.16.16.254\u3000\u3000\u3000255.255.255.0  UG \u3000\u3000    100\u3000\u3000\u3000\u3000\u30000      0\u3000\u3000eth0\n192.168.103.0   172.16.16.254\u3000\u3000\u3000255.255.255.0  UG\u3000\u3000     100\u3000\u3000\u3000\u3000\u30000      0\u3000\u3000eth0\n")),(0,r.kt)("h2",{id:"unknown-host-error"},"unknown host error"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u786e\u5b9a\u8bbe\u7f6e\u4e86\u57df\u540d\u670d\u52a1\u5668(dns) ",(0,r.kt)("em",{parentName:"li"},"cat /etc/resolv.conf"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nameserver 119.29.29.29\xa0\xa0\nnameserver 182.254.116.116\xa0\xa0\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Public DNS+(\u9996\u9009\uff1a119.29.29.29 \u5907\u9009\uff1a182.254.116.116)"),(0,r.kt)("p",{parentName:"blockquote"},"114DNS(\u9996\u9009\uff1a114.114.114.114 \u5907\u9009\uff1a114.114.114.115)"),(0,r.kt)("p",{parentName:"blockquote"},"ubuntu \u53ef\u80fd\u4fee\u6539\u6b64\u6587\u4ef6\u65e0\u6548,\u8be6\u60c5\u89c1\u4e0b\u6587\uff1b"),(0,r.kt)("p",{parentName:"blockquote"},"\u914d\u7f6e\u597d\u4fdd\u5b58\u5373\u751f\u6548,\u65e0\u9700\u91cd\u542f\u7f51\u7edc\uff1b")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u786e\u4fdd\u8def\u7531\u8868\u6b63\u5e38")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@CentOS5 ~]# netstat -rn\xa0\xa0\nKernel IP routing table\xa0\xa0\nDestination\xa0\xa0\xa0\xa0\xa0Gateway\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Genmask\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Flags\xa0\xa0\xa0MSS Window\xa0\xa0irtt Iface\xa0\xa0\n192.168.128.0\xa0\xa0\xa00.0.0.0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0255.255.255.0\xa0\xa0\xa0U\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa00 0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa00 eth0\xa0\xa0\n169.254.0.0\xa0\xa0\xa0\xa0\xa00.0.0.0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0255.255.0.0\xa0\xa0\xa0\xa0\xa0U\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa00 0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa00 eth0\xa0\xa0\n0.0.0.0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0192.168.128.2\xa0\xa0\xa00.0.0.0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0UG\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa00 0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa00 eth0\xa0\n")),(0,r.kt)("p",null,"\u5982\u679c\u672a\u8bbe\u7f6e, \u5219\u589e\u52a0\u7f51\u5173",(0,r.kt)("inlineCode",{parentName:"p"},"route add default gw 192.168.128.2")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5bf9\u4e8e unknown host \u95ee\u9898\uff0c\u9664\u4e86\u4e0a\u8ff0\u65b9\u5f0f\uff0c\u6700\u7b80\u5355\u7684\u662f\u67e5\u8be2\u51fa\u5730\u5740\u5bf9\u5e94\u7684 ip\uff0c\u6dfb\u52a0\u8fdb hosts \u6587\u4ef6\u5373\u53ef")),(0,r.kt)("h2",{id:"\u67e5\u770b-dns"},"\u67e5\u770b DNS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"cat /etc/resolv.conf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 nslookup"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#nslookup www.baidu.com\n\nServer:     127.0.0.53\nAddress:    127.0.0.53#53\n#\u4e0a\u8ff0\u5730\u5740\u5373\u4e3aDNS\u670d\u52a1\u5668IP\n\nNon-authoritative answer:\nwww.baidu.com   canonical name = www.a.shifen.com.\nName:   www.a.shifen.com\nAddress: 180.101.49.12\nName:   www.a.shifen.com\nAddress: 180.101.49.11\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 dig")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#dig |grep SERVER\n;; SERVER: 127.0.0.53#53(127.0.0.53)\n")))}m.isMDXComponent=!0}}]);