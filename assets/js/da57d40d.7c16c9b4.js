"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[4669],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21357:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={},o=void 0,l={unversionedId:"jvm/\u5b57\u8282\u7801\u589e\u5f3a-aspectj",id:"jvm/\u5b57\u8282\u7801\u589e\u5f3a-aspectj",title:"\u5b57\u8282\u7801\u589e\u5f3a-aspectj",description:"\u4f7f\u7528\u5207\u9762\u6587\u4ef6",source:"@site/docs/jvm/\u5b57\u8282\u7801\u589e\u5f3a-aspectj.md",sourceDirName:"jvm",slug:"/jvm/\u5b57\u8282\u7801\u589e\u5f3a-aspectj",permalink:"/docs/jvm/\u5b57\u8282\u7801\u589e\u5f3a-aspectj",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/jvm/\u5b57\u8282\u7801\u589e\u5f3a-aspectj.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b57\u8282\u7801\u589e\u5f3a-asm",permalink:"/docs/jvm/\u5b57\u8282\u7801\u589e\u5f3a-asm"},next:{title:"\u5b57\u8282\u7801\u589e\u5f3a-instrument",permalink:"/docs/jvm/\u5b57\u8282\u7801\u589e\u5f3a-instrument"}},c={},s=[{value:"\u4f7f\u7528\u5207\u9762\u6587\u4ef6",id:"\u4f7f\u7528\u5207\u9762\u6587\u4ef6",level:2},{value:"\u4f7f\u7528\u6ce8\u89e3",id:"\u4f7f\u7528\u6ce8\u89e3",level:2},{value:"Before",id:"before",level:3},{value:"@After",id:"after",level:3},{value:"@AfterRunning",id:"afterrunning",level:3},{value:"@AfterThrowing",id:"afterthrowing",level:3},{value:"@Around",id:"around",level:3}],p={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4f7f\u7528\u5207\u9762\u6587\u4ef6"},"\u4f7f\u7528\u5207\u9762\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"//\u670d\u52a1\u7f16\u7801\npublic class NameService {\n    public void printName(String name){\n        System.out.println(name);\n        try {\n            Thread.sleep(1000L);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n    }\n}\n")),(0,a.kt)("p",null,"\u7f16\u5199\u5207\u9762\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"WasteTime.aj"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public aspect WasteTime {\n\n    pointcut print():execution(void NameService.printName(..));\n\n    void around(): print(){\n        long cost = System.currentTimeMillis();\n        proceed();\n        cost = System.currentTimeMillis() - cost;\n        System.out.println("method printName cost :" + cost);\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'//\u91c7\u7528AspectJ\u7f16\u8bd1\u5668\u7f16\u8bd1\u540e\u6267\u884c\npublic class Main {\n    public static void main(String[] args) {\n        NameService nameService = new NameService();\n        nameService.printName("tiang");\n    }\n}\n/**\u7ed3\u679c\ntiang\nmethod printName cost :1000\n**/\n')),(0,a.kt)("p",null,"\u5c06\u7f16\u8bd1\u540e\u7684 NamService.class \u6587\u4ef6\u8fdb\u884c\u53cd\u7f16\u8bd1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class NameService\n{\n    public void printName(final String name) {\n        printName_aroundBody1$advice(this, name, WasteTime.aspectOf(), null);\n    }\n    // \u539f\u65b9\u6cd5\n    private static final /* synthetic */ void printName_aroundBody0(final NameService ajc$this, final String name) {\n        System.out.println(name);\n        try {\n            Thread.sleep(1000L);\n        }\n        catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n    }\n    // \u589e\u5f3a\u7684\u4ee3\u7801\u4e0e\u539f\u65b9\u6cd5\u8026\u5408\n    private static final /* synthetic */ void printName_aroundBody1$advice(final NameService ajc$this, final String name, final WasteTime ajc$aspectInstance, final AroundClosure ajc$aroundClosure) {\n        long cost = System.currentTimeMillis();\n        printName_aroundBody0(ajc$this, name);\n        cost = System.currentTimeMillis() - cost;\n        System.out.println("method printName cost :" + cost);\n    }\n}\n')),(0,a.kt)("p",null,"\u4ece\u53cd\u7f16\u8bd1\u4e4b\u540e\u7684\u7ed3\u679c\u53ef\u4ee5\u770b\u51fa\uff0c\u589e\u5f3a\u7684\u90e8\u5206\u4ee3\u7801\u88ab\u76f4\u63a5\u7f16\u8bd1\u6574\u5408\u8fdb\u4e86\u539f\u6709\u7c7b\u7684\u4ee3\u7801\u4e2d\u3002\u987a\u4fbf\u4e00\u63d0\u7684\u662f\uff0caspectJ \u9664\u4e86\u652f\u6301\u81ea\u5b9a\u4e49\u7684",(0,a.kt)("inlineCode",{parentName:"p"},".aj")," \u6587\u4ef6\u8fdb\u884c\u5207\u9762\u4e4b\u5916\uff0c\u8fd8\u652f\u6301\u76f4\u63a5\u4f7f\u7528 java \u4ee3\u7801\u901a\u8fc7\u6ce8\u89e3@Before\u3001@Around \u7b49\u8fdb\u884c\u7f16\u7801\uff0c\u8fd9\u4e00\u70b9\u4e5f\u88ab\u540e\u6765\u7684 spring \u6240\u501f\u9274\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u6ce8\u89e3"},"\u4f7f\u7528\u6ce8\u89e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.aspectj</groupId>\n    <artifactId>aspectjweaver</artifactId>\n    <version>1.9.19</version>\n</dependency>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@Before: \u524d\u7f6e\u901a\u77e5, \u5728\u65b9\u6cd5\u6267\u884c\u4e4b\u524d\u6267\u884c;"),(0,a.kt)("li",{parentName:"ul"},"@After: \u540e\u7f6e\u901a\u77e5, \u5728\u65b9\u6cd5\u6267\u884c\u4e4b\u540e\u6267\u884c;"),(0,a.kt)("li",{parentName:"ul"},"@AfterRunning: \u8fd4\u56de\u901a\u77e5, \u5728\u65b9\u6cd5\u8fd4\u56de\u7ed3\u679c\u4e4b\u540e\u6267\u884c;"),(0,a.kt)("li",{parentName:"ul"},"@AfterThrowing: \u5f02\u5e38\u901a\u77e5, \u5728\u65b9\u6cd5\u629b\u51fa\u5f02\u5e38\u4e4b\u540e;"),(0,a.kt)("li",{parentName:"ul"},"@Around: \u73af\u7ed5\u901a\u77e5, \u56f4\u7ed5\u7740\u65b9\u6cd5\u6267\u884c;")),(0,a.kt)("h3",{id:"before"},"Before"),(0,a.kt)("p",null,"\u7528@Before \u6807\u8bc6\u7684\u65b9\u6cd5\u4e3a\u524d\u7f6e\u65b9\u6cd5\uff0c\u5728\u76ee\u6807\u65b9\u6cd5\u7684\u6267\u884c\u4e4b\u524d\u6267\u884c\uff0c\u5373\u5728\u8fde\u63a5\u70b9\u4e4b\u524d\u8fdb\u884c\u6267\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Component\n@Aspect\npublic class AspectTest {\n// \u914d\u7f6e\u5207\u5165\u70b9\n@Pointcut("@annotation(com.xxxxx.annotation.Permission)")\npublic void pointcut() {\n}\n\n@Before("pointcut()")\npublic void checkPermission(JoinPoint joinPoint) throws Throwable {\n    // ...\n    if (!permissions.contains(permission.value())) {\n        throw new Exception("\u65e0\u6743\u9650\u64cd\u4f5c!");\n    }\n}\n}\n')),(0,a.kt)("p",null,"\u6216\u8005\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Before("execution(public int com.xxx.*(int, int))")\npublic void beforMethod(JoinPoint point){\n    String methodName = point.getSignature().getName();\n    List<Object> args = Arrays.asList(point.getArgs());\n    System.out.println("\u8c03\u7528\u524d\u8fde\u63a5\u70b9\u65b9\u6cd5\u4e3a\uff1a" + methodName + ",\u53c2\u6570\u4e3a\uff1a" + args);\n}\n')),(0,a.kt)("h3",{id:"after"},"@After"),(0,a.kt)("p",null,"\u540e\u7f6e\u65b9\u6cd5\u5728\u8fde\u63a5\u70b9\u65b9\u6cd5\u5b8c\u6210\u4e4b\u540e\u6267\u884c\uff0c\u65e0\u8bba\u8fde\u63a5\u70b9\u65b9\u6cd5\u6267\u884c\u6210\u529f\u8fd8\u662f\u51fa\u73b0\u5f02\u5e38\uff0c\u90fd\u5c06\u6267\u884c\u540e\u7f6e\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Component\n@Aspect\npublic class AspectTest {\n@After(("execution(public int com.xxx.*(int, int))"))\npublic void afterMethod(JoinPoint point){\n    String methodName = point.getSignature().getName();\n    List<Object> args = Arrays.asList(point.getArgs());\n    System.out.println("\u8c03\u7528\u540e\u8fde\u63a5\u70b9\u65b9\u6cd5\u4e3a\uff1a" + methodName + ",\u53c2\u6570\u4e3a\uff1a" + args);\n}\n}\n')),(0,a.kt)("h3",{id:"afterrunning"},"@AfterRunning"),(0,a.kt)("p",null,"\u5f53\u8fde\u63a5\u70b9\u65b9\u6cd5\u6210\u529f\u6267\u884c\u540e\uff0c\u8fd4\u56de\u901a\u77e5\u65b9\u6cd5\u624d\u4f1a\u6267\u884c\uff0c\u5982\u679c\u8fde\u63a5\u70b9\u65b9\u6cd5\u51fa\u73b0\u5f02\u5e38\uff0c\u5219\u8fd4\u56de\u901a\u77e5\u65b9\u6cd5\u4e0d\u6267\u884c\u3002\u6240\u4ee5\u53ef\u4ee5\u62ff\u5230\u76ee\u6807\u65b9\u6cd5(\u8fde\u63a5\u70b9\u65b9\u6cd5)\u6267\u884c\u540e\u7684\u7ed3\u679c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Component\n@Aspect\npublic class AspectTest {\n /*\u901a\u8fc7returning\u5c5e\u6027\u6307\u5b9a\u8fde\u63a5\u70b9\u65b9\u6cd5\u8fd4\u56de\u7684\u7ed3\u679c\u653e\u7f6e\u5728result\u53d8\u91cf\u4e2d\uff0c\u5728\u8fd4\u56de\u901a\u77e5\u65b9\u6cd5\u4e2d\u53ef\u4ee5\u4eceresult\u53d8\u91cf\u4e2d\u83b7\u53d6\u8fde\u63a5\u70b9\u65b9\u6cd5\u7684\u8fd4\u56de\u7ed3\u679c\u4e86\u3002*/\n@AfterReturning(value="execution(public int com.xxx.*(int, int))", returning="result")\npublic void afterReturning(JoinPoint point, Object result){\n    String methodName = point.getSignature().getName();\n    List<Object> args = Arrays.asList(point.getArgs());\n    System.out.println("\u8fde\u63a5\u70b9\u65b9\u6cd5\u4e3a\uff1a" + methodName + ",\u53c2\u6570\u4e3a\uff1a" + args + ",\u76ee\u6807\u65b9\u6cd5\u6267\u884c\u7ed3\u679c\u4e3a\uff1a" + result);\n}\n}\n')),(0,a.kt)("h3",{id:"afterthrowing"},"@AfterThrowing"),(0,a.kt)("p",null,"\u5f02\u5e38\u901a\u77e5\u65b9\u6cd5\u53ea\u5728\u8fde\u63a5\u70b9\u65b9\u6cd5\u51fa\u73b0\u5f02\u5e38\u540e\u624d\u4f1a\u6267\u884c\uff0c\u5426\u5219\u4e0d\u6267\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Component\n@Aspect\npublic class AspectTest {\n/*\u901a\u8fc7throwing\u5c5e\u6027\u6307\u5b9a\u8fde\u63a5\u70b9\u65b9\u6cd5\u51fa\u73b0\u5f02\u5e38\u4fe1\u606f\u5b58\u50a8\u5728ex\u53d8\u91cf\u4e2d\uff0c\u5728\u5f02\u5e38\u901a\u77e5\u65b9\u6cd5\u4e2d\u5c31\u53ef\u4ee5\u4eceex\u53d8\u91cf\u4e2d\u83b7\u53d6\u5f02\u5e38\u4fe1\u606f\u4e86*/\n@AfterThrowing(value="execution(public int com.xxx.*(int, int))", throwing="ex")\npublic void afterReturning(JoinPoint point, Exception ex){\n    String methodName = point.getSignature().getName();\n    List<Object> args = Arrays.asList(point.getArgs());\n    System.out.println("\u8fde\u63a5\u70b9\u65b9\u6cd5\u4e3a\uff1a" + methodName + ",\u53c2\u6570\u4e3a\uff1a" + args + ",\u5f02\u5e38\u4e3a\uff1a" + ex);\n}\n}\n')),(0,a.kt)("h3",{id:"around"},"@Around"),(0,a.kt)("p",null,"\u73af\u7ed5\u901a\u77e5\u65b9\u6cd5\u53ef\u4ee5\u5305\u542b\u4e0a\u9762\u56db\u79cd\u901a\u77e5\u65b9\u6cd5\uff0c\u73af\u7ed5\u901a\u77e5\u7684\u529f\u80fd\u6700\u5168\u9762\u3002"),(0,a.kt)("p",null,"\u73af\u7ed5\u901a\u77e5\u9700\u8981\u643a\u5e26 ProceedingJoinPoint \u7c7b\u578b\u7684\u53c2\u6570\uff0c\u4e14\u73af\u7ed5\u901a\u77e5\u5fc5\u987b\u6709\u8fd4\u56de\u503c, \u8fd4\u56de\u503c\u5373\u4e3a\u76ee\u6807\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Component\n@Aspect\npublic class AspectTest {\n@Around("execution(public int com.xxx.*(int, int))")\npublic Object aroundMethod(ProceedingJoinPoint pdj){\n    /*result\u4e3a\u8fde\u63a5\u70b9\u7684\u653e\u56de\u7ed3\u679c*/\n    Object result = null;\n    String methodName = pdj.getSignature().getName();\n\n    /*\u524d\u7f6e\u901a\u77e5\u65b9\u6cd5*/\n    System.out.println("\u524d\u7f6e\u901a\u77e5\u65b9\u6cd5>\u76ee\u6807\u65b9\u6cd5\u540d\uff1a" + methodName + ",\u53c2\u6570\u4e3a\uff1a" + Arrays.asList(pdj.getArgs()));\n\n    /*\u6267\u884c\u76ee\u6807\u65b9\u6cd5*/\n    try {\n        result = pdj.proceed();\n\n        /*\u8fd4\u56de\u901a\u77e5\u65b9\u6cd5*/\n        System.out.println("\u8fd4\u56de\u901a\u77e5\u65b9\u6cd5>\u76ee\u6807\u65b9\u6cd5\u540d" + methodName + ",\u8fd4\u56de\u7ed3\u679c\u4e3a\uff1a" + result);\n    } catch (Throwable e) {\n        /*\u5f02\u5e38\u901a\u77e5\u65b9\u6cd5*/\n        System.out.println("\u5f02\u5e38\u901a\u77e5\u65b9\u6cd5>\u76ee\u6807\u65b9\u6cd5\u540d" + methodName + ",\u5f02\u5e38\u4e3a\uff1a" + e);\n    }\n\n    /*\u540e\u7f6e\u901a\u77e5*/\n    System.out.println("\u540e\u7f6e\u901a\u77e5\u65b9\u6cd5>\u76ee\u6807\u65b9\u6cd5\u540d" + methodName);\n\n    return result;\n}\n}\n')))}m.isMDXComponent=!0}}]);