对于需要手动操纵字节码的需求，可以使用 ASM，它可以直接生产 `.class` 字节码文件，也可以在类被加载入 JVM 之前动态修改类行为（如下图 17 所示）。ASM 的应用场景有 AOP（Cglib 就是基于 ASM）、热部署、修改其他 jar 包中的类等。当然，涉及到如此底层的步骤，实现起来也比较麻烦。接下来，本文将介绍 ASM 的两种 API，并用 ASM 来实现一个比较粗糙的 AOP。但在此之前，为了让大家更快地理解 ASM 的处理流程，强烈建议读者先对访问者模式进行了解。简单来说，访问者模式主要用于修改或操作一些数据结构比较稳定的数据，而通过第一章，我们知道字节码文件的结构是由 JVM 固定的，所以很适合利用访问者模式对字节码文件进行修改。

![asm1.png](/docs/jvm/asm1.png)
图 17 ASM 修改字节码

## ASM API

### 核心 API

ASM Core API 可以类比解析 XML 文件中的 SAX 方式，不需要把这个类的整个结构读取进来，就可以用流式的方法来处理字节码文件。好处是非常节约内存，但是编程难度较大。然而出于性能考虑，一般情况下编程都使用 Core API。在 Core API 中有以下几个关键类：

- ClassReader：用于读取已经编译好的.class 文件。
- ClassWriter：用于重新构建编译后的类，如修改类名、属性以及方法，也可以生成新的类的字节码文件。
- 各种 Visitor 类：如上所述，CoreAPI 根据字节码从上到下依次处理，对于字节码文件中不同的区域有不同的 Visitor，比如用于访问方法的 MethodVisitor、用于访问类变量的 FieldVisitor、用于访问注解的 AnnotationVisitor 等。为了实现 AOP，重点要使用的是 MethodVisitor。

### 树形 API

ASM Tree API 可以类比解析 XML 文件中的 DOM 方式，把整个类的结构读取到内存中，缺点是消耗内存多，但是编程比较简单。TreeApi 不同于 CoreAPI，TreeAPI 通过各种 Node 类来映射字节码的各个区域，类比 DOM 节点，就可以很好地理解这种编程方式。

## 直接利用 ASM 实现 AOP

利用 ASM 的 CoreAPI 来增强类。这里不纠结于 AOP 的专业名词如切片、通知，只实现在方法调用前、后增加逻辑，通俗易懂且方便理解。首先定义需要被增强的 Base 类：其中只包含一个 process()方法，方法内输出一行“process”。增强后，我们期望的是，方法执行前输出“start”，之后输出"end"。

```java
public class Base {
    public void process(){
        System.out.println("process");
    }
}
```

为了利用 ASM 实现 AOP，需要定义两个类：一个是 MyClassVisitor 类，用于对字节码的 visit 以及修改；另一个是 Generator 类，在这个类中定义 ClassReader 和 ClassWriter，其中的逻辑是，classReader 读取字节码，然后交给 MyClassVisitor 类处理，处理完成后由 ClassWriter 写字节码并将旧的字节码替换掉。Generator 类较简单，我们先看一下它的实现，如下所示，然后重点解释 MyClassVisitor 类。

```java
import org.objectweb.asm.ClassReader;
import org.objectweb.asm.ClassVisitor;
import org.objectweb.asm.ClassWriter;

public class Generator {
    public static void main(String[] args) throws Exception {
                //读取
        ClassReader classReader = new ClassReader("meituan/bytecode/asm/Base");
        ClassWriter classWriter = new ClassWriter(ClassWriter.COMPUTE_MAXS);
        //处理
        ClassVisitor classVisitor = new MyClassVisitor(classWriter);
        classReader.accept(classVisitor, ClassReader.SKIP_DEBUG);
        byte[] data = classWriter.toByteArray();
        //输出
        File f = new File("operation-server/target/classes/meituan/bytecode/asm/Base.class");
        FileOutputStream fout = new FileOutputStream(f);
        fout.write(data);
        fout.close();
        System.out.println("now generator cc success!!!!!");
    }
}
```

MyClassVisitor 继承自 ClassVisitor，用于对字节码的观察。它还包含一个内部类 MyMethodVisitor，继承自 MethodVisitor 用于对类内方法的观察，它的整体代码如下：

