## 缘由

java 较新的版本采取模块化设计(>9)，下载的 jdk 中不带 jre，使用者可以根据需要自己生成 jre。如这里下载的是 oracle 的 jdk17:

```bash
test@test:~/jdk-17$ tree -d -L 1
.
├── bin
├── conf
├── include
├── jmods
├── legal
├── lib
└── man
```

文件夹`jmods`里是压缩的模块：

```bash
test@test:~/jdk-17$ ls jmods/
java.base.jmod
java.security.sasl.jmod
jdk.dynalink.jmod
jdk.javadoc.jmod
jdk.management.jfr.jmod
#.......
```

查看 jar 包使用到了哪些模块`bin/jdeps --list-deps target.jar`

## 例子 tomcat10

这里使用 tomcat10,jre 使用 jdk17 生成

### jdeps 查看模块

```bash
test@test:~/jdk-17$ bin/jdeps ~/apache-tomcat-10.1.0-M5/bin/bootstrap.jar
bootstrap.jar -> java.base
bootstrap.jar -> not found
#......
test@test:~/jdk-17$ bin/jdeps ~/apache-tomcat-10.1.0-M5/bin/tomcat-juli.jar
org.apache.tomcat.juli
 [file:///home/test/apache-tomcat-10.1.0-M5/bin/tomcat-juli.jar]
   requires java.base
   requires java.logging
   requires java.management
   requires java.sql
org.apache.tomcat.juli -> java.base
org.apache.tomcat.juli -> java.logging
org.apache.tomcat.juli -> java.management
org.apache.tomcat.juli -> java.sql
#......

test@test:~/jdk-17$ bin/jlink --module-path jmods \
--add-modules java.base,java.logging,java.management,java.sql --output tomcat10_jre
```

启动 tomcat

```bash
test@test:~/apache-tomcat-10.1.0-M5$ nano bin/setenv.sh
JRE_HOME=/home/test/jdk-17/tomcat10_jre
CATALINA_PID="$CATALINA_BASE/tomcat.pid"
test@test:~/apache-tomcat-10.1.0-M5$ bin/catalina.sh run
#......
Caused by: java.lang.NoClassDefFoundError: java/beans/PropertyChangeSupport
		at org.apache.catalina.core.StandardServer.<init>(StandardServer.java:152)
		... 30 more
#.....
```

### 添加模块

- 添加模块`java.desktop`

```bash
test@test:~/jdk-17$ rm -rf tomcat10_jre/
test@test:~/jdk-17$ bin/jlink --module-path jmods --add-modules \
java.base,java.logging,java.management,java.sql,java.desktop \
--output tomcat10_jre
```

启动后报错：

```bash
#......
Caused by: java.lang.NoClassDefFoundError: javax/naming/NamingException
		at org.apache.catalina.core.StandardServer.<init>(StandardServer.java:82)
		... 30 more
#......
```

- 添加模块`java.naming`

```bash
#......
Caused by: java.lang.ClassNotFoundException: org.ietf.jgss.GSSException
		at java.base/java.net.URLClassLoader.findClass(URLClassLoader.java:440)
		at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:587)
		at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:520)
		... 26 more
#......
```

- 添加模块`java.security.jgss`

```bash
#......
Caused by: java.lang.NoClassDefFoundError: java/lang/instrument/ClassFileTransformer
		at org.apache.catalina.core.StandardContext.startInternal(StandardContext.java:4975)
		at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
		... 38 more
#......
```

- 添加模块`java.instrument`

启动成功，实际还缺少一个模块，即下文的报错。

## java.lang.ClassNotFoundException: sun.rmi.transport.Target

```bash
INFO [Thread-2] org.apache.catalina.loader.WebappClassLoaderBase.clearReferencesRmiTargets Failed to find class sun.rmi.transport.Target to clear context class loader for web application [manager]. This is expected on non-Sun JVMs.
	java.lang.ClassNotFoundException: sun.rmi.transport.Target
		at java.base/java.net.URLClassLoader.findClass(URLClassLoader.java:440)
		at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:587)
#......
at org.apache.catalina.loader.WebappClassLoaderBase.clearReferencesRmiTargets(WebappClassLoaderBase.java:2252)
#......
```

源代码如下：

```java
/**
     * This depends on the internals of the Sun JVM so it does everything by
     * reflection.
     */
    private void clearReferencesRmiTargets() {
        try {
            // Need access to the ccl field of sun.rmi.transport.Target to find
            // the leaks
            Class<?> objectTargetClass =
                Class.forName("sun.rmi.transport.Target");
            Field cclField = objectTargetClass.getDeclaredField("ccl");
            cclField.setAccessible(true);
            // Need access to the stub field to report the leaks
        //.......
        } catch (ClassNotFoundException e) {
            log.info(sm.getString("webappClassLoader.clearRmiInfo",
                    getContextName()), e);
        } catch (SecurityException | NoSuchFieldException | IllegalArgumentException |
                IllegalAccessException e) {
            log.warn(sm.getString("webappClassLoader.clearRmiFail",
                    getContextName()), e);
        } catch (InaccessibleObjectException e) {
            // Must be running on without the necessary command line options.
            log.warn(sm.getString("webappClassLoader.addExportsRmi", this.getClass().getModule().getName()));
        }
    }
```

