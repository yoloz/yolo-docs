"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[4234],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={},l=void 0,o={unversionedId:"java/JNA\u8c03\u7528Golang",id:"java/JNA\u8c03\u7528Golang",title:"JNA\u8c03\u7528Golang",description:"JNA \u4f7f\u7528\u53ef\u89c1JNI \u548c JNA \u7684\u4f7f\u7528",source:"@site/docs/java/JNA\u8c03\u7528Golang.md",sourceDirName:"java",slug:"/java/JNA\u8c03\u7528Golang",permalink:"/docs/java/JNA\u8c03\u7528Golang",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/java/JNA\u8c03\u7528Golang.md",tags:[],version:"current",lastUpdatedAt:1685001588,formattedLastUpdatedAt:"2023\u5e745\u670825\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JNA\u4f7f\u7528\u7ec6\u8282",permalink:"/docs/java/JNA\u4f7f\u7528\u7ec6\u8282"},next:{title:"JNI\u548cJNA\u7684\u4f7f\u7528",permalink:"/docs/java/JNI\u548cJNA\u7684\u4f7f\u7528"}},c={},s=[{value:"\u76f4\u63a5\u8fd4\u56de<code>*C.char</code>",id:"\u76f4\u63a5\u8fd4\u56decchar",level:3},{value:"\u8fd4\u56de Structure",id:"\u8fd4\u56de-structure",level:3}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"JNA \u4f7f\u7528\u53ef\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/java/JNI%E5%92%8CJNA%E7%9A%84%E4%BD%BF%E7%94%A8"},"JNI \u548c JNA \u7684\u4f7f\u7528"),"\ncgo \u4f7f\u7528\u53ef\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/golang/%E6%9E%84%E5%BB%BA%E5%8A%A8%E6%80%81%E5%BA%93"},"\u6784\u5efa\u52a8\u6001\u5e93")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u666e\u901a\u7c7b\u578b\u578b\u6570\u636e\u6620\u5c04\u5373\u53ef\uff0c\u5bf9\u4e8e java Object,\u4e5f\u53ef\u53c2\u8003 Structure \u65b9\u5f0f"),(0,a.kt)("h3",{id:"\u76f4\u63a5\u8fd4\u56decchar"},"\u76f4\u63a5\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"h3"},"*C.char")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u80fd\u786e\u5b9a jna \u662f\u5426\u91ca\u653e\u4e86",(0,a.kt)("inlineCode",{parentName:"strong"},"CString"),"\u91cc\u7684 malloc")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'//#include <stdlib.h>\n//#include <stdio.h>\nimport "C"\n\n//export CMemInfo\nfunc CMemInfo() *C.char {\n    m, err := MemInfo()\n    if err != nil {\n        fmt.Println("get memory info fail..." + err.Error())\n        return C.CString("{}")\n    }\n    bytes, err := json.Marshal(m)\n    if err != nil {\n        fmt.Println("marshal memory info fail..." + err.Error())\n        return C.CString("{}")\n    }\n    gostr := string(bytes)\n    return C.CString(gostr)\n}\n//CString converts the Go string s to a C string.\n//The C string is allocated in the C heap using malloc. It is the caller\'s responsibility to arrange for it to be freed, such as by calling C.free (be sure to include stdlib.h if C.free is needed).\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},' public interface CLibrary extends Library {\n\n        CLibrary INSTANCE = Native.load("/xxxxx/libtest.so", CLibrary.class);\n\n        String CMemInfo();\n    }\n\n    public static void main(String[] args) {\n\n        CLibrary cLibrary = CLibrary.INSTANCE;\n        System.out.println("memInfo: " + cLibrary.CMemInfo());\n\n    }\n')),(0,a.kt)("h3",{id:"\u8fd4\u56de-structure"},"\u8fd4\u56de Structure"),(0,a.kt)("p",null,"\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://studygolang.com/topics/6025/comment/17780"},"Java \u8c03\u7528 Golang \u751f\u6210\u7684\u52a8\u6001\u5e93")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\n//export Hello\nfunc Hello(msg string) {\n    fmt.Print("hello: " + msg)\n}\n\nfunc main() {\n}\n')),(0,a.kt)("p",null,"\u7f16\u8bd1\u540e\u67e5\u770b\u751f\u6210\u7684",(0,a.kt)("inlineCode",{parentName:"p"},".h"),"\u6587\u4ef6\uff0c\u53ef\u77e5\u53c2\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"\u662f GoString,\u5bf9\u5e94 C \u7684\u7ed3\u6784\u4f53\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-h"},'// ...\ntypedef struct { const char *p; ptrdiff_t n; } _GoString_;\n// .....\ntypedef _GoString_ GoString;\n// ...\n/* End of boilerplate cgo prologue.  */\n\n#ifdef __cplusplus\nextern "C" {\n#endif\n\nextern void Hello(GoString p0);\n\n#ifdef __cplusplus\n}\n#endif\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"char *p"),":\u76f4\u63a5\u5bf9\u5e94 java \u7684 String\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ptrdiff_t n"),":\u4e24\u4e2a\u5185\u5b58\u5730\u5740\u4e4b\u95f4\u8ddd\u79bb\u7684\u503c\uff0c\u6570\u636e\u7c7b\u578b\u5b9e\u9645\u4e0a\u5c31\u662f C \u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"long int"),"\uff0c\u5728\u8fd9\u91cc\u4ed6\u8868\u793a\u7684\u662f\u5b57\u7b26\u4e32 char \u7684\u957f\u5ea6;"))),(0,a.kt)("p",null,"java \u521b\u5efa GoString"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class GoString extends Structure {\n\n    public String str;\n    public long length;\n\n    public GoString() {\n    }\n\n    public GoString(String str) {\n        this.str = str;\n        this.length = str.length();\n    }\n\n    @Override\n    protected List<String> getFieldOrder() {\n        List<String> fields = new ArrayList<>();\n        fields.add("str");\n        fields.add("length");\n        return fields;\n    }\n\n    // \u4f20\u771f\u5b9e\u503c\n    public static class ByValue extends GoString implements Structure.ByValue {\n        public ByValue() {\n        }\n\n        public ByValue(String str) {\n            super(str);\n        }\n    }\n    //\u4f20\u5f15\u7528\n    public static class ByReference extends GoString implements Structure.ByReference {\n        public ByReference() {\n        }\n\n        public ByReference(String str) {\n            super(str);\n        }\n    }\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u91cd\u5199",(0,a.kt)("inlineCode",{parentName:"p"},"getFieldOrder"),"\u65b9\u6cd5,\u544a\u8bc9 JNA \u8fd9\u4e24\u4e2a\u53d8\u91cf\u548c C \u7ed3\u6784\u4f53\u4e2d\u7684\u53d8\u91cf\u662f\u600e\u4e48\u4e2a\u5bf9\u5e94\u5173\u7cfb\u7684\uff08str \u5bf9\u5e94\u5230 p\uff0clength \u5bf9\u5e94\u5230 n\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},' public interface CLibrary extends Library {\n\n        CLibrary INSTANCE = Native.load("/xxxxx/libtest.so", CLibrary.class);\n\n        void Hello(GoString.ByValue msg);\n    }\n\n    public static void main(String[] args) {\n\n        CLibrary cLibrary = CLibrary.INSTANCE;\n        System.out.println("memInfo: " + cLibrary.Hello(new GoString.ByValue("hello world!")););\n\n    }\n')))}d.isMDXComponent=!0}}]);