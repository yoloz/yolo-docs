## keytool 简介

Keytool 是一个 Java 数据证书的管理工具,Keytool 将密钥（key）和证书（certificates）存在一个称为 keystore 的文件中。
在 keystore 里，包含两种数据：

1. 密钥实体（Key entity）——密钥（secret key）又或者是私钥和配对公钥（采用非对称加密）
2. 可信任的证书实体（trusted certificate entries）——只包含公钥

**我们常说的证书就是就是上面的公钥，公钥是公开给其它人使用的**

## keytool 使用

使用`ketytool --help`命令可查看功能,主要功能如下:

```bash
-certreq            生成证书请求
-changealias        更改条目的别名
-delete             删除条目
-exportcert         导出证书
-genkeypair         生成密钥对
-genseckey          生成密钥
-gencert            根据证书请求生成证书
-importcert         导入证书或证书链
-importpass         导入口令
-importkeystore     从其他密钥库导入一个或所有条目
-keypasswd          更改条目的密钥口令
-list               列出密钥库中的条目
-printcert          打印证书内容
-printcertreq       打印证书请求的内容
-printcrl           打印 CRL文件的内容
-storepasswd        更改密钥库的存储口令
```

### 创建证书库

创建秘钥库(keystore),秘钥库是存储一个或多个密钥条目的文件，每个密钥条目应该以一个别名标识，它包含密钥和证书相关信息。  
如果使用"keytool -genkeypair"命令生成密钥条目，则会生成一个密钥对（公钥和相关私钥）并将公钥包装到 X.509 v3 自签名证书中，该证书存储为单个元素证书链，此证书链和私钥存储在以别名标识的密钥库条目中，条目类型为 PrivateKeyEntry。  
如果使用"keytool -genseckey"命令生成密钥条目，则会生成一个密钥并将其存储在以别名标识的密钥库条目中，条目类型为 SecretKeyEntry。

```bash
keytool -genkeypair \
        -alias localhost \
        -keyalg RSA \
        -keysize 2048
        -keypass 123456 \
        -sigalg SHA256withRSA \
        -dname "cn=github.com,ou=github.com,Inc.,o=Github, Inc.,l=San Francisco,st=California,c=US" \
        -validity 3650 \
        -keystore ddssingsong.p12 \
        -storetype PKCS12 \
        -storepass 123456
        -ext SAN=dns:github.com,dns:www.github.com,ip:127.0.0.1
```

如果创建默认类型(JKS)的密钥库，则可附加"-keypass"参数指定条目的密钥口令，如果没有指定则会在最后一步提示"输入该条目的密钥口令，如果与密钥库口令相同按回车"，一般设为与密钥库口令相同。如果创建 PKCS12 类型的密钥库，则会忽略条目的密钥口令相关参数，因为 PKCS12 不支持设置密钥库条目密码，默认它与密钥库密码一致

- alias 产生别名，每个 keystore 都关联这一个独一无二的 alias
- keyalg RSA 此处”RSA“为密钥的算法。可以选择的密钥算法有：RSA、DSA、EC。
- keysize 2048 密钥长度。keysize 与 keyalg 默认对应关系如下：
  |size|desc|
  |:--|:--|
  2048|when using -genkeypair and -keyalg is “RSA”
  1024|when using -genkeypair and -keyalg is “DSA”
  256|when using -genkeypair and -keyalg is “EC”

- keypass 指定别名条目的密码(私钥的密码)
- sigalg 签名算法如下:
  |keyalg|sigalg|
  |:--|:--|
  RSA|MD5withRSA、SHA1withRSA、SHA256withRSA、SHA384withRSA、SHA512withRSA
  DSA|SHA1withDSA、SHA256withDSA

**MD5 和 SHA1 的签名算法已经不安全**

- dname 在此填写证书信息  
  CN=名字与姓氏/域名,OU=组织单位名称,O=组织名称,L=城市或区域名称,ST=州或省份名称,C=单位的两字母国家代码  
  "名字与姓氏"应该是输入域名，而不是我们的个人姓名，其他的可以不填
- validity 3650 此处”3650“为证书有效期天数
- keystore 创建出的密钥生成路径，默认在当前目录创建证书库
- storetype 生成证书类型，可用的证书库类型为：JKS、PKCS12 等。jdk9 以前，默认为 JKS。自 jdk9 开始，默认为 PKCS12。
- storepass 指定密钥库的密码(获取 keystore 信息所需的密码)，最好与 keypass 一致
- ext [X.509 extension](./X.509中的扩展项.md)

