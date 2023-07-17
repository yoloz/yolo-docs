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
