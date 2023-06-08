"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[3907],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>g});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?t.createElement(g,l(l({ref:n},c),{},{components:r})):t.createElement(g,l({ref:n},c))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9459:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var t=r(7462),o=(r(7294),r(3905));const a={},l=void 0,i={unversionedId:"tools/maven\u5e38\u7528\u64cd\u4f5c",id:"tools/maven\u5e38\u7528\u64cd\u4f5c",title:"maven\u5e38\u7528\u64cd\u4f5c",description:"\u8df3\u8fc7\u5355\u5143\u6d4b\u8bd5",source:"@site/docs/tools/maven\u5e38\u7528\u64cd\u4f5c.md",sourceDirName:"tools",slug:"/tools/maven\u5e38\u7528\u64cd\u4f5c",permalink:"/docs/tools/maven\u5e38\u7528\u64cd\u4f5c",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/tools/maven\u5e38\u7528\u64cd\u4f5c.md",tags:[],version:"current",lastUpdatedAt:1686217402,formattedLastUpdatedAt:"2023\u5e746\u67088\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"maven-release-plugin",permalink:"/docs/tools/maven-release-plugin"},next:{title:"openvpn\u5b89\u88c5",permalink:"/docs/tools/openvpn\u5b89\u88c5"}},p={},s=[{value:"\u8df3\u8fc7\u5355\u5143\u6d4b\u8bd5",id:"\u8df3\u8fc7\u5355\u5143\u6d4b\u8bd5",level:2},{value:"&#39;dependencies.dependency.systemPath&#39; for...",id:"dependenciesdependencysystempath-for",level:2},{value:"springboot \u6253\u5305\u672c\u5730 jar",id:"springboot-\u6253\u5305\u672c\u5730-jar",level:2},{value:"Blocked mirror for repositories",id:"blocked-mirror-for-repositories",level:2},{value:"createDependencyReducedPom \u5c5e\u6027",id:"createdependencyreducedpom-\u5c5e\u6027",level:2}],c={toc:s},u="wrapper";function d(e){let{components:n,...r}=e;return(0,o.kt)(u,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u8df3\u8fc7\u5355\u5143\u6d4b\u8bd5"},"\u8df3\u8fc7\u5355\u5143\u6d4b\u8bd5"),(0,o.kt)("p",null,"-Dmaven.test.skip=true\uff1a\u4e0d\u6267\u884c\u6d4b\u8bd5\u7528\u4f8b\uff0c\u4e5f\u4e0d\u7f16\u8bd1\u6d4b\u8bd5\u7528\u4f8b\u7c7b\u3002\n\u7b49\u6548 pom.xml \u6587\u4ef6\u4e2d\u4fee\u6539\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>org.apache.maven.plugin</groupId>\n    <artifactId>maven-compiler-plugin</artifactId>\n    <version>2.1</version>\n    <configuration>\n        <skip>true</skip>\n    </configuration>\n</plugin>\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <version>2.5</version>\n    <configuration>\n        <skip>true</skip>\n    </configuration>\n</plugin>\n")),(0,o.kt)("p",null,"-DskipTests\uff1a\u4e0d\u6267\u884c\u6d4b\u8bd5\u7528\u4f8b\uff0c\u4f46\u7f16\u8bd1\u6d4b\u8bd5\u7528\u4f8b\u7c7b\u751f\u6210\u76f8\u5e94\u7684 class \u6587\u4ef6\u3002\n\u7b49\u6548 pom.xml \u6587\u4ef6\u4e2d\u4fee\u6539\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <version>2.5</version>\n    <configuration>\n        <skipTests>true</skipTests>\n    </configuration>\n</plugin>\n")),(0,o.kt)("h2",{id:"dependenciesdependencysystempath-for"},"'dependencies.dependency.systemPath' for..."),(0,o.kt)("p",null,"\u539f\u59cb\u5199\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.cloudera.hive</groupId>\n    <artifactId>hive-jdbc</artifactId>\n    <version>2.6.13</version>\n    <scope>system</scope>\n    <systemPath>${project.basedir}/../ext/HiveJDBC42.jar</systemPath>\n</dependency>\n")),(0,o.kt)("p",null,"\u544a\u8b66\u8be6\u60c5:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"$ mvn clean package -DskipTests\n[INFO] Scanning for projects...\n[WARNING]\n[WARNING] Some problems were encountered while building the effective model for com.zhds:ui-common:jar:3.0\n[WARNING] 'dependencies.dependency.systemPath' for com.cloudera.hive:hive-jdbc:jar should not point at files within the project directory, ${project.basedir}/../ext/HiveJDBC42.jar will be unresolvable by dependent projects @ line 66, column 25\n[WARNING]\n[WARNING] It is highly recommended to fix these problems because they threaten the stability of your build.\n[WARNING]\n[WARNING] For this reason, future Maven versions might no longer support building such malformed projects.\n[WARNING]\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"pom.basedir"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.cloudera.hive</groupId>\n    <artifactId>hive-jdbc</artifactId>\n    <version>2.6.13</version>\n    <scope>system</scope>\n    <systemPath>${pom.basedir}/../ext/HiveJDBC42.jar</systemPath>\n</dependency>\n")),(0,o.kt)("h2",{id:"springboot-\u6253\u5305\u672c\u5730-jar"},"springboot \u6253\u5305\u672c\u5730 jar"),(0,o.kt)("p",null,"spring boot \u6253\u5305\u5c06",(0,o.kt)("scope",null,"system"),"\u7684 jar \u5305\u542b\u8fdb\u53bb:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-maven-plugin</artifactId>\n    <configuration>\n        <includeSystemScope>true</includeSystemScope>\n    </configuration>\n</plugin>\n")),(0,o.kt)("h2",{id:"blocked-mirror-for-repositories"},"Blocked mirror for repositories"),(0,o.kt)("p",null,"Maven \u5728\u5347\u7ea7\u5230 3.8.1 \u4ee5\u540e\uff0c\u4ece\u5b89\u5168\u89d2\u5ea6\u8003\u8651\uff0c\u9ed8\u8ba4\u5c06\u975e https \u7684\u8fdc\u7aef\u4ed3\u5e93\u5c4f\u853d\u6389\u4e86\n\u89e3\u51b3\u529e\u6cd5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u628a Maven \u7248\u672c\u964d\u5230 3.8.1 \u4ee5\u4e0b;"),(0,o.kt)("li",{parentName:"ul"},"\u8fdc\u7aef\u4ed3\u5e93\u652f\u6301 https;"),(0,o.kt)("li",{parentName:"ul"},"\u4e3a\u6bcf\u4e00\u4e2a\u975e http \u6e90\u589e\u52a0\u5982\u4e0b mirror \u914d\u7f6e(\u6e90\u6bd4\u8f83\u591a\u7684\u8bdd\u4f1a\u6bd4\u8f83\u9ebb\u70e6)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<mirror>\n    <id>xxxx</id>\n    <mirrorOf>external:http:*</mirrorOf>\n    <url>http://xxxxxx</url>\n    <blocked>false</blocked>\n</mirror>\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u91ca\u6389\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6$MAVEN_HOME/conf/settings.xml \u4e2d\u7684\u76f8\u5173 block \u8bbe\u7f6e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<mirror>\n    <id>maven-default-http-blocker</id>\n    <mirrorOf>external:http:*</mirrorOf>\n    <name>Pseudo repository to mirror external repositories initially using HTTP.</name>\n    <url>http://0.0.0.0/</url>\n    <blocked>true</blocked>\n</mirror>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 dummy \u955c\u50cf\u8986\u76d6\u6389\u9ed8\u8ba4\u914d\u7f6e\u4e2d\u7684\u955c\u50cf\u914d\u7f6e,\u5728~/.m2/settings.xml \u4e2d\u6dfb\u52a0\u5982\u4e0b mirror \u914d\u7f6e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<mirror>\n    <id>maven-default-http-blocker</id>\n    <mirrorOf>external:dummy:*</mirrorOf>\n    <name>Pseudo repository to mirror external repositories initially using HTTP.</name>\n    <url>http://0.0.0.0/</url>\n    <blocked>true</blocked>\n</mirror>\n\n")),(0,o.kt)("h2",{id:"createdependencyreducedpom-\u5c5e\u6027"},"createDependencyReducedPom \u5c5e\u6027"),(0,o.kt)("p",null,"maven-shade-plugin \u63d2\u4ef6\u6709\u4e2a\u914d\u7f6e\u5c5e\u6027:createDependencyReducedPom,\u9ed8\u8ba4\u503c\u4e3a true."),(0,o.kt)("p",null,"\u5047\u5982\u6211\u7684\u4e00\u4e2a\u5de5\u7a0b A \u4f9d\u8d56\u4e86 spring-boot-starter-tomcat,\u90a3\u4e48\u8fd9\u4e2a\u4f9d\u8d56(\u5373 spring-boot-starter-tomcat)\u4e2d\u7684.class \u6587\u4ef6\u4f1a\u88ab\u6253\u5305\u8fdb\u751f\u6210\u7684 A.jar \u5305\u4e2d\uff0c\u800c\u5728\u751f\u6210\u7684 dependency-reduced-pom.xml \u6587\u4ef6\u4e2d\uff0c\u8fd9\u4e2a\u4f9d\u8d56\u5c06\u88ab exclusion \u6389\u3002"),(0,o.kt)("p",null,"\u90a3\u4e48\u8fd9\u4e2a dependency-reduced-pom.xml \u6709\u4ec0\u4e48\u7528\u5462\uff1f"),(0,o.kt)("p",null,"\u6211\u4eec\u5982\u679c\u5728\u53e6\u4e00\u4e2a\u5de5\u7a0b B \u4e2d\u5f15\u7528\u4e86 A \u5de5\u7a0b\u5bf9\u5e94\u7684 A.jar\uff0c\u800c\u4e14 B \u4e5f\u4f9d\u8d56\u4e86 spring-boot-starter-tomcat\uff0c\u90a3\u4e48\u6211\u4eec\u5728 B \u5de5\u7a0b\u4e2d\u5c31\u4e0d\u9700\u8981\u518d\u4f9d\u8d56 spring-boot-starter-tomcat \u4e86\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u91cd\u590d\u5f15\u7528\u3002"))}d.isMDXComponent=!0}}]);