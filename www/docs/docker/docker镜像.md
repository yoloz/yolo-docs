当运行容器时，使用的镜像如果在本地中不存在，docker 就会自动从 docker 镜像仓库中下载，默认是从 Docker Hub 公共镜像源下载。

## 载入镜像

`docker pull imageName`

## 查找镜像

`docker search imageName`

## 删除镜像

`docker rmi imageName`

删除镜像前要删除镜像生成的容器，否则直接删除镜像会报错`Error response from daemon: conflict: unable to remove repository reference "debian" (must force) - container cc45dd0ce6f1 is using its referenced image 5890f8ba95f6`

## 列出本机已有的镜像

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

## 为镜像添加标签

`docker tag`

`docker tag 860c279d2fec runoob/centos:dev`docker tag 镜像 ID，这里是 860c279d2fec ,用户名称、镜像源名(repository name)和新的标签名(tag)

## 查看镜像详细信息

`docker inspect`

查看镜像 mysql:5.7 的详情`docker inspect mysql:5.7`

docker inspect 返回的是 JSON 格式的信息，如果您想获取其中指定的一项内容，可以通过 -f 来指定，如获取镜像大小：`docker inspect -f {{".Size"}} mysql:5.7`

## 查看镜像历史

`docker history`

一个镜像是由多个层（layer）组成的，通过`docker history`列出各个层（layer）的创建信息，如我们查看 mysql:5.7 的各层信息：`docker history mysql:5.7`,过长的创建信息会省略，可以通过添加 --no-trunc 选项屏蔽省略，如下面命令：`docker history --no-trunc mysql:5.7`

## 创建镜像

当我们从 docker 镜像仓库中下载的镜像不能满足我们的需求时，我们可以通过以下两种方式对镜像进行更改。

### 更新镜像

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

### 构建镜像

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
