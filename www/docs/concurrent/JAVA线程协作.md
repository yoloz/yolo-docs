## wait/notify/notifyAll

[synchronized 单条件变量管程模型](./JAVA管程模型.md)

### wait

JDK 中一共提供了这三个版本的方法，

- wait()方法的作用是将当前运行的线程挂起（即让其进入阻塞状态），直到 notify 或 notifyAll 方法来唤醒线程.
- wait(long timeout)，该方法与 wait()方法类似，唯一的区别就是在指定时间内，如果没有 notify 或 notifAll 方法的唤醒，也会自动唤醒。
- wait(long timeout,long nanos)，本意在于更精确的控制调度时间，不过从目前版本来看，该方法貌似没有完整的实现该功能，其源码(JDK1.8)如下：

```java
public final void wait(long timeout, int nanos) throws InterruptedException {
        if (timeout < 0) {
            throw new IllegalArgumentException("timeout value is negative");
        }

        if (nanos < 0 || nanos > 999999) {
            throw new IllegalArgumentException(
                                "nanosecond timeout value out of range");
        }

        if (nanos >= 500000 || (nanos != 0 && timeout == 0)) {
            timeout++;
        }

        wait(timeout);
    }
```

从源码来看，JDK8 中对纳秒的处理，只做了四舍五入，所以还是按照毫秒来处理的，可能在未来的某个时间点会用到纳秒级别的精度。虽然 JDK 提供了这三个版本，其实最后都是调用 wait(long timeout)方法来实现的，wait()方法与 wait(0)等效，而 wait(long timeout,int nanos)从上面的源码可以看到也是通过 wait(long timeout)来完成的。下面我们通过一个简单的例子来演示 wait()方法的使用：

```java
public class WaitTest {

  public void testWait() {
    System.out.println("Start-----");
    try {
      wait(1000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    System.out.println("End-------");
  }

  public static void main(String[] args) {
    final WaitTest test = new WaitTest();
    new Thread(
      new Runnable() {

        @Override
        public void run() {
          test.testWait();
        }
      }
    )
    .start();
  }
}
```

这段代码的意图很简单，就是程序执行以后，让其暂停一秒，然后再执行。运行上述代码，查看结果：

```
Start-----
Exception in thread "Thread-0" java.lang.IllegalMonitorStateException
    at java.lang.Object.wait(Native Method)
    at com.paddx.test.concurrent.WaitTest.testWait(WaitTest.java:8)
    at com.paddx.test.concurrent.WaitTest$1.run(WaitTest.java:20)
    at java.lang.Thread.run(Thread.java:745)
```

这段程序并没有按我们的预期输出相应结果，而是抛出了一个异常。大家可能会觉得奇怪为什么会抛出异常？而抛出的 IllegalMonitorStateException 异常又是什么？我们可以看一下 JDK 中对 IllegalMonitorStateException 的描述：

> Thrown to indicate that a thread has attempted to wait on an object's monitor or to notify other threads waiting on an object's monitor without owning the specified monitor.

这句话的意思大概就是：线程试图等待对象的监视器或者试图通知其他正在等待对象监视器的线程，但本身没有对应的监视器的所有权。wait 方法是一个本地方法，其底层是通过一个叫做监视器锁的对象来完成的。所以上面之所以会抛出异常，是因为在调用 wait 方式时没有获取到 monitor 对象的所有权，那如何获取 monitor 对象所有权？Java 中可以通过 Synchronized 关键字来完成，修改上述代码，增加 Synchronized 关键字：

```java
public class WaitTest {

  public synchronized void testWait() { //增加Synchronized关键字
    System.out.println("Start-----");
    try {
      wait(1000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    System.out.println("End-------");
  }

  public static void main(String[] args) {
    final WaitTest test = new WaitTest();
    new Thread(
      new Runnable() {

        @Override
        public void run() {
          test.testWait();
        }
      }
    )
    .start();
  }
}
```

现在再运行上述代码，就能看到预期的效果了：

```
Start-----
End-------
```

所以，通过这个例子，大家应该很清楚，wait 方法的使用必须在同步的范围内，否则就会抛出 IllegalMonitorStateException 异常，wait 方法的作用就是阻塞当前线程等待 notify/notifyAll 方法的唤醒，或等待超时后自动唤醒。

:::caution 注意

- 只能在 synchronized 关键字中使用，且调用 wait、notify 的对象与锁对象相同，否则会抛出 IllegalMonitorStateException 异常。
- wait() 方法调用后，会破坏原子性。

:::

### notify/notifyAll

