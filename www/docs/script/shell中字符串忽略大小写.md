## 借助 tr 命令来处理

```bash
#!/bin/bash
name1="TOm"
name2="tom"

temp1=$(echo $name1 | tr [a-z] [A-Z])    # 将name1全部转变成大写再做比较
temp2=$(echo $name2 | tr [a-z] [A-Z])    # 将name2全部转变成大写再做比较

if [ x"$temp1" = x"$temp2" ];then        # x$"temp1"前面加x防止其中为空
    echo "OK"
else
    echo "NO"
fi
```

## 借助 grep 命令来处理

```bash
#!/bin/bash

name="TOM"

if echo "$name" | grep -qwi "tom"
then
    echo "OK"
else
    echo "NO"
fi
```

:::note 备注

-q # 静默的方式，即不会产生输出，成功则`$?`返回 0，刚好走 if 的条件分支，非常巧妙！
-i # 匹配字符串，但忽略大小写
-w # 按照单词进行匹配

:::

## 借助 shopt 命令来处理

```bash
#!/bin/bash
name1="TOM"
name2="tom"

shopt -s nocasematch   # 打开Bash的开关，忽略大小写

case "$name1" in
    $name2)  echo "MATCH"  ;;
         *)  echo "NO"     ;;
esac
```
