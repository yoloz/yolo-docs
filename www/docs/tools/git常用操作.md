## new

```bash
git init -b <init-branch>
git remote add -f origin <repo>
git status
git add xxxx
git commit -am ""
#git config user.email[name]
git push --set-upstream origin <init-branch>
```

## clone

```bash
git clone [<options>] [--] <repo> [<dir>]
git clone -b branchName <repo> [<dir>]
```

### 部分文件

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

## commit

git 有一个**暂存区**(staging area), 可以放入新添加的文件或加入新的改动，commit 是将暂存区的代码提交到本地仓库，不是我们 disk 上的改动(disk 可见的是**工作区**)。
`git add .`会递归地将工作区的改动文件添加到本地的暂存区
`git commit -am "xxx"`中的 a 是 all 的意思

> -a, --all commit all changed files

## diff

```bash
git diff #工作目录中的文件和暂存区快照之间的差异，即修改后还没暂存起来(commit)的变化内容；
git diff --cached #已经暂存起来的文件和上次提交时的快照之间的差异；
git diff HEAD #工作目录中的文件和上次提交之间的改动；
git diff [version tag] #查看指定版本之后的改动；
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

### 重命名分支

先删除远程分支，然后重命名本地分支，再重新提交一个远程分支

```bash
git push --delete origin <branchName> #删除远程分支
git branch -m b1 new_b  #重命名本地分支
git push origin new_b   #推送本地分支
```

### 切分支出去

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

### 合并其他分支的某个 commit

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

## tag

我们常常在代码封板时,使用 git 创建一个 tag,这是一个不可修改的历史代码版本。

```bash
git tag -a V1.2 -m 'release 1.2' #创建了本地一个版本V1.2,并且添加了附注信息
git tag #查看tag
git show V1.2 #查看具体tag附注信息
git push origin --tags #标签同步到远程代码库
git checkout tag_name #切换到tag,只读版本
git fetch origin tag <tagname> #获取远程tag
git push origin --delete tag <tagname> #删除远程tag
#从tag创建新的分支继续开发：git checkout -b 新分支 tag名
git checkout -b [newbranch] [tabname]
```

## reset

git 撤销操作主要有如下方式:

- 拉取暂存区文件替换工作区文件 `git checkout file1 dir1...` ;
- 拉取版本库文件到暂存区, 不影响工作区 `git reset HEAD file1 dir1...` ;

## 更换仓库地址

查看远程仓库信息 `git remote -v`
本地仓库更换远程仓库地址

```bash
git remote rm origin
git remote add origin new_addr
#等价操作
git remote set-url origin new_addr
```

## 删除和重命名

```bash
git rm xxx          #将文件从索引和工作目录中都删除
git rm --cached xxx #删除索引中的文件并把它保留在工作目录中
git checkout xxx    #文件删除后的恢复
git mv f1  f2       #重命名,f2不存在
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

## 修改 commit

- 修改最近的一次 commit log，直接使用命令 `git commit --amend` 就可以完成修改啦

- 合并多个 commit 为一个完整 commit, 或者多分支合并时去除被合并分支的一些 commit

```bash
git log
#commit f711d30598620669a692a8115d1c798af66da311
#Author: abc <abc@gmail.com>
#Date:   Thu Jul 11 11:38:15 2019 +0800
#    commit提交说明
git rebase -i f711d30 #commit标志的前7位

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

- `git rebase -i [startpoint] [endpoint]` 其中-i 的意思是--interactive，即弹出交互式的界面让用户编辑完成合并操作，[startpoint][endpoint]则指定了一个编辑区间，如果不指定[endpoint]，则该区间的终点默认是当前分支 HEAD 所指向的 commit(注：该区间指定的是一个前开后闭的区间)。
- ^X 的^表示 ctrl, M-A 的 M 表示 alt
- 修改后(如将 pick 换成 f), ctrl+x 退出, 提示是否保存修改，选择 yes, 然后 enter 回车即可
- 修改 conflict，然后 push
- d 会删除这个 commit 以及相关的修改及添加的文件

## merge confilct

手动处理冲突文件：其中`<<<<<<< HEAD` 到 `=======` 中间的内容是 local 提交的，`=======`到 `>>>>>>> commit-id` 是远程仓库中的内容。

处理好后需要`git add conflictFile`，然后`commit`和`push`

## ssh 连接 github

[https://docs.github.com/cn/authentication/connecting-to-github-with-ssh](https://docs.github.com/cn/authentication/connecting-to-github-with-ssh)

1. 生成新 SSH 密钥（替换为您的 GitHub 电子邮件地址）`ssh-keygen -t ed25519 -C "your_email@example.com"`
2. 将 SSH 公钥复制到剪贴板`clip < ~/.ssh/id_ed25519.pub`,然后登录 github 添加；
