## rsyslog

[Install rsyslog on Ubuntu](https://www.rsyslog.com/ubuntu-repository/)

:::note
一般已经安装
:::

```bash
#查看服务状态，可见已经设置为自动启动
$ sudo systemctl status rsyslog.service
#防火墙
sudo ufw allow 514
sudo ufw allow 514/udp
```

## 服务端配置

[rsyslog-example](https://www.rsyslog.com/doc/v8-stable/_downloads/7e57a40acf92e68e8c6a36de79acc04d/rsyslog-example.conf)

根据需求放开 TCP 或者 UDP 相关配置(/etc/rsyslog.conf)

```bash
#################
#### MODULES ####
#################
# Provides UDP syslog reception
$ModLoad imudp
$UDPServerRun 514

# Provides TCP syslog reception
$ModLoad imtcp
$InputTCPServerRun 514
```

### 配置写入文件

文件`/etc/rsyslog.conf`最后:

```bash
#
# Include all config files in /etc/rsyslog.d/
#
$IncludeConfig /etc/rsyslog.d/*.conf
```

说明其他配置（规则、模版）都在 /etc/rsyslog.d 目录下

```bash
zhds@DSG-252:~$ ls /etc/rsyslog.d/
20-ufw.conf  21-cloudinit.conf  50-default.conf
```

普通使用就修改这个 50-default.conf,这里选择创建了一个 conf 文件

```log
$AllowedSender TCP, 127.0.0.1, 192.168.2.0/24, *.example.com
$AllowedSender UDP, 127.0.0.1, 192.168.2.0/24, *.example.com

# A template that resambles traditional syslogd file output:
$template TraditionalFormat,"%timegenerated% %HOSTNAME% %syslogtag%%msg:::drop-last-lf%\n"


# 按照客户端的HOSTNAME 分别创建不同目录,rsyslog需要手动创建,每天只创建一个文件
$template remote-incoming-logs,"/var/log/rsyslog/%HOSTNAME%/%PROGRAMNAME%_%$YEAR%-%$MONTH%-%$DAY%.log"
*.* ?remote-incoming-logs

# 根据客户端的IP单独存放主机日志在不同目录，rsyslog需要手动创建
$template RemoteLogs,"/var/log/rsyslog/%fromhost-ip%/%syslogtag%_%$YEAR%-%$MONTH%-%$DAY%-%$hour%:%$minute%.log"
# 或者每天只创建一个文件
# $template RemoteLogs,"/var/log/rsyslog/%fromhost-ip%/%syslogtag%_%$YEAR%-%$MONTH%-%$DAY%.log"
:fromhost-ip, !isequal, "127.0.0.1" ?RemoteLogs
& ~

# Forwarding to remote machine
# 作为服务端，全都注释掉
# 作为客户端，修改以下服务端 ip ，注意，IP最后不要空格
# ----------------------------
# authpriv.*	@192.168.2.205
```

:::info
主要就是以下 3 个部分:

- `$AllowedSender`
- `$template`
- `Forwarding to remote machine`

服务端和客户端区别不大，作为服务端用的话，注释掉以上`# Forwarding to remote machine`

`& ~`: 这个表示丢弃后续的所有日志处理(warning: ~ action is deprecated, consider using the 'stop' statement instead):`& stop`;
:::

### 重启

日志文件：`/var/log/rsyslog.log`

```bash
zhds@DSG-252:~$ sudo systemctl restart rsyslog.service
zhds@DSG-252:~$ sudo systemctl status rsyslog.service
  rsyslog.service - System Logging Service
   Loaded: loaded (/lib/systemd/system/rsyslog.service; enabled; vendor preset: enabled)
   Active: active (running) since Thu 2023-04-06 17:23:41 CST; 2s ago
     Docs: man:rsyslogd(8)
           http://www.rsyslog.com/doc/
 #...
zhds@DSG-252:~$
```
