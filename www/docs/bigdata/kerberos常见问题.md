## kinit: Cannot contact any KDC...

kinit: Cannot contact any KDC for realm 'ZHDS.CO' while getting initial credentials

- 客户端和 KDC 之间的网络问题
- krb5.conf 中的 KDC 详细信息不正确
- 服务端未启动

可以使用`$ KRB5_TRACE=/dev/stderr kinit -kt test.keytab test`查看具体连接过程;

## kinit: Password incorrect ...

kinit: Password incorrect while getting initial credentials

kdc 上使用`ktadd -k user.keytab user`生成 keytab 文件后，在终端使用`kinit -kt test.keytab test`没有问题，但是直接使用`kinit test`会报错密码不对(如上)。

原因：生成秘钥文件时，密码可能会进行改变，解决办法：`ktadd -k user.keytab -norandkey user`

> 生成秘钥 keytab 文件时，添加参数-norandkey

## Peer indicated failure: Unsupported mechanism ...

Peer indicated failure: Unsupported mechanism type PLAIN (state=08S01,code=0)

直接命令行连接启用了 kerberos 的 hive 导致(未携带 principal):

```log
[zhds@cdh162 ~]$  /opt/cloudera/parcels/CDH-5.12.0-1.cdh5.12.0.p0.29/bin/beeline -u "jdbc:hive2://192.168.124.162:10000/"
scan complete in 24ms
Connecting to jdbc:hive2://192.168.124.162:10000/
Unknown HS2 problem when communicating with Thrift server.
Error: Could not open client transport with JDBC Uri: jdbc:hive2://192.168.124.162:10000/: Peer indicated failure: Unsupported mechanism type PLAIN (state=08S01,code=0)
Beeline version 1.1.0-cdh5.12.0 by Apache Hive
beeline>
```

## Server not found in Kerberos database

在 kdc 里面创建一个 principal(test@ZHDS.CO),然后导出其 keytab 文件，jdbc 连接 hive 报错如下：

```log
javax.security.sasl.SaslException: GSS initiate failed
....
Caused by: org.ietf.jgss.GSSException: No valid credentials provided (Mechanism level: Server not found in Kerberos database (7) - UNKNOWN_SERVER)
....
Caused by: sun.security.krb5.KrbException: Server not found in Kerberos database (7) - UNKNOWN_SERVER
....
Caused by: sun.security.krb5.Asn1Exception: Identifier doesn't match expected value (906)
```

jdbc(cloudera hive jar) 连接信息如下：

```java
 String url = "jdbc:hive2://192.168.124.162:10000/default;AuthMech=1;" +
                "KrbRealm=ZHDS.CO;KrbHostFQDN=cdh160;" +
                "KrbServiceName=hive;LogLevel=6;LogPath=/var/log/kblog";
```

:::note
LogLevel 和 LogPath:用于输出连接 trace 信息(测试)；
:::
以上 url 中信息拼出的 principal`hive/cdh160@ZHDS.CO`，实际 KDC 只有`hive/cdh161@ZHDS.CO,hive/cdh162@ZHDS.CO`且只有 cdh162 开启了 10000 端口，修改 url 如下：

```java
 String url = "jdbc:hive2://192.168.124.162:10000/default;AuthMech=1;" +
                "KrbRealm=ZHDS.CO;KrbHostFQDN=cdh162;" +
                "KrbServiceName=hive;LogLevel=6;LogPath=/var/log/kblog";
```

报错：Unable to connect to server: Peer indicated failure: GSS initiate failed(见下文，keytab 不对)

## Peer indicated failure: GSS initiate failed

上述随意导出和 hive 无关的test@ZHDS.CO,此时通过从 KDC 中导出 hive 的 keytab

```bash
#kdc导出
$ kadmin: ktadd -k /tmp/testHive.keytab -glob hive/cdh162
#162登陆
$ kinit -kt testHive.keytab hive/cdh162
#查看登陆结果
$ klist
```

并登陆:

```log
[zhds@cdh162 ~]$  /opt/cloudera/parcels/CDH-5.12.0-1.cdh5.12.0.p0.29/bin/beeline -u "jdbc:hive2://192.168.124.162:10000/;principal=hive/cdh162@ZHDS.CO"
scan complete in 2ms
Connecting to jdbc:hive2://192.168.124.162:10000/;principal=hive/cdh162@ZHDS.CO
Unknown HS2 problem when communicating with Thrift server.
Error: Could not open client transport with JDBC Uri: jdbc:hive2://192.168.124.162:10000/;principal=hive/cdh162@ZHDS.CO: Peer indicated failure: GSS initiate failed (state=08S01,code=0)
Beeline version 1.1.0-cdh5.12.0 by Apache Hive
beeline>
```

报错：Peer indicated failure: GSS initiate failed。

