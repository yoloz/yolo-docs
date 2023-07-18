"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[6785],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>d});var i=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var m=i.createContext({}),u=function(n){var e=i.useContext(m),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=u(n.components);return i.createElement(m.Provider,{value:e},n.children)},c="mdxType",f={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,m=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),c=u(t),s=a,d=c["".concat(m,".").concat(s)]||c[s]||f[s]||r;return t?i.createElement(d,l(l({ref:e},p),{},{components:t})):i.createElement(d,l({ref:e},p))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,l=new Array(r);l[0]=s;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=n,o[c]="string"==typeof n?n:a,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}s.displayName="MDXCreateElement"},54229:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=t(87462),a=(t(67294),t(3905));const r={},l=void 0,o={unversionedId:"golang/\u6d41\u7a0b\u5173\u952e\u5b57",id:"golang/\u6d41\u7a0b\u5173\u952e\u5b57",title:"\u6d41\u7a0b\u5173\u952e\u5b57",description:"if-else",source:"@site/docs/golang/\u6d41\u7a0b\u5173\u952e\u5b57.md",sourceDirName:"golang",slug:"/golang/\u6d41\u7a0b\u5173\u952e\u5b57",permalink:"/docs/golang/\u6d41\u7a0b\u5173\u952e\u5b57",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/golang/\u6d41\u7a0b\u5173\u952e\u5b57.md",tags:[],version:"current",lastUpdatedAt:1689650905,formattedLastUpdatedAt:"2023\u5e747\u670818\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6784\u5efa\u53ef\u6267\u884c\u6587\u4ef6",permalink:"/docs/golang/\u6784\u5efa\u53ef\u6267\u884c\u6587\u4ef6"},next:{title:"\u7248\u672c\u4f9d\u8d56",permalink:"/docs/golang/\u7248\u672c\u4f9d\u8d56"}},m={},u=[{value:"if-else",id:"if-else",level:2},{value:"switch",id:"switch",level:2},{value:"for",id:"for",level:2},{value:"goto",id:"goto",level:2},{value:"break",id:"break",level:2},{value:"continue",id:"continue",level:2}],p={toc:u},c="wrapper";function f(n){let{components:e,...t}=n;return(0,a.kt)(c,(0,i.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"if-else"},"if-else"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6761\u4ef6\u8bed\u53e5\u4e0d\u9700\u8981\u4f7f\u7528\u5c0f\u62ec\u53f7 ",(0,a.kt)("inlineCode",{parentName:"li"},"()")," \u5305\u8d77\u6765\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u82b1\u62ec\u53f7 ",(0,a.kt)("inlineCode",{parentName:"li"},"{}")," \u5fc5\u987b\u6709\uff0c\u5e76\u4e14\u5de6\u82b1\u62ec\u53f7 ",(0,a.kt)("inlineCode",{parentName:"li"},"{")," \u5fc5\u987b\u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"if")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"else")," \u5728\u540c\u4e00\u884c\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"if")," \u4e4b\u540e\uff0c\u6761\u4ef6\u8bed\u53e5\u4e4b\u524d\u53ef\u4ee5\u6dfb\u52a0\u53d8\u91cf\u521d\u59cb\u5316\u8bed\u53e5\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},";")," \u5206\u9694\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    if 7%2 == 0 {\n        fmt.Println("7 is even")\n    } else {\n        fmt.Println("7 is odd") // 7 is odd\n    }\n\n    if 8%4 == 0 {\n        fmt.Println("8 is divisible by 4") // 8 is divisible by 4\n    }\n\n    if num := 9; num < 0 {\n        fmt.Println(num, "is negative")\n    } else if num < 10 {\n        fmt.Println(num, "has 1 digit") // 9 has 1 digit\n    } else {\n        fmt.Println(num, "has multiple digits")\n    }\n}\n')),(0,a.kt)("h2",{id:"switch"},"switch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5de6\u82b1\u62ec\u53f7 ",(0,a.kt)("inlineCode",{parentName:"li"},"{")," \u5fc5\u987b\u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"switch")," \u5728\u540c\u4e00\u884c\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u6761\u4ef6\u8868\u8fbe\u5f0f\u4e0d\u9650\u5236\u5e38\u91cf\u6216\u8005\u6574\u6570\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"switch")," \u540e\u53ef\u6dfb\u52a0\u53d8\u91cf\u521d\u59cb\u5316\u8bed\u53e5\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},";")," \u5206\u5272\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4e0d\u8bbe\u5b9a\u6761\u4ef6\u8868\u8fbe\u5f0f\uff0c\u5728\u6b64\u79cd\u60c5\u51b5\u4e0b\uff0c\u6574\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"switch")," \u7ed3\u6784\u4e0e\u591a\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"if-else")," \u7684\u903b\u8f91\u4f5c\u7528\u7b49\u540c\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5355\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"case")," \u4e2d\u53ef\u4ee5\u51fa\u73b0\u591a\u4e2a\u7ed3\u679c\u9009\u9879\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"case")," \u4e2d\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"fallthrough")," \u5173\u952e\u5b57\uff0c\u4f1a\u7ee7\u7eed\u6267\u884c\u7d27\u8ddf\u7684\u4e0b\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"case"),"\uff0c\u4e0d\u9700\u8981\u5224\u65ad ",(0,a.kt)("inlineCode",{parentName:"li"},"case")," \u7684\u6761\u4ef6\u8bed\u53e5;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"switch")," \u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," \u8bed\u53e5\uff0c\u5f53\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"case")," \u90fd\u4e0d\u6ee1\u8db3\u65f6\uff0c\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," \u8bed\u53e5\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    i := 2\n    fmt.Print("write ", i, " as ")\n    switch i {\n    case 1:\n        fmt.Println("one")\n    case 2:\n        fmt.Println("two") // write 2 as two\n        fallthrough\n    case 3:\n        fmt.Println("three") // three\n    case 4, 5, 6:\n        fmt.Println("four, five, six")\n    }\n\n    switch num := 9; num {\n    case 1:\n        fmt.Println("one")\n    default:\n        fmt.Println("nine") // nine\n    }\n\n    switch time.Now().Weekday() {\n    case time.Saturday, time.Sunday:\n        fmt.Println("it\'s the weekend")\n    default:\n        fmt.Println("it\'s a weekday") // it\'s a weekday\n    }\n\n    t := time.Now()\n    switch {\n    case t.Hour() < 12:\n        fmt.Println("it\'s before noon")\n    default:\n        fmt.Println("it\'s after noon") // it\'s after noon\n    }\n}\n\n')),(0,a.kt)("h2",{id:"for"},"for"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6761\u4ef6\u8868\u8fbe\u5f0f\u4e0d\u9700\u8981\u4f7f\u7528\u5c0f\u62ec\u53f7 ",(0,a.kt)("inlineCode",{parentName:"li"},"()")," \u5305\u8d77\u6765\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u82b1\u62ec\u53f7 ",(0,a.kt)("inlineCode",{parentName:"li"},"{}")," \u5fc5\u987b\u6709\uff0c\u5e76\u4e14\u5de6\u82b1\u62ec\u53f7 ",(0,a.kt)("inlineCode",{parentName:"li"},"{")," \u5fc5\u987b\u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"for")," \u5728\u540c\u4e00\u884c\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"li"},"continue")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"break"),"\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    i := 1\n    // \u53ea\u6709\u6761\u4ef6\n    for i <= 3 {\n        fmt.Println(i)\n        i = i + 1\n    }\n\n    // \u6709\u53d8\u91cf\u521d\u59cb\u5316\u548c\u6761\u4ef6\n    for j := 7; j <= 9; j++ {\n        fmt.Println(j)\n    }\n\n    // \u6b7b\u5faa\u73af\n    for {\n        fmt.Println("loop")\n        break\n    }\n\n    // \u904d\u5386\u6570\u7ec4\n    a := [...]int{10, 20, 30, 40}\n    for i := range a {\n        fmt.Println(i)\n    }\n    for i, v := range a {\n        fmt.Println(i, v)\n    }\n\n    // \u904d\u5386\u5207\u7247\n    s := []string{"a", "b", "c"}\n    for i := range s {\n        fmt.Println(i)\n    }\n    for i, v := range s {\n        fmt.Println(i, v)\n    }\n\n    // \u904d\u5386\u5b57\u5178\n    m := map[string]int{"a": 10, "b": 20, "c": 30}\n    for k := range m {\n        fmt.Println(k)\n    }\n    for k, v := range m {\n        fmt.Println(k, v)\n    }\n}\n')),(0,a.kt)("h2",{id:"goto"},"goto"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u5728\u51fd\u6570\u5185\u8df3\u8f6c\uff0c\u9700\u8981\u914d\u5408\u6807\u7b7e\u4e00\u8d77\u4f7f\u7528\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u8df3\u8fc7\u5185\u90e8\u53d8\u91cf\u58f0\u660e\u8bed\u53e5\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u8df3\u5230\u540c\u7ea7\u4f5c\u7528\u57df\u6216\u8005\u4e0a\u5c42\u4f5c\u7528\u57df\u5185\uff0c\u4e0d\u80fd\u8df3\u5230\u5185\u90e8\u4f5c\u7528\u57df\u5185\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    // \u8df3\u51fa\u5faa\u73af\n    for i := 0; ; i++ {\n        if i == 2 {\n            goto L1\n        }\n        fmt.Println(i)\n    }\nL1:\n    fmt.Println("Done")\n\n    // \u8df3\u8fc7\u53d8\u91cf\u58f0\u660e\uff0c\u4e0d\u5141\u8bb8\n    //  goto L2\n    //  j := 1\n    // L2:\n}\n\n')),(0,a.kt)("h2",{id:"break"},"break"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5355\u72ec\u4f7f\u7528\uff0c\u7528\u4e8e\u8df3\u51fa ",(0,a.kt)("inlineCode",{parentName:"li"},"break")," \u5f53\u524d\u6240\u5728\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"for"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"li"},"switch"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"li"},"select")," \u8bed\u53e5\u7684\u6267\u884c;"),(0,a.kt)("li",{parentName:"ul"},"\u548c\u6807\u7b7e\u4e00\u8d77\u4f7f\u7528\uff0c\u7528\u4e8e\u8df3\u51fa\u6807\u7b7e\u6240\u6807\u8bc6\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"for"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"li"},"switch"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"li"},"select")," \u8bed\u53e5\u7684\u6267\u884c\uff0c\u53ef\u7528\u4e8e\u8df3\u51fa\u591a\u91cd\u5faa\u73af\uff0c\u4f46\u6807\u7b7e\u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"break")," \u5fc5\u987b\u5728\u540c\u4e00\u4e2a\u51fd\u6570\u5185\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n    // break \u8df3\u8f6c\u5230\u6807\u7b7e\u5904\uff0c\u7136\u540e\u8df3\u8fc7 for \u5faa\u73af\nL3:\n    for i := 0; ; i++ {\n        for j := 0; ; j++ {\n            if i >= 2 {\n                break L3\n            }\n            if j > 4 {\n                break\n            }\n            fmt.Println(i, j)\n        }\n    }\n}\n\n")),(0,a.kt)("h2",{id:"continue"},"continue"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5355\u72ec\u4f7f\u7528\uff0c\u7528\u4e8e\u8df3\u51fa ",(0,a.kt)("inlineCode",{parentName:"li"},"continue")," \u5f53\u524d\u6240\u5728\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"for")," \u5faa\u73af\u7684\u672c\u6b21\u8fed\u4ee3\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u548c\u6807\u7b7e\u4e00\u8d77\u4f7f\u7528\uff0c\u7528\u4e8e\u8df3\u51fa\u6807\u7b7e\u6240\u6807\u8bc6\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"for")," \u8bed\u53e5\u7684\u672c\u6b21\u9009\u4ee3\uff0c\u4f46\u6807\u7b7e\u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"continue")," \u5fc5\u987b\u5728\u540c\u4e00\u4e2a\u51fd\u6570\u5185\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n    // continue \u8df3\u8f6c\u5230\u6807\u7b7e\u5904\uff0c\u7136\u540e\u6267\u884c i++\nL4:\n    for i := 0; ; i++ {\n        for j := 0; j < 6; j++ {\n            if i > 4 {\n                break L4\n            }\n            if i >= 2 {\n                continue L4\n            }\n            if j > 4 {\n                continue\n            }\n            fmt.Println(i, j)\n        }\n    }\n}\n")))}f.isMDXComponent=!0}}]);