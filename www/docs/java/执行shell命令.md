说明：

1. ProcessBuilder 中修改进程构造器的属性将影响后续由该对象的 start() 方法启动的进程，但从不会影响以前启动的进程或 Java 自身的进程;
2. ProcessBuilder 类不是同步的。如果多个线程同时访问一个 ProcessBuilder，而其中至少一个线程从结构上修改了其中一个属性，它必须 保持外部同步;
3. ProcessBuilder 或 Runtime,用于调用外部可执行程序或系统命令，并重定向外部程序的标准输入、标准输出和标准错误到缓冲池,即创建的子进程没有自己的终端或控制台，它的所有标准 io（stdin、stdout 、stderr）操作都将通过三个流 (getOutputStream()、getInputStream() 和 getErrorStream()) 重定向到父进程；
4. 有些机器平台仅针对标准输入和输出流提供有限的缓冲区大小，如果读写子进程的输出流或输入流迅速出现失败，则可能导致子进程阻塞，甚至产生死锁;
5. ProcessBuilder 或 Runtime,第一个参数是可执行命令程序，其他的是命令行执行是需要的参数;
6. 通过查看 JDK 源码可知，Runtime.exec 最终是通过调用 ProcessBuilder 来真正执行操作的;

用例如下：

```java
// 后台启动ES并重定向其输出/dev/null（即忽略输出）
// 关闭ES并忽略输出
String cmd;
if (pid == null || pid == 0) {
    cmd = "su -c \"/opt/test/bin/start_es.sh -d >/dev/null\" test";
} else {
    cmd = "su -c \"/opt/test/bin/stop_es.sh >/dev/null\" test";
}
Process ps = Runtime.getRuntime().exec(cmd);
```

报错：

```log
su: invalid option -- 'd'
Usage: su [options] [LOGIN]

Options:
  -c, --command COMMAND         pass COMMAND to the invoked shell
  -h, --help                    display this help message and exit
  -, -l, --login                make the shell a login shell
  -m, -p,
  --preserve-environment        do not reset environment variables, and
                                keep the same shell
  -s, --shell SHELL             use SHELL instead of the default in passwd
```

从上面说明中可知：

1. java 调用外部脚本或系统命令即通过 jvm 创建一个子进程执行，并将子进程的标准 IO 重定向到调用进程的缓冲池，所以无法忽略命令的 IO 输出；
2. 不管是 processBuilder 方式还是 runtime 方式，第一个参数是可执行命令，其他的都是其参数(空格切割)，命令`su`,其他都是其参数，实际`-d`应该是脚本的参数，可以通过修改脚本将忽略输出以及后台运行纳入其中，如：`su -c \"/opt/test/bin/test.sh\" test`

## ProcessBuilder

```java
// -- Linux --

// Run a shell command
processBuilder.command("bash", "-c", "ls /home/mkyong/");

//chmod permission
processBuilder.command("/bin/chmod", "755", scriptPath);

// Run a shell script
processBuilder.command("path/to/hello.sh");

// -- Windows --

// Run a command，cmd的参数 “/c” 表示当命令执行完成后关闭自身
processBuilder.command("cmd.exe", "/c", "dir C:\\Users\\mkyong");

// Run a bat file
processBuilder.command("C:\\Users\\mkyong\\hello.bat");

Process process = processBuilder.start();

```

## Runtime.exec()

```bash
#Runtime.getRuntime() 返回当前应用程序的 Runtime 对象，该对象的 exec() 方法指示 Java 虚拟机创建一个子进程执行指定的可执行程序，并返回与该子进程对应的 Process 对象实例。通过 Process 可以控制该子进程的执行或获取该子进程的信息。
Process process = Runtime.getRuntime().exec( ".//p.exe ");
#等待子进程完成再往下执行
process.waitfor();
```

## 输出流错误流处理

通过 getInputStream()、getErrorStream() 获取的输入流和错误信息流是缓冲池向当前 Java 程序提供的，而不是直接获取外部程序的标准输出流和标准错误流。

```log
         输入流          标准输出
Java程序 <====== 缓冲池 <======== 外部程序(执行命令的子进程)
         错误流          标准错误
```

:::caution

- 缓冲池的容量是一定的，因此若外部程序在运行过程中不断向缓冲池输出内容，当缓冲池填满，那么外部程序将暂停运行直到缓冲池有空位可接收外部程序的输出内容为止。（采用 xcopy 命令复制大量文件时将会出现该问题）解决办法：当前的 Java 程序不断读取缓冲池的内容，从而为腾出缓冲池的空间。
- 外部程序在执行结束后需自动关闭，否则不管是字符流还是字节流均由于既读不到数据，又读不到流结束符，从而出现阻塞 Java 进程运行的情况。

:::

```java
public static void main(String[] args) {

    ProcessBuilder processBuilder = new ProcessBuilder();

    // Run this on Windows, cmd, /c = terminate after this run
    processBuilder.command("cmd.exe", "/c", "ping -n 3 google.com");
    processBuilder.redirectErrorStream(true);
    try {
        Process process = processBuilder.start();
        // blocked :(
        BufferedReader reader =
                new BufferedReader(new InputStreamReader(process.getInputStream()));
        String line;
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }
        int exitCode = process.waitFor();
        System.out.println("\nExited with error code : " + exitCode);
    } catch (IOException e) {
        e.printStackTrace();
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
}
```

```java
Process ps = Runtime.getRuntime().exec(cmd);
//处理InputStream的线程，获取进程的标准输入流
final InputStream is1 = ps.getInputStream();
//获取进程的错误流
final InputStream is2 = ps.getErrorStream();
//启动两个线程，一个线程负责读标准输出流，另一个负责读标准错误流
new Thread(() -> {
    BufferedReader br1 = new BufferedReader(new InputStreamReader(is1));
    try {
        String line1 = null;
        while ((line1 = br1.readLine()) != null) {
        }
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        try {
            is1.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}).start();

new Thread(() -> {
    BufferedReader br2 = new BufferedReader(new InputStreamReader(is2));
    try {
        String line2 = null;
        while ((line2 = br2.readLine()) != null) {
        }
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        try {
            is2.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}).start();
//等待shell脚本结果
int execStatus = ps.waitFor();

```
