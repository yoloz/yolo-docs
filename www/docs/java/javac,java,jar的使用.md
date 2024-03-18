## javac、java

```bash
javac -classpath $(echo ${dir}/lib/*.jar | tr ' ' ':') com/xxx/Test.java
java -cp .:$(echo ${dir}/lib/*.jar | tr ' ' ':') com.xxx.Test
```

**tr 是个简单的替换命令**，从标准输入中替换、缩减或删除字符，并将结果写到标准输出

## 简单的 jar

生成的 jar 包结构:

```
META-INF
Tom.class
Hello.class(主类)
xxxxx.class
```

方法步骤:

1. 定义 Main-Class  
   创建文件夹 META-INF, 创建文件 MENIFEST. MF, 內容如下:

```
Manifest-Version: 1.0
Main-Class: Hello
```

**注意冒号后面有一个空格, 整个文件最后有一行空行**

2. 编译及打包

```bash
javac Hello.java  #编译
jar -cvfm hello.jar META-INF\MENIFEST.MF Hello.class Tom.class xxx.class
```

- c 表示要创建一个新的 jar 包;
- v 表示创建的过程中在控制台输出创建过程的一些信息;
- f 表示给生成的 jar 包命名;
- m 表示自定义 MENIFEST 文件

## 有目录结构的 jar

生成的 jar 包结构:

```
META-INF
com
   Tom.class
   xxx.class
Hello.class(主类)
```

方法步骤:

1. 定义 Main-Class  
   略(同上)

2. 编译及打包

```bash
javac Hello.java -d target  #编译
cd target
mv -r xxx/META-INF .
jar -cvfm hello.jar META-INF\MENIFEST.MF *
```

- 最后的\*表示把当前目录下所有文件都打在 jar 包里

## 依赖第三方 jar

方法步骤:

1. 定义 Main-Class  
   略(同上)

2. 编译及打包

```bash
javac -cp xxx.jar Hello.java -d target  #编译
cd target
mv -r xxx/META-INF .
jar -cvfm hello.jar META-INF\MENIFEST.MF *
```

- -cp 表示 -classpath

对于 `java -jar hello.jar` 报错 ClassNotFoundException:xxxxx，可以 `java -cp xxx.jar -jar hello.jar` 或者在 Main-Class 中添加 classPath:

```
Manifest-Version: 1.0
Main-Class: Hello
Class-Path: xxx.jar #路径指向你需要的所有jar包
```

上述中 xxx.jar 要和 hello.jar 在同一路径下，执行 `java -jar hello.jar` 即可。

**注意空格和换行**

## 综合使用上述三命令

测试 window 下一个类的情况，使用`java -cp`容易出错，记录如下：

目录如下：

```log
PS C:\java> dir

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         2023/5/26     14:45                indi
d-----         2023/5/26     14:51                jre1.8.0_361
-a----         2023/5/26     14:38        1879325 jna-5.13.0.jar
-a----         2023/5/26     14:50       82490489 jre-8u361-windows-x64.tar.gz
-a----         2023/5/26     14:35        3667880 libtest.dll
```

- `indi.yolo.sample.jna.JNAGoSample.class`为需要执行的 class
- `jre1.8.0_361`为运行环境
- `jna-5.13.0.jar`为依赖包
- `libtest.dll`为调用的动态库

windows 环境下 `*.jar` 的通配符无效，直接使用通配符`*`加载所有 jar 文件(子目录下的 jar 还需要另外指定)，但是并不会加载目录下的 class 文件；使用`.`会加载当前目录下的 class 文件，但是不会加载 jar 文件。

正确方式：

```bash
PS C:\java> .\jre1.8.0_361\bin\java.exe -cp . indi.yolo.sample.jna.JNAGoSample
# Exception in thread "main" java.lang.NoClassDefFoundError: com/sun/jna/Library

PS C:\java> .\jre1.8.0_361\bin\java.exe -cp * indi.yolo.sample.jna.JNAGoSample
# 错误: 找不到或无法加载主类 indi.yolo.sample.jna.JNAGoSample

# 错误
PS C:\java> .\jre1.8.0_361\bin\java.exe -cp .;.\jna-5.13.0.jar indi.yolo.sample.jna.JNAGoSample
# 正确
PS C:\java> .\jre1.8.0_361\bin\java.exe -cp ".;.\jna-5.13.0.jar" indi.yolo.sample.jna.JNAGoSample
# 正确
PS C:\java> .\jre1.8.0_361\bin\java.exe -cp ".;*" indi.yolo.sample.jna.JNAGoSample

```

:::info -cp 参数 与 -jar 参数能否一起使用
简单来说,是不能一起使用的,两者加载 classpath 是不一致的,前者 -cp 选项在加载 jar 包和 class 类文件时,是通过后面拼接的参数来加载的，相对的 -jar 选项在加载 jar 包时则是获取配置文件中设置的 classpath 从而进行加载。

当指定了 -jar 选项后,JVM 不再从 -cp 选项中指定的 jar 包路径和 类路径 中加载 jar 包,因此同时设置 -cp 参数 和-jar 参数的结果是 -cp 参数相当于没有设置。
:::
