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
