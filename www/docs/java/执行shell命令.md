ProcessBuilder 是一个 final 类，有两个带参数的构造方法，你可以通过构造方法来直接创建 ProcessBuilder 的对象。而 Process 是一个抽象类，一般都通过`Runtime.exec()`和`ProcessBuilder.start()`来间接创建其实例。

:::caution
ProcessBuilder 中修改进程构造器的属性将影响后续由该对象的 start() 方法启动的进程，但从不会影响以前启动的进程或 Java 自身的进程。

ProcessBuilder 类不是同步的。如果多个线程同时访问一个 ProcessBuilder，而其中至少一个线程从结构上修改了其中一个属性，它必须 保持外部同步。
:::

Process 类是一个抽象类（所有的方法均是抽象的），封装了一个进程（即一个执行程序）。

Process 类提供了执行从进程输入、执行输出到进程、等待进程完成、检查进程的退出状态以及销毁（杀掉）进程的方法。

:::caution
创建进程的方法可能无法针对某些本机平台上的特定进程很好地工作，比如本机窗口进程，守护进程，Microsoft Windows 上的 Win16/DOS 进程，或者 shell 脚本。

创建的子进程没有自己的终端或控制台。它的所有标准 io（即 stdin、stdout 和 stderr）操作都将通过三个流 (getOutputStream()、getInputStream() 和 getErrorStream()) 重定向到父进程。**有些本机平台仅针对标准输入和输出流提供有限的缓冲区大小，如果读写子进程的输出流或输入流迅速出现失败，则可能导致子进程阻塞，甚至产生死锁。**
:::

:::info
ProcessBuilder.start() 和 Runtime.exec()传递的参数有所不同: Runtime.exec()可接受一个单独的字符串，这个字符串是通过空格来分隔可执行命令程序和参数的,也可以接受字符串数组参数。而 ProcessBuilder 的构造函数是一个字符串列表或者数组。**列表中第一个参数是可执行命令程序，其他的是命令行执行是需要的参数。**

通过查看 JDK 源码可知，Runtime.exec 最终是通过调用 ProcessBuilder 来真正执行操作的。
:::

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

// Run a command
processBuilder.command("cmd.exe", "/c", "dir C:\\Users\\mkyong");

// Run a bat file
processBuilder.command("C:\\Users\\mkyong\\hello.bat");

Process process = processBuilder.start();

```

## Runtime.exec()

```java
//SHELL_FILE_DIR + RUNNING_SHELL_FILE为脚本的全路径，后面传递给shell脚本多个参数用空格分隔
Sting cmd = SHELL_FILE_DIR + RUNNING_SHELL_FILE + " "+param1+" "+param2+" "+param3
//RunTime执行脚本
Process ps = Runtime.getRuntime().exec(cmd);
//waitFor等待shell运行完，返回值如果为0，则表明正常运行完
int execStatus = ps.waitFor();
```

## 输出流错误流处理

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
