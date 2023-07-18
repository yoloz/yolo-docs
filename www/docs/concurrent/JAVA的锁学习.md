锁的状态总共有四种：无锁状态、偏向锁、轻量级锁和重量级锁。随着锁的竞争，锁可以从偏向锁升级到轻量级锁，再升级的重量级锁（但是锁的升级是单向的，也就是说只能从低到高升级，不会出现锁的降级）。

锁的状态保存在对象的头文件中，以 32 位的 JDK 为例：

<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td rowspan="2" valign="top">
<p><strong>锁状态</strong></p>
</td>
<td colspan="3" valign="top">
<p align="center">25 bit</p>
</td>
<td rowspan="2" valign="top">
<p align="center">4bit</p>
</td>
<td valign="top">
<p>1bit</p>
</td>
<td valign="top">
<p>2bit</p>
</td>
</tr>
<tr>
<td colspan="2" valign="top">
<p>23bit</p>
</td>
<td valign="top">
<p>2bit</p>
</td>
<td valign="top">
<p>是否是偏向锁</p>
</td>
<td valign="top">
<p>锁标志位</p>
</td>
</tr>
<tr>
<td valign="top">
<p>轻量级锁</p>
</td>
<td colspan="5" valign="top">
<p>指向栈中锁记录的指针</p>
</td>
<td valign="top">
<p>00</p>
</td>
</tr>
<tr>
<td valign="top">
<p>重量级锁</p>
</td>
<td colspan="5" valign="top">
<p>指向互斥量（重量级锁）的指针</p>
</td>
<td valign="top">
<p>10</p>
</td>
</tr>
<tr>
<td valign="top">
<p>GC标记</p>
</td>
<td colspan="5" valign="top">
<p>空</p>
</td>
<td valign="top">
<p>11</p>
</td>
</tr>
<tr>
<td valign="top">
<p>偏向锁</p>
</td>
<td valign="top">
<p>线程ID</p>
</td>
<td colspan="2" valign="top">
<p>Epoch</p>
</td>
<td valign="top">
<p>对象分代年龄</p>
</td>
<td valign="top">
<p>1</p>
</td>
<td valign="top">
<p>01</p>
</td>
</tr>
<tr>
<td valign="top">
<p>无锁</p>
</td>
<td colspan="3" valign="top">
<p>对象的hashCode</p>
</td>
<td valign="top">
<p>对象分代年龄</p>
</td>
<td valign="top">
<p>0</p>
</td>
<td valign="top">
<p>01</p>
</td>
</tr>
</tbody>
</table>

图例如下：

![lock1.png](/docs/concurrent/javalock1.png)

![lock2.png](/docs/concurrent/javalock2.png)

## 轻量级锁

在未锁定的状态下，可以通过 CAS 来抢锁，抢到的是轻量级锁。
“轻量级”是相对于使用操作系统互斥量来实现的传统锁而言的。但是，首先需要强调一点的是，**轻量级锁并不是用来代替重量级锁的，它的本意是在没有多线程竞争的前提下，减少传统的重量级锁使用产生的性能消耗**。在解释轻量级锁的执行过程之前，先明白一点，轻量级锁所适应的场景是线程交替执行同步块的情况，如果存在同一时间访问同一锁的情况，就会导致轻量级锁膨胀为重量级锁。

![lock5.png](/docs/concurrent/javalock5.png)

### 轻量级锁的加锁过程

1. 在代码进入同步块的时候，如果同步对象锁状态为无锁状态（锁标志位为“01”状态，是否为偏向锁为“0”），虚拟机首先将在当前线程的栈帧中建立一个名为锁记录（Lock Record）的空间，用于存储锁对象目前的 Mark Word 的拷贝，官方称之为 Displaced Mark Word。这时候线程堆栈与对象头的状态如图 2.1 所示。
2. 拷贝对象头中的 Mark Word 复制到锁记录中。
3. 拷贝成功后，虚拟机将使用 CAS 操作尝试将对象的 Mark Word 更新为指向 Lock Record 的指针，并将 Lock record 里的 owner 指针指向 object mark word。如果更新成功，则执行步骤 4，否则执行步骤 5。
4. 如果这个更新动作成功了，那么这个线程就拥有了该对象的锁，并且对象 Mark Word 的锁标志位设置为“00”，即表示此对象处于轻量级锁定状态，这时候线程堆栈与对象头的状态如图 2.2 所示。
5. 如果这个更新操作失败了，虚拟机首先会检查对象的 Mark Word 是否指向当前线程的栈帧，如果是就说明当前线程已经拥有了这个对象的锁，那就可以直接进入同步块继续执行。否则说明多个线程竞争锁，轻量级锁就要膨胀为重量级锁，锁标志的状态值变为“10”，Mark Word 中存储的就是指向重量级锁（互斥量）的指针，后面等待锁的线程也要进入阻塞状态。 而当前线程便尝试使用自旋来获取锁，自旋就是为了不让线程阻塞，而采用循环去获取锁的过程。

