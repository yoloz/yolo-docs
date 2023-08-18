## 使用 tr 命令

Linux 中的 tr 命令可以用于转换或删除文本中的指定字符。tr 命令默认从标准输入中读取数据，经过字符串转义之后，将结果输出到标准输出。

```bash
# 使用tr命令将字符串中小写字符转换成大写
echo "TomAndersen" | tr a-z A-Z
# TOMANDERSEN

# 同理大写转小写
echo "TomAndersen" | tr A-Z a-z
# tomandersen

# 使用tr命令转换字符串中全部指定字符
echo "Hello Hello" | tr Ho hO
# hellO hellO

# 使用tr命令删除文本中全部指定字符
echo "Hello Hello" | tr -d H
# ello ello

```

## awk 或 sed

此两个命令自带有大小写转换，具体见[文本分析 awk](../devOps/文本分析awk.md),[文本编辑 sed](../devOps/文本编辑sed.md)

## 利用 Bash 特性

在读取变量时使用`^^`字符能够将输出字符转换成全大写，使用`,,`字符能够将输出字符转换成全小写

```bash
# 读取变量输出全大写
var1='TomAndersen'
echo ${var1^^}
# TOMANDERSEN

# 读取变量输出全小写
var2='TomAndersen'
echo ${var2,,}
# tomandersen

```

## 使用 typeset/declare 命令

使用 typeset 或者 declare 命令设置变量的属性，两个命令使用方式完全相同。使用此命令时需慎重，当使用 typeset/declare 命令改变变量的属性时，这种改变是长期有效的，且如果将变量设置为只读命令，那么一般情况下将无法修改此变量的只读属性（可以通过 gdb 工具重置变量），只读变量生命周期一般与当前 Shell 线程相同

```bash
# 使用typeset/declare声明变量的属性,将其设置为默认大写
typeset -u a
a="abc"
echo $a
# ABC

# 使用typeset/declare声明变量的属性，将其设置为默认小写
typeset -l a
a="ABC"
echo $a
# abc
```
