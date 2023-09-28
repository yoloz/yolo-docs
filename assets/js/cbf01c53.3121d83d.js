"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[2985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(n),y=r,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||a;return n?o.createElement(m,p(p({ref:t},c),{},{components:n})):o.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,p[1]=l;for(var i=2;i<a;i++)p[i]=n[i];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},29434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var o=n(87462),r=(n(67294),n(3905));const a={},p=void 0,l={unversionedId:"tools/openvpn\u5b89\u88c5",id:"tools/openvpn\u5b89\u88c5",title:"openvpn\u5b89\u88c5",description:"\u5b89\u88c5\u6b65\u9aa4",source:"@site/docs/tools/openvpn\u5b89\u88c5.md",sourceDirName:"tools",slug:"/tools/openvpn\u5b89\u88c5",permalink:"/docs/tools/openvpn\u5b89\u88c5",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/tools/openvpn\u5b89\u88c5.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nginx\u4f7f\u7528",permalink:"/docs/tools/nginx\u4f7f\u7528"},next:{title:"svn\u5e38\u7528\u64cd\u4f5c",permalink:"/docs/tools/svn\u5e38\u7528\u64cd\u4f5c"}},s={},i=[{value:"\u5b89\u88c5\u6b65\u9aa4",id:"\u5b89\u88c5\u6b65\u9aa4",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"debian",id:"debian",level:3}],c={toc:i},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5b89\u88c5\u6b65\u9aa4"},"\u5b89\u88c5\u6b65\u9aa4"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://openvpn.net/quick-start-guide/"},"https://openvpn.net/quick-start-guide/")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install \u2018openvpn-as\u2019 package"),(0,r.kt)("li",{parentName:"ol"},"Get the password for the Admin Web UI"),(0,r.kt)("li",{parentName:"ol"},"Set up in browser: https://","[youripaddress]","/admin")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yolo@rkn:~$ sudo dpkg -i openvpn-as-bundled-clients-latest.deb\nyolo@rkn:~$ sudo dpkg -i openvpn-as-latest-debian11.amd_64.deb\n#\u5b89\u88c5\u7f3a\u5c11\u7684\u4f9d\u8d56\nyolo@rkn:~$ sudo apt install -f\n")),(0,r.kt)("p",{parentName:"admonition"},"\u767b\u9646 ",(0,r.kt)("inlineCode",{parentName:"p"},"https://[youripaddress]/")," \u540e\u53ef\u4ee5\u4fee\u6539\u751f\u6210\u7684\u968f\u673a\u5bc6\u7801")),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://as-portal.openvpn.com/get-access-server"},"https://as-portal.openvpn.com/get-access-server")),(0,r.kt)("h3",{id:"debian"},"debian"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install via Repository")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt update && sudo apt -y install ca-certificates wget net-tools gnupg\n\nsudo wget https://as-repository.openvpn.net/as-repo-public.asc -qO /etc/apt/trusted.gpg.d/as-repository.asc\n\necho "deb [arch=amd64 signed-by=/etc/apt/trusted.gpg.d/as-repository.asc] http://as-repository.openvpn.net/as/debian bullseye main">/etc/apt/sources.list.d/openvpn-as-repo.list\n#\u6ca1\u6743\u9650\uff1a\u5148sudo\u521b\u5efa\u6587\u4ef6\uff0c\u7136\u540esudo\u7f16\u8f91\u6587\u4ef6\n\nsudo apt update && sudo apt -y install openvpn-as\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manually download packages")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\n\nsudo apt install -y bridge-utils dmidecode iptables iproute2 libc6 libffi7 libgcc-s1 liblz4-1 liblzo2-2 libmariadb3 libpcap0.8 libssl1.1 libstdc++6 zlib1g libsasl2-2 libsqlite3-0 net-tools python3-pkg-resources python3-migrate python3-sqlalchemy python3-mysqldb python3-ldap3 sqlite3 python3-netaddr python3-arrow python3-lxml python3-openssl python3-incremental libxmlsec1 libxmlsec1-openssl python3-constantly python3-hyperlink python3-automat python3-service-identity python3-cffi python3-defusedxml\n\nsudo dpkg -i openvpn-as-bundled-clients-27.deb openvpn-as_2.11.3-af31575c-Debian11_amd64.deb\n")))}u.isMDXComponent=!0}}]);