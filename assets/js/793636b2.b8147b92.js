"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[8820],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=o,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=h;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8501:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const i={},a=void 0,l={unversionedId:"concurrent/\u7ebf\u7a0b\u6b7b\u9501\u95ee\u9898",id:"concurrent/\u7ebf\u7a0b\u6b7b\u9501\u95ee\u9898",title:"\u7ebf\u7a0b\u6b7b\u9501\u95ee\u9898",description:"\u63cf\u8ff0\uff1a\u4e94\u4f4d\u54f2\u5b66\u5bb6\u56f4\u7ed5\u4e00\u4e2a\u5706\u684c\u5c31\u5ea7\uff0c\u684c\u4e0a\u6446\u7740\u4e94\u652f(\u4e0d\u662f\u4e94\u53cc)\u7b77\u5b50\uff0c\u54f2\u5b66\u5bb6\u7684\u72b6\u6001\u53ef\u80fd\u662f\u601d\u8003\u6216\u8005\u9965\u997f\uff0c\u5982\u679c\u9965\u997f\u54f2\u5b66\u5bb6\u5c31\u62ff\u8d77\u4ed6\u65c1\u8fb9\u7684\u7b77\u5b50\u8fdb\u9910\u4e00\u6bb5\u65f6\u95f4\uff0c\u8fdb\u9910\u7ed3\u675f\u5c31\u653e\u56de\u7b77\u5b50\u3002",source:"@site/docs/concurrent/\u7ebf\u7a0b\u6b7b\u9501\u95ee\u9898.md",sourceDirName:"concurrent",slug:"/concurrent/\u7ebf\u7a0b\u6b7b\u9501\u95ee\u9898",permalink:"/docs/concurrent/\u7ebf\u7a0b\u6b7b\u9501\u95ee\u9898",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/concurrent/\u7ebf\u7a0b\u6b7b\u9501\u95ee\u9898.md",tags:[],version:"current",lastUpdatedAt:1688378919,formattedLastUpdatedAt:"2023\u5e747\u67083\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7ebf\u7a0b\u6267\u884c\u7279\u6027",permalink:"/docs/concurrent/\u7ebf\u7a0b\u6267\u884c\u7279\u6027"},next:{title:"Join\u8868\u7684\u6267\u884c\u987a\u5e8f",permalink:"/docs/database/Join\u8868\u7684\u6267\u884c\u987a\u5e8f"}},c={},p=[{value:"\u7b80\u5355\u5b9e\u73b0\u4f1a\u6b7b\u9501",id:"\u7b80\u5355\u5b9e\u73b0\u4f1a\u6b7b\u9501",level:2},{value:"\u5168\u5c40\u56fa\u5b9a\u987a\u5e8f\u83b7\u53d6\u591a\u628a\u9501\u907f\u514d\u6b7b\u9501",id:"\u5168\u5c40\u56fa\u5b9a\u987a\u5e8f\u83b7\u53d6\u591a\u628a\u9501\u907f\u514d\u6b7b\u9501",level:2},{value:"ReentrantLock \u7684\u8d85\u65f6\u907f\u514d\u6b7b\u9501",id:"reentrantlock-\u7684\u8d85\u65f6\u907f\u514d\u6b7b\u9501",level:2}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u63cf\u8ff0\uff1a\u4e94\u4f4d\u54f2\u5b66\u5bb6\u56f4\u7ed5\u4e00\u4e2a\u5706\u684c\u5c31\u5ea7\uff0c\u684c\u4e0a\u6446\u7740\u4e94\u652f(\u4e0d\u662f\u4e94\u53cc)\u7b77\u5b50\uff0c\u54f2\u5b66\u5bb6\u7684\u72b6\u6001\u53ef\u80fd\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"\u601d\u8003"),"\u6216\u8005",(0,o.kt)("inlineCode",{parentName:"p"},"\u9965\u997f"),"\uff0c\u5982\u679c\u9965\u997f\u54f2\u5b66\u5bb6\u5c31\u62ff\u8d77\u4ed6\u65c1\u8fb9\u7684\u7b77\u5b50\u8fdb\u9910\u4e00\u6bb5\u65f6\u95f4\uff0c\u8fdb\u9910\u7ed3\u675f\u5c31\u653e\u56de\u7b77\u5b50\u3002"),(0,o.kt)("h2",{id:"\u7b80\u5355\u5b9e\u73b0\u4f1a\u6b7b\u9501"},"\u7b80\u5355\u5b9e\u73b0\u4f1a\u6b7b\u9501"),(0,o.kt)("p",null,"\u4ee3\u7801\u63cf\u8ff0\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class Philosopher extends Thread {\n  private final Chopstick left;\n  private final Chopstick right;\n  private final Random random;\n\n  public Philosopher(Chopstick left, Chopstick right) {\n    this.left = left;\n    this.right = right;\n    this.random = new Random();\n  }\n\n  @Override\n  public void run() {\n    try {\n      while (true) {\n        Thread.sleep(random.nextInt(1000)); //\u601d\u8003\u4e00\u6bb5\u65f6\u95f4\n        synchronized (left) { //\u62ff\u8d77\u5de6\u8fb9\u7b77\u5b50\n          synchronized (right) { //\u62ff\u8d77\u53f3\u8fb9\u7b77\u5b50\n            Thread.sleep(random.nextInt(1000)); //\u8fdb\u9910\u4e00\u6bb5\u65f6\u95f4\n          }\n        }\n      }\n    } catch (InterruptedException e) {}\n  }\n\n  class Chopstick {}\n}\n")),(0,o.kt)("p",null,"\u4e0a\u8ff0\u5b9e\u73b0\u53ef\u80fd\u53ef\u4ee5\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4\uff0c\u4f46\u4f1a\u5728\u67d0\u4e00\u65f6\u523b\u505c\u4e0b\uff0c\u56e0\u4e3a\u4f1a\u53d1\u751f\u6b7b\u9501\uff0c\u5982\u6240\u6709\u54f2\u5b66\u5bb6\u540c\u65f6\u51b3\u5b9a\u8fdb\u9910\uff0c\u90fd\u62ff\u8d77\u5de6\u624b\u8fb9\u7684\u7b77\u5b50\uff0c\u90a3\u4e48\u5c31\u65e0\u6cd5\u8fdb\u884c\u4e0b\u53bb(\u6240\u6709\u4eba\u90fd\u6301\u6709\u4e00\u652f\u7b77\u5b50\u5e76\u7b49\u5f85\u53f3\u624b\u8fb9\u7684\u4eba\u653e\u4e0b\u7b77\u5b50)\u3002"),(0,o.kt)("h2",{id:"\u5168\u5c40\u56fa\u5b9a\u987a\u5e8f\u83b7\u53d6\u591a\u628a\u9501\u907f\u514d\u6b7b\u9501"},"\u5168\u5c40\u56fa\u5b9a\u987a\u5e8f\u83b7\u53d6\u591a\u628a\u9501\u907f\u514d\u6b7b\u9501"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u4e00\u4e2a\u7ebf\u7a0b\u60f3\u4f7f\u7528\u591a\u628a\u9501\u65f6\uff0c\u5c31\u9700\u8981\u8003\u8651\u6b7b\u9501\u7684\u53ef\u80fd\u3002\u6709\u4e00\u4e2a\u7b80\u5355\u7684\u89c4\u5219\u53ef\u4ee5\u907f\u5f00\u6b7b\u9501\uff1a\u603b\u662f\u6309\u7167\u4e00\u4e2a\u5168\u5c40\u56fa\u5b9a\u7684\u987a\u5e8f\u83b7\u53d6\u591a\u628a\u9501\u3002")),(0,o.kt)("p",null,"\u6309\u7167\u8fd9\u4e2a\u89c4\u5219\u53ef\u5b9e\u73b0\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class Philosopher extends Thread {\n  private final Chopstick first;\n  private final Chopstick second;\n  private final Random random;\n\n  public Philosopher(Chopstick left, Chopstick right) {\n    if (left.getId() < right.getId()) {\n      first = left;\n      second = right;\n    } else {\n      first = right;\n      second = left;\n    }\n    this.random = new Random();\n  }\n\n  @Override\n  public void run() {\n    try {\n      while (true) {\n        Thread.sleep(random.nextInt(1000)); //\u601d\u8003\u4e00\u6bb5\u65f6\u95f4\n        synchronized (first) { //\u62ff\u8d77\u7b77\u5b501\n          synchronized (second) { //\u62ff\u8d77\u7b77\u5b502\n            Thread.sleep(random.nextInt(1000)); //\u8fdb\u9910\u4e00\u6bb5\u65f6\u95f4\n          }\n        }\n      }\n    } catch (InterruptedException e) {}\n  }\n\n  class Chopstick {\n    private int id;\n\n    public int getId() {\n      return id;\n    }\n  }\n}\n")),(0,o.kt)("p",null,"\u6211\u4eec\u4e0d\u518d\u6309\u5de6\u624b\u8fb9\u548c\u53f3\u624b\u8fb9\u7684\u987a\u5e8f\u62ff\u8d77\u7b77\u5b50\uff0c\u800c\u662f\u6309\u7167\u7b77\u5b50\u7684\u7f16\u53f7\u83b7\u5f97\u7f16\u53f7 1 \u548c\u7f16\u53f7 2 \u7684\u9501(\u53ea\u8981\u4fdd\u8bc1\u7f16\u53f7\u662f\u5168\u5c40\u552f\u4e00\u4e14\u6709\u5e8f\u7684)\u3002"),(0,o.kt)("h2",{id:"reentrantlock-\u7684\u8d85\u65f6\u907f\u514d\u6b7b\u9501"},"ReentrantLock \u7684\u8d85\u65f6\u907f\u514d\u6b7b\u9501"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class Interruptible extends Thread {\n  private final ReentrantLock leftChopsstick, rightChopsstick;\n  private final Random random;\n\n  public Interruptible(\n    ReentrantLock leftChopsstick,\n    ReentrantLock rightChopsstick\n  ) {\n    this.leftChopsstick = leftChopsstick;\n    this.rightChopsstick = rightChopsstick;\n    this.random = new Random();\n  }\n\n  @Override\n  public void run() {\n    try {\n      while (true) {\n        Thread.sleep(random.nextInt(1000)); // \u601d\u8003\u4e00\u6bb5\u65f6\u95f4\n        leftChopsstick.lock();\n        try {\n          if (rightChopsstick.tryLock(1000, TimeUnit.MILLISECONDS)) { // \u83b7\u53d6\u53f3\u624b\u8fb9\u7684\u7b77\u5b50\n            try {\n              Thread.sleep(random.nextInt(1000)); // \u8fdb\u9910\u4e00\u6bb5\u65f6\u95f4\n            } finally {\n              rightChopsstick.unlock();\n            }\n          } else {\n            // \u6ca1\u6709\u83b7\u53d6\u5230\u53f3\u624b\u8fb9\u7684\u7b77\u5b50\uff0c\u653e\u5f03\u5e76\u7ee7\u7eed\u601d\u8003\n          }\n        } finally {\n          leftChopsstick.unlock();\n        }\n      }\n    } catch (InterruptedException e) {\n      e.printStackTrace();\n    }\n  }\n}\n")),(0,o.kt)("p",null,"\u867d\u7136 tryLock()\u907f\u514d\u4e86\u65e0\u5c3d\u7684\u6b7b\u9501\uff0c\u4f46\u8fd9\u5e76\u4e0d\u662f\u4e00\u4e2a\u8db3\u591f\u597d\u7684\u65b9\u5f0f\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9996\u5148\uff0c\u5e76\u4e0d\u80fd\u907f\u514d\u6b7b\u9501\uff0c\u53ea\u662f\u63d0\u4f9b\u4e86\u4ece\u6b7b\u9501\u4e2d\u6062\u590d\u7684\u624b\u6bb5\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5176\u6b21\uff0c\u6d3b\u9501\u73b0\u8c61\uff1a\u5982\u679c\u6240\u6709\u7684\u6b7b\u9501\u7ebf\u7a0b\u540c\u65f6\u8d85\u65f6\uff0c\u5b83\u4eec\u6781\u6709\u53ef\u80fd\u518d\u6b21\u9677\u5165\u6b7b\u9501\u3002\u867d\u7136\u6b7b\u9501\u6ca1\u6709\u6c38\u8fdc\u6301\u7eed\u4e0b\u53bb\uff0c\u4f46\u5bf9\u8d44\u6e90\u7684\u7ade\u4e89\u72b6\u51b5\u5374\u6ca1\u6709\u5f97\u5230\u4efb\u4f55\u6539\u5584\u3002",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u4e3a\u6bcf\u4e2a\u7ebf\u7a0b\u8bbe\u7f6e\u4e0d\u540c\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u51cf\u5c0f\u6d3b\u9501\u7684\u51e0\u7387(\u6240\u6709\u7ebf\u7a0b\u540c\u65f6\u8d85\u65f6\u7684\u51e0\u7387)\uff1b")))))}d.isMDXComponent=!0}}]);