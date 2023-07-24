su 和 sudo 命令都允许用户执行非特权用户不允许做的系统管理任务，即只有 root 用户能执行的命令。

sudo 和 su 这两个命令都能够提权为 root 用户，但它们实现的方式大不相同。这种差异是由于它们最初打算用于不同的情况。

## sudo

sudo 命令的初衷是让 root 用户能够让几个非 root 用户访问他们经常需要的一两个特权命令。sudo 命令允许非 root 用户暂时地获得更高权限，来执行一些特权命令，例如添加和删除用户、删除属于其他用户的文件、安装新软件以及管理现代 Linux 主机所需的任何命令。

sudo 命令不会将用户帐户切换为 root 用户，在大多数情况下，sudo 允许用户执行一两个命令，然后提权就会过期。

:::tip

- 在这个通常为 5 分钟的短暂的提权时间内，用户可以执行任何需要提权的管理命令。需要继续使用提权的用户可以运行 sudo -v 命令来重新验证 root 访问权限，并将提权时间再延长 5 分钟。
- 可能系统未安装:`apt install sudo`

:::

使用 sudo 命令还有一些副作用，例如生成非 root 用户使用命令的日志条目及其 ID。这些日志可以在之后作为出现问题的检验来追责。

## su

su(switch user)命令用于切换使用者身份，需要键入该使用者的密码。

### 语法

```bash
su [-fmp] [-c command] [-s shell] [--help] [--version] [-] [USER [ARG]]
```

:::info

- -f 或 --fast 不必读启动档（如 csh.cshrc 等），仅用于 csh 或 tcsh
- -m -p 或 --preserve-environment 执行 su 时不改变环境变数
- -c command 或 --command=command 变更为帐号为 USER 的使用者并执行指令（command）后再变回原来使用者
- -s shell 或 --shell=shell 指定要执行的 shell （bash csh tcsh 等），预设值为 /etc/passwd 内的该使用者（USER） shell
- \-或-l 或 --login 这个参数加了之后，就好像是重新 login 为该使用者一样，大部份环境变数（HOME SHELL USER 等等）都是以该使用者（USER）为主，并且工作目录也会改变，如果没有指定 USER ，内定是 root
- USER 欲变更的使用者帐号
- ARG 传入新的 shell 参数

:::

### 实例

```bash
#变更帐号为 root 并在执行 ls 指令后退出变回原使用者
$ su -c ls root
#变更帐号为 clsung 并改变工作目录至 clsung 的家目录,没有时间限制,执行退出命令exit回到原来账户
$ su - clsung
#使用zhds账户启动es
$ su -c "es/bin/elasticsearch -d" zhds
```

## 绕过 root 被锁定

以 ubuntu 为例:

- 以 student 用户身份登录 Ubuntu，并打开终端。查看 /etc/shadow 文件

```shell
student@ubuntu1:~$ cat /etc/shadow
cat: /etc/shadow: Permission denied
```

- 现在，让我们使用 su - 命令来成为 root 用户

```shell
student@ubuntu1:~$ su -
Password: <Enter root password – but there isn't one>
su: Authentication failure
```

认证失败的原因是因为 root 帐户没有密码、并且被锁定了

- 接下来，使用 sudo 命令查看 /etc/shadow 文件

```shell
student@ubuntu1:~$ sudo cat /etc/shadow
[sudo] password for student: <enter the student password>
root:!:17595:0:99999:7:::
# ...
student:$6$tUB/y2dt$A5ML1UEdcL4tsGMiq3KOwfMkbtk3WecMroKN/:17597:0:99999:7:::
# ...
```

各个字段以冒号（:）分隔，第二个字段是密码。请注意，root 的密码字段是一个感叹号（!），这表明 root 帐户已被锁定，且无法使用。

- 现在，要将 root 帐户变成一个合适的系统管理员，你只需为 root 帐户设置密码。

```shell
student@ubuntu1:~$ sudo su -
[sudo] password for student: <Enter password for student>
root@ubuntu1:~# passwd root
Enter new UNIX password: <Enter new root password>
Retype new UNIX password: <Re-enter new root password>
passwd: password updated successfully
root@ubuntu1:~#

```

## sudo: xxx: command not found

- 可能命令确实不存在
- 命令不是二进制文件，sudo 会去找二进制文件运行。由于找不到 xxx 的二进制可执行文件，故报错。 类似的命令有：ulimit,cd

## sudo echo ＞＞提示权限不够的解决办法

Linux 中使用“sudo echo >>”提示权限不够

```bash
sudo echo "export PATH" >> /etc/profile
bash: /etc/profile: Permission denied
```

bash 拒绝说权限不够。这是因为重定向符号 “>” 和 “>>” 也是 bash 的命令。sudo 只是让 echo 命令具有了 root 权限，但是没有让 “>” 和 “>>” 命令也具有 root 权限，所以 bash 会认为这两个命令都没有写入信息的权限。

解决方法一：
利用 “sh -c” 命令，它可以让 bash 将一个字串作为完整的命令来执行，这样就可以将 sudo 的影响范围扩展到整条命令。具体用法如下：

```bash
sudo sh -c ‘echo "PATH=$PATH:/bin:/usr/bin:/usr/local/bin:/sbin:/usr/sbin:/usr/local/sbin/" >> /etc/profile’
sudo sh -c ‘echo "export PATH" >> /etc/profile’
```

解决方法二：
利用管道和 tee 命令，该命令可以从标准输入中读入信息并将其写入标准输出或文件中，具体用法如下：

```bash
echo “PATH=$PATH:/bin:/usr/bin:/usr/local/bin:/sbin:/usr/sbin:/usr/local/sbin/” | sudo tee -a /etc/profile
echo “export PATH” | sudo tee -a /etc/profile
```

:::caution
tee 命令 “-a” 选项的作用等同于 “>>” 命令，如果去除该选项，那么 tee 命令的作用就等同于 “>” 命令。
:::

解决方法三：
:::note
Here Document 是在 Linux Shell 中的一种特殊的重定向方式，它的基本的形式如下:

```bash
cmd << delimiter
  Here Document Content
delimiter
```

其作用是将两个 `delimiter` 之间的内容(Here Document Content 部分) 传递给 cmd 作为输入参数;

利用`here-document`:

```bash
#-s, --shell  run shell as the target user; a command may also be specified
sudo -s <<EOF

echo "PATH=$PATH:/bin:/usr/bin:/usr/local/bin:/sbin:/usr/sbin:/usr/local/sbin/" >> /etc/profile
echo "export PATH" >> /etc/profile

EOF

sudo -s <<EOF
echo "********install mysql********"
${path}/bin/mysql_install.sh

echo "********install redis********"
${path}/bin/redis_install.sh

EOF
```
