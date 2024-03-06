## tcp 代理

在 nginx.conf 添加如下配置，并使用`nginx -s reload`重载 nginx 使其生效

```
stream {
    #将12345端口转发到192.168.1.23的3306端口
    server {
        listen 12345;
        proxy_connect_timeout 5s;
        proxy_timeout 20s;
        proxy_pass 192.168.1.23:3306;
    }
    #将udp 53端口转发到192.168.1.23 53端口
    server {
        listen 53 udp reuseport;
        proxy_timeout 20s;
        proxy_pass 192.168.1.23:53;
    }
    #ipv4转发到ipv6
    server {
        listen 9135;
        proxy_connect_timeout 10s;
        proxy_timeout 30s;
        proxy_pass [2607:fcd0:107:3cc::1]:9135;
    }
}
```

> listen：后面填写源端口（也就是当前服务器端口），默认协议为 TCP，可以指定为 UDP 协议  
> proxy_connect_timeout：连接超时时间  
> proxy_timeout：超时时间  
> proxy_pass：填写转发目标的 IP 及端口

nginx 可以将 IPV4 的数据包转发到 IPV6，IPV6 的 IP 需要使用`[]`括起来,如下为一个可用配置文件：

```
user www-data;
worker_processes auto;
pid /run/nginx.pid;
#include /etc/nginx/modules-enabled/*.conf;
#上面注释掉的加载模块，暂时仅需stream模块
load_module modules/ngx_stream_module.so;

events {
	worker_connections 768;
	# multi_accept on;
}

stream {
    server {
        listen 10003;
        proxy_connect_timeout 5s;
        proxy_timeout 20s;
        proxy_pass 192.168.124.252:22;
    }
}

```
