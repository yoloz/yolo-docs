[Caching](https://docs.spring.io/spring-boot/docs/current/reference/html/io.html#io.caching)

## ConcurrentHashMap

> If none of the other providers can be found, a simple implementation using a `ConcurrentHashMap` as the cache store is configured. This is the default if no caching library is present in your application.

详见：[cache data in memory](https://spring.io/guides/gs/caching/)

操作如下：

```java
@Component
public class SimpleBookRepository implements BookRepository {

  @Override
  @Cacheable("books")
  public Book getByIsbn(String isbn) {
    simulateSlowService();
    return new Book(isbn, "Some book");
  }

  // Don't do this at home
  //模拟没有缓存时慢，有缓存是很快
  private void simulateSlowService() {
    try {
      long time = 3000L;
      Thread.sleep(time);
    } catch (InterruptedException e) {
      throw new IllegalStateException(e);
    }
  }
}
// ##############################
@SpringBootApplication
@EnableCaching  //添加注解
public class CachingApplication {

  public static void main(String[] args) {
    SpringApplication.run(CachingApplication.class, args);
  }

}
```

## Caffeine

> Caffeine is a Java 8 rewrite of Guava’s cache that supersedes support for Guava.
> 默认 springboot 添加后存在 caffeine,如果简单的缓存可以使用它，相比使用`ConcurrentHashMap`它可以配置过期时间(application.yml):

```yml
spring.cache.caffeine.spec=maximumSize=500,expireAfterAccess=600s
```
