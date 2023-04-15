"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>C});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",O={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},_=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),_=r,C=p["".concat(s,".").concat(_)]||p[_]||O[_]||l;return n?i.createElement(C,a(a({ref:t},u),{},{components:n})):i.createElement(C,a({ref:t},u))}));function C(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=_;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}_.displayName="MDXCreateElement"},4965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>O,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const l={},a=void 0,o={unversionedId:"security/https\u8eab\u4efd\u9a8c\u8bc1",id:"security/https\u8eab\u4efd\u9a8c\u8bc1",title:"https\u8eab\u4efd\u9a8c\u8bc1",description:"\u4e0d\u5e26\u8bc1\u4e66\u600e\u4e48\u9a8c\u8bc1\u8eab\u4efd",source:"@site/docs/security/https\u8eab\u4efd\u9a8c\u8bc1.md",sourceDirName:"security",slug:"/security/https\u8eab\u4efd\u9a8c\u8bc1",permalink:"/docs/security/https\u8eab\u4efd\u9a8c\u8bc1",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/security/https\u8eab\u4efd\u9a8c\u8bc1.md",tags:[],version:"current",lastUpdatedAt:1681551353,formattedLastUpdatedAt:"2023\u5e744\u670815\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6267\u884cshell\u7684\u65b9\u5f0f",permalink:"/docs/script/\u6267\u884cshell\u7684\u65b9\u5f0f"},next:{title:"Proxmox(PVE)\u4f7f\u7528",permalink:"/docs/tools/Proxmox(PVE)\u4f7f\u7528"}},s={},c=[{value:"\u4e0d\u5e26\u8bc1\u4e66\u600e\u4e48\u9a8c\u8bc1\u8eab\u4efd",id:"\u4e0d\u5e26\u8bc1\u4e66\u600e\u4e48\u9a8c\u8bc1\u8eab\u4efd",level:2},{value:"curl \u5e26\u53c2\u6570(cacert)\u8bbf\u95ee",id:"curl-\u5e26\u53c2\u6570cacert\u8bbf\u95ee",level:3},{value:"ca-certificates",id:"ca-certificates",level:2},{value:"x509: certificate signed by unknown authority",id:"x509-certificate-signed-by-unknown-authority",level:2},{value:"\u5bb9\u5668\u955c\u50cf\u8bbf\u95ee https \u62a5\u9519",id:"\u5bb9\u5668\u955c\u50cf\u8bbf\u95ee-https-\u62a5\u9519",level:3},{value:"filebeat \u8bbf\u95ee 8.x \u62a5\u9519",id:"filebeat-\u8bbf\u95ee-8x-\u62a5\u9519",level:3}],u={toc:c},p="wrapper";function O(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e0d\u5e26\u8bc1\u4e66\u600e\u4e48\u9a8c\u8bc1\u8eab\u4efd"},"\u4e0d\u5e26\u8bc1\u4e66\u600e\u4e48\u9a8c\u8bc1\u8eab\u4efd"),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u8bbf\u95ee https \u7684\u95ee\u9898, \u4e00\u822c\u4e0d\u4f1a\u5e26\u4e0a\u8ddf\u8bc1\u4e66\u76f8\u5173\u7684\u53c2\u6570\uff0c\u90a3\u53c8\u662f\u5982\u4f55\u9a8c\u8bc1\u7f51\u7ad9\u8eab\u4efd\u7684\u5462?\u8fd9\u91cc\u4f7f\u7528 curl \u6765\u6a21\u62df:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'ylz@yltest:~$ curl https://baidu.com -v\n* Rebuilt URL to: https://baidu.com/\n*   Trying 39.156.66.10...\n* TCP_NODELAY set\n* Connected to baidu.com (39.156.66.10) port 443 (#0)\n* ALPN, offering h2\n* ALPN, offering http/1.1\n* successfully set certificate verify locations:\n*   CAfile: /etc/ssl/certs/ca-certificates.crt\n  CApath: /etc/ssl/certs\n* TLSv1.3 (OUT), TLS handshake, Client hello (1):\n* TLSv1.3 (IN), TLS handshake, Server hello (2):\n* TLSv1.2 (IN), TLS handshake, Certificate (11):\n* TLSv1.2 (IN), TLS handshake, Server key exchange (12):\n* TLSv1.2 (IN), TLS handshake, Server finished (14):\n* TLSv1.2 (OUT), TLS handshake, Client key exchange (16):\n* TLSv1.2 (OUT), TLS change cipher, Client hello (1):\n* TLSv1.2 (OUT), TLS handshake, Finished (20):\n* TLSv1.2 (IN), TLS handshake, Finished (20):\n* SSL connection using TLSv1.2 / ECDHE-RSA-AES128-GCM-SHA256\n* ALPN, server accepted to use http/1.1\n* Server certificate:\n*  subject: C=CN; ST=\\U5317\\U4EAC\\U5E02; O=BeiJing Baidu Netcom Science Technology Co., Ltd; CN=www.baidu.cn\n*  start date: Jan 30 00:00:00 2023 GMT\n*  expire date: Feb 27 23:59:59 2024 GMT\n*  subjectAltName: host "baidu.com" matched cert\'s "baidu.com"\n*  issuer: C=US; O=DigiCert Inc; CN=DigiCert Secure Site Pro CN CA G3\n*  SSL certificate verify ok.\n> GET / HTTP/1.1\n...\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4ece\u4e0a\u8ff0\u8f93\u51fa\u53ef\u4ee5\u770b\u5230\uff1a"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"certificates in /etc/ssl/certs/ca-certificates.crt"),(0,r.kt)("li",{parentName:"ul"},"certificates in /etc/ssl/certs"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/etc/ssl"),":\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4",(0,r.kt)("inlineCode",{parentName:"p"},"apt install ca-certificates"),"\u751f\u6210\uff0c\u4e00\u822c\u7cfb\u7edf\u5b89\u88c5\u540e\u5df2\u7ecf\u751f\u6210;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/etc/ssl/certs")," \u76ee\u5f55\u4e0b\u6709\u5927\u91cf\u8bc1\u4e66\u76f8\u5173\u7684\u6587\u4ef6."),(0,r.kt)("p",null,"\u5728\u4f7f\u7528 curl \u7684\u65f6\u5019\uff0c\u5982\u679c\u4e0d\u5e26\u8bc1\u4e66\u76f8\u5173\u7684\u53c2\u6570,\u5219\u4f1a\u5f15\u7528\u9ed8\u8ba4\u7684\u8bc1\u4e66\u8def\u5f84(\u4f9d\u64cd\u4f5c\u7cfb\u7edf\u4e0d\u540c\u800c\u4e0d\u540c)\u8fd9\u4e2a\u9ed8\u8ba4\u503c\u600e\u4e48\u6765\u786e\u5b9a\u5462?"),(0,r.kt)("p",null,"\u53ef\u4ee5\u786e\u8ba4\u662f curl \u5e95\u5c42\u7684\u4ee3\u7801\u6839\u636e\u73af\u5883\u56e0\u7d20\u5b9a\u4e49\u7684\u9ed8\u8ba4\u503c\uff0c\u901a\u8fc7 strace \u65b9\u5f0f\u6765\u67e5\u770b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'ylz@yltest:~$ strace curl https://www.baidu.com |& grep open\nopenat(AT_FDCWD, "/etc/ld.so.cache", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libcurl.so.4", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libz.so.1", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libpthread.so.0", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libc.so.6", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libnghttp2.so.14", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libidn2.so.0", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/librtmp.so.1", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libpsl.so.5", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libssl.so.1.1", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libcrypto.so.1.1", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libgssapi_krb5.so.2", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libldap_r-2.4.so.2", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/liblber-2.4.so.2", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libunistring.so.2", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libgnutls.so.30", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libhogweed.so.4", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libnettle.so.6", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libgmp.so.10", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libdl.so.2", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libkrb5.so.3", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libk5crypto.so.3", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libcom_err.so.2", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libkrb5support.so.0", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libresolv.so.2", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libsasl2.so.2", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libgssapi.so.3", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libp11-kit.so.0", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libtasn1.so.6", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libkeyutils.so.1", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libheimntlm.so.0", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libkrb5.so.26", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libasn1.so.8", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libhcrypto.so.4", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libroken.so.18", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libffi.so.6", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libwind.so.0", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libheimbase.so.1", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libhx509.so.5", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libsqlite3.so.0", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libcrypt.so.1", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libm.so.6", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/ssl/openssl.cnf", O_RDONLY) = 3\nopenat(AT_FDCWD, "/usr/lib/locale/locale-archive", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/home/ylz/.curlrc", O_RDONLY) = -1 ENOENT (No such file or directory)\nopenat(AT_FDCWD, "/dev/urandom", O_RDONLY) = 4\nopenat(AT_FDCWD, "/dev/random", O_RDONLY) = 5\nopenat(AT_FDCWD, "/dev/srandom", O_RDONLY) = -1 ENOENT (No such file or directory)\nopenat(AT_FDCWD, "/usr/lib/ssl/openssl.cnf", O_RDONLY) = 6\nopenat(AT_FDCWD, "/etc/ssl/certs/ca-certificates.crt", O_RDONLY) = 6\nopenat(AT_FDCWD, "/etc/localtime", O_RDONLY|O_CLOEXEC) = 6\nylz@yltest:~$\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4ece\u4e0a\u9762\u53ef\u4ee5\u770b\u5230, curl \u5982\u679c\u4e0d\u6307\u5b9a ca \u53c2\u6570\u7684\u8bdd,\u5219\u4f1a\u5230/etc/ssl \u76ee\u5f55\u4e0b\u67e5\u627e")),(0,r.kt)("h3",{id:"curl-\u5e26\u53c2\u6570cacert\u8bbf\u95ee"},"curl \u5e26\u53c2\u6570(cacert)\u8bbf\u95ee"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"man curl"),"\u6765\u67e5\u770b\u51e0\u4e2a\u91cd\u8981\u7684\u8ddf\u53c2\u6570\u76f8\u5173\u7684\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},'--cacert <CA certificate>\n              (SSL)  Tells  curl  to use the specified certificate file to verify the peer. The file may contain multiple CA certificates...\n--capath <CA certificate directory>\n              (SSL) Tells curl to use the specified certificate directory to verify the peer. Multiple paths can be  provided  by  separating  them with  ":"  (e.g.   "path1:path2:path3")...\n')),(0,r.kt)("h2",{id:"ca-certificates"},"ca-certificates"),(0,r.kt)("p",null,"ca-certificates \u5219\u662f\u4e00\u4e2a\u5305, \u7528\u4e8e\u7ef4\u62a4\u6839\u8bc1\u4e66\u5e93.\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"dpkg -L ca-certificates"),"\u6765\u67e5\u770b\u8bc1\u4e66\u76f8\u5173\u4fe1\u606f,\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"apt-cache show ca-certificates")," \u67e5\u770b\u76f8\u5173\u4fe1\u606f."),(0,r.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b, \u7cfb\u7edf\u5b89\u88c5\u597d\u4e4b\u540e\u57fa\u672c\u5c31\u4e0d\u4f1a\u518d\u505a\u64cd\u4f5c\u4e86\uff0c\u90a3\u5982\u4f55\u66f4\u65b0\u6839\u8bc1\u4e66\u5462?"),(0,r.kt)("p",null,"\u6709\u4e00\u4e2a\u5de5\u5177",(0,r.kt)("inlineCode",{parentName:"p"},"update-ca-certificates"),"\u53ef\u4ee5\u624b\u52a8\u66f4\u65b0\u6839\u8bc1\u4e66\u4fe1\u606f, \u5177\u4f53\u53ef\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"man update-ca-certificates"),"\u67e5\u770b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ylz@yltest:~$ sudo update-ca-certificates\n[sudo] password for ylz:\nUpdating certificates in /etc/ssl/certs...\n0 added, 0 removed; done.\nRunning hooks in /etc/ca-certificates/update.d...\ndone.\nylz@yltest:~$\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u5b89\u88c5 curl \u7684\u65f6\u5019\uff0c\u9ed8\u8ba4\u4f1a\u5b89\u88c5 ca-certificates\uff0c\u5b9e\u9645\u4e0a\u8fd9\u4e2a\u5305\u7531 OpenSSL \u5b89\u88c5\u7684\u3002curl \u662f\u901a\u8fc7 OpenSSL \u5b9e\u73b0\u5ba2\u6237\u7aef HTTPS \u534f\u8bae\u7684\uff0c\u5c31\u662f\u8bf4\u5728 curl/openSSL \u5e73\u53f0\u4e0b\uff0ccurl \u4f7f\u7528\u7684\u6839\u8bc1\u4e66\u5e93\u90fd\u662f\u7531 ca-certificates \u5305\u5904\u7406\u3002")),(0,r.kt)("h2",{id:"x509-certificate-signed-by-unknown-authority"},"x509: certificate signed by unknown authority"),(0,r.kt)("h3",{id:"\u5bb9\u5668\u955c\u50cf\u8bbf\u95ee-https-\u62a5\u9519"},"\u5bb9\u5668\u955c\u50cf\u8bbf\u95ee https \u62a5\u9519"),(0,r.kt)("p",null,"\u4f7f\u7528\u7684\u955c\u50cf\u672c\u8eab\u6ca1\u6709\u5305\u542b",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/ssl"),"\u76ee\u5f55\uff0c\u540c\u65f6\u5728 Dockerfile \u4e2d\u4e5f\u6ca1\u6709\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"apt install ca-certificates"),"\u6765\u5b89\u88c5, \u56e0\u6b64\u5728\u8bf7\u6c42 https \u65f6\u4f1a\u51fa\u73b0\u6b64\u95ee\u9898."),(0,r.kt)("h3",{id:"filebeat-\u8bbf\u95ee-8x-\u62a5\u9519"},"filebeat \u8bbf\u95ee 8.x \u62a5\u9519"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'output.elasticsearch:\n  hosts: ["https://xxx:9200"]\n  username: "xxx"\n  password: "xxx"\n')),(0,r.kt)("p",null,"\u5982\u4e0a\u914d\u7f6e\u8fde\u63a5 es \u62a5\u9519\uff0c\u56e0\u4e3a es \u9ed8\u8ba4\u5b89\u88c5\u7684\u8bc1\u4e66\u672a\u4f7f\u7528\u7cfb\u7edf\u81ea\u5e26\u7684\u6839\u8bc1\u4e66\uff0c\u9700\u8981\u624b\u52a8\u6307\u5b9a\uff0c\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},'# ${ES_HOME}/config/certs/http_ca.crt\nssl.certificate_authorities: "./http_ca.crt"\n')),(0,r.kt)("p",null,"\u53c2\u8003\uff1a\n",(0,r.kt)("a",{parentName:"p",href:"https://izsk.me/2020/06/18/why-x509-error-when-curl-https/"},"\u8bbf\u95eehttps\u65f6\u4e3a\u4f55\u4f1a\u51fa\u73b0x509 certificate signed by unknown authority")))}O.isMDXComponent=!0}}]);