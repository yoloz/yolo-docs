"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[6834],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),u=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=u(n.components);return r.createElement(c.Provider,{value:e},n.children)},g="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),g=u(t),d=o,f=g["".concat(c,".").concat(d)]||g[d]||m[d]||a;return t?r.createElement(f,i(i({ref:e},p),{},{components:t})):r.createElement(f,i({ref:e},p))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l[g]="string"==typeof n?n:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const a={},i=void 0,l={unversionedId:"golang/\u5e76\u53d1\u7f16\u7a0b",id:"golang/\u5e76\u53d1\u7f16\u7a0b",title:"\u5e76\u53d1\u7f16\u7a0b",description:"goroutine",source:"@site/docs/golang/\u5e76\u53d1\u7f16\u7a0b.md",sourceDirName:"golang",slug:"/golang/\u5e76\u53d1\u7f16\u7a0b",permalink:"/docs/golang/\u5e76\u53d1\u7f16\u7a0b",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/golang/\u5e76\u53d1\u7f16\u7a0b.md",tags:[],version:"current",lastUpdatedAt:1689307169,formattedLastUpdatedAt:"2023\u5e747\u670814\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5e38\u89c1\u9519\u8bef",permalink:"/docs/golang/\u5e38\u89c1\u9519\u8bef"},next:{title:"\u6570\u7ec4\u548c\u5207\u7247",permalink:"/docs/golang/\u6570\u7ec4\u548c\u5207\u7247"}},c={},u=[{value:"goroutine",id:"goroutine",level:2},{value:"channel",id:"channel",level:2},{value:"\u65e0\u7f13\u51b2 channel",id:"\u65e0\u7f13\u51b2-channel",level:3},{value:"\u7f13\u51b2 channel",id:"\u7f13\u51b2-channel",level:3},{value:"\u5355\u5411 channel",id:"\u5355\u5411-channel",level:3},{value:"sync",id:"sync",level:2},{value:"Mutex",id:"mutex",level:3},{value:"RWMutex",id:"rwmutex",level:3}],p={toc:u},g="wrapper";function m(n){let{components:e,...t}=n;return(0,o.kt)(g,(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"goroutine"},"goroutine"),(0,o.kt)("p",null,"Go \u8bed\u8a00\u7684\u5e76\u53d1\u6267\u884c\u4f53\u79f0\u4e3a goroutine\uff0c\u4f7f\u7528\u5173\u952e\u8bcd go \u6765\u542f\u52a8\u4e00\u4e2a goroutine\u3002go \u5173\u952e\u8bcd\u540e\u9762\u5fc5\u987b\u8ddf\u4e00\u4e2a\u51fd\u6570\uff0c\u53ef\u4ee5\u662f\u6709\u540d\u51fd\u6570\uff0c\u4e5f\u53ef\u4ee5\u662f\u65e0\u540d\u51fd\u6570\uff0c\u51fd\u6570\u7684\u8fd4\u56de\u503c\u4f1a\u88ab\u5ffd\u7565\u3002go \u7684\u6267\u884c\u662f\u975e\u963b\u585e\u7684\u3002\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    go spinner(100 * time.Millisecond)\n    const n = 45\n    fibN := fib(n)\n    fmt.Printf("\\rFibonacci(%d) = %d\\n", n, fibN) // Fibonacci(45) = 1134903170\n}\n\nfunc spinner(delay time.Duration) {\n    for {\n        for _, r := range `-\\|/` {\n            fmt.Printf("\\r%c", r)\n            time.Sleep(delay)\n        }\n    }\n}\n\nfunc fib(x int) int {\n    if x < 2 {\n        return x\n    }\n    return fib(x-1) + fib(x-2)\n}\n')),(0,o.kt)("p",null,"\u5f53\u4e00\u4e2a\u7a0b\u5e8f\u542f\u52a8\u65f6\uff0c\u53ea\u6709\u4e00\u4e2a goroutine \u6765\u8c03\u7528 main \u51fd\u6570\uff0c\u79f0\u4e3a\u4e3b goroutine\u3002\u65b0\u7684 goroutine \u901a\u8fc7 go \u5173\u952e\u8bcd\u521b\u5efa\uff0c\u7136\u540e\u5e76\u53d1\u6267\u884c\u3002\u5f53 main \u51fd\u6570\u8fd4\u56de\u65f6\uff0c\u4e0d\u4f1a\u7b49\u5f85\u5176\u4ed6 goroutine \u6267\u884c\u5b8c\uff0c\u800c\u662f\u76f4\u63a5\u66b4\u529b\u7ed3\u675f\u6240\u6709 goroutine\uff0c\u5982\u4e0b\u4e0d\u4f1a\u8f93\u51fa\u503c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func Add(x, y int) {\n    z := x + y\n    fmt.Println(z)\n}\n\nfunc main() {\n    for i := 0; i < 10; i++ {\n        go Add(i, i)\n    }\n}\n// \u4e0d\u4f1a\u8f93\u51fa\u503c\n")),(0,o.kt)("h2",{id:"channel"},"channel"),(0,o.kt)("p",null,"\u4e00\u822c\u5199\u591a\u8fdb\u7a0b\u7a0b\u5e8f\u65f6\u90fd\u4f1a\u9047\u5230\u4e00\u4e2a\u95ee\u9898\uff1a\u8fdb\u7a0b\u95f4\u901a\u4fe1\u3002\u5e38\u89c1\u7684\u901a\u4fe1\u65b9\u5f0f\u6709\u4fe1\u53f7\uff0c\u5171\u4eab\u5185\u5b58\u7b49\u3002goroutine \u4e4b\u95f4\u7684\u901a\u4fe1\u673a\u5236\u662f\u901a\u9053 channel\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// \u4f7f\u7528 make \u521b\u5efa\u901a\u9053,ch \u7684\u7c7b\u578b\u662f chan int\nch := make(chan int)\n\n// \u901a\u9053\u652f\u6301\u4e09\u4e2a\u4e3b\u8981\u64cd\u4f5c\uff1asend\uff0creceive \u548c close\u3002\n// \u53d1\u9001\nch <- x\n// \u63a5\u6536\nx = <-ch\n// \u63a5\u6536\uff0c\u4e22\u5f03\u7ed3\u679c\n<-ch\n// \u5173\u95ed\nclose(ch)\n")),(0,o.kt)("h3",{id:"\u65e0\u7f13\u51b2-channel"},"\u65e0\u7f13\u51b2 channel"),(0,o.kt)("p",null,"make \u51fd\u6570\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u53ef\u9009\u53c2\u6570\uff0c\u8868\u793a\u901a\u9053\u5bb9\u91cf\u3002\u4e0d\u4f20\u6216\u8005\u4f20 0 \u8868\u793a\u521b\u5efa\u4e86\u4e00\u4e2a\u65e0\u7f13\u51b2\u901a\u9053\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u53d1\u9001\u5148\u6267\u884c\uff0c\u53d1\u9001\u64cd\u4f5c\u5c06\u4f1a\u963b\u585e\uff0c\u76f4\u5230\u53e6\u4e00\u4e2a goroutine \u5728\u5bf9\u5e94\u7684\u901a\u9053\u4e0a\u6267\u884c\u63a5\u6536\u64cd\u4f5c\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u63a5\u6536\u5148\u6267\u884c\uff0c\u90a3\u4e48\u63a5\u6536 goroutine \u5c06\u4f1a\u963b\u585e\uff0c\u76f4\u5230\u53e6\u4e00\u4e2a goroutine \u5728\u5bf9\u5e94\u901a\u9053\u4e0a\u6267\u884c\u53d1\u9001\uff1b")),(0,o.kt)("p",null,"\u6240\u4ee5\uff0c\u65e0\u7f13\u51b2\u901a\u9053\u662f\u4e00\u79cd\u540c\u6b65\u901a\u9053\u3002\u4e0b\u9762\u6211\u4eec\u4f7f\u7528\u65e0\u7f13\u51b2\u901a\u9053\u628a\u4e0a\u9762\u4f8b\u5b50\u4e2d\u51fa\u73b0\u7684\u95ee\u9898\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func Add(x, y int, ch chan int) {\n    z := x + y\n    ch <- z\n}\n\nfunc main() {\n\n    ch := make(chan int)\n    for i := 0; i < 10; i++ {\n        go Add(i, i, ch)\n    }\n// \u53ef\u4ee5\u6b63\u5e38\u8f93\u51fa\u7ed3\u679c,\u4e3b goroutine \u4f1a\u963b\u585e\uff0c\u76f4\u5230\u8bfb\u53d6\u5230\u901a\u9053\u4e2d\u7684\u503c\uff0c\u6700\u540e\u9000\u51fa\n    for i := 0; i < 10; i++ {\n        fmt.Println(<-ch)\n    }\n}\n")),(0,o.kt)("h3",{id:"\u7f13\u51b2-channel"},"\u7f13\u51b2 channel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// \u521b\u5efa\u4e00\u4e2a\u5bb9\u91cf\u662f 5 \u7684\u7f13\u51b2\u901a\u9053\nch := make(chan int, 5)\n")),(0,o.kt)("p",null,"\u7f13\u51b2\u901a\u9053\u7684\u53d1\u9001\u64cd\u4f5c\u5728\u901a\u9053\u5c3e\u90e8\u63d2\u5165\u4e00\u4e2a\u5143\u7d20\uff0c\u63a5\u6536\u64cd\u4f5c\u4ece\u901a\u9053\u7684\u5934\u90e8\u79fb\u9664\u4e00\u4e2a\u5143\u7d20\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u901a\u9053\u6ee1\u4e86\uff0c\u53d1\u9001\u4f1a\u963b\u585e\uff0c\u76f4\u5230\u53e6\u4e00\u4e2a goroutine \u6267\u884c\u63a5\u6536;"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u901a\u9053\u662f\u7a7a\u7684\uff0c\u63a5\u6536\u4f1a\u963b\u585e\uff0c\u76f4\u5230\u53e6\u4e00\u4e2a goroutine \u6267\u884c\u53d1\u9001;")),(0,o.kt)("p",null,"\u5176\u5b9e\u7f13\u51b2\u901a\u9053\u548c\u961f\u5217\u4e00\u6837\uff0c\u628a\u64cd\u4f5c\u89e3\u8026\u4e86\u3002"),(0,o.kt)("h3",{id:"\u5355\u5411-channel"},"\u5355\u5411 channel"),(0,o.kt)("p",null,"\u7c7b\u578b",(0,o.kt)("inlineCode",{parentName:"p"},"chan<- int")," \u662f\u4e00\u4e2a\u53ea\u80fd\u53d1\u9001\u7684\u901a\u9053\uff0c\u7c7b\u578b ",(0,o.kt)("inlineCode",{parentName:"p"},"<-chan int")," \u662f\u4e00\u4e2a\u53ea\u80fd\u63a5\u6536\u7684\u901a\u9053"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u4efb\u4f55\u53cc\u5411\u901a\u9053\u90fd\u53ef\u4ee5\u7528\u4f5c\u5355\u5411\u901a\u9053\uff0c\u4f46\u53cd\u8fc7\u6765\u4e0d\u884c;"),(0,o.kt)("li",{parentName:"ul"},"close \u53ea\u80fd\u7528\u5728\u53d1\u9001\u901a\u9053\u4e0a\uff0c\u5982\u679c\u7528\u5728\u63a5\u6536\u901a\u9053\u4f1a\u62a5\u9519;"))),(0,o.kt)("p",null,"\u770b\u4e00\u4e2a\u5355\u5411\u901a\u9053\u7684\u4f8b\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func counter(out chan<- int) {\n    for x := 0; x < 10; x++ {\n        out <- x\n    }\n    close(out)\n}\n\nfunc squarer(out chan<- int, in <-chan int) {\n    for v := range in {\n        out <- v * v\n    }\n    close(out)\n}\n\nfunc printer(in <-chan int) {\n    for v := range in {\n        fmt.Println(v)\n    }\n}\n\nfunc main() {\n    n := make(chan int)\n    s := make(chan int)\n\n    go counter(n)\n    go squarer(s, n)\n    printer(s)\n\n}\n")),(0,o.kt)("h2",{id:"sync"},"sync"),(0,o.kt)("p",null,"sync \u5305\u63d0\u4f9b\u4e86\u4e24\u79cd\u9501\u7c7b\u578b\uff1async.Mutex \u548c sync.RWMutex\uff0c\u524d\u8005\u662f\u4e92\u65a5\u9501\uff0c\u540e\u8005\u662f\u8bfb\u5199\u9501\u3002"),(0,o.kt)("h3",{id:"mutex"},"Mutex"),(0,o.kt)("p",null,"\u5f53\u4e00\u4e2a goroutine \u83b7\u53d6\u4e86 Mutex \u540e\uff0c\u5176\u4ed6 goroutine \u4e0d\u7ba1\u8bfb\u5199\uff0c\u53ea\u80fd\u7b49\u5f85\uff0c\u76f4\u5230\u9501\u88ab\u91ca\u653e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n\n    var mutex sync.Mutex\n    wg := sync.WaitGroup{}\n\n    // \u4e3b goroutine \u5148\u83b7\u53d6\u9501\n    fmt.Println("Locking  (G0)")\n    mutex.Lock()\n    fmt.Println("locked (G0)")\n\n    wg.Add(3)\n    for i := 1; i < 4; i++ {\n        go func(i int) {\n            // \u7531\u4e8e\u4e3b goroutine \u5148\u83b7\u53d6\u9501\uff0c\u7a0b\u5e8f\u5f00\u59cb 5 \u79d2\u4f1a\u963b\u585e\u5728\u8fd9\u91cc\n            fmt.Printf("Locking (G%d)\\n", i)\n            mutex.Lock()\n            fmt.Printf("locked (G%d)\\n", i)\n\n            time.Sleep(time.Second * 2)\n            mutex.Unlock()\n            fmt.Printf("unlocked (G%d)\\n", i)\n\n            wg.Done()\n        }(i)\n    }\n\n    // \u4e3b goroutine 5 \u79d2\u540e\u91ca\u653e\u9501\n    time.Sleep(time.Second * 5)\n    fmt.Println("ready unlock (G0)")\n    mutex.Unlock()\n    fmt.Println("unlocked (G0)")\n\n    wg.Wait()\n}\n')),(0,o.kt)("h3",{id:"rwmutex"},"RWMutex"),(0,o.kt)("p",null,"RWMutex \u5c5e\u4e8e\u7ecf\u5178\u7684\u5355\u5199\u591a\u8bfb\u6a21\u578b\uff0c\u5f53\u8bfb\u9501\u88ab\u5360\u7528\u65f6\uff0c\u4f1a\u963b\u6b62\u5199\uff0c\u4f46\u4e0d\u963b\u6b62\u8bfb\u3002\u800c\u5199\u9501\u4f1a\u963b\u6b62\u5199\u548c\u8bfb\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n\n    var rwMutex sync.RWMutex\n    wg := sync.WaitGroup{}\n\n    Data := 0\n    wg.Add(20)\n    for i := 0; i < 10; i++ {\n        go func(t int) {\n            // \u7b2c\u4e00\u6b21\u8fd0\u884c\u540e\uff0c\u5199\u89e3\u9501\u3002\n            // \u5faa\u73af\u5230\u7b2c\u4e8c\u6b21\u65f6\uff0c\u8bfb\u9501\u5b9a\u540e\uff0cgoroutine \u6ca1\u6709\u963b\u585e\uff0c\u540c\u65f6\u8bfb\u6210\u529f\u3002\n            fmt.Println("Locking")\n            rwMutex.RLock()\n            defer rwMutex.RUnlock()\n            fmt.Printf("Read data: %v\\n", Data)\n            wg.Done()\n            time.Sleep(2 * time.Second)\n        }(i)\n        go func(t int) {\n            // \u5199\u9501\u5b9a\u4e0b\u662f\u9700\u8981\u89e3\u9501\u540e\u624d\u80fd\u5199\u7684\n            rwMutex.Lock()\n            defer rwMutex.Unlock()\n            Data += t\n            fmt.Printf("Write Data: %v %d \\n", Data, t)\n            wg.Done()\n            time.Sleep(2 * time.Second)\n        }(i)\n    }\n\n    wg.Wait()\n}\n')))}m.isMDXComponent=!0}}]);