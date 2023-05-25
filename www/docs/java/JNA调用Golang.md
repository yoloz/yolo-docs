JNA 使用可见[JNI 和 JNA 的使用](./JNI和JNA的使用.md)
cgo 使用可见[构建动态库](../golang/构建动态库.md)

对于普通类型型数据映射即可，对于 java Object,也可参考 Structure 方式

### 直接返回`*C.char`

**不能确定 jna 是否释放了`CString`里的 malloc**

```go
//#include <stdlib.h>
//#include <stdio.h>
import "C"

//export CMemInfo
func CMemInfo() *C.char {
	m, err := MemInfo()
	if err != nil {
		fmt.Println("get memory info fail..." + err.Error())
		return C.CString("{}")
	}
	bytes, err := json.Marshal(m)
	if err != nil {
		fmt.Println("marshal memory info fail..." + err.Error())
		return C.CString("{}")
	}
	gostr := string(bytes)
	return C.CString(gostr)
}
//CString converts the Go string s to a C string.
//The C string is allocated in the C heap using malloc. It is the caller's responsibility to arrange for it to be freed, such as by calling C.free (be sure to include stdlib.h if C.free is needed).
```

```java
 public interface CLibrary extends Library {

        CLibrary INSTANCE = Native.load("/xxxxx/libtest.so", CLibrary.class);

        String CMemInfo();
    }

    public static void main(String[] args) {

        CLibrary cLibrary = CLibrary.INSTANCE;
        System.out.println("memInfo: " + cLibrary.CMemInfo());

    }
```

### 返回 Structure

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
        public ByReference() {
        }

        public ByReference(String str) {
            super(str);
        }
    }
}
```

:::note

重写`getFieldOrder`方法,告诉 JNA 这两个变量和 C 结构体中的变量是怎么个对应关系的（str 对应到 p，length 对应到 n）

:::

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
