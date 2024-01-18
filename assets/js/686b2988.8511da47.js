"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7880],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o=void 0,l={unversionedId:"golang/\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b",id:"golang/\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b",title:"\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b",description:"\u7f16\u5199\u6d4b\u8bd5",source:"@site/docs/golang/\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b.md",sourceDirName:"golang",slug:"/golang/\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b",permalink:"/docs/golang/\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/golang/\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7c7b\u578b\u5904\u7406",permalink:"/docs/golang/\u7c7b\u578b\u5904\u7406"},next:{title:"\u8bfb\u53d6\u8f93\u5165",permalink:"/docs/golang/\u8bfb\u53d6\u8f93\u5165"}},s={},c=[{value:"\u7f16\u5199\u6d4b\u8bd5",id:"\u7f16\u5199\u6d4b\u8bd5",level:2},{value:"testing.T \u4e0e testing.B",id:"testingt-\u4e0e-testingb",level:2},{value:"\u5355\u5143\u6d4b\u8bd5",id:"\u5355\u5143\u6d4b\u8bd5",level:3},{value:"\u538b\u529b\u6d4b\u8bd5",id:"\u538b\u529b\u6d4b\u8bd5",level:3}],p={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7f16\u5199\u6d4b\u8bd5"},"\u7f16\u5199\u6d4b\u8bd5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9996\u5148\u5728\u540c\u7ea7\u76ee\u5f55\u4e0b\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\uff0c\u6587\u4ef6\u540d\u7684\u89c4\u5219\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"*_test.go"),",",(0,a.kt)("inlineCode",{parentName:"li"},"*"),"\u662f\u6307\u4f60\u8981\u6d4b\u8bd5\u7684\u6587\u4ef6\u7684\u6587\u4ef6\u540d,\u6d4b\u8bd5\u51fd\u6570\u5982\u4e0b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "testing"\n)\n\nfunc TestSum(t *testing.T)  {\n    var a = 3\n    var b =4\n    res :=sum(a,b)\n    fmt.Printf("%d \u4e0e%d\u4e4b\u548c:\u4e3a%d",a,b,res)\n    if res != 7{\n        t.Error("error")\n    }\n}\n\nfunc TestMain(m *testing.M) {\n    fmt.Println("begin")\n    m.Run()\n    fmt.Println("end")\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e00\u4e2a test \u6587\u4ef6\u5fc5\u987b import \u4e00\u4e2a testing;"),(0,a.kt)("li",{parentName:"ul"},"test \u6587\u4ef6\u4e0b\u6bcf\u4e00\u4e2a test case \u5747\u5fc5\u987b\u4ee5 Test \u5f00\u5934\u5e76\u7b26\u5408 TestXxx \u5f62\u5f0f,\u5426\u5219 go test \u4f1a\u76f4\u63a5\u6311\u8fc7\u6d4b\u8bd5\u4e0d\u6267\u884c;"),(0,a.kt)("li",{parentName:"ul"},"go test \u4f1a\u81ea\u52a8\u5bfb\u627e\u8be5\u76ee\u5f55\u4e0b\u7684 test \u6587\u4ef6, ",(0,a.kt)("inlineCode",{parentName:"li"},"go test -v"),"\u4f1a\u8be6\u7ec6\u7684\u663e\u793a\u6267\u884c\u7684\u8fc7\u7a0b;"),(0,a.kt)("li",{parentName:"ul"},"test case \u7684\u5165\u53c2\u6570\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"t testing.T"),"\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"b testing.B"),";"),(0,a.kt)("li",{parentName:"ul"},"t.Error \u4e3a\u6253\u5370\u9519\u8bef\u4fe1\u606f,\u5e76\u5f53\u524d test case \u4f1a\u88ab\u8df3\u8fc7;"),(0,a.kt)("li",{parentName:"ul"},"t.SkipNow()\u4e3a\u8df3\u8fc7 test,\u5e76\u76f4\u63a5\u6309 PASS \u5904\u7406\u4e0b\u4e00\u4e2a test, \u5e76\u5fc5\u987b\u5199\u5728 test case \u7684\u7b2c\u4e00\u884c, \u5426\u5219\u65e0\u6548;"),(0,a.kt)("li",{parentName:"ul"},"go \u7684 test \u4e0d\u4f1a\u4fdd\u8bc1\u591a\u4e2a TestXxx \u662f\u987a\u5e8f\u6267\u884c,\u4f46\u662f\u901a\u5e38\u4f1a\u6309\u987a\u5e8f\u6267\u884c, \u4e3a\u4e86\u8ba9\u8d77\u987a\u5e8f\u6267\u884c,\u53ef\u4ee5\u91c7\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"t.Run(name string, f func)"),"\u6765\u4fdd\u8bc1\u987a\u5e8f\u6267\u884c;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TestMain(m *testing.M)"),"\u4f5c\u4e3a\u521d\u59cb\u5316 test,\u5e76\u4f7f\u7528 m.Run()\u6765\u8c03\u7528\u5176\u4ed6 tests \u53ef\u4ee5\u5b8c\u6210\u4e00\u4e9b\u9700\u8981\u521d\u59cb\u5316\u64cd\u4f5c testing,\u6bd4\u5982\u6570\u636e\u5e93\u8fde\u63a5,\u6587\u4ef6\u6253\u5f00,REST \u670d\u52a1\u767b\u9646,\u5982\u679c\u6ca1\u6709\u5728 testMain \u8c03\u7528 m.Run(),\u5219\u9664\u4e86 TestMain \u4ee5\u5916\u5176\u4ed6 test case \u90fd\u4e0d\u4f1a\u6267\u884c.")),(0,a.kt)("h2",{id:"testingt-\u4e0e-testingb"},"testing.T \u4e0e testing.B"),(0,a.kt)("p",null,"testing.T \u7528\u6765\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\uff0ctesting.B \u7528\u6765\u8fdb\u884c\u538b\u529b\u6d4b\u8bd5\uff0c\u68c0\u6d4b\u51fd\u6570\u7684\u6027\u80fd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"go test"),"\u547d\u4ee4\u53ea\u80fd\u5728\u4e00\u4e2a\u76f8\u5e94\u7684\u76ee\u5f55\u4e0b\u6267\u884c\u6240\u6709\u6587\u4ef6\uff0c\u6240\u4ee5\u5728\u4e00\u4e2a\u76ee\u5f55\u4e0b\u9762\u521b\u5efa\u4e24\u4e2a\u6587\u4ef6\uff0c\u5206\u522b\u662f\u4ee3\u7801\u6587\u4ef6\u548c\u6d4b\u8bd5\u6587\u4ef6\uff1agotest.go \u548c gotest_test.go"),(0,a.kt)("h3",{id:"\u5355\u5143\u6d4b\u8bd5"},"\u5355\u5143\u6d4b\u8bd5"),(0,a.kt)("p",null,"a. \u6587\u4ef6\u540d\u5fc5\u987b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"_test.go")," \u7ed3\u5c3e\u7684\uff0c\u8fd9\u6837\u5728\u6267\u884c go test \u7684\u65f6\u5019\u624d\u4f1a\u6267\u884c\u5230\u76f8\u5e94\u7684\u4ee3\u7801\nb. \u4f60\u5fc5\u987b import testing \u8fd9\u4e2a\u5305\nc. \u6240\u6709\u7684\u6d4b\u8bd5\u7528\u4f8b\u51fd\u6570\u5fc5\u987b\u662f Test \u5f00\u5934\nd. \u6d4b\u8bd5\u7528\u4f8b\u4f1a\u6309\u7167\u6e90\u4ee3\u7801\u4e2d\u5199\u7684\u987a\u5e8f\u4f9d\u6b21\u6267\u884c\ne. \u6d4b\u8bd5\u51fd\u6570 TestXxx()\u7684\u53c2\u6570\u662f testing.T\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u8be5\u7c7b\u578b\u6765\u8bb0\u5f55\u9519\u8bef\u6216\u8005\u662f\u6d4b\u8bd5\u72b6\u6001\nf. \u6d4b\u8bd5\u683c\u5f0f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"func TestXxx (t *testing.T)"),",Xxx \u90e8\u5206\u53ef\u4ee5\u4e3a\u4efb\u610f\u7684\u5b57\u6bcd\u6570\u5b57\u7684\u7ec4\u5408\uff0c\u4f46\u662f\u9996\u5b57\u6bcd\u4e0d\u80fd\u662f\u5c0f\u5199\u5b57\u6bcd","[a-z]","\uff0c\u4f8b\u5982 Testintdiv \u662f\u9519\u8bef\u7684\u51fd\u6570\u540d\ng. \u51fd\u6570\u4e2d\u901a\u8fc7\u8c03\u7528 testing.T \u7684 Error, Errorf, FailNow, Fatal, FatalIf \u65b9\u6cd5\uff0c\u8bf4\u660e\u6d4b\u8bd5\u4e0d\u901a\u8fc7\uff0c\u8c03\u7528 Log \u65b9\u6cd5\u7528\u6765\u8bb0\u5f55\u6d4b\u8bd5\u7684\u4fe1\u606f"),(0,a.kt)("h3",{id:"\u538b\u529b\u6d4b\u8bd5"},"\u538b\u529b\u6d4b\u8bd5"),(0,a.kt)("p",null,"a. \u538b\u529b\u6d4b\u8bd5\u7684\u683c\u5f0f\uff1afunc BenchmarkXXX(b ",(0,a.kt)("em",{parentName:"p"},'testing.B) { ... }\uff0c\u5176\u4e2d\u51fd\u6570\u547d\u540d\u4ee5 Benchmark \u5f00\u5934\uff0cXXX \u9996\u5b57\u6bcd\u5fc5\u987b\u5927\u5199\nb. go test \u4e0d\u4f1a\u9ed8\u8ba4\u6267\u884c\u538b\u529b\u6d4b\u8bd5\u7684\u51fd\u6570\uff0c\u5982\u679c\u8981\u6267\u884c\u538b\u529b\u6d4b\u8bd5\u9700\u8981\u5e26\u4e0a\u53c2\u6570-test.bench\uff0c\u8bed\u6cd5:-test.bench="test_name_regex",\u4f8b\u5982 go test -test.bench=".'),'"\u8868\u793a\u6d4b\u8bd5\u5168\u90e8\u7684\u538b\u529b\u6d4b\u8bd5\u51fd\u6570\nc. \u5728\u538b\u529b\u6d4b\u8bd5\u7528\u4f8b\u4e2d,\u8bf7\u8bb0\u5f97\u5728\u5faa\u73af\u4f53\u5185\u4f7f\u7528 testing.B.N,\u4ee5\u4f7f\u6d4b\u8bd5\u53ef\u4ee5\u6b63\u5e38\u7684\u8fd0\u884c\nd. \u6587\u4ef6\u540d\u4e5f\u5fc5\u987b\u4ee5',(0,a.kt)("inlineCode",{parentName:"p"},"_test.go")," \u7ed3\u5c3e"),(0,a.kt)("p",null,"\u6267\u884c\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"go test -bench BenchmarkXXX")))}g.isMDXComponent=!0}}]);