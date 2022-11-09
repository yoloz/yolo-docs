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
- jdbc:hive2://hdp1:2181,hdp2:2181, hdp3:2181/;serviceDiscoveryMode=zooKeeper; zooKeeperNamespace=hiveserver2

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
    String url = "jdbc:hive2://127.0.0.1:10000/default;AuthMech=1;" +
            "KrbRealm=CDHKDC.COM;KrbHostFQDN=cdh1.com;" +
            "KrbServiceName=hive;KrbAuthType=2";
    try {
        Properties properties = new Properties();
        Class.forName("com.cloudera.hive.jdbc41.HS2Driver");
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

## 外链

[Installing Cloudera JDBC and ODBC Drivers on Clients in CDH](https://www.cloudera.com/documentation/enterprise/latest/topics/hive_jdbc_odbc_driver_install.html#hive_installing_jdbc_odbc_drivers)

[Cloudera JDBC latest Driver Documentation for Apache Hive](https://www.cloudera.com/documentation/other/connectors/hive-jdbc/latest.html)
