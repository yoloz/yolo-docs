用 SSL 进行双向身份验证意思就是在客户机连接服务器时，连接双方都要对彼此的数字证书进行验证，保证这是经过授权的才能够连接。

模拟场景：  
Server 端和 Client 端通信，需要进行授权和身份的验证，即 Client 只能接受 Server 的消息，Server 只能接受 Client 的消息。

实现技术：  
JSSE（Java Security Socket Extension）是 Sun 为了解决在 Internet 上的安全通讯而推出的解决方案。它实现了 SSL 和 TSL（传输层安全）协议。在 JSSE 中包含了数据加密，服务器验证，消息完整性和客户端验证等技术。通过使用 JSSE，开发人员可以在客户机和服务器之间通过 TCP/IP 协议安全地传输数据

为了实现消息认证  
Server 需要：

1. KeyStore: 其中保存服务端的私钥
2. Trust KeyStore:其中保存客户端的授权证书

同样，Client 需要：

1. KeyStore：其中保存客户端的私钥
2. Trust KeyStore：其中保存服务端的授权证书

## keytool 制作双向认证

### 1. 创建服务端证书

1. 生成服务端私钥，并且导入到服务端 KeyStore 文件中
   `keytool -genkeypair -alias serverkey -keystore kserver.keystore`
2. 根据私钥，导出服务端证书
   `keytool -export -alias serverkey -keystore kserver.keystore -file server.crt`
   server.crt 就是服务端的证书
3. 将服务端证书，导入到客户端的 Trust KeyStore 中
   `keytool -import -alias serverkey -file server.crt -keystore tclient.keystore`
   tclient.keystore 是给客户端用的，其中保存着受信任的证书

### 2. 创建客户端证书

采用同样的方法，生成客户端的私钥，客户端的证书，并且导入到服务端的 Trust KeyStore 中

```bash
keytool -genkey -alias clientkey -keystore kclient.keystore
keytool -export -alias clientkey -keystore kclient.keystore -file client.crt
keytool -import -alias clientkey -file client.crt -keystore tserver.keystore
```

如此一来，生成的文件分成两组  
服务端保存：kserver.keystore tserver.keystore  
客户端保存：kclient.keystore tclient.kyestore

## openssl 制作双向认证

### 1. 创建根证书

1. 生成根证书私钥
   `openssl genrsa -des3 -out root.key 1024`
2. 生成根证书签名请求文件`openssl req -new -out root-req.csr -key root.key -keyform PEM`
3. 自签根证书`openssl x509 -req -in root-req.csr -out root-cert.crt -signkey root.key -CAcreateserial -days 365`，csr 文件交给 CA 签名后形成自己的证书(与根证书私钥对应)
4. 导出 p12 格式证书`openssl pkcs12 -export -clcerts -in root-cert.crt -inkey root.key -out root.p12`

> 证书签名请求文件 CSR(Certificate Signing Request)

或者直接两步

```bash
$> openssl req -new -x509 -keyout ca_root.key -out ca_root.crt -days 365
$> openssl pkcs12 -export -clcerts -in ca_root.crt -inkey ca_root.key -out ca_root.p12
```

### 2. 创建服务端证书

1. 生成服务端 key`openssl genrsa -des3 -out server-key.key 1024`
2. 生成服务端请求文件`openssl req -new -out server-req.csr -key server-key.key`
3. 生成服务端证书（root 证书，rootkey，客户端 key，客户端请求文件这 4 个生成客户端证书）`openssl x509 -req -in server-req.csr -out server-cert.crt -signkey server-key.key -CA root-cert.crt -CAkey root.key -CAcreateserial -days 365`
4. 生成服务端 p12 格式根证书`openssl pkcs12 -export -clcerts -in server-cert.crt -inkey server-key.key -out server.p12`

### 3. 创建客户端证书

