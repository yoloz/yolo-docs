## 检出(checkout)

```bash
svn co [--revision] http(svn)://路径(目录或文件的全路径) [本地目录全路径] [--username 用户名] [--password 密码]
```

:::note

- checkout 简写 co;
- 初次操作 svn 时，不带 username, password 会提示输入用户信息，然后系统会记录下来，以后使用如果没带 username 则使用原先记录的；命令中带 username 则使用命令中的用户；
- 不带--password 参数传输密码会提示输入密码，建议不要用明文的--password 选项；
- username 与 password 前是两个短线，不是一个;
- 不指定本地目录，则检出到当前目录下;
- --revision 参数(检出具体版本)位置也可以放后面，如:

```bash
svn checkout http://siphon.googlecode.com/svn/trunk/ siphon -r r791  #-r [--revision]
svn checkout -r r791 http://siphon.googlecode.com/svn/trunk/ siphon
```

:::

### 检出不包括源文件夹目录

比如我要 checkout trunk/下面的所有文件，但是不包括 trunk 文件夹，可以在 svn 文件夹后面打个空格再加个“.”就行了，如
`svn co http://192.168.1.10/svn/project/trunk/ . /home/DSP-OPEN`

## 更换 svn 帐号

- 临时更换, 命令中带上--username 选项；
- 全局更换 `svn propset --username xxx` ；

## 创建 branch

```bash
svn cp http://example.com/repos/myproject/trunk http://example.com/repos/myproject/branches/xxx_xxx -m 'create branch xxx_xxx'
```

:::note
copy 简写 cp, -m: 描述信息
:::

其实 SVN 并没有 Branch 的内部概念。我们只是创建了一个 repo 的副本，并自己赋予这个副本作为 Branch 的意义，这与 git 中的 Branch 有很大不同。  
需要注意的是 Branch 和 Trunk 使用同一套版本号，也就是说无论在 Branch 还是 Trunk 的提交都会引起主版本号的增加。这是因为 svn copy 只支持同一个 repository 内的文件 copy，并不支持跨 repository 的 copy，所以新创建的 Branch 和 Trunk 都属于同一个 repository。

## 合并

假设现在 Branch 上 fix 了一系列的 bug，现在我们想把针对 Branch 的改变同步到 Trunk 上。
1, 保证当前 Branch 分支是 clean 的，也就是说使用 svn status 看不到任何的本地修改。
2, 命令行下切换到 Trunk 目录中 `cd /xxxx/trunk` ，使用 `svn merge http://example.com/repos/myproject/branches/xxx_xxx` 来将 Branch 分支上的改动 merge 回 Trunk 下。
3, 如果出现 merge 冲突则进行解决，然后执行 `svn ci -m 'description'` 来提交变动。

> commit 简写 ci

### 指定合并版本

指定 Branch 上那些版本变更可以合并到 Trunk 中

```bash
svn merge  http://example.com/repos/myproject/branches/xxx_xxx -r150:HEAD
```

将 Branch 的从版本 150 到当前版本的所有改动都合并到 Trunk 中。

> 将 Trunk 中的某些更新合并到 Branch 中方法同上，切换到 Branch 目录中 `cd /xxxx/branches/xxx_xxx` , 然后执行 `svn merge http://example.com/repos/myproject/trunk`

### 查看合并情况

使用 svn mergeinfo 来查看 merge 情况.
查看当前 Branch 中已经有那些改动被合并到 Trunk 中:

```bash
cd /xxx/trunk
svn mergeinfo http://example.com/repos/myproject/branches/xxx_xxx
```

查看 Branch 中那些改动还未合并

```bash
cd /xxx/trunk
svn merginfo http://example.com/repos/myproject/branches/xxx_xxx --show-revs eligible
```

> Trunk 中的更新合并到 Branch 情况查看同上。

## 更换地址

```bash
svn sw --relocate old_addr new_addr
```

> switch 简写 sw

查看 svn 信息 `svn info`

## 忽略文件

```bash
svn ps svn:ignore *.class .
svn ps svn:ignore -R -F .svnignore .
```

> propset PROPNAME PROPVAL PATH...

svn:ignore A list of file glob patterns to ignore, one per line.
-F [--file] ARG: read property value from file ARG  
-R [--recursive] : descend recursively, same as --depth=infinity

.svnignore 文件中定义多个忽略文件及目录

```java
*.class
.idea
*.impl
```

## svn revert

恢复整个目录 `svn revert Dir .`
