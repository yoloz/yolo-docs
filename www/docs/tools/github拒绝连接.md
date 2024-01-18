```bash
$ git pull
ssh: connect to host github.com port 22: Connection refused
fatal: Could not read from remote repository.
​
Please make sure you have the correct access rights
and the repository exists.
```

## 使用 443 端口

先执行命令`ssh -T -p 443 git@ssh.github.com`确认 443 端口是否可行

```bash
$ nano ~/.ssh/config

# 添加如下内容，config文件不存在手动创建
Host github.com
  Hostname ssh.github.com
  Port 443

# 文件保存后，测试和GitHub的网络通信是否正常
$ ssh -T git@github.com
Hi xxxxx! You've successfully authenticated, but GitHub does not
provide shell access.
```

## 使用 https 协议

在本地 repo 目录，执行如下命令：`git config --local -e`,然后把里面的 url 配置项从 git 格式`url = git@github.com:username/repo.git`
修改为 https 格式`url = https://github.com/username/repo.git`。这个其实修改的是 repo 根目录下的`./git/config`文件。

## DNS 污染

```bash
$ ssh -vT git@github.com
OpenSSH_9.0p1, OpenSSL 1.1.1o  3 May 2022
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: Connecting to github.com [::1] port 22.
debug1: connect to address ::1 port 22: Connection refused
debug1: Connecting to github.com [127.0.0.1] port 22.
debug1: connect to address 127.0.0.1 port 22: Connection refused
ssh: connect to host github.com port 22: Connection refused
```

从上面的信息发现连接`github.com`的地址居然是`::1`和`127.0.0.1`。前者是 IPV6 的 localhost 地址，后者是 IPV4 的 localhost 地址。到这里问题就很明确了，是 DNS 解析出问题了，导致`github.com`域名被解析成了 localhost 的 ip 地址。

> Windows 下执行`ipconfig /flushdns`清楚 DNS 缓存;
>
> 可以修改 hosts 文件，增加域名映射`140.82.113.4 github.com`,具体地址可以通过[https://www.ipaddress.com/](https://www.ipaddress.com/)查询；
