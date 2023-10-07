## SPA(单页 Web 应用)的概念

SPA(single page application):只有一个完整的页面(index.html)，在用户与程序交互的时候动态获取数据(axios)的 Web 页面程序。

- 单页面应用程序：只有在第一次才会向后台请求页面，之后的每次请求都是去获取到必要的数据，由页面上的 js 解析数据后动态展示到页面上
- 传统单页面程序：每次页面的跳转都是去服务器请求页面

> 单页面应用程序：减少请求的密度，加快了页面的响应速度，降低了服务器上的压力，有着更好的用户体验。

## 不同的历史模式

- vue 的单页面应用是基于`路由+组件`的，路由用于设定访问路径，并且将路径与组件进行连接。在`vue-router`中，不是页面的切换，而是组件的切换，`vue-router`本质就是`建立起 url 和组件之间的映射关系`
- 在传统的多页面应用中，是使用一些超链接`<a></a>`来进行页面跳转与切换的；

### Hash 模式

`hash(#)`是 URL 的锚点，代表的是网页中的一个位置，单单改变`#`后面的部分，浏览器只会滚动到相应的位置，而不会去后端请求网页资源，也就是说`#`是用来指导浏览器动作的，对服务器端完全不起作用，HTTP 请求中也不包括`#`；同时每一次改变`#`后面的部分，都会在浏览器的访问历史中增加一个记录，当使用浏览器的后退按钮的时候，就可以返回上一个位置；所以说 Hash 模式是使用锚点值的改变，根据不同的值，渲染指定 DOM 元素的不同数据。

### HTML5 模式

在使用 history 模式的时候，URL 就会像是正常的 URL，没有`#`存在，比较美观。不过这种模式需要后端额外配置，如果不配置直接访问路径会得到一个 404 错误。

[服务器配置实例](https://router.vuejs.org/zh/guide/essentials/history-mode.html)

- springboot 配置 HTML5 模式

找不到页面时，后端返回`index.html`即可：

参考[Stackoverflow](https://stackoverflow.com/questions/34551962/if-request-mapping-unresolved-and-path-not-found-in-static-resources-location-th)

```java
@Component
public class WebConfiguration implements EmbeddedServletContainerCustomizer {
    @Override
    public void customize(ConfigurableEmbeddedServletContainer configurableEmbeddedServletContainer) {
        configurableEmbeddedServletContainer.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, "/index.html"));
    }
}
```

> 上述修改版本小于 springboot 2.x
> 对于不支持`EmbeddedServletContainerCustomizer`的版本，配置如下：

```java
@Component
public class ErrorPageConfig implements ErrorPageRegistrar {

    @Override
    public void registerErrorPages(ErrorPageRegistry registry) {
        ErrorPage notFound = new ErrorPage(HttpStatus.NOT_FOUND, "/index.html");
        registry.addErrorPages(notFound);
    }
}
```

如果对请求有安全验证，需要将请求排除：

```java
@Configuration
public class WebRequestConfigure implements WebMvcConfigurer {

    //...

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(xxxxx).addPathPatterns("/**").excludePathPatterns("/wm/test");
        //...
    }
}
```
