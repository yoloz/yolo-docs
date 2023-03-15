## 介绍

Kerberos 是一种流行的身份验证协议，可用于单点登录 （SSO）。SSO 背后的主要关键概念是用户通过单次登录（一次性活动）即可获得所有服务认证，无需每个服务操作认证一次。Kerberos 系统提供针对许多网络攻击和漏洞的保护。以下是 Kerberos 的一些特征：

- 使用票证进行身份验证
- 避免在本地保存密码
- 避免通过互联网发送密码
- 引入受信任的第三方
- 基于对称密钥加密构建

:::tip
Kerberos 有许多实现，目前我们常用的是 MIT krb5(1980 年麻省理工学院开发了 Kerberos 来保护 Athena 项目提供的网络服务,当前版本为第 5 版)
:::

### 解决问题

在单机系统上，可以使用密钥或密码来证明用户的身份，但在分布式计算机网络系统上，如果使用密码或密钥来认证，则需要将密码或密钥通过网络从一台机器传输到另一台机器。例如，如果用户从服务器请求私有文件，则该用户需要将其密钥发送到服务器以对其进行身份验证。因为该密码是标识用户的唯一机密信息，所以网络中任何知道用户密码的人都可以作为该用户访问其文件。因此，有必要防止任何人拦截或窃听传输的密码。此外，有必要提供一种在用户请求服务时对用户进行身份验证的方法，用户必须证明自己的身份。

综上，Kerberos 的两个基调:安全性和身份验证。

## 概念

:::note
principal 主要由三部分构成：primary，instance(可选) 和 realm。包含 instance 的 principal，一般会作为 server 端的 principal,不含有 instance 的 principal，一般会作为 客户端的 principal，用于身份认证。如：

- 部署在 foo.yunzhisec.com 节点的 hiverserver2 的 principal:`hiverserver2/foo.yunzhisec.com@EXAMPLE.COM`(primary/instance@realm)
- 用户 test:`test@EXAMPLE.COM`(primary@realm)

keytab：包含了多个 principal 与密码的文件，用户可以利用该文件进行身份认证；

Ticket Cache：客户端与 KDC 交互完成后，包含身份认证信息的文件，短期有效，需要不断 renew;

realm：Kerberos 系统中的一个 namespace。不同 Kerberos 环境，可以通过 realm 进行区分。

:::

Kerberos 主要由三个部分组成：Key Distribution Center (即 KDC)、客户端（Client）和普通服务器（Server）。 大致关系如下图所示：

![kerberos](/docs/bigdata/kerberos.png)

:::info

- Key Distribution Center (KDC)

  Each Kerberos realm will have at least one Kerberos server. This server, the Key Distribution Center, contains the Authentication Service, the Ticket-Granting Service, and the master database for Kerberos. These services are implemented as a single daemon.

- Authentication Service
  - The authentication service handles user authentication, or the process of verifying that principals are correctly identified.
  - Consists of the security servers in the KDC (or KDCs), and security clients.
  - A security client communicates with a security server to request information and operations. The security server accesses the registry database to perform queries and updates and to validate user logins.
- Ticket-Granting Service:
  - Once authenticated, a principal will be granted a TGT and a ticket session key, which gives the principal the right to use the ticket. This combination of the ticket and its associated key is known as your credentials.
  - A principal’s credentials are stored in a credentials cache, which is often just a file in the principal’s local directory tree.
- The Kerberos Database:包含了 realm 中所有的 principal、密码与其他信息。（默认：Berkeley DB）
  - Each KDC contains its own copy of the Kerberos database. The master KDC contains the primary copy of the database, which it propagates at regular intervals to the slave KDCs.
- Access tools
  Tools used to access the Kerberos information are:
  - kadmin - Used for reading or updating the Kerberos registry.
  - kinit - Creates credentials for a user.
  - klist - Displays the existing credentials for a user.
  - kdestroy - Deletes a user’s credentials.
  - kpasswd - Changes a user’s Kerberos password.
  - kdb5_util - Dumps or loads the Kerberos database for save and restore operations.

:::

- Key Distribution Center (KDC)：Each Kerberos realm will have at least one Kerberos server.
- Authentication Service：

## 认证流程

假设上述`Service x`是一个 http 服务，认证过程如下：

### 第一步

客户端(client)将相关信息(**plaintext**)发送给 Authentication Server;
:::note 相关信息

- your name/ID
- the name/ID of the requested service (in this case, service is the Ticket Granting Server),
- your network address (may be a list of IP addresses for multiple machines, or may be null if wanting to use on any machine);
- requested lifetime for the validity of the TGT

:::

### 第二步

Authentication Server 将检查 client 是否在 KDC 数据库中。此检查仅用于查看是否存在，未检查任何凭据。如果没有错误，将随机生成一个 key(`TGS Session Key`)供 client 和 TGS 通信使用。随后 Authentication Server 将发送两条信息给客户端。其中一条信息被称为 TGT，由`TGS Secret Key`加密，客户端无法解密。
:::note TGT

- the TGS name/ID;
- timestamp;
- your network address (may be a list of IP addresses for multiple machines, or may be null if wanting to use on any machine);
- lifetime of the TGT (could be what you initially requested, lower if you or the TGS’s secret keys are about to expire, or another limit that was implemented during the Kerberos setup);
- TGS Session Key

:::
另一条信息由`Client Secret Key`(通过密码，salt(made up of user@REALMNAME.COM) 和散列计算可得出)加密。
:::note
如果客户端的密码不正确则无法解密，隐式验证输入密码的正确性。
:::
信息包含：

