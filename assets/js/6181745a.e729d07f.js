"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7365],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>g});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function m(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var o=a.createContext({}),p=function(n){var e=a.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=p(n.components);return a.createElement(o.Provider,{value:e},n.children)},s="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,o=n.parentName,u=m(n,["components","mdxType","originalType","parentName"]),s=p(t),d=r,g=s["".concat(o,".").concat(d)]||s[d]||c[d]||l;return t?a.createElement(g,i(i({ref:e},u),{},{components:t})):a.createElement(g,i({ref:e},u))}));function g(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,i=new Array(l);i[0]=d;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=n,m[s]="string"==typeof n?n:r,i[1]=m;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86994:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const l={},i=void 0,m={unversionedId:"golang/\u590d\u5408\u6570\u636e\u7c7b\u578b",id:"golang/\u590d\u5408\u6570\u636e\u7c7b\u578b",title:"\u590d\u5408\u6570\u636e\u7c7b\u578b",description:"list \u64cd\u4f5c",source:"@site/docs/golang/\u590d\u5408\u6570\u636e\u7c7b\u578b.md",sourceDirName:"golang",slug:"/golang/\u590d\u5408\u6570\u636e\u7c7b\u578b",permalink:"/docs/golang/\u590d\u5408\u6570\u636e\u7c7b\u578b",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/golang/\u590d\u5408\u6570\u636e\u7c7b\u578b.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840\u6570\u636e\u7c7b\u578b",permalink:"/docs/golang/\u57fa\u7840\u6570\u636e\u7c7b\u578b"},next:{title:"\u5e38\u7528\u7c7b\u578b\u4e92\u8f6c",permalink:"/docs/golang/\u5e38\u7528\u7c7b\u578b\u4e92\u8f6c"}},o={},p=[{value:"list \u64cd\u4f5c",id:"list-\u64cd\u4f5c",level:2},{value:"\u5b57\u5178",id:"\u5b57\u5178",level:2},{value:"\u4f7f\u7528\u5b57\u9762\u91cf\u521b\u5efa",id:"\u4f7f\u7528\u5b57\u9762\u91cf\u521b\u5efa",level:3},{value:"\u4f7f\u7528 make \u521b\u5efa\uff1a",id:"\u4f7f\u7528-make-\u521b\u5efa",level:3},{value:"\u4f7f\u7528\u5b57\u5178",id:"\u4f7f\u7528\u5b57\u5178",level:3},{value:"\u51fd\u6570\u5f15\u7528\u4f20\u9012",id:"\u51fd\u6570\u5f15\u7528\u4f20\u9012",level:3},{value:"map \u4e0e json",id:"map-\u4e0e-json",level:3},{value:"\u7ed3\u6784\u4f53",id:"\u7ed3\u6784\u4f53",level:2},{value:"\u521b\u5efa\u7ed3\u6784\u4f53",id:"\u521b\u5efa\u7ed3\u6784\u4f53",level:3},{value:"\u4f7f\u7528\u7ed3\u6784\u4f53",id:"\u4f7f\u7528\u7ed3\u6784\u4f53",level:3},{value:"\u7ed3\u6784\u4f53\u5d4c\u5957\u533f\u540d\u6210\u5458",id:"\u7ed3\u6784\u4f53\u5d4c\u5957\u533f\u540d\u6210\u5458",level:3}],u={toc:p},s="wrapper";function c(n){let{components:e,...t}=n;return(0,r.kt)(s,(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"list-\u64cd\u4f5c"},"list \u64cd\u4f5c"),(0,r.kt)("p",null,"\u5728 Go \u8bed\u8a00\u4e2d\uff0c\u5217\u8868\u4f7f\u7528 container/list \u5305\u6765\u5b9e\u73b0\uff0c\u5185\u90e8\u7684\u5b9e\u73b0\u539f\u7406\u662f\u53cc\u94fe\u8868\uff0c\u5217\u8868\u80fd\u591f\u9ad8\u6548\u5730\u8fdb\u884c\u4efb\u610f\u4f4d\u7f6e\u7684\u5143\u7d20\u63d2\u5165\u548c\u5220\u9664\u64cd\u4f5c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// \u521d\u59cb\u5316\nvar l list.List\n// \u6216\u8005\n// l := list.New()\n// add\nl.PushFront("123")\ne := l.PushBack("234")\n// remove\nl.Remove(e)\n//\u904d\u5386\nfor i := l.Front(); i != nil; i = i.Next() {\n    fmt.Println(i.Value)\n}\n')),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5217\u8868\u4e0e\u5207\u7247\u548c map \u4e0d\u540c\u7684\u662f\uff0c\u5217\u8868\u5e76\u6ca1\u6709\u5177\u4f53\u5143\u7d20\u7c7b\u578b\u7684\u9650\u5236\uff0c\u56e0\u6b64\uff0c\u5217\u8868\u7684\u5143\u7d20\u53ef\u4ee5\u662f\u4efb\u610f\u7c7b\u578b\uff0c\u8fd9\u65e2\u5e26\u6765\u4e86\u4fbf\u5229\uff0c\u4e5f\u5f15\u6765\u4e00\u4e9b\u95ee\u9898\uff0c\u4f8b\u5982\u7ed9\u5217\u8868\u4e2d\u653e\u5165\u4e86\u4e00\u4e2a interface{} \u7c7b\u578b\u7684\u503c\uff0c\u53d6\u51fa\u503c\u540e\uff0c\u5982\u679c\u8981\u5c06 interface{} \u8f6c\u6362\u4e3a\u5176\u4ed6\u7c7b\u578b\u5c06\u4f1a\u53d1\u751f\u5b95\u673a\u3002")),(0,r.kt)("h2",{id:"\u5b57\u5178"},"\u5b57\u5178"),(0,r.kt)("p",null,"\u5b57\u5178\u662f\u4e00\u79cd\u975e\u5e38\u5e38\u7528\u7684\u6570\u636e\u7ed3\u6784\uff0cGo \u4e2d\u7528\u5173\u952e\u8bcd map \u8868\u793a\uff0c\u7c7b\u578b\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"map[K]V"),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"K")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"V")," \u5206\u522b\u662f\u5b57\u5178\u7684\u952e\u548c\u503c\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5176\u4e2d\u952e\u5fc5\u987b\u652f\u6301\u76f8\u7b49\u8fd0\u7b97\u7b26\uff0c\u6bd4\u5982\u6570\u5b57\uff0c\u5b57\u7b26\u4e32\u7b49\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u5b57\u9762\u91cf\u521b\u5efa"},"\u4f7f\u7528\u5b57\u9762\u91cf\u521b\u5efa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// \u5b57\u9762\u91cf\u65b9\u5f0f\u521b\u5efa\nvar m = map[string]int{"a": 1, "b": 2}\nfmt.Println(m) // map[a:1 b:2]\n')),(0,r.kt)("h3",{id:"\u4f7f\u7528-make-\u521b\u5efa"},"\u4f7f\u7528 make \u521b\u5efa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// \u4f7f\u7528 make \u521b\u5efa\nm1 := make(map[string]int)\nfmt.Println(m1)\n// \u5728\u5df2\u77e5\u5b57\u5178\u957f\u5ea6\u7684\u60c5\u51b5\u4e0b\uff0c\u76f4\u63a5\u6307\u5b9a\u957f\u5ea6\u53ef\u4ee5\u63d0\u5347\u7a0b\u5e8f\u7684\u6267\u884c\u6548\u7387\nm2 := make(map[string]int, 10)\nfmt.Println(m2)\n\n//\u5b57\u5178\u7684\u96f6\u503c\u662f nil\uff0c\u5bf9\u503c\u662f nil \u7684\u5b57\u5178\u8d4b\u503c\u4f1a\u62a5\u9519\u3002\nvar m3 map[string]int\nfmt.Println(m3 == nil, len(m3) == 0) // true true\n// m3["a"] = 1\n// fmt.Println(m3)  // panic: assignment to entry in nil map\n')),(0,r.kt)("h3",{id:"\u4f7f\u7528\u5b57\u5178"},"\u4f7f\u7528\u5b57\u5178"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var m = map[string]int{"a": 1, "b": 2}\n\n// put\nm["c"] = 3\nm["d"] = 4\nfmt.Println(m) // map[a:1 b:2 c:3 d:4]\n\n// get\nfmt.Println(m["a"], m["d"]) // 1 4\nfmt.Println(m["k"])         // 0\n\n// remove\ndelete(m, "c")\ndelete(m, "f") // key \u4e0d\u5b58\u5728\u4e5f\u4e0d\u62a5\u9519,\u8fd4\u56de\u5bf9\u5e94\u7c7b\u578b\u7684\u96f6\u503c\nfmt.Println(m) // map[a:1 b:2 d:4]\n\n// \u83b7\u53d6\u957f\u5ea6\nfmt.Println(len(m)) // 3\n\n// \u5224\u65ad\u952e\u662f\u5426\u5b58\u5728\nif value, ok := m["d"]; ok {\n    fmt.Println(value) // 4\n}\n\n// \u904d\u5386\nfor k, v := range m {\n    fmt.Println(k, v)\n}\n')),(0,r.kt)("h3",{id:"\u51fd\u6570\u5f15\u7528\u4f20\u9012"},"\u51fd\u6570\u5f15\u7528\u4f20\u9012"),(0,r.kt)("p",null,"map \u662f\u5f15\u7528\u7c7b\u578b\uff0c\u6240\u4ee5\u5728\u51fd\u6570\u95f4\u4f20\u9012\u65f6\uff0c\u4e5f\u4e0d\u4f1a\u5236\u9020\u4e00\u4e2a\u6620\u5c04\u7684\u526f\u672c\uff0c\u8fd9\u70b9\u548c\u5207\u7247\u7c7b\u4f3c\uff0c\u90fd\u5f88\u9ad8\u6548\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'\nfunc main() {\n    ...\n    // \u4f20\u53c2\n    modify(m)\n    fmt.Println("main: ", m) // main:  map[a:1 b:2 d:4 e:10]\n}\nfunc modify(a map[string]int) {\n    a["e"] = 10\n    fmt.Println("modify: ", a) //   modify:  map[a:1 b:2 d:4 e:10]\n}\n')),(0,r.kt)("h3",{id:"map-\u4e0e-json"},"map \u4e0e json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"\nfunc MapToJson(param map[string]interface{}) string{\n    dataType , _ := json.Marshal(param)\n    dataString := string(dataType)\n    return dataString\n}\n\nfunc JsonToMap(str string) map[string]interface{} {\n    var tempMap map[string]interface{}\n    err := json.Unmarshal([]byte(str), &tempMap)\n    if err != nil {\n        panic(err)\n    }\n    return tempMap\n}\n")),(0,r.kt)("h2",{id:"\u7ed3\u6784\u4f53"},"\u7ed3\u6784\u4f53"),(0,r.kt)("p",null,"\u7ed3\u6784\u4f53\u662f\u4e00\u79cd\u805a\u5408\u7c7b\u578b\uff0c\u5305\u542b\u96f6\u4e2a\u6216\u591a\u4e2a\u4efb\u610f\u7c7b\u578b\u7684\u547d\u540d\u53d8\u91cf\uff0c\u6bcf\u4e2a\u53d8\u91cf\u53eb\u505a\u7ed3\u6784\u4f53\u7684\u6210\u5458\u3002"),(0,r.kt)("h3",{id:"\u521b\u5efa\u7ed3\u6784\u4f53"},"\u521b\u5efa\u7ed3\u6784\u4f53"),(0,r.kt)("p",null,"\u9996\u5148\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," \u6765\u81ea\u5b9a\u4e49\u4e00\u4e2a\u7ed3\u6784\u4f53\u7c7b\u578b ",(0,r.kt)("inlineCode",{parentName:"p"},"user"),"\uff0c\u91cc\u9762\u6709\u4e24\u4e2a\u6210\u5458\u53d8\u91cf\uff0c\u5206\u522b\u662f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"age"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// \u58f0\u660e\u7ed3\u6784\u4f53\ntype user struct {\n    name string\n    age  int\n}\n")),(0,r.kt)("p",null,"\u7ed3\u6784\u4f53\u7684\u521d\u59cb\u5316\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,r.kt)("p",null,"\u7b2c\u4e00\u79cd\u662f\u6309\u7167\u58f0\u660e\u5b57\u6bb5\u7684\u987a\u5e8f\u9010\u4e2a\u8d4b\u503c\uff0c\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\uff0c\u5b57\u6bb5\u7684\u987a\u5e8f\u8981\u4e25\u683c\u4e00\u81f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Go"},'// \u521d\u59cb\u5316\nu1 := user{"zhangsan", 18}\nfmt.Println(u1) // {zhangsan 18}\n')),(0,r.kt)("p",null,"\u8fd9\u6837\u505a\u7684\u7f3a\u70b9\u5f88\u660e\u663e\uff0c\u5982\u679c\u5b57\u6bb5\u987a\u4fbf\u53d8\u4e86\uff0c\u90a3\u4e48\u51e1\u662f\u6d89\u53ca\u5230\u8fd9\u4e2a\u7ed3\u6784\u521d\u59cb\u5316\u7684\u90e8\u5206\u90fd\u8981\u8ddf\u7740\u53d8\u3002"),(0,r.kt)("p",null,"\u6240\u4ee5\uff0c\u66f4\u63a8\u8350\u4f7f\u7528\u7b2c\u4e8c\u79cd\u65b9\u5f0f\uff0c\u6309\u7167\u5b57\u6bb5\u540d\u5b57\u6765\u521d\u59cb\u5316\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// \u66f4\u597d\u7684\u65b9\u5f0f\n// u := user{\n//  age: 20,\n// }\n// fmt.Println(u)   // { 20}\nu := user{\n    name: "zhangsan",\n    age:  18,\n}\nfmt.Println(u) // {zhangsan 18}\n')),(0,r.kt)("p",null,"\u672a\u521d\u59cb\u5316\u7684\u5b57\u6bb5\u4f1a\u8d4b\u503c\u76f8\u5e94\u7c7b\u578b\u7684\u96f6\u503c"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u7ed3\u6784\u4f53"},"\u4f7f\u7528\u7ed3\u6784\u4f53"),(0,r.kt)("p",null,"\u4f7f\u7528\u70b9\u53f7 ",(0,r.kt)("inlineCode",{parentName:"p"},".")," \u6765\u8bbf\u95ee\u548c\u8d4b\u503c\u6210\u5458\u53d8\u91cf\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// \u8bbf\u95ee\u7ed3\u6784\u4f53\u6210\u5458\nfmt.Println(u.name, u.age) // zhangsan 18\nu.name = "lisi"\nfmt.Println(u.name, u.age) // lisi 18\n')),(0,r.kt)("p",null,"\u5982\u679c\u7ed3\u6784\u4f53\u7684\u6210\u5458\u53d8\u91cf\u662f\u53ef\u6bd4\u8f83\u7684\uff0c\u90a3\u4e48\u7ed3\u6784\u4f53\u4e5f\u662f\u53ef\u6bd4\u8f83\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// \u7ed3\u6784\u4f53\u6bd4\u8f83\nu2 := user{\n    age:  18,\n    name: "zhangsan",\n}\nfmt.Println(u1 == u)  // false\nfmt.Println(u1 == u2) // true\n')),(0,r.kt)("h3",{id:"\u7ed3\u6784\u4f53\u5d4c\u5957\u533f\u540d\u6210\u5458"},"\u7ed3\u6784\u4f53\u5d4c\u5957\u533f\u540d\u6210\u5458"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type admin struct {\n    u       user\n    isAdmin bool\n}\ntype leader struct {\n    u        user\n    isLeader bool\n}\n\na := admin{\n    u:       u,\n    isAdmin: true,\n}\nfmt.Println(a) // {{lisi 18} true}\na.u.name = "wangwu"\nfmt.Println(a.u.name)  // wangwu\nfmt.Println(a.u.age)   // 18\nfmt.Println(a.isAdmin) // true\n')),(0,r.kt)("p",null,"\u533f\u540d\u6210\u5458\u767b\u573a\uff0c\u4e0d\u6307\u5b9a\u540d\u79f0\uff0c\u53ea\u6307\u5b9a\u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type admin1 struct {\n    user\n    isAdmin bool\n}\n//\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u7701\u7565\u6389\u4e2d\u95f4\u53d8\u91cf\uff0c\u76f4\u63a5\u8bbf\u95ee\u6211\u4eec\u9700\u8981\u7684\u6210\u5458\u53d8\u91cf\u3002\n\na1 := admin1{\n    user:    u,\n    isAdmin: true,\n}\na1.age = 20\na1.isAdmin = false\nfmt.Println(a1)         // {{lisi 20} false}\nfmt.Println(a1.name)    // lisi\nfmt.Println(a1.age)     // 20\nfmt.Println(a1.isAdmin) // false\n")))}c.isMDXComponent=!0}}]);