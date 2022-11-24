由于 CentOS 6.5 比较旧了，国内的镜像和官方的主干都删除掉了，所以配置到官方的 vault.centos.org 这个路径下

`sudo vim /etc/yum.repo.d/CentOS-Base.repo`

```log
# CentOS-Base.repo
#
# The mirror system uses the connecting IP address of the client and the
# update status of each mirror to pick mirrors that are updated to and
# geographically close to the client.  You should use this for CentOS updates
# unless you are manually picking other mirrors.
#
# If the mirrorlist= does not work for you, as a fall back you can try the
# remarked out baseurl= line instead.
#
#

[base]
name=CentOS-x86_64 - Base
failovermethod=priority
baseurl=http://vault.centos.org/6.5/os/x86_64/
gpgcheck=1
gpgkey=http://vault.centos.org/RPM-GPG-KEY-CentOS-6

#released updates
[updates]
name=CentOS-x86_64 - Updates
failovermethod=priority
baseurl=http://vault.centos.org/6.5/updates/x86_64/
gpgcheck=1
gpgkey=http://vault.centos.org/RPM-GPG-KEY-CentOS-6

#additional packages that may be useful
[extras]
name=CentOS-x86_64 - Extras
failovermethod=priority
baseurl=http://vault.centos.org/6.5/extras/x86_64/
gpgcheck=1
gpgkey=http://vault.centos.org/RPM-GPG-KEY-CentOS-6

#additional packages that extend functionality of existing packages
[centosplus]
name=CentOS-x86_64 - Plus
failovermethod=priority
baseurl=http://vault.centos.org/6.5/centosplus/x86_64/
gpgcheck=1
enabled=0
gpgkey=http://vault.centos.org/RPM-GPG-KEY-CentOS-6

#contrib - packages by Centos Users
[contrib]
name=CentOS-x86_64 - Contrib
failovermethod=priority
baseurl=http://vault.centos.org/6.5/contrib/x86_64/
gpgcheck=1
enabled=0
gpgkey=http://vault.centos.org/RPM-GPG-KEY-CentOS-6

```
