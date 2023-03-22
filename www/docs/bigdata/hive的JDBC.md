## 原生方式

```java
@Test
public void hiveTest() {
    String url = "jdbc:hive2://127.0.0.1:10000/default";
    try {
        Properties properties = new Properties();
        Class.forName("org.apache.hive.jdbc.HiveDriver");
        try (Connection conn = DriverManager.getConnection(url, properties);
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("show databases")) {
            while (rs.next()) {
                System.out.println(rs.getString(1));
            }
        }
    } catch (Exception e) {
        e.printStackTrace();
    }
}
@Test
public void hiveKerberosTest() {
    String url = "jdbc:hive2://127.0.0.1:10000/default;principal=hive/cdh1.com@CDHKDC.COM";
    try {
        Properties properties = new Properties();
        org.apache.hadoop.conf.Configuration conf = new org.apache.hadoop.conf.Configuration();
        conf.set("hadoop.security.authentication", "Kerberos");
        UserGroupInformation.setConfiguration(conf);
        UserGroupInformation.loginUserFromKeytab("wufang", "/tmp/wufang.keytab");
        Class.forName("org.apache.hive.jdbc.HiveDriver");
        try (Connection conn = DriverManager.getConnection(url, properties);
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery("show databases")) {
            while (rs.next()) {
                System.out.println(rs.getString(1));
            }
        }
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```

:::info
**url 如下：**

- jdbc:hive2://127.0.0.1:10000/default
- jdbc:hive2://127.0.0.1:10000/default;principal=hive/cdh1.com@CDHKDC.COM
- jdbc:hive2://hdp1:2181,hdp2:2181,hdp3:2181/;serviceDiscoveryMode=zooKeeper;zooKeeperNamespace=hiveserver2

**dependencies**

commons-collections-3.2.2.jar  
commons-configuration-1.6.jar  
commons-lang-2.6.jar  
hadoop-auth-2.6.0-cdh5.8.3.jar  
hadoop-common-2.7.3.jar  
hive-exec-1.1.0-cdh5.8.3.jar  
hive-jdbc-1.1.0-cdh5.8.3.jar  
hive-metastore-1.1.0-cdh5.8.3.jar  
hive-serde-1.1.0-cdh5.8.3.jar  
hive-service-1.1.0-cdh5.8.3.jar  
httpclient-4.4.jar  
httpcore-4.4.jar  
libthrift-0.9.3.jar
:::

## cdh 版

```java
@Test
public void cdhHiveTest() {
        //principal: hive/cdh162@ZHDS.CO
        //LogLevel,LogPath记录连接日志，用于测试
        String url = "jdbc:hive2://192.168.124.162:10000/default;AuthMech=1;" +
                "KrbRealm=ZHDS.CO;KrbHostFQDN=cdh162;" +
                "KrbServiceName=hive;LogLevel=6;LogPath=/tmp/kblog";
        //无验证方式：nosasl
        url = "jdbc:hive2://192.168.124.236:10000/default;AuthMech=0;transportMode=binary;";
        //用户名密码方式:none,custom
        url = "jdbc:hive2://192.168.124.236:10000/default;AuthMech=3;UID='';PWD='';";
    try {
        Properties properties = new Properties();
        // Class.forName("com.cloudera.hive.jdbc41.HS2Driver");
        try (Connection conn = DriverManager.getConnection(url, properties);
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery("show databases")) {
            while (rs.next()) {
                System.out.println(rs.getString(1));
            }
        }
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```

### AuthMech=0

hiveserver1 或者 hiveserver2 中 hive-site.xml 配置`hive.server2.authentication=nosasl`

:::info

服务端`hive.server2.authentication=NONE`，客户端使用`AuthMech=0`方式连接(正确：使用`AuthMech=3`方式，用户密码随便填写不验证)：

- 客户端报错

```log
java.sql.SQLException: [Cloudera][HiveJDBCDriver](500593) Communication link failure. Failed to connect to server. Reason: Socket is closed by peer. OpenSession.
...
Caused by: com.cloudera.hiveserver2.support.exceptions.ErrorException: [Cloudera][HiveJDBCDriver](500593) Communication link failure. Failed to connect to server. Reason: Socket is closed by peer. OpenSession.
...
Caused by: com.cloudera.hive.jdbc42.internal.apache.thrift.transport.TTransportException: Socket is closed by peer.
...

```

- 服务端 hive.log 报错

```log
2023-03-22T08:37:45,840 ERROR [HiveServer2-Handler-Pool: Thread-39] server.TThreadPoolServer: Error occurred during processing of message.
java.lang.RuntimeException: org.apache.thrift.transport.TTransportException: Invalid status -128
...
Caused by: org.apache.thrift.transport.TTransportException: Invalid status -128
...
```

服务端`hive.server2.authentication=nosasl`，客户端使用`AuthMech=3`方式连接(正确：使用`AuthMech=0`方式)：

- 客户端报错

```log
java.sql.SQLException: [Cloudera][HiveJDBCDriver](500164) Error initialized or created transport for authentication: Socket is closed by peer..
...
Caused by: com.cloudera.hiveserver2.support.exceptions.GeneralException: [Cloudera][HiveJDBCDriver](500164) Error initialized or created transport for authentication: Socket is closed by peer..
...
Caused by: com.cloudera.hive.jdbc42.internal.apache.thrift.transport.TTransportException: Socket is closed by peer.
...

```

- 服务端 hive.log 报错

```log
2023-03-22T10:29:40,525 ERROR [HiveServer2-Handler-Pool: Thread-39] server.TThreadPoolServer: Thrift error occurred during processing of message.
org.apache.thrift.protocol.TProtocolException: Missing version in readMessageBegin, old client?
...
```

:::

## 外链

[Installing Cloudera JDBC and ODBC Drivers on Clients in CDH](https://www.cloudera.com/documentation/enterprise/latest/topics/hive_jdbc_odbc_driver_install.html#hive_installing_jdbc_odbc_drivers)

[Cloudera JDBC latest Driver Documentation for Apache Hive](https://www.cloudera.com/documentation/other/connectors/hive-jdbc/latest.html)
