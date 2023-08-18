原文：[使用自动化插件 release 来管理 maven 项目的版本发布](https://cloud.tencent.com/developer/article/1762924)

## 环境与目标

### 示例环境

- 父 POM

```xml
    <groupId>com.futao</groupId>
    <artifactId>starter-fustack</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>starter-fustack</name>
```

- 子模块列表

```xml
<modules>
        <!--微信小程序-->
        <module>fustack-wx-mini-program</module>
        <!--自动配置-->
        <module>fustack-autoconfiguration</module>
        <!--常量-->
        <module>fustack-consts</module>
        <module>demo-test</module>
        <!--数据库-->
        <module>fustack-db</module>
        <!--基础-->
        <module>fustack-foundation</module>
        <!--腾讯短信-->
        <module>fustack-tencent-cloud-short-message</module>
        <!--WEB支持-->
        <module>fustack-web</module>
        <!--权限控制-->
        <module>fustack-auth</module>
        <!--异常体系-->
        <module>fustack-exceptions</module>
        <!--Redis-->
        <module>fustack-redis</module>
        <!--工具包-->
        <module>fustack-utils</module>
    </modules>
```

### 示例目标

当前处于开发阶段，项目的版本为: 0.0.1-SNAPSHOT，即将需要发布该版本的正式版本: 0.0.1，且在正式版发布之后，下一个开发版本为: 0.0.2-SNAPSHOT。并同时将构建好的构件发布到 maven 私服。

## 插件介绍

命令:

### mvn release:prepare

准备发布版本
:::info

1. 检查项目是否有未提交的代码，有的话会报错。
2. 检查项目是否有快照版本的依赖。
3. 提示用户输入将要发布的版本号，并且自动将项目中 pom 文件中的版本号更新为用户输入的版本号。
4. 提示用户输入一个 tagName。
5. 基于修改后的 pom 执行构建。
6. 提交 pom 变更到 VCS。
7. 提示用户输入下一个开发版的版本号，并且自动将项目中 pom 文件中的版本号更新为用户输入的版本号。
8. 提交 pom 变更到 VCS。

:::

### mvn release:rollback

回滚 prepare 阶段的操作，将 pom 回退至之前的状态并提交，但是不会删除 prepare 生成的 tag 标签。

### mvn release:perform

执行版本发布，执行 mvn deploy 命令打包并部署构件到远程仓库。

## 操作过程

### 添加 release 插件支持

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-release-plugin</artifactId>
    <configuration>
        <!--<tagBase>https://github.com/FutaoSmile/starter-fustack</tagBase>-->
        <!--是否自动为子模块分配父版本。如果设置为false，将提示用户输入每个子模块的版本。-->
        <autoVersionSubmodules>true</autoVersionSubmodules>
        <!--tag标签名-->
        <tagNameFormat>release-by-maven-${version}</tagNameFormat>
    </configuration>
</plugin>
```

如果需要将构建好的构件发布到自己的 maven 私服，需要进行以下配置:

- 在`~/.m2/settings.xml`中添加 maven 私服的用户名和密码
- 在项目的 pom.xml 文件中配置 repository

```xml
<distributionManagement>
    <repository>
        <id>对应settings中设置的id</id>
        <url>需要上传到的maven私服地址</url>
    </repository>
</distributionManagement>
```

### 在 pom.xml 中设置 SCM 地址

```xml
<scm>
    <!--可读的SCM地址-->
    <!--<connection>scm:git:https://github.com/FutaoSmile/starter-fustack</connection>-->
    <!--可写的SCM地址-->
    <developerConnection
  >scm:git:https://github.com/FutaoSmile/starter-fustack</developerConnection>
    <!--可以在浏览器中访问的scm地址-->
    <!--<url>https://github.com/FutaoSmile/starter-fustack</url>-->
    <!--设置tagName-->
    <tag>v-release-0.0.1</tag>
</scm>
```

### 执行命令

```bash
mvn release:prepare
mvn relase:perform
```
