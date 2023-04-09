"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[73],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>u});var c=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);a&&(c=c.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,c)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,c,l=function(e,a){if(null==e)return{};var t,c,l={},n=Object.keys(e);for(c=0;c<n.length;c++)t=n[c],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)t=n[c],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=c.createContext({}),h=function(e){var a=c.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},s=function(e){var a=h(e.components);return c.createElement(o.Provider,{value:a},e.children)},i={inlineCode:"code",wrapper:function(e){var a=e.children;return c.createElement(c.Fragment,{},a)}},p=c.forwardRef((function(e,a){var t=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=h(t),u=l,d=p["".concat(o,".").concat(u)]||p[u]||i[u]||n;return t?c.createElement(d,r(r({ref:a},s),{},{components:t})):c.createElement(d,r({ref:a},s))}));function u(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var n=t.length,r=new Array(n);r[0]=p;var m={};for(var o in a)hasOwnProperty.call(a,o)&&(m[o]=a[o]);m.originalType=e,m.mdxType="string"==typeof e?e:l,r[1]=m;for(var h=2;h<n;h++)r[h]=t[h];return c.createElement.apply(null,r)}return c.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4803:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>i,frontMatter:()=>n,metadata:()=>m,toc:()=>h});var c=t(7462),l=(t(7294),t(3905));const n={},r=void 0,m={unversionedId:"bigdata/memcache\u5b66\u4e60",id:"bigdata/memcache\u5b66\u4e60",title:"memcache\u5b66\u4e60",description:"\u670d\u52a1\u7aef\u7f13\u5b58\u6240\u63d0\u4f9b\u7684\u6700\u91cd\u8981\u529f\u80fd: \u65e2\u53ef\u4ee5\u63d0\u9ad8\u5355\u4e2a\u8bf7\u6c42\u7684\u54cd\u5e94\u901f\u5ea6\uff0c\u53c8\u53ef\u4ee5\u964d\u4f4e\u670d\u52a1\u5c42\u53ca\u6570\u636e\u5e93\u5c42\u7684\u538b\u529b\u3002",source:"@site/docs/bigdata/memcache\u5b66\u4e60.md",sourceDirName:"bigdata",slug:"/bigdata/memcache\u5b66\u4e60",permalink:"/docs/bigdata/memcache\u5b66\u4e60",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/memcache\u5b66\u4e60.md",tags:[],version:"current",lastUpdatedAt:1681052426,formattedLastUpdatedAt:"2023\u5e744\u67089\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"kerberos\u5e38\u89c1\u95ee\u9898",permalink:"/docs/bigdata/kerberos\u5e38\u89c1\u95ee\u9898"},next:{title:"zookeeper\u5b66\u4e60",permalink:"/docs/bigdata/zookeeper\u5b66\u4e60"}},o={},h=[{value:"\u4e00\u6b21\u5199\u7f13\u5b58\u7684\u6d41\u7a0b\uff1a",id:"\u4e00\u6b21\u5199\u7f13\u5b58\u7684\u6d41\u7a0b",level:2},{value:"\u4e24\u9636\u6bb5\u54c8\u5e0c\uff08Two-stage hash\uff09",id:"\u4e24\u9636\u6bb5\u54c8\u5e0ctwo-stage-hash",level:2},{value:"\u96c6\u7fa4\u5b9e\u73b0\u539f\u7406",id:"\u96c6\u7fa4\u5b9e\u73b0\u539f\u7406",level:2},{value:"\u4e00\u81f4\u6027 Hash \u7b97\u6cd5",id:"\u4e00\u81f4\u6027-hash-\u7b97\u6cd5",level:3},{value:"MemCache \u5b9e\u73b0\u539f\u7406",id:"memcache-\u5b9e\u73b0\u539f\u7406",level:3},{value:"\u603b\u7ed3 MemCache \u7684\u7279\u6027\u548c\u9650\u5236",id:"\u603b\u7ed3-memcache-\u7684\u7279\u6027\u548c\u9650\u5236",level:2}],s={toc:h};function i(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,c.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u670d\u52a1\u7aef\u7f13\u5b58\u6240\u63d0\u4f9b\u7684\u6700\u91cd\u8981\u529f\u80fd: \u65e2\u53ef\u4ee5\u63d0\u9ad8\u5355\u4e2a\u8bf7\u6c42\u7684\u54cd\u5e94\u901f\u5ea6\uff0c\u53c8\u53ef\u4ee5\u964d\u4f4e\u670d\u52a1\u5c42\u53ca\u6570\u636e\u5e93\u5c42\u7684\u538b\u529b\u3002\u3000\u3000")),(0,l.kt)("p",null,"memcache \u662f\u4e00\u4e2a\u5185\u5b58\u7f13\u5b58\u7cfb\u7edf\uff0c\u901a\u8fc7\u8bfb\u53d6\u5185\u5b58\u4e2d\u6570\u636e\u548c\u5bf9\u8c61\u51cf\u5c11\u8bbf\u95ee\u6570\u636e\u5e93\u7684\u6b21\u6570\uff0c\u4ece\u800c\u63d0\u9ad8\u6548\u7387\u3002memcache \u662f\u4ee5 key-value \u5f62\u5f0f\u5b58\u653e\u7684 hashmap\u3002"),(0,l.kt)("p",null,"memcache \u4f7f\u7528\u6a21\u578b\u56fe\uff08\u501f\u9274\u522b\u7684\u535a\u5ba2\uff09:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"memcache1.png",src:t(8055).Z,width:"616",height:"390"})),(0,l.kt)("p",null,"memcache \u96c6\u7fa4\u4e4b\u95f4\u662f\u4e0d\u4f1a\u901a\u4fe1\u7684\uff08\u4e0e\u4e4b\u5f62\u6210\u5bf9\u6bd4\u7684\uff0c\u6bd4\u5982 JBoss Cache\uff0c\u67d0\u53f0\u670d\u52a1\u5668\u6709\u7f13\u5b58\u6570\u636e\u66f4\u65b0\u65f6\uff0c\u4f1a\u901a\u77e5\u96c6\u7fa4\u4e2d\u5176\u4ed6\u673a\u5668\u66f4\u65b0\u7f13\u5b58\u6216\u6e05\u9664\u7f13\u5b58\u6570\u636e\uff09\uff0c\u5b8c\u5168\u4f9d\u8d56\u4e8e\u5ba2\u6237\u7aef\u5b9e\u73b0\u3002"),(0,l.kt)("h2",{id:"\u4e00\u6b21\u5199\u7f13\u5b58\u7684\u6d41\u7a0b"},"\u4e00\u6b21\u5199\u7f13\u5b58\u7684\u6d41\u7a0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5e94\u7528\u7a0b\u5e8f\u8f93\u5165\u9700\u8981\u5199\u7f13\u5b58\u7684\u6570\u636e;"),(0,l.kt)("li",{parentName:"ol"},"API \u5c06 Key \u8f93\u5165\u8def\u7531\u7b97\u6cd5\u6a21\u5757\uff0c\u8def\u7531\u7b97\u6cd5\u6839\u636e Key \u548c MemCache \u96c6\u7fa4\u670d\u52a1\u5668\u5217\u8868\u5f97\u5230\u4e00\u53f0\u670d\u52a1\u5668\u7f16\u53f7;"),(0,l.kt)("li",{parentName:"ol"},"\u7531\u670d\u52a1\u5668\u7f16\u53f7\u5f97\u5230 MemCache \u53ca\u5176\u7684 ip \u5730\u5740\u548c\u7aef\u53e3\u53f7;"),(0,l.kt)("li",{parentName:"ol"},"API \u8c03\u7528\u901a\u4fe1\u6a21\u5757\u548c\u6307\u5b9a\u7f16\u53f7\u7684\u670d\u52a1\u5668\u901a\u4fe1\uff0c\u5c06\u6570\u636e\u5199\u5165\u8be5\u670d\u52a1\u5668\uff0c\u5b8c\u6210\u4e00\u6b21\u5206\u5e03\u5f0f\u7f13\u5b58\u7684\u5199\u64cd\u4f5c;")),(0,l.kt)("h2",{id:"\u4e24\u9636\u6bb5\u54c8\u5e0ctwo-stage-hash"},"\u4e24\u9636\u6bb5\u54c8\u5e0c\uff08Two-stage hash\uff09"),(0,l.kt)("p",null,"\u4e00\u4e2a\u5927\u578b\u670d\u52a1 \u5e38\u5e38\u62e5\u6709\u4e0a\u767e\u4e2a Memcached \u5b9e\u4f8b\u3002\u800c\u5728\u8fd9\u4e0a\u767e\u4e2a Memcached \u5b9e\u4f8b\u4e2d\u6240\u5b58\u50a8\u7684\u6570\u636e\u5219\u4e0d\u5c3d\u76f8\u540c\u3002\u7531\u4e8e\u8fd9\u79cd\u6570\u636e\u7684\u5f02\u6784\u6027\uff0c\u6211\u4eec\u9700\u8981\u5728\u8bbf\u95ee\u7531 Memcached \u6240\u8bb0\u5f55\u7684\u4fe1\u606f\u4e4b\u524d\u51b3\u5b9a\u5728\u8be5\u670d\u52a1\u7aef\u7f13\u5b58\u7cfb\u7edf\u4e2d\u5230\u5e95\u7531\u54ea\u4e2a Memcached \u5b9e\u4f8b\u8bb0\u5f55\u4e86\u6211\u4eec\u6240\u60f3\u8981\u8bbf\u95ee\u7684\u6570\u636e"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"memcache2.png",src:t(269).Z,width:"442",height:"316"})),(0,l.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u7528\u6237\u9700\u8981\u901a\u8fc7\u4e00\u4e2a Memcached \u5ba2\u6237\u7aef\u6765\u5b8c\u6210\u5bf9\u7f13\u5b58\u670d\u52a1\u6240\u8bb0\u5f55\u4fe1\u606f\u7684\u8bbf\u95ee\u3002\u8be5\u5ba2\u6237\u7aef\u77e5\u9053\u670d\u52a1\u7aef\u7f13\u5b58\u7cfb\u7edf\u4e2d\u6240\u5305\u542b\u7684\u6240\u6709 Memcached \u670d\u52a1\u5b9e\u4f8b\u3002\u5728\u9700\u8981\u8bbf\u95ee\u5177\u6709\u7279\u5b9a\u952e\u503c\u7684\u6570\u636e\u65f6\uff0c\u8be5\u5ba2\u6237\u7aef\u5185\u90e8\u4f1a\u6839\u636e\u6240\u9700\u8981\u8bfb\u53d6\u7684\u6570\u636e\u7684\u952e\u503c\uff0c\u5982\u201cfoo\u201d\uff0c\u4ee5\u53ca\u5f53\u524d Memcached \u7f13\u5b58\u670d\u52a1\u7684\u914d\u7f6e\u6765\u8ba1\u7b97\u76f8\u5e94\u7684\u54c8\u5e0c\u503c\uff0c\u4ee5\u51b3\u5b9a\u5230\u5e95\u662f\u54ea\u4e2a Memcached \u5b9e\u4f8b\u8bb0\u5f55\u4e86\u7528\u6237\u6240\u9700\u8981\u8bbf\u95ee\u7684\u4fe1\u606f\u3002\u5728\u51b3\u5b9a\u8bb0\u5f55\u4e86\u6240\u9700\u8981\u4fe1\u606f\u7684 Memcached \u5b9e\u4f8b\u4e4b\u540e\uff0cMemcached \u5ba2\u6237\u7aef\u5c06\u4ece\u914d\u7f6e\u4e2d\u8bfb\u53d6\u8be5 Memcached \u670d\u52a1\u5b9e\u4f8b\u6240\u5728\u5730\u5740\uff0c\u5e76\u5411\u8be5 Memcached \u5b9e\u4f8b\u53d1\u9001\u6570\u636e\u8bbf\u95ee\u8bf7\u6c42\uff0c\u4ee5\u4ece\u8be5 Memcached \u5b9e\u4f8b\u4e2d\u8bfb\u53d6\u5177\u6709\u952e\u503c\u201cfoo\u201d\u7684\u4fe1\u606f\u3002\u5728\u5404\u4e2a\u8bba\u575b\u7684\u8ba8\u8bba\u4e2d\uff0c\u8fd9\u88ab\u79f0\u4e3a\u662f Memcached \u7684\u4e24\u9636\u6bb5\u54c8\u5e0c\uff08Two-stage hash\uff09\u3002"),(0,l.kt)("h2",{id:"\u96c6\u7fa4\u5b9e\u73b0\u539f\u7406"},"\u96c6\u7fa4\u5b9e\u73b0\u539f\u7406"),(0,l.kt)("h3",{id:"\u4e00\u81f4\u6027-hash-\u7b97\u6cd5"},"\u4e00\u81f4\u6027 Hash \u7b97\u6cd5"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"memcache3.png",src:t(6096).Z,width:"585",height:"369"})),(0,l.kt)("p",null,"\u5177\u4f53\u7b97\u6cd5\u8fc7\u7a0b\u4e3a\uff1a\u5148\u6784\u9020\u4e00\u4e2a\u957f\u5ea6\u4e3a 232 \u6b21\u65b9\u7684\u6574\u6570\u73af\uff08\u8fd9\u4e2a\u73af\u88ab\u79f0\u4e3a\u4e00\u81f4\u6027 Hash \u73af\uff09\uff0c\u6839\u636e\u8282\u70b9\u540d\u79f0\u7684 Hash \u503c\uff08\u5176\u5206\u5e03\u4e3a","[0, 232-1]","\uff09\u5c06\u7f13\u5b58\u670d\u52a1\u5668\u8282\u70b9\u653e\u7f6e\u5728\u8fd9\u4e2a Hash \u73af\u4e0a\uff0c\u7136\u540e\u6839\u636e\u9700\u8981\u7f13\u5b58\u7684\u6570\u636e\u7684 Key \u503c\u8ba1\u7b97\u5f97\u5230\u5176 Hash \u503c\uff08\u5176\u5206\u5e03\u4e5f\u4e3a","[0, 232-1]","\uff09\uff0c\u7136\u540e\u5728 Hash \u73af\u4e0a\u987a\u65f6\u9488\u67e5\u627e\u8ddd\u79bb\u8fd9\u4e2a Key \u503c\u7684 Hash \u503c\u6700\u8fd1\u7684\u670d\u52a1\u5668\u8282\u70b9\uff0c\u5b8c\u6210 Key \u5230\u670d\u52a1\u5668\u7684\u6620\u5c04\u67e5\u627e\u3002"),(0,l.kt)("p",null,"\u5c31\u5982\u540c\u56fe\u4e0a\u6240\u793a\uff0c\u4e09\u4e2a Node \u70b9\u5206\u522b\u4f4d\u4e8e Hash \u73af\u4e0a\u7684\u4e09\u4e2a\u4f4d\u7f6e\uff0c\u7136\u540e Key \u503c\u6839\u636e\u5176 HashCode\uff0c\u5728 Hash \u73af\u4e0a\u6709\u4e00\u4e2a\u56fa\u5b9a\u4f4d\u7f6e\uff0c\u4f4d\u7f6e\u56fa\u5b9a\u4e0b\u4e4b\u540e\uff0cKey \u5c31\u4f1a\u987a\u65f6\u9488\u53bb\u5bfb\u627e\u79bb\u5b83\u6700\u8fd1\u7684\u4e00\u4e2a Node\uff0c\u628a\u6570\u636e\u5b58\u50a8\u5728\u8fd9\u4e2a Node \u7684 MemCache \u670d\u52a1\u5668\u4e2d\u3002"),(0,l.kt)("h3",{id:"memcache-\u5b9e\u73b0\u539f\u7406"},"MemCache \u5b9e\u73b0\u539f\u7406"),(0,l.kt)("p",null,"\u9996\u5148\u8981\u8bf4\u660e\u4e00\u70b9\uff0cMemCache \u7684\u6570\u636e\u5b58\u653e\u5728\u5185\u5b58\u4e2d\uff0c\u5b58\u653e\u5728\u5185\u5b58\u4e2d\u4e2a\u4eba\u8ba4\u4e3a\u610f\u5473\u7740\u51e0\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8bbf\u95ee\u6570\u636e\u7684\u901f\u5ea6\u6bd4\u4f20\u7edf\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u8981\u5feb\uff0c\u56e0\u4e3a Oracle\u3001MySQL \u8fd9\u4e9b\u4f20\u7edf\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e3a\u4e86\u4fdd\u6301\u6570\u636e\u7684\u6301\u4e45\u6027\uff0c\u6570\u636e\u5b58\u653e\u5728\u786c\u76d8\u4e2d\uff0cIO \u64cd\u4f5c\u901f\u5ea6\u6162"),(0,l.kt)("li",{parentName:"ol"},"MemCache \u7684\u6570\u636e\u5b58\u653e\u5728\u5185\u5b58\u4e2d\u540c\u65f6\u610f\u5473\u7740\u53ea\u8981 MemCache \u91cd\u542f\u4e86\uff0c\u6570\u636e\u5c31\u4f1a\u6d88\u5931"),(0,l.kt)("li",{parentName:"ol"},"\u65e2\u7136 MemCache \u7684\u6570\u636e\u5b58\u653e\u5728\u5185\u5b58\u4e2d\uff0c\u90a3\u4e48\u52bf\u5fc5\u53d7\u5230\u673a\u5668\u4f4d\u6570\u7684\u9650\u5236\uff0c\u8fd9\u4e2a\u4e4b\u524d\u7684\u6587\u7ae0\u5199\u8fc7\u5f88\u591a\u6b21\u4e86\uff0c32 \u4f4d\u673a\u5668\u6700\u591a\u53ea\u80fd\u4f7f\u7528 2GB \u7684\u5185\u5b58\u7a7a\u95f4\uff0c64 \u4f4d\u673a\u5668\u53ef\u4ee5\u8ba4\u4e3a\u6ca1\u6709\u4e0a\u9650")),(0,l.kt)("p",null,"\u7136\u540e\u6211\u4eec\u6765\u770b\u4e00\u4e0b MemCache \u7684\u539f\u7406\uff0cMemCache \u6700\u91cd\u8981\u7684\u83ab\u4e0d\u662f\u5185\u5b58\u5206\u914d\u7684\u5185\u5bb9\u4e86\uff0cMemCache \u91c7\u7528\u7684\u5185\u5b58\u5206\u914d\u65b9\u5f0f\u662f\u56fa\u5b9a\u7a7a\u95f4\u5206\u914d\uff0c\u8fd8\u662f\u81ea\u5df1\u753b\u4e00\u5f20\u56fe\u8bf4\u660e\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"memcache4.ppg",src:t(8519).Z,width:"617",height:"306"})),(0,l.kt)("p",null,"\u8fd9\u5f20\u56fe\u7247\u91cc\u9762\u6d89\u53ca\u4e86 slab_class\u3001slab\u3001page\u3001chunk \u56db\u4e2a\u6982\u5ff5\uff0c\u5b83\u4eec\u4e4b\u95f4\u7684\u5173\u7cfb\u662f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"MemCache \u5c06\u5185\u5b58\u7a7a\u95f4\u5206\u4e3a\u4e00\u7ec4 slab"),(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a slab \u4e0b\u53c8\u6709\u82e5\u5e72\u4e2a page\uff0c\u6bcf\u4e2a page \u9ed8\u8ba4\u662f 1M\uff0c\u5982\u679c\u4e00\u4e2a slab \u5360\u7528 100M \u5185\u5b58\u7684\u8bdd\uff0c\u90a3\u4e48\u8fd9\u4e2a slab \u4e0b\u5e94\u8be5\u6709 100 \u4e2a page"),(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a page \u91cc\u9762\u5305\u542b\u4e00\u7ec4 chunk\uff0cchunk \u662f\u771f\u6b63\u5b58\u653e\u6570\u636e\u7684\u5730\u65b9\uff0c\u540c\u4e00\u4e2a slab \u91cc\u9762\u7684 chunk \u7684\u5927\u5c0f\u662f\u56fa\u5b9a\u7684"),(0,l.kt)("li",{parentName:"ol"},"\u6709\u76f8\u540c\u5927\u5c0f chunk \u7684 slab \u88ab\u7ec4\u7ec7\u5728\u4e00\u8d77\uff0c\u79f0\u4e3a slab_class")),(0,l.kt)("p",null,"MemCache \u5185\u5b58\u5206\u914d\u7684\u65b9\u5f0f\u79f0\u4e3a allocator\uff0cslab \u7684\u6570\u91cf\u662f\u6709\u9650\u7684\uff0c\u51e0\u4e2a\u3001\u5341\u51e0\u4e2a\u6216\u8005\u51e0\u5341\u4e2a\uff0c\u8fd9\u4e2a\u548c\u542f\u52a8\u53c2\u6570\u7684\u914d\u7f6e\u76f8\u5173\u3002"),(0,l.kt)("p",null,"MemCache \u4e2d\u7684 value \u8fc7\u6765\u5b58\u653e\u7684\u5730\u65b9\u662f\u7531 value \u7684\u5927\u5c0f\u51b3\u5b9a\u7684\uff0cvalue \u603b\u662f\u4f1a\u88ab\u5b58\u653e\u5230\u4e0e chunk \u5927\u5c0f\u6700\u63a5\u8fd1\u7684\u4e00\u4e2a slab \u4e2d\uff0c\u6bd4\u5982 slab","[1]","\u7684 chunk \u5927\u5c0f\u4e3a 80 \u5b57\u8282\u3001slab","[2]","\u7684 chunk \u5927\u5c0f\u4e3a 100 \u5b57\u8282\u3001slab","[3]","\u7684 chunk \u5927\u5c0f\u4e3a 128 \u5b57\u8282\uff08\u76f8\u90bb slab \u5185\u7684 chunk \u57fa\u672c\u4ee5 1.25 \u4e3a\u6bd4\u4f8b\u8fdb\u884c\u589e\u957f\uff0cMemCache \u542f\u52a8\u65f6\u53ef\u4ee5\u7528-f \u6307\u5b9a\u8fd9\u4e2a\u6bd4\u4f8b\uff09\uff0c\u90a3\u4e48\u8fc7\u6765\u4e00\u4e2a 88 \u5b57\u8282\u7684 value\uff0c\u8fd9\u4e2a value \u5c06\u88ab\u653e\u5230 2 \u53f7 slab \u4e2d\u3002\u653e slab \u7684\u65f6\u5019\uff0c\u9996\u5148 slab \u8981\u7533\u8bf7\u5185\u5b58\uff0c\u7533\u8bf7\u5185\u5b58\u662f\u4ee5 page \u4e3a\u5355\u4f4d\u7684\uff0c\u6240\u4ee5\u5728\u653e\u5165\u7b2c\u4e00\u4e2a\u6570\u636e\u7684\u65f6\u5019\uff0c\u65e0\u8bba\u5927\u5c0f\u4e3a\u591a\u5c11\uff0c\u90fd\u4f1a\u6709 1M \u5927\u5c0f\u7684 page \u88ab\u5206\u914d\u7ed9\u8be5 slab\u3002\u7533\u8bf7\u5230 page \u540e\uff0cslab \u4f1a\u5c06\u8fd9\u4e2a page \u7684\u5185\u5b58\u6309 chunk \u7684\u5927\u5c0f\u8fdb\u884c\u5207\u5206\uff0c\u8fd9\u6837\u5c31\u53d8\u6210\u4e86\u4e00\u4e2a chunk \u6570\u7ec4\uff0c\u6700\u540e\u4ece\u8fd9\u4e2a chunk \u6570\u7ec4\u4e2d\u9009\u62e9\u4e00\u4e2a\u7528\u4e8e\u5b58\u50a8\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u8fd9\u4e2a slab \u4e2d\u6ca1\u6709 chunk \u53ef\u4ee5\u5206\u914d\u4e86\u600e\u4e48\u529e\uff0c\u5982\u679c MemCache \u542f\u52a8\u6ca1\u6709\u8ffd\u52a0-M\uff08\u7981\u6b62 LRU\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u5185\u5b58\u4e0d\u591f\u4f1a\u62a5 Out Of Memory \u9519\u8bef\uff09\uff0c\u90a3\u4e48 MemCache \u4f1a\u628a\u8fd9\u4e2a slab \u4e2d\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u7684 chunk \u4e2d\u7684\u6570\u636e\u6e05\u7406\u6389\uff0c\u7136\u540e\u653e\u4e0a\u6700\u65b0\u7684\u6570\u636e\u3002\u9488\u5bf9 MemCache \u7684\u5185\u5b58\u5206\u914d\u53ca\u56de\u6536\u7b97\u6cd5\uff0c\u603b\u7ed3\u4e09\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"MemCache \u7684\u5185\u5b58\u5206\u914d chunk \u91cc\u9762\u4f1a\u6709\u5185\u5b58\u6d6a\u8d39\uff0c88 \u5b57\u8282\u7684 value \u5206\u914d\u5728 128 \u5b57\u8282\uff08\u7d27\u63a5\u7740\u5927\u7684\u7528\uff09\u7684 chunk \u4e2d\uff0c\u5c31\u635f\u5931\u4e86 30 \u5b57\u8282\uff0c\u4f46\u662f\u8fd9\u4e5f\u907f\u514d\u4e86\u7ba1\u7406\u5185\u5b58\u788e\u7247\u7684\u95ee\u9898"),(0,l.kt)("li",{parentName:"ol"},"MemCache \u7684 LRU \u7b97\u6cd5\u4e0d\u662f\u9488\u5bf9\u5168\u5c40\u7684\uff0c\u662f\u9488\u5bf9 slab \u7684"),(0,l.kt)("li",{parentName:"ol"},"\u5e94\u8be5\u53ef\u4ee5\u7406\u89e3\u4e3a\u4ec0\u4e48 MemCache \u5b58\u653e\u7684 value \u5927\u5c0f\u662f\u9650\u5236\u7684\uff0c\u56e0\u4e3a\u4e00\u4e2a\u65b0\u6570\u636e\u8fc7\u6765\uff0cslab \u4f1a\u5148\u4ee5 page \u4e3a\u5355\u4f4d\u7533\u8bf7\u4e00\u5757\u5185\u5b58\uff0c\u7533\u8bf7\u7684\u5185\u5b58\u6700\u591a\u5c31\u53ea\u6709 1M\uff0c\u6240\u4ee5 value \u5927\u5c0f\u81ea\u7136\u4e0d\u80fd\u5927\u4e8e 1M \u4e86")),(0,l.kt)("h2",{id:"\u603b\u7ed3-memcache-\u7684\u7279\u6027\u548c\u9650\u5236"},"\u603b\u7ed3 MemCache \u7684\u7279\u6027\u548c\u9650\u5236"),(0,l.kt)("p",null,"\u4e0a\u9762\u5df2\u7ecf\u5bf9\u4e8e MemCache \u505a\u4e86\u4e00\u4e2a\u6bd4\u8f83\u8be6\u7ec6\u7684\u89e3\u8bfb\uff0c\u8fd9\u91cc\u518d\u6b21\u603b\u7ed3 MemCache \u7684\u9650\u5236\u548c\u7279\u6027\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MemCache \u4e2d\u53ef\u4ee5\u4fdd\u5b58\u7684 item \u6570\u636e\u91cf\u662f\u6ca1\u6709\u9650\u5236\u7684\uff0c\u53ea\u8981\u5185\u5b58\u8db3\u591f"),(0,l.kt)("li",{parentName:"ul"},"MemCache \u5355\u8fdb\u7a0b\u5728 32 \u4f4d\u673a\u4e2d\u6700\u5927\u4f7f\u7528\u5185\u5b58\u4e3a 2G\uff0c\u8fd9\u4e2a\u4e4b\u524d\u7684\u6587\u7ae0\u63d0\u4e86\u591a\u6b21\u4e86\uff0c64 \u4f4d\u673a\u5219\u6ca1\u6709\u9650\u5236"),(0,l.kt)("li",{parentName:"ul"},"Key \u6700\u5927\u4e3a 250 \u4e2a\u5b57\u8282\uff0c\u8d85\u8fc7\u8be5\u957f\u5ea6\u65e0\u6cd5\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"\u5355\u4e2a item \u6700\u5927\u6570\u636e\u662f 1MB\uff0c\u8d85\u8fc7 1MB \u7684\u6570\u636e\u4e0d\u4e88\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"MemCache \u670d\u52a1\u7aef\u662f\u4e0d\u5b89\u5168\u7684\uff0c\u6bd4\u5982\u5df2\u77e5\u67d0\u4e2a MemCache \u8282\u70b9\uff0c\u53ef\u4ee5\u76f4\u63a5 telnet \u8fc7\u53bb\uff0c\u5e76\u901a\u8fc7 flush_all \u8ba9\u5df2\u7ecf\u5b58\u5728\u7684\u952e\u503c\u5bf9\u7acb\u5373\u5931\u6548"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u591f\u904d\u5386 MemCache \u4e2d\u6240\u6709\u7684 item\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u64cd\u4f5c\u7684\u901f\u5ea6\u76f8\u5bf9\u7f13\u6162\u4e14\u4f1a\u963b\u585e\u5176\u4ed6\u7684\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"MemCache \u7684\u9ad8\u6027\u80fd\u6e90\u81ea\u4e8e\u4e24\u9636\u6bb5\u54c8\u5e0c\u7ed3\u6784\uff1a\u7b2c\u4e00\u9636\u6bb5\u5728\u5ba2\u6237\u7aef\uff0c\u901a\u8fc7 Hash \u7b97\u6cd5\u6839\u636e Key \u503c\u7b97\u51fa\u4e00\u4e2a\u8282\u70b9\uff1b\u7b2c\u4e8c\u9636\u6bb5\u5728\u670d\u52a1\u7aef\uff0c\u901a\u8fc7\u4e00\u4e2a\u5185\u90e8\u7684 Hash \u7b97\u6cd5\uff0c\u67e5\u627e\u771f\u6b63\u7684 item \u5e76\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002\u4ece\u5b9e\u73b0\u7684\u89d2\u5ea6\u770b\uff0cMemCache \u662f\u4e00\u4e2a\u975e\u963b\u585e\u7684\u3001\u57fa\u4e8e\u4e8b\u4ef6\u7684\u670d\u52a1\u5668\u7a0b\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"MemCache \u8bbe\u7f6e\u6dfb\u52a0\u67d0\u4e00\u4e2a Key \u503c\u7684\u65f6\u5019\uff0c\u4f20\u5165 expiry \u4e3a 0 \u8868\u793a\u8fd9\u4e2a Key \u503c\u6c38\u4e45\u6709\u6548\uff0c\u8fd9\u4e2a Key \u503c\u4e5f\u4f1a\u5728 30 \u5929\u4e4b\u540e\u5931\u6548\u3002")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/zczzyezgycsz8888/article/details/84925839?ivk_sa=1024320u"},"memcache \u57fa\u672c\u539f\u7406\u53ca\u96c6\u7fa4\u539f\u7406")))}i.isMDXComponent=!0},8055:(e,a,t)=>{t.d(a,{Z:()=>c});const c=t.p+"assets/images/memcache1-a5f51674ce8c53636c73820220fee4f8.png"},269:(e,a,t)=>{t.d(a,{Z:()=>c});const c=t.p+"assets/images/memcache2-ceda937e6fb9f81504b484f395973a57.png"},6096:(e,a,t)=>{t.d(a,{Z:()=>c});const c=t.p+"assets/images/memcache3-a412cd43d03868702162d4029a956540.png"},8519:(e,a,t)=>{t.d(a,{Z:()=>c});const c=t.p+"assets/images/memcache4-fe5f321d32d3a8186022f7f7260ad1b2.jpg"}}]);