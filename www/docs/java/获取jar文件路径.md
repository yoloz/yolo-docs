## `springboot`包

其内部类通过如下方式获取：

```java
ApplicationHome h = new ApplicationHome(getClass());
File jarF = h.getSource();
System.out.println(jarF.getParentFile().toString());
```

## 一般`jar`文件

### 使用类路径

```java
String path = this.getClass().getProtectionDomain().getCodeSource().getLocation().getPath();
// 程序已经被打包成jar包，getPath()和getFile()在这里的返回值是一样的：/xxx/xxx.jar这种形式
String path = this.getClass().getProtectionDomain().getCodeSource().getLocation().getFile();
// 如果路径包含Unicode字符如中文，还需要将路径转码
path = java.net.URLDecoder.decode(path, "UTF-8");
```

### 使用 JVM

```java
//利用java运行时的系统属性来得到jar文件位置，也是/xxx/xxx.jar这种形式
String path = System.getProperty("java.class.path");
```

通过进一步处理，就可以得到`jar`包的目录：

```java
int firstIndex = path.lastIndexOf(System.getProperty("path.separator")) + 1;
int lastIndex = path.lastIndexOf(File.separator) + 1;
path = path.substring(firstIndex, lastIndex);
```

> `path.separator`在 Windows 系统下是分号(;),在 Linux 下是冒号(:),也就是环境变量中常用来分割路径的两个符号;
>
> `File.separator`在 Windows 下是反斜杠(\)，在 Linux 下是斜杠(/);
