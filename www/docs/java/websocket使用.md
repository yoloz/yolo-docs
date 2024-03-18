[Java-WebSocket](https://github.com/TooTallNate/Java-WebSocket)

## 客户端

```java
@Slf4j
public class WSClient extends WebSocketClient {

    public WSClient(String serverUri) throws NoSuchAlgorithmException, KeyManagementException, URISyntaxException {
        this(new URI(serverUri));
    }

    public WSClient(URI serverUri) throws NoSuchAlgorithmException, KeyManagementException {
        this(serverUri, new Draft_6455());
    }

    public WSClient(URI serverUri, Draft protocolDraft) throws NoSuchAlgorithmException, KeyManagementException {
        super(serverUri, protocolDraft);
        if (serverUri.toString().startsWith("wss://")) {
            trustAllHosts();
        }
    }
    // 忽略证书验证
    private void trustAllHosts() throws NoSuchAlgorithmException, KeyManagementException {
        TrustManager[] trustAllCerts = new TrustManager[]{
            new X509ExtendedTrustManager() {
                @Override
                public void checkClientTrusted(X509Certificate[] x509Certificates, String s, Socket socket) {
                }

                @Override
                public void checkServerTrusted(X509Certificate[] x509Certificates, String s, Socket socket) {
                }

                @Override
                public void checkClientTrusted(X509Certificate[] x509Certificates, String s, SSLEngine sslEngine) {
                }

                @Override
                public void checkServerTrusted(X509Certificate[] x509Certificates, String s, SSLEngine sslEngine) {
                }

                public X509Certificate[] getAcceptedIssuers() {
                    return new X509Certificate[0];
                }

                public void checkClientTrusted(X509Certificate[] arg0, String arg1) {
                }

                public void checkServerTrusted(X509Certificate[] arg0, String arg1) {
                }
            }
        };
        SSLContext sc = SSLContext.getInstance("TLS");
        sc.init(null, trustAllCerts, new SecureRandom());
        this.setSocketFactory(sc.getSocketFactory());
    }
}
```

### 客户端重连

WebSocket 有五种状态，分别是`NOT_YET_CONNECTED`（还没有连接）, `CONNECTING`（正在连接）, `OPEN`（打开状态）, `CLOSING`（正在关闭）, `CLOSED`（已关闭）。

WebSocketClient 对象是不能重复使用的，当 WebSocket 处于`CONNECTING`、`OPEN`、`CLOSING`、 `CLOSED`这四种状态时，说明已经被初始化过了，此时再次初始化链接时会报异常： `WebSocketClient objects are not reuseable`

```java
 @Slf4j
public class Reconnect implements Runnable {

    private final WSClient client;

    public Reconnect(WSClient client) {
        this.client = client;
    }

    @Override
    public void run() {
        try {
            if (!this.client.isOpen()) {
                log.warn("web socket client check closed,reconnect...");
                ReadyState readyState = client.getReadyState();
                if (readyState.equals(ReadyState.NOT_YET_CONNECTED)) {
                    client.connectBlocking();
                } else if (readyState.equals(ReadyState.CLOSING) || readyState.equals(ReadyState.CLOSED)) {
                    client.reconnectBlocking();
                }
                this.client.send("something");
            }
        } catch (Throwable e) {
            log.error("web socket client reconnect fail: " + e.getMessage());
        }
    }
}
```
