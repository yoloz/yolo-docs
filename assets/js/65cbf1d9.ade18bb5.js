"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[5e3],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>g});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return r?t.createElement(g,l(l({ref:n},p),{},{components:r})):t.createElement(g,l({ref:n},p))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69673:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var t=r(87462),a=(r(67294),r(3905));const i={},l=void 0,o={unversionedId:"maven/maven\u5e38\u7528\u64cd\u4f5c",id:"maven/maven\u5e38\u7528\u64cd\u4f5c",title:"maven\u5e38\u7528\u64cd\u4f5c",description:"\u8df3\u8fc7\u5355\u5143\u6d4b\u8bd5",source:"@site/docs/maven/maven\u5e38\u7528\u64cd\u4f5c.md",sourceDirName:"maven",slug:"/maven/maven\u5e38\u7528\u64cd\u4f5c",permalink:"/docs/maven/maven\u5e38\u7528\u64cd\u4f5c",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/maven/maven\u5e38\u7528\u64cd\u4f5c.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"maven-release-plugin",permalink:"/docs/maven/maven-release-plugin"},next:{title:"maven\u672c\u5730\u4f9d\u8d56",permalink:"/docs/maven/maven\u672c\u5730\u4f9d\u8d56"}},u={},s=[{value:"\u8df3\u8fc7\u5355\u5143\u6d4b\u8bd5",id:"\u8df3\u8fc7\u5355\u5143\u6d4b\u8bd5",level:2},{value:"Blocked mirror for repositories",id:"blocked-mirror-for-repositories",level:2},{value:"createDependencyReducedPom \u5c5e\u6027",id:"createdependencyreducedpom-\u5c5e\u6027",level:2},{value:"Plugin validation issues were detected in n plugin(s)",id:"plugin-validation-issues-were-detected-in-n-plugins",level:2},{value:"\u6253\u5305\u6392\u9664 resources \u6587\u4ef6",id:"\u6253\u5305\u6392\u9664-resources-\u6587\u4ef6",level:2}],p={toc:s},c="wrapper";function m(e){let{components:n,...r}=e;return(0,a.kt)(c,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8df3\u8fc7\u5355\u5143\u6d4b\u8bd5"},"\u8df3\u8fc7\u5355\u5143\u6d4b\u8bd5"),(0,a.kt)("p",null,"-Dmaven.test.skip=true\uff1a\u4e0d\u6267\u884c\u6d4b\u8bd5\u7528\u4f8b\uff0c\u4e5f\u4e0d\u7f16\u8bd1\u6d4b\u8bd5\u7528\u4f8b\u7c7b\u3002\n\u7b49\u6548 pom.xml \u6587\u4ef6\u4e2d\u4fee\u6539\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>org.apache.maven.plugin</groupId>\n    <artifactId>maven-compiler-plugin</artifactId>\n    <version>2.1</version>\n    <configuration>\n        <skip>true</skip>\n    </configuration>\n</plugin>\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <version>2.5</version>\n    <configuration>\n        <skip>true</skip>\n    </configuration>\n</plugin>\n")),(0,a.kt)("p",null,"-DskipTests\uff1a\u4e0d\u6267\u884c\u6d4b\u8bd5\u7528\u4f8b\uff0c\u4f46\u7f16\u8bd1\u6d4b\u8bd5\u7528\u4f8b\u7c7b\u751f\u6210\u76f8\u5e94\u7684 class \u6587\u4ef6\u3002\n\u7b49\u6548 pom.xml \u6587\u4ef6\u4e2d\u4fee\u6539\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <version>2.5</version>\n    <configuration>\n        <skipTests>true</skipTests>\n    </configuration>\n</plugin>\n")),(0,a.kt)("h2",{id:"blocked-mirror-for-repositories"},"Blocked mirror for repositories"),(0,a.kt)("p",null,"Maven \u5728\u5347\u7ea7\u5230 3.8.1 \u4ee5\u540e\uff0c\u4ece\u5b89\u5168\u89d2\u5ea6\u8003\u8651\uff0c\u9ed8\u8ba4\u5c06\u975e https \u7684\u8fdc\u7aef\u4ed3\u5e93\u5c4f\u853d\u6389\u4e86\n\u89e3\u51b3\u529e\u6cd5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u628a Maven \u7248\u672c\u964d\u5230 3.8.1 \u4ee5\u4e0b;"),(0,a.kt)("li",{parentName:"ul"},"\u8fdc\u7aef\u4ed3\u5e93\u652f\u6301 https;"),(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u6bcf\u4e00\u4e2a\u975e http \u6e90\u589e\u52a0\u5982\u4e0b mirror \u914d\u7f6e(\u6e90\u6bd4\u8f83\u591a\u7684\u8bdd\u4f1a\u6bd4\u8f83\u9ebb\u70e6)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<mirror>\n    <id>xxxx</id>\n    <mirrorOf>external:http:*</mirrorOf>\n    <url>http://xxxxxx</url>\n    <blocked>false</blocked>\n</mirror>\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u91ca\u6389\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6$MAVEN_HOME/conf/settings.xml \u4e2d\u7684\u76f8\u5173 block \u8bbe\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<mirror>\n    <id>maven-default-http-blocker</id>\n    <mirrorOf>external:http:*</mirrorOf>\n    <name>Pseudo repository to mirror external repositories initially using HTTP.</name>\n    <url>http://0.0.0.0/</url>\n    <blocked>true</blocked>\n</mirror>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 dummy \u955c\u50cf\u8986\u76d6\u6389\u9ed8\u8ba4\u914d\u7f6e\u4e2d\u7684\u955c\u50cf\u914d\u7f6e,\u5728~/.m2/settings.xml \u4e2d\u6dfb\u52a0\u5982\u4e0b mirror \u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<mirror>\n    <id>maven-default-http-blocker</id>\n    <mirrorOf>external:dummy:*</mirrorOf>\n    <name>Pseudo repository to mirror external repositories initially using HTTP.</name>\n    <url>http://0.0.0.0/</url>\n    <blocked>true</blocked>\n</mirror>\n\n")),(0,a.kt)("h2",{id:"createdependencyreducedpom-\u5c5e\u6027"},"createDependencyReducedPom \u5c5e\u6027"),(0,a.kt)("p",null,"maven-shade-plugin \u63d2\u4ef6\u6709\u4e2a\u914d\u7f6e\u5c5e\u6027:createDependencyReducedPom,\u9ed8\u8ba4\u503c\u4e3a true."),(0,a.kt)("p",null,"\u5047\u5982\u6211\u7684\u4e00\u4e2a\u5de5\u7a0b A \u4f9d\u8d56\u4e86 spring-boot-starter-tomcat,\u90a3\u4e48\u8fd9\u4e2a\u4f9d\u8d56(\u5373 spring-boot-starter-tomcat)\u4e2d\u7684.class \u6587\u4ef6\u4f1a\u88ab\u6253\u5305\u8fdb\u751f\u6210\u7684 A.jar \u5305\u4e2d\uff0c\u800c\u5728\u751f\u6210\u7684 dependency-reduced-pom.xml \u6587\u4ef6\u4e2d\uff0c\u8fd9\u4e2a\u4f9d\u8d56\u5c06\u88ab exclusion \u6389\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\u8fd9\u4e2a dependency-reduced-pom.xml \u6709\u4ec0\u4e48\u7528\u5462\uff1f"),(0,a.kt)("p",null,"\u6211\u4eec\u5982\u679c\u5728\u53e6\u4e00\u4e2a\u5de5\u7a0b B \u4e2d\u5f15\u7528\u4e86 A \u5de5\u7a0b\u5bf9\u5e94\u7684 A.jar\uff0c\u800c\u4e14 B \u4e5f\u4f9d\u8d56\u4e86 spring-boot-starter-tomcat\uff0c\u90a3\u4e48\u6211\u4eec\u5728 B \u5de5\u7a0b\u4e2d\u5c31\u4e0d\u9700\u8981\u518d\u4f9d\u8d56 spring-boot-starter-tomcat \u4e86\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u91cd\u590d\u5f15\u7528\u3002"),(0,a.kt)("h2",{id:"plugin-validation-issues-were-detected-in-n-plugins"},"Plugin validation issues were detected in n plugin(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"[INFO] ------------------------------------------------------------------------\n[WARNING]\n[WARNING] Plugin validation issues were detected in 2 plugin(s)\n[WARNING]\n[WARNING]  * org.apache.maven.plugins:maven-compiler-plugin:3.10.1\n[WARNING]  * org.apache.maven.plugins:maven-resources-plugin:3.3.0\n[WARNING]\n[WARNING] For more or less details, use 'maven.plugin.validation' property with one of the values (case insensitive): [BRIEF, DEFAULT, VERBOSE]\n[WARNING]\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mvn -Dmaven.plugin.validation=verbose ..."),"\u5f88\u591a\u65f6\u5019\u53ea\u9700\u8981\u5347\u7ea7\u6307\u5b9a\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://maven.apache.org/plugins/index.html"},"plugins")," \u5373\u53ef\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-compiler-plugin</artifactId>\n    <version>3.11.0</version>\n</plugin>\n")),(0,a.kt)("h2",{id:"\u6253\u5305\u6392\u9664-resources-\u6587\u4ef6"},"\u6253\u5305\u6392\u9664 resources \u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<build>\n    <resources>\n        <resource>\n            <directory>src/main/java</directory>\n            <includes>\n                <include>**/*.xml</include>\n            </includes>\n        </resource>\n        <resource>\n            <directory>src/main/resources</directory>\n            <includes>\n                <include>**/*.*</include>\n            </includes>\n            \x3c!-- \u6392\u9664resources \u6587\u4ef6\u4e0b\u6307\u5b9a\u8d44\u6e90\u6587\u4ef6 --\x3e\n            <excludes>\n                <exclude>templates/**</exclude>\n                <exclude>dp/**</exclude>\n            </excludes>\n        </resource>\n    </resources>\n    <plugins>\n    \x3c!-- ..... --\x3e\n    </plugins>\n</build>\n")))}m.isMDXComponent=!0}}]);