| Attribute                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| clearReferencesRmiTargets | If `true`, Tomcat looks for memory leaks associated with RMI Targets and clears any it finds. This feature uses reflection to identify the leaks and therefore requires that the command line option `-XaddExports:java.rmi/sun.rmi.transport=ALL-UNNAMED` is set when running on Java 9 and above. Applications without memory leaks should operate correctly with this attribute set to `false`. If not specified, the default value of `true` will be used. |

> from [https://tomcat.apache.org/tomcat-9.0-doc/config/context.html](https://tomcat.apache.org/tomcat-9.0-doc/config/context.html)

`sun.*`和`com.sun.*`包中的大多数类型会逐渐不可访问(模块化后新的可访问性规则)。

但是查看文件，启动文件中已经添加`java.rmi`的访问规则，如下：

```bash
test@test:~/apache-tomcat-10.1.0-M5$ nano bin/catalina.sh
#......
# Add the module start-up parameters required by Tomcat
JDK_JAVA_OPTIONS="$JDK_JAVA_OPTIONS --add-opens=java.base/java.lang=ALL-UNNAMED"
JDK_JAVA_OPTIONS="$JDK_JAVA_OPTIONS --add-opens=java.base/java.io=ALL-UNNAMED"
JDK_JAVA_OPTIONS="$JDK_JAVA_OPTIONS --add-opens=java.base/java.util=ALL-UNNAMED"
JDK_JAVA_OPTIONS="$JDK_JAVA_OPTIONS --add-opens=java.base/java.util.concurrent=ALL-UNNAMED"
JDK_JAVA_OPTIONS="$JDK_JAVA_OPTIONS --add-opens=java.rmi/sun.rmi.transport=ALL-UNNAMED"
export JDK_JAVA_OPTIONS

# ----- Execute The Requested Command -----------------------------------------
#......
```

其实是我们的 jre 中没有提供`java.rmi`模块，重新生成 jre 即可。
`bin/jlink --module-path jmods --add-modules java.base,java.logging,java.management,java.sql,java.desktop,java.naming,java.security.jgss,java.instrument,java.rmi --output tomcat10_jre`

### 配置 Https 报错

```bash
WARNING [https-jsse-nio-8443-exec-1] org.apache.tomcat.util.buf.ByteBufferUtils.<clinit> Cannot use direct ByteBuffer cleaner, memory leaking may occur
	java.lang.ClassNotFoundException: sun.misc.Unsafe
		at java.base/java.net.URLClassLoader.findClass(URLClassLoader.java:440)
```

添加模块`jdk.unsupported`

浏览器访问失败`ERR_SSL_PROTOCOL_ERROR`，通过命令`curl -i -v --request POST https://ip:port/ --tlsv1.1 --insecure`测试报错`error:140943F2:SSL routines:ssl3_read_bytes:sslv3 alert unexpected message`

添加模块`jdk.crypto.cryptoki`

> Provides the implementation of the SunPKCS11 security provider.

最终命令：`bin/jlink --module-path jmods --add-modules java.base,java.logging,java.management,java.sql,java.desktop,java.naming,java.security.jgss,java.instrument,java.rmi,jdk.unsupported,jdk.crypto.cryptoki --output tomcat10_jre`

## -XaddExports 和-XaddOpens 区别

- 使用`--add-exports`(`-XaddExports`)包被导出，意味着所有的公共类型和成员都可以在编译和运行时访问。
- 随着`--add-opens`打开包，这意味着其中的所有类型和成员（不仅是公共的！）在运行时可以访问;

所以在运行时的主要区别是`--add-opens`(`-XaddOpens`)允许“深度反射”，意思是非公共成员的访问。通常可以通过 setAccessible(true)的反射代码来识别此类访问。

使用如下：

```bash
java -Dlog4j.configuration=file:/data/src/Cassandra/log4j.properties
--add-exports java.base/jdk.internal.misc=ALL-UNNAMED
--add-exports java.base/jdk.internal.ref=ALL-UNNAMED
--add-exports java.base/sun.nio.ch=ALL-UNNAMED
--add-exports java.management.rmi/com.sun.jmx.remote.internal.rmi=ALL-UNNAMED
--add-exports java.rmi/sun.rmi.registry=ALL-UNNAMED
--add-exports java.rmi/sun.rmi.server=ALL-UNNAMED
--add-exports java.sql/java.sql=ALL-UNNAMED
--add-opens java.base/java.lang.module=ALL-UNNAMED
--add-opens java.base/jdk.internal.loader=ALL-UNNAMED
--add-opens java.base/jdk.internal.ref=ALL-UNNAMED
--add-opens java.base/jdk.internal.reflect=ALL-UNNAMED
--add-opens java.base/jdk.internal.math=ALL-UNNAMED
--add-opens java.base/jdk.internal.module=ALL-UNNAMED
--add-opens java.base/jdk.internal.util.jar=ALL-UNNAMED
--add-opens=java.base/sun.nio.ch=ALL-UNNAMED
--add-opens jdk.management/com.sun.management.internal=ALL-UNNAMED
--add-opens=java.base/java.io=ALL-UNNAMED
-jar /data/src/cassandra-jar-with-dependencies.jar
/data/src/Cassandra/config.properties
```

## 通过类搜索模块

什么类属于什么模块，可以通过 API 文档搜索：[JAVA SE 17 API](https://docs.oracle.com/en/java/javase/17/docs/api/index.html)
