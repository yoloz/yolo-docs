tcpdump \[option\] \[proto\] \[dir\] \[type\]

- option 可选参数;
- proto 类过滤器：根据协议进行过滤，可识别的关键词有： tcp, udp, icmp, ip, ip6, arp, rarp,ether,wlan, fddi, tr, decnet
- direction 类过滤器：根据数据流向进行过滤，可识别的关键字有：src, dst，同时你可以使用逻辑运算符进行组合，比如 src or dst
- type 类过滤器：可识别的关键词有：host, net, port, portrange，这些词后边需要再接参数

## 输出内容结构

```log
21:26:49.013621 IP 172.20.20.1.15605 > 172.20.20.2.5920: Flags [P.], seq 49:97, ack 106048, win 4723, length 48
```

- 第一列：时分秒毫秒 21:26:49.013621
- 第二列：网络协议 IP
- 第三列：发送方的 ip 地址+端口号，其中 172.20.20.1 是 ip，而 15605 是端口号
- 第四列：箭头 >， 表示数据流向
- 第五列：接收方的 ip 地址+端口号，其中 172.20.20.2 是 ip，而 5920 是端口号
- 第六列：冒号
- 第七列：数据包内容，包括 Flags 标识符，seq 号，ack 号，win 窗口，数据长度 length，其中 [P.] 表示 PUSH 标志位为 1，更多标识符见下面

### Flags 标识符

使用 tcpdump 抓包后，会遇到的 TCP 报文 Flags，有以下几种：

\[S\] : SYN（开始连接）
\[P\] : PSH（推送数据）
\[F\] : FIN （结束连接）
\[R\] : RST（重置连接）
\[.\] : 没有 Flag （意思是除上面四种类型外的其他情况，有可能是 ACK 也有可能是 URG）

## 基于 IP 地址过滤

```shell
tcpdump host 192.168.10.100
tcpdump src host 192.168.10.100
tcpdump tcp src host 192.168.10.100
```

## 基于网段进行过滤

```shell
tcpdump net 192.168.10.0/24
tcpdump dst net 192.168
```

## 基于端口进行过滤

```shell
tcpdump port 8088
tcpdump src port 8088
tcpdump port 80 or port 8088 #简写 tcpdump port 80 or 8088
#抓取一个范围
tcpdump portrange 8000-8080
tcpdump src portrange 8000-8080
#对于一些常见协议的默认端口，我们还可以直接使用协议名，而不用具体的端口号
# http 80，https 443
tcpdump tcp port http
```

## 过滤结果输出到文件

使用 tcpdump 工具抓到包后，往往需要再借助其他的工具进行分析，比如常见的 wireshark

```shell
tcpdump port 8088  -w  test.pcap
```

## 从文件中读取包数据

```shell
tcpdump port 8088  -r  test.pcap
```

[更多信息](https://www.cnblogs.com/111testing/p/13620931.html)
