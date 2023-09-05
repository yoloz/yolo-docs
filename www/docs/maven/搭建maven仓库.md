Maven 仓库用于存放不同编译的 artifacts 和 dependencies 的模块集合。主要有两类仓库： local（本地） 和 remote（远端）。一般而言，业界已经有许多成熟的 maven 仓库解决方案，如 Nexus 等，只需拥有一台服务器，并下载并安装 maven 仓库服务软件，然后启动即可。

下文利用 git 的 push 来发布 artifacts，利用 github 或 gitee 提供的公开 raw 服务提供对外下载服务。

## 准备仓库

在 gitee 创建一个仓库，如`mavenrepo`(`https://gitee.com/${account}/mavenrepo.git`);

> 或在 github 创建一个仓库，如`mavenrepo`(`https://github.com/${account}/mavenrepo.git`)；

本地文件系统：

在 pom.xml 中添加配置，然后执行`mvn deploy`

```xml
<distributionManagement>
    <repository>
        <id>mavenrepo</id>
        <name>Personal Maven Repository</name>
        <url>file:/home/${user}/.m2/mavenrepo</url>
    </repository>
</distributionManagement>
```

或者直接[命令行](https://maven.apache.org/plugins/maven-deploy-plugin/deploy-mojo.html)添加参数`mvn deploy -DaltDeploymentRepository=mavenrepo::file:/home/${user}/.m2/mavenrepo`

:::info
一般无需在`build`里添加`maven-deploy-plugin`，要添加额外配置如：[Deploying With Network Issues](https://maven.apache.org/plugins/maven-deploy-plugin/examples/deploy-network-issues.html)

[Deployment with FTP](https://maven.apache.org/plugins/maven-deploy-plugin/examples/deploy-ftp.html)

[Deployment with external SSH](https://maven.apache.org/plugins/maven-deploy-plugin/examples/deploy-ssh-external.html)
:::

提交：

```bash
cd mavenrepo
git init
git add .
git config user.name "test"
git config user.email "test@abc.com"
git commit -m "提交xxx"
git remote add origin https://gitee.com/${account}/mavenrepo.git
git push -u origin "master"
```

> 稍微复杂点可以创建分支 snapshot 和 release，对应测试和生产环境

## 使用仓库

github:

```xml
<project>
<!--Add repositories-->
    <repositories>
        <repository>
            <id>${account}-snapshot-mavenrepo</id>
            <name>Personal Maven Repository</name>
            <url>https://raw.github.com/${account}/mavenrepo/snapshot/</url>
        </repository>
        <repository>
            <id>${account}-release-mavenrepo</id>
            <name>Personal Maven Repository</name>
            <url>https://raw.github.com/${account}/mavenrepo/release/</url>
        </repository>
    </repositories>
<!-- Add dependencies -->
    <dependencies>
        <dependency>
            <artifactId>dsg-transport</artifactId>
            <groupId>com.yzsec.dsg</groupId>
            <version>1.0</version>
        </dependency>
    </dependencies>
</project>
```

gitee:

```xml
<project>
<!--Add repositories-->
    <repositories>
        <repository>
            <id>${account}-snapshot-mavenrepo</id>
            <name>Personal Maven Repository</name>
            <url>https://gitee.com/${account}/mavenrepo/raw/snapshot/</url>
        </repository>
        <repository>
            <id>${account}-release-mavenrepo</id>
            <name>Personal Maven Repository</name>
            <url>https://gitee.com/${account}/mavenrepo/raw/release/</url>
        </repository>
    </repositories>
<!-- Add dependencies -->
   <dependencies>
        <dependency>
            <artifactId>dsg-transport</artifactId>
            <groupId>com.yzsec.dsg</groupId>
            <version>1.0</version>
        </dependency>
    </dependencies>
</project>
```
