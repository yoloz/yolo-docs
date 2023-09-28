"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),s=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(i.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(i,".").concat(m)]||u[m]||k[m]||o;return n?l.createElement(h,r(r({ref:t},p),{},{components:n})):l.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var l=n(87462),a=(n(67294),n(3905));const o={},r=void 0,c={unversionedId:"maven/maven-checkstyle-plugin",id:"maven/maven-checkstyle-plugin",title:"maven-checkstyle-plugin",description:"java \u4ee3\u7801\u89c4\u8303\u68c0\u67e5\uff0c\u5e38\u7528\u65b9\u6848\u5982\u4e0b\uff1a",source:"@site/docs/maven/maven-checkstyle-plugin.md",sourceDirName:"maven",slug:"/maven/maven-checkstyle-plugin",permalink:"/docs/maven/maven-checkstyle-plugin",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/maven/maven-checkstyle-plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u9759\u6001\u5730\u5740",permalink:"/docs/linux/\u914d\u7f6e\u9759\u6001\u5730\u5740"},next:{title:"maven-release-plugin",permalink:"/docs/maven/maven-release-plugin"}},i={},s=[{value:"\u5e38\u7528\u5230\u4ee3\u7801\u89c4\u7ea6",id:"\u5e38\u7528\u5230\u4ee3\u7801\u89c4\u7ea6",level:2},{value:"google checkstyle",id:"google-checkstyle",level:2},{value:"sun checkstyle",id:"sun-checkstyle",level:2},{value:"\u963f\u91cc\u5df4\u5df4",id:"\u963f\u91cc\u5df4\u5df4",level:2},{value:"maven-checkstyle-plugin",id:"maven-checkstyle-plugin",level:2},{value:"\u67d0\u4e9b\u6587\u4ef6\u89c4\u5219\u8fc7\u6ee4",id:"\u67d0\u4e9b\u6587\u4ef6\u89c4\u5219\u8fc7\u6ee4",level:2}],p={toc:s},u="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"java \u4ee3\u7801\u89c4\u8303\u68c0\u67e5\uff0c\u5e38\u7528\u65b9\u6848\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u5ba2\u6237\u7aef\u505a\u68c0\u67e5\uff1a \u5229\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"git hook"),"\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"pre-commit"),"\u94a9\u5b50\uff0c\u5982\u524d\u7aef\u9879\u76ee\u4e2d\u5e38\u89c1\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"husky")," \u5c31\u662f\u57fa\u4e8e\u6b64\u5b9e\u73b0\u7684\u3002\u4f46\u7f3a\u70b9\u4e5f\u5f88\u660e\u663e\uff0c\u5c31\u662f\u5728\u672c\u5730\u628a\u8fd9\u4e2a\u94a9\u5b50\u5220\u4e86\u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"li"},"git commit --no-verify")," \u5c31\u7ed5\u5f00\u4e86\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u670d\u52a1\u7aef\u505a\u68c0\u67e5\uff1a \u8fd8\u662f\u5229\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"git hook"),"\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"pre-receive"),"\u8fd9\u4e2a\u94a9\u5b50\uff1b"),(0,a.kt)("li",{parentName:"ul"},"CI/CD \u5de5\u4f5c\u6d41\u4e0a\u505a\u9650\u5236\u68c0\u67e5\uff1a\u5982 gitlab \u63d0\u4f9b\u6709\u56fe\u5f62\u5316\u914d\u7f6e;")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u524d\u4e24\u70b9\u6dfb\u52a0\u94a9\u5b50\u9700\u8981\u5199 Shell \u811a\u672c")),(0,a.kt)("h2",{id:"\u5e38\u7528\u5230\u4ee3\u7801\u89c4\u7ea6"},"\u5e38\u7528\u5230\u4ee3\u7801\u89c4\u7ea6"),(0,a.kt)("p",null,"\u8bed\u6cd5\u914d\u7f6e:",(0,a.kt)("a",{parentName:"p",href:"https://checkstyle.sourceforge.io/config.html"},"https://checkstyle.sourceforge.io/config.html")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6587\u6863\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"LineLength"),"\u65b0\u7248\u89c4\u5219\u63d0\u53d6\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"TreeWalker"),"\u5916\u9762")),(0,a.kt)("h2",{id:"google-checkstyle"},"google checkstyle"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/checkstyle/checkstyle/blob/master/src/main/resources/google_checks.xml"},"https://github.com/checkstyle/checkstyle/blob/master/src/main/resources/google_checks.xml")),(0,a.kt)("h2",{id:"sun-checkstyle"},"sun checkstyle"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/checkstyle/checkstyle/blob/master/src/main/resources/sun_checks.xml"},"https://github.com/checkstyle/checkstyle/blob/master/src/main/resources/sun_checks.xml")),(0,a.kt)("h2",{id:"\u963f\u91cc\u5df4\u5df4"},"\u963f\u91cc\u5df4\u5df4"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/KingBoyWorld/article/details/76082399"},"\u7b26\u5408\u963f\u91cc\u5df4\u5df4\u4ee3\u7801\u89c4\u8303\u7684 checkstyle \u68c0\u6d4b\u6587\u4ef6")),(0,a.kt)("h2",{id:"maven-checkstyle-plugin"},"maven-checkstyle-plugin"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://maven.apache.org/plugins/maven-checkstyle-plugin/"},"Apache Maven Checkstyle Plugin")),(0,a.kt)("p",null,"The Checkstyle Plugin has three goals:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"checkstyle:checkstyle")," is a reporting goal that performs Checkstyle analysis and generates a report on violations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"checkstyle:checkstyle-aggregate")," is a reporting goal that performs Checkstyle analysis and generates an aggregate HTML report on violations in a multi-module reactor build."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"checkstyle:check")," is a goal that performs Checkstyle analysis and outputs violations or a count of violations to the console, potentially failing the build. It can also be configured to re-use an earlier analysis.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"mvn checkstyle:help \u67e5\u770b\u5e2e\u52a9"),(0,a.kt)("p",{parentName:"blockquote"},"mvn checkstyle:check \u67e5\u770b\u5de5\u7a0b\u662f\u5426\u6ee1\u8db3\u68c0\u67e5\u3002\u5982\u679c\u4e0d\u6ee1\u8db3\uff0c\u68c0\u67e5\u5931\u8d25\uff0c\u53ef\u4ee5\u901a\u8fc7 target/checkstyle-result.xml \u6765\u67e5\u770b"),(0,a.kt)("p",{parentName:"blockquote"},"mvn checkstyle:checkstyle \u67e5\u770b\u5de5\u7a0b\u662f\u5426\u6ee1\u8db3\u68c0\u67e5\u3002\u5982\u679c\u4e0d\u6ee1\u8db3\uff0c\u4e0d\u4f1a\u5931\u8d25\uff0c\u53ef\u4ee5\u901a\u8fc7 target/site/checkstyle.html \u67e5\u770b\u68c0\u67e5\u4fe1\u606f"),(0,a.kt)("p",{parentName:"blockquote"},"mvn checkstyle:checkstyle-aggregate \u68c0\u67e5\u5de5\u7a0b\u662f\u5426\u6ee1\u8db3\u68c0\u67e5\u3002\u5982\u679c\u4e0d\u6ee1\u8db3\uff0c\u4e0d\u4f1a\u5931\u8d25\uff0c\u53ef\u4ee5\u901a\u8fc7 target/site/checkstyle.html \u67e5\u770b")),(0,a.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n   <groupId>org.apache.maven.plugins</groupId>\n   <artifactId>maven-checkstyle-plugin</artifactId>\n   <version>3.3.0</version>\n   <configuration>\n     <configLocation>sun_checks.xml</configLocation>\n     \x3c!-- <configLocation>google_checks.xml</configLocation> --\x3e\n     <encoding>UTF-8</encoding>\n     <consoleOutput>true</consoleOutput>\n     <failsOnError>true</failsOnError>\n     <linkXRef>false</linkXRef>\n   </configuration>\n   <executions>\n     <execution>\n       <id>validate</id>\n       <phase>validate</phase>\n       <goals>\n         <goal>check</goal>\n       </goals>\n     </execution>\n   </executions>\n </plugin>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you want to report to the console or fail the build, you must add an execution of ",(0,a.kt)("inlineCode",{parentName:"p"},"checkstyle::check")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<build>")," element and configure any options that you need.",(0,a.kt)("br",{parentName:"p"}),"\n","\u63d2\u4ef6\u63d0\u4f9b\u4e24\u79cd\u9884\u5148\u5b9a\u4e49\u7684\u89c4\u5219\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"sun_checks.xml"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"google_checks.xml"),",\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u6307\u5b9a\u81ea\u5b9a\u4e49\u7684\u89c4\u5219\u96c6\u3002")),(0,a.kt)("h2",{id:"\u67d0\u4e9b\u6587\u4ef6\u89c4\u5219\u8fc7\u6ee4"},"\u67d0\u4e9b\u6587\u4ef6\u89c4\u5219\u8fc7\u6ee4"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://checkstyle.org/filters/suppressionfilter.html"},"SuppressionFilter")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"checkstyle-suppression.xml:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n\n<!DOCTYPE suppressions PUBLIC\n        "-//Checkstyle//DTD SuppressionFilter Configuration 1.2//EN"\n        "https://checkstyle.org/dtds/suppressions_1_2.dtd">\n\n<suppressions>\n    \x3c!-- Variant.java \u5168\u90e8\u5ffd\u7565 --\x3e\n    <suppress files="Variant.java" checks=".*"/>\n    \x3c!-- ColumnMeta.java \u5ffd\u7565MethodLength\u68c0\u67e5 --\x3e\n    <suppress files="ColumnMeta.java" checks="MethodLength"/>\n</suppressions>\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pom.xml:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n  <groupId>org.apache.maven.plugins</groupId>\n  <artifactId>maven-checkstyle-plugin</artifactId>\n  <version>3.3.0</version>\n  <configuration>\n      <configLocation>${pom.basedir}/src/main/resources/checkstyle.xml</configLocation>\n      <suppressionsLocation>${pom.basedir}/src/main/resources/checkstyle-suppression.xml</suppressionsLocation>\n      <consoleOutput>true</consoleOutput>\n      <failsOnError>true</failsOnError>\n  </configuration>\n  <executions>\n      <execution>\n          <id>validate</id>\n          <phase>validate</phase>\n          <goals>\n              <goal>check</goal>\n          </goals>\n      </execution>\n  </executions>\n </plugin>\n")))}k.isMDXComponent=!0}}]);