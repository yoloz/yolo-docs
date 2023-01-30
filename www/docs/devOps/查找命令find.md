Linux find 命令用来在指定目录下查找文件。任何位于参数之前的字符串都将被视为欲查找的目录名。如果使用该命令时，不设置任何参数，则 find 命令将在当前目录下查找子目录与文件。并且将查找到的子目录和文件全部进行显示。

## 语法

`find path -option [ -print ] [ -exec -ok command ] {} \;`

find 根据下列规则判断 path 和 expression，在命令列上第一个 - ( ) , ! 之前的部份为 path，之后的是 expression。如果 path 是空字串则使用目前路径，如果 expression 是空字串则使用 -print 为预设 expression。

:::info 参数说明

expression 中可使用的选项有二三十个之多，在此只介绍最常用的部份。

-mount, -xdev : 只检查和指定目录在同一个文件系统下的文件，避免列出其它文件系统中的文件

-amin n : 查找分钟级被访问过的所有文件

-anewer file : 比文件 file 更晚被读取过的文件

-atime n : 查找天级被访问过的所有文件

-cmin n : 查找分钟级文件状态被修改过的所有文件

-cnewer file :比文件 file 更新的文件

-ctime n : 查找天级文件状态被修改过的所有文件

-mmin n : 查找分钟级文件内容被修改过的所有文件

-mtime n : 查找天级文件内容被修改过的所有文件

-empty : 空的文件

-gid n or -group name : gid 是 n 或是 group 名称是 name

-ipath p, -path p : 路径名称符合 p 的文件，ipath 会忽略大小写

-name name, -iname name : 文件名称符合 name 的文件。iname 会忽略大小写

:::

### 按时间查找

`find path {-atime/-ctime/-mtime/-amin/-cmin/-mmin} [-/+]num`

第三个参数为量，其中不带符号表示符合该数量的，带`-`表示符合该数量以后的，带`+`表示符合该数量以前的。

:::info

atime：访问时间（access time），指的是文件最后被读取的时间，可以使用 touch 命令更改为当前时间；  
ctime：变更时间（change time），指的是文件本身最后被变更的时间，变更动作可以使 chmod、chgrp、mv 等等；  
mtime：修改时间（modify time），指的是文件内容最后被修改的时间，修改动作可以使 echo 重定向、vi 等等；

- -mtime +2，表示 2 天以外的，即从距离当前时间的 2 天前开始算起，往更早的时间推移;
- -mtime 1，距离当前时间往前 1 天到现在这段时间内的文件，范围是闭区间；
- -mtime -1，表示1天以内的文件，范围是开区间；

:::

## 实例

```bash
#将当前目录及其子目录下所有最近 20 天内更新过的文件列出
[roc@roclinux ~]$ find . -ctime  20

#查找 /var/log 目录中更改时间在 7 日以前的普通文件，并在删除之前询问它们
[roc@roclinux ~]$ find /var/log -type f -mtime +7 -ok rm {} \;

#查找当前目录中文件属主具有读、写权限，并且文件所属组的用户和其他用户具有读权限的文件
[roc@roclinux ~]$ find . -type f -perm 644 -exec ls -l {} \;

#查找系统中所有文件长度为 0 的普通文件，并列出它们的完整路径
[roc@roclinux ~]$ find / -type f -size 0 -exec ls -l {} \;

```
