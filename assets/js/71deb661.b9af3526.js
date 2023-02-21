"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[5261],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=r.createContext({}),p=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=p(n.components);return r.createElement(u.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,u=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),d=p(t),m=a,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(k,o(o({ref:e},c),{},{components:t})):r.createElement(k,o({ref:e},c))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=n,l.mdxType="string"==typeof n?n:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1857:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={},o=void 0,l={unversionedId:"concurrent/\u7ebf\u7a0b\u4e71\u5e8f\u95ee\u9898",id:"concurrent/\u7ebf\u7a0b\u4e71\u5e8f\u95ee\u9898",title:"\u7ebf\u7a0b\u4e71\u5e8f\u95ee\u9898",description:"\u6700\u4f73\u5b9e\u8df5\uff1a",source:"@site/docs/concurrent/\u7ebf\u7a0b\u4e71\u5e8f\u95ee\u9898.md",sourceDirName:"concurrent",slug:"/concurrent/\u7ebf\u7a0b\u4e71\u5e8f\u95ee\u9898",permalink:"/docs/concurrent/\u7ebf\u7a0b\u4e71\u5e8f\u95ee\u9898",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/concurrent/\u7ebf\u7a0b\u4e71\u5e8f\u95ee\u9898.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"synchronized",permalink:"/docs/concurrent/synchronized"},next:{title:"\u7ebf\u7a0b\u6267\u884c\u7279\u6027",permalink:"/docs/concurrent/\u7ebf\u7a0b\u6267\u884c\u7279\u6027"}},u={},p=[{value:"\u4e92\u65a5",id:"\u4e92\u65a5",level:2},{value:"\u7ade\u6001\u6761\u4ef6",id:"\u7ade\u6001\u6761\u4ef6",level:3},{value:"\u5185\u5b58\u53ef\u89c1\u6027",id:"\u5185\u5b58\u53ef\u89c1\u6027",level:3},{value:"\u540c\u6b65",id:"\u540c\u6b65",level:2},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}],c={toc:p};function s(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6700\u4f73\u5b9e\u8df5\uff1a"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u5e94\u5728\u4ea7\u54c1\u4ee3\u7801\u4e0a\u76f4\u63a5\u4f7f\u7528 Thread \u7c7b\u7b49\u5e95\u5c42\u670d\u52a1\uff0c\u800c\u662f\u76f4\u63a5\u4f7f\u7528\u9ad8\u5c42\u5c01\u88c5\u540e\u7684 API\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5e76\u53d1\u7f16\u7a0b\u4e2d\u5982\u679c\u67d0\u4e8b\u53ef\u80fd\u4f1a\u53d1\u751f\uff0c\u90a3\u4e48\u4e0d\u8bba\u591a\u8270\u96be\u5b83\u4e00\u5b9a\u4f1a\u53d1\u751f\uff0c\u800c\u4e14\u53ef\u80fd\u53d1\u751f\u5728\u6700\u4e0d\u5229\u7684\u65f6\u523b\uff1b"))),(0,a.kt)("h2",{id:"\u4e92\u65a5"},"\u4e92\u65a5"),(0,a.kt)("p",null,"\u7528\u9501\u4fdd\u8bc1\u67d0\u4e00\u65f6\u95f4\u4ec5\u6709\u4e00\u4e2a\u7ebf\u7a0b\u53ef\u4ee5\u8bbf\u95ee\u6570\u636e\u3002\u4e92\u65a5\u4f1a\u5e26\u6765",(0,a.kt)("inlineCode",{parentName:"p"},"\u7ade\u6001\u6761\u4ef6"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"\u6b7b\u9501")),(0,a.kt)("h3",{id:"\u7ade\u6001\u6761\u4ef6"},"\u7ade\u6001\u6761\u4ef6"),(0,a.kt)("p",null,"\u7ade\u6001\u6761\u4ef6\uff1a\u4ee3\u7801\u884c\u4e3a\u53d6\u51b3\u4e8e\u5404\u64cd\u4f5c\u7684\u65f6\u5e8f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class Counting {\n\n  static class Counter {\n    private int count = 0;\n\n    public void increment() {\n      ++count;\n    }\n\n    public int getCount() {\n      return count;\n    }\n  }\n\n  final Counter counter = new Counter();\n\n  class CountingThread extends Thread {\n\n    @Override\n    public void run() {\n      for (int i = 0; i < 10000; i++) {\n        counter.increment();\n      }\n    }\n  }\n\n  public static void main(String[] args) throws InterruptedException {\n    Counting counting = new Counting();\n    CountingThread t1 = counting.new CountingThread();\n    CountingThread t2 = counting.new CountingThread();\n    t1.start();\n    t2.start();\n    t1.join();\n    t2.join();\n    System.out.println(counting.counter.getCount());\n  }\n}\n")),(0,a.kt)("p",null,"\u8fd0\u884c\u4e0a\u8ff0\u4ee3\u7801\u591a\u6b21\uff0c\u7ed3\u679c\u4e0d\u662f\u6bcf\u6b21\u90fd\u4e3a 20000\uff0c\u539f\u56e0\u662f\u4e24\u4e2a\u7ebf\u7a0b\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"counter.count"),"\u5bf9\u8c61\u65f6\u53d1\u751f\u4e86\u7ade\u6001\u6761\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5206\u6790"),"\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"++count"),"\u5b57\u8282\u7801\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"getfield #2    //\u83b7\u53d6count\u7684\u503c\niconst_1       //\u5e38\u65701\niadd           //count+1\nputfield #2    //\u66f4\u65b0\u7684\u503c\u5199\u56decount\n")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u64cd\u4f5c\u901a\u5e38\u79f0\u4e3a\u8bfb-\u6539-\u5199(read-modify-write)\u6a21\u5f0f,\u5047\u5982\u4e24\u4e2a\u7ebf\u7a0b\u540c\u65f6\u8c03\u7528 increment(),\u7ebf\u7a0b 1 \u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"getfield #2"),"\u83b7\u5f97\u503c 42\uff0c\u5728\u7ebf\u7a0b 1 \u6267\u884c\u5176\u4ed6\u52a8\u4f5c\u4e4b\u524d\uff0c\u7ebf\u7a0b 2 \u4e5f\u6267\u884c\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"getfield #2"),"\u83b7\u5f97\u503c 42\uff0c\u5982\u6b64\u4e24\u4e2a\u7ebf\u7a0b\u90fd\u5c06\u83b7\u5f97\u503c\u52a0 1 \u5199\u56de count \u4e2d\uff0c\u7ed3\u679c count \u53ea\u88ab\u9012\u589e\u4e86\u4e00\u6b21\uff0c\u800c\u4e0d\u662f\u4e24\u6b21\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u89e3\u51b3"),"\uff1a"),(0,a.kt)("p",null,"\u7ade\u6001\u6761\u4ef6\u7684\u89e3\u51b3\u65b9\u6848\u662f\u5bf9 count \u8fdb\u884c\u540c\u6b65(synchronize)\u8bbf\u95ee\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"static class Counter {\n\n  //...\n  public synchronized void increment() {\n    ++count;\n  }\n  //...\n}\n")),(0,a.kt)("p",null,"\u7ebf\u7a0b\u8fdb\u5165 increment()\u51fd\u6570\u65f6\uff0c\u5c06\u83b7\u53d6 Counter \u5bf9\u8c61\u7ea7\u522b\u7684\u9501\uff0c\u51fd\u6570\u8fd4\u56de\u65f6\u91ca\u653e\u8be5\u9501\u3002\u67d0\u4e00\u65f6\u95f4\u81f3\u591a\u6709\u4e00\u4e2a\u7ebf\u7a0b\u53ef\u4ee5\u6267\u884c\u51fd\u6570\u4f53\uff0c\u5176\u4ed6\u7ebf\u7a0b\u8c03\u7528\u51fd\u6570\u65f6\u5c06\u88ab\u963b\u585e\u76f4\u5230\u9501\u88ab\u91ca\u653e\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"java.util.concurrent.atomic"),"\u5305\u66f4\u597d")),(0,a.kt)("h3",{id:"\u5185\u5b58\u53ef\u89c1\u6027"},"\u5185\u5b58\u53ef\u89c1\u6027"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class Puzzle {\n  static boolean answerReady = false;\n  static int answer = 0;\n\n  static Thread t1 = new Thread() {\n\n    @Override\n    public void run() {\n      answer = 42;\n      answerReady = true;\n    }\n  };\n\n  static Thread t2 = new Thread() {\n\n    @Override\n    public void run() {\n      if (answerReady) {\n        System.out.println("The answer is: " + answer);\n      } else {\n        System.out.println("The answer is not ready");\n      }\n    }\n  };\n\n  public static void main(String[] args) throws InterruptedException {\n    t1.start();\n    t2.start();\n    t1.join();\n    t2.join();\n  }\n}\n')),(0,a.kt)("p",null,"\u4e0a\u8ff0\u53ef\u80fd\u7684\u7ed3\u679c\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"The answer is: 42"),"\u6216\u8005",(0,a.kt)("inlineCode",{parentName:"p"},"The answer is not ready"),",",(0,a.kt)("strong",{parentName:"p"},"\u8fd8\u6709\u53ef\u80fd",(0,a.kt)("inlineCode",{parentName:"strong"},"The answer is: 0"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u5668\u7684\u9759\u6001\u4f18\u5316\u53ef\u4ee5\u6253\u4e71\u4ee3\u7801\u7684\u6267\u884c\u987a\u5e8f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"JVM \u7684\u52a8\u6001\u4f18\u5316\u4e5f\u53ef\u4ee5\u6253\u4e71\u4ee3\u7801\u7684\u6267\u884c\u987a\u5e8f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u786c\u4ef6\u53ef\u4ee5\u901a\u8fc7\u6253\u4e71\u4ee3\u7801\u7684\u6267\u884c\u6765\u4f18\u5316\u5176\u6027\u80fd\uff1b"))),(0,a.kt)("p",null,"\u6bd4\u4e71\u5e8f\u6267\u884c\u66f4\u7cdf\u7cd5\u7684\u662f\uff0c\u6709\u65f6\u5019\u4e00\u4e2a\u7ebf\u7a0b\u4ea7\u751f\u7684\u4fee\u6539\u53ef\u80fd\u5bf9\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u4e0d\u53ef\u89c1\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},' public void run() {\n            while (!answerReady){\n                Thread.sleep(100);\n                System.out.println("The answer is: "+answer);\n            }\n        }\n')),(0,a.kt)("p",null,"\u53ef\u80fd",(0,a.kt)("inlineCode",{parentName:"p"},"answerReady"),"\u4e0d\u4f1a\u53d8\u4e3a true,\u7ebf\u7a0b 2 \u4e0d\u4f1a\u9000\u51fa\u3002"),(0,a.kt)("h2",{id:"\u540c\u6b65"},"\u540c\u6b65"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5185\u5b58\u53ef\u89c1\u6027\u57fa\u672c\u539f\u5219\u662f\uff0c\u5982\u679c\u8bfb\u7ebf\u7a0b\u548c\u5199\u7ebf\u7a0b\u4e0d\u8fdb\u884c\u540c\u6b65\uff0c\u5c31\u4e0d\u80fd\u4fdd\u8bc1\u53ef\u89c1\u6027\u3002")),(0,a.kt)("p",null,"\u540c\u6b65\u7684\u65b9\u6cd5\u6709\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5bf9\u8c61\u7684\u5185\u7f6e\u9501\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b join();"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"java.util.concurrent"),"\u5305\u63d0\u4f9b\u7684\u5de5\u5177\uff1b")),(0,a.kt)("p",null,"\u5f88\u5bb9\u6613\u5ffd\u7565\u7684\u4e00\u4e2a\u91cd\u70b9\u662f\u4e24\u4e2a\u7ebf\u7a0b\u90fd\u9700\u8981\u8fdb\u884c\u540c\u6b65\uff0c\u4e0a\u8ff0\u7ade\u6001\u6761\u4ef6\u4f8b\u5b50\uff0c\u53ea\u5728\u5199",(0,a.kt)("inlineCode",{parentName:"p"},"increment()"),"\u6dfb\u52a0\u4e86\u5185\u7f6e\u9501\uff0c\u800c\u8bfb",(0,a.kt)("inlineCode",{parentName:"p"},"getCount()"),"\u672a\u8fdb\u884c\u540c\u6b65\uff0c\u7136\u800c\u4f8b\u5b50\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\uff0c\u56e0\u4e3a\u662f\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"join()"),"\u4e4b\u540e\u8c03\u7528\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"getCount()"),"\uff0c\u4f46\u662f\u4e3a\u5176\u4ed6\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"getCount()"),"\u7684\u4ee3\u7801\u57cb\u4e0b\u4e86\u9690\u60a3\uff0c\u53ef\u80fd\u4f1a\u8bfb\u53d6\u5230\u5931\u6548\u7684\u503c\uff0c\u5b89\u5168\u79d1\u5b66\u7684\u505a\u6cd5\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"getCount()"),"\u6dfb\u52a0\u540c\u6b65\u3002"),(0,a.kt)("h2",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,a.kt)("p",null,"\u7efc\u4e0a\u6240\u8ff0\uff0c\u5f88\u5bb9\u6613\u5f97\u51fa\u4e00\u4e2a\u7ed3\u8bba\uff1a\u8ba9\u591a\u7ebf\u7a0b\u4ee3\u7801\u5b89\u5168\u8fd0\u884c\u7684\u65b9\u6cd5\u53ea\u80fd\u662f\u8ba9\u6240\u6709\u7684\u65b9\u6cd5\u90fd\u540c\u6b65\u3002"),(0,a.kt)("p",null,"\u7136\u800c\uff0c\u8fd9\u4e5f\u4f1a\u5e26\u6765\u95ee\u9898\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6548\u7387\u4f4e\u4e0b\uff0c\u6bcf\u4e2a\u65b9\u6cd5\u90fd\u540c\u6b65\uff0c\u5927\u591a\u6570\u7ebf\u7a0b\u4f1a\u9891\u7e41\u963b\u585e\uff0c\u4f7f\u7a0b\u5e8f\u5931\u53bb\u4e86\u5e76\u53d1\u7684\u610f\u4e49\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u4f7f\u7528\u591a\u628a\u9501\u65f6(java \u4e2d\u6bcf\u4e00\u4e2a\u5bf9\u8c61\u90fd\u6709\u81ea\u5df1\u7684\u5185\u7f6e\u9501\uff0c\u5bf9\u4e0d\u540c\u5bf9\u8c61\u7684\u65b9\u6cd5\u8fdb\u884c\u540c\u6b65\u65f6\u5c31\u4f1a\u7528\u5230\u591a\u628a\u9501)\uff0c\u7ebf\u7a0b\u4e4b\u95f4\u53ef\u80fd\u53d1\u751f",(0,a.kt)("a",{parentName:"li",href:"/docs/concurrent/%E7%BA%BF%E7%A8%8B%E6%AD%BB%E9%94%81%E9%97%AE%E9%A2%98"},"\u6b7b\u9501"),"\u3002")))}s.isMDXComponent=!0}}]);