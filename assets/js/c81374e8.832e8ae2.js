"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[3351],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(a),h=o,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return a?n.createElement(m,s(s({ref:t},l),{},{components:a})):n.createElement(m,s({ref:t},l))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2136:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));const r={},s=void 0,i={unversionedId:"bigdata/Vertica\u5b89\u88c5",id:"bigdata/Vertica\u5b89\u88c5",title:"Vertica\u5b89\u88c5",description:"\u4e0b\u8f7d\u5b89\u88c5\u5305",source:"@site/docs/bigdata/Vertica\u5b89\u88c5.md",sourceDirName:"bigdata",slug:"/bigdata/Vertica\u5b89\u88c5",permalink:"/docs/bigdata/Vertica\u5b89\u88c5",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/Vertica\u5b89\u88c5.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CDH\u5b89\u88c5",permalink:"/docs/bigdata/CDH\u5b89\u88c5"},next:{title:"elasticsearch",permalink:"/docs/bigdata/elasticsearch"}},c={},d=[{value:"\u4e0b\u8f7d\u5b89\u88c5\u5305",id:"\u4e0b\u8f7d\u5b89\u88c5\u5305",level:2},{value:"\u5b89\u88c5(Ubuntu18.04)",id:"\u5b89\u88c5ubuntu1804",level:2},{value:"\u914d\u7f6e I/O Scheduler",id:"\u914d\u7f6e-io-scheduler",level:3},{value:"\u914d\u7f6e TZ",id:"\u914d\u7f6e-tz",level:3},{value:"Support Tools",id:"support-tools",level:3},{value:"\u914d\u7f6e swapiness",id:"\u914d\u7f6e-swapiness",level:3},{value:"Disk Readahead",id:"disk-readahead",level:3},{value:"Enabling chrony or ntpd",id:"enabling-chrony-or-ntpd",level:3},{value:"\u91cd\u542f",id:"\u91cd\u542f",level:2}],l={toc:d};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e0b\u8f7d\u5b89\u88c5\u5305"},"\u4e0b\u8f7d\u5b89\u88c5\u5305"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.vertica.com/"},"https://www.vertica.com/")),(0,o.kt)("h2",{id:"\u5b89\u88c5ubuntu1804"},"\u5b89\u88c5(Ubuntu18.04)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"zhds@vertica:~$ sudo dpkg -i vertica_10.0.0-0_amd64.deb\n#\u7f3a\u5c11\u4f9d\u8d56\uff0c\u5b89\u88c5\u4f9d\u8d56\nzhds@vertica:~$ sudo /opt/vertica/sbin/install_vertica --hosts 192.168.1.149\n")),(0,o.kt)("p",null,"\u6dfb\u52a0 dbadmin \u7528\u6237\u5bc6\u7801\u540e\u62a5\u9519"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"Prerequisites not fully met during local (OS) configuration for\nverify-192.168.1.149.xml:\n    HINT (S0151): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0151\n        HINT(eS0151): These disks do not have known IO schedulers: '/dev/sda2'\n        ('sda') = 'none'\n    HINT (S0305): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0305\n        HINT(eS0305): TZ is unset for dbadmin. Consider updating .profile or\n        .bashrc\n    HINT (S0041): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0041\n        HINT(eS0041): Could not find the following tools normally provided by\n        the rasdaemon package: rasdaemon\n    HINT (S0040): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0040\n        HINT(eS0040): Could not find the following tools normally provided by\n        the pstack or gstack package: pstack/gstack\n    HINT (S0045): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0045\n        HINT(eS0045): Could not find the following tools normally provided by\n        the sysstat package: iostat, mpstat\n    WARN (S0112): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0112\n        WARN(eS0112): vm.swappiness is higher than recommended: your 60 > 1\n    FAIL (S0020): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0020\n        FAIL(eS0020): Readahead size of sda (/dev/sda2) is too low for typical\n        systems: 256 < 2048\n    FAIL (S0030): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0030\n        FAIL(eS0030): ntp daemon process is not running: ['ntpd', 'ntp',\n        'chronyd']\n\nSystem prerequisites failed.  Threshold = WARN\n        Hint: Fix above failures or use --failure-threshold\n\nInstallation FAILED with errors.\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u6253\u5f00\u9519\u8bef\u4e2d\u7684\u94fe\u63a5\u5730\u5740\u5373\u53ef\u89e3\u51b3"),(0,o.kt)("li",{parentName:"ul"},"\u67d0\u4e9b\u4fee\u6539\u9700\u8981\u6dfb\u52a0\u5230\u81ea\u542f\u52a8\u91cc\uff0c\u53ef\u89c1",(0,o.kt)("a",{parentName:"li",href:"/docs/linux/%E6%9C%8D%E5%8A%A1%E8%87%AA%E5%90%AF%E5%8A%A8"},"\u300a\u670d\u52a1\u81ea\u542f\u52a8\u300b")))),(0,o.kt)("h3",{id:"\u914d\u7f6e-io-scheduler"},"\u914d\u7f6e I/O Scheduler"),(0,o.kt)("p",null,"Vertica \u4f7f\u7528\u7684\u78c1\u76d8\u7684 I/O \u8c03\u5ea6\u7a0b\u5e8f\u5fc5\u987b\u8bbe\u7f6e\u4e3a deadline \u6216 noop\uff0c\u9ed8\u8ba4\u4e3a deadline."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'zhds@vertica:~$ cat /sys/block/sda/queue/scheduler\n[none]\n# tee\u7b49\u4ef7\u4e8e >\nzhds@vertica:~$ echo "deadline" | sudo tee /sys/block/sda/queue/scheduler\ndeadline\ntee: /sys/block/sda/queue/scheduler: Invalid argument\n# \u4e0a\u8ff0\u6dfb\u52a0\u5931\u8d25\uff0cdeadline\u65e0\u6548\u6362\u6210mq-deadline\u5373\u53ef\n# \u52a0\u5165\u5f00\u673a\u81ea\u542f, tee -a \u7b49\u4ef7\u4e8e >>\nzhds@vertica:~$ echo \'echo "deadline" > /sys/block/sda/queue/scheduler\' | sudo tee -a /etc/rc.local\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u4e0a\u8ff0 deadline \u4fee\u6539\u5931\u8d25\uff0c\u6362\u7528 mq-deadline \u53ef\u4ee5,\u5177\u4f53\u53ef\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ubuntu.com/Kernel/Reference/IOSchedulers"},"\u300aIOSchedulers\u300b"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},'On some Ubuntu/Debian systems, the last line in rc.local must be "exit 0". So you must manually add the following line to etc/rc.local before the last line with exit 0.')),(0,o.kt)("h3",{id:"\u914d\u7f6e-tz"},"\u914d\u7f6e TZ"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#sudo timedatectl set-timezone Asia/Shanghai\nzhds@vertica:~$ cat <<EOF>>~/.bashrc\nexport TZ="Asia/Shanghai"\nEOF\n')),(0,o.kt)("p",null,":::cation \u6ce8\u610f\n\u5982\u679c\u662f\u96c6\u7fa4\uff0c\u5fc5\u987b\u5728\u6240\u6709\u8282\u70b9\u4e0a\u5c06 TZ \u53d8\u91cf\u8bbe\u7f6e\u4e3a\u76f8\u540c\u7684\u503c;\n:::"),(0,o.kt)("h3",{id:"support-tools"},"Support Tools"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"zhds@vertica:~$ sudo apt install pstack sysstat [rasdaemon]mcelog\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"For Ubuntu versions 18.04 and higher, run apt install rasdaemon instead of apt install mcelog.")),(0,o.kt)("h3",{id:"\u914d\u7f6e-swapiness"},"\u914d\u7f6e swapiness"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'zhds@vertica:~$ cat /proc/sys/vm/swappiness\nzhds@vertica:~$ echo "vm.swappiness=0" | sudo tee -a /etc/sysctl.conf\nzhds@vertica:~$ sudo sysctl -p\nzhds@vertica:~$ cat /proc/sys/vm/swappiness\n')),(0,o.kt)("h3",{id:"disk-readahead"},"Disk Readahead"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"zhds@vertica:~$ sudo /sbin/blockdev --setra 2048 /dev/sda\nzhds@vertica:~$ echo '/sbin/blockdev --setra 2048 /dev/sda' | sudo tee -a /etc/rc.local\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'On some Ubuntu/Debian systems, the last line in rc.local must be "exit 0". So you must manually add the following line to etc/rc.local before the last line with exit 0.')),(0,o.kt)("h3",{id:"enabling-chrony-or-ntpd"},"Enabling chrony or ntpd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"zhds@vertica:~$ sudo apt install chrony\nzhds@vertica:~$ sudo systemctl status chrony\nzhds@vertica:~$ chronyc tracking\n")),(0,o.kt)("h2",{id:"\u91cd\u542f"},"\u91cd\u542f"),(0,o.kt)("admonition",{title:"\u81ea\u542f\u52a8",type:"info"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"zhds@vertica:~$ echo '#!/bin/sh -e' | sudo tee /etc/rc.local\nzhds@vertica:~$ echo 'echo \"mq-deadline\" > /sys/block/sda/queue/scheduler' | sudo tee -a /etc/rc.local\nzhds@vertica:~$ echo '/sbin/blockdev --setra 2048 /dev/sda' | sudo tee -a /etc/rc.local\nzhds@vertica:~$ echo 'exit 0' | sudo tee -a /etc/rc.local\n#\u670d\u52a1\u542f\u52a8\u7b49\u66f4\u591a\u4fe1\u606f\u89c1\u4e0b\u65b9\u94fe\u63a5\n")),(0,o.kt)("p",{parentName:"admonition"},"\u8be6\u89c1",(0,o.kt)("a",{parentName:"p",href:"/docs/linux/%E6%9C%8D%E5%8A%A1%E8%87%AA%E5%90%AF%E5%8A%A8"},"\u300a\u670d\u52a1\u81ea\u542f\u52a8\u300b"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"zhds@vertica:~$ sudo reboot\n#\u542f\u52a8\u540e\nzhds@vertica:~$ sudo /opt/vertica/sbin/install_vertica --hosts 192.168.1.149\n#......\n# To create a database:\n#   1. Logout and login as dbadmin. (see note below)\n#   2. Run /opt/vertica/bin/adminTools as dbadmin\n#   3. Select Create Database from the Configuration Menu\n#   Note: Installation may have made configuration changes to dbadmin\n#   that do not take effect until the next session (logout and login).\n#.......\nzhds@vertica:~$ su dbadmin\n#Password:\ndbadmin@vertica:/home/zhds$ /opt/vertica/bin/adminTools\n# create database,\u7b2c\u4e00\u6b65\u8bc1\u4e66Tab\u952e\u76f4\u63a5\u9009\u62e9OK\u4f7f\u7528\u793e\u533a\u7248\n\n")))}u.isMDXComponent=!0}}]);