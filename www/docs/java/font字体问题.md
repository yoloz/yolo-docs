系统安装运行后，浏览器验证码不显示报错：

```java
java.io.IOException: Problem reading font data.
        at java.desktop/java.awt.Font.createFont0(Font.java:1208)
        at java.desktop/java.awt.Font.createFont(Font.java:1076)
        ...
Caused by: java.lang.RuntimeException: Fontconfig head is null, check your fonts or fonts configuration
        at java.desktop/sun.awt.FontConfiguration.getVersion(FontConfiguration.java:1269)
        at java.desktop/sun.awt.FontConfiguration.readFontConfigFile(FontConfiguration.java:224)
        at java.desktop/sun.awt.FontConfiguration.init(FontConfiguration.java:106)
        at java.desktop/sun.awt.X11FontManager.createFontConfiguration(X11FontManager.java:706)
        at java.desktop/sun.font.SunFontManager$2.run(SunFontManager.java:358)
        at java.desktop/sun.font.SunFontManager$2.run(SunFontManager.java:315)
        at java.base/java.security.AccessController.doPrivileged(AccessController.java:318)
        at java.desktop/sun.font.SunFontManager.<init>(SunFontManager.java:315)
        at java.desktop/sun.awt.FcFontManager.<init>(FcFontManager.java:35)
        at java.desktop/sun.awt.X11FontManager.<init>(X11FontManager.java:56)
        ... 126 more
```

> The JDK places any files that it provides in $JDKHOME/lib. Do not modify that location. Instead, put any updates or custom versions of the configuration files in $JDKHOME/conf/fonts....详情见[Loading Font Configuration Files](https://docs.oracle.com/en/java/javase/17/intl/font-configuration-files.html#GUID-F8ABF748-F3C3-4781-97B2-66C7E1E10EE9)

在 JDK8 中存在字体文件`${JDKPath}/jre/lib`，而 Oracle JDK17、OpenJDK19 中均没有，如果系统没有安装`fontconfig`则会报上述字体错误。

```bash
# 拷贝字体文件到openjdk 19中
$ sudo cp -r /xxx/jdk8.0_311/jre/lib/font* /xxx/es/jdk/lib/
# 拷贝字体文件到jdk17中
$ sudo cp -r /xxx/jdk8.0_311/jre/lib/font* /xxx/jdk-17.0.10/lib/
```

> 重启服务后刷新页面验证码可见
