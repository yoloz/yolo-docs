## clone

```bash
git clone [<options>] [--] <repo> [<dir>]
git clone -b branchName <repo> [<dir>]
```

### 使用 ssh 拉取

[https://docs.github.com/cn/authentication/connecting-to-github-with-ssh](https://docs.github.com/cn/authentication/connecting-to-github-with-ssh)

1. 生成新 SSH 密钥（替换为您的 GitHub 电子邮件地址）`ssh-keygen -t ed25519 -C "your_email@example.com"`
2. 将 SSH 公钥复制到剪贴板`clip < ~/.ssh/id_ed25519.pub`,然后登录 github 添加；

### 指定克隆文件

对拉取耗时影响不大，本地还是会拉取全部元数据

Sparse Checkout 模式:

```bash
# 指定远程仓库
mkdir project_folder
cd project_folder
git init
git remote add -f origin <repo>

# 指定克隆模式
git config core.sparsecheckout true

# 指定克隆的文件夹(或者文件)
echo "libs" >> .git/info/sparse-checkout
echo "apps/register.go" >> .git/info/sparse-checkout
echo "resource/css" >> .git/info/sparse-checkout

# 拉取远程文件
git pull origin master

```

## 更换仓库地址

查看远程仓库信息 `git remote -v`

本地仓库更换远程仓库地址

```bash
git remote rm origin
git remote add origin new_addr
#等价操作
git remote set-url origin new_addr
```

## commit

git 有一个**暂存区**(staging area), 可以放入新添加的文件或加入新的改动，commit 是将暂存区的代码提交到本地仓库，不是我们 disk 上的改动(disk 可见的是**工作区**)。

`git add .`会递归地将工作区的改动文件添加到本地的暂存区

`git commit -am "xxx"`中的 a 是 all 的意思

> -a, --all commit all changed files

### 撤销 commit

修改了本地的代码，然后使用：

```bash
git add file
git commit -m '修改原因'
```

执行 commit 后，还没执行 push 时，想要撤销这次的 commit，该怎么办？

使用命令：`git reset --soft HEAD^`，这样就成功撤销了 commit，如果想要连着 `add` 也撤销的话，`–soft` 改为`–hard`（删除工作空间的改动代码）。
:::info 命令详解

- HEAD^ 表示上一个版本，即上一次的 commit，也可以写成 HEAD~1,如果进行两次的 commit，想要都撤回，可以使用 HEAD~2
- –soft 不删除工作空间的改动代码，撤销 commit，不撤销 git add file
- –hard 删除工作空间的改动代码，撤销 commit 且撤销 add

:::

### 修改 commit

- 修改最近的一次 commit log，直接使用命令 `git commit --amend` 就可以完成修改
- 合并多个 commit 为一个完整 commit, 或者多分支合并时去除被合并分支的一些 commit

```bash
$ git log
#commit f711d30598620669a692a8115d1c798af66da311
#Author: abc <abc@gmail.com>
#Date:   Thu Jul 11 11:38:15 2019 +0800
#    commit提交说明
#....
$ git rebase -i f711d30 #commit标志的前7位

#pick e157f87 Initial commit
#pick f711d30 2019-07-11 11:38:15
#pick e04d2b0 2019-07-11 11:40:52

# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit

```

:::info
`git rebase -i [startpoint] [endpoint]` 其中-i 的意思是--interactive，即弹出交互式的界面让用户编辑完成合并操作，[startpoint][endpoint]则指定了一个编辑区间，如果不指定[endpoint]，则该区间的终点默认是当前分支 HEAD 所指向的 commit(注：该区间指定的是一个前开后闭的区间)。
:::

### 合并 commit

需要将其他分支的某一次提交合入到本地当前分支上使用`git cherry-pick commitid`
如果在 git cherry-pick 后加一个分支名，则表示将该分支顶端提交进 cherry-pick 如：`git cherry-pick <branchname>`

- `git cherry-pick ..<branchname>`和 `git cherry-pick ^HEAD <branchname>`
  以上两个命令作用相同，表示应用所有提交引入的更改，这些提交是 branchname 的祖先但不是 HEAD 的祖先(即当前分支)，比如，现在我的仓库中有三个分支，其提交历史如下图：

```log
               C<---D<---E  branch2
              /
master   A<---B
              \
               F<---G<---H  branch3
                         |
                         HEAD
```

如果我使用`git cherry-pick ..branch2`或者`git cherry-pick ^HEAD branch2`,那么会将属于 branch2 的祖先但不属于 branch3 的祖先的所有提交引入到当前分支 branch3 上，并生成新的提交，执行后的提交历史如下：

```log

               C<---D<---E  branch2
              /
master   A<---B
              \
               F<---G<---H<---C<---D<---E  branch3
                                        |
                                        HEAD
```

### merge confilct

手动处理冲突文件：其中`<<<<<<< HEAD` 到 `=======` 中间的内容是 local 提交的，`=======`到 `>>>>>>> commit-id` 是远程仓库中的内容。

处理好后需要`git add conflictFile`，然后`commit`和`push`

## revert

有时候提交了很多 commit,而版本包打在之前的某个 commit 上(未 branch 或 tag),这时候需要仅在此版本上修复问题。

```bash
#revert可以理解将指定的commit修改从此分支上撤回放到本地仓库
$ git revert b3e1314 f53e844...
```

修改后，此时本地仓库已经有先前 revert 几次的 commit,需要撤销这些 commit 直接到最新代码状态

```bash
#几次commit就写几次，下文3仅示例
$ git reset --soft HEAD~3
```

## branch

```bash
git branch  #查看本地分支
git branch -r #查看远程分支
git branch -a #查看所有分支

git branch <branchName> #本地创建新分支
git checkout xx  #切换到分支xx
git checkout -b <branchName> #创建分支的同时切换到该分支上
git merge <branchName>  #合并某分支到当前分支

git push origin <branchName>  #将新分支推送到远程repo上

git branch -d <branchName>  #删除本地分支
git push origin --delete <branchName> #删除远程分支
```

:::note

```bash
$ git push origin --delete 3.2
error: unable to delete '3.2': remote ref does not exist
error: failed to push some refs to 'https://xxxx.git'
#解决方案是清除远程分支的本地缓存
$ git fetch -p origin
From https://xxxxxx
 - [deleted]         (none)     -> origin/3.2
$ git branch -a
  darkTheme
* master
  remotes/origin/darkTheme
  remotes/origin/master
$
```

:::

### 重命名分支

先删除远程分支，然后重命名本地分支，再重新提交一个远程分支

```bash
git push --delete origin <branchName> #删除远程分支
git branch -m b1 new_b  #重命名本地分支
git push origin new_b   #推送本地分支
```

重命名分支提交，然后本分支继续开发

```bash
git branch -m thisBranch otherBranch
git push origin otherBranch  #留存老版到仓库
git checkout thisBranch  #切换thisBranch继续开发
```

### 创建一个干净的分支

不继承任何提交没有父节点，而上文的 `git checkout xx` 创建的分支 xx 是有父节点的，包含了历史提交。流程如下：

1. 创建干净的分支 `git checkout --orphan xx` ；
2. 删除工作目录中其他分支存在的内容 `git rm -rf .` ;
3. 给分支 xx 添加内容 `git add file1 file2...` ;
4. 提交到本地仓库 `git commit -m "something"` ;
5. 推送到远程仓库 `git push origin xx` ;

## tag

我们常常在代码封板时,使用 git 创建一个 tag,这是一个不可修改的历史代码版本。

```bash
git tag -a V1.2 -m 'release 1.2' #创建了本地一个版本V1.2,并且添加了附注信息
git tag #查看tag
git show V1.2 #查看具体tag附注信息
git push origin --tags #标签同步到远程代码库
git checkout tag_name #切换到tag,只读版本
git tag -d <tagname>  #删除本地tag
git fetch origin tag <tagname> #获取远程tag
git push origin --delete tag <tagname> #删除远程tag
#从tag创建新的分支继续开发：git checkout -b 新分支 tag名
git checkout -b [newbranch] [tabname]
```

## diff

```bash
git diff #工作目录中的文件和暂存区快照之间的差异，即修改后还没暂存起来(commit)的变化内容；
git diff --cached #已经暂存起来的文件和上次提交时的快照之间的差异；
git diff HEAD #工作目录中的文件和上次提交之间的改动；
git diff [version tag] #查看指定版本之后的改动；
```

## 未拉取本地代码提交

```bash
git init -b <init-branch>
git remote add -f origin <repo>
git status
git add xxxx
git commit -am ""
#git config user.email[name]
git push --set-upstream origin <init-branch>
```

## 多仓库工作

github 和码云同时维护, 代码在 github 上

```bash
cd repositoriesDir
git remote -v
#origin https://github.com/yoloz/abc.git (fetch)
#origin https://github.com/yoloz/abc.git (push)
git remote add def https://gitee.com/user/def.git
git remote -v
#def https://gitee.com/user/def.git (fetch)
#def https://gitee.com/user/def.git (push)
#origin https://github.com/yoloz/abc.git (fetch)
#origin https://github.com/yoloz/abc.git (push)
git pull def master:def1  #pull def中的master分支到本地def1分支
#报错refusing to merge unrelated histories，后面添加选项--allow-unrelated-history
git checkout def1 #change branch to def1
git merge master [--allow-unrelated-history] #拷贝本地master分支到本地def1分支中
git push def1 def:master  #push 本地def1分支到def中的master分支
```

fatal: refusing to merge unrelated histories 添加
`--allow-unrelated-history` 告诉 git 允许不相关历史合并
`git pull def master:def` 用于新建分支，如果更新 def 分支，则要先 checkout 到 def 分支

```

```