1. 生成客户端 key`openssl genrsa -des3 -out client-key.key 1024`
2. 生成客户端请求文件`openssl req -new -out client-req.csr -key client-key.key`
3. 生成客户端证书（root 证书，rootkey，客户端 key，客户端请求文件这 4 个生成客户端证书）`openssl x509 -req -in client-req.csr -out client-cert.crt -signkey client-key.key -CA root-cert.crt -CAkey root.key -CAcreateserial -days 365`
4. 生成客户端 p12 格式根证书`openssl pkcs12 -export -clcerts -in client-cert.crt -inkey client-key.key -out client.p12`

如此一来，生成的文件分成两组  
服务端保存：trustStore 使用 root.p12，keyStore 使用 server.p12  
客户端保存：trustStore 使用 root.p12,keyStore 使用 client.p12

**根证书作为 CA,用来验证对方发送的签名是否正确。如果不对签名进行验证，则不需要根证书放到 trustStore 中**。

## keytool 与 openssl 区别

JDK 里面内置了一个数字证书生产工具:keytool。但是这个工具只能生成自签名的数字证书。所谓自签名就是指证书只能保证自己是完整的，没有经过非法修改的。但是无法保证这个证书是属于谁的（一句话:**keytool 没办法签发证书，而 openssl 能够进行签发和证书链的管理**）。用这种自签名的证书也是可以进行双向验证的但是**这种验证有一个缺点:对于每一个要连接的服务器，都要保存一个证书的验证副本。而且一旦服务器更换证书，所有客户端就需要重新部署这些副本。**对于比较大型的应用来说，这一点是不可接受的。所以就需要证书链进行双向认证。

> 证书链是指对证书的签名有一个预先部署的，众所周知的签名方签名完成，这样每次需要验证证书时只要用这个公用的签名方的公钥进行验证就可以了

我们使用的浏览器就保存了几个常用的 CA_ROOT,每次连接到网站时只要这个网站的证书是经过这些 CA_ROOT 签名过的,就可以通过验证了。但是这些共用的 CA_ROOT 的服务不是免费的,而且价格不菲。所以我们可以自己生成一个 CA_ROOT 的密钥对(OpenSSL)，然后部署应用时，只要把这个 CA_ROOT 的私钥部署在所有节点就可以完成验证了。

## 实现 web 项目的 ssl 双向认证

### 1. openssl 生成 CA_ROOT

1. 生成根证书私钥
   `openssl genrsa -out ca_root.pem -passout pass:123456`
2. 生成根证书签名请求文件
   `openssl req -new -out ca_root.csr -key ca_root.pem`
3. 自签署证书
   `openssl x509 -req -in ca_root.csr -out ca_root-cert.pem -signkey ca_root.pem -days 365`
4. 导出 ca 证书
   `openssl pkcs12 -export -clcerts -in ca_root-cert.pem -inkey ca_root.pem -out ca_root.p12`

或者直接两步

```bash
$> openssl req -new -x509 -keyout ca_root.key -out ca_root.crt -days 365
$> openssl pkcs12 -export -clcerts -in ca_root.crt -inkey ca_root.key -out ca_root.p12
```

### 2. 注册服务端证书

1. 创建服务端密钥库,别名为 server，validity 有效期为 365 天，密钥算法为 RSA， storepass 密钥库密码，keypass 别名条目密码。
   `keytool -genkeypair -storetype pkcs12 -keystore 1-183.p12 -alias 1-183-server -validity 365 -keyalg RSA`
2. 生成服务端证书请求文件
   `keytool -certreq -file 1-183.csr -storetype pkcs12 -keystore 1-183.p12 -alias 1-183-server`
3. 使用 CA_ROOT 签证生成服务端证书
   `openssl x509 -req -CA ca.crt -CAkey ca.key -in 1-183.csr -out 1-183.crt -days 365 -CAcreateserial`
4. 服务端信任 CA_ROOT(CA_ROOT 证书导入服务端密钥库)
   `keytool -importcert -file ca.crt -storetype pkcs12 -keystore 1-183.p12 -alias CARoot`
