"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[6339],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),m=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=m(t.components);return r.createElement(d.Provider,{value:e},t.children)},g="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),g=m(a),f=n,k=g["".concat(d,".").concat(f)]||g[f]||o[f]||l;return a?r.createElement(k,i(i({ref:e},u),{},{components:a})):r.createElement(k,i({ref:e},u))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=f;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[g]="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},81181:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={},i=void 0,p={unversionedId:"java/Stream2String",id:"java/Stream2String",title:"Stream2String",description:"\u8bfb\u53d6 inputStream \u751f\u6210\u5b57\u7b26\u4e32\u65b9\u5f0f",source:"@site/docs/java/Stream2String.md",sourceDirName:"java",slug:"/java/Stream2String",permalink:"/docs/java/Stream2String",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/java/Stream2String.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NoClassDefFoundError",permalink:"/docs/java/NoClassDefFoundError"},next:{title:"esClient",permalink:"/docs/java/esClient"}},d={},m=[{value:"JDK",id:"jdk",level:2},{value:"Scanner",id:"scanner",level:3},{value:"Stream Api",id:"stream-api",level:3},{value:"InputStreamReader \u548c StringBuilder",id:"inputstreamreader-\u548c-stringbuilder",level:3},{value:"ByteArrayOutputStream",id:"bytearrayoutputstream",level:3},{value:"BufferedReader",id:"bufferedreader",level:3},{value:"BufferedInputStream \u548c ByteArrayOutputStream",id:"bufferedinputstream-\u548c-bytearrayoutputstream",level:3},{value:"StringBuilder",id:"stringbuilder",level:3},{value:"\u5de5\u5177\u5305",id:"\u5de5\u5177\u5305",level:2},{value:"IOUtils.toString(Apache Utils)",id:"ioutilstostringapache-utils",level:3},{value:"CharStreams(guava)",id:"charstreamsguava",level:3},{value:"IOUtils.copy(Apache Commons)",id:"ioutilscopyapache-commons",level:3},{value:"\u6bd4\u8f83",id:"\u6bd4\u8f83",level:2},{value:"\u5bf9\u4e8e\u5c0f\u578b String\uff08\u957f\u5ea6=175\uff09",id:"\u5bf9\u4e8e\u5c0f\u578b-string\u957f\u5ea6175",level:3},{value:"\u5bf9\u4e8e\u5927 String\uff08\u957f=50100\uff09",id:"\u5bf9\u4e8e\u5927-string\u957f50100",level:3}],u={toc:m},g="wrapper";function o(t){let{components:e,...a}=t;return(0,n.kt)(g,(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u8bfb\u53d6 inputStream \u751f\u6210\u5b57\u7b26\u4e32\u65b9\u5f0f"),(0,n.kt)("h2",{id:"jdk"},"JDK"),(0,n.kt)("h3",{id:"scanner"},"Scanner"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'Scanner s = new Scanner(inputStream).useDelimiter("\\A");\nString result = s.hasNext() ? s.next() : "";\n')),(0,n.kt)("h3",{id:"stream-api"},"Stream Api"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String result = new BufferedReader(new InputStreamReader(inputStream)).lines().collect(Collectors.joining("\\n"));\nString result = new BufferedReader(new InputStreamReader(inputStream)).lines().parallel().collect(Collectors.joining("\\n"));  //\u5e76\u884c\n')),(0,n.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u4f1a\u5c06\u5c06\u4e0d\u540c\u7684\u6362\u884c\u7b26\uff08\u5982\\r\\n\uff09\u8f6c\u6362\u4e3a\\n")),(0,n.kt)("h3",{id:"inputstreamreader-\u548c-stringbuilder"},"InputStreamReader \u548c StringBuilder"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'final int bufferSize = 1024;\nfinal char[] buffer = new char[bufferSize];\nfinal StringBuilder out = new StringBuilder();\nReader in = new InputStreamReader(inputStream, "UTF-8");\nfor (; ;) {\n    int rsz = in.read(buffer, 0, buffer.length);\n    if (rsz < 0) break;\n    out.append(buffer, 0, rsz);\n}\nreturn out.toString();\n')),(0,n.kt)("h3",{id:"bytearrayoutputstream"},"ByteArrayOutputStream"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'ByteArrayOutputStream result = new ByteArrayOutputStream();\nbyte[] buffer = new byte[1024];\nint length;\nwhile ((length = inputStream.read(buffer)) != -1) result.write(buffer, 0, length);\n// StandardCharsets. UTF_8.name() > JDK 7\nreturn result.toString("UTF-8");\n')),(0,n.kt)("h3",{id:"bufferedreader"},"BufferedReader"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String newLine = System.getProperty("line.separator");\nBufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));\nStringBuilder result = new StringBuilder();\nString line; boolean flag = false;\nwhile ((line = reader.readLine()) != null) {\n    result.append(flag? newLine: "").append(line);\n    flag = true;\n}\nreturn result.toString();\n')),(0,n.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u4f1a\u5c06\u4e0d\u540c\u7684\u6362\u884c\u7b26\uff08\u5982\\n\\r\uff09\u8f6c\u6362\u4e3a line.separator \u7cfb\u7edf\u5c5e\u6027\uff08\u4f8b\u5982\uff0c\u5728 Windows \u4e2d\u4e3a\u201c\\ r \\ n\u201d\uff09")),(0,n.kt)("h3",{id:"bufferedinputstream-\u548c-bytearrayoutputstream"},"BufferedInputStream \u548c ByteArrayOutputStream"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'BufferedInputStream bis = new BufferedInputStream(inputStream);\nByteArrayOutputStream buf = new ByteArrayOutputStream();\nint result = bis.read();\nwhile(result != -1) {\n    buf.write((byte) result);\n    result = bis.read();\n}\n// StandardCharsets.UTF_8.name() > JDK 7\nreturn buf.toString("UTF-8");\n')),(0,n.kt)("h3",{id:"stringbuilder"},"StringBuilder"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"int ch;\nStringBuilder sb = new StringBuilder();\nwhile((ch = inputStream.read()) != -1) sb.append((char)ch);\nreset();\nreturn sb.toString();\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u5b58\u5728 Unicode \u95ee\u9898\uff0c\u4f8b\u5982\u4f7f\u7528\u6587\u672c\uff08\u53ea\u80fd\u4f7f\u7528\u975e Unicode \u6587\u672c\u6b63\u5e38\u5de5\u4f5c\uff09")),(0,n.kt)("h2",{id:"\u5de5\u5177\u5305"},"\u5de5\u5177\u5305"),(0,n.kt)("h3",{id:"ioutilstostringapache-utils"},"IOUtils.toString(Apache Utils)"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"String result = IOUtils.toString(inputStream, StandardCharsets.UTF_8);")),(0,n.kt)("h3",{id:"charstreamsguava"},"CharStreams(guava)"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"String result = CharStreams.toString(new InputStreamReader(inputStream, Charsets.UTF_8));")),(0,n.kt)("h3",{id:"ioutilscopyapache-commons"},"IOUtils.copy(Apache Commons)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'StringWriter writer = new StringWriter();\nIOUtils.copy(inputStream, writer, "UTF-8");\nreturn writer.toString();\n')),(0,n.kt)("h2",{id:"\u6bd4\u8f83"},"\u6bd4\u8f83"),(0,n.kt)("h3",{id:"\u5bf9\u4e8e\u5c0f\u578b-string\u957f\u5ea6175"},"\u5bf9\u4e8e\u5c0f\u578b String\uff08\u957f\u5ea6=175\uff09"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Benchmark"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Mode"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Cnt"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Score"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ByteArrayOutputStream"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1,343 \xb1 0,028")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"InputStreamReader and StringBuilder"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6,980 \xb1 0,404")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BufferedInputStream \u548c ByteArrayOutputStream"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"7,437 \xb1 0,735")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"StringBuilder"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8,977 \xb1 0,328")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"IOUtils.copy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10,613 \xb1 0,599")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"IOUtils.toString"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10,605 \xb1 0,527")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Scanner"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"12,083 \xb1 0,293")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CharStreams"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"12,999 \xb1 0,514")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Stream Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"15,811 \xb1 0,605")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BufferedReader"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"16,038 \xb1 0,711")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"parallel Stream Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"21,544 \xb1 0,583")))),(0,n.kt)("h3",{id:"\u5bf9\u4e8e\u5927-string\u957f50100"},"\u5bf9\u4e8e\u5927 String\uff08\u957f=50100\uff09"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Benchmark"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Mode"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Cnt"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Score"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ByteArrayOutputStream"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"200,715 \xb1 18,103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"IOUtils.toString"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"300,019 \xb1 8,751")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"InputStreamReader and StringBuilder"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"347,616 \xb1 130,348")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"IOUtils.copy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"352,791 \xb1 105,337")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CharStreams"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"420,137 \xb1 59,877")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BufferedReader"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"632,028 \xb1 17,002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"parallel Stream Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"662,999 \xb1 46,199")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Stream Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"701,269 \xb1 82,296")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BufferedInputStream \u548c ByteArrayOutputStream"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"740,837 \xb1 5,613")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Scanner"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"751,417 \xb1 62,026")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"StringBuilder"),(0,n.kt)("td",{parentName:"tr",align:"left"},"avgt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2919,350 \xb1 1101,942")))))}o.isMDXComponent=!0}}]);