"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[8338],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},k="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(a),u=r,c=k["".concat(d,".").concat(u)]||k[u]||N[u]||l;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[k]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},62428:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"bigdata/lucene\u7684Index\u6587\u6863\u6a21\u578b",id:"bigdata/lucene\u7684Index\u6587\u6863\u6a21\u578b",title:"lucene\u7684Index\u6587\u6863\u6a21\u578b",description:"Lucene \u4e2d\u5305\u542b\u4e86\u56db\u79cd\u57fa\u672c\u6570\u636e\u7c7b\u578b\uff0c\u5206\u522b\u662f\uff1a",source:"@site/docs/bigdata/lucene\u7684Index\u6587\u6863\u6a21\u578b.md",sourceDirName:"bigdata",slug:"/bigdata/lucene\u7684Index\u6587\u6863\u6a21\u578b",permalink:"/docs/bigdata/lucene\u7684Index\u6587\u6863\u6a21\u578b",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/lucene\u7684Index\u6587\u6863\u6a21\u578b.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"kafka\u6d88\u8d39\u8005\u6e90\u7801",permalink:"/docs/bigdata/kafka\u6d88\u8d39\u8005\u6e90\u7801"},next:{title:"memcache\u5b66\u4e60",permalink:"/docs/bigdata/memcache\u5b66\u4e60"}},d={},p=[{value:"\u7d22\u5f15",id:"\u7d22\u5f15",level:2},{value:"Invert Index",id:"invert-index",level:3},{value:"DocValues",id:"docvalues",level:3},{value:"Store",id:"store",level:3},{value:"\u7d22\u5f15\u8fc7\u7a0b",id:"\u7d22\u5f15\u8fc7\u7a0b",level:2},{value:"\u7d22\u5f15\u64cd\u4f5c",id:"\u7d22\u5f15\u64cd\u4f5c",level:3},{value:"\u57df(Field)\u9009\u9879",id:"\u57dffield\u9009\u9879",level:3},{value:"\u57df\u7d22\u5f15\u9009\u9879",id:"\u57df\u7d22\u5f15\u9009\u9879",level:4},{value:"\u57df\u5b58\u50a8\u9009\u9879",id:"\u57df\u5b58\u50a8\u9009\u9879",level:4},{value:"\u57df\u7684\u9879\u5411\u91cf\u9009\u9879",id:"\u57df\u7684\u9879\u5411\u91cf\u9009\u9879",level:4},{value:"Reader\u3001TokenStream \u548c byte[]\u57df\u503c",id:"readertokenstream-\u548c-byte\u57df\u503c",level:4},{value:"\u57df\u9009\u9879\u7ec4\u5408",id:"\u57df\u9009\u9879\u7ec4\u5408",level:4},{value:"\u57df\u6392\u5e8f\u9009\u9879",id:"\u57df\u6392\u5e8f\u9009\u9879",level:4},{value:"\u591a\u503c\u57df",id:"\u591a\u503c\u57df",level:4},{value:"\u5bf9\u6570\u5b57\u3001\u65e5\u671f\u3001\u65f6\u95f4\u7b49\u8fdb\u884c\u7d22\u5f15",id:"\u5bf9\u6570\u5b57\u65e5\u671f\u65f6\u95f4\u7b49\u8fdb\u884c\u7d22\u5f15",level:3}],m={toc:p},k="wrapper";function N(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Lucene \u4e2d\u5305\u542b\u4e86\u56db\u79cd\u57fa\u672c\u6570\u636e\u7c7b\u578b\uff0c\u5206\u522b\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Index"),"\uff1a\u7d22\u5f15\uff0c\u7531\u5f88\u591a\u7684 Document \u7ec4\u6210\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Document"),"\uff1a\u7531\u5f88\u591a\u7684 Field \u7ec4\u6210\uff0c\u662f Index \u548c Search \u7684\u6700\u5c0f\u5355\u4f4d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Field"),"\uff1a\u7531\u5f88\u591a\u7684 term \u7ec4\u6210\uff0c\u5305\u62ec field_name \u548c field_value\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Term"),"\uff1a\u7531\u5f88\u591a\u7684\u5b57\u8282\u7ec4\u6210\uff0c\u53ef\u4ee5\u5206\u8bcd\uff0c\u5206\u8bcd\u4e4b\u540e\u6bcf\u4e2a\u8bcd\u5373\u4e3a\u4e00\u4e2a term\u3002term \u662f\u7d22\u5f15\u7684\u6700\u5c0f\u5355\u5143\u3002")),(0,r.kt)("p",null,"Lucene \u4e2d\u5b58\u50a8\u7684\u7d22\u5f15\u4e3b\u8981\u5206\u4e3a\u4e09\u79cd\u7c7b\u578b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Invert Index"),"\uff0c\u5373\u5012\u6392\u7d22\u5f15, \u901a\u8fc7 term \u53ef\u4ee5\u5feb\u901f\u67e5\u627e\u5230\u5305\u542b\u8be5 term \u7684 doc_id\u3002\u5982\u679c Field \u914d\u7f6e\u5206\u8bcd\uff0c\u5219\u5206\u8bcd\u540e\u7684\u6bcf\u4e2a term \u90fd\u4f1a\u8fdb\u5165\u5012\u6392\u7d22\u5f15\uff0c\u5982\u679c Field \u4e0d\u6307\u5b9a\u5206\u8bcd\uff0c\u90a3\u8be5 Field \u7684 value \u503c\u5219\u4f1a\u4f5c\u4e3a\u4e00\u4e2a term \u8fdb\u5165\u5012\u6392\u3002\uff08\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f term \u7684\u957f\u5ea6\u662f\u6709\u9650\u5236\u7684\uff0c\u5982\u679c\u5bf9\u4e00\u4e2a Field \u4e0d\u91c7\u53d6\u5206\u8bcd\uff0c\u90a3\u4e48\u4e0d\u5efa\u8bae\u8be5 Field \u5b58\u50a8\u8fc7\u957f\u7684\u503c\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DocValues"),"\uff0c\u5373\u6b63\u6392\u7d22\u5f15, \u91c7\u7528\u7684\u662f\u7c7b\u4f3c\u6570\u636e\u5e93\u7684\u5217\u5f0f\u5b58\u50a8\u3002\u5bf9\u4e8e\u4e00\u4e9b\u7279\u6b8a\u9700\u6c42\u7684\u5b57\u6bb5\u53ef\u4ee5\u9009\u62e9\u8fd9\u79cd\u7d22\u5f15\u65b9\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Store"),"\uff0c\u5373\u539f\u6587, \u5b58\u50a8\u6574\u4e2a\u5b8c\u6574 Document \u7684\u539f\u59cb\u4fe1\u606f\u3002")),(0,r.kt)("h2",{id:"\u7d22\u5f15"},"\u7d22\u5f15"),(0,r.kt)("h3",{id:"invert-index"},"Invert Index"),(0,r.kt)("p",null,"\u5012\u6392\u7d22\u5f15\u662f lucene \u7684\u6838\u5fc3\u7d22\u5f15\u7c7b\u578b\uff0c\u91c7\u7528\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5012\u6392\u7d22\u5f15\u4e2d\u7684 key \u5c31\u662f\u4e00\u4e2a term\uff0cvalue \u5c31\u662f\u4ee5 doc_id \u5f62\u6210\u7684\u94fe\u8868\u7ed3\u6784\u3002\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Term"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Doc_1"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Doc_2"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Quick"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"The"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"brown"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"dog"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"dogs"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u679c\u6211\u4eec\u60f3\u641c\u7d22 quick brown \uff0c\u6211\u4eec\u53ea\u9700\u8981\u67e5\u627e\u5305\u542b\u6bcf\u4e2a\u8bcd\u6761\u7684\u6587\u6863\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Term"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Doc_1"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Doc_2"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"brown"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Quick"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"total"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")))),(0,r.kt)("p",null,"\u8fd9\u91cc\u5206\u522b\u5339\u914d\u5230\u4e86 doc1 \u548c doc2\uff0c\u4f46\u662f doc1 \u5339\u914d\u5ea6\u8981\u9ad8\u4e8e doc2\u3002"),(0,r.kt)("p",null,"\u5012\u6392\u7d22\u5f15\u4e2d\u7684 value \u6709\u56db\u79cd\u5b58\u50a8\u7c7b\u578b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DOCS"),"\uff1a\u53ea\u5b58\u50a8 doc_id\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DOCS_AND_FREQS"),"\uff1a\u5b58\u50a8 doc_id \u548c\u8bcd\u9891\uff08Term Freq\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DOCS_AND_FREQS_AND_POSITIONS"),"\uff1a\u5b58\u50a8 doc_id\u3001\u8bcd\u9891\uff08Term Freq\uff09\u548c\u4f4d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DOCS_AND_FREQS_AND_POSITIONS_AND_OFFSETS"),"\uff1a\u5b58\u50a8 doc_id\u3001\u8bcd\u9891\uff08Term Freq\uff09\u3001\u4f4d\u7f6e\u548c\u504f\u79fb(offset)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"org.apache.lucene.index.IndexOptions")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public enum IndexOptions {\n  NONE,\n  DOCS,\n  DOCS_AND_FREQS,\n  DOCS_AND_FREQS_AND_POSITIONS,\n  DOCS_AND_FREQS_AND_POSITIONS_AND_OFFSETS,\n}\n")),(0,r.kt)("h3",{id:"docvalues"},"DocValues"),(0,r.kt)("p",null,"\u6b63\u6392\u7d22\u5f15\u7c7b\u4f3c\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684\u5b58\u50a8\u6a21\u5f0f\uff0c\u4f5c\u7528\u662f\u901a\u8fc7 doc_id \u548c field_name \u53ef\u4ee5\u5feb\u901f\u5b9a\u4f4d\u5230\u6307\u5b9a doc \u7684\u7279\u5b9a\u5b57\u6bb5\u503c\u3002DocValues \u7684 key \u662f doc_id+field_name\uff0cvalue \u662f field_value\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5982\u679c\u57df\u8981\u8fdb\u884c facet\uff0cgourp\uff0chighlight \u7b49\u67e5\u8be2\u53ef\u4ee5\u4f7f\u7528 docValue\uff0c\u8282\u7701\u5185\u5b58\u3002")),(0,r.kt)("h3",{id:"store"},"Store"),(0,r.kt)("p",null,"\u5b58\u50a8\u7684\u662f Document \u7684\u5b8c\u6574\u4fe1\u606f\uff0c\u5305\u62ec\u6240\u6709 field_name \u548c field_value\u3002Store \u7684 key \u662f doc_id\uff0cvalue \u662f field_name+field_value\u3002\u5bf9\u4e8e\u4e0a\u8ff0\u4e2d\u9700\u8981\u805a\u5408\u548c\u6392\u5e8f\u7684 Field \u5e76\u6ca1\u6709\u5f00\u542f DocValues \u7684\u60c5\u51b5\uff0c\u4f9d\u7136\u53ef\u4ee5\u5b9e\u73b0\u6392\u5e8f\u548c\u805a\u5408\uff0c\u4f1a\u4ece Store \u4e2d\u83b7\u53d6\u8981\u6392\u5e8f\u805a\u5408\u7684\u5b57\u6bb5\u503c\u3002"),(0,r.kt)("h2",{id:"\u7d22\u5f15\u8fc7\u7a0b"},"\u7d22\u5f15\u8fc7\u7a0b"),(0,r.kt)("p",null,"\u603b\u4f53\u6765\u8bf4\uff0c\u7d22\u5f15\u8fc7\u7a0b\u4e3a\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u63d0\u53d6"),"\uff1a\u4ece\u539f\u6587\u63d0\u53d6\uff0c\u5e76\u521b\u5efa Document \u548c Field \u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5206\u6790"),"\uff1a\u5206\u6790\u6587\u672c\u5c06\u6587\u672c\u6570\u636e\u5206\u5272\u6210\u5b57\u6c47\u5355\u5143\u4e32\uff0c\u7136\u540e\u5bf9\u5b83\u4eec\u6267\u884c\u4e00\u4e9b\u53ef\u9009\u64cd\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5efa\u7acb\u7d22\u5f15"),"\uff1a\u901a\u8fc7 IndexWriter \u7684 addDocument \u5199\u5165\u5230\u7d22\u5f15\u4e2d\uff0clucene \u5c06\u8f93\u5165\u6570\u636e\u4ee5\u4e00\u79cd\u5012\u6392\u7d22\u5f15(inverted index)\u7684\u6570\u636e\u7ed3\u6784\u5b58\u50a8\u3002")),(0,r.kt)("h3",{id:"\u7d22\u5f15\u64cd\u4f5c"},"\u7d22\u5f15\u64cd\u4f5c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u521b\u5efa IndexWriter"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IndexWriter(dir,new WhiteSpaceAnalyser(),IndexWriter.MaxField.UNLIMITED)")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"dir \u662f\u7d22\u5f15\u7684\u4fdd\u5b58\u8def\u5f84\uff0cWhiteSpaceAnalyser \u662f\u57fa\u4e8e\u7a7a\u767d\u7684\u5206\u8bcd \uff0c\u6700\u540e\u90e8\u9650\u5b9a Field \u7684\u6570\u91cf\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u521b\u5efa\u6587\u6863 Document \u548c Field"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Document doc = new Document();\ndoc.add(new Filed(key,value,STORE?,INDEX?)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"key \u662f field \u7684\u68c0\u7d22\u5b57\u6bb5\u540d\uff0cvalue \u662f\u5f85\u5199\u5165/\u5206\u6790\u7684\u6587\u672c;")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u66f4\u65b0\u7d22\u5f15"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"updateDocument(xxxx)")," luncene \u53ea\u652f\u6301\u5168\u90e8\u66ff\u6362\uff0c\u5373\u6574\u4e2a Docuemnt \u8981\u88ab\u66ff\u6362\u6389\uff0c\u6ca1\u6cd5\u66f4\u65b0\u5355\u72ec\u7684 Field"),(0,r.kt)("h3",{id:"\u57dffield\u9009\u9879"},"\u57df(Field)\u9009\u9879"),(0,r.kt)("h4",{id:"\u57df\u7d22\u5f15\u9009\u9879"},"\u57df\u7d22\u5f15\u9009\u9879"),(0,r.kt)("p",null,"\u57df\u7d22\u5f15\u9009\u9879(Field.Index.","*",")\u901a\u8fc7\u5012\u6392\u7d22\u5f15\u6765\u63a7\u5236\u57df\u6587\u672c\u662f\u5426\u53ef\u88ab\u641c\u7d22\u3002\u5177\u4f53\u9009\u9879\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Index. ANALYZED"),"\uff1a\u4f7f\u7528\u5206\u6790\u5668\u5c06\u57df\u503c\u5206\u89e3\u6210\u72ec\u7acb\u7684\u8bcd\u6c47\u5355\u5143\u6d41\uff0c\u5e76\u4f7f\u6bcf\u4e2a\u8bcd\u6c47\u5355\u5143\u80fd\u88ab\u641c\u7d22\u3002\u8be5\u9009\u9879\u9002\u7528\u4e8e\u666e\u901a\u6587\u672c\u57df(\u5982\u6b63\u6587\u3001\u6807\u9898\u3001\u6458\u8981\u7b49)\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Index. NOT_ANALYZED"),"\uff1a\u5bf9\u57df\u8fdb\u884c\u7d22\u5f15\uff0c\u4f46\u4e0d\u5bf9 String \u503c\u8fdb\u884c\u5206\u6790\u3002\u8be5\u64cd\u4f5c\u5b9e\u9645\u4e0a\u5c06\u57df\u503c\u4f5c\u4e3a\u5355\u4e00\u8bcd\u6c47\u5355\u5143\u5e76\u4f7f\u4e4b\u80fd\u88ab\u641c\u7d22\u3002\u8be5\u9009\u9879\u9002\u7528\u4e8e\u7d22\u5f15\u90a3\u4e9b\u4e0d\u80fd\u88ab\u5206\u89e3\u7684\u57df\u503c\uff0c\u5982 URL\uff0c\u6587\u4ef6\u8def\u5f84\uff0c\u65e5\u671f\uff0c\u4eba\u540d\uff0c\u793e\u4fdd\u53f7\u7801\u548c\u7535\u8bdd\u53f7\u7801\u7b49\u3002\u8be5\u9009\u9879\u5c24\u5176\u9002\u7528\u4e8e\u201c\u7cbe\u786e\u5339\u914d\u201d\u641c\u7d22\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Index. ANALYZED_NO_NORMS"),"\uff1a\u8fd9\u662f Index. ANALYZED \u9009\u9879\u7684\u4e00\u4e2a\u53d8\u4f53\uff0c\u5b83\u4e0d\u4f1a\u5728\u7d22\u5f15\u4e2d\u5b58\u50a8 norms \u4fe1\u606f\u3002norms \u8bb0\u5f55\u4e86\u7d22\u5f15\u4e2d\u7684 index-time boost \u4fe1\u606f\uff0c\u4f46\u662f\u5f53\u4f60\u8fdb\u884c\u641c\u7d22\u65f6\u53ef\u80fd\u4f1a\u6bd4\u8f83\u8017\u8d39\u5185\u5b58\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Index. NOT_ANALYZED_NO_NORMS"),"\uff1a\u4e0e Index. NOT_ANALYZED \u7c7b\u4f3c\uff0c\u4f46\u4e5f\u662f\u4e0d\u5b58\u50a8 norms\u3002\u8be5\u9009\u9879\u5e38\u7528\u4e8e\u5728\u641c\u7d22\u671f\u95f4\u8282\u7701\u7d22\u5f15\u7a7a\u95f4\u548c\u51cf\u5c11\u5185\u5b58\u8017\u8d39\uff0c\u56e0\u4e3a single-token \u57df\u5e76\u4e0d\u9700\u8981 norms \u4fe1\u606f\uff0c\u9664\u975e\u5b83\u4eec\u5df2\u88ab\u8fdb\u884c\u52a0\u6743\u64cd\u4f5c\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Index. No"),": \u4f7f\u5bf9\u5e94\u7684\u57df\u503c\u4e0d\u88ab\u641c\u7d22\u3002")),(0,r.kt)("p",null,"\u5f53 lucene \u5efa\u7acb\u8d77\u5012\u6392\u7d22\u5f15\u540e\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5b83\u4f1a\u4fdd\u5b58\u6240\u6709\u5fc5\u8981\u4fe1\u606f\u4ee5\u5b9e\u65bd Vector Space Modal\u3002\u8be5 Modal \u9700\u8981\u8ba1\u7b97\u6587\u6863\u4e2d\u51fa\u73b0\u7684 term \u6570\uff0c\u4ee5\u53ca\u5b83\u4eec\u51fa\u73b0\u7684\u4f4d\u7f6e(\u8fd9\u662f\u5fc5\u8981\u7684\uff0c\u6bd4\u5982\u901a\u8fc7\u8bcd\u7ec4\u641c\u7d22\u65f6\u7528\u5230)\u3002\u4f46\u6709\u65f6\u5019\u8fd9\u4e9b\u57df\u53ea\u662f\u5728\u5e03\u5c14\u641c\u7d22\u65f6\u7528\u5230\uff0c\u5b83\u4eec\u5e76\u4e0d\u4e3a\u76f8\u5173\u8bc4\u5206\u505a\u8d21\u732e\uff0c\u4e00\u4e2a\u5e38\u89c1\u7684\u4f8b\u5b50\u662f\u57df\u53ea\u662f\u88ab\u7528\u4f5c\u8fc7\u6ee4\uff0c\u5982\u6743\u9650\u8fc7\u6ee4\u548c\u65e5\u671f\u8fc7\u6ee4\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Field.setOmitTermFreqAndPositions(true)")," \u65b9\u6cd5\u8ba9 lucene \u8df3\u8fc7\u5bf9\u8be5\u9879\u7684\u51fa\u73b0\u9891\u7387\u548c\u51fa\u73b0\u4f4d\u7f6e\u7684\u7d22\u5f15\u3002\u8be5\u65b9\u6cd5\u53ef\u4ee5\u8282\u7701\u4e00\u4e9b\u7d22\u5f15\u5728\u78c1\u76d8\u4e0a\u7684\u5b58\u50a8\u7a7a\u95f4\uff0c\u8fd8\u53ef\u4ee5\u52a0\u901f\u641c\u7d22\u548c\u8fc7\u6ee4\u8fc7\u7a0b\uff0c\u4f46\u4f1a\u6084\u6084\u5730\u963b\u6b62\u9700\u8981\u4f4d\u7f6e\u4fe1\u606f\u7684\u641c\u7d22\uff0c\u5982\u963b\u6b62 PhraseQuery \u548c SpanQuery \u7c7b\u7684\u8fd0\u884c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u52a0\u6743\u57fa\u51c6(Norms)")),(0,r.kt)("p",null,"\u5728\u7d22\u5f15\u671f\u95f4\uff0c\u6587\u6863\u4e2d\u57df\u7684\u6240\u6709\u52a0\u6743\u90fd\u88ab\u5408\u5e76\u6210\u4e00\u4e2a\u5355\u4e00\u7684\u6d6e\u70b9\u6570\u3002\u9664\u4e86\u57df\uff0c\u6587\u6863\u4e5f\u6709\u81ea\u5df1\u7684\u52a0\u6743\u503c\uff0clucene \u4f1a\u57fa\u4e8e\u57df\u7684\u8bcd\u6c47\u5355\u5143\u6570\u91cf\u81ea\u52a8\u8ba1\u7b97\u51fa\u8fd9\u4e9b\u52a0\u6743\u503c(\u66f4\u77ed\u7684\u57df\u5177\u6709\u66f4\u9ad8\u7684\u52a0\u6743)\u3002\u8fd9\u4e9b\u52a0\u6743\u88ab\u5408\u5e76\u5230\u4e00\u5904\uff0c\u5e76\u88ab\u7f16\u7801(\u91cf\u5316)\u6210\u4e00\u4e2a\u5355\u4e00\u7684\u5b57\u8282\u503c\uff0c\u4f5c\u4e3a\u57df\u6216\u6587\u6863\u4fe1\u606f\u7684\u4e00\u90e8\u5206\u5b58\u50a8\u8d77\u6765\u3002\u5728\u641c\u7d22\u671f\u95f4\uff0c\u88ab\u641c\u7d22\u57df\u7684 norms \u90fd\u88ab\u52a0\u8f7d\u5230\u5185\u5b58\u5e76\u88ab\u89e3\u7801\u8fd8\u539f\u4e3a\u6d6e\u70b9\u6570\uff0c\u7136\u540e\u7528\u4e8e\u8ba1\u7b97\u76f8\u5173\u6027\u8bc4\u5206(relevance score)\u3002"),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u5982\u679c\u7d22\u5f15\u8fdb\u884c\u4e00\u534a\u65f6\u5173\u95ed norms \u9009\u9879\uff0c\u90a3\u4e48\u5fc5\u987b\u5bf9\u6574\u4e2a\u7d22\u5f15\u8fdb\u884c\u91cd\u5efa\uff0c\u56e0\u4e3a\u5373\u4f7f\u53ea\u6709\u4e00\u4e2a\u6587\u6863\u5728\u7d22\u5f15\u65f6\u5305\u542b\u4e86 norms \u9009\u9879\uff0c\u90a3\u4e48\u968f\u540e\u7684\u6bb5\u5408\u5e76\u64cd\u4f5c\u4e2d\uff0c\u8fd9\u4e2a\u60c5\u51b5\u4f1a\u201c\u6269\u6563\u201d\uff0c\u4ece\u800c\u4f7f\u5f97\u6240\u6709\u6587\u6863\u90fd\u4f1a\u5360\u7528\u4e00\u4e2a\u5b57\u8282 norms \u7a7a\u95f4\uff0c\u5373\u4f7f\u5b83\u4eec\u5728\u6b64\u524d\u7684\u7d22\u5f15\u64cd\u4f5c\u4e2d\u6302\u6bd4\u4e86 norms \u9009\u9879\u3002"),(0,r.kt)("h4",{id:"\u57df\u5b58\u50a8\u9009\u9879"},"\u57df\u5b58\u50a8\u9009\u9879"),(0,r.kt)("p",null,"\u57df\u5b58\u50a8\u9009\u9879(Field. Store.","*",")\u7528\u6765\u786e\u5b9a\u662f\u5426\u9700\u8981\u5b58\u50a8\u57df\u7684\u771f\u5b9e\u503c\uff0c\u4ee5\u4fbf\u540e\u7eed\u641c\u7d22\u65f6\u80fd\u6062\u590d\u8fd9\u4e2a\u503c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Store. YES"),": \u6307\u5b9a\u5b58\u50a8\u57df\u503c\u3002\u8be5\u60c5\u51b5\u4e0b\uff0c\u539f\u59cb\u7684\u5b57\u7b26\u4e32\u503c\u5168\u90e8\u88ab\u4fdd\u5b58\u5728\u7d22\u5f15\u4e2d\uff0c\u5e76\u53ef\u4ee5\u7531 IndexReader \u7c7b\u6062\u590d\u3002\u8be5\u9009\u9879\u5bf9\u4e8e\u9700\u8981\u5c55\u793a\u641c\u7d22\u7ed3\u679c\u7684\u4e00\u4e9b\u57df\u5f88\u6709\u7528(\u5982 UEL\uff0c\u6807\u9898\u6216\u6570\u636e\u5e93\u4e3b\u952e)\u3002\u5982\u679c\u7d22\u5f15\u7684\u5927\u5c0f\u5728\u641c\u7d22\u7a0b\u5e8f\u8003\u8651\u4e4b\u5217\u7684\u8bdd\uff0c\u4e0d\u8981\u5b58\u50a8\u592a\u5927\u7684\u57df\u503c\uff0c\u56e0\u4e3a\u5b58\u50a8\u8fd9\u4e9b\u57df\u503c\u4f1a\u6d88\u8017\u6389\u7d22\u5f15\u7684\u5b58\u50a8\u7a7a\u95f4;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Store. NO"),": \u6307\u5b9a\u4e0d\u5b58\u50a8\u57df\u503c\u3002\u8be5\u9009\u9879\u901a\u5e38\u8ddf Index. ANALYZED \u9009\u9879\u5171\u540c\u7528\u6765\u7d22\u5f15\u5927\u7684\u6587\u672c\u57df\u503c\uff0c\u901a\u5e38\u8fd9\u4e9b\u57df\u503c\u4e0d\u7528\u6062\u590d\u4e3a\u521d\u59cb\u683c\u5f0f\uff0c\u5982 Web \u9875\u9762\u7684\u6b63\u6587\u6216\u5176\u4ed6\u7c7b\u578b\u7684\u6587\u672c\u6587\u6863\u3002")),(0,r.kt)("p",null,"lucene \u5305\u542b\u4e00\u4e2a\u5f88\u5b9e\u7528\u7684\u5de5\u5177\u7c7b ",(0,r.kt)("inlineCode",{parentName:"p"},"CompressionTools")," \uff0c\u8be5\u7c7b\u63d0\u4f9b\u9759\u6001\u65b9\u6cd5\u538b\u7f29\u548c\u89e3\u538b\u7f29\u5b57\u8282\u6570\u7ec4\u3002\u8be5\u7c7b\u8fd0\u884c\u65f6\u4f1a\u540e\u53f0\u8c03\u7528 java \u5185\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.zip")," \u7c7b\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u5728\u5b58\u50a8\u57df\u503c\u4e4b\u524d\u8fdb\u884c\u538b\u7f29\u3002\u6ce8\u610f\uff0c\u5c3d\u7ba1\u8be5\u65b9\u6cd5\u53ef\u4ee5\u4e3a\u7d22\u5f15\u8282\u7701\u4e00\u4e9b\u7a7a\u95f4\uff0c\u4f46\u8282\u7701\u7684\u5e45\u5ea6\u8ddf\u57df\u503c\u7684\u53ef\u88ab\u538b\u7f29\u7a0b\u5ea6\u6709\u5173\uff0c\u800c\u4e14\u8be5\u65b9\u6cd5\u4f1a\u964d\u4f4e\u7d22\u5f15\u548c\u641c\u7d22\u901f\u5ea6\u3002\u5176\u5b9e\u662f\u901a\u8fc7\u6d88\u8017\u66f4\u591a CPU \u8ba1\u7b97\u80fd\u529b\u6765\u6362\u53d6\u66f4\u591a\u7684\u78c1\u76d8\u7a7a\u95f4\uff0c\u5bf9\u4e8e\u5f88\u591a\u7a0b\u5e8f\u6765\u8bf4\uff0c\u9700\u8981\u4ed4\u7ec6\u6743\u8861\u4e00\u4e0b\uff0c\u5982\u679c\u57df\u503c\u5360\u7528\u7a7a\u95f4\u4e0d\u662f\u5f88\u5927\uff0c\u5efa\u8bae\u5c11\u7528\u538b\u7f29\u3002"),(0,r.kt)("h4",{id:"\u57df\u7684\u9879\u5411\u91cf\u9009\u9879"},"\u57df\u7684\u9879\u5411\u91cf\u9009\u9879"),(0,r.kt)("p",null,"\u57df\u7684\u9879\u5411\u91cf(Field. TermVector.","*",")\u4e3b\u8981\u7528\u4e8e\u9ad8\u4eae\u663e\u793a\u53ca\u76f8\u4f3c\u641c\u7d22\uff0c\u5b83\u662f\u4ecb\u4e8e\u7d22\u5f15\u57df\u548c\u5b58\u50a8\u57df\u7684\u4e00\u4e2a\u4e2d\u95f4\u7ed3\u6784\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TermVector. YES"),": \u8bb0\u5f55 Term Vector;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TermVector. WITH_POSITIONS"),": \u8bb0\u5f55 Term Vector \u4ee5\u53ca\u6bcf\u4e2a Term \u51fa\u73b0\u7684\u4f4d\u7f6e;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TermVector. WITH_OFFSETS"),": \u8bb0\u5f55 Term Vector \u4ee5\u53ca\u6bcf\u4e2a Term \u51fa\u73b0\u7684\u504f\u79fb;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TermVector. WITH_POSITIONS_OFFSETS"),": \u8bb0\u5f55 Term Vector \u4ee5\u53ca\u51fa\u73b0\u7684\u4f4d\u7f6e+\u504f\u79fb;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TermVector. NO"),": \u4e0d\u5b58\u50a8 TermVector")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5982\u679c Index \u9009\u62e9\u4e86 No\uff0c\u5219 TermVector \u5fc5\u987b\u9009\u62e9 No")),(0,r.kt)("h4",{id:"readertokenstream-\u548c-byte\u57df\u503c"},"Reader\u3001TokenStream \u548c byte","[","]","\u57df\u503c"),(0,r.kt)("p",null,"Field \u5bf9\u8c61\u8fd8\u6709\u5176\u4ed6\u51e0\u4e2a\u521d\u59cb\u5316\u65b9\u6cd5\uff0c\u5141\u8bb8\u4f20\u5165\u9664 String \u4ee5\u5916\u7684\u5176\u4ed6\u53c2\u6570\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Field(String name, Reader reader, IndexableFieldType type)")," \u57df\u503c\u662f\u4e0d\u80fd\u88ab\u5b58\u50a8\u7684(\u57df\u5b58\u50a8\u9009\u9879\u88ab\u786c\u7f16\u7801\u6210 Store. NO), \u5e76\u4e14\u8be5\u57df\u4f1a\u4e00\u76f4\u7528\u4e8e\u5206\u6790\u548c\u7d22\u5f15(Index. ANALYZES)\u3002\u5982\u679c\u5185\u5b58\u4e2d\u4fdd\u5b58 String \u4ee3\u4ef7\u9ad8\u6216\u8005\u4e0d\u592a\u65b9\u4fbf\u65f6\uff0c\u5982\u679c\u5b58\u50a8\u7684\u57df\u503c\u8f83\u5927\u65f6\uff0c\u4f7f\u7528\u8fd9\u4e2a\u521d\u59cb\u5316\u65b9\u6cd5\u5219\u6bd4\u8f83\u6709\u6548\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Field(String name, TokenStream tokenStream, IndexableFieldType type)")," \u5141\u8bb8\u7a0b\u5e8f\u5bf9\u57df\u503c\u8fdb\u884c\u9884\u5206\u6790\u5e76\u751f\u6210 TokenStream \u5bf9\u8c61\u3002\u6b64\u5916\u8fd9\u4e2a\u57df\u4e0d\u4f1a\u88ab\u5b58\u50a8\u5e76\u5c06\u4e00\u76f4\u7528\u4e8e\u5206\u6790\u548c\u7d22\u5f15\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Field(String name, byte[] value, IndexableFieldType type)"))),(0,r.kt)("h4",{id:"\u57df\u9009\u9879\u7ec4\u5408"},"\u57df\u9009\u9879\u7ec4\u5408"),(0,r.kt)("p",null,"3 \u7c7b\u57df\u9009\u9879(\u7d22\u5f15\u3001\u5b58\u50a8\u548c\u9879\u5411\u91cf)\u8bbe\u7f6e\u5b8c\u4f1a\u5f62\u6210\u82e5\u5e72\u53ef\u80fd\u7684\u7ec4\u5408\uff0c\u5e38\u89c1\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7d22\u5f15\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5b58\u50a8\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9879\u5411\u91cf"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u4f7f\u7528\u8303\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NOT_ANALYZED_NO_NORMS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"YES"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6807\u8bc6\u7b26(\u6587\u4ef6\u540d\u3001\u4e3b\u952e)\uff0c\u7535\u8bdd\u53f7\u7801\u548c\u793e\u4f1a\u5b89\u5168\u53f7\u7801\u3001URL\u3001\u59d3\u540d\u3001\u65e5\u671f\u3001\u7528\u4e8e\u6392\u5e8f\u7684\u6587\u672c\u57df")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ANALYZED"),(0,r.kt)("td",{parentName:"tr",align:"left"},"YES"),(0,r.kt)("td",{parentName:"tr",align:"left"},"WITH_POSITIONS_OFFSETS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6587\u6863\u6807\u9898\u3001\u6458\u8981")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ANALYZED"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"WITH_POSITIONS_OFFSETS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6587\u6863\u6b63\u6587")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"YES"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6587\u6863\u7c7b\u578b\u3001\u6570\u636e\u5e93\u4e3b\u952e(\u5982\u679c\u6ca1\u6709\u7528\u4e8e\u641c\u7d22)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NOT_ANALYZED"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9690\u85cf\u7684\u5173\u952e\u8bcd")))),(0,r.kt)("h4",{id:"\u57df\u6392\u5e8f\u9009\u9879"},"\u57df\u6392\u5e8f\u9009\u9879"),(0,r.kt)("p",null,"\u7528\u4e8e\u6392\u5e8f\u7684\u57df\u662f\u5fc5\u987b\u8fdb\u884c\u7d22\u5f15\u7684\uff0c\u800c\u4e14\u6bcf\u4e2a\u5bf9\u5e94\u6587\u6863\u5fc5\u987b\u5305\u542b\u4e00\u4e2a\u8bcd\u6c47\u5355\u5143\u3002\u901a\u5e38\u8fd9\u610f\u5473\u7740\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Field.Index.NOT_ANALYZED")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"Field.Index.NOT_ANALYZED_NO_NORMS")," \u3002"),(0,r.kt)("h4",{id:"\u591a\u503c\u57df"},"\u591a\u503c\u57df"),(0,r.kt)("h3",{id:"\u5bf9\u6570\u5b57\u65e5\u671f\u65f6\u95f4\u7b49\u8fdb\u884c\u7d22\u5f15"},"\u5bf9\u6570\u5b57\u3001\u65e5\u671f\u3001\u65f6\u95f4\u7b49\u8fdb\u884c\u7d22\u5f15"),(0,r.kt)("p",null,"lucene \u4e3a\u6211\u4eec\u88c5\u5907\u4e86\u4e00\u4e2a\u5904\u7406\u65e5\u671f\u7684\u5229\u5668\uff1aDateTools, \u901a\u8fc7\u5b83\u6211\u4eec\u53ef\u4ee5\u4fbf\u6377\u7684\u628a Date \u578b\u8f6c\u6362\u6210 String \u578b\u3002DateTools \u53ef\u4ee5\u628a\u65e5\u671f\u548c\u65f6\u95f4\u8f6c\u6362\u6210 YYYYMMDDhhmmss \u7684\u683c\u5f0f\uff0c\u5e76\u6839\u636e\u6307\u5b9a\u7684 resolution \u53bb\u9664\u76f8\u5e94\u540e\u7f00; \u4e5f\u53ef\u4ee5\u5c06\u5176\u8f6c\u6210 long \u503c\u5904\u7406;"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/yoloz/searchSSDB.git"},"\u6837\u4f8b Demo")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://codepub.cn/tags/Lucene/"},"lucene \u5f00\u53d1")))}N.isMDXComponent=!0}}]);