5. 将服务端证书导入服务端密钥库中(安装证书回复到密钥库中)
   `keytool -importcert -file 1-183.crt -storetype pkcs12 -keystore 1-183.p12 -alias 1-183-server`
6. 使用 CA_ROOT 证书生成服务端信任库
   `keytool -importcert -file ca.crt -alias CARoot -keystore 1-183-truststore.p12 -storetype pkcs12`

> 问题：No subject alternative names present
>
> 密钥库可以添加 SAN(-ext SAN=),但是安装证书回复后 server.jks 中 SAN 就没了
>
> 生成请求文件时也可以添加 SAN(密钥库生成的请求文件中不会自动带上 SAN),但是签证后生成的证书 server.pem 中仍会没有 SAN
>
> 解决:在签证的时候添加 SAN(-extfile file) [Subject Alternative Name](https://www.openssl.org/docs/man1.1.1/man5/x509v3_config.html)

### 3. 注册客户端证书

1. 使用 CA_ROOT 证书生成客户端信任库
   `keytool -importcert -file ca.crt -alias CARoot -keystore user1-truststore.p12 -storetype pkcs12`
2. 创建客户端密钥(指定用户名，下列命令中的 user 将替换为颁发证书的用户名)
   `openssl genrsa -out user1.pem -passout pass:123456`
3. 生成客户端证书请求文件
   `openssl req -new -out user1.csr -key user1.pem`
4. 使用 CA_ROOT 签证生成对应用户名的客户端证书
   `openssl x509 -req -in user1.csr -out user1.crt -signkey user1.pem -CA ca.crt -CAkey ca.key -CAcreateserial -days 365`
5. 将签证之后的用户证书导入服务端信任库（**由于没有去 CA 认证中心购买个人证书，所以只有导入信任库才可进行双向 ssl 交互**)
   `keytool -importcert -alias user1trust -file user1.crt -keystore 1-183-truststore.p12`
6. 将签证之后的证书文件 user-cert.pem 导出为 p12 格式文件（p12 格式可以被浏览器识别并安装到证书库中）
   `openssl pkcs12 -export -clcerts -in user1.crt -inkey user1.pem -out user1.p12`

或者

```bash
#使用CA_ROOT证书生成客户端信任库
$ keytool -importcert -file ca.crt -alias CARoot -keystore user1-truststore.p12 -storetype pkcs12
#新建密钥库
$ keytool -genkeypair -storetype pkcs12 -keystore user1.p12 -alias user1 -validity 365 -keyalg RSA
#生成证书请求文件
$ keytool -certreq -file user1.csr -storetype pkcs12 -keystore user1.p12 -alias user1
#CA_ROOT签证
$ openssl x509 -req -CA ca.crt -CAkey ca.key -in user1.csr -out user1.crt -days 365 -CAcreateserial
#证书链之信任根证书
$ keytool -importcert -file ca.crt -storetype pkcs12 -keystore user1.p12 -alias CARoot
#安装自己的证书回复
$ keytool -importcert -file user1.crt -storetype pkcs12 -keystore user1.p12 -alias user1
#用户证书导入服务端信任库
$ keytool -importcert -alias user1trust -file user1.crt -keystore 1-183-truststore.p12
```

### 4. 配置 web 容器

## JAVA 实现

采用 JSSE 及 keytool 生成的证书，分别生成 SSLServerSocket,SSLSocket  
client 采用 kclient.keystore 中的 clientkey 私钥进行数据加密，发送给 server  
server 采用 tserver.keystore 中的 client.crt 证书（包含了 clientkey 的公钥）对数据解密，如果解密成功，证明消息来自 client，进行逻辑处理  
server 采用 kserver.keystore 中的 serverkey 私钥进行数据加密，发送给 client  
client 采用 tclient.keystore 中的 server.crt 证书（包含了 serverkey 的公钥）对数据解密，如果解密成功，证明消息来自 server，进行逻辑处理  
如果过程中，解密失败，那么证明消息来源错误。不进行逻辑处理。这样就完成了双向的身份认证。

