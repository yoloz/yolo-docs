## 修改配置文件

直接`vim xxx.jar`包后，可以通过 `/关键字`来查找文件，查找到以后，通过方向键进行控制，`enter` 进入文件，修改文件、保存等操作和 `vim` 的操作一样

## 修改 jar 包中的 class

### jar 命令替换

如果只是简单地替换文件，可以直接使用命令`jar uvf pas-server.jar com/ceiec/pas/server/service/impl/IncidentServiceImpl`

> 不推荐该命令的，很麻烦，要手动去新建一级一级的目录，而且一般 class 文件的包名都是以`.`来分隔的，要手动修改为文件分隔符。其次，如果输错了路径，再想删掉这个 class 很麻烦

### 解压后再压缩的方式
1. 拷贝jar包为一个zip文件;
2. 解压zip到指定文件夹`unzip pas-server.zip -d pas-server-unzip/`;
3. 进入解压后的文件夹，修改文件;
4. 重新打为spring boot 的jar包`jar -cvfMO pas-server.jar BOOT-INF/ META-INF/ org/`;