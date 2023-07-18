"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7543],{3905:(n,t,e)=>{e.d(t,{Zo:()=>d,kt:()=>h});var a=e(67294);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function o(n,t){if(null==n)return{};var e,a,i=function(n,t){if(null==n)return{};var e,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var s=a.createContext({}),p=function(n){var t=a.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):l(l({},t),n)),e},d=function(n){var t=p(n.components);return a.createElement(s.Provider,{value:t},n.children)},c="mdxType",u={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(n,t){var e=n.components,i=n.mdxType,r=n.originalType,s=n.parentName,d=o(n,["components","mdxType","originalType","parentName"]),c=p(e),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return e?a.createElement(h,l(l({ref:t},d),{},{components:e})):a.createElement(h,l({ref:t},d))}));function h(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var r=e.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=n,o[c]="string"==typeof n?n:i,l[1]=o;for(var p=2;p<r;p++)l[p]=e[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},76112:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=e(87462),i=(e(67294),e(3905));const r={},l=void 0,o={unversionedId:"concurrent/JAVA\u7ebf\u7a0b\u534f\u4f5c",id:"concurrent/JAVA\u7ebf\u7a0b\u534f\u4f5c",title:"JAVA\u7ebf\u7a0b\u534f\u4f5c",description:"wait/notify/notifyAll",source:"@site/docs/concurrent/JAVA\u7ebf\u7a0b\u534f\u4f5c.md",sourceDirName:"concurrent",slug:"/concurrent/JAVA\u7ebf\u7a0b\u534f\u4f5c",permalink:"/docs/concurrent/JAVA\u7ebf\u7a0b\u534f\u4f5c",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/concurrent/JAVA\u7ebf\u7a0b\u534f\u4f5c.md",tags:[],version:"current",lastUpdatedAt:1689650905,formattedLastUpdatedAt:"2023\u5e747\u670818\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JAVA\u7ba1\u7a0b\u6a21\u578b",permalink:"/docs/concurrent/JAVA\u7ba1\u7a0b\u6a21\u578b"},next:{title:"JAVA\u7ebf\u7a0b\u72b6\u6001",permalink:"/docs/concurrent/JAVA\u7ebf\u7a0b\u72b6\u6001"}},s={},p=[{value:"wait/notify/notifyAll",id:"waitnotifynotifyall",level:2},{value:"wait",id:"wait",level:3},{value:"notify/notifyAll",id:"notifynotifyall",level:3},{value:"sleep/yield/join",id:"sleepyieldjoin",level:2},{value:"sleep",id:"sleep",level:3},{value:"yield",id:"yield",level:3},{value:"join",id:"join",level:3}],d={toc:p},c="wrapper";function u(n){let{components:t,...e}=n;return(0,i.kt)(c,(0,a.Z)({},d,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"waitnotifynotifyall"},"wait/notify/notifyAll"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/concurrent/JAVA%E7%AE%A1%E7%A8%8B%E6%A8%A1%E5%9E%8B"},"synchronized \u5355\u6761\u4ef6\u53d8\u91cf\u7ba1\u7a0b\u6a21\u578b")),(0,i.kt)("h3",{id:"wait"},"wait"),(0,i.kt)("p",null,"JDK \u4e2d\u4e00\u5171\u63d0\u4f9b\u4e86\u8fd9\u4e09\u4e2a\u7248\u672c\u7684\u65b9\u6cd5\uff0c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"wait()\u65b9\u6cd5\u7684\u4f5c\u7528\u662f\u5c06\u5f53\u524d\u8fd0\u884c\u7684\u7ebf\u7a0b\u6302\u8d77\uff08\u5373\u8ba9\u5176\u8fdb\u5165\u963b\u585e\u72b6\u6001\uff09\uff0c\u76f4\u5230 notify \u6216 notifyAll \u65b9\u6cd5\u6765\u5524\u9192\u7ebf\u7a0b."),(0,i.kt)("li",{parentName:"ul"},"wait(long timeout)\uff0c\u8be5\u65b9\u6cd5\u4e0e wait()\u65b9\u6cd5\u7c7b\u4f3c\uff0c\u552f\u4e00\u7684\u533a\u522b\u5c31\u662f\u5728\u6307\u5b9a\u65f6\u95f4\u5185\uff0c\u5982\u679c\u6ca1\u6709 notify \u6216 notifAll \u65b9\u6cd5\u7684\u5524\u9192\uff0c\u4e5f\u4f1a\u81ea\u52a8\u5524\u9192\u3002"),(0,i.kt)("li",{parentName:"ul"},"wait(long timeout,long nanos)\uff0c\u672c\u610f\u5728\u4e8e\u66f4\u7cbe\u786e\u7684\u63a7\u5236\u8c03\u5ea6\u65f6\u95f4\uff0c\u4e0d\u8fc7\u4ece\u76ee\u524d\u7248\u672c\u6765\u770b\uff0c\u8be5\u65b9\u6cd5\u8c8c\u4f3c\u6ca1\u6709\u5b8c\u6574\u7684\u5b9e\u73b0\u8be5\u529f\u80fd\uff0c\u5176\u6e90\u7801(JDK1.8)\u5982\u4e0b\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public final void wait(long timeout, int nanos) throws InterruptedException {\n        if (timeout < 0) {\n            throw new IllegalArgumentException("timeout value is negative");\n        }\n\n        if (nanos < 0 || nanos > 999999) {\n            throw new IllegalArgumentException(\n                                "nanosecond timeout value out of range");\n        }\n\n        if (nanos >= 500000 || (nanos != 0 && timeout == 0)) {\n            timeout++;\n        }\n\n        wait(timeout);\n    }\n')),(0,i.kt)("p",null,"\u4ece\u6e90\u7801\u6765\u770b\uff0cJDK8 \u4e2d\u5bf9\u7eb3\u79d2\u7684\u5904\u7406\uff0c\u53ea\u505a\u4e86\u56db\u820d\u4e94\u5165\uff0c\u6240\u4ee5\u8fd8\u662f\u6309\u7167\u6beb\u79d2\u6765\u5904\u7406\u7684\uff0c\u53ef\u80fd\u5728\u672a\u6765\u7684\u67d0\u4e2a\u65f6\u95f4\u70b9\u4f1a\u7528\u5230\u7eb3\u79d2\u7ea7\u522b\u7684\u7cbe\u5ea6\u3002\u867d\u7136 JDK \u63d0\u4f9b\u4e86\u8fd9\u4e09\u4e2a\u7248\u672c\uff0c\u5176\u5b9e\u6700\u540e\u90fd\u662f\u8c03\u7528 wait(long timeout)\u65b9\u6cd5\u6765\u5b9e\u73b0\u7684\uff0cwait()\u65b9\u6cd5\u4e0e wait(0)\u7b49\u6548\uff0c\u800c wait(long timeout,int nanos)\u4ece\u4e0a\u9762\u7684\u6e90\u7801\u53ef\u4ee5\u770b\u5230\u4e5f\u662f\u901a\u8fc7 wait(long timeout)\u6765\u5b8c\u6210\u7684\u3002\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u6765\u6f14\u793a wait()\u65b9\u6cd5\u7684\u4f7f\u7528\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class WaitTest {\n\n  public void testWait() {\n    System.out.println("Start-----");\n    try {\n      wait(1000);\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n    System.out.println("End-------");\n  }\n\n  public static void main(String[] args) {\n    final WaitTest test = new WaitTest();\n    new Thread(\n      new Runnable() {\n\n        @Override\n        public void run() {\n          test.testWait();\n        }\n      }\n    )\n    .start();\n  }\n}\n')),(0,i.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u7684\u610f\u56fe\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u7a0b\u5e8f\u6267\u884c\u4ee5\u540e\uff0c\u8ba9\u5176\u6682\u505c\u4e00\u79d2\uff0c\u7136\u540e\u518d\u6267\u884c\u3002\u8fd0\u884c\u4e0a\u8ff0\u4ee3\u7801\uff0c\u67e5\u770b\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Start-----\nException in thread "Thread-0" java.lang.IllegalMonitorStateException\n    at java.lang.Object.wait(Native Method)\n    at com.paddx.test.concurrent.WaitTest.testWait(WaitTest.java:8)\n    at com.paddx.test.concurrent.WaitTest$1.run(WaitTest.java:20)\n    at java.lang.Thread.run(Thread.java:745)\n')),(0,i.kt)("p",null,"\u8fd9\u6bb5\u7a0b\u5e8f\u5e76\u6ca1\u6709\u6309\u6211\u4eec\u7684\u9884\u671f\u8f93\u51fa\u76f8\u5e94\u7ed3\u679c\uff0c\u800c\u662f\u629b\u51fa\u4e86\u4e00\u4e2a\u5f02\u5e38\u3002\u5927\u5bb6\u53ef\u80fd\u4f1a\u89c9\u5f97\u5947\u602a\u4e3a\u4ec0\u4e48\u4f1a\u629b\u51fa\u5f02\u5e38\uff1f\u800c\u629b\u51fa\u7684 IllegalMonitorStateException \u5f02\u5e38\u53c8\u662f\u4ec0\u4e48\uff1f\u6211\u4eec\u53ef\u4ee5\u770b\u4e00\u4e0b JDK \u4e2d\u5bf9 IllegalMonitorStateException \u7684\u63cf\u8ff0\uff1a"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Thrown to indicate that a thread has attempted to wait on an object's monitor or to notify other threads waiting on an object's monitor without owning the specified monitor.")),(0,i.kt)("p",null,"\u8fd9\u53e5\u8bdd\u7684\u610f\u601d\u5927\u6982\u5c31\u662f\uff1a\u7ebf\u7a0b\u8bd5\u56fe\u7b49\u5f85\u5bf9\u8c61\u7684\u76d1\u89c6\u5668\u6216\u8005\u8bd5\u56fe\u901a\u77e5\u5176\u4ed6\u6b63\u5728\u7b49\u5f85\u5bf9\u8c61\u76d1\u89c6\u5668\u7684\u7ebf\u7a0b\uff0c\u4f46\u672c\u8eab\u6ca1\u6709\u5bf9\u5e94\u7684\u76d1\u89c6\u5668\u7684\u6240\u6709\u6743\u3002wait \u65b9\u6cd5\u662f\u4e00\u4e2a\u672c\u5730\u65b9\u6cd5\uff0c\u5176\u5e95\u5c42\u662f\u901a\u8fc7\u4e00\u4e2a\u53eb\u505a\u76d1\u89c6\u5668\u9501\u7684\u5bf9\u8c61\u6765\u5b8c\u6210\u7684\u3002\u6240\u4ee5\u4e0a\u9762\u4e4b\u6240\u4ee5\u4f1a\u629b\u51fa\u5f02\u5e38\uff0c\u662f\u56e0\u4e3a\u5728\u8c03\u7528 wait \u65b9\u5f0f\u65f6\u6ca1\u6709\u83b7\u53d6\u5230 monitor \u5bf9\u8c61\u7684\u6240\u6709\u6743\uff0c\u90a3\u5982\u4f55\u83b7\u53d6 monitor \u5bf9\u8c61\u6240\u6709\u6743\uff1fJava \u4e2d\u53ef\u4ee5\u901a\u8fc7 Synchronized \u5173\u952e\u5b57\u6765\u5b8c\u6210\uff0c\u4fee\u6539\u4e0a\u8ff0\u4ee3\u7801\uff0c\u589e\u52a0 Synchronized \u5173\u952e\u5b57\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class WaitTest {\n\n  public synchronized void testWait() { //\u589e\u52a0Synchronized\u5173\u952e\u5b57\n    System.out.println("Start-----");\n    try {\n      wait(1000);\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n    System.out.println("End-------");\n  }\n\n  public static void main(String[] args) {\n    final WaitTest test = new WaitTest();\n    new Thread(\n      new Runnable() {\n\n        @Override\n        public void run() {\n          test.testWait();\n        }\n      }\n    )\n    .start();\n  }\n}\n')),(0,i.kt)("p",null,"\u73b0\u5728\u518d\u8fd0\u884c\u4e0a\u8ff0\u4ee3\u7801\uff0c\u5c31\u80fd\u770b\u5230\u9884\u671f\u7684\u6548\u679c\u4e86\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Start-----\nEnd-------\n")),(0,i.kt)("p",null,"\u6240\u4ee5\uff0c\u901a\u8fc7\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u5927\u5bb6\u5e94\u8be5\u5f88\u6e05\u695a\uff0cwait \u65b9\u6cd5\u7684\u4f7f\u7528\u5fc5\u987b\u5728\u540c\u6b65\u7684\u8303\u56f4\u5185\uff0c\u5426\u5219\u5c31\u4f1a\u629b\u51fa IllegalMonitorStateException \u5f02\u5e38\uff0cwait \u65b9\u6cd5\u7684\u4f5c\u7528\u5c31\u662f\u963b\u585e\u5f53\u524d\u7ebf\u7a0b\u7b49\u5f85 notify/notifyAll \u65b9\u6cd5\u7684\u5524\u9192\uff0c\u6216\u7b49\u5f85\u8d85\u65f6\u540e\u81ea\u52a8\u5524\u9192\u3002"),(0,i.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u5728 synchronized \u5173\u952e\u5b57\u4e2d\u4f7f\u7528\uff0c\u4e14\u8c03\u7528 wait\u3001notify \u7684\u5bf9\u8c61\u4e0e\u9501\u5bf9\u8c61\u76f8\u540c\uff0c\u5426\u5219\u4f1a\u629b\u51fa IllegalMonitorStateException \u5f02\u5e38\u3002"),(0,i.kt)("li",{parentName:"ul"},"wait() \u65b9\u6cd5\u8c03\u7528\u540e\uff0c\u4f1a\u7834\u574f\u539f\u5b50\u6027\u3002"))),(0,i.kt)("h3",{id:"notifynotifyall"},"notify/notifyAll"),(0,i.kt)("p",null,"\u6709\u4e86\u5bf9 wait \u65b9\u6cd5\u539f\u7406\u7684\u7406\u89e3\uff0cnotify \u65b9\u6cd5\u548c notifyAll \u65b9\u6cd5\u5c31\u5f88\u5bb9\u6613\u7406\u89e3\u4e86\u3002\u65e2\u7136 wait \u65b9\u5f0f\u662f\u901a\u8fc7\u5bf9\u8c61\u7684 monitor \u5bf9\u8c61\u6765\u5b9e\u73b0\u7684\uff0c\u6240\u4ee5\u53ea\u8981\u5728\u540c\u4e00\u5bf9\u8c61\u4e0a\u53bb\u8c03\u7528 notify/notifyAll \u65b9\u6cd5\uff0c\u5c31\u53ef\u4ee5\u5524\u9192\u5bf9\u5e94\u5bf9\u8c61 monitor \u4e0a\u7b49\u5f85\u7684\u7ebf\u7a0b\u4e86\u3002notify \u548c notifyAll \u7684\u533a\u522b\u5728\u4e8e\u524d\u8005\u53ea\u80fd\u5524\u9192 monitor \u4e0a\u7684\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u5bf9\u5176\u4ed6\u7ebf\u7a0b\u6ca1\u6709\u5f71\u54cd\uff0c\u800c notifyAll \u5219\u5524\u9192\u6240\u6709\u7684\u7ebf\u7a0b\uff0c\u770b\u4e0b\u9762\u7684\u4f8b\u5b50\u5f88\u5bb9\u6613\u7406\u89e3\u8fd9\u4e24\u8005\u7684\u5dee\u522b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class NotifyTest {\n\n  public synchronized void testWait() {\n    System.out.println(Thread.currentThread().getName() + " Start-----");\n    try {\n      wait(0);\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n    System.out.println(Thread.currentThread().getName() + " End-------");\n  }\n\n  public static void main(String[] args) throws InterruptedException {\n    final NotifyTest test = new NotifyTest();\n    for (int i = 0; i < 5; i++) {\n      new Thread(\n        new Runnable() {\n\n          @Override\n          public void run() {\n            test.testWait();\n          }\n        }\n      )\n      .start();\n    }\n\n    synchronized (test) {\n      test.notify();\n    }\n    Thread.sleep(3000);\n    System.out.println("-----------\u5206\u5272\u7ebf-------------");\n\n    synchronized (test) {\n      test.notifyAll();\n    }\n  }\n}\n')),(0,i.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Thread-0 Start-----\nThread-1 Start-----\nThread-2 Start-----\nThread-3 Start-----\nThread-4 Start-----\nThread-0 End-------\n-----------\u5206\u5272\u7ebf-------------\nThread-4 End-------\nThread-3 End-------\nThread-2 End-------\nThread-1 End-------\n")),(0,i.kt)("p",null,"\u4ece\u7ed3\u679c\u53ef\u4ee5\u770b\u51fa\uff1a\u8c03\u7528 notify \u65b9\u6cd5\u65f6\u53ea\u6709\u7ebf\u7a0b Thread-0 \u88ab\u5524\u9192\uff0c\u4f46\u662f\u8c03\u7528 notifyAll \u65f6\uff0c\u6240\u6709\u7684\u7ebf\u7a0b\u90fd\u88ab\u5524\u9192\u4e86\u3002"),(0,i.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u8c03\u7528 wait \u65b9\u6cd5\u540e\uff0c\u7ebf\u7a0b\u662f\u4f1a\u91ca\u653e\u5bf9 monitor \u5bf9\u8c61\u7684\u6240\u6709\u6743\u7684;"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u901a\u8fc7 wait \u65b9\u6cd5\u963b\u585e\u7684\u7ebf\u7a0b\uff0c\u5fc5\u987b\u540c\u65f6\u6ee1\u8db3\u4ee5\u4e0b\u4e24\u4e2a\u6761\u4ef6\u624d\u80fd\u88ab\u771f\u6b63\u6267\u884c\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u9700\u8981\u88ab\u5524\u9192\uff08\u8d85\u65f6\u5524\u9192\u6216\u8c03\u7528 notify/notifyll\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u5524\u9192\u540e\u9700\u8981\u7ade\u4e89\u5230\u9501\uff08monitor\uff09"))))),(0,i.kt)("h2",{id:"sleepyieldjoin"},"sleep/yield/join"),(0,i.kt)("p",null,"\u4e0a\u9762\u6211\u4eec\u5df2\u7ecf\u6e05\u695a\u4e86 wait \u548c notify \u65b9\u6cd5\u7684\u4f7f\u7528\u548c\u539f\u7406\uff0c\u73b0\u5728\u6211\u4eec\u518d\u6765\u770b\u53e6\u5916\u4e00\u7ec4\u7ebf\u7a0b\u95f4\u534f\u4f5c\u7684\u65b9\u6cd5\u3002\u8fd9\u7ec4\u65b9\u6cd5\u8ddf\u4e0a\u9762\u65b9\u6cd5\u7684\u6700\u660e\u663e\u533a\u522b\u662f\uff1a\u8fd9\u51e0\u4e2a\u65b9\u6cd5\u90fd\u4f4d\u4e8e Thread \u7c7b\u4e2d\uff0c\u800c\u4e0a\u9762\u4e09\u4e2a\u65b9\u6cd5\u90fd\u4f4d\u4e8e Object \u7c7b\u4e2d\u3002"),(0,i.kt)("h3",{id:"sleep"},"sleep"),(0,i.kt)("p",null,"sleep \u65b9\u6cd5\u7684\u4f5c\u7528\u662f\u8ba9\u5f53\u524d\u7ebf\u7a0b\u6682\u505c\u6307\u5b9a\u7684\u65f6\u95f4\uff08\u6beb\u79d2\uff09,\u9700\u8981\u6ce8\u610f\u5176\u4e0e wait \u65b9\u6cd5\u7684\u533a\u522b\u3002\u6700\u7b80\u5355\u7684\u533a\u522b\u662f\uff0cwait \u65b9\u6cd5\u4f9d\u8d56\u4e8e\u540c\u6b65\uff0c\u800c sleep \u65b9\u6cd5\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u3002\u800c\u66f4\u6df1\u5c42\u6b21\u7684\u533a\u522b\u5728\u4e8e",(0,i.kt)("strong",{parentName:"p"},"sleep \u65b9\u6cd5\u53ea\u662f\u6682\u65f6\u8ba9\u51fa CPU \u7684\u6267\u884c\u6743\uff0c\u5e76\u4e0d\u91ca\u653e\u9501\u3002\u800c wait \u65b9\u6cd5\u5219\u9700\u8981\u91ca\u653e\u9501\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class SleepTest {\n\n  public synchronized void sleepMethod() {\n    System.out.println("Sleep start-----");\n    try {\n      Thread.sleep(1000);\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n    System.out.println("Sleep end-----");\n  }\n\n  public synchronized void waitMethod() {\n    System.out.println("Wait start-----");\n    try {\n      wait(1000);\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n    System.out.println("Wait end-----");\n  }\n\n  public static void main(String[] args) {\n    final SleepTest test1 = new SleepTest();\n\n    for (int i = 0; i < 3; i++) {\n      new Thread(\n        new Runnable() {\n\n          @Override\n          public void run() {\n            test1.sleepMethod();\n          }\n        }\n      )\n      .start();\n    }\n\n    try {\n      Thread.sleep(10000); //\u6682\u505c\u5341\u79d2\uff0c\u7b49\u4e0a\u9762\u7a0b\u5e8f\u6267\u884c\u5b8c\u6210\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n    System.out.println("-----\u5206\u5272\u7ebf-----");\n\n    final SleepTest test2 = new SleepTest();\n\n    for (int i = 0; i < 3; i++) {\n      new Thread(\n        new Runnable() {\n\n          @Override\n          public void run() {\n            test2.waitMethod();\n          }\n        }\n      )\n      .start();\n    }\n  }\n}\n')),(0,i.kt)("p",null,"\u6267\u884c\u7ed3\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"Sleep start-----\nSleep end-----\nSleep start-----\nSleep end-----\nSleep start-----\nSleep end-----\n-----\u5206\u5272\u7ebf-----\nWait start-----\nWait start-----\nWait start-----\nWait end-----\nWait end-----\nWait end-----\n")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u7ed3\u679c\u7684\u533a\u522b\u5f88\u660e\u663e\uff0c\u901a\u8fc7 sleep \u65b9\u6cd5\u5b9e\u73b0\u7684\u6682\u505c\uff0c\u7a0b\u5e8f\u662f\u987a\u5e8f\u8fdb\u5165\u540c\u6b65\u5757\u7684\uff0c\u53ea\u6709\u5f53\u4e0a\u4e00\u4e2a\u7ebf\u7a0b\u6267\u884c\u5b8c\u6210\u7684\u65f6\u5019\uff0c\u4e0b\u4e00\u4e2a\u7ebf\u7a0b\u624d\u80fd\u8fdb\u5165\u540c\u6b65\u65b9\u6cd5\uff0csleep \u6682\u505c\u671f\u95f4\u4e00\u76f4\u6301\u6709 monitor \u5bf9\u8c61\u9501\uff0c\u5176\u4ed6\u7ebf\u7a0b\u662f\u4e0d\u80fd\u8fdb\u5165\u7684\u3002\u800c wait \u65b9\u6cd5\u5219\u4e0d\u540c\uff0c\u5f53\u8c03\u7528 wait \u65b9\u6cd5\u540e\uff0c\u5f53\u524d\u7ebf\u7a0b\u4f1a\u91ca\u653e\u6301\u6709\u7684 monitor \u5bf9\u8c61\u9501\uff0c\u56e0\u6b64\uff0c\u5176\u4ed6\u7ebf\u7a0b\u8fd8\u53ef\u4ee5\u8fdb\u5165\u5230\u540c\u6b65\u65b9\u6cd5\uff0c\u7ebf\u7a0b\u88ab\u5524\u9192\u540e\uff0c\u9700\u8981\u7ade\u4e89\u9501\uff0c\u83b7\u53d6\u5230\u9501\u4e4b\u540e\u518d\u7ee7\u7eed\u6267\u884c\u3002"),(0,i.kt)("h3",{id:"yield"},"yield"),(0,i.kt)("p",null,"yield \u65b9\u6cd5\u7684\u4f5c\u7528\u662f\u6682\u505c\u5f53\u524d\u7ebf\u7a0b\uff0c\u4ee5\u4fbf\u5176\u4ed6\u7ebf\u7a0b\u6709\u673a\u4f1a\u6267\u884c\uff0c\u4e0d\u8fc7\u4e0d\u80fd\u6307\u5b9a\u6682\u505c\u7684\u65f6\u95f4\uff0c\u5e76\u4e14\u4e5f\u4e0d\u80fd\u4fdd\u8bc1\u5f53\u524d\u7ebf\u7a0b\u9a6c\u4e0a\u505c\u6b62\u3002yield \u65b9\u6cd5\u53ea\u662f\u5c06 Running \u72b6\u6001\u8f6c\u53d8\u4e3a Runnable \u72b6\u6001\u3002\u6211\u4eec\u8fd8\u662f\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50\u6765\u6f14\u793a\u5176\u4f7f\u7528\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class YieldTest implements Runnable {\n\n  @Override\n  public void run() {\n    try {\n      Thread.sleep(100);\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n    for (int i = 0; i < 5; i++) {\n      System.out.println(Thread.currentThread().getName() + ": " + i);\n      Thread.yield();\n    }\n  }\n\n  public static void main(String[] args) {\n    YieldTest runn = new YieldTest();\n    Thread t1 = new Thread(runn, "FirstThread");\n    Thread t2 = new Thread(runn, "SecondThread");\n\n    t1.start();\n    t2.start();\n  }\n}\n')),(0,i.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"FirstThread: 0\nSecondThread: 0\nFirstThread: 1\nSecondThread: 1\nFirstThread: 2\nSecondThread: 2\nFirstThread: 3\nSecondThread: 3\nFirstThread: 4\nSecondThread: 4\n")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u5c31\u662f\u901a\u8fc7 yield \u65b9\u6cd5\u6765\u5b9e\u73b0\u4e24\u4e2a\u7ebf\u7a0b\u7684\u4ea4\u66ff\u6267\u884c\u3002\u4e0d\u8fc7\u8bf7\u6ce8\u610f\uff1a",(0,i.kt)("strong",{parentName:"p"},"\u8fd9\u79cd\u4ea4\u66ff\u5e76\u4e0d\u4e00\u5b9a\u80fd\u5f97\u5230\u4fdd\u8bc1\uff0c\u6e90\u7801\u4e2d\u4e5f\u5bf9\u8fd9\u4e2a\u95ee\u9898\u8fdb\u884c\u8bf4\u660e\uff1a")),(0,i.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u8c03\u5ea6\u5668\u53ef\u80fd\u4f1a\u5ffd\u7565\u8be5\u65b9\u6cd5"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7684\u65f6\u5019\u8981\u4ed4\u7ec6\u5206\u6790\u548c\u6d4b\u8bd5\uff0c\u786e\u4fdd\u80fd\u8fbe\u5230\u9884\u671f\u7684\u6548\u679c"),(0,i.kt)("li",{parentName:"ul"},"\u5f88\u5c11\u6709\u573a\u666f\u8981\u7528\u5230\u8be5\u65b9\u6cd5\uff0c\u4e3b\u8981\u4f7f\u7528\u7684\u5730\u65b9\u662f\u8c03\u8bd5\u548c\u6d4b\u8bd5"))),(0,i.kt)("h3",{id:"join"},"join"),(0,i.kt)("p",null,"join \u65b9\u6cd5\u7684\u4f5c\u7528\u662f\u7236\u7ebf\u7a0b\u7b49\u5f85\u5b50\u7ebf\u7a0b\u6267\u884c\u5b8c\u6210\u540e\u518d\u6267\u884c\uff0c\u6362\u53e5\u8bdd\u8bf4\u5c31\u662f\u5c06\u5f02\u6b65\u6267\u884c\u7684\u7ebf\u7a0b\u5408\u5e76\u4e3a\u540c\u6b65\u7684\u7ebf\u7a0b\u3002JDK \u4e2d\u63d0\u4f9b\u4e09\u4e2a\u7248\u672c\u7684 join \u65b9\u6cd5\uff0c\u5176\u5b9e\u73b0\u4e0e wait \u65b9\u6cd5\u7c7b\u4f3c\uff0cjoin()\u65b9\u6cd5\u5b9e\u9645\u4e0a\u6267\u884c\u7684 join(0)\uff0c\u800c join(long millis, int nanos)\u4e5f\u4e0e wait(long millis, int nanos)\u7684\u5b9e\u73b0\u65b9\u5f0f\u4e00\u81f4\uff0c\u6682\u65f6\u5bf9\u7eb3\u79d2\u7684\u652f\u6301\u4e5f\u662f\u4e0d\u5b8c\u6574\u7684\u3002\u6211\u4eec\u53ef\u4ee5\u770b\u4e0b join \u65b9\u6cd5\u7684\u6e90\u7801\uff0c\u8fd9\u6837\u66f4\u5bb9\u6613\u7406\u89e3\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public final void join() throws InterruptedException {\n        join(0);\n    }\n\n public final synchronized void join(long millis)\n    throws InterruptedException {\n        long base = System.currentTimeMillis();\n        long now = 0;\n\n        if (millis < 0) {\n            throw new IllegalArgumentException("timeout value is negative");\n        }\n\n        if (millis == 0) {\n            while (isAlive()) {\n                wait(0);\n            }\n        } else {\n            while (isAlive()) {\n                long delay = millis - now;\n                if (delay <= 0) {\n                    break;\n                }\n                wait(delay);\n                now = System.currentTimeMillis() - base;\n            }\n        }\n    }\n\npublic final synchronized void join(long millis, int nanos)\n    throws InterruptedException {\n\n        if (millis < 0) {\n            throw new IllegalArgumentException("timeout value is negative");\n        }\n\n        if (nanos < 0 || nanos > 999999) {\n            throw new IllegalArgumentException(\n                                "nanosecond timeout value out of range");\n        }\n\n        if (nanos >= 500000 || (nanos != 0 && millis == 0)) {\n            millis++;\n        }\n\n        join(millis);\n    }\n')),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa join \u65b9\u6cd5\u5c31\u662f\u901a\u8fc7 wait \u65b9\u6cd5\u6765\u5c06\u7ebf\u7a0b\u7684\u963b\u585e\uff0c\u5982\u679c join \u7684\u7ebf\u7a0b\u8fd8\u5728\u6267\u884c\uff0c\u5219\u5c06\u5f53\u524d\u7ebf\u7a0b\u963b\u585e\u8d77\u6765\uff0c\u76f4\u5230 join \u7684\u7ebf\u7a0b\u6267\u884c\u5b8c\u6210\uff0c\u5f53\u524d\u7ebf\u7a0b\u624d\u80fd\u6267\u884c\u3002\u4e0d\u8fc7\u6709\u4e00\u70b9\u9700\u8981\u6ce8\u610f\uff0c\u8fd9\u91cc\u7684 join \u53ea\u8c03\u7528\u4e86 wait \u65b9\u6cd5\uff0c\u5374\u6ca1\u6709\u5bf9\u5e94\u7684 notify \u65b9\u6cd5\uff0c\u539f\u56e0\u662f Thread \u7684 start \u65b9\u6cd5\u4e2d\u505a\u4e86\u76f8\u5e94\u7684\u5904\u7406\uff0c\u6240\u4ee5\u5f53 join \u7684\u7ebf\u7a0b\u6267\u884c\u5b8c\u6210\u4ee5\u540e\uff0c\u4f1a\u81ea\u52a8\u5524\u9192\u4e3b\u7ebf\u7a0b\u7ee7\u7eed\u5f80\u4e0b\u6267\u884c\u3002\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50\u6765\u6f14\u793a join \u65b9\u6cd5\u7684\u4f5c\u7528\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e0d\u4f7f\u7528 join \u65b9\u6cd5\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class JoinTest implements Runnable {\n\n  @Override\n  public void run() {\n    try {\n      System.out.println(Thread.currentThread().getName() + " start-----");\n      Thread.sleep(1000);\n      System.out.println(Thread.currentThread().getName() + " end------");\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n  }\n\n  public static void main(String[] args) {\n    for (int i = 0; i < 5; i++) {\n      Thread test = new Thread(new JoinTest());\n      test.start();\n    }\n\n    System.out.println("Finished~~~");\n  }\n}\n')),(0,i.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"Thread-0 start-----\nThread-1 start-----\nThread-2 start-----\nThread-3 start-----\nFinished~~~\nThread-4 start-----\nThread-2 end------\nThread-4 end------\nThread-1 end------\nThread-0 end------\nThread-3 end------\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528 join \u65b9\u6cd5\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class JoinTest implements Runnable {\n\n  @Override\n  public void run() {\n    try {\n      System.out.println(Thread.currentThread().getName() + " start-----");\n      Thread.sleep(1000);\n      System.out.println(Thread.currentThread().getName() + " end------");\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n  }\n\n  public static void main(String[] args) {\n    for (int i = 0; i < 5; i++) {\n      Thread test = new Thread(new JoinTest());\n      test.start();\n      try {\n        test.join(); //\u8c03\u7528join\u65b9\u6cd5\n      } catch (InterruptedException e) {\n        e.printStackTrace();\n      }\n    }\n\n    System.out.println("Finished~~~");\n  }\n}\n')),(0,i.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"Thread-0 start-----\nThread-0 end------\nThread-1 start-----\nThread-1 end------\nThread-2 start-----\nThread-2 end------\nThread-3 start-----\nThread-3 end------\nThread-4 start-----\nThread-4 end------\nFinished~~~\n")),(0,i.kt)("p",null,"\u5bf9\u6bd4\u4e24\u6bb5\u4ee3\u7801\u7684\u6267\u884c\u7ed3\u679c\u5f88\u5bb9\u6613\u53d1\u73b0\uff0c\u5728\u6ca1\u6709\u4f7f\u7528 join \u65b9\u6cd5\u4e4b\u95f4\uff0c\u7ebf\u7a0b\u662f\u5e76\u53d1\u6267\u884c\u7684\uff0c\u800c\u4f7f\u7528 join \u65b9\u6cd5\u540e\uff0c\u6240\u6709\u7ebf\u7a0b\u662f\u987a\u5e8f\u6267\u884c\u7684\u3002"),(0,i.kt)("p",null,"\u8f6c\u81ea",(0,i.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/paddix/p/5381958.html"},"Java \u5e76\u53d1\u7f16\u7a0b\uff1a\u7ebf\u7a0b\u95f4\u7684\u534f\u4f5c(wait/notify/sleep/yield/join)")))}u.isMDXComponent=!0}}]);