JNA 使用可见[JNA 简单类型使用](./JNA简单类型使用.md)

cgo 使用可见[构建动态库](../golang/构建动态库.md)

## 发送结构体

参考[Java 调用 Golang 生成的动态库](https://studygolang.com/topics/6025/comment/17780)

```go
package main

import "fmt"

//export Hello
func Hello(msg string) {
    fmt.Print("hello: " + msg)
}

func main() {
}
```

编译后查看生成的`.h`文件，可知参数`string`是 GoString,对应 C 的结构体，如下：

```h
// ...
typedef struct { const char *p; ptrdiff_t n; } _GoString_;
// .....
typedef _GoString_ GoString;
// ...
/* End of boilerplate cgo prologue.  */

#ifdef __cplusplus
extern "C" {
#endif

extern void Hello(GoString p0);

#ifdef __cplusplus
}
#endif
```

:::note

- `char *p`:直接对应 java 的 String；
- `ptrdiff_t n`:两个内存地址之间距离的值，数据类型实际上就是 C 中的`long int`，在这里他表示的是字符串 char 的长度;

:::

java 创建 GoString

```java
public class GoString extends Structure {

    public String str;
    public long length;

    public GoString() {
    }

    public GoString(String str) {
        this.str = str;
        this.length = str.length();
    }

    @Override
    protected List<String> getFieldOrder() {
        List<String> fields = new ArrayList<>();
        fields.add("str");
        fields.add("length");
        return fields;
    }

    // 传真实值
    public static class ByValue extends GoString implements Structure.ByValue {
        public ByValue() {
        }

        public ByValue(String str) {
            super(str);
        }
    }
    //传引用
    public static class ByReference extends GoString implements Structure.ByReference {
         public ByValue() {
        }

        public ByValue(String str) {
            super(str);
        }
    }
}
```

```java
 public interface CLibrary extends Library {

        CLibrary INSTANCE = Native.load("/xxxxx/libtest.so", CLibrary.class);

        void Hello(GoString.ByValue msg);
    }

    public static void main(String[] args) {

        CLibrary cLibrary = CLibrary.INSTANCE;
        System.out.println("memInfo: " + cLibrary.Hello(new GoString.ByValue("hello world!")););

    }
```

## 接收结构体

```go
package main

//#include <stdlib.h>

import (
	"C"
	"encoding/json"
	"envaware-client/src/psutil"
)
import "fmt"

//export CTest
func CTest() (uint8, *C.char) {
	m, err := psutil.CpuInfo()
	if err != nil {
		return 1, C.CString(err.Error())
	}
	bytes, err := json.Marshal(m)
	if err != nil {
		return 1, C.CString(err.Error())
	}
	gostr := string(bytes)
	return 0, C.CString(gostr)
}

func main() {}
```

编译：`go build -buildmode=c-shared -ldflags "-s -w" -o libtest.so main.go`，查看生成的`libtest.h`文件：

```c
// ...
/* Return type for CTest */
struct CTest_return {
	GoUint8 r0;
	char* r1;
};
extern struct CTest_return CTest();

#ifdef __cplusplus
}
#endif
```

从`libtest.h`文件里可以看到返回类型`struct CTest_return`，类型对应关系查看[JNA 简单类型使用](./JNA简单类型使用.md),对应的 JAVA 接口如下：

```java
import com.sun.jna.Pointer;
import com.sun.jna.Structure;

@Structure.FieldOrder({"type", "msg"})
public class EnvMsg extends Structure {

    //使用public,否则报错Structure.getFieldOrder() on class xxx.EnvMsg$ByValue returns names ([msg, type]) which do not match declared field names ([])
    public short type; //0:success,1:error
    //    public String msg;
    public Pointer msg; // 手动释放c string的malloc

//    public static class ByReference extends EnvMsg implements Structure.ByReference {
//    }

    public static class ByValue extends EnvMsg implements Structure.ByValue {
    }
}

public interface CLibrary extends Library {

    CLibrary INSTANCE = Native.load("src/main/resources/libtest.so", CLibrary.class);

    EnvMsg.ByValue CTest();
}

public static void main(String[] args) {
    CLibrary cLibrary = CLibrary.INSTANCE;
    EnvMsg.ByValue envMsg = cLibrary.CTest();
    if (envMsg.type == 0) {
        System.out.println("success:" + envMsg.msg.getString(0, "UTF-8"));
    } else {
        System.out.println("error:" + envMsg.msg.getString(0, "UTF-8"));
    }
    Native.free(Pointer.nativeValue(envMsg.msg));
}
```

## JNA 调用

参考：[JNA 参数类型转换(含接收、发送结构体)](https://blog.csdn.net/qq_23858785/article/details/123777475)

### 编写结构体

在 Java 端覆写结构体需要注意两点：

- 需要在结构体定义中定义 2 个内部类 ByReference 和 ByValue，来实现指针类型接口和值类型接口；
- 重写 getFieldOrder()来告诉 C/C++的成员取值次序，结构体定义取值次序，需要与 c++中对齐，不然报 NoSuchFieldError 错误；

### 关于 ByReference 和 ByValue

- 只要涉及到结构体的传递，必须使用 ByReference 或者 ByValue 中的一种
- 指针和引用的传递使用 ByReference
- 拷贝参数传递使用 ByValue

### 声明函数

区别主要在声明处，如果收发的话，使用 ByValue，只发不接收使用 ByReference，否则会报错 Exception in thread "main" java.lang.Error: Invalid memory access

```java
public interface CLibrary extends Library {

    DemoApplication.CLibrary INSTANCE = (DemoApplication.CLibrary) Native.loadLibrary("Project6", DemoApplication.CLibrary.class); // 引入库文件

    public void xmltest(QueryStructure.ByReference queryInfo);
    public Location.ByValue struc(Location.ByValue l);
}
```

> 结论待商榷
