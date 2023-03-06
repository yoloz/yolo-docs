## 查看数据库参数

`mysqladmin -u test -h 192.168.1.116 -p variables | grep -E 'skip_networking'`

## 开启 skip-name-resolve 和 skip-networking 优化

在配置文件里\[mysqld\]下

- skip-name-resolve
  使用 skip-name-resolve 增加远程连接速度,该选项表示禁用 DNS 解析，属于官方一个系统上的特殊设定不管，链接的的方式是经过 hosts 或是 IP 的模式，他都会对 DNS 做反查，由于反查解析过慢，就会无法应付过量的查询。

- skip-networking
  单机运行 MySQL 使用 skip-networking 关闭 MySQL 的 TCP/IP 连接方式,开启该选项后就不能远程访问 MySQL.`SHOW VARIABLES LIKE 'skip_networking';`

### Percona Server

`sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf`

```log
#
# The Percona Server 8.0 configuration file.
#
# For explanations see
# http://dev.mysql.com/doc/mysql/en/server-system-variables.html

[mysqld]
pid-file        = /var/run/mysqld/mysqld.pid
socket          = /var/run/mysqld/mysqld.sock
datadir         = /var/lib/mysql
log-error       = /var/log/mysql/error.log
#skip-grant-tables
#注释掉上行则skip-networking关闭，否则只可本机连接
```

## bind-address=IP

为安全考虑希望指定的 IP 访问 MySQL，可以在配置文件中增加 bind-address=IP，前提是关闭 skip-networking

## 密码强度策略

查看密码策略`show variables like 'validate_password%';`
将各个属性修改为 0，即可降低密码严格度

```sql
set global validate_password_length =0;
set global validate_password_mixed_case_count=0;
set global validate_password_number_count=0;
set global validate_password_policy=0;
set global validate_password_special_char_count =0;
```

| Variable_name                        | Value |
| :----------------------------------- | :---- |
| validate_password_check_user_name    | OFF   |
| validate_password_dictionary_file    |       |
| validate_password_length             | 4     |
| validate_password_mixed_case_count   | 0     |
| validate_password_number_count       | 0     |
| validate_password_policy             | LOW   |
| validate_password_special_char_count | 0     |

修改后重置密码`alter user 'root'@'localhost' identified by '1234';`

:::info
mysql 启动失败看日志：/var/log/mysqld.log
:::

## Public Key Retrieval is not allowed

- url 中添加 allowPublicKeyRetrieval=true;
- 工具上在属性里将此选项设为 true;
