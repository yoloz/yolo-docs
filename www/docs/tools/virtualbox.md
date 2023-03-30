## 共享文件夹权限问题

使用 virtualbox 最方便的 host-guest 交换文件方案莫过于共享文件夹功能了。 比如 host 有个叫 git 的文件夹，可以直接将此文件夹设置为共享文件夹并自动 mount，这样，每次在虚拟机一开机就看到这个文件夹被挂载为/media/sf_git。但是，在用非 root 用户方法这个文件夹时却会遇到权限不足问题。根源在于这个自动 mount 的文件夹的所有者为 root，所属的组是 vboxsf，并且只有这两个用户有访问权限。

解决方法也很简单，只需要将当期登录用户加入到 vboxsf 组就行了:`sudo usermod -aG vboxsf $(whoami)`
:::note
记得要重启一次系统组设置才能生效。
:::

## virtualbox failed to start raise network interfaces

1. ip addr 查看网卡名称；
2. 查看/etc/network/interface.d 文件里的 startup 文件；
3. 将 startup 文件里的启动网卡名称改成第一步查出来的；

## 分辨率调整

1. 打开 Oracle VM VirtualBox 软件；
2. 点击主机面菜单栏的 File(管理)中的 preferences(全局设置)；
3. 点击 display(显示)，类别选择 Hint(通知)，然后自定义显示大小；
4. 点击主机面菜单栏的 View(视图)中的 Auto-resize Gusest Display(自动调整显示尺寸)；
5. 鼠标拖动虚拟机即可达到配置的分辨率大小；

## 添加 usb 设备

一般安装好 virtualbox 后会生成组 vboxusers，查看：`cat /etc/group |grep vboxusers`

如果当前用户没有追加到这个组中，vitualbox 无法查看 usb 设备。让 Ubuntu 中的 Virtualbox 使用 u 盘：

1. `sudo usermod -G vboxusers -a john`，其中 john 是你要使用 vbox 的当前用户名
2. 注销后重新登入这个用户
3. 打开 vbox 点设置，点左侧的 usb，右边看那个绿色加号，就能看到你的 usb 设备了，添加一下。

## 安装增强工具包

`menu bar` 中选择 `devices`，下拉菜单中 `insertguestadditionscdimage`, virtualbox 的安装包中自带 VBoxGuestAdditions.iso，添加即可，如果没有虚拟光驱，则在虚拟机的管理界面的存储中添加虚拟光驱

## ubuntu virtualbox 安装出错

```log
vboxdrv.sh: Stopping VirtualBox services.
vboxdrv.sh: Building VirtualBox kernel modules.
This system is currently not set up to build kernel modules.
Please install the gcc make perl packages from your distribution.

There were problems setting up VirtualBox.  To re-start the set-up process, run /sbin/vboxconfig as root.

where: suplibOsInit what: 3 VERR_VM_DRIVER_NOT_INSTALLED - The support driver is not installed. On linux, open returned ENOENT.
```

解决办法：

```bash
sudo apt-get upgrade
sudo apt-get update
sudo apt-get install dkms
sudo apt-get install linux-headers-`uname -r` build-essential
sudo /sbin/vboxconfig
```

## 重新编译内核插件

```bash
/sbin/rcvboxadd quicksetup <version>  #直接具体版本
/sbin/rcvboxadd quicksetup all        #已经下载的所有版本
```
