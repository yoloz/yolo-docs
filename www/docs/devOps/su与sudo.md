su 和 sudo 命令都允许用户执行非特权用户不允许做的系统管理任务，即只有 root 用户能执行的命令。

sudo 和 su 这两个命令都能够提权为 root 用户，但它们实现的方式大不相同。这种差异是由于它们最初打算用于不同的情况。

## sudo

sudo 命令的初衷是让 root 用户能够让几个非 root 用户访问他们经常需要的一两个特权命令。sudo 命令允许非 root 用户暂时地获得更高权限，来执行一些特权命令，例如添加和删除用户、删除属于其他用户的文件、安装新软件以及管理现代 Linux 主机所需的任何命令。

sudo 命令不会将用户帐户切换为 root 用户，在大多数情况下，sudo 允许用户执行一两个命令，然后提权就会过期。

:::tip
在这个通常为 5 分钟的短暂的提权时间内，用户可以执行任何需要提权的管理命令。需要继续使用提权的用户可以运行 sudo -v 命令来重新验证 root 访问权限，并将提权时间再延长 5 分钟。
:::

使用 sudo 命令还有一些副作用，例如生成非 root 用户使用命令的日志条目及其 ID。这些日志可以在之后作为出现问题的检验来追责。

## su

su 命令能够将非 root 用户提权到 root 权限。事实上，能让非 root 用户成为 root 用户。唯一的要求是用户知道 root 密码。

su 命令所提供的提权没有时间限制。用户可以作为 root 执行命令，不需要进行重新验证是否有 root 权限。完成任务后，用户可以执行退出命令 exit，从 root 用户恢复到自己原来的非 root 帐户。

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
