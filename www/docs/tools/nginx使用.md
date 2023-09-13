## install nginx

[linux](https://nginx.org/en/linux_packages.html)

debian 如下：

```bash
sudo apt install curl gnupg2 ca-certificates lsb-release debian-archive-keyring
curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/debian `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
sudo apt update
sudo apt install nginx
```

## SSL Configuration Generator

自动生成代理模板：[https://ssl-config.mozilla.org/](https://ssl-config.mozilla.org/)

### 证书生成

`openssl req -new -x509 -nodes -days 3650 -out server.crt -keyout server.key`

> 选项`-nodes`是"no DES“。当作为参数给出时，这意味着 OpenSSL 不会加密 `PKCS#12` 文件中的私钥。
> 查看 key 文件哈稀值`sudo openssl rsa -in server.key -modulus -noout`
