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

## 'dependencies.dependency.systemPath' for...

原始写法

```xml
<dependency>
    <groupId>com.cloudera.hive</groupId>
    <artifactId>hive-jdbc</artifactId>
    <version>2.6.13</version>
    <scope>system</scope>
    <systemPath>${project.basedir}/../ext/HiveJDBC42.jar</systemPath>
</dependency>
```

告警详情:

```log
$ mvn clean package -DskipTests
[INFO] Scanning for projects...
[WARNING]
[WARNING] Some problems were encountered while building the effective model for com.zhds:ui-common:jar:3.0
[WARNING] 'dependencies.dependency.systemPath' for com.cloudera.hive:hive-jdbc:jar should not point at files within the project directory, ${project.basedir}/../ext/HiveJDBC42.jar will be unresolvable by dependent projects @ line 66, column 25
[WARNING]
[WARNING] It is highly recommended to fix these problems because they threaten the stability of your build.
[WARNING]
[WARNING] For this reason, future Maven versions might no longer support building such malformed projects.
[WARNING]

```

- 使用`pom.basedir`

```xml
<dependency>
    <groupId>com.cloudera.hive</groupId>
    <artifactId>hive-jdbc</artifactId>
    <version>2.6.13</version>
    <scope>system</scope>
    <systemPath>${pom.basedir}/../ext/HiveJDBC42.jar</systemPath>
</dependency>
```

## springboot 打包本地 jar

spring boot 打包将<scope>system</scope>的 jar 包含进去:

```xml
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <configuration>
        <includeSystemScope>true</includeSystemScope>
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
