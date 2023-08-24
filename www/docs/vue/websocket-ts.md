[websocket-ts:github](https://github.com/jjxxs/websocket-ts)

WebSocket 是一种在客户端和服务器之间进行全双工通信的协议。它提供了一种实时、持久的连接方式，可以用于实现实时数据更新、即时通讯等功能。在 Vue 3 中，可以通过 WebSocket API 来实现与服务器的 WebSocket 连接。

## 安装依赖

```bash
$ npm install websocket-ts
```

## 创建 WebSocket 实例

在 Vue 3 中，可以在组件中通过 setup 函数创建 WebSocket 实例，并将其添加到组件的上下文中

```js
import { WebsocketBuilder } from "websocket-ts";

import { useMenuStore } from "@/stores/menuStore";

export const ws = new WebsocketBuilder(import.meta.env.VITE_SOCKET_SERVER_URL)
  .onMessage((_ins, e) => {
    const { updateRouterMenu } = useMenuStore();
    const obj = JSON.parse(e.data);
    if (obj.type === "routerMenu") {
      updateRouterMenu(obj.data);
    }
  })
  .onError((_ins, e) => {
    // eslint-disable-next-line no-console
    console.warn("websock has error..." + e);
  })
  // .withBackoff(new ConstantBackoff(100))
  .build();
```

## 发送消息

```js
async function wsload(userId: number, ref: Ref<any>) {
  if (ws.underlyingWebsocket?.readyState === ws.underlyingWebsocket?.OPEN) {
    ws.send("routerMenu_" + userId);
  } else if (
    ws.underlyingWebsocket?.readyState === ws.underlyingWebsocket?.CONNECTING
  ) {
    ws.addEventListener(WebsocketEvents.open, (i, e) => {
      i.send("routerMenu_" + userId);
    });
  } else {
    return new Error("WS connection error...");
  }
  return waitRouterMenu(ref);
}
```

> 浏览器刷新 websocket 会重新建立连接，状态是 CONNECTING，需要添加 OPEN 事件;

## 清理和销毁

```js
<script lang="ts" setup>
import { onBeforeUnmount } from 'vue';
import { ws } from '上文ts文件'
//...
// 添加了backoff,关闭后仍会自动创建连接
onBeforeUnmount(() => {
  if (ws && ws.underlyingWebsocket?.readyState === WebSocket.OPEN) {
     ws.close();
  }
});
//...
</script>
```
