逻辑卷管理 Logical Volume Management（LVM）在 Linux 系统中扮演着重要的角色，它可以提高可用性、磁盘 I/O、性能和磁盘管理的能力。如下：
![LVM](/docs/linux/lvm.jpeg)

## 创建物理卷(PV)

可以使用任何磁盘、RAID 阵列、SAN 磁盘或分区作为 LVM 物理卷 Physical Volume（PV）。
先在操作系统中检测(fdisk -l 或者 lsblk)，然后使用 `pvcreate` 命令初始化 LVM PV:`pvcreate [物理卷名]`

```bash
$ sudo pvcreate /dev/sdb /dev/sdc /dev/sdd
Physical volume "/dev/sdb" successfully created
Physical volume "/dev/sdc" successfully created
Physical volume "/dev/sdd" successfully created
```

:::caution

- 上面的命令将删除给定磁盘 /dev/sdb、/dev/sdc 和 /dev/sdd 上的所有数据。
- 物理磁盘可以直接添加到 LVM PV 中，而不必是磁盘分区。

:::

使用 `pvdisplay`(详细输出) 和 `pvs`(摘要输出) 命令来显示创建的 PV:

```bash
$ sudo pvs
PV VG Fmt Attr PSize PFree
/dev/sdb lvm2 a-- 15.00g 15.00g
/dev/sdc lvm2 a-- 15.00g 15.00g
/dev/sdd lvm2 a-- 15.00g 15.00g

$ sudo pvdisplay
"/dev/sdb" is a new physical volume of "15.00 GiB"
--- NEW Physical volume ---
PV Name               /dev/sdb
VG Name
PV Size               15.00 GiB
Allocatable           NO
PE Size               0
Total PE              0
Free PE               0
Allocated PE          0
PV UUID               69d9dd18-36be-4631-9ebb-78f05fe3217f
#......
```

## 创建卷组(VG)

Volume Group（VG）是 LVM 结构中的另一层。基本上，卷组由你创建的 LVM 物理卷组成，你可以将物理卷添加到现有的卷组中，或者根据需要为物理卷创建新的卷组。

使用以下命令将一个新的物理卷添加到新的卷组中：`vgcreate [卷组名] [物理卷名]`

```bash
$ sudo vgcreate vg01 /dev/sdb /dev/sdc /dev/sdd
Volume group "vg01" successfully created
```

:::tip
PE(Physical Extent)物理扩展块:是整个 lvm 最小的存储块，也就是说我们的文件数据都是由写入 pe 来处理的。简单的说，这个 pe 有点像文件系统里面的 block 大小。

lvm 默认使用 4MB 的 pe 块,lvm 的 vg 最多能含有 65534 个 pe，因此默认的 lvm vg 会有 4M\*65534/1024=256G.

查看 pe 大小:`sudo vgdisplay`

修改 pe 大小:`sudo vgchange -s 1`,修改为 1mb 大小,这里只能写 2 的倍数,最大为 64，或者：`sudo vgchange -s 1 卷组名`，或者在创建卷组时指定
`sudo vgcreate -s 16 卷组名 物理磁盘路径`
:::

使用 `vgs`(摘要输出) 和 `vgdisplay`(详细输出) 命令来显示创建的 VG 的信息(后面卷组名可选)：

```bash
$ sudo vgs vg01
VG #PV #LV #SN Attr VSize VFree
vg01 3 0 0 wz--n- 44.99g 44.99g

$ sudo vgdisplay vg01
--- Volume group ---
VG Name              vg01
System ID
Format               lvm2
Metadata Areas       3
Metadata Sequence No 1
VG Access            read/write
VG Status            resizable
MAX LV               0
Cur LV               0
Open LV              0
Max PV               0
Cur PV               3
Act PV               3
VG Size              44.99 GiB
PE Size              4.00 MiB
Total PE             11511
Alloc PE / Size      0 / 0
Free PE / Size       11511 / 44.99 GiB
VG UUID              d17e3c31-e2c9-4f11-809c-94a549bc43b7
```

### 扩展卷组(VG)

如果 VG 没有空间，可以使用`vgextend`命令在现有的卷组（VG）中添加一个新的物理卷：`vgextend [已有卷组名] [物理卷名]`
:::tip
扩展卷组前提是下层物理卷(PV)还有可分配的,使用`pvdisplay`查看，如果已经使用完则需要先提供存储设备再扩展。
:::

```bash
$ vgextend vg01 /dev/sda
Volume group "vg01" successfully extended
```

## 创建逻辑卷(LV)

逻辑卷 Logical Volume（LV）是 LVM 结构中的顶层。逻辑卷是由卷组创建的块设备。它作为一个虚拟磁盘分区，可以使用 LVM 命令轻松管理。

