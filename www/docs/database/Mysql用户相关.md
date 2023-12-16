## 创建

```sql
-- 指定ip：192.118.1.1的alex用户登录
create user 'alex'@'192.118.1.1' identified by '123';
-- 指定ip：192.118.1.开头的alex用户登录
create user 'alex'@'192.118.1.%' identified by '123';
-- 指定任何ip的alex用户登录
create user 'alex'@'%' identified by '123';
```

## 修改

```sql
-- 修改密码
SET PASSWORD FOR 'username'@'host' = PASSWORD('newpassword');
SET PASSWORD = PASSWORD("newpassword");   #修改当前用户密码
-- mysqladmin -u用户名 -p旧密码 password 新密码  #-u用户，-p密码之间不要空格
-- 更新用户表
update mysql.user set authentication_string=password('新密码') where user='用户名' and Host ='localhost';
-- 修改用户
rename user '用户名'@'IP地址' to '新用户名'@'IP地址';
```

## 删除

删除用户`drop user '用户名'@'IP地址';`

## 权限

查看权限`show grants for '用户'@'IP地址'`

### 赋权

GRANT privileges ON dbName.tbName TO 'username'@'host'

> - privileges(SELECT,INSERT,UPDATE...),所有权限 ALL 表示;
> - 所有数据库或所有表可用\*表示
> - 能给其他用户授权则后面要加上 WITH GRANT OPTION

```sql
-- 授权alex用户仅对db1.t1文件有查询,插入和更新的操作
grant select,insert,update on db1.t1 to "alex"@'%';
-- 表示有所有的权限，除了grant这个命令，这个命令是root才有的。alex用户对db1下的t1文件有任意操作
grant all privileges on db1.t1 to "alex"@'%';
-- alex用户对db1数据库中的文件执行任何操作
grant all privileges on db1.* to "alex"@'%';
-- alex用户对所有数据库中文件有任何操作
grant all privileges on *.* to "alex"@'%';
-- 能赋权给其他用户
GRANT ALL ON *.* TO 'pig'@'%' WITH GRANT OPTION;
-- mysqldump: Error: 'Access denied; you need (at least one of) the PROCESS privilege(s) for this operation' when trying to dump tablespaces
GRANT PROCESS ON *.* TO 'demo'@'localhost';
```

### 撤权

REVOKE privileges ON databasename.tablename FROM 'username'@'host';

```sql
-- 取消alex用户对db1的t1文件的任意操作
revoke all on db1.t1 from 'alex'@"%";
-- 取消alex用户对数据库db1的所有表的所有权限
revoke all on db1.* from 'alex'@"%";
-- 取消alex用户所有数据库的所有的表的权限
revoke all privileges on *.* from 'alex'@'%';
```

:::caution 注意

赋权和撤权的对象要对应，否则撤权会无效，如：

- 授权的时候是这样的(或类似的):GRANT SELECT ON test.user TO 'pig'@'%', 则使用 REVOKE SELECT ON _._ FROM 'pig'@'%';并不能撤销该用户对 test 数据库中 user 表的 SELECT 操作;
- 授权的时候是这样的:GRANT SELECT ON _._ TO 'pig'@'%';则 REVOKE SELECT ON test.user FROM 'pig'@'%';也不能撤销该用户对 test 数据库中 user 表的 Select 权限.

:::
