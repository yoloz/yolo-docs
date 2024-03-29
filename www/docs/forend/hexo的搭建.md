## 环境准备

### 搭建 nodejs 环境

---

初次需要创建仓库【username】.github.io;

创建一个分支存放原始文件，方便跨机操作；

---

### 拉取远程仓库【分支】到本地

```bash
git clone -b 【分支】 https://github.com/user/user.github.io.git 【仓库目录】
```

### 安装 hexo

```bash
npm install hexo-cli -g
```

---

初次搭建需初始化:

```bash
hexo init 【临时目录】
cp -rf 【临时目录】/* 【仓库目录】
```

---

### 继续完成安装

```bash
cd 【仓库目录】
npm install
```

执行 `hexo server` 通过浏览器即可访问博客了;

## 自定义

打开 themes/landscape 中修改相关文件，具体可参考互联网;

## hexo 的使用

git 部署发布: `hexo generate --deploy`

> ERROR Deployer not found: git，执行`npm install hexo-deployer-git`即可

更多信息参见[hexo](https://hexo.io/zh-cn/docs/index.html)

## 问题

`hexo generate --deploy` 报错:

- ERROR Deployer not found: git

安装 hexo-deployer-git `npm install hexo-deployer-git`

- fatal: unable to auto-detect email address

```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

如果不想设置全局变量，可以单独设置:

```bash
cd .deploy_git/
git config user.name "Your Name"
git config user.email "you@example.com"
```
