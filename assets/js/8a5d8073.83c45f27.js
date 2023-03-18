"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[3907],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>d});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),u=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?t.createElement(g,i(i({ref:r},s),{},{components:n})):t.createElement(g,i({ref:r},s))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9459:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=n(7462),o=(n(7294),n(3905));const a={},i=void 0,l={unversionedId:"tools/maven\u5e38\u7528\u64cd\u4f5c",id:"tools/maven\u5e38\u7528\u64cd\u4f5c",title:"maven\u5e38\u7528\u64cd\u4f5c",description:"\u8df3\u8fc7\u5355\u5143\u6d4b\u8bd5",source:"@site/docs/tools/maven\u5e38\u7528\u64cd\u4f5c.md",sourceDirName:"tools",slug:"/tools/maven\u5e38\u7528\u64cd\u4f5c",permalink:"/docs/tools/maven\u5e38\u7528\u64cd\u4f5c",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/tools/maven\u5e38\u7528\u64cd\u4f5c.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"maven-release-plugin",permalink:"/docs/tools/maven-release-plugin"},next:{title:"openvpn\u5b89\u88c5",permalink:"/docs/tools/openvpn\u5b89\u88c5"}},p={},u=[{value:"\u8df3\u8fc7\u5355\u5143\u6d4b\u8bd5",id:"\u8df3\u8fc7\u5355\u5143\u6d4b\u8bd5",level:2},{value:"springboot \u6253\u5305\u672c\u5730 jar",id:"springboot-\u6253\u5305\u672c\u5730-jar",level:2},{value:"Blocked mirror for repositories",id:"blocked-mirror-for-repositories",level:2}],s={toc:u};function c(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u8df3\u8fc7\u5355\u5143\u6d4b\u8bd5"},"\u8df3\u8fc7\u5355\u5143\u6d4b\u8bd5"),(0,o.kt)("p",null,"-Dmaven.test.skip=true\uff1a\u4e0d\u6267\u884c\u6d4b\u8bd5\u7528\u4f8b\uff0c\u4e5f\u4e0d\u7f16\u8bd1\u6d4b\u8bd5\u7528\u4f8b\u7c7b\u3002\n\u7b49\u6548 pom.xml \u6587\u4ef6\u4e2d\u4fee\u6539\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>org.apache.maven.plugin</groupId>\n    <artifactId>maven-compiler-plugin</artifactId>\n    <version>2.1</version>\n    <configuration>\n        <skip>true</skip>\n    </configuration>\n</plugin>\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <version>2.5</version>\n    <configuration>\n        <skip>true</skip>\n    </configuration>\n</plugin>\n")),(0,o.kt)("p",null,"-DskipTests\uff1a\u4e0d\u6267\u884c\u6d4b\u8bd5\u7528\u4f8b\uff0c\u4f46\u7f16\u8bd1\u6d4b\u8bd5\u7528\u4f8b\u7c7b\u751f\u6210\u76f8\u5e94\u7684 class \u6587\u4ef6\u3002\n\u7b49\u6548 pom.xml \u6587\u4ef6\u4e2d\u4fee\u6539\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <version>2.5</version>\n    <configuration>\n        <skipTests>true</skipTests>\n    </configuration>\n</plugin>\n")),(0,o.kt)("h2",{id:"springboot-\u6253\u5305\u672c\u5730-jar"},"springboot \u6253\u5305\u672c\u5730 jar"),(0,o.kt)("p",null,"spring boot \u6253\u5305\u5c06",(0,o.kt)("scope",null,"system"),"\u7684 jar \u5305\u542b\u8fdb\u53bb:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-maven-plugin</artifactId>\n    <configuration>\n        <includeSystemScope>true</includeSystemScope>\n    </configuration>\n</plugin>\n")),(0,o.kt)("h2",{id:"blocked-mirror-for-repositories"},"Blocked mirror for repositories"),(0,o.kt)("p",null,"Maven \u5728\u5347\u7ea7\u5230 3.8.1 \u4ee5\u540e\uff0c\u4ece\u5b89\u5168\u89d2\u5ea6\u8003\u8651\uff0c\u9ed8\u8ba4\u5c06\u975e https \u7684\u8fdc\u7aef\u4ed3\u5e93\u5c4f\u853d\u6389\u4e86\n\u89e3\u51b3\u529e\u6cd5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u628a Maven \u7248\u672c\u964d\u5230 3.8.1 \u4ee5\u4e0b;"),(0,o.kt)("li",{parentName:"ul"},"\u8fdc\u7aef\u4ed3\u5e93\u652f\u6301 https;"),(0,o.kt)("li",{parentName:"ul"},"\u4e3a\u6bcf\u4e00\u4e2a\u975e http \u6e90\u589e\u52a0\u5982\u4e0b mirror \u914d\u7f6e(\u6e90\u6bd4\u8f83\u591a\u7684\u8bdd\u4f1a\u6bd4\u8f83\u9ebb\u70e6)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<mirror>\n    <id>xxxx</id>\n    <mirrorOf>external:http:*</mirrorOf>\n    <url>http://xxxxxx</url>\n    <blocked>false</blocked>\n</mirror>\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u91ca\u6389\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6$MAVEN_HOME/conf/settings.xml \u4e2d\u7684\u76f8\u5173 block \u8bbe\u7f6e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<mirror>\n    <id>maven-default-http-blocker</id>\n    <mirrorOf>external:http:*</mirrorOf>\n    <name>Pseudo repository to mirror external repositories initially using HTTP.</name>\n    <url>http://0.0.0.0/</url>\n    <blocked>true</blocked>\n</mirror>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 dummy \u955c\u50cf\u8986\u76d6\u6389\u9ed8\u8ba4\u914d\u7f6e\u4e2d\u7684\u955c\u50cf\u914d\u7f6e,\u5728~/.m2/settings.xml \u4e2d\u6dfb\u52a0\u5982\u4e0b mirror \u914d\u7f6e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<mirror>\n    <id>maven-default-http-blocker</id>\n    <mirrorOf>external:dummy:*</mirrorOf>\n    <name>Pseudo repository to mirror external repositories initially using HTTP.</name>\n    <url>http://0.0.0.0/</url>\n    <blocked>true</blocked>\n</mirror>\n\n")))}c.isMDXComponent=!0}}]);