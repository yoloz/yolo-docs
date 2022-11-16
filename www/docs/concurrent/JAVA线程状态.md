Java 中线程中状态可分为五种：

- New：新建状态，当线程创建完成时为新建状态，即 new Thread(...)，还没有调用 start 方法时，线程处于新建状态。
- Runnable：就绪状态，当调用线程的的 start 方法后，线程进入就绪状态，等待 CPU 资源。处于就绪状态的线程由 Java 运行时系统的线程调度程序(thread scheduler)来调度。
- Running：运行状态，就绪状态的线程获取到 CPU 执行权以后进入运行状态，开始执行 run 方法。
- Blocked：阻塞状态，线程没有执行完，由于某种原因（如，I/O 操作等）让出 CPU 执行权，自身进入阻塞状态。
- Dead：死亡状态，线程执行完成或者执行过程中出现异常，线程就会进入死亡状态。

这五种状态之间的转换关系如下图所示：

![thread7.png](/docs/concurrent/thread7.png)

## JDK8 的 Thread.State

### NEW

Thread state for a thread which has not yet started.

### RUNNABLE

A thread in the runnable state is executing in the Java virtual machine but it may be waiting for other resources from the operating system such as processor.

### BLOCKED

A thread in the blocked state is waiting for a monitor lock to enter a synchronized block/method or reenter a synchronized block/method after calling Object.wait.

### WAITING

A thread is in the waiting state due to calling one of the following methods:

- Object.wait with no timeout
- Thread.join with no timeout
- LockSupport.park

A thread in the waiting state is waiting for another thread to perform a particular action. For example, a thread that has called Object.wait() on an object is waiting for another thread to call Object.notify() or Object.notifyAll() on that object. A thread that has called Thread.join() is waiting for a specified thread to terminate.

### TIMED_WAITING

A thread is in the timed waiting state due to calling one of the following methods with a specified positive waiting time:

- Thread.sleep
- Object.wait with timeout
- Thread.join with timeout
- LockSupport.parkNanos
- LockSupport.parkUntil

### TERMINATED

The thread has completed execution.
