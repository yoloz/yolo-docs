"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[1232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},k=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(m,c(c({ref:t},k),{},{components:n})):r.createElement(m,c({ref:t},k))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},c=void 0,i={unversionedId:"concurrent/JAVA\u9501\u7684\u4f7f\u7528",id:"concurrent/JAVA\u9501\u7684\u4f7f\u7528",title:"JAVA\u9501\u7684\u4f7f\u7528",description:"\u5185\u7f6e\u9501",source:"@site/docs/concurrent/JAVA\u9501\u7684\u4f7f\u7528.md",sourceDirName:"concurrent",slug:"/concurrent/JAVA\u9501\u7684\u4f7f\u7528",permalink:"/docs/concurrent/JAVA\u9501\u7684\u4f7f\u7528",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/concurrent/JAVA\u9501\u7684\u4f7f\u7528.md",tags:[],version:"current",lastUpdatedAt:1681381815,formattedLastUpdatedAt:"2023\u5e744\u670813\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JAVA\u7ebf\u7a0b\u72b6\u6001",permalink:"/docs/concurrent/JAVA\u7ebf\u7a0b\u72b6\u6001"},next:{title:"synchronized",permalink:"/docs/concurrent/synchronized"}},l={},s=[{value:"\u5185\u7f6e\u9501",id:"\u5185\u7f6e\u9501",level:2},{value:"ReentrantLock",id:"reentrantlock",level:2},{value:"\u975e\u516c\u5e73\u9501\u5b9e\u73b0",id:"\u975e\u516c\u5e73\u9501\u5b9e\u73b0",level:3},{value:"\u54cd\u5e94\u4e2d\u65ad",id:"\u54cd\u5e94\u4e2d\u65ad",level:3},{value:"\u9650\u65f6\u7b49\u5f85",id:"\u9650\u65f6\u7b49\u5f85",level:3}],k={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5185\u7f6e\u9501"},"\u5185\u7f6e\u9501"),(0,a.kt)("p",null,"java \u5bf9\u8c61\u539f\u751f\u7684\u5185\u7f6e\u9501\uff0c\u4e5f\u88ab\u79f0\u4e3a\u4e92\u65a5\u9501(mutex)\u3001\u7ba1\u7a0b(monitor)\u6216\u4e34\u754c\u533a(critical section)\uff0c\u901a\u8fc7\u5173\u952e\u5b57 synchronized \u542f\u7528(jdk \u6709\u5bf9\u5176\u4f18\u5316\uff1a\u504f\u5411\u9501\uff0c\u8f7b\u91cf\u7ea7\u9501\u7b49)\uff0c\u4f7f\u7528\u65b9\u4fbf\u4f46\u9650\u5236\u5f88\u591a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u7ebf\u7a0b\u56e0\u4e3a\u7b49\u5f85\u5185\u7f6e\u9501\u800c\u8fdb\u5165\u963b\u585e\u540e\uff0c\u5c31\u65e0\u6cd5\u4e2d\u65ad\u8be5\u7ebf\u7a0b\u4e86\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5\u83b7\u53d6\u5185\u7f6e\u9501\u65f6\uff0c\u65e0\u6cd5\u8bbe\u7f6e\u8d85\u65f6\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u83b7\u5f97\u5185\u7f6e\u9501\uff0c\u5fc5\u987b\u4f7f\u7528 synchronized \u5757",(0,a.kt)("inlineCode",{parentName:"li"},"synchronized(object){<<\u4f7f\u7528\u5171\u4eab\u8d44\u6e90>>}"),"\uff1b")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u79cd\u7528\u6cd5\u7684\u9650\u5236\u662f\u83b7\u53d6\u9501\u548c\u91ca\u653e\u9501\u7684\u4ee3\u7801\u5fc5\u987b\u4e25\u683c\u5d4c\u5728\u540c\u4e00\u4e2a\u65b9\u6cd5\u4e2d\uff0c\u53ca\u9501\u7684\u6240\u6709\u8005\u5fc5\u987b\u76f8\u540c\u3002")),(0,a.kt)("p",null,"\u53e6\u5916\uff0c\u58f0\u660e synchronized \u7684\u51fd\u6570\u5176\u5b9e\u53ea\u662f\u4e2a\u8bed\u6cd5\u7cd6\uff0c\u5176\u7b49\u4ef7\u4e8e\u5c06\u51fd\u6570\u4f53\u6309\u4ee5\u4e0b\u5f62\u5f0f\u8fdb\u884c\u5305\u88c5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"synchronized(this){\n//\u51fd\u6570\u4f53\n}\n")),(0,a.kt)("h2",{id:"reentrantlock"},"ReentrantLock"),(0,a.kt)("p",null,"\u4e0e synchronized \u4e0d\u540c\uff0cReetrantLock \u63d0\u4f9b\u4e86\u663e\u793a\u7684 lock \u548c unlock \u65b9\u6cd5\uff0c\u53ef\u4ee5\u7a81\u7834\u4e0a\u8ff0\u51e0\u4e2a\u9650\u5236\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Lock lock = new ReentrantLock();\nlock.lock();\ntry{\n//\u4f7f\u7528\u5171\u4eab\u8d44\u6e90\n}finally{\n  lock.unlock();\n}\n")),(0,a.kt)("admonition",{title:"\u6bd4\u8f83",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"synchronized \u662f\u72ec\u5360\u9501\uff0c\u52a0\u9501\u548c\u89e3\u9501\u7684\u8fc7\u7a0b\u81ea\u52a8\u8fdb\u884c\uff0c\u6613\u4e8e\u64cd\u4f5c\uff0c\u4f46\u4e0d\u591f\u7075\u6d3b\u3002ReentrantLock \u4e5f\u662f\u72ec\u5360\u9501\uff0c\u52a0\u9501\u548c\u89e3\u9501\u7684\u8fc7\u7a0b\u9700\u8981\u624b\u52a8\u8fdb\u884c\uff0c\u4e0d\u6613\u64cd\u4f5c\uff0c\u4f46\u975e\u5e38\u7075\u6d3b\u3002"),(0,a.kt)("li",{parentName:"ul"},"synchronized \u53ef\u91cd\u5165\uff0c\u56e0\u4e3a\u52a0\u9501\u548c\u89e3\u9501\u81ea\u52a8\u8fdb\u884c\uff0c\u4e0d\u5fc5\u62c5\u5fc3\u6700\u540e\u662f\u5426\u91ca\u653e\u9501\uff1bReentrantLock \u4e5f\u53ef\u91cd\u5165\uff0c\u4f46\u52a0\u9501\u548c\u89e3\u9501\u9700\u8981\u624b\u52a8\u8fdb\u884c\uff0c\u4e14\u6b21\u6570\u9700\u4e00\u6837\uff0c\u5426\u5219\u5176\u4ed6\u7ebf\u7a0b\u65e0\u6cd5\u83b7\u5f97\u9501\u3002"),(0,a.kt)("li",{parentName:"ul"},"synchronized \u4e0d\u53ef\u54cd\u5e94\u4e2d\u65ad\uff0c\u4e00\u4e2a\u7ebf\u7a0b\u83b7\u53d6\u4e0d\u5230\u9501\u5c31\u4e00\u76f4\u7b49\u7740\uff1bReentrantLock \u53ef\u4ee5\u54cd\u5e94\u4e2d\u65ad\u3002\n:::")),(0,a.kt)("h3",{parentName:"admonition",id:"\u7b80\u5355\u4f7f\u7528"},"\u7b80\u5355\u4f7f\u7528"),(0,a.kt)("p",{parentName:"admonition"},"\u5728\u8fd9\u91cc\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a ReentrantLock\uff0c\u7136\u540e\u5728 test \u65b9\u6cd5\u4e2d\u5206\u522b lock \u548c unlock\uff0c\u5982\u4e0b:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class ReentrantLockTest {\n  private static final Lock lock = new ReentrantLock();\n\n  private static void test() {\n    try {\n      lock.lock();\n      System.out.println(Thread.currentThread().getName() + "\u83b7\u53d6\u4e86\u9501");\n      TimeUnit.SECONDS.sleep(2);\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    } finally {\n      System.out.println(Thread.currentThread().getName() + "\u91ca\u653e\u4e86\u9501");\n      lock.unlock();\n    }\n  }\n\n  public static void main(String[] args) {\n    new Thread(ReentrantLockTest::test, "\u7ebf\u7a0bA").start();\n    new Thread(ReentrantLockTest::test, "\u7ebf\u7a0bB").start();\n  }\n}\n')),(0,a.kt)("h3",{parentName:"admonition",id:"\u516c\u5e73\u9501\u5b9e\u73b0"},"\u516c\u5e73\u9501\u5b9e\u73b0"),(0,a.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u516c\u5e73\u9501\u7684\u5b9e\u73b0\u8981\u7ed3\u5408\u7740\u53ef\u91cd\u5165\u7279\u6027\u3002\u516c\u5e73\u9501\u5c31\u662f\u8c01\u7b49\u7684\u65f6\u95f4\u6700\u957f\uff0c\u8c01\u5c31\u5148\u83b7\u53d6\u9501"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class ReentrantLockTest {\n  private static final Lock lock = new ReentrantLock(true);\n\n  private static void test() {\n    for (int i = 0; i < 2; i++) {\n      try {\n        lock.lock();\n        System.out.println(Thread.currentThread().getName() + "\u83b7\u53d6\u4e86\u9501");\n        TimeUnit.SECONDS.sleep(2);\n      } catch (InterruptedException e) {\n        e.printStackTrace();\n      } finally {\n        System.out.println(Thread.currentThread().getName() + "\u91ca\u653e\u4e86\u9501");\n        lock.unlock();\n      }\n    }\n  }\n\n  public static void main(String[] args) {\n    new Thread(ReentrantLockTest::test, "\u7ebf\u7a0bA").start();\n    new Thread(ReentrantLockTest::test, "\u7ebf\u7a0bB").start();\n    new Thread(ReentrantLockTest::test, "\u7ebf\u7a0bC").start();\n    new Thread(ReentrantLockTest::test, "\u7ebf\u7a0bD").start();\n  }\n}\n'))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"new \u4e00\u4e2a ReentrantLock \u7684\u65f6\u5019\u53c2\u6570\u4e3a true\uff0c\u8868\u660e\u5b9e\u73b0\u516c\u5e73\u9501\u673a\u5236"),(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u6211\u4eec\u591a\u5b9a\u4e49\u51e0\u4e2a\u7ebf\u7a0b ABCDE\uff0c\u7136\u540e\u5728 test \u65b9\u6cd5\u4e2d\u5faa\u73af\u6267\u884c\u4e86\u4e24\u6b21\u52a0\u9501\u548c\u89e3\u9501\u7684\u8fc7\u7a0b\uff0c\u7ed3\u679c\u987a\u5e8f\u662f ABCDE\uff0cABCDE")),(0,a.kt)("p",null,":::"),(0,a.kt)("h3",{id:"\u975e\u516c\u5e73\u9501\u5b9e\u73b0"},"\u975e\u516c\u5e73\u9501\u5b9e\u73b0"),(0,a.kt)("p",null,"\u975e\u516c\u5e73\u9501\u5c31\u662f\u968f\u673a\u7684\u83b7\u53d6\uff0c\u8c01\u8fd0\u6c14\u597d\uff0ccpu \u65f6\u95f4\u7247\u8f6e\u5230\u54ea\u4e2a\u7ebf\u7a0b\uff0c\u54ea\u4e2a\u7ebf\u7a0b\u5c31\u80fd\u83b7\u53d6\u9501\uff0c\u548c\u4e0a\u9762\u516c\u5e73\u9501\u7684\u533a\u522b\u5f88\u7b80\u5355\uff0c\u5c31\u5728\u4e8e\u5148 new \u4e00\u4e2a ReentrantLock \u7684\u65f6\u5019\u53c2\u6570\u4e3a false\uff0c\u5f53\u7136\u6211\u4eec\u4e5f\u53ef\u4ee5\u4e0d\u5199\uff0c\u9ed8\u8ba4\u5c31\u662f false."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u6539\u53d8\u540e\u4e0a\u4f8b\u8fd0\u884c\u987a\u5e8f\u662f\u968f\u673a\u7684\u4e86")),(0,a.kt)("h3",{id:"\u54cd\u5e94\u4e2d\u65ad"},"\u54cd\u5e94\u4e2d\u65ad"),(0,a.kt)("p",null,"\u54cd\u5e94\u4e2d\u65ad\u5c31\u662f\u4e00\u4e2a\u7ebf\u7a0b\u83b7\u53d6\u4e0d\u5230\u9501\uff0c\u4e0d\u4f1a\u50bb\u50bb\u7684\u4e00\u76f4\u7b49\u4e0b\u53bb\uff0cReentrantLock \u4f1a\u7ed9\u4e88\u4e00\u4e2a\u4e2d\u65ad\u56de\u5e94",(0,a.kt)("inlineCode",{parentName:"p"},"lockInterruptibly()"),"\uff0c\u5728\u8fd9\u91cc\u6211\u4eec\u4e3e\u4e00\u4e2a\u6b7b\u9501\u7684\u6848\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class ReentrantLockTest {\n  private static final Lock lock1 = new ReentrantLock();\n  private static final Lock lock2 = new ReentrantLock();\n\n  private static class Test implements Runnable {\n    private final Lock firstLock;\n    private final Lock secondLock;\n\n    public Test(Lock firstLock, Lock secondLock) {\n      this.firstLock = firstLock;\n      this.secondLock = secondLock;\n    }\n\n    @Override\n    public void run() {\n      try {\n        firstLock.lockInterruptibly();\n        TimeUnit.MILLISECONDS.sleep(50);\n        secondLock.lockInterruptibly();\n      } catch (InterruptedException e) {\n        e.printStackTrace();\n      } finally {\n        firstLock.unlock();\n        secondLock.unlock();\n        System.out.println(\n          Thread.currentThread().getName() + "\u83b7\u53d6\u5230\u4e86\u8d44\u6e90\u6b63\u5e38\u7ed3\u675f!"\n        );\n      }\n    }\n  }\n\n  public static void main(String[] args) {\n    Thread t1 = new Thread(new Test(lock1, lock2));\n    Thread t2 = new Thread(new Test(lock1, lock2));\n    t1.start();\n    t2.start();\n    t1.interrupt();\n  }\n}\n')),(0,a.kt)("p",null,"\u5728\u8fd9\u91cc\u6211\u4eec\u5b9a\u4e49\u4e86\u4e24\u4e2a\u9501 firstLock \u548c secondLock\u3002\u7136\u540e\u4f7f\u7528\u4e24\u4e2a\u7ebf\u7a0b t1 \u548c t2 \u6784\u9020\u6b7b\u9501\u573a\u666f\u3002\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e24\u4e2a\u7ebf\u7a0b\u76f8\u4e92\u7b49\u5f85\u83b7\u53d6\u8d44\u6e90\u800c\u5904\u4e8e\u6b7b\u5faa\u73af\u72b6\u6001\u3002\u4f46\u662f\u6211\u4eec\u6b64\u65f6 t1 \u4e2d\u65ad\uff0c\u53e6\u5916\u4e00\u4e2a\u7ebf\u7a0b t2 \u5c31\u53ef\u4ee5\u83b7\u53d6\u8d44\u6e90\uff0c\u6b63\u5e38\u5730\u6267\u884c\u4e86\u3002"),(0,a.kt)("h3",{id:"\u9650\u65f6\u7b49\u5f85"},"\u9650\u65f6\u7b49\u5f85"),(0,a.kt)("p",null,"ReentrantLock \u53ef\u4ee5\u4e3a\u83b7\u53d6\u9501\u7684\u64cd\u4f5c\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"tryLock(long timeout, TimeUnit unit)"),",\u65e0\u53c2\u5219\u8868\u793a\u7acb\u5373\u8fd4\u56de\u9501\u7533\u8bf7\u7684\u7ed3\u679c\uff1atrue \u8868\u793a\u83b7\u53d6\u9501\u6210\u529f\uff0cfalse \u8868\u793a\u83b7\u53d6\u9501\u5931\u8d25\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'private static class Test implements Runnable {\n  private final Lock firstLock;\n  private final Lock secondLock;\n\n  public Test(Lock firstLock, Lock secondLock) {\n    this.firstLock = firstLock;\n    this.secondLock = secondLock;\n  }\n\n  @Override\n  public void run() {\n    try {\n      if (!firstLock.tryLock()) TimeUnit.MILLISECONDS.sleep(50);\n      if (!secondLock.tryLock()) TimeUnit.MILLISECONDS.sleep(50);\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    } finally {\n      firstLock.unlock();\n      secondLock.unlock();\n      System.out.println(\n        Thread.currentThread().getName() + "\u83b7\u53d6\u5230\u4e86\u8d44\u6e90\u6b63\u5e38\u7ed3\u675f!"\n      );\n    }\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u7ebf\u7a0b\u83b7\u53d6 firstLock \u65f6\u5019\u7b2c\u4e00\u6b21\u5931\u8d25\uff0c\u90a3\u5c31\u7b49 50 \u6beb\u79d2\u4e4b\u540e\u7b2c\u4e8c\u6b21\u83b7\u53d6\uff0c\u5c31\u8fd9\u6837\u4e00\u76f4\u4e0d\u505c\u7684\u8c03\u8bd5\uff0c\u4e00\u76f4\u7b49\u5230\u83b7\u53d6\u5230\u76f8\u5e94\u7684\u8d44\u6e90\u4e3a\u6b62,\u5982\u6b64\u5176\u4ed6\u7ebf\u7a0b\u5c31\u6709\u53ef\u80fd\u83b7\u53d6\u5230\u9501\u4e86\u3002\u5982\u6b64\u4e0a\u8ff0\u7684\u6b7b\u9501\u4e5f\u5c31\u65e0\u9700\u4e2d\u65ad\u7ebf\u7a0b\u3002")),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e tryLock \u7684\u8d85\u65f6\u7b49\u5f85\u65f6\u95f4 tryLock(long timeout,TimeUnit unit)\uff0c\u4e5f\u5c31\u662f\u8bf4\u4e00\u4e2a\u7ebf\u7a0b\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u5185\u6ca1\u6709\u83b7\u53d6\u9501\uff0c\u90a3\u5c31\u4f1a\u8fd4\u56de false\u3002\u5982\u4e0a\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"if (!firstLock.tryLock()) TimeUnit.MILLISECONDS.sleep(50);"),"\u53ef\u6362\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"if (!firstLock.tryLock(50,TimeUnit.MILLISECONDS));")))}p.isMDXComponent=!0}}]);