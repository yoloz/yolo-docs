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
