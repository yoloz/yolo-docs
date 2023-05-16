"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[1690],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,v=c["".concat(d,".").concat(m)]||c[m]||u[m]||l;return t?a.createElement(v,i(i({ref:n},p),{},{components:t})):a.createElement(v,i({ref:n},p))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const l={},i=void 0,o={unversionedId:"java/JNI\u7684\u4f7f\u7528",id:"java/JNI\u7684\u4f7f\u7528",title:"JNI\u7684\u4f7f\u7528",description:"System.load()\u4e0e System.loadLibrary()",source:"@site/docs/java/JNI\u7684\u4f7f\u7528.md",sourceDirName:"java",slug:"/java/JNI\u7684\u4f7f\u7528",permalink:"/docs/java/JNI\u7684\u4f7f\u7528",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/java/JNI\u7684\u4f7f\u7528.md",tags:[],version:"current",lastUpdatedAt:1684227620,formattedLastUpdatedAt:"2023\u5e745\u670816\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8bfb\u53d6\u8f93\u5165",permalink:"/docs/golang/\u8bfb\u53d6\u8f93\u5165"},next:{title:"esClient",permalink:"/docs/java/esClient"}},d={},s=[{value:"System.load()\u4e0e System.loadLibrary()",id:"systemload\u4e0e-systemloadlibrary",level:2},{value:"System.load(String filename)",id:"systemloadstring-filename",level:3},{value:"System.loadLibrary(String libname)",id:"systemloadlibrarystring-libname",level:3},{value:"\u58f0\u660e\u672c\u5730\u65b9\u6cd5",id:"\u58f0\u660e\u672c\u5730\u65b9\u6cd5",level:2},{value:"\u5b9e\u73b0 C \u51fd\u6570",id:"\u5b9e\u73b0-c-\u51fd\u6570",level:2},{value:"\u9690\u5f0f\u6620\u5c04",id:"\u9690\u5f0f\u6620\u5c04",level:3},{value:"\u663e\u5f0f\u6620\u5c04",id:"\u663e\u5f0f\u6620\u5c04",level:3}],p={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"systemload\u4e0e-systemloadlibrary"},"System.load()\u4e0e System.loadLibrary()"),(0,r.kt)("p",null,"\u4e24\u4e2a\u65b9\u6cd5\u90fd\u662f\u7528\u6765\u88c5\u8f7d dll \u6587\u4ef6\uff0c\u4e0d\u8bba\u662f JNI \u5e93\u6587\u4ef6\u8fd8\u662f\u975e JNI \u5e93\u6587\u4ef6\u3002\u672c\u5730\u65b9\u6cd5\u5728\u88ab\u8c03\u7528\u65f6\u90fd\u9700\u8981\u901a\u8fc7\u8fd9\u4e24\u53d1\u65b9\u6cd5\u4e4b\u4e00\u5c06\u5176\u52a0\u8f7d\u81f3\u5185\u5b58"),(0,r.kt)("h3",{id:"systemloadstring-filename"},"System.load(String filename)"),(0,r.kt)("p",null,"\u53c2\u6570\u4e3a dll \u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\uff0c\u53ef\u4ee5\u662f\u4efb\u610f\u8def\u5f84",(0,r.kt)("inlineCode",{parentName:"p"},'System.load("D:\\\\java\\\\Test.dll");')),(0,r.kt)("h3",{id:"systemloadlibrarystring-libname"},"System.loadLibrary(String libname)"),(0,r.kt)("p",null,"\u53c2\u6570\u4e3a dll \u6587\u4ef6\u540d\uff0c\u4e0d\u5305\u542b\u5e93\u6587\u4ef6\u7684\u6269\u5c55\u540d",(0,r.kt)("inlineCode",{parentName:"p"},'System. loadLibrary ("Test");'),"\uff0c\u52a0\u8f7d\u7684\u6587\u4ef6\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"java.library.path"),"\u8fd9\u4e00 jvm \u53d8\u91cf\u6240\u6307\u5411\u7684\u8def\u5f84\u4e2d\u3002"),(0,r.kt)("p",null,":::warn\n\u8f7d\u5165\u7684\u5e93\u6587\u4ef6\u9759\u6001\u94fe\u63a5\u5230\u5176\u5b83\u52a8\u6001\u94fe\u63a5\u5e93\uff0c\u5982 Test.dll \u9759\u6001\u94fe\u63a5\u5230 dependency.dll\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"System.load() \u65b9\u5f0f\n\u5176\u4e00\uff0c\u76f8\u5173\u94fe\u63a5\u6587\u4ef6\u52a0\u5165\u5230 java.library.path \u7684\u8def\u5f84\u4e2d\uff0cload()\u65b9\u6cd5\u4f1a\u53bb\u8def\u5f84\u5bfb\u627e\u4f9d\u8d56\u5e93\uff1b\u6216\u8005\u624b\u52a8\u518d\u6dfb\u52a0 dependency.dll\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'//\u5148\u8c03\u7528\nSystem.load("D:\\\\java\\\\dependency.dll");\n//\u8ba9jvm\u5148\u8f7d\u5165dependency.dll\uff0c\u7136\u540e\u518d\u8c03\u7528\nSystem.load("D:\\\\java\\\\Test.dll");\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"System. loadLibrary() \u65b9\u5f0f\uff0c\u94fe\u63a5\u5e93\u90fd\u5728 java.library.path\uff0c\u4f1a\u81ea\u52a8\u67e5\u627e")),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"\u58f0\u660e\u672c\u5730\u65b9\u6cd5"},"\u58f0\u660e\u672c\u5730\u65b9\u6cd5"),(0,r.kt)("p",null,"\u5728 Counter.java \u4e2d\u58f0\u660e\u4e00\u4e2a\u672c\u5730\u65b9\u6cd5\uff0c\u5e76\u5728\u9759\u6001\u4ee3\u7801\u5757\u4e2d\u52a0\u8f7d\u5bf9\u5e94\u7684\u52a8\u6001\u94fe\u63a5\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package indi.yolo.sample.jni;\n\npublic class Counter {\n    static {\n        System.loadLibrary("counter");\n        //  System.load("/xxx/counter.so");\n    }\n\n    // \u58f0\u660e\u672c\u5730\u65b9\u6cd5\n    public static native int addFromC(int a, int b);\n\n    public static void main(String[] argv) {\n        // \u8c03\u7528\u672c\u5730\u65b9\u6cd5\n        System.out.println("1 + 2 = " + addFromC(1, 2));\n    }\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5934\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"li"},"jni.h"),":${JDK_PATH}/include"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jin.h"),"\u53c8\u5305\u542b\u4e86",(0,r.kt)("inlineCode",{parentName:"li"},"jni_md.h"),":${JDK_PATH}/include/linux"))),(0,r.kt)("h2",{id:"\u5b9e\u73b0-c-\u51fd\u6570"},"\u5b9e\u73b0 C \u51fd\u6570"),(0,r.kt)("p",null,"Java \u8c03\u7528 C \u51fd\u6570\u9700\u8981\u505a C \u51fd\u6570\u548c Java \u672c\u5730\u65b9\u6cd5\u7684\u6620\u5c04\uff0c\u5efa\u7acb\u8be5\u6620\u5c04\u6709\u4e24\u79cd\u65b9\u5f0f: \u663e\u5f0f\u6620\u5c04\u548c\u9690\u5f0f\u6620\u5c04"),(0,r.kt)("h3",{id:"\u9690\u5f0f\u6620\u5c04"},"\u9690\u5f0f\u6620\u5c04"),(0,r.kt)("p",null,"\u91c7\u7528\u9690\u5f0f\u6620\u5c04\u7684\u65b9\u5f0f\u4e0d\u9700\u8981\u53bb\u624b\u52a8\u5efa\u7acb\u94fe\u63a5\uff0cJNI \u89c4\u8303\u5df2\u7ecf\u4f7f\u7528\u4e86\u4e00\u5957\u6620\u5c04\u89c4\u8303\uff0c\u5728 C \u51fd\u6570\u4e2d\u5b9e\u73b0\u7684\u51fd\u6570\u540d\u683c\u5f0f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Java_\u5305\u540d_\u7c7b\u540d_Java\u65b9\u6cd5\u540d"),",",(0,r.kt)("strong",{parentName:"p"},"\u9700\u8981\u5c06\u5305\u540d\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"strong"},"."),"\u6362\u6210",(0,r.kt)("inlineCode",{parentName:"strong"},"_"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"#include <jni.h>\n\n// C\u51fd\u6570\u9700\u8981\u6bd4Java\u672c\u5730\u65b9\u6cd5\u591a\u51fa\u4e24\u4e2a\u53c2\u6570\uff0c\u8fd9\u4e24\u4e2a\u53c2\u6570\u4e4b\u540e\u7684\u53c2\u6570\u5217\u8868\u4e0eJava\u672c\u5730\u65b9\u6cd5\u4fdd\u6301\u4e00\u81f4\n// \u7b2c\u4e00\u4e2a\u53c2\u6570\u8868\u793aJNI\u73af\u5883\uff0c\u8be5\u73af\u5883\u5c01\u88c5\u4e86\u6240\u6709JNI\u7684\u64cd\u4f5c\u51fd\u6570\n// \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3aJava\u4ee3\u7801\u4e2d\u8c03\u7528\u8be5C\u51fd\u6570\u7684\u5bf9\u8c61\n// \u51fd\u6570\u540d\u683c\u5f0f: Java_\u5305\u540d_\u7c7b\u540d_Java\u65b9\u6cd5\u540d\njint Java_indi_yolo_sample_jni_Counter_addFromC(JNIEnv *env, jobject thiz, jint a, jint b)\n{\n    return a + b;\n}\n")),(0,r.kt)("p",null,"\u7f16\u8bd1\u8fd0\u884c:"),(0,r.kt)("p",null,":::warn"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"System.loadLibrary()\u65b9\u5f0f\uff0c\u751f\u6210\u7684\u94fe\u63a5\u6587\u4ef6\u9700\u8981\u4ee5",(0,r.kt)("inlineCode",{parentName:"li"},"lib"),"\u5f00\u5934(",(0,r.kt)("inlineCode",{parentName:"li"},"libxxx.so"),")\uff0c\u5426\u5219\u62a5\u9519\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"java.lang.UnsatisfiedLinkError: no counter in java.library.")),(0,r.kt)("li",{parentName:"ul"},"System.load()\u65b9\u5f0f\uff0c\u751f\u6210\u94fe\u63a5\u6587\u4ef6\u540d\u79f0\u65e0\u4e0a\u8ff0\u8981\u6c42")),(0,r.kt)("p",null,":::"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u751f\u6210\u52a8\u6001\u94fe\u63a5\u5e93\nyoloz@debian:~/projects/xxx$ gcc -shared -fPIC -I /opt/jdk-8/include/ -I /opt/jdk-8/include/linux/  -o libcounter.so counter.c\n# \u7f16\u8bd1Java\u5e76\u751f\u6210\u5b8c\u6574\u5305\u540d\u8def\u5f84\nyoloz@debian:~/projects/xxx$ /opt/jdk-8/bin/javac -d . Counter.java\n# \u8fd0\u884cJava\uff0c\u5e76\u6307\u5b9a\u52a8\u6001\u94fe\u63a5\u5e93\u7684\u8def\u5f84\nyoloz@debian:~$ /opt/jdk-8/bin/java -Djava.library.path=. indi.yolo.sample.jni.Counter\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"li"},"-d"),"\uff1a\u8fd9\u4e2a\u53c2\u6570\u662f\u7528\u6765\u751f\u6210\u5305\u7ed3\u6784\u7684\uff0c\u901a\u8fc7 javac \u547d\u4ee4\uff0c\u80fd\u591f\u81ea\u52a8\u751f\u6210 package \u76ee\u5f55\uff0c\u5e76\u4e14\u80fd\u591f\u5c06 class \u5b57\u8282\u7801\u6587\u4ef6\u653e\u5728\u5bf9\u5e94\u76ee\u5f55\u7684\u4e0b\u9762\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"li"},"."),"\uff1a\u8fd9\u4e2a\u70b9\u4ee3\u8868\u5f53\u524d\u76ee\u5f55\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u6539\u4e3a\u5176\u4ed6\u76ee\u5f55\uff1b"))),(0,r.kt)("h3",{id:"\u663e\u5f0f\u6620\u5c04"},"\u663e\u5f0f\u6620\u5c04"),(0,r.kt)("p",null,"\u9700\u8981\u624b\u52a8\u5b9e\u73b0 JNI \u7684\u51fd\u6570,\u5176\u4ed6\u540c\u4e0a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <jni.h>\n\n#define ARRAY_SIZE(arr)   (sizeof(arr) / sizeof((arr)[0]))\n\n// C\u51fd\u6570\u9700\u8981\u6bd4Java\u672c\u5730\u65b9\u6cd5\u591a\u51fa\u4e24\u4e2a\u53c2\u6570\uff0c\u8fd9\u4e24\u4e2a\u53c2\u6570\u4e4b\u540e\u7684\u53c2\u6570\u5217\u8868\u4e0eJava\u672c\u5730\u65b9\u6cd5\u4fdd\u6301\u4e00\u81f4\n// \u7b2c\u4e00\u4e2a\u53c2\u6570\u8868\u793aJNI\u73af\u5883\uff0c\u8be5\u73af\u5883\u5c01\u88c5\u4e86\u6240\u6709JNI\u7684\u64cd\u4f5c\u51fd\u6570\n// \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3aJava\u4ee3\u7801\u4e2d\u8c03\u7528\u8be5C\u51fd\u6570\u7684\u5bf9\u8c61\n// jint\u8868\u793aJNI\u7684int\u7c7b\u578b\uff0c\u5728\u672c\u6587\u540e\u9762\u4f1a\u7ed9\u51fa\u6240\u6709JNI\u7c7b\u578b\njint add(JNIEnv *env, jobject thiz, jint a, jint b)\n{\n    return a + b;\n}\n\nstatic const JNINativeMethod methods[] = {\n    // \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3aJava\u672c\u5730\u65b9\u6cd5\u540d\n    // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u51fd\u6570\u7b7e\u540d\uff1a(\u53c2\u6570\u7b7e\u540d)\u8fd4\u56de\u503c\u7b7e\u540d\uff0c \u5728\u672c\u6587\u540e\u9762\u4f1a\u7ed9\u51fa\u6240\u6709\u7b7e\u540d\u7b26\u53f7\n    // \u7b2c\u4e09\u4e2a\u53c2\u6570\u4e3aC\u51fd\u6570\n    {"addFromC", "(II)I", (void *)add},   // \u5efa\u7acbJava\u672c\u5730\u65b9\u6cd5\u548cC\u51fd\u6570\u7684\u6620\u5c04\n};\n\n// \u5728Java\u4e2d\u8c03\u7528System.loadLibrary\u65b9\u6cd5\u65f6\u4f1a\u8c03\u7528\u5230\u8be5\u51fd\u6570\nJNIEXPORT jint JNICALL\nJNI_OnLoad(JavaVM *jvm, void *reserved)\n{\n    JNIEnv *env;\n    jclass cls;\n\n    // \u83b7\u53d6JNI\u73af\u5883\n    if ((*jvm)->GetEnv(jvm, (void **)&env, JNI_VERSION_1_8)) {\n        return JNI_ERR;\n    }\n\n    // \u83b7\u53d6Java\u7c7b\n    // JNI_OnLoad\u51fd\u6570\u5199\u6cd5\u57fa\u672c\u56fa\u5b9a\uff0c \u552f\u4e00\u9700\u8981\u4fee\u6539\u7684\u662fFindClass\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u5373\u7c7b\u540d\n    cls = (*env)->FindClass(env, "Counter");\n    if (cls == NULL) {\n        return JNI_ERR;\n    }\n\n    // \u6ce8\u518c\u672c\u5730\u65b9\u6cd5\n    if ((*env)->RegisterNatives(env, cls, methods, ARRAY_SIZE(methods)) < 0)\n        return JNI_ERR;\n\n    return JNI_VERSION_1_8;\n}\n')))}u.isMDXComponent=!0}}]);