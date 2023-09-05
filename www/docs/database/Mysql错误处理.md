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

在使用 MySQL 8.0 以上版本（MySQL 连接驱动和版本都是 8.0 以上）的时候出现的问题错误，需要在访问数据库的 Url 后面加上`serverTimezone`，如：`jdbc:mysql://localhost:3306/yd?serverTimezone=GMT%2B8`

## ERROR! MySQL server PID file could not be found!

mysql 的二进制安装包安装脚本：

```bash
# ...
/usr/local/mysql/bin/mysqld --initialize --user=mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data 2>&1 | tee $log
# ...
cp /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld
# ...
chmod +x /etc/init.d/mysqld
/etc/init.d/mysqld restart
# ...
```

执行`/etc/init.d/mysqld restart`这条命令，在 ubuntu18.04 中没问题，在 openEuler22.03 中输出：

```log
ERROR! MySQL server PID file could not be found!
Starting MySQL.Logging to '/usr/local/mysql/data/localhost.localdomain.err'.
. SUCCESS!
```

:::note
虽然输出报错，最后 mysql 可用
:::
原因进程占用，先前已使用`bin/mysqld`启动，可以先 kill 掉进程然后 start, 而`/etc/init.d/mysqld restart`中 stop 会报 PID file 找不到。

```bash
# ...
PID=$(ps -ef | grep 'mysql' | grep -v grep | awk '{print $2}')
if [[ -n "$PID" ]]; then
kill ${PID} >/dev/null
fi
chmod +x /etc/init.d/mysqld
/etc/init.d/mysqld start
# ...
```

## unknown variable

`mysql: [ERROR] unknown variable 'basedir=xxx'`
mysql 的配置文件(my.cnf,my.ini)格式错误，如头不是`[mysqld]`

## the server quit without updating PID file

启动 mysql 报错`the server quit without updating PID file...`
原因是配置文件(my.cnf)中有配置不支持或者错误，查看 mysql 数据库 data 目录里的`xxx.err`文件可知。
