"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[8092],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={},o=void 0,l={unversionedId:"java/\u6267\u884cshell\u547d\u4ee4",id:"java/\u6267\u884cshell\u547d\u4ee4",title:"\u6267\u884cshell\u547d\u4ee4",description:"\u901a\u8fc7 ProcessBuilder \u8c03\u7528",source:"@site/docs/java/\u6267\u884cshell\u547d\u4ee4.md",sourceDirName:"java",slug:"/java/\u6267\u884cshell\u547d\u4ee4",permalink:"/docs/java/\u6267\u884cshell\u547d\u4ee4",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/java/\u6267\u884cshell\u547d\u4ee4.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"threadDump\u5206\u6790",permalink:"/docs/java/threadDump\u5206\u6790"},next:{title:"linux\u5185\u6838\u63a5\u6536\u7f51\u7edc\u5305",permalink:"/docs/network/linux\u5185\u6838\u63a5\u6536\u7f51\u7edc\u5305"}},c={},s=[{value:"\u901a\u8fc7 ProcessBuilder \u8c03\u7528",id:"\u901a\u8fc7-processbuilder-\u8c03\u7528",level:2},{value:"\u901a\u8fc7 Runtime \u6267\u884c",id:"\u901a\u8fc7-runtime-\u6267\u884c",level:2}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u901a\u8fc7-processbuilder-\u8c03\u7528"},"\u901a\u8fc7 ProcessBuilder \u8c03\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'//\u89e3\u51b3\u811a\u672c\u6ca1\u6709\u6267\u884c\u6743\u9650\nProcessBuilder builder = new ProcessBuilder("/bin/chmod", "755", scriptPath);\nProcess process = builder.start();\nprocess.waitFor();\n')),(0,a.kt)("h2",{id:"\u901a\u8fc7-runtime-\u6267\u884c"},"\u901a\u8fc7 Runtime \u6267\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'//SHELL_FILE_DIR + RUNNING_SHELL_FILE\u4e3a\u811a\u672c\u7684\u5168\u8def\u5f84\uff0c\u540e\u9762\u4f20\u9012\u7ed9shell\u811a\u672c\u591a\u4e2a\u53c2\u6570\u7528\u7a7a\u683c\u5206\u9694\nSting cmd = SHELL_FILE_DIR + RUNNING_SHELL_FILE + " "+param1+" "+param2+" "+param3\n//RunTime\u6267\u884c\u811a\u672c\nProcess ps = Runtime.getRuntime().exec(cmd);\n//waitFor\u7b49\u5f85shell\u8fd0\u884c\u5b8c\uff0c\u8fd4\u56de\u503c\u5982\u679c\u4e3a0\uff0c\u5219\u8868\u660e\u6b63\u5e38\u8fd0\u884c\u5b8c\nint execStatus = ps.waitFor();\n')),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Java \u5728\u6267\u884c Runtime.getRuntime().exec(command)\u4e4b\u540e\uff0cLinux \u4f1a\u521b\u5efa\u4e00\u4e2a\u8fdb\u7a0b\uff0c\u8be5\u8fdb\u7a0b\u4e0e JVM \u8fdb\u7a0b\u5efa\u7acb\u4e09\u4e2a\u7ba1\u9053\u8fde\u63a5:\u6807\u51c6\u8f93\u5165\u6d41\u3001\u6807\u51c6\u8f93\u51fa\u6d41\u3001\u6807\u51c6\u9519\u8bef\u6d41\u3002"),(0,a.kt)("p",{parentName:"admonition"},"linux \u8fdb\u7a0b\u4e0d\u65ad\u5411\u6807\u51c6\u8f93\u51fa\u6d41\u6216\u6807\u51c6\u9519\u8bef\u6d41\u5199\u6570\u636e\uff0c\u800c JVM \u5374\u4e0d\u8bfb\u53d6\uff0c\u6570\u636e\u4f1a\u6682\u5b58\u5728 linux \u7f13\u5b58\u533a\uff0c\u5f53\u7f13\u5b58\u533a\u5b58\u6ee1\u4e4b\u540e\u5bfc\u81f4\u8be5\u8fdb\u7a0b\u65e0\u6cd5\u7ee7\u7eed\u5199\u6570\u636e\uff0c\u4f1a\u963b\u585e\uff0c\u8fdb\u800c\u5bfc\u81f4 java \u8fdb\u7a0b\u963b\u585e\u5728 waitFor()\u5904\u65e0\u6cd5\u7ed3\u675f\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Process ps = Runtime.getRuntime().exec(cmd);\n//\u5904\u7406InputStream\u7684\u7ebf\u7a0b\uff0c\u83b7\u53d6\u8fdb\u7a0b\u7684\u6807\u51c6\u8f93\u5165\u6d41\nfinal InputStream is1 = ps.getInputStream();\n//\u83b7\u53d6\u8fdb\u7a0b\u7684\u9519\u8bef\u6d41\nfinal InputStream is2 = ps.getErrorStream();\n//\u542f\u52a8\u4e24\u4e2a\u7ebf\u7a0b\uff0c\u4e00\u4e2a\u7ebf\u7a0b\u8d1f\u8d23\u8bfb\u6807\u51c6\u8f93\u51fa\u6d41\uff0c\u53e6\u4e00\u4e2a\u8d1f\u8d23\u8bfb\u6807\u51c6\u9519\u8bef\u6d41\nnew Thread(() -> {\n    BufferedReader br1 = new BufferedReader(new InputStreamReader(is1));\n    try {\n        String line1 = null;\n        while ((line1 = br1.readLine()) != null) {\n        }\n    } catch (IOException e) {\n        e.printStackTrace();\n    } finally {\n        try {\n            is1.close();\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}).start();\n\nnew Thread(() -> {\n    BufferedReader br2 = new BufferedReader(new InputStreamReader(is2));\n    try {\n        String line2 = null;\n        while ((line2 = br2.readLine()) != null) {\n        }\n    } catch (IOException e) {\n        e.printStackTrace();\n    } finally {\n        try {\n            is2.close();\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}).start();\n//\u7b49\u5f85shell\u811a\u672c\u7ed3\u679c\nint execStatus = ps.waitFor();\n\n")))}p.isMDXComponent=!0}}]);