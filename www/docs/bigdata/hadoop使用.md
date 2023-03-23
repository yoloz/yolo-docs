## 单机安装

**Requirements:jdk**

`tar -zxvf hadoop-2.7.3.tar.gz -C ~`

### 创建 hadoop 文件目录

在安装目录下创建 4 个文件目录, 如下:

```bash
mkdir -p ~/hadoop-2.7.3/data/tmp
mkdir -p ~/hadoop-2.7.3/data/hdfs/name
mkdir -p ~/hadoop-2.7.3/data/hdfs/data
mkdir -p ~/hadoop-2.7.3/data/log
```

### 修改配置文件

最基本要修改 3 个文件(etc/hadoop/xxx)：hadoop-env.sh, core-site.xml, hdfs-site.xml

- hadoop-env.sh

主要是配置 jdk 的路径, 找到"export JAVA_HOME="，填写 jdk 路径

- core-site.xml

配置 hdfs 访问路径和 namenode 临时文件夹路径, 如下:

```xml
<configuration>
<property>
<name>fs.defaultFS</name>
<value>hdfs://${hostname}:9000</value>
<description>hdfs内部通讯访问地址</description>
</property>
<property>
<name>hadoop.tmp.dir</name>
<value>file:/home/ylz/hadoop-2.7.3/data/tmp</value>
<description>临时文件目录</description>
</property>
</configuration>
```

- hdfs-site.xml

配置元数据和 datanode 数据的存放路径, 如下:

```xml
<configuration>
<property>
<name>dfs.namenode.name.dir</name>
<value>file:/home/ylz/hadoop-2.7.3/data/hdfs/name</value>
<description>namenode存放name table(fsimage)本地目录</description>
</property>
<property>
<name>dfs.namenode.data.dir</name>
<value>file:/home/ylz/hadoop-2.7.3/data/hdfs/data</value>
<description>datanode存放block本地目录</description>
</property>
<property>
<name>dfs.replication</name>
<value>1</value>
<description>由于只有一台机器,hdfs的副本数就指定为1</description>
</property>
</configuration>
```

### 初始化

`$HADOOP_HOME/bin/hdfs namenode -format`

```log
INFO common. Storage: Storage directory /home/ylz/hadoop-2.7.3/data/hdfs/name has been successfully formatted
```

到这里 hadoop 单机版已经安装成功, 接下来就是启动 hadoop

### 启动和停止

分别启动 namenode、secondarynamenode、datanode, 如下:

```bash
$HADOOP_HOME/sbin/hadoop-daemon.sh start namenode
$HADOOP_HOME/sbin/hadoop-daemon.sh start secondarynamenode
$HADOOP_HOME/sbin/hadoop-daemon.sh start datanode
#$HADOOP_HOME/bin/hadoop fs -ls /   #没有错误说明启动成功

#停止如下
$HADOOP_HOME/sbin/hadoop-daemon.sh stop datanode
$HADOOP_HOME/sbin/hadoop-daemon.sh stop secondarynamenode
$HADOOP_HOME/sbin/hadoop-daemon.sh stop namenode
```

### 配置 yarn

如果使用到 yarn, 配置时需要添加以下配置:

- mapred-site.xml

```xml
<configuration>
<property>
<name>mapreduce.framework.name</name>
<value>yarn</value>
</property>
</configuration>
```

- yarn-site.xml

```xml
<configuration>
<property>
<name>yarn.nodemanager.aux-services</name>
<value>mapreduce_shuffle</value>
</property>
</configuration>
```

## Hadoop 中的 ProxyUser

链接：https://www.jianshu.com/p/a27bc8651533

Hadoop2.0 版本开始支持 ProxyUser 的机制。含义是使用 User A 的用户认证信息，以 User B 的名义去访问 hadoop 集群。对于服务端来说就认为此时是 User B 在访问集群，相应对访问请求的鉴权（包括 HDFS 文件系统的权限，YARN 提交任务队列的权限）都以用户 User B 来进行。User A 被认为是 superuser（这里 superuser 并不等同于 hdfs 中的超级用户，只是拥有代理某些用户的权限，对于 hdfs 来说本身也是普通用户），User B 被认为是 proxyuser。

在 Hadoop 的用户认证机制中，如果使用的是 Simple 认证机制，实际上 ProxyUser 的使用意义并不大，因为客户端本身就可以使用任意用户对服务端进行访问，服务端并不会做认证。而在使用了安全认证机制（例如 Kerberos）的情况下，ProxyUser 认证机制就很有作用：

