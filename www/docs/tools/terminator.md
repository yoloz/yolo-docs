## 安装

```bash
sudo add-apt-repository ppa:gnome-terminator
sudo apt-get update
sudo apt-get install terminator
```

:::note

- 报错：sudo: add-apt-repository: command not found，`add-apt-repository` 命令是`software-properties-common`包的一部分，因此安装这个包就 OK 了:`sudo apt install software-properties-common`

- `apt update` 会报错 `The repository 'http://ppa.launchpad.net/gnome-terminator/ppa/ubuntu kinetic Release' does not have a Release file`所以使用`apt-get`

- 移除 ppa:`sudo add-apt-repository --remove ppa:gnome-terminator`

:::
