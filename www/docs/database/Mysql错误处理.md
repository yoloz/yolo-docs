## 锁表

错误:`com.mysql.cj.jdbc.exceptions.MySQLTransactionRollbackException: Lock wait timeout exceeded; try restarting transaction`

```sql
--连接数据库找到锁
SELECT trx_mysql_thread_id FROM information_schema.INNODB_TRX;
--杀掉process
kill trx_mysql_thread_id;
--查看process id
show processlist;
--查看被锁住的
select * from information_schema.innodb_locks;

```

## 时区问题

错误：`java.sql.SQLException: The server time zone value 'ÖÐ¹ú±ê×¼Ê±¼ä' is unrecognized`

在使用MySQL 8.0以上版本（MySQL连接驱动和版本都是8.0以上）的时候出现的问题错误，需要在访问数据库的Url后面加上`serverTimezone`，如：`jdbc:mysql://localhost:3306/yd?serverTimezone=GMT%2B8`