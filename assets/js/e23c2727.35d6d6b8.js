"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[3261],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,m=p["".concat(d,".").concat(u)]||p[u]||h[u]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3239:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={},a=void 0,l={unversionedId:"concurrent/synchronized",id:"concurrent/synchronized",title:"synchronized",description:"Java \u5e76\u53d1\u7f16\u7a0b\uff1aSynchronized \u53ca\u5176\u5b9e\u73b0\u539f\u7406",source:"@site/docs/concurrent/synchronized.md",sourceDirName:"concurrent",slug:"/concurrent/synchronized",permalink:"/docs/concurrent/synchronized",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/concurrent/synchronized.md",tags:[],version:"current",lastUpdatedAt:1686217402,formattedLastUpdatedAt:"2023\u5e746\u67088\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JAVA\u9501\u7684\u4f7f\u7528",permalink:"/docs/concurrent/JAVA\u9501\u7684\u4f7f\u7528"},next:{title:"\u7ebf\u7a0b\u4e71\u5e8f\u95ee\u9898",permalink:"/docs/concurrent/\u7ebf\u7a0b\u4e71\u5e8f\u95ee\u9898"}},d={},c=[{value:"\u6ca1\u6709\u540c\u6b65\u7684\u60c5\u51b5",id:"\u6ca1\u6709\u540c\u6b65\u7684\u60c5\u51b5",level:2},{value:"\u5bf9\u666e\u901a\u65b9\u6cd5\u540c\u6b65\uff1a",id:"\u5bf9\u666e\u901a\u65b9\u6cd5\u540c\u6b65",level:2},{value:"\u9759\u6001\u65b9\u6cd5\uff08\u7c7b\uff09\u540c\u6b65",id:"\u9759\u6001\u65b9\u6cd5\u7c7b\u540c\u6b65",level:2},{value:"\u4ee3\u7801\u5757\u540c\u6b65",id:"\u4ee3\u7801\u5757\u540c\u6b65",level:2},{value:"Synchronized \u539f\u7406",id:"synchronized-\u539f\u7406",level:2},{value:"\u8fd0\u884c\u7ed3\u679c\u89e3\u91ca",id:"\u8fd0\u884c\u7ed3\u679c\u89e3\u91ca",level:2},{value:"\u5bf9\u666e\u901a\u65b9\u6cd5\u540c\u6b65\u7ed3\u679c\uff1a",id:"\u5bf9\u666e\u901a\u65b9\u6cd5\u540c\u6b65\u7ed3\u679c",level:3},{value:"\u9759\u6001\u65b9\u6cd5\uff08\u7c7b\uff09\u540c\u6b65\u7ed3\u679c\uff1a",id:"\u9759\u6001\u65b9\u6cd5\u7c7b\u540c\u6b65\u7ed3\u679c",level:3},{value:"\u4ee3\u7801\u5757\u540c\u6b65\u7ed3\u679c\uff1a",id:"\u4ee3\u7801\u5757\u540c\u6b65\u7ed3\u679c",level:3}],s={toc:c},p="wrapper";function h(e){let{components:n,...i}=e;return(0,o.kt)(p,(0,r.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/paddix/p/5367116.html"},"Java \u5e76\u53d1\u7f16\u7a0b\uff1aSynchronized \u53ca\u5176\u5b9e\u73b0\u539f\u7406")),(0,o.kt)("p",null,"Synchronized \u7684\u4f5c\u7528\u4e3b\u8981\u6709\u4e09\u4e2a\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u786e\u4fdd\u7ebf\u7a0b\u4e92\u65a5\u7684\u8bbf\u95ee\u540c\u6b65\u4ee3\u7801"),(0,o.kt)("li",{parentName:"ol"},"\u4fdd\u8bc1\u5171\u4eab\u53d8\u91cf\u7684\u4fee\u6539\u80fd\u591f\u53ca\u65f6\u53ef\u89c1"),(0,o.kt)("li",{parentName:"ol"},"\u6709\u6548\u89e3\u51b3\u91cd\u6392\u5e8f\u95ee\u9898\u3002")),(0,o.kt)("p",null,"\u4ece\u8bed\u6cd5\u4e0a\u8bb2\uff0cSynchronized \u603b\u5171\u6709\u4e09\u79cd\u7528\u6cd5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4fee\u9970\u666e\u901a\u65b9\u6cd5"),(0,o.kt)("li",{parentName:"ul"},"\u4fee\u9970\u9759\u6001\u65b9\u6cd5"),(0,o.kt)("li",{parentName:"ul"},"\u4fee\u9970\u4ee3\u7801\u5757")),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u5c31\u901a\u8fc7\u51e0\u4e2a\u4f8b\u5b50\u7a0b\u5e8f\u6765\u8bf4\u660e\u4e00\u4e0b\u8fd9\u4e09\u79cd\u4f7f\u7528\u65b9\u5f0f"),(0,o.kt)("h2",{id:"\u6ca1\u6709\u540c\u6b65\u7684\u60c5\u51b5"},"\u6ca1\u6709\u540c\u6b65\u7684\u60c5\u51b5"),(0,o.kt)("p",null,"\u4ee3\u7801\u6bb5\u4e00\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class SynchronizedTest {\n\n  public void method1() {\n    System.out.println("Method 1 start");\n    try {\n      System.out.println("Method 1 execute");\n      Thread.sleep(3000);\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n    System.out.println("Method 1 end");\n  }\n\n  public void method2() {\n    System.out.println("Method 2 start");\n    try {\n      System.out.println("Method 2 execute");\n      Thread.sleep(1000);\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n    System.out.println("Method 2 end");\n  }\n\n  public static void main(String[] args) {\n    final SynchronizedTest test = new SynchronizedTest();\n\n    new Thread(\n      new Runnable() {\n\n        @Override\n        public void run() {\n          test.method1();\n        }\n      }\n    )\n    .start();\n\n    new Thread(\n      new Runnable() {\n\n        @Override\n        public void run() {\n          test.method2();\n        }\n      }\n    )\n    .start();\n  }\n}\n')),(0,o.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u5982\u4e0b\uff0c\u7ebf\u7a0b 1 \u548c\u7ebf\u7a0b 2 \u540c\u65f6\u8fdb\u5165\u6267\u884c\u72b6\u6001\uff0c\u7ebf\u7a0b 2 \u6267\u884c\u901f\u5ea6\u6bd4\u7ebf\u7a0b 1 \u5feb\uff0c\u6240\u4ee5\u7ebf\u7a0b 2 \u5148\u6267\u884c\u5b8c\u6210\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u7ebf\u7a0b 1 \u548c\u7ebf\u7a0b 2 \u662f\u540c\u65f6\u6267\u884c\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"Method 1 start\nMethod 1 execute\nMethod 2 start\nMethod 2 execute\nMethod 2 end\nMethod 1 end\n")),(0,o.kt)("h2",{id:"\u5bf9\u666e\u901a\u65b9\u6cd5\u540c\u6b65"},"\u5bf9\u666e\u901a\u65b9\u6cd5\u540c\u6b65\uff1a"),(0,o.kt)("p",null,"\u4ee3\u7801\u6bb5\u4e8c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class SynchronizedTest {\n\n  public synchronized void method1() {\n    System.out.println("Method 1 start");\n    try {\n      System.out.println("Method 1 execute");\n      Thread.sleep(3000);\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n    System.out.println("Method 1 end");\n  }\n\n  public synchronized void method2() {\n    System.out.println("Method 2 start");\n    try {\n      System.out.println("Method 2 execute");\n      Thread.sleep(1000);\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n    System.out.println("Method 2 end");\n  }\n\n  public static void main(String[] args) {\n    final SynchronizedTest test = new SynchronizedTest();\n\n    new Thread(\n      new Runnable() {\n\n        @Override\n        public void run() {\n          test.method1();\n        }\n      }\n    )\n    .start();\n\n    new Thread(\n      new Runnable() {\n\n        @Override\n        public void run() {\n          test.method2();\n        }\n      }\n    )\n    .start();\n  }\n}\n')),(0,o.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u5982\u4e0b\uff0c\u8ddf\u4ee3\u7801\u6bb5\u4e00\u6bd4\u8f83\uff0c\u53ef\u4ee5\u5f88\u660e\u663e\u7684\u770b\u51fa\uff0c\u7ebf\u7a0b 2 \u9700\u8981\u7b49\u5f85\u7ebf\u7a0b 1 \u7684 method1 \u6267\u884c\u5b8c\u6210\u624d\u80fd\u5f00\u59cb\u6267\u884c method2 \u65b9\u6cd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"Method 1 start\nMethod 1 execute\nMethod 1 end\nMethod 2 start\nMethod 2 execute\nMethod 2 end\n")),(0,o.kt)("h2",{id:"\u9759\u6001\u65b9\u6cd5\u7c7b\u540c\u6b65"},"\u9759\u6001\u65b9\u6cd5\uff08\u7c7b\uff09\u540c\u6b65"),(0,o.kt)("p",null,"\u4ee3\u7801\u6bb5\u4e09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class SynchronizedTest {\n\n  public static synchronized void method1() {\n    System.out.println("Method 1 start");\n    try {\n      System.out.println("Method 1 execute");\n      Thread.sleep(3000);\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n    System.out.println("Method 1 end");\n  }\n\n  public static synchronized void method2() {\n    System.out.println("Method 2 start");\n    try {\n      System.out.println("Method 2 execute");\n      Thread.sleep(1000);\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n    System.out.println("Method 2 end");\n  }\n\n  public static void main(String[] args) {\n    final SynchronizedTest test = new SynchronizedTest();\n    final SynchronizedTest test2 = new SynchronizedTest();\n\n    new Thread(\n      new Runnable() {\n\n        @Override\n        public void run() {\n          test.method1();\n        }\n      }\n    )\n    .start();\n\n    new Thread(\n      new Runnable() {\n\n        @Override\n        public void run() {\n          test2.method2();\n        }\n      }\n    )\n    .start();\n  }\n}\n')),(0,o.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"Method 1 start\nMethod 1 execute\nMethod 1 end\nMethod 2 start\nMethod 2 execute\nMethod 2 end\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5bf9\u9759\u6001\u65b9\u6cd5\u7684\u540c\u6b65\u672c\u8d28\u4e0a\u662f\u5bf9\u7c7b\u7684\u540c\u6b65\uff08\u9759\u6001\u65b9\u6cd5\u672c\u8d28\u4e0a\u662f\u5c5e\u4e8e\u7c7b\u7684\u65b9\u6cd5\uff0c\u800c\u4e0d\u662f\u5bf9\u8c61\u4e0a\u7684\u65b9\u6cd5\uff09\uff0c\u6240\u4ee5\u5373\u4f7f test \u548c test2 \u5c5e\u4e8e\u4e0d\u540c\u7684\u5bf9\u8c61\uff0c\u4f46\u662f\u5b83\u4eec\u90fd\u5c5e\u4e8e SynchronizedTest \u7c7b\u7684\u5b9e\u4f8b\uff0c\u6240\u4ee5\u4e5f\u53ea\u80fd\u987a\u5e8f\u7684\u6267\u884c method1 \u548c method2\uff0c\u4e0d\u80fd\u5e76\u53d1\u6267\u884c")),(0,o.kt)("h2",{id:"\u4ee3\u7801\u5757\u540c\u6b65"},"\u4ee3\u7801\u5757\u540c\u6b65"),(0,o.kt)("p",null,"\u4ee3\u7801\u6bb5\u56db\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class SynchronizedTest {\n\n  public void method1() {\n    System.out.println("Method 1 start");\n    try {\n      synchronized (this) {\n        System.out.println("Method 1 execute");\n        Thread.sleep(3000);\n      }\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n    System.out.println("Method 1 end");\n  }\n\n  public void method2() {\n    System.out.println("Method 2 start");\n    try {\n      synchronized (this) {\n        System.out.println("Method 2 execute");\n        Thread.sleep(1000);\n      }\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n    System.out.println("Method 2 end");\n  }\n\n  public static void main(String[] args) {\n    final SynchronizedTest test = new SynchronizedTest();\n\n    new Thread(\n      new Runnable() {\n\n        @Override\n        public void run() {\n          test.method1();\n        }\n      }\n    )\n    .start();\n\n    new Thread(\n      new Runnable() {\n\n        @Override\n        public void run() {\n          test.method2();\n        }\n      }\n    )\n    .start();\n  }\n}\n')),(0,o.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u5982\u4e0b\uff0c\u867d\u7136\u7ebf\u7a0b 1 \u548c\u7ebf\u7a0b 2 \u90fd\u8fdb\u5165\u4e86\u5bf9\u5e94\u7684\u65b9\u6cd5\u5f00\u59cb\u6267\u884c\uff0c\u4f46\u662f\u7ebf\u7a0b 2 \u5728\u8fdb\u5165\u540c\u6b65\u5757\u4e4b\u524d\uff0c\u9700\u8981\u7b49\u5f85\u7ebf\u7a0b 1 \u4e2d\u540c\u6b65\u5757\u6267\u884c\u5b8c\u6210\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"Method 1 start\nMethod 1 execute\nMethod 2 start\nMethod 1 end\nMethod 2 execute\nMethod 2 end\n")),(0,o.kt)("h2",{id:"synchronized-\u539f\u7406"},"Synchronized \u539f\u7406"),(0,o.kt)("p",null,"\u5982\u679c\u5bf9\u4e0a\u9762\u7684\u6267\u884c\u7ed3\u679c\u8fd8\u6709\u7591\u95ee\uff0c\u4e5f\u5148\u4e0d\u7528\u6025\uff0c\u6211\u4eec\u5148\u6765\u4e86\u89e3 Synchronized \u7684\u539f\u7406\uff0c\u518d\u56de\u5934\u4e0a\u9762\u7684\u95ee\u9898\u5c31\u4e00\u76ee\u4e86\u7136\u4e86\u3002\u6211\u4eec\u5148\u901a\u8fc7\u53cd\u7f16\u8bd1\u4e0b\u9762\u7684\u4ee3\u7801\u6765\u770b\u770b Synchronized \u662f\u5982\u4f55\u5b9e\u73b0\u5bf9\u4ee3\u7801\u5757\u8fdb\u884c\u540c\u6b65\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class SynchronizedDemo {\n\n  public void method() {\n    synchronized (this) {\n      System.out.println("Method 1 start");\n    }\n  }\n}\n')),(0,o.kt)("p",null,"\u53cd\u7f16\u8bd1\u7ed3\u679c\uff1a\n",(0,o.kt)("img",{alt:"synchronized1.png",src:t(2653).Z,width:"1490",height:"908"})),(0,o.kt)("p",null,"\u5173\u4e8e\u8fd9\u4e24\u6761\u6307\u4ee4\u7684\u4f5c\u7528\uff0c\u6211\u4eec\u76f4\u63a5\u53c2\u8003 JVM \u89c4\u8303\u4e2d\u63cf\u8ff0\uff1a"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"monitorenter \uff1a\nEach object is associated with a monitor. A monitor is locked if and only if it has an owner. The thread that executes monitorenter attempts to gain ownership of the monitor associated with objectref, as follows:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"If the entry count of the monitor associated with objectref is zero, the thread enters the monitor and sets its entry count to one. The thread is then the owner of the monitor."),(0,o.kt)("li",{parentName:"ul"},"If the thread already owns the monitor associated with objectref, it reenters the monitor, incrementing its entry count."),(0,o.kt)("li",{parentName:"ul"},"If another thread already owns the monitor associated with objectref, the thread blocks until the monitor's entry count is zero, then tries again to gain ownership."))),(0,o.kt)("p",null,"\u8fd9\u6bb5\u8bdd\u7684\u5927\u6982\u610f\u601d\u4e3a\uff1a"),(0,o.kt)("p",null,"\u6bcf\u4e2a\u5bf9\u8c61\u6709\u4e00\u4e2a\u76d1\u89c6\u5668\u9501\uff08monitor\uff09\u3002\u5f53 monitor \u88ab\u5360\u7528\u65f6\u5c31\u4f1a\u5904\u4e8e\u9501\u5b9a\u72b6\u6001\uff0c\u7ebf\u7a0b\u6267\u884c monitorenter \u6307\u4ee4\u65f6\u5c1d\u8bd5\u83b7\u53d6 monitor \u7684\u6240\u6709\u6743\uff0c\u8fc7\u7a0b\u5982\u4e0b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c monitor \u7684\u8fdb\u5165\u6570\u4e3a 0\uff0c\u5219\u8be5\u7ebf\u7a0b\u8fdb\u5165 monitor\uff0c\u7136\u540e\u5c06\u8fdb\u5165\u6570\u8bbe\u7f6e\u4e3a 1\uff0c\u8be5\u7ebf\u7a0b\u5373\u4e3a monitor \u7684\u6240\u6709\u8005\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u7ebf\u7a0b\u5df2\u7ecf\u5360\u6709\u8be5 monitor\uff0c\u53ea\u662f\u91cd\u65b0\u8fdb\u5165\uff0c\u5219\u8fdb\u5165 monitor \u7684\u8fdb\u5165\u6570\u52a0 1."),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u5176\u4ed6\u7ebf\u7a0b\u5df2\u7ecf\u5360\u7528\u4e86 monitor\uff0c\u5219\u8be5\u7ebf\u7a0b\u8fdb\u5165\u963b\u585e\u72b6\u6001\uff0c\u76f4\u5230 monitor \u7684\u8fdb\u5165\u6570\u4e3a 0\uff0c\u518d\u91cd\u65b0\u5c1d\u8bd5\u83b7\u53d6 monitor \u7684\u6240\u6709\u6743\u3002")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"monitorexit\uff1a"),(0,o.kt)("p",{parentName:"admonition"},"The thread that executes monitorexit must be the owner of the monitor associated with the instance referenced by objectref."),(0,o.kt)("p",{parentName:"admonition"},"The thread decrements the entry count of the monitor associated with objectref. If as a result the value of the entry count is zero, the thread exits the monitor and is no longer its owner. Other threads that are blocking to enter the monitor are allowed to attempt to do so.")),(0,o.kt)("p",null,"\u8fd9\u6bb5\u8bdd\u7684\u5927\u6982\u610f\u601d\u4e3a\uff1a"),(0,o.kt)("p",null,"\u6267\u884c monitorexit \u7684\u7ebf\u7a0b\u5fc5\u987b\u662f objectref \u6240\u5bf9\u5e94\u7684 monitor \u7684\u6240\u6709\u8005\u3002"),(0,o.kt)("p",null,"\u6307\u4ee4\u6267\u884c\u65f6\uff0cmonitor \u7684\u8fdb\u5165\u6570\u51cf 1\uff0c\u5982\u679c\u51cf 1 \u540e\u8fdb\u5165\u6570\u4e3a 0\uff0c\u90a3\u7ebf\u7a0b\u9000\u51fa monitor\uff0c\u4e0d\u518d\u662f\u8fd9\u4e2a monitor \u7684\u6240\u6709\u8005\u3002\u5176\u4ed6\u88ab\u8fd9\u4e2a monitor \u963b\u585e\u7684\u7ebf\u7a0b\u53ef\u4ee5\u5c1d\u8bd5\u53bb\u83b7\u53d6\u8fd9\u4e2a monitor \u7684\u6240\u6709\u6743\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e24\u6bb5\u63cf\u8ff0\uff0c\u6211\u4eec\u5e94\u8be5\u80fd\u5f88\u6e05\u695a\u7684\u770b\u51fa Synchronized \u7684\u5b9e\u73b0\u539f\u7406\uff0cSynchronized \u7684\u8bed\u4e49\u5e95\u5c42\u662f\u901a\u8fc7\u4e00\u4e2a monitor \u7684\u5bf9\u8c61\u6765\u5b8c\u6210\uff0c\u5176\u5b9e wait/notify \u7b49\u65b9\u6cd5\u4e5f\u4f9d\u8d56\u4e8e monitor \u5bf9\u8c61\uff0c\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u53ea\u6709\u5728\u540c\u6b65\u7684\u5757\u6216\u8005\u65b9\u6cd5\u4e2d\u624d\u80fd\u8c03\u7528 wait/notify \u7b49\u65b9\u6cd5\uff0c\u5426\u5219\u4f1a\u629b\u51fa java.lang.IllegalMonitorStateException \u7684\u5f02\u5e38\u7684\u539f\u56e0\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u518d\u6765\u770b\u4e00\u4e0b\u540c\u6b65\u65b9\u6cd5\u7684\u53cd\u7f16\u8bd1\u7ed3\u679c\uff1a"),(0,o.kt)("p",null,"\u6e90\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class SynchronizedMethod {\n\n  public synchronized void method() {\n    System.out.println("Hello World!");\n  }\n}\n')),(0,o.kt)("p",null,"\u53cd\u7f16\u8bd1\u7ed3\u679c\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"synchronized2.png",src:t(5522).Z,width:"1506",height:"526"})),(0,o.kt)("p",null,"\u4ece\u53cd\u7f16\u8bd1\u7684\u7ed3\u679c\u6765\u770b\uff0c\u65b9\u6cd5\u7684\u540c\u6b65\u5e76\u6ca1\u6709\u901a\u8fc7\u6307\u4ee4 monitorenter \u548c monitorexit \u6765\u5b8c\u6210\uff08\u7406\u8bba\u4e0a\u5176\u5b9e\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e24\u6761\u6307\u4ee4\u6765\u5b9e\u73b0\uff09\uff0c\u4e0d\u8fc7\u76f8\u5bf9\u4e8e\u666e\u901a\u65b9\u6cd5\uff0c\u5176\u5e38\u91cf\u6c60\u4e2d\u591a\u4e86 ACC_SYNCHRONIZED \u6807\u793a\u7b26\u3002JVM \u5c31\u662f\u6839\u636e\u8be5\u6807\u793a\u7b26\u6765\u5b9e\u73b0\u65b9\u6cd5\u7684\u540c\u6b65\u7684\uff1a\u5f53\u65b9\u6cd5\u8c03\u7528\u65f6\uff0c\u8c03\u7528\u6307\u4ee4\u5c06\u4f1a\u68c0\u67e5\u65b9\u6cd5\u7684 ACC_SYNCHRONIZED \u8bbf\u95ee\u6807\u5fd7\u662f\u5426\u88ab\u8bbe\u7f6e\uff0c\u5982\u679c\u8bbe\u7f6e\u4e86\uff0c\u6267\u884c\u7ebf\u7a0b\u5c06\u5148\u83b7\u53d6 monitor\uff0c\u83b7\u53d6\u6210\u529f\u4e4b\u540e\u624d\u80fd\u6267\u884c\u65b9\u6cd5\u4f53\uff0c\u65b9\u6cd5\u6267\u884c\u5b8c\u540e\u518d\u91ca\u653e monitor\u3002\u5728\u65b9\u6cd5\u6267\u884c\u671f\u95f4\uff0c\u5176\u4ed6\u4efb\u4f55\u7ebf\u7a0b\u90fd\u65e0\u6cd5\u518d\u83b7\u5f97\u540c\u4e00\u4e2a monitor \u5bf9\u8c61\u3002 \u5176\u5b9e\u672c\u8d28\u4e0a\u6ca1\u6709\u533a\u522b\uff0c\u53ea\u662f\u65b9\u6cd5\u7684\u540c\u6b65\u662f\u4e00\u79cd\u9690\u5f0f\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\uff0c\u65e0\u9700\u901a\u8fc7\u5b57\u8282\u7801\u6765\u5b8c\u6210\u3002"),(0,o.kt)("h2",{id:"\u8fd0\u884c\u7ed3\u679c\u89e3\u91ca"},"\u8fd0\u884c\u7ed3\u679c\u89e3\u91ca"),(0,o.kt)("p",null,"\u6709\u4e86\u5bf9 Synchronized \u539f\u7406\u7684\u8ba4\u8bc6\uff0c\u518d\u6765\u770b\u4e0a\u9762\u7684\u7a0b\u5e8f\u5c31\u53ef\u4ee5\u8fce\u5203\u800c\u89e3\u4e86\u3002"),(0,o.kt)("h3",{id:"\u5bf9\u666e\u901a\u65b9\u6cd5\u540c\u6b65\u7ed3\u679c"},"\u5bf9\u666e\u901a\u65b9\u6cd5\u540c\u6b65\u7ed3\u679c\uff1a"),(0,o.kt)("p",null,"\u867d\u7136 method1 \u548c method2 \u662f\u4e0d\u540c\u7684\u65b9\u6cd5\uff0c\u4f46\u662f\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u90fd\u8fdb\u884c\u4e86\u540c\u6b65\uff0c\u5e76\u4e14\u662f\u901a\u8fc7\u540c\u4e00\u4e2a\u5bf9\u8c61\u53bb\u8c03\u7528\u7684\uff0c\u6240\u4ee5\u8c03\u7528\u4e4b\u524d\u90fd\u9700\u8981\u5148\u53bb\u7ade\u4e89\u540c\u4e00\u4e2a\u5bf9\u8c61\u4e0a\u7684\u9501\uff08monitor\uff09\uff0c\u4e5f\u5c31\u53ea\u80fd\u4e92\u65a5\u7684\u83b7\u53d6\u5230\u9501\uff0c\u56e0\u6b64\uff0cmethod1 \u548c method2 \u53ea\u80fd\u987a\u5e8f\u7684\u6267\u884c\u3002"),(0,o.kt)("h3",{id:"\u9759\u6001\u65b9\u6cd5\u7c7b\u540c\u6b65\u7ed3\u679c"},"\u9759\u6001\u65b9\u6cd5\uff08\u7c7b\uff09\u540c\u6b65\u7ed3\u679c\uff1a"),(0,o.kt)("p",null,"\u867d\u7136 test \u548c test2 \u5c5e\u4e8e\u4e0d\u540c\u5bf9\u8c61\uff0c\u4f46\u662f test \u548c test2 \u5c5e\u4e8e\u540c\u4e00\u4e2a\u7c7b\u7684\u4e0d\u540c\u5b9e\u4f8b\uff0c\u7531\u4e8e method1 \u548c method2 \u90fd\u5c5e\u4e8e\u9759\u6001\u540c\u6b65\u65b9\u6cd5\uff0c\u6240\u4ee5\u8c03\u7528\u7684\u65f6\u5019\u9700\u8981\u83b7\u53d6\u540c\u4e00\u4e2a\u7c7b\u4e0a monitor\uff08\u6bcf\u4e2a\u7c7b\u53ea\u5bf9\u5e94\u4e00\u4e2a class \u5bf9\u8c61\uff09\uff0c\u6240\u4ee5\u4e5f\u53ea\u80fd\u987a\u5e8f\u7684\u6267\u884c\u3002"),(0,o.kt)("h3",{id:"\u4ee3\u7801\u5757\u540c\u6b65\u7ed3\u679c"},"\u4ee3\u7801\u5757\u540c\u6b65\u7ed3\u679c\uff1a"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u4ee3\u7801\u5757\u7684\u540c\u6b65\u5b9e\u8d28\u4e0a\u9700\u8981\u83b7\u53d6 Synchronized \u5173\u952e\u5b57\u540e\u9762\u62ec\u53f7\u4e2d\u5bf9\u8c61\u7684 monitor\uff0c\u7531\u4e8e\u8fd9\u6bb5\u4ee3\u7801\u4e2d\u62ec\u53f7\u7684\u5185\u5bb9\u90fd\u662f this\uff0c\u800c method1 \u548c method2 \u53c8\u662f\u901a\u8fc7\u540c\u4e00\u7684\u5bf9\u8c61\u53bb\u8c03\u7528\u7684\uff0c\u6240\u4ee5\u8fdb\u5165\u540c\u6b65\u5757\u4e4b\u524d\u9700\u8981\u53bb\u7ade\u4e89\u540c\u4e00\u4e2a\u5bf9\u8c61\u4e0a\u7684\u9501\uff0c\u56e0\u6b64\u53ea\u80fd\u987a\u5e8f\u6267\u884c\u540c\u6b65\u5757\u3002"))}h.isMDXComponent=!0},2653:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/synchronized1-c7a5f35f13b60cfbb6da9603b07fe9fb.png"},5522:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/synchronized2-9710388ee8f5dd83a895c9cc52a01d16.png"}}]);