- 用户的管理会比较繁琐，每增加一个新的用户，都需要维护相应的认证信息（kerberosKeyTab），使用 ProxyUser 的话，只需要维护少量 superuser 的认证信息，而新增用户只需要添加 proxyuser 即可，proxyuser 本身不需要认证信息。
- 通常的安全认证方式，适合场景是不同用户在不同的客户端上提交对集群的访问；而实际应用中，通常有第三方用户平台或系统会统一用户对集群的访问，并 且执行一系列任务调度逻辑，例如 Oozie、华为的 BDI 系统等。此时访问集群提交任务的实际只有一个客户端。使用 ProxyUser 机制，则可以在这一 个客户端上，实现多个用户对集群的访问。

非 ProxyUser 方式访问 hadoop 集群，UGI 中只包含了普通用户及其认证信息。

使用 ProxyUser 方式访问 hadoop 集群，访问请求的 UGI 对象中实际包含了以下信息：

- proxyUser 用户名;
- superUser 用户名;
- superUser 的认证信息(kerberos 等安全认证模式下),通过 ProxyUser 方式访问 hadoop 集群，认证鉴权流程如下：
  ![proxyuser](/docs/bigdata/proxyuser.png)

:::info

- 对 SuperUser 进行认证，在 Simple 认证模式下直接通过认证，在 Kerberos 认证模式下，会验证 ticket 的合法性。
- 代理权限认证，即认证 SuperUser 是否有权限代理 proxyUser。这里权限认证的逻辑的实现可以通过`hadoop.security.impersonation.provider.class` 参数指定。在默认实现中通过一系列参数指定每个 SuperUser 允许代理用户的范围(即下文通过配置文件)。
- 访问请求鉴权，即验证 proxyUser 是否有权限对集群（hdfs 文件系统访问或者 yarn 提交任务到资源队列）的访问。这里的鉴权只针对 proxyUser 用户与 SuperUser 用户无关，即使 superUser 用户有权限访问某个目录，而 proxyUser 无权限访问，此时鉴权也会返回失败。

:::

### PROXYUSER 的使用和相关配置

ProxyUser 对象通过 UserGroupInformation.createProxy(“proxyUser”,superUgi)来创建，访问集群时通过 proxyUser.doAs 方式进行调用:

```java
// 创建superUser用户
UserGroupInformation superUser = UserGroupInformation.getCurrentUser();
//创建proxyUser用户
UserGroupInformation proxyUgi = UserGroupInformation.createProxyUser(“proxyUser”, superUser);
// 使用proxyUser用户访问集群
proxyUgi.doAs(new PrivilegedExceptionAction<Void>() {
@Override
public Void run() throws Exception {
// 使用proxy用户访问hdfs
FileSystem fs = FileSystem.get(conf);
fs.mkdirs(new Path(“/proxyUserDir”));
// 使用proxy用户提交mr作业
JobClient jc = new JobClient(conf);

jc.submitJob(conf);

    return null;
    }
});
```

服务端需要在 NameNode 和 ResourceManager 的 core-site.xml 中进行代理权限相关配置。 对于每一个 superUser 用户，配置参数：

| 配置                               | 说明                                        |
| ---------------------------------- | ------------------------------------------- |
| hadoop.proxyuser.$superuser.hosts  | 配置该 superUser 允许通过代理访问的主机节点 |
| hadoop.proxyuser.$superuser.groups | 配置该 superUser 允许代理的用户所属组       |
| hadoop.proxyuser.$superuser.users  | 配置该 superUser 允许代理的用户             |

:::note

- 对于每个 superUser 用户，hosts 必须进行配置，而 groups 和 users 至少需要配置一个;
- 这几个配置项的值都可以使用`*`来表示允许所有的主机/用户组/用户

:::

例如：

```xml
<!-- 表示允许用户userA，在任意主机节点，代理用户user1和user2 -->
<property>
<name>hadoop.proxyuser.userA.hosts</name>
<value>*</value>
</property>
<property>
<name>hadoop.proxyuser.userA.users</name>
<value>user1,user2</value>
</property>
```

:::caution 注意
代理用户权限相关配置的改动，需要修改 core-site.xml 文件中相关配置。修改后配置并不会自动更新到服务器（这与 fair-scheduler.xml 配置会自动更新不同）。修改配置后需要执行以下命令进行同步，分别将信息更新到 namenode 和 resourcemananger 上。

```bash
hdfs dfsadmin –refreshSuperUserGroupsConfiguration
yarn rmadmin –refreshSuperUserGroupsConfiguration
```

:::
