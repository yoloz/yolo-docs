开发调试的时候，为了模拟意外情况，需要在不影响服务进程的情况下单独切断 tcp 连接,即 强制断开 tcp 连接。如切断下文的 4403 连接:

```bash
zhds@DSG-250:~$ netstat -anp|grep 10000
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp6       0      0 :::10000                :::*                    LISTEN      823/java
tcp6       0      0 192.168.1.250:10000     192.168.90.102:4659     ESTABLISHED 823/java
tcp6       0      0 192.168.1.250:10000     192.168.90.102:47740    ESTABLISHED 823/java
tcp6       0      0 192.168.1.250:10000     192.168.90.102:47726    ESTABLISHED 823/java
tcp6       0      0 192.168.1.250:10000     192.168.90.102:47676    ESTABLISHED 823/java
tcp6       0      0 192.168.1.250:10000     192.168.90.102:47746    ESTABLISHED 823/java
tcp6       0      0 192.168.1.250:10000     192.168.90.102:47584    ESTABLISHED 823/java
tcp6       0      0 192.168.1.250:10000     192.168.90.102:4403     ESTABLISHED 823/java
tcp6       0      0 192.168.1.250:10000     192.168.90.102:47688    ESTABLISHED 823/java
tcp6       0      0 192.168.1.250:10000     192.168.90.102:47650    ESTABLISHED 823/java
tcp6       0      0 192.168.1.250:10000     192.168.90.102:47706    ESTABLISHED 823/java
```

## tcpkill

tcpkill 属于网络嗅探工具包 dsniff，使用时安装 dsniff 就可以了.

```log
# for CentOS
yum -y install dsniff --enablerepo=epel

# for Ubuntu
sudo apt-get install dsniff
```

关闭操作如下：

```bash
zhds@DSG-250:~$ sudo tcpkill -i ens18 -9 port 4403
tcpkill: listening on ens18 [port 4403]
```

执行后不会马上关闭，而是挂起，在服务器和客户端发生网络交互(4403 连接)之后，连接才会中断

## killcx

killcx 是一个在 linux 下可以关闭 TCP 连接的 Perl 脚本，厉害之处在于：无论该 TCP 连接处于什么状态，都可以有效关闭 TCP 连接。

[Killcx : close a TCP connection (for Linux)](https://killcx.sourceforge.net/)

我们利用 CPAN 安装这几个模块：
:::info
为了很方便的安装 Perl 模块，有人做了一个 CPAN 模块，用 cpan 命令来管理和安装 CPAN 网站上的所有 Perl 模块。
:::

```bash
zhds@DSG-250:~$ sudo perl -MCPAN -e shell
cpan[1]> install Net::RawIP
cpan[2]> install Net::Pcap
cpan[3]>> install NetPacket::Ethernet
```

[下载 killcx 安装包](https://sourceforge.net/projects/killcx/files/)并解压，得到 killcx 脚本。

运行后报错：

```bash
zhds@DSG-250:~$ killcx-1.0.3/killcx 192.168.90.102:4403
Can't locate NetPacket/Ethernet.pm in @INC (you may need to install the NetPacket::Ethernet module) (@INC contains: /etc/perl /usr/local/lib/x86_64-linux-gnu/perl/5.26.1 /usr/local/share/perl/5.26.1 /usr/lib/x86_64-linux-gnu/perl5/5.26 /usr/share/perl5 /usr/lib/x86_64-linux-gnu/perl/5.26 /usr/share/perl/5.26 /usr/local/lib/site_perl /usr/lib/x86_64-linux-gnu/perl-base) at killcx-1.0.3/killcx line 29.
BEGIN failed--compilation aborted at killcx-1.0.3/killcx line 29.
```

前往[metacpan 网站](https://metacpan.org/)，搜索 NetPacket::Ethernet，在打开后左侧导航栏的 Download 可下载.

```bash
zhds@DSG-250:~$ tar -zxvf NetPacket-1.7.2.tar.gz
zhds@DSG-250:~$ cd NetPacket-1.7.2/
zhds@DSG-250:~/NetPacket-1.7.2$ perl Makefile.PL
zhds@DSG-250:~/NetPacket-1.7.2$ make
zhds@DSG-250:~/NetPacket-1.7.2$ sudo make install
```

## 实际操作

```bash
zhds@DSG-250:~$ sudo killcx-1.0.3/killcx 192.168.90.102:4403
killcx v1.0.3 - (c)2009-2011 Jerome Bruandet - http://killcx.sourceforge.net/

[PARENT] checking connection with [192.168.90.102:4403]
[PARENT] found connection with [192.168.1.250:10000] (ESTABLISHED)
[PARENT] forking child
[CHILD]  interface not defined, will use [ens18]
[CHILD]  setting up filter to sniff ACK on [ens18] for 5 seconds
[PARENT] sending spoofed SYN to [192.168.1.250:10000] with bogus SeqNum
[PARENT] no response from child, operation may have failed
[PARENT] => you may try using 'lo' as interface parameter
[PARENT] killing child [4156] and exiting program

zhds@DSG-250:~$
```

从上文直接使用 killcx 可以发现失败了，可以联合 tcpkill 一起试试(在打开一个 shell 窗口)。_尝试后都没有关掉_

## tcpkill 和 killcx 区别

- tcpkill
  tcpkill 的断流策略：通过监听指定的端口，发现符合条件的连接报文之后，根据报文中得到的 SEQ/ACK 号模拟 RST 包然后发送，从而断流。

- killcx
  不同于 tcpkill 守株待兔的策略，killcx 选择主动出击，killcx 伪造了一条 tcp 请求，发送给另一端，然后另一端会回送一个 ACK 报文，其中携带了正确的 SEQ/ACK 号，然后 killcx 就能顺利断流啦。
