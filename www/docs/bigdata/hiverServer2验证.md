[Authentication/Security Configuration](https://cwiki.apache.org/confluence/display/Hive/Setting+Up+HiveServer2#SettingUpHiveServer2-Configuration)

## NOSASL

hive-site.xml 里配置`hive.server2.authentication=NOSASL`

即过期的 hiveserver1 方式(无安全措施)

## NONE

(no authentication check–plain SASL transport)

默认启动即不验证用户名密码是否正确，即`hive.server2.authentication=NONE`

## CUSTOM

1. 自定义验证类继承 `org.apache.hive.service.auth.PasswdAuthenticationProvider`

```java
package indi.yolo.sample.hive;

import javax.security.sasl.AuthenticationException;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.hive.conf.HiveConf;
import org.apache.hive.service.auth.PasswdAuthenticationProvider;
//自定义实现中可以添加对密码的处理.如:MD5
public class CustomPasswdAuthenticator implements PasswdAuthenticationProvider {

    private static final String HIVE_JDBC_PASSWD_AUTH_PREFIX = "hive.jdbc_passwd.auth.%s";

    @Override
    public void Authenticate(String username, String password) throws AuthenticationException {
        HiveConf hiveConf = new HiveConf();
        Configuration conf = new Configuration(hiveConf);
        String passwdMD5 = conf.get(String.format(HIVE_JDBC_PASSWD_AUTH_PREFIX, username));
        if (passwdMD5 == null) {
            String message = "user's ACL configuration is not found. user:" + username;
            throw new AuthenticationException(message);
        }
        if (!passwdMD5.equals(password)) {
            String message = "user name and password is mismatch. user:" + username;
            throw new AuthenticationException(message);
        }
    }
}
```

2. 打 jar 包放到 ${HIVE_HOME}\lib 下并在 hive-site.xml 中加

```xml
<property>
  <name>hive.server2.authentication</name>
  <value>CUSTOM</value>
</property>
<property>
  <name>hive.server2.custom.authentication.class</name>
  <value>indi.yolo.sample.hive.CustomPasswdAuthenticator</value>
</property>
<property>
<!-- username替换为用户名 -->
  <name>hive.jdbc_passwd.auth.<username></name>
  <value>用authenticate自定方法加密后的密码</value>
</property>
<!-- 多组用户添加多个如上的 property -->
```

:::caution 注意
上述值`CUSTOM`需要大写，否则报错如下:

```log
2023-03-23T09:39:37,405  INFO [main] webapp.WebInfConfiguration: Extract jar:file:/opt/hive-2.1.1/lib/hive-service-2.1.1.jar!/hive-webapps/hiveserver2/ to /tmp/jetty-0.0.0.0-10002-hiveserver2-_-any-/webapp
2023-03-23T09:39:37,468 ERROR [Thread-11] thrift.ThriftCLIService: Error starting HiveServer2: could not start ThriftBinaryCLIService
javax.security.auth.login.LoginException: Error setting callback handlerjavax.security.sasl.AuthenticationException: Not a valid authentication method
...
2023-03-23T09:39:37,491  INFO [Thread-3] server.HiveServer2: SHUTDOWN_MSG:
```

:::

3. 重启 HiveServer2 服务

:::info

可以提供用户列表文件方便操作(增删用户只需修改文件，无需改动 hive)：

1. 上述的(多组)配置`hive.jdbc_passwd.auth.<username>`替换为一个配置文件选项

```xml
<property>
  <name>hive.server2.custom.authentication.file</name>
  <value>校验文本的路径</value>
</property>
```

2. 验证代码修改如下：

```java
@Override
public void Authenticate(String username, String password) throws AuthenticationException {
    boolean ok = false;
    HiveConf hiveConf = new HiveConf();
    Configuration conf = new Configuration(hiveConf);
    String filePath = conf.get("hive.server2.custom.authentication.file");
    File file = new File(filePath);
    try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
        String tempString;
        while ((tempString = reader.readLine()) != null) {
            String[] datas = tempString.split(",", -1);
            if (datas.length != 2) continue;
            if (datas[0].equals(username) && datas[1].equals(password)) {
                ok = true;
                break;
            }
        }
    } catch (Exception e) {
        throw new AuthenticationException("read auth config file error, [" + filePath + "] ..", e);
    }
    if (!ok) {
        throw new AuthenticationException("user [" + username + "] auth check fail .. ");
    }
}
```

:::
