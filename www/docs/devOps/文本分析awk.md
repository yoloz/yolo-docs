awk 是一种编程语言，用于在 linux/unix 下对文本和数据进行处理。数据可以来自标准输入、一个或多个文件，或其它命令的输出。它支持用户自定义函数和动态正则表达式等先进功能，是 linux/unix 下的一个强大编程工具。它在命令行中使用，但更多是作为脚本来使用。

awk 的处理文本和数据的方式是这样的，它逐行扫描文件，从第一行到最后一行，寻找匹配的特定模式的行，并在这些行上进行你想要的操作。如果没有指定处理动作，则把匹配的行显示到标准输出(屏幕)，如果没有指定模式，则所有被操作所指定的行都被处理。

:::note
awk 分别代表其作者姓氏的第一个字母。因为它的作者是三个人，分别是 Alfred Aho、Brian Kernighan、Peter Weinberger。
:::

gawk 是 awk 的 GNU 版本，它提供了 Bell 实验室和 GNU 的一些扩展

## 语法

```log
awk [选项参数] 'script' var=value file(s)
或
awk [选项参数] -f scriptfile var=value file(s)
```

:::info
-f scripfile or --file scriptfile
从脚本文件中读取 awk 命令`awk -f cal.awk log.txt`
:::

## 基本用法

log.txt 文本内容如下：

```log
2 this is a test
3 Do you like awk
This's a test
10 There are orange,apple,mongo
```

### 默认分隔符输出

默认每行按空格或 TAB 分隔

```bash
#输出文本中的 1、4 项
[roc@roclinux ~]$ awk '{print $1,$4}' log.txt
 ---------------------------------------------
 2 a
 3 like
 This's
 10 orange,apple,mongo
```

:::caution
行匹配语句 awk '' 只能用单引号
:::

### 指定分隔符输出

```bash
# 输出文件/etc/sysctl.conf中含有内容vm.max_map_count的以=分隔的最后一列内容
# ...
# vm.max_map_count=524288
# ...
[roc@roclinux ~]$ echo $(grep vm.max_map_count /etc/sysctl.conf | awk -F= '{print $NF}')
 ---------------------------------------------
524288
```

:::info
-F fs or --field-separator fs
指定输入文件行分隔符，fs 是一个字符串或者是一个正则表达式
:::

-F 相当于内置变量 FS, 指定分隔字符，直接使用内建变量

```bash
[roc@roclinux ~]$ awk 'BEGIN{FS=","} {print $1,\$2}' log.txt
 ---------------------------------------------
2 this is a test
3 Do you like awk
This's a test
10 There are orange apple
```

### 字符截取

```bash
$ echo "SHA256 Fingerprint=0288:24:7B:4B:0A:0B:1F:F3:46:B0:F4:7A:1A:E3:7E:84:D2:57:91:21:76:59:55:5D:F9:04:60:5D:2E:DE:4A" | awk -F '=' '{print $2}'
# 0288:24:7B:4B:0A:0B:1F:F3:46:B0:F4:7A:1A:E3:7E:84:D2:57:91:21:76:59:55:5D:F9:04:60:5D:2E:DE:4A
```

## 设置变量

```bash
[roc@roclinux ~]$ awk -va=1 '{print $1,$1+a}' log.txt
 ---------------------------------------------
 2 3
 3 4
 This's 1
 10 11

[roc@roclinux ~]$ awk -va=1 -vb=s '{print $1,$1+a,$1b}' log.txt
 ---------------------------------------------
 2 3 2s
 3 4 3s
 This's 1 This'ss
 10 11 10s
```

:::info
-v var=value or --asign var=value
赋值一个用户定义变量
:::

## 运算符使用

### 过滤第一列大于 2 的行

```bash
[roc@roclinux ~]$ awk '$1>2' log.txt
#输出
3 Do you like awk
This's a test
10 There are orange,apple,mongo
```

### 过滤第一列等于 2 的行

```bash
[roc@roclinux ~]$ awk '$1==2 {print $1,$3}' log.txt
#输出
2 is
```

### 过滤第一列大于 2 并且第二列等于'Are'的行

```bash
[roc@roclinux ~]$ awk '$1>2 && $2=="Are" {print $1,$2,$3}' log.txt
#输出
3 Are you
```

## 正则字符串匹配

```bash
# 输出第二列包含 "th"，并打印第二列与第四列
[roc@roclinux ~]$ awk '$2 ~ /th/ {print $2,$4}' log.txt
---------------------------------------------
this a
```

:::info
~ 表示模式开始。// 里是模式。
:::

```bash
# 输出包含 "re" 的行
[roc@roclinux ~]$ awk '/re/ ' log.txt
---------------------------------------------
3 Do you like awk
10 There are orange,apple,mongo
```

## 忽略大小写

```bash
[roc@roclinux ~]$ awk 'BEGIN{IGNORECASE=1} /this/' log.txt
---------------------------------------------
2 this is a test
This's a test
```

## 模式取反

```bash
[roc@roclinux ~]$ awk '$2 !~ /th/ {print $2,$4}' log.txt
---------------------------------------------
Are like
a
There orange,apple,mongo
[roc@roclinux ~]$ awk '!/th/ {print $2,$4}' log.txt
---------------------------------------------
Are like
a
There orange,apple,mongo
```

:::note
~ 和 !~ 匹配正则表达式和不匹配正则表达式  
! 逻辑非
:::

## 计算文件大小

```bash
[roc@roclinux ~]$ ls -l *.txt | awk '{sum+=$5} END {print sum}'
--------------------------------------------------
666581
```

## 从文件中找出长度大于 80 的行

```bash
[roc@roclinux ~]$ awk 'length>80' log.txt
```

## 输出进程 pid

```bash
[roc@roclinux ~]$ ps -ef |grep hello |awk '{print $2}'
```

## 大小写转换

使用自带的 tolower 函数能够将指定的字段全部字符转换成小写，使用 toupper 函数能够将全部字符转换成大写。

```bash
# 使用awk命令tolower函数将字符串转换成小写
echo "Tom Andersen" | awk '{print tolower($0)}'
# tom andersen

# 使用awk命令toupper函数将字符串转换成大写
echo "Tom Andersen" | awk '{print toupper($0)}'
# TOM ANDERSEN
```
