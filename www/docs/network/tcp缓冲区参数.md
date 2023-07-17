## 查看 TCP 读缓冲区

```bash
yoloz@yoloz-VirtualBox:~$ cat /proc/sys/net/ipv4/tcp_rmem
4096	131072	6291456
yoloz@yoloz-VirtualBox:~$
#第一个值：4096
#给socket接收缓冲区分配的最小值min
#第二个值：87380 	  	默认值deafult
#默认值，接收缓冲区大小在系统负载不重的情况下可以增长到这个值
#第三个值：6291456 	最大值max
#是接收缓冲区最大值
```

## 查看 TCP 写缓冲区

```bash
yoloz@yoloz-VirtualBox:~$ cat /proc/sys/net/ipv4/tcp_wmem
4096	16384	4194304
yoloz@yoloz-VirtualBox:~$
```

## 查看 TCP 使用的内存

一般情况下这些值是在系统启动时根据系统内存数量计算得到的，以页为单位(4K)

```bash
yoloz@yoloz-VirtualBox:~$ cat /proc/sys/net/ipv4/tcp_mem
57396	76529	114792
yoloz@yoloz-VirtualBox:~$

#其中，这三个值不是很好理解：
#low：
#当TCP使用了低于该值的内存页面数时，TCP不会考虑释放内存。
#
#pressure：
#当TCP使用了超过该值的内存页面数量时，TCP试图稳定其内存使用，进入pressure模式，
#当内存消耗低于low值时则退出pressure状态。
#
#high：
#允许所有tcp sockets用于排队缓冲数据报的页面量。如果超过这个值，TCP 连接将被拒绝。
```

## TCP 内存的初始化过程

```c
 static void tcp_init_mem(void)
{
    /* nr_free_buffer_pages()计算ZONE_DMA和ZONE_NORMAL的页数，
     * 对于64位系统来说，其实就是所有内存了。
     */
    unsigned long limit = nr_free_buffer_pages() / 8;
    limit = max(limit, 128UL); /* 不能低于128页 */

    sysctl_tcp_mem[0] = limit / 4 * 3; /* 最小值设为3/32的系统内存 */
    sysctl_tcp_mem[1] = limit; /* 压力值设为1/8的系统内存 */
    sysctl_tcp_mem[2] = sysctl_tcp_mem[0] * 2; /* 最大值设为3/16的系统内存 */
}
```

## 修改 TCP 缓冲区的大小

在 /etc/sysctl.conf 修改如下内容

```
net.ipv4.tcp_mem = 6177504 8236672 16777216
net.ipv4.tcp_rmem = 4096 873800 16777216
net.ipv4.tcp_wmem = 4096 873800 16777216
```

然后执行`/sbin/sysctl –p` 使之生效
