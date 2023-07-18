"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[1350],{3905:(t,n,e)=>{e.d(n,{Zo:()=>u,kt:()=>g});var a=e(67294);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,l=function(t,n){if(null==t)return{};var e,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var o=a.createContext({}),m=function(t){var n=a.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},u=function(t){var n=m(t.components);return a.createElement(o.Provider,{value:n},t.children)},k="mdxType",d={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(t,n){var e=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=m(e),s=l,g=k["".concat(o,".").concat(s)]||k[s]||d[s]||r;return e?a.createElement(g,i(i({ref:n},u),{},{components:e})):a.createElement(g,i({ref:n},u))}));function g(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=s;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=t,p[k]="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=e[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}s.displayName="MDXCreateElement"},73613:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=e(87462),l=(e(67294),e(3905));const r={},i=void 0,p={unversionedId:"golang/\u57fa\u7840\u6570\u636e\u7c7b\u578b",id:"golang/\u57fa\u7840\u6570\u636e\u7c7b\u578b",title:"\u57fa\u7840\u6570\u636e\u7c7b\u578b",description:"Go \u7684\u6570\u636e\u7c7b\u578b\u5206\u56db\u5927\u7c7b\uff1a",source:"@site/docs/golang/\u57fa\u7840\u6570\u636e\u7c7b\u578b.md",sourceDirName:"golang",slug:"/golang/\u57fa\u7840\u6570\u636e\u7c7b\u578b",permalink:"/docs/golang/\u57fa\u7840\u6570\u636e\u7c7b\u578b",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/golang/\u57fa\u7840\u6570\u636e\u7c7b\u578b.md",tags:[],version:"current",lastUpdatedAt:1689650905,formattedLastUpdatedAt:"2023\u5e747\u670818\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u53d8\u91cf\u548c\u5e38\u91cf",permalink:"/docs/golang/\u53d8\u91cf\u548c\u5e38\u91cf"},next:{title:"\u590d\u5408\u6570\u636e\u7c7b\u578b",permalink:"/docs/golang/\u590d\u5408\u6570\u636e\u7c7b\u578b"}},o={},m=[{value:"\u6574\u6570",id:"\u6574\u6570",level:2},{value:"\u7c7b\u578b\u8f6c\u6362",id:"\u7c7b\u578b\u8f6c\u6362",level:3},{value:"\u6570\u503c\u8fd0\u7b97",id:"\u6570\u503c\u8fd0\u7b97",level:3},{value:"\u6bd4\u8f83\u8fd0\u7b97",id:"\u6bd4\u8f83\u8fd0\u7b97",level:3},{value:"\u4f4d\u8fd0\u7b97",id:"\u4f4d\u8fd0\u7b97",level:3},{value:"java \u4e2d byte \u8f6c\u6362",id:"java-\u4e2d-byte-\u8f6c\u6362",level:2},{value:"\u6d6e\u70b9\u6570",id:"\u6d6e\u70b9\u6570",level:2},{value:"\u590d\u6570",id:"\u590d\u6570",level:2},{value:"\u5e03\u5c14\u503c",id:"\u5e03\u5c14\u503c",level:2},{value:"\u5b57\u7b26\u4e32",id:"\u5b57\u7b26\u4e32",level:2},{value:"\u904d\u5386\u53ca rune",id:"\u904d\u5386\u53ca-rune",level:3},{value:"\u5b57\u7b26\u4e32\u64cd\u4f5c",id:"\u5b57\u7b26\u4e32\u64cd\u4f5c",level:3},{value:"\u5b57\u7b26\u4e32\u4e0e\u6570\u5b57",id:"\u5b57\u7b26\u4e32\u4e0e\u6570\u5b57",level:3}],u={toc:m},k="wrapper";function d(t){let{components:n,...e}=t;return(0,l.kt)(k,(0,a.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Go \u7684\u6570\u636e\u7c7b\u578b\u5206\u56db\u5927\u7c7b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u57fa\u7840\u7c7b\u578b\uff1a")," \u6570\u5b57 number\uff0c\u5b57\u7b26\u4e32 string \u548c\u5e03\u5c14\u578b boolean\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u805a\u5408\u7c7b\u578b\uff1a")," \u6570\u7ec4 array \u548c\u7ed3\u6784\u4f53 struct\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u5f15\u7528\u7c7b\u578b\uff1a")," \u6307\u9488 pointer\uff0c\u5207\u7247 slice\uff0c\u5b57\u5178 map\uff0c\u51fd\u6570 func \u548c\u901a\u9053 channel\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u63a5\u53e3\u7c7b\u578b\uff1a")," \u63a5\u53e3 interface\u3002")),(0,l.kt)("p",null,"\u5176\u4e2d\uff0c\u57fa\u7840\u7c7b\u578b\u53c8\u5206\u4e3a\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u6574\u578b\uff1a")," int8\u3001uint8\u3001byte\u3001int16\u3001uint16\u3001int32\u3001uint32\u3001int64\u3001uint64\u3001int\u3001uint\u3001uintptr\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u6d6e\u70b9\u578b\uff1a")," float32\uff0cfloat64\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u590d\u6570\u7c7b\u578b\uff1a")," complex64\u3001complex128\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u5e03\u5c14\u578b\uff1a")," bool\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u5b57\u7b26\u4e32\uff1a")," string\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u5b57\u7b26\u578b\uff1a")," rune\u3002")),(0,l.kt)("h2",{id:"\u6574\u6570"},"\u6574\u6570"),(0,l.kt)("p",null,"\u6574\u6570\u4e00\u5171\u6709 12 \u79cd\u7c7b\u578b\uff0c\u5206\u4e3a\u6709\u7b26\u53f7\u6574\u6570\u548c\u65e0\u7b26\u53f7\u6574\u6570\uff0c\u4e3a\u4e86\u65b9\u4fbf\u67e5\u770b\uff0c\u6211\u5728\u8fd9\u91cc\u6574\u7406\u4e86\u4e00\u4e2a\u8868\u683c\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u957f\u5ea6\uff08\u5b57\u8282\uff09"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8303\u56f4"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int8"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"-128 ~ 127")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"0~255")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"0~255")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int16"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"-32768~32767")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint16"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"0~65535")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int32"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"-2147483648~2147483647")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"0~4294967295")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"-9223372036854775808~9223372036854775807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint64"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"0~18446744073709551615")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"4/8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a(int32,int64)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint"),(0,l.kt)("td",{parentName:"tr",align:null},"4/8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a(uint32,uint64)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uintptr"),(0,l.kt)("td",{parentName:"tr",align:null},"4/8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a(uint32,uint64)\uff0c\u8db3\u4ee5\u5b58\u50a8\u6307\u9488\u7684 uint")))),(0,l.kt)("p",null,"\u4e00\u822c\u6211\u4eec\u5728\u5f00\u53d1\u7684\u65f6\u5019\uff0c\u4f7f\u7528 int \u548c uint \u5373\u53ef\u3002\u9664\u975e\u6709\u660e\u786e\u9700\u8981\u6307\u5b9a\u957f\u5ea6\u7684\u9700\u6c42\uff0c\u624d\u7528 int8 \u8fd9\u79cd\u7c7b\u578b\u3002"),(0,l.kt)("h3",{id:"\u7c7b\u578b\u8f6c\u6362"},"\u7c7b\u578b\u8f6c\u6362"),(0,l.kt)("p",null,"\u4e0d\u7ba1\u662f\u7b97\u672f\u8fd0\u7b97\uff0c\u8fd8\u662f\u903b\u8f91\u8fd0\u7b97\uff0cGo \u8981\u6c42\u64cd\u4f5c\u6570\u7684\u7c7b\u578b\u5fc5\u987b\u4e00\u81f4\uff0c\u5982\u679c\u4e0d\u4e00\u81f4\u7684\u8bdd\uff0c\u4f1a\u62a5\u9519\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"var a int = 10\nvar b int32 = 20\n// fmt.Println(a + b)   // \u62a5\u9519 invalid operation: a + b (mismatched types int and int32)\nfmt.Println(a + int(b)) // \u8f93\u51fa 30\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f53\u6d6e\u70b9\u578b\u8f6c\u6574\u578b\u7684\u8bdd\uff0c\u53ef\u80fd\u4f1a\u6709\u7cbe\u5ea6\u635f\u5931")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"var c float32 = 10.23\nfmt.Println(int(c)) // \u8f93\u51fa 10\n")),(0,l.kt)("h3",{id:"\u6570\u503c\u8fd0\u7b97"},"\u6570\u503c\u8fd0\u7b97"),(0,l.kt)("p",null,"\u7b97\u6570\u8fd0\u7b97\u7b26\u5305\u62ec\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"+"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"-"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"*"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"/")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"%"),"\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%")," \u53d6\u6a21\u8fd0\u7b97\u7b26\u53ea\u80fd\u7528\u4e8e\u6574\u6570\uff0c\u53d6\u6a21\u4f59\u6570\u7684\u6b63\u8d1f\u53f7\u4e0e\u88ab\u9664\u6570\u4e00\u81f4\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"// \u53d6\u6a21\nfmt.Println(5 % 3)   // \u8f93\u51fa 2\nfmt.Println(-5 % -3) // \u8f93\u51fa -2\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/")," \u9664\u6cd5\u8fd0\u7b97\u7b26\uff0c\u5982\u679c\u64cd\u4f5c\u6570\u90fd\u662f\u6574\u6570\uff0c\u5219\u7ed3\u679c\u4e5f\u662f\u6574\u6570\u3002")),(0,l.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n    var i int = 10\n    fmt.Println(i / 4)\n}\n")),(0,l.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u662f 2,\u5e76\u4e0d\u662f 2.5,\u56e0\u4e3a Go \u8bed\u8a00\u662f\u4e00\u79cd\u9759\u6001\u8bed\u8a00\uff0c\u5728\u5b9a\u4e49\u53d8\u91cf\u65f6\u5c31\u6307\u5b9a\u4e86\u53d8\u91cf\u7684\u7c7b\u578b\u4e3a int\uff0c\u90a3\u4e48\u7cfb\u7edf\u63a8\u5bfc\u51fa\u6765\u7684\u8fd0\u7b97\u7ed3\u679c\u4e5f\u4f1a\u4e3a int\u3002\u5982\u4e0b\u628a\u8fd0\u7b97\u7ed3\u679c\u7684\u7c7b\u578b\u6253\u5370\u51fa\u6765\u65f6\uff0c\u5219\u4e00\u76ee\u4e86\u7136\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n    var i int = 10\n    // fmt.Println(i / 4)\n    fmt.Println(reflect.TypeOf(i / 4))\n}\n")),(0,l.kt)("p",null,"\u9700\u8981\u6c42 2.5 \u7684\u7ed3\u679c\uff0c\u5219\u8c03\u6574(\u628a\u53d8\u91cf\u7c7b\u578b\u7531 int \u8f6c\u6362\u4e3a float)\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n    var i int = 10\n    fmt.Println(float32(i) / 4)\n}\n")),(0,l.kt)("h3",{id:"\u6bd4\u8f83\u8fd0\u7b97"},"\u6bd4\u8f83\u8fd0\u7b97"),(0,l.kt)("p",null,"\u6bd4\u8f83\u8fd0\u7b97\u7b26\u5305\u62ec\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},">"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},">="),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"<"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"<="),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"==")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"!="),"\u3002"),(0,l.kt)("p",null,"\u4e0d\u540c\u7c7b\u578b\u4e4b\u95f4\u4e0d\u53ef\u6bd4\u8f83\uff0c\u4f46\u6574\u578b\u53ef\u4ee5\u4e0e\u5b57\u9762\u91cf\u76f4\u63a5\u6bd4\u8f83\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// \u6bd4\u8f83\u8fd0\u7b97\nvar i int32\nvar j int64\ni, j = 1, 2\n\n// if i == j { // \u62a5\u9519 invalid operation: i == j (mismatched types int32 and int64)\n//  fmt.Println("i and j are equal.")\n// }\nif i == 1 || j == 2 {\n    fmt.Println("equal.")\n}\n')),(0,l.kt)("h3",{id:"\u4f4d\u8fd0\u7b97"},"\u4f4d\u8fd0\u7b97"),(0,l.kt)("p",null,"\u4f4d\u8fd0\u7b97\u7b26\u5305\u62ec\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"&"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"|"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"^"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"&^"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"<<")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},">>")),(0,l.kt)("h2",{id:"java-\u4e2d-byte-\u8f6c\u6362"},"java \u4e2d byte \u8f6c\u6362"),(0,l.kt)("p",null,"java byte \u7684\u8303\u56f4\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"-128-127"),"\uff0c\u800c golang byte \u662f uint8 \u7684\u522b\u540d\uff0c\u8303\u56f4\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"0-255"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'func javaByteToGoByte(r rune) byte {\n    if r < -128 || r > 127 {\n        panic("\u8d85\u51fabyte \u8303\u56f4")\n    }\n    if r < 0 {\n        return byte(256 + r)\n    }\n    return byte(r)\n}\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5b9e\u9645\u4f7f\u7528\u65e0\u9700\u5982\u6b64\u9ebb\u70e6\uff0c\u76f4\u63a5",(0,l.kt)("inlineCode",{parentName:"p"},"b := byte(n)"),"\u5373\u53ef")),(0,l.kt)("h2",{id:"\u6d6e\u70b9\u6570"},"\u6d6e\u70b9\u6570"),(0,l.kt)("p",null,"\u6d6e\u70b9\u7c7b\u578b\u5305\u62ec\u4e24\u79cd\uff0c\u5206\u522b\u662f float32 \u548c float64\u3002",(0,l.kt)("strong",{parentName:"p"},"\u6d6e\u70b9\u6570\u5b57\u9762\u91cf\u4f1a\u88ab\u81ea\u52a8\u63a8\u65ad\u4e3a float64")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"f := 10.0   // \u81ea\u52a8\u63a8\u65ad\u4e3a float64\n")),(0,l.kt)("p",null,"\u5f53\u5bf9\u6d6e\u70b9\u6570\u8fdb\u884c\u6bd4\u8f83\u8fd0\u7b97\u65f6\uff0c\u4e0d\u80fd\u76f4\u63a5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"==")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"!="),"\uff0c\u7ed3\u679c\u4f1a\u4e0d\u7a33\u5b9a\u3002\u5e94\u8be5\u4f7f\u7528 math \u6807\u51c6\u5e93\u3002"),(0,l.kt)("h2",{id:"\u590d\u6570"},"\u590d\u6570"),(0,l.kt)("p",null,"\u590d\u6570\u7c7b\u578b\u5305\u62ec\u4e24\u79cd\uff0c\u5206\u522b\u662f complex64 \u548c complex128\u3002"),(0,l.kt)("p",null,"\u64cd\u4f5c\u590d\u6570\u7684\u5185\u7f6e\u51fd\u6570\u4e00\u5171\u6709 3 \u4e2a\uff0c\u5206\u522b\u662f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"complex"),"\uff1a\u6784\u9020\u4e00\u4e2a\u590d\u6570\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"real"),"\uff1a\u83b7\u53d6\u590d\u6570\u7684\u5b9e\u90e8\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"imag"),"\uff1a\u83b7\u53d6\u590d\u6570\u7684\u865a\u90e8\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"// \u590d\u6570\nvar x complex64 = 3 + 5i\nvar y complex128 = complex(3.5, 10)\n// \u5206\u522b\u6253\u5370\u5b9e\u90e8\u548c\u865a\u90e8\nfmt.Println(real(x), imag(x)) // \u8f93\u51fa 3 5\nfmt.Println(real(y), imag(y)) // \u8f93\u51fa 3.5 10\n")),(0,l.kt)("h2",{id:"\u5e03\u5c14\u503c"},"\u5e03\u5c14\u503c"),(0,l.kt)("p",null,"\u5e03\u5c14\u7c7b\u578b\u7684\u5173\u952e\u5b57\u662f bool\uff0c\u6709\u4e24\u4e2a\u503c\uff0c\u5206\u522b\u662f\uff1a true \u548c false\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"ok := true\nfmt.Println(ok)\n")),(0,l.kt)("p",null,"\u5e03\u5c14\u578b\u548c\u6574\u578b\u4e0d\u80fd\u76f8\u4e92\u8f6c\u6362\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"var e bool\ne = bool(1) // \u62a5\u9519  cannot convert 1 (type untyped int) to type bool\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"if")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"for")," \u8bed\u53e5\u7684\u6761\u4ef6\u90e8\u5206\u4e00\u5b9a\u662f\u5e03\u5c14\u7c7b\u578b\u7684\u503c\u6216\u8868\u8fbe\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'m := 1\n// if m { // \u62a5\u9519 non-bool m (type int) used as if condition\n//  fmt.Println("is true")\n// }\nif m == 1 {\n    fmt.Println("m is 1")\n}\n')),(0,l.kt)("h2",{id:"\u5b57\u7b26\u4e32"},"\u5b57\u7b26\u4e32"),(0,l.kt)("p",null,"\u5b57\u7b26\u4e32\u5173\u952e\u5b57\u662f string\uff0c\u4e5f\u5c5e\u4e8e\u4e00\u79cd\u57fa\u672c\u7c7b\u578b\u3002\u5b57\u7b26\u4e32\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u5b57\u9762\u91cf\u6765\u521d\u59cb\u5316\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// \u5b57\u7b26\u4e32\ns1 := "hello"\ns2 := "world"\n// \u5b57\u7b26\u4e32\u62fc\u63a5\ns3 := s1 + s2\nfmt.Println(s3)\n\n// \u53d6\u5b57\u7b26\u4e32\u957f\u5ea6\nfmt.Println(len(s3))\n\n // \u53d6\u5355\u4e2a\u5b57\u7b26\nfmt.Println(s3[4])\n\n // \u5b57\u7b26\u4e32\u5207\u7247\nfmt.Println(s3[2:4])\nfmt.Println(s3[:4])\nfmt.Println(s3[2:])\nfmt.Println(s3[:])\n')),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u5b57\u7b26\u4e32\u662f\u4e0d\u53ef\u4fee\u6539\u7684\uff0c\u6240\u4ee5\u5982\u679c\u7ed9\u5b57\u7b26\u4e32\u8d4b\u503c\u7684\u8bdd\uff0c\u4f1a\u62a5\u9519\uff1a"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-go"},' // \u4fee\u6539\u62a5\u9519\ns3[0] = "H" // cannot assign to s3[0] (strings are immutable)\n'))),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"`")," \u5b9a\u4e49\u4e0d\u505a\u8f6c\u4e49\u7684\u539f\u59cb\u5b57\u7b26\u4e32\uff0c\u652f\u6301\u6362\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"// \u539f\u59cb\u5b57\u7b26\u4e32\ns := `row1\\r\\n\nrow2`\nfmt.Println(s)\n")),(0,l.kt)("h3",{id:"\u904d\u5386\u53ca-rune"},"\u904d\u5386\u53ca rune"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},' s4 := "hello \u4e16\u754c"\n\n// \u904d\u5386\u5b57\u8282\u6570\u7ec4\nfor i := 0; i < len(s4); i++ {\n    fmt.Println(i, s4[i])\n}\n\n// \u8f93\u51fa\n// 0 104\n// ...\n// 11 140\n\n// \u904d\u5386 rune \u6570\u7ec4\nfor i, v := range s4 {\n    fmt.Println(i, v)\n}\n\n// \u8f93\u51fa\n// 0 104\n// ...\n// 9 30028\n')),(0,l.kt)("p",null,"\u4ece\u7ed3\u679c\u53ef\u4ee5\u770b\u51fa\u4e24\u8005\u7684\u533a\u522b\uff0c\u7b2c\u4e00\u79cd\u662f\u4ee5\u5b57\u8282\u6570\u7ec4\u65b9\u5f0f\u904d\u5386\uff1b\u7b2c\u4e8c\u79cd\u662f\u4ee5 Unicode \u5b57\u7b26\u65b9\u5f0f\u904d\u5386\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee5\u5b57\u8282\u6570\u7ec4\u65b9\u5f0f\u904d\u5386\uff0c\u5b57\u7b26\u7c7b\u578b\u662f byte\uff0c\u957f\u5ea6\u662f 1\u3002\u867d\u7136\u5b57\u7b26\u4e32\u76f4\u89c2\u4e0a\u770b\u957f\u5ea6\u662f 8\uff0c\u4f46\u4e2d\u6587\u5b57\u7b26\u5728 UTF-8 \u7f16\u7801\u4e2d\u5360 3 \u4e2a\u5b57\u7b26\uff0c\u6240\u4ee5\u603b\u957f\u5ea6\u662f 12\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4ee5 Unicode \u65b9\u5f0f\u904d\u5386\uff0c\u5b57\u7b26\u7c7b\u578b\u662f rune\u3002")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Go \u4e2d\u652f\u6301\u4e24\u79cd\u5b57\u7b26\u7c7b\u578b\uff0c\u4e00\u4e2a\u662f byte\uff0cuint8 \u7684\u522b\u540d\uff0c\u8868\u793a UTF-8 \u5b57\u7b26\u4e32\u7684\u5355\u4e2a\u5b57\u8282\u7684\u503c\uff1b\u53e6\u4e00\u4e2a\u662f rune\uff0cint32 \u7684\u522b\u540d\uff0c\u8868\u793a\u5355\u4e2a Unicode \u5b57\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},"Go \u7684\u6e90\u6587\u4ef6\u662f\u6309 UTF-8 \u7f16\u7801\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u5728\u9009\u62e9\u7f16\u7801\u683c\u5f0f\u4e0a\u4e00\u5b9a\u8981\u9009 UTF-8\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u6709\u4e00\u4e9b\u83ab\u540d\u5176\u5999\u7684\u9519\u8bef\u51fa\u73b0\u3002"))),(0,l.kt)("h3",{id:"\u5b57\u7b26\u4e32\u64cd\u4f5c"},"\u5b57\u7b26\u4e32\u64cd\u4f5c"),(0,l.kt)("p",null,"\u5b57\u7b26\u4e32\u64cd\u4f5c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"strings")," \u5305"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'strings.Index(ks, "[") == 0\nstrings.Split(ksr, ",")\nstrings.TrimSpace(sa[i])\nstrings.Join([]string{"hello", "world"}, "/")\nstrings.Replace("hello world", "l", "L", 2)\n')),(0,l.kt)("h3",{id:"\u5b57\u7b26\u4e32\u4e0e\u6570\u5b57"},"\u5b57\u7b26\u4e32\u4e0e\u6570\u5b57"),(0,l.kt)("p",null,"\u64cd\u4f5c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"strconv")," \u5305"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'i, _ := strconv.Atoi("-100")\nf, _ := strconv.ParseFloat("3.1415926", 64)\n')))}d.isMDXComponent=!0}}]);