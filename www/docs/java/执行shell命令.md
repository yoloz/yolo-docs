## 通过 ProcessBuilder 调用

```java
//解决脚本没有执行权限
ProcessBuilder builder = new ProcessBuilder("/bin/chmod", "755", scriptPath);
Process process = builder.start();
process.waitFor();
```

## 通过 Runtime 执行

```java
//SHELL_FILE_DIR + RUNNING_SHELL_FILE为脚本的全路径，后面传递给shell脚本多个参数用空格分隔
Sting cmd = SHELL_FILE_DIR + RUNNING_SHELL_FILE + " "+param1+" "+param2+" "+param3
//RunTime执行脚本
Process ps = Runtime.getRuntime().exec(cmd);
//waitFor等待shell运行完，返回值如果为0，则表明正常运行完
int execStatus = ps.waitFor();
```

:::caution 注意
Java 在执行 Runtime.getRuntime().exec(command)之后，Linux 会创建一个进程，该进程与 JVM 进程建立三个管道连接:标准输入流、标准输出流、标准错误流。

linux 进程不断向标准输出流或标准错误流写数据，而 JVM 却不读取，数据会暂存在 linux 缓存区，当缓存区存满之后导致该进程无法继续写数据，会阻塞，进而导致 java 进程阻塞在 waitFor()处无法结束。
:::

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
