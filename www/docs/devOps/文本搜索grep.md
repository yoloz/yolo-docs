Linux 系统中有很多很有名的搜索类命令，例如 find 命令、locate 命令、sed 命令，但还有三位兄弟是不得不提的，它们在搜索界的地位举足轻重，那就是 grep、egrep、fgrep 三兄弟。

```log
                    grep
                   /    \
          (选项)   (-E)   (-F)
                  /        \
                egrep     fgrep
```

从上面的关系图可以看出，egrep 和 fgrep 都可以通过 grep 加上不同选项来实现，它们三兄弟，各有特点，如表 1 所示。
表 1 各自特点

| 命 令 | 是否支持正则 | 支持的正则类型 |
| ----- | ------------ | -------------- |
| grep  | √            | 基本正则表达式 |
| egrep | √            | 扩展正则表达式 |
| fgrep | ×            |                |

## 简单使用

```bash
#尝试搜索包含leo字符串的行：
[root@roclinux ~]# grep --color "leo" /etc/passwd
leo:x:503:503::/home/leo:/bin/bash
```

:::note
上面的`--color`选项，它的作用是高亮我们查找的字符串，这里，leo 字符串变成了红色字体。
:::

## 反向查找

```bash
[root@roclinux ~]# grep -v "leo" /etc/passwd
```

:::tip
使用`-v`选项实现了反查效果，即含有 leo 的行都没有展示出来。
:::

## 展示行号和统计行数

有时，我们希望 grep 不仅能搜索到字符串，还能展示出它们位于文件的第几行，这时我们可以使用`-n` 选项来实现这个效果。

```bash
[root@roclinux ~]# grep -n leo /etc/passwd
29:leo:x:503:503::/home/leo:/bin/bash
#leo 前的内容表示的就是行位置信息，第 29 行
```

另外一些时候，我们希望 grep 不要输出搜索到的行的内容，而是简单地告诉我们到底搜索到了多少行就好了，试试`-c`选项

```bash
[root@roclinux ~]# grep -c leo /etc/passwd
1
#表示含有 leo 的行只有 1 行
```

## 展示相邻行内容

```bash
[root@roclinux ~]# grep -A 1 leo passwd
leo:x:503:503::/home/leo:/bin/bash
roc:x:504:504::/home/roc:/bin/bash
#上面示例中的`-A`选项，是 After 的缩写，表示除了展示匹配行之外，还要展示出匹配行下面的若干行。而示例中的 `-A 1` 则表示还展示匹配行下面一行的内容。

[root@roclinux ~]# grep -B 1 leo passwd
test:x:502:502::/home/test:/bin/bash
leo:x:503:503::/home/leo:/bin/bash
#上面示例中的`-B`选项，是 Before 的缩写，表示除了展示匹配行之外，还要展示出匹配行上面的若干行。而示例中的 `-B 1` 则表示还展示匹配行上面一行的内容。

[root@roclinux ~]# grep -C 1 leo passwd
test:x:502:502::/home/test:/bin/bash
leo:x:503:503::/home/leo:/bin/bash
roc:x:504:504::/home/roc:/bin/bash
#上面示例中使用了`-C`选项，它是`-A`和`-B`选项的合体，表示除了展示匹配行之外，还要展示出匹配行上面和下面各若干行。而示例中的 `-C 1` 则表示还展示匹配行上面一行和下面一行的内容。
```

## 不要区分大小写

有时候希望不要区分字母的大小写，这样做可以提高搜索命中的概率，而`-i`选项则可以帮我们这个忙。

```bash
[root@roclinux ~]# grep -i "LEO" passwd
leo:x:503:503::/home/leo:/bin/bash
```

## 处理多文件

```bash
#找出内容中含有first单词的文件都有哪些,使用`-l`选项
[roc@roclinux ~]$ grep -l "first" *.txt
1.txt

[roc@roclinux ~]$ grep -L "first" *.txt
2.txt
3.txt
#找出不含 first 单词的文件都有哪些,反向操作就要用反向选项，只需把 `-l` 变成 `-L` 即可
```

## grep 正则

```bash
#搜索/etc/passwd文件中开头是 leo 的行
[root@roclinux ~]# grep '^leo' /etc/passwd
leo:x:503:503::/home/leo:/bin/bash

#搜索 /etc/passwd 文件中行尾是 bash 的行
[root@roclinux ~]# grep 'bash$' /etc/passwd
root:x:0:0:root:/root:/bin/bash
#...
```

### 词查找

```bash
#搜索含有 bin 这个词的行
[root@roclinux ~]# grep bin /etc/passwd
#这样的搜索结果有一个问题，那就是连 sbin 这样的词也会被搜索出来

#通过使用\<和\>来准确匹配到了 bin 这个词，而 sbin 却被挡在了门外
[root@roclinux ~]# grep '\<bin\>' /etc/passwd --color

```

grep 中还有一个更加简单的方法来实现对词的搜索,使用`-w`选项来搜索一个词

```bash
[root@roclinux ~]# grep -w 'bin' /etc/passwd
```

## 多条件查找

想查找以 root 为行首的或以 bash 为行尾的行，那应该怎么查找呢？这时可以使用 `egrep`。同样的搜索需求，grep 就没有办法满足（除非使用-E 选项）

```bash
#通过 egrep 命令实现了两个条件的搜索，其中“|”符号表示“或”，连接了两个搜索条件
[root@roclinux ~]# egrep '^root|bash$' passwd
root:x:0:0:root:/root:/bin/bash
#...
```

:::note
这就是 grep 和 egrep 的区别了，grep 的正则表达式是基本正则表达式，而 egrep 的正则表达式是扩展正则表达式
:::

## 特殊字符查找

当我们搜索时，假如搜索字符串中包含了不少特殊字符，而这些特殊字符恰好又是正则表达式预留的字符，比如说“^”、“\$”等，这时，我们就可以使用 `fgrep` 来避免烦琐的转义了,在 fgrep 的眼里，没有特殊字符，都是普通字符,我们来看下面的示例

```bash
#我们的roc.txt文件中有几个^和$
[roc@roclinux ~]$ cat roc.txt
^this third file
^$this file contain some import infomation.

# grep会尝试去找开头为this的行, 但并未找到
[roc@roclinux ~]$ grep '^this' roc.txt

# fgrep会老老实实地去找^this字符串, 它找到了
[roc@roclinux ~]$ fgrep '^this' roc.txt
^this third file
```
