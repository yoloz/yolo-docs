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

> 执行`git cherry-pick ..proto_update`报错：`fatal: bad revision '..proto_update'`。原因是本地没有 proto_update 分支的代码，应先拉取该分支的代码:`git fetch --all`，此时如果执行后还报错，可以手动切到分支`git checkout proto_update`，再切回来执行即可。

> 应用另一个分支的部分修改时用`git cherry-pick`,需要合并整个分支时用`git merge`

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

## reset

用于回退版本，可以指定退回某一次提交的版本:`git reset [--soft | --mixed | --hard] [HEAD]`
:::info HEAD

- HEAD 表示当前版本
- HEAD^ 上一个版本
- HEAD^^ 上上一个版本
- HEAD^^^ 上上上一个版本

以此类推，也可以使用 ～数字表示

- HEAD~0 表示当前版本
- HEAD~1 上一个版本
- HEAD^2 上上一个版本
- HEAD^3 上上上一个版本

以此类推
:::

`git reset HEAD` 命令用于取消已缓存的内容,即取消之前 git add 添加。

- --mixed 为默认，可以不用带该参数，用于重置暂存区的文件与上一次的提交(commit)保持一致，工作区文件内容保持不变。

```bash
$ git reset HEAD^            # 回退所有内容到上一个版本
$ git reset HEAD^ hello.php  # 回退 hello.php 文件的版本到上一个版本
$ git reset  052ex34           # 回退到指定版本
```

- --soft 参数用于回退到某个版本

```bash
$ git reset --soft HEAD~3   # 回退上上上一个版本
```

- --hard 参数撤销工作区中所有未提交的修改内容，将暂存区与工作区都回到上一次版本，并删除之前的所有信息提交

```bash
$ git reset --hard HEAD~3  # 回退上上上一个版本
$ git reset --hard bae128c  # 回退到某个版本回退点之前的所有信息。
$ git reset --hard origin/master    # 将本地的状态回退到和远程的一样
```

:::caution
谨慎使用 –-hard 参数，它会删除回退点之前的所有信息
:::

## pull

`git pull` 其实就是 `git fetch` 和 `git merge FETCH_HEAD` 的简写.命令格式：`git pull <远程主机名> <远程分支名>:<本地分支名>`

```bash
#将远程主机 origin 的 master 分支拉取过来，与本地的 brantest 分支合并
$ git pull origin master:brantest
#如果远程分支是与当前分支合并，则冒号后面的部分可以省略
$ git pull origin master
```

### stash

```bash
# error: Your local changes to the following files would be overwritten by merge:
#         ...
# Please commit your changes or stash them before you merge.
# Aborting

# 保存当前工作进度，能够将所有未提交的修改保存至堆栈中，用于后续恢复
$ git stash
# 把服务器仓库的更新拉到本地仓库中
$ git pull
# 刚才stash到本地栈中的代码pop到本地
$ git stash pop
```

> `git stash apply`: 使用 apply 恢复，stash 列表中的信息是会继续保留的，而使用 pop 恢复，会将 stash 列表中的信息进行删除;
>
> `git stash list`：存储到本地栈顶以后，你可以使用 git stash list 查看你本地存储的 stash 日志;
>
> `git stash clear`: 清空 git 栈，原来 stash 的节点都会被清除;

## push

将本地的分支版本上传到远程并合并。命令格式`git push <远程主机名> <本地分支名>:<远程分支名>`,如果本地分支名与远程分支名相同，则可以省略冒号：`git push <远程主机名> <本地分支名>`

```bash
#将本地的 master 分支推送到 origin 主机的 master 分支
$ git push origin master
$ git push origin master:master
#如果本地版本与远程版本有差异，但又要强制推送可以使用 --force 参数
git push --force origin master
```

## diff

```bash
git diff #工作目录中的文件和暂存区快照之间的差异，即修改后还没暂存起来(commit)的变化内容；
git diff --cached #已经暂存起来的文件和上次提交时的快照之间的差异；
git diff HEAD #工作目录中的文件和上次提交之间的改动；
git diff [version tag] #查看指定版本之后的改动；
```
