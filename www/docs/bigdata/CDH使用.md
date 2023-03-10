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

## 角色调整

在 Cloudera Manager 安装 CDH 的过程中，最初的主机角色配置不够恰当，那之后在使用 CDH 的过程中，可以重新配置主机角色

查阅官方文档：[Role Instances | 5.7.x | Cloudera Documentation](https://docs.cloudera.com/documentation/enterprise/5-7-x/topics/cm_mc_role_instances.html#cmug_topic_5_2__section_nsf_xnw_ym)

1. 首先在主页点击各组件(如 Impala);
2. 点击 Impala 的实例导航，可以看到各节点所安装的服务；

- 选择服务，先停止，然后删除；
- 选择添加角色实例，可以给节点安装具体服务，然后启动；

## 配置 1 级 TLS

**常规警告： 为 CDH 群集启用 Kerberos 时，Cloudera 建议至少是 1 级 TLS。**

官网：[Configuring TLS Security for Cloudera Manager](https://docs.cloudera.com/documentation/enterprise/5-2-x/topics/cm_sg_config_tls_security.html)

更具体：[Cloudera Manager 配置 TLS 加密](https://blog.csdn.net/weixin_43215250/article/details/83307894)

生成证书：

- 公共 CA 签名证书，此类证书由公共证书颁发机构（CA）（如 Symantec 或 Comodo）签名。
- 内部 CA 签名证书，此类证书由您组织的内部 CA 签名。
- 自签名证书，自签名证书可用于非生产部署，例如概念验证设置。

下面使用自签名证书进行 TLS(测试环境)

### Cloudera Management Service 节点证书

1. JDK 环境准备：

```bash
$ export JAVA_HOME=/usr/java/jdk1.7.0_67-cloudera
$ export PATH=$JAVA_HOME/bin:$PATH
```

2. 创建证书的目录

```bash
$ sudo mkdir -p /opt/cloudera/security/jks/
$ sudo chmod 777 /opt/cloudera/security/jks/
```

3. 生成密钥和自签名证书

```bash
#keypass must be set to the same password value as storepass for Cloudera Manager to be able to access the keystore
#keypass or storepass must be changeit, keystore will import to jdk certs(this pass is default changeit)
#CN这么定义是因为cloudera service 内部会有：https://hostname:7183 请求
$ keytool -genkeypair -alias cdh -keyalg RSA -keysize 2048 -keystore /opt/cloudera/security/jks/cdh-keystore.jks -dname  "CN=$(hostname -f),OU=xx,O=xx,L=xx,ST=xx,C=CN"
```

:::tip
`keytool xxxx -ext san=dns:$(hostname -f)`:
SAN(Subject Alternative Name) 是 SSL 标准 x509 中定义的一个扩展。使用了 SAN 字段的 SSL 证书，可以扩展此证书支持的域名，使得一个证书可以支持多个不同域名的解析。
:::

4. 复制默认 Java 信任库（cacerts 中）到备用系统信任库（jssecacerts）

```bash
$ sudo cp $JAVA_HOME/jre/lib/security/cacerts $JAVA_HOME/jre/lib/security/jssecacerts
```

5. 从密钥库中导出证书

```bash
#keystore password输入签名证书的keypass
$ keytool -export -alias cdh -keystore /opt/cloudera/security/jks/cdh-keystore.jks -rfc -file /opt/cloudera/security/jks/cdh.cer
```

6. 将公钥导入 Java 信任库(jssecacerts)

这台机器上用 Java 运行的任何进程都会信任该密钥,Java 信任库的默认密码是 changeit(步骤 2 中为密钥库创建的密码设置为 changeit)

```bash
$ sudo chmod 777 $JAVA_HOME/jre/lib/security/jssecacerts
#keystore password changeit
$ keytool -import -alias cdh -file /opt/cloudera/security/jks/cdh.cer -keystore $JAVA_HOME/jre/lib/security/jssecacerts
$ sudo chmod 644 $JAVA_HOME/jre/lib/security/jssecacerts
```

### Cloudera Manager Admin Console 配置 TLS

登录 Cloudera Manager Admin Console， 选择管理 > 设置 > 安全性

1. 对 Admin Console 使用 TLS 加密(勾选)；
2. Cloudera Manager TLS/SSL 服务器 JKS Keystore 文件位置：`/opt/cloudera/security/jks/cdh-keystore.jks`；
3. Cloudera Manager TLS/SSL 服务器 JKS Keystore 文件密码：`changeit`;
4. 保存更改;

重启 Cloudera Manager`sudo service cloudera-scm-server restart`

重启 Cloudera Management Service 服务:登录 Cloudera Manager Admin Console(会自动以 https 跳到 7183 端口),进入 Cloudera Management Service > 操作 > 重新启动

:::note
Host Monitor 和 Service Monitor 角色日志：`/var/log/cloudera-scm-firehose/mgmt-cmf-mgmt-HOSTMONITOR-cdh160.log.out`，`/var/log/cloudera-scm-firehose/mgmt-cmf-mgmt-SERVICEMONITOR-cdh160.log.out`
:::

### Cloudera Manager Agents 配置 TLS

1. 登录 Cloudera Manager Admin Console > 管理 > 设置 > 安全性，勾选为代理使用 TLS 加密，并保存;
2. 修改各 agent 的配置文件`/etc/cloudera-scm-agent/config.ini`，将`use_tls`配置为 1(包括 service 这台节点);
3. service 节点执行`sudo service cloudera-scm-server restart`;
4. 每个节点执行`sudo service cloudera-scm-agent restart`;

:::caution
查看日志`/var/log/cloudera-scm-agent/cloudera-scm-agent.log`可以发现

```log
WrongHost: Peer certificate commonName does not match host, expected 192.168.124.160, got cdh160
```

1. 检查 DNS 和 /etc/hosts 文件配置是否正确
2. 配置文件`/etc/cloudera-scm-agent/config.ini` 的 SERVER_HOST 值将 IP 地址改成主机名(重启)

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
