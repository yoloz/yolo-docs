[常见的密码库](https://en.wikipedia.org/wiki/Comparison_of_cryptography_libraries)

[BouncyCastle](https://www.bouncycastle.org/java.html) 是一种用于 Java 平台的开放源码的轻量级密码库包，支持大量的密码算法，能够提供数字证书转换所需要的类和方法。

## maven 引入依赖包方式

- pom.xml 文件中引入 bouncycastle 的 jar 包依赖

```xml
<dependency>
    <groupId>org.bouncycastle</groupId>
    <artifactId>bcprov-jdk18on</artifactId>
    <version>1.73</version>
</dependency>
<dependency>
    <groupId>org.bouncycastle</groupId>
    <artifactId>bcprov-ext-jdk18on</artifactId>
    <version>1.73</version>
</dependency>
```

- 注册 BouncyCastle，注册只需要在启动时进行一次，后续就可以使用 BouncyCastle 提供的所有哈希算法和加密算法。

```java
@Test
public void case1(){
    // 注册BouncyCastle:
    Security.addProvider(new BouncyCastleProvider());
    // 按名称正常调用:
    try {
        md = MessageDigest.getInstance("RipeMD160");
        md.update("HelloWorld".getBytes("UTF-8"));
    } catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
        e.printStackTrace();
    }
    byte[] result = md.digest();
    System.out.println(new BigInteger(1, result).toString(16));
}
```

## 配置 java.security 的方式

### 下载

[下载链接](https://www.bouncycastle.org/latest_releases.html)，下拉页面到`SIGNED JAR FILES`，从其列表中下载：`JDK 1.8 and later` 行的`bcprov-jdk18on-173.jar`，`bcprov-ext-jdk18on-173.jar`

:::note
通常使用到的是 bcprov 库,bcprov-ext 包含一些晦涩的加密算法，这些算法自 v1.4.0 以来一直未包含在主要版本中。
:::

### 配置

1. 将上述下载的两个 jar 包放到到系统 JAVA 配置路径下，具体为：`xx/jdk1.8.0_261/jre/lib/ext/`;
2. 修改配置文件`xxx/jdk/jre/lib/security/java.security`，相关位置添加

```log
#
# List of providers and their preference orders (see above):
#
security.provider.1=sun.security.provider.Sun
security.provider.2=sun.security.rsa.SunRsaSign
security.provider.3=sun.security.ec.SunEC
security.provider.4=com.sun.net.ssl.internal.ssl.Provider
security.provider.5=com.sun.crypto.provider.SunJCE
security.provider.6=sun.security.jgss.SunProvider
security.provider.7=com.sun.security.sasl.Provider
security.provider.8=org.jcp.xml.dsig.internal.dom.XMLDSigRI
security.provider.9=sun.security.smartcardio.SunPCSC

#前面是java环境已经提供的，添加一行
security.provider.10=org.bouncycastle.jce.provider.BouncyCastleProvider
```

查看本地 java 系统中安装的所有的 JCE 提供者和一些相应算法:

```java
@Test
public void case2(){
    System.out.println("-------列出加密服务提供者-----");
    Provider[] pro=Security.getProviders();
    for(Provider p:pro){
        System.out.println("Provider:"+p.getName()+" - version:"+p.getVersion());
        System.out.println(p.getInfo());
    }
    System.out.println("");
    System.out.println("-------列出系统支持的消息摘要算法：");
    for(String s:Security.getAlgorithms("MessageDigest")){
        System.out.println(s);
    }
    System.out.println("-------列出系统支持的生成公钥和私钥对的算法：");
    for(String s:Security.getAlgorithms("KeyPairGenerator")){
        System.out.println(s);
    }
}
```
