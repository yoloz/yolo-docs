java 启动参数共分为三类

- 其一是标准参数（-），所有的 JVM 实现都必须实现这些参数的功能，而且向后兼容；
- 其二是非标准参数（-X），默认 jvm 实现这些参数的功能，但是并不保证所有 jvm 实现都满足，且不保证向后兼容；
- 其三是非 Stable 参数（-XX），此类参数各个 jvm 实现会有所不同，将来可能会随时取消，需要慎重使用；

_非标准参数又称为扩展参数_

## verbose

- -verbose:class

输出 jvm 载入类的相关信息，当 jvm 报告说找不到类或者类冲突时可此进行诊断。

- -verbose:gc

输出每次 GC 的相关情况。

- -verbose:jni

输出 native 方法调用的相关情况，一般用于诊断 jni 调用错误信息。

## 扩展参数

- -Xms512m

设置 JVM 促使内存为 512m。此值可以设置与-Xmx 相同，以避免每次垃圾回收完成后 JVM 重新分配内存。

- -Xmx512m

设置 JVM 最大可用内存为 512M

- -Xmn200m

设置年轻代大小为 200M。整个堆大小=年轻代大小 + 年老代大小 + 持久代大小。持久代一般固定大小为 64m，所以增大年轻代后，将会减小年老代大小。此值对系统性能影响较大，Sun 官方推荐配置为整个堆的 3/8。

- -Xss128k

设置每个线程的堆栈大小。JDK5.0 以后每个线程堆栈大小为 1M，以前每个线程堆栈大小为 256K。更具应用的线程所需内存大小进行调整。在相同物理内存下，减小这个值能生成更多的线程。但是操作系统对一个进程内的线程数还是有限制的，不能无限生成，经验值在 3000~5000 左右。

- -Xloggc:file

与-verbose:gc 功能类似，只是将每次 GC 事件的相关情况记录到一个文件中，文件的位置最好在本地，以避免网络的潜在问题。

> 若与 verbose 命令同时出现在命令行中，则以-Xloggc 为准。

- -Xprof

跟踪正运行的程序，并将跟踪数据在标准输出输出；适合于开发环境调试。

## 非 Stable 参数

用-XX 作为前缀的参数列表在 jvm 中可能是不健壮的，SUN 也不推荐使用，后续可能会在没有通知的情况下就直接取消了；但是由于这些参数中的确有很多是对我们很有用的，比如我们经常会见到的-XX:PermSize、-XX:MaxPermSize 等等；

### 行为参数列表

| 参数及其默认值              | 描述                                                         |
| :-------------------------- | :----------------------------------------------------------- |
| -XX:-DisableExplicitGC      | 禁止调用 System.gc()；但 jvm 的 gc 仍然有效                  |
| -XX:+MaxFDLimit             | 最大化文件描述符的数量限制                                   |
| -XX:+ScavengeBeforeFullGC   | 新生代 GC 优先于 Full GC 执行                                |
| -XX:+UseGCOverheadLimit     | 在抛出 OOM 之前限制 jvm 耗费在 GC 上的时间比例               |
| **-XX:-UseConcMarkSweepGC** | **对老生代采用并发标记交换算法进行 GC**                      |
| **-XX:-UseParallelGC**      | **启用并行 GC**                                              |
| -XX:-UseParallelOldGC       | 对 Full GC 启用并行，当-XX:-UseParallelGC 启用时该项自动启用 |
| **-XX:-UseSerialGC**        | **启用串行 GC**                                              |
| -XX:+UseThreadPriorities    | 启用本地线程优先级                                           |

上面表格中黑体的三个参数代表着 jvm 中 GC 执行的三种方式，即串行、并行、并发；

- 串行（SerialGC）是 jvm 的默认 GC 方式，一般适用于小型应用和单处理器，算法比较简单，GC 效率也较高，但可能会给应用带来停顿；
- 并行（ParallelGC）是指 GC 运行时，对应用程序运行没有影响，GC 和 app 两者的线程在并发执行，这样可以最大限度不影响 app 的运行；
- 并发（ConcMarkSweepGC）是指多个线程并发执行 GC，一般适用于多处理器系统中，可以提高 GC 的效率，但算法复杂，系统消耗较大；

### 性能调优参数列表

| 参数及其默认值                | 描述                                    |
| :---------------------------- | :-------------------------------------- |
| -XX:LargePageSizeInBytes=4m   | 设置用于 Java 堆的大页面尺寸            |
| -XX:MaxHeapFreeRatio=70       | GC 后 java 堆中空闲量占的最大比例       |
| **-XX:MaxNewSize=size**       | **新生成对象能占用内存的最大值**        |
| **-XX:MaxPermSize=64m**       | **老生代对象能占用内存的最大值**        |
| -XX:MinHeapFreeRatio=40       | GC 后 java 堆中空闲量占的最小比例       |
| -XX:NewRatio=2                | 新生代内存容量与老生代内存容量的比例    |
| **-XX:NewSize=2.125m**        | **新生代对象生成时占用内存的默认值**    |
| -XX:ReservedCodeCacheSize=32m | 保留代码占用的内存容量                  |
| -XX:ThreadStackSize=512       | 设置线程栈大小，若为 0 则使用系统默认值 |
| -XX:+UseLargePages            | 使用大页面内存                          |

_在日常性能调优中基本上都会用到以上黑体的这几个属性_

## 调试参数列表

| 参数及其默认值                                     | 描述                                                              |
| :------------------------------------------------- | :---------------------------------------------------------------- |
| -XX:-CITime                                        | 打印消耗在 JIT 编译的时间                                         |
| -XX:ErrorFile=`./hs_err_pid<pid>.log`              | 保存错误日志或者数据到文件中                                      |
| -XX:-ExtendedDTraceProbes                          | 开启 solaris 特有的 dtrace 探针                                   |
| **-XX:HeapDumpPath=./java_pid\<pid\>.hprof**       | **指定导出堆信息时的路径或文件名**                                |
| **-XX:-HeapDumpOnOutOfMemoryError**                | **当首次遭遇 OOM 时导出此时堆中相关信息**                         |
| -XX:OnError=`"<cmd args>;<cmd args>"`            | 出现致命 ERROR 之后运行自定义命令                                 |
| -XX:OnOutOfMemoryError=`"<cmd args>;<cmd args>"` | 当首次遭遇 OOM 时执行自定义命令                                   |
| -XX:-PrintClassHistogram                           | 遇到 Ctrl-Break 后打印类实例的柱状信息，与 jmap -histo 功能相同   |
| **-XX:-PrintConcurrentLocks**                      | **遇到 Ctrl-Break 后打印并发锁的相关信息，与 jstack -l 功能相同** |
| -XX:-PrintCommandLineFlags                         | 打印在命令行中出现过的标记                                        |
| -XX:-PrintCompilation                              | 当一个方法被编译时打印相关信息                                    |
| -XX:-PrintGC                                       | 每次 GC 时打印相关信息                                            |
| -XX:-PrintGC Details                               | 每次 GC 时打印详细信息                                            |
| -XX:-PrintGCTimeStamps                             | 打印每次 GC 的时间戳                                              |
| -XX:-TraceClassLoading                             | 跟踪类的加载信息                                                  |
| -XX:-TraceClassLoadingPreorder                     | 跟踪被引用到的所有类的加载信息                                    |
| -XX:-TraceClassResolution                          | 跟踪常量池                                                        |
| -XX:-TraceClassUnloading                           | 跟踪类的卸载信息                                                  |
| -XX:-TraceLoaderConstraints                        | 跟踪类加载器约束的相关信息                                        |
