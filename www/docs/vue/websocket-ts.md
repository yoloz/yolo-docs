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
    type: string
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
                return message.data
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

## 后端(spring boot)

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-websocket</artifactId>
</dependency>
```

```java
@Configuration
public class WebSocketConfig {

    /**
     * 注入ServerEndpointExporter，
     * 这个bean会自动注册使用了@ServerEndpoint注解声明的Websocket endpoint
     */
    @Bean
    public ServerEndpointExporter serverEndpointExporter() {
        return new ServerEndpointExporter();
    }

}
// ##############################################
@Slf4j
@Component
@ServerEndpoint("/ws/{userId}")
public class WebSocket {

    //用户ID
    private String userId;
    // 用来存在线连接用户信息
    private static final ConcurrentHashMap<String, Session> sessionPool = new ConcurrentHashMap<>();

    @Resource
    private IMenuService menuService;

    //连接建立
    @OnOpen
    public void onOpen(Session session, @PathParam(value = "userId") String userId) {
        this.userId = userId;
        sessionPool.put(userId, session);
    }

    //连接断开
    @OnClose
    public void onClose() {
        Session session = sessionPool.remove(this.userId);
        try {
            if (session != null) session.close();
        } catch (IOException e) {
            log.warn("close id[" + this.userId + "] session fail:" + e.getMessage());
        }
    }

    //收到客户端消息
    @OnMessage
    public void onMessage(String message) {
        if (StringUtils.isEmpty(message)) return;
        if (message.equals("menu")) {
            Collection<MenuRouter> routerMenus = menuService.getRouterMenu(Integer.parseInt(this.userId));
            sendMsg(this.userId, JsonUtil.obj2String(routerMenus));
        }
    }

    //发送错误时的处理
    @OnError
    public void onError(Session session, Throwable e) {
        log.error("WS Connect Error:" + e.getMessage(), e);
    }


    // 广播消息
    public void broadCastMsg(String message) {
        for (Map.Entry<String, Session> sessionEntry : sessionPool.entrySet()) {
            try {
                if (sessionEntry.getValue().isOpen()) {
                    sessionEntry.getValue().getAsyncRemote().sendText(message);
                }
            } catch (Exception e) {
                log.warn("send msg to id[" + sessionEntry.getKey() + "] fail:" + e.getMessage());
            }
        }
    }

    public void sendMsg(String userId, String message) {
        Session session = sessionPool.get(userId);
        if (session != null && session.isOpen()) {
            try {
                session.getAsyncRemote().sendText(message);
            } catch (Exception e) {
                log.warn("send msg to id[" + userId + "] fail:" + e.getMessage());
            }
        }
    }

    public void sendMsg(String[] userIds, String message) {
        for (String userId : userIds) {
            sendMsg(userId, message);
        }
    }

}
```
