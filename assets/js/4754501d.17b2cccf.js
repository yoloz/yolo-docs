"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[3509],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),g=l,d=c["".concat(p,".").concat(g)]||c[g]||m[g]||a;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},42647:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(87462),l=(t(67294),t(3905));const a={},o=void 0,i={unversionedId:"spring/\u83b7\u53d6Post\u8bf7\u6c42\u53c2\u6570",id:"spring/\u83b7\u53d6Post\u8bf7\u6c42\u53c2\u6570",title:"\u83b7\u53d6Post\u8bf7\u6c42\u53c2\u6570",description:"\u63a5\u6536form-data\u683c\u5f0f\u7684\u6570\u636e",source:"@site/docs/spring/\u83b7\u53d6Post\u8bf7\u6c42\u53c2\u6570.md",sourceDirName:"spring",slug:"/spring/\u83b7\u53d6Post\u8bf7\u6c42\u53c2\u6570",permalink:"/docs/spring/\u83b7\u53d6Post\u8bf7\u6c42\u53c2\u6570",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/spring/\u83b7\u53d6Post\u8bf7\u6c42\u53c2\u6570.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6Get\u8bf7\u6c42\u53c2\u6570",permalink:"/docs/spring/\u83b7\u53d6Get\u8bf7\u6c42\u53c2\u6570"},next:{title:"\u914d\u7f6e\u8de8\u57df\u8bbf\u95ee",permalink:"/docs/spring/\u914d\u7f6e\u8de8\u57df\u8bbf\u95ee"}},p={},s=[{value:"\u63a5\u6536<code>form-data</code>\u683c\u5f0f\u7684\u6570\u636e",id:"\u63a5\u6536form-data\u683c\u5f0f\u7684\u6570\u636e",level:2},{value:"\u63a5\u6536<code>Form</code>\u8868\u5355\u6570\u636e",id:"\u63a5\u6536form\u8868\u5355\u6570\u636e",level:3},{value:"\u53c2\u6570\u975e\u5fc5\u9700\u7684\u60c5\u51b5",id:"\u53c2\u6570\u975e\u5fc5\u9700\u7684\u60c5\u51b5",level:3},{value:"\u63a5\u6536\u4e00\u4e2a\u6570\u7ec4",id:"\u63a5\u6536\u4e00\u4e2a\u6570\u7ec4",level:3},{value:"\u4f7f\u7528<code>map</code>\u6765\u63a5\u6536\u5bf9\u8c61",id:"\u4f7f\u7528map\u6765\u63a5\u6536\u5bf9\u8c61",level:3},{value:"\u4f7f\u7528<code>bean</code>\u6765\u63a5\u53d7\u5bf9\u8c61",id:"\u4f7f\u7528bean\u6765\u63a5\u53d7\u5bf9\u8c61",level:3},{value:"\u63a5\u6536\u5b57\u7b26\u4e32\u6587\u672c\u6570\u636e",id:"\u63a5\u6536\u5b57\u7b26\u4e32\u6587\u672c\u6570\u636e",level:2},{value:"\u63a5\u6536<code>JSON</code>\u6570\u636e",id:"\u63a5\u6536json\u6570\u636e",level:2},{value:"\u57fa\u672c\u7c7b\u578b\u6570\u636e",id:"\u57fa\u672c\u7c7b\u578b\u6570\u636e",level:3},{value:"\u4f7f\u7528<code>Map</code>\u6765\u63a5\u6536\u6570\u636e",id:"\u4f7f\u7528map\u6765\u63a5\u6536\u6570\u636e",level:3},{value:"\u4f7f\u7528<code>Bean</code>\u5bf9\u8c61\u6765\u63a5\u6536\u6570\u636e",id:"\u4f7f\u7528bean\u5bf9\u8c61\u6765\u63a5\u6536\u6570\u636e",level:3},{value:"\u63a5\u6536<code>JOSN</code>\u6570\u7ec4",id:"\u63a5\u6536josn\u6570\u7ec4",level:3}],u={toc:s},c="wrapper";function m(e){let{components:n,...t}=e;return(0,l.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63a5\u6536form-data\u683c\u5f0f\u7684\u6570\u636e"},"\u63a5\u6536",(0,l.kt)("inlineCode",{parentName:"h2"},"form-data"),"\u683c\u5f0f\u7684\u6570\u636e"),(0,l.kt)("h3",{id:"\u63a5\u6536form\u8868\u5355\u6570\u636e"},"\u63a5\u6536",(0,l.kt)("inlineCode",{parentName:"h3"},"Form"),"\u8868\u5355\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\npublic class HelloController {\n    @PostMapping("/hello")\n    public String hello(@RequestParam("name") String name,\n                        @RequestParam("age") Integer age) {\n        return "name\uff1a" + name + "\\nage\uff1a" + age;\n    }\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u7b80\u5199",(0,l.kt)("inlineCode",{parentName:"p"},"(String name,Integer age)"))),(0,l.kt)("h3",{id:"\u53c2\u6570\u975e\u5fc5\u9700\u7684\u60c5\u51b5"},"\u53c2\u6570\u975e\u5fc5\u9700\u7684\u60c5\u51b5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"required=false"),"\u6807\u6ce8\u53c2\u6570\u662f\u975e\u5fc5\u987b\u7684;"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"defaultValue"),"\u7ed9\u53c2\u6570\u6307\u5b9a\u4e2a\u9ed8\u8ba4\u503c;")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\npublic class HelloController {\n    @PostMapping("/hello")\n    public String hello(@RequestParam(name = "name", defaultValue = "xxx") String name,\n                        @RequestParam(name = "age", required = false) Integer age) {\n        return "name\uff1a" + name + "\\nage\uff1a" + age;\n    }\n}\n')),(0,l.kt)("h3",{id:"\u63a5\u6536\u4e00\u4e2a\u6570\u7ec4"},"\u63a5\u6536\u4e00\u4e2a\u6570\u7ec4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\npublic class HelloController {\n    @PostMapping("/hello")\n    public String hello(@RequestParam("name") String[] names) {\n        String result = "";\n        for(String name:names){\n            result += name + "\\n";\n        }\n        return result;\n    }\n}\n')),(0,l.kt)("h3",{id:"\u4f7f\u7528map\u6765\u63a5\u6536\u5bf9\u8c61"},"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"h3"},"map"),"\u6765\u63a5\u6536\u5bf9\u8c61"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\npublic class HelloController {\n    @PostMapping("/hello")\n    public String hello(@RequestParam Map<String,Object> params) {\n        return "name\uff1a" + params.get("name") + "\\nage\uff1a" + params.get("age");\n    }\n}\n')),(0,l.kt)("h3",{id:"\u4f7f\u7528bean\u6765\u63a5\u53d7\u5bf9\u8c61"},"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"h3"},"bean"),"\u6765\u63a5\u53d7\u5bf9\u8c61"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\npublic class HelloController {\n    @PostMapping("/hello")\n    public String hello(User user) {\n        return "name\uff1a" + user.getName() + "\\nage\uff1a" + user.getAge();\n    }\n}\n\n@Getter\n@Setter\npublic class User {\n    private String name;\n    private Integer age;\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u6709\u524d\u7f00\uff0c\u4e14\u524d\u7f00\u4e0e\u63a5\u6536\u5b9e\u4f53\u7c7b\u7684\u540d\u79f0\u76f8\u540c\uff0c\u90a3\u4e48\u53c2\u6570\u4e5f\u662f\u53ef\u4ee5\u6b63\u5e38\u4f20\u9012\u7684 key(user.name,user.aget)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bf7\u6c42\u7684\u53c2\u6570\u5206\u5c5e\u4e0d\u540c\u7684\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a\u5bf9\u8c61\u6765\u63a5\u6536\u53c2\u6570")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\npublic class HelloController {\n    @PostMapping("/hello")\n    public String hello(User user, Phone phone) {\n        return "name\uff1a" + user.getName() + "\\nage\uff1a" + user.getAge()\n                + "\\nnumber\uff1a" + phone.getNumber();\n    }\n}\n\n@Getter\n@Setter\npublic class User {\n    private String name;\n    private Integer age;\n}\n\n@Getter\n@Setter\npublic class Phone {\n    private String number;\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5bf9\u8c61\u63a5\u6536\u65f6\u6307\u5b9a\u53c2\u6570\u524d\u7f00")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\npublic class HelloController {\n    @PostMapping("/hello")\n    public String hello(@ModelAttribute("u") User user) {\n        return "name\uff1a" + user.getName() + "\\nage\uff1a" + user.getAge();\n    }\n\n    @InitBinder("u")\n    private void initBinder(WebDataBinder binder) {\n        binder.setFieldDefaultPrefix("u.");\n    }\n}\n')),(0,l.kt)("p",null,"\u66f4\u591a",(0,l.kt)("inlineCode",{parentName:"p"},"InitBinder"),"\u4fe1\u606f\u53ef\u89c1",(0,l.kt)("a",{parentName:"p",href:"/docs/spring/%E8%8E%B7%E5%8F%96Get%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0"},"\u83b7\u53d6 Get \u8bf7\u6c42\u53c2\u6570")),(0,l.kt)("h2",{id:"\u63a5\u6536\u5b57\u7b26\u4e32\u6587\u672c\u6570\u636e"},"\u63a5\u6536\u5b57\u7b26\u4e32\u6587\u672c\u6570\u636e"),(0,l.kt)("p",null,"\u5982\u679c\u4f20\u9012\u8fc7\u6765\u7684\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Text"),"\u6587\u672c\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"HttpServletRequest"),"\u83b7\u53d6\u8f93\u5165\u6d41\u4ece\u800c\u8bfb\u53d6\u6587\u672c\u5185\u5bb9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\npublic class HelloController {\n    @PostMapping("/hello")\n    public String hello(HttpServletRequest request) {\n        ServletInputStream is = null;\n        try {\n            is = request.getInputStream();\n            StringBuilder sb = new StringBuilder();\n            byte[] buf = new byte[1024];\n            int len = 0;\n            while ((len = is.read(buf)) != -1) {\n                sb.append(new String(buf, 0, len));\n            }\n            System.out.println(sb.toString());\n            return "\u83b7\u53d6\u5230\u7684\u6587\u672c\u5185\u5bb9\u4e3a\uff1a" + sb.toString();\n        } catch (IOException e) {\n            e.printStackTrace();\n        } finally {\n            try {\n                if (is != null) {\n                    is.close();\n                }\n            } catch (IOException e) {\n                e.printStackTrace();\n            }\n        }\n        return null;\n    }\n}\n')),(0,l.kt)("h2",{id:"\u63a5\u6536json\u6570\u636e"},"\u63a5\u6536",(0,l.kt)("inlineCode",{parentName:"h2"},"JSON"),"\u6570\u636e"),(0,l.kt)("h3",{id:"\u57fa\u672c\u7c7b\u578b\u6570\u636e"},"\u57fa\u672c\u7c7b\u578b\u6570\u636e"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@requestbody"),"\u63a5\u6536\u53c2\u6570\u5c06\u6570\u636e\u8f6c\u6362\u4e3a\u57fa\u672c\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\npublic class HelloController {\n    @PostMapping("/hello")\n    public String hello(@RequestBody Integer id) {\n        return "id: " + id;\n    }\n}\n')),(0,l.kt)("h3",{id:"\u4f7f\u7528map\u6765\u63a5\u6536\u6570\u636e"},"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"h3"},"Map"),"\u6765\u63a5\u6536\u6570\u636e"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@requestbody"),"\u63a5\u6536\u53c2\u6570\u5c06\u6570\u636e\u8f6c\u6362",(0,l.kt)("inlineCode",{parentName:"p"},"Map")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\npublic class HelloController {\n    @PostMapping("/hello")\n    public String hello(@RequestBody Map params) {\n        return "name\uff1a" + params.get("name") + "\\n age\uff1a" + params.get("age");\n    }\n}\n')),(0,l.kt)("h3",{id:"\u4f7f\u7528bean\u5bf9\u8c61\u6765\u63a5\u6536\u6570\u636e"},"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"h3"},"Bean"),"\u5bf9\u8c61\u6765\u63a5\u6536\u6570\u636e"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@requestbody"),"\u63a5\u6536\u53c2\u6570\u5c06\u6570\u636e\u76f4\u63a5\u8f6c\u6362\u6210\u5bf9\u8c61"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\npublic class HelloController {\n    @PostMapping("/hello")\n    public String hello(@RequestBody User user){\n        return user.getName() + " " + user.getAge();\n    }\n}\n\n@Getter\n@Setter\npublic class User {\n    private String name;\n    private Integer age;\n}\n')),(0,l.kt)("h3",{id:"\u63a5\u6536josn\u6570\u7ec4"},"\u63a5\u6536",(0,l.kt)("inlineCode",{parentName:"h3"},"JOSN"),"\u6570\u7ec4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\npublic class HelloController {\n    @PostMapping("/hello")\n    public String hello(@RequestBody List<User> users){\n        String result = "";\n        for(User user:users){\n            result += user.getName() + " " + user.getAge() + "\\n";\n        }\n        return result;\n    }\n}\n\n@Getter\n@Setter\npublic class User {\n    private String name;\n    private Integer age;\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u57fa\u672c\u7c7b\u578b:",(0,l.kt)("inlineCode",{parentName:"p"},"(@RequestBody List<Integer> ids)"))))}m.isMDXComponent=!0}}]);