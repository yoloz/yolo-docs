## unsafe.Pointer 和 uintptr

uintptr:是一个整数类型,不是指针,但足够保存任何一种指针类型。unsafe 包支持了这些方法来完成【类型】=> uintptr 的转换：

```go
// 返回类型 x 所占据的字节数，但不包含 x 所指向的内容的大小。
func Sizeof(x ArbitraryType) uintptr
// 返回结构体成员在内存中的位置离结构体起始处的字节数，所传参数必须是结构体的成员
func Offsetof(x ArbitraryType) uintptr
// 返回 m，m 是指当类型进行内存对齐时，它分配到的内存地址能整除 m
func Alignof(x ArbitraryType) uintptr
```

你可以将任意类型变量转入，获取对应语义的 uintptr，用来后续计算内存地址(比如基于一个结构体字段地址，获取下一个字段地址等)

```go
// Pointer => uintptr
uintptr(unsafe.Pointer(&s))
// uintptr => Pointer
unsafe.Pointer(unsafe.Offsetof(s.f))
```

:::caution
变量到 uintptr 的转换以及计算必须在一个表达式中完成（需要保证原子性）
错误的例子：

```go
u := uintptr(p)
p = unsafe.Pointer(u + offset)
```

uintptr 到 Pointer 的转换一定要在一个表达式，不能用 uintptr 存起来。
:::
uintptr + offset 算地址，再跟 Pointer 转化其实是一个很强大的能力,如下：

```go
package main
import (
    "fmt"
    "unsafe"
)
func main() {
    length := 6
    arr := make([]int, length)
    for i := 0; i < length; i++ {
        arr[i] = i
    }
    fmt.Println(arr)
    // [0 1 2 3 4 5]
    // 取slice的第5个元素：通过计算第1个元素 + 4 个元素的size 得出
    end := unsafe.Pointer(uintptr(unsafe.Pointer(&arr[0])) + 4*unsafe.Sizeof(arr[0]))

    fmt.Println(*(*int)(end)) // 4
    fmt.Println(arr[4]) // 4

}
```
