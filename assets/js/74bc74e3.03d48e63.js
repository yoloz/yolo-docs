"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[8536],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>d});var t=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),g=o,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||r;return a?t.createElement(d,i(i({ref:n},c),{},{components:a})):t.createElement(d,i({ref:n},c))}));function d(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2671:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var t=a(7462),o=(a(7294),a(3905));const r={},i=void 0,l={unversionedId:"golang/\u6784\u5efa\u53ef\u6267\u884c\u6587\u4ef6",id:"golang/\u6784\u5efa\u53ef\u6267\u884c\u6587\u4ef6",title:"\u6784\u5efa\u53ef\u6267\u884c\u6587\u4ef6",description:"Golang \u652f\u6301\u5728\u4e00\u4e2a\u5e73\u53f0\u4e0b\u751f\u6210\u53e6\u4e00\u4e2a\u5e73\u53f0\u53ef\u6267\u884c\u7a0b\u5e8f\u7684\u4ea4\u53c9\u7f16\u8bd1\u529f\u80fd\u3002",source:"@site/docs/golang/\u6784\u5efa\u53ef\u6267\u884c\u6587\u4ef6.md",sourceDirName:"golang",slug:"/golang/\u6784\u5efa\u53ef\u6267\u884c\u6587\u4ef6",permalink:"/docs/golang/\u6784\u5efa\u53ef\u6267\u884c\u6587\u4ef6",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/golang/\u6784\u5efa\u53ef\u6267\u884c\u6587\u4ef6.md",tags:[],version:"current",lastUpdatedAt:1689307169,formattedLastUpdatedAt:"2023\u5e747\u670814\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6784\u5efa\u52a8\u6001\u5e93",permalink:"/docs/golang/\u6784\u5efa\u52a8\u6001\u5e93"},next:{title:"\u6d41\u7a0b\u5173\u952e\u5b57",permalink:"/docs/golang/\u6d41\u7a0b\u5173\u952e\u5b57"}},s={},p=[{value:"Mac",id:"mac",level:2},{value:"Linux",id:"linux",level:2},{value:"Windows",id:"windows",level:2},{value:"\u7a0b\u5e8f\u6dfb\u52a0\u56fe\u6807\u548c\u7248\u672c\u4fe1\u606f",id:"\u7a0b\u5e8f\u6dfb\u52a0\u56fe\u6807\u548c\u7248\u672c\u4fe1\u606f",level:3},{value:"\u4f7f\u7528 windres",id:"\u4f7f\u7528-windres",level:3},{value:"\u8c03\u7528\u672c\u5730\u5305",id:"\u8c03\u7528\u672c\u5730\u5305",level:2}],c={toc:p},m="wrapper";function u(e){let{components:n,...a}=e;return(0,o.kt)(m,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Golang \u652f\u6301\u5728\u4e00\u4e2a\u5e73\u53f0\u4e0b\u751f\u6210\u53e6\u4e00\u4e2a\u5e73\u53f0\u53ef\u6267\u884c\u7a0b\u5e8f\u7684\u4ea4\u53c9\u7f16\u8bd1\u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"mac"},"Mac"),(0,o.kt)("p",null,"Mac \u4e0b\u7f16\u8bd1 Linux, Windows \u5e73\u53f0\u7684 64 \u4f4d\u53ef\u6267\u884c\u7a0b\u5e8f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build test.go\n$ CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build test.go\n")),(0,o.kt)("h2",{id:"linux"},"Linux"),(0,o.kt)("p",null,"Linux \u4e0b\u7f16\u8bd1 Mac, Windows \u5e73\u53f0\u7684 64 \u4f4d\u53ef\u6267\u884c\u7a0b\u5e8f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build test.go\n$ CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build test.go\n")),(0,o.kt)("h2",{id:"windows"},"Windows"),(0,o.kt)("p",null,"Windows \u4e0b\u7f16\u8bd1 Mac, Linux \u5e73\u53f0\u7684 64 \u4f4d\u53ef\u6267\u884c\u7a0b\u5e8f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ SET CGO_ENABLED=0 SET GOOS=darwin3 SET GOARCH=amd64 go build test.go\n$ SET CGO_ENABLED=0 SET GOOS=linux SET GOARCH=amd64 go build test.go\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u7f16\u8bd1 web \u7b49\u5de5\u7a0b\u9879\u76ee\uff0c\u76f4\u63a5 cd \u5230\u5de5\u7a0b\u76ee\u5f55\u4e0b\u76f4\u63a5\u6267\u884c\u4ee5\u4e0a\u547d\u4ee4"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"GOOS\uff1a\u76ee\u6807\u53ef\u6267\u884c\u7a0b\u5e8f\u8fd0\u884c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u652f\u6301 darwin\uff0cfreebsd\uff0clinux\uff0cwindows"),(0,o.kt)("li",{parentName:"ul"},"GOARCH\uff1a\u76ee\u6807\u53ef\u6267\u884c\u7a0b\u5e8f\u64cd\u4f5c\u7cfb\u7edf\u6784\u67b6\uff0c\u5305\u62ec 386\uff0camd64\uff0carm"),(0,o.kt)("li",{parentName:"ul"},"Golang version 1.5 \u4ee5\u524d\u7248\u672c\u5728\u9996\u6b21\u4ea4\u53c9\u7f16\u8bd1\u65f6\u8fd8\u9700\u8981\u914d\u7f6e\u4ea4\u53c9\u7f16\u8bd1\u73af\u5883(\u7565)"))),(0,o.kt)("h3",{id:"\u7a0b\u5e8f\u6dfb\u52a0\u56fe\u6807\u548c\u7248\u672c\u4fe1\u606f"},"\u7a0b\u5e8f\u6dfb\u52a0\u56fe\u6807\u548c\u7248\u672c\u4fe1\u606f"),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u6307\u5b9a\u7f16\u8bd1\u67d0\u4e2a go \u6587\u4ef6\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"go build -o main.exe main.go"),"(\u7b49\u540c",(0,o.kt)("inlineCode",{parentName:"li"},"go build main.go"),") \u8fd9\u6837\u662f\u4e0d\u4f1a\u5e26\u4e0a\u56fe\u6807\u7684\uff0c\u76f4\u63a5\u8fd9\u6837\u7f16\u8bd1",(0,o.kt)("inlineCode",{parentName:"li"},"go build -o main.exe"),";"),(0,o.kt)("li",{parentName:"ul"},"\u76ee\u5f55\u9664\u4e86 main.go \u8fd8\u6709\u5176\u4ed6.go \u6587\u4ef6,\u9700\u8981\u628a\u5176\u4ed6 go \u6587\u4ef6\u540e\u7f00\u6539\u6389(\u5982.go1);"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u591a\u4e2a syso \u6587\u4ef6,\u4fdd\u7559\u4e00\u4e2a\u4f60\u9700\u8981\u7528\u7684 syso \u6587\u4ef6,\u5176\u4ed6\u7684\u90fd\u6539\u6389\u540e\u7f00;"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9700\u8981\u5de5\u5177",(0,o.kt)("a",{parentName:"li",href:"https://github.com/josephspurrier/goversioninfo"},"goversioninfo"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/josephspurrier/goversioninfo/cmd/goversioninfo@latest\n# You can also use windres to create the syso file. The windres executable is available in either MinGW or tdm-gcc.\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5728 main.go \u4e2d\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"li"},"//go:generate goversioninfo"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"//go:generate goversioninfo\npackage main\n// ...\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u5728\u9879\u76ee\u76ee\u5f55\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u540d\u4e3a versioninfo.json,\u6a21\u677f\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://github.com/josephspurrier/goversioninfo/blob/master/testdata/json/explorer.json%EF%BC%8C%E9%87%8C%E9%9D%A2%E6%B7%BB%E5%8A%A0%60IconPath%60%EF%BC%8C%E5%A6%82%EF%BC%9A"},"https://github.com/josephspurrier/goversioninfo/blob/master/testdata/json/explorer.json\uff0c\u91cc\u9762\u6dfb\u52a0`IconPath`\uff0c\u5982\uff1a"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "IconPath": "logo.ico"\n}\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u7a0b\u5e8f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'PS C:\\envaware\\install\\win> go generate\nmain.go:1: running "goversioninfo": exec: "goversioninfo": executable file not found in %PATH%\n# ${GOPATH}/bin\u672a\u6dfb\u52a0\u5230%PATH%\nPS C:\\envaware\\install\\win> C:\\Users\\yoloz\\go\\bin\\goversioninfo.exe\n#\u751f\u6210resource.syso\nPS C:\\envaware\\install\\win> mv .\\resource.syso ..\\..\\src\\main\\\nPS C:\\envaware\\install\\win> cd ..\\..\\src\\main\\\nPS C:\\envaware\\src\\main> go build -o envaware.exe\nPS C:\\envaware\\src\\main> go build -o envaware.exe\n# envaware/src/main\n# C:\\Program Files\\Go\\pkg\\tool\\windows_amd64\\link.exe: running gcc failed: exit status 1\n# C:/Program Files/mingw64/bin/../lib/gcc/x86_64-w64-mingw32/8.1.0/../../../../x86_64-w64-mingw32/bin/ld.exe: i386 architecture of input file `C:\\Users\\yoloz\\AppData\\Local\\Temp\\go-link-547450908\\000000.o\' is incompatible with i386:x86-64 output\n# collect2.exe: error: ld returned 1 exit status\nPS C:\\envaware\\src\\main> del .\\resource.syso\nPS C:\\envaware\\src\\main> go build -o envaware.exe\n# \u5220\u9664resource.syso\u7f16\u8bd1\u6210\u529f\uff0cgogenerate\u751f\u6210\u7684syso\u6587\u4ef6\u662f\u672a\u9002\u914d64\u4f4d\n')),(0,o.kt)("h3",{id:"\u4f7f\u7528-windres"},"\u4f7f\u7528 windres"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("a",{parentName:"li",href:"https://github.com/josephspurrier/goversioninfo/blob/master/testdata/rc/%E5%85%B6%E4%B8%AD%E7%9A%84rc%E6%96%87%E4%BB%B6,%E7%94%9F%E6%88%90versioninfo.rc"},"https://github.com/josephspurrier/goversioninfo/blob/master/testdata/rc/\u5176\u4e2d\u7684rc\u6587\u4ef6,\u751f\u6210versioninfo.rc"),";"),(0,o.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u542f\u52a8\u811a\u672c windres.bat(\u5df2\u5b89\u88c5 MinGW \u6216 tdm-gcc):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bat"},"@ECHO OFF\n\nSET PATH=C:\\TDM-GCC-64\\bin;%PATH%\nREM SET PATH=C:\\mingw64\\bin;%PATH%\n\nwindres -i versioninfo.rc -O coff -o versioninfo.syso\n\nPAUSE\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u76f4\u63a5 powershell \u6267\u884c\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"windres -i versioninfo.rc -O coff -o versioninfo.syso"),",\u62a5\u9519\uff1a")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-log"},'PS C:\\envaware\\install\\win> windres -i versioninfo.rc -O coff -o versioninfo.syso\n\'C:\\Program\' \u4e0d\u662f\u5185\u90e8\u6216\u5916\u90e8\u547d\u4ee4\uff0c\u4e5f\u4e0d\u662f\u53ef\u8fd0\u884c\u7684\u7a0b\u5e8f\n\u6216\u6279\u5904\u7406\u6587\u4ef6\u3002\nC:\\Program Files\\mingw64\\bin\\windres.exe: preprocessing failed.\n\nPS C:\\envaware\\install\\win> "C:\\Program Files\\mingw64\\bin\\windres.exe" -i versioninfo.rc -O coff -o versioninfo.syso\n\u6240\u5728\u4f4d\u7f6e \u884c:1 \u5b57\u7b26: 44\n+ "C:\\Program Files\\mingw64\\bin\\windres.exe" -i versioninfo.rc -O coff  ...\n+                                            ~~\n\u8868\u8fbe\u5f0f\u6216\u8bed\u53e5\u4e2d\u5305\u542b\u610f\u5916\u7684\u6807\u8bb0\u201c-i\u201d\u3002\n...\n')),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"powershell \u6267\u884c bat \u6587\u4ef6\uff1a")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"PS C:\\envaware\\install\\win> .\\windres.bat\n\u8f93\u5165\u884c\u592a\u957f\u3002\n\u547d\u4ee4\u8bed\u6cd5\u4e0d\u6b63\u786e\u3002\n")),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"cmd \u76f4\u63a5\u6267\u884c\u547d\u4ee4(\u7ba1\u7406\u5458\u6253\u5f00\u6267\u884c\u4e00\u6837\u9519\u8bef)\uff1a")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"C:\\envaware\\install\\win>windres -i versioninfo.rc -O coff -o versioninfo.syso\n\u8f93\u5165\u884c\u592a\u957f\u3002\n\u547d\u4ee4\u8bed\u6cd5\u4e0d\u6b63\u786e\u3002\n")),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u53f3\u952e bat \u6587\u4ef6\u7ba1\u7406\u5458\u6267\u884c\uff1a")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcc: error: versioninfo.rc: No such file or directory\ngcc: warning: '-x c' after last input file has no effect\ngcc: fatal error: no input files\ncompilation terminated.\nwindres: preprocessing failed.\n\n\u4f7f\u7528\u76f8\u5bf9\u8def\u5f84`.\\versioninfo.rc`\u4e00\u6837\u627e\u4e0d\u5230\u6587\u4ef6\uff0c\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84\u53ef\u884c(`C:\\envaware\\install\\win\\versioninfo.rc`)\u3002\n"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6267\u884c bat \u6587\u4ef6\u540e\u751f\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"versioninfo.syso"),"\uff0c\u62f7\u8d1d\u5230 main.go \u76ee\u5f55\u4e0b\uff0c\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"go build -ldflags \u201c-H windowsgui\u201d -o envaware.exe")),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u540e\u7684 exe \u6587\u4ef6\u53f3\u51fb\u67e5\u770b\u5c5e\u6027-\u8be6\u7ec6\u4fe1\u606f\u4e2d(\u4e2d\u6587\u4e71\u7801),\u5c06 versioninfo.rc \u6587\u4ef6\u4ee5 gbk \u7f16\u7801\u4fdd\u5b58,\u91cd\u65b0\u751f\u6210 syso \u6587\u4ef6\u7f16\u8bd1\u5373\u53ef."),(0,o.kt)("li",{parentName:"ul"},'"Translation", 0x0409,0x04B0:\u82f1\u8bed(\u7f8e\u56fd)\uff0c0x0804,0x04B0:\u4e2d\u6587(\u7b80\u4f53\uff0c\u4e2d\u56fd)'))))),(0,o.kt)("h2",{id:"\u8c03\u7528\u672c\u5730\u5305"},"\u8c03\u7528\u672c\u5730\u5305"),(0,o.kt)("p",null,"\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},".\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 go.sum\n\u2514\u2500\u2500 main.go\n\u2514\u2500\u2500 psutil\n    \u251c\u2500\u2500 utils.go\n    \u251c\u2500\u2500 wrapcpu.go\n    \u2514\u2500\u2500 wrap_test.go\n")),(0,o.kt)("p",null,"\u5176\u4e2d main.go \u4e2d\u8c03\u7528\u672c\u5730\u5305"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "envaware/psutil"\n  // ...\n)\n// ...\n')),(0,o.kt)("p",null,"\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"go build"),"\u4f1a\u62a5\u9519\u627e\u4e0d\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"psutil.xxx"),",\u8c03\u6574\u7ed3\u6784\u5982\u4e0b(main.go \u4e5f\u53ef\u4ee5\u76f4\u63a5\u653e\u5230 src \u4e0b\uff0c\u65e0\u9700\u521b\u5efa main \u76ee\u5f55)\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},".\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 go.sum\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 main\n    \u2502   \u2514\u2500\u2500 main.go\n    \u2514\u2500\u2500 psutil\n        \u251c\u2500\u2500 utils.go\n        \u251c\u2500\u2500 wrapcpu.go\n        \u2514\u2500\u2500 wrap_test.go\n")),(0,o.kt)("p",null,"\u5176\u4e2d main.go \u4e2d\u8c03\u7528\u672c\u5730\u5305"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "envaware/src/psutil"\n  // ...\n)\n// ...\n')),(0,o.kt)("p",null,"\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"go build"),"\u5373\u53ef"))}u.isMDXComponent=!0}}]);