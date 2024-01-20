"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[679],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),u=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),g=o,m=p["".concat(i,".").concat(g)]||p[g]||d[g]||a;return r?t.createElement(m,l(l({ref:n},c),{},{components:r})):t.createElement(m,l({ref:n},c))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=g;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1920:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var t=r(87462),o=(r(67294),r(3905));const a={},l=void 0,s={unversionedId:"java/gson\u4e2dnull\u5904\u7406",id:"java/gson\u4e2dnull\u5904\u7406",title:"gson\u4e2dnull\u5904\u7406",description:"\u5e8f\u5217\u5316 NULL",source:"@site/docs/java/gson\u4e2dnull\u5904\u7406.md",sourceDirName:"java",slug:"/java/gson\u4e2dnull\u5904\u7406",permalink:"/docs/java/gson\u4e2dnull\u5904\u7406",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/java/gson\u4e2dnull\u5904\u7406.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"esClient",permalink:"/docs/java/esClient"},next:{title:"jar\u4e2d\u52a0\u8f7ddll\u6587\u4ef6",permalink:"/docs/java/jar\u4e2d\u52a0\u8f7ddll\u6587\u4ef6"}},i={},u=[{value:"\u5e8f\u5217\u5316 NULL",id:"\u5e8f\u5217\u5316-null",level:2},{value:"NULL \u8f6c\u6362\u4e3a\u5176\u4ed6\u503c",id:"null-\u8f6c\u6362\u4e3a\u5176\u4ed6\u503c",level:2}],c={toc:u},p="wrapper";function d(e){let{components:n,...r}=e;return(0,o.kt)(p,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5e8f\u5217\u5316-null"},"\u5e8f\u5217\u5316 NULL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// \u9ed8\u8ba4\u4f1a\u8fc7\u6ee4NULL\u503c\uff0c\u5373toJson\u751f\u6210\u7684\u5b57\u7b26\u4e32\u6ca1\u6709NULL\u503c\u5c5e\u6027\nGson gs=new Gson()\n// \u4e0b\u8ff0\u65b9\u5f0f\u5e8f\u5217\u5316NULL\u503c\nGson gs=new GsonBuilder().serializeNulls().create();\n")),(0,o.kt)("h2",{id:"null-\u8f6c\u6362\u4e3a\u5176\u4ed6\u503c"},"NULL \u8f6c\u6362\u4e3a\u5176\u4ed6\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'GsonBuilder gsonBuilder=new GsonBuilder();\n//\u9047\u5230\u65f6\u95f4\u5982\u4f55\u5904\u7406\ngsonBuilder.setDateFormat("yyyy-MM-dd HH:mm:ss");\n//\u9047\u5230\u5b57\u7b26\u4e32\u5982\u4f55\u5904\u7406\ngsonBuilder.registerTypeAdapter(String.class,new StringNullAdapter());\nGson gs=gsonBuilder.create();\n')),(0,o.kt)("p",null,"\u7c7b StringNullAdapter\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import com.google.gson.TypeAdapter;\nimport com.google.gson.stream.JsonReader;\nimport com.google.gson.stream.JsonToken;\nimport com.google.gson.stream.JsonWriter;\n\nimport java.io.IOException;\n\npublic class StringNullAdapter extends TypeAdapter<String> {\n\n    @Override\n    public void write(JsonWriter jsonWriter, String s) throws IOException {\n        //\u5c06\u5bf9\u8c61\u8f6c\u6210json\u5bf9\u8c61\u65f6\uff0c\u82e5\u6709\u5b57\u6bb5\u4e3anull \uff0c\u5219\u8f6c\u4e3a""\n        if (s==null){\n            jsonWriter.value("");\n            return;\n        }\n        jsonWriter.value(s);\n    }\n\n    @Override\n    public String read(JsonReader jsonReader) throws IOException {\n        //\u5c06json\u5bf9\u8c61\u8f6c\u6210\u5bf9\u8c61\u65f6\uff0c\u82e5\u6709\u5b57\u6bb5\u4e3anull \uff0c\u5219\u8f6c\u4e3a""\n        if (jsonReader.peek()== JsonToken.NULL){\n            jsonReader.nextNull();\n            return "";\n        }\n        return jsonReader.nextString();\n    }\n}\n')))}d.isMDXComponent=!0}}]);