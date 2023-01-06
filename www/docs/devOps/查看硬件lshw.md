## lshw 命令介绍

lshw（ls hardware）是一个提取机器硬件配置详细信息的工具，它能为我们提供内存配置、固件版本、主板配置信息、cpu 版本和速度、cache 信息、总线速度等。并且能将结果输出成 HTML、XML、json 等格式。

lshw 不仅是一个可以查看硬件信息的工具，它还可以用来做一些硬件的 benchmark，用于评估计算机硬件的性能特征。lshw 工具其实就是读取 /proc 里面的一些文件来显示相关的信息，比如：

```log
/proc/cpuinfo  # 显示CPU信息
/proc/bus/pci  # 显示pci信息
/proc/scsi     # 显示scsi信息
/proc/net/dev  # 显示网络设备信息
/proc/kcore    # 从内存映像读取相关信息
/proc/ide      # 显示IDE设备信息
/proc/devices
/proc/mounts
/proc/fstab
```

## 语法格式

`lshw [-format] [-options...]`
**建议以 root 身份执行 lshw 命令以获取完整硬件信息**

format：

- -html 将结果以 HTML 格式打印
- -xml 将结果以 xml 格式打印
- -json 将结果以 json 格式打印
- -short 输出硬件路径
- -businfo 输出总线信息。SCSI、USB、IDE、PCI 地址等

options：

- -dump filename

将收集到的信息输出到一个 SQLite 数据库中

- -class CLASS

仅显示指定类型的硬件，可使用 `lshw -sort` 或者 `lshw -businfo` 查找 CLASS。常见的 CLASS：system、bus、memory、processor、bridge、display、network、input、multimedia、communication、generic、storage、disk、volume

- -C CLASS

等同于’-class CLASS’

- -c CLASS

等同于‘-C CLASS’

- -enable TEST

启用测试，测试项包含：dmi、device-tree、spd、memory、cpuinfo、cpuid、pci、isapnp、pcmcia、ide、usb、scsi、network

- -disable TEST

禁用测试

- -quiet

不显示状态

## 参考实例

```bash
#将硬件配置信息以html格式输出
[root@localhost ~]# lshw -html
#显示硬件设备列表，输出总线信息
[root@localhost ~]# lshw -businfo
#显示内存相关的硬件信息
[root@localhost ~]# lshw -c memory
#显示网络设备信息
[root@localhost ~]# lshw -c network
```
