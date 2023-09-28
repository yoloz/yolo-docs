"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[1558],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),y=a,v=u["".concat(c,".").concat(y)]||u[y]||d[y]||o;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},56597:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"java/\u6dfb\u52a0\u5bc6\u7801\u5e93BouncyCastle",id:"java/\u6dfb\u52a0\u5bc6\u7801\u5e93BouncyCastle",title:"\u6dfb\u52a0\u5bc6\u7801\u5e93BouncyCastle",description:"\u5e38\u89c1\u7684\u5bc6\u7801\u5e93",source:"@site/docs/java/\u6dfb\u52a0\u5bc6\u7801\u5e93BouncyCastle.md",sourceDirName:"java",slug:"/java/\u6dfb\u52a0\u5bc6\u7801\u5e93BouncyCastle",permalink:"/docs/java/\u6dfb\u52a0\u5bc6\u7801\u5e93BouncyCastle",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/java/\u6dfb\u52a0\u5bc6\u7801\u5e93BouncyCastle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6cdb\u578b\u901a\u914d\u7b26\u7684\u533a\u522b",permalink:"/docs/java/\u6cdb\u578b\u901a\u914d\u7b26\u7684\u533a\u522b"},next:{title:"\u7ebf\u7a0b\u5b89\u5168\u7684\u5355\u4f8b",permalink:"/docs/java/\u7ebf\u7a0b\u5b89\u5168\u7684\u5355\u4f8b"}},c={},s=[{value:"maven \u5f15\u5165\u4f9d\u8d56\u5305\u65b9\u5f0f",id:"maven-\u5f15\u5165\u4f9d\u8d56\u5305\u65b9\u5f0f",level:2},{value:"\u914d\u7f6e java.security \u7684\u65b9\u5f0f",id:"\u914d\u7f6e-javasecurity-\u7684\u65b9\u5f0f",level:2},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Comparison_of_cryptography_libraries"},"\u5e38\u89c1\u7684\u5bc6\u7801\u5e93")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.bouncycastle.org/java.html"},"BouncyCastle")," \u662f\u4e00\u79cd\u7528\u4e8e Java \u5e73\u53f0\u7684\u5f00\u653e\u6e90\u7801\u7684\u8f7b\u91cf\u7ea7\u5bc6\u7801\u5e93\u5305\uff0c\u652f\u6301\u5927\u91cf\u7684\u5bc6\u7801\u7b97\u6cd5\uff0c\u80fd\u591f\u63d0\u4f9b\u6570\u5b57\u8bc1\u4e66\u8f6c\u6362\u6240\u9700\u8981\u7684\u7c7b\u548c\u65b9\u6cd5\u3002"),(0,a.kt)("h2",{id:"maven-\u5f15\u5165\u4f9d\u8d56\u5305\u65b9\u5f0f"},"maven \u5f15\u5165\u4f9d\u8d56\u5305\u65b9\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pom.xml \u6587\u4ef6\u4e2d\u5f15\u5165 bouncycastle \u7684 jar \u5305\u4f9d\u8d56")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.bouncycastle</groupId>\n    <artifactId>bcprov-jdk18on</artifactId>\n    <version>1.73</version>\n</dependency>\n<dependency>\n    <groupId>org.bouncycastle</groupId>\n    <artifactId>bcprov-ext-jdk18on</artifactId>\n    <version>1.73</version>\n</dependency>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u518c BouncyCastle\uff0c\u6ce8\u518c\u53ea\u9700\u8981\u5728\u542f\u52a8\u65f6\u8fdb\u884c\u4e00\u6b21\uff0c\u540e\u7eed\u5c31\u53ef\u4ee5\u4f7f\u7528 BouncyCastle \u63d0\u4f9b\u7684\u6240\u6709\u54c8\u5e0c\u7b97\u6cd5\u548c\u52a0\u5bc6\u7b97\u6cd5\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void case1(){\n    // \u6ce8\u518cBouncyCastle:\n    Security.addProvider(new BouncyCastleProvider());\n    // \u6309\u540d\u79f0\u6b63\u5e38\u8c03\u7528:\n    try {\n        md = MessageDigest.getInstance("RipeMD160");\n        md.update("HelloWorld".getBytes("UTF-8"));\n    } catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {\n        e.printStackTrace();\n    }\n    byte[] result = md.digest();\n    System.out.println(new BigInteger(1, result).toString(16));\n}\n')),(0,a.kt)("h2",{id:"\u914d\u7f6e-javasecurity-\u7684\u65b9\u5f0f"},"\u914d\u7f6e java.security \u7684\u65b9\u5f0f"),(0,a.kt)("h3",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.bouncycastle.org/latest_releases.html"},"\u4e0b\u8f7d\u94fe\u63a5"),"\uff0c\u4e0b\u62c9\u9875\u9762\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"SIGNED JAR FILES"),"\uff0c\u4ece\u5176\u5217\u8868\u4e2d\u4e0b\u8f7d\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"JDK 1.8 and later")," \u884c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"bcprov-jdk18on-173.jar"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"bcprov-ext-jdk18on-173.jar")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u901a\u5e38\u4f7f\u7528\u5230\u7684\u662f bcprov \u5e93,bcprov-ext \u5305\u542b\u4e00\u4e9b\u6666\u6da9\u7684\u52a0\u5bc6\u7b97\u6cd5\uff0c\u8fd9\u4e9b\u7b97\u6cd5\u81ea v1.4.0 \u4ee5\u6765\u4e00\u76f4\u672a\u5305\u542b\u5728\u4e3b\u8981\u7248\u672c\u4e2d\u3002")),(0,a.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5c06\u4e0a\u8ff0\u4e0b\u8f7d\u7684\u4e24\u4e2a jar \u5305\u653e\u5230\u5230\u7cfb\u7edf JAVA \u914d\u7f6e\u8def\u5f84\u4e0b\uff0c\u5177\u4f53\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"xx/jdk1.8.0_261/jre/lib/ext/"),";"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"li"},"xxx/jdk/jre/lib/security/java.security"),"\uff0c\u76f8\u5173\u4f4d\u7f6e\u6dfb\u52a0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"#\n# List of providers and their preference orders (see above):\n#\nsecurity.provider.1=sun.security.provider.Sun\nsecurity.provider.2=sun.security.rsa.SunRsaSign\nsecurity.provider.3=sun.security.ec.SunEC\nsecurity.provider.4=com.sun.net.ssl.internal.ssl.Provider\nsecurity.provider.5=com.sun.crypto.provider.SunJCE\nsecurity.provider.6=sun.security.jgss.SunProvider\nsecurity.provider.7=com.sun.security.sasl.Provider\nsecurity.provider.8=org.jcp.xml.dsig.internal.dom.XMLDSigRI\nsecurity.provider.9=sun.security.smartcardio.SunPCSC\n\n#\u524d\u9762\u662fjava\u73af\u5883\u5df2\u7ecf\u63d0\u4f9b\u7684\uff0c\u6dfb\u52a0\u4e00\u884c\nsecurity.provider.10=org.bouncycastle.jce.provider.BouncyCastleProvider\n")),(0,a.kt)("p",null,"\u67e5\u770b\u672c\u5730 java \u7cfb\u7edf\u4e2d\u5b89\u88c5\u7684\u6240\u6709\u7684 JCE \u63d0\u4f9b\u8005\u548c\u4e00\u4e9b\u76f8\u5e94\u7b97\u6cd5:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void case2(){\n    System.out.println("-------\u5217\u51fa\u52a0\u5bc6\u670d\u52a1\u63d0\u4f9b\u8005-----");\n    Provider[] pro=Security.getProviders();\n    for(Provider p:pro){\n        System.out.println("Provider:"+p.getName()+" - version:"+p.getVersion());\n        System.out.println(p.getInfo());\n    }\n    System.out.println("");\n    System.out.println("-------\u5217\u51fa\u7cfb\u7edf\u652f\u6301\u7684\u6d88\u606f\u6458\u8981\u7b97\u6cd5\uff1a");\n    for(String s:Security.getAlgorithms("MessageDigest")){\n        System.out.println(s);\n    }\n    System.out.println("-------\u5217\u51fa\u7cfb\u7edf\u652f\u6301\u7684\u751f\u6210\u516c\u94a5\u548c\u79c1\u94a5\u5bf9\u7684\u7b97\u6cd5\uff1a");\n    for(String s:Security.getAlgorithms("KeyPairGenerator")){\n        System.out.println(s);\n    }\n}\n')))}d.isMDXComponent=!0}}]);