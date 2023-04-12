## 不带证书怎么验证身份

当我们访问 https 的问题, 一般不会带上跟证书相关的参数，那又是如何验证网站身份的呢?这里使用 curl 来模拟:

```bash
ylz@yltest:~$ curl https://baidu.com -v
* Rebuilt URL to: https://baidu.com/
*   Trying 39.156.66.10...
* TCP_NODELAY set
* Connected to baidu.com (39.156.66.10) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* successfully set certificate verify locations:
*   CAfile: /etc/ssl/certs/ca-certificates.crt
  CApath: /etc/ssl/certs
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.2 (IN), TLS handshake, Certificate (11):
* TLSv1.2 (IN), TLS handshake, Server key exchange (12):
* TLSv1.2 (IN), TLS handshake, Server finished (14):
* TLSv1.2 (OUT), TLS handshake, Client key exchange (16):
* TLSv1.2 (OUT), TLS change cipher, Client hello (1):
* TLSv1.2 (OUT), TLS handshake, Finished (20):
* TLSv1.2 (IN), TLS handshake, Finished (20):
* SSL connection using TLSv1.2 / ECDHE-RSA-AES128-GCM-SHA256
* ALPN, server accepted to use http/1.1
* Server certificate:
*  subject: C=CN; ST=\U5317\U4EAC\U5E02; O=BeiJing Baidu Netcom Science Technology Co., Ltd; CN=www.baidu.cn
*  start date: Jan 30 00:00:00 2023 GMT
*  expire date: Feb 27 23:59:59 2024 GMT
*  subjectAltName: host "baidu.com" matched cert's "baidu.com"
*  issuer: C=US; O=DigiCert Inc; CN=DigiCert Secure Site Pro CN CA G3
*  SSL certificate verify ok.
> GET / HTTP/1.1
...
```

:::note
从上述输出可以看到：

- certificates in /etc/ssl/certs/ca-certificates.crt
- certificates in /etc/ssl/certs

:::

`/etc/ssl`:可以使用命令`apt install ca-certificates`生成，一般系统安装后已经生成;

`/etc/ssl/certs` 目录下有大量证书相关的文件.

在使用 curl 的时候，如果不带证书相关的参数,则会引用默认的证书路径(依操作系统不同而不同)这个默认值怎么来确定呢?

可以确认是 curl 底层的代码根据环境因素定义的默认值，通过 strace 方式来查看

```bash
ylz@yltest:~$ strace curl https://www.baidu.com |& grep open
openat(AT_FDCWD, "/etc/ld.so.cache", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libcurl.so.4", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/lib/x86_64-linux-gnu/libz.so.1", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/lib/x86_64-linux-gnu/libpthread.so.0", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/lib/x86_64-linux-gnu/libc.so.6", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libnghttp2.so.14", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libidn2.so.0", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/librtmp.so.1", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libpsl.so.5", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libssl.so.1.1", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libcrypto.so.1.1", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libgssapi_krb5.so.2", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libldap_r-2.4.so.2", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/liblber-2.4.so.2", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libunistring.so.2", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libgnutls.so.30", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libhogweed.so.4", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libnettle.so.6", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libgmp.so.10", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/lib/x86_64-linux-gnu/libdl.so.2", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libkrb5.so.3", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libk5crypto.so.3", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/lib/x86_64-linux-gnu/libcom_err.so.2", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libkrb5support.so.0", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/lib/x86_64-linux-gnu/libresolv.so.2", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libsasl2.so.2", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libgssapi.so.3", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libp11-kit.so.0", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libtasn1.so.6", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/lib/x86_64-linux-gnu/libkeyutils.so.1", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libheimntlm.so.0", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libkrb5.so.26", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libasn1.so.8", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libhcrypto.so.4", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libroken.so.18", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libffi.so.6", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libwind.so.0", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libheimbase.so.1", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libhx509.so.5", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/x86_64-linux-gnu/libsqlite3.so.0", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/lib/x86_64-linux-gnu/libcrypt.so.1", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/lib/x86_64-linux-gnu/libm.so.6", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/usr/lib/ssl/openssl.cnf", O_RDONLY) = 3
openat(AT_FDCWD, "/usr/lib/locale/locale-archive", O_RDONLY|O_CLOEXEC) = 3
openat(AT_FDCWD, "/home/ylz/.curlrc", O_RDONLY) = -1 ENOENT (No such file or directory)
openat(AT_FDCWD, "/dev/urandom", O_RDONLY) = 4
openat(AT_FDCWD, "/dev/random", O_RDONLY) = 5
openat(AT_FDCWD, "/dev/srandom", O_RDONLY) = -1 ENOENT (No such file or directory)
openat(AT_FDCWD, "/usr/lib/ssl/openssl.cnf", O_RDONLY) = 6
openat(AT_FDCWD, "/etc/ssl/certs/ca-certificates.crt", O_RDONLY) = 6
openat(AT_FDCWD, "/etc/localtime", O_RDONLY|O_CLOEXEC) = 6
ylz@yltest:~$
```

:::note
从上面可以看到, curl 如果不指定 ca 参数的话,则会到/etc/ssl 目录下查找
:::

### curl 带参数(cacert)访问

通过 `man curl`来查看几个重要的跟参数相关的参数

```log
--cacert <CA certificate>
              (SSL)  Tells  curl  to use the specified certificate file to verify the peer. The file may contain multiple CA certificates...
--capath <CA certificate directory>
              (SSL) Tells curl to use the specified certificate directory to verify the peer. Multiple paths can be  provided  by  separating  them with  ":"  (e.g.   "path1:path2:path3")...
```

## ca-certificates

ca-certificates 则是一个包, 用于维护根证书库.可以通过`dpkg -L ca-certificates`来查看证书相关信息,也可以通过`apt-cache show ca-certificates` 查看相关信息.

一般情况下, 系统安装好之后基本就不会再做操作了，那如何更新根证书呢?

有一个工具`update-ca-certificates`可以手动更新根证书信息, 具体可执行`man update-ca-certificates`查看。

```bash
ylz@yltest:~$ sudo update-ca-certificates
[sudo] password for ylz:
Updating certificates in /etc/ssl/certs...
0 added, 0 removed; done.
Running hooks in /etc/ca-certificates/update.d...
done.
ylz@yltest:~$
```

:::info
在安装 curl 的时候，默认会安装 ca-certificates，实际上这个包由 OpenSSL 安装的。curl 是通过 OpenSSL 实现客户端 HTTPS 协议的，就是说在 curl/openSSL 平台下，curl 使用的根证书库都是由 ca-certificates 包处理。
:::

## x509: certificate signed by unknown authority

### 容器镜像访问 https 报错

使用的镜像本身没有包含`/etc/ssl`目录，同时在 Dockerfile 中也没有使用`apt install ca-certificates`来安装, 因此在请求 https 时会出现此问题.

### filebeat 访问 8.x 报错

```yml
output.elasticsearch:
  hosts: ["https://xxx:9200"]
  username: "xxx"
  password: "xxx"
```

如上配置连接 es 报错，因为 es 默认安装的证书未使用系统自带的根证书，需要手动指定，添加如下配置：

```log
# ${ES_HOME}/config/certs/http_ca.crt
ssl.certificate_authorities: "./http_ca.crt"
```

参考：
[访问https时为何会出现x509 certificate signed by unknown authority](https://izsk.me/2020/06/18/why-x509-error-when-curl-https/)