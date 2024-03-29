参考：[在 Java 中调用 C 语言本地库](https://www.cnblogs.com/moon1992/p/5260226.html)

JNI 是 Java Native Interface 的缩写，它提供了若干的 API 实现了 Java 和其他语言的通信（主要是 C&C++）。从 Java1.1 开始，JNI 标准成为 java 平台的一部分，它允许 Java 代码和其他语言写的代码进行交互。

一旦使用 JNI, JAVA 程序就丧失了 JAVA 平台的两个优点: 程序不在跨平台。要想跨平台，必须在不同的系统环境中重新编译本地语言部分；程序不再是绝对安全的，本地代码的不当使用可能导致整个陈旭崩溃。一个通用的规则是，你应该让本地方法集中在少数几个类当中，这样就降低了 Java 语言和 C/C++之间的耦合性。

使用 JNI 实现 Java 与 C 语言混合编程的基本步骤如下：

### 编写带有 native 声明的方法的 java 类

文件名为 JNISample 的 java 代码如下:

```java
package indi.yolo.sample.jni;

import indi.yolo.sample.NativeMethodTest;

/**
 * @author yoloz
 */
public class JNISample {

     static {
        System.loadLibrary("nativemethod");
    }

    public static void main(String[] args) {

        NativeMethodTest nmt = new NativeMethodTest();

        int square = nmt.intMethod(5);
        boolean bool = nmt.booleanMethod(true);
        String text = nmt.stringMethod("java");
        int sum = nmt.intArrayMethod(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 13});

        System.out.println("intMethod: " + square);
        System.out.println("booleanMethod:" + bool);
        System.out.println("stringMethod:" + text);
        System.out.println("intArrayMethod:" + sum);
    }
}

```

文件名 NativeMethodTest 的 java 代码如下：

```java
package indi.yolo.sample.jni;

/**
 * @author yoloz
 */
public class NativeMethodTest {

    public native int intMethod(int n);

    public native boolean booleanMethod(boolean bool);

    public native String stringMethod(String text);

    public native int intArrayMethod(int[] intArray);
}


```

### 使用 javac 命令编译所有的 java 类

```bash
# 编译Java并生成完整包名路径
yoloz@debian:~/projects/xxx/sample/jni$ /opt/jdk-8/bin/javac -d . NativeMethodTest.java
yoloz@debian:~/projects/xxx/sample/jni$ /opt/jdk-8/bin/javac -d . JNISample.java

```

:::note

- 参数`-d`：这个参数是用来生成包结构的，通过 javac 命令，能够自动生成 package 目录，并且能够将 class 字节码文件放在对应目录的下面；
- 参数`.`：这个点代表当前目录，当然也可以改为其他目录；

:::

### 使用 javah 命令生成.h 文件

在命令行中运行 javah NativeMethodTest 可以生成 NativeMethodTest.h 文件(JNI-style header file)，注意不是 javah JNISample , native 关键字修饰的方法在哪个类中就使用 javah 命令生成对应的头文件。

```bash
# 生成头文件
yoloz@debian:~/projects/xxx/sample/jni$ /opt/jdk-8/bin/javah -d . indi.yolo.sample.jni.NativeMethodTest
```

文件内容如下：

```c
/* DO NOT EDIT THIS FILE - it is machine generated */
#include <jni.h>
/* Header for class indi_yolo_sample_jni_NativeMethodTest */

#ifndef _Included_indi_yolo_sample_jni_NativeMethodTest
#define _Included_indi_yolo_sample_jni_NativeMethodTest
#ifdef __cplusplus
extern "C" {
#endif
/*
 * Class:     indi_yolo_sample_jni_NativeMethodTest
 * Method:    intMethod
 * Signature: (I)I
 */
JNIEXPORT jint JNICALL Java_indi_yolo_sample_jni_NativeMethodTest_intMethod
  (JNIEnv *, jobject, jint);

/*
 * Class:     indi_yolo_sample_jni_NativeMethodTest
 * Method:    booleanMethod
 * Signature: (Z)Z
 */
JNIEXPORT jboolean JNICALL Java_indi_yolo_sample_jni_NativeMethodTest_booleanMethod
  (JNIEnv *, jobject, jboolean);

/*
 * Class:     indi_yolo_sample_jni_NativeMethodTest
 * Method:    stringMethod
 * Signature: (Ljava/lang/String;)Ljava/lang/String;
 */
JNIEXPORT jstring JNICALL Java_indi_yolo_sample_jni_NativeMethodTest_stringMethod
  (JNIEnv *, jobject, jstring);

/*
 * Class:     indi_yolo_sample_jni_NativeMethodTest
 * Method:    intArrayMethod
 * Signature: ([I)I
 */
JNIEXPORT jint JNICALL Java_indi_yolo_sample_jni_NativeMethodTest_intArrayMethod
  (JNIEnv *, jobject, jintArray);

#ifdef __cplusplus
}
#endif
#endif

```

:::info

- 头文件`jni.h`:${JDK_PATH}/include
- `jin.h`又包含了`jni_md.h`:${JDK_PATH}/include/linux

window：${JDK_PATH}/include/win32

- 函数名格式：`Java_包名_类名_Java方法名`，将包名中的`.`换成`_`;
- 注释中 Signature：这个是方法的签名：

| java 类型 | Signature                | 说明                                                                         |
| --------- | ------------------------ | ---------------------------------------------------------------------------- |
| boolean   | Z                        |
| byte      | B                        |
| char      | C                        |
| short     | S                        |
| int       | I                        |
| long      | L                        |
| float     | F                        |
| double    | D                        |
| void      | V                        |
| Object    | `L用/分割的完整类名`     | 例如: `Ljava/lang/String`：表示 String 类型                                  |
| Array     | `[签名`                  | 例如:`[I`：表示 int 类型的数组, `[Ljava/lang/String`：表示 String 类型的数组 |
| Method    | `(参数签名)返回类型签名` | 例如: `([I)I`：表示参数类型为 int 数组，返回值 int 类型的方法                |

- `JNIEnv *`:表示 JNI 环境，该环境封装了所有 JNI 的操作函数, 使用起来类似 Java 的反射, 常用其编码转换的函数；
- jobject：java 代码中调用该 C 函数的对象

:::

### 使用 C/C++实现本地方法

可以使用 C 语言来实现, 也可以使用 C++来实现, 下面说说 C 语言的实现(nativemethod.c)：

```c
#include "indi_yolo_sample_jni_NativeMethodTest.h"
#include <string.h>

void my_strupr(char str[])
{
    int nNum;
    nNum = strlen(str);
    for (int i = 0; i < nNum; i++)
    {
        if (str[i] >= 'a' && str[i] <= 'z')
        {
            str[i] -= 32;
        }
    }
}

JNIEXPORT jint JNICALL Java_indi_yolo_sample_jni_NativeMethodTest_intMethod(JNIEnv *env, jobject obj, jint i)
{
    return i * i;
}

JNIEXPORT jboolean JNICALL Java_indi_yolo_sample_jni_NativeMethodTest_booleanMethod(JNIEnv *env, jobject obj, jboolean b)
{
    return !b;
}

JNIEXPORT jstring JNICALL Java_indi_yolo_sample_jni_NativeMethodTest_stringMethod(JNIEnv *env, jobject obj, jstring string)
{
    const char *str = (*env)->GetStringUTFChars(env, string, 0);
    char cap[128];
    strcpy(cap, str);
    (*env)->ReleaseStringUTFChars(env, string, 0);
    //    strupr:将字符串s转换为大写形式,不是标准C库函数，只能在window(VC,MinGW)中使用,在linux gcc环境下需要自行定义这个函数。
    // return (*env)->NewStringUTF(env, strupr(cap));
    my_strupr(cap);
    return (*env)->NewStringUTF(env, cap);
}

JNIEXPORT jint JNICALL Java_indi_yolo_sample_jni_NativeMethodTest_intArrayMethod(JNIEnv *env, jobject obj, jintArray array)
{
    int i, sum = 0;
    jsize len = (*env)->GetArrayLength(env, array);
    jint *body = (*env)->GetIntArrayElements(env, array, 0);

    for (i = 0; i < len; i++)
    {
        sum += body[i];
    }
    (*env)->ReleaseIntArrayElements(env, array, body, 0);
    return sum;
}
```

:::info

- `(*env)->GetStringUTFChars()`:用来在 Java 和 C 之间转换字符串的, 因为 Java 本身都使用了双字节的字符, 而 C 语言本身都是单字节的字符, 所以需要进行转换;
- GetStringUTFChars()和 NewStringUTF(), 第一个是从 UTF-8 转换为 C 的编码格式, 第二个是根据 C 的字符串返回一个 UTF8 字符串;
- ReleaseStringUTFChars()是用来释放对象的, 在 Java 中有虚拟机进行垃圾回收, 但是在 C 语言中, 这些对象必须手动回收. 否则可能造成内存泄漏;

:::

### 将 C/C++编写的文件生成动态链接库并调用

```bash
# 生成动态链接库,使用loadLibrary方式，故生成文件为libxxx.so
yoloz@debian:~/projects/xxx/sample/jni$ gcc -shared -fPIC -I /opt/jdk-8/include/ -I /opt/jdk-8/include/linux/  -o libnativemethod.so nativemethod.c
# 运行Java，并指定动态链接库的路径
yoloz@debian:~/projects/xxx/sample/jni$ /opt/jdk-8/bin/java -Djava.library.path=. indi.yolo.sample.jni.JNISample
```
