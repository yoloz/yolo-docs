"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[6631],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,l=e.originalType,c=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=p,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(k,o(o({ref:t},i),{},{components:r})):n.createElement(k,o({ref:t},i))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var l=r.length,o=new Array(l);o[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:p,o[1]=a;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2846:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var n=r(7462),p=(r(7294),r(3905));const l={},o=void 0,a={unversionedId:"tools/tcpdump\u4f7f\u7528",id:"tools/tcpdump\u4f7f\u7528",title:"tcpdump\u4f7f\u7528",description:"tcpdump \\[option\\] \\[proto\\] \\[dir\\] \\[type\\]",source:"@site/docs/tools/tcpdump\u4f7f\u7528.md",sourceDirName:"tools",slug:"/tools/tcpdump\u4f7f\u7528",permalink:"/docs/tools/tcpdump\u4f7f\u7528",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/tools/tcpdump\u4f7f\u7528.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"svn\u5e38\u7528\u64cd\u4f5c",permalink:"/docs/tools/svn\u5e38\u7528\u64cd\u4f5c"},next:{title:"vim\u4f7f\u7528",permalink:"/docs/tools/vim\u4f7f\u7528"}},c={},u=[{value:"\u8f93\u51fa\u5185\u5bb9\u7ed3\u6784",id:"\u8f93\u51fa\u5185\u5bb9\u7ed3\u6784",level:2},{value:"Flags \u6807\u8bc6\u7b26",id:"flags-\u6807\u8bc6\u7b26",level:3},{value:"\u57fa\u4e8e IP \u5730\u5740\u8fc7\u6ee4",id:"\u57fa\u4e8e-ip-\u5730\u5740\u8fc7\u6ee4",level:2},{value:"\u57fa\u4e8e\u7f51\u6bb5\u8fdb\u884c\u8fc7\u6ee4",id:"\u57fa\u4e8e\u7f51\u6bb5\u8fdb\u884c\u8fc7\u6ee4",level:2},{value:"\u57fa\u4e8e\u7aef\u53e3\u8fdb\u884c\u8fc7\u6ee4",id:"\u57fa\u4e8e\u7aef\u53e3\u8fdb\u884c\u8fc7\u6ee4",level:2},{value:"\u8fc7\u6ee4\u7ed3\u679c\u8f93\u51fa\u5230\u6587\u4ef6",id:"\u8fc7\u6ee4\u7ed3\u679c\u8f93\u51fa\u5230\u6587\u4ef6",level:2},{value:"\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u5305\u6570\u636e",id:"\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u5305\u6570\u636e",level:2}],i={toc:u};function s(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"tcpdump ","[","option","]"," ","[","proto","]"," ","[","dir","]"," ","[","type","]"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"option \u53ef\u9009\u53c2\u6570;"),(0,p.kt)("li",{parentName:"ul"},"proto \u7c7b\u8fc7\u6ee4\u5668\uff1a\u6839\u636e\u534f\u8bae\u8fdb\u884c\u8fc7\u6ee4\uff0c\u53ef\u8bc6\u522b\u7684\u5173\u952e\u8bcd\u6709\uff1a tcp, udp, icmp, ip, ip6, arp, rarp,ether,wlan, fddi, tr, decnet"),(0,p.kt)("li",{parentName:"ul"},"direction \u7c7b\u8fc7\u6ee4\u5668\uff1a\u6839\u636e\u6570\u636e\u6d41\u5411\u8fdb\u884c\u8fc7\u6ee4\uff0c\u53ef\u8bc6\u522b\u7684\u5173\u952e\u5b57\u6709\uff1asrc, dst\uff0c\u540c\u65f6\u4f60\u53ef\u4ee5\u4f7f\u7528\u903b\u8f91\u8fd0\u7b97\u7b26\u8fdb\u884c\u7ec4\u5408\uff0c\u6bd4\u5982 src or dst"),(0,p.kt)("li",{parentName:"ul"},"type \u7c7b\u8fc7\u6ee4\u5668\uff1a\u53ef\u8bc6\u522b\u7684\u5173\u952e\u8bcd\u6709\uff1ahost, net, port, portrange\uff0c\u8fd9\u4e9b\u8bcd\u540e\u8fb9\u9700\u8981\u518d\u63a5\u53c2\u6570")),(0,p.kt)("h2",{id:"\u8f93\u51fa\u5185\u5bb9\u7ed3\u6784"},"\u8f93\u51fa\u5185\u5bb9\u7ed3\u6784"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-log"},"21:26:49.013621 IP 172.20.20.1.15605 > 172.20.20.2.5920: Flags [P.], seq 49:97, ack 106048, win 4723, length 48\n")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u5217\uff1a\u65f6\u5206\u79d2\u6beb\u79d2 21:26:49.013621"),(0,p.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u5217\uff1a\u7f51\u7edc\u534f\u8bae IP"),(0,p.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u5217\uff1a\u53d1\u9001\u65b9\u7684 ip \u5730\u5740+\u7aef\u53e3\u53f7\uff0c\u5176\u4e2d 172.20.20.1 \u662f ip\uff0c\u800c 15605 \u662f\u7aef\u53e3\u53f7"),(0,p.kt)("li",{parentName:"ul"},"\u7b2c\u56db\u5217\uff1a\u7bad\u5934 >\uff0c \u8868\u793a\u6570\u636e\u6d41\u5411"),(0,p.kt)("li",{parentName:"ul"},"\u7b2c\u4e94\u5217\uff1a\u63a5\u6536\u65b9\u7684 ip \u5730\u5740+\u7aef\u53e3\u53f7\uff0c\u5176\u4e2d 172.20.20.2 \u662f ip\uff0c\u800c 5920 \u662f\u7aef\u53e3\u53f7"),(0,p.kt)("li",{parentName:"ul"},"\u7b2c\u516d\u5217\uff1a\u5192\u53f7"),(0,p.kt)("li",{parentName:"ul"},"\u7b2c\u4e03\u5217\uff1a\u6570\u636e\u5305\u5185\u5bb9\uff0c\u5305\u62ec Flags \u6807\u8bc6\u7b26\uff0cseq \u53f7\uff0cack \u53f7\uff0cwin \u7a97\u53e3\uff0c\u6570\u636e\u957f\u5ea6 length\uff0c\u5176\u4e2d ","[P.]"," \u8868\u793a PUSH \u6807\u5fd7\u4f4d\u4e3a 1\uff0c\u66f4\u591a\u6807\u8bc6\u7b26\u89c1\u4e0b\u9762")),(0,p.kt)("h3",{id:"flags-\u6807\u8bc6\u7b26"},"Flags \u6807\u8bc6\u7b26"),(0,p.kt)("p",null,"\u4f7f\u7528 tcpdump \u6293\u5305\u540e\uff0c\u4f1a\u9047\u5230\u7684 TCP \u62a5\u6587 Flags\uff0c\u6709\u4ee5\u4e0b\u51e0\u79cd\uff1a"),(0,p.kt)("p",null,"[","S","]"," : SYN\uff08\u5f00\u59cb\u8fde\u63a5\uff09\n","[","P","]"," : PSH\uff08\u63a8\u9001\u6570\u636e\uff09\n","[","F","]"," : FIN \uff08\u7ed3\u675f\u8fde\u63a5\uff09\n","[","R","]"," : RST\uff08\u91cd\u7f6e\u8fde\u63a5\uff09\n","[",".","]"," : \u6ca1\u6709 Flag \uff08\u610f\u601d\u662f\u9664\u4e0a\u9762\u56db\u79cd\u7c7b\u578b\u5916\u7684\u5176\u4ed6\u60c5\u51b5\uff0c\u6709\u53ef\u80fd\u662f ACK \u4e5f\u6709\u53ef\u80fd\u662f URG\uff09"),(0,p.kt)("h2",{id:"\u57fa\u4e8e-ip-\u5730\u5740\u8fc7\u6ee4"},"\u57fa\u4e8e IP \u5730\u5740\u8fc7\u6ee4"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"tcpdump host 192.168.10.100\ntcpdump src host 192.168.10.100\ntcpdump tcp src host 192.168.10.100\n")),(0,p.kt)("h2",{id:"\u57fa\u4e8e\u7f51\u6bb5\u8fdb\u884c\u8fc7\u6ee4"},"\u57fa\u4e8e\u7f51\u6bb5\u8fdb\u884c\u8fc7\u6ee4"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"tcpdump net 192.168.10.0/24\ntcpdump dst net 192.168\n")),(0,p.kt)("h2",{id:"\u57fa\u4e8e\u7aef\u53e3\u8fdb\u884c\u8fc7\u6ee4"},"\u57fa\u4e8e\u7aef\u53e3\u8fdb\u884c\u8fc7\u6ee4"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"tcpdump port 8088\ntcpdump src port 8088\ntcpdump port 80 or port 8088 #\u7b80\u5199 tcpdump port 80 or 8088\n#\u6293\u53d6\u4e00\u4e2a\u8303\u56f4\ntcpdump portrange 8000-8080\ntcpdump src portrange 8000-8080\n#\u5bf9\u4e8e\u4e00\u4e9b\u5e38\u89c1\u534f\u8bae\u7684\u9ed8\u8ba4\u7aef\u53e3\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u534f\u8bae\u540d\uff0c\u800c\u4e0d\u7528\u5177\u4f53\u7684\u7aef\u53e3\u53f7\n# http 80\uff0chttps 443\ntcpdump tcp port http\n")),(0,p.kt)("h2",{id:"\u8fc7\u6ee4\u7ed3\u679c\u8f93\u51fa\u5230\u6587\u4ef6"},"\u8fc7\u6ee4\u7ed3\u679c\u8f93\u51fa\u5230\u6587\u4ef6"),(0,p.kt)("p",null,"\u4f7f\u7528 tcpdump \u5de5\u5177\u6293\u5230\u5305\u540e\uff0c\u5f80\u5f80\u9700\u8981\u518d\u501f\u52a9\u5176\u4ed6\u7684\u5de5\u5177\u8fdb\u884c\u5206\u6790\uff0c\u6bd4\u5982\u5e38\u89c1\u7684 wireshark"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"tcpdump port 8088  -w  test.pcap\n")),(0,p.kt)("h2",{id:"\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u5305\u6570\u636e"},"\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u5305\u6570\u636e"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"tcpdump port 8088  -r  test.pcap\n")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/111testing/p/13620931.html"},"\u66f4\u591a\u4fe1\u606f")))}s.isMDXComponent=!0}}]);