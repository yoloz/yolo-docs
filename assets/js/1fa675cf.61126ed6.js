"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"concurrent/JAVA\u7ebf\u7a0b\u72b6\u6001",id:"concurrent/JAVA\u7ebf\u7a0b\u72b6\u6001",title:"JAVA\u7ebf\u7a0b\u72b6\u6001",description:"Java \u4e2d\u7ebf\u7a0b\u4e2d\u72b6\u6001\u53ef\u5206\u4e3a\u4e94\u79cd\uff1a",source:"@site/docs/concurrent/JAVA\u7ebf\u7a0b\u72b6\u6001.md",sourceDirName:"concurrent",slug:"/concurrent/JAVA\u7ebf\u7a0b\u72b6\u6001",permalink:"/docs/concurrent/JAVA\u7ebf\u7a0b\u72b6\u6001",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/concurrent/JAVA\u7ebf\u7a0b\u72b6\u6001.md",tags:[],version:"current",lastUpdatedAt:1686370023,formattedLastUpdatedAt:"2023\u5e746\u670810\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JAVA\u7ebf\u7a0b\u534f\u4f5c",permalink:"/docs/concurrent/JAVA\u7ebf\u7a0b\u534f\u4f5c"},next:{title:"JAVA\u9501\u7684\u4f7f\u7528",permalink:"/docs/concurrent/JAVA\u9501\u7684\u4f7f\u7528"}},c={},u=[{value:"JDK8 \u7684 Thread.State",id:"jdk8-\u7684-threadstate",level:2},{value:"NEW",id:"new",level:3},{value:"RUNNABLE",id:"runnable",level:3},{value:"BLOCKED",id:"blocked",level:3},{value:"WAITING",id:"waiting",level:3},{value:"TIMED_WAITING",id:"timed_waiting",level:3},{value:"TERMINATED",id:"terminated",level:3}],s={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Java \u4e2d\u7ebf\u7a0b\u4e2d\u72b6\u6001\u53ef\u5206\u4e3a\u4e94\u79cd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New\uff1a\u65b0\u5efa\u72b6\u6001\uff0c\u5f53\u7ebf\u7a0b\u521b\u5efa\u5b8c\u6210\u65f6\u4e3a\u65b0\u5efa\u72b6\u6001\uff0c\u5373 new Thread(...)\uff0c\u8fd8\u6ca1\u6709\u8c03\u7528 start \u65b9\u6cd5\u65f6\uff0c\u7ebf\u7a0b\u5904\u4e8e\u65b0\u5efa\u72b6\u6001\u3002"),(0,a.kt)("li",{parentName:"ul"},"Runnable\uff1a\u5c31\u7eea\u72b6\u6001\uff0c\u5f53\u8c03\u7528\u7ebf\u7a0b\u7684\u7684 start \u65b9\u6cd5\u540e\uff0c\u7ebf\u7a0b\u8fdb\u5165\u5c31\u7eea\u72b6\u6001\uff0c\u7b49\u5f85 CPU \u8d44\u6e90\u3002\u5904\u4e8e\u5c31\u7eea\u72b6\u6001\u7684\u7ebf\u7a0b\u7531 Java \u8fd0\u884c\u65f6\u7cfb\u7edf\u7684\u7ebf\u7a0b\u8c03\u5ea6\u7a0b\u5e8f(thread scheduler)\u6765\u8c03\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ul"},"Running\uff1a\u8fd0\u884c\u72b6\u6001\uff0c\u5c31\u7eea\u72b6\u6001\u7684\u7ebf\u7a0b\u83b7\u53d6\u5230 CPU \u6267\u884c\u6743\u4ee5\u540e\u8fdb\u5165\u8fd0\u884c\u72b6\u6001\uff0c\u5f00\u59cb\u6267\u884c run \u65b9\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ul"},"Blocked\uff1a\u963b\u585e\u72b6\u6001\uff0c\u7ebf\u7a0b\u6ca1\u6709\u6267\u884c\u5b8c\uff0c\u7531\u4e8e\u67d0\u79cd\u539f\u56e0\uff08\u5982\uff0cI/O \u64cd\u4f5c\u7b49\uff09\u8ba9\u51fa CPU \u6267\u884c\u6743\uff0c\u81ea\u8eab\u8fdb\u5165\u963b\u585e\u72b6\u6001\u3002"),(0,a.kt)("li",{parentName:"ul"},"Dead\uff1a\u6b7b\u4ea1\u72b6\u6001\uff0c\u7ebf\u7a0b\u6267\u884c\u5b8c\u6210\u6216\u8005\u6267\u884c\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u5f02\u5e38\uff0c\u7ebf\u7a0b\u5c31\u4f1a\u8fdb\u5165\u6b7b\u4ea1\u72b6\u6001\u3002")),(0,a.kt)("p",null,"\u8fd9\u4e94\u79cd\u72b6\u6001\u4e4b\u95f4\u7684\u8f6c\u6362\u5173\u7cfb\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"thread7.png",src:n(3571).Z,width:"562",height:"215"})),(0,a.kt)("h2",{id:"jdk8-\u7684-threadstate"},"JDK8 \u7684 Thread.State"),(0,a.kt)("h3",{id:"new"},"NEW"),(0,a.kt)("p",null,"Thread state for a thread which has not yet started."),(0,a.kt)("h3",{id:"runnable"},"RUNNABLE"),(0,a.kt)("p",null,"A thread in the runnable state is executing in the Java virtual machine but it may be waiting for other resources from the operating system such as processor."),(0,a.kt)("h3",{id:"blocked"},"BLOCKED"),(0,a.kt)("p",null,"A thread in the blocked state is waiting for a monitor lock to enter a synchronized block/method or reenter a synchronized block/method after calling Object.wait."),(0,a.kt)("h3",{id:"waiting"},"WAITING"),(0,a.kt)("p",null,"A thread is in the waiting state due to calling one of the following methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Object.wait with no timeout"),(0,a.kt)("li",{parentName:"ul"},"Thread.join with no timeout"),(0,a.kt)("li",{parentName:"ul"},"LockSupport.park")),(0,a.kt)("p",null,"A thread in the waiting state is waiting for another thread to perform a particular action. For example, a thread that has called Object.wait() on an object is waiting for another thread to call Object.notify() or Object.notifyAll() on that object. A thread that has called Thread.join() is waiting for a specified thread to terminate."),(0,a.kt)("h3",{id:"timed_waiting"},"TIMED_WAITING"),(0,a.kt)("p",null,"A thread is in the timed waiting state due to calling one of the following methods with a specified positive waiting time:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Thread.sleep"),(0,a.kt)("li",{parentName:"ul"},"Object.wait with timeout"),(0,a.kt)("li",{parentName:"ul"},"Thread.join with timeout"),(0,a.kt)("li",{parentName:"ul"},"LockSupport.parkNanos"),(0,a.kt)("li",{parentName:"ul"},"LockSupport.parkUntil")),(0,a.kt)("h3",{id:"terminated"},"TERMINATED"),(0,a.kt)("p",null,"The thread has completed execution."))}d.isMDXComponent=!0},3571:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);