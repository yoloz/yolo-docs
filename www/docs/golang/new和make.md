## 适用范围

- new(T) 为每个新的类型 T 分配一片内存，初始化为 0 并且返回类型为`*T` 的内存地址，可以对所有类型(适用于值类型如数组和结构体，相当于 &T{})；
- make(T) 返回一个类型为 T 的初始值，它只适用于 3 种内建的引用类型：切片、map 和 channel

换言之，new 函数仅限分配内存，make 函数会初始化

## 返回值

- new 返回指针;
- make 返回引用;

:::note
new 返回一个指向已清零内存的指针，而 make 返回一个复杂的结构。如 make 返回复杂的结构为 slice 时:它是一个包含 3 个域的结构体：指向 slice 中第一个元素的指针，slice 的长度，以及 slice 的容量。
:::

## 填充值

- new 填充零值;
- make 填充非零值;

例如：

- make([]int, 10, 100) 先分配一个有 100 个 int 的数组，然后基于数组创建一个长度为 10，容量为 100 的 slice 结构；
- new([]int)返回一个指向新分配的，被置零的 slice 结构体的指针，即指向值为 nil 的 slice 的指针

**直接使用 struct{} 来初始化 strut 时，返回的是一个 struct 类型的值，而不是指针**

```go
type Student struct{
	name string
	age int
}

func main(){
	var s1 *Student = new(Student)
	s1.age = 22
	s1.name = "tcy"
	var s2 Student = Student{age:21,name:"tcy"}
	fmt.Println(s1,s2)      //&{tcy 22} {tcy 21}
}
```
