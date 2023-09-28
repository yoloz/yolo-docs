参考：[调用本地方法的利器 JNA](https://juejin.cn/post/7073051794359713805)

JAVA 是可以调用本地方法的，官方提供的调用方式叫做 JNI，全称叫做 java native interface。要想使用 JNI，我们需要在 JAVA 代码中定义 native 方法，然后通过 javah 命令创建 C 语言的头文件，接着使用 C 或者 C++语言来实现这个头文件中的方法，编译源代码，最后将编译后的文件引入到 JAVA 的 classpath 中运行。

> JNA provides Java programs easy access to native shared libraries without writing anything but Java code - no JNI or native code is required.

JNA 的全称是 Java Native Access,它为我们提供了一种更加简单的方式来访问本地的共享库资源，如果你使用 JNA，那么你只需要编写相应的 java 代码即可，不需要编写 JNI 或者本地代码,非常的方便。

JNA 就是一个 jar 包：

```xml
<dependency>
    <groupId>net.java.dev.jna</groupId>
    <artifactId>jna</artifactId>
    <version>5.13.0</version>
</dependency>
```

jar 包里面除了包含有基本的 JAVA class 文件之外，还有很多和平台相关的文件，这些平台相关的文件夹下面都是 `libjnidispatch*`的库文件。JNA 的本质就是将大多数 native 的方法封装到 jar 包中的动态库中，并且提供了一系列的机制来自动加载这个动态库。

类型对应关系：[http://java-native-access.github.io/jna/5.13.0/javadoc/overview-summary.html#marshalling](http://java-native-access.github.io/jna/5.13.0/javadoc/overview-summary.html#marshalling)

JNA 加载 native lib 的流程如下：

## 确认本地文件及调用函数

已经存在本地文件(dll 或 so),这里手动创建 nativemethod.c:

```c
#include <string.h>
#include<assert.h>

int intMethod(int i)
{
    return i * i;
}

int booleanMethod(int b)
{
    return b > 0 ? 1 : 0;
}

char *stringMethod(char *str)
{
    assert(str);         // str的非空性
    char *ret = str;     // 定义一个ret保存最初的str
    while (*str != '\0') // 判断字符串是否结束
    {
        if ((*str >= 'a') && (*str <= 'z')) // 判断当前的字符是否是小写字母
        {
            *str = *str - 32; // 将其转化为大写字母
            str++;
        }
        else
        {
            str++;
        }
    }
    return ret; // 返回该字符串数组的首地址
}

int intArrayMethod(int *array)
{
    int i, sum = 0;
    int len = sizeof(array);
    for (i = 0; i < len + 1; i++)
    {
        sum += array[i];
    }
    // free(array);
    return sum;
}
```

生成本地文件：

```bash
#
yoloz@debian:~/projects/xxx/sample/jna$ gcc -shared -fPIC -o libnativemethod.so nativemethod.c
```

## 编写调用本地函数的 java 代码

创建调用本地函数的 java 文件(JNASample.java):

```java
package indi.yolo.sample.jna;

import com.sun.jna.Library;
import com.sun.jna.Native;

/**
 * @author yoloz
 */
public class JNASample {

    public interface CLibrary extends Library {

        //CLibrary INSTANCE = Native.load((Platform.isWindows() ? "msvcrt" : "c"), CLibrary.class);
        //加载nativemethod，并使用其中的函数
        CLibrary INSTANCE = Native.load("nativemethod", CLibrary.class);

        int intMethod(int n);

        boolean booleanMethod(boolean bool);

        String stringMethod(String text);

        int intArrayMethod(int[] intArray);
    }

    public static void main(String[] args) {
        CLibrary cLibrary = CLibrary.INSTANCE;
        int square = cLibrary.intMethod(5);
        boolean bool = cLibrary.booleanMethod(true);
        String text = cLibrary.stringMethod("java");
        int sum = cLibrary.intArrayMethod(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 13});

        System.out.println("intMethod: " + square);
        System.out.println("booleanMethod:" + bool);
        System.out.println("stringMethod:" + text);
        System.out.println("intArrayMethod:" + sum);
    }

}

```

## 编译运行

```bash
yoloz@debian:~/projects/xxx/sample/jna$ /opt/jdk-8/bin/javac -cp /xxx/jna-5.13.0.jar -d . JNASample.java
# 添加JVM参数：-Djna.debug_load=true输出详情
yoloz@debian:~/projects/xxx/sample/jna$ /opt/jdk-8/bin/java -cp /xxx/5.13.0/jna-5.13.0.jar:. -Djava.library.path=. indi.yolo.sample.jna.JNASample
```

## java.lang.UnsatisfiedLinkError

```log
PS C:\java> .\jre1.8.0_361\bin\java.exe -cp ".;.\jna-5.13.0.jar" indi.yolo.sample.jna.JNAGoSample
Exception in thread "main" java.lang.UnsatisfiedLinkError: Unable to load library 'C:\java\libtest.dll':
%1 不是有效的 Win32 应用程序。

%1 不是有效的 Win32 应用程序。
Native library (win32-x86-64/C:\java\libtest.dll) not found in resource path ([file:/C:/java/, file:/C:/java/jna-5.13.0.jar])
        at com.sun.jna.NativeLibrary.loadLibrary(NativeLibrary.java:323)
        at com.sun.jna.NativeLibrary.getInstance(NativeLibrary.java:483)
        at com.sun.jna.Library$Handler.<init>(Library.java:197)
        at com.sun.jna.Native.load(Native.java:622)
        at com.sun.jna.Native.load(Native.java:596)
        at indi.yolo.sample.jna.JNAGoSample$CLibrary.<clinit>(JNAGoSample.java:13)
        at indi.yolo.sample.jna.JNAGoSample.main(JNAGoSample.java:31)
        Suppressed: java.lang.UnsatisfiedLinkError: %1 不是有效的 Win32 应用程序。

                at com.sun.jna.Native.open(Native Method)
                at com.sun.jna.NativeLibrary.loadLibrary(NativeLibrary.java:211)
                ... 6 more
        Suppressed: java.lang.UnsatisfiedLinkError: %1 不是有效的 Win32 应用程序。

                at com.sun.jna.Native.open(Native Method)
                at com.sun.jna.NativeLibrary.loadLibrary(NativeLibrary.java:224)
                ... 6 more
        Suppressed: java.io.IOException: Native library (win32-x86-64/C:\java\libtest.dll) not found in resource path ([file:/C:/java/, file:/C:/java/jna-5.13.0.jar])
                at com.sun.jna.Native.extractFromResourcePath(Native.java:1145)
                at com.sun.jna.NativeLibrary.loadLibrary(NativeLibrary.java:295)
                ... 6 more
```

主要是 3 种原因：

- 本地文件没有放置到 classpath；
- 本地文件版本与 jdk 版本不一致，如 dll、so 为 32 位，jdk 为 64 位；
- 本地文件依赖的其它库不存在，如 so 依赖的其它 so 不存在，则 so 本身就不能运行，自然会报错；
  - 判断 dll 是否依赖其它 dll，可以使用工具或向系统中注册 dll，能注册成功即是 dll 依赖正常。
  - 判断 so 是否依赖其它 so，使用 ldd 命令，如果有缺失，会出现 xx.so not found 字样。

此处错误在`libtest.dll`在 linux 中生成，在 window 中安装 mingw64 后编译生成 libtest.dll 即可使用。