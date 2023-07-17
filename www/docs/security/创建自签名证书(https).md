X.509 证书包含三个文件：key，csr，crt。

- key 是服务器上的私钥文件，用于对发送给客户端数据的加密，以及对从客户端接收到数据的解密
- csr 是证书签名请求文件，用于提交给证书颁发机构（CA）对证书签名
- crt 是由证书颁发机构（CA）签名后的证书，或者是开发者自签名的证书，包含证书持有人的信息，持有人的公钥，以及签署者的签名等信息

备注：在密码学中，X.509 是一个标准，规范了公开秘钥认证、证书吊销列表、授权凭证、凭证路径验证算法等。

## openssl

```bash
# 生成rsa私钥，des3算法，2048位强度，server.key是秘钥文件名。生成私钥，需要提供一个至少4位的密码。
openssl genrsa -des3 -out server.key 2048
# 生成私钥之后，便可以创建csr文件了(将证书发送给证书颁发机构CA，出具签名证书),也可以使用OpenSSL实现自签名
openssl req -new -key server.key -out server.csr # 需要依次输入国家等信息,要支持https，Common Name应该与域名保持一致，否则会引起浏览器警告
# 在创建私钥的过程中，由于必须要指定一个密码,在每次Apache启动Web服务器时都会要求输入密码，这显然非常不方便。要删除私钥中的密码
cp server.key server.key.org
openssl rsa -in server.key.org -out server.key
# 生成自签名证书,在使用自签名的临时证书时，浏览器会提示证书的颁发机构是未知的
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
#安装私钥和证书
```
