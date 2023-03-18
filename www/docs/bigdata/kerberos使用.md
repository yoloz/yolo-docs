## kadmin

:::info kadmin[.local]
何时使用 kadmin.local 和 kadmin
创建 Kerberos 主体和 Keytab 时，可以使用 kadmin.local 或 kadmin，具体取决于您的访问权限和帐户：

- 如果您对 KDC 机器具有 root 用户访问权限，但您没有 Kerberos 管理员帐户，请使用 kadmin.local;
- 如果您对 KDC 机器不具有 root 用户访问权限，但您拥有 Kerberos 管理员帐户，请使用 kadmin;
- 如果您同时拥有 KDC 机器的 root 用户访问权限和 Kerberos 管理员帐户，则可以使用其中任何一个;

:::

```bash
#在kdc节点上
[zhds@cdh160 ~]$ sudo kadmin.local
[sudo] password for zhds:
Authenticating as principal root/admin@ZHDS.CO with password.
#?可以查看帮助
kadmin.local:  listprincs
HTTP/cdh160@ZHDS.CO
hive/cdh161@ZHDS.CO
#....

[zhds@cdh160 ~]$ sudo kadmin.local -q "list_principals"
HTTP/cdh160@ZHDS.CO
hive/cdh161@ZHDS.CO
#....
[zhds@cdh160 ~]$ kadmin -q "list_principals"
#Couldn't open log file /var/log/kadmind.log: Permission denied
#Authenticating as principal zhds/admin@ZHDS.CO with password.
#kadmin: Client not found in Kerberos database while initializing kadmin interface
[zhds@cdh160 ~]$ sudo kadmin.local -q "addprinc zhds/admin"
[sudo] password for zhds:
#Authenticating as principal root/admin@ZHDS.CO with password.
#WARNING: no policy specified for zhds/admin@ZHDS.CO; defaulting to no policy
#Enter password for principal "zhds/admin@ZHDS.CO":
#Re-enter password for principal "zhds/admin@ZHDS.CO":
#Principal "zhds/admin@ZHDS.CO" created.
[zhds@cdh160 ~]$ kadmin -q "list_principals"
#Couldn't open log file /var/log/kadmind.log: Permission denied
#Authenticating as principal zhds/admin@ZHDS.CO with password.
#Password for zhds/admin@ZHDS.CO:
HTTP/cdh160@ZHDS.CO
hive/cdh161@ZHDS.CO
#....

#查看keytab文件内容
[zhds@cdh160 ~]$ klist -kt test.keytab
Keytab name: FILE:test.keytab
KVNO Timestamp         Principal
---- ----------------- --------------------------------------------------------
   1 02/04/21 17:23:52 test@ZHDS.CO
#....

```

:::caution

报错**kadmin: Client not found in Kerberos database while initializing kadmin interface**：

- 上述的添加(`addprinc`)是此时缓存了`zhds/admin`，实际是`kadmin -p zhds/admin -q "list_principals"`；
- 科学的用法使用`kadmin`时携带 principal,即：`kadmin -p kadmin/admin -q "list_principals"`
  > Couldn't open log file /var/log/kadmind.log: Permission denied  
  > Authenticating as principal admin/admin with password.  
  > Password for admin/admin@ZHDS.CO:
- 如果 principal 的密码忘记
  ```bash
  [zhds@cdh160 ~]$ sudo kadmin.local
  [sudo] password for zhds:
  Authenticating as principal root/admin@ZHDS.CO with password.
  kadmin.local:  cpw kadmin/admin
  Enter password for principal "kadmin/admin@ZHDS.CO":
  Re-enter password for principal "kadmin/admin@ZHDS.CO":
  Password for "kadmin/admin@ZHDS.CO" changed.
  kadmin.local:
  ```

:::

## 生成 keytab 配置文件

1. 进入 Kerberos 的 admin 客户端；

```bash
#或者 kadmin.local
[zhds@cdh160 ~]$ kadmin -p kadmin/admin
Couldn't open log file /var/log/kadmind.log: Permission denied
Authenticating as principal kadmin/admin with password.
Password for kadmin/admin@ZHDS.CO:
kadmin:  ?
Available kadmin requests:

add_principal, addprinc, ank
                         Add principal
delete_principal, delprinc
#...
```

