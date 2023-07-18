"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[7254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},A=Object.keys(e);for(r=0;r<A.length;r++)n=A[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(r=0;r<A.length;r++)n=A[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,A=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),s=a,v=d["".concat(i,".").concat(s)]||d[s]||p[s]||A;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var A=n.length,o=new Array(A);o[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<A;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},17244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>A,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const A={},o=void 0,c={unversionedId:"concurrent/\u7ebf\u7a0b\u6267\u884c\u7279\u6027",id:"concurrent/\u7ebf\u7a0b\u6267\u884c\u7279\u6027",title:"\u7ebf\u7a0b\u6267\u884c\u7279\u6027",description:"\u8f6c\u81eaJava \u5e76\u53d1\u7f16\u7a0b\uff1a\u6838\u5fc3\u7406\u8bba",source:"@site/docs/concurrent/\u7ebf\u7a0b\u6267\u884c\u7279\u6027.md",sourceDirName:"concurrent",slug:"/concurrent/\u7ebf\u7a0b\u6267\u884c\u7279\u6027",permalink:"/docs/concurrent/\u7ebf\u7a0b\u6267\u884c\u7279\u6027",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/concurrent/\u7ebf\u7a0b\u6267\u884c\u7279\u6027.md",tags:[],version:"current",lastUpdatedAt:1689650905,formattedLastUpdatedAt:"2023\u5e747\u670818\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7ebf\u7a0b\u4e71\u5e8f\u95ee\u9898",permalink:"/docs/concurrent/\u7ebf\u7a0b\u4e71\u5e8f\u95ee\u9898"},next:{title:"\u7ebf\u7a0b\u6b7b\u9501\u95ee\u9898",permalink:"/docs/concurrent/\u7ebf\u7a0b\u6b7b\u9501\u95ee\u9898"}},i={},l=[{value:"\u5171\u4eab\u6027",id:"\u5171\u4eab\u6027",level:2},{value:"\u4e92\u65a5\u6027",id:"\u4e92\u65a5\u6027",level:2},{value:"\u539f\u5b50\u6027",id:"\u539f\u5b50\u6027",level:2},{value:"\u53ef\u89c1\u6027",id:"\u53ef\u89c1\u6027",level:2},{value:"\u6709\u5e8f\u6027",id:"\u6709\u5e8f\u6027",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...A}=e;return(0,a.kt)(d,(0,r.Z)({},u,A,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8f6c\u81ea",(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/paddix/p/5374810.html"},"Java \u5e76\u53d1\u7f16\u7a0b\uff1a\u6838\u5fc3\u7406\u8bba")),(0,a.kt)("h2",{id:"\u5171\u4eab\u6027"},"\u5171\u4eab\u6027"),(0,a.kt)("p",null,"\u6570\u636e\u5171\u4eab\u6027\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u4e3b\u8981\u539f\u56e0\u4e4b\u4e00\u3002\u5982\u679c\u6240\u6709\u7684\u6570\u636e\u53ea\u662f\u5728\u7ebf\u7a0b\u5185\u6709\u6548\uff0c\u90a3\u5c31\u4e0d\u5b58\u5728\u7ebf\u7a0b\u5b89\u5168\u6027\u95ee\u9898\uff0c\u8fd9\u4e5f\u662f\u6211\u4eec\u5728\u7f16\u7a0b\u7684\u65f6\u5019\u7ecf\u5e38\u4e0d\u9700\u8981\u8003\u8651\u7ebf\u7a0b\u5b89\u5168\u7684\u4e3b\u8981\u539f\u56e0\u4e4b\u4e00\u3002\u4f46\u662f\uff0c\u5728\u591a\u7ebf\u7a0b\u7f16\u7a0b\u4e2d\uff0c\u6570\u636e\u5171\u4eab\u662f\u4e0d\u53ef\u907f\u514d\u7684\u3002\u6700\u5178\u578b\u7684\u573a\u666f\u662f\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u6570\u636e\u7684\u4e00\u81f4\u6027\uff0c\u6211\u4eec\u901a\u5e38\u9700\u8981\u5171\u4eab\u540c\u4e00\u4e2a\u6570\u636e\u5e93\u4e2d\u6570\u636e\uff0c\u5373\u4f7f\u662f\u5728\u4e3b\u4ece\u7684\u60c5\u51b5\u4e0b\uff0c\u8bbf\u95ee\u7684\u4e5f\u540c\u4e00\u4efd\u6570\u636e\uff0c\u4e3b\u4ece\u53ea\u662f\u4e3a\u4e86\u8bbf\u95ee\u7684\u6548\u7387\u548c\u6570\u636e\u5b89\u5168\uff0c\u800c\u5bf9\u540c\u4e00\u4efd\u6570\u636e\u505a\u7684\u526f\u672c\u3002\u6211\u4eec\u73b0\u5728\uff0c\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u6765\u6f14\u793a\u591a\u7ebf\u7a0b\u4e0b\u5171\u4eab\u6570\u636e\u5bfc\u81f4\u7684\u95ee\u9898\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class ShareData {\n    public static int count = 0;\n    public static void main(String[] args) {\n        final ShareData data = new ShareData();\n        for (int i = 0; i < 10; i++) {\n            new Thread(new Runnable() {\n                @Override\n                public void run() {\n                    try {\n                        //\u8fdb\u5165\u7684\u65f6\u5019\u6682\u505c1\u6beb\u79d2\uff0c\u589e\u52a0\u5e76\u53d1\u95ee\u9898\u51fa\u73b0\u7684\u51e0\u7387\n                        Thread.sleep(1);\n                    } catch (InterruptedException e) {\n                        e.printStackTrace();\n                    }\n                    for (int j = 0; j < 100; j++) {\n                        data.addCount();\n                    }\n                    System.out.print(count + " ");\n                }\n            }).start();\n \n        }\n        try {\n            //\u4e3b\u7a0b\u5e8f\u6682\u505c3\u79d2\uff0c\u4ee5\u4fdd\u8bc1\u4e0a\u9762\u7684\u7a0b\u5e8f\u6267\u884c\u5b8c\u6210\n            Thread.sleep(3000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        System.out.println("count=" + count);\n    }\n \n    public void addCount() {\n        count++;\n    }\n}\n')),(0,a.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u7684\u76ee\u7684\u662f\u5bf9count\u8fdb\u884c\u52a0\u4e00\u64cd\u4f5c\uff0c\u6267\u884c1000\u6b21\uff0c\u4e0d\u8fc7\u8fd9\u91cc\u662f\u901a\u8fc710\u4e2a\u7ebf\u7a0b\u6765\u5b9e\u73b0\u7684\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u6267\u884c100\u6b21\uff0c\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u5e94\u8be5\u8f93\u51fa1000\u3002\u4e0d\u8fc7\uff0c\u5982\u679c\u4f60\u8fd0\u884c\u4e0a\u9762\u7684\u7a0b\u5e8f\uff0c\u4f60\u4f1a\u53d1\u73b0\u7ed3\u679c\u5374\u4e0d\u662f\u8fd9\u6837\u3002\u4e0b\u9762\u662f\u67d0\u6b21\u7684\u6267\u884c\u7ed3\u679c\uff08\u6bcf\u6b21\u8fd0\u884c\u7684\u7ed3\u679c\u4e0d\u4e00\u5b9a\u76f8\u540c\uff0c\u6709\u65f6\u5019\u4e5f\u53ef\u80fd\u83b7\u53d6\u5230\u6b63\u786e\u7684\u7ed3\u679c\uff09\uff1a\n",(0,a.kt)("img",{alt:"thread1.png",src:n(17774).Z,width:"1228",height:"140"}),"\n\u53ef\u4ee5\u770b\u51fa\uff0c\u5bf9\u5171\u4eab\u53d8\u91cf\u64cd\u4f5c\uff0c\u5728\u591a\u7ebf\u7a0b\u73af\u5883\u4e0b\u5f88\u5bb9\u6613\u51fa\u73b0\u5404\u79cd\u610f\u60f3\u4e0d\u5230\u7684\u7684\u7ed3\u679c\u3002"),(0,a.kt)("h2",{id:"\u4e92\u65a5\u6027"},"\u4e92\u65a5\u6027"),(0,a.kt)("p",null,"\u8d44\u6e90\u4e92\u65a5\u662f\u6307\u540c\u65f6\u53ea\u5141\u8bb8\u4e00\u4e2a\u8bbf\u95ee\u8005\u5bf9\u5176\u8fdb\u884c\u8bbf\u95ee\uff0c\u5177\u6709\u552f\u4e00\u6027\u548c\u6392\u5b83\u6027\u3002\u6211\u4eec\u901a\u5e38\u5141\u8bb8\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u5bf9\u6570\u636e\u8fdb\u884c\u8bfb\u64cd\u4f5c\uff0c\u4f46\u540c\u4e00\u65f6\u95f4\u5185\u53ea\u5141\u8bb8\u4e00\u4e2a\u7ebf\u7a0b\u5bf9\u6570\u636e\u8fdb\u884c\u5199\u64cd\u4f5c\u3002\u6240\u4ee5\u6211\u4eec\u901a\u5e38\u5c06\u9501\u5206\u4e3a\u5171\u4eab\u9501\u548c\u6392\u5b83\u9501\uff0c\u4e5f\u53eb\u505a\u8bfb\u9501\u548c\u5199\u9501\u3002\u5982\u679c\u8d44\u6e90\u4e0d\u5177\u6709\u4e92\u65a5\u6027\uff0c\u5373\u4f7f\u662f\u5171\u4eab\u8d44\u6e90\uff0c\u6211\u4eec\u4e5f\u4e0d\u9700\u8981\u62c5\u5fc3\u7ebf\u7a0b\u5b89\u5168\u3002\u4f8b\u5982\uff0c\u5bf9\u4e8e\u4e0d\u53ef\u53d8\u7684\u6570\u636e\u5171\u4eab\uff0c\u6240\u6709\u7ebf\u7a0b\u90fd\u53ea\u80fd\u5bf9\u5176\u8fdb\u884c\u8bfb\u64cd\u4f5c\uff0c\u6240\u4ee5\u4e0d\u7528\u8003\u8651\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898\u3002\u4f46\u662f\u5bf9\u5171\u4eab\u6570\u636e\u7684\u5199\u64cd\u4f5c\uff0c\u4e00\u822c\u5c31\u9700\u8981\u4fdd\u8bc1\u4e92\u65a5\u6027\uff0c\u4e0a\u8ff0\u4f8b\u5b50\u4e2d\u5c31\u662f\u56e0\u4e3a\u6ca1\u6709\u4fdd\u8bc1\u4e92\u65a5\u6027\u624d\u5bfc\u81f4\u6570\u636e\u7684\u4fee\u6539\u4ea7\u751f\u95ee\u9898\u3002Java \u4e2d\u63d0\u4f9b\u591a\u79cd\u673a\u5236\u6765\u4fdd\u8bc1\u4e92\u65a5\u6027\uff0c\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u662f\u4f7f\u7528Synchronized\u3002\u73b0\u5728\u6211\u4eec\u5728\u4e0a\u9762\u7a0b\u5e8f\u4e2d\u52a0\u4e0aSynchronized\u518d\u6267\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class ShareData {\n    public static int count = 0;\n    public static void main(String[] args) {\n        final ShareData data = new ShareData();\n        for (int i = 0; i < 10; i++) {\n            new Thread(new Runnable() {\n                @Override\n                public void run() {\n                    try {\n                        //\u8fdb\u5165\u7684\u65f6\u5019\u6682\u505c1\u6beb\u79d2\uff0c\u589e\u52a0\u5e76\u53d1\u95ee\u9898\u51fa\u73b0\u7684\u51e0\u7387\n                        Thread.sleep(1);\n                    } catch (InterruptedException e) {\n                        e.printStackTrace();\n                    }\n                    for (int j = 0; j < 100; j++) {\n                        data.addCount();\n                    }\n                    System.out.print(count + " ");\n                }\n            }).start();\n \n        }\n        try {\n            //\u4e3b\u7a0b\u5e8f\u6682\u505c3\u79d2\uff0c\u4ee5\u4fdd\u8bc1\u4e0a\u9762\u7684\u7a0b\u5e8f\u6267\u884c\u5b8c\u6210\n            Thread.sleep(3000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        System.out.println("count=" + count);\n    }\n \n    /**\n     * \u589e\u52a0 synchronized \u5173\u952e\u5b57\n     */\n    public synchronized void addCount() {\n        count++;\n    }\n}\n')),(0,a.kt)("p",null,"\u73b0\u5728\u518d\u6267\u884c\u4e0a\u8ff0\u4ee3\u7801\uff0c\u4f1a\u53d1\u73b0\u65e0\u8bba\u6267\u884c\u591a\u5c11\u6b21\uff0c\u8fd4\u56de\u7684\u6700\u7ec8\u7ed3\u679c\u90fd\u662f1000\u3002"),(0,a.kt)("h2",{id:"\u539f\u5b50\u6027"},"\u539f\u5b50\u6027"),(0,a.kt)("p",null,"\u539f\u5b50\u6027\u5c31\u662f\u6307\u5bf9\u6570\u636e\u7684\u64cd\u4f5c\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u3001\u4e0d\u53ef\u5206\u5272\u7684\u6574\u4f53\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5c31\u662f\u4e00\u6b21\u64cd\u4f5c\uff0c\u662f\u4e00\u4e2a\u8fde\u7eed\u4e0d\u53ef\u4e2d\u65ad\u7684\u8fc7\u7a0b\uff0c\u6570\u636e\u4e0d\u4f1a\u6267\u884c\u7684\u4e00\u534a\u7684\u65f6\u5019\u88ab\u5176\u4ed6\u7ebf\u7a0b\u6240\u4fee\u6539\u3002\u4fdd\u8bc1\u539f\u5b50\u6027\u7684\u6700\u7b80\u5355\u65b9\u5f0f\u662f\u64cd\u4f5c\u7cfb\u7edf\u6307\u4ee4\uff0c\u5c31\u662f\u8bf4\u5982\u679c\u4e00\u6b21\u64cd\u4f5c\u5bf9\u5e94\u4e00\u6761\u64cd\u4f5c\u7cfb\u7edf\u6307\u4ee4\uff0c\u8fd9\u6837\u80af\u5b9a\u53ef\u4ee5\u80fd\u4fdd\u8bc1\u539f\u5b50\u6027\u3002\u4f46\u662f\u5f88\u591a\u64cd\u4f5c\u4e0d\u80fd\u901a\u8fc7\u4e00\u6761\u6307\u4ee4\u5c31\u5b8c\u6210\u3002\u4f8b\u5982\uff0c\u5bf9long\u7c7b\u578b\u7684\u8fd0\u7b97\uff0c\u5f88\u591a\u7cfb\u7edf\u5c31\u9700\u8981\u5206\u6210\u591a\u6761\u6307\u4ee4\u5206\u522b\u5bf9\u9ad8\u4f4d\u548c\u4f4e\u4f4d\u8fdb\u884c\u64cd\u4f5c\u624d\u80fd\u5b8c\u6210\u3002\u8fd8\u6bd4\u5982\uff0c\u6211\u4eec\u7ecf\u5e38\u4f7f\u7528\u7684\u6574\u6570 i++ \u7684\u64cd\u4f5c\uff0c\u5176\u5b9e\u9700\u8981\u5206\u6210\u4e09\u4e2a\u6b65\u9aa4\uff1a\uff081\uff09\u8bfb\u53d6\u6574\u6570 i \u7684\u503c\uff1b\uff082\uff09\u5bf9 i \u8fdb\u884c\u52a0\u4e00\u64cd\u4f5c\uff1b\uff083\uff09\u5c06\u7ed3\u679c\u5199\u56de\u5185\u5b58\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u5728\u591a\u7ebf\u7a0b\u4e0b\u5c31\u53ef\u80fd\u51fa\u73b0\u5982\u4e0b\u73b0\u8c61\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"thread2.png",src:n(62125).Z,width:"612",height:"178"})),(0,a.kt)("p",null,"\u8fd9\u4e5f\u662f\u4ee3\u7801\u6bb5\u4e00\u6267\u884c\u7684\u7ed3\u679c\u4e3a\u4ec0\u4e48\u4e0d\u6b63\u786e\u7684\u539f\u56e0\u3002\u5bf9\u4e8e\u8fd9\u79cd\u7ec4\u5408\u64cd\u4f5c\uff0c\u8981\u4fdd\u8bc1\u539f\u5b50\u6027\uff0c\u6700\u5e38\u89c1\u7684\u65b9\u5f0f\u662f\u52a0\u9501\uff0c\u5982Java\u4e2d\u7684Synchronized\u6216Lock\u90fd\u53ef\u4ee5\u5b9e\u73b0\uff0c\u4ee3\u7801\u6bb5\u4e8c\u5c31\u662f\u901a\u8fc7Synchronized\u5b9e\u73b0\u7684\u3002\u9664\u4e86\u9501\u4ee5\u5916\uff0c\u8fd8\u6709\u4e00\u79cd\u65b9\u5f0f\u5c31\u662fCAS\uff08Compare And Swap\uff09\uff0c\u5373\u4fee\u6539\u6570\u636e\u4e4b\u524d\u5148\u6bd4\u8f83\u4e0e\u4e4b\u524d\u8bfb\u53d6\u5230\u7684\u503c\u662f\u5426\u4e00\u81f4\uff0c\u5982\u679c\u4e00\u81f4\uff0c\u5219\u8fdb\u884c\u4fee\u6539\uff0c\u5982\u679c\u4e0d\u4e00\u81f4\u5219\u91cd\u65b0\u6267\u884c\uff0c\u8fd9\u4e5f\u662f\u4e50\u89c2\u9501\u7684\u5b9e\u73b0\u539f\u7406\u3002\u4e0d\u8fc7CAS\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u4e0d\u4e00\u5b9a\u6709\u6548\uff0c\u6bd4\u5982\u53e6\u4e00\u7ebf\u7a0b\u5148\u4fee\u6539\u4e86\u67d0\u4e2a\u503c\uff0c\u7136\u540e\u518d\u6539\u56de\u539f\u6765\u503c\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cCAS\u662f\u65e0\u6cd5\u5224\u65ad\u7684\u3002"),(0,a.kt)("h2",{id:"\u53ef\u89c1\u6027"},"\u53ef\u89c1\u6027"),(0,a.kt)("p",null,"\u8981\u7406\u89e3\u53ef\u89c1\u6027\uff0c\u9700\u8981\u5148\u5bf9JVM\u7684\u5185\u5b58\u6a21\u578b\u6709\u4e00\u5b9a\u7684\u4e86\u89e3\uff0cJVM\u7684\u5185\u5b58\u6a21\u578b\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u7c7b\u4f3c\uff0c\u5982\u56fe\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"thread3.png",src:n(56959).Z,width:"554",height:"377"})),(0,a.kt)("p",null,"\u4ece\u8fd9\u4e2a\u56fe\u4e2d\u6211\u4eec\u53ef\u4ee5\u770b\u51fa\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u90fd\u6709\u4e00\u4e2a\u81ea\u5df1\u7684\u5de5\u4f5c\u5185\u5b58\uff08\u76f8\u5f53\u4e8eCPU\u9ad8\u7ea7\u7f13\u51b2\u533a\uff0c\u8fd9\u4e48\u505a\u7684\u76ee\u7684\u8fd8\u662f\u5728\u4e8e\u8fdb\u4e00\u6b65\u7f29\u5c0f\u5b58\u50a8\u7cfb\u7edf\u4e0eCPU\u4e4b\u95f4\u901f\u5ea6\u7684\u5dee\u5f02\uff0c\u63d0\u9ad8\u6027\u80fd\uff09\uff0c\u5bf9\u4e8e\u5171\u4eab\u53d8\u91cf\uff0c\u7ebf\u7a0b\u6bcf\u6b21\u8bfb\u53d6\u7684\u662f\u5de5\u4f5c\u5185\u5b58\u4e2d\u5171\u4eab\u53d8\u91cf\u7684\u526f\u672c\uff0c\u5199\u5165\u7684\u65f6\u5019\u4e5f\u76f4\u63a5\u4fee\u6539\u5de5\u4f5c\u5185\u5b58\u4e2d\u526f\u672c\u7684\u503c\uff0c\u7136\u540e\u5728\u67d0\u4e2a\u65f6\u95f4\u70b9\u4e0a\u518d\u5c06\u5de5\u4f5c\u5185\u5b58\u4e0e\u4e3b\u5185\u5b58\u4e2d\u7684\u503c\u8fdb\u884c\u540c\u6b65\u3002\u8fd9\u6837\u5bfc\u81f4\u7684\u95ee\u9898\u662f\uff0c\u5982\u679c\u7ebf\u7a0b1\u5bf9\u67d0\u4e2a\u53d8\u91cf\u8fdb\u884c\u4e86\u4fee\u6539\uff0c\u7ebf\u7a0b2\u5374\u6709\u53ef\u80fd\u770b\u4e0d\u5230\u7ebf\u7a0b1\u5bf9\u5171\u4eab\u53d8\u91cf\u6240\u505a\u7684\u4fee\u6539\u3002\u901a\u8fc7\u4e0b\u9762\u8fd9\u6bb5\u7a0b\u5e8f\u6211\u4eec\u53ef\u4ee5\u6f14\u793a\u4e00\u4e0b\u4e0d\u53ef\u89c1\u7684\u95ee\u9898\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class VisibilityTest {\n    private static boolean ready;\n    private static int number;\n \n    private static class ReaderThread extends Thread {\n        public void run() {\n            try {\n                Thread.sleep(10);\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n            if (!ready) {\n                System.out.println(ready);\n            }\n            System.out.println(number);\n        }\n    }\n \n    private static class WriterThread extends Thread {\n        public void run() {\n            try {\n                Thread.sleep(10);\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n            number = 100;\n            ready = true;\n        }\n    }\n \n    public static void main(String[] args) {\n        new WriterThread().start();\n        new ReaderThread().start();\n    }\n}\n")),(0,a.kt)("p",null,"\u4ece\u76f4\u89c2\u4e0a\u7406\u89e3\uff0c\u8fd9\u6bb5\u7a0b\u5e8f\u5e94\u8be5\u53ea\u4f1a\u8f93\u51fa100\uff0cready\u7684\u503c\u662f\u4e0d\u4f1a\u6253\u5370\u51fa\u6765\u7684\u3002\u5b9e\u9645\u4e0a\uff0c\u5982\u679c\u591a\u6b21\u6267\u884c\u4e0a\u9762\u4ee3\u7801\u7684\u8bdd\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u591a\u79cd\u4e0d\u540c\u7684\u7ed3\u679c\uff0c\u4e0b\u9762\u662f\u6211\u8fd0\u884c\u51fa\u6765\u7684\u67d0\u4e24\u6b21\u7684\u7ed3\u679c\uff1a\n",(0,a.kt)("img",{alt:"thread4.png",src:n(8503).Z,width:"1196",height:"160"}),"\n",(0,a.kt)("img",{alt:"thread5.png",src:n(90176).Z,width:"1206",height:"158"}),"\n\u5f53\u7136\uff0c\u8fd9\u4e2a\u7ed3\u679c\u4e5f\u53ea\u80fd\u8bf4\u662f\u6709\u53ef\u80fd\u662f\u53ef\u89c1\u6027\u9020\u6210\u7684\uff0c\u5f53\u5199\u7ebf\u7a0b\uff08WriterThread\uff09\u8bbe\u7f6eready=true\u540e\uff0c\u8bfb\u7ebf\u7a0b\uff08ReaderThread\uff09\u770b\u4e0d\u5230\u4fee\u6539\u540e\u7684\u7ed3\u679c\uff0c\u6240\u4ee5\u4f1a\u6253\u5370false\uff0c\u5bf9\u4e8e\u7b2c\u4e8c\u4e2a\u7ed3\u679c\uff0c\u4e5f\u5c31\u662f\u6267\u884cif (!ready)\u65f6\u8fd8\u6ca1\u6709\u8bfb\u53d6\u5230\u5199\u7ebf\u7a0b\u7684\u7ed3\u679c\uff0c\u4f46\u6267\u884cSystem.out.println(ready)\u65f6\u8bfb\u53d6\u5230\u4e86\u5199\u7ebf\u7a0b\u6267\u884c\u7684\u7ed3\u679c\u3002\u4e0d\u8fc7\uff0c\u8fd9\u4e2a\u7ed3\u679c\u4e5f\u6709\u53ef\u80fd\u662f\u7ebf\u7a0b\u7684\u4ea4\u66ff\u6267\u884c\u6240\u9020\u6210\u7684\u3002Java \u4e2d\u53ef\u901a\u8fc7Synchronized\u6216Volatile\u6765\u4fdd\u8bc1\u53ef\u89c1\u6027\uff0c\u5177\u4f53\u7ec6\u8282\u4f1a\u5728\u540e\u7eed\u7684\u6587\u7ae0\u4e2d\u5206\u6790\u3002"),(0,a.kt)("h2",{id:"\u6709\u5e8f\u6027"},"\u6709\u5e8f\u6027"),(0,a.kt)("p",null,"\u4e3a\u4e86\u63d0\u9ad8\u6027\u80fd\uff0c\u7f16\u8bd1\u5668\u548c\u5904\u7406\u5668\u53ef\u80fd\u4f1a\u5bf9\u6307\u4ee4\u505a\u91cd\u6392\u5e8f\u3002\u91cd\u6392\u5e8f\u53ef\u4ee5\u5206\u4e3a\u4e09\u79cd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u5668\u4f18\u5316\u7684\u91cd\u6392\u5e8f\n\u7f16\u8bd1\u5668\u5728\u4e0d\u6539\u53d8\u5355\u7ebf\u7a0b\u7a0b\u5e8f\u8bed\u4e49\u7684\u524d\u63d0\u4e0b\uff0c\u53ef\u4ee5\u91cd\u65b0\u5b89\u6392\u8bed\u53e5\u7684\u6267\u884c\u987a\u5e8f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6307\u4ee4\u7ea7\u5e76\u884c\u7684\u91cd\u6392\u5e8f\n\u73b0\u4ee3\u5904\u7406\u5668\u91c7\u7528\u4e86\u6307\u4ee4\u7ea7\u5e76\u884c\u6280\u672f\uff08Instruction-Level Parallelism\uff0c ILP\uff09\u6765\u5c06\u591a\u6761\u6307\u4ee4\u91cd\u53e0\u6267\u884c\u3002\u5982\u679c\u4e0d\u5b58\u5728\u6570\u636e\u4f9d\u8d56\u6027\uff0c\u5904\u7406\u5668\u53ef\u4ee5\u6539\u53d8\u8bed\u53e5\u5bf9\u5e94\u673a\u5668\u6307\u4ee4\u7684\u6267\u884c\u987a\u5e8f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u5b58\u7cfb\u7edf\u7684\u91cd\u6392\u5e8f\n\u7531\u4e8e\u5904\u7406\u5668\u4f7f\u7528\u7f13\u5b58\u548c\u8bfb/\u5199\u7f13\u51b2\u533a\uff0c\u8fd9\u4f7f\u5f97\u52a0\u8f7d\u548c\u5b58\u50a8\u64cd\u4f5c\u770b\u4e0a\u53bb\u53ef\u80fd\u662f\u5728\u4e71\u5e8f\u6267\u884c\u3002")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u53c2\u8003\u4e00\u4e0bJSR 133 \u4e2d\u5bf9\u91cd\u6392\u5e8f\u95ee\u9898\u7684\u63cf\u8ff0\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"thread6.png",src:n(59199).Z,width:"527",height:"125"})),(0,a.kt)("p",null,"\uff081\uff09\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\uff082\uff09"),(0,a.kt)("p",null,"\u5148\u770b\u4e0a\u56fe\u4e2d\u7684\uff081\uff09\u6e90\u7801\u90e8\u5206\uff0c\u4ece\u6e90\u7801\u6765\u770b\uff0c\u8981\u4e48\u6307\u4ee4 1 \u5148\u6267\u884c\u8981\u4e48\u6307\u4ee4 3\u5148\u6267\u884c\u3002\u5982\u679c\u6307\u4ee4 1 \u5148\u6267\u884c\uff0cr2\u4e0d\u5e94\u8be5\u80fd\u770b\u5230\u6307\u4ee4 4 \u4e2d\u5199\u5165\u7684\u503c\u3002\u5982\u679c\u6307\u4ee4 3 \u5148\u6267\u884c\uff0cr1\u4e0d\u5e94\u8be5\u80fd\u770b\u5230\u6307\u4ee4 2 \u5199\u7684\u503c\u3002\u4f46\u662f\u8fd0\u884c\u7ed3\u679c\u5374\u53ef\u80fd\u51fa\u73b0r2==2\uff0cr1==1\u7684\u60c5\u51b5\uff0c\u8fd9\u5c31\u662f\u201c\u91cd\u6392\u5e8f\u201d\u5bfc\u81f4\u7684\u7ed3\u679c\u3002\u4e0a\u56fe\uff082\uff09\u5373\u662f\u4e00\u79cd\u53ef\u80fd\u51fa\u73b0\u7684\u5408\u6cd5\u7684\u7f16\u8bd1\u7ed3\u679c\uff0c\u7f16\u8bd1\u540e\uff0c\u6307\u4ee41\u548c\u6307\u4ee42\u7684\u987a\u5e8f\u53ef\u80fd\u5c31\u4e92\u6362\u4e86\u3002\u56e0\u6b64\uff0c\u624d\u4f1a\u51fa\u73b0r2==2\uff0cr1==1\u7684\u7ed3\u679c\u3002Java \u4e2d\u4e5f\u53ef\u901a\u8fc7Synchronized\u6216Volatile\u6765\u4fdd\u8bc1\u987a\u5e8f\u6027\u3002"))}p.isMDXComponent=!0},17774:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/thread1-72070f13c8ca840beffcadded4750c53.png"},62125:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},56959:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},8503:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/thread4-1b28295c830b569a3d083e1fcb7288b0.png"},90176:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/thread5-30a930fac4b6dce211c3da9a0d4a6911.png"},59199:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/thread6-d0952a3e85616268c44dc2a042e6bc21.png"}}]);