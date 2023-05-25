## error

Go 中有关于错误处理的标准模式，即 `error` 接口，定义如下：

```go
type error interface {
	Error() string
}
```

大部分函数，如果需要返回错误的话，基本都会将 `error` 作为多个返回值的最后一个，举个例子：

```go
func main() {
	n, err := echo(10)
	if err != nil {
		fmt.Println("error: " + err.Error())
	} else {
		fmt.Println(n)
	}
}

func echo(param int) (int, error) {
	return param, nil
}
```

我们也可以使用自定义的 `error` 类型，比如调用标准库的 `os.Stat` 方法，返回的错误就是自定义类型：

```go
type PathError struct {
	Op   string
	Path string
	Err  error
}

func (e *PathError) Error() string {
	return e.Op + " " + e.Path + ": " + e.Err.Error()
}
```

## defer

延迟函数调用，`defer` 后边会接一个函数，但该函数不会立刻被执行，而是等到包含它的程序返回时（包含它的函数执行了 `return` 语句、运行到函数结尾自动返回、对应的 goroutine `panic`），`defer` 函数才会被执行。

通常用于资源释放、打印日志、异常捕获等。

```go
func main() {
    f, err := os.Open(filename)
    if err != nil {
        return err
    }
    /**
     * 这里defer要写在err判断的后边而不是os.Open后边
     * 如果资源没有获取成功，就没有必要对资源执行释放操作
     * 如果err不为nil而执行资源执行释放操作，有可能导致panic
     */
    defer f.Close()
}
```

`defer` 语句经常成对出现，比如打开和关闭，连接和断开，加锁和解锁。

`defer` 语句在 `return` 语句之后执行:

```go
func main() {
	fmt.Println(triple(4)) // 12
}

func double(x int) (result int) {
	defer func() {
		fmt.Printf("double(%d) = %d\n", x, result)
	}()

	return x + x
}

func triple(x int) (result int) {
	defer func() {
		result += x
	}()

	return double(x)
}
```

切勿在 `for` 循环中使用 `defer` 语句，因为 `defer` 语句不到函数的最后一刻是不会执行的，所以下面这段代码很可能会用尽所有文件描述符:

```go
for _, filename := range filenames {
    f, err := os.Open(filename)
    if err != nil {
        return err
    }
    defer f.Close()
}
```

一种解决办法是将循环体单独写一个函数，这样每次循环的时候都会调用关闭函数。

```go
for _, filename := range filenames {
    if err := doFile(filename); err != nil {
        return err
    }
}

func doFile(filename string) error {
    f, err := os.Open(filename)
    if err != nil {
        return err
    }
    defer f.Close()
}
```

`defer` 语句的执行是按调用 `defer` 语句的倒序执行。

```go
package main

import (
	"fmt"
)

func main() {
	defer func() {
		fmt.Println("first")
	}()

	defer func() {
		fmt.Println("second")
	}()

	fmt.Println("done")
}
```

输出：

```
done
second
first
```

## panic 和 recover

一般情况下，在程序里记录错误日志，就可以帮助我们在碰到异常时快速定位问题。但有一些错误比较严重的，比如数组越界访问，程序会主动调用 `panic` 来抛出异常，然后程序退出。

如果不想程序退出的话，可以使用 `recover` 函数来捕获并恢复。类似 `try-catch`。

先来看看两个函数的定义：

```go
func panic(interface{})
func recover() interface{}
```

`panic` 参数类型是 `interface{}`，所以可以接收任意参数类型，比如：

```go
panic(404)
panic("network broken")
panic(Error("file not exists"))
```

`recover` 需要在 `defer` 函数中执行，举个例子：

```go
func main() {
	G()
}

func G() {
	defer func() {
		fmt.Println("c")
	}()
	F()
	fmt.Println("继续执行")
}

func F() {
	defer func() {
		if err := recover(); err != nil {
			fmt.Println("捕获异常:", err)
		}
		fmt.Println("b")
	}()
	panic("a")
}
```

输出：

```
捕获异常: a
b
继续执行
c
```

`F()` 中抛出异常被捕获，`G()` 还可以正常继续执行。如果 `F()` 没有捕获的话，那么 `panic` 会向上传递，直接导致 `G()` 异常，然后程序直接退出。

还有一个场景就是我们自己在调试程序时，可以使用 `panic` 来中断程序，抛出异常，用于排查问题。
