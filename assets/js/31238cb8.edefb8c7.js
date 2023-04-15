"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[3574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,g=p["".concat(c,".").concat(s)]||p[s]||m[s]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"java/threadDump\u5206\u6790",id:"java/threadDump\u5206\u6790",title:"threadDump\u5206\u6790",description:"dump \u6587\u4ef6\u4e2d\u503c\u5f97\u5173\u6ce8\u7684\u7ebf\u7a0b\u72b6\u6001\u6709\uff1a",source:"@site/docs/java/threadDump\u5206\u6790.md",sourceDirName:"java",slug:"/java/threadDump\u5206\u6790",permalink:"/docs/java/threadDump\u5206\u6790",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/java/threadDump\u5206\u6790.md",tags:[],version:"current",lastUpdatedAt:1681551353,formattedLastUpdatedAt:"2023\u5e744\u670815\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"log4j2\u4f7f\u7528",permalink:"/docs/java/log4j2\u4f7f\u7528"},next:{title:"\u6267\u884cshell\u547d\u4ee4",permalink:"/docs/java/\u6267\u884cshell\u547d\u4ee4"}},c={},u=[{value:"Waiting to lock \u548c Blocked",id:"waiting-to-lock-\u548c-blocked",level:2},{value:"Waiting on condition \u548c TIMED_WAITING",id:"waiting-on-condition-\u548c-timed_waiting",level:2},{value:"in Obejct.wait() \u548c TIMED_WAITING",id:"in-obejctwait-\u548c-timed_waiting",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"dump \u6587\u4ef6\u4e2d\u503c\u5f97\u5173\u6ce8\u7684\u7ebf\u7a0b\u72b6\u6001\u6709\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6b7b\u9501\uff0cDeadlock\uff08\u91cd\u70b9\u5173\u6ce8\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u4e2d\uff0cRunnable"),(0,r.kt)("li",{parentName:"ul"},"\u7b49\u5f85\u8d44\u6e90\uff0cWaiting on condition\uff08\u91cd\u70b9\u5173\u6ce8\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u7b49\u5f85\u83b7\u53d6\u76d1\u89c6\u5668\uff0cWaiting on monitor entry\uff08\u91cd\u70b9\u5173\u6ce8\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u6682\u505c\uff0cSuspended"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u7b49\u5f85\u4e2d\uff0cObject.wait() \u6216 TIMED_WAITING"),(0,r.kt)("li",{parentName:"ul"},"\u963b\u585e\uff0cBlocked\uff08\u91cd\u70b9\u5173\u6ce8\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u505c\u6b62\uff0cParked")),(0,r.kt)("p",null,"dump \u6587\u4ef6\u4e2d\u7684\u7ebf\u7a0b\u72b6\u6001\u542b\u4e49\u53ca\u6ce8\u610f\u4e8b\u9879:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deadlock")),(0,r.kt)("p",null,"\u6b7b\u9501\u7ebf\u7a0b\uff0c\u4e00\u822c\u6307\u591a\u4e2a\u7ebf\u7a0b\u8c03\u7528\u95f4\uff0c\u8fdb\u5165\u76f8\u4e92\u8d44\u6e90\u5360\u7528\uff0c\u5bfc\u81f4\u4e00\u76f4\u7b49\u5f85\u65e0\u6cd5\u91ca\u653e\u7684\u60c5\u51b5\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Runnable")),(0,r.kt)("p",null,"\u4e00\u822c\u6307\u8be5\u7ebf\u7a0b\u6b63\u5728\u6267\u884c\u72b6\u6001\u4e2d\uff0c\u8be5\u7ebf\u7a0b\u5360\u7528\u4e86\u8d44\u6e90\uff0c\u6b63\u5728\u5904\u7406\u67d0\u4e2a\u8bf7\u6c42\uff0c\u6709\u53ef\u80fd\u6b63\u5728\u4f20\u9012 SQL \u5230\u6570\u636e\u5e93\u6267\u884c\uff0c\u6709\u53ef\u80fd\u5728\u5bf9\u67d0\u4e2a\u6587\u4ef6\u64cd\u4f5c\uff0c\u6709\u53ef\u80fd\u8fdb\u884c\u6570\u636e\u7c7b\u578b\u7b49\u8f6c\u6362\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Waiting on condition")),(0,r.kt)("p",null,"\u7b49\u5f85\u8d44\u6e90\uff0c\u6216\u7b49\u5f85\u67d0\u4e2a\u6761\u4ef6\u7684\u53d1\u751f\u3002\u5177\u4f53\u539f\u56e0\u9700\u7ed3\u5408 stacktrace \u6765\u5206\u6790:\u5982\u679c\u5806\u6808\u4fe1\u606f\u660e\u786e\u662f\u5e94\u7528\u4ee3\u7801\uff0c\u5219\u8bc1\u660e\u8be5\u7ebf\u7a0b\u6b63\u5728\u7b49\u5f85\u8d44\u6e90\u3002\u4e00\u822c\u662f\u5927\u91cf\u8bfb\u53d6\u67d0\u8d44\u6e90\uff0c\u4e14\u8be5\u8d44\u6e90\u91c7\u7528\u4e86\u8d44\u6e90\u9501\u7684\u60c5\u51b5\u4e0b\uff0c\u7ebf\u7a0b\u8fdb\u5165\u7b49\u5f85\u72b6\u6001\uff0c\u7b49\u5f85\u8d44\u6e90\u7684\u8bfb\u53d6\u53c8\u6216\u8005\uff0c\u6b63\u5728\u7b49\u5f85\u5176\u4ed6\u7ebf\u7a0b\u7684\u6267\u884c\u7b49\u3002\u5982\u679c\u53d1\u73b0\u6709\u5927\u91cf\u7684\u7ebf\u7a0b\u90fd\u5728\u5904\u5728 Wait on condition\uff0c\u4ece\u7ebf\u7a0b stack \u770b\uff0c\u6b63\u7b49\u5f85\u7f51\u7edc\u8bfb\u5199\uff0c\u8fd9\u53ef\u80fd\u662f\u4e00\u4e2a\u7f51\u7edc\u74f6\u9888\u7684\u5f81\u5146\u3002\u56e0\u4e3a\u7f51\u7edc\u963b\u585e\u5bfc\u81f4\u7ebf\u7a0b\u65e0\u6cd5\u6267\u884c\u3002\u4e00\u79cd\u60c5\u51b5\u662f\u7f51\u7edc\u975e\u5e38\u5fd9\uff0c\u51e0\u4e4e\u6d88\u8017\u4e86\u6240\u6709\u7684\u5e26\u5bbd\uff0c\u4ecd\u7136\u6709\u5927\u91cf\u6570\u636e\u7b49\u5f85\u7f51\u7edc\u8bfb\u5199\uff1b\u53e6\u4e00\u79cd\u60c5\u51b5\u4e5f\u53ef\u80fd\u662f\u7f51\u7edc\u7a7a\u95f2\uff0c\u4f46\u7531\u4e8e\u8def\u7531\u7b49\u95ee\u9898\uff0c\u5bfc\u81f4\u5305\u65e0\u6cd5\u6b63\u5e38\u7684\u5230\u8fbe\u3002\u53e6\u5916\u4e00\u79cd\u51fa\u73b0 Wait on condition \u7684\u5e38\u89c1\u60c5\u51b5\u662f\u8be5\u7ebf\u7a0b\u5728 sleep\uff0c\u7b49\u5f85 sleep \u7684\u65f6\u95f4\u5230\u4e86\u65f6\u5019\uff0c\u5c06\u88ab\u5524\u9192\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Blocked")),(0,r.kt)("p",null,"\u7ebf\u7a0b\u963b\u585e\uff0c\u662f\u6307\u5f53\u524d\u7ebf\u7a0b\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u6240\u9700\u8981\u7684\u8d44\u6e90\u957f\u65f6\u95f4\u7b49\u5f85\u5374\u4e00\u76f4\u672a\u80fd\u83b7\u53d6\u5230\uff0c\u88ab\u5bb9\u5668\u7684\u7ebf\u7a0b\u7ba1\u7406\u5668\u6807\u8bc6\u4e3a\u963b\u585e\u72b6\u6001\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u7b49\u5f85\u8d44\u6e90\u8d85\u65f6\u7684\u7ebf\u7a0b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Waiting for monitor entry \u548c in Object.wait()")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"threaddump1.png",src:n(6700).Z,width:"500",height:"313"})),(0,r.kt)("p",null,"Monitor \u662f Java \u4e2d\u7528\u4ee5\u5b9e\u73b0\u7ebf\u7a0b\u4e4b\u95f4\u7684\u4e92\u65a5\u4e0e\u534f\u4f5c\u7684\u4e3b\u8981\u624b\u6bb5\uff0c\u5b83\u53ef\u4ee5\u770b\u6210\u662f\u5bf9\u8c61\u6216\u8005 Class \u7684\u9501\u3002\u6bcf\u4e00\u4e2a\u5bf9\u8c61\u90fd\u6709\uff0c\u4e5f\u4ec5\u6709\u4e00\u4e2a monitor\u3002\u4ece\u56fe\u4e2d\u53ef\u4ee5\u770b\u51fa\uff0c\u6bcf\u4e2a Monitor \u5728\u67d0\u4e2a\u65f6\u523b\uff0c\u53ea\u80fd\u88ab\u4e00\u4e2a\u7ebf\u7a0b\u62e5\u6709\uff0c\u8be5\u7ebf\u7a0b\u5c31\u662f \u201cActive Thread\u201d\uff0c\u800c\u5176\u5b83\u7ebf\u7a0b\u90fd\u662f \u201cWaiting Thread\u201d\uff0c\u5206\u522b\u5728\u4e24\u4e2a\u961f\u5217 \u201c Entry Set\u201d\u548c \u201cWait Set\u201d\u91cc\u9762\u7b49\u5019\u3002\u5728 \u201cEntry Set\u201d\u4e2d\u7b49\u5f85\u7684\u7ebf\u7a0b\u72b6\u6001\u662f \u201cWaiting for monitor entry\u201d\uff0c\u800c\u5728 \u201cWait Set\u201d\u4e2d\u7b49\u5f85\u7684\u7ebf\u7a0b\u72b6\u6001\u662f \u201cin Object.wait()\u201d\u3002"),(0,r.kt)("h2",{id:"waiting-to-lock-\u548c-blocked"},"Waiting to lock \u548c Blocked"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},'"RMI TCP Connection(267865)-172.16.5.25" daemon prio=10 tid=0x00007fd508371000 nid=0x55ae waiting for monitor entry [0x00007fd4f8684000]\n   java.lang.Thread.State: BLOCKED (on object monitor)\nat org.apache.log4j.Category.callAppenders(Category.java:201)\n- waiting to lock <0x00000000acf4d0c0> (a org.apache.log4j.Logger)\nat org.apache.log4j.Category.forcedLog(Category.java:388)\nat org.apache.log4j.Category.log(Category.java:853)\nat org.apache.commons.logging.impl.Log4JLogger.warn(Log4JLogger.java:234)\nat com.tuan.core.common.lang.cache.remote.SpyMemcachedClient.get(SpyMemcachedClient.java:110)\n\u2026\u2026\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u72b6\u6001\u662f Blocked\uff0c\u963b\u585e\u72b6\u6001\u3002\u8bf4\u660e\u7ebf\u7a0b\u7b49\u5f85\u8d44\u6e90\u8d85\u65f6\uff01"),(0,r.kt)("li",{parentName:"ul"},"\u201c waiting to lock <0x00000000acf4d0c0>\u201d\u6307\uff0c\u7ebf\u7a0b\u5728\u7b49\u5f85\u7ed9\u8fd9\u4e2a 0x00000000acf4d0c0 \u5730\u5740\u4e0a\u9501\uff08\u82f1\u6587\u53ef\u63cf\u8ff0\u4e3a\uff1atrying to obtain 0x00000000acf4d0c0 lock\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5728 dump \u65e5\u5fd7\u91cc\u67e5\u627e\u5b57\u7b26\u4e32 0x00000000acf4d0c0\uff0c\u53d1\u73b0\u6709\u5927\u91cf\u7ebf\u7a0b\u90fd\u5728\u7b49\u5f85\u7ed9\u8fd9\u4e2a\u5730\u5740\u4e0a\u9501\u3002\u5982\u679c\u80fd\u5728\u65e5\u5fd7\u91cc\u627e\u5230\u8c01\u83b7\u5f97\u4e86\u8fd9\u4e2a\u9501\uff08\u5982 locked < 0x00000000acf4d0c0 >\uff09\uff0c\u5c31\u53ef\u4ee5\u987a\u85e4\u6478\u74dc\u4e86\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u201cwaiting for monitor entry\u201d\u8bf4\u660e\u6b64\u7ebf\u7a0b\u901a\u8fc7 synchronized(obj) {\u2026\u2026} \u7533\u8bf7\u8fdb\u5165\u4e86\u4e34\u754c\u533a\uff0c\u4ece\u800c\u8fdb\u5165\u4e86\u4e0a\u56fe\u4e2d\u7684\u201cEntry Set\u201d\u961f\u5217\uff0c\u4f46\u8be5 obj \u5bf9\u5e94\u7684 monitor \u88ab\u5176\u4ed6\u7ebf\u7a0b\u62e5\u6709\uff0c\u6240\u4ee5\u672c\u7ebf\u7a0b\u5728 Entry Set \u961f\u5217\u4e2d\u7b49\u5f85\u3002"),(0,r.kt)("li",{parentName:"ul"},'\u7b2c\u4e00\u884c\u91cc\uff0c"RMI TCP Connection(267865)-172.16.5.25"\u662f Thread Name \u3002tid \u6307 Java Thread id\u3002nid \u6307 native \u7ebf\u7a0b\u7684 id\u3002prio \u662f\u7ebf\u7a0b\u4f18\u5148\u7ea7\u3002',"[","0x00007fd4f8684000","]","\u662f\u7ebf\u7a0b\u6808\u8d77\u59cb\u5730\u5740\u3002")),(0,r.kt)("h2",{id:"waiting-on-condition-\u548c-timed_waiting"},"Waiting on condition \u548c TIMED_WAITING"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},'"RMI TCP Connection(idle)" daemon prio=10 tid=0x00007fd50834e800 nid=0x56b2 waiting on condition [0x00007fd4f1a59000]\n   java.lang.Thread.State: TIMED_WAITING (parking)\nat sun.misc.Unsafe.park(Native Method)\n- parking to wait for  <0x00000000acd84de8> (a java.util.concurrent.SynchronousQueue$TransferStack)\nat java.util.concurrent.locks.LockSupport.parkNanos(LockSupport.java:198)\nat java.util.concurrent.SynchronousQueue$TransferStack.awaitFulfill(SynchronousQueue.java:424)\nat java.util.concurrent.SynchronousQueue$TransferStack.transfer(SynchronousQueue.java:323)\nat java.util.concurrent.SynchronousQueue.poll(SynchronousQueue.java:874)\nat java.util.concurrent.ThreadPoolExecutor.getTask(ThreadPoolExecutor.java:945)\nat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:907)\nat java.lang.Thread.run(Thread.java:662)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u201cTIMED_WAITING (parking)\u201d\u4e2d\u7684 timed_waiting \u6307\u7b49\u5f85\u72b6\u6001\uff0c\u4f46\u8fd9\u91cc\u6307\u5b9a\u4e86\u65f6\u95f4\uff0c\u5230\u8fbe\u6307\u5b9a\u7684\u65f6\u95f4\u540e\u81ea\u52a8\u9000\u51fa\u7b49\u5f85\u72b6\u6001\uff1bparking \u6307\u7ebf\u7a0b\u5904\u4e8e\u6302\u8d77\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u201cwaiting on condition\u201d\u9700\u8981\u4e0e\u5806\u6808\u4e2d\u7684\u201cparking to wait for <0x00000000acd84de8> (a java.util.concurrent.SynchronousQueue\\$TransferStack)\u201d\u7ed3\u5408\u6765\u770b\u3002\u9996\u5148\uff0c\u672c\u7ebf\u7a0b\u80af\u5b9a\u662f\u5728\u7b49\u5f85\u67d0\u4e2a\u6761\u4ef6\u7684\u53d1\u751f\uff0c\u6765\u628a\u81ea\u5df1\u5524\u9192\u3002\u5176\u6b21\uff0cSynchronousQueue \u5e76\u4e0d\u662f\u4e00\u4e2a\u961f\u5217\uff0c\u53ea\u662f\u7ebf\u7a0b\u4e4b\u95f4\u79fb\u4ea4\u4fe1\u606f\u7684\u673a\u5236\uff0c\u5f53\u6211\u4eec\u628a\u4e00\u4e2a\u5143\u7d20\u653e\u5165\u5230 SynchronousQueue \u4e2d\u65f6\u5fc5\u987b\u6709\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u6b63\u5728\u7b49\u5f85\u63a5\u53d7\u79fb\u4ea4\u7684\u4efb\u52a1\uff0c\u56e0\u6b64\u8fd9\u5c31\u662f\u672c\u7ebf\u7a0b\u5728\u7b49\u5f85\u7684\u6761\u4ef6\u3002")),(0,r.kt)("h2",{id:"in-obejctwait-\u548c-timed_waiting"},"in Obejct.wait() \u548c TIMED_WAITING"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},'"RMI RenewClean-[172.16.5.19:28475]" daemon prio=10 tid=0x0000000041428800 nid=0xb09 in Object.wait() [0x00007f34f4bd0000]\n   java.lang.Thread.State: TIMED_WAITING (on object monitor)\nat java.lang.Object.wait(Native Method)\n- waiting on <0x00000000aa672478> (a java.lang.ref.ReferenceQueue$Lock)\nat java.lang.ref.ReferenceQueue.remove(ReferenceQueue.java:118)\n- locked <0x00000000aa672478> (a java.lang.ref.ReferenceQueue$Lock)\nat sun.rmi.transport.DGCClient$EndpointEntry$RenewCleanThread.run(DGCClient.java:516)\nat java.lang.Thread.run(Thread.java:662)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u201cTIMED_WAITING (on object monitor)\u201d\uff0c\u5bf9\u4e8e\u672c\u4f8b\u800c\u8a00\uff0c\u662f\u56e0\u4e3a\u672c\u7ebf\u7a0b\u8c03\u7528\u4e86 java.lang.Object.wait(long timeout) \u800c\u8fdb\u5165\u7b49\u5f85\u72b6\u6001\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u201cWait Set\u201d\u4e2d\u7b49\u5f85\u7684\u7ebf\u7a0b\u72b6\u6001\u5c31\u662f\u201c in Object.wait() \u201d\u3002\u5f53\u7ebf\u7a0b\u83b7\u5f97\u4e86 Monitor\uff0c\u8fdb\u5165\u4e86\u4e34\u754c\u533a\u4e4b\u540e\uff0c\u5982\u679c\u53d1\u73b0\u7ebf\u7a0b\u7ee7\u7eed\u8fd0\u884c\u7684\u6761\u4ef6\u6ca1\u6709\u6ee1\u8db3\uff0c\u5b83\u5219\u8c03\u7528\u5bf9\u8c61\uff08\u4e00\u822c\u5c31\u662f\u88ab synchronized \u7684\u5bf9\u8c61\uff09\u7684 wait() \u65b9\u6cd5\uff0c\u653e\u5f03\u4e86 Monitor\uff0c\u8fdb\u5165 \u201cWait Set\u201d\u961f\u5217\u3002\u53ea\u6709\u5f53\u522b\u7684\u7ebf\u7a0b\u5728\u8be5\u5bf9\u8c61\u4e0a\u8c03\u7528\u4e86 notify() \u6216\u8005 notifyAll() \uff0c\u201c Wait Set\u201d\u961f\u5217\u4e2d\u7ebf\u7a0b\u624d\u5f97\u5230\u673a\u4f1a\u53bb\u7ade\u4e89\uff0c\u4f46\u662f\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u83b7\u5f97\u5bf9\u8c61\u7684 Monitor\uff0c\u6062\u590d\u5230\u8fd0\u884c\u6001\u3002"),(0,r.kt)("li",{parentName:"ul"},"RMI RenewClean \u662f DGCClient \u7684\u4e00\u90e8\u5206\u3002DGC \u6307\u7684\u662f Distributed GC\uff0c\u5373\u5206\u5e03\u5f0f\u5783\u573e\u56de\u6536\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6ce8\u610f\uff0c\u662f\u5148 locked <0x00000000aa672478>\uff0c\u540e waiting on <0x00000000aa672478>\uff0c\u4e4b\u6240\u4ee5\u5148\u9501\u518d\u7b49\u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8bf7\u770b\u4e0b\u9762\u5b83\u7684\u4ee3\u7801\u5b9e\u73b0\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"static private class  Lock { };\nprivate Lock lock = new Lock();\npublic Reference<? extends T> remove(long timeout)\n{\n    synchronized (lock) {\n        Reference<? extends T> r = reallyPoll();\n        if (r != null) return r;\n        for (;;) {\n            lock.wait(timeout);\n            r = reallyPoll();\n            \u2026\u2026\n       }\n}\n")),(0,r.kt)("p",null,"\u5373\u7ebf\u7a0b\u7684\u6267\u884c\u4e2d\uff0c\u5148\u7528 synchronized \u83b7\u5f97\u4e86\u8fd9\u4e2a\u5bf9\u8c61\u7684 Monitor\uff08\u5bf9\u5e94\u4e8e locked <0x00000000aa672478> \uff09\uff1b\u5f53\u6267\u884c\u5230 lock.wait(timeout);\uff0c\u7ebf\u7a0b\u5c31\u653e\u5f03\u4e86 Monitor \u7684\u6240\u6709\u6743\uff0c\u8fdb\u5165\u201cWait Set\u201d\u961f\u5217\uff08\u5bf9\u5e94\u4e8e waiting on <0x00000000aa672478> \uff09\u3002\n\u4ece\u5806\u6808\u4fe1\u606f\u770b\uff0c\u662f\u6b63\u5728\u6e05\u7406 remote references to remote objects \uff0c\u5f15\u7528\u7684\u79df\u7ea6\u5230\u4e86\uff0c\u5206\u5e03\u5f0f\u5783\u573e\u56de\u6536\u5728\u9010\u4e00\u6e05\u7406\u5462\u3002"))}m.isMDXComponent=!0},6700:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/threaddump1-32a0fff2c3cfdd8e77a1f963867ddd52.png"}}]);