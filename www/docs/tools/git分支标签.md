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

# 重命名分支
git branch -m new_branch_name
# 改名后重新关联远程仓库分支
git push -u origin "remote_branch_name"
```

清除远程分支的本地缓存(`remote ref does not exist`):

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

### commit id 创建分支

```bash
# 查看提交
$ git log
# 创建指定commit id 的本地分支
$ git checkout [commitId] -b <branchName>
```

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
git tag -d <tagname>  #删除本地tag
git tag -d $(git tag -l) #删除本地所有tag
git push origin --tags #本地(所有)标签同步到远程代码库
git push origin tag <tagname> #同步本地tag到远程仓库
git checkout tag_name #切换到tag,只读版本
git fetch origin tag <tagname> #获取远程tag
git push origin --delete tag <tagname> #删除远程tag
git push origin --delete tag $(git tag -l) #删除本地对应的远程tag
#从tag创建新的分支继续开发：git checkout -b 新分支 tag名
git checkout -b [newbranch] [tabname]
```

### commit id 创建 TAG

```bash
# 查看提交
$ git log
#命令git tag <name>用于新建一个标签，默认为HEAD，也可以指定一个commit id；
$ git tag -a v0.1 -m "version 0.1 released" 3628164
```

## merge

将两个或两个以上的开发历史加入(合并)一起

```bash
#合并分支fixes和enhancements在当前分支的顶部，使它们合并
$ git merge fixes enhancements
#合并obsolete分支到当前分支，使用ours合并策略
$ git merge -s ours obsolete
#将分支maint合并到当前分支中，但不要自动进行新的提交
$ git merge --no-commit maint
#将分支dev合并到当前分支中，自动进行新的提
$ git merge dev
```

:::caution
--no-commit:当您想要对合并进行进一步更改时，可以使用此选项，或者想要自己编写合并提交消息。应该不要滥用这个选项来潜入到合并提交中。小修补程序，如版本名称将是可以接受的。
:::
