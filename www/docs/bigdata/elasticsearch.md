## 移除 8.x 中 module 的 ml

不用其机器学习，同时减小压缩包：

1. 解压文件`elasticsearch-8.7.0-linux-x86_64.tar.gz`;
2. 删除`${ES_HOME}/modules/x-pack-ml/platform/linux-x86_64/lib/`里的链接库文件;
3. 修改`${ES_HOME}/config/elasticsearch.yml`在最后添加`xpack.ml.enabled: false`;
4. 压缩修改后的文件;

:::note
修改后的包启动会有告警(忽略)`[2023-04-12T09:50:20,987][WARN ][x-pack-ml-controller-stderr] [test] /xxx/elasticsearch-8.7.0/modules/x-pack-ml/platform/linux-x86_64/bin/controller: error while loading shared libraries: libMlCore.so: cannot open shared object file: No such file or directory`
:::

## 8.x 中 elasticsearch-head

由于 8.x 默认启用了安全策略，如果想使用此插件，可以在浏览器里先访问`https://ip:9200/`，接受证书然后用户密码登陆，再回到插件刷新即可。

## 8.x 的安全配置

首次启动安装会生成安全信息,详情见：[Start the Elastic Stack with security enabled automatically](https://www.elastic.co/guide/en/elasticsearch/reference/master//configuring-stack-security.html)

```log
...
✅ Elasticsearch security features have been automatically configured!
✅ Authentication is enabled and cluster connections are encrypted.

ℹ️  Password for the elastic user (reset with `bin/elasticsearch-reset-password -u elastic`):
  K+Zp-t0FiGFBh=9wCsPl

ℹ️  HTTP CA certificate SHA-256 fingerprint:
  f725ac7f46c42e6ecf0c8a5776bc6d549b8844e3f16e6b4aab511e141f27c5b0

ℹ️  Configure Kibana to use this cluster:
• Run Kibana and click the configuration link in the terminal when Kibana starts.
• Copy the following enrollment token and paste it into Kibana in your browser (valid for the next 30 minutes):
  eyJ2ZXIiOiI4LjcuMCIsImFkciI6WyIxOTIuMTY4LjEyNC4yNTM6OTIwMCJdLCJmZ3IiOiJmNzI1YWM3ZjQ2YzQyZTZlY2YwYzhhNTc3NmJjNmQ1NDliODg0NGUzZjE2ZTZiNGFhYjUxMWUxNDFmMjdjNWIwIiwia2V5Ijoid2lySWRJY0IwclpNdzhpOWUySGo6VlR4VHlpZVhSN1NybV9lVmRaWVBZQSJ9

ℹ️  Configure other nodes to join this cluster:
• On this node:
  ⁃ Create an enrollment token with `bin/elasticsearch-create-enrollment-token -s node`.
  ⁃ Uncomment the transport.host setting at the end of config/elasticsearch.yml.
  ⁃ Restart Elasticsearch.
• On other nodes:
  ⁃ Start Elasticsearch with `bin/elasticsearch --enrollment-token <token>`, using the enrollment token that you generated.
...
```

:::caution

1. 首次启动 auto configuration 输出控制台，不输出到日志;
2. 首次启动生成的证书在${ES_HOME}/config/certs 里;
3. 工程方便或者遗忘了密码指纹之类：重置密码`bin/elasticsearch-reset-password -u elastic`，获取指纹`openssl x509 -fingerprint -sha256 -in config/certs/http_ca.crt`

:::
自动化脚本：

```bash
#!/usr/bin/env bash
path=$(cd `dirname $0`/..;pwd)
if [ -d "${path}/../es/config/certs" ];then
  echo y|${path}/../es/bin/elasticsearch-reset-password -u elastic -s > resetPwd
  echo "\n"
  echo "user:elastic,passwd:`cat resetPwd`"
  rm -f resetPwd
  openssl x509 -fingerprint -sha256 -in ${path}/../es/config/certs/http_ca.crt > fingerprint
  echo "fingerprint:`sed -e '2,$d' -e 's/://g' fingerprint | awk -F '=' '{print tolower($2)}'`"
  rm -f fingerprint
else
  echo "elasticsearch CA does not exit..."
fi
```
