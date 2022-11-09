## 生产者

- Producer 首先使用用户主线程将待发送的消息封装进一个 ProducerRecord 类实例中。
- 进行序列化后，发送给 Partioner，由 Partioner 确定目标分区后，发送到 Producer 程序中的一块内存缓冲区中。
- Producer 的另一个工作线程（即 Sender 线程），则负责实时地从该缓冲区中提取出准备好的消息封装到一个批次的内，统一发送给对应的 broker 中。

## 参数配置

### acks

在消息被认为是“已提交”之前，producer 需要 leader 确认的 produce 请求的应答数。该参数用于控制消息的持久性，目前提供了 3 个取值：

- acks = 0: 表示 produce 请求立即返回，不需要等待 leader 的任何确认。这种方案有最高的吞吐率，但是不保证消息是否真的发送成功。
- acks = -1: 表示分区 leader 必须等待消息被成功写入到所有的 ISR 副本(同步副本)中才认为 produce 请求成功。这种方案提供最高的消息持久性保证，但是理论上吞吐率也是最差的。
- acks = 1: 表示 leader 副本必须应答此 produce 请求并写入消息到本地日志，之后 produce 请求被认为成功。如果此时 leader 副本应答请求之后挂掉了，消息会丢失。这是个折衷的方案，提供了不错的持久性保证和吞吐。

**如果要较高的持久性要求以及无数据丢失的需求，设置 acks = -1。其他情况下设置 acks = 1**

### buffer.memory(吞吐量)

该参数用于指定 Producer 端用于缓存消息的缓冲区大小，单位为字节，默认值为：33554432(32M)。kafka 采用的是异步发送的消息架构，prducer 启动时会首先创建一块内存缓冲区用于保存待发送的消息，然后由一个专属线程负责从缓冲区读取消息进行真正的发送。

消息持续发送过程中，当缓冲区被填满后，producer 立即进入阻塞状态直到空闲内存被释放出来，这段时间不能超过 max.blocks.ms 设置的值，一旦超过，producer 则会抛出 TimeoutException 异常，因为 Producer 是线程安全的，若一直报 TimeoutException，需要考虑调高 buffer.memory 了。

用户在使用多个线程共享 kafka producer 时，很容易把 buffer.memory 打满。

### compression.type(lZ4)

producer 压缩器，目前支持 none（不压缩），gzip，snappy 和 lz4。

基于公司物联网平台，试验过目前 lz4 的效果最好。当然 2016 年 8 月，FaceBook 开源了 Ztandard。官网测试： Ztandard 压缩率为 2.8，snappy 为 2.091，LZ4 为 2.101

### retries(注意消息乱序, EOS)

重试时 producer 会重新发送之前由于瞬时原因出现失败的消息。瞬时失败的原因可能包括：元数据信息失效、副本数量不足、超时、位移越界或未知分区等。倘若设置了 retries > 0，那么这些情况下 producer 会尝试重试

max.in.flight.requests.per.connection 设置大于 1，设置 retries 就有可能造成发送消息的乱
序；

kafka 后期版本已经支持"精确到一次的语义”，因此消息的重试不会造成消息的重复发送

### linger.ms(吞吐量和延时性能)

默认是 0，表示不做停留，这种情况下，可能有的 batch 中没有包含足够多的 produce 请求就被发送出去了，造成了大量的小 batch，给网络 IO 带来的极大的压力

为了减少了网络 IO，提升了整体的 TPS。假设设置 linger.ms=5，表示 producer 请求可能会延时 5ms 才会被发送

## Error

### NETWORK_EXCEPTION

```
Got error produce response with correlation id xxx on topic-partition xxxxx, retrying (9 attempts left). Error: NETWORK_EXCEPTION
Got error produce response with correlation id xxx on topic-partition xxxxx, retrying (9 attempts left). Error: REQUEST_TIMED_OUT
```

暂时定位是 producer 压力较大，默认配置需要优化(细节可参上述说明)。

## broker 可优化参数：

```properties
num.network.threads=cpu核数+1
num.io.threads=cpu核数*2
socket.send.buffer.bytes=1024000
socket.receive.buffer.bytes=1024000
```