有了对 wait 方法原理的理解，notify 方法和 notifyAll 方法就很容易理解了。既然 wait 方式是通过对象的 monitor 对象来实现的，所以只要在同一对象上去调用 notify/notifyAll 方法，就可以唤醒对应对象 monitor 上等待的线程了。notify 和 notifyAll 的区别在于前者只能唤醒 monitor 上的一个线程，对其他线程没有影响，而 notifyAll 则唤醒所有的线程，看下面的例子很容易理解这两者的差别：

```java
public class NotifyTest {

  public synchronized void testWait() {
    System.out.println(Thread.currentThread().getName() + " Start-----");
    try {
      wait(0);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    System.out.println(Thread.currentThread().getName() + " End-------");
  }

  public static void main(String[] args) throws InterruptedException {
    final NotifyTest test = new NotifyTest();
    for (int i = 0; i < 5; i++) {
      new Thread(
        new Runnable() {

          @Override
          public void run() {
            test.testWait();
          }
        }
      )
      .start();
    }

    synchronized (test) {
      test.notify();
    }
    Thread.sleep(3000);
    System.out.println("-----------分割线-------------");

    synchronized (test) {
      test.notifyAll();
    }
  }
}
```

输出结果如下：

```
Thread-0 Start-----
Thread-1 Start-----
Thread-2 Start-----
Thread-3 Start-----
Thread-4 Start-----
Thread-0 End-------
-----------分割线-------------
Thread-4 End-------
Thread-3 End-------
Thread-2 End-------
Thread-1 End-------
```

从结果可以看出：调用 notify 方法时只有线程 Thread-0 被唤醒，但是调用 notifyAll 时，所有的线程都被唤醒了。

:::caution 注意

- 调用 wait 方法后，线程是会释放对 monitor 对象的所有权的;
- 一个通过 wait 方法阻塞的线程，必须同时满足以下两个条件才能被真正执行：
  - 线程需要被唤醒（超时唤醒或调用 notify/notifyll）
  - 线程唤醒后需要竞争到锁（monitor）

:::

## sleep/yield/join

上面我们已经清楚了 wait 和 notify 方法的使用和原理，现在我们再来看另外一组线程间协作的方法。这组方法跟上面方法的最明显区别是：这几个方法都位于 Thread 类中，而上面三个方法都位于 Object 类中。

### sleep

sleep 方法的作用是让当前线程暂停指定的时间（毫秒）,需要注意其与 wait 方法的区别。最简单的区别是，wait 方法依赖于同步，而 sleep 方法可以直接调用。而更深层次的区别在于**sleep 方法只是暂时让出 CPU 的执行权，并不释放锁。而 wait 方法则需要释放锁。**

```java
public class SleepTest {

  public synchronized void sleepMethod() {
    System.out.println("Sleep start-----");
    try {
      Thread.sleep(1000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    System.out.println("Sleep end-----");
  }

  public synchronized void waitMethod() {
    System.out.println("Wait start-----");
    try {
      wait(1000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    System.out.println("Wait end-----");
  }

  public static void main(String[] args) {
    final SleepTest test1 = new SleepTest();

    for (int i = 0; i < 3; i++) {
      new Thread(
        new Runnable() {

          @Override
          public void run() {
            test1.sleepMethod();
          }
        }
      )
      .start();
    }

    try {
      Thread.sleep(10000); //暂停十秒，等上面程序执行完成
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    System.out.println("-----分割线-----");

    final SleepTest test2 = new SleepTest();

    for (int i = 0; i < 3; i++) {
      new Thread(
        new Runnable() {

          @Override
          public void run() {
            test2.waitMethod();
          }
        }
      )
      .start();
    }
  }
}
```

执行结果：

```log
Sleep start-----
Sleep end-----
Sleep start-----
Sleep end-----
Sleep start-----
Sleep end-----
-----分割线-----
Wait start-----
Wait start-----
Wait start-----
Wait end-----
Wait end-----
Wait end-----
```

这个结果的区别很明显，通过 sleep 方法实现的暂停，程序是顺序进入同步块的，只有当上一个线程执行完成的时候，下一个线程才能进入同步方法，sleep 暂停期间一直持有 monitor 对象锁，其他线程是不能进入的。而 wait 方法则不同，当调用 wait 方法后，当前线程会释放持有的 monitor 对象锁，因此，其他线程还可以进入到同步方法，线程被唤醒后，需要竞争锁，获取到锁之后再继续执行。

### yield

yield 方法的作用是暂停当前线程，以便其他线程有机会执行，不过不能指定暂停的时间，并且也不能保证当前线程马上停止。yield 方法只是将 Running 状态转变为 Runnable 状态。我们还是通过一个例子来演示其使用：

```java
public class YieldTest implements Runnable {

  @Override
  public void run() {
    try {
      Thread.sleep(100);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    for (int i = 0; i < 5; i++) {
      System.out.println(Thread.currentThread().getName() + ": " + i);
      Thread.yield();
    }
  }

  public static void main(String[] args) {
    YieldTest runn = new YieldTest();
    Thread t1 = new Thread(runn, "FirstThread");
    Thread t2 = new Thread(runn, "SecondThread");

    t1.start();
    t2.start();
  }
}
```

