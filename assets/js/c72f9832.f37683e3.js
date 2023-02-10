"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[5900],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>c});var r=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var l=e.components,a=e.mdxType,n=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(l),c=a,s=m["".concat(d,".").concat(c)]||m[c]||k[c]||n;return l?r.createElement(s,o(o({ref:t},u),{},{components:l})):r.createElement(s,o({ref:t},u))}));function c(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=l.length,o=new Array(n);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<n;p++)o[p]=l[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,l)}m.displayName="MDXCreateElement"},2044:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=l(7462),a=(l(7294),l(3905));const n={},o=void 0,i={unversionedId:"bigdata/zookeeper\u5b66\u4e60",id:"bigdata/zookeeper\u5b66\u4e60",title:"zookeeper\u5b66\u4e60",description:"\u6982\u8ff0",source:"@site/docs/bigdata/zookeeper\u5b66\u4e60.md",sourceDirName:"bigdata",slug:"/bigdata/zookeeper\u5b66\u4e60",permalink:"/docs/bigdata/zookeeper\u5b66\u4e60",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/bigdata/zookeeper\u5b66\u4e60.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"vertica\u4f7f\u7528",permalink:"/docs/bigdata/vertica\u4f7f\u7528"},next:{title:"RESTful\u5b66\u4e60",permalink:"/docs/concept/RESTful\u5b66\u4e60"}},d={},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u5e38\u89c1\u7684\u8bef\u533a",id:"\u5e38\u89c1\u7684\u8bef\u533a",level:2},{value:"\u9009\u4e3e\u540c\u6b65\u8fc7\u7a0b",id:"\u9009\u4e3e\u540c\u6b65\u8fc7\u7a0b",level:2},{value:"\u5982\u4f55\u4fdd\u8bc1\u4e8b\u52a1",id:"\u5982\u4f55\u4fdd\u8bc1\u4e8b\u52a1",level:3},{value:"\u540c\u6b65\u7684\u8fc7\u7a0b",id:"\u540c\u6b65\u7684\u8fc7\u7a0b",level:3}],u={toc:p};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"Google \u7684\u7c97\u7c92\u5ea6\u9501\u670d\u52a1 Chubby \u7684\u8bbe\u8ba1\u5f00\u53d1\u8005 Burrows \u66fe\u7ecf\u8bf4\u8fc7\uff1a\u201c\u6240\u6709\u4e00\u81f4\u6027\u534f\u8bae\u672c\u8d28\u4e0a\u8981\u4e48\u662f Paxos \u8981\u4e48\u662f\u5176\u53d8\u4f53\u201d\u3002Paxos \u867d\u7136\u89e3\u51b3\u4e86\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\uff0c\u591a\u4e2a\u8282\u70b9\u5c31\u67d0\u4e2a\u503c\u8fbe\u6210\u4e00\u81f4\u6027\u7684\u901a\u4fe1\u534f\u8bae\u3002\u4f46\u662f\u8fd8\u662f\u5f15\u5165\u4e86\u5176\u4ed6\u7684\u95ee\u9898\u3002\u7531\u4e8e\u5176\u6bcf\u4e2a\u8282\u70b9\uff0c\u90fd\u53ef\u4ee5\u63d0\u8bae\u63d0\u6848\uff0c\u4e5f\u53ef\u4ee5\u6279\u51c6\u63d0\u6848\u3002\u5f53\u6709\u4e09\u4e2a\u53ca\u4ee5\u4e0a\u7684 proposer \u5728\u53d1\u9001 prepare \u8bf7\u6c42\u540e\uff0c\u5f88\u96be\u6709\u4e00\u4e2a proposer \u6536\u5230\u534a\u6570\u4ee5\u4e0a\u7684\u56de\u590d\u800c\u4e0d\u65ad\u5730\u6267\u884c\u7b2c\u4e00\u9636\u6bb5\u7684\u534f\u8bae\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5728\u8fd9\u79cd\u7ade\u4e89\u4e0b\uff0c\u4f1a\u5bfc\u81f4\u9009\u4e3e\u901f\u5ea6\u53d8\u6162"),"\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5 zookeeper \u5728 paxos \u7684\u57fa\u7840\u4e0a\uff0c\u63d0\u51fa\u4e86 ZAB \u534f\u8bae\uff0c\u672c\u8d28\u4e0a\u662f\uff0c\u53ea\u6709\u4e00\u53f0\u673a\u5668\u80fd\u63d0\u8bae\u63d0\u6848\uff08Proposer\uff09\uff0c\u800c\u8fd9\u53f0\u673a\u5668\u7684\u540d\u79f0\u79f0\u4e4b\u4e3a Leader \u89d2\u8272\u3002\u5176\u4ed6\u53c2\u4e0e\u8005\u626e\u6f14 Acceptor \u89d2\u8272\u3002\u4e3a\u4e86\u4fdd\u8bc1 Leader \u7684\u5065\u58ee\u6027\uff0c\u5f15\u5165\u4e86 Leader \u9009\u4e3e\u673a\u5236\u3002"),(0,a.kt)("p",null,"ZAB \u534f\u8bae\u8fd8\u89e3\u51b3\u4e86\u8fd9\u4e9b\u95ee\u9898:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u534a\u6570\u4ee5\u4e0b\u8282\u70b9\u5b95\u673a\uff0c\u4f9d\u7136\u80fd\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1"),(0,a.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u6240\u6709\u7684\u5199\u8bf7\u6c42\uff0c\u4ea4\u7531 Leader \u6765\u5904\u7406\u3002\u5199\u5165\u6210\u529f\u540e\uff0c\u9700\u8981\u540c\u6b65\u7ed9\u6240\u6709\u7684 follower \u548c observer"),(0,a.kt)("li",{parentName:"ul"},"leader \u5b95\u673a\uff0c\u6216\u8005\u96c6\u7fa4\u91cd\u542f\u3002\u9700\u8981\u786e\u4fdd\u5df2\u7ecf\u7531 Leader \u63d0\u4ea4\u7684\u4e8b\u52a1\u6700\u7ec8\u90fd\u80fd\u88ab\u670d\u52a1\u5668\u63d0\u4ea4\uff0c\u5e76\u4e14\u786e\u4fdd\u96c6\u7fa4\u80fd\u5feb\u901f\u56de\u590d\u5230\u6545\u969c\u524d\u7684\u72b6\u6001")),(0,a.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,a.kt)("p",null,"\u57fa\u672c\u540d\u8bcd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u8282\u70b9\uff08dataNode\uff09")),(0,a.kt)("p",null,"zk \u6570\u636e\u6a21\u578b\u4e2d\u7684\u6700\u5c0f\u6570\u636e\u5355\u5143\uff0c\u6570\u636e\u6a21\u578b\u662f\u4e00\u68f5\u6811\uff0c\u7531\u659c\u6760\uff08 / \uff09\u5206\u5272\u7684\u8def\u5f84\u540d\u552f\u4e00\u6807\u8bc6\uff0c\u6570\u636e\u8282\u70b9\u53ef\u4ee5\u5b58\u50a8\u6570\u636e\u5185\u5bb9\u53ca\u4e00\u7cfb\u5217\u5c5e\u6027\u4fe1\u606f\uff0c\u540c\u65f6\u8fd8\u53ef\u4ee5\u6302\u8f7d\u5b50\u8282\u70b9\uff0c\u6784\u6210\u4e00\u4e2a\u5c42\u6b21\u5316\u7684\u547d\u540d\u7a7a\u95f4\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e8b\u52a1\u53ca zxid")),(0,a.kt)("p",null,"\u4e8b\u52a1\u662f\u6307\u80fd\u591f\u6539\u53d8 Zookeeper \u670d\u52a1\u5668\u72b6\u6001\u7684\u64cd\u4f5c\uff0c\u4e00\u822c\u5305\u62ec\u6570\u636e\u8282\u70b9\u7684\u521b\u5efa\u4e0e\u5220\u9664\u3001\u6570\u636e\u8282\u70b9\u5185\u5bb9\u66f4\u65b0\u548c\u5ba2\u6237\u7aef\u4f1a\u8bdd\u521b\u5efa\u4e0e\u5931\u6548\u7b49\u64cd\u4f5c\u3002\u5bf9\u4e8e\u6bcf\u4e2a\u4e8b\u52a1\u8bf7\u6c42\uff0czk \u90fd\u4f1a\u4e3a\u5176\u5206\u914d\u4e00\u4e2a\u5168\u5c40\u552f\u4e00\u7684\u4e8b\u52a1 ID\uff0c\u5373 zxid\uff0c\u662f\u4e00\u4e2a 64 \u4f4d\u7684\u6570\u5b57\uff0c\u9ad8 32 \u4f4d\u8868\u793a\u8be5\u4e8b\u52a1\u53d1\u751f\u7684\u96c6\u7fa4\u9009\u4e3e\u5468\u671f\uff08\u96c6\u7fa4\u6bcf\u53d1\u751f\u4e00\u6b21 leader \u9009\u4e3e\uff0c\u503c\u52a0 1\uff09\uff0c\u4f4e 32 \u4f4d\u8868\u793a\u8be5\u4e8b\u52a1\u5728\u5f53\u524d\u9009\u62e9\u5468\u671f\u5185\u7684\u9012\u589e\u6b21\u5e8f\uff08leader \u6bcf\u5904\u7406\u4e00\u4e2a\u4e8b\u52a1\u8bf7\u6c42\uff0c\u503c\u52a0 1\uff0c\u53d1\u751f\u4e00\u6b21 leader \u9009\u62e9\uff0c\u4f4e 32 \u4f4d\u8981\u6e05 0\uff09\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e8b\u52a1\u65e5\u5fd7")),(0,a.kt)("p",null,"\u6240\u6709\u4e8b\u52a1\u64cd\u4f5c\u90fd\u662f\u9700\u8981\u8bb0\u5f55\u5230\u65e5\u5fd7\u6587\u4ef6\u4e2d\u7684\uff0c\u53ef\u901a\u8fc7 dataLogDir \u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\uff0c\u6587\u4ef6\u662f\u4ee5\u5199\u5165\u7684\u7b2c\u4e00\u6761\u4e8b\u52a1 zxid \u4e3a\u540e\u7f00\uff0c\u65b9\u4fbf\u540e\u7eed\u7684\u5b9a\u4f4d\u67e5\u627e\u3002zk \u4f1a\u91c7\u53d6\u201c\u78c1\u76d8\u7a7a\u95f4\u9884\u5206\u914d\u201d\u7684\u7b56\u7565\uff0c\u6765\u907f\u514d\u78c1\u76d8 Seek \u9891\u7387\uff0c\u63d0\u5347 zk \u670d\u52a1\u5668\u5bf9\u4e8b\u52a1\u8bf7\u6c42\u7684\u5f71\u54cd\u80fd\u529b\u3002\u9ed8\u8ba4\u8bbe\u7f6e\u4e0b\uff0c\u6bcf\u6b21\u4e8b\u52a1\u65e5\u5fd7\u5199\u5165\u64cd\u4f5c\u90fd\u4f1a\u5b9e\u65f6\u5237\u5165\u78c1\u76d8\uff0c\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u6210\u975e\u5b9e\u65f6\uff08\u5199\u5230\u5185\u5b58\u6587\u4ef6\u6d41\uff0c\u5b9a\u65f6\u6279\u91cf\u5199\u5165\u78c1\u76d8\uff09\uff0c\u4f46\u90a3\u6837\u65ad\u7535\u65f6\u4f1a\u5e26\u6765\u4e22\u5931\u6570\u636e\u7684\u98ce\u9669\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e8b\u52a1\u5feb\u7167")),(0,a.kt)("p",null,"\u6570\u636e\u5feb\u7167\u662f zk \u6570\u636e\u5b58\u50a8\u4e2d\u53e6\u4e00\u4e2a\u975e\u5e38\u6838\u5fc3\u7684\u8fd0\u884c\u673a\u5236\u3002\u6570\u636e\u5feb\u7167\u7528\u6765\u8bb0\u5f55 zk \u670d\u52a1\u5668\u4e0a\u67d0\u4e00\u65f6\u523b\u7684\u5168\u91cf\u5185\u5b58\u6570\u636e\u5185\u5bb9\uff0c\u5e76\u5c06\u5176\u5199\u5165\u5230\u6307\u5b9a\u7684\u78c1\u76d8\u6587\u4ef6\u4e2d\uff0c\u53ef\u901a\u8fc7 dataDir \u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\u3002\u53ef\u914d\u7f6e\u53c2\u6570 snapCount\uff0c\u8bbe\u7f6e\u4e24\u6b21\u5feb\u7167\u4e4b\u95f4\u7684\u4e8b\u52a1\u64cd\u4f5c\u4e2a\u6570\uff0czk \u8282\u70b9\u8bb0\u5f55\u5b8c\u4e8b\u52a1\u65e5\u5fd7\u65f6\uff0c\u4f1a\u7edf\u8ba1\u5224\u65ad\u662f\u5426\u9700\u8981\u505a\u6570\u636e\u5feb\u7167\uff08\u8ddd\u79bb\u4e0a\u6b21\u5feb\u7167\uff0c\u4e8b\u52a1\u64cd\u4f5c\u6b21\u6570\u7b49\u4e8e snapCount/2~snapCount \u4e2d\u7684\u67d0\u4e2a\u503c\u65f6\uff0c\u4f1a\u89e6\u53d1\u5feb\u7167\u751f\u6210\u64cd\u4f5c\uff0c\u968f\u673a\u503c\u662f\u4e3a\u4e86\u907f\u514d\u6240\u6709\u8282\u70b9\u540c\u65f6\u751f\u6210\u5feb\u7167\uff0c\u5bfc\u81f4\u96c6\u7fa4\u5f71\u54cd\u7f13\u6162\uff09\u3002"),(0,a.kt)("p",null,"\u6838\u5fc3\u89d2\u8272"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"leader\uff1a\u7cfb\u7edf\u521a\u542f\u52a8\u65f6\u6216\u8005 Leader \u5d29\u6e83\u540e\u6b63\u5904\u4e8e\u9009\u4e3e\u72b6\u6001\uff1b"),(0,a.kt)("li",{parentName:"ul"},"follower\uff1aFollower \u8282\u70b9\u6240\u5904\u7684\u72b6\u6001\uff0cFollower \u4e0e Leader \u5904\u4e8e\u6570\u636e\u540c\u6b65\u9636\u6bb5\uff1b"),(0,a.kt)("li",{parentName:"ul"},"observer\uff1aLeader \u6240\u5904\u72b6\u6001\uff0c\u5f53\u524d\u96c6\u7fa4\u4e2d\u6709\u4e00\u4e2a Leader \u4e3a\u4e3b\u8fdb\u7a0b\u3002")),(0,a.kt)("p",null,"\u8282\u70b9\u72b6\u6001"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LOOKING\uff1a\u8282\u70b9\u6b63\u5904\u4e8e\u9009\u4e3b\u72b6\u6001\uff0c\u4e0d\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\uff0c\u76f4\u81f3\u9009\u4e3b\u7ed3\u675f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"FOLLOWING\uff1a\u4f5c\u4e3a\u7cfb\u7edf\u7684\u4ece\u8282\u70b9\uff0c\u63a5\u53d7\u4e3b\u8282\u70b9\u7684\u66f4\u65b0\u5e76\u5199\u5165\u672c\u5730\u65e5\u5fd7\uff1b"),(0,a.kt)("li",{parentName:"ul"},"LEADING\uff1a\u4f5c\u4e3a\u7cfb\u7edf\u4e3b\u8282\u70b9\uff0c\u63a5\u53d7\u5ba2\u6237\u7aef\u66f4\u65b0\uff0c\u5199\u5165\u672c\u5730\u65e5\u5fd7\u5e76\u590d\u5236\u5230\u4ece\u8282\u70b9")),(0,a.kt)("h2",{id:"\u5e38\u89c1\u7684\u8bef\u533a"},"\u5e38\u89c1\u7684\u8bef\u533a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5199\u5165\u8282\u70b9\u540e\u7684\u6570\u636e\uff0c\u7acb\u9a6c\u5c31\u80fd\u88ab\u8bfb\u5230\uff0c\u8fd9\u662f\u9519\u8bef\u7684\u3002",(0,a.kt)("strong",{parentName:"li"},"zk \u5199\u5165\u662f\u5fc5\u987b\u901a\u8fc7 leader \u4e32\u884c\u7684\u5199\u5165\uff0c\u800c\u4e14\u53ea\u8981\u4e00\u534a\u4ee5\u4e0a\u7684\u8282\u70b9\u5199\u5165\u6210\u529f\u5373\u53ef\u3002\u800c\u4efb\u4f55\u8282\u70b9\u90fd\u53ef\u63d0\u4f9b\u8bfb\u53d6\u670d\u52a1\u3002\u4f8b\u5982\uff1azk\uff0c\u6709 1~5 \u4e2a\u8282\u70b9\uff0c\u5199\u5165\u4e86\u4e00\u4e2a\u6700\u65b0\u7684\u6570\u636e\uff0c\u6700\u65b0\u6570\u636e\u5199\u5165\u5230\u8282\u70b9 1~3\uff0c\u4f1a\u8fd4\u56de\u6210\u529f\u3002\u7136\u540e\u8bfb\u53d6\u8bf7\u6c42\u8fc7\u6765\u8981\u8bfb\u53d6\u6700\u65b0\u7684\u8282\u70b9\u6570\u636e\uff0c\u8bf7\u6c42\u53ef\u80fd\u88ab\u5206\u914d\u5230\u8282\u70b9 4~5 \u3002\u800c\u6b64\u65f6\u6700\u65b0\u6570\u636e\u8fd8\u6ca1\u6709\u540c\u6b65\u5230\u8282\u70b9 4~5\u3002\u4f1a\u8bfb\u53d6\u4e0d\u5230\u6700\u8fd1\u7684\u6570\u636e\u3002\u5982\u679c\u60f3\u8981\u8bfb\u53d6\u5230\u6700\u65b0\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u5728\u8bfb\u53d6\u524d\u4f7f\u7528 sync \u547d\u4ee4"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"zk \u542f\u52a8\u8282\u70b9\u4e0d\u80fd\u5076\u6570\u53f0\uff0c\u8fd9\u4e5f\u662f\u9519\u8bef\u7684\u3002zk \u662f\u9700\u8981\u4e00\u534a\u4ee5\u4e0a\u8282\u70b9\u624d\u80fd\u6b63\u5e38\u5de5\u4f5c\u7684\u3002\u4f8b\u5982\u521b\u5efa 4 \u4e2a\u8282\u70b9\uff0c\u534a\u6570\u4ee5\u4e0a\u6b63\u5e38\u8282\u70b9\u6570\u662f 3\u3002\u4e5f\u5c31\u662f\u6700\u591a\u53ea\u5141\u8bb8\u4e00\u53f0\u673a\u5668 down \u6389\u3002\u800c 3 \u53f0\u8282\u70b9\uff0c\u534a\u6570\u4ee5\u4e0a\u6b63\u5e38\u8282\u70b9\u6570\u662f 2\uff0c\u4e5f\u662f\u6700\u591a\u5141\u8bb8\u4e00\u53f0\u673a\u5668 down \u6389\u30024 \u4e2a\u8282\u70b9\uff0c\u591a\u4e86\u4e00\u53f0\u673a\u5668\u7684\u6210\u672c\uff0c\u4f46\u662f\u5065\u58ee\u6027\u548c 3 \u4e2a\u8282\u70b9\u7684\u96c6\u7fa4\u4e00\u6837\u3002\u57fa\u4e8e\u6210\u672c\u7684\u8003\u8651\u662f\u4e0d\u63a8\u8350\u7684")),(0,a.kt)("h2",{id:"\u9009\u4e3e\u540c\u6b65\u8fc7\u7a0b"},"\u9009\u4e3e\u540c\u6b65\u8fc7\u7a0b"),(0,a.kt)("p",null,"\u53d1\u8d77\u6295\u7968\u7684\u5951\u673a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8282\u70b9\u542f\u52a8"),(0,a.kt)("li",{parentName:"ul"},"\u8282\u70b9\u8fd0\u884c\u671f\u95f4\u65e0\u6cd5\u4e0e Leader \u4fdd\u6301\u8fde\u63a5"),(0,a.kt)("li",{parentName:"ul"},"Leader \u5931\u53bb\u4e00\u534a\u4ee5\u4e0a\u8282\u70b9\u7684\u8fde\u63a5")),(0,a.kt)("h3",{id:"\u5982\u4f55\u4fdd\u8bc1\u4e8b\u52a1"},"\u5982\u4f55\u4fdd\u8bc1\u4e8b\u52a1"),(0,a.kt)("p",null,"ZAB \u534f\u8bae\u7c7b\u4f3c\u4e8e\u4e24\u9636\u6bb5\u63d0\u4ea4\uff0c\u5ba2\u6237\u7aef\u6709\u4e00\u4e2a\u5199\u8bf7\u6c42\u8fc7\u6765\uff0c\u4f8b\u5982\u8bbe\u7f6e /my/test \u503c\u4e3a 1\uff0cLeader \u4f1a\u751f\u6210\u5bf9\u5e94\u7684\u4e8b\u52a1\u63d0\u8bae\uff08proposal\uff09\uff08\u5f53\u524d zxid \u4e3a 0x5000010 \u63d0\u8bae\u7684 zxid \u4e3a Ox5000011\uff09\uff0c\u73b0\u5c06 set/my/test1\uff08\u6b64\u5904\u4e3a\u4f2a\u4ee3\u7801\uff09\u5199\u5165\u672c\u5730\u4e8b\u52a1\u65e5\u5fd7\uff0c\u7136\u540e set/my/test1 \u65e5\u5fd7\u540c\u6b65\u5230\u6240\u6709\u7684 follower\u3002follower \u6536\u5230\u4e8b\u52a1 proposal \uff0c\u5c06 proposal \u5199\u5165\u5230\u4e8b\u52a1\u65e5\u5fd7\u3002\u5982\u679c\u6536\u5230\u534a\u6570\u4ee5\u4e0a follower \u7684\u56de\u5e94\uff0c\u90a3\u4e48\u5e7f\u64ad\u53d1\u8d77 commit \u8bf7\u6c42\u3002follower \u6536\u5230 commit \u8bf7\u6c42\u540e\u3002\u4f1a\u5c06\u6587\u4ef6\u4e2d\u7684 zxid ox5000011 \u5e94\u7528\u5230\u5185\u5b58\u4e2d\u3002"),(0,a.kt)("p",null,"\u4e0a\u9762\u8bf4\u7684\u662f\u6b63\u5e38\u7684\u60c5\u51b5,\u6709\u4e24\u79cd\u60c5\u51b5:"),(0,a.kt)("p",null,"\u7b2c\u4e00\u79cd Leader \u5199\u5165\u672c\u5730\u4e8b\u52a1\u65e5\u5fd7\u540e\uff0c\u6ca1\u6709\u53d1\u9001\u540c\u6b65\u8bf7\u6c42\uff0c\u5c31 down \u4e86\u3002\u5373\u4f7f\u9009\u4e3b\u4e4b\u540e\u53c8\u4f5c\u4e3a follower \u542f\u52a8\u3002\u6b64\u65f6\u8fd9\u79cd\u8fd8\u662f\u4f1a\u65e5\u5fd7\u4f1a\u4e22\u6389\uff08\u539f\u56e0\u662f\u9009\u51fa\u7684 leader \u65e0\u6b64\u65e5\u5fd7\uff0c\u65e0\u6cd5\u8fdb\u884c\u540c\u6b65\uff09\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u79cd Leader \u53d1\u51fa\u540c\u6b65\u8bf7\u6c42\uff0c\u4f46\u662f\u8fd8\u6ca1\u6709 commit \u5c31 down \u4e86\u3002\u6b64\u65f6\u8fd9\u4e2a\u65e5\u5fd7\u4e0d\u4f1a\u4e22\u6389\uff0c\u4f1a\u540c\u6b65\u63d0\u4ea4\u5230\u5176\u4ed6\u8282\u70b9\u4e2d\u3002"),(0,a.kt)("p",null,"\u670d\u52a1\u5668\u542f\u52a8\u8fc7\u7a0b\u4e2d\u7684\u6295\u7968\u8fc7\u7a0b"),(0,a.kt)("p",null,"\u73b0\u5728 5 \u53f0 zk \u673a\u5668\u4f9d\u6b21\u7f16\u53f7 1~5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8282\u70b9 1 \u542f\u52a8\uff0c\u53d1\u51fa\u53bb\u7684\u8bf7\u6c42\u6ca1\u6709\u54cd\u5e94\uff0c\u6b64\u65f6\u662f Looking \u7684\u72b6\u6001"),(0,a.kt)("li",{parentName:"ul"},"\u8282\u70b9 2 \u542f\u52a8\uff0c\u4e0e\u8282\u70b9 1 \u8fdb\u884c\u901a\u4fe1\uff0c\u4ea4\u6362\u9009\u4e3e\u7ed3\u679c\u3002\u7531\u4e8e\u4e24\u8005\u6ca1\u6709\u5386\u53f2\u6570\u636e\uff0c\u5373 zxid \u65e0\u6cd5\u6bd4\u8f83\uff0c\u6b64\u65f6 id \u503c\u8f83\u5927\u7684\u8282\u70b9 2 \u80dc\u51fa\uff0c\u4f46\u662f\u7531\u4e8e\u8fd8\u6ca1\u6709\u8d85\u8fc7\u534a\u6570\u7684\u8282\u70b9\uff0c\u6240\u4ee5 1 \u548c 2 \u90fd\u4fdd\u6301 looking \u7684\u72b6\u6001"),(0,a.kt)("li",{parentName:"ul"},"\u8282\u70b9 3 \u542f\u52a8\uff0c\u6839\u636e\u4e0a\u9762\u7684\u5206\u6790\uff0cid \u503c\u6700\u5927\u7684\u8282\u70b9 3 \u80dc\u51fa\uff0c\u800c\u4e14\u8d85\u8fc7\u534a\u6570\u7684\u8282\u70b9\u90fd\u53c2\u4e0e\u4e86\u9009\u4e3e\u3002\u8282\u70b9 3 \u80dc\u51fa\u6210\u4e3a\u4e86 Leader"),(0,a.kt)("li",{parentName:"ul"},"\u8282\u70b9 4 \u542f\u52a8\uff0c\u548c 1~3 \u4e2a\u8282\u70b9\u901a\u4fe1\uff0c\u5f97\u77e5\u6700\u65b0\u7684 leader \u4e3a\u8282\u70b9 3\uff0c\u800c\u6b64\u65f6 zxid \u4e5f\u5c0f\u4e8e\u8282\u70b9 3\uff0c\u6240\u4ee5\u627f\u8ba4\u4e86\u8282\u70b9 3 \u7684 leader \u7684\u89d2\u8272"),(0,a.kt)("li",{parentName:"ul"},"\u8282\u70b9 5 \u542f\u52a8\uff0c\u548c\u8282\u70b9 4 \u4e00\u6837\uff0c\u9009\u53d6\u627f\u8ba4\u8282\u70b9 3 \u7684 leader \u7684\u89d2\u8272")),(0,a.kt)("p",null,"\u670d\u52a1\u5668\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u9009\u4e3b\u8fc7\u7a0b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"zk1.jpeg",src:l(6004).Z,width:"764",height:"1117"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8282\u70b9 1 \u53d1\u8d77\u6295\u7968\uff0c\u7b2c\u4e00\u8f6e\u6295\u7968\u5148\u6295\u81ea\u5df1\uff0c\u7136\u540e\u8fdb\u5165 Looking \u7b49\u5f85\u7684\u72b6\u6001\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5176\u4ed6\u7684\u8282\u70b9\uff08\u5982\u8282\u70b9 2 \uff09\u6536\u5230\u5bf9\u65b9\u7684\u6295\u7968\u4fe1\u606f\u3002\u8282\u70b9 2 \u5728 Looking \u72b6\u6001\uff0c\u5219\u5c06\u81ea\u5df1\u7684\u6295\u7968\u7ed3\u679c\u5e7f\u64ad\u51fa\u53bb\uff08\u6b64\u65f6\u8d70\u7684\u662f\u4e0a\u56fe\u4e2d\u5de6\u4fa7\u7684 Looking \u5206\u652f\uff09\uff1b\u5982\u679c\u4e0d\u5728 Looking \u72b6\u6001\uff0c\u5219\u76f4\u63a5\u544a\u8bc9\u8282\u70b9 1 \u5f53\u524d\u7684 Leader \u662f\u8c01\uff0c\u5c31\u4e0d\u8981\u778e\u6298\u817e\u9009\u4e3e\u4e86\uff08\u6b64\u65f6\u8d70\u7684\u662f\u4e0a\u56fe\u53f3\u4fa7\u7684 Leading/following \u5206\u652f\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6b64\u65f6\u8282\u70b9 1\uff0c\u6536\u5230\u4e86\u8282\u70b9 2 \u7684\u9009\u4e3e\u7ed3\u679c\u3002\u5982\u679c\u8282\u70b9 2 \u7684 zxid \u66f4\u5927\uff0c\u90a3\u4e48\u6e05\u7a7a\u6295\u7968\u7bb1\uff0c\u5efa\u7acb\u65b0\u7684\u6295\u7968\u7bb1\uff0c\u5e7f\u64ad\u81ea\u5df1\u6700\u65b0\u7684\u6295\u7968\u7ed3\u679c\u3002\u5728\u540c\u4e00\u6b21\u9009\u4e3e\u4e2d\uff0c\u5982\u679c\u5728\u6536\u5230\u6240\u6709\u8282\u70b9\u7684\u6295\u7968\u7ed3\u679c\u540e\uff0c\u5982\u679c\u6295\u7968\u7bb1\u4e2d\u6709\u4e00\u534a\u4ee5\u4e0a\u7684\u8282\u70b9\u9009\u51fa\u4e86\u67d0\u4e2a\u8282\u70b9\uff0c\u90a3\u4e48\u8bc1\u660e leader \u5df2\u7ecf\u9009\u51fa\u6765\u4e86\uff0c\u6295\u7968\u4e5f\u5c31\u7ec8\u6b62\u4e86\u3002\u5426\u5219\u4e00\u76f4\u5faa\u73af\u3002")),(0,a.kt)("p",null,"zookeeper \u7684\u9009\u4e3e\uff0c\u4f18\u5148\u6bd4\u8f83\u5927 zxid\uff0czxid \u6700\u5927\u7684\u8282\u70b9\u4ee3\u8868\u62e5\u6709\u6700\u65b0\u7684\u6570\u636e\u3002\u5982\u679c\u6ca1\u6709 zxid\uff0c\u5982\u7cfb\u7edf\u521a\u521a\u542f\u52a8\u7684\u65f6\u5019\uff0c\u5219\u6bd4\u8f83\u673a\u5668\u7684\u7f16\u53f7\uff0c\u4f18\u5148\u9009\u62e9\u7f16\u53f7\u5927\u7684\u3002"),(0,a.kt)("h3",{id:"\u540c\u6b65\u7684\u8fc7\u7a0b"},"\u540c\u6b65\u7684\u8fc7\u7a0b"),(0,a.kt)("p",null,"\u5728\u9009\u51fa Leader \u4e4b\u540e\uff0czk \u5c31\u8fdb\u5165\u72b6\u6001\u540c\u6b65\u7684\u8fc7\u7a0b\u3002\u5176\u5b9e\u5c31\u662f\u628a\u6700\u65b0\u7684 zxid \u5bf9\u5e94\u7684\u65e5\u5fd7\u6570\u636e\uff0c\u5e94\u7528\u5230\u5176\u4ed6\u7684\u8282\u70b9\u4e2d\u3002\u6b64 zxid \u5305\u542b follower \u4e2d\u5199\u5165\u65e5\u5fd7\u4f46\u662f\u672a\u63d0\u4ea4\u7684 zxid ,\u79f0\u4e4b\u4e3a\u670d\u52a1\u5668\u63d0\u8bae\u7f13\u5b58\u961f\u5217 committedLog \u4e2d\u7684 zxid\u3002"),(0,a.kt)("p",null,"\u540c\u6b65\u4f1a\u5b8c\u6210\u4e09\u4e2a zxid \u503c\u7684\u521d\u59cb\u5316\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"peerLastZxid\uff1a\u8be5 learner \u670d\u52a1\u5668\u6700\u540e\u5904\u7406\u7684 zxid\u3002"),(0,a.kt)("li",{parentName:"ul"},"minCommittedLog\uff1aleader \u670d\u52a1\u5668\u63d0\u8bae\u7f13\u5b58\u961f\u5217 committedLog \u4e2d\u7684\u6700\u5c0f zxid\u3002"),(0,a.kt)("li",{parentName:"ul"},"maxCommittedLog\uff1aleader \u670d\u52a1\u5668\u63d0\u8bae\u7f13\u5b58\u961f\u5217 committedLog \u4e2d\u7684\u6700\u5927 zxid\u3002")),(0,a.kt)("p",null,"\u7cfb\u7edf\u4f1a\u6839\u636e learner \u7684 peerLastZxid \u548c leader \u7684 minCommittedLog\uff0c maxCommittedLog \u505a\u51fa\u6bd4\u8f83\u540e\u505a\u51fa\u4e0d\u540c\u7684\u540c\u6b65\u7b56\u7565\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5dee\u5f02\u5316\u540c\u6b65")),(0,a.kt)("p",null,"\u573a\u666f\uff1a peerLastZxid \u4ecb\u4e8e minCommittedLogZxid \u548c maxCommittedLogZxid \u95f4\u3002"),(0,a.kt)("p",null,"\u6b64\u79cd\u573a\u666f\u51fa\u73b0\u5728\uff0c\u4e0a\u6587\u63d0\u5230\u8fc7\u7684\uff0cLeader \u53d1\u51fa\u4e86\u540c\u6b65\u8bf7\u6c42\uff0c\u4f46\u662f\u8fd8\u6ca1\u6709 commit \u5c31 down \u4e86\u3002 leader \u4f1a\u53d1\u9001 Proposal \u6570\u636e\u5305\uff0c\u4ee5\u53ca commit \u6307\u4ee4\u6570\u636e\u5305\u3002\u65b0\u9009\u51fa\u7684 leader \u7ee7\u7eed\u5b8c\u6210\u4e0a\u4e00\u4efb leader \u672a\u5b8c\u6210\u7684\u5de5\u4f5c\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\u6b64\u523b Leader \u63d0\u8bae\u7684\u7f13\u5b58\u961f\u5217\u4e3a 0x20001\uff0c0x20002\uff0c0x20003\uff0c0x20004\uff0c\u6b64\u5904 follower \u7684 peerLastZxid \u4e3a 0x20002\uff0cLeader \u4f1a\u5c06 0x20003 \u548c 0x20004 \u4e24\u4e2a\u63d0\u8bae\u540c\u6b65\u7ed9 follower\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5148\u56de\u6eda\u518d\u5dee\u5f02\u5316\u540c\u6b65/\u4ec5\u56de\u6eda\u540c\u6b65")),(0,a.kt)("p",null,"\u6b64\u79cd\u573a\u666f\u51fa\u73b0\u5728\uff0c\u4e0a\u6587\u63d0\u5230\u8fc7\u7684\uff0cLeader \u5199\u5165\u672c\u5730\u4e8b\u52a1\u65e5\u5fd7\u540e\uff0c\u8fd8\u6ca1\u53d1\u51fa\u540c\u6b65\u8bf7\u6c42\uff0c\u5c31 down \u4e86\uff0c\u7136\u540e\u5728\u540c\u6b65\u65e5\u5fd7\u7684\u65f6\u5019\u4f5c\u4e3a follower \u51fa\u73b0\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\u5373\u5c06\u8981 down \u6389\u7684 leader \u8282\u70b9 1\uff0c\u5df2\u7ecf\u5904\u7406\u4e86 0x20001\uff0c0x20002\uff0c\u5728\u5904\u7406 0x20003 \u65f6\u8fd8\u6ca1\u53d1\u51fa\u63d0\u8bae\u5c31 down \u4e86\u3002\u540e\u6765\u8282\u70b9 2 \u5f53\u9009\u4e3a\u65b0 leader\uff0c\u540c\u6b65\u6570\u636e\u7684\u65f6\u5019\uff0c\u8282\u70b9 1 \u53c8\u795e\u5947\u590d\u6d3b\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u65b0 leader \u8fd8\u6ca1\u6709\u5904\u7406\u65b0\u4e8b\u52a1\uff0c\u65b0 leader \u7684\u961f\u5217\u4e3a\uff0c0x20001, 0x20002\uff0c\u90a3\u4e48\u4ec5\u8ba9\u8282\u70b9 1 \u56de\u6eda\u5230 0x20002 \u8282\u70b9\u5904\uff0c0x20003 \u65e5\u5fd7\u5e9f\u5f03\uff0c\u79f0\u4e4b\u4e3a\u4ec5\u56de\u6eda\u540c\u6b65\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u65b0 leader \u5df2\u7ecf\u5904\u7406 0x30001 , 0x30002 \u4e8b\u52a1\uff0c\u90a3\u4e48\u65b0 leader \u6b64\u5904\u961f\u5217\u4e3a 0x20001\uff0c0x20002\uff0c0x30001\uff0c0x30002\uff0c\u90a3\u4e48\u8ba9\u8282\u70b9 1 \u5148\u56de\u6eda\uff0c\u5230 0x20002 \u5904\uff0c\u518d\u5dee\u5f02\u5316\u540c\u6b65 0x30001\uff0c0x30002\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5168\u91cf\u540c\u6b65")),(0,a.kt)("p",null,"peerLastZxid \u5c0f\u4e8e minCommittedLogZxid \u6216\u8005 leader \u4e0a\u9762\u6ca1\u6709\u7f13\u5b58\u961f\u5217\u3002leader \u76f4\u63a5\u4f7f\u7528 SNAP \u547d\u4ee4\u8fdb\u884c\u5168\u91cf\u540c\u6b65\u3002"))}k.isMDXComponent=!0},6004:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/zk1-694f199d85648cad5991a1638cdf4f5f.jpeg"}}]);