2. 在 Kerberos 客户端，执行如下命令，将具有 Hive 访问权限的 yoloz 用户添加到密钥分发中心（KDC），并查看是否添加成功

```bash
#将具有Hive访问权限的test用户添加到KDC中
kadmin:  addprinc -pw <pwd> yoloz
WARNING: no policy specified for yoloz@ZHDS.CO; defaulting to no policy
Principal "yoloz@ZHDS.CO" created.
#查看是否添加成功
kadmin:  listprincs
HTTP/cdh160@ZHDS.CO
yoloz@ZHDS.CO
#....
```

3. 在 Kerberos 客户端，执行如下命令，在用户目录下(`/home/zhds`)生成 keytab 配置文件

```bash
kadmin:  ktadd
Usage: ktadd [-k[eytab] keytab] [-q] [-e keysaltlist] [principal | -glob princ-exp] [...]
#ktadd -k /home/zhds/yoloz.keytab yoloz@ZHDS.CO
kadmin:  ktadd -k /home/zhds/yoloz.keytab -glob yoloz
Entry for principal yoloz@ZHDS.CO with kvno 2, encryption type aes256-cts-hmac-sha1-96 added to keytab WRFILE:/home/zhds/yoloz.keytab.
#...
```

## kerberos 客户端

cdh 启用 kerberos 后，如果我们需要本地连 impala 或者 hive(本地代码测试或者 jdbc 工具)，都需要在本地装 kerberos。

如果别的服务器需要通过 jdbc 访问 cdh 的服务，也需要安装 kerberos 客户端。

### window

下载[MIT Kerberos for Windows](https://web.mit.edu/kerberos/dist/index.html)，安装完成会提示需要重启，可以先配环境变量再重启。

```log
KRB5_CONFIG=C:\ProgramData\MIT\Kerberos5\krb5.ini
KRB5CCNAME=C:\picc\krb5cache
```

:::note 环境变量

- C 盘没有 ProgramData 的话查看隐藏文件即可;
- KRB5_CONFIG 路径是固定的;
- KRB5CCNAME 任意目录都可以，picc 目录必须手动创建，krb5cache 无需创建;
- 修改 KRB5_CONFIG 里的 krb5.ini，参考 kerberos 服务端的 krb5.conf 内容修改 krb5.ini;

:::

修改 host 文件，将 cdh 所有的节点的 ip 主机名都添加进来，然后就可以重启了。

:::caution 重启后

- 通过客户端工具操作，Get Ticket=>输入 pricipal 和密码
- 通过 cmd 命令行操作，`kinit -kt D:\\test.keytab test`

:::

### linux

[ubuntu kerberos](https://ubuntu.com/server/docs/kerberos-introduction)
[redhat kerberos](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/system-level_authentication_guide/using_kerberos)

```bash
# 安装的时候让输入 default realm,跳过不填，最后手动修改配置文件
# 官方:yum install krb5-workstation krb5-libs,其中workstation可能非必要(未测试)
$ sudo yum install krb5-libs
# 官方:sudo apt install krb5-user sssd-krb5,其中sssd-krb5非必要(已测试)
$ sudo apt install krb5-user
```

:::note 环境变量

- 参考 kerberos 服务端的 krb5.conf 内容修改/etc/krb5.conf;
- 系统级修改文件`/etc/profile`，用户级`～/.profile`(没有手动创建)
  ```log
  export KRB5CONF=/etc/krb5.conf
  #krb5cache文件不需要提前创建
  export KRB5CCNAME=/tmp/krb5cache
  ```
- source `/etc/profile`或`～/.profile`

:::

修改/etc/hosts，将 cdh 所有节点的 ip 主机名都添加进来,然后使用 kinit 命令，缓存 principal 和 keytab 文件，并使用 klist 命令，查看是否缓存成功

```bash
$ kinit -kt /tmp/test.keytab test
# 查看是否缓存成功
$ klist
Ticket cache: FILE:/tmp/krb5cache
Default principal: test@ZHDS.CO

Valid starting       Expires              Service principal
03/18/2023 15:02:33  03/19/2023 15:02:33  krbtgt/ZHDS.CO@ZHDS.CO
```