问题出在 keytab 上，其一随便从 KDC 里导出一个 principal(test@ZHDS.CO)与连接的 hive 没有关系，其二导出 hive 的 keytab 不对(和 agent 的相比缺少 http 且导致 key 版本号增加，进而引起集群连接不畅)。从 hive 节点上搜索 cloudera-scm-agent 使用的 keytab 文件如下：

```bash
[zhds@cdh162 ~]$ sudo find / -name hive.keytab
/var/run/cloudera-scm-agent/process/885-hive-HIVESERVER2/hive.keytab
#...more
[zhds@cdh162 ~]$ sudo klist -kt /var/run/cloudera-scm-agent/process/885-hive-HIVESERVER2/hive.keytab
Keytab name: FILE:/var/run/cloudera-scm-agent/process/885-hive-HIVESERVER2/hive.keytab
KVNO Timestamp         Principal
---- ----------------- --------------------------------------------------------
   5 02/04/21 16:43:44 hive/cdh162@ZHDS.CO
   ......
   5 02/04/21 16:43:44 HTTP/cdh162@ZHDS.CO

[zhds@cdh162 ~]$ klist -kt testHive.keytab
Keytab name: FILE:testHive.keytab
KVNO Timestamp         Principal
---- ----------------- --------------------------------------------------------
   6 03/20/23 14:11:59 hive/cdh162@ZHDS.CO
   ......
   7 03/20/23 14:12:00 hive/cdh162@ZHDS.CO
```

:::note

- 缺少 HTTP；
- key 的版本(KVNO)增加了

:::

直接使用集群里的 keytab 即可。

## Keytab contains no suitable keys for...

直接拿 CDH 集群里的 keytab 使用,报错:

```bash
$ klist -ke hive.keytab
Keytab name: FILE:hive.keytab
KVNO Principal
---- --------------------------------------------------------------------------
   8 hive/cdh162@ZHDS.CO (aes256-cts-hmac-sha1-96)
   8 hive/cdh162@ZHDS.CO (aes128-cts-hmac-sha1-96)
   8 hive/cdh162@ZHDS.CO (DEPRECATED:des3-cbc-sha1)
   8 hive/cdh162@ZHDS.CO (DEPRECATED:arcfour-hmac)
   8 hive/cdh162@ZHDS.CO (DEPRECATED:des-hmac-sha1)
   8 hive/cdh162@ZHDS.CO (DEPRECATED:des-cbc-md5)
   5 HTTP/cdh162@ZHDS.CO (aes256-cts-hmac-sha1-96)
   5 HTTP/cdh162@ZHDS.CO (aes128-cts-hmac-sha1-96)
   5 HTTP/cdh162@ZHDS.CO (DEPRECATED:des3-cbc-sha1)
   5 HTTP/cdh162@ZHDS.CO (DEPRECATED:arcfour-hmac)
   5 HTTP/cdh162@ZHDS.CO (DEPRECATED:des-hmac-sha1)
   5 HTTP/cdh162@ZHDS.CO (DEPRECATED:des-cbc-md5)

$ kinit -kt hive.keytab hive/chd162
kinit: Keytab contains no suitable keys for hive/chd162@ZHDS.CO while getting initial credentials
```

Keytab 中的 user/host@realm 与尝试进行身份验证的 principal `hive/cdh162` 不匹配。

:::note
实际是匹配的(一番折腾，有效的操作：1. 将 Hue,Impala,Ooze 启动了(先前关闭);2. 通过页面 Hue 查询了 hive; 2. 将 cloudera-scm-agent 重启了)，然后执行就好了。

事后才想起来可以查看 trace 信息：`KRB5_TRACE=/dev/stderr kinit -kt hive.keytab hive/cdh162`，暂时无环境测试。
:::

查看 CDH 集群的角色日志，错误信息如下：

## javax.security.auth.login.LoginException: Checksum failed

```log
org.apache.thrift.transport.TTransportException: org.apache.hadoop.security.KerberosAuthException: Login failure for user: hive/cdh162@ZHDS.CO from keytab hive.keytab javax.security.auth.login.LoginException: Checksum failed
...
Caused by: org.apache.hadoop.security.KerberosAuthException: Login failure for user: hive/cdh162@ZHDS.CO from keytab hive.keytab javax.security.auth.login.LoginException: Checksum failed
...
Caused by: javax.security.auth.login.LoginException: Checksum failed
...
Caused by: KrbException: Checksum failed
...
Caused by: java.security.GeneralSecurityException: Checksum failed
...
```

原因在于 cloudera-scm-agent 仍使用的是老的 keytab：

