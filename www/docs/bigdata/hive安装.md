## 单机

**Requirements:jdk, hadoop**

`tar -zxvf apache-hive-2.1.0-bin.tar.gz -C ~`

### 修改配置文件

- hive-env.sh

`cp $HIVE_HOME/conf/hive-env.sh.template $HIVE_HOME/conf/hive-env.sh`
主要是配置 hadoop 的路径, 找到"HADOOP_HOME=="，填写 hadoop 路径

- hive-site.xml

`cp $HIVE_HOME/conf/hive-default.xml.template $HIVE_HOME/conf/hive-site.xml`
主要是配置 metadata 存储及 hive 数据存储在 hdfs 的位置, 可以直接使用默认的 derby，如下使用 mysql:

```xml
<configuration>
<property>
<name>javax.jdo.option.ConnectionURL</name>
<value
    >jdbc:mysql://localhost:3306/hive_metastore?createDatabaseIfNotExist=true&amp;characterEncoding=UTF-8&amp;useSSL=false</value>
<description>metastore_db为要创建的数据库名,注意字符集设置</description>
</property>
<property>
<name>javax.jdo.option.ConnectionDriverName</name>
<value>com.mysql.jdbc.Driver</value>
</property>
<property>
<name>javax.jdo.option.ConnectionUserName</name>
<value>root</value>
<description>登录账户名</description>
</property>
<property>
<name>javax.jdo.option.ConnectionPassword</name>
<value>123456</value>
<description>登录密码</description>
</property>
<property>
<name>hive.metastore.warehouse.dir</name>
<value>/user/hive/warehouse</value>
<description>hive表在hdfs的位置</description>
</property>
</configuration>
```

:::note
如果使用 mysql, 需要将对应的 jdbc 驱动 jar 移到 lib 下
:::

### 初始化

```bash
#hadoop已启动
export HADOOP_HOME=<hadoop-install-dir>
$HIVE_HOME/bin/schematool -dbType <db type> -initSchema  # use "derby" as db type or "mysql"
```

### 启动

```bash
$HIVE_HOME/bin/hiveserver2 &  #"&" 表示后台运行
$HIVE_HOME/bin/beeline
# beeline> !connect jdbc:hive2://localhost:10000/default
# Connecting to jdbc:hive2://localhost:10000/default
# Enter username for jdbc:hive2://localhost:10000/default:(直接回车)
# Enter password for jdbc:hive2://localhost:10000/default:(直接回车)
# Error: Failed to open new session: java.lang.RuntimeException: org.apache.hadoop.ipc.RemoteException(org.apache.hadoop.security.authorize.AuthorizationException): User: ylz is not allowed to impersonate anonymous (state=,code=0)
# beeline>
```

对于上述的 Error, 修改 hadoop 的 core-site.xml 加入:

```xml
<property>
<name>hadoop.proxyuser.ylz.hosts</name>
<value>*</value>
</property>
<property>
<name>hadoop.proxyuser.ylz.groups</name>
<value>*</value>
</property>
```

:::note
默认没有用户密码, hive-site.xml 中 hive.server2.authentication 为 NONE
:::

### 重启 hadoop

```bash
$HADOOP_HOME/sbin/hadoop-daemon.sh stop namenode
$HADOOP_HOME/sbin/hadoop-daemon.sh stop secondarynamenode
$HADOOP_HOME/sbin/hadoop-daemon.sh stop datanode
$HADOOP_HOME/sbin/hadoop-daemon.sh start namenode
$HADOOP_HOME/sbin/hadoop-daemon.sh start secondarynamenode
$HADOOP_HOME/sbin/hadoop-daemon.sh start datanode
```
