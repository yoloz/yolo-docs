ASM 是在指令层次上操作字节码的[字节码增强-asm](./字节码增强-asm.md)，在指令层次上操作字节码的框架实现起来较晦涩。另外一类框架强调源代码层次操作字节码如：Javassist。

利用 Javassist 实现字节码增强时，可以无须关注字节码刻板的结构，其优点就在于编程简单。直接使用 java 编码的形式，而不需要了解虚拟机指令，就能动态改变类的结构或者动态生成类。其中最重要的是 ClassPool、CtClass、CtMethod、CtField 这四个类：

- CtClass（compile-time class）：编译时类信息，它是一个 class 文件在代码中的抽象表现形式，可以通过一个类的全限定名来获取一个 CtClass 对象，用来表示这个类文件。
- ClassPool：从开发视角来看，ClassPool 是一张保存 CtClass 信息的 HashTable，key 为类名，value 为类名对应的 CtClass 对象。当我们需要对某个类进行修改时，就是通过 pool.getCtClass("className")方法从 pool 中获取到相应的 CtClass。
- CtMethod、CtField：这两个比较好理解，对应的是类中的方法和属性。

了解这四个类后，我们可以写一个小 Demo 来展示 Javassist 简单、快速的特点。我们依然是对 Base 中的 process()方法做增强，在方法调用前后分别输出"start"和"end"，实现代码如下。我们需要做的就是从 pool 中获取到相应的 CtClass 对象和其中的方法，然后执行 method.insertBefore 和 insertAfter 方法，参数为要插入的 Java 代码，再以字符串的形式传入即可，实现起来也极为简单。

```java
import com.meituan.mtrace.agent.javassist.*;

public class JavassistTest {
    public static void main(String[] args) throws NotFoundException, CannotCompileException, IllegalAccessException, InstantiationException, IOException {
        ClassPool cp = ClassPool.getDefault();
        CtClass cc = cp.get("meituan.bytecode.javassist.Base");
        CtMethod m = cc.getDeclaredMethod("process");
        m.insertBefore("{ System.out.println(\"start\"); }");
        m.insertAfter("{ System.out.println(\"end\"); }");
        Class c = cc.toClass();
        cc.writeFile("/Users/zen/projects");
        Base h = (Base)c.newInstance();
        h.process();
    }
}
```

## javassist 在 SpringBoot 环境下找不到类的问题

关于类装载器，具体的这里不展开，只简单说一下要点：

- 类装载器（以下简称 CL）负责将类装入虚拟机
- java 内置三种 CL：application 应用、extension 扩展和 bootstrap 引导
  - 引导 CL：负责装载 JDK 内部类，包括 rt.jar 和 jre/lib/目录下其他核心库中的类，它也是所有装载器的爸爸
  - 扩展 CL：负责装载标准核心 java 类的扩展类（lib/ext 等），它是引导 CL 的儿子
  - 应用 CL：或称系统 CL，负责装载所有应用级的类，它是扩展 CL 的儿子
- 委托模型：要装载某个类时，CL 会先委托给自己的爸爸，最后才会由自己来装载
- 自定义 CL：当内置的 CL 无法满足需求时，可以自定义 CL，例如 SpringBoot 就有自己的 CL，专门用来从它那个结构特殊的 jar 包中装载类
- 类的可见性：儿子装载的类可以看到爸爸装载的类，但反过来不行——爸爸装载的类看不到儿子装载的类（可怜天下父母心）

好了，那么上面问题的根源，就是 javassist 想要找的这个类，其实是放在 SpringBoot 那个特殊的包里，而它用的装载器（应用 CL）却只会在类路径里（-classpth）里去找一圈，结果当然是找不到。

> By default, Javassist only looks up classes from the class path. But Spring Boot uses its own class loader hierarchy when bundling it in a self-executable. You need to register this class loader manually.

- 手动注册类加载器

[javassist not working with spring boot jar](https://stackoverflow.com/questions/48437113/javassist-not-working-with-spring-boot-jar)

```java
ClassPool classPool = ClassPool.getDefault();
//将当前ClassLoader添加到ClassPath
classPool.appendClassPath(new LoaderClassPath(Thread.currentThread().getContextClassLoader()));
//Your Code...
```

- 或者获取`SpringBoot`的类装载器

> 这个装载器本身是由应用 CL 来装载的，所以 javassist 默认情况下就能看到。

```java
public class CustomTransFormer implements ClassFileTransformer {

    public byte[] transform(ClassLoader loader, String className, Class<?> classBeingRedefined,
                            ProtectionDomain protectionDomain, byte[] classfileBuffer) {
        try {
            if (className == null || !className.equals("org/springframework/boot/loader/LaunchedURLClassLoader")) {
                return classfileBuffer;
            }
            System.out.println("********Transforming " + className);
            ClassPool classPool = ClassPool.getDefault();
            CtClass ctClass = classPool.makeClass(new java.io.ByteArrayInputStream(classfileBuffer));
            CtConstructor[] ctConstructors = ctClass.getDeclaredConstructors();
            ctConstructors[0].insertAfter("com.zhds.jdbc.extend.CustomTransFormer.modifyClass(this);");
            return ctClass.toBytecode();
        } catch (Exception e) {
            System.err.println("Could not instrument  " + className + ",  exception : " + e);
        }
        return classfileBuffer;
    }

    public static void modifyClass(ClassLoader classLoader) {
        try {
            ClassPool classPool = ClassPool.getDefault();
            classPool.appendClassPath(new LoaderClassPath(classLoader));
            CtClass ctClass = classPool.get("org.springframework.web.servlet.FrameworkServlet");
            System.out.println("********Transforming " + ctClass.getPackageName());
            CtMethod ctMethod = ctClass.getDeclaredMethod("service");
            ctMethod.insertAfter("System.out.println(\" request from:\" +request.getRemoteAddr()+\",principle:\"+  request.getUserPrincipal().getName() +\",sessionId:\"+request.getCookies()[0].getValue() +\",at:\"+ System.currentTimeMillis());");
            ctClass.toClass(classLoader, ctClass.getClass().getProtectionDomain());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```
