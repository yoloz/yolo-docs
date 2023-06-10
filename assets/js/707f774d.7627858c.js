"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[8092],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const l={},o=void 0,s={unversionedId:"java/\u6267\u884cshell\u547d\u4ee4",id:"java/\u6267\u884cshell\u547d\u4ee4",title:"\u6267\u884cshell\u547d\u4ee4",description:"\u8bf4\u660e\uff1a",source:"@site/docs/java/\u6267\u884cshell\u547d\u4ee4.md",sourceDirName:"java",slug:"/java/\u6267\u884cshell\u547d\u4ee4",permalink:"/docs/java/\u6267\u884cshell\u547d\u4ee4",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/java/\u6267\u884cshell\u547d\u4ee4.md",tags:[],version:"current",lastUpdatedAt:1686370023,formattedLastUpdatedAt:"2023\u5e746\u670810\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"window\u4e0b\u7684java-cp",permalink:"/docs/java/window\u4e0b\u7684java-cp"},next:{title:"\u6dfb\u52a0\u5bc6\u7801\u5e93BouncyCastle",permalink:"/docs/java/\u6dfb\u52a0\u5bc6\u7801\u5e93BouncyCastle"}},i={},c=[{value:"ProcessBuilder",id:"processbuilder",level:2},{value:"Runtime.exec()",id:"runtimeexec",level:2},{value:"\u8f93\u51fa\u6d41\u9519\u8bef\u6d41\u5904\u7406",id:"\u8f93\u51fa\u6d41\u9519\u8bef\u6d41\u5904\u7406",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"ProcessBuilder \u4e2d\u4fee\u6539\u8fdb\u7a0b\u6784\u9020\u5668\u7684\u5c5e\u6027\u5c06\u5f71\u54cd\u540e\u7eed\u7531\u8be5\u5bf9\u8c61\u7684 start() \u65b9\u6cd5\u542f\u52a8\u7684\u8fdb\u7a0b\uff0c\u4f46\u4ece\u4e0d\u4f1a\u5f71\u54cd\u4ee5\u524d\u542f\u52a8\u7684\u8fdb\u7a0b\u6216 Java \u81ea\u8eab\u7684\u8fdb\u7a0b;"),(0,a.kt)("li",{parentName:"ol"},"ProcessBuilder \u7c7b\u4e0d\u662f\u540c\u6b65\u7684\u3002\u5982\u679c\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u8bbf\u95ee\u4e00\u4e2a ProcessBuilder\uff0c\u800c\u5176\u4e2d\u81f3\u5c11\u4e00\u4e2a\u7ebf\u7a0b\u4ece\u7ed3\u6784\u4e0a\u4fee\u6539\u4e86\u5176\u4e2d\u4e00\u4e2a\u5c5e\u6027\uff0c\u5b83\u5fc5\u987b \u4fdd\u6301\u5916\u90e8\u540c\u6b65;"),(0,a.kt)("li",{parentName:"ol"},"ProcessBuilder \u6216 Runtime,\u7528\u4e8e\u8c03\u7528\u5916\u90e8\u53ef\u6267\u884c\u7a0b\u5e8f\u6216\u7cfb\u7edf\u547d\u4ee4\uff0c\u5e76\u91cd\u5b9a\u5411\u5916\u90e8\u7a0b\u5e8f\u7684\u6807\u51c6\u8f93\u5165\u3001\u6807\u51c6\u8f93\u51fa\u548c\u6807\u51c6\u9519\u8bef\u5230\u7f13\u51b2\u6c60,\u5373\u521b\u5efa\u7684\u5b50\u8fdb\u7a0b\u6ca1\u6709\u81ea\u5df1\u7684\u7ec8\u7aef\u6216\u63a7\u5236\u53f0\uff0c\u5b83\u7684\u6240\u6709\u6807\u51c6 io\uff08stdin\u3001stdout \u3001stderr\uff09\u64cd\u4f5c\u90fd\u5c06\u901a\u8fc7\u4e09\u4e2a\u6d41 (getOutputStream()\u3001getInputStream() \u548c getErrorStream()) \u91cd\u5b9a\u5411\u5230\u7236\u8fdb\u7a0b\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u6709\u4e9b\u673a\u5668\u5e73\u53f0\u4ec5\u9488\u5bf9\u6807\u51c6\u8f93\u5165\u548c\u8f93\u51fa\u6d41\u63d0\u4f9b\u6709\u9650\u7684\u7f13\u51b2\u533a\u5927\u5c0f\uff0c\u5982\u679c\u8bfb\u5199\u5b50\u8fdb\u7a0b\u7684\u8f93\u51fa\u6d41\u6216\u8f93\u5165\u6d41\u8fc5\u901f\u51fa\u73b0\u5931\u8d25\uff0c\u5219\u53ef\u80fd\u5bfc\u81f4\u5b50\u8fdb\u7a0b\u963b\u585e\uff0c\u751a\u81f3\u4ea7\u751f\u6b7b\u9501;"),(0,a.kt)("li",{parentName:"ol"},"ProcessBuilder \u6216 Runtime,\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u53ef\u6267\u884c\u547d\u4ee4\u7a0b\u5e8f\uff0c\u5176\u4ed6\u7684\u662f\u547d\u4ee4\u884c\u6267\u884c\u662f\u9700\u8981\u7684\u53c2\u6570;"),(0,a.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u67e5\u770b JDK \u6e90\u7801\u53ef\u77e5\uff0cRuntime.exec \u6700\u7ec8\u662f\u901a\u8fc7\u8c03\u7528 ProcessBuilder \u6765\u771f\u6b63\u6267\u884c\u64cd\u4f5c\u7684;")),(0,a.kt)("p",null,"\u7528\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// \u540e\u53f0\u542f\u52a8ES\u5e76\u91cd\u5b9a\u5411\u5176\u8f93\u51fa/dev/null\uff08\u5373\u5ffd\u7565\u8f93\u51fa\uff09\n// \u5173\u95edES\u5e76\u5ffd\u7565\u8f93\u51fa\nString cmd;\nif (pid == null || pid == 0) {\n    cmd = "su -c \\"/opt/test/bin/start_es.sh -d >/dev/null\\" test";\n} else {\n    cmd = "su -c \\"/opt/test/bin/stop_es.sh >/dev/null\\" test";\n}\nProcess ps = Runtime.getRuntime().exec(cmd);\n')),(0,a.kt)("p",null,"\u62a5\u9519\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"su: invalid option -- 'd'\nUsage: su [options] [LOGIN]\n\nOptions:\n  -c, --command COMMAND         pass COMMAND to the invoked shell\n  -h, --help                    display this help message and exit\n  -, -l, --login                make the shell a login shell\n  -m, -p,\n  --preserve-environment        do not reset environment variables, and\n                                keep the same shell\n  -s, --shell SHELL             use SHELL instead of the default in passwd\n")),(0,a.kt)("p",null,"\u4ece\u4e0a\u9762\u8bf4\u660e\u4e2d\u53ef\u77e5\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"java \u8c03\u7528\u5916\u90e8\u811a\u672c\u6216\u7cfb\u7edf\u547d\u4ee4\u5373\u901a\u8fc7 jvm \u521b\u5efa\u4e00\u4e2a\u5b50\u8fdb\u7a0b\u6267\u884c\uff0c\u5e76\u5c06\u5b50\u8fdb\u7a0b\u7684\u6807\u51c6 IO \u91cd\u5b9a\u5411\u5230\u8c03\u7528\u8fdb\u7a0b\u7684\u7f13\u51b2\u6c60\uff0c\u6240\u4ee5\u65e0\u6cd5\u5ffd\u7565\u547d\u4ee4\u7684 IO \u8f93\u51fa\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u7ba1\u662f processBuilder \u65b9\u5f0f\u8fd8\u662f runtime \u65b9\u5f0f\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u53ef\u6267\u884c\u547d\u4ee4\uff0c\u5176\u4ed6\u7684\u90fd\u662f\u5176\u53c2\u6570(\u7a7a\u683c\u5207\u5272)\uff0c\u547d\u4ee4",(0,a.kt)("inlineCode",{parentName:"li"},"su"),",\u5176\u4ed6\u90fd\u662f\u5176\u53c2\u6570\uff0c\u5b9e\u9645",(0,a.kt)("inlineCode",{parentName:"li"},"-d"),"\u5e94\u8be5\u662f\u811a\u672c\u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u811a\u672c\u5c06\u5ffd\u7565\u8f93\u51fa\u4ee5\u53ca\u540e\u53f0\u8fd0\u884c\u7eb3\u5165\u5176\u4e2d\uff0c\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},'su -c \\"/opt/test/bin/test.sh\\" test'))),(0,a.kt)("h2",{id:"processbuilder"},"ProcessBuilder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// -- Linux --\n\n// Run a shell command\nprocessBuilder.command("bash", "-c", "ls /home/mkyong/");\n\n//chmod permission\nprocessBuilder.command("/bin/chmod", "755", scriptPath);\n\n// Run a shell script\nprocessBuilder.command("path/to/hello.sh");\n\n// -- Windows --\n\n// Run a command\uff0ccmd\u7684\u53c2\u6570 \u201c/c\u201d \u8868\u793a\u5f53\u547d\u4ee4\u6267\u884c\u5b8c\u6210\u540e\u5173\u95ed\u81ea\u8eab\nprocessBuilder.command("cmd.exe", "/c", "dir C:\\\\Users\\\\mkyong");\n\n// Run a bat file\nprocessBuilder.command("C:\\\\Users\\\\mkyong\\\\hello.bat");\n\nProcess process = processBuilder.start();\n\n')),(0,a.kt)("h2",{id:"runtimeexec"},"Runtime.exec()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#Runtime.getRuntime() \u8fd4\u56de\u5f53\u524d\u5e94\u7528\u7a0b\u5e8f\u7684 Runtime \u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u7684 exec() \u65b9\u6cd5\u6307\u793a Java \u865a\u62df\u673a\u521b\u5efa\u4e00\u4e2a\u5b50\u8fdb\u7a0b\u6267\u884c\u6307\u5b9a\u7684\u53ef\u6267\u884c\u7a0b\u5e8f\uff0c\u5e76\u8fd4\u56de\u4e0e\u8be5\u5b50\u8fdb\u7a0b\u5bf9\u5e94\u7684 Process \u5bf9\u8c61\u5b9e\u4f8b\u3002\u901a\u8fc7 Process \u53ef\u4ee5\u63a7\u5236\u8be5\u5b50\u8fdb\u7a0b\u7684\u6267\u884c\u6216\u83b7\u53d6\u8be5\u5b50\u8fdb\u7a0b\u7684\u4fe1\u606f\u3002\nProcess process = Runtime.getRuntime().exec( ".//p.exe ");\n#\u7b49\u5f85\u5b50\u8fdb\u7a0b\u5b8c\u6210\u518d\u5f80\u4e0b\u6267\u884c\nprocess.waitfor();\n')),(0,a.kt)("h2",{id:"\u8f93\u51fa\u6d41\u9519\u8bef\u6d41\u5904\u7406"},"\u8f93\u51fa\u6d41\u9519\u8bef\u6d41\u5904\u7406"),(0,a.kt)("p",null,"\u901a\u8fc7 getInputStream()\u3001getErrorStream() \u83b7\u53d6\u7684\u8f93\u5165\u6d41\u548c\u9519\u8bef\u4fe1\u606f\u6d41\u662f\u7f13\u51b2\u6c60\u5411\u5f53\u524d Java \u7a0b\u5e8f\u63d0\u4f9b\u7684\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u83b7\u53d6\u5916\u90e8\u7a0b\u5e8f\u7684\u6807\u51c6\u8f93\u51fa\u6d41\u548c\u6807\u51c6\u9519\u8bef\u6d41\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"         \u8f93\u5165\u6d41          \u6807\u51c6\u8f93\u51fa\nJava\u7a0b\u5e8f <====== \u7f13\u51b2\u6c60 <======== \u5916\u90e8\u7a0b\u5e8f(\u6267\u884c\u547d\u4ee4\u7684\u5b50\u8fdb\u7a0b)\n         \u9519\u8bef\u6d41          \u6807\u51c6\u9519\u8bef\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u7f13\u51b2\u6c60\u7684\u5bb9\u91cf\u662f\u4e00\u5b9a\u7684\uff0c\u56e0\u6b64\u82e5\u5916\u90e8\u7a0b\u5e8f\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u4e0d\u65ad\u5411\u7f13\u51b2\u6c60\u8f93\u51fa\u5185\u5bb9\uff0c\u5f53\u7f13\u51b2\u6c60\u586b\u6ee1\uff0c\u90a3\u4e48\u5916\u90e8\u7a0b\u5e8f\u5c06\u6682\u505c\u8fd0\u884c\u76f4\u5230\u7f13\u51b2\u6c60\u6709\u7a7a\u4f4d\u53ef\u63a5\u6536\u5916\u90e8\u7a0b\u5e8f\u7684\u8f93\u51fa\u5185\u5bb9\u4e3a\u6b62\u3002\uff08\u91c7\u7528 xcopy \u547d\u4ee4\u590d\u5236\u5927\u91cf\u6587\u4ef6\u65f6\u5c06\u4f1a\u51fa\u73b0\u8be5\u95ee\u9898\uff09\u89e3\u51b3\u529e\u6cd5\uff1a\u5f53\u524d\u7684 Java \u7a0b\u5e8f\u4e0d\u65ad\u8bfb\u53d6\u7f13\u51b2\u6c60\u7684\u5185\u5bb9\uff0c\u4ece\u800c\u4e3a\u817e\u51fa\u7f13\u51b2\u6c60\u7684\u7a7a\u95f4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5916\u90e8\u7a0b\u5e8f\u5728\u6267\u884c\u7ed3\u675f\u540e\u9700\u81ea\u52a8\u5173\u95ed\uff0c\u5426\u5219\u4e0d\u7ba1\u662f\u5b57\u7b26\u6d41\u8fd8\u662f\u5b57\u8282\u6d41\u5747\u7531\u4e8e\u65e2\u8bfb\u4e0d\u5230\u6570\u636e\uff0c\u53c8\u8bfb\u4e0d\u5230\u6d41\u7ed3\u675f\u7b26\uff0c\u4ece\u800c\u51fa\u73b0\u963b\u585e Java \u8fdb\u7a0b\u8fd0\u884c\u7684\u60c5\u51b5\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n\n    ProcessBuilder processBuilder = new ProcessBuilder();\n\n    // Run this on Windows, cmd, /c = terminate after this run\n    processBuilder.command("cmd.exe", "/c", "ping -n 3 google.com");\n    processBuilder.redirectErrorStream(true);\n    try {\n        Process process = processBuilder.start();\n        // blocked :(\n        BufferedReader reader =\n                new BufferedReader(new InputStreamReader(process.getInputStream()));\n        String line;\n        while ((line = reader.readLine()) != null) {\n            System.out.println(line);\n        }\n        int exitCode = process.waitFor();\n        System.out.println("\\nExited with error code : " + exitCode);\n    } catch (IOException e) {\n        e.printStackTrace();\n    } catch (InterruptedException e) {\n        e.printStackTrace();\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Process ps = Runtime.getRuntime().exec(cmd);\n//\u5904\u7406InputStream\u7684\u7ebf\u7a0b\uff0c\u83b7\u53d6\u8fdb\u7a0b\u7684\u6807\u51c6\u8f93\u5165\u6d41\nfinal InputStream is1 = ps.getInputStream();\n//\u83b7\u53d6\u8fdb\u7a0b\u7684\u9519\u8bef\u6d41\nfinal InputStream is2 = ps.getErrorStream();\n//\u542f\u52a8\u4e24\u4e2a\u7ebf\u7a0b\uff0c\u4e00\u4e2a\u7ebf\u7a0b\u8d1f\u8d23\u8bfb\u6807\u51c6\u8f93\u51fa\u6d41\uff0c\u53e6\u4e00\u4e2a\u8d1f\u8d23\u8bfb\u6807\u51c6\u9519\u8bef\u6d41\nnew Thread(() -> {\n    BufferedReader br1 = new BufferedReader(new InputStreamReader(is1));\n    try {\n        String line1 = null;\n        while ((line1 = br1.readLine()) != null) {\n        }\n    } catch (IOException e) {\n        e.printStackTrace();\n    } finally {\n        try {\n            is1.close();\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}).start();\n\nnew Thread(() -> {\n    BufferedReader br2 = new BufferedReader(new InputStreamReader(is2));\n    try {\n        String line2 = null;\n        while ((line2 = br2.readLine()) != null) {\n        }\n    } catch (IOException e) {\n        e.printStackTrace();\n    } finally {\n        try {\n            is2.close();\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}).start();\n//\u7b49\u5f85shell\u811a\u672c\u7ed3\u679c\nint execStatus = ps.waitFor();\n\n")))}d.isMDXComponent=!0}}]);