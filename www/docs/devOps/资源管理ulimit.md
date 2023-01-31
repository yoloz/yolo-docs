参考 ulimit 的帮助文档（注意：不是 man ulimit，而是 help ulimit，前者提供的是 C 语言的 ulimit 帮助）：

> Modify shell resource limits. Provides control over the resources available to the shell and processes it creates, on systems that allow such control.

可以看出，ulimit 提供了对 shell（或 shell 创建的进程）可用资源的管理。除了打开文件数之外，可管理的资源有： 最大写入文件大小、最大堆栈大小、core dump 文件大小、cpu 时间限制、最大虚拟内存大小等等，help ulimit 会列出每个 option 限制的资源。

```bash
[root@linux ~]$ ulimit -a
core file size          (blocks, -c) 0
data seg size           (kbytes, -d) unlimited
scheduling priority             (-e) 0
file size               (blocks, -f) 100
pending signals                 (-i) 15520
max locked memory       (kbytes, -l) 16384
max memory size         (kbytes, -m) unlimited
open files                      (-n) 1024
pipe size            (512 bytes, -p) 8
POSIX message queues     (bytes, -q) 819200
real-time priority              (-r) 0
stack size              (kbytes, -s) 8192
cpu time               (seconds, -t) unlimited
max user processes              (-u) 15520
virtual memory          (kbytes, -v) unlimited
file locks                      (-x) unlimited

ulimit -a # 查看所有soft值
ulimit -Ha # 查看所有hard值
ulimit -Hn # 查看nofile的hard值
ulimit -Sn 1000 # 将nofile的soft值设置为1000
ulimit -n 1000 # 同时将nofiles的hard和soft值设置为1000
```

> `ulimit` 无参数相当于 `ulimit -f -S` 指可写入的文件最大 size

## soft and hard limit

ulimit 对资源的限制区分为 soft 和 hard 两类，即同一个资源（如 nofile）存在 soft 和 hard 两个值。在命令上，ulimit 通过-S 和-H 来区分 soft 和 hard。如果没有指定-S 或-H，在显示时指的是 soft，而在设置的时候指的是同时设置 soft 和 hard 值。

:::caution 注意

- 无论何时，soft 总是小于等于 hard;
- 无论是超过了 soft 还是 hard，操作都会被拒绝。结合 soft<=hard 这句话等价于：超过了 soft 限制，操作会被拒绝。
- 一个 process 可以修改当前 process 的 soft 或 hard。但修改需满足规则：  
  1, 修改后 soft 不能超过 hard, 也就是说 soft 增大时，不能超过 hard, 若 hard 降低到比当前 soft 还小，那么 soft 也会随之降低;  
  2, 非 root 或 root 进程都可以将 soft 在[0-hard]的范围内任意增加或降低;  
  3, 非 root 进程可以降低 hard，但不能增加 hard。即 nofile 原来是 1000，修改为了 900，再修改为 1000 是不行的。（这是一个单向的，又去无回的操作）；  
  4, root 进程可以任意修改 hard 值
- JDK 的实现中会直接将 nofile 的 soft 先改成了和 hard 一样的值, 即 java 进程 soft 和 hard 一致

:::

## ulimit 的修改与生效

关于 ulimit 的生效，抓住几点即可：
:::info

- ulimit 的值总是继承父进程的设置。
- ulimit 命令可修改当前 shell 进程的设置，要保证下次生效则修改的地方要具有持久性（至少相当于目标进程而言），如.bashrc 或进程的启动脚本，运行中的进程，不受 ulimit 的修改影响。
- 增加 hard 值，只能通过 root 完成。

:::

下面给出两个案例：

**案例 1：某非 root 进程要求 2048 的 nofile，经查看当前 soft 为 1024，hard 为 4096**  
可以直接在该进程启动脚本中，增加 `ulimit -nS 2048` 即可

**案例 2：某非 root 进程要求 10240 的 nofile，经查看当前 soft 为 1024，hard 为 4096**  
显然，非 root 用户没法修改只能通过 root 修改，一般修改/etc/security/limits.conf 文件:

```log

*  hard nofile 10240
*  soft nofile 10240

```

:::note
一条记录包含 4️ 列，分别是:

- 范围 domain（`即生效的范围，可以是用户名、group 名或*代表所有非 root 用户`）；
- 类型 type：即 soft、hard，或者-代表同时设置 soft 和 hard；
- 项目 item，即 ulimit 中的资源控制项目，名字枚举可以参考文件中的注释；
- 最后就是 value

:::

## 运行中进程的 limits 的查看

修改 ulimit 前就启动的进程，如何知道其 ulimit 值呢, 可以通过查看进程目录下的 limits 文件

```bash
[root@linux ~]$ cat /proc/4660/limits
Limit                     Soft Limit           Hard Limit           Units
Max cpu time              unlimited            unlimited            seconds
Max file size             unlimited            unlimited            bytes
Max data size             unlimited            unlimited            bytes
Max stack size            8388608              unlimited            bytes
Max core file size        0                    unlimited            bytes
Max resident set          unlimited            unlimited            bytes
Max processes             15520                15520                processes
Max open files            2000                 2000                 files
Max locked memory         16777216             16777216             bytes
Max address space         unlimited            unlimited            bytes
Max file locks            unlimited            unlimited            locks
Max pending signals       15520                15520                signals
Max msgqueue size         819200               819200               bytes
Max nice priority         0                    0
Max realtime priority     0                    0
```

## 查看系统打开文件数

losf 命令虽然作用是”list open files”，但用 `lsof | wc -l` 统计打开文件数不准确, 主要原因有:

- 某些情况下，一行可能显示的是线程，而不是进程，对于多线程的情况，就会误以为一个文件被重复打开了很多次;
- 子进程会共享 file handler, 如果用 lsof 统计，必须使用精巧的过滤条件;

简单和准确的方式是通过/proc 目录查看[/proc/sys/fs/file-nr](https://www.kernel.org/doc/Documentation/sysctl/fs.txt)

- 查看一个进程的打开文件数，直接查看目录/proc/\$pid/fd 里的文件数
- /proc/sys/fs/file-max 这个文件控制了系统内核可以打开的全部文件总数
