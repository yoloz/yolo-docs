## 安装

[MySQL Community Downloads](https://dev.mysql.com/downloads/)

- MySQL APT Repository

  通过 apt 安装，下载`mysql-apt-config`遇到系统版本低不适配，如提供的下载地址`https://repo.mysql.com//mysql-apt-config_0.8.26-1_all.deb`，可以手动修改其中的数字下载低版本适配系统`****_0.8.20-1_all.deb`

## limit 语句

```sql
select * from "operativeLogs" ORDER BY "sysTimestamp" DESC LIMIT 5 OFFSET 5    #postgresql
select * from "operativeLogs" ORDER BY "sysTimestamp" DESC LIMIT 5,10        #mysql
```

## 导入导出查询结果

```bash
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

```bash
mysqldump -uxxx -p -d database > database.sql #导出数据库表结构
mysqldump -uxxx -p database > database.sql #导出数据库表结构和数据
mysqldump -uxxx -p -t database tablename > tablename.sql #导出数据表数据
mysqldump -uxxx -p database tablename > tablename.sql #导出数据表结构和数据
```

**导出数据**

- 查看可导出位置（不然会涉及到权限问题）

```bash
mysql> show variables like 'secure_file_priv';
+------------------+-----------------------+
| Variable_name    | Value                 |
+------------------+-----------------------+
| secure_file_priv | /var/lib/mysql-files/ | 　　//如果出现权限问题，尝试把该目录所有者改成mysql
+------------------+-----------------------+
1 row in set (0.00 sec)
```

- 执行导出命令

```bash
mysqldump -udcap -p -t -T /var/lib/mysql-files/  dcap_data metaTableColumns --fields-terminated-by=',' --fields-enclosed-by='\"'
```

执行结果如下：

```bash
[root@server-10 ~]# ls -l /var/lib/mysql-files/
total 4
-rw-r--r-- 1 root  root    0 Aug 28 15:35 metaTableColumns.sql　　//会同步生成同名sql文件，内容为空
-rw-rw-rw- 1 mysql mysql 458 Aug 28 15:35 metaTableColumns.txt
[root@server-10 ~]# cat /var/lib/mysql-files/metaTableColumns.txt
"10001","Coyote Inc.","200 Maple Lane","Detroit","MI","44444","USA","Y Lee","ylee@coyote.com"
"10002","Mouse House","333 Fromage Lane","Columbus","OH","43333","USA","Jerry Mouse",\N
"10003","Wascals","1 Sunny Place","Muncie","IN","42222","USA","Jim Jones","rabbit@wascally.com"
"10004","Yosemite Place","829 Riverside Drive","Phoenix","AZ","88888","USA","Y Sam","sam@yosemite.com"
"10005","E Fudd","4545 53rd Street","Chicago","IL","54545","USA","E Fudd",\N
```

:::note
不需要每个字段带冒号，则省略--fields-enclosed-by='\"'即可

```bash
mysqldump -udcap -p -t -T /var/lib/mysql-files/  dcap_data metaTableColumns --fields-terminated-by=','
```

执行结果如下：

```bash
[root@server-10 ~]# cat /var/lib/mysql-files/metaTableColumns.txt
10001,Coyote Inc.,200 Maple Lane,Detroit,MI,44444,USA,Y Lee,ylee@coyote.com
10002,Mouse House,333 Fromage Lane,Columbus,OH,43333,USA,Jerry Mouse,\N
10003,Wascals,1 Sunny Place,Muncie,IN,42222,USA,Jim Jones,rabbit@wascally.com
10004,Yosemite Place,829 Riverside Drive,Phoenix,AZ,88888,USA,Y Sam,sam@yosemite.com
10005,E Fudd,4545 53rd Street,Chicago,IL,54545,USA,E Fudd,\N
```

:::

### 导入

```bash
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
