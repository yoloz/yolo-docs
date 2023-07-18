## volatile 的作用

在[线程执行的特性](./线程执行特性)中提到可见性、有序性及原子性问题，通常情况下我们可以通过 Synchronized 关键字来解决这些个问题，然而 Synchronized 是一个比较重量级的操作，对系统的性能有比较大的影响，所以，如果有其他解决方案，我们通常都避免使用 Synchronized 来解决问题。而**volatile 关键字就是 Java 中提供的另一种解决可见性和有序性问题的方案。** 对于原子性，需要强调一点，也是大家容易误解的一点：对 volatile 变量的单次读/写操作可以保证原子性的，如 long 和 double 类型变量，但是并不能保证 i++这种操作的原子性，因为本质上 i++是读、写两次操作。

## volatile 的使用

关于 volatile 的使用，我们可以通过几个例子来说明其使用方式和场景。

### 防止重排序

我们从一个最经典的例子来分析重排序问题。大家应该都很熟悉单例模式的实现，而在并发环境下的单例实现方式，我们通常可以采用双重检查加锁（DCL）的方式来实现。如下：

```java
public class Singleton {
    public static volatile Singleton singleton;

    /**
     * 构造函数私有，禁止外部实例化
     */
    private Singleton() {};

    public static Singleton getInstance() {
        if (singleton == null) {
            synchronized (singleton) {
                if (singleton == null) {
                    singleton = new Singleton();
                }
            }
        }
        return singleton;
    }
}
```

现在我们分析一下为什么要在变量 singleton 之间加上 volatile 关键字。要理解这个问题，先要了解对象的构造过程，实例化一个对象其实可以分为三个步骤：

1. 分配内存空间
2. 初始化对象
3. 将内存空间的地址赋值给对应的引用

但是由于操作系统可以对指令进行重排序，所以上面的过程也可能会变成如下过程：

1. 分配内存空间
2. 将内存空间的地址赋值给对应的引用
3. 初始化对象

如果是这个流程，多线程环境下就可能将一个未初始化的对象引用暴露出来，从而导致不可预料的结果。因此，为了防止这个过程的重排序，我们需要将变量设置为 volatile 类型的变量。

### 实现可见性

可见性问题主要指一个线程修改了共享变量值，而另一个线程却看不到。引起可见性问题的主要原因是每个线程拥有自己的一个高速缓存区——线程工作内存。volatile 关键字能有效的解决这个问题，我们看下下面的例子，就可以知道其作用：

```java
public class VolatileTest {
    int a = 1;
    int b = 2;

    public void change(){
        a = 3;
        b = a;
    }

    public void print(){
        System.out.println("b="+b+";a="+a);
    }

    public static void main(String[] args) {
        while (true){
            final VolatileTest test = new VolatileTest();
            new Thread(new Runnable() {
                @Override
                public void run() {
                    try {
                        Thread.sleep(10);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    test.change();
                }
            }).start();

            new Thread(new Runnable() {
                @Override
                public void run() {
                    try {
                        Thread.sleep(10);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    test.print();
                }
            }).start();

        }
    }
}
```

直观上说，这段代码的结果只可能有两种：b=3;a=3 或 b=2;a=1。不过运行上面的代码（可能时间上要长一点），你会发现除了上两种结果之外，还出现了第三种结果：
......
b=2;a=1
b=2;a=1
b=3;a=3
b=3;a=3
<font style={{color: 'red'}}>b=3;a=1</font>
b=3;a=3
b=2;a=1
b=3;a=3
b=3;a=3
......
为什么会出现 b=3;a=1 这种结果呢？
正常情况下，如果先执行 change 方法，再执行 print 方法，输出结果应该为 b=3;a=3。相反，如果先执行的 print 方法，再执行 change 方法，结果应该是 b=2;a=1。
那 b=3;a=1 的结果是怎么出来的？
原因就是第一个线程将值 a=3 修改后，但是对第二个线程是不可见的，所以才出现这一结果。
如果将 a 和 b 都改成 volatile 类型的变量再执行，则再也不会出现 b=3;a=1 的结果了。

### 保证原子性

关于原子性的问题，上面已经解释过。volatile 只能保证对单次读/写的原子性。这个问题可以看下 JLS 中的描述：

> 17.7 Non-Atomic Treatment of double and long
> For the purposes of the Java programming language memory model, a single write to a non-volatile long or double value is treated as two separate writes: one to each 32-bit half. This can result in a situation where a thread sees the first 32 bits of a 64-bit value from one write, and the second 32 bits from another write.
>
> Writes and reads of volatile long and double values are always atomic.
>
> Writes to and reads of references are always atomic, regardless of whether they are implemented as 32-bit or 64-bit values.
>
> Some implementations may find it convenient to divide a single write action on a 64-bit long or double value into two write actions on adjacent 32-bit values. For efficiency's sake, this behavior is implementation-specific; an implementation of the Java Virtual Machine is free to perform writes to long and double values atomically or in two parts.
>
> Implementations of the Java Virtual Machine are encouraged to avoid splitting 64-bit values where possible. Programmers are encouraged to declare shared 64-bit values as volatile or synchronize their programs correctly to avoid possible complications.

