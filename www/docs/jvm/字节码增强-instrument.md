instrument 是 JVM 提供的一个可以修改已加载类的类库，专门为 Java 语言编写的插桩服务提供支持。它需要依赖 JVMTI 的 Attach API 机制实现。

在 JDK 1.6 以前，instrument 只能在 JVM 刚启动开始加载类时生效，而在 JDK 1.6 之后，instrument 支持了在运行时对类定义的修改。

要使用 instrument 的类修改功能，我们需要实现它提供的 ClassFileTransformer 接口，定义一个类文件转换器。接口中的 transform()方法会在类文件被加载时调用，而在 transform 方法里，我们可以利用[ASM](./字节码增强-asm.md) 或 [Javassist](./字节码增强-javassist.md) 对传入的字节码进行改写或替换，生成新的字节码数组后返回。

我们定义一个实现了 ClassFileTransformer 接口的类 TestTransformer，依然在其中利用 Javassist 对 Base 类中的 process()方法进行增强，在前后分别打印 start 和 end，代码如下：

```java
import java.lang.instrument.ClassFileTransformer;

public class TestTransformer implements ClassFileTransformer {
    @Override
    public byte[] transform(ClassLoader loader, String className, Class<?> classBeingRedefined, ProtectionDomain protectionDomain, byte[] classfileBuffer) {
        System.out.println("Transforming " + className);
        try {
            ClassPool cp = ClassPool.getDefault();
            CtClass cc = cp.get("meituan.bytecode.jvmti.Base");
            CtMethod m = cc.getDeclaredMethod("process");
            m.insertBefore("{ System.out.println(\"start\"); }");
            m.insertAfter("{ System.out.println(\"end\"); }");
            return cc.toBytecode();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
```

现在有了 Transformer，还需要定义一个 Agent,将 Instrument 注入到 JVM 中。现在要介绍 Agent 中用到的另一个类 Instrumentation。在 JDK 1.6 之后，Instrumentation 可以做启动后的 Instrument、本地代码（Native Code）的 Instrument，以及动态改变 Classpath 等等。我们可以向 Instrumentation 中添加上文中定义的 Transformer，并指定要被重加载的类，代码如下所示。这样，当 Agent 被 Attach 到一个 JVM 中时，就会执行类字节码替换并重载入 JVM 的操作。

```java
import java.lang.instrument.Instrumentation;

public class TestAgent {
    public static void agentmain(String args, Instrumentation inst) {
        //指定我们自己定义的Transformer，在其中利用Javassist做字节码替换
        inst.addTransformer(new TestTransformer(), true);
        try {
            //重定义类并载入新的字节码
            inst.retransformClasses(Base.class);
            System.out.println("Agent Load Done.");
        } catch (Exception e) {
            System.out.println("agent load failed!");
        }
    }
}
```

对于启动时加载如下：

```java
public class TestAgent {
    public static void premain(String args, Instrumentation inst) {
        //指定我们自己定义的Transformer，在其中利用Javassist做字节码替换
        inst.addTransformer(new TestTransformer());
    }
}
```

将 TestAgent 类打成一个包含 MANIFEST.MF 的 jar 包，并在启动参数(VM options)中添加`-javaagent:TestAgent.jar`,其中 MANIFEST.MF 文件中将 `Premain-Class` 属性指定为 TestAgent 的全限定名，如下所示；

```xml
 <plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-jar-plugin</artifactId>
    <version>2.4</version>
    <configuration>
        <archive>
            <manifestEntries>
                <Premain-Class>xx.xx.xx.TestAgent</Premain-Class>
                <Boot-Class-Path>javassist-3.27.0-GA.jar</Boot-Class-Path>
            </manifestEntries>
        </archive>
    </configuration>
</plugin>
```

- 在 java5 中，可以利用 jvm 加载类的一个扩展点来实现类文件的动态修改,需要提供一个`premain`方法。缺点是只能在类文件加载且 main 方法执行之前修改，无法实现真正的运行时修改;
- 在 java6 中，可以使用 attach API 实现真正的运行时修改，需要提供一个`agentmain`方法。大致原理是使用 agent attach api 附到待更新的 jvm 上，然后动态加载 agent，agent 与 premain 里的几乎相同，只不过这里是在 jvm 已经运行起来以后加载;

二者的加载 agent 时机不同：`premain` 是虚拟机启动加载类时，而 `agentmain` 是虚拟机起来以后。

## JPDA

上文我们给出了 Agent 类的代码，追根溯源需要先介绍 `JPDA（Java Platform Debugger Architecture）`。如果 JVM 启动时开启了 JPDA，那么类是允许被重新加载的。在这种情况下，已被加载的旧版本类信息可以被卸载，然后重新加载新版本的类。正如 JDPA 名称中的 Debugger，JDPA 其实是一套用于调试 Java 程序的标准，任何 JDK 都必须实现该标准。