- the TGS name/ID;
- timestamp;
- lifetime of the TGT(same as above);
- TGS Session Key

:::caution 注意

- The encrypted TGT is stored within your credential cache.
- the `TGS Session Key` is the shared key between you and the TGS.

:::

### 第三步

客户端通过`Client Secret Key`解密出第二条信息得到`TGS Session Key`，使用其加密自己的 Authenticator:
:::note Authenticator

- your name/ID;
- timestamp

:::
然后发送以下信息给 Ticket Granting Server：

- 上述加密的 Authenticator;
- 无法解密的 TGT;
- 未加密的信息(**plaintext**),包含：

:::note unencrypted message

- the requested HTTP Service name/ID you want access to;
- lifetime of the Ticket for the HTTP Service

:::

### 第四步

TGS 收到客户端的信息，首先从 KDC database 中检查 HTTP 服务是否存在(未加密信息里携带有 HTTP 服务信息)，检查没问题则使用`TGS Secret Key`解密 TGT 得到`TGS Session Key`，然后使用其解密收到的 Authenticator 信息得到客户端信息。TGS 解密出所有信息后，将进行身份检查：

- 将 Authenticator 中的客户端 ID 与 TGT 的客户端 ID 进行比较;
- 比较来自 Authenticator 的时间戳和 TGT 的时间戳 (典型的 Kerberos 系统对差异的容忍度是 2 分钟，可以配置);
- 检查 TGT 是否过期(lifetime element);
- 检查 Authenticator 是否已经在 TGS 的缓存中（for avoiding replay attacks）;
- 如果原始请求中的网络地址不为空，则将源的 IP 地址与 TGT 里的网络地址（或地址列表）进行比较;

当所有检查都通过后，TGS 会随机生成一个 key(`HTTP Service Session Key`)供客户端与 HTTP 服务通信使用。随后 Ticket Granting Server 将发送两条信息给客户端。

其中一条信息被称为`HTTP Service ticket`，由`HTTP Service Secret Key`加密，客户端无法解密。
:::note HTTP Service ticket

- your name/ID;
- HTTP Service name/ID;
- your network address (may be a list of IP addresses for multiple machines, or may be null if wanting to use on any machine);
- timestamp;
- lifetime of the validity of the ticket;
- HTTP Service Session Key;

:::

另一条信息由`TGS Session Key`加密，信息包含：

- HTTP Service name/ID;
- timestamp;
- lifetime of the validity of the ticket;
- HTTP Service Session Key;

### 第五步

客户端使用第一步得到的`TGS Session Key`解密后一条信息得到`HTTP Service Session Key`，使用其加密自己的 Authenticator:
:::note Authenticator

- your name/ID;
- timestamp

:::
然后发送以下信息给 HTTP 服务:

- 上述加密的 Authenticator;
- 无法解密的 HTTP Service ticket;

### 第六步

HTTP 服务首先利用自身的密钥(`HTTP Service Secret Key`)解密出 `HTTP Service ticket` 的信息得到 `HTTP Service Session Key`,然后使用它解密出客户端的 Authenticator 信息。同 TGS 一样,HTTP Server 会做如下检查:

- 将 Authenticator 中的客户端 ID 与 HTTP Service ticket 中的客户端 ID 进行比较；
- 比较来自 Authenticator 的时间戳和 HTTP Service ticket 的时间戳 (典型的 Kerberos 系统对差异的容忍度是 2 分钟，可以配置)
- 检查 HTTP Service ticket 是否过期(lifetime element);
- 检查 Authenticator 是否已经在 HTTP 服务器的缓存中（for avoiding replay attacks）;
- 如果原始请求中的网络地址不为空，则将源的 IP 地址与 HTTP Service ticket 里的网络地址（或地址列表）进行比较;

当所有检查都通过后，HTTP Service 发送一条由`HTTP Service Session Key`加密的信息(Authenticator)给客户端:
:::note Authenticator

- HTTP Service name/ID;
- timestamp;

:::

客户端使用缓存的`HTTP Service Session Key`解密接收到的 Authenticator 信息得到 HTTP Service’s ID 和 timestamp.

至此认证完成,后续客户端和 HTTP Serivce 之间使用缓存的`HTTP Service Ticket`即可,直到它过期（lifetime attribute）。

## Kerberos 益处

### Scalable

- Servers do not need to contact KDC to authenticate users
- Only users and machine account authenticate with the KDC, once per 10h of activity

### Secure

- Passwords are not transmitted over the wire
- 基于信任证书的 Ticket 验证
- 有时间限制的 session key(有效期)
- Separate session key for each user-server pair

### Advanced Features

- 单点登录
- Delegation
- 跨域身份验证
- 互操作性
- 相互身份验证

## Kerberos 不足

### 单点故障

需要 central Kerberos server 的高可用，一旦出故障则无法验证使用。

### Password guessing

请求 ticket 不需要身份验证，攻击者可以通过请求多个 ticket 来收集等效的/etc/passwd

### 其他

- 如果本地计算机受到攻击并被恶意软件捕获到密码，则 Kerberos 容易遭受攻击
- 票证劫持(Ticket hijacking):恶意用户可能窃取同一工作站上另一用户的服务票证并尝试使用
- server authentication:攻击者可以配置网络从而接收发送给合法服务器的消息

## 参考

[kerberos Simplified](http://omalperera.github.io/security/2018/02/01/kerberos-simplified.html)

[Explain like I’m 5: Kerberos](https://www.roguelynn.com/words/explain-like-im-5-kerberos/)
