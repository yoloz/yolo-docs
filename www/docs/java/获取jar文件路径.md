## springboot 包

其内部类通过如下方式获取：

```java
ApplicationHome h = new ApplicationHome(getClass());
File jarF = h.getSource();
System.out.println(jarF.getParentFile().toString());
```

## 一般 jar 文件

```java
String path = this.getClass().getProtectionDomain().getCodeSource().getLocation().getPath();
// 程序已经被打包成jar包，getPath()和getFile()在这里的返回值是一样的：/xxx/xxx/xxx.jar
String path = this.getClass().getProtectionDomain().getCodeSource().getLocation().getFile();
// 如果路径包含Unicode字符如中文，还需要将路径转码
path = java.net.URLDecoder.decode(path, "UTF-8");
```

通过进一步处理，就可以得到 jar 包的目录：

```java
//  File.separator在Windows下是反斜杠(\)，在Linux下是斜杠(/)
int lastIndex = path.lastIndexOf(File.separator) + 1;
path = path.substring(0, lastIndex);
```
