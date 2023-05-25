## 字符串乱码

乱码出现原因：**JNA 在对 C,C++的`char*`和 JAVA 的 String 进行互相转换时候，针对 C,C++字符数组编码设定错误导致**

方式一，设置编码：

```java
//c++ char* GBK编码时
System.setProperty("jna.encoding","GBK");

//c++ char* UTF8编码时
System.setProperty("jna.encoding","UTF-8");
```

方式二，使用宽字符串 WString，当然 C,C++接口参数类型要使用 wchar_t*，这样 WString 就可以无缝转 wchar_t*了，不用做任何修改，也不会乱码;

## 释放 Native heap 内存

Java 进程的内存包括 Java NonHeap 空间、Java Heap 空间和 Native Heap 空间。JNA 中的 Memory 对象是从 Native Heap 中分配空间，但 java 的 GC 是针对 Java Heap 空间设计的，当 Java Heap 空间不足时会触发 GC，但 Native Heap 空间不够却不会触发 GC。所以，当 Java Heap 占用空间不大时，并不会 GC 掉 Memory 对象，也就不会执行 finalize()方法从而释放分配的 Native Heap 空间。

Memory 中的 finalize()方法：

```java
 /** Properly dispose of native memory when this object is GC'd. */
    @Override
    protected void finalize() {
        dispose();
    }

    /** Free the native memory and set peer to zero */
    protected synchronized void dispose() {
        try {
            free(peer);
        } finally {
            peer = 0;
            allocatedMemory.remove(this);
        }
    }

 protected static void free(long p) {
        // free(0) is a no-op, so avoid the overhead of the call
        if (p != 0) {
            Native.free(p);
        }
    }
```

由上面的源码可知，当 Memory 被 GC 掉时，会自动去释放分配的直接内存（前提是要执行 GC）。为了避免过多的使用 Memory 分配直接内存而导致直接内存空间不足，可以手动释放掉 Memory 分配的内存，方法如下：

```java
Pointer p = new Memory(1024 * 1024);
long peer = Pointer.nativeValue(p);
//手动释放内存
Native.free(peer);
//避免Memory对象被GC时重复执行Nativ.free()方法,否则在GC时会报错，并且程序异常退出
Pointer.nativeValue(p, 0);
```

## 释放 malloc 的内存

动态库文件(so,dll)中 malloc 空间，将指针返回到 JNA 后需要释放 malloc 的空间，可以使用`Native.free(long ptr)`手动释放该空间，也可以在(so,dll)中自定义 free 函数。通过 JNA 调用该 free 函数来释放 malloc 的空间,JNA 调用 C 函数机制为异步调用，所以在调用 free 后并不会立刻释放掉该内存

```java

public class JNATest {

public interface Clibrary extends Library{

    Clibrary INSTANTCE = (Clibrary)Native.loadLibrary("JnaTest", Clibrary.class);

    PointerByReference jnaTest();
    int jnaFree(Pointer p);

}

public static void main(String[] args) throws InterruptedException {
    while(true){
        for(int i = 0;i < 10;i++) {
            PointerByReference pointerOut= Clibrary.INSTANTCE.jnaTest();
            System.out.println(pointerOut.getValue().getString(0, "UTF-8"));
            Clibrary.INSTANTCE.jnaFree(pointerOut.getValue());

        }
        Thread.sleep(10000);
    }
}
}
```

```c
char **jnaTest()
{
    // ...
}

int jnaFree(void *p)
{
    if(p)
    {
        free(p);
        p = NULL;
    }
}
```
