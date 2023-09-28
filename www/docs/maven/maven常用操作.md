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

## Blocked mirror for repositories

Maven 在升级到 3.8.1 以后，从安全角度考虑，默认将非 https 的远端仓库屏蔽掉了
解决办法：

- 把 Maven 版本降到 3.8.1 以下;
- 远端仓库支持 https;
- 为每一个非 http 源增加如下 mirror 配置(源比较多的话会比较麻烦)

```xml
<mirror>
    <id>xxxx</id>
    <mirrorOf>external:http:*</mirrorOf>
    <url>http://xxxxxx</url>
    <blocked>false</blocked>
</mirror>

```

- 注释掉默认配置文件$MAVEN_HOME/conf/settings.xml 中的相关 block 设置

```xml
<mirror>
    <id>maven-default-http-blocker</id>
    <mirrorOf>external:http:*</mirrorOf>
    <name>Pseudo repository to mirror external repositories initially using HTTP.</name>
    <url>http://0.0.0.0/</url>
    <blocked>true</blocked>
</mirror>
```

- 使用 dummy 镜像覆盖掉默认配置中的镜像配置,在~/.m2/settings.xml 中添加如下 mirror 配置

```xml
<mirror>
    <id>maven-default-http-blocker</id>
    <mirrorOf>external:dummy:*</mirrorOf>
    <name>Pseudo repository to mirror external repositories initially using HTTP.</name>
    <url>http://0.0.0.0/</url>
    <blocked>true</blocked>
</mirror>

```

## createDependencyReducedPom 属性

maven-shade-plugin 插件有个配置属性:createDependencyReducedPom,默认值为 true.

假如我的一个工程 A 依赖了 spring-boot-starter-tomcat,那么这个依赖(即 spring-boot-starter-tomcat)中的.class 文件会被打包进生成的 A.jar 包中，而在生成的 dependency-reduced-pom.xml 文件中，这个依赖将被 exclusion 掉。

那么这个 dependency-reduced-pom.xml 有什么用呢？

我们如果在另一个工程 B 中引用了 A 工程对应的 A.jar，而且 B 也依赖了 spring-boot-starter-tomcat，那么我们在 B 工程中就不需要再依赖 spring-boot-starter-tomcat 了，这样可以避免重复引用。

## Plugin validation issues were detected in n plugin(s)

```log
[INFO] ------------------------------------------------------------------------
[WARNING]
[WARNING] Plugin validation issues were detected in 2 plugin(s)
[WARNING]
[WARNING]  * org.apache.maven.plugins:maven-compiler-plugin:3.10.1
[WARNING]  * org.apache.maven.plugins:maven-resources-plugin:3.3.0
[WARNING]
[WARNING] For more or less details, use 'maven.plugin.validation' property with one of the values (case insensitive): [BRIEF, DEFAULT, VERBOSE]
[WARNING]
```

`mvn -Dmaven.plugin.validation=verbose ...`很多时候只需要升级指定的 [plugins](https://maven.apache.org/plugins/index.html) 即可，如下：

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <version>3.11.0</version>
</plugin>
```

## 打包排除 resources 文件

```xml
<build>
    <resources>
        <resource>
            <directory>src/main/java</directory>
            <includes>
                <include>**/*.xml</include>
            </includes>
        </resource>
        <resource>
            <directory>src/main/resources</directory>
            <includes>
                <include>**/*.*</include>
            </includes>
            <!-- 排除resources 文件下指定资源文件 -->
            <excludes>
                <exclude>templates/**</exclude>
                <exclude>dp/**</exclude>
            </excludes>
        </resource>
    </resources>
    <plugins>
    <!-- ..... -->
    </plugins>
</build>
```
