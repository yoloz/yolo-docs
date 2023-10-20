"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[6944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),b=l,v=s["".concat(p,".").concat(b)]||s[b]||d[b]||o;return n?a.createElement(v,r(r({ref:t},u),{},{components:n})):a.createElement(v,r({ref:t},u))}));function v(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:l,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},75981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const o={},r=void 0,i={unversionedId:"concurrent/\u5173\u952e\u5b57volatile",id:"concurrent/\u5173\u952e\u5b57volatile",title:"\u5173\u952e\u5b57volatile",description:"volatile \u7684\u4f5c\u7528",source:"@site/docs/concurrent/\u5173\u952e\u5b57volatile.md",sourceDirName:"concurrent",slug:"/concurrent/\u5173\u952e\u5b57volatile",permalink:"/docs/concurrent/\u5173\u952e\u5b57volatile",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/concurrent/\u5173\u952e\u5b57volatile.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5173\u952e\u5b57synchronized",permalink:"/docs/concurrent/\u5173\u952e\u5b57synchronized"},next:{title:"\u63a5\u53e3Future",permalink:"/docs/concurrent/\u63a5\u53e3Future"}},p={},c=[{value:"volatile \u7684\u4f5c\u7528",id:"volatile-\u7684\u4f5c\u7528",level:2},{value:"volatile \u7684\u4f7f\u7528",id:"volatile-\u7684\u4f7f\u7528",level:2},{value:"\u9632\u6b62\u91cd\u6392\u5e8f",id:"\u9632\u6b62\u91cd\u6392\u5e8f",level:3},{value:"\u5b9e\u73b0\u53ef\u89c1\u6027",id:"\u5b9e\u73b0\u53ef\u89c1\u6027",level:3},{value:"\u4fdd\u8bc1\u539f\u5b50\u6027",id:"\u4fdd\u8bc1\u539f\u5b50\u6027",level:3},{value:"volatile \u7684\u539f\u7406",id:"volatile-\u7684\u539f\u7406",level:2},{value:"\u53ef\u89c1\u6027\u5b9e\u73b0",id:"\u53ef\u89c1\u6027\u5b9e\u73b0",level:3},{value:"\u6709\u5e8f\u6027\u5b9e\u73b0",id:"\u6709\u5e8f\u6027\u5b9e\u73b0",level:3},{value:"\u5185\u5b58\u5c4f\u969c",id:"\u5185\u5b58\u5c4f\u969c",level:3}],u={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"volatile-\u7684\u4f5c\u7528"},"volatile \u7684\u4f5c\u7528"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("a",{parentName:"p",href:"./%E7%BA%BF%E7%A8%8B%E6%89%A7%E8%A1%8C%E7%89%B9%E6%80%A7"},"\u7ebf\u7a0b\u6267\u884c\u7684\u7279\u6027"),"\u4e2d\u63d0\u5230\u53ef\u89c1\u6027\u3001\u6709\u5e8f\u6027\u53ca\u539f\u5b50\u6027\u95ee\u9898\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 Synchronized \u5173\u952e\u5b57\u6765\u89e3\u51b3\u8fd9\u4e9b\u4e2a\u95ee\u9898\uff0c\u7136\u800c Synchronized \u662f\u4e00\u4e2a\u6bd4\u8f83\u91cd\u91cf\u7ea7\u7684\u64cd\u4f5c\uff0c\u5bf9\u7cfb\u7edf\u7684\u6027\u80fd\u6709\u6bd4\u8f83\u5927\u7684\u5f71\u54cd\uff0c\u6240\u4ee5\uff0c\u5982\u679c\u6709\u5176\u4ed6\u89e3\u51b3\u65b9\u6848\uff0c\u6211\u4eec\u901a\u5e38\u90fd\u907f\u514d\u4f7f\u7528 Synchronized \u6765\u89e3\u51b3\u95ee\u9898\u3002\u800c",(0,l.kt)("strong",{parentName:"p"},"volatile \u5173\u952e\u5b57\u5c31\u662f Java \u4e2d\u63d0\u4f9b\u7684\u53e6\u4e00\u79cd\u89e3\u51b3\u53ef\u89c1\u6027\u548c\u6709\u5e8f\u6027\u95ee\u9898\u7684\u65b9\u6848\u3002")," \u5bf9\u4e8e\u539f\u5b50\u6027\uff0c\u9700\u8981\u5f3a\u8c03\u4e00\u70b9\uff0c\u4e5f\u662f\u5927\u5bb6\u5bb9\u6613\u8bef\u89e3\u7684\u4e00\u70b9\uff1a\u5bf9 volatile \u53d8\u91cf\u7684\u5355\u6b21\u8bfb/\u5199\u64cd\u4f5c\u53ef\u4ee5\u4fdd\u8bc1\u539f\u5b50\u6027\u7684\uff0c\u5982 long \u548c double \u7c7b\u578b\u53d8\u91cf\uff0c\u4f46\u662f\u5e76\u4e0d\u80fd\u4fdd\u8bc1 i++\u8fd9\u79cd\u64cd\u4f5c\u7684\u539f\u5b50\u6027\uff0c\u56e0\u4e3a\u672c\u8d28\u4e0a i++\u662f\u8bfb\u3001\u5199\u4e24\u6b21\u64cd\u4f5c\u3002"),(0,l.kt)("h2",{id:"volatile-\u7684\u4f7f\u7528"},"volatile \u7684\u4f7f\u7528"),(0,l.kt)("p",null,"\u5173\u4e8e volatile \u7684\u4f7f\u7528\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u51e0\u4e2a\u4f8b\u5b50\u6765\u8bf4\u660e\u5176\u4f7f\u7528\u65b9\u5f0f\u548c\u573a\u666f\u3002"),(0,l.kt)("h3",{id:"\u9632\u6b62\u91cd\u6392\u5e8f"},"\u9632\u6b62\u91cd\u6392\u5e8f"),(0,l.kt)("p",null,"\u6211\u4eec\u4ece\u4e00\u4e2a\u6700\u7ecf\u5178\u7684\u4f8b\u5b50\u6765\u5206\u6790\u91cd\u6392\u5e8f\u95ee\u9898\u3002\u5927\u5bb6\u5e94\u8be5\u90fd\u5f88\u719f\u6089\u5355\u4f8b\u6a21\u5f0f\u7684\u5b9e\u73b0\uff0c\u800c\u5728\u5e76\u53d1\u73af\u5883\u4e0b\u7684\u5355\u4f8b\u5b9e\u73b0\u65b9\u5f0f\uff0c\u6211\u4eec\u901a\u5e38\u53ef\u4ee5\u91c7\u7528\u53cc\u91cd\u68c0\u67e5\u52a0\u9501\uff08DCL\uff09\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u3002\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class Singleton {\n    public static volatile Singleton singleton;\n\n    /**\n     * \u6784\u9020\u51fd\u6570\u79c1\u6709\uff0c\u7981\u6b62\u5916\u90e8\u5b9e\u4f8b\u5316\n     */\n    private Singleton() {};\n\n    public static Singleton getInstance() {\n        if (singleton == null) {\n            synchronized (singleton) {\n                if (singleton == null) {\n                    singleton = new Singleton();\n                }\n            }\n        }\n        return singleton;\n    }\n}\n")),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5206\u6790\u4e00\u4e0b\u4e3a\u4ec0\u4e48\u8981\u5728\u53d8\u91cf singleton \u4e4b\u95f4\u52a0\u4e0a volatile \u5173\u952e\u5b57\u3002\u8981\u7406\u89e3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5148\u8981\u4e86\u89e3\u5bf9\u8c61\u7684\u6784\u9020\u8fc7\u7a0b\uff0c\u5b9e\u4f8b\u5316\u4e00\u4e2a\u5bf9\u8c61\u5176\u5b9e\u53ef\u4ee5\u5206\u4e3a\u4e09\u4e2a\u6b65\u9aa4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5206\u914d\u5185\u5b58\u7a7a\u95f4"),(0,l.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u5185\u5b58\u7a7a\u95f4\u7684\u5730\u5740\u8d4b\u503c\u7ed9\u5bf9\u5e94\u7684\u5f15\u7528")),(0,l.kt)("p",null,"\u4f46\u662f\u7531\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u53ef\u4ee5\u5bf9\u6307\u4ee4\u8fdb\u884c\u91cd\u6392\u5e8f\uff0c\u6240\u4ee5\u4e0a\u9762\u7684\u8fc7\u7a0b\u4e5f\u53ef\u80fd\u4f1a\u53d8\u6210\u5982\u4e0b\u8fc7\u7a0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5206\u914d\u5185\u5b58\u7a7a\u95f4"),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u5185\u5b58\u7a7a\u95f4\u7684\u5730\u5740\u8d4b\u503c\u7ed9\u5bf9\u5e94\u7684\u5f15\u7528"),(0,l.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316\u5bf9\u8c61")),(0,l.kt)("p",null,"\u5982\u679c\u662f\u8fd9\u4e2a\u6d41\u7a0b\uff0c\u591a\u7ebf\u7a0b\u73af\u5883\u4e0b\u5c31\u53ef\u80fd\u5c06\u4e00\u4e2a\u672a\u521d\u59cb\u5316\u7684\u5bf9\u8c61\u5f15\u7528\u66b4\u9732\u51fa\u6765\uff0c\u4ece\u800c\u5bfc\u81f4\u4e0d\u53ef\u9884\u6599\u7684\u7ed3\u679c\u3002\u56e0\u6b64\uff0c\u4e3a\u4e86\u9632\u6b62\u8fd9\u4e2a\u8fc7\u7a0b\u7684\u91cd\u6392\u5e8f\uff0c\u6211\u4eec\u9700\u8981\u5c06\u53d8\u91cf\u8bbe\u7f6e\u4e3a volatile \u7c7b\u578b\u7684\u53d8\u91cf\u3002"),(0,l.kt)("h3",{id:"\u5b9e\u73b0\u53ef\u89c1\u6027"},"\u5b9e\u73b0\u53ef\u89c1\u6027"),(0,l.kt)("p",null,"\u53ef\u89c1\u6027\u95ee\u9898\u4e3b\u8981\u6307\u4e00\u4e2a\u7ebf\u7a0b\u4fee\u6539\u4e86\u5171\u4eab\u53d8\u91cf\u503c\uff0c\u800c\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u5374\u770b\u4e0d\u5230\u3002\u5f15\u8d77\u53ef\u89c1\u6027\u95ee\u9898\u7684\u4e3b\u8981\u539f\u56e0\u662f\u6bcf\u4e2a\u7ebf\u7a0b\u62e5\u6709\u81ea\u5df1\u7684\u4e00\u4e2a\u9ad8\u901f\u7f13\u5b58\u533a\u2014\u2014\u7ebf\u7a0b\u5de5\u4f5c\u5185\u5b58\u3002volatile \u5173\u952e\u5b57\u80fd\u6709\u6548\u7684\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u770b\u4e0b\u4e0b\u9762\u7684\u4f8b\u5b50\uff0c\u5c31\u53ef\u4ee5\u77e5\u9053\u5176\u4f5c\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class VolatileTest {\n    int a = 1;\n    int b = 2;\n\n    public void change(){\n        a = 3;\n        b = a;\n    }\n\n    public void print(){\n        System.out.println("b="+b+";a="+a);\n    }\n\n    public static void main(String[] args) {\n        while (true){\n            final VolatileTest test = new VolatileTest();\n            new Thread(new Runnable() {\n                @Override\n                public void run() {\n                    try {\n                        Thread.sleep(10);\n                    } catch (InterruptedException e) {\n                        e.printStackTrace();\n                    }\n                    test.change();\n                }\n            }).start();\n\n            new Thread(new Runnable() {\n                @Override\n                public void run() {\n                    try {\n                        Thread.sleep(10);\n                    } catch (InterruptedException e) {\n                        e.printStackTrace();\n                    }\n                    test.print();\n                }\n            }).start();\n\n        }\n    }\n}\n')),(0,l.kt)("p",null,"\u76f4\u89c2\u4e0a\u8bf4\uff0c\u8fd9\u6bb5\u4ee3\u7801\u7684\u7ed3\u679c\u53ea\u53ef\u80fd\u6709\u4e24\u79cd\uff1ab=3;a=3 \u6216 b=2;a=1\u3002\u4e0d\u8fc7\u8fd0\u884c\u4e0a\u9762\u7684\u4ee3\u7801\uff08\u53ef\u80fd\u65f6\u95f4\u4e0a\u8981\u957f\u4e00\u70b9\uff09\uff0c\u4f60\u4f1a\u53d1\u73b0\u9664\u4e86\u4e0a\u4e24\u79cd\u7ed3\u679c\u4e4b\u5916\uff0c\u8fd8\u51fa\u73b0\u4e86\u7b2c\u4e09\u79cd\u7ed3\u679c\uff1a\n......\nb=2;a=1\nb=2;a=1\nb=3;a=3\nb=3;a=3"),(0,l.kt)("font",{style:{color:"red"}},"b=3;a=1"),"b=3;a=3 b=2;a=1 b=3;a=3 b=3;a=3 ...... \u4e3a\u4ec0\u4e48\u4f1a\u51fa\u73b0 b=3;a=1 \u8fd9\u79cd\u7ed3\u679c\u5462\uff1f \u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u5148\u6267\u884c change \u65b9\u6cd5\uff0c\u518d\u6267\u884c print \u65b9\u6cd5\uff0c\u8f93\u51fa\u7ed3\u679c\u5e94\u8be5\u4e3a b=3;a=3\u3002\u76f8\u53cd\uff0c\u5982\u679c\u5148\u6267\u884c\u7684 print \u65b9\u6cd5\uff0c\u518d\u6267\u884c change \u65b9\u6cd5\uff0c\u7ed3\u679c\u5e94\u8be5\u662f b=2;a=1\u3002 \u90a3 b=3;a=1 \u7684\u7ed3\u679c\u662f\u600e\u4e48\u51fa\u6765\u7684\uff1f \u539f\u56e0\u5c31\u662f\u7b2c\u4e00\u4e2a\u7ebf\u7a0b\u5c06\u503c a=3 \u4fee\u6539\u540e\uff0c\u4f46\u662f\u5bf9\u7b2c\u4e8c\u4e2a\u7ebf\u7a0b\u662f\u4e0d\u53ef\u89c1\u7684\uff0c\u6240\u4ee5\u624d\u51fa\u73b0\u8fd9\u4e00\u7ed3\u679c\u3002 \u5982\u679c\u5c06 a \u548c b \u90fd\u6539\u6210 volatile \u7c7b\u578b\u7684\u53d8\u91cf\u518d\u6267\u884c\uff0c\u5219\u518d\u4e5f\u4e0d\u4f1a\u51fa\u73b0 b=3;a=1 \u7684\u7ed3\u679c\u4e86\u3002",(0,l.kt)("h3",{id:"\u4fdd\u8bc1\u539f\u5b50\u6027"},"\u4fdd\u8bc1\u539f\u5b50\u6027"),(0,l.kt)("p",null,"\u5173\u4e8e\u539f\u5b50\u6027\u7684\u95ee\u9898\uff0c\u4e0a\u9762\u5df2\u7ecf\u89e3\u91ca\u8fc7\u3002volatile \u53ea\u80fd\u4fdd\u8bc1\u5bf9\u5355\u6b21\u8bfb/\u5199\u7684\u539f\u5b50\u6027\u3002\u8fd9\u4e2a\u95ee\u9898\u53ef\u4ee5\u770b\u4e0b JLS \u4e2d\u7684\u63cf\u8ff0\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"17.7 Non-Atomic Treatment of double and long\nFor the purposes of the Java programming language memory model, a single write to a non-volatile long or double value is treated as two separate writes: one to each 32-bit half. This can result in a situation where a thread sees the first 32 bits of a 64-bit value from one write, and the second 32 bits from another write."),(0,l.kt)("p",{parentName:"blockquote"},"Writes and reads of volatile long and double values are always atomic."),(0,l.kt)("p",{parentName:"blockquote"},"Writes to and reads of references are always atomic, regardless of whether they are implemented as 32-bit or 64-bit values."),(0,l.kt)("p",{parentName:"blockquote"},"Some implementations may find it convenient to divide a single write action on a 64-bit long or double value into two write actions on adjacent 32-bit values. For efficiency's sake, this behavior is implementation-specific; an implementation of the Java Virtual Machine is free to perform writes to long and double values atomically or in two parts."),(0,l.kt)("p",{parentName:"blockquote"},"Implementations of the Java Virtual Machine are encouraged to avoid splitting 64-bit values where possible. Programmers are encouraged to declare shared 64-bit values as volatile or synchronize their programs correctly to avoid possible complications.")),(0,l.kt)("p",null,"\u8fd9\u6bb5\u8bdd\u7684\u5185\u5bb9\u8ddf\u6211\u524d\u9762\u7684\u63cf\u8ff0\u5185\u5bb9\u5927\u81f4\u7c7b\u4f3c\u3002\u56e0\u4e3a long \u548c double \u4e24\u79cd\u6570\u636e\u7c7b\u578b\u7684\u64cd\u4f5c\u53ef\u5206\u4e3a\u9ad8 32 \u4f4d\u548c\u4f4e 32 \u4f4d\u4e24\u90e8\u5206\uff0c\u56e0\u6b64\u666e\u901a\u7684 long \u6216 double \u7c7b\u578b\u8bfb/\u5199\u53ef\u80fd\u4e0d\u662f\u539f\u5b50\u7684\u3002\u56e0\u6b64\uff0c\u9f13\u52b1\u5927\u5bb6\u5c06\u5171\u4eab\u7684 long \u548c double \u53d8\u91cf\u8bbe\u7f6e\u4e3a volatile \u7c7b\u578b\uff0c\u8fd9\u6837\u80fd\u4fdd\u8bc1\u4efb\u4f55\u60c5\u51b5\u4e0b\u5bf9 long \u548c double \u7684\u5355\u6b21\u8bfb/\u5199\u64cd\u4f5c\u90fd\u5177\u6709\u539f\u5b50\u6027\u3002",(0,l.kt)("strong",{parentName:"p"},"\u65b0\u7684 JDK \u4e2d\uff0cJVM \u5df2\u7ecf\u4fdd\u8bc1\u5bf9 64 \u4f4d\u6570\u636e\u7684\u8bfb\u53d6\u548c\u8d4b\u503c\u4e5f\u662f\u539f\u5b50\u6027\u64cd\u4f5c\u4e86")),(0,l.kt)("p",null,"\u5173\u4e8e volatile \u53d8\u91cf\u5bf9\u539f\u5b50\u6027\u4fdd\u8bc1\uff0c\u6709\u4e00\u4e2a\u95ee\u9898\u5bb9\u6613\u88ab\u8bef\u89e3\u3002\u73b0\u5728\u6211\u4eec\u5c31\u901a\u8fc7\u4e0b\u5217\u7a0b\u5e8f\u6765\u6f14\u793a\u4e00\u4e0b\u8fd9\u4e2a\u95ee\u9898\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class VolatileTest01 {\n    volatile int i;\n\n    public void addI(){\n        i++;\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        final  VolatileTest01 test01 = new VolatileTest01();\n        for (int n = 0; n < 1000; n++) {\n            new Thread(new Runnable() {\n                @Override\n                public void run() {\n                    try {\n                        Thread.sleep(10);\n                    } catch (InterruptedException e) {\n                        e.printStackTrace();\n                    }\n                    test01.addI();\n                }\n            }).start();\n        }\n\n        Thread.sleep(10000);//\u7b49\u5f8510\u79d2\uff0c\u4fdd\u8bc1\u4e0a\u9762\u7a0b\u5e8f\u6267\u884c\u5b8c\u6210\n\n        System.out.println(test01.i);\n    }\n}\n")),(0,l.kt)("p",null,"\u5927\u5bb6\u53ef\u80fd\u4f1a\u8bef\u8ba4\u4e3a\u5bf9\u53d8\u91cf i \u52a0\u4e0a\u5173\u952e\u5b57 volatile \u540e\uff0c\u8fd9\u6bb5\u7a0b\u5e8f\u5c31\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002\u5927\u5bb6\u53ef\u4ee5\u5c1d\u8bd5\u8fd0\u884c\u4e0a\u9762\u7684\u7a0b\u5e8f\u3002\u4e0b\u9762\u662f\u6211\u672c\u5730\u8fd0\u884c\u7684\u7ed3\u679c\uff1a",(0,l.kt)("strong",{parentName:"p"},"981"),"\n\u53ef\u80fd\u6bcf\u4e2a\u4eba\u8fd0\u884c\u7684\u7ed3\u679c\u4e0d\u76f8\u540c\u3002\u4e0d\u8fc7\u5e94\u8be5\u80fd\u770b\u51fa\uff0cvolatile \u662f\u65e0\u6cd5\u4fdd\u8bc1\u539f\u5b50\u6027\u7684\uff08\u5426\u5219\u7ed3\u679c\u5e94\u8be5\u662f 1000\uff09\u3002\u539f\u56e0\u4e5f\u5f88\u7b80\u5355\uff0ci++\u5176\u5b9e\u662f\u4e00\u4e2a\u590d\u5408\u64cd\u4f5c\uff0c\u5305\u62ec\u4e09\u6b65\u9aa4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8bfb\u53d6 i \u7684\u503c"),(0,l.kt)("li",{parentName:"ol"},"\u5bf9 i \u52a0 1"),(0,l.kt)("li",{parentName:"ol"},"\u5c06 i \u7684\u503c\u5199\u56de\u5185\u5b58")),(0,l.kt)("p",null,"volatile \u662f\u65e0\u6cd5\u4fdd\u8bc1\u8fd9\u4e09\u4e2a\u64cd\u4f5c\u662f\u5177\u6709\u539f\u5b50\u6027\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 AtomicInteger \u6216\u8005 Synchronized \u6765\u4fdd\u8bc1+1 \u64cd\u4f5c\u7684\u539f\u5b50\u6027\u3002"),(0,l.kt)("h2",{id:"volatile-\u7684\u539f\u7406"},"volatile \u7684\u539f\u7406"),(0,l.kt)("h3",{id:"\u53ef\u89c1\u6027\u5b9e\u73b0"},"\u53ef\u89c1\u6027\u5b9e\u73b0"),(0,l.kt)("p",null,"\u5728\u524d\u6587\u4e2d\u5df2\u7ecf\u63d0\u53ca\u8fc7\uff0c\u7ebf\u7a0b\u672c\u8eab\u5e76\u4e0d\u76f4\u63a5\u4e0e\u4e3b\u5185\u5b58\u8fdb\u884c\u6570\u636e\u7684\u4ea4\u4e92\uff0c\u800c\u662f\u901a\u8fc7\u7ebf\u7a0b\u7684\u5de5\u4f5c\u5185\u5b58\u6765\u5b8c\u6210\u76f8\u5e94\u7684\u64cd\u4f5c\u3002\u8fd9\u4e5f\u662f\u5bfc\u81f4\u7ebf\u7a0b\u95f4\u6570\u636e\u4e0d\u53ef\u89c1\u7684\u672c\u8d28\u539f\u56e0\u3002\u56e0\u6b64\u8981\u5b9e\u73b0 volatile \u53d8\u91cf\u7684\u53ef\u89c1\u6027\uff0c\u76f4\u63a5\u4ece\u8fd9\u65b9\u9762\u5165\u624b\u5373\u53ef\u3002\u5bf9 volatile \u53d8\u91cf\u7684\u5199\u64cd\u4f5c\u4e0e\u666e\u901a\u53d8\u91cf\u7684\u4e3b\u8981\u533a\u522b\u6709\u4e24\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539 volatile \u53d8\u91cf\u65f6\u4f1a\u5f3a\u5236\u5c06\u4fee\u6539\u540e\u7684\u503c\u5237\u65b0\u7684\u4e3b\u5185\u5b58\u4e2d"),(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539 volatile \u53d8\u91cf\u540e\u4f1a\u5bfc\u81f4\u5176\u4ed6\u7ebf\u7a0b\u5de5\u4f5c\u5185\u5b58\u4e2d\u5bf9\u5e94\u7684\u53d8\u91cf\u503c\u5931\u6548\u3002\u56e0\u6b64\uff0c\u518d\u8bfb\u53d6\u8be5\u53d8\u91cf\u503c\u7684\u65f6\u5019\u5c31\u9700\u8981\u91cd\u65b0\u4ece\u8bfb\u53d6\u4e3b\u5185\u5b58\u4e2d\u7684\u503c")),(0,l.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e24\u4e2a\u64cd\u4f5c\uff0c\u5c31\u53ef\u4ee5\u89e3\u51b3 volatile \u53d8\u91cf\u7684\u53ef\u89c1\u6027\u95ee\u9898\u3002"),(0,l.kt)("h3",{id:"\u6709\u5e8f\u6027\u5b9e\u73b0"},"\u6709\u5e8f\u6027\u5b9e\u73b0"),(0,l.kt)("p",null,"\u5728\u89e3\u91ca\u8fd9\u4e2a\u95ee\u9898\u524d\uff0c\u6211\u4eec\u5148\u6765\u4e86\u89e3\u4e00\u4e0b Java \u4e2d\u7684 happen-before \u89c4\u5219\uff0cJSR 133 \u4e2d\u5bf9 Happen-before \u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Two actions can be ordered by a happens-before relationship.If one action happens before another, then the first is visible to and ordered before the second.")),(0,l.kt)("p",null,"\u901a\u4fd7\u4e00\u70b9\u8bf4\u5c31\u662f\u5982\u679c",(0,l.kt)("strong",{parentName:"p"},"a happen-before b"),"\uff0c\u5219",(0,l.kt)("strong",{parentName:"p"},"a \u6240\u505a\u7684\u4efb\u4f55\u64cd\u4f5c\u5bf9 b \u662f\u53ef\u89c1\u7684"),"\u3002\u6211\u4eec\u518d\u6765\u770b\u770b JSR 133 \u4e2d\u5b9a\u4e49\u4e86\u54ea\u4e9b happen-before \u89c4\u5219\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u2022 Each action in a thread happens before every subsequent action in that thread.\n\u2022 An unlock on a monitor happens before every subsequent lock on that monitor.\n\u2022 A write to a volatile field happens before every subsequent read of that volatile.\n\u2022 A call to start() on a thread happens before any actions in the started thread.\n\u2022 All actions in a thread happen before any other thread successfully returns from a join() on that thread.\n\u2022 If an action a happens before an action b, and b happens before an action c, then a happens before c.")),(0,l.kt)("p",null,"\u7ffb\u8bd1\u8fc7\u6765\u4e3a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u540c\u4e00\u4e2a\u7ebf\u7a0b\u4e2d\u7684\uff0c\u524d\u9762\u7684\u64cd\u4f5c happen-before \u540e\u7eed\u7684\u64cd\u4f5c\u3002\uff08\u5373\u5355\u7ebf\u7a0b\u5185\u6309\u4ee3\u7801\u987a\u5e8f\u6267\u884c\u3002\u4f46\u662f\uff0c\u5728\u4e0d\u5f71\u54cd\u5728\u5355\u7ebf\u7a0b\u73af\u5883\u6267\u884c\u7ed3\u679c\u7684\u524d\u63d0\u4e0b\uff0c\u7f16\u8bd1\u5668\u548c\u5904\u7406\u5668\u53ef\u4ee5\u8fdb\u884c\u91cd\u6392\u5e8f\uff0c\u8fd9\u662f\u5408\u6cd5\u7684\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u8fd9\u4e00\u662f\u89c4\u5219\u65e0\u6cd5\u4fdd\u8bc1\u7f16\u8bd1\u91cd\u6392\u548c\u6307\u4ee4\u91cd\u6392\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u76d1\u89c6\u5668\u4e0a\u7684\u89e3\u9501\u64cd\u4f5c happen-before \u5176\u540e\u7eed\u7684\u52a0\u9501\u64cd\u4f5c\u3002\uff08Synchronized \u89c4\u5219\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9 volatile \u53d8\u91cf\u7684\u5199\u64cd\u4f5c happen-before \u540e\u7eed\u7684\u8bfb\u64cd\u4f5c\u3002\uff08volatile \u89c4\u5219\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u7684 start() \u65b9\u6cd5 happen-before \u8be5\u7ebf\u7a0b\u6240\u6709\u7684\u540e\u7eed\u64cd\u4f5c\u3002\uff08\u7ebf\u7a0b\u542f\u52a8\u89c4\u5219\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u6240\u6709\u7684\u64cd\u4f5c happen-before \u5176\u4ed6\u7ebf\u7a0b\u5728\u8be5\u7ebf\u7a0b\u4e0a\u8c03\u7528 join \u8fd4\u56de\u6210\u529f\u540e\u7684\u64cd\u4f5c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c a happen-before b\uff0cb happen-before c\uff0c\u5219 a happen-before c\uff08\u4f20\u9012\u6027\uff09\u3002")),(0,l.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4e3b\u8981\u770b\u4e0b\u7b2c\u4e09\u6761\uff1avolatile \u53d8\u91cf\u7684\u4fdd\u8bc1\u6709\u5e8f\u6027\u7684\u89c4\u5219\u3002\u5728",(0,l.kt)("a",{parentName:"p",href:"/docs/concurrent/%E7%BA%BF%E7%A8%8B%E6%89%A7%E8%A1%8C%E7%89%B9%E6%80%A7"},"\u7ebf\u7a0b\u6267\u884c\u7684\u7279\u6027"),"\u4e2d\u63d0\u5230\u8fc7\u91cd\u6392\u5e8f\u5206\u4e3a\u7f16\u8bd1\u5668\u91cd\u6392\u5e8f\u548c\u5904\u7406\u5668\u91cd\u6392\u5e8f\u3002\u4e3a\u4e86\u5b9e\u73b0 volatile \u5185\u5b58\u8bed\u4e49\uff0cJVM \u4f1a\u5bf9 volatile \u53d8\u91cf\u9650\u5236\u8fd9\u4e24\u79cd\u7c7b\u578b\u7684\u91cd\u6392\u5e8f\u3002"),(0,l.kt)("h3",{id:"\u5185\u5b58\u5c4f\u969c"},"\u5185\u5b58\u5c4f\u969c"),(0,l.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0 volatile \u53ef\u89c1\u6027\u548c happen-befor \u7684\u8bed\u4e49\u3002JVM \u5e95\u5c42\u662f\u901a\u8fc7\u4e00\u4e2a\u53eb\u505a\u201c\u5185\u5b58\u5c4f\u969c\u201d\u7684\u4e1c\u897f\u6765\u5b8c\u6210\u3002\u5185\u5b58\u5c4f\u969c\uff0c\u4e5f\u53eb\u505a\u5185\u5b58\u6805\u680f\uff0c\u662f\u4e00\u7ec4\u5904\u7406\u5668\u6307\u4ee4\uff0c\u7528\u4e8e\u5b9e\u73b0\u5bf9\u5185\u5b58\u64cd\u4f5c\u7684\u987a\u5e8f\u9650\u5236\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"LoadLoad \u5c4f\u969c")),(0,l.kt)("p",null,"\u6267\u884c\u987a\u5e8f\uff1aLoad1\u2014>Loadload\u2014>Load2\n\u786e\u4fdd Load2 \u53ca\u540e\u7eed Load \u6307\u4ee4\u52a0\u8f7d\u6570\u636e\u4e4b\u524d\u80fd\u8bbf\u95ee\u5230 Load1 \u52a0\u8f7d\u7684\u6570\u636e\u3002"),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"StoreStore \u5c4f\u969c")),(0,l.kt)("p",null,"\u6267\u884c\u987a\u5e8f\uff1aStore1\u2014>StoreStore\u2014>Store2\n\u786e\u4fdd Store2 \u4ee5\u53ca\u540e\u7eed Store \u6307\u4ee4\u6267\u884c\u524d\uff0cStore1 \u64cd\u4f5c\u7684\u6570\u636e\u5bf9\u5176\u5b83\u5904\u7406\u5668\u53ef\u89c1\u3002"),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"LoadStore \u5c4f\u969c")),(0,l.kt)("p",null,"\u6267\u884c\u987a\u5e8f\uff1a Load1\u2014>LoadStore\u2014>Store2\n\u786e\u4fdd Store2 \u548c\u540e\u7eed Store \u6307\u4ee4\u6267\u884c\u524d\uff0c\u53ef\u4ee5\u8bbf\u95ee\u5230 Load1 \u52a0\u8f7d\u7684\u6570\u636e\u3002"),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"StoreLoad \u5c4f\u969c")),(0,l.kt)("p",null,"\u6267\u884c\u987a\u5e8f: Store1\u2014> StoreLoad\u2014>Load2\n\u786e\u4fdd Load2 \u548c\u540e\u7eed\u7684 Load \u6307\u4ee4\u8bfb\u53d6\u4e4b\u524d\uff0cStore1 \u7684\u6570\u636e\u5bf9\u5176\u4ed6\u5904\u7406\u5668\u662f\u53ef\u89c1\u7684\u3002"),(0,l.kt)("p",null,"\u8f6c\u81ea",(0,l.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/paddix/p/5428507.html"},"Java \u5e76\u53d1\u7f16\u7a0b\uff1avolatile \u7684\u4f7f\u7528\u53ca\u5176\u539f\u7406")))}d.isMDXComponent=!0}}]);