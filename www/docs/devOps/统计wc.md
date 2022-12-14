## 统计网络进程信息

```shell
# 统计端口连接数
netstat -nat|grep -i "80" |wc -l

# 统计httpd协议连接数
ps -ef|grep httpd|wc -l

#统计状态为established连接数
netstat -na|grep ESTABLISHED|wc -l

#查出哪个IP地址连接最多
netstat -na|grep ESTABLISHED|awk {print $5}|awk -F： {print $1}|sort|uniq -c|sort -r +0n
netstat -na|grep SYN|awk {print $5}|awk -F： {print $1}|sort|uniq -c|sort -r +0n

#查看nginx当前并发访问数
netstat -apn|grep 'nginx: worker'|wc -l

```

## 统计文件信息

```shell
# 统计当前文件夹下文件的个数，包括子文件夹里的
ls -lR|grep "^-"|wc -l

# 统计文件夹下目录的个数，包括子文件夹里的
ls -lR|grep "^d"|wc -l

# 统计当前文件夹下文件的个数
ls -l |grep "^-"|wc -l

# 统计当前文件夹下目录的个数
ls -l |grep "^d"|wc -l

# 统计文件a.txt有多少非空行
grep -v '^$' a.txt | wc -l

```