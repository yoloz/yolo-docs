"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7094],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>g});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)o=p[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)o=p[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=i(o),f=n,g=s["".concat(c,".").concat(f)]||s[f]||d[f]||p;return o?r.createElement(g,a(a({ref:t},l),{},{components:o})):r.createElement(g,a({ref:t},l))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=o.length,a=new Array(p);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[s]="string"==typeof e?e:n,a[1]=u;for(var i=2;i<p;i++)a[i]=o[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},5246:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>p,metadata:()=>u,toc:()=>i});var r=o(7462),n=(o(7294),o(3905));const p={},a=void 0,u={unversionedId:"network/\u901a\u4fe1\u534f\u8baeprotobuf",id:"network/\u901a\u4fe1\u534f\u8baeprotobuf",title:"\u901a\u4fe1\u534f\u8baeprotobuf",description:"\u6267\u884c protoc \u7f16\u8bd1\u5668\u751f\u6210 go \u6587\u4ef6\uff1a",source:"@site/docs/network/\u901a\u4fe1\u534f\u8baeprotobuf.md",sourceDirName:"network",slug:"/network/\u901a\u4fe1\u534f\u8baeprotobuf",permalink:"/docs/network/\u901a\u4fe1\u534f\u8baeprotobuf",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/network/\u901a\u4fe1\u534f\u8baeprotobuf.md",tags:[],version:"current",lastUpdatedAt:1686370023,formattedLastUpdatedAt:"2023\u5e746\u670810\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"linux\u5185\u6838\u63a5\u6536\u7f51\u7edc\u5305",permalink:"/docs/network/linux\u5185\u6838\u63a5\u6536\u7f51\u7edc\u5305"},next:{title:"bash\u548cbat",permalink:"/docs/script/bash\u548cbat"}},c={},i=[{value:"proto2",id:"proto2",level:2},{value:"proto3",id:"proto3",level:2},{value:"maven plugin",id:"maven-plugin",level:2}],l={toc:i},s="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(s,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u6267\u884c protoc \u7f16\u8bd1\u5668\u751f\u6210 go \u6587\u4ef6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"protoc --proto_path=./src/protobufDemo/demo1/ --proto_path=./src/protobufDemo/demo2 --go_out=./src/protobufDemo/demo2 ./*.proto\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"--proto_path: \u6307\u5b9a\u4e86\u8981\u53bb\u54ea\u4e2a\u76ee\u5f55\u4e2d\u641c\u7d22 import \u4e2d\u5bfc\u5165\u7684\u548c\u8981\u7f16\u8bd1\u4e3a.go \u7684 proto \u6587\u4ef6\uff0c\u53ef\u4ee5\u5b9a\u4e49\u591a\u4e2a")),(0,n.kt)("h2",{id:"proto2"},"proto2"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/protocolbuffers/protobuf/releases?page=9"},"protobuf-2.6.1"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/com/google/protobuf/protoc/2.6.1-build2/"},"protoc-2.6.1")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-log"},".\n\u251c\u2500\u2500 bin\n\u2502\xa0\xa0 \u2514\u2500\u2500 protoc -> ../protoc-2.6.1-build2-linux-x86_64.exe\n\u251c\u2500\u2500 protobuf-2.6.1   ##\u5b98\u65b9proto=>protobuf-2.6.1/src/google/protobuf/*.proto\n\u2514\u2500\u2500 protoc-2.6.1-build2-linux-x86_64.exe\n")),(0,n.kt)("h2",{id:"proto3"},"proto3"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/protocolbuffers/protobuf/releases?page=1"},"protoc-3.19.1")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-log"},".\n\u251c\u2500\u2500 bin\n\u2502\xa0\xa0 \u2514\u2500\u2500 protoc\n\u251c\u2500\u2500 include\n\u2502\xa0\xa0 \u2514\u2500\u2500 google ##\u5b98\u65b9proto=>include/google/protobuf/*.proto\n\u2514\u2500\u2500 readme.txt\n")),(0,n.kt)("h2",{id:"maven-plugin"},"maven plugin"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n<groupId>com.github.os72</groupId>\n<artifactId>protoc-jar-maven-plugin</artifactId>\n<version>${protoc.maven.plugin.version}</version>\n<executions>\n    <execution>\n        <id>generate-sources</id>\n        <phase>generate-sources</phase>\n        <goals>\n            <goal>run</goal>\n        </goals>\n        <configuration>\n            <protocVersion>${protobuf.version}</protocVersion>\n            <addSources>none</addSources>\n            <includeStdTypes>true</includeStdTypes>\n            <outputDirectory>src/main/java</outputDirectory>\n            <inputDirectories>\n                <include>src/main/proto</include>\n            </inputDirectories>\n        </configuration>\n    </execution>\n    <execution>\n        <id>generate-test-sources</id>\n        <phase>generate-test-sources</phase>\n        <goals>\n            <goal>run</goal>\n        </goals>\n        <configuration>\n            <protocVersion>${protobuf.version}</protocVersion>\n            <includeStdTypes>true</includeStdTypes>\n            <addSources>none</addSources>\n            <outputDirectory>src/test/java</outputDirectory>\n            <inputDirectories>\n                <include>src/test/proto</include>\n            </inputDirectories>\n        </configuration>\n    </execution>\n</executions>\n</plugin>\n")))}d.isMDXComponent=!0}}]);