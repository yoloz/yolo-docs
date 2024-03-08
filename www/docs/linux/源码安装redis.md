## Compile Redis from source

详见：[Install Redis from Source](https://redis.io/docs/getting-started/installation/install-redis-from-source/)

1. 下载源码：`wget https://download.redis.io/redis-stable.tar.gz` 或者具体版本；
2. 编码源码

```bash
$ tar -xzvf redis-stable.tar.gz
$ cd redis-stable
$ make
# To build with TLS support, you'll need to install OpenSSL development libraries (e.g., libssl-dev on Debian/Ubuntu) and then run:
$ make BUILD_TLS=yes
# zmalloc.h:50:10: fatal error: jemalloc/jemalloc.h: No such file or directory
# jemalloc被证明比libc有更少的fragmentation problems,默认使用jemalloc，如果只有libc添加参数如下：
$ make MALLOC=libc
```

:::note

- 编译成功后，可执行文件`redis-server，redis-cli`在`src`目录下；
- 如果直接安装，再执行`make install`，会自动安装到`/usr/local/bin`下；

:::

## Install redis by script

详见：[Get started](https://redis.io/docs/getting-started/)，脚本如下：

```bash
sudo mkdir /etc/redis
sudo mkdir /var/lib/redis
sudo mkdir /var/lib/redis/6379

sudo cp src/redis-server /usr/local/bin
sudo cp src/redis-cli /usr/local/bin
sudo cp utils/redis_init_script /etc/init.d/redis_6379
sudo cp redis.conf /etc/redis/6379.conf
```

编辑配置文件:

- Set `daemonize` to yes (by default it is set to no).
- Set the `pidfile` to /var/run/redis_6379.pid (modify the port if needed).
- Change the `port` accordingly(the default port is already 6379).
- Set your preferred `loglevel`.
- Set the `logfile` to /var/log/redis_6379.log
- Set the `dir` to /var/lib/redis/6379 (very important step!)
