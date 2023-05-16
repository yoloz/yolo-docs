## System.load()与 System.loadLibrary()

两个方法都是用来装载 dll 文件，不论是 JNI 库文件还是非 JNI 库文件。本地方法在被调用时都需要通过这两发方法之一将其加载至内存

### System.load(String filename)

参数为 dll 文件的绝对路径，可以是任意路径`System.load("D:\\java\\Test.dll");`

### System.loadLibrary(String libname)

参数为 dll 文件名，不包含库文件的扩展名`System. loadLibrary ("Test");`，加载的文件在`java.library.path`这一 jvm 变量所指向的路径中。

:::warn
载入的库文件静态链接到其它动态链接库，如 Test.dll 静态链接到 dependency.dll：

- System.load() 方式
  其一，相关链接文件加入到 java.library.path 的路径中，load()方法会去路径寻找依赖库；或者手动再添加 dependency.dll：

```java
//先调用
System.load("D:\\java\\dependency.dll");
//让jvm先载入dependency.dll，然后再调用
System.load("D:\\java\\Test.dll");
```

- System. loadLibrary() 方式，链接库都在 java.library.path，会自动查找

:::

## 声明本地方法

在 Counter.java 中声明一个本地方法，并在静态代码块中加载对应的动态链接库

```java
package indi.yolo.sample.jni;

public class Counter {
    static {
        System.loadLibrary("counter");
        //  System.load("/xxx/counter.so");
    }

    // 声明本地方法
    public static native int addFromC(int a, int b);

    public static void main(String[] argv) {
        // 调用本地方法
        System.out.println("1 + 2 = " + addFromC(1, 2));
    }
}
```

:::info

- 头文件`jni.h`:${JDK_PATH}/include
- `jin.h`又包含了`jni_md.h`:${JDK_PATH}/include/linux

:::

## 实现 C 函数

Java 调用 C 函数需要做 C 函数和 Java 本地方法的映射，建立该映射有两种方式: 显式映射和隐式映射

### 显式映射

需要手动实现 JNI 的函数(略)

### 隐式映射

采用隐式映射的方式不需要去手动建立链接，JNI 规范已经使用了一套映射规范，在 C 函数中实现的函数名格式：`Java_包名_类名_Java方法名`,**需要将包名中的`.`换成`_`**

```c
#include <jni.h>

// C函数需要比Java本地方法多出两个参数，这两个参数之后的参数列表与Java本地方法保持一致
// 第一个参数表示JNI环境，该环境封装了所有JNI的操作函数
// 第二个参数为Java代码中调用该C函数的对象
// 函数名格式: Java_包名_类名_Java方法名
jint Java_indi_yolo_sample_jni_Counter_addFromC(JNIEnv *env, jobject thiz, jint a, jint b)
{
    return a + b;
}
```

编译运行:

:::warn

- System.loadLibrary()方式，生成的链接文件需要以`lib`开头(`libxxx.so`)，否则报错：`java.lang.UnsatisfiedLinkError: no counter in java.library.`
- System.load()方式，生成链接文件名称无上述要求

:::

```bash
# 生成动态链接库
yoloz@debian:~/projects/xxx$ gcc -shared -fPIC -I /opt/jdk-8/include/ -I /opt/jdk-8/include/linux/  -o libcounter.so counter.c
# 编译Java并生成完整包名路径
yoloz@debian:~/projects/xxx$ /opt/jdk-8/bin/javac -d . Counter.java
# 运行Java，并指定动态链接库的路径
yoloz@debian:~$ /opt/jdk-8/bin/java -Djava.library.path=. indi.yolo.sample.jni.Counter
```

:::note

- 参数`-d`：这个参数是用来生成包结构的，通过 javac 命令，能够自动生成 package 目录，并且能够将 class 字节码文件放在对应目录的下面；
- 参数`.`：这个点代表当前目录，当然也可以改为其他目录；

:::
