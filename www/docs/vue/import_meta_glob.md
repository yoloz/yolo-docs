## 背景

这里有动态菜单渲染，其配置文件单元如下:

```json
{
  "name": "数据库资源",
  "path": "database",
  "permission": "",
  "meta": {
    "icon": "icon-database-stroke",
    "type": 0,
    "hidden": false,
    "order": 0
  },
  "component": "helloworld.vue"
}
```

需要将其中 component 转化为：

```js
const loadComponent = (component: string) => {
  return () => import(`@/${component}`);
};
```

然而报错：

```log
The above dynamic import cannot be analyzed by Vite.
See https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations for supported dynamic import formats. If this is intended to be left as-is, you can use the /* @vite-ignore */ comment inside the import() call to suppress this warning.
```

:::info 解决
可以通过 glob 导入解决:

```js
const componentList = import.meta.glob([
  "@/xxxx/index.vue",
  "@/xxxx/blank-view.vue",
  "@/rbac/**/index.vue",
  "@/modules/**/index.vue",
]);

const loadComponent = (component: string) => {
  // return () => import(`@/${component}`)
  return componentList[`/src/${component}`];
};
```

:::

## Glob 导入

Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块：

```js
const modules = import.meta.glob("./dir/*.js");
```

以上将会被转译为下面的样子：

```js
// vite 生成的代码
const modules = {
  "./dir/foo.js": () => import("./dir/foo.js"),
  "./dir/bar.js": () => import("./dir/bar.js"),
};
```

你可以遍历 modules 对象的 key 值来访问相应的模块：

```js
for (const path in modules) {
  modules[path]().then((mod) => {
    console.log(path, mod);
  });
}
```

匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk。如果你倾向于直接引入所有的模块（例如依赖于这些模块中的副作用首先被应用），你可以传入 { eager: true } 作为第二个参数：

```js
const modules = import.meta.glob("./dir/*.js", { eager: true });
```

以上会被转译为下面的样子：

```js
// vite 生成的代码
import * as __glob__0_0 from "./dir/foo.js";
import * as __glob__0_1 from "./dir/bar.js";
const modules = {
  "./dir/foo.js": __glob__0_0,
  "./dir/bar.js": __glob__0_1,
};
```

更多信息参见文档:[https://cn.vitejs.dev/guide/features.html#glob-import](https://cn.vitejs.dev/guide/features.html#glob-import)

:::info

- `import.meta.globEager` 已经弃用，请使用 `import.meta.glob('*', { eager: true })` 来代替
- 片段和分隔符
  glob 里的分隔符是“/”，而片段是分隔符之间的东西
- 星号
  匹配任意数量的字符。比如`*.js`可以代表`a.js` 和 `b.js`，但不能代表`somedir/a.js`
- 双星号
  跨片段匹配任意数量的字符，如果单星号是匹配一个片段的话，双星号也可以理解为匹配任意数量片段。比如`scripts/**/*.js` 可以表示`script/index.js`, `script/dir1/index.js`, `script/dir1/dir2/index.js`
- 叹号
  放在 glob 的开头，用来排除符合该规则的文件`import.meta.glob(['./dir/*.js', '!**/bar.js'])`

:::
