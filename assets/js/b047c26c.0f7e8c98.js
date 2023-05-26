"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[8967],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>g});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=r.createContext({}),s=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},u=function(n){var e=s(n.components);return r.createElement(c.Provider,{value:e},n.children)},p="mdxType",f={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,c=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),p=s(t),m=a,g=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return t?r.createElement(g,l(l({ref:e},u),{},{components:t})):r.createElement(g,l({ref:e},u))}));function g(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=n,o[p]="string"==typeof n?n:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5275:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={},l=void 0,o={unversionedId:"golang/\u7c7b\u578b\u5904\u7406",id:"golang/\u7c7b\u578b\u5904\u7406",title:"\u7c7b\u578b\u5904\u7406",description:"interface",source:"@site/docs/golang/\u7c7b\u578b\u5904\u7406.md",sourceDirName:"golang",slug:"/golang/\u7c7b\u578b\u5904\u7406",permalink:"/docs/golang/\u7c7b\u578b\u5904\u7406",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/golang/\u7c7b\u578b\u5904\u7406.md",tags:[],version:"current",lastUpdatedAt:1685066653,formattedLastUpdatedAt:"2023\u5e745\u670826\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u73af\u5883\u53c2\u6570\u914d\u7f6e",permalink:"/docs/golang/\u73af\u5883\u53c2\u6570\u914d\u7f6e"},next:{title:"\u8bfb\u53d6\u8f93\u5165",permalink:"/docs/golang/\u8bfb\u53d6\u8f93\u5165"}},c={},s=[{value:"interface",id:"interface",level:2},{value:"\u7c7b\u578b\u65ad\u8a00 p.(type)",id:"\u7c7b\u578b\u65ad\u8a00-ptype",level:3},{value:"\u53cd\u5c04",id:"\u53cd\u5c04",level:3}],u={toc:s},p="wrapper";function f(n){let{components:e,...t}=n;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"interface"},"interface"),(0,a.kt)("p",null,"\u5728 Golang \u4e2d\uff0cinterface \u662f\u4e00\u79cd\u975e\u5e38\u6709\u7528\u7684\u7c7b\u578b\uff0c\u5b83\u53ef\u4ee5\u8868\u793a\u4efb\u4f55\u7c7b\u578b\u7684\u6570\u636e\uff0c\u5305\u62ec\u57fa\u672c\u6570\u636e\u7c7b\u578b\u548c\u7528\u6237\u5b9a\u4e49\u7c7b\u578b\uff0cinterface \u7c7b\u578b\u672c\u8eab\u4e0d\u5305\u542b\u4efb\u4f55\u6570\u636e\u3002"),(0,a.kt)("h3",{id:"\u7c7b\u578b\u65ad\u8a00-ptype"},"\u7c7b\u578b\u65ad\u8a00 p.(type)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5177\u4f53\u7c7b\u578b\u8f6c\u6362")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "fmt"\n\ntype Person interface {\n    Hello() string\n}\n\ntype Student struct {\n}\n\nfunc (s *Student) Hello() string {\n    return "Hello World!"\n}\n\nfunc main() {\n    var p Person = &Student{}\n    s, ok := p.(*Student)\n    if ok {\n        fmt.Println(s.Hello())\n    } else {\n        fmt.Println("convert fail")\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"switch \u591a\u7c7b\u578b\u5224\u65ad")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func tryConvString(v interface{}) (string, error) {\n    type stringer interface {\n        String() string\n    }\n    switch s := v.(type) {\n    case string:\n        return s, nil\n    case []byte:\n        return string(s), nil\n    case stringer:\n        return s.String(), nil\n    case bool:\n        if s {\n            return "true", nil\n        }\n        return "false", nil\n    case int8, int16, int32, int64, int:\n        i := reflect.ValueOf(s).Int()\n        return strconv.FormatInt(i, 10), nil\n    case uint8, uint16, uint32, uint64, uint:\n        u := reflect.ValueOf(s).Uint()\n        return strconv.FormatUint(u, 10), nil\n    case float32:\n        return strconv.FormatFloat(float64(s), \'g\', -1, 32), nil\n    case float64:\n        return strconv.FormatFloat(s, \'g\', -1, 64), nil\n    case []interface{}, []string, map[string]interface{}:\n        bytes, err := json.Marshal(v)\n        if err != nil {\n            return "", err\n        }\n        return string(bytes), nil\n    case list.List:\n        for i := s.Front(); i != nil; i = i.Next() {\n            fmt.Println(i.Value)\n        }\n        return "", nil\n    default:\n        return "", fmt.Errorf("%T", s)\n    }\n}\n')),(0,a.kt)("h3",{id:"\u53cd\u5c04"},"\u53cd\u5c04"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'\nfunc main() {\n   map1 := map[string]string{"name": "John", "desc": "Golang"}\n   map2 := map[string]int{"apple": 23, "tomato": 13}\n   slice1 := []int{1,2,3}\n   fmt.Printf("%v is a map? %v\n", map1, reflect.ValueOf(map1).Kind() == reflect.Map)\n   fmt.Printf("%v is a map? %v\n", map2, reflect.ValueOf(map2).Kind() == reflect.Map)\n   fmt.Printf("%v is a map? %v\n", slice1, reflect.ValueOf(slice1).Kind() == reflect.Map)\n}\n// use fmt and avoid using reflection.\nfunc isMap(x interface{}) bool {\n    t := fmt.Sprintf("%T", x)\n    return strings.HasPrefix(t, "map[")\n}\n\n')))}f.isMDXComponent=!0}}]);