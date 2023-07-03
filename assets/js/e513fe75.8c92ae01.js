"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[5623],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6986:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={},i=void 0,l={unversionedId:"golang/\u8bfb\u53d6\u8f93\u5165",id:"golang/\u8bfb\u53d6\u8f93\u5165",title:"\u8bfb\u53d6\u8f93\u5165",description:"\u63a7\u5236\u53f0\u8bfb\u53d6",source:"@site/docs/golang/\u8bfb\u53d6\u8f93\u5165.md",sourceDirName:"golang",slug:"/golang/\u8bfb\u53d6\u8f93\u5165",permalink:"/docs/golang/\u8bfb\u53d6\u8f93\u5165",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/golang/\u8bfb\u53d6\u8f93\u5165.md",tags:[],version:"current",lastUpdatedAt:1688378919,formattedLastUpdatedAt:"2023\u5e747\u67083\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7c7b\u578b\u5904\u7406",permalink:"/docs/golang/\u7c7b\u578b\u5904\u7406"},next:{title:"JNA\u4f7f\u7528\u7ec6\u8282",permalink:"/docs/java/JNA\u4f7f\u7528\u7ec6\u8282"}},c={},s=[{value:"\u63a7\u5236\u53f0\u8bfb\u53d6",id:"\u63a7\u5236\u53f0\u8bfb\u53d6",level:2},{value:"\u7f13\u51b2\u8bfb\u53d6",id:"\u7f13\u51b2\u8bfb\u53d6",level:2}],p={toc:s},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63a7\u5236\u53f0\u8bfb\u53d6"},"\u63a7\u5236\u53f0\u8bfb\u53d6"),(0,a.kt)("p",null,"\u4ece\u952e\u76d8\u548c\u6807\u51c6\u8f93\u5165 os.Stdin \u8bfb\u53d6\u8f93\u5165\uff0c\u6700\u7b80\u5355\u7684\u529e\u6cd5\u662f\u4f7f\u7528 fmt \u5305\u63d0\u4f9b\u7684 Scan \u548c Sscan \u5f00\u5934\u7684\u51fd\u6570\u3002\u5177\u4f53\u4ee3\u7801\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nvar (\n    FirstName, SecondNames, ThirdNames string\n    i                                  int\n    f                                  float32\n    Input                              = "5.2 / 100 / Golang" //\u7528\u6237\u81ea\u5b9a\u4e49\u53d8\u91cf\uff0c\u4fbf\u4e8e\u4e4b\u540e\u5bf9\u8fd9\u4e2a\u5b57\u7b26\u4e32\u7684\u5904\u7406\u3002\n    format                             = "%f / %d / %s"\n)\n\nfunc main() {\n    fmt.Printf("Please enter your full name: ")\n    fmt.Scanln(&FirstName, &SecondNames) //Scanln \u626b\u63cf\u6765\u81ea\u6807\u51c6\u8f93\u5165\u7684\u6587\u672c\uff0c\u5c06\u7a7a\u683c\u5206\u9694\u7684\u503c\u4f9d\u6b21\u5b58\u653e\u5230\u540e\u7eed\u7684\u53c2\u6570\u5185\uff0c\u76f4\u5230\u78b0\u5230\u6362\u884c\u3002\n    // fmt.Scanf("%s %s", &firstName, &lastName)   //Scanf\u4e0e\u5176\u7c7b\u4f3c\uff0c\u9664\u4e86 Scanf \u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u7528\u4f5c\u683c\u5f0f\u5b57\u7b26\u4e32\uff0c\u7528\u6765\u51b3\u5b9a\u5982\u4f55\u8bfb\u53d6\u3002\n\n    fmt.Printf("Hi %s %s!\\n", FirstName, SecondNames)\n    fmt.Sscanf(Input, format, &f, &i, &ThirdNames) //Sscan \u548c\u4ee5 Sscan \u5f00\u5934\u7684\u51fd\u6570\u5219\u662f\u4ece\u5b57\u7b26\u4e32\u8bfb\u53d6\uff0c\u9664\u6b64\u4e4b\u5916\uff0c\u4e0e Scanf \u76f8\u540c\u3002\u5982\u679c\u8fd9\u4e9b\u51fd\u6570\u8bfb\u53d6\u5230\u7684\u7ed3\u679c\u4e0e\u60a8\u9884\u60f3\u7684\u4e0d\u540c\uff0c\u60a8\u53ef\u4ee5\u68c0\u67e5\u6210\u529f\u8bfb\u5165\u6570\u636e\u7684\u4e2a\u6570\u548c\u8fd4\u56de\u7684\u9519\u8bef\u3002\n\n    fmt.Println("From the Input we read: ", f, i, ThirdNames)\n}\n')),(0,a.kt)("h2",{id:"\u7f13\u51b2\u8bfb\u53d6"},"\u7f13\u51b2\u8bfb\u53d6"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bufio.NewReader()")," \u6784\u9020\u51fd\u6570\u7684\u7b7e\u540d\u4e3a\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"func NewReader(rd io.Reader) *Reader"),"\u3002\u8be5\u51fd\u6570\u7684\u5b9e\u53c2\u53ef\u4ee5\u662f\u6ee1\u8db3 io.Reader \u63a5\u53e3\u7684\u4efb\u610f\u5bf9\u8c61\uff0c\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5e26\u7f13\u51b2\u7684 io.Reader \u5bf9\u8c61\uff0c\u5b83\u5c06\u4ece\u6307\u5b9a\u8bfb\u53d6\u5668\uff08\u4f8b\u5982 os.Stdin \uff09\u8bfb\u53d6\u5185\u5bb9\u3002\u8fd4\u56de\u7684\u8bfb\u53d6\u5668\u5bf9\u8c61\u63d0\u4f9b\u4e00\u4e2a\u65b9\u6cd5 ReadString(delim byte) \uff0c\u8be5\u65b9\u6cd5\u4ece\u8f93\u5165\u4e2d\u8bfb\u53d6\u5185\u5bb9\uff0c\u76f4\u5230\u78b0\u5230 delim \u6307\u5b9a\u7684\u5b57\u7b26\uff0c\u7136\u540e\u5c06\u8bfb\u53d6\u5230\u7684\u5185\u5bb9\u8fde\u540c delim \u5b57\u7b26\u4e00\u8d77\u653e\u5230\u7f13\u51b2\u533a\u3002ReadString \u8fd4\u56de\u8bfb\u53d6\u5230\u7684\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u78b0\u5230\u9519\u8bef\u5219\u8fd4\u56de nil \u3002\u5982\u679c\u5b83\u4e00\u76f4\u8bfb\u5230\u6587\u4ef6\u7ed3\u675f\uff0c\u5219\u8fd4\u56de\u8bfb\u53d6\u5230\u7684\u5b57\u7b26\u4e32\u548c io.EOF \u3002\u5982\u679c\u8bfb\u53d6\u8fc7\u7a0b\u4e2d\u6ca1\u6709\u78b0\u5230 delim \u5b57\u7b26\uff0c\u5c06\u8fd4\u56de\u9519\u8bef err != nil."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "bufio"\n "fmt"\n "os"\n)\n\nvar (\n inputReader *bufio.Reader //inputReader \u662f\u4e00\u4e2a\u6307\u5411 bufio.Reader \u7684\u6307\u9488\u3002\n input string\n err error\n)\n\nfunc main() {\n inputReader = bufio.NewReader(os.Stdin) //\u521b\u5efa\u4e00\u4e2a\u8bfb\u53d6\u5668\uff0c\u5e76\u5c06\u5176\u4e0e\u6807\u51c6\u8f93\u5165\u7ed1\u5b9a\u3002\n fmt.Printf("Please enter some input: ")\n input, err = inputReader.ReadString(\'\\n\') //\u8bfb\u53d6\u5668\u5bf9\u8c61\u63d0\u4f9b\u4e00\u4e2a\u65b9\u6cd5 ReadString(delim byte) \uff0c\u8be5\u65b9\u6cd5\u4ece\u8f93\u5165\u4e2d\u8bfb\u53d6\u5185\u5bb9\uff0c\u76f4\u5230\u78b0\u5230 delim \u6307\u5b9a\u7684\u5b57\u7b26\uff0c\u7136\u540e\u5c06\u8bfb\u53d6\u5230\u7684\u5185\u5bb9\u8fde\u540c delim \u5b57\u7b26\u4e00\u8d77\u653e\u5230\u7f13\u51b2\u533a\u3002\n if err == nil {\n fmt.Printf("The input was: %s", input)\n }\n}\n')))}u.isMDXComponent=!0}}]);