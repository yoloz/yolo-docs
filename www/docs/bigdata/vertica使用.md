## 下载安装包

[https://www.vertica.com/](https://www.vertica.com/)

## 安装(Ubuntu18.04)

```bash
zhds@vertica:~$ sudo dpkg -i vertica_10.0.0-0_amd64.deb
#缺少依赖，安装依赖
zhds@vertica:~$ sudo /opt/vertica/sbin/install_vertica --hosts 192.168.1.149
```

添加 dbadmin 用户密码后报错

```log
Prerequisites not fully met during local (OS) configuration for
verify-192.168.1.149.xml:
    HINT (S0151): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0151
        HINT(eS0151): These disks do not have known IO schedulers: '/dev/sda2'
        ('sda') = 'none'
    HINT (S0305): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0305
        HINT(eS0305): TZ is unset for dbadmin. Consider updating .profile or
        .bashrc
    HINT (S0041): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0041
        HINT(eS0041): Could not find the following tools normally provided by
        the rasdaemon package: rasdaemon
    HINT (S0040): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0040
        HINT(eS0040): Could not find the following tools normally provided by
        the pstack or gstack package: pstack/gstack
    HINT (S0045): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0045
        HINT(eS0045): Could not find the following tools normally provided by
        the sysstat package: iostat, mpstat
    WARN (S0112): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0112
        WARN(eS0112): vm.swappiness is higher than recommended: your 60 > 1
    FAIL (S0020): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0020
        FAIL(eS0020): Readahead size of sda (/dev/sda2) is too low for typical
        systems: 256 < 2048
    FAIL (S0030): https://www.vertica.com/docs/11.0.x/HTML/index.htm#cshid=S0030
        FAIL(eS0030): ntp daemon process is not running: ['ntpd', 'ntp',
        'chronyd']

System prerequisites failed.  Threshold = WARN
        Hint: Fix above failures or use --failure-threshold

Installation FAILED with errors.
```

:::tip

- 打开错误中的链接地址即可解决
- 某些修改需要添加到自启动里，可见[《服务自启动》](../linux/服务自启动.md)

:::

### 配置 I/O Scheduler

Vertica 使用的磁盘的 I/O 调度程序必须设置为 deadline 或 noop，默认为 deadline.

```bash
zhds@vertica:~$ cat /sys/block/sda/queue/scheduler
[none]
# tee等价于 >
zhds@vertica:~$ echo "deadline" | sudo tee /sys/block/sda/queue/scheduler
deadline
tee: /sys/block/sda/queue/scheduler: Invalid argument
# 上述添加失败，deadline无效换成mq-deadline即可
# 加入开机自启, tee -a 等价于 >>
zhds@vertica:~$ echo 'echo "deadline" > /sys/block/sda/queue/scheduler' | sudo tee -a /etc/rc.local
```

:::caution
上述 deadline 修改失败，换用 mq-deadline 可以,具体可见[《IOSchedulers》](https://wiki.ubuntu.com/Kernel/Reference/IOSchedulers)
:::

:::note
On some Ubuntu/Debian systems, the last line in rc.local must be "exit 0". So you must manually add the following line to etc/rc.local before the last line with exit 0.
:::

### 配置 TZ

```bash
#sudo timedatectl set-timezone Asia/Shanghai
zhds@vertica:~$ cat <<EOF>>~/.bashrc
export TZ="Asia/Shanghai"
EOF
```

:::cation 注意
如果是集群，必须在所有节点上将 TZ 变量设置为相同的值;
:::

### Support Tools

```bash
zhds@vertica:~$ sudo apt install pstack sysstat [rasdaemon]mcelog
```

:::caution
For Ubuntu versions 18.04 and higher, run apt install rasdaemon instead of apt install mcelog.
:::

### 配置 swapiness

```bash
zhds@vertica:~$ cat /proc/sys/vm/swappiness
zhds@vertica:~$ echo "vm.swappiness=0" | sudo tee -a /etc/sysctl.conf
zhds@vertica:~$ sudo sysctl -p
zhds@vertica:~$ cat /proc/sys/vm/swappiness
```

### Disk Readahead

```bash
zhds@vertica:~$ sudo /sbin/blockdev --setra 2048 /dev/sda
zhds@vertica:~$ echo '/sbin/blockdev --setra 2048 /dev/sda' | sudo tee -a /etc/rc.local
```

:::caution
On some Ubuntu/Debian systems, the last line in rc.local must be "exit 0". So you must manually add the following line to etc/rc.local before the last line with exit 0.
:::

### Enabling chrony or ntpd

```bash
zhds@vertica:~$ sudo apt install chrony
zhds@vertica:~$ sudo systemctl status chrony
zhds@vertica:~$ chronyc tracking
```

## 重启

:::info 自启动

```bash
zhds@vertica:~$ echo '#!/bin/sh -e' | sudo tee /etc/rc.local
zhds@vertica:~$ echo 'echo "mq-deadline" > /sys/block/sda/queue/scheduler' | sudo tee -a /etc/rc.local
zhds@vertica:~$ echo '/sbin/blockdev --setra 2048 /dev/sda' | sudo tee -a /etc/rc.local
zhds@vertica:~$ echo 'exit 0' | sudo tee -a /etc/rc.local
#服务启动等更多信息见下方链接
```

详见[《服务自启动》](../linux/服务自启动.md)
:::

```bash
zhds@vertica:~$ sudo reboot
#启动后
zhds@vertica:~$ sudo /opt/vertica/sbin/install_vertica --hosts 192.168.1.149
#......
# To create a database:
#   1. Logout and login as dbadmin. (see note below)
#   2. Run /opt/vertica/bin/adminTools as dbadmin
#   3. Select Create Database from the Configuration Menu
#   Note: Installation may have made configuration changes to dbadmin
#   that do not take effect until the next session (logout and login).
#.......
zhds@vertica:~$ su dbadmin
#Password:
dbadmin@vertica:/home/zhds$ /opt/vertica/bin/adminTools
# create database,第一步证书Tab键直接选择OK使用社区版

```

:::tip
数据库切换以及启动可以通过：bin/adminTools 图形界面操作，用户切换到 vertica 的用户。
:::

## Projection row size (64032161) exceeds MaxRowSize (32768000)

表结构定义中各列的大小定义超过行的最大值

## Querying Structs

In queries, ROW columns are shown in output using JSON format. In the following example,
the last row shows partial data.

```sql
=> SELECT * FROM customers ORDER BY accountID;
name | address | accountID
--------------------+--------------------------------------------------------------------+-----------
Missy Cooper | {"street":"911 San Marcos St","city":"Austin","zipcode":73344} | 17
Sheldon Cooper | {"street":"100 Main St Apt 4B","city":"Pasadena","zipcode":91001} | 139
Leonard Hofstadter | {"street":"100 Main St Apt 4A","city":"Pasadena","zipcode":91001} | 142
Leslie Winkle | {"street":"23 Fifth Ave Apt 8C","city":"Pasadena","zipcode":91001} | 198
Raj Koothrappali | {"street":null,"city":"Pasadena","zipcode":91001} | 294
(5 rows)
```

Most values are cast to UTF-8 strings, as shown for street and city here. Integers and
booleans are cast to JSON Numerics and thus not quoted.
Use dot notation (column.field) to access fields:

```sql
=> SELECT address.city FROM customers;
city
----------
Pasadena
Pasadena
Pasadena
Pasadena
Austin
(5 rows)
```

You can use row columns or specific fields to restrict queries, as in the following examples.

```sql
=> SELECT address FROM customers WHERE address.city ='Pasadena';
address
--------------------------------------------------------------------
{"street":"100 Main St Apt 4B","city":"Pasadena","zipcode":91001}
{"street":"100 Main St Apt 4A","city":"Pasadena","zipcode":91001}
{"street":"23 Fifth Ave Apt 8C","city":"Pasadena","zipcode":91001}
{"street":null,"city":"Pasadena","zipcode":91001}
(4 rows)
```

You can use the ROW syntax to specify literal values, such as the address in the WHERE clause in the following example.

```sql
=> SELECT name,address FROM customers
WHERE address = ROW('100 Main St Apt 4A','Pasadena',91001);
name | address
--------------------+-------------------------------------------------------------------
Leonard Hofstadter | {"street":"100 Main St Apt 4A","city":"Pasadena","zipcode":91001}
(1 row)
```

You can join on values from structs as you would from any other column:

```sql
=> SELECT accountID,department from customers JOIN employees
ON customers.name=employees.personal.name;
accountID | department
-----------+------------
139 | Physics
142 | Physics
294 | Astronomy
```

You can join on full structs. The following example joins the addresses in the employees and customers tables.

```sql
=> SELECT employees.personal.name,customers.accountID FROM employees
JOIN customers ON employees.personal.address=customers.address;
name | accountID
--------------------+-----------
Sheldon Cooper | 139
Leonard Hofstadter | 142
(2 rows)
```

You can use structs in views and in subqueries, as in the following example.

```sql
=> CREATE VIEW neighbors (num_neighbors, area(city, zipcode))
AS SELECT count(*), ROW(address.city, address.zipcode)
FROM customers GROUP BY address.city, address.zipcode;
CREATE VIEW
=> SELECT employees.personal.name, neighbors.area FROM neighbors, employees
WHERE employees.personal.address.zipcode=neighbors.area.zipcode AND neighbors.nu
m_neighbors > 1;
name | area
--------------------+-------------------------------------
Sheldon Cooper | {"city":"Pasadena","zipcode":91001}
Leonard Hofstadter | {"city":"Pasadena","zipcode":91001}
(2 rows)
```

If a reference is ambiguous, Vertica prefers column names over field names.

You can use many operators and predicates with ROW columns, including JOIN, GROUP BY,
ORDER BY, IS [NOT] NULL, and comparison operations in nullable filters. Some operators
are nonsensical for structured data and are not supported.

## Loading Delimited Data

If you do not specify another parser, Vertica defaults to the DELIMITED parser. You can
specify the delimiter, escape characters, how to handle null values, and other parameters in
the COPY statement.

The options specific to the DELIMITED parser and their default values are:

|        Option         | Default           |
| :-------------------: | :---------------- |
|       DELIMITER       |                   |
|      ENCLOSED BY      | "                 |
|        ESCAPE         | \                 |
|         NULL          | '' (empty string) |
|    COLLECTIONOPEN     | [                 |
|    COLLECTIONCLOSE    | ]                 |
|  COLLECTIONDELIMITER  | ,                 |
| COLLECTIONNULLELEMENT | null              |
|   COLLECTIONENCLOSE   | " (double quote)  |
|   TRAILING NULLCOLS   | (none)            |

The following example shows the default behavior, in which the delimiter character is '|'

```sql
=> CREATE TABLE employees (id INT, name VARCHAR(50), department VARCHAR(50));
CREATE TABLE
=> COPY employees FROM STDIN;
Enter data to be copied followed by a newline.
End with a backslash and a period on a line by itself.
>> 42|Sheldon Cooper|Physics
>> 17|Howard Wolowitz|Astronomy
>> \.
=> SELECT * FROM employees;
id | name | department
----+-----------------+--------------
17 | Howard Wolowitz | Astrophysics
42 | Sheldon Cooper | Physics
(2 rows)
```

The following example loads data from a comma-separated file:

```sql
=> COPY employees FROM ... DELIMITER ',';
```

In the following example, the first column has a column-specific delimiter:

```sql
=> COPY employees(id DELIMITER ':', name, department) FROM ... DELIMITER ',';
```

By default, collection values are delimited by brackets and elements are delimited by commas. Collections must be one-dimensional arrays or sets of scalar types.

```sql
=> CREATE TABLE researchers (id INT, name VARCHAR, grants ARRAY[VARCHAR], values ARRAY[INT]);
CREATE TABLE
=> COPY researchers FROM STDIN;
Enter data to be copied followed by a newline.
Vertica Documentation
Getting Started
Vertica Analytic Database (10.0.x) Page 385 of 6450
End with a backslash and a period on a line by itself.
>> 42|Sheldon Cooper|[US-7376,DARPA-1567]|[65000,135000]
>> 17|Howard Wolowitz|[NASA-1683,NASA-7867,SPX-76]|[16700,85000,45000]
>> \.
=> SELECT * FROM researchers;
id | name | grants | values
----+-----------------+------------------------------------+---------------------
17 | Howard Wolowitz | ["NASA-1683","NASA-7867","SPX-76"] | [16700,85000,45000]
42 | Sheldon Cooper | ["US-7376","DARPA-1567"] | [65000,135000]
(2 rows)
```

To use a special character as a literal, prefix it with an escape character. For example, to
include a literal backslash (\) in the loaded data (such as when including a file path), use
two backslashes (\\). COPY removes the escape character from the input when it loads
escaped characters.

When loading delimited data, two consecutive delimiters indicate a null value, unless the
NULL parameter is set otherwise. The final delimiter is optional. For example, the following
input is valid for the previous table:

```sql
=> COPY employees FROM STDIN;
Enter data to be copied followed by a newline.
End with a backslash and a period on a line by itself.
>> 45|Raj|
>> 21|Leonard||
>> \.
=> SELECT * FROM employees;
id | name | department
----+---------+--------------
21 | Leonard |
42 | Raj |
(2 rows)
```

By default, if the data has too few values, the load fails. You can use the TRAILING
NULLCOLS option to accept any number of missing columns and treat their values as null.
Vertica assumes that data is in the UTF-8 encoding.

To load delimited data into a Flex table, use the FDELIMITEDPARSER parser.

## SQL Support for User-Level Configuration

Two SQL statements support setting configuration parameters for individual users:

- ALTER USER now supports setting user-level configuration parameters for the specified user. For example:

```sql
=> ALTER USER user1 SET PARAMETER
DepotOperationsForQuery='Fetches', UseDepotForWrites=0;
```

- New statement SHOW USER returns all configuration parameter values that are set for the specified user. For example:

```sql
=> SHOW USER user1 ALL;
name | setting
------------------------+---------
DepotOperationsForQuery | Fetches
UseDepotForWrites | 0
(2 rows)
```
