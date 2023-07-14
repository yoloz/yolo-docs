"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[2217],{3905:(n,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>g});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var p=a.createContext({}),c=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},m=function(n){var e=c(n.components);return a.createElement(p.Provider,{value:e},n.children)},u="mdxType",s={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,p=n.parentName,m=i(n,["components","mdxType","originalType","parentName"]),u=c(t),d=r,g=u["".concat(p,".").concat(d)]||u[d]||s[d]||l;return t?a.createElement(g,o(o({ref:e},m),{},{components:t})):a.createElement(g,o({ref:e},m))}));function g(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i[u]="string"==typeof n?n:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1386:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const l={},o=void 0,i={unversionedId:"golang/\u53d8\u91cf\u548c\u5e38\u91cf",id:"golang/\u53d8\u91cf\u548c\u5e38\u91cf",title:"\u53d8\u91cf\u548c\u5e38\u91cf",description:"\u53d8\u91cf",source:"@site/docs/golang/\u53d8\u91cf\u548c\u5e38\u91cf.md",sourceDirName:"golang",slug:"/golang/\u53d8\u91cf\u548c\u5e38\u91cf",permalink:"/docs/golang/\u53d8\u91cf\u548c\u5e38\u91cf",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/golang/\u53d8\u91cf\u548c\u5e38\u91cf.md",tags:[],version:"current",lastUpdatedAt:1689307169,formattedLastUpdatedAt:"2023\u5e747\u670814\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"range\u5173\u952e\u5b57",permalink:"/docs/golang/range\u5173\u952e\u5b57"},next:{title:"\u57fa\u7840\u6570\u636e\u7c7b\u578b",permalink:"/docs/golang/\u57fa\u7840\u6570\u636e\u7c7b\u578b"}},p={},c=[{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:2},{value:"\u4f7f\u7528\u5173\u952e\u5b57 <code>var</code> \u58f0\u660e\u53d8\u91cf",id:"\u4f7f\u7528\u5173\u952e\u5b57-var-\u58f0\u660e\u53d8\u91cf",level:3},{value:"\u77ed\u53d8\u91cf<code>:=</code>\u58f0\u660e\uff1a",id:"\u77ed\u53d8\u91cf\u58f0\u660e",level:3},{value:"\u4f7f\u7528\u5185\u7f6e <code>new</code> \u51fd\u6570",id:"\u4f7f\u7528\u5185\u7f6e-new-\u51fd\u6570",level:3},{value:"\u4f7f\u7528 <code>=</code> \u6765\u8d4b\u503c",id:"\u4f7f\u7528--\u6765\u8d4b\u503c",level:3},{value:"\u4f5c\u7528\u57df",id:"\u4f5c\u7528\u57df",level:3},{value:"\u5e38\u91cf",id:"\u5e38\u91cf",level:2},{value:"\u5173\u952e\u5b57 <code>const</code>\u58f0\u660e",id:"\u5173\u952e\u5b57-const\u58f0\u660e",level:3},{value:"\u5e38\u91cf\u751f\u6210\u5668 iota",id:"\u5e38\u91cf\u751f\u6210\u5668-iota",level:3}],m={toc:c},u="wrapper";function s(n){let{components:e,...t}=n;return(0,r.kt)(u,(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,r.kt)("p",null,"Go \u7f16\u7a0b\u7684\u547d\u540d\u98ce\u683c\u66f4\u4e60\u60ef\u4f7f\u7528\u300c\u77ed\u540d\u79f0\u300d\u548c\u300c\u9a7c\u5cf0\u5f0f\u300d\u7684\u540d\u79f0\uff0c\u800c\u4e14\u5927\u5c0f\u5199\u654f\u611f\u3002"),(0,r.kt)("p",null,"\u5f00\u5934\u5fc5\u987b\u662f\u5b57\u6bcd\u6216\u8005\u4e0b\u5212\u7ebf\uff0c\u800c\u4e14\u9996\u5b57\u6bcd\u662f\u5927\u5199\u8fd8\u662f\u5c0f\u5199\u4e5f\u662f\u6709\u7279\u6b8a\u542b\u4e49\u7684\u3002\u5927\u5199\u5b57\u6bcd\u5f00\u5934\u53ef\u4ee5\u88ab\u5305\u5916\u5f15\u7528\uff0c\u5c0f\u5199\u5b57\u6bcd\u5f00\u5934\u53ea\u80fd\u5728\u5305\u5185\u4f7f\u7528\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u5173\u952e\u5b57-var-\u58f0\u660e\u53d8\u91cf"},"\u4f7f\u7528\u5173\u952e\u5b57 ",(0,r.kt)("inlineCode",{parentName:"h3"},"var")," \u58f0\u660e\u53d8\u91cf"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"var name type = expression"),"\uff0c\u548c C \u8bed\u8a00\u6b63\u597d\u76f8\u53cd\uff0c\u7c7b\u578b\u662f\u8ddf\u5728\u53d8\u91cf\u540d\u540e\u9762\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// \u6ca1\u6709\u521d\u59cb\u503c\uff0c\u4f1a\u8d4b\u9ed8\u8ba4\u96f6\u503c\nvar v1 int\nvar v2 string\nvar v3 bool\nvar v4 [10]int // \u6570\u7ec4\nvar v5 []int   // \u6570\u7ec4\u5207\u7247\nvar v6 struct {\n    e int\n}\nvar v7 *int           // \u6307\u9488\nvar v8 map[string]int // map\uff0ckey \u4e3a string \u7c7b\u578b\uff0cvalue \u4e3a int \u7c7b\u578b\nvar v9 func(e int) int\nfmt.Println(v1, v2, v3, v4, v5, v6, v7, v8, v9)\n\n// \u8f93\u51fa\n// 0  false [0 0 0 0 0 0 0 0 0 0] [] {0} <nil> map[] <nil>\n\n")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u7c7b\u578b\u548c\u8868\u8fbe\u5f0f\u53ef\u4ee5\u7701\u7565\u4e00\u4e2a\uff0c\u4f46\u4e0d\u80fd\u90fd\u7701\u7565\u3002\u5982\u679c\u7c7b\u578b\u7701\u7565\uff0c\u5219\u7c7b\u578b\u7531\u521d\u59cb\u5316\u8868\u8fbe\u5f0f\u51b3\u5b9a\uff1b\u5982\u679c\u8868\u8fbe\u5f0f\u7701\u7565\uff0c\u5219\u521d\u59cb\u5316\u503c\u4e3a\u5bf9\u5e94\u7c7b\u578b\u7684\u96f6\u503c\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u6570\u5b57\u662f:0"),(0,r.kt)("li",{parentName:"ul"},"\u5e03\u5c14\u503c\u662f:false"),(0,r.kt)("li",{parentName:"ul"},'\u5b57\u7b26\u4e32\u662f:""'),(0,r.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u548c\u5f15\u7528\uff08slice\uff0c\u6307\u9488\uff0cmap\uff0c\u901a\u9053\uff0c\u51fd\u6570\uff09\u662f nil"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6570\u7ec4\u6216\u7ed3\u6784\u4f53\u8fd9\u6837\u7684\u590d\u5408\u7c7b\u578b\uff0c\u96f6\u503c\u662f\u5176\u6240\u6709\u5143\u7d20\u6216\u6210\u5458\u7684\u96f6\u503c")),(0,r.kt)("p",{parentName:"admonition"},"\u6240\u4ee5\u5728 Go \u4e2d\u662f\u4e0d\u5b58\u5728\u672a\u521d\u59cb\u5316\u7684\u53d8\u91cf\u7684\u3002")),(0,r.kt)("p",null,"\u58f0\u660e\u591a\u4e2a\u53d8\u91cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// \u58f0\u660e\u591a\u4e2a\u53d8\u91cf\nvar b, c int = 1, 2\nfmt.Println(b, c)\n// \u5efa\u8bae\u4ee5\u7ec4\u65b9\u5f0f\u4e00\u6b21\u58f0\u660e\u591a\u4e2a\u53d8\u91cf\nvar (\n    b1, c1 int\n    b2, c2 = 3, 4\n)\nfmt.Println(b1, c1, b2, c2)\n")),(0,r.kt)("h3",{id:"\u77ed\u53d8\u91cf\u58f0\u660e"},"\u77ed\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"h3"},":="),"\u58f0\u660e\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"name := expression"),",\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},":=")," \u6765\u58f0\u660e\uff0cGo \u7f16\u8bd1\u5668\u4f1a\u81ea\u52a8\u63a8\u65ad\u53d8\u91cf\u7c7b\u578b\u3002\u8fd9\u79cd\u521d\u59cb\u5316\u65b9\u5f0f\u975e\u5e38\u65b9\u4fbf\uff0c\u5728\u5c40\u90e8\u53d8\u91cf\u7684\u58f0\u660e\u548c\u521d\u59cb\u5316\u65f6\u7ecf\u5e38\u4f7f\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// \u77ed\u53d8\u91cf\u58f0\u660e\nf := "short"\nfmt.Println(f)\n// \u58f0\u660e\u8d4b\u503c\u591a\u4e2a\u53d8\u91cf\ng, h := 5, "alwaysbeta"\nfmt.Println(g, h)\n')),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u591a\u4e2a\u53d8\u91cf\u58f0\u660e\u65f6\uff0c\u6700\u5c11\u6709\u4e00\u4e2a\u65b0\u53d8\u91cf\uff0c\u5426\u5219\u4f1a\u62a5\u9519:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"var i int\n// i := 100 // \u62a5\u9519 no new variables on left side of :=\ni, j := 100, 101 // \u6709\u65b0\u503c j\uff0c\u4e0d\u62a5\u9519\nfmt.Println(i, j)\n"))),(0,r.kt)("h3",{id:"\u4f7f\u7528\u5185\u7f6e-new-\u51fd\u6570"},"\u4f7f\u7528\u5185\u7f6e ",(0,r.kt)("inlineCode",{parentName:"h3"},"new")," \u51fd\u6570"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"p := new(T)"),":\u521d\u59cb\u5316\u4e3a\u7c7b\u578b ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," \u7684\u96f6\u503c\uff0c\u5e76\u8fd4\u56de\u5176\u5730\u5740(\u4f7f\u7528\u53d6\u5730\u5740\u7b26 ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," \u83b7\u53d6\u53d8\u91cf\u7684\u5730\u5740)"),(0,r.kt)("admonition",{title:"\u6307\u9488\u64cd\u4f5c",type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"k := 6\n// l \u4e3a\u6574\u578b\u6307\u9488\uff0c\u6307\u5411 k\nl := &k\nfmt.Println(*l) // \u8f93\u51fa 6\n*l = 7\nfmt.Println(k) // \u8f93\u51fa 7\n"))),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," \u51fd\u6570\u58f0\u660e\u53d8\u91cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// \u4f7f\u7528\u5185\u7f6e\u51fd\u6570 new \u58f0\u660e\nvar p = new(int)\nfmt.Println(*p) // \u8f93\u51fa\u6574\u578b\u9ed8\u8ba4\u503c 0\n// \u518d\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u4e0b\u9762\u4e24\u4e2a\u51fd\u6570\u662f\u7b49\u4ef7\u7684\uff0c\u552f\u4e00\u7684\u533a\u522b\u5c31\u662f\u4f7f\u7528 `new` \u5c11\u58f0\u660e\u4e86\u4e00\u4e2a\u4e2d\u95f4\u53d8\u91cf\nfunc newInt() *int {\n    return new(int)\n}\n\nfunc newInt1() *int {\n    var p int\n    return &p\n}\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528--\u6765\u8d4b\u503c"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h3"},"=")," \u6765\u8d4b\u503c"),(0,r.kt)("p",null,"\u4e3e\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// \u53d8\u91cf\u8d4b\u503c\nvar m, n int\nm = 9\nn = 10\nm, n = n, m\nfmt.Println(m, n)\n")),(0,r.kt)("p",null,"\u5982\u679c\u6709\u4e0d\u9700\u8981\u7684\u53d8\u91cf\uff0c\u4f7f\u7528\u7a7a\u6807\u8bc6\u7b26 ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," \u6765\u5ffd\u7565\uff0c\u5728 Go \u8bed\u8a00\u4e2d\uff0c\u5982\u679c\u58f0\u660e\u4e86\u53d8\u91cf\u800c\u4e0d\u4f7f\u7528\uff0c\u7a0b\u5e8f\u662f\u4f1a\u62a5\u9519\u7684:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"r := [5]int{1, 2, 3, 4, 5}\n\n// \u5b9a\u4e49 i \u4f46\u4e0d\u7528\u4f1a\u62a5\u9519 i declared but not used\n// for i, v := range r {\n//  fmt.Println(v)\n// }\n\n// \u5ffd\u7565\u7d22\u5f15\nfor _, v := range r {\n    fmt.Println(v)\n}\n")),(0,r.kt)("h3",{id:"\u4f5c\u7528\u57df"},"\u4f5c\u7528\u57df"),(0,r.kt)("p",null,"\u53d8\u91cf\u5206\u4e3a\u5168\u5c40\u53d8\u91cf\u548c\u5c40\u90e8\u53d8\u91cf\uff0c\u5c40\u90e8\u53d8\u91cf\u4f1a\u8986\u76d6\u5168\u5c40\u53d8\u91cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// \u5168\u5c40\u53d8\u91cf\nvar gg = "global"\n\nfunc main() {\n    // \u4f5c\u7528\u57df\n    fmt.Println(gg) // \u8f93\u51fa global\n    gg = "local"\n    fmt.Println(gg) // \u8f93\u51fa local\n}\n')),(0,r.kt)("p",null,"\u4f7f\u7528\u6d41\u7a0b\u63a7\u5236\u8bed\u53e5\u65f6\uff0c\u9700\u8981\u7279\u6b8a\u6ce8\u610f\u53d8\u91cf\u7684\u4f5c\u7528\u57df\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// \u6761\u4ef6\u5206\u652f\u4e0b\u7684\u4f5c\u7528\u57df\nif f, err := os.Open("./00_hello.go"); err != nil {\n    fmt.Println(err)\n}\nf.Close()   // \u62a5\u9519 f.Close undefined (type string has no field or method Close)\n')),(0,r.kt)("p",null,"\u6b63\u786e\u7684\u5199\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// \u6b63\u786e\u5199\u6cd5\nfile, err := os.Open("00_hello.go")\nif err != nil {\n    fmt.Println(err)\n}\nfile.Close()\n')),(0,r.kt)("h2",{id:"\u5e38\u91cf"},"\u5e38\u91cf"),(0,r.kt)("p",null,"\u5e38\u91cf\u8868\u793a\u5728\u7a0b\u5e8f\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u6052\u5b9a\u4e0d\u53d8\u7684\u503c\u3002"),(0,r.kt)("h3",{id:"\u5173\u952e\u5b57-const\u58f0\u660e"},"\u5173\u952e\u5b57 ",(0,r.kt)("inlineCode",{parentName:"h3"},"const"),"\u58f0\u660e"),(0,r.kt)("p",null,"\u8bed\u6cd5\u548c\u53d8\u91cf\u7c7b\u4f3c\uff0c\u4e00\u822c\u5728\u7ed9\u5e38\u91cf\u8d77\u540d\u7684\u65f6\u5019\uff0c\u4f1a\u8d77\u4e00\u4e2a\u6709\u660e\u786e\u542b\u4e49\u7684\u540d\u5b57\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'const Pi float64 = 3.14159265358979323846\n// \u65e0\u7c7b\u578b\u6574\u578b\u5e38\u91cf\nconst n = 500000000\n// \u7528\u7f16\u8bd1\u9636\u6bb5\u5373\u53ef\u8ba1\u7b97\u51fa\u503c\u7684\u8868\u8fbe\u5f0f\u6765\u8d4b\u503c\nconst d = 3e20 / n\nfmt.Println(d)\n// \u65e0\u7c7b\u578b\u6d6e\u70b9\u5e38\u91cf\nconst zero = 0.0\n// \u65e0\u7c7b\u578b\u6574\u578b\u548c\u5b57\u7b26\u4e32\u5e38\u91cf\nconst a, b, c = 3, 4, "foo"\nfmt.Println(a, b, c)\n// \u591a\u4e2a\u5e38\u91cf\nconst (\n    size int64 = 1024\n    eof        = -1 // \u65e0\u7c7b\u578b\u6574\u578b\u5e38\u91cf\n)\nfmt.Println(size, eof)\n')),(0,r.kt)("h3",{id:"\u5e38\u91cf\u751f\u6210\u5668-iota"},"\u5e38\u91cf\u751f\u6210\u5668 iota"),(0,r.kt)("p",null,"\u5e38\u91cf\u58f0\u660e\u8fd8\u6709\u53ef\u4ee5\u4f7f\u7528\u5e38\u91cf\u751f\u6210\u5668 iota\uff0c\u5b83\u4e0d\u4f1a\u663e\u793a\u5199\u51fa\u5e38\u91cf\u7684\u503c\uff0c\u800c\u662f\u4ece 0 \u5f00\u59cb\uff0c\u9010\u9879\u52a0 1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// \u4ece 0 \u503c\u5f00\u59cb\uff0c\u9010\u9879\u52a0 1\nconst (\n    a0 = iota // 0\n    a1 = iota // 1\n    a2 = iota // 2\n)\nfmt.Println(a0, a1, a2)\n\n// \u7b80\u5199\uff0c\u8868\u8fbe\u5f0f\u76f8\u540c\uff0c\u53ef\u4ee5\u7701\u7565\u540e\u9762\u7684\nconst (\n    b0 = iota // 0\n    b1        // 1\n    b2        // 2\n)\nfmt.Println(b0, b1, b2)\n\nconst (\n    b         = iota      // 0\n    c float32 = iota * 10 // 10\n    d         = iota      // 2\n)\nfmt.Println(b, c, d)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"iota \u5728\u6bcf\u4e2a const \u5f00\u5934\u88ab\u91cd\u7f6e\u4e3a 0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// iota \u5728\u6bcf\u4e2a const \u5f00\u5934\u88ab\u91cd\u7f6e\u4e3a 0\nconst x = iota // 0\nfmt.Println(x)\n\n// \u540c\u4e0a\nconst y = iota // 0\nfmt.Println(y)\n")),(0,r.kt)("p",null,"\u8fd8\u53ef\u4ee5\u7528\u6765\u4f5c\u4e3a\u679a\u4e3e\u7c7b\u578b\uff0c\u6bd4\u5982\u4e00\u5468 7 \u5929\uff0c\u6bcf\u5929\u7528\u4e00\u4e2a\u6570\u5b57\u8868\u793a\uff0c\u90a3\u4e48\u53ef\u4ee5\u8fd9\u4e48\u58f0\u660e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// \u679a\u4e3e\nconst (\n    Sunday    = iota // 0\n    Monday           // 1\n    Tuesday          // 2\n    Wednesday        // 3\n    Thursday         // 4\n    Friday           // 5\n    Saturday         // 6\n)\nfmt.Println(Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)\n")))}s.isMDXComponent=!0}}]);