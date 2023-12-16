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

## 本地先远程有仓库

本地有创建好的工程，然后远程创建仓库，本地提交到远程

```bash
cd <本地工程目录>
git init
git config user.name "username"
git config user.email "test@abc.com"
git add .
git commit -m "first commit"
# 默认master分支
git branch dev
git checkout dev
git remote add origin https://<remote respo>.git
git push -u origin "dev"
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

:::note

- fatal: refusing to merge unrelated histories, 添加`--allow-unrelated-history` 告诉 git 允许不相关历史合并
- `git pull def master:def1` 用于新建分支 def1，如果更新 def1 分支，则要先 checkout 到 def1 分支

:::

如想自定义分支 beats,首先在 github 上 fork(这里 Copy the main branch only 勾选上)

```bash
$ git clone git@github.com:xxx/beats.git
$ git remote -v
origin  git@github.com:xxx/beats.git (fetch)
origin  git@github.com:xxx/beats.git (push)
$ git remote add elastic https://github.com/elastic/beats.git
$ git remote -v
elastic https://github.com/elastic/beats.git (fetch)
elastic https://github.com/elastic/beats.git (push)
origin  git@github.com:xxx/beats.git (fetch)
origin  git@github.com:xxx/beats.git (push)

git fetch elastic tag v7.10.2
#通过tag创建分支
git checkout -b 7.10.2 v7.10.2

```
