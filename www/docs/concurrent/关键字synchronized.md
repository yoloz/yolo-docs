[Java 并发编程：Synchronized 及其实现原理](https://www.cnblogs.com/paddix/p/5367116.html)

Synchronized 的作用主要有三个：

1. 确保线程互斥的访问同步代码
2. 保证共享变量的修改能够及时可见
3. 有效解决重排序问题。

从语法上讲，Synchronized 总共有三种用法：

- 修饰普通方法
- 修饰静态方法
- 修饰代码块

接下来我就通过几个例子程序来说明一下这三种使用方式

## 没有同步的情况

代码段一：

```java
public class SynchronizedTest {

  public void method1() {
    System.out.println("Method 1 start");
    try {
      System.out.println("Method 1 execute");
      Thread.sleep(3000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    System.out.println("Method 1 end");
  }

  public void method2() {
    System.out.println("Method 2 start");
    try {
      System.out.println("Method 2 execute");
      Thread.sleep(1000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    System.out.println("Method 2 end");
  }

  public static void main(String[] args) {
    final SynchronizedTest test = new SynchronizedTest();

    new Thread(
      new Runnable() {

        @Override
        public void run() {
          test.method1();
        }
      }
    )
    .start();

    new Thread(
      new Runnable() {

        @Override
        public void run() {
          test.method2();
        }
      }
    )
    .start();
  }
}
```

执行结果如下，线程 1 和线程 2 同时进入执行状态，线程 2 执行速度比线程 1 快，所以线程 2 先执行完成，这个过程中线程 1 和线程 2 是同时执行的。

```log
Method 1 start
Method 1 execute
Method 2 start
Method 2 execute
Method 2 end
Method 1 end
```

## 对普通方法同步：

代码段二：

```java
public class SynchronizedTest {

  public synchronized void method1() {
    System.out.println("Method 1 start");
    try {
      System.out.println("Method 1 execute");
      Thread.sleep(3000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    System.out.println("Method 1 end");
  }

  public synchronized void method2() {
    System.out.println("Method 2 start");
    try {
      System.out.println("Method 2 execute");
      Thread.sleep(1000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    System.out.println("Method 2 end");
  }

  public static void main(String[] args) {
    final SynchronizedTest test = new SynchronizedTest();

    new Thread(
      new Runnable() {

        @Override
        public void run() {
          test.method1();
        }
      }
    )
    .start();

    new Thread(
      new Runnable() {

        @Override
        public void run() {
          test.method2();
        }
      }
    )
    .start();
  }
}
```

执行结果如下，跟代码段一比较，可以很明显的看出，线程 2 需要等待线程 1 的 method1 执行完成才能开始执行 method2 方法。

```log
Method 1 start
Method 1 execute
Method 1 end
Method 2 start
Method 2 execute
Method 2 end
```

## 静态方法（类）同步

代码段三：

```java
public class SynchronizedTest {

  public static synchronized void method1() {
    System.out.println("Method 1 start");
    try {
      System.out.println("Method 1 execute");
      Thread.sleep(3000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    System.out.println("Method 1 end");
  }

  public static synchronized void method2() {
    System.out.println("Method 2 start");
    try {
      System.out.println("Method 2 execute");
      Thread.sleep(1000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    System.out.println("Method 2 end");
  }

  public static void main(String[] args) {
    final SynchronizedTest test = new SynchronizedTest();
    final SynchronizedTest test2 = new SynchronizedTest();

    new Thread(
      new Runnable() {

        @Override
        public void run() {
          test.method1();
        }
      }
    )
    .start();

    new Thread(
      new Runnable() {

        @Override
        public void run() {
          test2.method2();
        }
      }
    )
    .start();
  }
}
```

执行结果如下:

```log
Method 1 start
Method 1 execute
Method 1 end
Method 2 start
Method 2 execute
Method 2 end
```

:::tip
对静态方法的同步本质上是对类的同步（静态方法本质上是属于类的方法，而不是对象上的方法），所以即使 test 和 test2 属于不同的对象，但是它们都属于 SynchronizedTest 类的实例，所以也只能顺序的执行 method1 和 method2，不能并发执行
:::

## 代码块同步

代码段四：

```java
public class SynchronizedTest {

  public void method1() {
    System.out.println("Method 1 start");
    try {
      synchronized (this) {
        System.out.println("Method 1 execute");
        Thread.sleep(3000);
      }
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    System.out.println("Method 1 end");
  }

  public void method2() {
    System.out.println("Method 2 start");
    try {
      synchronized (this) {
        System.out.println("Method 2 execute");
        Thread.sleep(1000);
      }
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    System.out.println("Method 2 end");
  }

  public static void main(String[] args) {
    final SynchronizedTest test = new SynchronizedTest();

    new Thread(
      new Runnable() {

        @Override
        public void run() {
          test.method1();
        }
      }
    )
    .start();

    new Thread(
      new Runnable() {

        @Override
        public void run() {
          test.method2();
        }
      }
    )
    .start();
  }
}
```

执行结果如下，虽然线程 1 和线程 2 都进入了对应的方法开始执行，但是线程 2 在进入同步块之前，需要等待线程 1 中同步块执行完成。

```log
Method 1 start
Method 1 execute
Method 2 start
Method 1 end
Method 2 execute
Method 2 end
```

## Synchronized 原理

如果对上面的执行结果还有疑问，也先不用急，我们先来了解 Synchronized 的原理，再回头上面的问题就一目了然了。我们先通过反编译下面的代码来看看 Synchronized 是如何实现对代码块进行同步的：

```java
public class SynchronizedDemo {

  public void method() {
    synchronized (this) {
      System.out.println("Method 1 start");
    }
  }
}
```

反编译结果：
![synchronized1.png](/docs/concurrent/synchronized1.png)

关于这两条指令的作用，我们直接参考 JVM 规范中描述：

:::info
monitorenter ：
Each object is associated with a monitor. A monitor is locked if and only if it has an owner. The thread that executes monitorenter attempts to gain ownership of the monitor associated with objectref, as follows:

- If the entry count of the monitor associated with objectref is zero, the thread enters the monitor and sets its entry count to one. The thread is then the owner of the monitor.
- If the thread already owns the monitor associated with objectref, it reenters the monitor, incrementing its entry count.
- If another thread already owns the monitor associated with objectref, the thread blocks until the monitor's entry count is zero, then tries again to gain ownership.

:::

这段话的大概意思为：

每个对象有一个监视器锁（monitor）。当 monitor 被占用时就会处于锁定状态，线程执行 monitorenter 指令时尝试获取 monitor 的所有权，过程如下：

1. 如果 monitor 的进入数为 0，则该线程进入 monitor，然后将进入数设置为 1，该线程即为 monitor 的所有者。
2. 如果线程已经占有该 monitor，只是重新进入，则进入 monitor 的进入数加 1.
3. 如果其他线程已经占用了 monitor，则该线程进入阻塞状态，直到 monitor 的进入数为 0，再重新尝试获取 monitor 的所有权。

:::info
monitorexit：

The thread that executes monitorexit must be the owner of the monitor associated with the instance referenced by objectref.

The thread decrements the entry count of the monitor associated with objectref. If as a result the value of the entry count is zero, the thread exits the monitor and is no longer its owner. Other threads that are blocking to enter the monitor are allowed to attempt to do so.

:::

这段话的大概意思为：

执行 monitorexit 的线程必须是 objectref 所对应的 monitor 的所有者。

指令执行时，monitor 的进入数减 1，如果减 1 后进入数为 0，那线程退出 monitor，不再是这个 monitor 的所有者。其他被这个 monitor 阻塞的线程可以尝试去获取这个 monitor 的所有权。

通过这两段描述，我们应该能很清楚的看出 Synchronized 的实现原理，Synchronized 的语义底层是通过一个 monitor 的对象来完成，其实 wait/notify 等方法也依赖于 monitor 对象，这就是为什么只有在同步的块或者方法中才能调用 wait/notify 等方法，否则会抛出 java.lang.IllegalMonitorStateException 的异常的原因。

我们再来看一下同步方法的反编译结果：

源代码：

```java
public class SynchronizedMethod {

  public synchronized void method() {
    System.out.println("Hello World!");
  }
}
```

反编译结果：

![synchronized2.png](/docs/concurrent/synchronized2.png)

从反编译的结果来看，方法的同步并没有通过指令 monitorenter 和 monitorexit 来完成（理论上其实也可以通过这两条指令来实现），不过相对于普通方法，其常量池中多了 ACC_SYNCHRONIZED 标示符。JVM 就是根据该标示符来实现方法的同步的：当方法调用时，调用指令将会检查方法的 ACC_SYNCHRONIZED 访问标志是否被设置，如果设置了，执行线程将先获取 monitor，获取成功之后才能执行方法体，方法执行完后再释放 monitor。在方法执行期间，其他任何线程都无法再获得同一个 monitor 对象。 其实本质上没有区别，只是方法的同步是一种隐式的方式来实现，无需通过字节码来完成。

## 运行结果解释

有了对 Synchronized 原理的认识，再来看上面的程序就可以迎刃而解了。

### 对普通方法同步结果：

虽然 method1 和 method2 是不同的方法，但是这两个方法都进行了同步，并且是通过同一个对象去调用的，所以调用之前都需要先去竞争同一个对象上的锁（monitor），也就只能互斥的获取到锁，因此，method1 和 method2 只能顺序的执行。

### 静态方法（类）同步结果：

虽然 test 和 test2 属于不同对象，但是 test 和 test2 属于同一个类的不同实例，由于 method1 和 method2 都属于静态同步方法，所以调用的时候需要获取同一个类上 monitor（每个类只对应一个 class 对象），所以也只能顺序的执行。

### 代码块同步结果：

对于代码块的同步实质上需要获取 Synchronized 关键字后面括号中对象的 monitor，由于这段代码中括号的内容都是 this，而 method1 和 method2 又是通过同一的对象去调用的，所以进入同步块之前需要去竞争同一个对象上的锁，因此只能顺序执行同步块。
