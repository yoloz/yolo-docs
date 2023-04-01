## 常用命令

```bash

zhds@apache250:/opt/hadoop-2.7.1$ bin/hadoop fs -mkdir -p /user/hive/warehouse

zhds@apache250:/opt/hadoop-2.7.1$ bin/hdfs dfs -ls /
Found 2 items
drwx-wx-wx   - zhds supergroup          0 2023-03-21 10:10 /tmp
drwxr-xr-x   - zhds supergroup          0 2023-04-01 06:59 /user

# 用hadoop修改权限
zhds@apache250:/opt/hadoop-2.7.1$ bin/hadoop fs -chmod -R 777 /

```
