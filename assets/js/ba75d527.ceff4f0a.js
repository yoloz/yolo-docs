"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[8954],{3905:(e,t,a)=>{a.d(t,{Zo:()=>g,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},g=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,g=m(e,["components","mdxType","originalType","parentName"]),d=i(a),c=o,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||r;return a?n.createElement(k,l(l({ref:t},g),{},{components:a})):n.createElement(k,l({ref:t},g))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=c;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[d]="string"==typeof e?e:o,l[1]=m;for(var i=2;i<r;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6480:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>m,toc:()=>i});var n=a(7462),o=(a(7294),a(3905));const r={},l=void 0,m={unversionedId:"golang/\u7248\u672c\u4f9d\u8d56",id:"golang/\u7248\u672c\u4f9d\u8d56",title:"\u7248\u672c\u4f9d\u8d56",description:"go.dev \u662f go \u5b98\u65b9\u56e2\u961f\u4e8e 2019 \u5e74 11 \u6708\u4e0a\u7ebf\u7684\u96c6\u5408 go \u5f00\u53d1\u8d44\u6e90\u7684\u7f51\u7ad9\uff0c\u5305\u62ec\u4e00\u4e9b\u5b66\u4e60\u8bfe\u7a0b\u548c\u4e00\u4e9b go \u7684\u6848\u4f8b\uff0c\u5f53\u7136\u6700\u91cd\u8981\u7684\u5c31\u662f\u63d0\u4f9b\u4e86 go \u7684\u7b2c\u4e09\u65b9\u5305\u7684\u68c0\u7d22\u529f\u80fd\u3002\u6ca1\u9519\uff0c\u4ed6\u5c31\u662f\u7528\u6765\u53d6\u4ee3\u539f\u6765\u7684godoc.org\u7684\uff0c\u73b0\u5728 godoc.org \u4f1a\u8df3\u8f6c\u5230 pkg.go.dev\u3002",source:"@site/docs/golang/\u7248\u672c\u4f9d\u8d56.md",sourceDirName:"golang",slug:"/golang/\u7248\u672c\u4f9d\u8d56",permalink:"/docs/golang/\u7248\u672c\u4f9d\u8d56",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/golang/\u7248\u672c\u4f9d\u8d56.md",tags:[],version:"current",lastUpdatedAt:1686217402,formattedLastUpdatedAt:"2023\u5e746\u67088\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6d41\u7a0b\u5173\u952e\u5b57",permalink:"/docs/golang/\u6d41\u7a0b\u5173\u952e\u5b57"},next:{title:"\u73af\u5883\u53c2\u6570\u914d\u7f6e",permalink:"/docs/golang/\u73af\u5883\u53c2\u6570\u914d\u7f6e"}},p={},i=[{value:"go.mod",id:"gomod",level:2},{value:"go.sum",id:"gosum",level:2},{value:"\u5168\u5c40\u7f13\u5b58",id:"\u5168\u5c40\u7f13\u5b58",level:2},{value:"get",id:"get",level:2},{value:"\u53d1\u5e03 module",id:"\u53d1\u5e03-module",level:2},{value:"\u53d1\u5e03 v2 \u53ca\u66f4\u9ad8\u7248\u672c",id:"\u53d1\u5e03-v2-\u53ca\u66f4\u9ad8\u7248\u672c",level:3},{value:"\u4f7f\u7528 tag \u6807\u8bb0\u7248\u672c",id:"\u4f7f\u7528-tag-\u6807\u8bb0\u7248\u672c",level:2}],g={toc:i},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"go.dev",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://go.dev/"},"go.dev")," \u662f go \u5b98\u65b9\u56e2\u961f\u4e8e 2019 \u5e74 11 \u6708\u4e0a\u7ebf\u7684\u96c6\u5408 go \u5f00\u53d1\u8d44\u6e90\u7684\u7f51\u7ad9\uff0c\u5305\u62ec\u4e00\u4e9b\u5b66\u4e60\u8bfe\u7a0b\u548c\u4e00\u4e9b go \u7684\u6848\u4f8b\uff0c\u5f53\u7136\u6700\u91cd\u8981\u7684\u5c31\u662f\u63d0\u4f9b\u4e86 go \u7684\u7b2c\u4e09\u65b9\u5305\u7684\u68c0\u7d22\u529f\u80fd\u3002\u6ca1\u9519\uff0c\u4ed6\u5c31\u662f\u7528\u6765\u53d6\u4ee3\u539f\u6765\u7684",(0,o.kt)("a",{parentName:"p",href:"http://godoc.org"},"godoc.org"),"\u7684\uff0c\u73b0\u5728 godoc.org \u4f1a\u8df3\u8f6c\u5230 pkg.go.dev\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u7f16\u5199\u53d1\u5e03\u7684 go module \u53ef\u4ee5\u5230",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/"},"pkg.go.dev"),"\u67e5\u770b\u3002")),(0,o.kt)("h2",{id:"gomod"},"go.mod"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"module github.com/eddycjy/module-repo\n\ngo 1.13\n\nrequire (\n    example.com/apple v0.1.2\n    example.com/banana v1.2.3\n    example.com/banana/v2 v2.3.4\n    example.com/pear // indirect\n    example.com/strawberry // incompatible\n)\n\nexclude example.com/banana v1.2.4\nreplace example.com/apple v0.1.2 => example.com/fried v0.1.0\nreplace example.com/banana => example.com/fish\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"module\uff1a\u7528\u4e8e\u5b9a\u4e49\u5f53\u524d\u9879\u76ee\u7684\u6a21\u5757\u8def\u5f84\u3002"),(0,o.kt)("li",{parentName:"ul"},"go\uff1a\u7528\u4e8e\u6807\u8bc6\u5f53\u524d\u6a21\u5757\u7684 Go \u8bed\u8a00\u7248\u672c\uff0c\u503c\u4e3a\u521d\u59cb\u5316\u6a21\u5757\u65f6\u7684\u7248\u672c\u3002"),(0,o.kt)("li",{parentName:"ul"},"require\uff1a\u7528\u4e8e\u8bbe\u7f6e\u4e00\u4e2a\u7279\u5b9a\u7684\u6a21\u5757\u7248\u672c\u3002"),(0,o.kt)("li",{parentName:"ul"},"exclude\uff1a\u7528\u4e8e\u4ece\u4f7f\u7528\u4e2d\u6392\u9664\u4e00\u4e2a\u7279\u5b9a\u7684\u6a21\u5757\u7248\u672c\u3002"),(0,o.kt)("li",{parentName:"ul"},"replace\uff1a\u7528\u4e8e\u5c06\u4e00\u4e2a\u6a21\u5757\u7248\u672c\u66ff\u6362\u4e3a\u53e6\u5916\u4e00\u4e2a\u6a21\u5757\u7248\u672c\u3002")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"indirect \u6807\u8bc6\u8868\u793a\u8be5\u6a21\u5757\u4e3a\u95f4\u63a5\u4f9d\u8d56\uff0c\u4e5f\u5c31\u662f\u5728\u5f53\u524d\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684 import \u8bed\u53e5\u4e2d\uff0c\u5e76\u6ca1\u6709\u53d1\u73b0\u8fd9\u4e2a\u6a21\u5757\u7684\u660e\u786e\u5f15\u7528;"))),(0,o.kt)("h2",{id:"gosum"},"go.sum"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"github.com/eddycjy/mquote v0.0.1 h1:4QHXKo7J8a6J/k8UA6CiHhswJQs0sm2foAQQUq8GFHM=\ngithub.com/eddycjy/mquote v0.0.1/go.mod h1:ZtlkDs7Mriynl7wsDQ4cU23okEtVYqHwl7F1eDh4qPg=\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"h1 hash \u662f Go modules \u5c06\u76ee\u6807\u6a21\u5757\u7248\u672c\u7684 zip \u6587\u4ef6\u5f00\u5305\u540e\uff0c\u9488\u5bf9\u6240\u6709\u5305\u5185\u6587\u4ef6\u4f9d\u6b21\u8fdb\u884c hash\uff0c\u7136\u540e\u518d\u628a\u5b83\u4eec\u7684 hash \u7ed3\u679c\u6309\u7167\u56fa\u5b9a\u683c\u5f0f\u548c\u7b97\u6cd5\u7ec4\u6210\u603b\u7684 hash \u503c\u3002"),(0,o.kt)("li",{parentName:"ul"},"h1 hash \u548c go.mod hash \u4e24\u8005\uff0c\u8981\u4e0d\u5c31\u662f\u540c\u65f6\u5b58\u5728\uff0c\u8981\u4e0d\u5c31\u662f\u53ea\u5b58\u5728 go.mod hash\u3002\u5f53 Go \u8ba4\u4e3a\u80af\u5b9a\u7528\u4e0d\u5230\u67d0\u4e2a\u6a21\u5757\u7248\u672c\u7684\u65f6\u5019\u5c31\u4f1a\u7701\u7565\u5b83\u7684 h1 hash\uff0c\u5c31\u4f1a\u51fa\u73b0\u4e0d\u5b58\u5728 h1 hash\uff0c\u53ea\u5b58\u5728 go.mod hash \u7684\u60c5\u51b5\u3002")),(0,o.kt)("h2",{id:"\u5168\u5c40\u7f13\u5b58"},"\u5168\u5c40\u7f13\u5b58"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5c06\u6a21\u5757\u62c9\u53d6\u4e86\u4e0b\u6765\uff0c\u5176\u62c9\u53d6\u7684\u7ed3\u679c\u7f13\u5b58\u5728",(0,o.kt)("inlineCode",{parentName:"li"},"$GOPATH/pkg/mod"),"\u548c",(0,o.kt)("inlineCode",{parentName:"li"},"$GOPATH/pkg/sumdb"),"\u76ee\u5f55\u4e0b\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u540c\u4e00\u4e2a\u6a21\u5757\u7248\u672c\u7684\u6570\u636e\u53ea\u7f13\u5b58\u4e00\u4efd\uff0c\u6240\u6709\u5176\u5b83\u6a21\u5757\u5171\u4eab\u4f7f\u7528\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6e05\u7406\u6240\u6709\u5df2\u7f13\u5b58\u7684\u6a21\u5757\u7248\u672c\u6570\u636e\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"li"},"go clean -modcache"),"\u3002")),(0,o.kt)("h2",{id:"get"},"get"),(0,o.kt)("p",null,"\u62c9\u53d6\u4fe1\u606f",(0,o.kt)("inlineCode",{parentName:"p"},"v0.0.0-20230331093846-9f85b597d9a0"),"\uff1a\u7248\u672c\u4fe1\u606f-\u6240\u62c9\u53d6\u7248\u672c\u7684 commit \u65f6\u95f4-\u6240\u62c9\u53d6\u7248\u672c\u7684 commit \u54c8\u5e0c"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"go get"),(0,o.kt)("td",{parentName:"tr",align:null},"\u62c9\u53d6\u4f9d\u8d56\uff0c\u4f1a\u8fdb\u884c\u6307\u5b9a\u6027\u62c9\u53d6\uff08\u66f4\u65b0\uff09\uff0c\u5e76\u4e0d\u4f1a\u66f4\u65b0\u6240\u4f9d\u8d56\u7684\u5176\u5b83\u6a21\u5757\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"go get -u"),(0,o.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u73b0\u6709\u7684\u4f9d\u8d56\uff0c\u4f1a\u5f3a\u5236\u66f4\u65b0\u5b83\u6240\u4f9d\u8d56\u7684\u5176\u5b83\u5168\u90e8\u6a21\u5757\uff0c\u4e0d\u5305\u62ec\u81ea\u8eab\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"go get -u -t ./..."),(0,o.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u6240\u6709\u76f4\u63a5\u4f9d\u8d56\u548c\u95f4\u63a5\u4f9d\u8d56\u7684\u6a21\u5757\u7248\u672c\uff0c\u5305\u62ec\u5355\u5143\u6d4b\u8bd5\u4e2d\u7528\u5230\u7684\u3002")))),(0,o.kt)("p",null,"\u9009\u62e9\u5177\u4f53\u7248\u672c\u5982\u4e0b\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"go get golang.org/x/text@latest"),(0,o.kt)("td",{parentName:"tr",align:null},"\u62c9\u53d6\u6700\u65b0\u7684\u7248\u672c\uff0c\u82e5\u5b58\u5728 tag\uff0c\u5219\u4f18\u5148\u4f7f\u7528\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"go get golang.org/x/text@master"),(0,o.kt)("td",{parentName:"tr",align:null},"\u62c9\u53d6 master \u5206\u652f\u7684\u6700\u65b0 commit\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"go get golang.org/x/",(0,o.kt)("a",{parentName:"td",href:"mailto:text@v0.3.2"},"text@v0.3.2")),(0,o.kt)("td",{parentName:"tr",align:null},"\u62c9\u53d6 tag \u4e3a v0.3.2 \u7684 commit\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"go get golang.org/x/text@342b2e"),(0,o.kt)("td",{parentName:"tr",align:null},"\u62c9\u53d6 hash \u4e3a 342b231 \u7684 commit\uff0c\u6700\u7ec8\u4f1a\u88ab\u8f6c\u6362\u4e3a v0.3.2\u3002")))),(0,o.kt)("h2",{id:"\u53d1\u5e03-module"},"\u53d1\u5e03 module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ go mod init moduleName\n#\u5982\u679c\u5bf9\u5916\u53d1\u5e03\u4f7f\u7528,\u4f7f\u7528\u5168\u8def\u5f84\n$ go mod init github.com/{user}/moduleName\n$ go help mod #\u67e5\u770bmod\u5177\u4f53\u7528\u6cd5\n\n$ go help get #\u67e5\u770bget\u7528\u6cd5\n\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'\u8bed\u4e49\u5316\u7248\u672c:\u5047\u8bbe\u6211\u4eec\u7684\u7248\u672c\u53f7\u662f v1.2.3,\u5176\u7248\u672c\u683c\u5f0f\u4e3a"\u4e3b\u7248\u672c\u53f7.\u6b21\u7248\u672c\u53f7.\u4fee\u8ba2\u53f7"\uff0c\u7248\u672c\u53f7\u7684\u9012\u589e\u89c4\u5219\u5982\u4e0b\uff1a'),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u4e3b\u7248\u672c\u53f7\uff1a\u5f53\u4f60\u505a\u4e86\u4e0d\u517c\u5bb9\u7684 API \u4fee\u6539\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6b21\u7248\u672c\u53f7\uff1a\u5f53\u4f60\u505a\u4e86\u5411\u4e0b\u517c\u5bb9\u7684\u529f\u80fd\u6027\u65b0\u589e\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4fee\u8ba2\u53f7\uff1a\u5f53\u4f60\u505a\u4e86\u5411\u4e0b\u517c\u5bb9\u7684\u95ee\u9898\u4fee\u6b63\u3002")),(0,o.kt)("p",{parentName:"admonition"},"\u5148\u884c\u7248\u672c\u53f7\u6216\u7279\u6b8a\u60c5\u51b5\uff0c\u53ef\u4ee5\u5c06\u7248\u672c\u4fe1\u606f\u8ffd\u52a0\u5230\u201c\u4e3b\u7248\u672c\u53f7.\u6b21\u7248\u672c\u53f7.\u4fee\u8ba2\u53f7\u201d\u7684\u540e\u9762\uff0c\u4f5c\u4e3a\u5ef6\u4f38\uff0c\u5982\uff1av1.2.3-pre")),(0,o.kt)("h3",{id:"\u53d1\u5e03-v2-\u53ca\u66f4\u9ad8\u7248\u672c"},"\u53d1\u5e03 v2 \u53ca\u66f4\u9ad8\u7248\u672c"),(0,o.kt)("p",null,"\u4e3a\u4e86\u5f00\u59cb\u5f00\u53d1 github.com/{user}/moduleName \u7684 v2\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 v2/ \u76ee\u5f55\uff0c\u5e76\u590d\u5236\u6211\u4eec\u7684\u5305\u5230\u8be5\u76ee\u5f55\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#\u5f53\u524d\u5728module\u76ee\u5f55\u4e2d\n$ mkdir v2\n#\u5c06module\u4e2d\u7684go\u6587\u4ef6\u62f7\u8d1d\u4e00\u4efd\u5230v2\n$ cp -r *.go v2 #\u6b64\u62f7\u8d1d\u672a\u8003\u8651\u591a\u5305(\u76ee\u5f55)\n#\u590d\u5236\u5f53\u524d go.mod \u6587\u4ef6\u5e76\u6dfb\u52a0 v2/ \u540e\u7f00\u5230\u6a21\u5757\u8def\u5f84\u6765\u521b\u5efa\u4e00\u4e2a v2 go.mod \u6587\u4ef6\n$ cp go.mod v2/go.mod\n$ go mod edit -module github.com/{user}/moduleName/v2 v2/go.mod\n#\u540e\u7eed\u5c31\u53ef\u4ee5\u5f00\u53d1v2\u7248\u672c\u4e86\n")),(0,o.kt)("h2",{id:"\u4f7f\u7528-tag-\u6807\u8bb0\u7248\u672c"},"\u4f7f\u7528 tag \u6807\u8bb0\u7248\u672c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ git commit -m "mymodule: changes for v0.1.0"\n$ git tag v0.1.0\n$ git push origin v0.1.0\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"go.dev \u7684 about \u4e2d\u8bf4\u660e:\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"proxy.golang.org"),"\u4e0b\u8f7d\u5305\u7684\u65f6\u5019\uff0cmodule \u624d\u4f1a\u81ea\u52a8\u540c\u6b65\u5230 pkg.go.dev\u3002\u5373\u63d0\u4ea4\u540e\u67e5\u8be2\u4e0d\u5230\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"go get"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"go list"),"\u89e6\u53d1\u4e0b\u8f7d\uff0c\u5c31\u53ef\u4ee5\u5728 pkg.go.dev \u67e5\u770b\u5230\u63d0\u4ea4\u7684 module\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"go list -m example.com/mymodule@v0.1.0"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"go get example.com/mymodule@v0.1.0"))),(0,o.kt)("p",null,"\u5b9e\u9645\u4e0a Go modules \u5728\u4e3b\u7248\u672c\u53f7\u4e3a v0 \u548c v1 \u7684\u60c5\u51b5\u4e0b\u7701\u7565\u4e86\u7248\u672c\u53f7\uff0c\u800c\u5728\u4e3b\u7248\u672c\u53f7\u4e3a v2 \u53ca\u4ee5\u4e0a\u5219\u9700\u8981\u660e\u786e\u6307\u5b9a\u51fa\u4e3b\u7248\u672c\u53f7\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u51b2\u7a81\u5176 tag \u4e0e\u6a21\u5757\u5bfc\u5165\u8def\u5f84\u7684\u5927\u81f4\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"tag"),(0,o.kt)("th",{parentName:"tr",align:null},"\u6a21\u5757\u5bfc\u5165\u8def\u5f84"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"v0.x.x"),(0,o.kt)("td",{parentName:"tr",align:null},"github.com/{user}/moduleName")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"v1.x.x"),(0,o.kt)("td",{parentName:"tr",align:null},"github.com/{user}/moduleName")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"v2.x.x"),(0,o.kt)("td",{parentName:"tr",align:null},"github.com/{user}/moduleName/v2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"v3.x.x"),(0,o.kt)("td",{parentName:"tr",align:null},"github.com/{user}/moduleName/v3")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u7b80\u5355\u6765\u8bb2\uff0c\u5c31\u662f\u4e3b\u7248\u672c\u53f7\u4e3a v0 \u548c v1 \u65f6\uff0c\u4e0d\u9700\u8981\u5728\u6a21\u5757\u5bfc\u5165\u8def\u5f84\u5305\u542b\u4e3b\u7248\u672c\u7684\u4fe1\u606f\uff0c\u800c\u5728 v1 \u7248\u672c\u4ee5\u540e\uff0c\u4e5f\u5c31\u662f v2 \u8d77\u5fc5\u987b\u8981\u5728\u6a21\u5757\u7684\u5bfc\u5165\u8def\u5f84\u672b\u5c3e\u52a0\u4e0a\u4e3b\u7248\u672c\u53f7\uff0c\u5f15\u7528\u65f6\u5c31\u9700\u8981\u8c03\u6574\u4e3a\u5982\u4e0b\u683c\u5f0f\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/{user}/moduleName/v2"\n)\n'))))}u.isMDXComponent=!0}}]);