[完整样例](https://github.com/yoloz/Samples/tree/master/samples-ssl)

服务端，生成 SSLServerSocket 代码

```java
SSLContext ctx = SSLContext.getInstance("SSL");

KeyManagerFactory kmf = KeyManagerFactory.getInstance("SunX509");
TrustManagerFactory tmf = TrustManagerFactory.getInstance("SunX509");

//            KeyStore ks = KeyStore.getInstance("JKS");
//            KeyStore tks = KeyStore.getInstance("JKS");
//            ks.load(new FileInputStream(path.resolve("keytool/kserver.keystore").toFile()), SERVER_KEY_STORE_PASSWORD.toCharArray());
//            tks.load(new FileInputStream(path.resolve("keytool/tserver.keystore").toFile()), SERVER_TRUST_KEY_STORE_PASSWORD.toCharArray());

KeyStore ks = KeyStore.getInstance("pkcs12");
KeyStore tks = KeyStore.getInstance("pkcs12");
ks.load(new FileInputStream(path.resolve("openssl/server.p12").toFile()), SERVER_KEY_STORE_PASSWORD.toCharArray());
tks.load(new FileInputStream(path.resolve("openssl/root.p12").toFile()), SERVER_TRUST_KEY_STORE_PASSWORD.toCharArray());

kmf.init(ks, SERVER_KEY_STORE_PASSWORD.toCharArray());
tmf.init(tks);

ctx.init(kmf.getKeyManagers(), tmf.getTrustManagers(), null);

serverSocket = (SSLServerSocket) ctx.getServerSocketFactory().createServerSocket(DEFAULT_PORT);
serverSocket.setUseClientMode(false);
serverSocket.setNeedClientAuth(true);  //需要验证客户端的身份
```

客户端，生成 SSLSocket 的代码，大同小异

```java
SSLContext ctx = SSLContext.getInstance("SSL");

KeyManagerFactory kmf = KeyManagerFactory.getInstance("SunX509");
TrustManagerFactory tmf = TrustManagerFactory.getInstance("SunX509");

//            KeyStore ks = KeyStore.getInstance("JKS");
//            KeyStore tks = KeyStore.getInstance("JKS");
//            ks.load(new FileInputStream(path.resolve("keytool/kclient.keystore").toFile()), CLIENT_KEY_STORE_PASSWORD.toCharArray());
//            tks.load(new FileInputStream(path.resolve("keytool/tclient.keystore").toFile()), CLIENT_TRUST_KEY_STORE_PASSWORD.toCharArray());

KeyStore ks = KeyStore.getInstance("pkcs12");
KeyStore tks = KeyStore.getInstance("pkcs12");
ks.load(new FileInputStream(path.resolve("openssl/client.p12").toFile()), CLIENT_KEY_STORE_PASSWORD.toCharArray());
tks.load(new FileInputStream(path.resolve("openssl/root.p12").toFile()), CLIENT_TRUST_KEY_STORE_PASSWORD.toCharArray());

kmf.init(ks, CLIENT_KEY_STORE_PASSWORD.toCharArray());
tmf.init(tks);

ctx.init(kmf.getKeyManagers(), tmf.getTrustManagers(), null);

sslSocket = (SSLSocket) ctx.getSocketFactory().createSocket(DEFAULT_HOST, DEFAULT_PORT);
/*配置套接字在握手时使用客户机（或服务器）模式。
此方法必须在发生任何握手之前调用。一旦握手开始，在此套接字的生存期内将不能再重置模式。
服务器通常会验证本身，客户机则不要求这么做
如果套接字应该以“客户机”模式开始它的握手，此参数为 true
*/
sslSocket.setUseClientMode(true);
```
