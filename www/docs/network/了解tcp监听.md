[参考](http://blog.chinaunix.net/uid-29075379-id-3858844.html)

[TCP 之深入浅出 send 和 recv](http://blog.chinaunix.net/uid-29075379-id-3921527.html)

有几个概念需要在开头澄清一下:

TCP socket 分两种，监听 socket 和传输 socket 两种

- 监听 socket：负责处理网络上来的连接请求（客户端的 syn 包到达便是连接请求来了，如果不知道 syn 包，请参看一下 TCP 三次握手）；
- 传输 socket：负责在网络上的两个端点之间传输 TCP 数据。

内核为每个 tcp 服务器维护两个 socket 队列：未决 socket 队列和已建立连接的 socket 队列

- 未决 socket：pending socket，就是某客户端的 syn 包到达，内核为这个 syn 包对应的 tcp 请求生成一个 socket，但是此时三次握手并没有完成，这样的 socket 就是 pending socket，是未决连接，没有经过三次握手认证的 tcp 连接。
- 已建立连接的 socket：established socket，tcp 服务器利用三次握手完成对客户端的简单认证之后，未决 socket 就变成已连接 socket，后续可以用这个 socket 传输数据。

![tcplisten1](/docs/network/tcplisten1.jpg)  
图一

`int listen(int fd, int backlog); `在 TCP 服务器端创建 socket 完毕，调用 listen 函数的时候，系统下层发生了以下动作：

1. 将刚才创建的（fd 所标示的）socket 转换为此 tcp 服务器的监听 socket，让此 socket 进入监听请求模式，此 socket 的 tcp 状态由 CLOSE 转至 LISTEN.
2. 内核为此监听 socket 所对应的 tcp 服务器建立一个未决 socket 队列和一个已建立连接 socket 队列。backlog 这个参数用来决定未决 socket 队列的长度，有个映射关系，0 表示长度可以无限大。

现在来串一串整个过程：

监听 socket 收到某客户端的 syn 包，第一次握手完成；

然后内核为此 syn 请求生成一个 pending socket，例如图 1 中的 socket5，标记状态为 SYN_RECV，并且将 socket5 加入相应的 pending socket 队列，并且服务器发出 ack 和 syn，第二次握手完成。

后续针对此 socket5 有两种可能

可能一：

过会儿客户端响应了服务器的 syn（第三个 ack 到达），第三次握手结束。内核触发 accept 函数执行，将 socket5 状态标记为 ESTABLISHED，并且将此 socket5 由 pending socket queue 移至 established socket queue，如下图

![tcplisten2](/docs/network/tcplisten2.jpg)

可能二:

客户端的最后一个 ack 并未来到，过很久，图 1 中的 socket5 超时了，被移除如下图

![tcplisten3](/docs/network/tcplisten3.jpg)

**有两个极限情况导致的拒绝服务情况需要考虑**

backlog 设置过小，pending socket 队列已满，此时客户端调用 connect 发送 syn 包给服务器端请求连接，服务端会忽略此 syn 包，客户端收不到 syn 的 ack，会触发 syn 超时，这个超时时间比较长，重发 syn，导致客户端长时间连接不上。

backlog 设置为 0 或者过大，只要收到 syn 包，就会在 pending socket 队列中增加节点，这个容易导致队列变满。Syn flood 就是攻击 pending socket 队列的

linux 内核可以全局设置此 pending socket 队列大小
/proc/sys/net/ipv4/tcp_max_syn_backlog

还可以启用 tcp_syncookies，来缓解 pending socket 队列的压力
`echo "1" > / proc/sys/net/ipv4/tcp_syncookies`

但是，这两个调整，对于巨量的 synflood 攻击来说，都是治标不治本。
