"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[743],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>v});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,v=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(v,l(l({ref:n},s),{},{components:t})):r.createElement(v,l({ref:n},s))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3449:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={},l=void 0,i={unversionedId:"java/JNA\u4f7f\u7528\u7ec6\u8282",id:"java/JNA\u4f7f\u7528\u7ec6\u8282",title:"JNA\u4f7f\u7528\u7ec6\u8282",description:"\u5b57\u7b26\u4e32\u4e71\u7801",source:"@site/docs/java/JNA\u4f7f\u7528\u7ec6\u8282.md",sourceDirName:"java",slug:"/java/JNA\u4f7f\u7528\u7ec6\u8282",permalink:"/docs/java/JNA\u4f7f\u7528\u7ec6\u8282",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/java/JNA\u4f7f\u7528\u7ec6\u8282.md",tags:[],version:"current",lastUpdatedAt:1686370023,formattedLastUpdatedAt:"2023\u5e746\u670810\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8bfb\u53d6\u8f93\u5165",permalink:"/docs/golang/\u8bfb\u53d6\u8f93\u5165"},next:{title:"JNA\u8c03\u7528Golang",permalink:"/docs/java/JNA\u8c03\u7528Golang"}},p={},c=[{value:"\u5b57\u7b26\u4e32\u4e71\u7801",id:"\u5b57\u7b26\u4e32\u4e71\u7801",level:2},{value:"\u91ca\u653e Native heap \u5185\u5b58",id:"\u91ca\u653e-native-heap-\u5185\u5b58",level:2},{value:"\u91ca\u653e malloc \u7684\u5185\u5b58",id:"\u91ca\u653e-malloc-\u7684\u5185\u5b58",level:2}],s={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5b57\u7b26\u4e32\u4e71\u7801"},"\u5b57\u7b26\u4e32\u4e71\u7801"),(0,a.kt)("p",null,"\u4e71\u7801\u51fa\u73b0\u539f\u56e0\uff1a",(0,a.kt)("strong",{parentName:"p"},"JNA \u5728\u5bf9 C,C++\u7684",(0,a.kt)("inlineCode",{parentName:"strong"},"char*"),"\u548c JAVA \u7684 String \u8fdb\u884c\u4e92\u76f8\u8f6c\u6362\u65f6\u5019\uff0c\u9488\u5bf9 C,C++\u5b57\u7b26\u6570\u7ec4\u7f16\u7801\u8bbe\u5b9a\u9519\u8bef\u5bfc\u81f4")),(0,a.kt)("p",null,"\u65b9\u5f0f\u4e00\uff0c\u8bbe\u7f6e\u7f16\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'//c++ char* GBK\u7f16\u7801\u65f6\nSystem.setProperty("jna.encoding","GBK");\n\n//c++ char* UTF8\u7f16\u7801\u65f6\nSystem.setProperty("jna.encoding","UTF-8");\n')),(0,a.kt)("p",null,"\u65b9\u5f0f\u4e8c\uff0c\u4f7f\u7528\u5bbd\u5b57\u7b26\u4e32 WString\uff0c\u5f53\u7136 C,C++\u63a5\u53e3\u53c2\u6570\u7c7b\u578b\u8981\u4f7f\u7528 wchar_t",(0,a.kt)("em",{parentName:"p"},"\uff0c\u8fd9\u6837 WString \u5c31\u53ef\u4ee5\u65e0\u7f1d\u8f6c wchar_t"),"\u4e86\uff0c\u4e0d\u7528\u505a\u4efb\u4f55\u4fee\u6539\uff0c\u4e5f\u4e0d\u4f1a\u4e71\u7801;"),(0,a.kt)("h2",{id:"\u91ca\u653e-native-heap-\u5185\u5b58"},"\u91ca\u653e Native heap \u5185\u5b58"),(0,a.kt)("p",null,"Java \u8fdb\u7a0b\u7684\u5185\u5b58\u5305\u62ec Java NonHeap \u7a7a\u95f4\u3001Java Heap \u7a7a\u95f4\u548c Native Heap \u7a7a\u95f4\u3002JNA \u4e2d\u7684 Memory \u5bf9\u8c61\u662f\u4ece Native Heap \u4e2d\u5206\u914d\u7a7a\u95f4\uff0c\u4f46 java \u7684 GC \u662f\u9488\u5bf9 Java Heap \u7a7a\u95f4\u8bbe\u8ba1\u7684\uff0c\u5f53 Java Heap \u7a7a\u95f4\u4e0d\u8db3\u65f6\u4f1a\u89e6\u53d1 GC\uff0c\u4f46 Native Heap \u7a7a\u95f4\u4e0d\u591f\u5374\u4e0d\u4f1a\u89e6\u53d1 GC\u3002\u6240\u4ee5\uff0c\u5f53 Java Heap \u5360\u7528\u7a7a\u95f4\u4e0d\u5927\u65f6\uff0c\u5e76\u4e0d\u4f1a GC \u6389 Memory \u5bf9\u8c61\uff0c\u4e5f\u5c31\u4e0d\u4f1a\u6267\u884c finalize()\u65b9\u6cd5\u4ece\u800c\u91ca\u653e\u5206\u914d\u7684 Native Heap \u7a7a\u95f4\u3002"),(0,a.kt)("p",null,"Memory \u4e2d\u7684 finalize()\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"}," /** Properly dispose of native memory when this object is GC'd. */\n    @Override\n    protected void finalize() {\n        dispose();\n    }\n\n    /** Free the native memory and set peer to zero */\n    protected synchronized void dispose() {\n        try {\n            free(peer);\n        } finally {\n            peer = 0;\n            allocatedMemory.remove(this);\n        }\n    }\n\n protected static void free(long p) {\n        // free(0) is a no-op, so avoid the overhead of the call\n        if (p != 0) {\n            Native.free(p);\n        }\n    }\n")),(0,a.kt)("p",null,"\u7531\u4e0a\u9762\u7684\u6e90\u7801\u53ef\u77e5\uff0c\u5f53 Memory \u88ab GC \u6389\u65f6\uff0c\u4f1a\u81ea\u52a8\u53bb\u91ca\u653e\u5206\u914d\u7684\u76f4\u63a5\u5185\u5b58\uff08\u524d\u63d0\u662f\u8981\u6267\u884c GC\uff09\u3002\u4e3a\u4e86\u907f\u514d\u8fc7\u591a\u7684\u4f7f\u7528 Memory \u5206\u914d\u76f4\u63a5\u5185\u5b58\u800c\u5bfc\u81f4\u76f4\u63a5\u5185\u5b58\u7a7a\u95f4\u4e0d\u8db3\uff0c\u53ef\u4ee5\u624b\u52a8\u91ca\u653e\u6389 Memory \u5206\u914d\u7684\u5185\u5b58\uff0c\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Pointer p = new Memory(1024 * 1024);\nlong peer = Pointer.nativeValue(p);\n//\u624b\u52a8\u91ca\u653e\u5185\u5b58\nNative.free(peer);\n//\u907f\u514dMemory\u5bf9\u8c61\u88abGC\u65f6\u91cd\u590d\u6267\u884cNativ.free()\u65b9\u6cd5,\u5426\u5219\u5728GC\u65f6\u4f1a\u62a5\u9519\uff0c\u5e76\u4e14\u7a0b\u5e8f\u5f02\u5e38\u9000\u51fa\nPointer.nativeValue(p, 0);\n")),(0,a.kt)("h2",{id:"\u91ca\u653e-malloc-\u7684\u5185\u5b58"},"\u91ca\u653e malloc \u7684\u5185\u5b58"),(0,a.kt)("p",null,"\u52a8\u6001\u5e93\u6587\u4ef6(so,dll)\u4e2d malloc \u7a7a\u95f4\uff0c\u5c06\u6307\u9488\u8fd4\u56de\u5230 JNA \u540e\u9700\u8981\u91ca\u653e malloc \u7684\u7a7a\u95f4\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Native.free(long ptr)"),"\u624b\u52a8\u91ca\u653e\u8be5\u7a7a\u95f4\uff0c\u4e5f\u53ef\u4ee5\u5728(so,dll)\u4e2d\u81ea\u5b9a\u4e49 free \u51fd\u6570\u3002\u901a\u8fc7 JNA \u8c03\u7528\u8be5 free \u51fd\u6570\u6765\u91ca\u653e malloc \u7684\u7a7a\u95f4,JNA \u8c03\u7528 C \u51fd\u6570\u673a\u5236\u4e3a\u5f02\u6b65\u8c03\u7528\uff0c\u6240\u4ee5\u5728\u8c03\u7528 free \u540e\u5e76\u4e0d\u4f1a\u7acb\u523b\u91ca\u653e\u6389\u8be5\u5185\u5b58"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\npublic class JNATest {\n\npublic interface Clibrary extends Library{\n\n    Clibrary INSTANTCE = (Clibrary)Native.loadLibrary("JnaTest", Clibrary.class);\n\n    PointerByReference jnaTest();\n    int jnaFree(Pointer p);\n\n}\n\npublic static void main(String[] args) throws InterruptedException {\n    while(true){\n        for(int i = 0;i < 10;i++) {\n            PointerByReference pointerOut= Clibrary.INSTANTCE.jnaTest();\n            System.out.println(pointerOut.getValue().getString(0, "UTF-8"));\n            Clibrary.INSTANTCE.jnaFree(pointerOut.getValue());\n\n        }\n        Thread.sleep(10000);\n    }\n}\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"char **jnaTest()\n{\n    // ...\n}\n\nint jnaFree(void *p)\n{\n    if(p)\n    {\n        free(p);\n        p = NULL;\n    }\n}\n")))}d.isMDXComponent=!0}}]);