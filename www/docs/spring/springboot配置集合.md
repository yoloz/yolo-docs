## 启用 https

```yml
server:
  address: 0.0.0.0
  port: 0
  ssl.key-store: xxx.p12
  ssl.key-store-password: xxxx
  ssl.keyStoreType: PKCS12
#  ssl.keyAlias: tomcat
```

> Tomcat 支持 PKCS12 或 JKS
>
> 证书生成可参考安全部分 keytool 或 openssl

## 配置静态资源

详见[Spring Boot 中的静态资源配置](https://springdoc.cn/spring-boot-static-resource/)

默认情况下，以下目录为默认的静态资源目录。其中的静态资源可以被直接访问：

- classpath:/META-INF/resources/
- classpath:/resources/
- classpath:/static/
- classpath:/public/
- ${user.dir}/public/:程序运行目录下的 public 目录

优先级从上往下，当多个静态资源目录中出现同名文件时，越靠上的目录权重越高。

### 配置文件方式

可以在`properties`或者`yaml`中配置静态资源的访问路径和目录

```bash
# 静态资源的访问路径
spring.mvc.static-path-pattern=/**
# 静态资源的目录
spring.web.resources.static-locations[0]=classpath:/public/
```

> `spring.mvc.static-path-pattern` 指定了静态资源的访问路径，默认为 `/**`，也就是没有前缀。你可以专门为静态资源配置一个访问路径，如：`spring.mvc.static-path-pattern=/static/**`  
> `spring.web.resources.static-location`配置用于指定静态资源的目录，它是一个数组，可以配置多个路径。默认值为：`[classpath:/META-INF/resources/, classpath:/resources/, classpath:/static/, classpath:/public/]`

静态资源目录不仅可以是 `classpath` 下的目录，也可以是本地磁盘目录，使用 `file:` 前缀进行配置，如：

```bash
spring.web.resources.static-locations[0]=file:/upload/
# 可以配合 ${} 语法，从环境变量、系统属性中读取目录信息
# ${user.dir} 的值也就是 System.getProperty("user.dir")
spring.web.resources.static-locations[0]=file:${user.dir}/upload/
```

### 配置类方式

通过`WebMvcConfigurer` 配置接口的 `addResourceHandlers` 方法，可以编程式地配置静态资源访问路径和静态资源目录。

```java
@Configuration
public class WebRequestConfigure implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        ApplicationHome home = new ApplicationHome(getClass());
        Path resourcePath = Paths.get(home.getSource().getParentFile().getParentFile().getAbsolutePath(), "web");
        // 路径最后需要携带“/”
        registry.addResourceHandler("/**").addResourceLocations("classpath:static/");
        registry.addResourceHandler("/assets/**").addResourceLocations("classpath:static/assets/");
        // 本地磁盘目录，路径最后需要携带“/”
        registry.addResourceHandler("/**").addResourceLocations("file:" + resourcePath + "/");
        registry.addResourceHandler("/assets/**").addResourceLocations("file:" + resourcePath.resolve("assets") + "/");
    }

}
```

## 配置静态首页

详见[设置 SpringBoot 应用默认首页](https://blog.csdn.net/chenshufeng115/article/details/108370736)

### 定义一个 Controller 转发

```java
@Controller
public class HelloController {
    @RequestMapping("/")
    public String hello(){
        return "forward:index.html";
    }
}
```

### 重写 addViewControllers 方法转发
```java
@Configuration
public class WebRequestConfigure implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("forward:index.html");
    }

}
```
