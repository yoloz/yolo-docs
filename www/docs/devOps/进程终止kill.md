## killall

killall 命令用于杀死指定名字的进程（kill processes by name）

我们可以使用 kill 命令杀死指定进程 PID 的进程，如果要找到我们需要杀死的进程，我们还需要在之前使用 ps 等命令再配合 grep 来查找进程，而 killall 把这两个过程合二为一，是一个很好用的命令。

`killall [参数] [进程名]`

:::info 参数
-Z 只杀死拥有 scontext 的进程  
-e 要求匹配进程名称  
-I 忽略小写  
-g 杀死进程组而不是进程  
-i 交互模式，杀死进程前先询问用户  
-l 列出所有的已知信号名称  
-q 不输出警告信息  
-s 发送指定的信号  
-v 报告信号是否成功发送  
-w 等待进程死亡  
--help 显示帮助信息  
--version 显示版本显示
:::

```bash
#杀死所有同名进程
[roc@roclinux ~]$ killall nginx
[roc@roclinux ~]$ killall -9 bash
#向进程发送指定信号
[roc@roclinux ~]$ killall -TERM nginx
[roc@roclinux ~]$ killall -KILL nginx
```

## pkill

pkill 和 killall 应用方法差不多，也是直接杀死运行中的程式,pkill 后的进程名可以不完整，而 killall 的进程名必须完整的。

```bash
#关闭已登录的用户
[roc@roclinux ~]$ who
user1    pts/0        Jun  7 21:50 (125.120.44.33)
user2    pts/1        Jun  7 21:55 (125.120.44.33)
user3    pts/2        Jun  7 22:05 (125.120.44.33)

[roc@roclinux ~]$ pkill -kill -t pts/0

```

## kill

kill 命令用来终止指定的进程（terminate a process）的运行，是 Linux 下进程管理的常用命令

通常，终止一个前台进程可以使用 Ctrl+C 键，但是，对于一个后台进程就须用 kill 命令来终止，我们需要先使用 ps/pidof/pstree/top 等工具获取进程 PID，然后使用 kill 命令来杀掉该进程。

kill 命令是通过向进程发送指定的信号来结束相应进程的。在默认情况下，采用编号为 15 的 TERM 信号。TERM 信号将终止所有不能捕获该信号的进程。对于那些可以捕获该信号的进程就要用编号为 9 的 kill 信号，强行“杀掉”该进程。

kill 命令可以带信号号码选项，也可以不带。如果没有信号号码，kill 命令就会发出终止信号(15)，这个信号可以被进程捕获，使得进程在退出之前可以清理并释放资源。也可以用 kill 向进程发送特定的信号。

例如：`kill -2 123`它的效果等同于在前台运行 PID 为 123 的进程时按下 Ctrl+C 键。但是，普通用户只能使用不带 signal 参数的 kill 命令或最多使用-9 信号。

:::caution 注意

- 信号使进程强行终止，这常会带来一些副作用，如数据丢失或者终端无法恢复到正常状态。
- 要撤销所有的后台作业，可以输入`kill 0`。因为有些在后台运行的命令会启动多个进程，跟踪并找到所有要杀掉的进程的 PID 是件很麻烦的事。这时，使用`kill 0`来终止所有由当前 shell 启动的进程，是个有效的方法。

:::

`kill [参数] [进程 id]`

:::info 参数
-l 信号，若果不加信号的编号参数，则使用“-l”参数会列出全部的信号名称  
-a 当处理当前进程时，不限制命令名和进程号的对应关系  
-p 指定 kill 命令只打印相关进程的进程号，而不发送任何信号  
-s 指定发送信号  
-u 指定用户
:::

