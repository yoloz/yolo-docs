## 常用快捷键

- 删除光标所在行 `dd`
- 删除光标所在行以下 5 行 `5dd`
- 撤销 `u`
- 反撤销 `ctrl+r`
- 跳到文件头 `gg`
- 跳到文件尾 `GG`
- 查找字符串 str `:/str` , 查看下一个 `n` ，查看上一个 `N`
- 显示行号 `:set nu`
- 取消显示行号 `:set nonu`
- 跳转到 79 行 `:79`
- 第二行到第十行首添加注释符 `:2,10s/^/注释符/g`
- 第二行到第十行首取消注释符 `:2,10s/^注释符//g`
- 更改打开文件的编码方式 `:e ++enc=<utf-8>`
- 取消高亮字符串 `:nohl`

:::note 备注:

- `:` 在非编辑状态下通过'shift+:'快捷方式打开

- 如果注释符是//，为了避免对/做转义处理，可如下操作(即/换成#)： `:2,10s#^#//#g` (第二行到第十行首添加//) `:2,10s#^//##g` (第二行到第十行首取消//)

- 退出编辑状态按 `esc`

:::

## 三种模式

vi 的三种模式，命令模式，插入模式，可视模式。鼠标可以启动于各种模式中：

```log
The mouse can be enabled for different modes:
n Normal mode
v Visual mode
i Insert mode
c Command-line mode
h all previous modes when editing a help file
a all previous modes
r for |hit-enter| and |more-prompt| prompt
Normally you would enable the mouse in all four modes with:
:set mouse=a
When the mouse is not enabled, the GUI will still use the mouse for
modeless selection. This doesn't move the text cursor.
```

_鼠标选中，按 y 键 -- 复制， 然后按 鼠标中键 粘贴，支持跨文件复制粘贴_

## vim 不能输入的原因

有些时候使用 vim 的时候莫名其妙的会卡死，导致输入不了内容。可能是无意中按了快捷键如“Ctrl-s”等，在 Linux 上却是禁止在命令行（控制台）输入内容，所以这时候就表现为卡死（没有任何提示），使用“ctrl-q”就可以解决。
