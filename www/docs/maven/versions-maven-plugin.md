## 修改版本号

模块结构如下：

```log
my-apps
│ └─pom.xml                         (1)
├─my-app-child1
│  └─pom.xml                        (2)
└─my-app-child2
   └─pom.xml                        (3)
```

在(1)pom.xml 中添加 versions-maven-plugin,(2)pom.xml、(3)pom.xml 不需要添加该插件：

```xml
<plugin>
    <groupId>org.codehaus.mojo</groupId>
    <artifactId>versions-maven-plugin</artifactId>
    <version>2.15.0</version>
</plugin>
```

进入 Maven 工程根目录，运行命令

```bash
mvn -f "pom.xml" versions:set -DoldVersion=* -DnewVersion=1.2.0-SNAPSHOT -DprocessAllModules=true -DallowSnapshots=true -DgenerateBackupPoms=true
```

:::note
processAllModules:是否更新目录下所有模块无论是否声明父子节点
:::

可以将 3 个项目（1 个父项目和 2 个子项目）的版本号一次性修改为 1.2.0-SNAPSHOT
简化版命令：

```bash
mvn versions:set -DnewVersion=1.2.0-SNAPSHOT -DprocessAllModules=true
```

## 回退版本号

`mvn versions:revert`
:::caution
注意设置 generateBackupPoms 为 true（默认值），才会有 pom.xml.versionsBackup 备份文件，否则没有备份文件无法回退版本号
:::

## 确认修改过的版本号

`mvn versions:commit`:查看修改后的 pom 文件，如果没有问题则进行确认，
该命令会删除修改版本号时生成的 pom 备份文件。

## 直接修改版本号，无需确认

设置 generateBackupPoms 为 false，则直接修改 pom，不会生成备份文件，也就不需要使用 commit 再次确认，但是也无法使用 revert 命令回退版本号。