这段话的内容跟我前面的描述内容大致类似。因为 long 和 double 两种数据类型的操作可分为高 32 位和低 32 位两部分，因此普通的 long 或 double 类型读/写可能不是原子的。因此，鼓励大家将共享的 long 和 double 变量设置为 volatile 类型，这样能保证任何情况下对 long 和 double 的单次读/写操作都具有原子性。**新的 JDK 中，JVM 已经保证对 64 位数据的读取和赋值也是原子性操作了**

关于 volatile 变量对原子性保证，有一个问题容易被误解。现在我们就通过下列程序来演示一下这个问题：

```java
public class VolatileTest01 {
    volatile int i;

    public void addI(){
        i++;
    }

    public static void main(String[] args) throws InterruptedException {
        final  VolatileTest01 test01 = new VolatileTest01();
        for (int n = 0; n < 1000; n++) {
            new Thread(new Runnable() {
                @Override
                public void run() {
                    try {
                        Thread.sleep(10);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    test01.addI();
                }
            }).start();
        }

        Thread.sleep(10000);//等待10秒，保证上面程序执行完成

        System.out.println(test01.i);
    }
}
```

大家可能会误认为对变量 i 加上关键字 volatile 后，这段程序就是线程安全的。大家可以尝试运行上面的程序。下面是我本地运行的结果：**981**
可能每个人运行的结果不相同。不过应该能看出，volatile 是无法保证原子性的（否则结果应该是 1000）。原因也很简单，i++其实是一个复合操作，包括三步骤：

1. 读取 i 的值
2. 对 i 加 1
3. 将 i 的值写回内存

volatile 是无法保证这三个操作是具有原子性的，我们可以通过 AtomicInteger 或者 Synchronized 来保证+1 操作的原子性。

## volatile 的原理

### 可见性实现

在前文中已经提及过，线程本身并不直接与主内存进行数据的交互，而是通过线程的工作内存来完成相应的操作。这也是导致线程间数据不可见的本质原因。因此要实现 volatile 变量的可见性，直接从这方面入手即可。对 volatile 变量的写操作与普通变量的主要区别有两点：

1. 修改 volatile 变量时会强制将修改后的值刷新的主内存中
2. 修改 volatile 变量后会导致其他线程工作内存中对应的变量值失效。因此，再读取该变量值的时候就需要重新从读取主内存中的值

通过这两个操作，就可以解决 volatile 变量的可见性问题。

### 有序性实现

在解释这个问题前，我们先来了解一下 Java 中的 happen-before 规则，JSR 133 中对 Happen-before 的定义如下：

> Two actions can be ordered by a happens-before relationship.If one action happens before another, then the first is visible to and ordered before the second.

通俗一点说就是如果**a happen-before b**，则**a 所做的任何操作对 b 是可见的**。我们再来看看 JSR 133 中定义了哪些 happen-before 规则：

> • Each action in a thread happens before every subsequent action in that thread.
> • An unlock on a monitor happens before every subsequent lock on that monitor.
> • A write to a volatile field happens before every subsequent read of that volatile.
> • A call to start() on a thread happens before any actions in the started thread.
> • All actions in a thread happen before any other thread successfully returns from a join() on that thread.
> • If an action a happens before an action b, and b happens before an action c, then a happens before c.

翻译过来为：

- 同一个线程中的，前面的操作 happen-before 后续的操作。（即单线程内按代码顺序执行。但是，在不影响在单线程环境执行结果的前提下，编译器和处理器可以进行重排序，这是合法的。换句话说，这一是规则无法保证编译重排和指令重排）。
- 监视器上的解锁操作 happen-before 其后续的加锁操作。（Synchronized 规则）
- 对 volatile 变量的写操作 happen-before 后续的读操作。（volatile 规则）
- 线程的 start() 方法 happen-before 该线程所有的后续操作。（线程启动规则）
- 线程所有的操作 happen-before 其他线程在该线程上调用 join 返回成功后的操作。
- 如果 a happen-before b，b happen-before c，则 a happen-before c（传递性）。

这里我们主要看下第三条：volatile 变量的保证有序性的规则。在[线程执行的特性](./线程执行特性.md)中提到过重排序分为编译器重排序和处理器重排序。为了实现 volatile 内存语义，JVM 会对 volatile 变量限制这两种类型的重排序。

### 内存屏障

为了实现 volatile 可见性和 happen-befor 的语义。JVM 底层是通过一个叫做“内存屏障”的东西来完成。内存屏障，也叫做内存栅栏，是一组处理器指令，用于实现对内存操作的顺序限制。

1. LoadLoad 屏障

执行顺序：Load1—>Loadload—>Load2
确保 Load2 及后续 Load 指令加载数据之前能访问到 Load1 加载的数据。

2. StoreStore 屏障

执行顺序：Store1—>StoreStore—>Store2
确保 Store2 以及后续 Store 指令执行前，Store1 操作的数据对其它处理器可见。

3. LoadStore 屏障

执行顺序： Load1—>LoadStore—>Store2
确保 Store2 和后续 Store 指令执行前，可以访问到 Load1 加载的数据。

4. StoreLoad 屏障

执行顺序: Store1—> StoreLoad—>Load2
确保 Load2 和后续的 Load 指令读取之前，Store1 的数据对其他处理器是可见的。

转自[Java 并发编程：volatile 的使用及其原理](https://www.cnblogs.com/paddix/p/5428507.html)