```bash
[zhds@cdh162 ~]$ sudo find / -name hive.keytab
/var/run/cloudera-scm-agent/process/887-hive-HIVESERVER2/hive.keytab
#...more
[zhds@cdh162 ~]$ sudo klist -kt /var/run/cloudera-scm-agent/process/887-hive-HIVESERVER2/hive.keytab
Keytab name: FILE:/var/run/cloudera-scm-agent/process/887-hive-HIVESERVER2/hive.keytab
KVNO Timestamp         Principal
---- ----------------- --------------------------------------------------------
   5 02/04/21 16:43:44 hive/cdh162@ZHDS.CO
   ......
   5 02/04/21 16:43:44 HTTP/cdh162@ZHDS.CO
```

而在 KDC 中导出了`hive/cdh162@ZHDS.CO`,如上 hive.keytab 的 key 版本号(KVNO) 从 5 增加到 6,7；

```bash
[zhds@cdh162 ~]$ klist -kt testHive.keytab
Keytab name: FILE:testHive.keytab
KVNO Timestamp         Principal
---- ----------------- --------------------------------------------------------
   6 03/20/23 14:11:59 hive/cdh162@ZHDS.CO
   ......
   7 03/20/23 14:12:00 hive/cdh162@ZHDS.CO
```

解决：

登陆 CDH=>停止 hive,然后管理=>安全=>kerberos 凭据=>选中`hive/cdh162@ZHDS.CO`=>重新生成所选项

:::caution
通过页面重启 hive 后，agent 才会更新 keytab 文件(需要重启 hive)：

```bash
[zhds@cdh162 ~]$ sudo find / -name hive.keytab
/var/run/cloudera-scm-agent/process/889-hive-HIVESERVER2/hive.keyta
#...more
[zhds@cdh162 ~]$ sudo klist -kt /var/run/cloudera-scm-agent/process/889-hive-HIVESERVER2/hive.keytab
Keytab name: FILE:/var/run/cloudera-scm-agent/process/889-hive-HIVESERVER2/hive.keytab
KVNO Timestamp         Principal
---- ----------------- --------------------------------------------------------
   8 03/20/23 15:40:34 hive/cdh162@ZHDS.CO
   ......
   5 03/20/23 15:40:36 HTTP/cdh162@ZHDS.CO
```

:::

## Failure unspecified at GSS-API level...

上述通过 CDH 重新生成 hive.keytab 重启成功后一会儿，提示**存在隐患 : Hive Metastore canary 因未知原因失败：**

```log
javax.security.sasl.SaslException: GSS initiate failed [Caused by GSSException: Failure unspecified at GSS-API level (Mechanism level: Specified version of key is not available (44))]
	...
Caused by: GSSException: Failure unspecified at GSS-API level (Mechanism level: Specified version of key is not available (44))
	...
Caused by: KrbException: Specified version of key is not available (44)
...
```

- 用户或服务正在尝试使用旧的 keytab 进行身份验证。
  自发布此 keytab 以来，有人重新生成了 Principal，从而使 key 的版本值增加了。如果有人使用 Cloudera Manager 重新生成 key 但不重新启动服务，或者对于尚未分发新 keytab 的手动配置，可能会发生这种情况。
- 某些服务需要一些密钥，例如 MapReduce / HDFS 需要 HTTP 密钥。如果重新生成了 HDFS 服务密钥，则 HTTP 的版本也会增加，并且更新后的密钥必须同时部署到这两个服务并重新启动

:::note
此处 Hive Metastore canary 会自我修复解决；
:::

## GSS initiate failed [Caused by GSSException: No valid credentials provided...

直接在 CDH 集群的 hive 节点上操作:

```log
[zhds@cdh162 ~]$ hive

Logging initialized using configuration in jar:file:/opt/cloudera/parcels/CDH-5.12.0-1.cdh5.12.0.p0.29/jars/hive-common-1.1.0-cdh5.12.0.jar!/hive-log4j.properties
Exception in thread "main" java.lang.RuntimeException: java.io.IOException: Failed on local exception: java.io.IOException: javax.security.sasl.SaslException: GSS initiate failed [Caused by GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos tgt)]; Host Details : local host is: "cdh162/192.168.124.162"; destination host is: "cdh160":8020;
...
Caused by: java.io.IOException: Failed on local exception: java.io.IOException: javax.security.sasl.SaslException: GSS initiate failed [Caused by GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos tgt)]; Host Details : local host is: "cdh162/192.168.124.162"; destination host is: "cdh160":8020;
...
Caused by: java.io.IOException: javax.security.sasl.SaslException: GSS initiate failed [Caused by GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos tgt)]
...
Caused by: javax.security.sasl.SaslException: GSS initiate failed [Caused by GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos tgt)]
...
Caused by: GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos tgt)
...
```

无有效 credentials，执行`kinit -kt hive.keytab hive/cdh162`后再执行 hive 即可。
