## 判断目录是否存在

```shell
if [ -d "/data/" ];then
  echo "目录存在"
else
  echo "目录不存在"
fi
```

## 判断文件是否存在

```shell
if [ -f "/data/filename" ];then
  echo "文件存在"
else
  echo "文件不存在"
fi
```

:::tip 文件比较符
-e 判断对象是否存在

-d 判断对象是否存在，并且为目录

-f 判断对象是否存在，并且为常规文件

-L 判断对象是否存在，并且为符号链接

-h 判断对象是否存在，并且为软链接

-s 判断对象是否存在，并且长度不为 0

-r 判断对象是否存在，并且可读

-w 判断对象是否存在，并且可写

-x 判断对象是否存在，并且可执行

-O 判断对象是否存在，并且属于当前用户

-G 判断对象是否存在，并且属于当前用户组

-nt 判断 file1 是否比 file2 新 [ "/data/file1" -nt "/data/file2" ]

-ot 判断 file1 是否比 file2 旧 [ "/data/file1" -ot "/data/file2" ]
:::

## 判断字符是否为空

- -z ：判断 string 是否是空串
- -n ：判断 string 是否是非空串

```shell
#!/bin/sh

STRING=

if [[ -z "$STRING" ]]; then
  echo "empty"
fi

if [[ -n "$STRING" ]]; then
  echo "not empty"
fi
```

## 判断字符是否相等

```shell
test="test"
if [[ "$test"x = "test"x ]]; then
  echo "相等"
fi
```

:::caution

- 注意到等号两边各有一个空格,这是 unix shell 的要求
- 注意到"$test"x最后的x，这是特意安排的，因为当$test 为空的时候，上面的表达式就变成了 x = testx，显然是不相等的。而如果没有这个 x，表达式就会报错：[: =: unary operator expected

:::
