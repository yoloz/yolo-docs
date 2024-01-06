## openvpn Access Server

### 离线安装

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

### 在线安装(debian)

[https://as-portal.openvpn.com/get-access-server](https://as-portal.openvpn.com/get-access-server)

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

## openvpn

源文：[Building Your Own VPN for Free](https://dev.to/baptistsec/building-your-own-vpn-for-free-3o9h)

1. Install OpenVPN and Easy-RSA

```bash
sudo apt update
sudo apt install openvpn
sudo apt-get install easy-rsa
```

2. Configuration

```bash
# Generate the server’s certificates and keys:
cd /usr/share/easy-rsa
sudo ./easyrsa init-pki
sudo ./easyrsa build-ca
sudo ./easyrsa gen-req server nopass
sudo ./easyrsa sign-req server server
```

> During above process, when prompted, you will need to set a password and server username.

```bash
# after above,the server is setup, generate the Diffie-Hellman key exchange
sudo openssl dhparam -out /etc/openvpn/dh.pem 2048
# and then need to generate an HMAC signature for a strengthened control channel
sudo openvpn --genkey secret /etc/openvpn/ta.key
```

3. Server Configuration

Create a server configuration file `/etc/openvpn/server.conf` and add the following lines:

```log
port 1194
proto udp
dev tun
ca /etc/openvpn/easy-rsa/pki/ca.crt
cert /etc/openvpn/easy-rsa/pki/issued/server.crt
key /etc/openvpn/easy-rsa/pki/private/server.key
dh /etc/openvpn/dh.pem
tls-auth /etc/openvpn/ta.key 0
server 10.8.0.0 255.255.255.0
ifconfig-pool-persist /etc/openvpn/ipp.txt
push "redirect-gateway def1 bypass-dhcp"
push "dhcp-option DNS 8.8.8.8"
user nobody
group nogroup
persist-key
persist-tun
status /var/log/openvpn-status.log
verb 3
```

4. Enable IP Forwarding

Uncomment the following line in `/etc/sysctl.conf` to enable IP forwarding`net.ipv4.ip_forward=1`

activate the changes:`sudo sysctl -p`

5. Firewall Configuration

Configure the firewall to allow VPN traffic:

```bash
sudo ufw allow 1194/udp
sudo ufw allow OpenSSH
sudo ufw enable
```

7. Client Configuration

Generate client keys:

```bash
cd /usr/share/easy-rsa
sudo ./easyrsa gen-req client nopass
sudo ./easyrsa sign-req client client
```

> During this process, you will again enter the username and use “user” as a placeholder. Then, once prompted, type the word ‘yes’ and enter the password we used earlier in Step 2 for the server’s certificates and keys setup.

Lastly, create a client configuration file named client.ovpn in `/etc/openvpn/` :

```log
client
dev tun
proto udp
remote your_server_ip 1194
resolv-retry infinite
nobind
persist-key
persist-tun
key-direction 1
remote-cert-tls server
tls-auth ta.key 1
data-ciphers AES-256-GCM:AES-128-GCM
verb 3
```

> Copy down the client certificates and keys to your local machine.

7. Connecting to the VPN

- Use OpenVPN on your local machine to connect to your VPN server:`openvpn --config client.ovpn`；
- 图形化工具；
