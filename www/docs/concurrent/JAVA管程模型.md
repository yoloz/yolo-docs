## 管程

维基百科：管程(Monitors，也称为监视器) 是一种程序结构，结构内的多个子程序（对象或模块）形成的多个工作线程互斥访问共享资源。
:::note
管程就是指管理共享变量，以及对共享变量的相关操作。具体到 Java 语言中，管程就是管理类的成员变量和方法，让这个类是线程安全的。
:::

管程这个概念最早来源于操作系统，操作系统发展了那么多年，管程的实现也有多种方式，主流的有三种：

- Hasen 模型
- Hoare 模型
- MESA 模型(Java 借鉴的是此模型)

:::tip
操作系统使用信号量解决并发问题，Java 选择使用管程（Monitor）解决并发问题。信号量和管程是等价的，可以使用信号量实现管程，也可以使用管程实现信号量。
:::

我们用管程模型主要是解决并发编程中的两个核心问题:互斥(同一时刻只允许一个线程访问共享资源)；同步(线程之间如何通信，协作)。

## MESA 解决互斥

在操作共享变量之前，增加一个等待队列，每一个线程想要操作共享变量的话，都需要在等待队列中等待，直到管程选出一个线程操作共享变量。

## MESA 解决同步

线程在操作共享变量时候，它不一定是直接执行，可能有一些自己的执行条件限制（比如取钱操作要求账户里一定要有钱，出队操作要求队列一定不能是空的），我们将这些限制称之为条件变量，每一个条件变量也有自己对应的等待队列，当线程发现自己的条件变量不满足时，就进入相应的等待队列中排队，直至条件变量满足，那么其等待队列中的线程也不会是立马执行，而是到最开始共享变量对应的等待队列中再次排队，重复之前的过程。
:::note
去医院就医,患者首先需要排队等待医生叫号，医生诊断被叫到号的患者。期间，患者如果需要进行其他辅助的检查，比如说拍个 X 光，就需要去等待拍 X 光的医生叫号。患者拍完 X 光之后，再次回到上一个医生那里，等待医生再次诊断。
:::

## synchronized 单条件变量管程模型

Java 语言内置的管程（synchronized）对 MESA 模型进行了精简。MESA 模型中，条件变量可以有多个，[synchronized](./关键字synchronized.md)里只有一个条件变量。
![synchronized.png](/docs/concurrent/synchronized.png)

:::tip
Java SDK 并发包实现的管程支持多个条件变量，不过并发包里的锁，需要开发人员自己进行加锁和解锁操作。如下：

```java
public class BlockedQueue<T> {
  final Lock lock = new ReentrantLock();
  // 条件变量：队列不满
  final Condition notFull = lock.newCondition();
  // 条件变量：队列不空
  final Condition notEmpty = lock.newCondition();

  // 入队
  void enq(T x) {
    lock.lock();
    try {
      while (队列已满) {
        // 等待队列不满
        notFull.await();
      }
      // 省略入队操作...
      //入队后,通知可出队
      notEmpty.signal();
    } finally {
      lock.unlock();
    }
  }

  // 出队
  void deq() {
    lock.lock();
    try {
      while (队列已空) {
        // 等待队列不空
        notEmpty.await();
      }
      // 省略出队操作...
      //出队后，通知可入队
      notFull.signal();
    } finally {
      lock.unlock();
    }
  }
}
```

:::
