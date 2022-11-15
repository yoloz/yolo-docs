## limit 语句

```sql
select * from "operativeLogs" ORDER BY "sysTimestamp" DESC LIMIT 5 OFFSET 5    #postgresql
select * from "operativeLogs" ORDER BY "sysTimestamp" DESC LIMIT 5,10        #mysql
```

## 用户

### 创建

```sql
#指定ip：192.118.1.1的alex用户登录
create user 'alex'@'192.118.1.1' identified by '123';
#指定ip：192.118.1.开头的alex用户登录
create user 'alex'@'192.118.1.%' identified by '123';
#指定任何ip的alex用户登录
create user 'alex'@'%' identified by '123';
```

### 修改

```sql
#修改密码
SET PASSWORD FOR 'username'@'host' = PASSWORD('newpassword');
SET PASSWORD = PASSWORD("newpassword");   #修改当前用户密码
mysqladmin -u用户名 -p旧密码 password 新密码  #-u用户，-p密码之间不要空格
#更新用户表
update mysql.user set authentication_string=password('新密码') where user='用户名' and Host ='localhost';
#修改用户
rename user '用户名'@'IP地址' to '新用户名'@'IP地址';
```

### 删除

删除用户`drop user '用户名'@'IP地址';`

## 权限

查看权限`show grants for '用户'@'IP地址'`

### 赋权

GRANT privileges ON dbName.tbName TO 'username'@'host'

> - privileges(SELECT,INSERT,UPDATE...),所有权限 ALL 表示;
> - 所有数据库或所有表可用\*表示
> - 能给其他用户授权则后面要加上 WITH GRANT OPTION

```sql
#授权alex用户仅对db1.t1文件有查询,插入和更新的操作
grant select,insert,update on db1.t1 to "alex"@'%';
#表示有所有的权限，除了grant这个命令，这个命令是root才有的。alex用户对db1下的t1文件有任意操作
grant all privileges on db1.t1 to "alex"@'%';
#alex用户对db1数据库中的文件执行任何操作
grant all privileges on db1.* to "alex"@'%';
#alex用户对所有数据库中文件有任何操作
grant all privileges on *.* to "alex"@'%';
#能赋权给其他用户
GRANT ALL ON *.* TO 'pig'@'%' WITH GRANT OPTION;
```

### 撤权

REVOKE privileges ON databasename.tablename FROM 'username'@'host';

```sql
#取消alex用户对db1的t1文件的任意操作
revoke all on db1.t1 from 'alex'@"%";
#取消alex用户对数据库db1的所有表的所有权限
revoke all on db1.* from 'alex'@"%";
#取消alex用户所有数据库的所有的表的权限
revoke all privileges on *.* from 'alex'@'%';
```

> 赋权和撤权的对象要对应，否则撤权会无效，如：
>
> 授权的时候是这样的(或类似的):GRANT SELECT ON test.user TO 'pig'@'%', 则使用 REVOKE SELECT ON _._ FROM 'pig'@'%';并不能撤销该用户对 test 数据库中 user 表的 SELECT 操作;
>
> 授权的时候是这样的:GRANT SELECT ON _._ TO 'pig'@'%';则 REVOKE SELECT ON test.user FROM 'pig'@'%';也不能撤销该用户对 test 数据库中 user 表的 Select 权限.

## 导入导出

### 导入导出查询结果

```sql
select语句 into outfile '/opt/file';

load data local infile '/opt/file' into table 表名 character set utf8;
```

### 导入导出结构和数据

mysqldump -u 用户名 -p [-d or -t] db_name [tbl_name ...]

> -d:do not write any table row information,即不导出表内容；
>
> -t: do not write create table statements that create each dumped tables,即不导出创建表结构；
>
> 如果只有 db_name 则导出全库，否则只导出库中的指定表；

- 导出

```shell
mysqldump -uxxx -p -d database > database.sql #导出数据库表结构
mysqldump -uxxx -p database > database.sql #导出数据库表结构和数据
mysqldump -uxxx -p -t database tablename > tablename.sql #导出数据表数据
mysqldump -uxxx -p database tablename > tablename.sql #导出数据表结构和数据
```

- 导入

```sql
#方式一
$ mysql -u用户名 -p
mysql> create database test;
mysql> exit;
$ mysql -u用户名 -p test < /home/test.sql
#方式二
$ mysql -u用户名 -p
mysql> create database test;
mysql> use test;
mysql> source /home/test.sql;
mysql> exit;
```

## 查看数据库参数

`mysqladmin -u test -h 192.168.1.116 -p variables | grep -E 'skip_networking'`

## 开启 skip-name-resolve 和 skip-networking 优化

在配置文件里\[mysqld\]下

- skip-name-resolve
  使用 skip-name-resolve 增加远程连接速度,该选项表示禁用 DNS 解析，属于官方一个系统上的特殊设定不管，链接的的方式是经过 hosts 或是 IP 的模式，他都会对 DNS 做反查，由于反查解析过慢，就会无法应付过量的查询。

- skip-networking
  单机运行 MySQL 使用 skip-networking 关闭 MySQL 的 TCP/IP 连接方式,开启该选项后就不能远程访问 MySQL.`SHOW VARIABLES LIKE 'skip_networking';`

**Percona Server**`sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf`

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

- bind-address=IP
  为安全考虑希望指定的 IP 访问 MySQL，可以在配置文件中增加 bind-address=IP，前提是关闭 skip-networking
