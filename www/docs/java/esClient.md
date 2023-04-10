## ES-8.x

安装日志:

```log
<!-- ... -->
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Elasticsearch security features have been automatically configured!
✅ Authentication is enabled and cluster connections are encrypted.

ℹ️  Password for the elastic user (reset with `bin/elasticsearch-reset-password -u elastic`):
  KDkf*DrY8kVAw_NJhyR2

ℹ️  HTTP CA certificate SHA-256 fingerprint:
  26d22fc43927e4cd1ab3c85ed3cfd918fed3250b713a8202a811683d44761295

ℹ️  Configure Kibana to use this cluster:
• Run Kibana and click the configuration link in the terminal when Kibana starts.
• Copy the following enrollment token and paste it into Kibana in your browser (valid for the next 30 minutes):
  eyJ2ZXIiOiI4LjcuMCIsImFkciI6WyIxOTIuMTY4LjEyNC4yNTM6OTIwMCJdLCJmZ3IiOiIyNmQyMmZjNDM5MjdlNGNkMWFiM2M4NWVkM2NmZDkxOGZlZDMyNTBiNzEzYTgyMDJhODExNjgzZDQ0NzYxMjk1Iiwia2V5IjoicGJ2SGFZY0J1MTllSlktZTJzUU86QjhZZVoyU1RSa0tPeTJVeWcwelh3QSJ9

ℹ️  Configure other nodes to join this cluster:
• On this node:
  ⁃ Create an enrollment token with `bin/elasticsearch-create-enrollment-token -s node`.
  ⁃ Uncomment the transport.host setting at the end of config/elasticsearch.yml.
  ⁃ Restart Elasticsearch.
• On other nodes:
  ⁃ Start Elasticsearch with `bin/elasticsearch --enrollment-token <token>`, using the enrollment token that you generated.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### ElasticsearchClient:

[Connecting](https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/8.7/connecting.html)

依赖：`elasticsearch-java`

```java
String fingerprint = "<certificate fingerprint>";

SSLContext sslContext = TransportUtils
    .sslContextFromCaFingerprint(fingerprint);

// File certFile = new File("/path/to/http_ca.crt");
// SSLContext sslContext = TransportUtils
//     .sslContextFromHttpCaCrt(certFile);

BasicCredentialsProvider credsProv = new BasicCredentialsProvider();
credsProv.setCredentials(
    AuthScope.ANY, new UsernamePasswordCredentials(login, password)
);

RestClient restClient = RestClient
    .builder(new HttpHost(host, port, "https"))
    .setHttpClientConfigCallback(hc -> hc
        .setSSLContext(sslContext)
        .setDefaultCredentialsProvider(credsProv)
    )
    .build();

// Create the transport and the API client
ElasticsearchTransport transport = new RestClientTransport(restClient, new JacksonJsonpMapper());
ElasticsearchClient client = new ElasticsearchClient(transport);
```

### hlrc(High Level Rest Client):

依赖：`elasticsearch-rest-high-level-client`

```java
//list里可能多个地址
HttpHost[] httpHosts = new HttpHost[list.size()];
for (int i = 0; i < list.size(); i++) {
    String[] r = list.get(i).split(":");
    httpHosts[i] = new HttpHost(r[0], Integer.parseInt(r[1]), protocol); //protocol:http,https
}
RestClientBuilder.HttpClientConfigCallback httpClientConfigCallback = httpClientBuilder -> {
    if ("https".equals(protocol)) {
        SSLContext sslContext = TransportUtils.sslContextFromCaFingerprint(esConfig.getSign());
        httpClientBuilder.setSSLContext(sslContext);
    }
    if (StrUtil.isNotEmpty(esConfig.getUsername())) {
        final CredentialsProvider credentialsProvider = new BasicCredentialsProvider();
        credentialsProvider.setCredentials(AuthScope.ANY,
                new UsernamePasswordCredentials(esConfig.getUsername(), esConfig.getPasswd()));
        httpClientBuilder.setDefaultCredentialsProvider(credentialsProvider);
        httpClientBuilder.disableAuthCaching();
    }
    return httpClientBuilder;
};

RestClientBuilder clientBuilder = RestClient.builder(httpHosts);
clientBuilder.setHttpClientConfigCallback(httpClientConfigCallback);
this.restHighLevelClient = new RestHighLevelClient(clientBuilder);
```

## ES-7.x

### ElasticsearchClient:

[Connecting](https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/7.17/connecting.html)

```java
// Create the low-level client
RestClient restClient = RestClient.builder(
    new HttpHost("localhost", 9200)).build();

// Create the transport with a Jackson mapper
ElasticsearchTransport transport = new RestClientTransport(
    restClient, new JacksonJsonpMapper());

// And create the API client
ElasticsearchClient client = new ElasticsearchClient(transport);
```

### hlrc(High Level Rest Client):

```java
//list里可能多个地址
HttpHost[] httpHosts = new HttpHost[list.size()];
for (int i = 0; i < list.size(); i++) {
    String[] r = list.get(i).split(":");
    httpHosts[i] = new HttpHost(r[0], Integer.parseInt(r[1]));
}
RestClientBuilder clientBuilder = RestClient.builder(httpHosts);
//存在用户名密码
if (StrUtil.isNotEmpty(esConfig.getUsername())) {
    final CredentialsProvider credentialsProvider = new BasicCredentialsProvider();
    credentialsProvider.setCredentials(AuthScope.ANY,
            new UsernamePasswordCredentials(esConfig.getUsername(), esConfig.getPasswd()));
    clientBuilder.setHttpClientConfigCallback(httpClientBuilder -> {
        httpClientBuilder.disableAuthCaching();
        return httpClientBuilder.setDefaultCredentialsProvider(credentialsProvider);
    });
}
RestHighLevelClient restHighLevelClient = new RestHighLevelClient(clientBuilder);

```
