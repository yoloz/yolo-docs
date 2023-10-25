## 查看当前地址：

```bash
$ npm config get registry
# https://registry.npmjs.org/

$ npm config get disturl
# undefined
```

## 设置地址

- 设置当前地址（设置为淘宝镜像）`npm config set registry http://registry.npm.taobao.org/`
- 设置当前地址（设置为默认地址）`npm config set registry https://registry.npmjs.org/`
- 每次执行命令前加入–registry 指定仓库路径`npm --registry https://registry.npm.taobao.org install`
