## 默认支持的 Dialect

Spring Data JDBC includes direct support for the following databases:

- DB2
- H2
- HSQLDB
- MariaDB
- Microsoft SQL Server
- MySQL
- Oracle
- Postgres

[更多信息](https://docs.spring.io/spring-data/jdbc/docs/current/reference/html/#requirements)

如果不是上述列表支持的 dialect,启动会报错：

```log
Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'jdbcMappingContext' defined in class path resource [org/springframework/boot/autoconfigure/data/jdbc/JdbcRepositoriesAutoConfiguration$SpringBootJdbcConfiguration.class]: Unsatisfied dependency expressed through method 'jdbcMappingContext' parameter 1: Error creating bean with name 'jdbcCustomConversions' defined in class path resource [org/springframework/boot/autoconfigure/data/jdbc/JdbcRepositoriesAutoConfiguration$SpringBootJdbcConfiguration.class]: Failed to instantiate [org.springframework.data.jdbc.core.convert.JdbcCustomConversions]: Factory method 'jdbcCustomConversions' threw exception with message: Error creating bean with name 'jdbcDialect' defined in class path resource [org/springframework/boot/autoconfigure/data/jdbc/JdbcRepositoriesAutoConfiguration$SpringBootJdbcConfiguration.class]: Failed to instantiate [org.springframework.data.relational.core.dialect.Dialect]: Factory method 'jdbcDialect' threw exception with message: Cannot determine a dialect for org.springframework.jdbc.core.JdbcTemplate@4540c7; Please provide a Dialect
```

源码`org.springframework.data.jdbc.repository.config.DialectResolver`(spring-data-jdbc-3.1.0)有：

```java
 @Nullable
private static Dialect getDialect(Connection connection) throws SQLException {
    DatabaseMetaData metaData = connection.getMetaData();
    String name = metaData.getDatabaseProductName().toLowerCase(Locale.ENGLISH);
    if (name.contains("hsql")) {
        return HsqlDbDialect.INSTANCE;
    } else if (name.contains("h2")) {
        return H2Dialect.INSTANCE;
    } else if (name.contains("mysql")) {
        return new JdbcMySqlDialect(getIdentifierProcessing(metaData));
    } else if (name.contains("mariadb")) {
        return new MariaDbDialect(getIdentifierProcessing(metaData));
    } else if (name.contains("postgresql")) {
        return JdbcPostgresDialect.INSTANCE;
    } else if (name.contains("microsoft")) {
        return JdbcSqlServerDialect.INSTANCE;
    } else if (name.contains("db2")) {
        return JdbcDb2Dialect.INSTANCE;
    } else if (name.contains("oracle")) {
        return OracleDialect.INSTANCE;
    } else {
        DialectResolver.LOG.info(String.format("Couldn't determine Dialect for \"%s\"", name));
        return null;
    }
}
```

## 扩展第三方 Dialect

[参见 Dialects](https://docs.spring.io/spring-data/jdbc/docs/current/reference/html/#jdbc.dialects),如下：

1. Implement your own `Dialect`;
2. Implement a `JdbcDialectProvider` returning the `Dialect`.
3. Register the provider by creating a `spring.factories` resource under `META-INF` and perform the registration by adding a line
   `org.springframework.data.jdbc.repository.config.DialectResolver$JdbcDialectProvider=<fully qualified name of your JdbcDialectProvider>`

实际操作如下：

1. 第三方驱动添加依赖：

```xml
<dependency>
    <groupId>org.springframework.data</groupId>
    <artifactId>spring-data-jdbc</artifactId>
    <version>3.1.0</version>
    <!-- 无需打包进jar中 -->
    <scope>compile</scope>
</dependency>
```

2. 参考`spring-data-relational`中的已实现`Dialect`，简单样例如下：

```java
public class ZHDSDialect extends AnsiDialect {

    public static final ZHDSDialect INSTANCE = new ZHDSDialect();

    @Override
    @NonNull
    public LockClause lock() {
        return LOCK_CLAUSE;
    }

    @Override
    @NonNull
    public ArrayColumns getArraySupport() {
        return ArrayColumns.Unsupported.INSTANCE;
    }

    private static final LockClause LOCK_CLAUSE = new LockClause() {

        @Override
        @NonNull
        public String getLock(@NonNull LockOptions lockOptions) {
            return "WITH LOCK";
        }

        @Override
        @NonNull
        public Position getClausePosition() {
            return Position.AFTER_ORDER_BY;
        }
    };
}
```

3. 参考`org.springframework.data.jdbc.repository.config.DialectResolver`中的`DefaultDialectProvider`,实现`JdbcDialectProvider`如下：

```java
public class ZHDSDialectResolver implements DialectResolver.JdbcDialectProvider {

    private static final Log log = LogFactory.getLog(ZHDSDialectResolver.class);

    @Override
    @NonNull
    public Optional<Dialect> getDialect(JdbcOperations operations) {
        return Optional.ofNullable(operations.execute(ZHDSDialectResolver::getDialectImpl));
    }

    @Nullable
    private static Dialect getDialectImpl(Connection connection) throws SQLException {
        DatabaseMetaData metaData = connection.getMetaData();
        String name = metaData.getDatabaseProductName().toLowerCase(Locale.ENGLISH);
        if (name.contains("zhds")) {
            return ZHDSDialect.INSTANCE;
        } else {
            log.logWarn(String.format("Couldn't determine Dialect for \"%s\"", name));
            return null;
        }
    }
}
```

4. 在`META-INF中`新建名称为`spring.factories`的文件，内容为：`org.springframework.data.jdbc.repository.config.DialectResolver$JdbcDialectProvider=com.abc.edf.ZHDSDialectResolver`
