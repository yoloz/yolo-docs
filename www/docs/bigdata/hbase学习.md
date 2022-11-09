_内容和结构主要来自[Carol McDonald 的文章](https://mapr.com/blog/in-depth-look-hbase-architecture/)，对照官方文档梳理学习了一遍，记录备忘。_

![hbasearch1.jpg](/docs/bigdata/hbasearch1.jpg)

它们的主要功能有：

**Hmaster:**

- 管理 HregionServer，实现负载均衡；
- 管理和分配 Hregion, 如 Hregion split 时分配新的 Hregion, HregionServer 退出时迁移其下的 Hregion 到其他 HregionServer 上；
- DDL 操作(table, columnfamily 的增删改等)；
- 管理 namespace 和 table 的元数据(存储在 hdfs 上)；
- 权限控制(ACL)；

**HregionServer:**

- 存放和管理本地的 Hregion;
- 读写 hdfs，管理 table 中的数据；
- client 通过 HregionServer 读写数据；

**zookeeper:**

- 存放 Hbase 集群的元数据及集群的状态信息；
- Hmaster 主从节点的 active;

HRegion 所处理的数据尽量和数据所在的 DataNode 在一起，实现数据的本地化。数据本地化并不是总能实现，如在 HRegion 移动(Split)时，需要等下一次 Compact 才能继续回到本地化。Hmaster 和 namenode 都支持多个热备份，使用 zookeeper 来做协调。Hregionserver 和 datanode 一般会放在相同的 server 上实现数据的本地化。如下：

![hbasearch2.png](/docs/bigdata/hbasearch2.png)

## Regions

Hbase 使用 rowkey 将表水平分割成多个 hregion, region 分配给相应的 regionserver 管理. 如下：

![hbasearch3.png](/docs/bigdata/hbasearch3.png)

![hbasearch4.png](/docs/bigdata/hbasearch4.png)

### Region

- A table can be divided horizontally into one or more regions. A region contains a contiguous, sorted range of rows between a start key and an end key;
- Each region is 1GB in size (default)；
- A region of a table is served to the client by a RegionServer；
- A region server can serve about 1, 000 regions (which may belong to the same table or different tables)；

![hbasearch5.png](/docs/bigdata/hbasearch5.png)

### Region Split

最初一个表一个 region，随着数据增多，region 分裂成两个，两个新的 region 会在同一个 HRegionServer 中创建，它们各自包含父 region 一半的数据，split 完成后，父 region 下线，而新的两个子 region 向 HMaster 注册上线。

![hbasearch6.png](/docs/bigdata/hbasearch6.png)

### Read Load Balancing

分割起初发生在一个 regionserver 上，由于负载均衡，master 会将新生成的 region 分配到其他的 regionserver 上，这样会有可能一些 regionserver 处理的数据暂时在远程机器上，在 major compact 的时候会将远程数据文件移动到本地来。

![hbasearch7.png](/docs/bigdata/hbasearch7.png)

## HBase Hmaster

HMaster 没有单点故障问题，可以启动多个 HMaster，通过 ZooKeeper 的 Master Election 机制保证同时只有一个 HMaster 出于 Active 状态，其他的 HMaster 则处于热备份状态。主要职责有：

- 协调 HRegionServer
- - 启动时 region 的分配，以及负载均衡和修复时 region 的重新分配;
- - 监控集群中所有 regionServer 的状态(通过 Heartbeat 和监听 ZooKeeper 中的状态)。
- Admin 职能，创建、删除、修改 Table 的定义。如下：

![hbasearch8.png](/docs/bigdata/hbasearch8.png)

### ZooKeeper: The Coordinator

Hbase 使用 zookeeper 来协调集群的管理。如下：

![hbasearch9.png](/docs/bigdata/hbasearch9.png)

### How the Components Work Together

zooKeeper 协调集群所有节点的共享信息，在 master 和 regionserver 连接到 zooKeeper 后创建 Ephemeral 节点，使用心跳机制维持这个节点的存活状态，如果某个 Ephemeral 节点实效，则 HMaster 会收到通知，并做相应的处理。如下：

![hbasearch10.png](/docs/bigdata/hbasearch10.png)

### HBase First Read or Write

Hbase 中有一个特殊的目录表 META 表，存储了集群的所有 regions 位置，zookeeper 存储了这个 meta 表的位置。大概流程如下：  
1, 从 zooKeeper 中获取存储 meta 表的 regionserver 的位置；  
2, 从 meta 中查询用户 table 对应请求的 rowkey 所在的 regionserver 位置；  
3, 从查询到 regionServer 中获取数据；

![hbasearch11.png](/docs/bigdata/hbasearch11.png)

### HBase Meta Table

hbase:meta 表存储了所有 region 的位置信息(The -ROOT- table was removed in HBase 0.96.0)，结构如下：

![hbasearch12.png](/docs/bigdata/hbasearch12.png)

![hbasearch13.png](/docs/bigdata/hbasearch13.png)

### Region Server Components

regionserver 一般和 hdfs 的 datanode 在同一台机器上运行，实现数据的本地性，包含多个 region，由 WAL、BlockCache、MemStore、HFile 组成。如下：

![hbasearch14.png](/docs/bigdata/hbasearch14.png)

- WAL: Write Ahead Log is a file on the distributed file system. The WAL is used to store new data that hasn't yet been persisted to permanent storage; it is used for recovery in the case of failure.
- BlockCache: is the read cache. It stores frequently read data in memory. Least Recently Used data is evicted when full.
- MemStore: is the write cache. It stores new data which has not yet been written to disk. It is sorted before writing to disk. There is one MemStore per column family per region.
- Hfiles store the rows as sorted KeyValues on disk.

### HBase Write

当客户端发起一个 Put 请求时，首先它从 hbase:meta 表中查出该 Put 数据最终需要去的 regionserver。然后客户端将 Put 请求发送给相应的 regionserver，在 regionserver 中它首先会将该 Put 操作写入 WAL 日志文件中(Flush 到磁盘中)。

![hbasearch15.png](/docs/bigdata/hbasearch15.png)

写完 WAL 日志文件后，regionserver 根据 Put 中的 tablename 和 rowkey 找到对应的 region，并根据 column family 找到对应的 store，并将 Put 写入到该 store 的 memstore 中。此时写成功，并返回通知客户端。

![hbasearch16.png](/docs/bigdata/hbasearch16.png)

### HBase MemStore

MemStore 是一个 In Memory Sorted Buffer，在每个 store 中都有一个 memstore，store 对应 region 中的 columnfamily。如下：

![hbasearch17.png](/docs/bigdata/hbasearch17.png)

### HBase Region Flush

当 memstore 积累满数据后，其中的内容(排序集合)flush 进 storeFile(hfile)中。注意的是 memstore 的最小 flush 单元是 region 而不是单个 memstore(即一个 flush，其中所有的都 flush)。可能这也是 hbase 中的 columnfamily 不能无限制的增加的原因(region 中很多 columnfamily 同时 flush)。在 flush 过程中，还会在尾部追加一些数据，其中就包括 flush 时最大的 WAL sequence 值，告诉 hbase 这个 hfile 写入的最新数据的序列，在 recover 时就知道从哪里开始，在 HRegion 启动时，这个 sequence 会被读取，并取最大的作为下一次更新时的起始 sequence。

![hbasearch18.png](/docs/bigdata/hbasearch18.png)

### HBase HFile

数据以 key/value(cell)的形式顺序的存储在 storefile 中，在 memstore 积累到足够的数据后 flush 到磁盘生成 hfile(memstore 中存储的 cell 遵循相同的排列顺序，所以是顺序写，性能很高，不需要不停的移动磁盘指针)。

![hbasearch19.png](/docs/bigdata/hbasearch19.png)

### HBase HFile Structure

Hfile 的格式经历三次更改，现在是 v3, 详情官方文档(Appendix H: HFile format)。

### HBase Read Merge

如前文所述，每个 memstore 含有多个 hfile, 读取时扫描过多文件会影响性能。扫瞄的顺序依次是：BlockCache、MemStore、StoreFile(HFile)。其中 StoreFile 的扫瞄先会使用 Bloom Filter 过滤那些不可能符合条件的 HFile，然后使用 Block Index 快速定位 Cell，并将其加载到 BlockCache 中，然后从 BlockCache 中读取。

![hbasearch20.png](/docs/bigdata/hbasearch20.png)

### HBase Compaction

compaction 分为两种：

### minor compact

选取一些小的、相邻的 hfile 合并成一个更大的 hfile，在这个过程中不会处理已经 deleted 或 expired 的 cell;

![hbasearch21.png](/docs/bigdata/hbasearch21.png)

### major compact

所有的 hfile 合并成一个 hfile，在这个过程中，标记为 deleted 的 cell 会被删除，而那些已经 expired 的 cell 会被丢弃。major compaction 的结果是一个 HStore 只有一个 hfile 存在(one hfile per column family)。可以手动或自动触发，由于它会引起很多的 IO 操作而影响性能，一般建议安排在周末等比较闲的时间。

![hbasearch22.png](/docs/bigdata/hbasearch22.png)

### HDFS Data Replication

hbase 依赖 hdfs 来确保数据不丢失，hdfs 将数据备份到其他节点上。

### HBase Crash Recovery

当 zookeeper 监测不到 regionserver 的心跳包，通知 master 这个 regionserver 宕机。master 就会对宕机 server 中的 region 分配给活着的 regionserver。

![hbasearch23.png](/docs/bigdata/hbasearch23.png)

## 参考

[深入 HBase 架构解析](http://www.blogjava.net/DLevin/archive/2015/08/22/426877.html)
