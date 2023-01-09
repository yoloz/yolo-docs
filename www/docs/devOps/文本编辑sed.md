sed 是 Stream Editor 的简写，它用于在 Linux 中进行基本的文本转换，是文件操作的一个重要命令,主要用来自动编辑一个或多个文件、简化对文件的反复操作、编写转换程序等

## 语法

```log
sed [-hnV][-e<script>][-f<script文件>][文本文件]
```

### 参数说明

```log
-e<script>或--expression=<script> 以选项中指定的 script 来处理输入的文本文件。
-f<script 文件>或--file=<script 文件> 以选项中指定的 script 文件来处理输入的文本文件。
-h 或--help 显示帮助。
-n 或--quiet 或--silent 仅显示 script 处理后的结果。
-V 或--version 显示版本信息。
```

### 动作说明

```log
a：新增， a 的后面可以接字串，而这些字串会在新的一行出现(目前的下一行);
c：取代， c 的后面可以接字串，这些字串可以取代 n1,n2 之间的行;
d：删除， d 后面通常不接任何东东；
i：插入， i 的后面可以接字串，而这些字串会在新的一行出现(目前的上一行)；
p：打印，亦即将某个选择的数据印出。通常 p 会与参数 sed -n 一起运行;
s：取代，通常这个 s 的动作可以搭配正则表达式,例如 1,20s/old/new/g;
```

:::info
追加行的说明：`sed -e 4a\newline testfile`  
`a`动作是在匹配的行之后追加字符串，追加的字符串中可以包含换行符（实现追加多行的情况）。追加一行的话前后都不需要添加换行符 `\n`，只有追加多行时在行与行之间才需要添加换行符(最后一行最后也无需添加，添加的话会多出一个空行)。例如：  
4 行之后添加一行：`sed -e '4 a newline' testfile`  
4 行之后追加 2 行：`sed -e '4 a newline\nnewline2' testfile`  
4 行之后追加 3 行(2 行文字和 1 行空行):`sed -e '4 a newline\nnewline2\n' testfile`  
:::

## 插入

```bash
#在第二行后(即加在第三行) 加上drink tea
[roc@roclinux ~]$ sed '2a drink tea' testfile
#等价于
[roc@roclinux ~]$ sed -e 2a\drink tea testfile

#在第二行前加上drink tea
[roc@roclinux ~]$ sed '2i drink tea' testfile

#第二行后面加入两行字，例如 Drink tea or ..... 与 drink beer?
[roc@roclinux ~]$ sed '2a Drink tea or ......\
drink beer ?' testfile
#每一行之间都必须要以反斜杠 \ 来进行新行标记。上面的语句中，我们可以发现在第一行的最后面就有 \ 存在。

```

:::caution
sed 如果省略 -e,则后面的需要使用单引号括起来;

sed: -e expression #1, char 2: expected \ after `a',`c' or `i'。

`sed -e 2a\drink testfile`和`sed -e '2 a drink' testfile`一个意思。
:::

## 行替换

将第 2-5 行的内容取代成为 No 2-5 number:`sed '2,5c No 2-5 number' testfile`

## 数据的查找与替换

除了整行的处理模式之外， sed 还可以用行为单位进行部分数据的查找与替换。
sed 的查找与替换的与 vi 命令类似，语法格式如下：`sed 's/要被取代的字串/新的字串/g'`

```bash
#将 testfile 文件中每行第一次出现的 oo 用字符串 kk 替换，然后将该文件内容输出到标准输出:
[roc@roclinux ~]$ sed -e 's/oo/kk/' testfile
#g 标识符表示全局查找替换，使 sed 对文件中所有符合的字符串都被替换，修改后内容会到标准输出，不会修改原文件

#选项 i 使 sed 修改文件
[roc@roclinux ~]$ sed -i 's/oo/kk/g' testfile
#批量操作当前目录下以 test 开头的文件
[roc@roclinux ~]$ sed -i 's/oo/kk/g' ./test*
```

### 使用 /sbin/ifconfig 查询 IP

```bash
[roc@roclinux ~]$ /sbin/ifconfig eth0
eth0 Link encap:Ethernet HWaddr 00:90:CC:A6:34:84
inet addr:192.168.1.100 Bcast:192.168.1.255 Mask:255.255.255.0
inet6 addr: fe80::290:ccff:fea6:3484/64 Scope:Link
UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
#.....
```

```bash
[roc@roclinux ~]$ /sbin/ifconfig eth0 | grep 'inet addr' | sed 's/^.*addr://g' | sed 's/Bcast.*$//g'
192.168.1.100
```

## 多点编辑

一条 sed 命令，删除 testfile 第三行到末尾的数据，并把 HELLO 替换为 RUNOOB

```bash
[roc@roclinux ~]$ sed -e '3,$d' -e 's/HELLO/RUNOOB/' testfile
#第一个编辑命令删除 testfile 第三行到末尾的数据，第二条命令搜索 HELLO 替换为 RUNOOB
```

## 显示

列出 testfile 文件内的第 5-7 行：`sed -n '5,7p' testfile`
搜索 testfile 有 oo 关键字的行:`sed -n '/oo/p' testfile`

## 删除

### 删除某一行

```bash
#sed 'Nd' file
#我们来删除第一行试试：
[roc@roclinux ~]$ sed '1d' sed-demo.txt
#删除最后一行
[roc@roclinux ~]$ sed '$d' sed-demo.txt

```

### 删除某些行

sed 命令可以删除连续又或者不连续的行内容。

- 删除连续的行，例如删除从 5 到 7 行 的内容`sed '5,7d' sed-demo.txt`
- 删除不连续的行，例如删除第 1 、第 5 、第 9 和最后一行`sed '1d;5d;9d;$d' sed-demo.txt`
- 配合逻辑非 ! 使用，比如删除第 3 到 6 行以外的其他行`sed '3,6!d' sed-demo.txt`

### 删除空白行

`sed '/^$/d' sed-demo.txt`，这里两个斜杠 / / 内的表达式起到了文本匹配的作用

### 删除包含特定字符的行

```bash
#删除文件中的包含 System 这个单词的行内容
[roc@roclinux ~]$ sed '/System/d' sed-demo.txt
#删除文本中有 System 或 Linux 的行
[roc@roclinux ~]$ sed '/System\|Linux/d' sed-demo.txt
```

### 删除特定字符开头的行

```bash
#删除以 R 开头的行
[roc@roclinux ~]$ sed '/^R/d' sed-demo-1.txt
#删除以 R 或者 F 开头的行
[roc@roclinux ~]$ sed '/^[RF]/d' sed-demo-1.txt
#删除以大写字母开头的行
[roc@roclinux ~]$ sed '/^[A-Z]/d' sed-demo-1.txt

#删除包含字母字符的行
[roc@roclinux ~]$ sed '/[A-Za-z]/d' sed-demo-1.txt
#删除包含数字的行
[roc@roclinux ~]$ sed '/[0-9]/d' sed-demo-1.txt
```

### 删除特定字符结尾的行

```bash
#删除以 m 结尾的行
[roc@roclinux ~]$ sed '/m$/d' sed-demo.txt
#删除以 x 或 m 结尾的行
[roc@roclinux ~]$ sed '/[xm]$/d' sed-demo.txt
```