运行结果如下：

```log
FirstThread: 0
SecondThread: 0
FirstThread: 1
SecondThread: 1
FirstThread: 2
SecondThread: 2
FirstThread: 3
SecondThread: 3
FirstThread: 4
SecondThread: 4
```

这个例子就是通过 yield 方法来实现两个线程的交替执行。不过请注意：**这种交替并不一定能得到保证，源码中也对这个问题进行说明：**

:::caution 注意

- 调度器可能会忽略该方法
- 使用的时候要仔细分析和测试，确保能达到预期的效果
- 很少有场景要用到该方法，主要使用的地方是调试和测试

:::

### join

join 方法的作用是父线程等待子线程执行完成后再执行，换句话说就是将异步执行的线程合并为同步的线程。JDK 中提供三个版本的 join 方法，其实现与 wait 方法类似，join()方法实际上执行的 join(0)，而 join(long millis, int nanos)也与 wait(long millis, int nanos)的实现方式一致，暂时对纳秒的支持也是不完整的。我们可以看下 join 方法的源码，这样更容易理解：

```java
public final void join() throws InterruptedException {
        join(0);
    }

 public final synchronized void join(long millis)
    throws InterruptedException {
        long base = System.currentTimeMillis();
        long now = 0;

        if (millis < 0) {
            throw new IllegalArgumentException("timeout value is negative");
        }

        if (millis == 0) {
            while (isAlive()) {
                wait(0);
            }
        } else {
            while (isAlive()) {
                long delay = millis - now;
                if (delay <= 0) {
                    break;
                }
                wait(delay);
                now = System.currentTimeMillis() - base;
            }
        }
    }

public final synchronized void join(long millis, int nanos)
    throws InterruptedException {

        if (millis < 0) {
            throw new IllegalArgumentException("timeout value is negative");
        }

        if (nanos < 0 || nanos > 999999) {
            throw new IllegalArgumentException(
                                "nanosecond timeout value out of range");
        }

        if (nanos >= 500000 || (nanos != 0 && millis == 0)) {
            millis++;
        }

        join(millis);
    }
```

可以看出 join 方法就是通过 wait 方法来将线程的阻塞，如果 join 的线程还在执行，则将当前线程阻塞起来，直到 join 的线程执行完成，当前线程才能执行。不过有一点需要注意，这里的 join 只调用了 wait 方法，却没有对应的 notify 方法，原因是 Thread 的 start 方法中做了相应的处理，所以当 join 的线程执行完成以后，会自动唤醒主线程继续往下执行。下面我们通过一个例子来演示 join 方法的作用：

1. 不使用 join 方法：

```java
public class JoinTest implements Runnable {

  @Override
  public void run() {
    try {
      System.out.println(Thread.currentThread().getName() + " start-----");
      Thread.sleep(1000);
      System.out.println(Thread.currentThread().getName() + " end------");
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
  }

  public static void main(String[] args) {
    for (int i = 0; i < 5; i++) {
      Thread test = new Thread(new JoinTest());
      test.start();
    }

    System.out.println("Finished~~~");
  }
}
```

执行结果如下：

```log
Thread-0 start-----
Thread-1 start-----
Thread-2 start-----
Thread-3 start-----
Finished~~~
Thread-4 start-----
Thread-2 end------
Thread-4 end------
Thread-1 end------
Thread-0 end------
Thread-3 end------
```

2. 使用 join 方法：

```java
public class JoinTest implements Runnable {

  @Override
  public void run() {
    try {
      System.out.println(Thread.currentThread().getName() + " start-----");
      Thread.sleep(1000);
      System.out.println(Thread.currentThread().getName() + " end------");
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
  }

  public static void main(String[] args) {
    for (int i = 0; i < 5; i++) {
      Thread test = new Thread(new JoinTest());
      test.start();
      try {
        test.join(); //调用join方法
      } catch (InterruptedException e) {
        e.printStackTrace();
      }
    }

    System.out.println("Finished~~~");
  }
}
```

执行结果如下：

```log
Thread-0 start-----
Thread-0 end------
Thread-1 start-----
Thread-1 end------
Thread-2 start-----
Thread-2 end------
Thread-3 start-----
Thread-3 end------
Thread-4 start-----
Thread-4 end------
Finished~~~
```

对比两段代码的执行结果很容易发现，在没有使用 join 方法之间，线程是并发执行的，而使用 join 方法后，所有线程是顺序执行的。

转自[Java 并发编程：线程间的协作(wait/notify/sleep/yield/join)](https://www.cnblogs.com/paddix/p/5381958.html)