JPDA 定义了一整套完整的体系，它将调试体系分为三部分，并规定了三者之间的通信接口。三部分由低到高分别是 `Java 虚拟机工具接口（JVMTI）`，`Java 调试协议（JDWP）`以及 `Java 调试接口（JDI）`，三者之间的关系如下图所示：

![aop4.png](/docs/jvm/aop4.png)
图 21 JPDA

### JVMTI

现在回到正题，我们可以借助 JVMTI 的一部分能力，帮助动态重载类信息。`JVMTI（JVM TOOL INTERFACE，JVM 工具接口,${JAVA_HOME}/lib/tools.jar）`是 JVM 提供的一套对 JVM 进行操作的工具接口。通过 JVMTI，可以实现对 JVM 的多种操作，它通过接口注册各种事件勾子，在 JVM 事件触发时，同时触发预定义的勾子，以实现对各个 JVM 事件的响应，事件包括类文件加载、异常产生与捕获、线程启动和结束、进入和退出临界区、成员变量修改、GC 开始和结束、方法调用进入和退出、临界区竞争与等待、VM 启动与退出等等。

### Agent

Agent 就是 JVMTI 的一种实现，Agent 有两种启动方式:

- 一是随 Java 进程启动而启动，经常见到的 `-javaagent:lib` 就是这种方式；
- 二是运行时载入，通过`attach API`，将模块（jar 包）动态地 Attach 到指定进程 id 的 Java 进程内；

### Attach API

Attach API 的作用是提供 JVM 进程间通信的能力，比如说我们为了让另外一个 JVM 进程把线上服务的线程 Dump 出来，会运行 `jstack` 或 `jmap` 的进程，并传递 `pid` 的参数，告诉它要对哪个进程进行线程 Dump，这就是 Attach API 做的事情。在下面，我们将通过 Attach API 的 `loadAgent()`方法，将打包好的 `Agent jar` 包动态 Attach 到目标 JVM 上。具体实现起来的步骤如下：

- 定义 Agent，并在其中实现 `agentMain` 方法，如上一小节中定义的代码块 7 中的 TestAgent 类；
- 然后将 TestAgent 类打成一个包含 MANIFEST.MF 的 jar 包，其中 MANIFEST.MF 文件中将 `Agent-Class` 属性指定为 TestAgent 的全限定名，如下所示；

```xml
 <plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-jar-plugin</artifactId>
    <version>2.4</version>
    <configuration>
        <archive>
            <manifestEntries>
                <Agent-Class>xx.xx.xx.TestAgent</Agent-Class>
                <Can-Redefine-Classes>true</Can-Redefine-Classes>
                <Can-Retransform-Classes>true</Can-Retransform-Classes>
                <Boot-Class-Path>javassist-3.27.0-GA.jar</Boot-Class-Path>
            </manifestEntries>
        </archive>
    </configuration>
</plugin>
```

- 最后利用 Attach API，将我们打包好的 jar 包 Attach 到指定的 JVM pid 上，代码如下：

```java
//${JAVA_HOME}/lib/tools.jar
import com.sun.tools.attach.VirtualMachine;

public class Attacher {
    public static void main(String[] args) throws AttachNotSupportedException, IOException, AgentLoadException, AgentInitializationException {
        // 传入目标 JVM pid
        VirtualMachine vm = VirtualMachine.attach("39333");
        vm.loadAgent("/Users/zen/operation_server_jar/operation-server.jar");
    }
}
```

- 由于在 MANIFEST.MF 中指定了 `Agent-Class`，所以在 Attach 后，目标 JVM 在运行时会走到 TestAgent 类中定义的 `agentmain()`方法，而在这个方法中，我们利用 Instrumentation 将指定类的字节码通过定义的类转化器 TestTransformer 做了 Base 类的字节码替换（通过 javassist），并完成了类的重新加载。由此，我们达成了在 JVM 运行时，改变类的字节码并重新载入类信息的目的。

以下为运行时重新载入类的效果：先运行 Base 中的 main()方法，启动一个 JVM，可以在控制台看到每隔五秒输出一次`process`。接着执行 Attacher 中的 main()方法，并将上一个 JVM 的 pid 传入。此时回到上一个 main()方法的控制台，可以看到现在每隔五秒输出`process`前后会分别输出`start`和`end`，也就是说完成了运行时的字节码增强，并重新载入了这个类。

![aop5.png](/docs/jvm/aop5.png)
图 23 运行时重载入类的效果
