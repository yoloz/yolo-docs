服务端抓包发现客户端发包只有 SYN，没有回包，可以执行`netstat -s |grep rejec` 查看下是否是 tcp_timestamps 的问题。如果出现数据包的 timestamp 被拒绝，则检查下内核参数 tcp_tw_recycle 是否开启，如果开启，将其关闭即可`echo "0" > /proc/sys/net/ipv4/tcp_tw_recycle`

## net.ipv4.tcp_timestamps

tcp_timestamps 会记录数据包的发送时间。基本的步骤如下：
发送方在发送数据时，将一个 timestamp(表示发送时间)放在包里面
接收方在收到数据包后，在对应的 ACK 包中将收到的 timestamp 返回给发送方(echo back)
发送方收到 ACK 包后，用当前时刻 now - ACK 包中的 timestamp 就能得到准确的 RTT
timestamps 一个双向的选项，当一方不开启时，两方都将停用 timestamps。比如 client 端发送的 SYN 包中带有 timestamp 选项，但 server 端并没有开启该选项。则回复的 SYN-ACK 将不带 timestamp 选项，同时 client 后续回复的 ACK 也不会带有 timestamp 选项。如果 client 发送的 SYN 包中就不带 timestamp，双向都将停用 timestamp。

tcp 数据包中 timestamps 的 value 是系统开机时间到现在时间的（毫秒级）时间戳。

## net.ipv4.tcp_tw_recycle

TCP 规范中规定的处于 TIME_WAIT 的 TCP 连接必须等待 2msl 时间。但在 linux 中，如果开启了 tcp_tw_recycle，TIME_WAIT 的 TCP 连接就不会等待 2msl 时间（而是 rto 或者 60s），从而达到快速重用（回收）处于 TIME_WAIT 状态的 tcp 连接的目的。这就可能导致连接收到之前连接的数据。为此，linux 在打开 tcp_tw_recycle 的情况下，会记录下 TIME_WAIT 连接的对端（peer）信息，包括 IP 地址、时间戳等。这样，当内核收到同一个 IP 的 SYN 包时，就会去比较时间戳，检查 SYN 包的时间戳是否滞后，如果滞后，就将其丢掉（认为是旧连接的数据）。

如果用户是在一个 NAT 环境下，或者出口 IP 只有一个，同时有多个用户访问同一个服务，就有可能因为时间戳滞后的连接被丢掉，根据上述 SYN 包处理规则，在 tcp_tw_recycle 和 tcp_timestamps 同时开启的条件下，timestamp 大的主机访问 serverN 成功，而 timestmap 小的主机访问失败。
