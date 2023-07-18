- pid
  在 linux 环境下，可以通过 top 命令查看各个进程的 cpu 使用情况，找出占用较高的 pid

- tid
  找出 pid 后通过`top -Hp pid`查看该进程下各个线程的 cpu 使用情况。任取一个占用 cpu 较高的线程，将线程 id 转为 16 进制`printf “%x\n” tid`

## jstack

通过 jstack 命令查看 CPU 利用率高的线程正在做什么`jstack pid |grep tid `

jstack 命令生成的 thread dump 信息包含了 JVM 中所有存活的线程,大多数情况下会基于 thead dump 分析当前各个线程的运行情况，如是否存在死锁、是否存在一个线程长时间持有锁不放等等。在 dump 中，线程一般存在如下几种状态：

- RUNNABLE，线程处于执行中
- BLOCKED，线程被阻塞
- WAITING，线程正在等待

更多信息参考[threadDump 分析](./threadDump分析)

## jmap

使用内存映像工具 jmap 查看堆内存占用情况`jmap -heap pid`,查看堆的占用情况`jmap -histo pid |less`

用 jmap 把进程内存使用情况 dump 到文件中，再用 jhat 分析查看

```bash
jmap -dump:format=b,file=dumpFileName pid`
jhat -port 8888 /home/dump.dat
```

dump 出来的文件还可以用 MAT、VisualVM 等工具查看
如果文件太大，可能需要加上-J-Xmx512m 参数以指定最大堆内存，即`jhat -J-Xmx512m -port 8888 /home/dump.dat`然后就可以在浏览器中输入主机地址:8888 查看了

## jstat

查看各个区内存和 GC 的情况

`jstat [ generalOption | outputOptions vmid [interval[s|ms] [count]] ]`

vmid 是 Java 虚拟机 ID，在 Linux/Unix 系统上一般就是进程 ID。interval 是采样时间间隔。count 是采样数目。
`jstat -gc 2860 250 6`采样时间间隔为 250ms，采样数为 6

堆内存 = 年轻代 + 年老代 + 永久代  
年轻代 = Eden 区 + 两个 Survivor 区（From 和 To）
jstat 各列含义:  
S0C、S1C、S0U、S1U：
S0:Survivor 0 C:容量（Capacity） U:使用量（Used）  
EC、EU：Eden 区容量和使用量  
OC、OU：年老代容量和使用量  
PC、PU：永久代容量和使用量  
YGC、YGT：年轻代 GC 次数和 GC 耗时  
FGC、FGCT：Full GC 次数和 Full GC 耗时  
GCT：GC 总耗时

## hprof(Heap/CPU Profiling Tool)

J2SE 中提供了一个简单的命令行工具来对 java 程序的 cpu 和 heap 进行 profiling，叫做 HPROF。

HPROF 实际上是 JVM 中的一个 native 的库，它会在 JVM 启动的时候通过命令行参数来动态加载，并成为 JVM 进程的一部分。

若要在 java 进程启动的时候使用 HPROF，用户可以通过各种命令行参数类型来使用 HPROF 对 java 进程的 heap 或者 （和）cpu 进行 profiling 的功能。

HPROF 产生的 profiling 数据可以是二进制的，也可以是文本格式的。这些日志可以用来跟踪和分析 java 进程的性能问题和瓶颈，解决内存使用上不优的地方或者程序实现上的不优之处。二进制格式的日志还可以被 JVM 中的 HAT 工具来进行浏览和分析，用 以观察 java 进程的 heap 中各种类型和数据的情况。

在 J2SE 5.0 以后的版本中，HPROF 已经被并入到一个叫做 Java Virtual Machine Tool Interface（JVM TI）中。
