## 安装依赖

```bash
$ pnpm i mockjs vite-plugin-mock @types/mockjs -D
```

## 修改 vite.config.ts

```js
import { viteMockServe } from "vite-plugin-mock";
//...

const localEnabled: boolean = (process.env.VITE_USE_MOCK as unknown as boolean) || false;
const prodEnabled: boolean = (process.env.USE_CHUNK_MOCK as unknown as boolean) || false;

// https://vitejs.dev/config/
export default ({ mode }: any) =>
  defineConfig({
    //...
    plugins: [
      vue(),
      //...
      viteMockServe({
        // 具体配置可见：https://www.viterc.cn/en/vite-plugin-mock.html
        mockPath: "./src/mock",
        localEnabled: localEnabled,  // 开发打包开关
        prodEnabled: prodEnabled, // 生产打包开关
        supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
        watchFiles: true, // 监视文件更改
      }),
    ],
    // ...
  });
```

:::note

- 'localEnabled' does not exist in type 'ViteMockOptions',查看源代码[vbenjs/vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock),发现开关统一到一个 enable 属性中，没有 localEnabled 和 prodEnabled 了

:::

## 启用 mock 配置

process.env.VITE_USE_MOCK 的定义， 有两种方案：

- 安装 `npm install cross-env -D` 然后修改 package.json：

```json
// package.json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "dev:mock": "cross-env USE_MOCK=true vite",
    "build:mock":"cross-env USE_CHUNK_MOCK=true vite build"
  }
```

- 在根目录添加`.env.development`文件添加配置：

```txt
# Whether to open mock
VITE_USE_MOCK = true
USE_CHUNK_MOCK = false
```

## 修改 axios 入口

```js
//...
const httpRequest = new HttpRequest();

httpRequest.instance.defaults.baseURL = import.meta.env.VITE_BASE_URL;
httpRequest.instance.defaults.timeout = 10000;

httpRequest.instance.interceptors.request.use(
  (config: any) => {
    //...
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

httpRequest.instance.interceptors.response.use(
  (result: any) => {
    //...
    return result;
  },
  (error: any) => {
    // ...
    return Promise.reject(error);
  }
);

export default httpRequest;
```

## 定义 mock 数据文件

一般直接在根目录下创建 mock 文件夹，然后里面创建 index.ts 及 data 目录

```js
import { MockMethod } from 'vite-plugin-mock'

import { menuList } from './data/menuList'

export default [
    {
        url: '/menu/list',
        method: 'get',
        response: ({ query }) => {
            return {
                code: 200,
                data: menuList
            }
        }
    }
] as MockMethod[]
```

## 生成数据

```js
import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

const userList = mockJS.mock({
  "list|34": [
    {
      name: "@cname", //  随机生成姓名, 并且不重复
      "id|+1": 1, // id自增一
      entryData: Random.date("yyyy-MM-dd"),
      "postion|1": [
        "研发部经理",
        "前端开发工程师",
        "后端开发工程师",
        "测试工程师",
        "产品经理",
        "UI设计师",
        "架构师",
        "运维工程师",
      ],
      "salary|1000-2000": 1000, // 薪资
      "phone": /^1(3|4|5|6|7|8|9)[0-9]\d{8}$/,// 随机生成电话号码
      "email": "@email"，// 随机生成邮箱
      "sex|1": ["男", "女"],// 随机获取一个值
      "age|18-35": 0,// 随机生成年龄，值在18-35之间
      "address": "@city"// 随机生成城市名称

    }
  ]
})

export default [
    {
        url: '/user/list',
        method: 'post',
        response: () => {
            return {
                code: 200,
                data: {
                    totalRow: 100,
                    list: [...userlist]  //userlist已经含有list
                }
            }
        }
    }
] as MockMethod[]
```
