"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[3953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var s=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,v=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?s.createElement(v,a(a({ref:t},p),{},{components:n})):s.createElement(v,a({ref:t},p))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<r;c++)a[c]=n[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(87462),i=(n(67294),n(3905));const r={},a=void 0,o={unversionedId:"jvm/\u5b57\u8282\u7801\u589e\u5f3a-asm",id:"jvm/\u5b57\u8282\u7801\u589e\u5f3a-asm",title:"\u5b57\u8282\u7801\u589e\u5f3a-asm",description:"\u5bf9\u4e8e\u9700\u8981\u624b\u52a8\u64cd\u7eb5\u5b57\u8282\u7801\u7684\u9700\u6c42\uff0c\u53ef\u4ee5\u4f7f\u7528 ASM\uff0c\u5b83\u53ef\u4ee5\u76f4\u63a5\u751f\u4ea7 .class \u5b57\u8282\u7801\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u5728\u7c7b\u88ab\u52a0\u8f7d\u5165 JVM \u4e4b\u524d\u52a8\u6001\u4fee\u6539\u7c7b\u884c\u4e3a\uff08\u5982\u4e0b\u56fe 17 \u6240\u793a\uff09\u3002ASM \u7684\u5e94\u7528\u573a\u666f\u6709 AOP\uff08Cglib \u5c31\u662f\u57fa\u4e8e ASM\uff09\u3001\u70ed\u90e8\u7f72\u3001\u4fee\u6539\u5176\u4ed6 jar \u5305\u4e2d\u7684\u7c7b\u7b49\u3002\u5f53\u7136\uff0c\u6d89\u53ca\u5230\u5982\u6b64\u5e95\u5c42\u7684\u6b65\u9aa4\uff0c\u5b9e\u73b0\u8d77\u6765\u4e5f\u6bd4\u8f83\u9ebb\u70e6\u3002\u63a5\u4e0b\u6765\uff0c\u672c\u6587\u5c06\u4ecb\u7ecd ASM \u7684\u4e24\u79cd API\uff0c\u5e76\u7528 ASM \u6765\u5b9e\u73b0\u4e00\u4e2a\u6bd4\u8f83\u7c97\u7cd9\u7684 AOP\u3002\u4f46\u5728\u6b64\u4e4b\u524d\uff0c\u4e3a\u4e86\u8ba9\u5927\u5bb6\u66f4\u5feb\u5730\u7406\u89e3 ASM \u7684\u5904\u7406\u6d41\u7a0b\uff0c\u5f3a\u70c8\u5efa\u8bae\u8bfb\u8005\u5148\u5bf9\u8bbf\u95ee\u8005\u6a21\u5f0f\u8fdb\u884c\u4e86\u89e3\u3002\u7b80\u5355\u6765\u8bf4\uff0c\u8bbf\u95ee\u8005\u6a21\u5f0f\u4e3b\u8981\u7528\u4e8e\u4fee\u6539\u6216\u64cd\u4f5c\u4e00\u4e9b\u6570\u636e\u7ed3\u6784\u6bd4\u8f83\u7a33\u5b9a\u7684\u6570\u636e\uff0c\u800c\u901a\u8fc7\u7b2c\u4e00\u7ae0\uff0c\u6211\u4eec\u77e5\u9053\u5b57\u8282\u7801\u6587\u4ef6\u7684\u7ed3\u6784\u662f\u7531 JVM \u56fa\u5b9a\u7684\uff0c\u6240\u4ee5\u5f88\u9002\u5408\u5229\u7528\u8bbf\u95ee\u8005\u6a21\u5f0f\u5bf9\u5b57\u8282\u7801\u6587\u4ef6\u8fdb\u884c\u4fee\u6539\u3002",source:"@site/docs/jvm/\u5b57\u8282\u7801\u589e\u5f3a-asm.md",sourceDirName:"jvm",slug:"/jvm/\u5b57\u8282\u7801\u589e\u5f3a-asm",permalink:"/docs/jvm/\u5b57\u8282\u7801\u589e\u5f3a-asm",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/jvm/\u5b57\u8282\u7801\u589e\u5f3a-asm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u52a0\u8f7d\u5e93\u6587\u4ef6",permalink:"/docs/jvm/\u52a0\u8f7d\u5e93\u6587\u4ef6"},next:{title:"\u5b57\u8282\u7801\u589e\u5f3a-aspectj",permalink:"/docs/jvm/\u5b57\u8282\u7801\u589e\u5f3a-aspectj"}},l={},c=[{value:"ASM API",id:"asm-api",level:2},{value:"\u6838\u5fc3 API",id:"\u6838\u5fc3-api",level:3},{value:"\u6811\u5f62 API",id:"\u6811\u5f62-api",level:3},{value:"\u76f4\u63a5\u5229\u7528 ASM \u5b9e\u73b0 AOP",id:"\u76f4\u63a5\u5229\u7528-asm-\u5b9e\u73b0-aop",level:2},{value:"ASM \u5de5\u5177",id:"asm-\u5de5\u5177",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5bf9\u4e8e\u9700\u8981\u624b\u52a8\u64cd\u7eb5\u5b57\u8282\u7801\u7684\u9700\u6c42\uff0c\u53ef\u4ee5\u4f7f\u7528 ASM\uff0c\u5b83\u53ef\u4ee5\u76f4\u63a5\u751f\u4ea7 ",(0,i.kt)("inlineCode",{parentName:"p"},".class")," \u5b57\u8282\u7801\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u5728\u7c7b\u88ab\u52a0\u8f7d\u5165 JVM \u4e4b\u524d\u52a8\u6001\u4fee\u6539\u7c7b\u884c\u4e3a\uff08\u5982\u4e0b\u56fe 17 \u6240\u793a\uff09\u3002ASM \u7684\u5e94\u7528\u573a\u666f\u6709 AOP\uff08Cglib \u5c31\u662f\u57fa\u4e8e ASM\uff09\u3001\u70ed\u90e8\u7f72\u3001\u4fee\u6539\u5176\u4ed6 jar \u5305\u4e2d\u7684\u7c7b\u7b49\u3002\u5f53\u7136\uff0c\u6d89\u53ca\u5230\u5982\u6b64\u5e95\u5c42\u7684\u6b65\u9aa4\uff0c\u5b9e\u73b0\u8d77\u6765\u4e5f\u6bd4\u8f83\u9ebb\u70e6\u3002\u63a5\u4e0b\u6765\uff0c\u672c\u6587\u5c06\u4ecb\u7ecd ASM \u7684\u4e24\u79cd API\uff0c\u5e76\u7528 ASM \u6765\u5b9e\u73b0\u4e00\u4e2a\u6bd4\u8f83\u7c97\u7cd9\u7684 AOP\u3002\u4f46\u5728\u6b64\u4e4b\u524d\uff0c\u4e3a\u4e86\u8ba9\u5927\u5bb6\u66f4\u5feb\u5730\u7406\u89e3 ASM \u7684\u5904\u7406\u6d41\u7a0b\uff0c\u5f3a\u70c8\u5efa\u8bae\u8bfb\u8005\u5148\u5bf9\u8bbf\u95ee\u8005\u6a21\u5f0f\u8fdb\u884c\u4e86\u89e3\u3002\u7b80\u5355\u6765\u8bf4\uff0c\u8bbf\u95ee\u8005\u6a21\u5f0f\u4e3b\u8981\u7528\u4e8e\u4fee\u6539\u6216\u64cd\u4f5c\u4e00\u4e9b\u6570\u636e\u7ed3\u6784\u6bd4\u8f83\u7a33\u5b9a\u7684\u6570\u636e\uff0c\u800c\u901a\u8fc7\u7b2c\u4e00\u7ae0\uff0c\u6211\u4eec\u77e5\u9053\u5b57\u8282\u7801\u6587\u4ef6\u7684\u7ed3\u6784\u662f\u7531 JVM \u56fa\u5b9a\u7684\uff0c\u6240\u4ee5\u5f88\u9002\u5408\u5229\u7528\u8bbf\u95ee\u8005\u6a21\u5f0f\u5bf9\u5b57\u8282\u7801\u6587\u4ef6\u8fdb\u884c\u4fee\u6539\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"asm1.png",src:n(83474).Z,width:"384",height:"205"}),"\n\u56fe 17 ASM \u4fee\u6539\u5b57\u8282\u7801"),(0,i.kt)("h2",{id:"asm-api"},"ASM API"),(0,i.kt)("h3",{id:"\u6838\u5fc3-api"},"\u6838\u5fc3 API"),(0,i.kt)("p",null,"ASM Core API \u53ef\u4ee5\u7c7b\u6bd4\u89e3\u6790 XML \u6587\u4ef6\u4e2d\u7684 SAX \u65b9\u5f0f\uff0c\u4e0d\u9700\u8981\u628a\u8fd9\u4e2a\u7c7b\u7684\u6574\u4e2a\u7ed3\u6784\u8bfb\u53d6\u8fdb\u6765\uff0c\u5c31\u53ef\u4ee5\u7528\u6d41\u5f0f\u7684\u65b9\u6cd5\u6765\u5904\u7406\u5b57\u8282\u7801\u6587\u4ef6\u3002\u597d\u5904\u662f\u975e\u5e38\u8282\u7ea6\u5185\u5b58\uff0c\u4f46\u662f\u7f16\u7a0b\u96be\u5ea6\u8f83\u5927\u3002\u7136\u800c\u51fa\u4e8e\u6027\u80fd\u8003\u8651\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u7f16\u7a0b\u90fd\u4f7f\u7528 Core API\u3002\u5728 Core API \u4e2d\u6709\u4ee5\u4e0b\u51e0\u4e2a\u5173\u952e\u7c7b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ClassReader\uff1a\u7528\u4e8e\u8bfb\u53d6\u5df2\u7ecf\u7f16\u8bd1\u597d\u7684.class \u6587\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},"ClassWriter\uff1a\u7528\u4e8e\u91cd\u65b0\u6784\u5efa\u7f16\u8bd1\u540e\u7684\u7c7b\uff0c\u5982\u4fee\u6539\u7c7b\u540d\u3001\u5c5e\u6027\u4ee5\u53ca\u65b9\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u751f\u6210\u65b0\u7684\u7c7b\u7684\u5b57\u8282\u7801\u6587\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5404\u79cd Visitor \u7c7b\uff1a\u5982\u4e0a\u6240\u8ff0\uff0cCoreAPI \u6839\u636e\u5b57\u8282\u7801\u4ece\u4e0a\u5230\u4e0b\u4f9d\u6b21\u5904\u7406\uff0c\u5bf9\u4e8e\u5b57\u8282\u7801\u6587\u4ef6\u4e2d\u4e0d\u540c\u7684\u533a\u57df\u6709\u4e0d\u540c\u7684 Visitor\uff0c\u6bd4\u5982\u7528\u4e8e\u8bbf\u95ee\u65b9\u6cd5\u7684 MethodVisitor\u3001\u7528\u4e8e\u8bbf\u95ee\u7c7b\u53d8\u91cf\u7684 FieldVisitor\u3001\u7528\u4e8e\u8bbf\u95ee\u6ce8\u89e3\u7684 AnnotationVisitor \u7b49\u3002\u4e3a\u4e86\u5b9e\u73b0 AOP\uff0c\u91cd\u70b9\u8981\u4f7f\u7528\u7684\u662f MethodVisitor\u3002")),(0,i.kt)("h3",{id:"\u6811\u5f62-api"},"\u6811\u5f62 API"),(0,i.kt)("p",null,"ASM Tree API \u53ef\u4ee5\u7c7b\u6bd4\u89e3\u6790 XML \u6587\u4ef6\u4e2d\u7684 DOM \u65b9\u5f0f\uff0c\u628a\u6574\u4e2a\u7c7b\u7684\u7ed3\u6784\u8bfb\u53d6\u5230\u5185\u5b58\u4e2d\uff0c\u7f3a\u70b9\u662f\u6d88\u8017\u5185\u5b58\u591a\uff0c\u4f46\u662f\u7f16\u7a0b\u6bd4\u8f83\u7b80\u5355\u3002TreeApi \u4e0d\u540c\u4e8e CoreAPI\uff0cTreeAPI \u901a\u8fc7\u5404\u79cd Node \u7c7b\u6765\u6620\u5c04\u5b57\u8282\u7801\u7684\u5404\u4e2a\u533a\u57df\uff0c\u7c7b\u6bd4 DOM \u8282\u70b9\uff0c\u5c31\u53ef\u4ee5\u5f88\u597d\u5730\u7406\u89e3\u8fd9\u79cd\u7f16\u7a0b\u65b9\u5f0f\u3002"),(0,i.kt)("h2",{id:"\u76f4\u63a5\u5229\u7528-asm-\u5b9e\u73b0-aop"},"\u76f4\u63a5\u5229\u7528 ASM \u5b9e\u73b0 AOP"),(0,i.kt)("p",null,'\u5229\u7528 ASM \u7684 CoreAPI \u6765\u589e\u5f3a\u7c7b\u3002\u8fd9\u91cc\u4e0d\u7ea0\u7ed3\u4e8e AOP \u7684\u4e13\u4e1a\u540d\u8bcd\u5982\u5207\u7247\u3001\u901a\u77e5\uff0c\u53ea\u5b9e\u73b0\u5728\u65b9\u6cd5\u8c03\u7528\u524d\u3001\u540e\u589e\u52a0\u903b\u8f91\uff0c\u901a\u4fd7\u6613\u61c2\u4e14\u65b9\u4fbf\u7406\u89e3\u3002\u9996\u5148\u5b9a\u4e49\u9700\u8981\u88ab\u589e\u5f3a\u7684 Base \u7c7b\uff1a\u5176\u4e2d\u53ea\u5305\u542b\u4e00\u4e2a process()\u65b9\u6cd5\uff0c\u65b9\u6cd5\u5185\u8f93\u51fa\u4e00\u884c\u201cprocess\u201d\u3002\u589e\u5f3a\u540e\uff0c\u6211\u4eec\u671f\u671b\u7684\u662f\uff0c\u65b9\u6cd5\u6267\u884c\u524d\u8f93\u51fa\u201cstart\u201d\uff0c\u4e4b\u540e\u8f93\u51fa"end"\u3002'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Base {\n    public void process(){\n        System.out.println("process");\n    }\n}\n')),(0,i.kt)("p",null,"\u4e3a\u4e86\u5229\u7528 ASM \u5b9e\u73b0 AOP\uff0c\u9700\u8981\u5b9a\u4e49\u4e24\u4e2a\u7c7b\uff1a\u4e00\u4e2a\u662f MyClassVisitor \u7c7b\uff0c\u7528\u4e8e\u5bf9\u5b57\u8282\u7801\u7684 visit \u4ee5\u53ca\u4fee\u6539\uff1b\u53e6\u4e00\u4e2a\u662f Generator \u7c7b\uff0c\u5728\u8fd9\u4e2a\u7c7b\u4e2d\u5b9a\u4e49 ClassReader \u548c ClassWriter\uff0c\u5176\u4e2d\u7684\u903b\u8f91\u662f\uff0cclassReader \u8bfb\u53d6\u5b57\u8282\u7801\uff0c\u7136\u540e\u4ea4\u7ed9 MyClassVisitor \u7c7b\u5904\u7406\uff0c\u5904\u7406\u5b8c\u6210\u540e\u7531 ClassWriter \u5199\u5b57\u8282\u7801\u5e76\u5c06\u65e7\u7684\u5b57\u8282\u7801\u66ff\u6362\u6389\u3002Generator \u7c7b\u8f83\u7b80\u5355\uff0c\u6211\u4eec\u5148\u770b\u4e00\u4e0b\u5b83\u7684\u5b9e\u73b0\uff0c\u5982\u4e0b\u6240\u793a\uff0c\u7136\u540e\u91cd\u70b9\u89e3\u91ca MyClassVisitor \u7c7b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import org.objectweb.asm.ClassReader;\nimport org.objectweb.asm.ClassVisitor;\nimport org.objectweb.asm.ClassWriter;\n\npublic class Generator {\n    public static void main(String[] args) throws Exception {\n                //\u8bfb\u53d6\n        ClassReader classReader = new ClassReader("meituan/bytecode/asm/Base");\n        ClassWriter classWriter = new ClassWriter(ClassWriter.COMPUTE_MAXS);\n        //\u5904\u7406\n        ClassVisitor classVisitor = new MyClassVisitor(classWriter);\n        classReader.accept(classVisitor, ClassReader.SKIP_DEBUG);\n        byte[] data = classWriter.toByteArray();\n        //\u8f93\u51fa\n        File f = new File("operation-server/target/classes/meituan/bytecode/asm/Base.class");\n        FileOutputStream fout = new FileOutputStream(f);\n        fout.write(data);\n        fout.close();\n        System.out.println("now generator cc success!!!!!");\n    }\n}\n')),(0,i.kt)("p",null,"MyClassVisitor \u7ee7\u627f\u81ea ClassVisitor\uff0c\u7528\u4e8e\u5bf9\u5b57\u8282\u7801\u7684\u89c2\u5bdf\u3002\u5b83\u8fd8\u5305\u542b\u4e00\u4e2a\u5185\u90e8\u7c7b MyMethodVisitor\uff0c\u7ee7\u627f\u81ea MethodVisitor \u7528\u4e8e\u5bf9\u7c7b\u5185\u65b9\u6cd5\u7684\u89c2\u5bdf\uff0c\u5b83\u7684\u6574\u4f53\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import org.objectweb.asm.ClassVisitor;\nimport org.objectweb.asm.MethodVisitor;\nimport org.objectweb.asm.Opcodes;\n\npublic class MyClassVisitor extends ClassVisitor implements Opcodes {\n    public MyClassVisitor(ClassVisitor cv) {\n        super(ASM5, cv);\n    }\n    @Override\n    public void visit(int version, int access, String name, String signature,\n                      String superName, String[] interfaces) {\n        cv.visit(version, access, name, signature, superName, interfaces);\n    }\n    @Override\n    public MethodVisitor visitMethod(int access, String name, String desc, String signature, String[] exceptions) {\n        MethodVisitor mv = cv.visitMethod(access, name, desc, signature,\n                exceptions);\n        //Base\u7c7b\u4e2d\u6709\u4e24\u4e2a\u65b9\u6cd5\uff1a\u65e0\u53c2\u6784\u9020\u4ee5\u53caprocess\u65b9\u6cd5\uff0c\u8fd9\u91cc\u4e0d\u589e\u5f3a\u6784\u9020\u65b9\u6cd5\n        if (!name.equals("<init>") && mv != null) {\n            mv = new MyMethodVisitor(mv);\n        }\n        return mv;\n    }\n    class MyMethodVisitor extends MethodVisitor implements Opcodes {\n        public MyMethodVisitor(MethodVisitor mv) {\n            super(Opcodes.ASM5, mv);\n        }\n\n        @Override\n        public void visitCode() {\n            super.visitCode();\n            mv.visitFieldInsn(GETSTATIC, "java/lang/System", "out", "Ljava/io/PrintStream;");\n            mv.visitLdcInsn("start");\n            mv.visitMethodInsn(INVOKEVIRTUAL, "java/io/PrintStream", "println", "(Ljava/lang/String;)V", false);\n        }\n        @Override\n        public void visitInsn(int opcode) {\n            if ((opcode >= Opcodes.IRETURN && opcode <= Opcodes.RETURN)\n                    || opcode == Opcodes.ATHROW) {\n                //\u65b9\u6cd5\u5728\u8fd4\u56de\u4e4b\u524d\uff0c\u6253\u5370"end"\n                mv.visitFieldInsn(GETSTATIC, "java/lang/System", "out", "Ljava/io/PrintStream;");\n                mv.visitLdcInsn("end");\n                mv.visitMethodInsn(INVOKEVIRTUAL, "java/io/PrintStream", "println", "(Ljava/lang/String;)V", false);\n            }\n            mv.visitInsn(opcode);\n        }\n    }\n}\n')),(0,i.kt)("p",null,"\u5229\u7528\u8fd9\u4e2a\u7c7b\u5c31\u53ef\u4ee5\u5b9e\u73b0\u5bf9\u5b57\u8282\u7801\u7684\u4fee\u6539\u3002\u8be6\u7ec6\u89e3\u8bfb\u5176\u4e2d\u7684\u4ee3\u7801\uff0c\u5bf9\u5b57\u8282\u7801\u505a\u4fee\u6539\u7684\u6b65\u9aa4\u662f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9996\u5148\u901a\u8fc7 MyClassVisitor \u7c7b\u4e2d\u7684 visitMethod \u65b9\u6cd5\uff0c\u5224\u65ad\u5f53\u524d\u5b57\u8282\u7801\u8bfb\u5230\u54ea\u4e00\u4e2a\u65b9\u6cd5\u4e86\u3002\u8df3\u8fc7\u6784\u9020\u65b9\u6cd5",(0,i.kt)("inlineCode",{parentName:"li"},"<init>"),"\u540e\uff0c\u5c06\u9700\u8981\u88ab\u589e\u5f3a\u7684\u65b9\u6cd5\u4ea4\u7ed9\u5185\u90e8\u7c7b MyMethodVisitor \u6765\u8fdb\u884c\u5904\u7406\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u63a5\u4e0b\u6765\uff0c\u8fdb\u5165\u5185\u90e8\u7c7b MyMethodVisitor \u4e2d\u7684 visitCode \u65b9\u6cd5\uff0c\u5b83\u4f1a\u5728 ASM \u5f00\u59cb\u8bbf\u95ee\u67d0\u4e00\u4e2a\u65b9\u6cd5\u7684 Code \u533a\u65f6\u88ab\u8c03\u7528\uff0c\u91cd\u5199 visitCode \u65b9\u6cd5\uff0c\u5c06 AOP \u4e2d\u7684\u524d\u7f6e\u903b\u8f91\u5c31\u653e\u5728\u8fd9\u91cc\uff1b"),(0,i.kt)("li",{parentName:"ul"},"MyMethodVisitor \u7ee7\u7eed\u8bfb\u53d6\u5b57\u8282\u7801\u6307\u4ee4\uff0c\u6bcf\u5f53 ASM \u8bbf\u95ee\u5230\u65e0\u53c2\u6570\u6307\u4ee4\u65f6\uff0c\u90fd\u4f1a\u8c03\u7528 MyMethodVisitor \u4e2d\u7684 visitInsn \u65b9\u6cd5\u3002\u6211\u4eec\u5224\u65ad\u4e86\u5f53\u524d\u6307\u4ee4\u662f\u5426\u4e3a\u65e0\u53c2\u6570\u7684\u201creturn\u201d\u6307\u4ee4\uff0c\u5982\u679c\u662f\u5c31\u5728\u5b83\u7684\u524d\u9762\u6dfb\u52a0\u4e00\u4e9b\u6307\u4ee4\uff0c\u4e5f\u5c31\u662f\u5c06 AOP \u7684\u540e\u7f6e\u903b\u8f91\u653e\u5728\u8be5\u65b9\u6cd5\u4e2d;"),(0,i.kt)("li",{parentName:"ul"},'\u7efc\u4e0a\uff0c\u91cd\u5199 MyMethodVisitor \u4e2d\u7684\u4e24\u4e2a\u65b9\u6cd5\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0 AOP \u4e86\uff0c\u800c\u91cd\u5199\u65b9\u6cd5\u65f6\u5c31\u9700\u8981\u7528 ASM \u7684\u5199\u6cd5\uff0c\u624b\u52a8\u5199\u5165\u6216\u8005\u4fee\u6539\u5b57\u8282\u7801\u3002\u901a\u8fc7\u8c03\u7528 methodVisitor \u7684 visitXXXXInsn()\u65b9\u6cd5\u5c31\u53ef\u4ee5\u5b9e\u73b0\u5b57\u8282\u7801\u7684\u63d2\u5165\uff0cXXXX \u5bf9\u5e94\u76f8\u5e94\u7684\u64cd\u4f5c\u7801\u52a9\u8bb0\u7b26\u7c7b\u578b\uff0c\u6bd4\u5982 mv.visitLdcInsn("end")\u5bf9\u5e94\u7684\u64cd\u4f5c\u7801\u5c31\u662f ldc "end"\uff0c\u5373\u5c06\u5b57\u7b26\u4e32\u201cend\u201d\u538b\u5165\u6808;')),(0,i.kt)("p",null,"\u5b8c\u6210\u8fd9\u4e24\u4e2a visitor \u7c7b\u540e\uff0c\u8fd0\u884c Generator \u4e2d\u7684 main \u65b9\u6cd5\u5b8c\u6210\u5bf9 Base \u7c7b\u7684\u5b57\u8282\u7801\u589e\u5f3a\uff0c\u589e\u5f3a\u540e\u7684\u7ed3\u679c\u53ef\u4ee5\u5728\u7f16\u8bd1\u540e\u7684 target \u6587\u4ef6\u5939\u4e2d\u627e\u5230 Base.class \u6587\u4ef6\u8fdb\u884c\u67e5\u770b\uff0c\u53ef\u4ee5\u770b\u5230\u53cd\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u5df2\u7ecf\u6539\u53d8\u4e86\uff08\u5982\u56fe 18 \u5de6\u4fa7\u6240\u793a\uff09\u3002\u7136\u540e\u5199\u4e00\u4e2a\u6d4b\u8bd5\u7c7b MyTest\uff0c\u5728\u5176\u4e2d new Base()\uff0c\u5e76\u8c03\u7528 base.process()\u65b9\u6cd5\uff0c\u53ef\u4ee5\u770b\u5230\u4e0b\u56fe\u53f3\u4fa7\u6240\u793a\u7684 AOP \u5b9e\u73b0\u6548\u679c\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"asm2.png",src:n(84797).Z,width:"640",height:"188"}),"\n\u56fe 18 ASM \u5b9e\u73b0 AOP \u7684\u6548\u679c"),(0,i.kt)("h2",{id:"asm-\u5de5\u5177"},"ASM \u5de5\u5177"),(0,i.kt)("p",null,"\u5229\u7528 ASM \u624b\u5199\u5b57\u8282\u7801\u65f6\uff0c\u9700\u8981\u5229\u7528\u4e00\u7cfb\u5217 visitXXXXInsn()\u65b9\u6cd5\u6765\u5199\u5bf9\u5e94\u7684\u52a9\u8bb0\u7b26\uff0c\u6240\u4ee5\u9700\u8981\u5148\u5c06\u6bcf\u4e00\u884c\u6e90\u4ee3\u7801\u8f6c\u5316\u4e3a\u4e00\u4e2a\u4e2a\u7684\u52a9\u8bb0\u7b26\uff0c\u7136\u540e\u901a\u8fc7 ASM \u7684\u8bed\u6cd5\u8f6c\u6362\u4e3a visitXXXXInsn()\u8fd9\u79cd\u5199\u6cd5\u3002\u7b2c\u4e00\u6b65\u5c06\u6e90\u7801\u8f6c\u5316\u4e3a\u52a9\u8bb0\u7b26\u5c31\u5df2\u7ecf\u591f\u9ebb\u70e6\u4e86\uff0c\u4e0d\u719f\u6089\u5b57\u8282\u7801\u64cd\u4f5c\u96c6\u5408\u7684\u8bdd\uff0c\u9700\u8981\u6211\u4eec\u5c06\u4ee3\u7801\u7f16\u8bd1\u540e\u518d\u53cd\u7f16\u8bd1\uff0c\u624d\u80fd\u5f97\u5230\u6e90\u4ee3\u7801\u5bf9\u5e94\u7684\u52a9\u8bb0\u7b26\u3002\u7b2c\u4e8c\u6b65\u5229\u7528 ASM \u5199\u5b57\u8282\u7801\u65f6\uff0c\u5982\u4f55\u4f20\u53c2\u4e5f\u5f88\u4ee4\u4eba\u5934\u75bc\u3002ASM \u793e\u533a\u4e5f\u77e5\u9053\u8fd9\u4e24\u4e2a\u95ee\u9898\uff0c\u6240\u4ee5\u63d0\u4f9b\u4e86\u5de5\u5177",(0,i.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/5918-asm-bytecode-outline"},"ASM ByteCode Outline"),"\u3002"),(0,i.kt)("p",null,"\u5b89\u88c5\u540e\uff0c\u53f3\u952e\u9009\u62e9\u201cShow Bytecode Outline\u201d\uff0c\u5728\u65b0\u6807\u7b7e\u9875\u4e2d\u9009\u62e9\u201cASMified\u201d\u8fd9\u4e2a tab\uff0c\u5982\u56fe 19 \u6240\u793a\uff0c\u5c31\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a\u7c7b\u4e2d\u7684\u4ee3\u7801\u5bf9\u5e94\u7684 ASM \u5199\u6cd5\u4e86\u3002\u56fe\u4e2d\u4e0a\u4e0b\u4e24\u4e2a\u7ea2\u6846\u5206\u522b\u5bf9\u5e94 AOP \u4e2d\u7684\u524d\u7f6e\u903b\u8f91\u4e8e\u540e\u7f6e\u903b\u8f91\uff0c\u5c06\u8fd9\u4e24\u5757\u76f4\u63a5\u590d\u5236\u5230 visitor \u4e2d\u7684 visitMethod()\u4ee5\u53ca visitInsn()\u65b9\u6cd5\u4e2d\uff0c\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"asm3.png",src:n(25216).Z,width:"520",height:"424"}),"\n\u56fe 19 ASM Bytecode Outline"))}m.isMDXComponent=!0},83474:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/asm1-ac9263f7b65f86e06464ddf90396a51e.png"},84797:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/asm2-fe7d2d90dee3fb4b67cf349bf412deaf.png"},25216:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/asm3-b94b42c283b39c28d9ffb1b4d7822029.png"}}]);