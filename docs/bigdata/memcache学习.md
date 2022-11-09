:::info
服务端缓存所提供的最重要功能: 既可以提高单个请求的响应速度，又可以降低服务层及数据库层的压力。　　
:::

memcache 是一个内存缓存系统，通过读取内存中数据和对象减少访问数据库的次数，从而提高效率。memcache 是以 key-value 形式存放的 hashmap。

memcache 使用模型图（借鉴别的博客）:

![memcache1.png](/docs/bigdata/memcache1.png)

memcache 集群之间是不会通信的（与之形成对比的，比如 JBoss Cache，某台服务器有缓存数据更新时，会通知集群中其他机器更新缓存或清除缓存数据），完全依赖于客户端实现。

## 一次写缓存的流程：

1. 应用程序输入需要写缓存的数据;
2. API 将 Key 输入路由算法模块，路由算法根据 Key 和 MemCache 集群服务器列表得到一台服务器编号;
3. 由服务器编号得到 MemCache 及其的 ip 地址和端口号;
4. API 调用通信模块和指定编号的服务器通信，将数据写入该服务器，完成一次分布式缓存的写操作;

## 两阶段哈希（Two-stage hash）

一个大型服务 常常拥有上百个 Memcached 实例。而在这上百个 Memcached 实例中所存储的数据则不尽相同。由于这种数据的异构性，我们需要在访问由 Memcached 所记录的信息之前决定在该服务端缓存系统中到底由哪个 Memcached 实例记录了我们所想要访问的数据

![memcache2.png](/docs/bigdata/memcache2.png)

如上图所示，用户需要通过一个 Memcached 客户端来完成对缓存服务所记录信息的访问。该客户端知道服务端缓存系统中所包含的所有 Memcached 服务实例。在需要访问具有特定键值的数据时，该客户端内部会根据所需要读取的数据的键值，如“foo”，以及当前 Memcached 缓存服务的配置来计算相应的哈希值，以决定到底是哪个 Memcached 实例记录了用户所需要访问的信息。在决定记录了所需要信息的 Memcached 实例之后，Memcached 客户端将从配置中读取该 Memcached 服务实例所在地址，并向该 Memcached 实例发送数据访问请求，以从该 Memcached 实例中读取具有键值“foo”的信息。在各个论坛的讨论中，这被称为是 Memcached 的两阶段哈希（Two-stage hash）。

## 集群实现原理

### 一致性 Hash 算法

![memcache3.png](/docs/bigdata/memcache3.png)

具体算法过程为：先构造一个长度为 232 次方的整数环（这个环被称为一致性 Hash 环），根据节点名称的 Hash 值（其分布为[0, 232-1]）将缓存服务器节点放置在这个 Hash 环上，然后根据需要缓存的数据的 Key 值计算得到其 Hash 值（其分布也为[0, 232-1]），然后在 Hash 环上顺时针查找距离这个 Key 值的 Hash 值最近的服务器节点，完成 Key 到服务器的映射查找。

就如同图上所示，三个 Node 点分别位于 Hash 环上的三个位置，然后 Key 值根据其 HashCode，在 Hash 环上有一个固定位置，位置固定下之后，Key 就会顺时针去寻找离它最近的一个 Node，把数据存储在这个 Node 的 MemCache 服务器中。

### MemCache 实现原理

首先要说明一点，MemCache 的数据存放在内存中，存放在内存中个人认为意味着几点：

1. 访问数据的速度比传统的关系型数据库要快，因为 Oracle、MySQL 这些传统的关系型数据库为了保持数据的持久性，数据存放在硬盘中，IO 操作速度慢
2. MemCache 的数据存放在内存中同时意味着只要 MemCache 重启了，数据就会消失
3. 既然 MemCache 的数据存放在内存中，那么势必受到机器位数的限制，这个之前的文章写过很多次了，32 位机器最多只能使用 2GB 的内存空间，64 位机器可以认为没有上限

然后我们来看一下 MemCache 的原理，MemCache 最重要的莫不是内存分配的内容了，MemCache 采用的内存分配方式是固定空间分配，还是自己画一张图说明：

