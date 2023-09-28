System.load()与 System.loadLibrary()，两个方法都是用来装载 dll 文件，不论是 JNI 库文件还是非 JNI 库文件。本地方法在被调用时都需要通过这两发方法之一将其加载至内存

## System.load(String filename)

参数为 dll 文件的绝对路径，可以是任意路径`System.load("D:\\java\\Test.dll");`

:::caution 注意

载入的库文件静态链接到其它动态链接库，如 Test.dll 静态链接到 dependency.dll。System.load() 方式：其一，相关链接文件加入到 java.library.path 的路径中，load()方法会去路径寻找依赖库；或者手动再添加 dependency.dll：

```java
//先调用
System.load("D:\\java\\dependency.dll");
//让jvm先载入dependency.dll，然后再调用
System.load("D:\\java\\Test.dll");
```

:::

## System.loadLibrary(String libname)

参数为 dll 文件名，不包含库文件的扩展名`System.loadLibrary ("Test");`，加载的文件在`java.library.path`这一 jvm 变量所指向的路径中。

:::caution 注意

loadLibrary()方式:

- 生成的链接文件需要以`lib`开头(`libxxx.so`)，否则报错：`java.lang.UnsatisfiedLinkError: no counter in java.library.`;
- 不可以在代码中写上扩展名.dll 或者.so,在 Windows 系统下加载的就是 xx.dll, 在 Linux 系统下加载的就是 xx.so;

load()方式，代码中写上文件绝对路径，文件没有需要 lib 开头要求；

:::
