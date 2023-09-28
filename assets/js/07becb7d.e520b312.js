"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[1215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),s=i(n),d=r,v=s["".concat(u,".").concat(d)]||s[d]||p[d]||l;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var m={};for(var u in t)hasOwnProperty.call(t,u)&&(m[u]=t[u]);m.originalType=e,m[s]="string"==typeof e?e:r,o[1]=m;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>m,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={},o=void 0,m={unversionedId:"maven/maven-release-plugin",id:"maven/maven-release-plugin",title:"maven-release-plugin",description:"\u539f\u6587\uff1a\u4f7f\u7528\u81ea\u52a8\u5316\u63d2\u4ef6 release \u6765\u7ba1\u7406 maven \u9879\u76ee\u7684\u7248\u672c\u53d1\u5e03",source:"@site/docs/maven/maven-release-plugin.md",sourceDirName:"maven",slug:"/maven/maven-release-plugin",permalink:"/docs/maven/maven-release-plugin",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/maven/maven-release-plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"maven-checkstyle-plugin",permalink:"/docs/maven/maven-checkstyle-plugin"},next:{title:"maven\u5e38\u7528\u64cd\u4f5c",permalink:"/docs/maven/maven\u5e38\u7528\u64cd\u4f5c"}},u={},i=[{value:"\u73af\u5883\u4e0e\u76ee\u6807",id:"\u73af\u5883\u4e0e\u76ee\u6807",level:2},{value:"\u793a\u4f8b\u73af\u5883",id:"\u793a\u4f8b\u73af\u5883",level:3},{value:"\u793a\u4f8b\u76ee\u6807",id:"\u793a\u4f8b\u76ee\u6807",level:3},{value:"\u63d2\u4ef6\u4ecb\u7ecd",id:"\u63d2\u4ef6\u4ecb\u7ecd",level:2},{value:"mvn release:prepare",id:"mvn-releaseprepare",level:3},{value:"mvn release:rollback",id:"mvn-releaserollback",level:3},{value:"mvn release:perform",id:"mvn-releaseperform",level:3},{value:"\u64cd\u4f5c\u8fc7\u7a0b",id:"\u64cd\u4f5c\u8fc7\u7a0b",level:2},{value:"\u6dfb\u52a0 release \u63d2\u4ef6\u652f\u6301",id:"\u6dfb\u52a0-release-\u63d2\u4ef6\u652f\u6301",level:3},{value:"\u5728 pom.xml \u4e2d\u8bbe\u7f6e SCM \u5730\u5740",id:"\u5728-pomxml-\u4e2d\u8bbe\u7f6e-scm-\u5730\u5740",level:3},{value:"\u6267\u884c\u547d\u4ee4",id:"\u6267\u884c\u547d\u4ee4",level:3}],c={toc:i},s="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u539f\u6587\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/developer/article/1762924"},"\u4f7f\u7528\u81ea\u52a8\u5316\u63d2\u4ef6 release \u6765\u7ba1\u7406 maven \u9879\u76ee\u7684\u7248\u672c\u53d1\u5e03")),(0,r.kt)("h2",{id:"\u73af\u5883\u4e0e\u76ee\u6807"},"\u73af\u5883\u4e0e\u76ee\u6807"),(0,r.kt)("h3",{id:"\u793a\u4f8b\u73af\u5883"},"\u793a\u4f8b\u73af\u5883"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7236 POM")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"    <groupId>com.futao</groupId>\n    <artifactId>starter-fustack</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <name>starter-fustack</name>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b50\u6a21\u5757\u5217\u8868")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<modules>\n        \x3c!--\u5fae\u4fe1\u5c0f\u7a0b\u5e8f--\x3e\n        <module>fustack-wx-mini-program</module>\n        \x3c!--\u81ea\u52a8\u914d\u7f6e--\x3e\n        <module>fustack-autoconfiguration</module>\n        \x3c!--\u5e38\u91cf--\x3e\n        <module>fustack-consts</module>\n        <module>demo-test</module>\n        \x3c!--\u6570\u636e\u5e93--\x3e\n        <module>fustack-db</module>\n        \x3c!--\u57fa\u7840--\x3e\n        <module>fustack-foundation</module>\n        \x3c!--\u817e\u8baf\u77ed\u4fe1--\x3e\n        <module>fustack-tencent-cloud-short-message</module>\n        \x3c!--WEB\u652f\u6301--\x3e\n        <module>fustack-web</module>\n        \x3c!--\u6743\u9650\u63a7\u5236--\x3e\n        <module>fustack-auth</module>\n        \x3c!--\u5f02\u5e38\u4f53\u7cfb--\x3e\n        <module>fustack-exceptions</module>\n        \x3c!--Redis--\x3e\n        <module>fustack-redis</module>\n        \x3c!--\u5de5\u5177\u5305--\x3e\n        <module>fustack-utils</module>\n    </modules>\n")),(0,r.kt)("h3",{id:"\u793a\u4f8b\u76ee\u6807"},"\u793a\u4f8b\u76ee\u6807"),(0,r.kt)("p",null,"\u5f53\u524d\u5904\u4e8e\u5f00\u53d1\u9636\u6bb5\uff0c\u9879\u76ee\u7684\u7248\u672c\u4e3a: 0.0.1-SNAPSHOT\uff0c\u5373\u5c06\u9700\u8981\u53d1\u5e03\u8be5\u7248\u672c\u7684\u6b63\u5f0f\u7248\u672c: 0.0.1\uff0c\u4e14\u5728\u6b63\u5f0f\u7248\u53d1\u5e03\u4e4b\u540e\uff0c\u4e0b\u4e00\u4e2a\u5f00\u53d1\u7248\u672c\u4e3a: 0.0.2-SNAPSHOT\u3002\u5e76\u540c\u65f6\u5c06\u6784\u5efa\u597d\u7684\u6784\u4ef6\u53d1\u5e03\u5230 maven \u79c1\u670d\u3002"),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u4ecb\u7ecd"},"\u63d2\u4ef6\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u547d\u4ee4:"),(0,r.kt)("h3",{id:"mvn-releaseprepare"},"mvn release:prepare"),(0,r.kt)("p",null,"\u51c6\u5907\u53d1\u5e03\u7248\u672c"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u9879\u76ee\u662f\u5426\u6709\u672a\u63d0\u4ea4\u7684\u4ee3\u7801\uff0c\u6709\u7684\u8bdd\u4f1a\u62a5\u9519\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u9879\u76ee\u662f\u5426\u6709\u5feb\u7167\u7248\u672c\u7684\u4f9d\u8d56\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u63d0\u793a\u7528\u6237\u8f93\u5165\u5c06\u8981\u53d1\u5e03\u7684\u7248\u672c\u53f7\uff0c\u5e76\u4e14\u81ea\u52a8\u5c06\u9879\u76ee\u4e2d pom \u6587\u4ef6\u4e2d\u7684\u7248\u672c\u53f7\u66f4\u65b0\u4e3a\u7528\u6237\u8f93\u5165\u7684\u7248\u672c\u53f7\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u63d0\u793a\u7528\u6237\u8f93\u5165\u4e00\u4e2a tagName\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u4fee\u6539\u540e\u7684 pom \u6267\u884c\u6784\u5efa\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u63d0\u4ea4 pom \u53d8\u66f4\u5230 VCS\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u63d0\u793a\u7528\u6237\u8f93\u5165\u4e0b\u4e00\u4e2a\u5f00\u53d1\u7248\u7684\u7248\u672c\u53f7\uff0c\u5e76\u4e14\u81ea\u52a8\u5c06\u9879\u76ee\u4e2d pom \u6587\u4ef6\u4e2d\u7684\u7248\u672c\u53f7\u66f4\u65b0\u4e3a\u7528\u6237\u8f93\u5165\u7684\u7248\u672c\u53f7\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u63d0\u4ea4 pom \u53d8\u66f4\u5230 VCS\u3002"))),(0,r.kt)("h3",{id:"mvn-releaserollback"},"mvn release:rollback"),(0,r.kt)("p",null,"\u56de\u6eda prepare \u9636\u6bb5\u7684\u64cd\u4f5c\uff0c\u5c06 pom \u56de\u9000\u81f3\u4e4b\u524d\u7684\u72b6\u6001\u5e76\u63d0\u4ea4\uff0c\u4f46\u662f\u4e0d\u4f1a\u5220\u9664 prepare \u751f\u6210\u7684 tag \u6807\u7b7e\u3002"),(0,r.kt)("h3",{id:"mvn-releaseperform"},"mvn release:perform"),(0,r.kt)("p",null,"\u6267\u884c\u7248\u672c\u53d1\u5e03\uff0c\u6267\u884c mvn deploy \u547d\u4ee4\u6253\u5305\u5e76\u90e8\u7f72\u6784\u4ef6\u5230\u8fdc\u7a0b\u4ed3\u5e93\u3002"),(0,r.kt)("h2",{id:"\u64cd\u4f5c\u8fc7\u7a0b"},"\u64cd\u4f5c\u8fc7\u7a0b"),(0,r.kt)("h3",{id:"\u6dfb\u52a0-release-\u63d2\u4ef6\u652f\u6301"},"\u6dfb\u52a0 release \u63d2\u4ef6\u652f\u6301"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-release-plugin</artifactId>\n    <configuration>\n        \x3c!--<tagBase>https://github.com/FutaoSmile/starter-fustack</tagBase>--\x3e\n        \x3c!--\u662f\u5426\u81ea\u52a8\u4e3a\u5b50\u6a21\u5757\u5206\u914d\u7236\u7248\u672c\u3002\u5982\u679c\u8bbe\u7f6e\u4e3afalse\uff0c\u5c06\u63d0\u793a\u7528\u6237\u8f93\u5165\u6bcf\u4e2a\u5b50\u6a21\u5757\u7684\u7248\u672c\u3002--\x3e\n        <autoVersionSubmodules>true</autoVersionSubmodules>\n        \x3c!--tag\u6807\u7b7e\u540d--\x3e\n        <tagNameFormat>release-by-maven-${version}</tagNameFormat>\n    </configuration>\n</plugin>\n")),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u5c06\u6784\u5efa\u597d\u7684\u6784\u4ef6\u53d1\u5e03\u5230\u81ea\u5df1\u7684 maven \u79c1\u670d\uff0c\u9700\u8981\u8fdb\u884c\u4ee5\u4e0b\u914d\u7f6e:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"~/.m2/settings.xml"),"\u4e2d\u6dfb\u52a0 maven \u79c1\u670d\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u9879\u76ee\u7684 pom.xml \u6587\u4ef6\u4e2d\u914d\u7f6e repository")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<distributionManagement>\n    <repository>\n        <id>\u5bf9\u5e94settings\u4e2d\u8bbe\u7f6e\u7684id</id>\n        <url>\u9700\u8981\u4e0a\u4f20\u5230\u7684maven\u79c1\u670d\u5730\u5740</url>\n    </repository>\n</distributionManagement>\n")),(0,r.kt)("h3",{id:"\u5728-pomxml-\u4e2d\u8bbe\u7f6e-scm-\u5730\u5740"},"\u5728 pom.xml \u4e2d\u8bbe\u7f6e SCM \u5730\u5740"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<scm>\n    \x3c!--\u53ef\u8bfb\u7684SCM\u5730\u5740--\x3e\n    \x3c!--<connection>scm:git:https://github.com/FutaoSmile/starter-fustack</connection>--\x3e\n    \x3c!--\u53ef\u5199\u7684SCM\u5730\u5740--\x3e\n    <developerConnection\n  >scm:git:https://github.com/FutaoSmile/starter-fustack</developerConnection>\n    \x3c!--\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee\u7684scm\u5730\u5740--\x3e\n    \x3c!--<url>https://github.com/FutaoSmile/starter-fustack</url>--\x3e\n    \x3c!--\u8bbe\u7f6etagName--\x3e\n    <tag>v-release-0.0.1</tag>\n</scm>\n")),(0,r.kt)("h3",{id:"\u6267\u884c\u547d\u4ee4"},"\u6267\u884c\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mvn release:prepare\nmvn relase:perform\n")))}p.isMDXComponent=!0}}]);