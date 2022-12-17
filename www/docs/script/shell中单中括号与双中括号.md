在写 Shell 脚本的时候，经常在写条件判断语句时不知道该用[] 还是 [[]]，首先我们来看他们的类别：

```shell
~$ type [ [[ test
[ is a shell builtin
[[ is a shell keyword
test is a shell builtin
```

- [ 和 test 是 Shell 的内部命令([ 和 test 是相等的)

```shell
~$ test -f settings.py && echo True
True

~$ [ -f settings.py ] && echo True
True
```

- [是命令，它就和参数组合为一体被 shell 解释，那样比如 ">" "<" 就被 shell 解释为重定向符号了。关键字[[却不这样

```shell
~$ [ 2 < 1 ] && echo True || echo False
True

~$ [[ 2 < 1 ]] && echo True || echo False
False
```

- 在[[中使用&&和||表示逻辑与和逻辑或。[中使用-a 和-o 表示逻辑与和逻辑或

```shell
x=1
y=1


~$ [ $x == 1 && $y == 1 ] && echo True || echo False
-bash: [: missing `]'
False


~$ [[ $x == 1 && $y == 1 ]] && echo True || echo False
True


~$ [ $x == 1 -a $y == 1 ] && echo True || echo False
True
```

- [[支持字符串的模式匹配，使用=~操作符时甚至支持 shell 的正则表达式。字符串比较时可以把右边的作为一个模式，而不仅仅是一个字符串，比如[[ hello == hell? ]]，结果为真。[[ ]] 中匹配字符串或通配符，不需要引号

```shell
$[[ 'abcd' == a*d ]] && echo True || echo False
True


$[ 'abcd' == a*d ] && echo True || echo False
False
```
