## Expect

Expect 是 Tcl 和 Tk 语言的扩展。Expect 为使交互式程序的脚本编制自动化，提供了简单而功效强大的接口。

需要单独安装

## 使用管道

```bash
$ echo y|bin/elasticsearch-reset-password -u elastic -s
# sudo自动输入密码
$ echo password | sudo -S apt-get update
```

## 使用文本块输入重定向

在 shell 脚本中，通常将 EOF 与 `<<` 结合使用，表示后续的输入作为子命令或子 Shell 的输入，直到遇到 EOF 为止，再返回到主 Shell

```bash
#!/bin/bash
sudo -S apt-get update << EOF
密码
EOF
```

> -S 参数的作用,使用 man 命令查询 sudo，对参数-S 的说明如下：  
> Write the prompt to the standard error and read the password from the standard input instead of using the terminal device. The password must be followed by a newline character.  
> 可见加上-S 参数 sudo 才会从标准输入中读取密码，不加-S 参数以上命令将起不到作用

### 多次交互自助输入

```bash
#!/usr/bin/env bash
path=$(cd `dirname $0`/..;pwd)
${path}/bin/elasticsearch-reset-password --username elastic -i <<EOF
y
密码
密码
EOF
```
