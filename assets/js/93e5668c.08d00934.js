"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[8727],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var t=n(67294);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),g=l,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return n?t.createElement(m,i(i({ref:r},c),{},{components:n})):t.createElement(m,i({ref:r},c))}));function m(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=g;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[u]="string"==typeof e?e:l,i[1]=a;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},17546:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var t=n(87462),l=(n(67294),n(3905));const o={},i=void 0,a={unversionedId:"spring/\u914d\u7f6e\u8de8\u57df\u8bbf\u95ee",id:"spring/\u914d\u7f6e\u8de8\u57df\u8bbf\u95ee",title:"\u914d\u7f6e\u8de8\u57df\u8bbf\u95ee",description:"\u6765\u6e90",source:"@site/docs/spring/\u914d\u7f6e\u8de8\u57df\u8bbf\u95ee.md",sourceDirName:"spring",slug:"/spring/\u914d\u7f6e\u8de8\u57df\u8bbf\u95ee",permalink:"/docs/spring/\u914d\u7f6e\u8de8\u57df\u8bbf\u95ee",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/spring/\u914d\u7f6e\u8de8\u57df\u8bbf\u95ee.md",tags:[],version:"current",lastUpdatedAt:1689650905,formattedLastUpdatedAt:"2023\u5e747\u670818\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7ec6\u8282\u95ee\u9898\u70b9",permalink:"/docs/spring/\u7ec6\u8282\u95ee\u9898\u70b9"},next:{title:"Proxmox(PVE)\u4f7f\u7528",permalink:"/docs/tools/Proxmox(PVE)\u4f7f\u7528"}},s={},p=[{value:"\u4e3a\u4ec0\u4e48\u4f1a\u51fa\u73b0\u8de8\u57df\u95ee\u9898",id:"\u4e3a\u4ec0\u4e48\u4f1a\u51fa\u73b0\u8de8\u57df\u95ee\u9898",level:2},{value:"\u4ec0\u4e48\u662f\u8de8\u57df",id:"\u4ec0\u4e48\u662f\u8de8\u57df",level:2},{value:"\u975e\u540c\u6e90\u9650\u5236",id:"\u975e\u540c\u6e90\u9650\u5236",level:2},{value:"java \u540e\u7aef \u5b9e\u73b0 CORS \u8de8\u57df\u8bf7\u6c42\u7684\u65b9\u5f0f",id:"java-\u540e\u7aef-\u5b9e\u73b0-cors-\u8de8\u57df\u8bf7\u6c42\u7684\u65b9\u5f0f",level:2},{value:"\u8fd4\u56de\u65b0\u7684 CorsFilter(\u5168\u5c40\u8de8\u57df)",id:"\u8fd4\u56de\u65b0\u7684-corsfilter\u5168\u5c40\u8de8\u57df",level:3},{value:"\u91cd\u5199 WebMvcConfigurer(\u5168\u5c40\u8de8\u57df)",id:"\u91cd\u5199-webmvcconfigurer\u5168\u5c40\u8de8\u57df",level:3},{value:"\u4f7f\u7528\u6ce8\u89e3 (\u5c40\u90e8\u8de8\u57df)",id:"\u4f7f\u7528\u6ce8\u89e3-\u5c40\u90e8\u8de8\u57df",level:3},{value:"\u624b\u52a8\u8bbe\u7f6e\u54cd\u5e94\u5934(\u5c40\u90e8\u8de8\u57df)",id:"\u624b\u52a8\u8bbe\u7f6e\u54cd\u5e94\u5934\u5c40\u90e8\u8de8\u57df",level:3},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49 filter \u5b9e\u73b0\u8de8\u57df",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49-filter-\u5b9e\u73b0\u8de8\u57df",level:3}],c={toc:p},u="wrapper";function d(e){let{components:r,...n}=e;return(0,l.kt)(u,(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weter_drop/article/details/112135940"},"\u6765\u6e90")),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4f1a\u51fa\u73b0\u8de8\u57df\u95ee\u9898"},"\u4e3a\u4ec0\u4e48\u4f1a\u51fa\u73b0\u8de8\u57df\u95ee\u9898"),(0,l.kt)("p",null,"\u51fa\u4e8e\u6d4f\u89c8\u5668\u7684\u540c\u6e90\u7b56\u7565\u9650\u5236\u3002\u540c\u6e90\u7b56\u7565\uff08Sameoriginpolicy\uff09\u662f\u4e00\u79cd\u7ea6\u5b9a\uff0c\u5b83\u662f\u6d4f\u89c8\u5668\u6700\u6838\u5fc3\u4e5f\u6700\u57fa\u672c\u7684\u5b89\u5168\u529f\u80fd\uff0c\u5982\u679c\u7f3a\u5c11\u4e86\u540c\u6e90\u7b56\u7565\uff0c\u5219\u6d4f\u89c8\u5668\u7684\u6b63\u5e38\u529f\u80fd\u53ef\u80fd\u90fd\u4f1a\u53d7\u5230\u5f71\u54cd\u3002\u53ef\u4ee5\u8bf4 Web \u662f\u6784\u5efa\u5728\u540c\u6e90\u7b56\u7565\u57fa\u7840\u4e4b\u4e0a\u7684\uff0c\u6d4f\u89c8\u5668\u53ea\u662f\u9488\u5bf9\u540c\u6e90\u7b56\u7565\u7684\u4e00\u79cd\u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"\u540c\u6e90\u7b56\u7565\u4f1a\u963b\u6b62\u4e00\u4e2a\u57df\u7684 javascript \u811a\u672c\u548c\u53e6\u5916\u4e00\u4e2a\u57df\u7684\u5185\u5bb9\u8fdb\u884c\u4ea4\u4e92\u3002\u6240\u8c13\u540c\u6e90\uff08\u5373\u6307\u5728\u540c\u4e00\u4e2a\u57df\uff09\u5c31\u662f\u4e24\u4e2a\u9875\u9762\u5177\u6709\u76f8\u540c\u7684\u534f\u8bae\uff08protocol\uff09\uff0c\u4e3b\u673a\uff08host\uff09\u548c\u7aef\u53e3\u53f7\uff08port\uff09"),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f\u8de8\u57df"},"\u4ec0\u4e48\u662f\u8de8\u57df"),(0,l.kt)("p",null,"\u5f53\u4e00\u4e2a\u8bf7\u6c42 url \u7684\u534f\u8bae\u3001\u57df\u540d\u3001\u7aef\u53e3\u4e09\u8005\u4e4b\u95f4\u4efb\u610f\u4e00\u4e2a\u4e0e\u5f53\u524d\u9875\u9762 url \u4e0d\u540c\u5373\u4e3a\u8de8\u57df\u56fe\u7247"),(0,l.kt)("h2",{id:"\u975e\u540c\u6e90\u9650\u5236"},"\u975e\u540c\u6e90\u9650\u5236"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u65e0\u6cd5\u8bfb\u53d6\u975e\u540c\u6e90\u7f51\u9875\u7684 Cookie\u3001LocalStorage \u548c IndexedDB")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u65e0\u6cd5\u63a5\u89e6\u975e\u540c\u6e90\u7f51\u9875\u7684 DOM")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u65e0\u6cd5\u5411\u975e\u540c\u6e90\u5730\u5740\u53d1\u9001 AJAX \u8bf7\u6c42"))),(0,l.kt)("h2",{id:"java-\u540e\u7aef-\u5b9e\u73b0-cors-\u8de8\u57df\u8bf7\u6c42\u7684\u65b9\u5f0f"},"java \u540e\u7aef \u5b9e\u73b0 CORS \u8de8\u57df\u8bf7\u6c42\u7684\u65b9\u5f0f"),(0,l.kt)("p",null,"\u5bf9\u4e8e CORS \u7684\u8de8\u57df\u8bf7\u6c42\uff0c\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u79cd\u65b9\u5f0f\u53ef\u4f9b\u9009\u62e9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u65b0\u7684 CorsFilter"),(0,l.kt)("li",{parentName:"ul"},"\u91cd\u5199 WebMvcConfigurer"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6ce8\u89e3 @CrossOrigin"),(0,l.kt)("li",{parentName:"ul"},"\u624b\u52a8\u8bbe\u7f6e\u54cd\u5e94\u5934 (HttpServletResponse)"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a web filter \u5b9e\u73b0\u8de8\u57df")),(0,l.kt)("p",null,"\u6ce8\u610f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"CorFilter / WebMvConfigurer / @CrossOrigin \u9700\u8981 SpringMVC 4.2 \u4ee5\u4e0a\u7248\u672c\u624d\u652f\u6301\uff0c\u5bf9\u5e94 springBoot 1.3 \u7248\u672c\u4ee5\u4e0a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0a\u9762\u524d\u4e24\u79cd\u65b9\u5f0f\u5c5e\u4e8e\u5168\u5c40 CORS \u914d\u7f6e\uff0c\u540e\u4e24\u79cd\u5c5e\u4e8e\u5c40\u90e8 CORS \u914d\u7f6e\u3002\u5982\u679c\u4f7f\u7528\u4e86\u5c40\u90e8\u8de8\u57df\u662f\u4f1a\u8986\u76d6\u5168\u5c40\u8de8\u57df\u7684\u89c4\u5219\uff0c\u6240\u4ee5\u53ef\u4ee5\u901a\u8fc7 @CrossOrigin \u6ce8\u89e3\u6765\u8fdb\u884c\u7ec6\u7c92\u5ea6\u66f4\u9ad8\u7684\u8de8\u57df\u8d44\u6e90\u63a7\u5236\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5176\u5b9e\u65e0\u8bba\u54ea\u79cd\u65b9\u6848\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u6700\u7ec8\u76ee\u7684\u90fd\u662f\u4fee\u6539\u54cd\u5e94\u5934\uff0c\u5411\u54cd\u5e94\u5934\u4e2d\u6dfb\u52a0\u6d4f\u89c8\u5668\u6240\u8981\u6c42\u7684\u6570\u636e\uff0c\u8fdb\u800c\u5b9e\u73b0\u8de8\u57df")))),(0,l.kt)("h3",{id:"\u8fd4\u56de\u65b0\u7684-corsfilter\u5168\u5c40\u8de8\u57df"},"\u8fd4\u56de\u65b0\u7684 CorsFilter(\u5168\u5c40\u8de8\u57df)"),(0,l.kt)("p",null,"\u5728\u4efb\u610f\u914d\u7f6e\u7c7b\uff0c\u8fd4\u56de\u4e00\u4e2a \u65b0\u7684 CorsFIlter Bean \uff0c\u5e76\u6dfb\u52a0\u6620\u5c04\u8def\u5f84\u548c\u5177\u4f53\u7684 CORS \u914d\u7f6e\u8def\u5f84\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class GlobalCorsConfig {\n    @Bean\n    public CorsFilter corsFilter() {\n        //1. \u6dfb\u52a0 CORS\u914d\u7f6e\u4fe1\u606f\n        CorsConfiguration config = new CorsConfiguration();\n        //\u653e\u884c\u54ea\u4e9b\u539f\u59cb\u57df\n        config.addAllowedOrigin("*");\n        //\u662f\u5426\u53d1\u9001 Cookie\n        config.setAllowCredentials(true);\n        //\u653e\u884c\u54ea\u4e9b\u8bf7\u6c42\u65b9\u5f0f\n        config.addAllowedMethod("*");\n        //\u653e\u884c\u54ea\u4e9b\u539f\u59cb\u8bf7\u6c42\u5934\u90e8\u4fe1\u606f\n        config.addAllowedHeader("*");\n        //\u66b4\u9732\u54ea\u4e9b\u5934\u90e8\u4fe1\u606f\n        config.addExposedHeader("*");\n        //2. \u6dfb\u52a0\u6620\u5c04\u8def\u5f84\n        UrlBasedCorsConfigurationSource corsConfigurationSource = new UrlBasedCorsConfigurationSource();\n        corsConfigurationSource.registerCorsConfiguration("/**",config);\n        //3. \u8fd4\u56de\u65b0\u7684CorsFilter\n        return new CorsFilter(corsConfigurationSource);\n    }\n}\n')),(0,l.kt)("h3",{id:"\u91cd\u5199-webmvcconfigurer\u5168\u5c40\u8de8\u57df"},"\u91cd\u5199 WebMvcConfigurer(\u5168\u5c40\u8de8\u57df)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class CorsConfig implements WebMvcConfigurer {\n    @Override\n    public void addCorsMappings(CorsRegistry registry) {\n        registry.addMapping("/**")\n                //\u662f\u5426\u53d1\u9001Cookie\n                .allowCredentials(true)\n                //\u653e\u884c\u54ea\u4e9b\u539f\u59cb\u57df\n                .allowedOrigins("*")\n                .allowedMethods(new String[]{"GET", "POST", "PUT", "DELETE"})\n                .allowedHeaders("*")\n                .exposedHeaders("*");\n    }\n}\n')),(0,l.kt)("h3",{id:"\u4f7f\u7528\u6ce8\u89e3-\u5c40\u90e8\u8de8\u57df"},"\u4f7f\u7528\u6ce8\u89e3 (\u5c40\u90e8\u8de8\u57df)"),(0,l.kt)("p",null,"\u5728\u63a7\u5236\u5668(\u7c7b\u4e0a)\u4e0a\u4f7f\u7528\u6ce8\u89e3 @CrossOrigin:\uff0c\u8868\u793a\u8be5\u7c7b\u7684\u6240\u6709\u65b9\u6cd5\u5141\u8bb8\u8de8\u57df\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@CrossOrigin(origins = "*")\npublic class HelloController {\n    @RequestMapping("/hello")\n    public String hello() {\n        return "hello world";\n    }\n}\n')),(0,l.kt)("p",null,"\u5728\u65b9\u6cd5\u4e0a\u4f7f\u7528\u6ce8\u89e3 @CrossOrigin:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RequestMapping("/hello")\n    @CrossOrigin(origins = "*")\n     //@CrossOrigin(value = "http://localhost:8081") //\u6307\u5b9a\u5177\u4f53ip\u5141\u8bb8\u8de8\u57df\n    public String hello() {\n        return "hello world";\n    }\n')),(0,l.kt)("h3",{id:"\u624b\u52a8\u8bbe\u7f6e\u54cd\u5e94\u5934\u5c40\u90e8\u8de8\u57df"},"\u624b\u52a8\u8bbe\u7f6e\u54cd\u5e94\u5934(\u5c40\u90e8\u8de8\u57df)"),(0,l.kt)("p",null,"\u4f7f\u7528 HttpServletResponse \u5bf9\u8c61\u6dfb\u52a0\u54cd\u5e94\u5934(Access-Control-Allow-Origin)\u6765\u6388\u6743\u539f\u59cb\u57df\uff0c\u8fd9\u91cc Origin \u7684\u503c\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a \u201c","*","\u201d,\u8868\u793a\u5168\u90e8\u653e\u884c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RequestMapping("/index")\npublic String index(HttpServletResponse response) {\n    response.addHeader("Access-Allow-Control-Origin","*");\n    return "index";\n}\n')),(0,l.kt)("h3",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49-filter-\u5b9e\u73b0\u8de8\u57df"},"\u4f7f\u7528\u81ea\u5b9a\u4e49 filter \u5b9e\u73b0\u8de8\u57df"),(0,l.kt)("p",null,"\u9996\u5148\u7f16\u5199\u4e00\u4e2a\u8fc7\u6ee4\u5668\uff0c\u53ef\u4ee5\u8d77\u540d\u5b57\u4e3a MyCorsFilter.java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package com.mesnac.aop;\n\nimport java.io.IOException;\nimport javax.servlet.Filter;\nimport javax.servlet.FilterChain;\nimport javax.servlet.FilterConfig;\nimport javax.servlet.ServletException;\nimport javax.servlet.ServletRequest;\nimport javax.servlet.ServletResponse;\nimport javax.servlet.http.HttpServletResponse;\nimport org.springframework.stereotype.Component;\n@Component\npublic class MyCorsFilter implements Filter {\n  public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {\n    HttpServletResponse response = (HttpServletResponse) res;\n    response.setHeader("Access-Control-Allow-Origin", "*");\n    response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");\n    response.setHeader("Access-Control-Max-Age", "3600");\n    response.setHeader("Access-Control-Allow-Headers", "x-requested-with,content-type");\n    chain.doFilter(req, res);\n  }\n  public void init(FilterConfig filterConfig) {}\n  public void destroy() {}\n}\n')),(0,l.kt)("p",null,"\u5728 web.xml \u4e2d\u914d\u7f6e\u8fd9\u4e2a\u8fc7\u6ee4\u5668\uff0c\u4f7f\u5176\u751f\u6548"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- \u8de8\u57df\u8bbf\u95ee START--\x3e\n<filter>\n <filter-name>CorsFilter</filter-name>\n <filter-class>com.mesnac.aop.MyCorsFilter</filter-class>\n</filter>\n<filter-mapping>\n <filter-name>CorsFilter</filter-name>\n <url-pattern>/*</url-pattern>\n</filter-mapping>\n\x3c!-- \u8de8\u57df\u8bbf\u95ee END  --\x3e\n")))}d.isMDXComponent=!0}}]);