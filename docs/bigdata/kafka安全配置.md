## sasl-plaintext-acl

### 准备配置文件

**kafka_server_jaas.conf**

```log
KafkaServer {
org.apache.kafka.common.security.plain.PlainLoginModule required
username="admin"
password="admin"
user_admin="admin"
user_read="read"
user_write="write";
};
```
:::info
- The properties username and password in the KafkaServer section are used by the broker to initiate connections to other brokers. In this example, admin is the user for inter-broker communication;

- user_username=pwd;The set of properties user_userName defines the passwords for all users that connect to the broker and the broker validates all client connections including those from other brokers using these properties(需要添加 user_admin="admin", broker 之间互相访问);
:::

**kafka_client_jaas.conf**

```log
KafkaClient{
org.apache.kafka.common.security.plain.PlainLoginModule required
username="admin"
password="admin";
};
```

:::tip
super user，无需 acl 授权
:::

**kafka_read_jaas.conf**

```log
KafkaClient{
org.apache.kafka.common.security.plain.PlainLoginModule required
username="read"
password="read";
};
```

:::tip
normal user need acl
:::

### 修改启动脚本 kafka-server-start

exec $base_dir/kafka-run-class.sh $EXTRA_ARGS kafka.Kafka "$@"
添加-Djava.security.auth.login.config=\$base_dir/../config/kafka_server_jaas.conf ,然后保存退出:

```bash
exec $base_dir/kafka-run-class.sh $EXTRA_ARGS -Djava.security.auth.login.config=$base_dir/../config/kafka_server_jaas.conf kafka.Kafka "$@"
```

### 修改(或添加)配置文件 server.properties

```properties
authorizer.class.name=kafka.security.auth.SimpleAclAuthorizer
listeners=SASL_PLAINTEXT://:9092
security.inter.broker.protocol=SASL_PLAINTEXT
sasl.mechanism.inter.broker.protocol=PLAIN
sasl.enabled.mechanisms=PLAIN
super.users=User:admin
```

### 重启 Kafka

配置修改后 kafka 重启即可，zookeeper 未做配置(即所有用户均可访问)

### 配置客户端

启动脚本添加
`-Djava.security.auth.login.config=xxx/config/kafka_read_jaas.conf`
或者
`System.setProperty(JaasUtils.JAVA_LOGIN_CONFIG_PARAM,"xxx/kafka_read_jaas.conf")`

:::tip
对于 jar 使用，建议脚本里添加
:::

### ACL 授权

- 授权用户 read 对 x1, x2 的读取：
  `kafka-acls.sh --authorizer-properties zookeeper.connect=localhost:2181/kafka --operation Read --allow-principal User:read --group=* --add --topic x1 --topic x2`
- 删除授权: 将上述命令的--add 换成--remove 即可
- 查看授权详情
  `kafka-acls.sh --authorizer-properties zookeeper.connect=localhost:2181/kafka --list`
