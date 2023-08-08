## 依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-websocket</artifactId>
</dependency>
```

## 简单样例

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

    private static IMenuService menuService;

    @Autowired
    public void setMenuService(IMenuService ms) {
        menuService = ms;
    }

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

:::caution 注意

- 注入使用类注入，websocket 连接建立的时候会创建新的实例(见下方源码)，并不是 spring 初始创建的实例，所以内部属性使用类注入；
- 如果发布的 web 配置了`context-path`,则 websocket 路径需要在端口后加上`context-path`然后是路径;

:::

## 源码简读

类(Servlet 3.1 HTTP upgrade handler for WebSocket connections.)：`org.apache.tomcat.websocket.server.WsHttpUpgradeHandler`

```java
 @Override
public void init(WebConnection connection) {
    // ...
    try {
        wsRemoteEndpointServer = new WsRemoteEndpointImplServer(socketWrapper, upgradeInfo, webSocketContainer,
                connection);
        wsSession = new WsSession(wsRemoteEndpointServer, webSocketContainer, handshakeRequest.getRequestURI(),
                handshakeRequest.getParameterMap(), handshakeRequest.getQueryString(),
                handshakeRequest.getUserPrincipal(), httpSessionId, negotiatedExtensions, subProtocol,
                pathParameters, secure, serverEndpointConfig);
        ep = wsSession.getLocal();
        wsFrame = new WsFrameServer(socketWrapper, upgradeInfo, wsSession, transformation, applicationClassLoader);
        // WsFrame adds the necessary final transformations. Copy the
        // completed transformation chain to the remote end point.
        wsRemoteEndpointServer.setTransformation(wsFrame.getTransformation());
        ep.onOpen(wsSession, serverEndpointConfig);
        webSocketContainer.registerSession(serverEndpointConfig.getPath(), wsSession);
    } catch (DeploymentException e) {
        throw new IllegalArgumentException(e);
    } finally {
        t.setContextClassLoader(cl);
    }
}
```

类：`org.apache.tomcat.websocket.WsSession`

```java
public WsSession(WsRemoteEndpointImplBase wsRemoteEndpoint, WsWebSocketContainer wsWebSocketContainer,
            URI requestUri, Map<String, List<String>> requestParameterMap, String queryString, Principal userPrincipal,
            String httpSessionId, List<Extension> negotiatedExtensions, String subProtocol,
            Map<String, String> pathParameters, boolean secure, ServerEndpointConfig serverEndpointConfig)
            throws DeploymentException {
        // ...
        Object endpointInstance;
        try {
            if (instanceManager == null || !isDefaultConfigurator(configurator)) {
                endpointInstance = configurator.getEndpointInstance(clazz);
                if (instanceManager != null) {
                    try {
                        instanceManager.newInstance(endpointInstance);
                    } catch (ReflectiveOperationException | NamingException e) {
                        throw new DeploymentException(sm.getString("wsSession.instanceNew"), e);
                    }
                }
            } else {
                endpointInstance = instanceManager.newInstance(clazz);
            }
        } catch (ReflectiveOperationException | NamingException e) {
            throw new DeploymentException(sm.getString("wsSession.instanceCreateFailed"), e);
        }

        if (endpointInstance instanceof Endpoint) {
            this.localEndpoint = (Endpoint) endpointInstance;
        } else {
            this.localEndpoint = new PojoEndpointServer(pathParameters, endpointInstance);
        }
        // ...
    }
```

类：`org.apache.tomcat.websocket.pojo.PojoEndpointServer`

```java
public PojoEndpointServer(Map<String, String> pathParameters, Object pojo) {
        super(pathParameters);
        setPojo(pojo);
}
```

类：`org.apache.tomcat.websocket.pojo.PojoEndpointBase`

```java
protected final void doOnOpen(Session session, EndpointConfig config) {
        PojoMethodMapping methodMapping = getMethodMapping();
        Object pojo = getPojo();
        // ...
        if (methodMapping.getOnOpen() != null) {
            // ...
                methodMapping.getOnOpen().invoke(pojo, methodMapping.getOnOpenArgs(pathParameters, session, config));
            // ...
        }
    }
```

> 上述代码中`pojo`就是`websocket`实例，一个 session 一个实例(`newInstance`)
