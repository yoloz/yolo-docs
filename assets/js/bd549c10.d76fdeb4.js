"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[516],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),k=o,m=d["".concat(c,".").concat(k)]||d[k]||s[k]||a;return t?n.createElement(m,l(l({ref:r},u),{},{components:t})):n.createElement(m,l({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=k;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},48:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={},l=void 0,i={unversionedId:"bigdata/kafka\u4f18\u5316\u914d\u7f6e",id:"bigdata/kafka\u4f18\u5316\u914d\u7f6e",title:"kafka\u4f18\u5316\u914d\u7f6e",description:"\u751f\u4ea7\u8005",source:"@site/docs/bigdata/kafka\u4f18\u5316\u914d\u7f6e.md",sourceDirName:"bigdata",slug:"/bigdata/kafka\u4f18\u5316\u914d\u7f6e",permalink:"/docs/bigdata/kafka\u4f18\u5316\u914d\u7f6e",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/kafka\u4f18\u5316\u914d\u7f6e.md",tags:[],version:"current",lastUpdatedAt:1686370023,formattedLastUpdatedAt:"2023\u5e746\u670810\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"hive\u7684JDBC",permalink:"/docs/bigdata/hive\u7684JDBC"},next:{title:"kafka\u5b89\u5168\u914d\u7f6e",permalink:"/docs/bigdata/kafka\u5b89\u5168\u914d\u7f6e"}},c={},p=[{value:"\u751f\u4ea7\u8005",id:"\u751f\u4ea7\u8005",level:2},{value:"\u53c2\u6570\u914d\u7f6e",id:"\u53c2\u6570\u914d\u7f6e",level:2},{value:"acks",id:"acks",level:3},{value:"buffer.memory(\u541e\u5410\u91cf)",id:"buffermemory\u541e\u5410\u91cf",level:3},{value:"compression.type(lZ4)",id:"compressiontypelz4",level:3},{value:"retries(\u6ce8\u610f\u6d88\u606f\u4e71\u5e8f, EOS)",id:"retries\u6ce8\u610f\u6d88\u606f\u4e71\u5e8f-eos",level:3},{value:"linger.ms(\u541e\u5410\u91cf\u548c\u5ef6\u65f6\u6027\u80fd)",id:"lingerms\u541e\u5410\u91cf\u548c\u5ef6\u65f6\u6027\u80fd",level:3},{value:"Error",id:"error",level:2},{value:"NETWORK_EXCEPTION",id:"network_exception",level:3},{value:"broker \u53ef\u4f18\u5316\u53c2\u6570\uff1a",id:"broker-\u53ef\u4f18\u5316\u53c2\u6570",level:2}],u={toc:p},d="wrapper";function s(e){let{components:r,...t}=e;return(0,o.kt)(d,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u751f\u4ea7\u8005"},"\u751f\u4ea7\u8005"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Producer \u9996\u5148\u4f7f\u7528\u7528\u6237\u4e3b\u7ebf\u7a0b\u5c06\u5f85\u53d1\u9001\u7684\u6d88\u606f\u5c01\u88c5\u8fdb\u4e00\u4e2a ProducerRecord \u7c7b\u5b9e\u4f8b\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8fdb\u884c\u5e8f\u5217\u5316\u540e\uff0c\u53d1\u9001\u7ed9 Partioner\uff0c\u7531 Partioner \u786e\u5b9a\u76ee\u6807\u5206\u533a\u540e\uff0c\u53d1\u9001\u5230 Producer \u7a0b\u5e8f\u4e2d\u7684\u4e00\u5757\u5185\u5b58\u7f13\u51b2\u533a\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ul"},"Producer \u7684\u53e6\u4e00\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\uff08\u5373 Sender \u7ebf\u7a0b\uff09\uff0c\u5219\u8d1f\u8d23\u5b9e\u65f6\u5730\u4ece\u8be5\u7f13\u51b2\u533a\u4e2d\u63d0\u53d6\u51fa\u51c6\u5907\u597d\u7684\u6d88\u606f\u5c01\u88c5\u5230\u4e00\u4e2a\u6279\u6b21\u7684\u5185\uff0c\u7edf\u4e00\u53d1\u9001\u7ed9\u5bf9\u5e94\u7684 broker \u4e2d\u3002")),(0,o.kt)("h2",{id:"\u53c2\u6570\u914d\u7f6e"},"\u53c2\u6570\u914d\u7f6e"),(0,o.kt)("h3",{id:"acks"},"acks"),(0,o.kt)("p",null,"\u5728\u6d88\u606f\u88ab\u8ba4\u4e3a\u662f\u201c\u5df2\u63d0\u4ea4\u201d\u4e4b\u524d\uff0cproducer \u9700\u8981 leader \u786e\u8ba4\u7684 produce \u8bf7\u6c42\u7684\u5e94\u7b54\u6570\u3002\u8be5\u53c2\u6570\u7528\u4e8e\u63a7\u5236\u6d88\u606f\u7684\u6301\u4e45\u6027\uff0c\u76ee\u524d\u63d0\u4f9b\u4e86 3 \u4e2a\u53d6\u503c\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"acks = 0: \u8868\u793a produce \u8bf7\u6c42\u7acb\u5373\u8fd4\u56de\uff0c\u4e0d\u9700\u8981\u7b49\u5f85 leader \u7684\u4efb\u4f55\u786e\u8ba4\u3002\u8fd9\u79cd\u65b9\u6848\u6709\u6700\u9ad8\u7684\u541e\u5410\u7387\uff0c\u4f46\u662f\u4e0d\u4fdd\u8bc1\u6d88\u606f\u662f\u5426\u771f\u7684\u53d1\u9001\u6210\u529f\u3002"),(0,o.kt)("li",{parentName:"ul"},"acks = -1: \u8868\u793a\u5206\u533a leader \u5fc5\u987b\u7b49\u5f85\u6d88\u606f\u88ab\u6210\u529f\u5199\u5165\u5230\u6240\u6709\u7684 ISR \u526f\u672c(\u540c\u6b65\u526f\u672c)\u4e2d\u624d\u8ba4\u4e3a produce \u8bf7\u6c42\u6210\u529f\u3002\u8fd9\u79cd\u65b9\u6848\u63d0\u4f9b\u6700\u9ad8\u7684\u6d88\u606f\u6301\u4e45\u6027\u4fdd\u8bc1\uff0c\u4f46\u662f\u7406\u8bba\u4e0a\u541e\u5410\u7387\u4e5f\u662f\u6700\u5dee\u7684\u3002"),(0,o.kt)("li",{parentName:"ul"},"acks = 1: \u8868\u793a leader \u526f\u672c\u5fc5\u987b\u5e94\u7b54\u6b64 produce \u8bf7\u6c42\u5e76\u5199\u5165\u6d88\u606f\u5230\u672c\u5730\u65e5\u5fd7\uff0c\u4e4b\u540e produce \u8bf7\u6c42\u88ab\u8ba4\u4e3a\u6210\u529f\u3002\u5982\u679c\u6b64\u65f6 leader \u526f\u672c\u5e94\u7b54\u8bf7\u6c42\u4e4b\u540e\u6302\u6389\u4e86\uff0c\u6d88\u606f\u4f1a\u4e22\u5931\u3002\u8fd9\u662f\u4e2a\u6298\u8877\u7684\u65b9\u6848\uff0c\u63d0\u4f9b\u4e86\u4e0d\u9519\u7684\u6301\u4e45\u6027\u4fdd\u8bc1\u548c\u541e\u5410\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5982\u679c\u8981\u8f83\u9ad8\u7684\u6301\u4e45\u6027\u8981\u6c42\u4ee5\u53ca\u65e0\u6570\u636e\u4e22\u5931\u7684\u9700\u6c42\uff0c\u8bbe\u7f6e acks = -1\u3002\u5176\u4ed6\u60c5\u51b5\u4e0b\u8bbe\u7f6e acks = 1")),(0,o.kt)("h3",{id:"buffermemory\u541e\u5410\u91cf"},"buffer.memory(\u541e\u5410\u91cf)"),(0,o.kt)("p",null,"\u8be5\u53c2\u6570\u7528\u4e8e\u6307\u5b9a Producer \u7aef\u7528\u4e8e\u7f13\u5b58\u6d88\u606f\u7684\u7f13\u51b2\u533a\u5927\u5c0f\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282\uff0c\u9ed8\u8ba4\u503c\u4e3a\uff1a33554432(32M)\u3002kafka \u91c7\u7528\u7684\u662f\u5f02\u6b65\u53d1\u9001\u7684\u6d88\u606f\u67b6\u6784\uff0cprducer \u542f\u52a8\u65f6\u4f1a\u9996\u5148\u521b\u5efa\u4e00\u5757\u5185\u5b58\u7f13\u51b2\u533a\u7528\u4e8e\u4fdd\u5b58\u5f85\u53d1\u9001\u7684\u6d88\u606f\uff0c\u7136\u540e\u7531\u4e00\u4e2a\u4e13\u5c5e\u7ebf\u7a0b\u8d1f\u8d23\u4ece\u7f13\u51b2\u533a\u8bfb\u53d6\u6d88\u606f\u8fdb\u884c\u771f\u6b63\u7684\u53d1\u9001\u3002"),(0,o.kt)("p",null,"\u6d88\u606f\u6301\u7eed\u53d1\u9001\u8fc7\u7a0b\u4e2d\uff0c\u5f53\u7f13\u51b2\u533a\u88ab\u586b\u6ee1\u540e\uff0cproducer \u7acb\u5373\u8fdb\u5165\u963b\u585e\u72b6\u6001\u76f4\u5230\u7a7a\u95f2\u5185\u5b58\u88ab\u91ca\u653e\u51fa\u6765\uff0c\u8fd9\u6bb5\u65f6\u95f4\u4e0d\u80fd\u8d85\u8fc7 max.blocks.ms \u8bbe\u7f6e\u7684\u503c\uff0c\u4e00\u65e6\u8d85\u8fc7\uff0cproducer \u5219\u4f1a\u629b\u51fa TimeoutException \u5f02\u5e38\uff0c\u56e0\u4e3a Producer \u662f\u7ebf\u7a0b\u5b89\u5168\u7684\uff0c\u82e5\u4e00\u76f4\u62a5 TimeoutException\uff0c\u9700\u8981\u8003\u8651\u8c03\u9ad8 buffer.memory \u4e86\u3002"),(0,o.kt)("p",null,"\u7528\u6237\u5728\u4f7f\u7528\u591a\u4e2a\u7ebf\u7a0b\u5171\u4eab kafka producer \u65f6\uff0c\u5f88\u5bb9\u6613\u628a buffer.memory \u6253\u6ee1\u3002"),(0,o.kt)("h3",{id:"compressiontypelz4"},"compression.type(lZ4)"),(0,o.kt)("p",null,"producer \u538b\u7f29\u5668\uff0c\u76ee\u524d\u652f\u6301 none\uff08\u4e0d\u538b\u7f29\uff09\uff0cgzip\uff0csnappy \u548c lz4\u3002"),(0,o.kt)("p",null,"\u57fa\u4e8e\u516c\u53f8\u7269\u8054\u7f51\u5e73\u53f0\uff0c\u8bd5\u9a8c\u8fc7\u76ee\u524d lz4 \u7684\u6548\u679c\u6700\u597d\u3002\u5f53\u7136 2016 \u5e74 8 \u6708\uff0cFaceBook \u5f00\u6e90\u4e86 Ztandard\u3002\u5b98\u7f51\u6d4b\u8bd5\uff1a Ztandard \u538b\u7f29\u7387\u4e3a 2.8\uff0csnappy \u4e3a 2.091\uff0cLZ4 \u4e3a 2.101"),(0,o.kt)("h3",{id:"retries\u6ce8\u610f\u6d88\u606f\u4e71\u5e8f-eos"},"retries(\u6ce8\u610f\u6d88\u606f\u4e71\u5e8f, EOS)"),(0,o.kt)("p",null,"\u91cd\u8bd5\u65f6 producer \u4f1a\u91cd\u65b0\u53d1\u9001\u4e4b\u524d\u7531\u4e8e\u77ac\u65f6\u539f\u56e0\u51fa\u73b0\u5931\u8d25\u7684\u6d88\u606f\u3002\u77ac\u65f6\u5931\u8d25\u7684\u539f\u56e0\u53ef\u80fd\u5305\u62ec\uff1a\u5143\u6570\u636e\u4fe1\u606f\u5931\u6548\u3001\u526f\u672c\u6570\u91cf\u4e0d\u8db3\u3001\u8d85\u65f6\u3001\u4f4d\u79fb\u8d8a\u754c\u6216\u672a\u77e5\u5206\u533a\u7b49\u3002\u5018\u82e5\u8bbe\u7f6e\u4e86 retries > 0\uff0c\u90a3\u4e48\u8fd9\u4e9b\u60c5\u51b5\u4e0b producer \u4f1a\u5c1d\u8bd5\u91cd\u8bd5"),(0,o.kt)("p",null,"max.in.flight.requests.per.connection \u8bbe\u7f6e\u5927\u4e8e 1\uff0c\u8bbe\u7f6e retries \u5c31\u6709\u53ef\u80fd\u9020\u6210\u53d1\u9001\u6d88\u606f\u7684\u4e71\n\u5e8f\uff1b"),(0,o.kt)("p",null,'kafka \u540e\u671f\u7248\u672c\u5df2\u7ecf\u652f\u6301"\u7cbe\u786e\u5230\u4e00\u6b21\u7684\u8bed\u4e49\u201d\uff0c\u56e0\u6b64\u6d88\u606f\u7684\u91cd\u8bd5\u4e0d\u4f1a\u9020\u6210\u6d88\u606f\u7684\u91cd\u590d\u53d1\u9001'),(0,o.kt)("h3",{id:"lingerms\u541e\u5410\u91cf\u548c\u5ef6\u65f6\u6027\u80fd"},"linger.ms(\u541e\u5410\u91cf\u548c\u5ef6\u65f6\u6027\u80fd)"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u662f 0\uff0c\u8868\u793a\u4e0d\u505a\u505c\u7559\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u6709\u7684 batch \u4e2d\u6ca1\u6709\u5305\u542b\u8db3\u591f\u591a\u7684 produce \u8bf7\u6c42\u5c31\u88ab\u53d1\u9001\u51fa\u53bb\u4e86\uff0c\u9020\u6210\u4e86\u5927\u91cf\u7684\u5c0f batch\uff0c\u7ed9\u7f51\u7edc IO \u5e26\u6765\u7684\u6781\u5927\u7684\u538b\u529b"),(0,o.kt)("p",null,"\u4e3a\u4e86\u51cf\u5c11\u4e86\u7f51\u7edc IO\uff0c\u63d0\u5347\u4e86\u6574\u4f53\u7684 TPS\u3002\u5047\u8bbe\u8bbe\u7f6e linger.ms=5\uff0c\u8868\u793a producer \u8bf7\u6c42\u53ef\u80fd\u4f1a\u5ef6\u65f6 5ms \u624d\u4f1a\u88ab\u53d1\u9001"),(0,o.kt)("h2",{id:"error"},"Error"),(0,o.kt)("h3",{id:"network_exception"},"NETWORK_EXCEPTION"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Got error produce response with correlation id xxx on topic-partition xxxxx, retrying (9 attempts left). Error: NETWORK_EXCEPTION\nGot error produce response with correlation id xxx on topic-partition xxxxx, retrying (9 attempts left). Error: REQUEST_TIMED_OUT\n")),(0,o.kt)("p",null,"\u6682\u65f6\u5b9a\u4f4d\u662f producer \u538b\u529b\u8f83\u5927\uff0c\u9ed8\u8ba4\u914d\u7f6e\u9700\u8981\u4f18\u5316(\u7ec6\u8282\u53ef\u53c2\u4e0a\u8ff0\u8bf4\u660e)\u3002"),(0,o.kt)("h2",{id:"broker-\u53ef\u4f18\u5316\u53c2\u6570"},"broker \u53ef\u4f18\u5316\u53c2\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"num.network.threads=cpu\u6838\u6570+1\nnum.io.threads=cpu\u6838\u6570*2\nsocket.send.buffer.bytes=1024000\nsocket.receive.buffer.bytes=1024000\n")))}s.isMDXComponent=!0}}]);