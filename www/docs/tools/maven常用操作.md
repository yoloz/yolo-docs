## 跳过单元测试

-Dmaven.test.skip=true：不执行测试用例，也不编译测试用例类。
等效 pom.xml 文件中修改如下：

```xml
<plugin>
    <groupId>org.apache.maven.plugin</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <version>2.1</version>
    <configuration>
        <skip>true</skip>
    </configuration>
</plugin>
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>2.5</version>
    <configuration>
        <skip>true</skip>
    </configuration>
</plugin>
```

-DskipTests：不执行测试用例，但编译测试用例类生成相应的 class 文件。
等效 pom.xml 文件中修改如下：

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>2.5</version>
    <configuration>
        <skipTests>true</skipTests>
    </configuration>
</plugin>
```
