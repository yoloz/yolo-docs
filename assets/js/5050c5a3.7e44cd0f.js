"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[3987],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={},l=void 0,i={unversionedId:"golang/\u7f16\u7801\u7ec6\u8282",id:"golang/\u7f16\u7801\u7ec6\u8282",title:"\u7f16\u7801\u7ec6\u8282",description:"\u5207\u7247\u64cd\u4f5c",source:"@site/docs/golang/\u7f16\u7801\u7ec6\u8282.md",sourceDirName:"golang",slug:"/golang/\u7f16\u7801\u7ec6\u8282",permalink:"/docs/golang/\u7f16\u7801\u7ec6\u8282",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/golang/\u7f16\u7801\u7ec6\u8282.md",tags:[],version:"current",lastUpdatedAt:1681895728,formattedLastUpdatedAt:"2023\u5e744\u670819\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7c7b\u578b\u5904\u7406",permalink:"/docs/golang/\u7c7b\u578b\u5904\u7406"},next:{title:"\u8bfb\u53d6\u8f93\u5165",permalink:"/docs/golang/\u8bfb\u53d6\u8f93\u5165"}},p={},s=[{value:"\u5207\u7247\u64cd\u4f5c",id:"\u5207\u7247\u64cd\u4f5c",level:2},{value:"java \u4e2d byte \u8f6c\u6362",id:"java-\u4e2d-byte-\u8f6c\u6362",level:2},{value:"\u5b57\u7b26\u4e32\u64cd\u4f5c",id:"\u5b57\u7b26\u4e32\u64cd\u4f5c",level:2},{value:"\u5b57\u7b26\u4e32\u4e0e\u6570\u5b57",id:"\u5b57\u7b26\u4e32\u4e0e\u6570\u5b57",level:3},{value:"map \u64cd\u4f5c",id:"map-\u64cd\u4f5c",level:2},{value:"list \u64cd\u4f5c",id:"list-\u64cd\u4f5c",level:2},{value:"map \u4e0e json",id:"map-\u4e0e-json",level:2}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5207\u7247\u64cd\u4f5c"},"\u5207\u7247\u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// \u521d\u59cb\u5316\nvar keys = make([]byte, len(sa))\n\n//\u5c55\u5f00\nupsql := fmt.Sprintf(ustr, m...)\n\n// Sprintf formats according to a format specifier and returns the resulting string.\nfunc Sprintf(format string, a ...any) string {\n// ...\nreturn ""\n// \u53c2\u6570a \u7c7b\u578bany,\u5982\u6b64\u8c03\u7528\u6b64\u65b9\u6cd5\u7684\u5207\u7247\u9700\u8981\u521d\u59cb\u5316\u4e3ainterface,\u5373m := make([]interface{}, count)\uff0c\u4e3a\u5177\u4f53\u7c7b\u578b\u4f1a\u9519\u8bef\n}\n\n')),(0,a.kt)("h2",{id:"java-\u4e2d-byte-\u8f6c\u6362"},"java \u4e2d byte \u8f6c\u6362"),(0,a.kt)("p",null,"java byte \u7684\u8303\u56f4\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"-128-127"),"\uff0c\u800c golang byte \u662f uint8 \u7684\u522b\u540d\uff0c\u8303\u56f4\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"0-255"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func javaByteToGoByte(r rune) byte {\n    if r < -128 || r > 127 {\n        panic("\u8d85\u51fabyte \u8303\u56f4")\n    }\n    if r < 0 {\n        return byte(256 + r)\n    }\n    return byte(r)\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5b9e\u9645\u4f7f\u7528\u65e0\u9700\u5982\u6b64\u9ebb\u70e6\uff0c\u76f4\u63a5",(0,a.kt)("inlineCode",{parentName:"p"},"b := byte(n)"),"\u5373\u53ef")),(0,a.kt)("h2",{id:"\u5b57\u7b26\u4e32\u64cd\u4f5c"},"\u5b57\u7b26\u4e32\u64cd\u4f5c"),(0,a.kt)("p",null,"\u5b57\u7b26\u4e32\u64cd\u4f5c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"strings")," \u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'strings.Index(ks, "[") == 0\nstrings.Split(ksr, ",")\nstrings.TrimSpace(sa[i])\nstrings.Join([]string{"hello", "world"}, "/")\nstrings.Replace("hello world", "l", "L", 2)\n')),(0,a.kt)("h3",{id:"\u5b57\u7b26\u4e32\u4e0e\u6570\u5b57"},"\u5b57\u7b26\u4e32\u4e0e\u6570\u5b57"),(0,a.kt)("p",null,"\u64cd\u4f5c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"strconv")," \u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'i, _ := strconv.Atoi("-100")\nf, _ := strconv.ParseFloat("3.1415926", 64)\n')),(0,a.kt)("h2",{id:"map-\u64cd\u4f5c"},"map \u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'//\u521d\u59cb\u5316\nm := make(map[string]interface{}, 5)\n//put\nm [ "Google" ] = "\u8c37\u6b4c"\nm [ "Runoob" ] = "\u83dc\u9e1f\u6559\u7a0b"\nm [ "Baidu" ] = "\u767e\u5ea6"\nm [ "Wiki" ] = "\u7ef4\u57fa\u767e\u79d1"\n//remove\ndelete(m, "Baidu")\n// \u904d\u5386\nfor k, v := range m {\n    fmt.Printf("key=%s, value=%d\\n", k, v)\n}\n')),(0,a.kt)("h2",{id:"list-\u64cd\u4f5c"},"list \u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// \u521d\u59cb\u5316\nvar l list.List\n// add\nl.PushFront("123")\ne := l.PushBack("234")\n// remove\nl.Remove(e)\n//\u904d\u5386\nfor i := l.Front(); i != nil; i = i.Next() {\n    fmt.Println(i.Value)\n}\n')),(0,a.kt)("h2",{id:"map-\u4e0e-json"},"map \u4e0e json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"\nfunc MapToJson(param map[string]interface{}) string{\n    dataType , _ := json.Marshal(param)\n    dataString := string(dataType)\n    return dataString\n}\n\nfunc JsonToMap(str string) map[string]interface{} {\n    var tempMap map[string]interface{}\n    err := json.Unmarshal([]byte(str), &tempMap)\n    if err != nil {\n        panic(err)\n    }\n    return tempMap\n}\n")))}m.isMDXComponent=!0}}]);