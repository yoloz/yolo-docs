有时候设定一些跟网络相关的服务 PXE , DHCP , FTP , TFTP , HTTP …,服务虽然是启动的,但部分功能却是有问题,这时候可通过 `tcpdump` 这个指令来看封包`TCP Package / Frame` 的狀況.

測試環境為 Ubuntu 16.04 64bits

直接使用 tcpdump 指令就可以看到所有經過該裝置的封包,但資料量太大了,封包資訊一下就過去了,建議使用參數(後面介紹).

```bash
root@ubuntu:~# tcpdump
01:12:49.391892 IP 172.16.15.1.56792 > 172.16.15.208.ssh: Flags [.], ack 4256592, win 4081, options [nop,nop,TS val 864031640 ecr 535604], length 0
01:12:49.391917 IP 172.16.15.208.ssh > 172.16.15.1.56792: Flags [P.], seq 4257056:4257448, ack 2521, win 294, options [nop,nop,TS val 535604 ecr 864031640], length 392
...
^c
1561 packets captured
18232 packets received by filter
16665 packets dropped by kernel
```

先來看 tcpdump 的輸出格式,如下:

```bash
Timestamp Source IP.Port > Destination IP.Port: Flags [tcp flags], seq data-seqno, ack ackno, win window, urg urgent, options [opts], length len
```

- hh:mm:ss.frac (Timestamp)
  時間.
- Source IP.Port > Destination IP.Port
  來源 Source 與 目的 Destination IP + port number
- Flags [tcp flags] 其中 Flags 所代表的意思為

  - S(SYN) : Synchronize sequence numbers.
  - F(FIN) : Last packet from sender.
  - P(PSH) : Asks to push the buffered data to the receiving application.
  - R(RST) : Reset the connection
  - W(CWR) : Congestion Window Reduced (CWR) flag .
  - E(ECE) : ECN-Echo has a dual role, depending on the value of the SYN flag. It indicates:
    If the SYN flag is set (1), that the TCP peer is ECN capable.
    If the SYN flag is clear (0), that a packet with Congestion Experienced flag set (ECN=11) in the IP header was received during normal transmission.
  - DF : Don’t fragment.
  - MF : More Fragments.
  - . : no flags.
  - S. : SYN-ACK .

