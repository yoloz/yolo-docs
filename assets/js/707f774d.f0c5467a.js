"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[8092],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9717:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=r(7462),a=(r(7294),r(3905));const o={},i=void 0,s={unversionedId:"java/\u6267\u884cshell\u547d\u4ee4",id:"java/\u6267\u884cshell\u547d\u4ee4",title:"\u6267\u884cshell\u547d\u4ee4",description:"ProcessBuilder \u662f\u4e00\u4e2a final \u7c7b\uff0c\u6709\u4e24\u4e2a\u5e26\u53c2\u6570\u7684\u6784\u9020\u65b9\u6cd5\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u65b9\u6cd5\u6765\u76f4\u63a5\u521b\u5efa ProcessBuilder \u7684\u5bf9\u8c61\u3002\u800c Process \u662f\u4e00\u4e2a\u62bd\u8c61\u7c7b\uff0c\u4e00\u822c\u90fd\u901a\u8fc7Runtime.exec()\u548cProcessBuilder.start()\u6765\u95f4\u63a5\u521b\u5efa\u5176\u5b9e\u4f8b\u3002",source:"@site/docs/java/\u6267\u884cshell\u547d\u4ee4.md",sourceDirName:"java",slug:"/java/\u6267\u884cshell\u547d\u4ee4",permalink:"/docs/java/\u6267\u884cshell\u547d\u4ee4",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/java/\u6267\u884cshell\u547d\u4ee4.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"threadDump\u5206\u6790",permalink:"/docs/java/threadDump\u5206\u6790"},next:{title:"AIpine\u7cfb\u7edf",permalink:"/docs/linux/AIpine\u7cfb\u7edf"}},c={},l=[{value:"ProcessBuilder",id:"processbuilder",level:2},{value:"Runtime.exec()",id:"runtimeexec",level:2},{value:"\u8f93\u51fa\u6d41\u9519\u8bef\u6d41\u5904\u7406",id:"\u8f93\u51fa\u6d41\u9519\u8bef\u6d41\u5904\u7406",level:2}],p={toc:l};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ProcessBuilder \u662f\u4e00\u4e2a final \u7c7b\uff0c\u6709\u4e24\u4e2a\u5e26\u53c2\u6570\u7684\u6784\u9020\u65b9\u6cd5\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u65b9\u6cd5\u6765\u76f4\u63a5\u521b\u5efa ProcessBuilder \u7684\u5bf9\u8c61\u3002\u800c Process \u662f\u4e00\u4e2a\u62bd\u8c61\u7c7b\uff0c\u4e00\u822c\u90fd\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime.exec()"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessBuilder.start()"),"\u6765\u95f4\u63a5\u521b\u5efa\u5176\u5b9e\u4f8b\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"ProcessBuilder \u4e2d\u4fee\u6539\u8fdb\u7a0b\u6784\u9020\u5668\u7684\u5c5e\u6027\u5c06\u5f71\u54cd\u540e\u7eed\u7531\u8be5\u5bf9\u8c61\u7684 start() \u65b9\u6cd5\u542f\u52a8\u7684\u8fdb\u7a0b\uff0c\u4f46\u4ece\u4e0d\u4f1a\u5f71\u54cd\u4ee5\u524d\u542f\u52a8\u7684\u8fdb\u7a0b\u6216 Java \u81ea\u8eab\u7684\u8fdb\u7a0b\u3002"),(0,a.kt)("p",{parentName:"admonition"},"ProcessBuilder \u7c7b\u4e0d\u662f\u540c\u6b65\u7684\u3002\u5982\u679c\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u8bbf\u95ee\u4e00\u4e2a ProcessBuilder\uff0c\u800c\u5176\u4e2d\u81f3\u5c11\u4e00\u4e2a\u7ebf\u7a0b\u4ece\u7ed3\u6784\u4e0a\u4fee\u6539\u4e86\u5176\u4e2d\u4e00\u4e2a\u5c5e\u6027\uff0c\u5b83\u5fc5\u987b \u4fdd\u6301\u5916\u90e8\u540c\u6b65\u3002")),(0,a.kt)("p",null,"Process \u7c7b\u662f\u4e00\u4e2a\u62bd\u8c61\u7c7b\uff08\u6240\u6709\u7684\u65b9\u6cd5\u5747\u662f\u62bd\u8c61\u7684\uff09\uff0c\u5c01\u88c5\u4e86\u4e00\u4e2a\u8fdb\u7a0b\uff08\u5373\u4e00\u4e2a\u6267\u884c\u7a0b\u5e8f\uff09\u3002"),(0,a.kt)("p",null,"Process \u7c7b\u63d0\u4f9b\u4e86\u6267\u884c\u4ece\u8fdb\u7a0b\u8f93\u5165\u3001\u6267\u884c\u8f93\u51fa\u5230\u8fdb\u7a0b\u3001\u7b49\u5f85\u8fdb\u7a0b\u5b8c\u6210\u3001\u68c0\u67e5\u8fdb\u7a0b\u7684\u9000\u51fa\u72b6\u6001\u4ee5\u53ca\u9500\u6bc1\uff08\u6740\u6389\uff09\u8fdb\u7a0b\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u521b\u5efa\u8fdb\u7a0b\u7684\u65b9\u6cd5\u53ef\u80fd\u65e0\u6cd5\u9488\u5bf9\u67d0\u4e9b\u672c\u673a\u5e73\u53f0\u4e0a\u7684\u7279\u5b9a\u8fdb\u7a0b\u5f88\u597d\u5730\u5de5\u4f5c\uff0c\u6bd4\u5982\u672c\u673a\u7a97\u53e3\u8fdb\u7a0b\uff0c\u5b88\u62a4\u8fdb\u7a0b\uff0cMicrosoft Windows \u4e0a\u7684 Win16/DOS \u8fdb\u7a0b\uff0c\u6216\u8005 shell \u811a\u672c\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u521b\u5efa\u7684\u5b50\u8fdb\u7a0b\u6ca1\u6709\u81ea\u5df1\u7684\u7ec8\u7aef\u6216\u63a7\u5236\u53f0\u3002\u5b83\u7684\u6240\u6709\u6807\u51c6 io\uff08\u5373 stdin\u3001stdout \u548c stderr\uff09\u64cd\u4f5c\u90fd\u5c06\u901a\u8fc7\u4e09\u4e2a\u6d41 (getOutputStream()\u3001getInputStream() \u548c getErrorStream()) \u91cd\u5b9a\u5411\u5230\u7236\u8fdb\u7a0b\u3002",(0,a.kt)("strong",{parentName:"p"},"\u6709\u4e9b\u672c\u673a\u5e73\u53f0\u4ec5\u9488\u5bf9\u6807\u51c6\u8f93\u5165\u548c\u8f93\u51fa\u6d41\u63d0\u4f9b\u6709\u9650\u7684\u7f13\u51b2\u533a\u5927\u5c0f\uff0c\u5982\u679c\u8bfb\u5199\u5b50\u8fdb\u7a0b\u7684\u8f93\u51fa\u6d41\u6216\u8f93\u5165\u6d41\u8fc5\u901f\u51fa\u73b0\u5931\u8d25\uff0c\u5219\u53ef\u80fd\u5bfc\u81f4\u5b50\u8fdb\u7a0b\u963b\u585e\uff0c\u751a\u81f3\u4ea7\u751f\u6b7b\u9501\u3002"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"ProcessBuilder.start() \u548c Runtime.exec()\u4f20\u9012\u7684\u53c2\u6570\u6709\u6240\u4e0d\u540c: Runtime.exec()\u53ef\u63a5\u53d7\u4e00\u4e2a\u5355\u72ec\u7684\u5b57\u7b26\u4e32\uff0c\u8fd9\u4e2a\u5b57\u7b26\u4e32\u662f\u901a\u8fc7\u7a7a\u683c\u6765\u5206\u9694\u53ef\u6267\u884c\u547d\u4ee4\u7a0b\u5e8f\u548c\u53c2\u6570\u7684,\u4e5f\u53ef\u4ee5\u63a5\u53d7\u5b57\u7b26\u4e32\u6570\u7ec4\u53c2\u6570\u3002\u800c ProcessBuilder \u7684\u6784\u9020\u51fd\u6570\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u5217\u8868\u6216\u8005\u6570\u7ec4\u3002",(0,a.kt)("strong",{parentName:"p"},"\u5217\u8868\u4e2d\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u53ef\u6267\u884c\u547d\u4ee4\u7a0b\u5e8f\uff0c\u5176\u4ed6\u7684\u662f\u547d\u4ee4\u884c\u6267\u884c\u662f\u9700\u8981\u7684\u53c2\u6570\u3002")),(0,a.kt)("p",{parentName:"admonition"},"\u901a\u8fc7\u67e5\u770b JDK \u6e90\u7801\u53ef\u77e5\uff0cRuntime.exec \u6700\u7ec8\u662f\u901a\u8fc7\u8c03\u7528 ProcessBuilder \u6765\u771f\u6b63\u6267\u884c\u64cd\u4f5c\u7684\u3002")),(0,a.kt)("h2",{id:"processbuilder"},"ProcessBuilder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// -- Linux --\n\n// Run a shell command\nprocessBuilder.command("bash", "-c", "ls /home/mkyong/");\n\n//chmod permission\nprocessBuilder.command("/bin/chmod", "755", scriptPath);\n\n// Run a shell script\nprocessBuilder.command("path/to/hello.sh");\n\n// -- Windows --\n\n// Run a command\nprocessBuilder.command("cmd.exe", "/c", "dir C:\\\\Users\\\\mkyong");\n\n// Run a bat file\nprocessBuilder.command("C:\\\\Users\\\\mkyong\\\\hello.bat");\n\nProcess process = processBuilder.start();\n\n')),(0,a.kt)("h2",{id:"runtimeexec"},"Runtime.exec()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'//SHELL_FILE_DIR + RUNNING_SHELL_FILE\u4e3a\u811a\u672c\u7684\u5168\u8def\u5f84\uff0c\u540e\u9762\u4f20\u9012\u7ed9shell\u811a\u672c\u591a\u4e2a\u53c2\u6570\u7528\u7a7a\u683c\u5206\u9694\nSting cmd = SHELL_FILE_DIR + RUNNING_SHELL_FILE + " "+param1+" "+param2+" "+param3\n//RunTime\u6267\u884c\u811a\u672c\nProcess ps = Runtime.getRuntime().exec(cmd);\n//waitFor\u7b49\u5f85shell\u8fd0\u884c\u5b8c\uff0c\u8fd4\u56de\u503c\u5982\u679c\u4e3a0\uff0c\u5219\u8868\u660e\u6b63\u5e38\u8fd0\u884c\u5b8c\nint execStatus = ps.waitFor();\n')),(0,a.kt)("h2",{id:"\u8f93\u51fa\u6d41\u9519\u8bef\u6d41\u5904\u7406"},"\u8f93\u51fa\u6d41\u9519\u8bef\u6d41\u5904\u7406"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n\n    ProcessBuilder processBuilder = new ProcessBuilder();\n\n    // Run this on Windows, cmd, /c = terminate after this run\n    processBuilder.command("cmd.exe", "/c", "ping -n 3 google.com");\n    processBuilder.redirectErrorStream(true);\n    try {\n        Process process = processBuilder.start();\n        // blocked :(\n        BufferedReader reader =\n                new BufferedReader(new InputStreamReader(process.getInputStream()));\n        String line;\n        while ((line = reader.readLine()) != null) {\n            System.out.println(line);\n        }\n        int exitCode = process.waitFor();\n        System.out.println("\\nExited with error code : " + exitCode);\n    } catch (IOException e) {\n        e.printStackTrace();\n    } catch (InterruptedException e) {\n        e.printStackTrace();\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Process ps = Runtime.getRuntime().exec(cmd);\n//\u5904\u7406InputStream\u7684\u7ebf\u7a0b\uff0c\u83b7\u53d6\u8fdb\u7a0b\u7684\u6807\u51c6\u8f93\u5165\u6d41\nfinal InputStream is1 = ps.getInputStream();\n//\u83b7\u53d6\u8fdb\u7a0b\u7684\u9519\u8bef\u6d41\nfinal InputStream is2 = ps.getErrorStream();\n//\u542f\u52a8\u4e24\u4e2a\u7ebf\u7a0b\uff0c\u4e00\u4e2a\u7ebf\u7a0b\u8d1f\u8d23\u8bfb\u6807\u51c6\u8f93\u51fa\u6d41\uff0c\u53e6\u4e00\u4e2a\u8d1f\u8d23\u8bfb\u6807\u51c6\u9519\u8bef\u6d41\nnew Thread(() -> {\n    BufferedReader br1 = new BufferedReader(new InputStreamReader(is1));\n    try {\n        String line1 = null;\n        while ((line1 = br1.readLine()) != null) {\n        }\n    } catch (IOException e) {\n        e.printStackTrace();\n    } finally {\n        try {\n            is1.close();\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}).start();\n\nnew Thread(() -> {\n    BufferedReader br2 = new BufferedReader(new InputStreamReader(is2));\n    try {\n        String line2 = null;\n        while ((line2 = br2.readLine()) != null) {\n        }\n    } catch (IOException e) {\n        e.printStackTrace();\n    } finally {\n        try {\n            is2.close();\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}).start();\n//\u7b49\u5f85shell\u811a\u672c\u7ed3\u679c\nint execStatus = ps.waitFor();\n\n")))}u.isMDXComponent=!0}}]);