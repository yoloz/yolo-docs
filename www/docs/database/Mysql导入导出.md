## limit 语句

```sql
select * from "operativeLogs" ORDER BY "sysTimestamp" DESC LIMIT 5 OFFSET 5    #postgresql
select * from "operativeLogs" ORDER BY "sysTimestamp" DESC LIMIT 5,10        #mysql
```

## 导入导出查询结果

```sql
select语句 into outfile '/opt/file';

load data local infile '/opt/file' into table 表名 character set utf8;
```

## 导入导出结构和数据

:::info
mysqldump -u 用户名 -p [-d or -t] db_name [tbl_name ...]

- -d:do not write any table row information,即不导出表内容；
- -t: do not write create table statements that create each dumped tables,即不导出创建表结构；

如果只有 db_name 则导出全库，否则只导出库中的指定表；

:::

### 导出

```shell
mysqldump -uxxx -p -d database > database.sql #导出数据库表结构
mysqldump -uxxx -p database > database.sql #导出数据库表结构和数据
mysqldump -uxxx -p -t database tablename > tablename.sql #导出数据表数据
mysqldump -uxxx -p database tablename > tablename.sql #导出数据表结构和数据
```

### 导入

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
