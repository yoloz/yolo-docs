## Shell (( )) 的用法

双小括号 (( )) 的语法格式为：`((表达式))`

```bash
# 这种写法可以在计算完成后给变量赋值。以 ((b=a-15)) 为例，即将 a-15 的运算结果赋值给变量b
((a=10+66)
((b=a-15))
((c=a+b))

# 可以在 (( )) 前面加上$符号获取 (( )) 命令的执行结果，也即获取整个表达式的值。以 c=$((a+b)) 为例，即将 a+b 这个表达式的运算结果赋值给变量 c
a=$((10+66)
b=$((a-15))
c=$((a+b))

# (( )) 也可以进行逻辑运算，在 if 语句中常会使用逻辑运算
((a>7 && b==c))

# 需要立即输出表达式的运算结果时，可以在 (( )) 前面加$符号
echo $((a+10))

# 对多个表达式同时进行计算
((a=3+5, b=a+10))
```

:::caution 注意

- 双小括号里的表达式使用变量时不用加`$`前缀，(( )) 会自动解析变量名
- 只能进行整数运算

:::

## Shell let 命令

let 命令和双小括号 (( )) 的用法是类似的，它们都是用来对整数进行运算,不能对小数（浮点数）或者字符串进行运算。

Shell let 命令的语法格式为：`let 表达式`或者`let "表达式"`或者`let '表达式'`，都等价于`((表达式))`

- 对于多个表达式之间的分隔符，let 和 (( )) 是有区别的：let 命令以空格来分隔多个表达式，(( )) 以逗号,来分隔多个表达式；
- 对于类似 let x+y 这样的写法，Shell 虽然计算了 x+y 的值，但却将结果丢弃；若不想这样，可以使用 let sum=x+y 将 x+y 的结果保存在变量 sum 中；

```bash
# convert string to int
let map_count=$(grep vm.max_map_count /etc/sysctl.conf | awk -F= '{print $NF}')
if [[ -z "$map_count" || $map_count -lt 262144 ]]; then
  sudo sed -i '/vm.max_map_count/d' /etc/sysctl.conf
  sudo echo "vm.max_map_count=524288" | sudo tee -a /etc/sysctl.conf
  sudo sysctl -p >/dev/null
fi
```

:::catuion 注意
如果文件没有`vm.max_map_count`，即等号右边是空，则报错`-bash: let: map_count=：语法错误: 需要操作数 (错误符号是 "=")`,实际无需添加`let`。
:::
