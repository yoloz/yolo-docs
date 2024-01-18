## 使用`getResource("")`

> `jar`包不适用

```java
// 注意getResource("")里面是空字符串
String path = this.getClass().getClassLoader().getResource("").getPath();
String filePath = path + fileName;
```

## 使用`getResource(fileName)`

> `jar`包不适用

```java
String path = this.getClass().getClassLoader().getResource(fileName).getPath();
// 如果路径中带有中文会被URLEncoder,因此这里需要解码
String filePath = URLDecoder.decode(path, "UTF-8");
```

或者

```java
String path = this.getClass().getClassLoader().getResource(fileName).getFile();
// 如果路径中带有中文会被URLEncoder,因此这里需要解码
String filePath = URLDecoder.decode(path, "UTF-8");
```

## 使用`getResourceAsStream`

上面的几种方式获取文件路径，但对于`SpringBoot`之类中所有文件都在`jar`包中，没有一个实际的路径，因此可以使用以下方式:

> `jar`包适用

```java
InputStream in = this.getClass().getClassLoader().getResourceAsStream(fileName);
```

或者不使用`getClassLoader`,使用路径如下：

```java
// 直接从resources根路径下获取
InputStream in = this.getClass().getResourceAsStream("/" + fileName);
```

## 使用`spring-core`的`ClassPathResource`

> `jar`包适用

```java
ClassPathResource resource = new ClassPathResource("static/office_template/word_replace_tpl.docx");
File sourceFile = resource.getFile();
InputStream fis = resource.getInputStream();
```

在项目`pom.xml`中配置`resources`情况:

```xml
<build>
    <!-- 定义包含这些资源文件，能在jar包中获取这些文件 -->
    <resources>
        <resource>
            <directory>src/main/java</directory>
            <includes>
                <include>**/*.properties</include>
                <include>**/*.xml</include>
                <include>**/*.yml</include>
            </includes>
            <!--是否替换资源中的属性-->
            <filtering>false</filtering>
        </resource>
        <resource>
            <directory>src/main/resources</directory>
            <includes>
                <include>**/*.*</include>
            </includes>
            <!--是否替换资源中的属性-->
            <filtering>false</filtering>
        </resource>
    </resources>
</build>
```