```java
import org.objectweb.asm.ClassVisitor;
import org.objectweb.asm.MethodVisitor;
import org.objectweb.asm.Opcodes;

public class MyClassVisitor extends ClassVisitor implements Opcodes {
    public MyClassVisitor(ClassVisitor cv) {
        super(ASM5, cv);
    }
    @Override
    public void visit(int version, int access, String name, String signature,
                      String superName, String[] interfaces) {
        cv.visit(version, access, name, signature, superName, interfaces);
    }
    @Override
    public MethodVisitor visitMethod(int access, String name, String desc, String signature, String[] exceptions) {
        MethodVisitor mv = cv.visitMethod(access, name, desc, signature,
                exceptions);
        //Base类中有两个方法：无参构造以及process方法，这里不增强构造方法
        if (!name.equals("<init>") && mv != null) {
            mv = new MyMethodVisitor(mv);
        }
        return mv;
    }
    class MyMethodVisitor extends MethodVisitor implements Opcodes {
        public MyMethodVisitor(MethodVisitor mv) {
            super(Opcodes.ASM5, mv);
        }

        @Override
        public void visitCode() {
            super.visitCode();
            mv.visitFieldInsn(GETSTATIC, "java/lang/System", "out", "Ljava/io/PrintStream;");
            mv.visitLdcInsn("start");
            mv.visitMethodInsn(INVOKEVIRTUAL, "java/io/PrintStream", "println", "(Ljava/lang/String;)V", false);
        }
        @Override
        public void visitInsn(int opcode) {
            if ((opcode >= Opcodes.IRETURN && opcode <= Opcodes.RETURN)
                    || opcode == Opcodes.ATHROW) {
                //方法在返回之前，打印"end"
                mv.visitFieldInsn(GETSTATIC, "java/lang/System", "out", "Ljava/io/PrintStream;");
                mv.visitLdcInsn("end");
                mv.visitMethodInsn(INVOKEVIRTUAL, "java/io/PrintStream", "println", "(Ljava/lang/String;)V", false);
            }
            mv.visitInsn(opcode);
        }
    }
}
```

利用这个类就可以实现对字节码的修改。详细解读其中的代码，对字节码做修改的步骤是：

- 首先通过 MyClassVisitor 类中的 visitMethod 方法，判断当前字节码读到哪一个方法了。跳过构造方法`<init>`后，将需要被增强的方法交给内部类 MyMethodVisitor 来进行处理；
- 接下来，进入内部类 MyMethodVisitor 中的 visitCode 方法，它会在 ASM 开始访问某一个方法的 Code 区时被调用，重写 visitCode 方法，将 AOP 中的前置逻辑就放在这里；
- MyMethodVisitor 继续读取字节码指令，每当 ASM 访问到无参数指令时，都会调用 MyMethodVisitor 中的 visitInsn 方法。我们判断了当前指令是否为无参数的“return”指令，如果是就在它的前面添加一些指令，也就是将 AOP 的后置逻辑放在该方法中;
- 综上，重写 MyMethodVisitor 中的两个方法，就可以实现 AOP 了，而重写方法时就需要用 ASM 的写法，手动写入或者修改字节码。通过调用 methodVisitor 的 visitXXXXInsn()方法就可以实现字节码的插入，XXXX 对应相应的操作码助记符类型，比如 mv.visitLdcInsn("end")对应的操作码就是 ldc "end"，即将字符串“end”压入栈;

完成这两个 visitor 类后，运行 Generator 中的 main 方法完成对 Base 类的字节码增强，增强后的结果可以在编译后的 target 文件夹中找到 Base.class 文件进行查看，可以看到反编译后的代码已经改变了（如图 18 左侧所示）。然后写一个测试类 MyTest，在其中 new Base()，并调用 base.process()方法，可以看到下图右侧所示的 AOP 实现效果：

![asm2.png](/docs/jvm/asm2.png)
图 18 ASM 实现 AOP 的效果

## ASM 工具

利用 ASM 手写字节码时，需要利用一系列 visitXXXXInsn()方法来写对应的助记符，所以需要先将每一行源代码转化为一个个的助记符，然后通过 ASM 的语法转换为 visitXXXXInsn()这种写法。第一步将源码转化为助记符就已经够麻烦了，不熟悉字节码操作集合的话，需要我们将代码编译后再反编译，才能得到源代码对应的助记符。第二步利用 ASM 写字节码时，如何传参也很令人头疼。ASM 社区也知道这两个问题，所以提供了工具[ASM ByteCode Outline](https://plugins.jetbrains.com/plugin/5918-asm-bytecode-outline)。

安装后，右键选择“Show Bytecode Outline”，在新标签页中选择“ASMified”这个 tab，如图 19 所示，就可以看到这个类中的代码对应的 ASM 写法了。图中上下两个红框分别对应 AOP 中的前置逻辑于后置逻辑，将这两块直接复制到 visitor 中的 visitMethod()以及 visitInsn()方法中，就可以了。

![asm3.png](/docs/jvm/asm3.png)
图 19 ASM Bytecode Outline
