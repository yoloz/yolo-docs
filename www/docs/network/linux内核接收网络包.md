## 内核初始化

ksoftirqd 内核线程在系统初始化的时候创建，该线程数量不是 1 个，是 N 个(N 等于机器的核数)。

内核在 interrupt.h 中定义了所有的软中断类型。

## 网络子系统初始化

在网络子系统初始化过程中，会为每个 CPU 初始化 softnet_data 数据结构，这个数据结构里的 poll_list 用于等待驱动程序将其 poll 函数注册进来,也会为 RX_SOFTIRQ 和 TX_SOFTIRQ 注册处理函数。

## 协议栈注册

内核实现了网络层的 IP 协议，也实现了传输层的 TCP 协议和 UDP 协议。和平时写代码方式不一样，内核是通过注册的方式来实现的，即将这些协议处理函数注册到相关数据结构中，如 udp_protocol 结构体中的 handler 是 udp_rcv,tcp_protocol 结构体中的 handler 是 tcp_v4_rcv,它们通过 inet_add_protocol 函数初始化进来。

## 网卡驱动初始化

每一个驱动程序(不仅仅包括网卡驱动程序)会使用 module_init 向内核注册一个初始化函数，当驱动程序被加载时，内核会调用这个函数。
![网卡初始化](/docs/network/NICinit.png)

可以看到在第 5 步中，网卡驱动实现了 ethtool 所需要的接口，也在这里完成函数地址的注册。当 ethtool 发起一个系统调用之后，内核会找到对应操作的回调函数。对于 igb
网卡来说，其买现函数都在`drivers/net/ethernet/intel/igb/igb_ethtool.c`下。

:::info
ethtool 命令之所以能查看网卡收发包统计、能修改网卡自适应模式、能调整 RX 队列的数量和大小，是因为 ethtool 命令最终调用到了网卡驱动的相应方法，而不是 ethtool 本身有这个超能力。
:::

第 6 步注册 net_device_ops 用的是 igb_netdev_ops 变量，其中包含了 igb_open，该函数在网卡被启动的时候会被调用。

## 启动网卡

当上面的初始化都完成以后，就可以启动网卡了。在前面网卡驱动初始化时，曾提到了驱动向内核注册了 struct net_device_ops 变量，它包含看网卡启用、发包、设置
MAC 地址等回调函数（函数指针）。当启用一个网卡时（例如，通过`ifconfig eth0 up`)，net_device_ops 变量中定义的 ndo_open 方法会被调用。这是一个函数指针，对于 igb 网卡来说，该指针指向的是 igb_open 方法。它通常会做如图 2.7 所示的事情。
![启动网卡过程](/docs/network/NICstart.png)

:::info
igb_open 函数里，会分配 RingBuffer,并建立内存和 Rx 队列的映射关系(Rx 和 Tx 队列的数量和大小可以通过 ethtool 进行配置)

对于多队列的网卡，在 igb_open 过程中会为每一个队列都注册了中断，其对应的中断处理函数是 igb_msix_ring(drivers/net/ethernet/intel/igb/igb_main.c 下)。
在 msix 方式下，每个 Rx 队列有独立的 MSI-X 中断，从网卡硬件中断的层面就可以设置让收到的包被不同的 CPU 处理。（可以通过 irqbalance 或者修改/proc/irq/IRQ_NUMBER/smp_affinity)
:::

## 内核网络收包

内核和网络设备驱动是通过中断的方式来处理的，当设备上有数据到达时，会给 CPU 的相关引脚触发一个电压变化，已通知 CPU 来处理数据。

:::tip
对于网络模块来说，由于处理过程比较复杂和耗时，如果在中断函数中完成所有的处理，将会导致中断函数过度占用 CPU,使得 CPU 无法相应其他设备，例如鼠标和键盘的消息。
因此 Linux 中断处理函数是分上半部和下半部的。上半部只进行简单的工作，快速处理然后释放 CPU,接着 CPU 就可以允许其他中断进来。将剩下的绝大部分工作都放到下半部进行。
2.4 以后的 Linux 内核版本采用的下半部实现方式是软中断，由 ksoftirqd 内核线程全权处理。

硬中断通过给 CPU 物理引脚施加电压变化实现，软中断通过给内存中的一个变量赋予二进制值以标记有软中断发生。
:::

![内核收包路径](/docs/network/krnet.png)

当 CPU 收到中断请求后，会去调用网络设备驱动注册的中断处理函数。网卡的中断处理函数并不做过多工作，发出软中断请求，然后尽快释放 CPU 资源。ksoftirqd 内核线程检测到有软中断请求到达，调用 poll 开始轮询收包，收到后交由各级协议栈处理。

### 硬中断处理
首先，当数据帧从网线到达网卡上的时候，第一站是网卡的接收队列。网卡在分配给自己的RingBuffer中寻找可用的内存位置，找到后DMA引擎会把数据DMA到网卡之前关联的内存里，到这个时候CPU都是无感的。当DMA操作完成以后，网卡会向CPU发起一个硬中断，通知CPU有数据到达。硬中断的处理过程如路2.10所示。
![硬中断处理](/docs/network/hinet.png)

:::caution注意
当RingBuffer满的时候，新来的数据包将被丢弃。使用iconig命令查看网卡的时候，可以看到里面有个overruns，表示因为环形队列满被去弃的包数。如果发现有丢包，可能需要通过ethtool命令来加大环形队列的长度。
:::

