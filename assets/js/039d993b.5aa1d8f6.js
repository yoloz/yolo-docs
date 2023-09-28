"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[5046],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},k=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,d=c["".concat(i,".").concat(u)]||c[u]||y[u]||l;return n?r.createElement(d,s(s({ref:t},k),{},{components:n})):r.createElement(d,s({ref:t},k))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={},s=void 0,o={unversionedId:"security/\u5de5\u5177keytool\u4f7f\u7528",id:"security/\u5de5\u5177keytool\u4f7f\u7528",title:"\u5de5\u5177keytool\u4f7f\u7528",description:"keytool \u7b80\u4ecb",source:"@site/docs/security/\u5de5\u5177keytool\u4f7f\u7528.md",sourceDirName:"security",slug:"/security/\u5de5\u5177keytool\u4f7f\u7528",permalink:"/docs/security/\u5de5\u5177keytool\u4f7f\u7528",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/security/\u5de5\u5177keytool\u4f7f\u7528.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u81ea\u7b7e\u540d\u8bc1\u4e66(https)",permalink:"/docs/security/\u521b\u5efa\u81ea\u7b7e\u540d\u8bc1\u4e66(https)"},next:{title:"\u6570\u636e\u5b89\u5168\u4e09\u8981\u7d20",permalink:"/docs/security/\u6570\u636e\u5b89\u5168\u4e09\u8981\u7d20"}},i={},p=[{value:"keytool \u7b80\u4ecb",id:"keytool-\u7b80\u4ecb",level:2},{value:"keytool \u4f7f\u7528",id:"keytool-\u4f7f\u7528",level:2},{value:"\u521b\u5efa\u8bc1\u4e66\u5e93",id:"\u521b\u5efa\u8bc1\u4e66\u5e93",level:3},{value:"\u67e5\u770b\u751f\u6210\u7684\u8bc1\u4e66",id:"\u67e5\u770b\u751f\u6210\u7684\u8bc1\u4e66",level:3},{value:"\u5bfc\u51fa\u8bc1\u4e66\u4fe1\u606f",id:"\u5bfc\u51fa\u8bc1\u4e66\u4fe1\u606f",level:3},{value:"\u5bfc\u5165\u8bc1\u4e66",id:"\u5bfc\u5165\u8bc1\u4e66",level:3},{value:"\u6253\u5370\u8bc1\u4e66\u4fe1\u606f",id:"\u6253\u5370\u8bc1\u4e66\u4fe1\u606f",level:3},{value:"jks \u8f6c pkcs12",id:"jks-\u8f6c-pkcs12",level:3},{value:"\u751f\u6210\u8bc1\u4e66\u7b7e\u540d\u8bf7\u6c42(CSR)",id:"\u751f\u6210\u8bc1\u4e66\u7b7e\u540d\u8bf7\u6c42csr",level:3},{value:"\u67e5\u770b\u751f\u6210\u7684 CSR \u8bc1\u4e66\u8bf7\u6c42",id:"\u67e5\u770b\u751f\u6210\u7684-csr-\u8bc1\u4e66\u8bf7\u6c42",level:3},{value:"\u66f4\u6539\u5bc6\u7801",id:"\u66f4\u6539\u5bc6\u7801",level:3}],k={toc:p},c="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"keytool-\u7b80\u4ecb"},"keytool \u7b80\u4ecb"),(0,a.kt)("p",null,"Keytool \u662f\u4e00\u4e2a Java \u6570\u636e\u8bc1\u4e66\u7684\u7ba1\u7406\u5de5\u5177,Keytool \u5c06\u5bc6\u94a5\uff08key\uff09\u548c\u8bc1\u4e66\uff08certificates\uff09\u5b58\u5728\u4e00\u4e2a\u79f0\u4e3a keystore \u7684\u6587\u4ef6\u4e2d\u3002\n\u5728 keystore \u91cc\uff0c\u5305\u542b\u4e24\u79cd\u6570\u636e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5bc6\u94a5\u5b9e\u4f53\uff08Key entity\uff09\u2014\u2014\u5bc6\u94a5\uff08secret key\uff09\u53c8\u6216\u8005\u662f\u79c1\u94a5\u548c\u914d\u5bf9\u516c\u94a5\uff08\u91c7\u7528\u975e\u5bf9\u79f0\u52a0\u5bc6\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4fe1\u4efb\u7684\u8bc1\u4e66\u5b9e\u4f53\uff08trusted certificate entries\uff09\u2014\u2014\u53ea\u5305\u542b\u516c\u94a5")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6211\u4eec\u5e38\u8bf4\u7684\u8bc1\u4e66\u5c31\u662f\u5c31\u662f\u4e0a\u9762\u7684\u516c\u94a5\uff0c\u516c\u94a5\u662f\u516c\u5f00\u7ed9\u5176\u5b83\u4eba\u4f7f\u7528\u7684")),(0,a.kt)("h2",{id:"keytool-\u4f7f\u7528"},"keytool \u4f7f\u7528"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"ketytool --help"),"\u547d\u4ee4\u53ef\u67e5\u770b\u529f\u80fd,\u4e3b\u8981\u529f\u80fd\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"-certreq            \u751f\u6210\u8bc1\u4e66\u8bf7\u6c42\n-changealias        \u66f4\u6539\u6761\u76ee\u7684\u522b\u540d\n-delete             \u5220\u9664\u6761\u76ee\n-exportcert         \u5bfc\u51fa\u8bc1\u4e66\n-genkeypair         \u751f\u6210\u5bc6\u94a5\u5bf9\n-genseckey          \u751f\u6210\u5bc6\u94a5\n-gencert            \u6839\u636e\u8bc1\u4e66\u8bf7\u6c42\u751f\u6210\u8bc1\u4e66\n-importcert         \u5bfc\u5165\u8bc1\u4e66\u6216\u8bc1\u4e66\u94fe\n-importpass         \u5bfc\u5165\u53e3\u4ee4\n-importkeystore     \u4ece\u5176\u4ed6\u5bc6\u94a5\u5e93\u5bfc\u5165\u4e00\u4e2a\u6216\u6240\u6709\u6761\u76ee\n-keypasswd          \u66f4\u6539\u6761\u76ee\u7684\u5bc6\u94a5\u53e3\u4ee4\n-list               \u5217\u51fa\u5bc6\u94a5\u5e93\u4e2d\u7684\u6761\u76ee\n-printcert          \u6253\u5370\u8bc1\u4e66\u5185\u5bb9\n-printcertreq       \u6253\u5370\u8bc1\u4e66\u8bf7\u6c42\u7684\u5185\u5bb9\n-printcrl           \u6253\u5370 CRL\u6587\u4ef6\u7684\u5185\u5bb9\n-storepasswd        \u66f4\u6539\u5bc6\u94a5\u5e93\u7684\u5b58\u50a8\u53e3\u4ee4\n")),(0,a.kt)("h3",{id:"\u521b\u5efa\u8bc1\u4e66\u5e93"},"\u521b\u5efa\u8bc1\u4e66\u5e93"),(0,a.kt)("p",null,"\u521b\u5efa\u79d8\u94a5\u5e93(keystore),\u79d8\u94a5\u5e93\u662f\u5b58\u50a8\u4e00\u4e2a\u6216\u591a\u4e2a\u5bc6\u94a5\u6761\u76ee\u7684\u6587\u4ef6\uff0c\u6bcf\u4e2a\u5bc6\u94a5\u6761\u76ee\u5e94\u8be5\u4ee5\u4e00\u4e2a\u522b\u540d\u6807\u8bc6\uff0c\u5b83\u5305\u542b\u5bc6\u94a5\u548c\u8bc1\u4e66\u76f8\u5173\u4fe1\u606f\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",'\u5982\u679c\u4f7f\u7528"keytool -genkeypair"\u547d\u4ee4\u751f\u6210\u5bc6\u94a5\u6761\u76ee\uff0c\u5219\u4f1a\u751f\u6210\u4e00\u4e2a\u5bc6\u94a5\u5bf9\uff08\u516c\u94a5\u548c\u76f8\u5173\u79c1\u94a5\uff09\u5e76\u5c06\u516c\u94a5\u5305\u88c5\u5230 X.509 v3 \u81ea\u7b7e\u540d\u8bc1\u4e66\u4e2d\uff0c\u8be5\u8bc1\u4e66\u5b58\u50a8\u4e3a\u5355\u4e2a\u5143\u7d20\u8bc1\u4e66\u94fe\uff0c\u6b64\u8bc1\u4e66\u94fe\u548c\u79c1\u94a5\u5b58\u50a8\u5728\u4ee5\u522b\u540d\u6807\u8bc6\u7684\u5bc6\u94a5\u5e93\u6761\u76ee\u4e2d\uff0c\u6761\u76ee\u7c7b\u578b\u4e3a PrivateKeyEntry\u3002',(0,a.kt)("br",{parentName:"p"}),"\n",'\u5982\u679c\u4f7f\u7528"keytool -genseckey"\u547d\u4ee4\u751f\u6210\u5bc6\u94a5\u6761\u76ee\uff0c\u5219\u4f1a\u751f\u6210\u4e00\u4e2a\u5bc6\u94a5\u5e76\u5c06\u5176\u5b58\u50a8\u5728\u4ee5\u522b\u540d\u6807\u8bc6\u7684\u5bc6\u94a5\u5e93\u6761\u76ee\u4e2d\uff0c\u6761\u76ee\u7c7b\u578b\u4e3a SecretKeyEntry\u3002'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'keytool -genkeypair \\\n        -alias localhost \\\n        -keyalg RSA \\\n        -keysize 2048\n        -keypass 123456 \\\n        -sigalg SHA256withRSA \\\n        -dname "cn=github.com,ou=github.com,Inc.,o=Github, Inc.,l=San Francisco,st=California,c=US" \\\n        -validity 3650 \\\n        -keystore ddssingsong.p12 \\\n        -storetype PKCS12 \\\n        -storepass 123456\n        -ext SAN=dns:github.com,dns:www.github.com,ip:127.0.0.1\n')),(0,a.kt)("p",null,'\u5982\u679c\u521b\u5efa\u9ed8\u8ba4\u7c7b\u578b(JKS)\u7684\u5bc6\u94a5\u5e93\uff0c\u5219\u53ef\u9644\u52a0"-keypass"\u53c2\u6570\u6307\u5b9a\u6761\u76ee\u7684\u5bc6\u94a5\u53e3\u4ee4\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u5219\u4f1a\u5728\u6700\u540e\u4e00\u6b65\u63d0\u793a"\u8f93\u5165\u8be5\u6761\u76ee\u7684\u5bc6\u94a5\u53e3\u4ee4\uff0c\u5982\u679c\u4e0e\u5bc6\u94a5\u5e93\u53e3\u4ee4\u76f8\u540c\u6309\u56de\u8f66"\uff0c\u4e00\u822c\u8bbe\u4e3a\u4e0e\u5bc6\u94a5\u5e93\u53e3\u4ee4\u76f8\u540c\u3002\u5982\u679c\u521b\u5efa PKCS12 \u7c7b\u578b\u7684\u5bc6\u94a5\u5e93\uff0c\u5219\u4f1a\u5ffd\u7565\u6761\u76ee\u7684\u5bc6\u94a5\u53e3\u4ee4\u76f8\u5173\u53c2\u6570\uff0c\u56e0\u4e3a PKCS12 \u4e0d\u652f\u6301\u8bbe\u7f6e\u5bc6\u94a5\u5e93\u6761\u76ee\u5bc6\u7801\uff0c\u9ed8\u8ba4\u5b83\u4e0e\u5bc6\u94a5\u5e93\u5bc6\u7801\u4e00\u81f4'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"alias \u4ea7\u751f\u522b\u540d\uff0c\u6bcf\u4e2a keystore \u90fd\u5173\u8054\u8fd9\u4e00\u4e2a\u72ec\u4e00\u65e0\u4e8c\u7684 alias")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"keyalg RSA \u6b64\u5904\u201dRSA\u201c\u4e3a\u5bc6\u94a5\u7684\u7b97\u6cd5\u3002\u53ef\u4ee5\u9009\u62e9\u7684\u5bc6\u94a5\u7b97\u6cd5\u6709\uff1aRSA\u3001DSA\u3001EC\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"keysize 2048 \u5bc6\u94a5\u957f\u5ea6\u3002keysize \u4e0e keyalg \u9ed8\u8ba4\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\uff1a\n|size|desc|\n|:--|:--|\n2048|when using -genkeypair and -keyalg is \u201cRSA\u201d\n1024|when using -genkeypair and -keyalg is \u201cDSA\u201d\n256|when using -genkeypair and -keyalg is \u201cEC\u201d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"keypass \u6307\u5b9a\u522b\u540d\u6761\u76ee\u7684\u5bc6\u7801(\u79c1\u94a5\u7684\u5bc6\u7801)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"sigalg \u7b7e\u540d\u7b97\u6cd5\u5982\u4e0b:\n|keyalg|sigalg|\n|:--|:--|\nRSA|MD5withRSA\u3001SHA1withRSA\u3001SHA256withRSA\u3001SHA384withRSA\u3001SHA512withRSA\nDSA|SHA1withDSA\u3001SHA256withDSA"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"MD5 \u548c SHA1 \u7684\u7b7e\u540d\u7b97\u6cd5\u5df2\u7ecf\u4e0d\u5b89\u5168")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"dname \u5728\u6b64\u586b\u5199\u8bc1\u4e66\u4fe1\u606f",(0,a.kt)("br",{parentName:"li"}),"CN=\u540d\u5b57\u4e0e\u59d3\u6c0f/\u57df\u540d,OU=\u7ec4\u7ec7\u5355\u4f4d\u540d\u79f0,O=\u7ec4\u7ec7\u540d\u79f0,L=\u57ce\u5e02\u6216\u533a\u57df\u540d\u79f0,ST=\u5dde\u6216\u7701\u4efd\u540d\u79f0,C=\u5355\u4f4d\u7684\u4e24\u5b57\u6bcd\u56fd\u5bb6\u4ee3\u7801",(0,a.kt)("br",{parentName:"li"}),'"\u540d\u5b57\u4e0e\u59d3\u6c0f"\u5e94\u8be5\u662f\u8f93\u5165\u57df\u540d\uff0c\u800c\u4e0d\u662f\u6211\u4eec\u7684\u4e2a\u4eba\u59d3\u540d\uff0c\u5176\u4ed6\u7684\u53ef\u4ee5\u4e0d\u586b'),(0,a.kt)("li",{parentName:"ul"},"validity 3650 \u6b64\u5904\u201d3650\u201c\u4e3a\u8bc1\u4e66\u6709\u6548\u671f\u5929\u6570"),(0,a.kt)("li",{parentName:"ul"},"keystore \u521b\u5efa\u51fa\u7684\u5bc6\u94a5\u751f\u6210\u8def\u5f84\uff0c\u9ed8\u8ba4\u5728\u5f53\u524d\u76ee\u5f55\u521b\u5efa\u8bc1\u4e66\u5e93"),(0,a.kt)("li",{parentName:"ul"},"storetype \u751f\u6210\u8bc1\u4e66\u7c7b\u578b\uff0c\u53ef\u7528\u7684\u8bc1\u4e66\u5e93\u7c7b\u578b\u4e3a\uff1aJKS\u3001PKCS12 \u7b49\u3002jdk9 \u4ee5\u524d\uff0c\u9ed8\u8ba4\u4e3a JKS\u3002\u81ea jdk9 \u5f00\u59cb\uff0c\u9ed8\u8ba4\u4e3a PKCS12\u3002"),(0,a.kt)("li",{parentName:"ul"},"storepass \u6307\u5b9a\u5bc6\u94a5\u5e93\u7684\u5bc6\u7801(\u83b7\u53d6 keystore \u4fe1\u606f\u6240\u9700\u7684\u5bc6\u7801)\uff0c\u6700\u597d\u4e0e keypass \u4e00\u81f4"),(0,a.kt)("li",{parentName:"ul"},"ext ",(0,a.kt)("a",{parentName:"li",href:"/docs/security/X.509%E4%B8%AD%E7%9A%84%E6%89%A9%E5%B1%95%E9%A1%B9"},"X.509 extension"))),(0,a.kt)("h3",{id:"\u67e5\u770b\u751f\u6210\u7684\u8bc1\u4e66"},"\u67e5\u770b\u751f\u6210\u7684\u8bc1\u4e66"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ keytool -list -v -keystore ddssingsong.p12 -storepass 123456\n\u5bc6\u94a5\u5e93\u7c7b\u578b: PKCS12\n\u5bc6\u94a5\u5e93\u63d0\u4f9b\u65b9: SUN\n\n\u60a8\u7684\u5bc6\u94a5\u5e93\u5305\u542b 1 \u4e2a\u6761\u76ee\n\n\u522b\u540d: ddssingsong\n\u521b\u5efa\u65e5\u671f: 2019-9-11\n\u6761\u76ee\u7c7b\u578b: PrivateKeyEntry\n\u8bc1\u4e66\u94fe\u957f\u5ea6: 1\n\u8bc1\u4e66[1]:\n\u6240\u6709\u8005: CN=mydomain, OU=xxx, O=xxx, L=Beijing, ST=Beijing, C=CN\n\u53d1\u5e03\u8005: CN=mydomain, OU=xxx, O=xxx, L=Beijing, ST=Beijing, C=CN\n\u5e8f\u5217\u53f7: 291b04d1\n\u6709\u6548\u671f\u4e3a Wed Sep 11 09:30:36 CST 2019 \u81f3 Sat Sep 08 09:30:36 CST 2029\n\u8bc1\u4e66\u6307\u7eb9:\n         MD5:  3D:75:33:93:1C:BF:07:78:68:8E:54:7B:30:1B:EB:79\n         SHA1: 32:F2:6C:1A:F0:A8:9A:E9:92:A2:AF:7F:2D:35:FA:37:FD:28:7C:BD\n         SHA256: 0E:1E:7D:2E:CB:57:72:BC:7D:FE:C8:F0:24:48:2A:31:69:B2:D2:F2:2E:BC:03:9A:D4:15:BD:15:BE:5F:5F:2D\n\u7b7e\u540d\u7b97\u6cd5\u540d\u79f0: SHA256withRSA\n\u4e3b\u4f53\u516c\u5171\u5bc6\u94a5\u7b97\u6cd5: 2048 \u4f4d RSA \u5bc6\u94a5\n\u7248\u672c: 3\n\n\u6269\u5c55:\n\n#1: ObjectId: 2.5.29.14 Criticality=false\nSubjectKeyIdentifier [\nKeyIdentifier [\n0000: 34 44 40 24 BA 6F 5D 7F   0A 45 BE C3 24 BD A7 C8  4D@$.o]..E..$...\n0010: 9C 62 8C 9A                                        .b..\n")),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u9700\u8981\u67e5\u770b base64 \u7684\u5185\u5bb9(\u5373 PEM \u7f16\u7801)",(0,a.kt)("inlineCode",{parentName:"p"},"keytool -list  -rfc -keystore ddssingsong.p12 -storepass 123456"),",\u6253\u5370\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ keytool -list  -rfc -keystore ddssingsong.p12 -storepass 123456\n\u5bc6\u94a5\u5e93\u7c7b\u578b: PKCS12\n\u5bc6\u94a5\u5e93\u63d0\u4f9b\u65b9: SUN\n\n\u60a8\u7684\u5bc6\u94a5\u5e93\u5305\u542b 1 \u4e2a\u6761\u76ee\n\n\u522b\u540d: ddssingsong\n\u521b\u5efa\u65e5\u671f: 2019-9-11\n\u6761\u76ee\u7c7b\u578b: PrivateKeyEntry\n\u8bc1\u4e66\u94fe\u957f\u5ea6: 1\n\u8bc1\u4e66[1]:\n-----BEGIN CERTIFICATE-----\nMIIDXzCCAkegAwIBAgIEKRsE0TANBgkqhkiG9w0BAQsFADBgMQswCQYDVQQGEwJD\nTjEQMA4GA1UECBMHQmVpamluZzEQMA4GA1UEBxMHQmVpamluZzEMMAoGA1UEChMD\neHh4MQwwCgYDVQQLEwN4eHgxETAPBgNVBAMTCG15ZG9tYWluMB4XDTE5MDkxMTAx\nMzAzNloXDTI5MDkwODAxMzAzNlowYDELMAkGA1UEBhMCQ04xEDAOBgNVBAgTB0Jl\naWppbmcxEDAOBgNVBAcTB0JlaWppbmcxDDAKBgNVBAoTA3h4eDEMMAoGA1UECxMD\neHh4MREwDwYDVQQDEwhteWRvbWFpbjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCC\nAQoCggEBALSFrqyYNse3A/UMnKF6+G13YsrOEWJ3ZSRevMmNqgdqC9sNjtx07jw7\nAQImxsfvaRLyPWgIt7iJxIU4USn0ARctv/ambzUPGk30bkq/Lst8PZmJGp6xRTdK\njYkk/jqxIA56ChqKV4yd5ZbRAAXCt/rJxlKNCfg7/929xf9+8Topty96gohm3rXP\nsMkkmFHjlVUTUnNstmL8UjseS1K3Yomg1CrZ/CP1mYFrn2av0JHW11wd5Crbkzni\nizubzakjw9aDGRIsu4h6r5Dk+MiTDAszmYE7p2yvqFJNrkxxURAnZJ4H4AwtA84l\nKYB1QvESc9vzH35OOQpiJVH9Gob1EBUCAwEAAaMhMB8wHQYDVR0OBBYEFDREQCS6\nb11/CkW+wyS9p8icYoyaMA0GCSqGSIb3DQEBCwUAA4IBAQBdIpzxtgrcYBoTEkh5\nhGJWsa55CPFF0pAWeS0lVC6hE/jvS8ujZC3ReCVVLtl7B+qakQVI7B8sOR+l4cAz\nns01/oWBAmOTUbsEUOaxHedCkxNOTKM1BppCxWcc6jZTtvf9F4ROuCR47jUk+v3Q\nFJfV7XtKQtupFeS5XmZv+3hVtFoxL5RZWG0XjjfOIoQ+WoPaWxByEAmK3xAGZxVm\nMBgGtv5QwQSJG7baEYTG5pVYM7wdPRjEC1ARnyBuhe/KBeWdpCXfeAtEmccNORov\nC2JAvDZGv8Dwam+sIZm0iTNOwKJOmwRbj58k41QH5D1/nCZrA1TRLwCOlpW/Ejns\nOA1/\n-----END CERTIFICATE-----\n")),(0,a.kt)("h3",{id:"\u5bfc\u51fa\u8bc1\u4e66\u4fe1\u606f"},"\u5bfc\u51fa\u8bc1\u4e66\u4fe1\u606f"),(0,a.kt)("p",null,"\u5c06\u5bc6\u94a5\u5e93 ddssngong.jks \u4e2d\u522b\u540d\u4e3a ddss \u6761\u76ee\u7684\u76f8\u5173\u4fe1\u606f\u4ee5\u53ca\u516c\u94a5\u5bfc\u51fa\u5230\u4e00\u4e2a\u6570\u5b57\u8bc1\u4e66\u6587\u4ef6 rootca.crt \u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"keytool -exportcert \\\n        -alias ddss \\\n        -keystore ddssngong.jks \\\n        -file rootca.crt \\\n        -storepass 123456\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8be5\u8bc1\u4e66\u6587\u4ef6\u4e0d\u5305\u542b\u79c1\u94a5")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"file \u8f93\u51fa\u8bc1\u4e66\u6587\u4ef6\u8def\u5f84"),(0,a.kt)("li",{parentName:"ul"},"alias ",(0,a.kt)("strong",{parentName:"li"},"\u4e3a\u4ec0\u4e48\u8981\u522b\u540d"),",\u56e0\u4e3a ddssngong.jks \u91cc\u53ef\u4ee5\u5b58\u50a8\u591a\u5bf9\u516c\u79c1\u94a5\u6587\u4ef6\uff0c\u5b83\u4eec\u4e4b\u95f4\u662f\u901a\u8fc7\u522b\u540d\u533a\u5206\u7684\uff0c\u6240\u4ee5\u8fd9\u91cc\u662f\u901a\u8fc7\u522b\u540d\u6307\u5b9a\u5bfc\u51fa\u7684\u662f\u5bc6\u94a5\u6587\u4ef6\u91cc\u522b\u540d\u662f ddss \u7684\u516c\u94a5\u8bc1\u4e66"),(0,a.kt)("li",{parentName:"ul"},"\u6b64\u65f6\u5bfc\u51fa\u7684\u8bc1\u4e66\u4e3a DER \u7f16\u7801\u683c\u5f0f\uff0c-rfc \u9009\u9879\u53ef\u8f93\u51fa pem \u7f16\u7801\u683c\u5f0f\u7684\u8bc1\u4e66")),(0,a.kt)("h3",{id:"\u5bfc\u5165\u8bc1\u4e66"},"\u5bfc\u5165\u8bc1\u4e66"),(0,a.kt)("p",null,"\u5bfc\u5165\u8bc1\u4e66\u5176\u5b9e\u662f\u5728\u5ba2\u6237\u673a\u5668\u4e0a\u4f7f\u7528\u7684",(0,a.kt)("br",{parentName:"p"}),"\n","\u53cc\u51fb xxx.cer \u5b8c\u6210\u5bfc\u5165\u64cd\u4f5c(window \u4e2d\u5bfc\u5165)",(0,a.kt)("br",{parentName:"p"}),"\n",'\u5c06\u4fe1\u4efb\u8bc1\u4e66 test.crt \u4ee5\u522b\u540d"test"\u5bfc\u5165\u5230\u5bc6\u94a5\u5e93 server.p12 \u4e2d',(0,a.kt)("inlineCode",{parentName:"p"},"keytool -importcert -alias test -file test.crt -keystore server.p12 -storepass 123456")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"cer \u662f crt \u8bc1\u4e66\u7684\u5fae\u8f6f\u5f62\u5f0f"),"\n",(0,a.kt)("em",{parentName:"p"},'\u5bfc\u5165 test.crt \u8bc1\u4e66\u540e\uff0c\u67e5\u770b\u5bc6\u94a5\u5e93 server.p12 \u4fe1\u606f\uff0c\u65b0\u589e\u4e00\u4e2a"test"\u6761\u76ee')),(0,a.kt)("p",null,"\u6ce8\uff1atest.crt \u662f\u7531\u53e6\u4e00\u4e2a\u5bc6\u94a5\u5e93 test.keystore \u751f\u6210\u7684\u8bc1\u4e66\uff0c\u5c06\u5176\u5bfc\u5165\u5230\u5bc6\u94a5\u5e93 server.p12 \u65f6\u6307\u5b9a\u7684\u6761\u76ee\u522b\u540d\u4e0d\u80fd\u4e0e\u5bc6\u94a5\u5e93\u4e2d\u5df2\u5b58\u5728\u7684\u6761\u76ee\u522b\u540d\u91cd\u590d\uff08\u5bfc\u5165\u7b7e\u53d1\u8bc1\u4e66\u9664\u5916\uff09\uff0c\u4e00\u822c\u4e0e\u5bfc\u51fa\u8be5\u8bc1\u4e66\u7684\u5bc6\u94a5\u5e93\u6761\u76ee\u522b\u540d\u76f8\u540c\uff0c\u6b64\u65f6\u7684\u5bfc\u5165\u6761\u76ee\u4f1a\u4ee5\u4fe1\u4efb\u8bc1\u4e66\u7684\u5f62\u5f0f\u4fdd\u5b58\uff0c\u6761\u76ee\u7c7b\u578b\u4e3a trustedCertEntry\u3002"),(0,a.kt)("h3",{id:"\u6253\u5370\u8bc1\u4e66\u4fe1\u606f"},"\u6253\u5370\u8bc1\u4e66\u4fe1\u606f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ keytool -printcert -file rootca.crt\n\u6240\u6709\u8005: CN=mydomain, OU=xxx, O=xxx, L=Beijing, ST=Beijing, C=CN\n\u53d1\u5e03\u8005: CN=mydomain, OU=xxx, O=xxx, L=Beijing, ST=Beijing, C=CN\n\u5e8f\u5217\u53f7: 291b04d1\n\u6709\u6548\u671f\u4e3a Wed Sep 11 09:30:36 CST 2019 \u81f3 Sat Sep 08 09:30:36 CST 2029\n\u8bc1\u4e66\u6307\u7eb9:\n         MD5:  3D:75:33:93:1C:BF:07:78:68:8E:54:7B:30:1B:EB:79\n         SHA1: 32:F2:6C:1A:F0:A8:9A:E9:92:A2:AF:7F:2D:35:FA:37:FD:28:7C:BD\n         SHA256: 0E:1E:7D:2E:CB:57:72:BC:7D:FE:C8:F0:24:48:2A:31:69:B2:D2:F2:2E:BC:03:9A:D4:15:BD:15:BE:5F:5F:2D\n\u7b7e\u540d\u7b97\u6cd5\u540d\u79f0: SHA256withRSA\n\u4e3b\u4f53\u516c\u5171\u5bc6\u94a5\u7b97\u6cd5: 2048 \u4f4d RSA \u5bc6\u94a5\n\u7248\u672c: 3\n\n\u6269\u5c55:\n\n#1: ObjectId: 2.5.29.14 Criticality=false\nSubjectKeyIdentifier [\nKeyIdentifier [\n0000: 34 44 40 24 BA 6F 5D 7F   0A 45 BE C3 24 BD A7 C8  4D@$.o]..E..$...\n0010: 9C 62 8C 9A                                        .b..\n]\n]\n")),(0,a.kt)("p",null,"\u6ce8\uff1a\u4e5f\u53ef\u4ee5\u4f7f\u7528 -sslserver ip:port \u7684\u53c2\u6570\uff0c\u76f4\u63a5\u4ece\u7f51\u7edc\u4e0a\u6253\u5370\u51fa\u67d0\u4e2a ssl server \u63d0\u4f9b\u7684\u8bc1\u4e66\u7684\u5185\u5bb9"),(0,a.kt)("h3",{id:"jks-\u8f6c-pkcs12"},"jks \u8f6c pkcs12"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ keytool -importkeystore \\\n        -srckeystore keystore.jks \\\n        -srcstoretype JKS \\\n        -deststoretype PKCS12 \\\n        -destkeystore keystore.p12\n")),(0,a.kt)("h3",{id:"\u751f\u6210\u8bc1\u4e66\u7b7e\u540d\u8bf7\u6c42csr"},"\u751f\u6210\u8bc1\u4e66\u7b7e\u540d\u8bf7\u6c42(CSR)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ keytool -certreq -keyalg RSA \\\n        -alias ddssingsong \\\n        -keystore keystore.p12 \\\n        -storetype PKCS12 \\\n        -storepass 123456 \\\n        -file certreq.csr\n")),(0,a.kt)("h3",{id:"\u67e5\u770b\u751f\u6210\u7684-csr-\u8bc1\u4e66\u8bf7\u6c42"},"\u67e5\u770b\u751f\u6210\u7684 CSR \u8bc1\u4e66\u8bf7\u6c42"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"keytool -printcertreq -file certreq.csr")),(0,a.kt)("h3",{id:"\u66f4\u6539\u5bc6\u7801"},"\u66f4\u6539\u5bc6\u7801"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"keytool -storepasswd -new new_storepass -keystore keystore.p12")))}y.isMDXComponent=!0}}]);