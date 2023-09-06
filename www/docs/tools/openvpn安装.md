## 安装步骤

[https://openvpn.net/quick-start-guide/](https://openvpn.net/quick-start-guide/)

1. Install ‘openvpn-as’ package
2. Get the password for the Admin Web UI
3. Set up in browser: https://[youripaddress]/admin

:::note

```bash
yolo@rkn:~$ sudo dpkg -i openvpn-as-bundled-clients-latest.deb
yolo@rkn:~$ sudo dpkg -i openvpn-as-latest-debian11.amd_64.deb
#安装缺少的依赖
yolo@rkn:~$ sudo apt install -f
```

登陆 `https://[youripaddress]/` 后可以修改生成的随机密码
:::

## 安装

[https://as-portal.openvpn.com/get-access-server](https://as-portal.openvpn.com/get-access-server)

### debian

- Install via Repository

```bash
sudo apt update && sudo apt -y install ca-certificates wget net-tools gnupg

sudo wget https://as-repository.openvpn.net/as-repo-public.asc -qO /etc/apt/trusted.gpg.d/as-repository.asc

echo "deb [arch=amd64 signed-by=/etc/apt/trusted.gpg.d/as-repository.asc] http://as-repository.openvpn.net/as/debian bullseye main">/etc/apt/sources.list.d/openvpn-as-repo.list
#没权限：先sudo创建文件，然后sudo编辑文件

sudo apt update && sudo apt -y install openvpn-as
```

- Manually download packages

```bash
sudo apt update

sudo apt install -y bridge-utils dmidecode iptables iproute2 libc6 libffi7 libgcc-s1 liblz4-1 liblzo2-2 libmariadb3 libpcap0.8 libssl1.1 libstdc++6 zlib1g libsasl2-2 libsqlite3-0 net-tools python3-pkg-resources python3-migrate python3-sqlalchemy python3-mysqldb python3-ldap3 sqlite3 python3-netaddr python3-arrow python3-lxml python3-openssl python3-incremental libxmlsec1 libxmlsec1-openssl python3-constantly python3-hyperlink python3-automat python3-service-identity python3-cffi python3-defusedxml

sudo dpkg -i openvpn-as-bundled-clients-27.deb openvpn-as_2.11.3-af31575c-Debian11_amd64.deb
```
