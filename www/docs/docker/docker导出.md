## docker save

```bash
docker save -h

Usage:  docker save [OPTIONS] IMAGE [IMAGE...]

Save one or more images to a tar archive (streamed to STDOUT by default)

  --help             Print usage
  -o, --output       Write to a file, instead of STDOUT
```

从接的参数就可以猜到，直接接 image，不太可能导出单纯的文件系统（因为镜像本身就是分层存储的）

简单测试一下

```bash
docker save -o busybox.tar busybox && mkdir busybox && tar xf busybox.tar -C busybox
tree busybox
busybox
├── 2b8fd9751c4c0f5dd266fcae00707e67a2545ef34f9a29354585f93dac906749.json
├── 374004614a75c2c4afd41a3050b5217e282155eb1eb7b4ce8f22aa9f4b17ee57
│   ├── VERSION
│   ├── json
│   └── layer.tar
├── manifest.json
└── repositories
```

docker load 与之匹配，将其（带历史地）导入到 docker images 中
`docker load -i busybox.tar`

## docker export

```bash
docker export -h
Usage:  docker export [OPTIONS] CONTAINER

Export a container's filesystem as a tar archive

  --help             Print usage
  -o, --output       Write to a file, instead of STDOUT
```

从接的参数猜测，直接接 container，多半就是 dump rootfs 了

栗子测试一下：

```bash
docker run --name container -d busybox
docker export -o busybox.tar container && mkdir busybox && tar xf busybox.tar -C busybox
tree busybox -L 1
busybox
├── bin
├── dev
├── etc
├── home
├── proc
├── root
├── sys
├── tmp
├── usr
└── var
```

docker import 与之匹配

```bash
docker import busybox.tar my-busybox:1.0
docker images ls
REPOSITORY     TAG    IMAGE ID            CREATED             SIZE
my-busybox     1.0   5bfea374dd5c        3 seconds ago       1.093 MB
```

**注意：docker import 后面接的是 docker export 导出的文件，也就是一个文件系统，所以导入的镜像是不带历史的,使用 docker history $image_name 查看镜像，只有一层**

## docker commit

```bash
docker commit -h

Usage:  docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]

Create a new image from a container's changes

  -a, --author        Author (e.g., "John Hannibal Smith <hannibal@a-team.com>")
  -c, --change=[]     Apply Dockerfile instruction to the created image
  --help              Print usage
  -m, --message       Commit message
  -p, --pause=true    Pause container during commit
```

commit 是合并了 save、load、export、import 这几个特性的一个综合性的命令，它主要做了：

- 将 container 当前的读写层保存下来，保存成一个新层
- 和镜像的历史层一起合并成一个新的镜像

如果原本的镜像有 3 层，commit 之后就会有 4 层，最新的一层为从镜像运行到 commit 之间对文件系统的修改

```bash
docker commit container my-commit-image
docker history my-commit-image
IMAGE          CREATED            CREATED BY                                      SIZE       COMMENT
e86539128c67   5 seconds ago       sh                                              0 B
2b8fd9751c4c   9 weeks ago         /bin/sh -c #(nop) CMD ["sh"]                    0 B
<missing>      9 weeks ago         /bin/sh -c #(nop) ADD file:9ca60502d646bdd815   1.093 MB
```

### 把镜像上传到 docker hub

```bash
$docker build -t shihuc/demo[:v1]
#shihuc表示DockerHub上的用户名，demo是repo的名字，v1表示tag号,如果不是这样的则后面docker登陆后push会出错
$docker login
#...
#登出docker logout
$docker push <user>/<repo>
```

[来源](https://cloud.tencent.com/developer/article/1404651)
