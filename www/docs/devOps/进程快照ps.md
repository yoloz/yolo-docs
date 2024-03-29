查看它的 man 手册可以看到，ps 命令能够给出当前系统中进程的快照。它能捕获系统在某一时刻的进程状态。如果你想不断更新查看的这个状态，可以使用 top 命令。

:::info
ps 命令支持三种使用的语法格式

- UNIX 风格，选项可以组合在一起，并且选项前必须有“-”连字符
- BSD 风格，选项可以组合在一起，但是选项前不能有“-”连字符
- GNU 风格的长选项，选项前有两个“-”连字符

我们能够混用这几种风格，但是可能会发生冲突。
:::

## 显示所有进程

```bash
[roc@roclinux ~]$ ps -ax #-a代表all,同时加上x参数会显示没有控制终端的进程
[roc@roclinux ~]$ ps -ax | less  #less对文件或其它输出进行分页显示
```

## 杀掉具体进程

```bash
[roc@roclinux ~]$ ps -ef |grep hello |grep -v grep |awk '{print $2}'|xargs kill -9
#输出 ps -ef |grep hello 结果的第二列的内容然后通过 xargs 传递给 kill -9,其实第二列内容就是 hello 的进程号
```

## 通过用户过滤

```bash
[roc@roclinux ~]$ ps -u 'user'
```

## 通过 cpu 和内存使用过滤

```bash
[roc@roclinux ~]$ ps -aux --sort -pcpu | less #CPU使用来降序排序，pcpu是%cpu的别名
[roc@roclinux ~]$ ps -aux --sort -%cpu | less #同上面一样
[roc@roclinux ~]$ ps -aux --sort -pmem | less #内存使用来降序排序，pmem是%mem的别名
[roc@roclinux ~]$ ps -aux --sort -pcpu,+pmem | head -n 10 #cpu降序，内存升序前10条
```

:::tip
--sort spec

Specify sorting order. Sorting syntax is [+|-]key[, [+|-]key[, ...]]. Choose a multi-letter key from the STANDARD FORMAT SPECIFIERS section.

The "+" is optional since default direction is increasing numerical or lexicographic order. Identical to k. For example: ps jax --sort=uid, -ppid, +pid
:::tip

## 占用最多内存的 10 个进程的内存占用总和

```bash
[roc@roclinux ~]$ ps aux | sort -nr -k 4 | head -n 10 | awk '{total+=$4}END{print "sum="total"%"}'
```

:::tip
sort: sort lines of text files

-n, --numeric-sort compare according to string numerical value
-r, --reverse reverse the result of comparisons 反转(从大到小)
-k, --key=KEYDEF sort via a key; KEYDEF gives location and type 排序 key 的位置

:::

## 通过进程名过滤

```bash
[roc@roclinux ~]$ ps -C 'cmd'
[roc@roclinux ~]$ ps -f -C 'cmd'
```

:::tip
-C cmdlist

Select by command name. This selects the processes whose executable name is given in cmdlist.  
-f Do full-format listing.  
-F Extra full format. See the -f option, which -F implies.

:::

## 显示特定进程的线程

```bash
[roc@roclinux ~]$ ps -Lf 'pid'
```

:::tip
-L Show threads, possibly with LWP and NLWP columns.

:::

## 定时刷新信息

ps 显示系统当前的进程状态，但是这个结果是静态的, 可以将 ps 命令和 watch 命令结合起来实现定时刷新

```bash
[roc@roclinux ~]$ watch -n 1 'ps -aux --sort -pmem,-pcpu'
[roc@roclinux ~]$ watch -n 1 'ps -aux --sort -pmem,-pcpu | head 10'
```

:::tip

-n, --interval seconds to wait between updates

:::

## 树形展示

```bash
[roc@roclinux ~]$ pstree -aps 'pid'
[roc@roclinux ~]$ ps -jL 'pid' # -j Jobs format(以作业的方式显示进程).
```

:::tip
pstree: display a tree of processes.

-a Show command line arguments.  
-p Show PIDs.  
-s Show parent processes of the specified process.

:::

ps 命令在不同的 UNIX、BSD、Linux 等系统中的参数不尽相同, 不要忘了通过 man ps 来查看参数

## 使用 pgrep

pgrep 的 p 表明了这个命令是专门用于进程查询的 grep。`pgrep pname`

## 使用 pidof

_没错 pid of xx，字面翻译过来就是 xx 的 PID_
`pidof pname`
和 pgrep 相比稍显不足的是，pidof 必须给出进程的全名
