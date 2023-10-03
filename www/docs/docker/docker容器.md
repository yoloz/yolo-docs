docker 进程使用 Unix Socket 而不是 TCP 端口。而默认情况下，Unix socket 属于 root 用户，需要 root 权限才能访问。

- 使用 sudo 获取管理员权限，运行 docker 命令
- docker 守护进程启动的时候，会默认赋予名字为 docker 的用户组读写 Unix socket 的权限，因此只要创建 docker 用户组，并将当前用户加入到 docker 用户组中，那么当前用户就有权限访问 Unix socket 了，进而也就可以执行 docker 相关命令

```bash
sudo groupadd docker     #添加docker用户组
sudo gpasswd -a $USER docker     #将登陆用户加入到docker用户组中
newgrp docker     #更新用户组
docker ps    #测试docker命令是否可以使用sudo正常使用
```

## docker run 命令详解

命令格式：`docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`

常用选项说明

- -d, --detach=false， 指定容器运行于前台还是后台，默认为 false
- -i, --interactive=false， 打开 STDIN，用于控制台交互
- -t, --tty=false， 分配 tty 设备，该可以支持终端登录，默认为 false
- -u, --user=""， 指定容器的用户
- -a, --attach=[]， 登录容器（必须是以 docker run -d 启动的容器）
- -w, --workdir=""， 指定容器的工作目录
- -c, --cpu-shares=0， 设置容器 CPU 权重，在 CPU 共享场景使用
- -e, --env=[]， 指定环境变量，容器中可以使用该环境变量
- -m, --memory=""， 指定容器的内存上限
- -P, --publish-all=false， 指定容器暴露的端口
- -p, --publish=[]， 指定容器暴露的端口
- -h, --hostname=""， 指定容器的主机名
- -v, --volume=[]， 给容器挂载存储卷，挂载到容器的某个目录
- --cidfile=""， 运行容器后，在指定文件中写入容器 PID 值，一种典型的监控系统用法
- --cpuset=""， 设置容器可以使用哪些 CPU，此参数可以用来容器独占 CPU
- --device=[]， 添加主机设备给容器，相当于设备直通
- --dns=[]， 指定容器的 dns 服务器
- --dns-search=[]， 指定容器的 dns 搜索域名，写入到容器的/etc/resolv.conf 文件
- --entrypoint=""， 覆盖 image 的入口点
- --env-file=[]， 指定环境变量文件，文件格式为每行一个环境变量
- --name=""， 指定容器名字，后续可以通过名字进行容器管理，links 特性需要使用名字
- --net="bridge"， 容器网络设置: bridge,host,container,none
- --privileged=false， 指定容器是否为特权容器，特权容器拥有所有的 capabilities
- --restart="no"， 指定容器停止后的重启策略:no,on-failure,always
- --rm=false， 指定容器停止后自动删除容器(不支持以 docker run -d 启动的容器)
- --sig-proxy=true， 设置由代理接受并处理信号，但是 SIGCHLD、SIGSTOP 和 SIGKILL 不能被代理

示例

