## 单机

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

最基本要修改 3 个文件：hadoop-env.sh, core-site.xml, hdfs-site.xml

- hadoop-env.sh

主要是配置 jdk 的路径, 找到"export JAVA_Home="，填写 jdk 路径

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

### 启动

分别启动 namenode、secondarynamenode、datanode, 如下:

```bash
$HADOOP_HOME/sbin/hadoop-daemon.sh start namenode
$HADOOP_HOME/sbin/hadoop-daemon.sh start secondarynamenode
$HADOOP_HOME/sbin/hadoop-daemon.sh start datanode
#$HADOOP_HOME/bin/hadoop fs -ls /   #没有错误说明启动成功
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
