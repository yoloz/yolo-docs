## 添加本地依赖

```xml
<dependency>
    <groupId>com.cloudera.hive</groupId>
    <artifactId>hive-jdbc</artifactId>
    <version>2.6.13</version>
    <scope>system</scope>
    <systemPath>${project.basedir}/ext/HiveJDBC42.jar</systemPath>
    <!-- <systemPath>${basedir}/../ext/HiveJDBC42.jar</systemPath> -->
</dependency>
```

通过`mvn clean package -DskipTests`编译时告警：

```log
[INFO] Scanning for projects...
[WARNING]
[WARNING] Some problems were encountered while building the effective model for com.zhds:ui-common:jar:3.0
[WARNING] 'dependencies.dependency.systemPath' for com.cloudera.hive:hive-jdbc:jar should not point at files within the project directory, ${project.basedir}/ext/HiveJDBC42.jar will be unresolvable by dependent projects @ line 66, column 25
[WARNING]
[WARNING] It is highly recommended to fix these problems because they threaten the stability of your build.
[WARNING]
[WARNING] For this reason, future Maven versions might no longer support building such malformed projects.
[WARNING]
```

解决办法：

- 使用`pom.basedir`

```xml
<dependency>
    <groupId>com.cloudera.hive</groupId>
    <artifactId>hive-jdbc</artifactId>
    <version>2.6.13</version>
    <scope>system</scope>
    <systemPath>${pom.basedir}/ext/HiveJDBC42.jar</systemPath>
</dependency>
```

- 使用`spring-boot-maven-plugin`插件:

```xml
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <configuration>
        <arguments>
            <argument>${project.basedir}/ext/HiveJDBC42.jar</argument>
        </arguments>
    </configuration>
</plugin>
```

- 使用`maven-compiler-plugin`插件:

```xml
<plugin>
	<artifactId>maven-compiler-plugin</artifactId>
	<configuration>
		<source>1.8</source>
		<target>1.8</target>
		<encoding>UTF-8</encoding>
		<optimize>true</optimize>
		<compilerArguments>
			<extdirs>${project.basedir}/ext/HiveJDBC42.jar</extdirs>
		</compilerArguments>
	</configuration>
</plugin>
```

> 使用插件不仅可以单个导入 jar 包，如果本地 jar 依赖比较多，可以直接导入 ext 目录下的所有 jar 包