使用 `lvcreate` 命令创建一个新的逻辑卷:`lvcreate –n [逻辑卷名] –L [逻辑卷大小] [要创建的 LV 所在的卷组名称]`

```bash
#运行下面的命令，创建一个大小为 10GB 的逻辑卷 lv001：
$ sudo lvcreate -n lv001 -L 10G vg01
Logical volume "lv001" created
```

使用 `lvs`(摘要输出) 和 `lvdisplay`(详细输出) 命令来显示所创建的 LV 的信息：

```bash
$ sudo lvs /dev/vg01/lvol01
LV VG Attr LSize Pool Origin Data% Move Log Cpy%Sync Convert
lv001 vg01 mwi-a-m-- 10.00g lv001_mlog 100.00

$ sudo lvdisplay /dev/vg01/lv001
--- Logical volume ---
LV Path                /dev/vg01/lv001
LV Name                lv001
VG Name                vg01
LV UUID                ca307aa4-0866-49b1-8184-004025789e63
LV Write Access        read/write
LV Creation host, time localhost.localdomain, 2020-09-10 11:43:05 -0700
LV Status              available
# open                 0
LV Size                10.00 GiB
Current LE             2560
Segments               1
Allocation             inherit
Read ahead sectors     auto
- currently set to     256
Block device           253:4
```

:::info
以 PE 个数创建逻辑卷：`lvcreate –n [逻辑卷名] –l [物理扩展 （PE） 大小] [要创建的 LV 所在的卷组名称]`

首先计算需要的 PE 个数，默认情况下，lvm 使用 4MB 的物理范围，具体可以通过`vgdisplay` 命令来检查正确的 PE 大小，计算：`10GB = 10240MB / 4MB （PE 大小） = 2560 PE`，创建：`sudo lvcreate -n lv001 -l 2560 vg01`
:::

### 扩展逻辑卷(LV)

如果 LV 没有空间，可以使用`lvextend`命令增加现有逻辑卷大小：`lvextend [要增加的额外空间] [现有逻辑卷名称]`
:::tip
扩展逻辑卷前提是下层 VG(卷组)还有可分配空间,使用`vgdisplay`查看`Free PE / Size`，如果已经使用完则先扩展 VG,再扩展 LV。
:::

```bash
#将现有的逻辑卷增加 10GB
$ sudo lvextend -L +10G /dev/mapper/vg01-lv002
Rounding size to boundary between physical extents: 5.90 GiB
Size of logical volume vg01/lv002 changed from 5.00 GiB (1280 extents) to 15.00 GiB (3840 extents).
Logical volume var successfully resized
```

:::info

- 使用 PE 个数扩充逻辑卷，细节同上：`sudo lvextend -l +2560 /dev/mapper/vg01-lv002`;
- 要使用百分比（%）扩展逻辑卷:`sudo lvextend -l +40%FREE /dev/mapper/vg01-lv002`;

:::

逻辑卷扩展后需要调整文件系统的大小以扩展逻辑卷内的空间

- 对于基于 ext3 和 ext4 的文件系统：`sudo resize2fs /dev/mapper/vg01-lv002`
- 对于 xfs 文件系统:`sudo xfs_growfs /dev/mapper/vg01-lv002`

最后使用 `df` 命令查看文件系统的大小：

```bash
$ sudo df -h /lvmtest1
Filesystem Size Used Avail Use% Mounted on
/dev/mapper/vg01-lv002 15360M 34M 15326M 4% /lvmtest1
```

## 创建文件系统

在创建有效的文件系统之前是不能使用逻辑卷的，创建文件系统的一般语法：`mkfs –t [文件系统类型] /dev/[LV 所在的卷组名称]/[LV 名称]`

```bash
#将逻辑卷 lv001 格式化为 ext4 文件系统
$ sudo mkfs -t ext4 /dev/vg01/lv001
#对于 xfs 文件系统
$ sudo mkfs -t xfs /dev/vg01/lv001
```

### 挂载逻辑卷

最后需要挂载逻辑卷来使用它

1. 创建一个目录来挂载逻辑卷：`sudo mkdir /lvmtest`;
2. 使用挂载命令挂载逻辑卷:`mount /dev/vg01/lv001 /lvmtest`;
3. 在 `/etc/fstab` 文件中添加新的逻辑卷详细信息，以便系统启动时自动挂载:`/dev/vg01/lv001 /lvmtest xfs defaults 0 0`;

使用 `df`命令检查新挂载的卷：

```bash
$ sudo df -h /lvmtest
Filesystem Size Used Avail Use% Mounted on
/dev/mapper/vg01-lv001 15360M 34M 15326M 4% /lvmtest
```