```bash
#列出所有信号名称
[roc@roclinux ~]$ kill -l
 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL
 5) SIGTRAP      6) SIGABRT      7) SIGBUS       8) SIGFPE
 9) SIGKILL     10) SIGUSR1     11) SIGSEGV     12) SIGUSR2
13) SIGPIPE     14) SIGALRM     15) SIGTERM     16) SIGSTKFLT
17) SIGCHLD     18) SIGCONT     19) SIGSTOP     20) SIGTSTP
21) SIGTTIN     22) SIGTTOU     23) SIGURG      24) SIGXCPU
25) SIGXFSZ     26) SIGVTALRM   27) SIGPROF     28) SIGWINCH
29) SIGIO       30) SIGPWR      31) SIGSYS      34) SIGRTMIN
35) SIGRTMIN+1  36) SIGRTMIN+2  37) SIGRTMIN+3  38) SIGRTMIN+4
39) SIGRTMIN+5  40) SIGRTMIN+6  41) SIGRTMIN+7  42) SIGRTMIN+8
43) SIGRTMIN+9  44) SIGRTMIN+10 45) SIGRTMIN+11 46) SIGRTMIN+12
47) SIGRTMIN+13 48) SIGRTMIN+14 49) SIGRTMIN+15 50) SIGRTMAX-14
51) SIGRTMAX-13 52) SIGRTMAX-12 53) SIGRTMAX-11 54) SIGRTMAX-10
55) SIGRTMAX-9  56) SIGRTMAX-8  57) SIGRTMAX-7  58) SIGRTMAX-6
59) SIGRTMAX-5  60) SIGRTMAX-4  61) SIGRTMAX-3  62) SIGRTMAX-2
63) SIGRTMAX-1  64) SIGRTMAX

#只有第9种信号(SIGKILL)才可以无条件终止进程，其他信号进程都有权利忽略,下面是常用的信号：
#HUP    1    终端断线
#INT     2    中断（同 Ctrl + C）
#QUIT    3    退出（同 Ctrl + \）
#TERM   15    终止
#KILL    9    强制终止
#CONT   18    继续（与STOP相反， fg/bg命令）
#STOP    19    暂停（同 Ctrl + Z）


#得到指定信号的数值
[roc@roclinux ~]$ kill -l KILL
[roc@roclinux ~]$ kill -l SIGKILL
[roc@roclinux ~]$ kill -l TERM
[roc@roclinux ~]$ kill -l SIGTERM

#先用ps查找进程，然后用kill杀掉
[roc@roclinux ~]$ ps -ef|grep vim
root      3268  2884  0 16:21 pts/1    00:00:00 vim install.log
root      3370  2822  0 16:21 pts/0    00:00:00 grep vim
[roc@roclinux ~]$ kill 3268
#彻底杀死进程
[roc@roclinux ~]$ kill –9 3268   #-9 强制杀掉进程
```

### 实例

把 ps 的查询结果通过管道给 grep 查找包含特定字符串的进程。管道符“|”用来隔开两个命令，管道符左边命令的输出会作为管道符右边命令的输入。

```bash
[roc@roclinux ~]$ ps -ef | grep firefox | grep -v grep | cut -c 9-15 | xargs kill -s 9
#或者
[roc@roclinux ~]$ ps -ef | grep firefox | awk '{print $2}' | xargs kill -9
#或者
[roc@roclinux ~]$ kill -s 9 $(ps -aux | grep firefox | awk '{print $2}')
#或者
[roc@roclinux ~]$ pgrep firefox | xargs kill -s 9
#或者
[roc@roclinux ~]$ kill -s 9 $(pgrep firefox)
```

:::note 说明
“grep firefox”的输出结果是，所有含有关键字“firefox”的进程;  
“grep -v grep”是在列出的进程中去除含有关键字“grep”的进程;  
“cut -c 9-15”是截取输入行的第 9 个字符到第 15 个字符，而这正好是进程号 PID;  
“xargs kill -s 9”中的 xargs 命令是用来把前面命令的输出结果（PID）作为“kill -s 9”命令的参数，并执行该命令;  
“kill -s 9”会强行杀掉指定进程。
:::
