## 支持的 Cache

[cache](https://docs.spring.io/spring-boot/docs/current/reference/html/io.html#io.caching)

### ConcurrentHashMap

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

### Caffeine

> Caffeine is a Java 8 rewrite of Guava’s cache that supersedes support for Guava.
> 默认 springboot 添加后存在 caffeine,如果简单的缓存可以使用它，相比使用`ConcurrentHashMap`它可以配置过期时间(application.yml):

```yml
spring.cache.caffeine.spec=maximumSize=500,expireAfterAccess=600s
```

## 注解使用

[Annotations](https://docs.spring.io/spring-framework/reference/integration/cache/annotations.html)

:::info
Default Key Generation:

- If no parameters are given, return SimpleKey.EMPTY.
- If only one parameter is given, return that instance.
- If more than one parameter is given, return a SimpleKey that contains all parameters.

:::

### @CacheConfig

一个类级别的注解，允许共享缓存的名称、KeyGenerator、CacheManager 和 CacheResolver。该操作可被类里面具体配置覆盖

```java
@CacheConfig(cacheNames = "menus")
public class MenuServiceImpl extends ServiceImpl<MenuMapper, Menu> implements IMenuService {...}
```

### @Cacheable

用来在方法上声明缓存，执行前检查缓存中是否存在之前执行过的结果，如果有缓存则直接返回，否则执行该方法并将执行结果以键值对的形式存入指定的缓存中：

```java
@Cacheable(cacheNames="books", key="#isbn")
public Book findBook(ISBN isbn, boolean checkWarehouse, boolean includeUsed)

@Cacheable(cacheNames="books", key="#isbn.rawNumber")
public Book findBook(ISBN isbn, boolean checkWarehouse, boolean includeUsed)

@Cacheable(cacheNames="books", key="#map['bookid'].toString()")
public Book findBook(Map<String, Object> map)
```

### @CachePut

主要针对方法配置，执行前不会去检查缓存中是否存在之前执行过的结果，而是每次都会执行该方法，并将执行结果以键值对的形式存入指定的缓存中

```java
@CachePut(cacheNames="book", key="#isbn")
public Book updateBook(ISBN isbn, BookDescriptor descriptor)
```

### @CacheEvict

主要针对方法配置，根据一定的条件对缓存进行清空:

```java
// allEntries:表示是否需要清除缓存中的所有元素,如果为true,Spring Cache将忽略指定的key
@CacheEvict(cacheNames="books", allEntries=true)
public void loadBooks(InputStream batch)

```

清除操作默认是在对应方法成功执行之后触发的，即方法如果因为抛出异常而未能成功返回时也不会触发清除操作。

使用`beforeInvocation`可以改变触发清除操作的时间，当我们指定该属性值为 true 时，Spring 会在调用该方法之前清除缓存中的指定元素。

```java
@CacheEvict(cacheNames="books", beforeInvocation=true)
public void loadBooks(InputStream batch)
```

### 属性`sync`

在多线程环境下，某些操作可能使用相同参数同步调用。默认情况下，缓存不锁定任何资源，可能导致多次计算，而违反了缓存的目的。对于这些特定的情况，属性 sync 可以指示底层将缓存锁住，使只有一个线程可以进入计算，而其他线程堵塞，直到返回结果更新到缓存中:

```java
@Cacheable(cacheNames="foos", sync="true")
public Foo executeExpensiveOperation(String id) {...}
```

### 属性`condition`

通过 SpEL 表达式来指定可求值的 boolean 值，为 true 才会缓存，在方法执行之前进行评估。

```java
@Cacheable(cacheNames="book", condition="#name.length < 32")
public Book findBook(String name)
```

### 属性`unless`

unless 表达式是在方法调用之后进行评估的，如果返回 false，才放入缓存。

```java
@Cacheable(cacheNames="book", condition="#name.length < 32", unless="#result.name.length > 5"")
public Book findBook(String name)
```
