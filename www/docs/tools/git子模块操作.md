当项目比较复杂，部分代码希望独立为子模块进行版本控制时，可以使用 git submodule 功能(主项目对子模块有依赖关系，却又并不关心子模块的内部开发流程细节)。

使用 git submodule 功能时，主项目仓库并不会包含子模块的文件，只会保留一份子模块的配置信息及版本信息，作为主项目版本管理的一部分。

## 创建 submodule

:::note
假定我们有两个项目：project-main 和 project-sub-1，其中 project-main 表示主项目，而 project-sub-1 表示子模块项目。

其中 project-main 的远程仓库地址为 `https://github.com/username/project-main.git`，而 project-sub-1 的远程仓库地址为 `https://github.com/username/project-sub-1.git`。

接下来，我们希望在 project-main 中添加 project-sub-1 ，而又保持 project-sub-1 自身独立的版本控制。
:::

进入项目 `project-main` ，输入`git submodule add <submodule_url>`,此时项目仓库中会多出两个文件：`.gitmodules`(文件已经存在，则内部添加内容) 和 `project-sub-1`。内容如下：

```log
[submodule "project-sub-1"]
path = project-sub-1
url = https://github.com/username/project-sub-1.git
```

此时在 `.git/config` 文件中也会多出一些信息，在 `.git/modules` 文件夹下也会多出一份内容。
:::info
通常此时可以使用 git commit -m "add submodule xxx" 提交一次，表示引入了某个子模块。提交后，在主项目仓库中，会显示出子模块文件夹，并带上其所在仓库的版本号。
:::

## 获取 submodule

上述步骤在创建子模块的过程中，会自动将相关代码克隆到对应路径，但对于后续使用者而言，对于主项目使用普通的 `clone` 操作并不会拉取到子模块中的实际代码。

使用命令`git clone https://github.com/username/project-main.git` 完成后 `project-main/project-sub-1` 文件夹是空的。

如果希望子模块代码也获取到，一种方式是在克隆主项目的时候带上参数：`git clone --recursive https://github.com/username/project-main.git`。

另外一种可行的方式是，在当前主项目中执行：

```bash
git submodule init
git submodule update
```

则会根据主项目的配置信息，拉取更新子模块中的代码。

## 更新 submodule

在不同场景下子模块的更新方式如下：

- 对于子模块，只需要管理好自己的版本，并推送到远程分支即可；
- 对于父模块，若子模块版本信息未提交，需要更新子模块目录下的代码，并执行 commit 操作提交子模块版本信息；
- 对于父模块，若子模块版本信息已提交，需要使用 git submodule update ，Git 会自动根据子模块版本信息更新所有子模块目录的相关代码。

## 删除 submodule

:::note
一种比较野的做法，不建议使用：主要步骤是直接移除模块，并手动修改 `.gitmodules`、`.git/config` 和 `.git/modules` 内容。包含了一大堆类似 `git rm --cached <sub-module>`、`rm -rf <sub-moduel>`、`rm .gitmodules` 和 `git rm --cached` 之类的代码。
:::
根据官方文档的说明，应该使用 `git submodule deinit` 命令卸载一个子模块。这个命令如果添加上参数 `--force`，则子模块工作区内即使有本地的修改，也会被移除。

```bash
git submodule deinit project-sub-1
git rm project-sub-1
```

可以提交代码：`git commit -m "delete submodule project-sub-1"`,至此完成对子模块的删除。