![lock3.png](/docs/concurrent/javalock3.png)

图 2.1 轻量级锁 CAS 操作之前堆栈与对象的状态

![lock4.png](/docs/concurrent/javalock4.png)

图 2.2 轻量级锁 CAS 操作之后堆栈与对象的状态

### 轻量级锁的解锁过程：

1. 通过 CAS 操作尝试把线程中复制的 Displaced Mark Word 对象替换当前的 Mark Word。
2. 如果替换成功，整个同步过程就完成了。
3. 如果替换失败，说明有其他线程尝试过获取该锁（此时锁已膨胀），那就要在释放锁的同时，唤醒被挂起的线程。

## 重量级锁

从[关键字 synchronized](./关键字synchronized)知道，Synchronized 是通过对象内部的一个叫做监视器锁（monitor）来实现的。但是**监视器锁本质又是依赖于底层的操作系统的 Mutex Lock 来实现的**。而操作系统实现线程之间的切换这就需要从用户态转换到核心态，这个成本非常高，状态之间的转换需要相对比较长的时间，这就是为什么 Synchronized 效率低的原因。因此，这种依赖于操作系统 Mutex Lock 所实现的锁我们称之为“重量级锁”。JDK 中对 Synchronized 做的种种优化，其核心都是为了减少这种重量级锁的使用。JDK1.6 以后，为了减少获得锁和释放锁所带来的性能消耗，提高性能，引入了“轻量级锁”和“偏向锁”。
轻量级锁中的自旋有一定的次数限制，超过了次数限制，轻量级锁升级为重量级锁。

![lock6.png](/docs/concurrent/javalock6.png)

## 偏向锁

引入偏向锁是为了在无多线程竞争的情况下尽量减少不必要的轻量级锁执行路径，因为轻量级锁的获取及释放依赖多次 CAS 原子指令，而偏向锁只需要在置换 ThreadID 的时候依赖一次 CAS 原子指令（由于一旦出现多线程竞争的情况就必须撤销偏向锁，所以偏向锁的撤销操作的性能损耗必须小于节省下来的 CAS 原子指令的性能消耗）。上面说过，**轻量级锁是为了在线程交替执行同步块时提高性能，而偏向锁则是在只有一个线程执行同步块时进一步提高性能**,只有一个线程抢锁，可获取到偏向锁。

JDK 1.6 中默认是开启偏向锁和轻量级锁的，我们也可以通过-XX:-UseBiasedLocking 来禁用偏向锁。

### 偏向锁获取过程：

1. 访问 Mark Word 中偏向锁的标识是否设置成 1，锁标志位是否为 01——确认为可偏向状态。
2. 如果为可偏向状态，则测试线程 ID 是否指向当前线程，如果是，进入步骤 5，否则进入步骤 3。
3. 如果线程 ID 并未指向当前线程，则通过 CAS 操作竞争锁。如果竞争成功，则将 Mark Word 中线程 ID 设置为当前线程 ID，然后执行 5；如果竞争失败，执行 4。
4. 如果 CAS 获取偏向锁失败，则表示有竞争。当到达全局安全点（safepoint）时获得偏向锁的线程被挂起，偏向锁升级为轻量级锁，然后被阻塞在安全点的线程继续往下执行同步代码。
5. 执行同步代码。

### 偏向锁的释放：

偏向锁的撤销在上述第四步骤中有提到。偏向锁只有遇到其他线程尝试竞争偏向锁时，持有偏向锁的线程才会释放锁，线程不会主动去释放偏向锁。偏向锁的撤销，需要等待全局安全点（在这个时间点上没有字节码正在执行），它会首先暂停拥有偏向锁的线程，判断锁对象是否处于被锁定状态，撤销偏向锁后恢复到未锁定（标志位为“01”）或轻量级锁（标志位为“00”）的状态。

## 三者之间转换

未锁定->偏向锁 -> 轻量级锁 -> 重量级锁

![lock7.png](/docs/concurrent/javalock7.png)

