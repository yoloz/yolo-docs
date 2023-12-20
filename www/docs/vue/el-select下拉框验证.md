```js
// ...
<el-form-item label="新闻类别" prop="typevalue">
  <el-select v-model="form.typevalue" placeholder="请选择新闻类别">
    <el-option v-for="item in this.typelist.options" :key="item.id" :label="item.title" :value="item.id" />
  </el-select>
</el-form-item>
// ...
```

> `v-model`绑定的数据要和上面的`prop`的名称一致;

`Form`的校验内置了`async-validator`，而它会给每个字段加一个默认的值为`string` 的 `type` 规则，即默认情况下字段必须是字符串型,所以如果不是字符串需要自己设置`type`, `trigger`要为`change`,如下：

```js
const infoRules =
  reactive <
  FormRules >
  {
    name: [
      {
        required: true,
        pattern: "[^ \x22]+",
        message: "名称不能为空",
        trigger: "blur",
      },
    ],
    cipherType: [
      {
        required: true,
        type: "number",
        message: "密码算法不能为空",
        trigger: "change",
      },
    ],
  };
```