### 查看生成的证书

```bash
$ keytool -list -v -keystore ddssingsong.p12 -storepass 123456
密钥库类型: PKCS12
密钥库提供方: SUN

您的密钥库包含 1 个条目

别名: ddssingsong
创建日期: 2019-9-11
条目类型: PrivateKeyEntry
证书链长度: 1
证书[1]:
所有者: CN=mydomain, OU=xxx, O=xxx, L=Beijing, ST=Beijing, C=CN
发布者: CN=mydomain, OU=xxx, O=xxx, L=Beijing, ST=Beijing, C=CN
序列号: 291b04d1
有效期为 Wed Sep 11 09:30:36 CST 2019 至 Sat Sep 08 09:30:36 CST 2029
证书指纹:
         MD5:  3D:75:33:93:1C:BF:07:78:68:8E:54:7B:30:1B:EB:79
         SHA1: 32:F2:6C:1A:F0:A8:9A:E9:92:A2:AF:7F:2D:35:FA:37:FD:28:7C:BD
         SHA256: 0E:1E:7D:2E:CB:57:72:BC:7D:FE:C8:F0:24:48:2A:31:69:B2:D2:F2:2E:BC:03:9A:D4:15:BD:15:BE:5F:5F:2D
签名算法名称: SHA256withRSA
主体公共密钥算法: 2048 位 RSA 密钥
版本: 3

扩展:

#1: ObjectId: 2.5.29.14 Criticality=false
SubjectKeyIdentifier [
KeyIdentifier [
0000: 34 44 40 24 BA 6F 5D 7F   0A 45 BE C3 24 BD A7 C8  4D@$.o]..E..$...
0010: 9C 62 8C 9A                                        .b..
```

有时候需要查看 base64 的内容(即 PEM 编码)`keytool -list  -rfc -keystore ddssingsong.p12 -storepass 123456`,打印如下:

```bash
$ keytool -list  -rfc -keystore ddssingsong.p12 -storepass 123456
密钥库类型: PKCS12
密钥库提供方: SUN

您的密钥库包含 1 个条目

别名: ddssingsong
创建日期: 2019-9-11
条目类型: PrivateKeyEntry
证书链长度: 1
证书[1]:
-----BEGIN CERTIFICATE-----
MIIDXzCCAkegAwIBAgIEKRsE0TANBgkqhkiG9w0BAQsFADBgMQswCQYDVQQGEwJD
TjEQMA4GA1UECBMHQmVpamluZzEQMA4GA1UEBxMHQmVpamluZzEMMAoGA1UEChMD
eHh4MQwwCgYDVQQLEwN4eHgxETAPBgNVBAMTCG15ZG9tYWluMB4XDTE5MDkxMTAx
MzAzNloXDTI5MDkwODAxMzAzNlowYDELMAkGA1UEBhMCQ04xEDAOBgNVBAgTB0Jl
aWppbmcxEDAOBgNVBAcTB0JlaWppbmcxDDAKBgNVBAoTA3h4eDEMMAoGA1UECxMD
eHh4MREwDwYDVQQDEwhteWRvbWFpbjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCC
AQoCggEBALSFrqyYNse3A/UMnKF6+G13YsrOEWJ3ZSRevMmNqgdqC9sNjtx07jw7
AQImxsfvaRLyPWgIt7iJxIU4USn0ARctv/ambzUPGk30bkq/Lst8PZmJGp6xRTdK
jYkk/jqxIA56ChqKV4yd5ZbRAAXCt/rJxlKNCfg7/929xf9+8Topty96gohm3rXP
sMkkmFHjlVUTUnNstmL8UjseS1K3Yomg1CrZ/CP1mYFrn2av0JHW11wd5Crbkzni
izubzakjw9aDGRIsu4h6r5Dk+MiTDAszmYE7p2yvqFJNrkxxURAnZJ4H4AwtA84l
KYB1QvESc9vzH35OOQpiJVH9Gob1EBUCAwEAAaMhMB8wHQYDVR0OBBYEFDREQCS6
b11/CkW+wyS9p8icYoyaMA0GCSqGSIb3DQEBCwUAA4IBAQBdIpzxtgrcYBoTEkh5
hGJWsa55CPFF0pAWeS0lVC6hE/jvS8ujZC3ReCVVLtl7B+qakQVI7B8sOR+l4cAz
ns01/oWBAmOTUbsEUOaxHedCkxNOTKM1BppCxWcc6jZTtvf9F4ROuCR47jUk+v3Q
FJfV7XtKQtupFeS5XmZv+3hVtFoxL5RZWG0XjjfOIoQ+WoPaWxByEAmK3xAGZxVm
MBgGtv5QwQSJG7baEYTG5pVYM7wdPRjEC1ARnyBuhe/KBeWdpCXfeAtEmccNORov
C2JAvDZGv8Dwam+sIZm0iTNOwKJOmwRbj58k41QH5D1/nCZrA1TRLwCOlpW/Ejns
OA1/
-----END CERTIFICATE-----
```