_注:上文言偏向锁用在只有一个线程执行同步反之锁升级_

## 其他优化

### 适应性自旋（Adaptive Spinning）

从轻量级锁获取的流程中我们知道，当线程在获取轻量级锁的过程中执行 CAS 操作失败时，是要通过自旋来获取重量级锁的。问题在于，自旋是需要消耗 CPU 的，如果一直获取不到锁的话，那该线程就一直处在自旋状态，白白浪费 CPU 资源。解决这个问题最简单的办法就是指定自旋的次数，例如让其循环 10 次，如果还没获取到锁就进入阻塞状态。但是 JDK 采用了更聪明的方式——适应性自旋，简单来说就是线程如果自旋成功了，则下次自旋的次数会更多，如果自旋失败了，则自旋的次数就会减少。

### 锁粗化（Lock Coarsening）

锁粗化的概念应该比较好理解，就是将多次连接在一起的加锁、解锁操作合并为一次，将多个连续的锁扩展成一个范围更大的锁。举个例子：

```java
public class StringBufferTest {
    StringBuffer stringBuffer = new StringBuffer();

    public void append(){
        stringBuffer.append("a");
        stringBuffer.append("b");
        stringBuffer.append("c");
    }
}
```

这里每次调用 stringBuffer.append 方法都需要加锁和解锁，如果虚拟机检测到有一系列连串的对同一个对象加锁和解锁操作，就会将其合并成一次范围更大的加锁和解锁操作，即在第一次 append 方法时进行加锁，最后一次 append 方法结束后进行解锁。

### 锁消除（Lock Elimination）

锁消除即删除不必要的加锁操作。根据代码逃逸技术，如果判断到一段代码中，堆上的数据不会逃逸出当前线程，那么可以认为这段代码是线程安全的，不必要加锁。看下面这段程序：

```java
public class SynchronizedTest02 {

    public static void main(String[] args) {
        SynchronizedTest02 test02 = new SynchronizedTest02();
        //启动预热
        for (int i = 0; i < 10000; i++) {
            i++;
        }
        long start = System.currentTimeMillis();
        for (int i = 0; i < 100000000; i++) {
            test02.append("abc", "def");
        }
        System.out.println("Time=" + (System.currentTimeMillis() - start));
    }

    public void append(String str1, String str2) {
        StringBuffer sb = new StringBuffer();
        sb.append(str1).append(str2);
    }
}
```

虽然 StringBuffer 的 append 是一个同步方法，但是这段程序中的 StringBuffer 属于一个局部变量，并且不会从该方法中逃逸出去，所以其实这过程是线程安全的，可以将锁消除。下面是我本地执行的结果：

![lock8.png](/docs/concurrent/javalock8.png)

为了尽量减少其他因素的影响，这里禁用了偏向锁（-XX:-UseBiasedLocking）。通过上面程序，可以看出消除锁以后性能还是有比较大提升的。
_注：可能 JDK 各个版本之间执行的结果不尽相同，我这里采用的 JDK 版本为 1.6。_

## 总结

本文重点介绍了 JDk 中采用轻量级锁和偏向锁等对 Synchronized 的优化，但是这两种锁也不是完全没缺点的，比如竞争比较激烈的时候，不但无法提升效率，反而会降低效率，因为多了一个锁升级的过程，这个时候就需要通过-XX:-UseBiasedLocking 来禁用偏向锁。下面是这几种锁的对比：

| 锁       | 优点                                                             | 缺点                                           | 适用场景                         |
| -------- | ---------------------------------------------------------------- | ---------------------------------------------- | -------------------------------- |
| 偏向锁   | 加锁和解锁不需要额外的消耗，和执行非同步方法比仅存在纳秒级的差距 | 如果线程间存在锁竞争，会带来额外的锁撤销的消耗 | 适用于只有一个线程访问同步块场景 |
| 轻量级锁 | 竞争的线程不会阻塞，提高了程序的响应速度                         | 如果始终得不到锁竞争的线程使用自旋会消耗 CPU   | 追求响应时间，同步块执行速度快   |
| 重量级锁 | 线程竞争不使用自旋，不会消耗 CPU                                 | 线程阻塞，响应时间缓慢                         | 追求吞吐量，同步块执行速度较长   |

转自[Java 并发编程：Synchronized 底层优化（偏向锁、轻量级锁）](https://www.cnblogs.com/paddix/p/5405678.html)

引用图片[java 线程中的锁](https://www.jianshu.com/p/597e07ede3ab)
