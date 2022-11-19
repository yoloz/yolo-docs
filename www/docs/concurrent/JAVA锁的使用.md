## 内置锁

java 对象原生的内置锁，也被称为互斥锁(mutex)、管程(monitor)或临界区(critical section)，通过关键字 synchronized 启用(jdk 有对其优化：偏向锁，轻量级锁等)，使用方便但限制很多：

- 一个线程因为等待内置锁而进入阻塞后，就无法中断该线程了；
- 尝试获取内置锁时，无法设置超时；
- 获得内置锁，必须使用 synchronized 块`synchronized(object){<<使用共享资源>>}`；

> 这种用法的限制是获取锁和释放锁的代码必须严格嵌在同一个方法中，及锁的所有者必须相同。

另外，声明 synchronized 的函数其实只是个语法糖，其等价于将函数体按以下形式进行包装：

```java
synchronized(this){
//函数体
}
```

## ReentrantLock

与 synchronized 不同，ReetrantLock 提供了显示的 lock 和 unlock 方法，可以突破上述几个限制。

```java
Lock lock = new ReentrantLock();
lock.lock();
try{
//使用共享资源
}finally{
  lock.unlock();
}
```

:::tip 比较

- synchronized 是独占锁，加锁和解锁的过程自动进行，易于操作，但不够灵活。ReentrantLock 也是独占锁，加锁和解锁的过程需要手动进行，不易操作，但非常灵活。
- synchronized 可重入，因为加锁和解锁自动进行，不必担心最后是否释放锁；ReentrantLock 也可重入，但加锁和解锁需要手动进行，且次数需一样，否则其他线程无法获得锁。
- synchronized 不可响应中断，一个线程获取不到锁就一直等着；ReentrantLock 可以响应中断。
  :::

### 简单使用

在这里我们定义了一个 ReentrantLock，然后在 test 方法中分别 lock 和 unlock，如下:

```java
public class ReentrantLockTest {
  private static final Lock lock = new ReentrantLock();

  private static void test() {
    try {
      lock.lock();
      System.out.println(Thread.currentThread().getName() + "获取了锁");
      TimeUnit.SECONDS.sleep(2);
    } catch (InterruptedException e) {
      e.printStackTrace();
    } finally {
      System.out.println(Thread.currentThread().getName() + "释放了锁");
      lock.unlock();
    }
  }

  public static void main(String[] args) {
    new Thread(ReentrantLockTest::test, "线程A").start();
    new Thread(ReentrantLockTest::test, "线程B").start();
  }
}
```

### 公平锁实现

对于公平锁的实现要结合着可重入特性。公平锁就是谁等的时间最长，谁就先获取锁

```java
public class ReentrantLockTest {
  private static final Lock lock = new ReentrantLock(true);

  private static void test() {
    for (int i = 0; i < 2; i++) {
      try {
        lock.lock();
        System.out.println(Thread.currentThread().getName() + "获取了锁");
        TimeUnit.SECONDS.sleep(2);
      } catch (InterruptedException e) {
        e.printStackTrace();
      } finally {
        System.out.println(Thread.currentThread().getName() + "释放了锁");
        lock.unlock();
      }
    }
  }

  public static void main(String[] args) {
    new Thread(ReentrantLockTest::test, "线程A").start();
    new Thread(ReentrantLockTest::test, "线程B").start();
    new Thread(ReentrantLockTest::test, "线程C").start();
    new Thread(ReentrantLockTest::test, "线程D").start();
  }
}
```

:::note

- new 一个 ReentrantLock 的时候参数为 true，表明实现公平锁机制
- 这里我们多定义几个线程 ABCDE，然后在 test 方法中循环执行了两次加锁和解锁的过程，结果顺序是 ABCDE，ABCDE

:::

### 非公平锁实现

非公平锁就是随机的获取，谁运气好，cpu 时间片轮到哪个线程，哪个线程就能获取锁，和上面公平锁的区别很简单，就在于先 new 一个 ReentrantLock 的时候参数为 false，当然我们也可以不写，默认就是 false.

_改变后上例运行顺序是随机的了_

### 响应中断

响应中断就是一个线程获取不到锁，不会傻傻的一直等下去，ReentrantLock 会给予一个中断回应`lockInterruptibly()`，在这里我们举一个死锁的案例:

```java
public class ReentrantLockTest {
  private static final Lock lock1 = new ReentrantLock();
  private static final Lock lock2 = new ReentrantLock();

  private static class Test implements Runnable {
    private final Lock firstLock;
    private final Lock secondLock;

    public Test(Lock firstLock, Lock secondLock) {
      this.firstLock = firstLock;
      this.secondLock = secondLock;
    }

    @Override
    public void run() {
      try {
        firstLock.lockInterruptibly();
        TimeUnit.MILLISECONDS.sleep(50);
        secondLock.lockInterruptibly();
      } catch (InterruptedException e) {
        e.printStackTrace();
      } finally {
        firstLock.unlock();
        secondLock.unlock();
        System.out.println(
          Thread.currentThread().getName() + "获取到了资源正常结束!"
        );
      }
    }
  }

  public static void main(String[] args) {
    Thread t1 = new Thread(new Test(lock1, lock2));
    Thread t2 = new Thread(new Test(lock1, lock2));
    t1.start();
    t2.start();
    t1.interrupt();
  }
}
```

在这里我们定义了两个锁 firstLock 和 secondLock。然后使用两个线程 t1 和 t2 构造死锁场景。正常情况下，这两个线程相互等待获取资源而处于死循环状态。但是我们此时 t1 中断，另外一个线程 t2 就可以获取资源，正常地执行了。

### 限时等待

ReentrantLock 可以为获取锁的操作设置超时时间。`tryLock(long timeout, TimeUnit unit)`,无参则表示立即返回锁申请的结果：true 表示获取锁成功，false 表示获取锁失败。

```java
private static class Test implements Runnable {
  private final Lock firstLock;
  private final Lock secondLock;

  public Test(Lock firstLock, Lock secondLock) {
    this.firstLock = firstLock;
    this.secondLock = secondLock;
  }

  @Override
  public void run() {
    try {
      if (!firstLock.tryLock()) TimeUnit.MILLISECONDS.sleep(50);
      if (!secondLock.tryLock()) TimeUnit.MILLISECONDS.sleep(50);
    } catch (InterruptedException e) {
      e.printStackTrace();
    } finally {
      firstLock.unlock();
      secondLock.unlock();
      System.out.println(
        Thread.currentThread().getName() + "获取到了资源正常结束!"
      );
    }
  }
}
```

- 一个线程获取 firstLock 时候第一次失败，那就等 50 毫秒之后第二次获取，就这样一直不停的调试，一直等到获取到相应的资源为止,如此其他线程就有可能获取到锁了。如此上述的死锁也就无需中断线程。

当然，我们可以设置 tryLock 的超时等待时间 tryLock(long timeout,TimeUnit unit)，也就是说一个线程在指定的时间内没有获取锁，那就会返回 false。如上面的`if (!firstLock.tryLock()) TimeUnit.MILLISECONDS.sleep(50);`可换成`if (!firstLock.tryLock(50,TimeUnit.MILLISECONDS));`
