"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7243],{3905:(t,n,e)=>{e.d(n,{Zo:()=>u,kt:()=>v});var a=e(67294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,a,o=function(t,n){if(null==t)return{};var e,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var c=a.createContext({}),s=function(t){var n=a.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},u=function(t){var n=s(t.components);return a.createElement(c.Provider,{value:n},t.children)},p="mdxType",f={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(t,n){var e=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=s(e),d=o,v=p["".concat(c,".").concat(d)]||p[d]||f[d]||r;return e?a.createElement(v,i(i({ref:n},u),{},{components:e})):a.createElement(v,i({ref:n},u))}));function v(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var r=e.length,i=new Array(r);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=t,l[p]="string"==typeof t?t:o,i[1]=l;for(var s=2;s<r;s++)i[s]=e[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}d.displayName="MDXCreateElement"},82443:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=e(87462),o=(e(67294),e(3905));const r={},i=void 0,l={unversionedId:"java/font\u5b57\u4f53\u95ee\u9898",id:"java/font\u5b57\u4f53\u95ee\u9898",title:"font\u5b57\u4f53\u95ee\u9898",description:"\u7cfb\u7edf\u5b89\u88c5\u8fd0\u884c\u540e\uff0c\u6d4f\u89c8\u5668\u9a8c\u8bc1\u7801\u4e0d\u663e\u793a\u62a5\u9519\uff1a",source:"@site/docs/java/font\u5b57\u4f53\u95ee\u9898.md",sourceDirName:"java",slug:"/java/font\u5b57\u4f53\u95ee\u9898",permalink:"/docs/java/font\u5b57\u4f53\u95ee\u9898",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/java/font\u5b57\u4f53\u95ee\u9898.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"esClient",permalink:"/docs/java/esClient"},next:{title:"gson\u4e2dnull\u5904\u7406",permalink:"/docs/java/gson\u4e2dnull\u5904\u7406"}},c={},s=[],u={toc:s},p="wrapper";function f(t){let{components:n,...e}=t;return(0,o.kt)(p,(0,a.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7cfb\u7edf\u5b89\u88c5\u8fd0\u884c\u540e\uff0c\u6d4f\u89c8\u5668\u9a8c\u8bc1\u7801\u4e0d\u663e\u793a\u62a5\u9519\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"java.io.IOException: Problem reading font data.\n        at java.desktop/java.awt.Font.createFont0(Font.java:1208)\n        at java.desktop/java.awt.Font.createFont(Font.java:1076)\n        ...\nCaused by: java.lang.RuntimeException: Fontconfig head is null, check your fonts or fonts configuration\n        at java.desktop/sun.awt.FontConfiguration.getVersion(FontConfiguration.java:1269)\n        at java.desktop/sun.awt.FontConfiguration.readFontConfigFile(FontConfiguration.java:224)\n        at java.desktop/sun.awt.FontConfiguration.init(FontConfiguration.java:106)\n        at java.desktop/sun.awt.X11FontManager.createFontConfiguration(X11FontManager.java:706)\n        at java.desktop/sun.font.SunFontManager$2.run(SunFontManager.java:358)\n        at java.desktop/sun.font.SunFontManager$2.run(SunFontManager.java:315)\n        at java.base/java.security.AccessController.doPrivileged(AccessController.java:318)\n        at java.desktop/sun.font.SunFontManager.<init>(SunFontManager.java:315)\n        at java.desktop/sun.awt.FcFontManager.<init>(FcFontManager.java:35)\n        at java.desktop/sun.awt.X11FontManager.<init>(X11FontManager.java:56)\n        ... 126 more\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The JDK places any files that it provides in $JDKHOME/lib. Do not modify that location. Instead, put any updates or custom versions of the configuration files in $JDKHOME/conf/fonts....\u8be6\u60c5\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/17/intl/font-configuration-files.html#GUID-F8ABF748-F3C3-4781-97B2-66C7E1E10EE9"},"Loading Font Configuration Files"))),(0,o.kt)("p",null,"\u5728 JDK8 \u4e2d\u5b58\u5728\u5b57\u4f53\u6587\u4ef6",(0,o.kt)("inlineCode",{parentName:"p"},"${JDKPath}/jre/lib"),"\uff0c\u800c Oracle JDK17\u3001OpenJDK19 \u4e2d\u5747\u6ca1\u6709\uff0c\u5982\u679c\u7cfb\u7edf\u6ca1\u6709\u5b89\u88c5",(0,o.kt)("inlineCode",{parentName:"p"},"fontconfig"),"\u5219\u4f1a\u62a5\u4e0a\u8ff0\u5b57\u4f53\u9519\u8bef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u62f7\u8d1d\u5b57\u4f53\u6587\u4ef6\u5230openjdk 19\u4e2d\n$ sudo cp -r /xxx/jdk8.0_311/jre/lib/font* /xxx/es/jdk/lib/\n# \u62f7\u8d1d\u5b57\u4f53\u6587\u4ef6\u5230jdk17\u4e2d\n$ sudo cp -r /xxx/jdk8.0_311/jre/lib/font* /xxx/jdk-17.0.10/lib/\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u91cd\u542f\u670d\u52a1\u540e\u5237\u65b0\u9875\u9762\u9a8c\u8bc1\u7801\u53ef\u89c1")))}f.isMDXComponent=!0}}]);