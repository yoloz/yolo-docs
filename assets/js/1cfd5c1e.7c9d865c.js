"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[6488],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||s;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<s;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4043:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const s={},o=void 0,l={unversionedId:"database/vertica\u4f7f\u7528",id:"database/vertica\u4f7f\u7528",title:"vertica\u4f7f\u7528",description:"\u4e0b\u8f7d\u5b89\u88c5\u5305",source:"@site/docs/database/vertica\u4f7f\u7528.md",sourceDirName:"database",slug:"/database/vertica\u4f7f\u7528",permalink:"/docs/database/vertica\u4f7f\u7528",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/database/vertica\u4f7f\u7528.md",tags:[],version:"current",lastUpdatedAt:1688378919,formattedLastUpdatedAt:"2023\u5e747\u67083\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"vertica\u4e86\u89e3",permalink:"/docs/database/vertica\u4e86\u89e3"},next:{title:"\u6570\u636e\u5e93\u7c7b\u578b",permalink:"/docs/database/\u6570\u636e\u5e93\u7c7b\u578b"}},i={},d=[{value:"\u4e0b\u8f7d\u5b89\u88c5\u5305",id:"\u4e0b\u8f7d\u5b89\u88c5\u5305",level:2},{value:"\u5b89\u88c5(Ubuntu18.04)",id:"\u5b89\u88c5ubuntu1804",level:2},{value:"\u914d\u7f6e I/O Scheduler",id:"\u914d\u7f6e-io-scheduler",level:3},{value:"\u914d\u7f6e TZ",id:"\u914d\u7f6e-tz",level:3},{value:"Support Tools",id:"support-tools",level:3},{value:"\u914d\u7f6e swapiness",id:"\u914d\u7f6e-swapiness",level:3},{value:"Disk Readahead",id:"disk-readahead",level:3},{value:"Enabling chrony or ntpd",id:"enabling-chrony-or-ntpd",level:3},{value:"\u91cd\u542f",id:"\u91cd\u542f",level:2},{value:"Projection row size (64032161) exceeds MaxRowSize (32768000)",id:"projection-row-size-64032161-exceeds-maxrowsize-32768000",level:2},{value:"Querying Structs",id:"querying-structs",level:2},{value:"Loading Delimited Data",id:"loading-delimited-data",level:2},{value:"SQL Support for User-Level Configuration",id:"sql-support-for-user-level-configuration",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e0b\u8f7d\u5b89\u88c5\u5305"},"\u4e0b\u8f7d\u5b89\u88c5\u5305"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.vertica.com/"},"https://www.vertica.com/")),(0,r.kt)("h2",{id:"\u5b89\u88c5ubuntu1804"},"\u5b89\u88c5(Ubuntu18.04)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"zhds@vertica:~$ sudo dpkg -i vertica_10.0.0-0_amd64.deb\n#\u7f3a\u5c11\u4f9d\u8d56\uff0c\u5b89\u88c5\u4f9d\u8d56\nzhds@vertica:~$ sudo /opt/vertica/sbin/install_vertica --hosts 192.168.1.149\n")),(0,r.kt)("p",null,"\u6dfb\u52a0 dbadmin \u7528\u6237\u5bc6\u7801\u540e\u62a5\u9519"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"Prerequisites not fully met during local (OS) configuration for\nverify-192.168.1.149.xml:\n    HINT (S0151): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0151\n        HINT(eS0151): These disks do not have known IO schedulers: '/dev/sda2'\n        ('sda') = 'none'\n    HINT (S0305): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0305\n        HINT(eS0305): TZ is unset for dbadmin. Consider updating .profile or\n        .bashrc\n    HINT (S0041): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0041\n        HINT(eS0041): Could not find the following tools normally provided by\n        the rasdaemon package: rasdaemon\n    HINT (S0040): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0040\n        HINT(eS0040): Could not find the following tools normally provided by\n        the pstack or gstack package: pstack/gstack\n    HINT (S0045): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0045\n        HINT(eS0045): Could not find the following tools normally provided by\n        the sysstat package: iostat, mpstat\n    WARN (S0112): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0112\n        WARN(eS0112): vm.swappiness is higher than recommended: your 60 > 1\n    FAIL (S0020): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0020\n        FAIL(eS0020): Readahead size of sda (/dev/sda2) is too low for typical\n        systems: 256 < 2048\n    FAIL (S0030): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0030\n        FAIL(eS0030): ntp daemon process is not running: ['ntpd', 'ntp',\n        'chronyd']\n\nSystem prerequisites failed.  Threshold = WARN\n        Hint: Fix above failures or use --failure-threshold\n\nInstallation FAILED with errors.\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u6253\u5f00\u9519\u8bef\u4e2d\u7684\u94fe\u63a5\u5730\u5740\u5373\u53ef\u89e3\u51b3"),(0,r.kt)("li",{parentName:"ul"},"\u67d0\u4e9b\u4fee\u6539\u9700\u8981\u6dfb\u52a0\u5230\u81ea\u542f\u52a8\u91cc\uff0c\u53ef\u89c1",(0,r.kt)("a",{parentName:"li",href:"/docs/linux/%E6%9C%8D%E5%8A%A1%E8%87%AA%E5%90%AF%E5%8A%A8%E9%85%8D%E7%BD%AE"},"\u300a\u670d\u52a1\u81ea\u542f\u52a8\u914d\u7f6e\u300b")))),(0,r.kt)("h3",{id:"\u914d\u7f6e-io-scheduler"},"\u914d\u7f6e I/O Scheduler"),(0,r.kt)("p",null,"Vertica \u4f7f\u7528\u7684\u78c1\u76d8\u7684 I/O \u8c03\u5ea6\u7a0b\u5e8f\u5fc5\u987b\u8bbe\u7f6e\u4e3a deadline \u6216 noop\uff0c\u9ed8\u8ba4\u4e3a deadline."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'zhds@vertica:~$ cat /sys/block/sda/queue/scheduler\n[none]\n# tee\u7b49\u4ef7\u4e8e >\nzhds@vertica:~$ echo "deadline" | sudo tee /sys/block/sda/queue/scheduler\ndeadline\ntee: /sys/block/sda/queue/scheduler: Invalid argument\n# \u4e0a\u8ff0\u6dfb\u52a0\u5931\u8d25\uff0cdeadline\u65e0\u6548\u6362\u6210mq-deadline\u5373\u53ef\n# \u52a0\u5165\u5f00\u673a\u81ea\u542f, tee -a \u7b49\u4ef7\u4e8e >>\nzhds@vertica:~$ echo \'echo "deadline" > /sys/block/sda/queue/scheduler\' | sudo tee -a /etc/rc.local\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0a\u8ff0 deadline \u4fee\u6539\u5931\u8d25\uff0c\u6362\u7528 mq-deadline \u53ef\u4ee5,\u5177\u4f53\u53ef\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://wiki.ubuntu.com/Kernel/Reference/IOSchedulers"},"\u300aIOSchedulers\u300b"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'On some Ubuntu/Debian systems, the last line in rc.local must be "exit 0". So you must manually add the following line to etc/rc.local before the last line with exit 0.')),(0,r.kt)("h3",{id:"\u914d\u7f6e-tz"},"\u914d\u7f6e TZ"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#sudo timedatectl set-timezone Asia/Shanghai\nzhds@vertica:~$ cat <<EOF>>~/.bashrc\nexport TZ="Asia/Shanghai"\nEOF\n')),(0,r.kt)("p",null,":::cation \u6ce8\u610f\n\u5982\u679c\u662f\u96c6\u7fa4\uff0c\u5fc5\u987b\u5728\u6240\u6709\u8282\u70b9\u4e0a\u5c06 TZ \u53d8\u91cf\u8bbe\u7f6e\u4e3a\u76f8\u540c\u7684\u503c;\n:::"),(0,r.kt)("h3",{id:"support-tools"},"Support Tools"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"zhds@vertica:~$ sudo apt install pstack sysstat [rasdaemon]mcelog\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"For Ubuntu versions 18.04 and higher, run apt install rasdaemon instead of apt install mcelog.")),(0,r.kt)("h3",{id:"\u914d\u7f6e-swapiness"},"\u914d\u7f6e swapiness"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'zhds@vertica:~$ cat /proc/sys/vm/swappiness\nzhds@vertica:~$ echo "vm.swappiness=0" | sudo tee -a /etc/sysctl.conf\nzhds@vertica:~$ sudo sysctl -p\nzhds@vertica:~$ cat /proc/sys/vm/swappiness\n')),(0,r.kt)("h3",{id:"disk-readahead"},"Disk Readahead"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"zhds@vertica:~$ sudo /sbin/blockdev --setra 2048 /dev/sda\nzhds@vertica:~$ echo '/sbin/blockdev --setra 2048 /dev/sda' | sudo tee -a /etc/rc.local\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'On some Ubuntu/Debian systems, the last line in rc.local must be "exit 0". So you must manually add the following line to etc/rc.local before the last line with exit 0.')),(0,r.kt)("h3",{id:"enabling-chrony-or-ntpd"},"Enabling chrony or ntpd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"zhds@vertica:~$ sudo apt install chrony\nzhds@vertica:~$ sudo systemctl status chrony\nzhds@vertica:~$ chronyc tracking\n")),(0,r.kt)("h2",{id:"\u91cd\u542f"},"\u91cd\u542f"),(0,r.kt)("admonition",{title:"\u81ea\u542f\u52a8",type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"zhds@vertica:~$ echo '#!/bin/sh -e' | sudo tee /etc/rc.local\nzhds@vertica:~$ echo 'echo \"mq-deadline\" > /sys/block/sda/queue/scheduler' | sudo tee -a /etc/rc.local\nzhds@vertica:~$ echo '/sbin/blockdev --setra 2048 /dev/sda' | sudo tee -a /etc/rc.local\nzhds@vertica:~$ echo 'exit 0' | sudo tee -a /etc/rc.local\n#\u670d\u52a1\u542f\u52a8\u7b49\u66f4\u591a\u4fe1\u606f\u89c1\u4e0b\u65b9\u94fe\u63a5\n")),(0,r.kt)("p",{parentName:"admonition"},"\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"/docs/linux/%E6%9C%8D%E5%8A%A1%E8%87%AA%E5%90%AF%E5%8A%A8%E9%85%8D%E7%BD%AE"},"\u300a\u670d\u52a1\u81ea\u542f\u52a8\u914d\u7f6e\u300b"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"zhds@vertica:~$ sudo reboot\n#\u542f\u52a8\u540e\nzhds@vertica:~$ sudo /opt/vertica/sbin/install_vertica --hosts 192.168.1.149\n#......\n# To create a database:\n#   1. Logout and login as dbadmin. (see note below)\n#   2. Run /opt/vertica/bin/adminTools as dbadmin\n#   3. Select Create Database from the Configuration Menu\n#   Note: Installation may have made configuration changes to dbadmin\n#   that do not take effect until the next session (logout and login).\n#.......\nzhds@vertica:~$ su dbadmin\n#Password:\ndbadmin@vertica:/home/zhds$ /opt/vertica/bin/adminTools\n# create database,\u7b2c\u4e00\u6b65\u8bc1\u4e66Tab\u952e\u76f4\u63a5\u9009\u62e9OK\u4f7f\u7528\u793e\u533a\u7248\n\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u6570\u636e\u5e93\u5207\u6362\u4ee5\u53ca\u542f\u52a8\u53ef\u4ee5\u901a\u8fc7\uff1abin/adminTools \u56fe\u5f62\u754c\u9762\u64cd\u4f5c\uff0c\u7528\u6237\u5207\u6362\u5230 vertica \u7684\u7528\u6237\u3002")),(0,r.kt)("h2",{id:"projection-row-size-64032161-exceeds-maxrowsize-32768000"},"Projection row size (64032161) exceeds MaxRowSize (32768000)"),(0,r.kt)("p",null,"\u8868\u7ed3\u6784\u5b9a\u4e49\u4e2d\u5404\u5217\u7684\u5927\u5c0f\u5b9a\u4e49\u8d85\u8fc7\u884c\u7684\u6700\u5927\u503c"),(0,r.kt)("h2",{id:"querying-structs"},"Querying Structs"),(0,r.kt)("p",null,"In queries, ROW columns are shown in output using JSON format. In the following example,\nthe last row shows partial data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'=> SELECT * FROM customers ORDER BY accountID;\nname | address | accountID\n--------------------+--------------------------------------------------------------------+-----------\nMissy Cooper | {"street":"911 San Marcos St","city":"Austin","zipcode":73344} | 17\nSheldon Cooper | {"street":"100 Main St Apt 4B","city":"Pasadena","zipcode":91001} | 139\nLeonard Hofstadter | {"street":"100 Main St Apt 4A","city":"Pasadena","zipcode":91001} | 142\nLeslie Winkle | {"street":"23 Fifth Ave Apt 8C","city":"Pasadena","zipcode":91001} | 198\nRaj Koothrappali | {"street":null,"city":"Pasadena","zipcode":91001} | 294\n(5 rows)\n')),(0,r.kt)("p",null,"Most values are cast to UTF-8 strings, as shown for street and city here. Integers and\nbooleans are cast to JSON Numerics and thus not quoted.\nUse dot notation (column.field) to access fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"=> SELECT address.city FROM customers;\ncity\n----------\nPasadena\nPasadena\nPasadena\nPasadena\nAustin\n(5 rows)\n")),(0,r.kt)("p",null,"You can use row columns or specific fields to restrict queries, as in the following examples."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'=> SELECT address FROM customers WHERE address.city =\'Pasadena\';\naddress\n--------------------------------------------------------------------\n{"street":"100 Main St Apt 4B","city":"Pasadena","zipcode":91001}\n{"street":"100 Main St Apt 4A","city":"Pasadena","zipcode":91001}\n{"street":"23 Fifth Ave Apt 8C","city":"Pasadena","zipcode":91001}\n{"street":null,"city":"Pasadena","zipcode":91001}\n(4 rows)\n')),(0,r.kt)("p",null,"You can use the ROW syntax to specify literal values, such as the address in the WHERE clause in the following example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'=> SELECT name,address FROM customers\nWHERE address = ROW(\'100 Main St Apt 4A\',\'Pasadena\',91001);\nname | address\n--------------------+-------------------------------------------------------------------\nLeonard Hofstadter | {"street":"100 Main St Apt 4A","city":"Pasadena","zipcode":91001}\n(1 row)\n')),(0,r.kt)("p",null,"You can join on values from structs as you would from any other column:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"=> SELECT accountID,department from customers JOIN employees\nON customers.name=employees.personal.name;\naccountID | department\n-----------+------------\n139 | Physics\n142 | Physics\n294 | Astronomy\n")),(0,r.kt)("p",null,"You can join on full structs. The following example joins the addresses in the employees and customers tables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"=> SELECT employees.personal.name,customers.accountID FROM employees\nJOIN customers ON employees.personal.address=customers.address;\nname | accountID\n--------------------+-----------\nSheldon Cooper | 139\nLeonard Hofstadter | 142\n(2 rows)\n")),(0,r.kt)("p",null,"You can use structs in views and in subqueries, as in the following example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'=> CREATE VIEW neighbors (num_neighbors, area(city, zipcode))\nAS SELECT count(*), ROW(address.city, address.zipcode)\nFROM customers GROUP BY address.city, address.zipcode;\nCREATE VIEW\n=> SELECT employees.personal.name, neighbors.area FROM neighbors, employees\nWHERE employees.personal.address.zipcode=neighbors.area.zipcode AND neighbors.nu\nm_neighbors > 1;\nname | area\n--------------------+-------------------------------------\nSheldon Cooper | {"city":"Pasadena","zipcode":91001}\nLeonard Hofstadter | {"city":"Pasadena","zipcode":91001}\n(2 rows)\n')),(0,r.kt)("p",null,"If a reference is ambiguous, Vertica prefers column names over field names."),(0,r.kt)("p",null,"You can use many operators and predicates with ROW columns, including JOIN, GROUP BY,\nORDER BY, IS ","[NOT]"," NULL, and comparison operations in nullable filters. Some operators\nare nonsensical for structured data and are not supported."),(0,r.kt)("h2",{id:"loading-delimited-data"},"Loading Delimited Data"),(0,r.kt)("p",null,"If you do not specify another parser, Vertica defaults to the DELIMITED parser. You can\nspecify the delimiter, escape characters, how to handle null values, and other parameters in\nthe COPY statement."),(0,r.kt)("p",null,"The options specific to the DELIMITED parser and their default values are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Option"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"DELIMITER"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ENCLOSED BY"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ESCAPE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\\ ")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"NULL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"'' (empty string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"COLLECTIONOPEN"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"COLLECTIONCLOSE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"COLLECTIONDELIMITER"),(0,r.kt)("td",{parentName:"tr",align:"left"},",")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"COLLECTIONNULLELEMENT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"COLLECTIONENCLOSE"),(0,r.kt)("td",{parentName:"tr",align:"left"},'" (double quote)')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"TRAILING NULLCOLS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(none)")))),(0,r.kt)("p",null,"The following example shows the default behavior, in which the delimiter character is '|'"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"=> CREATE TABLE employees (id INT, name VARCHAR(50), department VARCHAR(50));\nCREATE TABLE\n=> COPY employees FROM STDIN;\nEnter data to be copied followed by a newline.\nEnd with a backslash and a period on a line by itself.\n>> 42|Sheldon Cooper|Physics\n>> 17|Howard Wolowitz|Astronomy\n>> \\.\n=> SELECT * FROM employees;\nid | name | department\n----+-----------------+--------------\n17 | Howard Wolowitz | Astrophysics\n42 | Sheldon Cooper | Physics\n(2 rows)\n")),(0,r.kt)("p",null,"The following example loads data from a comma-separated file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"=> COPY employees FROM ... DELIMITER ',';\n")),(0,r.kt)("p",null,"In the following example, the first column has a column-specific delimiter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"=> COPY employees(id DELIMITER ':', name, department) FROM ... DELIMITER ',';\n")),(0,r.kt)("p",null,"By default, collection values are delimited by brackets and elements are delimited by commas. Collections must be one-dimensional arrays or sets of scalar types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'=> CREATE TABLE researchers (id INT, name VARCHAR, grants ARRAY[VARCHAR], values ARRAY[INT]);\nCREATE TABLE\n=> COPY researchers FROM STDIN;\nEnter data to be copied followed by a newline.\nVertica Documentation\nGetting Started\nVertica Analytic Database (10.0.x) Page 385 of 6450\nEnd with a backslash and a period on a line by itself.\n>> 42|Sheldon Cooper|[US-7376,DARPA-1567]|[65000,135000]\n>> 17|Howard Wolowitz|[NASA-1683,NASA-7867,SPX-76]|[16700,85000,45000]\n>> \\.\n=> SELECT * FROM researchers;\nid | name | grants | values\n----+-----------------+------------------------------------+---------------------\n17 | Howard Wolowitz | ["NASA-1683","NASA-7867","SPX-76"] | [16700,85000,45000]\n42 | Sheldon Cooper | ["US-7376","DARPA-1567"] | [65000,135000]\n(2 rows)\n')),(0,r.kt)("p",null,"To use a special character as a literal, prefix it with an escape character. For example, to\ninclude a literal backslash (",")"," in the loaded data (such as when including a file path), use\ntwo backslashes (","\\","). COPY removes the escape character from the input when it loads\nescaped characters."),(0,r.kt)("p",null,"When loading delimited data, two consecutive delimiters indicate a null value, unless the\nNULL parameter is set otherwise. The final delimiter is optional. For example, the following\ninput is valid for the previous table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"=> COPY employees FROM STDIN;\nEnter data to be copied followed by a newline.\nEnd with a backslash and a period on a line by itself.\n>> 45|Raj|\n>> 21|Leonard||\n>> \\.\n=> SELECT * FROM employees;\nid | name | department\n----+---------+--------------\n21 | Leonard |\n42 | Raj |\n(2 rows)\n")),(0,r.kt)("p",null,"By default, if the data has too few values, the load fails. You can use the TRAILING\nNULLCOLS option to accept any number of missing columns and treat their values as null.\nVertica assumes that data is in the UTF-8 encoding."),(0,r.kt)("p",null,"To load delimited data into a Flex table, use the FDELIMITEDPARSER parser."),(0,r.kt)("h2",{id:"sql-support-for-user-level-configuration"},"SQL Support for User-Level Configuration"),(0,r.kt)("p",null,"Two SQL statements support setting configuration parameters for individual users:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ALTER USER now supports setting user-level configuration parameters for the specified user. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"=> ALTER USER user1 SET PARAMETER\nDepotOperationsForQuery='Fetches', UseDepotForWrites=0;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New statement SHOW USER returns all configuration parameter values that are set for the specified user. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"=> SHOW USER user1 ALL;\nname | setting\n------------------------+---------\nDepotOperationsForQuery | Fetches\nUseDepotForWrites | 0\n(2 rows)\n")))}u.isMDXComponent=!0}}]);