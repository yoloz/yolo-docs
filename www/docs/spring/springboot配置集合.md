## 启用 https

```yml
server:
  address: 0.0.0.0
  port: 0
  ssl.key-store: xxx.p12
  ssl.key-store-password: xxxx
  ssl.keyStoreType: PKCS12
#  ssl.keyAlias: tomcat
```

> Tomcat 支持 PKCS12 或 JKS
>
> 证书生成可参考安全部分 keytool 或 openssl