### 导出证书信息

将密钥库 ddssngong.jks 中别名为 ddss 条目的相关信息以及公钥导出到一个数字证书文件 rootca.crt 中

```bash
keytool -exportcert \
		-alias ddss \
		-keystore ddssngong.jks \
		-file rootca.crt \
		-storepass 123456
```

**该证书文件不包含私钥**

- file 输出证书文件路径
- alias **为什么要别名**,因为 ddssngong.jks 里可以存储多对公私钥文件，它们之间是通过别名区分的，所以这里是通过别名指定导出的是密钥文件里别名是 ddss 的公钥证书
- 此时导出的证书为 DER 编码格式，-rfc 选项可输出 pem 编码格式的证书

### 导入证书

导入证书其实是在客户机器上使用的  
双击 xxx.cer 完成导入操作(window 中导入)  
将信任证书 test.crt 以别名"test"导入到密钥库 server.p12 中`keytool -importcert -alias test -file test.crt -keystore server.p12 -storepass 123456`

_cer 是 crt 证书的微软形式_
_导入 test.crt 证书后，查看密钥库 server.p12 信息，新增一个"test"条目_

注：test.crt 是由另一个密钥库 test.keystore 生成的证书，将其导入到密钥库 server.p12 时指定的条目别名不能与密钥库中已存在的条目别名重复（导入签发证书除外），一般与导出该证书的密钥库条目别名相同，此时的导入条目会以信任证书的形式保存，条目类型为 trustedCertEntry。

### 打印证书信息

```bash
$ keytool -printcert -file rootca.crt
所有者: CN=mydomain, OU=xxx, O=xxx, L=Beijing, ST=Beijing, C=CN
发布者: CN=mydomain, OU=xxx, O=xxx, L=Beijing, ST=Beijing, C=CN
序列号: 291b04d1
有效期为 Wed Sep 11 09:30:36 CST 2019 至 Sat Sep 08 09:30:36 CST 2029
证书指纹:
         MD5:  3D:75:33:93:1C:BF:07:78:68:8E:54:7B:30:1B:EB:79
         SHA1: 32:F2:6C:1A:F0:A8:9A:E9:92:A2:AF:7F:2D:35:FA:37:FD:28:7C:BD
         SHA256: 0E:1E:7D:2E:CB:57:72:BC:7D:FE:C8:F0:24:48:2A:31:69:B2:D2:F2:2E:BC:03:9A:D4:15:BD:15:BE:5F:5F:2D
签名算法名称: SHA256withRSA
主体公共密钥算法: 2048 位 RSA 密钥
版本: 3

扩展:

#1: ObjectId: 2.5.29.14 Criticality=false
SubjectKeyIdentifier [
KeyIdentifier [
0000: 34 44 40 24 BA 6F 5D 7F   0A 45 BE C3 24 BD A7 C8  4D@$.o]..E..$...
0010: 9C 62 8C 9A                                        .b..
]
]
```

注：也可以使用 -sslserver ip:port 的参数，直接从网络上打印出某个 ssl server 提供的证书的内容

### jks 转 pkcs12

```bash
$ keytool -importkeystore \
		-srckeystore keystore.jks \
		-srcstoretype JKS \
		-deststoretype PKCS12 \
		-destkeystore keystore.p12
```

### 生成证书签名请求(CSR)

```bash
$ keytool -certreq -keyalg RSA \
        -alias ddssingsong \
        -keystore keystore.p12 \
        -storetype PKCS12 \
        -storepass 123456 \
        -file certreq.csr
```

### 查看生成的 CSR 证书请求

`keytool -printcertreq -file certreq.csr`

### 更改密码

`keytool -storepasswd -new new_storepass -keystore keystore.p12`
