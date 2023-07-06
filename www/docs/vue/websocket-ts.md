[websocket-ts:github](https://github.com/jjxxs/websocket-ts)

WebSocket 是一种在客户端和服务器之间进行全双工通信的协议。它提供了一种实时、持久的连接方式，可以用于实现实时数据更新、即时通讯等功能。在 Vue 3 中，可以通过 WebSocket API 来实现与服务器的 WebSocket 连接。

## 安装依赖

```bash
$ npm install websocket-ts
```

## 创建 WebSocket 实例

在 Vue 3 中，可以在组件中通过 setup 函数创建 WebSocket 实例，并将其添加到组件的上下文中

```js
import { ref } from 'vue'
import { WebsocketBuilder, ConstantBackoff } from 'websocket-ts'

interface Message<T> {
    type: number
    message: T

}

class Messages {
    private messages: Message<any>[]

    constructor(messages: any) {
        this.messages = messages
    }

    public getMessage(type: number): Message<any> | undefined {
        for (let i = 0; i < this.messages.length; i++) {
            const message = this.messages[i]
            if (message.type === type) {
                return message
            }
        }
        return undefined
    }

    public setMessage(message: Message<any>) {
        let exist = false
        for (let i = 0; i < this.messages.length; i++) {
            const msg = this.messages[i]
            if (msg.type === message.type) {
                this.messages[i] = message
                exist = true
                break
            }
        }
        if (!exist) {
            this.messages.push(message)
        }
    }
}

export const messages = ref<Messages>()

export const ws = new WebsocketBuilder(import.meta.env.VITE_SOCKET_SERVER_URL)
    .onMessage((i, e) => { messages.value?.setMessage(e.data) })
    // eslint-disable-next-line no-console
    .onError((i, e) => { console.warn('websock has error...') })
    .withBackoff(new ConstantBackoff(1000))
    .build()
```

## 发送消息

```js
import { ws } from "上文ts文件";

ws.send("xxxx");
```

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
