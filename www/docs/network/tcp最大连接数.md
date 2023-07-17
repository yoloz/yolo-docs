在 Linux 平台上，无论编写客户端程序还是服务端程序，在进行高并发 TCP 连接处理时，最高的并发数量都要受到系统对用户单一进程同时可打开文件数量的限制（系统为每个 TCP 连接都要创建一个 socket 句柄，每个 socket 句柄同时也是一个文件句柄）. 可使用 `ulimit -n` 查看系统允许当前用户单个进程打开的文件数限制，排除每个进程必然打开的标准输入，标准输出，标准错误，服务器监听 socket, 进程间通讯的 unix 域 socket 等文件，实际能够并发的 TCP 连接数要比限制值少。

## 修改网络内核对 TCP 连接的有关限制

在 Linux 上编写支持高并发 TCP 连接的客户端通讯处理程序时，有时会发现尽管已经解除了系统对用户同时打开文件数的限制，但仍会出现并发 TCP 连接数增加到一定数量时，再也无法成功建立新的 TCP 连接的现象, 出现这种现在的原因有多种:

**可能是因为 Linux 网络内核对本地端口号范围有限制**, 进一步分析为什么无法建立 TCP 连接，会发现问题出在 connect()调用返回失败，查看系统错误提示消息是"Can't assign requested address", 同时用 tcpdump 工具监视网络会发现根本没有 TCP 连接时客户端发 SYN 包的网络流量, 这些情况说明问题在于本地 Linux 系统内核中有限制。

> 根本原因在于 Linux 内核的 TCP/IP 协议实现模块对系统中所有的客户端 TCP 连接对应的本地端口号的范围进行了限制（如内核限制本地端口号的范围为 1024~32768 之间）。当系统中某一时刻同时存在太多的 TCP 客户端连接时，由于每个 TCP 客户端连接都要占用一个唯一的本地端口号（此端口号在系统的本地端口号范围限制中），如果现有的 TCP 客户端连接已将所有的本地端口号占满，则此时就无法为新的 TCP 客户端连接分配一个本地端口号了，因此系统会在这种情况下在 connect()调用中返回失败，并将错误提示消息设为"Can't assign requested address".

增大本地端口范围限制:  
1, 修改/etc/sysctl.conf 文件，在文件中添加如下行： `net.ipv4.ip_local_port_range = 1024 65000`

> 将系统对本地端口范围限制设置为 1024~65000 之间。注意: 本地端口范围的最小值必须大于或等于 1024, 最大值则应小于或等于 65535

2, 执行 `sysctl -p` ，如果系统没有错误提示，就表明新的本地端口范围设置成功。如果按上述端口范围进行设置，则理论上单独一个进程最多可以同时建立 60000 多个 TCP 客户端连接

**可能是因为 Linux 网络内核的防火墙对最大跟踪的 TCP 连接数有限制**，此时程序会表现为在 connect()调用中阻塞，如同死机，如果用 tcpdump 工具监视网络，也会发现根本没有 TCP 连接时客户端发 SYN 包的网络流量。

> 防火墙在内核中会对每个 TCP 连接的状态进行跟踪，跟踪信息将会放在位于内核内存中的 conntrackdatabase 中，这个数据库的大小有限，当系统中存在过多的 TCP 连接时，数据库容量不足，IP_TABLE 无法为新的 TCP 连接建立跟踪信息，于是表现为在 connect()调用中阻塞.

增大内核对最大跟踪的 TCP 连接数的限制:
1, 修改/etc/sysctl.conf 文件，在文件中添加如下行： `net.ipv4.ip_conntrack_max = 10240`

> 将系统对最大跟踪的 TCP 连接数限制设置为 10240. 注意: 此限制值要尽量小，以节省对内核内存的占用

2, 执行 `sysctl -p` ，如果系统没有错误提示，就表明系统对新的最大跟踪的 TCP 连接数限制修改成功。如果按上述参数进行设置，则理论上单独一个进程最多可以同时建立 10000 多个 TCP 客户端连接

## 内核参数 sysctl.conf 的优化

/etc/sysctl.conf 是用来控制 linux 网络的配置文件，对于依赖网络的程序（如 web 服务器和 cache 服务器）非常重要，推荐配置如下:

```bash
#cp /etc/sysctl.conf /etc/sysctl.conf.bak
#echo ""> /etc/sysctl.conf
#vim /etc/sysctl.conf
net.ipv4.ip_local_port_range = 1024 65535
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
net.ipv4.tcp_rmem = 4096 87380 16777216
net.ipv4.tcp_wmem = 4096 65536 16777216
net.ipv4.tcp_fin_timeout = 10
net.ipv4.tcp_tw_recycle = 1
net.ipv4.tcp_timestamps = 0
net.ipv4.tcp_window_scaling = 0
net.ipv4.tcp_sack = 0
net.core.netdev_max_backlog = 30000
net.ipv4.tcp_no_metrics_save = 1
net.core.somaxconn = 10240
net.ipv4.tcp_syncookies = 0
net.ipv4.tcp_max_orphans = 262144
net.ipv4.tcp_max_syn_backlog = 262144
net.ipv4.tcp_synack_retries = 2
net.ipv4.tcp_syn_retries = 2
```

> 这个配置参考于 cache 服务器 varnish 的推荐配置和 SunOne 服务器系统优化的推荐配置
> 可能"net.ipv4.tcp_fin_timeout = 3"的配置会导致页面经常打不开，可以调整"net.ipv4.tcp_fin_timeout = 10", 在 10s 的情况下一般没问题了
> 修改后执行 `sysctl -p` 生效

linux 系统优化完网络必须调高系统允许打开的文件数才能支持大的并发，如：

```bash
echo "ulimit -HSn 65536" >> /etc/rc.local
echo "ulimit -HSn 65536" >> /root/.bash_profile
```
