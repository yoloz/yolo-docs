"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[8703],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),g=o,f=p["".concat(c,".").concat(g)]||p[g]||d[g]||a;return r?t.createElement(f,i(i({ref:n},u),{},{components:r})):t.createElement(f,i({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1663:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=r(7462),o=(r(7294),r(3905));const a={},i=void 0,l={unversionedId:"java/log4j2\u4f7f\u7528",id:"java/log4j2\u4f7f\u7528",title:"log4j2\u4f7f\u7528",description:"ERROR StatusLogger Unrecognized conversion specifier [d]",source:"@site/docs/java/log4j2\u4f7f\u7528.md",sourceDirName:"java",slug:"/java/log4j2\u4f7f\u7528",permalink:"/docs/java/log4j2\u4f7f\u7528",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/java/log4j2\u4f7f\u7528.md",tags:[],version:"current",lastUpdatedAt:1689307169,formattedLastUpdatedAt:"2023\u5e747\u670814\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"jgss\u5e38\u89c1\u95ee\u9898",permalink:"/docs/java/jgss\u5e38\u89c1\u95ee\u9898"},next:{title:"slf4j\u7684\u9002\u914d\u5668\u5173\u7cfb",permalink:"/docs/java/slf4j\u7684\u9002\u914d\u5668\u5173\u7cfb"}},c={},s=[{value:"ERROR StatusLogger Unrecognized conversion specifier d",id:"error-statuslogger-unrecognized-conversion-specifier-d",level:2}],u={toc:s},p="wrapper";function d(e){let{components:n,...r}=e;return(0,o.kt)(p,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"error-statuslogger-unrecognized-conversion-specifier-d"},"ERROR StatusLogger Unrecognized conversion specifier ","[d]"),(0,o.kt)("p",null,"log4j2 \u662f\u91c7\u7528\u7684\u63d2\u4ef6\u5f0f\u7f16\u7a0b\uff0c\u5f53 log4j2 \u5305\u7f16\u8bd1\u65f6\u6216\u542b\u6709 log4j2 \u63d2\u4ef6\u7684\u5305\u7f16\u8bd1\u65f6\uff0c\u4f1a\u5c06\u9700\u8981\u52a0\u8f7d\u7684\u63d2\u4ef6\u4fe1\u606f\u653e\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"META-INF/org/apache/logging/log4j/core/config/plugins/Log4j2Plugins.dat")," \u8fd9\u4e2a\u6587\u4ef6\u4e2d\uff08\u5305\u62ec\u5b98\u65b9 logj42 \u7684\u539f\u751f\u63d2\u4ef6\uff09\uff0c\u7136\u540e\u9879\u76ee\u542f\u52a8\u7684\u65f6\u5019 log4j2 \u4f1a\u5728\u5404\u4e2a jar \u5305\u7684 META-INF \u76ee\u5f55\u4e0b\u626b\u63cf\u8fd9\u4e2a\u63d2\u4ef6\u4fe1\u606f\u6587\u4ef6\uff0c\u7136\u540e\u53bb\u52a0\u8f7d\u63d2\u4ef6\u3002"),(0,o.kt)("p",null,"\u5f53\u9879\u76ee\u88ab\u6253\u6210\u4e00\u4e2a jar \u5305\u65f6\uff0c\u5982\u679c\u4e24\u4e2a\u4e0d\u540c\u7684 jar \u5305\u4e2d\u90fd\u6709 Log4j2Plugins.dat \u8fd9\u4e2a\u6587\u4ef6\uff0c\u5c31\u4f1a\u51fa\u73b0\u95ee\u9898\uff0c\u5176\u4e2d\u4e00\u4e2a\u6587\u4ef6\u4f1a\u88ab\u53e6\u4e00\u4e2a\u8986\u76d6\uff0c\u5bfc\u81f4\u9879\u76ee\u542f\u52a8\u7684\u65f6\u5019\u6709\u4e00\u4e2a\u6587\u4ef6\u4e2d\u7684\u63d2\u4ef6\u4e0d\u80fd\u88ab\u6b63\u5e38\u52a0\u8f7d\uff0c\u5bfc\u81f4\u62a5\u9519\u3002"),(0,o.kt)("p",null,"\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u5c31\u662f\u5f53\u6240\u6709 jar \u5305\u88ab\u6253\u6210\u4e00\u4e2a jar \u5305\u65f6\uff0c\u9700\u8981\u5bf9\u5404\u4e2a jar \u5305\u4e2d\u7684 Log4j2Plugins.dat \u8fdb\u884c\u5408\u5e76\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"maven-shade-plugin.log4j2-cachefile-transformer"),"\u8fd9\u4e2a\u5305"),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"maven-shade-plugin.log4j2-cachefile-transformer \u4e0d\u540c\u7248\u672c\u4e4b\u95f4\u6709\u5dee\u5f02\uff0c\u8981\u6ce8\u610f\u4f7f\u7528\u7684 log4j2 \u7248\u672c\u548c maven-shade-plugin \u7248\u672c\u7684\u5339\u914d\u5173\u7cfb")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-shade-plugin</artifactId>\n    <version>3.2.3</version>\n    <executions>\n        <execution>\n            <phase>package</phase>\n            <goals>\n                <goal>shade</goal>\n            </goals>\n            <configuration>\n                <transformers>\n                    <transformer\n                            implementation="com.github.edwgiz.mavenShadePlugin.log4j2CacheTransformer.PluginsCacheFileTransformer"/>\n                </transformers>\n                <filters>\n                    <filter>\n                        <artifact>*:*</artifact>\n\n                        <excludes>\n                            <exclude>META-INF/*.SF</exclude>\n                            <exclude>META-INF/*.DSA</exclude>\n                            <exclude>META-INF/*.RSA</exclude>\n                        </excludes>\n\n                    </filter>\n                </filters>\n            </configuration>\n        </execution>\n    </executions>\n    <dependencies>\n        <dependency>\n            <groupId>com.github.edwgiz</groupId>\n            <artifactId>maven-shade-plugin.log4j2-cachefile-transformer</artifactId>\n            <version>2.6.1</version>\n        </dependency>\n    </dependencies>\n</plugin>\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u7684 maven-shade-plugin \u7248\u672c\u4e3a 3.2.3\uff0c\u8fd9\u4e2a\u5bf9\u5e94\u5173\u7cfb\u5728 maven-shade-plugin.log4j2-cachefile-transformer \u5305\u4e2d\u7684 META-INF \u4e2d\u53ef\u4ee5\u627e\u5230")))}d.isMDXComponent=!0}}]);