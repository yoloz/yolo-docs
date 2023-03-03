## TASK ERROR: VM is locked

选中右侧 pve，点击左上方 shell，打开 ssh 控制台，通过 ps 命令操作:

```bash
root@pve:~# qm unlock [VM ID]
```

## 虚拟机通过页面 SHUTDOWN 无法关闭

选中右侧 pve，点击左上方 shell，打开 ssh 控制台，通过 ps 命令操作:

```bash
#查找进程
root@pve:~# ps -ef|grep "/usr/bin/kvm -id [VM ID]" |grep -v grep
#kill进程
root@pve:~# kill [pid]
```

## 虚拟机迁移

- 在 web 页面操作,虚拟机关机后，点击备份，登陆服务器可以看到目录 /var/lib/vz/dump 下有新的备份文件产生。
- 转移文件到另一台：`scp /var/lib/vz/dump/vzdump-qemu-102-xxxx.vma.lzo root@192.168.1.102:/root/`
- 登陆另外一台 PVE 服务器执行:`qmrestore vzdump-qemu-102-xxxx.vma.lzo [新的VM ID]`
