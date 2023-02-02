"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7094],{3905:(e,o,t)=>{t.d(o,{Zo:()=>l,kt:()=>f});var r=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function p(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?p(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function u(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),i=function(e){var o=r.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},l=function(e){var o=i(e.components);return r.createElement(c.Provider,{value:o},e.children)},s={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},d=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=i(t),f=n,g=d["".concat(c,".").concat(f)]||d[f]||s[f]||p;return t?r.createElement(g,a(a({ref:o},l),{},{components:t})):r.createElement(g,a({ref:o},l))}));function f(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var p=t.length,a=new Array(p);a[0]=d;var u={};for(var c in o)hasOwnProperty.call(o,c)&&(u[c]=o[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var i=2;i<p;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5246:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>p,metadata:()=>u,toc:()=>i});var r=t(7462),n=(t(7294),t(3905));const p={},a=void 0,u={unversionedId:"network/\u901a\u4fe1\u534f\u8baeprotobuf",id:"network/\u901a\u4fe1\u534f\u8baeprotobuf",title:"\u901a\u4fe1\u534f\u8baeprotobuf",description:"\u6267\u884c protoc \u7f16\u8bd1\u5668\u751f\u6210 go \u6587\u4ef6\uff1a",source:"@site/docs/network/\u901a\u4fe1\u534f\u8baeprotobuf.md",sourceDirName:"network",slug:"/network/\u901a\u4fe1\u534f\u8baeprotobuf",permalink:"/docs/network/\u901a\u4fe1\u534f\u8baeprotobuf",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/network/\u901a\u4fe1\u534f\u8baeprotobuf.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"linux\u5185\u6838\u63a5\u6536\u7f51\u7edc\u5305",permalink:"/docs/network/linux\u5185\u6838\u63a5\u6536\u7f51\u7edc\u5305"},next:{title:"bash\u548cbat",permalink:"/docs/script/bash\u548cbat"}},c={},i=[{value:"proto2",id:"proto2",level:2},{value:"proto3",id:"proto3",level:2},{value:"maven plugin",id:"maven-plugin",level:2}],l={toc:i};function s(e){let{components:o,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u6267\u884c protoc \u7f16\u8bd1\u5668\u751f\u6210 go \u6587\u4ef6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"protoc --proto_path=./src/protobufDemo/demo1/ --proto_path=./src/protobufDemo/demo2 --go_out=./src/protobufDemo/demo2 ./*.proto\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"--proto_path: \u6307\u5b9a\u4e86\u8981\u53bb\u54ea\u4e2a\u76ee\u5f55\u4e2d\u641c\u7d22 import \u4e2d\u5bfc\u5165\u7684\u548c\u8981\u7f16\u8bd1\u4e3a.go \u7684 proto \u6587\u4ef6\uff0c\u53ef\u4ee5\u5b9a\u4e49\u591a\u4e2a")),(0,n.kt)("h2",{id:"proto2"},"proto2"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/protocolbuffers/protobuf/releases?page=9"},"protobuf-2.6.1"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/com/google/protobuf/protoc/2.6.1-build2/"},"protoc-2.6.1")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-log"},".\n\u251c\u2500\u2500 bin\n\u2502\xa0\xa0 \u2514\u2500\u2500 protoc -> ../protoc-2.6.1-build2-linux-x86_64.exe\n\u251c\u2500\u2500 protobuf-2.6.1   ##\u5b98\u65b9proto=>protobuf-2.6.1/src/google/protobuf/*.proto\n\u2514\u2500\u2500 protoc-2.6.1-build2-linux-x86_64.exe\n")),(0,n.kt)("h2",{id:"proto3"},"proto3"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/protocolbuffers/protobuf/releases?page=1"},"protoc-3.19.1")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-log"},".\n\u251c\u2500\u2500 bin\n\u2502\xa0\xa0 \u2514\u2500\u2500 protoc\n\u251c\u2500\u2500 include\n\u2502\xa0\xa0 \u2514\u2500\u2500 google ##\u5b98\u65b9proto=>include/google/protobuf/*.proto\n\u2514\u2500\u2500 readme.txt\n")),(0,n.kt)("h2",{id:"maven-plugin"},"maven plugin"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n<groupId>com.github.os72</groupId>\n<artifactId>protoc-jar-maven-plugin</artifactId>\n<version>${protoc.maven.plugin.version}</version>\n<executions>\n    <execution>\n        <id>generate-sources</id>\n        <phase>generate-sources</phase>\n        <goals>\n            <goal>run</goal>\n        </goals>\n        <configuration>\n            <protocVersion>${protobuf.version}</protocVersion>\n            <addSources>none</addSources>\n            <includeStdTypes>true</includeStdTypes>\n            <outputDirectory>src/main/java</outputDirectory>\n            <inputDirectories>\n                <include>src/main/proto</include>\n            </inputDirectories>\n        </configuration>\n    </execution>\n    <execution>\n        <id>generate-test-sources</id>\n        <phase>generate-test-sources</phase>\n        <goals>\n            <goal>run</goal>\n        </goals>\n        <configuration>\n            <protocVersion>${protobuf.version}</protocVersion>\n            <includeStdTypes>true</includeStdTypes>\n            <addSources>none</addSources>\n            <outputDirectory>src/test/java</outputDirectory>\n            <inputDirectories>\n                <include>src/test/proto</include>\n            </inputDirectories>\n        </configuration>\n    </execution>\n</executions>\n</plugin>\n")))}s.isMDXComponent=!0}}]);