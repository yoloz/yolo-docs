## 安装

1. 通过脚本一键安装：

```bash
$ wget https://archive.cloudera.com/cm6/6.3.1/cloudera-manager-installer.bin
$ chmod u+x cloudera-manager-installer.bin
$ sudo ./cloudera-manager-installer.bin
```

:::caution

- 6.3.3 及以上 requires authentication;
- 会安装 oracle_jdk，需要网络可达或者使用代理 `sudo proxychains ./cloudera-manager-installer.bin`;

:::

2. 通过页面继续安装,地址:http://ip:7180 用户密码 admin/admin

在提供 SSH 登录凭据这一步骤中需要 sudo 无密码，可如下操作:

```bash
sudo groupadd cloudera
sudo useradd -m cloudera -g cloudera
sudo passwd cloudera
sudo vim /etc/sudoers
#添加　cloudera ALL =(ALL) NOPASSWD: ALL
```

然后选择用户填写 cloudera,下面的密码即刚才 passed 设置的

## 资源目录

日志: /var/log/cloudera-scm-x
配置: /etc/cloudera-scm-x

:::caution
移动机器，更换机器地址后，启动 CDH 登陆页面，Cloudera Management Service 运行不正常，重启后失败(5 个实例报错连接超时)，查看日志/var/log/cloudera-scm-agent/cloudera-scm-agent.log 可以查看连接 cloudera server 仍是原先的地址。修改配置文件/etc/cloudera-scm-agent/config.ini 的 server_host,重启`sudo service cloudera-scm-agent restart`

正常后会有各组件配置过期告警(地址变更)，重启组件应用新配置即可。
:::

## 问题

### 无法接收 Agent 发出的检测信号

执行`sudo service cloudera-scm-agent status`可以发现提示如下:

```log
Traceback (most recent call last):
May 22 07:05:06 cdh_183 cm[11441]:   File "/opt/cloudera/cm-agent/lib/python2.7/site-packages/cmf/main.py", line 105, in main_impl
May 22 07:05:06 cdh_183 cm[11441]:     ag.configure_service()
May 22 07:05:06 cdh_183 cm[11441]:   File "/opt/cloudera/cm-agent/lib/python2.7/site-packages/cmf/agent.py", line 608, in configure_service
May 22 07:05:06 cdh_183 cm[11441]:     raise Exception("Hostname is invalid; it contains an underscore character.")
May 22 07:05:06 cdh_183 cm[11441]: Exception: Hostname is invalid; it contains an underscore character.
```

原因：

The Internet standards (Request for Comments) for protocols mandate that component hostname labels may contain only the ASCII letters 'a' through 'z' (in a case-insensitive manner), the digits '0' through '9', and the hyphen ('-'). The original specification of hostnames in RFC 952, mandated that labels could not start with a digit or with a hyphen, and must not end with a hyphen. However, a subsequent specification (RFC 1123) permitted hostname labels to start with digits. No other symbols, punctuation characters, or white space are permitted.

配置中的 hostname 名称不合规则：hostnames(cdh\*183) with \* is illegal

### 集群设置中 Hive 报错

数据库设置中选择默认的嵌入式 postgresql 库，执行到命令详细信息步骤报错如下:

```log
Run a set of services for the first time
仅完成 2/3 个步骤。首个失败：命令 (Create Hive Metastore database tables (53)) 已失败
依次运行 8 步骤
仅完成 2/3 个步骤。首个失败：命令 (Create Hive Metastore database tables (53)) 已失败
并行运行 3 步骤
仅完成 2/3 个步骤。首个失败：命令 (Create Hive Metastore database tables (53)) 已失败
正在创建 Hive Metastore 数据库表
命令 (Create Hive Metastore database tables (53)) 已失败
Hive Metastore Server (cdh183)
创建 Hive Metastore 数据库表
Command aborted because of exception: Command timed-out after 150 seconds
Hive Metastore Server (cdh183)
```

缺少驱动包执行`sudo cp CDH-6.3.2-1.cdh6.3.2.p0.1605554/jars/postgresql-42.2.5.jar CDH-6.3.2-1.cdh6.3.2.p0.1605554/lib/hive/lib/`后重试即可。

**虚拟机重启后默认 cloudera manager 会自启，页面访问 ip:7180 则需等待一会**

### Canary 测试无法为/tmp/.cloudera_health_monitoring_canary_files 创建父目录

一般过一会儿就好了，如果没好可以手动创建，执行`sudo -u hdfs hdfs dfs -mkdir /tmp`即可，稍后页面告警就会消失

### hdfs 的简单操作

- 查看根目录：sudo -u hdfs hdfs dfs -ls /
- 修改 hdfs 的根目录的权限： `hdfs dfs -chmod 777 /`

报错**chmod: changing permissions of '/': Permission denied. user=root is not the owner of inode=/** ：默认用户是 hdfs，执行`sudo -u hdfs hdfs dfs -chmod 777 /`即可

### Error applying authorization policy on hive configuration

Error applying authorization policy on hive configuration: org.apache.hadoop.security.AccessControlException: Permission denied: user=hive, access=WRITE, inode="/tmp":hdfs:supergroup:drwxr-xr-x

`sudo -u hdfs hdfs dfs -chmod a+rwx /tmp`这样/tmp 除了所有者有读写执行权限外，其他用户也有读写执行权限

### Namenode and SecondaryNamenode Have different heapsizes

To change the heap size for NameNode and Secondary NameNode:

1. open the HDFS service in Cloudera Manager
2. select "Configuration" from the menu
3. enter "Java Heap Size " in the search field，Here you can configure heap size for NameNode and Secondary NameNode.
