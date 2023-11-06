Maven 仓库用于存放不同编译的 artifacts 和 dependencies 的模块集合。主要有两类仓库： local（本地） 和 remote（远端）。一般而言，业界已经有许多成熟的 maven 仓库解决方案，如 Nexus 等，只需拥有一台服务器，并下载并安装 maven 仓库服务软件，然后启动即可。

下文利用 git 的 push 来发布 artifacts，利用 github 或 gitee 提供的公开 raw 服务提供对外下载服务。

## 准备仓库

1. 在 gitee 创建一个仓库，如`mavenrepo`(`https://gitee.com/${account}/mavenrepo.git`);

   > 或在 github 创建一个仓库，如`mavenrepo`(`https://github.com/${account}/mavenrepo.git`)；

在本地文件创建对应仓库：

```bash
mkdir /home/$(whoami)/.m2/mavenrepo
cd mavenrepo
git init
git add .
git config user.name "test"
git config user.email "test@abc.com"
git commit -m "提交xxx"
git remote add origin https://gitee.com/${account}/mavenrepo.git
```

> 稍微复杂点可以创建分支 snapshot 和 release，对应测试和生产环境

2. 本地文件部署进仓库：

在 pom.xml 中添加如下配置

```xml
<distributionManagement>
    <repository>
        <id>mavenrepo</id>
        <name>Personal Maven Repository</name>
        <url>file:${user.home}/.m2/mavenrepo</url>
    </repository>
</distributionManagement>
```

然后执行`mvn deploy`，或者使用[命令行](https://maven.apache.org/plugins/maven-deploy-plugin/deploy-mojo.html)方式：`mvn deploy -DaltDeploymentRepository=mavenrepo::file:/home/$(whoami)/.m2/mavenrepo`

:::info
一般无需在`build`里添加`maven-deploy-plugin`，要添加额外配置如：[Deploying With Network Issues](https://maven.apache.org/plugins/maven-deploy-plugin/examples/deploy-network-issues.html)

[Deployment with FTP](https://maven.apache.org/plugins/maven-deploy-plugin/examples/deploy-ftp.html)

[Deployment with external SSH](https://maven.apache.org/plugins/maven-deploy-plugin/examples/deploy-ssh-external.html)
:::

3. 提交：

```bash
cd mavenrepo
git push -u origin "master"
```

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
