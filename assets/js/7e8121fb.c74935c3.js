"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[6255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),s=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?l.createElement(k,i(i({ref:t},u),{},{components:n})):l.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var l=n(87462),r=(n(67294),n(3905));const a={},i=void 0,o={unversionedId:"linux/\u670d\u52a1\u81ea\u542f\u52a8\u914d\u7f6e",id:"linux/\u670d\u52a1\u81ea\u542f\u52a8\u914d\u7f6e",title:"\u670d\u52a1\u81ea\u542f\u52a8\u914d\u7f6e",description:"- /etc/rc.local\u662f \xa0Sysvinit\u6280\u672f\u7528\u4e8e\u7cfb\u7edf\u7684init\u8fdb\u7a0b\u5728\u542f\u52a8\u8fc7\u7a0b\u4e2d\u6700\u540e\u6267\u884c\u7684\u4efb\u52a1,\u6b64\u65f6\u53ea\u9700\u8981\u5c06\u81ea\u542f\u52a8\u547d\u4ee4\u5199\u5165\u6587\u4ef6\u4e2d\u5373\u53ef(centos\u3001ubuntu \u8f83\u65e9\u7248\u672c)\uff1b",source:"@site/docs/linux/\u670d\u52a1\u81ea\u542f\u52a8\u914d\u7f6e.md",sourceDirName:"linux",slug:"/linux/\u670d\u52a1\u81ea\u542f\u52a8\u914d\u7f6e",permalink:"/docs/linux/\u670d\u52a1\u81ea\u542f\u52a8\u914d\u7f6e",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/linux/\u670d\u52a1\u81ea\u542f\u52a8\u914d\u7f6e.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u538b\u7f29\u6587\u4ef6\u5206\u5272",permalink:"/docs/linux/\u538b\u7f29\u6587\u4ef6\u5206\u5272"},next:{title:"\u6e90\u7801\u5b89\u88c5redis",permalink:"/docs/linux/\u6e90\u7801\u5b89\u88c5redis"}},c={},s=[{value:"\u4f7f\u7528 systemd \u670d\u52a1",id:"\u4f7f\u7528-systemd-\u670d\u52a1",level:2},{value:"rc-local.service",id:"rc-localservice",level:3},{value:"chkconfig",id:"chkconfig",level:2},{value:"redis \u81ea\u542f\u52a8",id:"redis-\u81ea\u542f\u52a8",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/rc.local"),"\u662f \xa0",(0,r.kt)("inlineCode",{parentName:"li"},"Sysvinit"),"\u6280\u672f\u7528\u4e8e\u7cfb\u7edf\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"init"),"\u8fdb\u7a0b\u5728\u542f\u52a8\u8fc7\u7a0b\u4e2d\u6700\u540e\u6267\u884c\u7684\u4efb\u52a1,\u6b64\u65f6\u53ea\u9700\u8981\u5c06\u81ea\u542f\u52a8\u547d\u4ee4\u5199\u5165\u6587\u4ef6\u4e2d\u5373\u53ef(centos\u3001ubuntu \u8f83\u65e9\u7248\u672c)\uff1b"),(0,r.kt)("li",{parentName:"ul"},"centos\u3001ubuntu \u4e4b\u540e\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"Systemd"),"\u6280\u672f\u542f\u52a8\uff0c\u5f00\u673a\u4e0d\u4f1a\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"li"},"init"),"\u8fdb\u7a0b\uff0c\u4e3a\u4e86\u517c\u5bb9\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u4e00\u4e2a\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"rc-local"),"\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"systemd"),"\u670d\u52a1\uff0c\u8d1f\u8d23\u7cfb\u7edf\u542f\u52a8\u540e\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/rc.local"),"(ubuntu),",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/rc.d/rc.local"),"(openeuler,kylin \u7b49 centos)\u4e2d\u7684\u547d\u4ee4\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/init.d"),"\uff1a\u76ee\u5f55\u5b58\u653e\u5f00\u673a\u521d\u59cb\u5316\u542f\u52a8\u811a\u672c\uff0c\u5c06\u811a\u672c\u653e\u5165\u5982\uff1a\u7f51\u7edc\uff0c\u73af\u5883\u53d8\u91cf\u7b49"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/fstab"),"\uff1a\u7cfb\u7edf\u521d\u59cb\u5316\u540e\uff0c\u7a0b\u5e8f\u542f\u52a8\u524d\u52a0\u8f7d\uff0c\u5982\u78c1\u76d8\u6302\u8f7d\uff0cmount \u547d\u4ee4\u7b49"))),(0,r.kt)("h2",{id:"\u4f7f\u7528-systemd-\u670d\u52a1"},"\u4f7f\u7528 systemd \u670d\u52a1"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"systemd"),"\u9ed8\u8ba4\u8bfb\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system"),"\u4e0b\u7684\u6587\u4ef6,\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system")," \u4e0b\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"custom_auto_start.service"),"\u6587\u4ef6\uff0c\u5c06\u6267\u884c\u811a\u672c\u8bbe\u7f6e\u6210\u7cfb\u7edf\u670d\u52a1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"[Unit]\nDescription=The app auto run when reboot\nAfter=default.target\n\n[Service]\nExecStart=/xxxx/auto_start.sh\n\n[Install]\nWantedBy=default.target\n")),(0,r.kt)("p",null,"\u4e00\u822c\u6b63\u5e38\u7684\u542f\u52a8\u6587\u4ef6\u4e3b\u8981\u5206\u6210\u4e09\u90e8\u5206\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unit \u6bb5: \u542f\u52a8\u987a\u5e8f\u4e0e\u4f9d\u8d56\u5173\u7cfb"),(0,r.kt)("li",{parentName:"ul"},"Service \u6bb5: \u542f\u52a8\u884c\u4e3a,\u5982\u4f55\u542f\u52a8\uff0c\u542f\u52a8\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"Install \u6bb5: \u5b9a\u4e49\u5982\u4f55\u5b89\u88c5\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\uff0c\u5373\u600e\u6837\u505a\u5230\u5f00\u673a\u542f\u52a8")),(0,r.kt)("p",null,"\u91cd\u542f systemd \u670d\u52a1\u3001\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f\u52a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u91cd\u8f7d\u7cfb\u7edf\u670d\u52a1\n[root@localhost ~]# systemctl daemon-reload\n[root@localhost ~]# systemctl enable auto_start.service\n[root@localhost ~]# reboot\n")),(0,r.kt)("p",null,"\u4e0b\u6587\u4e3b\u8981\u8bf4\u660e",(0,r.kt)("inlineCode",{parentName:"p"},"rc.local"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"systemd"),"\u670d\u52a1\u914d\u7f6e\uff1a"),(0,r.kt)("h3",{id:"rc-localservice"},"rc-local.service"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It is highly advisable to create own systemd services or udev rules to run scripts during boot instead of using rc-local.servie.")),(0,r.kt)("p",null,"\u4f8b\u5b50\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'function auto_app() {\n\n  Install_unit=$(grep -o \'Install\' $1)\n\n  if [[ -z "$Install_unit" ]]; then\n    echo "" | sudo tee -a $1\n    echo "[Install]" | sudo tee -a $1\n    echo "WantedBy=multi-user.target" | sudo tee -a $1\n    echo "Alias=rc-local.service" | sudo tee -a $1\n  fi\n\n  sudo -s <<EOF\n\n  sed -i \'/redis_6379 start/d\' $2\n  sed -i \'/mysqld start/d\' $2\n  sed -i \'/nm_start.sh -d/d\' $2\n  sed -i \'/ui_start.sh -d/d\' $2\n  sed -i \'/exit 0/d\' $2\n\n  echo "/etc/init.d/redis_6379 start" >>$2\n  echo "/etc/init.d/mysqld start" >>$2\n  echo "sh /opt/${username}/dsg-ui/bin/nm_start.sh -d >/dev/null" >>$2\n  echo "sh /opt/${username}/dsg-ui/bin/ui_start.sh -d >/dev/null" >>$2\n  echo "exit 0" >>$2\n\n  chmod +x $2\n  systemctl disable rc-local\n  systemctl enable rc-local\n  systemctl restart rc-local.service\n\nEOF\n}\n\nif [[ ! -f /etc/rc.local && $a =~ "ubuntu" ]]; then\n  echo "#!/bin/sh -e" | sudo tee -a /etc/rc.local\nfi\n\nif [[ $a =~ "ubuntu 18.04" ]]; then\n  localpath="/lib/systemd/system/rc-local.service"\nfi\n\nif [[ $a =~ "ubuntu 22.04" || $a =~ "openeuler" || $a =~ "kylin" ]]; then\n  localpath="/usr/lib/systemd/system/rc-local.service"\nfi\n\nif [[ $a =~ "ubuntu" ]]; then\n  rcfile="/etc/rc.local"\nfi\n\nif [[ $a =~ "openeuler" || $a =~ "kylin" ]]; then\n  rcfile="/etc/rc.d/rc.local"\nfi\n\nauto_app ${localpath} ${rcfile}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"openeuler,kylin(centos)\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/rc.d/rc.local"),"\u5982\u679c\u6ca1\u6709\u53ef\u6267\u884c\u6743\u9650\u5219\u6dfb\u52a0\u6267\u884c\u6743\u9650;"),(0,r.kt)("li",{parentName:"ul"},"ubuntu 18.04\u300122.04 \u9ed8\u8ba4\u6ca1\u6709",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/rc.local"),"\u8fd9\u4e2a\u6587\u4ef6\uff0c\u9700\u8981\u624b\u52a8\u521b\u5efa\u5e76\u6dfb\u52a0\u53ef\u6267\u884c\u6743\u9650;"),(0,r.kt)("li",{parentName:"ul"},"\u786e\u8ba4",(0,r.kt)("inlineCode",{parentName:"li"},"/lib/systemd/system/rc-local.service"),"(ubuntu18.04),",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/lib/systemd/system/rc-local.service"),"(ubuntu22.04,openeuler,kylin)\uff0c\u6587\u4ef6\u662f\u5426\u9700\u8981\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"li"},"[Install]"),"\uff0c\u9ed8\u8ba4\u53ea\u6709",(0,r.kt)("inlineCode",{parentName:"li"},"[Unit],[Service]"),"."))),(0,r.kt)("h2",{id:"chkconfig"},"chkconfig"),(0,r.kt)("p",null,"\u5728 CentOS \u4e2d\u4e13\u95e8\u63d0\u4f9b\u4e86 chkconfig \u547d\u4ee4\u6765\u8bbe\u7f6e\u6216\u8005\u53d6\u6d88\u5f00\u673a\u81ea\u542f\u52a8\u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chkconfig --list                 #\u5f53\u524d\u7cfb\u7edf\u5df2\u7ecf\u8bbe\u7f6e\u7684\u5404\u4e2a\u670d\u52a1\u5728\u5404\u4e2a\u8fd0\u884c\u7ea7\u522b\u4e0b\u7684\u5f00\u95ed\u72b6\u6001\nchkconfig --list  sshd           #\u67e5\u770b\u5177\u4f53\u670d\u52a1\nchkconfig servicename on/off     #\u542f\u52a8\u5173\u95ed\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u8fd9\u4e2a\u670d\u52a1\u5c1a\u672a\u88ab\u6dfb\u52a0\u5230 chkconfig \u5217\u8868\u4e2d\uff0c\u5219\u73b0\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"--add")," \u53c2\u6570\u5c06\u5176\u6dfb\u52a0\u8fdb\u53bb",(0,r.kt)("inlineCode",{parentName:"p"},"chkconfig --add sshd"))),(0,r.kt)("h2",{id:"redis-\u81ea\u542f\u52a8"},"redis \u81ea\u542f\u52a8"),(0,r.kt)("p",null,"ubuntu18.04\u300122.04 \u901a\u8fc7 apt(dpkg)\u5b89\u88c5\u540e\uff0c\u670d\u52a1\u5373\u542f\u52a8\u4e14\u81ea\u542f\u4e5f\u53ef\u7528\uff0c\u4f46\u662f euler22.03 \u5b89\u88c5\u540e\u670d\u52a1\u672a\u542f\u52a8\u4e14\u81ea\u542f\u4e5f\u9700\u914d\u7f6e,\u64cd\u4f5c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@localhost ~]# systemctl enable redis\n[root@localhost ~]# systemctl restart redis\n")))}p.isMDXComponent=!0}}]);