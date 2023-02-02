
[Netplan](https://netplan.io/)是Ubuntu 17.10中引入的一种新的命令行网络配置实用程序，用于在 Ubuntu 系统中轻松管理和配置网络设置。 它允许您使用 YAML 格式的描述文件来抽像化定义网络接口的相关信息。

Netplan 目前支持以下两种 网络管理工具 ：
* NetworkManager
* Systemd-networkd

Netplan 的默认描述文件在/etc/netplan/*.yaml 里，Netplan描述文件采用了YAML语法。最简单有用的配置片段如下：

```yaml
network:
    version: 2
    renderer: NetworkManager
```

这个配置让 NetworkManager 管理所有网络设备（默认，只要检测到以太网设备接线，便以 DHCP 模式启动该设备）。

使用 Systemd-networkd，则不会自动启动网络设备； 每个需要启用的网卡均需要在 /etc/netplan 配置文件中指定配置。 网络配置示例如下：

```yaml
network:
    ethernets:
        enp0s3:
            addresses: []
            dhcp4: true
            optional: true
        enp0s8:
            addresses: [192.168.56.3/24]
            dhcp4: no
            optional: true
    version: 2
```
这个配置为 enp0s3 网卡开启 DHCP 自动获取地址； 为 enp0s8 网卡配置了一个静态 IP 192.168.56.3，掩码是 24 位。

## 双网卡多网段静态路由
实验中一台Ubuntu主机拥有双网卡，并且两个网卡处于不同网络。当我们两个网卡都使用得时候，发现Ubuntu的默认路由会有两个，导致数据不通。使用route -n指令查看有2个默认路由。

![netplan1.jpg](/docs/linux/netplan1.jpg)

192.168.0.0/24网段与172.16.0.0/24网段不互通！

VLAN192.168.1.0/24允许其他VLAN数据通过。

所以需要在Ubuntu的接口上做静态路由，配置如下：
```yaml
sudo vim /etc/netplan/50-cloud-init.yaml

# 编辑内容如下

# This file is generated from information provided by
# the datasource.  Changes to it will not persist across an instance.
# To disable cloud-init's network configuration capabilities, write a file
# /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg with the following:
# network: {config: disabled}
network:
    ethernets:
        ens33:
            dhcp4: false
            dhcp6: false
            addresses: [192.168.1.20/24]
            #gateway4: 192.168.1.253  做静态路由时，不需要指定网关
            routes:
                    - to: 192.168.0.0/24
                      via: 192.168.1.253

                    - to: 192.168.1.0/24
                      via: 192.168.1.253

                    - to: 192.168.2.0/24
                      via: 192.168.1.253

                    - to: 192.168.3.0/24
                      via: 192.168.1.253

                    - to: 192.168.4.0/24
                      via: 192.168.1.253

                    - to: 192.168.5.0/24
                      via: 192.168.1.253

                      table: 101

            routing-policy:
                    - from: 0.0.0.0/24
                      table: 101
            nameservers:
                    addresses: [192.168.1.1, 192.168.1.2]
        ens34:
            dhcp4: false
            dhcp6: false
            addresses: [172.16.0.10/24]
            gateway4: 172.16.0.253
            nameservers:
                    addresses: [172.16.0.1, 192.168.1.1]
    version: 2

# 保存退出
:wq

# 应用配置
sudo netplan apply
```

[更多例子](https://netplan.io/examples/)