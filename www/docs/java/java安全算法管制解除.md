由于国外的进出口限制，对 Java 密码算法体系进行了一些限制，为了解除限制，需要覆盖策略文件。

## 下载策略文件

- jdk6→http://www.oracle.com/technetwork/java/javase/downloads/jce-6-download-429243.html
- jdk7→http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html
- jdk8→http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html

下载的策略文件中需要两个文件：local_policy.jar 和 US_export_policy.jar

## 覆盖 sdk 和 jre 中的这两个策略文件

- sdk 中策略文件位置 →xxx/jdk1.8.0_144/jre/lib/security
- jre 中策略文件位置 →xxx/jre1.8.0_144/lib/security

AES 算法没有解除限制之前，密钥长度只支持 128 位，其限制解除后，可支持 128、192、256 位等长度:

```java
@Test
public void case3(){
    try {
        KeyGenerator kg =  KeyGenerator.getInstance("AES");
        kg.init(256);
        SecretKey secretKey=kg.generateKey();
        System.out.println(secretKey.getFormat());
    } catch (NoSuchAlgorithmException e) {
         e.printStackTrace();
    }
}
```

若出现 java.security.InvalidKeyException: Illegal key 错误，表示限制没有解除。
