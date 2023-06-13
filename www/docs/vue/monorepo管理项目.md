## 介绍

Monorepo(monolithic repository) 是管理项目代码的一个方式，指在一个项目仓库 (repo) 中管理多个模块/包 (package)，不同于常见的每个模块建一个 repo。目前不少大型开源项目采用了这种方式，如 Babel、React、Vue 等。monorepo 管理代码只要搭建一套脚手架，就能管理（构建、测试、发布）多个 package。

:::info 背景
公司开发门户网站系统，对此我们需要开发前端展示界面和后台资源维护管理界面两套前端 UI。

- 前端内容界面
- 后台资源管理界面
  由于两套界面风格差异较大，混合在一起不易维护，所以常规的做法就是建两个仓库，如：`website`，`management`。但是在这两个项目中，我们都采用了 vue3+vite+element 架构，都是用 axios 进行请求，组件存在复用性，以及一些常用的 utils 类。对此常规的多仓库开发模式就会存在一定的重复性工作。

在此场景下我们使用单仓库多项目 Monorepo 的方式来开发。
:::

## 创建 Monorepo

- 初始化项目:`pnpm init`
- 创建 pnpm-workspace.yaml 文件，定义如下：

```log
packages:
  - "packages/**"
  - "projects/**"
```

:::note

- packages 下放公共复用代码
- projects 下放项目

当前项目结构

```log
├── packages
├── projects
├── package.json
├── pnpm-workspace.yaml
```

:::

## 创建项目 projects

以下项目都使用 Vue3、Vite、TypeScript 和 Element-Plus 搭建框架。可以自由搭建，看自己需求和偏好。

### 创建 management 后台管理项目（Vite+TypeScript+Element-Plus）

cd 到 project，使用 npm 命令行一键安装 vite+ts

```bash
cd project

npm init vite@latest management -- --template vue-ts
```

修改当前 management 名称（name），@g6 用作组织名称（可任意取），方便各个项目之间互相导入使用，package.json 如下：

```json
{
  "name": `@g6/management`
  // ...
}
```

安装 element-Plus

```bash
pnpm add element-plus
or
pnpm add element-plus -w # 安装到工作区（根目录），下一个项目就能使用到 element-plus
```

运行，查看是否成功：`pnpm dev`

:::info 提取公共依赖

- 拷贝 management 依赖 `package.json` 内容到工作区（根目录）`package.json`;
- 在工作区（根目录）package.json 新增 script 脚本，用于启动和编译项目

```json
"scripts": {
"mg:dev": "pnpm run -F @g6/management dev",
"mg:build": "pnpm run -F @g6/management build",
// ...
}
```

删除 management 下 `node_modules` 目录，重新安装依赖验证是否提取公共依赖成功

```bash
cd ../.. # 回到根目录
pnpm i # 初始化所有工作区依赖
pnpm run mg:dev # 运行 management
```

:::

安装 management 成功

### 创建 website 后台管理项目（Vite+TypeScript+Element-Plus）

同安装 management 一样，记得将 name 修改，提取公用依赖。

此时，management 和 website 都能正常运行使用，并且各自的 package.json 中相同依赖提取到根目录(工作空间)，如有不共用则各自安装在各自内部即可。

## 创建公共内容 packages

packages 下这里主要是用来存放公共内容，比如 utils、hooks、components 等等。下面主要使用 utils 做一个示例。

创建 utils 文件夹，并初始化

```log
├── packages
| ├── utils
```

```bash
cd packages/utils

pnpm init
```

同理，编辑 package.json 名称:

```json
{
  "name": `@g6/utils`
  // ...
}
```

当前根目录新建 index.ts 编写测试函数，并修改 package.json 中的 main 字段：

```json
{
  // ...
  "description": "",
  "main": "index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
  //...
}
```

index.ts:

```ts
/**
 * 测试名称
 * @returns
 */
export const testName = (): string => {
  return "Hello Utils";
};
```

到此写完一个测试 utils 包了，下面开始测试：

- 在 management 中安装 utils：`pnpm add -F @g6/management @g6/utils`;
- 修改 app.vue 内容：

```js
<script setup lang="ts">
import { testName } from "@g6/utils";
</script>

<template>
  <h2>{{ testName() }}</h2>
</template>
```

- 运行，查看

```bash
pnpm -w run mg:dev # -w 根目录
```
