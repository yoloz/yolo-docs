"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7107],{3905:(a,e,n)=>{n.d(e,{Zo:()=>j,kt:()=>d});var t=n(67294);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function l(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function o(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function p(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},l=Object.keys(a);for(t=0;t<l.length;t++)n=l[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(t=0;t<l.length;t++)n=l[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var i=t.createContext({}),c=function(a){var e=t.useContext(i),n=e;return a&&(n="function"==typeof a?a(e):o(o({},e),a)),n},j=function(a){var e=c(a.components);return t.createElement(i.Provider,{value:e},a.children)},s="mdxType",m={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(a,e){var n=a.components,r=a.mdxType,l=a.originalType,i=a.parentName,j=p(a,["components","mdxType","originalType","parentName"]),s=c(n),u=r,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||l;return n?t.createElement(d,o(o({ref:e},j),{},{components:n})):t.createElement(d,o({ref:e},j))}));function d(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p[s]="string"==typeof a?a:r,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},187:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var t=n(87462),r=(n(67294),n(3905));const l={},o=void 0,p={unversionedId:"java/javac,java,jar\u7684\u4f7f\u7528",id:"java/javac,java,jar\u7684\u4f7f\u7528",title:"javac,java,jar\u7684\u4f7f\u7528",description:"javac\u3001java",source:"@site/docs/java/javac,java,jar\u7684\u4f7f\u7528.md",sourceDirName:"java",slug:"/java/javac,java,jar\u7684\u4f7f\u7528",permalink:"/docs/java/javac,java,jar\u7684\u4f7f\u7528",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/java/javac,java,jar\u7684\u4f7f\u7528.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"jar\u4e2d\u52a0\u8f7ddll\u6587\u4ef6",permalink:"/docs/java/jar\u4e2d\u52a0\u8f7ddll\u6587\u4ef6"},next:{title:"java\u5b89\u5168\u7b97\u6cd5\u7ba1\u5236\u89e3\u9664",permalink:"/docs/java/java\u5b89\u5168\u7b97\u6cd5\u7ba1\u5236\u89e3\u9664"}},i={},c=[{value:"javac\u3001java",id:"javacjava",level:2},{value:"\u7b80\u5355\u7684 jar",id:"\u7b80\u5355\u7684-jar",level:2},{value:"\u6709\u76ee\u5f55\u7ed3\u6784\u7684 jar",id:"\u6709\u76ee\u5f55\u7ed3\u6784\u7684-jar",level:2},{value:"\u4f9d\u8d56\u7b2c\u4e09\u65b9 jar",id:"\u4f9d\u8d56\u7b2c\u4e09\u65b9-jar",level:2},{value:"\u7efc\u5408\u4f7f\u7528\u4e0a\u8ff0\u4e09\u547d\u4ee4",id:"\u7efc\u5408\u4f7f\u7528\u4e0a\u8ff0\u4e09\u547d\u4ee4",level:2}],j={toc:c},s="wrapper";function m(a){let{components:e,...n}=a;return(0,r.kt)(s,(0,t.Z)({},j,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"javacjava"},"javac\u3001java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"javac -classpath $(echo ${dir}/lib/*.jar | tr ' ' ':') com/xxx/Test.java\njava -cp .:$(echo ${dir}/lib/*.jar | tr ' ' ':') com.xxx.Test\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"tr \u662f\u4e2a\u7b80\u5355\u7684\u66ff\u6362\u547d\u4ee4"),"\uff0c\u4ece\u6807\u51c6\u8f93\u5165\u4e2d\u66ff\u6362\u3001\u7f29\u51cf\u6216\u5220\u9664\u5b57\u7b26\uff0c\u5e76\u5c06\u7ed3\u679c\u5199\u5230\u6807\u51c6\u8f93\u51fa"),(0,r.kt)("h2",{id:"\u7b80\u5355\u7684-jar"},"\u7b80\u5355\u7684 jar"),(0,r.kt)("p",null,"\u751f\u6210\u7684 jar \u5305\u7ed3\u6784:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"META-INF\nTom.class\nHello.class(\u4e3b\u7c7b)\nxxxxx.class\n")),(0,r.kt)("p",null,"\u65b9\u6cd5\u6b65\u9aa4:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b9a\u4e49 Main-Class",(0,r.kt)("br",{parentName:"li"}),"\u521b\u5efa\u6587\u4ef6\u5939 META-INF, \u521b\u5efa\u6587\u4ef6 MENIFEST. MF, \u5167\u5bb9\u5982\u4e0b:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Manifest-Version: 1.0\nMain-Class: Hello\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u5192\u53f7\u540e\u9762\u6709\u4e00\u4e2a\u7a7a\u683c, \u6574\u4e2a\u6587\u4ef6\u6700\u540e\u6709\u4e00\u884c\u7a7a\u884c")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u53ca\u6253\u5305")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"javac Hello.java  #\u7f16\u8bd1\njar -cvfm hello.jar META-INF\\MENIFEST.MF Hello.class Tom.class xxx.class\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"c \u8868\u793a\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 jar \u5305;"),(0,r.kt)("li",{parentName:"ul"},"v \u8868\u793a\u521b\u5efa\u7684\u8fc7\u7a0b\u4e2d\u5728\u63a7\u5236\u53f0\u8f93\u51fa\u521b\u5efa\u8fc7\u7a0b\u7684\u4e00\u4e9b\u4fe1\u606f;"),(0,r.kt)("li",{parentName:"ul"},"f \u8868\u793a\u7ed9\u751f\u6210\u7684 jar \u5305\u547d\u540d;"),(0,r.kt)("li",{parentName:"ul"},"m \u8868\u793a\u81ea\u5b9a\u4e49 MENIFEST \u6587\u4ef6")),(0,r.kt)("h2",{id:"\u6709\u76ee\u5f55\u7ed3\u6784\u7684-jar"},"\u6709\u76ee\u5f55\u7ed3\u6784\u7684 jar"),(0,r.kt)("p",null,"\u751f\u6210\u7684 jar \u5305\u7ed3\u6784:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"META-INF\ncom\n   Tom.class\n   xxx.class\nHello.class(\u4e3b\u7c7b)\n")),(0,r.kt)("p",null,"\u65b9\u6cd5\u6b65\u9aa4:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b9a\u4e49 Main-Class",(0,r.kt)("br",{parentName:"p"}),"\n","\u7565(\u540c\u4e0a)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u53ca\u6253\u5305"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"javac Hello.java -d target  #\u7f16\u8bd1\ncd target\nmv -r xxx/META-INF .\njar -cvfm hello.jar META-INF\\MENIFEST.MF *\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6700\u540e\u7684","*","\u8868\u793a\u628a\u5f53\u524d\u76ee\u5f55\u4e0b\u6240\u6709\u6587\u4ef6\u90fd\u6253\u5728 jar \u5305\u91cc")),(0,r.kt)("h2",{id:"\u4f9d\u8d56\u7b2c\u4e09\u65b9-jar"},"\u4f9d\u8d56\u7b2c\u4e09\u65b9 jar"),(0,r.kt)("p",null,"\u65b9\u6cd5\u6b65\u9aa4:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b9a\u4e49 Main-Class",(0,r.kt)("br",{parentName:"p"}),"\n","\u7565(\u540c\u4e0a)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u53ca\u6253\u5305"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"javac -cp xxx.jar Hello.java -d target  #\u7f16\u8bd1\ncd target\nmv -r xxx/META-INF .\njar -cvfm hello.jar META-INF\\MENIFEST.MF *\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"-cp \u8868\u793a -classpath")),(0,r.kt)("p",null,"\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"java -jar hello.jar")," \u62a5\u9519 ClassNotFoundException:xxxxx\uff0c\u53ef\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"java -cp xxx.jar -jar hello.jar")," \u6216\u8005\u5728 Main-Class \u4e2d\u6dfb\u52a0 classPath:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Manifest-Version: 1.0\nMain-Class: Hello\nClass-Path: xxx.jar #\u8def\u5f84\u6307\u5411\u4f60\u9700\u8981\u7684\u6240\u6709jar\u5305\n")),(0,r.kt)("p",null,"\u4e0a\u8ff0\u4e2d xxx.jar \u8981\u548c hello.jar \u5728\u540c\u4e00\u8def\u5f84\u4e0b\uff0c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"java -jar hello.jar")," \u5373\u53ef\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u7a7a\u683c\u548c\u6362\u884c")),(0,r.kt)("h2",{id:"\u7efc\u5408\u4f7f\u7528\u4e0a\u8ff0\u4e09\u547d\u4ee4"},"\u7efc\u5408\u4f7f\u7528\u4e0a\u8ff0\u4e09\u547d\u4ee4"),(0,r.kt)("p",null,"\u6d4b\u8bd5 window \u4e0b\u4e00\u4e2a\u7c7b\u7684\u60c5\u51b5\uff0c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"java -cp"),"\u5bb9\u6613\u51fa\u9519\uff0c\u8bb0\u5f55\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,"\u76ee\u5f55\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"PS C:\\java> dir\n\nMode                 LastWriteTime         Length Name\n----                 -------------         ------ ----\nd-----         2023/5/26     14:45                indi\nd-----         2023/5/26     14:51                jre1.8.0_361\n-a----         2023/5/26     14:38        1879325 jna-5.13.0.jar\n-a----         2023/5/26     14:50       82490489 jre-8u361-windows-x64.tar.gz\n-a----         2023/5/26     14:35        3667880 libtest.dll\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"indi.yolo.sample.jna.JNAGoSample.class"),"\u4e3a\u9700\u8981\u6267\u884c\u7684 class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jre1.8.0_361"),"\u4e3a\u8fd0\u884c\u73af\u5883"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jna-5.13.0.jar"),"\u4e3a\u4f9d\u8d56\u5305"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"libtest.dll"),"\u4e3a\u8c03\u7528\u7684\u52a8\u6001\u5e93")),(0,r.kt)("p",null,"windows \u73af\u5883\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"*.jar")," \u7684\u901a\u914d\u7b26\u65e0\u6548\uff0c\u76f4\u63a5\u4f7f\u7528\u901a\u914d\u7b26",(0,r.kt)("inlineCode",{parentName:"p"},"*"),"\u52a0\u8f7d\u6240\u6709 jar \u6587\u4ef6(\u5b50\u76ee\u5f55\u4e0b\u7684 jar \u8fd8\u9700\u8981\u53e6\u5916\u6307\u5b9a)\uff0c\u4f46\u662f\u5e76\u4e0d\u4f1a\u52a0\u8f7d\u76ee\u5f55\u4e0b\u7684 class \u6587\u4ef6\uff1b\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"."),"\u4f1a\u52a0\u8f7d\u5f53\u524d\u76ee\u5f55\u4e0b\u7684 class \u6587\u4ef6\uff0c\u4f46\u662f\u4e0d\u4f1a\u52a0\u8f7d jar \u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u6b63\u786e\u65b9\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'PS C:\\java> .\\jre1.8.0_361\\bin\\java.exe -cp . indi.yolo.sample.jna.JNAGoSample\n# Exception in thread "main" java.lang.NoClassDefFoundError: com/sun/jna/Library\n\nPS C:\\java> .\\jre1.8.0_361\\bin\\java.exe -cp * indi.yolo.sample.jna.JNAGoSample\n# \u9519\u8bef: \u627e\u4e0d\u5230\u6216\u65e0\u6cd5\u52a0\u8f7d\u4e3b\u7c7b indi.yolo.sample.jna.JNAGoSample\n\n# \u9519\u8bef\nPS C:\\java> .\\jre1.8.0_361\\bin\\java.exe -cp .;.\\jna-5.13.0.jar indi.yolo.sample.jna.JNAGoSample\n# \u6b63\u786e\nPS C:\\java> .\\jre1.8.0_361\\bin\\java.exe -cp ".;.\\jna-5.13.0.jar" indi.yolo.sample.jna.JNAGoSample\n# \u6b63\u786e\nPS C:\\java> .\\jre1.8.0_361\\bin\\java.exe -cp ".;*" indi.yolo.sample.jna.JNAGoSample\n\n')),(0,r.kt)("admonition",{title:"-cp \u53c2\u6570 \u4e0e -jar \u53c2\u6570\u80fd\u5426\u4e00\u8d77\u4f7f\u7528",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u7b80\u5355\u6765\u8bf4,\u662f\u4e0d\u80fd\u4e00\u8d77\u4f7f\u7528\u7684,\u4e24\u8005\u52a0\u8f7d classpath \u662f\u4e0d\u4e00\u81f4\u7684,\u524d\u8005 -cp \u9009\u9879\u5728\u52a0\u8f7d jar \u5305\u548c class \u7c7b\u6587\u4ef6\u65f6,\u662f\u901a\u8fc7\u540e\u9762\u62fc\u63a5\u7684\u53c2\u6570\u6765\u52a0\u8f7d\u7684\uff0c\u76f8\u5bf9\u7684 -jar \u9009\u9879\u5728\u52a0\u8f7d jar \u5305\u65f6\u5219\u662f\u83b7\u53d6\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u7684 classpath \u4ece\u800c\u8fdb\u884c\u52a0\u8f7d\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5f53\u6307\u5b9a\u4e86 -jar \u9009\u9879\u540e,JVM \u4e0d\u518d\u4ece -cp \u9009\u9879\u4e2d\u6307\u5b9a\u7684 jar \u5305\u8def\u5f84\u548c \u7c7b\u8def\u5f84 \u4e2d\u52a0\u8f7d jar \u5305,\u56e0\u6b64\u540c\u65f6\u8bbe\u7f6e -cp \u53c2\u6570 \u548c-jar \u53c2\u6570\u7684\u7ed3\u679c\u662f -cp \u53c2\u6570\u76f8\u5f53\u4e8e\u6ca1\u6709\u8bbe\u7f6e\u3002")))}m.isMDXComponent=!0}}]);