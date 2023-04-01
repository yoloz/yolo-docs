## 常用命令

```bash
# 创建目录如下方式均可
zhds@apache250:/opt/hadoop-2.7.1$ bin/hadoop fs -mkdir -p /user/hive/warehouse
zhds@apache250:/opt/hadoop-2.7.1$ bin/hdfs dfs -mkdir -p /input

# 查看两者一样
zhds@apache250:/opt/hadoop-2.7.1$ bin/hadoop fs -ls /
zhds@apache250:/opt/hadoop-2.7.1$ bin/hdfs dfs -ls /
Found 3 items
drwxr-xr-x   - zhds supergroup          0 2023-04-01 08:26 /input
drwx-wx-wx   - zhds supergroup          0 2023-04-01 08:12 /tmp
drwxr-xr-x   - zhds supergroup          0 2023-04-01 06:59 /user

# 修改权限
zhds@apache250:/opt/hadoop-2.7.1$ bin/hadoop fs -chmod -R 777 /
zhds@apache250:/opt/hadoop-2.7.1$ bin/hdfs dfs -chmod -R 777 /

# 加载本地文件
zhds@apache250:/opt/hadoop-2.7.1$ bin/hadoop fs -put /home/zhds/hive-udf-1.0-SNAPSHOT.jar  /input
zhds@apache250:/opt/hadoop-2.7.1$ bin/hdfs dfs -put /home/zhds/hive-udf-1.0-SNAPSHOT.jar  /input
zhds@apache250:/opt/hadoop-2.7.1$ bin/hadoop fs -ls /input
Found 1 items
-rw-r--r--   1 zhds supergroup       6414 2023-04-01 08:31 /input/hive-udf-1.0-SNAPSHOT.jar
# 或者
zhds@apache250:/opt/hadoop-2.7.1$ bin/hadoop fs -moveFromLocal /home/zhds/hive-udf-1.0-SNAPSHOT.jar  /input
zhds@apache250:/opt/hadoop-2.7.1$ bin/hdfs dfs -moveFromLocal /home/zhds/hive-udf-1.0-SNAPSHOT.jar  /input

# 删除文件，此种方式usr目录也会删掉
zhds@apache250:/opt/hadoop-2.7.1$ bin/hdfs dfs -rm -r /usr
zhds@apache250:/opt/hadoop-2.7.1$ bin/hadoop fs -rm -r /usr

zhds@apache250:/opt/hadoop-2.7.1$ bin/hdfs dfs -rm -f /input/hive-udf-1.0-SNAPSHOT.jar
23/04/01 09:24:25 INFO fs.TrashPolicyDefault: Namenode trash configuration: Deletion interval = 0 minutes, Emptier interval = 0 minutes.
Deleted /input/hive-udf-1.0-SNAPSHOT.jar
zhds@apache250:/opt/hadoop-2.7.1$

```
