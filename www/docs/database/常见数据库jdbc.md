## oracle

[Oracle Database JDBC driver](https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html)

## sqlserver

```java
// 在连接字符串中设置 trustServerCertificate 属性
String connectionUrl =
    "jdbc:sqlserver://localhost:1433;" +
     "databaseName=AdventureWorks;integratedSecurity=true;" +
     "encrypt=true;trustServerCertificate=true";

// 在连接字符串中设置 trustStore 和 trustStorePassword 属性
String connectionUrl =
    "jdbc:sqlserver://localhost:1433;" +
     "databaseName=AdventureWorks;integratedSecurity=true;" +
     "encrypt=true; trustServerCertificate=false;" +
     "trustStore=storeName;trustStorePassword=storePassword";

// 在连接字符串中使用 hostNameInCertificate 属性
String connectionUrl =
    "jdbc:sqlserver://localhost:1433;" +
     "databaseName=AdventureWorks;integratedSecurity=true;" +
     "encrypt=true; trustServerCertificate=false;" +
     "trustStore=storeName;trustStorePassword=storePassword;" +
     "hostNameInCertificate=hostName";
```

详见：[使用加密进行连接](https://learn.microsoft.com/zh-cn/sql/connect/jdbc/connecting-with-ssl-encryption?view=sql-server-ver16)
