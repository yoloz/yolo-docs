_用 ssh 登录终端后发现.bashrc 里的脚本并没有被执行_

## 更改SHELL
```bash
$ echo $SHELL
# 若输出结果不是 /bin/bash (通常是/bin/sh)，就需要更改为bash
$ chsh
#在Login Shell [/bin/sh]:后面输入 /bin/bash
```

## profile文件

`echo $SHELL`的输出为/bin/bash，通常这种情况下是因为profile文件出了问题，需要更改profile文件，将下面部分内容写入：
```bash
if [ -n "$BASH_VERSION" ]; then
    # include .bashrc if it exists
    if [ -f "$HOME/.bashrc" ]; then
        . "$HOME/.bashrc"
    fi
fi
```