```bash
#使用ubuntu镜像启动一个容器，-i交互式操作,-t终端
$ docker run -it ubuntu /bin/bash
#-d 指定容器在后台运行
$ docker run -itd --name ubuntu-test ubuntu /bin/bash
#-P将容器内部使用的网络端口随机映射到我们使用的主机上
$ docker run -d -P training/webapp python app.py
#-p设置端口映射关系
$ docker run -d -p 5000:5000 training/webapp python app.py
# 运行一个在后台执行的容器，同时，还能用控制台管理
$ docker run -i -t -d ubuntu:latest
# 运行一个带命令在后台不断执行的容器，不直接展示容器内部信息
$ docker run -d ubuntu:latest ping www.docker.com
运行一个在后台不断执行的容器，同时带有命令，程序被终止后还能重启继续跑，还能用控制台管理
$ docker run -d --restart=always ubuntu:latest ping www.docker.com
# 为容器指定一个名字
$ docker run -d --name=ubuntu_server ubuntu:latest
# 容器暴露 80 端口，并指定宿主机 80 端口与其通信(前是宿主机端口,后是容器需暴露的端口)
$ docker run -d --name=ubuntu_server -p 80:80 ubuntu:latest
# 指定容器内目录与宿主机目录共享(前是宿主机文件夹,后是容器需共享的文件夹)
$ docker run -d --name=ubuntu_server -v /etc/www:/var/www ubuntu:latest
# 以指定用户启动和进入docker容器
$ docker run -it -u user_name --name container_name -d image_name /bin/bash
# 如果报错：docker: Error response from daemon: linux spec user: unable to find user xxxx: no matching entries in passwd file.
# 不能使用用户名，要使用uid(查看用户uid`id username`),如下
$ docker run --user $(id -u) image_name
$ sudo docker run --name=shadowsocks -e PASSWORD=<password> -p<server-port>:8388 \
-p<server-port>:8388/udp -d shadowsocks/shadowsocks-libev
```

## 容器常见命令

```bash
# 查看容器端口的映射情况
$ docker port id/name
# 查看所有的容器
$ docker ps -a
# 启动一个已停止的容器
$ docker start id/name
# 停止容器
$ docker stop id/name
$ docker restart id/name
# 删除容器,容器必须是停止状态
$ docker rm -f 1e560fca3906
# 清理掉所有处于终止状态的容器
$ docker container prune
# 查看容器内部的标准输出,-f让 docker logs 像使用 tail -f 一样来输出容器内部的标准输出
$ docker logs -f bf08b7f2cd89
# 查看容器的IP地址等详细信息
$ docker inspect bf08b7f2cd89

# 从这个容器退出，会导致容器的停止
$ docker attach 1e560fca3906
# 从这个容器退出，容器不会停止
$ docker exec -it 243c32535da7 /bin/bash
# 指定用户名exec进入容器
$ docker exec -it -u user_name container_name /bin/bash
# 指定用户(id)exec进入容器
$ docker exec -it -u 1000  pythonAdmin  python3 /home/test1.py
# 导出容器 1e560fca3906 快照到本地文件 ubuntu.tar
$ docker export 1e560fca3906 > ubuntu.tar
# 将快照文件 ubuntu.tar 导入到镜像 test/ubuntu:v1
$ cat docker/ubuntu.tar | docker import - test/ubuntu:v1
# 通过指定 URL 或者某个目录来导入
$ docker import http://example.com/exampleimage.tgz example/imagerepo
```

## 容器文件

### 配置文件

默认文件路径为：`/var/lib/docker/containers/容器ID`,在该目录下有一个文件`hostconfig.json`里面有启动容器的选项参数。

### 日志

启动容器失败原因以及运行日志,文件一般在`/var/lib/docker/containers/容器ID/容器ID-json.log`,日志文件过大时，可以采取手动删除，[日志大小限制](https://blog.csdn.net/yjk13703623757/article/details/80283729)

```bash
$ docker logs [OPTIONS] CONTAINER
  Options:
        --details        显示更多的信息
    -f, --follow         跟踪实时日志
        --since string   显示自某个timestamp之后的日志，或相对时间，如42m（即42分钟）
        --tail string    从日志末尾显示多少行日志， 默认是all
    -t, --timestamps     显示时间戳
        --until string   显示自某个timestamp之前的日志，或相对时间，如42m（即42分钟）
#查看指定时间后的日志，只显示最后100行
$ docker logs -f -t --since="2018-02-08" --tail=100 CONTAINER_ID(或Name)
#查看最近30分钟的日志
$ docker logs --since 30m CONTAINER_ID
#查看某时间之后的日志
$ docker logs -t --since="2018-02-08T13:23:37" CONTAINER_ID
#查看某时间段日志
$ docker logs -t --since="2018-02-08T13:23:37" --until "2018-02-09T12:23:37" CONTAINER_ID
```
