"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[5461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},o=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,g=p["".concat(s,".").concat(d)]||p[d]||v[d]||i;return n?r.createElement(g,u(u({ref:t},o),{},{components:n})):r.createElement(g,u({ref:t},o))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,u=new Array(i);u[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,u[1]=l;for(var c=2;c<i;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>v,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},u=void 0,l={unversionedId:"java/EventBus\u4f7f\u7528",id:"java/EventBus\u4f7f\u7528",title:"EventBus\u4f7f\u7528",description:"\u524d\u8a00",source:"@site/docs/java/EventBus\u4f7f\u7528.md",sourceDirName:"java",slug:"/java/EventBus\u4f7f\u7528",permalink:"/docs/java/EventBus\u4f7f\u7528",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/java/EventBus\u4f7f\u7528.md",tags:[],version:"current",lastUpdatedAt:1689650905,formattedLastUpdatedAt:"2023\u5e747\u670818\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"js\u904d\u5386\u64cd\u4f5c",permalink:"/docs/html&js/js\u904d\u5386\u64cd\u4f5c"},next:{title:"JNA\u4f7f\u7528\u7ec6\u8282",permalink:"/docs/java/JNA\u4f7f\u7528\u7ec6\u8282"}},s={},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"EventBus \u4f18\u7f3a\u70b9",id:"eventbus-\u4f18\u7f3a\u70b9",level:2},{value:"EventBus \u4f7f\u7528\u6b65\u9aa4",id:"eventbus-\u4f7f\u7528\u6b65\u9aa4",level:2},{value:"\u540c\u6b65\u4f7f\u7528",id:"\u540c\u6b65\u4f7f\u7528",level:3},{value:"\u5f02\u6b65\u4f7f\u7528",id:"\u5f02\u6b65\u4f7f\u7528",level:3},{value:"\u5f02\u5e38\u5904\u7406",id:"\u5f02\u5e38\u5904\u7406",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],o={toc:c},p="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"EventBus \u662f Guava \u7684\u4e8b\u4ef6\u5904\u7406\u673a\u5236\uff0c\u662f\u89c2\u5bdf\u8005\u6a21\u5f0f\uff08\u751f\u4ea7/\u6d88\u8d39\u6a21\u578b\uff09\u7684\u4e00\u79cd\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u89c2\u5bdf\u8005\u6a21\u5f0f\u5728\u6211\u4eec\u65e5\u5e38\u5f00\u53d1\u4e2d\u4f7f\u7528\u975e\u5e38\u5e7f\u6cdb\uff0c\u4f8b\u5982\u5728\u8ba2\u5355\u7cfb\u7edf\u4e2d\uff0c\u8ba2\u5355\u72b6\u6001\u6216\u8005\u7269\u6d41\u4fe1\u606f\u7684\u53d8\u66f4\u4f1a\u5411\u7528\u6237\u53d1\u9001 APP \u63a8\u9001\u3001\u77ed\u4fe1\u3001\u901a\u77e5\u5356\u5bb6\u3001\u4e70\u5bb6\u7b49\u7b49\uff1b\u5ba1\u6279\u7cfb\u7edf\u4e2d\uff0c\u5ba1\u6279\u5355\u7684\u6d41\u7a0b\u6d41\u8f6c\u4f1a\u901a\u77e5\u53d1\u8d77\u5ba1\u6279\u7528\u6237\u3001\u5ba1\u6279\u7684\u9886\u5bfc\u7b49\u7b49\u3002"),(0,a.kt)("p",null,"Observer \u6a21\u5f0f\u4e5f\u662f JDK \u4e2d\u81ea\u5e26\u5c31\u652f\u6301\u7684\uff0c\u5176\u5728 1.0 \u7248\u672c\u5c31\u5df2\u7ecf\u5b58\u5728 Observer\uff0c\u4e0d\u8fc7\u968f\u7740 Java \u7248\u672c\u7684\u98de\u901f\u5347\u7ea7\uff0c\u5176\u4f7f\u7528\u65b9\u5f0f\u4e00\u76f4\u6ca1\u6709\u53d8\u5316\uff0c\u8bb8\u591a\u7a0b\u5e8f\u5e93\u63d0\u4f9b\u4e86\u66f4\u52a0\u7b80\u5355\u7684\u5b9e\u73b0\uff0c\u4f8b\u5982 Guava EventBus\u3001RxJava\u3001EventBus \u7b49"),(0,a.kt)("h2",{id:"eventbus-\u4f18\u7f3a\u70b9"},"EventBus \u4f18\u7f3a\u70b9"),(0,a.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u76f8\u6bd4 Observer \u7f16\u7a0b\u7b80\u5355\u65b9\u4fbf")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7\u81ea\u5b9a\u4e49\u53c2\u6570\u53ef\u5b9e\u73b0\u540c\u6b65\u3001\u5f02\u6b65\u64cd\u4f5c\u4ee5\u53ca\u5f02\u5e38\u5904\u7406")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5355\u8fdb\u7a0b\u4f7f\u7528\uff0c\u65e0\u7f51\u7edc\u5f71\u54cd\n\u7f3a\u70b9\uff1a")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53ea\u80fd\u5355\u8fdb\u7a0b\u4f7f\u7528")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9879\u76ee\u5f02\u5e38\u91cd\u542f\u6216\u8005\u9000\u51fa\u4e0d\u4fdd\u8bc1\u6d88\u606f\u6301\u4e45\u5316")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u9700\u8981\u5206\u5e03\u5f0f\u4f7f\u7528\u8fd8\u662f\u9700\u8981\u4f7f\u7528 MQ"))),(0,a.kt)("h2",{id:"eventbus-\u4f7f\u7528\u6b65\u9aa4"},"EventBus \u4f7f\u7528\u6b65\u9aa4"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4f9d\u8d56\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.google.guava</groupId>\n    <artifactId>guava</artifactId>\n    <version>29.0-jre</version>\n</dependency>\n")),(0,a.kt)("p",null,"\u5f15\u5165\u4f9d\u8d56\u540e\uff0c\u8fd9\u91cc\u6211\u4eec\u4e3b\u8981\u4f7f\u7528 com.google.common.eventbus.EventBus \u7c7b\u8fdb\u884c\u64cd\u4f5c\uff0c\u5176\u63d0\u4f9b\u4e86 register\u3001unregister\u3001post \u6765\u8fdb\u884c\u6ce8\u518c\u8ba2\u9605\u3001\u53d6\u6d88\u8ba2\u9605\u548c\u53d1\u5e03\u6d88\u606f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public void register(Object object);\npublic void unregister(Object object);\npublic void post(Object event);\n")),(0,a.kt)("h3",{id:"\u540c\u6b65\u4f7f\u7528"},"\u540c\u6b65\u4f7f\u7528"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9996\u5148\u521b\u5efa\u4e00\u4e2a EventBus")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"EventBus eventBus = new EventBus();")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u8ba2\u9605\u8005")),(0,a.kt)("p",null,"\u5728 Guava EventBus \u4e2d\uff0c\u662f\u6839\u636e\u53c2\u6570\u7c7b\u578b\u8fdb\u884c\u8ba2\u9605\uff0c\u6bcf\u4e2a\u8ba2\u9605\u7684\u65b9\u6cd5\u53ea\u80fd\u7531\u4e00\u4e2a\u53c2\u6570\uff0c\u540c\u65f6\u9700\u8981\u4f7f\u7528 @Subscribe \u6807\u8bc6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'class EventListener {\n\n  /**\n   * \u76d1\u542c Integer \u7c7b\u578b\u7684\u6d88\u606f\n   */\n  @Subscribe\n  public void listenInteger(Integer param) {\n    System.out.println("EventListener#listenInteger ->" + param);\n  }\n\n  /**\n   * \u76d1\u542c String \u7c7b\u578b\u7684\u6d88\u606f\n   */\n  @Subscribe\n  public void listenString(String param) {\n    System.out.println("EventListener#listenString ->" + param);\n  }\n}\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u6ce8\u518c\u5230 EventBus \u4e0a\u5e76\u53d1\u5e03\u6d88\u606f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'EventBus eventBus = new EventBus();\neventBus.register(new EventListener());\neventBus.post(1);\neventBus.post(2);\neventBus.post("3");\n')),(0,a.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"EventListener#listenInteger ->1\nEventListener#listenInteger ->2\nEventListener#listenString ->3\n")),(0,a.kt)("p",null,"\u6839\u636e\u9700\u8981\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a\u8ba2\u9605\u8005\u5b8c\u6210\u8ba2\u9605\u4fe1\u606f\uff0c\u540c\u65f6\u5982\u679c\u4e00\u4e2a\u7c7b\u578b\u5b58\u5728\u591a\u4e2a\u8ba2\u9605\u8005\uff0c\u5219\u6240\u6709\u8ba2\u9605\u65b9\u6cd5\u90fd\u4f1a\u6267\u884c"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48\u8bf4\u8fd9\u4e48\u505a\u662f\u540c\u6b65\u7684\u5462\uff1f")),(0,a.kt)("p",null,"Guava Event \u5b9e\u9645\u4e0a\u662f\u4f7f\u7528\u7ebf\u7a0b\u6c60\u6765\u5904\u7406\u8ba2\u9605\u6d88\u606f\u7684\uff0c\u901a\u8fc7\u6e90\u7801\u53ef\u4ee5\u770b\u51fa\uff0c\u5f53\u6211\u4eec\u4f7f\u7528\u9ed8\u8ba4\u7684\u6784\u9020\u65b9\u6cd5\u521b\u5efa EventBus \u7684\u65f6\u5019\uff0c\u5176\u4e2d executor \u4e3a MoreExecutors.directExecutor()\uff0c\u5176\u5177\u4f53\u5b9e\u73b0\u4e2d\u76f4\u63a5\u8c03\u7528\u7684 Runnable#run \u65b9\u6cd5\uff0c\u4f7f\u5176\u4ecd\u7136\u5728\u540c\u4e00\u4e2a\u7ebf\u7a0b\u4e2d\u6267\u884c\uff0c\u6240\u4ee5\u9ed8\u8ba4\u64cd\u4f5c\u4ecd\u7136\u662f\u540c\u6b65\u7684\uff0c\u8fd9\u79cd\u5904\u7406\u65b9\u6cd5\u4e5f\u6709\u9002\u7528\u7684\u5730\u65b9\uff0c\u8fd9\u6837\u65e2\u53ef\u4ee5\u89e3\u8026\u4e5f\u53ef\u4ee5\u8ba9\u65b9\u6cd5\u5728\u540c\u4e00\u4e2a\u7ebf\u7a0b\u4e2d\u6267\u884c\u83b7\u53d6\u540c\u7ebf\u7a0b\u4e2d\u7684\u4fbf\u5229\uff0c\u6bd4\u5982\u4e8b\u52a1\u7684\u5904\u7406"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"EventBus \u90e8\u5206\u6e90\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class EventBus {\n  private static final Logger logger = Logger.getLogger(EventBus.class.getName());\n  private final String identifier;\n  private final Executor executor;\n  private final SubscriberExceptionHandler exceptionHandler;\n  private final SubscriberRegistry subscribers;\n  private final Dispatcher dispatcher;\n\n  public EventBus() {\n    this("default");\n  }\n\n  public EventBus(String identifier) {\n    this(identifier, MoreExecutors.directExecutor(), Dispatcher.perThreadDispatchQueue(), EventBus.LoggingHandler.INSTANCE);\n  }\n\n  public EventBus(SubscriberExceptionHandler exceptionHandler) {\n    this("default", MoreExecutors.directExecutor(), Dispatcher.perThreadDispatchQueue(), exceptionHandler);\n  }\n\n  EventBus(String identifier, Executor executor, Dispatcher dispatcher, SubscriberExceptionHandler exceptionHandler) {\n    this.subscribers = new SubscriberRegistry(this);\n    this.identifier = (String)Preconditions.checkNotNull(identifier);\n    this.executor = (Executor)Preconditions.checkNotNull(executor);\n    this.dispatcher = (Dispatcher)Preconditions.checkNotNull(dispatcher);\n    this.exceptionHandler = (SubscriberExceptionHandler)Preconditions.checkNotNull(exceptionHandler);\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"DirectExecutor \u90e8\u5206\u6e90\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'enum DirectExecutor implements Executor {\n  INSTANCE;\n\n  private DirectExecutor() {\n  }\n\n  public void execute(Runnable command) {\n    command.run();\n  }\n\n  public String toString() {\n    return "MoreExecutors.directExecutor()";\n  }\n}\n')),(0,a.kt)("h3",{id:"\u5f02\u6b65\u4f7f\u7528"},"\u5f02\u6b65\u4f7f\u7528"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u6e90\u7801\uff0c\u53ef\u4ee5\u770b\u51fa\u53ea\u8981\u5c06\u6784\u9020\u65b9\u6cd5\u4e2d\u7684 executor \u6362\u6210\u4e00\u4e2a\u7ebf\u7a0b\u6c60\u5b9e\u73b0\u5373\u53ef, \u540c\u65f6 Guava EventBus \u4e3a\u4e86\u7b80\u5316\u64cd\u4f5c\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5316\u7684\u65b9\u6848\u5373 AsyncEventBus\n",(0,a.kt)("inlineCode",{parentName:"p"},"EventBus eventBus = new AsyncEventBus(Executors.newCachedThreadPool());"),"\u8fd9\u6837\u5373\u53ef\u5b9e\u73b0\u5f02\u6b65\u4f7f\u7528"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"AsyncEventBus \u6e90\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class AsyncEventBus extends EventBus {\n  public AsyncEventBus(String identifier, Executor executor) {\n    super(identifier, executor, Dispatcher.legacyAsync(), LoggingHandler.INSTANCE);\n  }\n\n  public AsyncEventBus(Executor executor, SubscriberExceptionHandler subscriberExceptionHandler) {\n    super("default", executor, Dispatcher.legacyAsync(), subscriberExceptionHandler);\n  }\n\n  public AsyncEventBus(Executor executor) {\n    super("default", executor, Dispatcher.legacyAsync(), LoggingHandler.INSTANCE);\n  }\n}\n')),(0,a.kt)("h3",{id:"\u5f02\u5e38\u5904\u7406"},"\u5f02\u5e38\u5904\u7406"),(0,a.kt)("p",null,"\u5982\u679c\u5904\u7406\u65f6\u53d1\u751f\u5f02\u5e38\u5e94\u8be5\u5982\u4f55\u5904\u7406? \u5728\u770b\u6e90\u7801\u4e2d\uff0c\u65e0\u8bba\u662f EventBus \u8fd8\u662f AsyncEventBus \u90fd\u53ef\u4f20\u5165\u81ea\u5b9a\u4e49\u7684 SubscriberExceptionHandler \u8be5 handler \u5f53\u51fa\u73b0\u5f02\u5e38\u65f6\u4f1a\u88ab\u8c03\u7528\uff0c\u6211\u53ef\u53ef\u4ee5\u4ece\u53c2\u6570 exception \u83b7\u53d6\u5f02\u5e38\u4fe1\u606f\uff0c\u4ece context \u4e2d\u83b7\u53d6\u6d88\u606f\u4fe1\u606f\u8fdb\u884c\u7279\u5b9a\u7684\u5904\u7406\n\u5176\u63a5\u53e3\u58f0\u660e\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface SubscriberExceptionHandler {\n  /** Handles exceptions thrown by subscribers. */\n  void handleException(Throwable exception, SubscriberExceptionContext context);\n}\n")),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/guava"},"https://github.com/google/guava")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/greenrobot/EventBus"},"https://github.com/greenrobot/EventBus")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/RxJava"},"https://github.com/ReactiveX/RxJava")))}v.isMDXComponent=!0}}]);