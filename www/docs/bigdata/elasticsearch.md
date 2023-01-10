## max file descriptors

错误：**max file descriptors [4096] for elasticsearch process is too low, increase to at least [65535]**

- 临时性解决：`sudo sh -c "ulimit -n 65535 && exec su $LOGNAME"`
- 永久性解决：

```shell
# 在root用户下追加配置
vim /etc/security/limits.conf
# 配置内容   *表示所有用户生效
* soft nofile 65536
* hard nofile 65536

# 重新登录即可生效
# 可使用命令查看是否生效
ulimit  -H -n

```

:::caution 注意
Linux 操作系统云服务器中限制资源使用的配置文件是/etc/security/limits.conf 和/etc/security/limits.d/目录，/etc/security/limits.d/目录中的配置优先级高于/etc/security/limits.conf 的配置。

如果修改/etc/security/limits.conf 文件，重启后不生效，则可能是由于 limits.conf 中的修改被/etc/security/limits.d/目录中配置项的值所覆盖,请检查/etc/security/limits.d/目录中配置项的值。
:::

## max threads number

错误：**max number of threads [3818] for user [es] is too low, increase to at least [4096]**

问题同上，最大线程个数太低。修改配置文件/etc/security/limits.conf，增加配置:

```log
*               soft    nproc           4096
*               hard    nproc           4096
```

## max virtual memory

错误：**max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]**

- 临时执行命令`sysctl -w vm.max_map_count=262144`

- 修改/etc/sysctl.conf 文件，增加配置 vm.max_map_count = 262144,然后执行`sysctl -p`生效