- seq 序号(发送的字节数，最大值后又从 0 开始) 標示該封包所包含的資料的順序號碼.
- ack (收到的 seq+1，告诉对方已经收到多少字节）下一筆期待收到的資料順序號碼.
- win window size
- urg urgent
- options [opts]
  - MSS – Maximum segment size
  - sackOK– Selective Acknowledgement
  - TS val – Host’s timestamp
  - ecr N – Echo reply timestamp
  - nop – No-Operation??
  - wscale – window scale & value
- length TCP 封包長度 (in Bytes) 不含標頭 headers.

當使用 tcpdump 時,在 dmesg 會有一筆關於 promiscuous mode (混雜模式)的訊息,這是讓網卡能接收所有經過它的封包,不管其目的地址是否與他有關.

```bash
root@ubuntu:~# dmesg
...
[   50.984751] device ens33 entered promiscuous mode
[   62.948837] device ens33 left promiscuous mode
```

**Tcp Dup Ack xxx#y 代表了数据段丢失 TCP 状态，xxx 代表数据丢失的位置， # 后代表第几次丢失文**。一般来说是网络拥塞导致丢包，比如发送方的报文到达不了接收方，接受方收不到预期序列号的报文就会发送 dup ack 给发送方，发送方收到 3 个 dup ack 就会快速重传而不必等超时定时器。

```bash
# -i interface 指定 tcpdump 所要監看的網路介面.
$ tcpdump -i ens33

# -q Quick (quiet) 的封包輸出.封包以較少的資訊輸出.
$ tcpdump -i ens33 -q
...
01:13:33.487482 IP 172.16.15.1.56792 > 172.16.15.208.ssh: tcp 0
01:13:33.487502 IP 172.16.15.208.ssh > 172.16.15.1.56792: tcp 200

# -w <file> Write the raw packets to file rather than parsing and printing them out.
$ tcpdump tcp -s 0 and host 192.168.1.176 -w ./176_b.cap

# -r <file> Read packets from file
$ tcpdump -r 176_b.cap
reading from file 176_b.cap, link-type EN10MB (Ethernet)
01:24:48.774307 IP 172.16.15.208.ssh > 172.16.15.1.56792: Flags [P.], seq 2365396806:2365396850, ack 3797073080, win 294, options [nop,nop,TS val 715449 ecr 864741399], length 44
....

# -nn 使用IP及port number來顯示(預設會顯示已知的主機與服務名稱)
$ tcpdump -i ens33 -nn
01:48:15.861678 IP 172.16.15.208.22 > 172.16.15.1.56792: Flags [P.], seq 3176652:3177904, ack 1909, win 294, options [nop,nop,TS val 1067221 ecr 866140693], length 1252
# 沒使用時會顯示成ssh(非22port)
$ tcpdump -i ens33
02:18:42.435672 IP 172.16.15.208.ssh > 172.16.15.1.56792: Flags [P.], seq 3655568:3655960, ack 2161, win 294, options [nop,nop,TS val 1523865 ecr 867961826], length 392

#port 指定監視的端口,可以是數字也可以是服務名稱
$ tcpdump -i ens33 -nn port 22
....
02:21:01.052584 IP 172.16.15.1.56792 > 172.16.15.208.22: Flags [.], ack 11096912, win 4078, options [nop,nop,TS val 868099150 ecr 1558519], length 0
02:21:01.052605 IP 172.16.15.208.22 > 172.16.15.1.56792: Flags [P.], seq 11097420:11097632, ack 6625, win 294, options [nop,nop,TS val 1558519 ecr 868099150], length 212
02:21:01.052830 IP 172.16.15.1.56792 > 172.16.15.208.22: Flags [.], ack 11097420, win 4080, options [nop,nop,TS val 868099151 ecr 1558519], length 0

$ tcpdump -i ens33 -nn port ssh
02:25:20.581604 IP 172.16.15.1.56792 > 172.16.15.208.ssh: Flags [.], ack 2214756, win 4083, options [nop,nop,TS val 868356938 ecr 1623401], length 0

#host 指定監視的host,還可以指定 src(Source)也可以是dst(destination)
$ tcpdump -i ens33 host 172.16.15.208
$ tcpdump -i ens33 src host 172.16.15.208

#net host只能針對單一的Host,net可以針對某個網域進行封包的監視
$ tcpdump -i ens33 net 172.16

# and或or 剛剛那些篩選條件還可以使用and(所有條件都需要成立)或是or(其中一個條件成立即可)
$ tcpdump -i ens33 'port ssh and src host 172.16.15.208'
$ tcpdump -i ens33 'port ssh or src host 172.16.15.208'

# -v, -vv, -vvv 更詳細的輸出.
$ tcpdump -i ens33 -v ip6
$ tcpdump -i ens33 -vv ip6

# -A print each packet in ASCII.

# udp 默认監控TCP也可以指定為UDP
$ tcpdump -i ens33 udp

# icmp/icmp6 除了TCP/UDP 外,也可以觀察ICMP/ICMP6的封包.
$ tcpdump icmp
$ tcpdump icmp6

# ipv6 默认ipv4,v6封包都會看到,可以指定只看ipv6所產生的封包.
$ tcpdump -i eth0 ip6
```

## 样例

```bash
#监视源端口不是8080且目标ip是122.233.27.32的tcp包
$ tcpdump tcp src port ! 8080 and dst host 122.233.27.32 -v

#监视ip 122.233.27.32且端口是8080的tcp包
$ tcpdump tcp port 8080 and host 122.233.27.32

#抓包并写进文件
$ tcpdump tcp -s 0 and host 192.168.1.176 -w ./176_b.cap

#基于网段进行过滤
tcpdump net 192.168.10.0/24
tcpdump dst net 192.168
```
