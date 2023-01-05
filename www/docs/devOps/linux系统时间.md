## 检查当前时区

```bash
[root@localhost ~]# timedatectl
               Local time: Wed 2022-12-28 23:19:07 CST
           Universal time: Wed 2022-12-28 15:19:07 UTC
                 RTC time: Wed 2022-12-28 15:19:51
                Time zone: Asia/Shanghai (CST, +0800)
System clock synchronized: yes
              NTP service: active
          RTC in local TZ: no

```

:::note 说明
Local time 是指地方时;  
Universal time 是指世界时;  
RTC time 指硬件时钟;  
Time zone 指时区;  
NTP enabled: yes，yes 是指 NTP 已经启用，当其值为 no 时说明 NTP 未启用;  
NTP synchronized: yes，yes 是指完成过 NTP 同步，no 说明未完成过 NTP 同步;
:::

还可以通过查看/etc/localtime 被链接到哪个文件进行确定当前时区属于哪个时区,如下：

```bash
[root@localhost ~]# ll /etc/localtime
lrwxrwxrwx. 1 root root 35 Dec 28 23:15 /etc/localtime -> ../usr/share/zoneinfo/Asia/Shanghai
```

:::tip

- 查看当前时间/日期/时区：timedatectl 或者 timedatectl status
- 查看所有可用时区：timedatectl list-timezones
- 设置时区：timedatectl set-timezone “时区信息”
- 设置 UTC：timedatectl set-timezone UTC
- 设置时间：timedatectl set-time HH:MM:SS
- 设置日期：timedatectl set-time YYYY-MM-DD
- 设置日期时间：timedatectl set-time “YYYY-MM-DD HH:MM:SS”
- 设置硬件时钟为本地时间：timedatectl set-local-rtc 1
- 设置硬件时钟为 UTC 时间：timedatectl set-local-rtc 0
- 启动 NTP 时间同步（启用 NTP 服务或者 Chrony 服务）：timedatectl set-ntp true
- 禁用 NTP 时间同步：timedatectl set-ntp false

:::

## 更改时区

时区的命名约定格式为“地区/城市名”方式，可以通过 timedatectl list-timezone 命令查询系统中所有可用的时区(零时区`UTC`)

```bash
[root@localhost ~]# timedatectl list-timezones
Africa/Abidjan
Africa/Accra
Africa/Addis_Ababa
Africa/Algiers
Africa/Asmara
#....
```

确定完要修改的时区后，可以使用如下命令进行修改

```bash
[root@localhost ~]# timedatectl set-timezone Asia/Shanghai
[root@localhost ~]# timedatectl
               Local time: Wed 2022-12-28 23:15:54 CST
           Universal time: Wed 2022-12-28 15:15:54 UTC
                 RTC time: Wed 2022-12-28 15:15:54
                Time zone: Asia/Shanghai (CST, +0800)
System clock synchronized: yes
              NTP service: active
          RTC in local TZ: no
[root@localhost ~]# date
Wed Dec 28 23:16:02 CST 2022
```

:::info

在 Linux 操作系统中有两种时钟，第一种是硬件时钟，又称为 RTC, CMOS 时钟或 BIOS clock，这种时钟的运转靠的是主板上的电池，所以即使关机了依然可以计时；第二种是系统时钟，该时钟有操作系统维护，系统启动时会读取硬件时钟并将其设置为系统时钟，即与硬件时钟同步一次；有趣的是在后续运行过程中，系统时钟和硬件时钟，并不会自动同步，而是以异步的方式运行，互不干扰。
:::

## 硬件时钟

可以通过 hwcolck 或 clock 命令操作硬件时钟

### 查看硬件时钟

```bash
[root@localhost ~]# hwclock --show
2022-12-28 23:29:11.369054+08:00

[root@localhost ~]# clock --show
2022-12-28 23:29:16.494536+08:00
```

### 设置硬件时钟

```bash
[root@localhost ~]# hwclock --set --date="2002-08-29 06:30:00"
[root@localhost ~]# hwclock --show
2002-08-29 06:30:10.587418+08:00
```

## 系统时钟

### 查看系统时钟

```bash
[root@localhost ~]# date
Wed Dec 28 23:32:58 CST 2022
```

### 修改系统时钟

```bash
[root@localhost ~]# date -s "2023-01-01 01:00:00"    //格式为 yyyy-MM-dd HH:mm:ss
Sun Jan  1 01:00:00 CST 2023
[root@localhost ~]# date
Sun Jan  1 01:00:01 CST 2023
```

:::note
可能会遇到修改后无效的情况，这种情况下可能的原因是从互联网同步时间的功能处于开启状态，可以使用如下命令将其关闭`timedatectl set-ntp false`
:::

## 硬件时钟与系统时钟间的同步

### 从硬件时钟同步时间至系统时钟

```bash
[root@localhost ~]# hwclock --hctosys
[root@localhost ~]# date
Wed Dec 28 23:23:19 CST 2022

[root@localhost ~]# clock --hctosys
[root@localhost ~]# date
Wed Dec 28 23:25:36 CST 2022
```

### 从系统时钟同步时间至硬件时钟

```bash
[root@localhost ~]# hwclock --systohc
[root@localhost ~]# date
Sun Jan  1 01:06:37 CST 2023

[root@localhost ~]# clock --systohc
[root@localhost ~]# date
Sun Jan  1 01:06:48 CST 2023
```
