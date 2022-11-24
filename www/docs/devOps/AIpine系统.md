## 安装

不管是刻录 U 盘还是在虚拟机里启动，进入终端之后，输入 root 默认无密登陆，然后执行`setup-alpine`命令，在终端上启动他的安装程序

## 配置本机 hostname

```bash
#修改主机名为jenreyAlpine
echo 'jenreyAlpine' > /etc/hostname
#立即生效
hostname -F /etc/hostname
```

## 配置网络

```bash
#新建网卡配置文件
vi /etc/network/interfaces

#文件内容为(注意：是英文字母lo)：
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet static

      address 192.168.1.177

      netmask 255.255.255.0

      gateway 192.168.1.1

#重启网络服务
service networking restart

#配置DNS
vi /etc/resolv.conf
#文件内容为
nameserver 114.114.114.114
nameserver 114.114.115.115
```

## 添加 ssh

```bash

#安装openssh-server服务器
apk add openssh-server

#修改配置文件
vi /etc/ssh/sshd_config
#如果要想使用root用户远程管理，需要修改#PermitRootLogin prohibit-password参数为：
PermitRootLogin yes

#将ssh服务配置为开机自动启动
rc-update add sshd

#立刻生效
/etc/init.d/sshd restart
```

## 更新源

```bash
#使用 latest-stable 指向最新的稳定版本
vi /etc/apk/repositories
#写入
https://mirrors.ustc.edu.cn/alpine/latest-stable/main
https://mirrors.ustc.edu.cn/alpine/latest-stable/community

#更新最新镜像源列表
apk update
```

## 服务管理

alpine 没有使用 fedora 的 systemctl 来进行服务管理，使用的是 RC 系列命令

```bash

#查看运行的服务
rc-status
#列出所有服务
rc-status -a
#查看状态的帮助
rc-status --help

#查看服务管理的帮助
rc-service --help

#添加服务
rc-update add Service名
#如添加SSHD服务:
rc-update add sshd
#增加docker服务到系统启动时运行
rc-update add docker boot

#移除服务
rc-update del Service名

#启用/停止/重启服务
rc-service Service名 start/stop/restart
#重启网络服务
rc-service networking restart

#列出服务和状态
rc-status -s
#列出所有可用的服务名列表
rc-service -l
```

## 设置时区

```bash

#查看时间及时区
date -R

#安装tzdata
apk add tzdata
#拷贝时区文件
cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
#指定时区
echo "Asia/Shanghai" > /etc/timezone
#移除时区文件(指定完时区就可以删除了)
apk del tzdata
```

## 关机

```bash
reboot  #重启系统，类似于shutdown -r now。
halt     #关机，类似于shutdown -h now。
poweroff #关机
```

## apk 相关命令

```bash
#更新最新镜像源列表
apk update

#查找所以可用软件包
apk search
#查找所以可用软件包及其描述内容
apk search -v
#通过软件包名称查找软件包
apk search -v 'acf*'
#通过描述文件查找特定的软件包
apk search -v -d 'docker'

#安装一个软件
apk add openssh
#安装多个软件
apk add openssh openntp vim
#不使用本地镜像源缓存，相当于先执行update，再执行add
apk add --no-cache mysql-client

#列出所有已安装的软件包
apk info
#显示完整的软件包信息
apk info -a zlib
#显示指定文件属于的包
apk info --who-owns /sbin/lbu

#升级所有软件
apk upgrade
#升级指定软件
apk upgrade openssh
#升级多个软件
apk upgrade openssh openntp vim
#指定升级部分软件包
apk add --upgrade busybox

#删除一个软件
apk del openssh

#更新系统
apk upgrade
```
