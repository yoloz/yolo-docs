## kadmin

进入管理员命令行

:::info kadmin[.local]
何时使用 kadmin.local 和 kadmin
创建 Kerberos 主体和 Keytab 时，可以使用 kadmin.local(需要在 KDC server 上面操作) 或 kadmin(可以在任何一台 KDC 领域的系统上面操作)，具体取决于您的访问权限和帐户：

- 如果您对 KDC 机器具有 root 用户访问权限，但您没有 Kerberos 管理员帐户，可以使用 kadmin.local;
- 如果您对 KDC 机器不具有 root 用户访问权限，但您拥有 Kerberos 管理员帐户，可以使用 kadmin;
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
  > Authenticating as principal kadmin/admin with password.  
  > Password for kadmin/admin@ZHDS.CO:
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

### kadmin 的 acl 配置

管理员主体需要具有适当的访问控制列表 （ACL） 权限。权限在 `/etc/krb5kdc/kadm5.acl`或`/var/kerberos/krb5kdc/kadm5.acl` 文件中配置：

```log
kadmin/admin@ZHDS.CO        *
#或者通用的
*/admin@ZHDS.CO        *
```

:::note

- The above will grant all privileges to any admin instance of a principal.
- 修改后需要重启 kdc 服务生效

:::

## 生成 keytab 配置文件

:::info
下文中的命令工具里的参数是 principal(如：kadmin/admin,yoloz,test 等,系统里配置了 realm 简写的，也可以写成全名称),详情可见[kerberos 了解](./kerberos了解.md)里的概念说明。
:::

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

2. 在 Kerberos 客户端，执行如下命令，将具有 Hive 访问权限的 hive/cdh162 用户添加到密钥分发中心（KDC），并查看是否添加成功

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

:::caution
上述生成的 keytab 文件，可能密码会被改变，即使用`kinit -kt test.keytab test`没有问题，但是直接`kinit test`让输入密码的时候密码不是先前设置的。需要在生成文件的时候添加参数-norandkey，即`ktadd -k /home/zhds/yoloz.keytab -norandkey -glob yoloz`
:::

## kerberos 客户端

cdh 启用 kerberos 后，如果我们需要本地连 impala 或者 hive(本地代码测试或者 jdbc 工具)，都需要在本地装 kerberos。

如果别的服务器需要通过 jdbc 访问 cdh 的服务，也需要安装 kerberos 客户端。

环境变量`KRB5CCNAME`非必要(linux 已验证)

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
# kinit -kt [keytab file] [principal]
$ kinit -kt /tmp/test.keytab test
# 查看是否缓存成功
$ klist
Ticket cache: FILE:/tmp/krb5cache
Default principal: test@ZHDS.CO

Valid starting       Expires              Service principal
03/18/2023 15:02:33  03/19/2023 15:02:33  krbtgt/ZHDS.CO@ZHDS.CO
```

## cache 文件及验证

The new user principal can be tested using the kinit utility:

```bash
$ kinit ubuntu/admin
Password for ubuntu/admin@EXAMPLE.COM:
#After entering the password, use the klist(列出当前账号信息) utility to view information about the Ticket Granting Ticket (TGT):
$ klist
Ticket cache: FILE:/tmp/krb5cc_1000
Default principal: ubuntu/admin@EXAMPLE.COM

Valid starting     Expires            Service principal
04/03/20 19:16:57  04/04/20 05:16:57  krbtgt/EXAMPLE.COM@EXAMPLE.COM
        renew until 04/04/20 19:16:55
```

:::note

- Where the cache filename `krb5cc_1000` is composed of the prefix `krb5cc_` and the user id (uid), which in this case is 1000.
- kinit(用户登录) will inspect /etc/krb5.conf to find out which KDC to contact, and its address.
- kdestroy(销毁登录信息),销毁后执行 klist:`klist: No credentials cache found (filename: /tmp/krb5cc_1000)`

:::

A very quick and useful way to troubleshoot what kinit is doing is to set the environment variable `KRB5_TRACE` to a file, or stderr, and it will show extra information. The output is quite verbose:

```bash
$ KRB5_TRACE=/dev/stderr kinit ubuntu/admin
[2898] 1585941845.278578: Getting initial credentials for ubuntu/admin@EXAMPLE.COM
[2898] 1585941845.278580: Sending unauthenticated request
[2898] 1585941845.278581: Sending request (189 bytes) to EXAMPLE.COM
[2898] 1585941845.278582: Resolving hostname kdc01.example.com
#...
```