![memcache4.ppg](/docs/bigdata/memcache4.jpg)

这张图片里面涉及了 slab_class、slab、page、chunk 四个概念，它们之间的关系是：

1. MemCache 将内存空间分为一组 slab
2. 每个 slab 下又有若干个 page，每个 page 默认是 1M，如果一个 slab 占用 100M 内存的话，那么这个 slab 下应该有 100 个 page
3. 每个 page 里面包含一组 chunk，chunk 是真正存放数据的地方，同一个 slab 里面的 chunk 的大小是固定的
4. 有相同大小 chunk 的 slab 被组织在一起，称为 slab_class

MemCache 内存分配的方式称为 allocator，slab 的数量是有限的，几个、十几个或者几十个，这个和启动参数的配置相关。

MemCache 中的 value 过来存放的地方是由 value 的大小决定的，value 总是会被存放到与 chunk 大小最接近的一个 slab 中，比如 slab[1]的 chunk 大小为 80 字节、slab[2]的 chunk 大小为 100 字节、slab[3]的 chunk 大小为 128 字节（相邻 slab 内的 chunk 基本以 1.25 为比例进行增长，MemCache 启动时可以用-f 指定这个比例），那么过来一个 88 字节的 value，这个 value 将被放到 2 号 slab 中。放 slab 的时候，首先 slab 要申请内存，申请内存是以 page 为单位的，所以在放入第一个数据的时候，无论大小为多少，都会有 1M 大小的 page 被分配给该 slab。申请到 page 后，slab 会将这个 page 的内存按 chunk 的大小进行切分，这样就变成了一个 chunk 数组，最后从这个 chunk 数组中选择一个用于存储数据。

如果这个 slab 中没有 chunk 可以分配了怎么办，如果 MemCache 启动没有追加-M（禁止 LRU，这种情况下内存不够会报 Out Of Memory 错误），那么 MemCache 会把这个 slab 中最近最少使用的 chunk 中的数据清理掉，然后放上最新的数据。针对 MemCache 的内存分配及回收算法，总结三点：

1. MemCache 的内存分配 chunk 里面会有内存浪费，88 字节的 value 分配在 128 字节（紧接着大的用）的 chunk 中，就损失了 30 字节，但是这也避免了管理内存碎片的问题
2. MemCache 的 LRU 算法不是针对全局的，是针对 slab 的
3. 应该可以理解为什么 MemCache 存放的 value 大小是限制的，因为一个新数据过来，slab 会先以 page 为单位申请一块内存，申请的内存最多就只有 1M，所以 value 大小自然不能大于 1M 了

## 总结 MemCache 的特性和限制

上面已经对于 MemCache 做了一个比较详细的解读，这里再次总结 MemCache 的限制和特性：

- MemCache 中可以保存的 item 数据量是没有限制的，只要内存足够
- MemCache 单进程在 32 位机中最大使用内存为 2G，这个之前的文章提了多次了，64 位机则没有限制
- Key 最大为 250 个字节，超过该长度无法存储
- 单个 item 最大数据是 1MB，超过 1MB 的数据不予存储
- MemCache 服务端是不安全的，比如已知某个 MemCache 节点，可以直接 telnet 过去，并通过 flush_all 让已经存在的键值对立即失效
- 不能够遍历 MemCache 中所有的 item，因为这个操作的速度相对缓慢且会阻塞其他的操作
- MemCache 的高性能源自于两阶段哈希结构：第一阶段在客户端，通过 Hash 算法根据 Key 值算出一个节点；第二阶段在服务端，通过一个内部的 Hash 算法，查找真正的 item 并返回给客户端。从实现的角度看，MemCache 是一个非阻塞的、基于事件的服务器程序
- MemCache 设置添加某一个 Key 值的时候，传入 expiry 为 0 表示这个 Key 值永久有效，这个 Key 值也会在 30 天之后失效。

[memcache 基本原理及集群原理](https://blog.csdn.net/zczzyezgycsz8888/article/details/84925839?ivk_sa=1024320u)
