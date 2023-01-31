## 操作步骤

1. 客户端生成密钥:`ssh-keygen -t dsa -P '' -f ~/.ssh/id_dsa`

:::note
生成密钥过程中，建议采用默认值，只需要按三次回车之后，就会在～/.ssh 目录下生成密钥文件，其中 id_rsa 为私钥，id_rsa.pub 为公钥
:::

2. 服务器配置

服务器的`~/.ssh/authorized_keys` 文件保存可快速连接的客户端的公钥。需要把客户端生成的 id_rsa.pub 文件的内容拷贝到 authorized_keys 文件的末尾。

```bash
[root@linux ~]$ scp ~/.ssh/id_rsa.pub user@server:/home/user
[root@linux ~]$ ssh user@server -p port
[root@linux ~]$ cat ~/id_dsa.pub >> ~/.ssh/authorized_keys
```

**如果还是需要密码，则是由于目录及权限问题造成**

```bash
[root@linux ~]$ chown username: /home/username/.ssh
[root@linux ~]$ chown username: /home/username/.ssh/*
[root@linux ~]$ chmod 700 /home/username/.ssh
[root@linux ~]$ chmod 600 /home/username/.ssh/*
```

## 在客户端配置服务器登录相关参数

除了密码之外，登录时，还需要配置 ip 地址、端口、用户等信息，也比较繁琐。可通过客户端的`~/.ssh/config` 配置服务器的相关参数简化登录命令。

config 文件的配置内容如下：

```log
Host server
HostName 192.168.1.1
Port 22
User ubuntu
```

:::note
Host 为服务器的名称，输入登录命令时使用;  
HostName 为服务器的 ip 地址;  
Port 为 ssh 的端口;  
User 为服务器的用户名;  
:::

**从此以后，登录服务器如此`ssh server`**

## ssh 拷贝文件

遇到 ssh 能连接但是 scp 被禁止的情形可以用如下方式拷贝文件到本地`ssh root@10.68.120.214 'cd /root && cat shandongReq2Join.tar.gz' > ~/shandongReq2Join.tar.gz`
