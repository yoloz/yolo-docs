## 资源

[Docker](https://www.docker.com/)

[Docker Hub](https://hub.docker.com/)

[Docker 教程](https://www.runoob.com/docker/docker-tutorial.html)

## Install docker engine

[debian](https://docs.docker.com/engine/install/debian/)如下：

1. Set up Docker's Apt repository.

```bash
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add the repository to Apt sources:
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

2. Install the Docker packages.

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

3. uninstall docker engine:

```bash
sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```

## Install Compose standalone

[https://docs.docker.com/compose/install/standalone/](https://docs.docker.com/compose/install/standalone/)

```bash
sudo curl -SL https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

## Docker 容器使用

docker 进程使用 Unix Socket 而不是 TCP 端口。而默认情况下，Unix socket 属于 root 用户，需要 root 权限才能访问。

- 使用 sudo 获取管理员权限，运行 docker 命令
- docker 守护进程启动的时候，会默认赋予名字为 docker 的用户组读写 Unix socket 的权限，因此只要创建 docker 用户组，并将当前用户加入到 docker 用户组中，那么当前用户就有权限访问 Unix socket 了，进而也就可以执行 docker 相关命令

```bash
sudo groupadd docker     #添加docker用户组
sudo gpasswd -a $USER docker     #将登陆用户加入到docker用户组中
newgrp docker     #更新用户组
docker ps    #测试docker命令是否可以使用sudo正常使用
```

### 容器配置文件

默认文件路径为：`/var/lib/docker/containers/容器ID`,在该目录下有一个文件`hostconfig.json`里面有启动容器的选项参数。

```bash

$ docker run -it ubuntu /bin/bash #使用ubuntu镜像启动一个容器，-i交互式操作,-t终端
$ docker run -itd --name ubuntu-test ubuntu /bin/bash #-d 指定容器在后台运行
$ docker run -d -P training/webapp python app.py #-P将容器内部使用的网络端口随机映射到我们使用的主机上
$ docker run -d -p 5000:5000 training/webapp python app.py #-p设置端口映射关系
$ sudo docker run --name=shadowsocks -e PASSWORD=<password> -p<server-port>:8388 \
-p<server-port>:8388/udp -d shadowsocks/shadowsocks-libev


$ docker port id/name #查看容器端口的映射情况
$ docker ps -a #查看所有的容器
$ docker start id/name  #启动一个已停止的容器
$ docker stop id/name #停止容器
$ docker restart id/name
$ docker rm -f 1e560fca3906 #删除容器,容器必须是停止状态
$ docker container prune #清理掉所有处于终止状态的容器
$ docker logs -f bf08b7f2cd89 #查看容器内部的标准输出,-f让 docker logs 像使用 tail -f 一样来输出容器内部的标准输出
$ docker inspect bf08b7f2cd89 #查看容器的IP地址等详细信息

#在使用-d参数时，容器启动后会进入后台,此时想要进入容器
$ docker attach 1e560fca3906 #从这个容器退出，会导致容器的停止
$ docker exec -it 243c32535da7 /bin/bash #从这个容器退出，容器不会停止

$ docker export 1e560fca3906 > ubuntu.tar #导出容器 1e560fca3906 快照到本地文件 ubuntu.tar
$ cat docker/ubuntu.tar | docker import - test/ubuntu:v1 #将快照文件 ubuntu.tar 导入到镜像 test/ubuntu:v1
$ docker import http://example.com/exampleimage.tgz example/imagerepo #通过指定 URL 或者某个目录来导入
```

### docker run 命令详解

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

- 运行一个在后台执行的容器，同时，还能用控制台管理：`docker run -i -t -d ubuntu:latest`
- 运行一个带命令在后台不断执行的容器，不直接展示容器内部信息：`docker run -d ubuntu:latest ping www.docker.com`
- 运行一个在后台不断执行的容器，同时带有命令，程序被终止后还能重启继续跑，还能用控制台管理:`docker run -d --restart=always ubuntu:latest ping www.docker.com`
- 为容器指定一个名字:`docker run -d --name=ubuntu_server ubuntu:latest`
- 容器暴露 80 端口，并指定宿主机 80 端口与其通信(: 之前是宿主机端口，之后是容器需暴露的端口):`docker run -d --name=ubuntu_server -p 80:80 ubuntu:latest`
- 指定容器内目录与宿主机目录共享(: 之前是宿主机文件夹，之后是容器需共享的文件夹):`docker run -d --name=ubuntu_server -v /etc/www:/var/www ubuntu:latest`

### 查看容器日志

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

## Docker 镜像使用

当运行容器时，使用的镜像如果在本地中不存在，docker 就会自动从 docker 镜像仓库中下载，默认是从 Docker Hub 公共镜像源下载。

### 载入镜像

`docker pull imageName`

### 查找镜像

`docker search imageName`

### 删除镜像

`docker rmi imageName`

删除镜像前要删除镜像生成的容器，否则直接删除镜像会报错`Error response from daemon: conflict: unable to remove repository reference "debian" (must force) - container cc45dd0ce6f1 is using its referenced image 5890f8ba95f6`

### 列出本机已有的镜像

`docker images`或`docker images ls`

```bash
runoob@runoob:~$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
ubuntu              14.04               90d5884b1ee0        5 days ago          188 MB
php                 5.6                 f40e9e0f10c8        9 days ago          444.8 MB
nginx               latest              6f8d099c3adc        12 days ago         182.7 MB
mysql               5.6                 f2e8d6c772c0        3 weeks ago         324.6 MB
httpd               latest              02ef73cf1bc0        3 weeks ago         194.4 MB
ubuntu              15.10               4e3b13c8a266        4 weeks ago         136.3 MB
hello-world         latest              690ed74de00f        6 months ago        960 B
training/webapp     latest              6fae60ef3446        11 months ago       348.8 MB
```

各个选项说明:

- REPOSITORY：表示镜像的仓库源
- TAG：镜像的标签
- IMAGE ID：镜像 ID
- CREATED：镜像创建时间
- SIZE：镜像大小

同一仓库源可以有多个 TAG，代表这个仓库源的不同个版本，如 ubuntu 仓库源里，有 15.10、14.04 等多个不同的版本，我们使用 REPOSITORY:TAG 来定义不同的镜像。

所以，我们如果要使用版本为 15.10 的 ubuntu 系统镜像来运行容器时，命令如下：
`docker run -t -i ubuntu:15.10 /bin/bash `
如果要使用版本为 14.04 的 ubuntu 系统镜像来运行容器时，命令如下：
`docker run -t -i ubuntu:14.04 /bin/bash `
如果你不指定一个镜像的版本标签，例如你只使用 ubuntu，docker 将默认使用 ubuntu:latest 镜像。

镜像大小信息只是逻辑上的大小信息，因为一个镜像是由多个镜像层（layer）组成的，而相同的镜像层本地只会存储一份，所以，真实情况下，占用的物理存储空间大小可能会小于逻辑大小

### 为镜像添加标签

`docker tag`

`docker tag 860c279d2fec runoob/centos:dev`docker tag 镜像 ID，这里是 860c279d2fec ,用户名称、镜像源名(repository name)和新的标签名(tag)

### 查看镜像详细信息

`docker inspect`

查看镜像 mysql:5.7 的详情`docker inspect mysql:5.7`

docker inspect 返回的是 JSON 格式的信息，如果您想获取其中指定的一项内容，可以通过 -f 来指定，如获取镜像大小：`docker inspect -f {{".Size"}} mysql:5.7`

### 查看镜像历史

`docker history`

一个镜像是由多个层（layer）组成的，通过`docker history`列出各个层（layer）的创建信息，如我们查看 mysql:5.7 的各层信息：`docker history mysql:5.7`,过长的创建信息会省略，可以通过添加 --no-trunc 选项屏蔽省略，如下面命令：`docker history --no-trunc mysql:5.7`

### 创建镜像

当我们从 docker 镜像仓库中下载的镜像不能满足我们的需求时，我们可以通过以下两种方式对镜像进行更改。

1. 更新镜像

从已经创建的容器中更新镜像，并且提交这个镜像,更新镜像之前，我们需要使用镜像来创建一个容器。

```bash
runoob@runoob:~$ docker run -t -i ubuntu:15.10 /bin/bash
root@e218edb10161:/#
```

在运行的容器内使用 `apt-get update` 命令进行更新。

在完成操作之后，输入 exit 命令来退出这个容器。

此时 ID 为 e218edb10161 的容器，是按我们的需求更改的容器。我们可以通过命令 `docker commit` 来提交容器副本。

```bash
runoob@runoob:~$ docker commit -m="has update" -a="runoob" e218edb10161 runoob/ubuntu:v2
sha256:70bf1840fd7c0d2d8ef0a42a817eb29f854c1af8f7c59fc03ac7bdee9545aff8
```

各个参数说明：

- -m: 提交的描述信息
- -a: 指定镜像作者
- e218edb10161：容器 ID
- runoob/ubuntu:v2: 指定要创建的目标镜像名

我们可以使用 `docker images` 命令来查看我们的新镜像 runoob/ubuntu:v2：

```bash
runoob@runoob:~$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
runoob/ubuntu       v2                  70bf1840fd7c        15 seconds ago      158.5 MB
ubuntu              14.04               90d5884b1ee0        5 days ago          188 MB
php                 5.6                 f40e9e0f10c8        9 days ago          444.8 MB
nginx               latest              6f8d099c3adc        12 days ago         182.7 MB
mysql               5.6                 f2e8d6c772c0        3 weeks ago         324.6 MB
httpd               latest              02ef73cf1bc0        3 weeks ago         194.4 MB
ubuntu              15.10               4e3b13c8a266        4 weeks ago         136.3 MB
hello-world         latest              690ed74de00f        6 months ago        960 B
training/webapp     latest              6fae60ef3446        12 months ago       348.8 MB
```

2. 构建镜像

我们使用命令 docker build ， 从零开始来创建一个新的镜像。为此，我们需要创建一个 Dockerfile 文件，其中包含一组指令来告诉 Docker 如何构建我们的镜像。

```bash
runoob@runoob:~$ cat Dockerfile
FROM    centos:6.7
MAINTAINER      Fisher "fisher@sudops.com"

RUN     /bin/echo 'root:123456' |chpasswd
RUN     useradd runoob
RUN     /bin/echo 'runoob:123456' |chpasswd
RUN     /bin/echo -e "LANG=\"en_US.UTF-8\"" >/etc/default/local
EXPOSE  22
EXPOSE  80
CMD     /usr/sbin/sshd -D
```

每一个指令都会在镜像上创建一个新的层，每一个指令的前缀都必须是大写的。

第一条 FROM，指定使用哪个镜像源

RUN 指令告诉 docker 在镜像内执行命令，安装了什么

然后，我们使用 Dockerfile 文件，通过 docker build 命令来构建一个镜像`docker build -t runoob/centos:6.7 .`

参数说明：

- -t ：指定要创建的目标镜像名
- . ：Dockerfile 文件所在目录，可以指定 Dockerfile 的绝对路径
