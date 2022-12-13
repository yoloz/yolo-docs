为了演示或者其他，存在对页面某些信息快速进行修改。build 后的内容手动修改不现实，因此需要创建一个文件，并在打包的时候不会进行编译。

- vue-cli 2.0 的写法是在 static 文件下创建 js
- vue-cli 3.0 的写法是在 public 文件夹下创建 js

具体操作如下(public 为例):

1. 在 public 文件夹下创建 config.js 文件填写常量，如:

```js
export const about = {
  //版本号
  pVersion: '1.0',
  //产品名称
  pName: '测试系统',
  //产品型号
  pModel: 'T-test/V1.0',
  //产品编号
  pNum: '',
  //构建标识
  buildId: '',
}
```

2. vue 文件中引入，如

```js
import { about } from '../../../../public/about.js'
//../ 的层级即此文件与public的深度(相对路径)

export default {
  data() {
    return {
      pName: about.pName,
      pModel: about.pModel,
      pNum: about.pNum,
      buildId: about.buildId,
      acode: '',
      activeLoading: false,
    }
  }
}
```
