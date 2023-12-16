## @Scheduled

1. 首先需要使用`@EnableScheduling`注解开启任务调度;
2. 使用`@Scheduled`注解任务执行的方法

```java
@Component
public class TaskDemo1 {
    @Scheduled(cron = "1 * * * * ?")
    public void doTask1(){
        // 实际上就是每分钟一次
        System.out.println("每分钟的第1秒执行一次"+Thread.currentThread().getName());
    }
    //    @Scheduled(fixedDelay = 5000)
    // 时间默认单位是毫秒，我们可以通过timeUnit属性修改
    @Scheduled(fixedDelay = 5,timeUnit = TimeUnit.SECONDS)
    public void doTask3() throws InterruptedException {
        Thread.sleep(10000);// 休眠10秒来验证(意味着至少要等15秒之后才会再次执行)
        // 上次调用结束后5秒执行
        System.out.println("上次调用结束后5秒执行"+Thread.currentThread().getName());
    }

    @Scheduled(fixedRate = 5,timeUnit = TimeUnit.SECONDS)
    public void doTask4() throws InterruptedException {
        // 每隔5秒执行，无论上次执行是否成功，是否结束
        System.out.println("每隔5秒执行"+Thread.currentThread().getName());
        Thread.sleep(10000);
    }
}
```

运行程序后会发现,通过每个任务输出的线程名可知所有任务都是同一个线程执行的，导致了我们的任务串行化了。

### 配置`ThreadPoolTaskScheduler`来解决串行化

```java
@Configuration
public class ScheduleConfig {
    @Bean
    public TaskScheduler taskScheduler(){
        ThreadPoolTaskScheduler tpts = new ThreadPoolTaskScheduler();
        tpts.setPoolSize(5);// 线程池数量
        tpts.setThreadNamePrefix("my-Task-");// 线程名称前缀
        return tpts;
    }
}
```

### 添加注解`@Async`异步执行任务调度

需要添加`@EnableAsync`注解来开启`@Async`注解支持

```java
@Component
public class TaskDemo1 {
    @Scheduled(cron = "1 * * * * ?")
    @Async
    public void doTask1(){
        // 实际上就是每分钟一次
        System.out.println("每分钟的第1秒执行一次"+Thread.currentThread().getName());
    }
    //    @Scheduled(fixedDelay = 5000)
    // 时间默认单位是毫秒，我们可以通过timeUnit属性修改
    @Scheduled(fixedDelay = 5,timeUnit = TimeUnit.SECONDS)
    @Async
    public void doTask3() throws InterruptedException {
        Thread.sleep(10000);// 休眠10秒来验证(意味着至少要等15秒之后才会再次执行)
        // 上次调用结束后5秒执行
        System.out.println("上次调用结束后5秒执行"+Thread.currentThread().getName());
    }

    @Scheduled(fixedRate = 5,timeUnit = TimeUnit.SECONDS)
    @Async
    public void doTask4() throws InterruptedException {
        // 每隔5秒执行，无论上次执行是否成功，是否结束
        System.out.println("每隔5秒执行"+Thread.currentThread().getName());
        Thread.sleep(10000);
    }

}
```

如此配置会报错：

```log
[scheduling-1] DEBUG o.s.s.a.AnnotationAsyncExecutionInterceptor - Could not find unique TaskExecutor bean. Continuing search for an Executor bean named 'taskExecutor'
org.springframework.beans.factory.NoUniqueBeanDefinitionException: No qualifying bean of type 'org.springframework.core.task.TaskExecutor' available: expected single matching bean but found 2: applicationTaskExecutor,taskScheduler
...
```

一起配置使用参见文末[配置定时任务异步任务](#配置定时任务异步任务),**配置了`taskScheduler`则无需将两者一起使用**,使用`@Async`来异步调用之后，配置的`taskScheduler`线程池无用最后走的都是异步线程池。

## @Async

`@Async`的默认线程池为`SimpleAsyncTaskExecutor`,该线程池默认来一个任务创建一个线程，若系统中不断的创建线程，最终会导致系统占用内存过高，引发 OutOfMemoryError 错误。针对线程创建问题，`SimpleAsyncTaskExecutor`提供了限流机制，通过`concurrencyLimit`属性来控制开关，当`concurrencyLimit>=0`时开启限流机制，默认关闭限流机制即`concurrencyLimit=-1`，当关闭情况下，会不断创建新的线程来处理任务。

:::info Spring 已经实现的线程池

- SimpleAsyncTaskExecutor：不是真的线程池，这个类不重用线程，默认每次调用都会创建一个新的线程;
- SyncTaskExecutor：这个类没有实现异步调用，只是一个同步操作,只适用于不需要多线程的地方;
- ConcurrentTaskExecutor：Executor 的适配类，不推荐使用。如果 ThreadPoolTaskExecutor 不满足要求时，才用考虑使用这个类;
- SimpleThreadPoolTaskExecutor：是 Quartz 的 SimpleThreadPool 的类。线程池同时被 quartz 和非 quartz 使用，才需要使用此类;
- ThreadPoolTaskExecutor ：最常使用，推荐。其实质是对 java.util.concurrent.ThreadPoolExecutor 的包装;

:::

自定义线程池有如下模式：

通过查看 Spring 源码关于`@Async`的默认调用规则，会优先查询源码中实现`AsyncConfigurer`这个接口的类，实现这个接口的类为`AsyncConfigurerSupport`。但默认配置的线程池和异步处理方法均为空，所以，无论是继承或者重新实现接口，都需指定一个线程池。且重新实现`public Executor getAsyncExecutor()`方法。

### 重新实现接口 AsyncConfigurer

```java
@Configuration
@EnableAsync
 public class AsyncConfiguration implements AsyncConfigurer {

     @Override
     public Executor getAsyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
         int corePoolSize = 10;
         executor.setCorePoolSize(corePoolSize);
         int maxPoolSize = 50;
         executor.setMaxPoolSize(maxPoolSize);
         int queueCapacity = 10;
         executor.setQueueCapacity(queueCapacity);
         executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
         String threadNamePrefix = "custom-asyncExecutor-";
         executor.setThreadNamePrefix(threadNamePrefix);
         executor.setWaitForTasksToCompleteOnShutdown(true);
         // 使用自定义的跨线程的请求级别线程工厂类19         int awaitTerminationSeconds = 5;
         executor.setAwaitTerminationSeconds(awaitTerminationSeconds);
         executor.initialize();
         return executor;
     }

     @Override
     public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
         return (ex, method, params) -> ErrorLogger.getInstance().log(String.format("执行异步任务'%s'", method), ex);
     }
 }
```

### 继承 AsyncConfigurerSupport

```java
@Configuration
@EnableAsync
class SpringAsyncConfigurer extends AsyncConfigurerSupport {

    @Override
    public Executor getAsyncExecutor() {
        ThreadPoolTaskExecutor threadPool = new ThreadPoolTaskExecutor();
        threadPool.setCorePoolSize(3);
        threadPool.setMaxPoolSize(3);
        threadPool.setWaitForTasksToCompleteOnShutdown(true);
        threadPool.setAwaitTerminationSeconds(60 * 15);
        return threadPool;
    }

  @Override
    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
    return (ex, method, params) -> ErrorLogger.getInstance().log(String.format("执行异步任务'%s'", method), ex);
}
}
```

### 配置自定义的 TaskExecutor

由于`AsyncConfigurer`的默认线程池在源码中为空，Spring 通过`beanFactory.getBean(TaskExecutor.class)`先查看是否有线程池，未配置时，通过`beanFactory.getBean(DEFAULT_TASK_EXECUTOR_BEAN_NAME, Executor.class)`，又查询是否存在默认名称为`TaskExecutor`的线程池。

```java
 @Configuration
 @EnableAsync
 public class TaskPoolConfig {
     @Bean(name = AsyncExecutionAspectSupport.DEFAULT_TASK_EXECUTOR_BEAN_NAME)
     public Executor taskExecutor() {
         ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
          //核心线程池大小
         executor.setCorePoolSize(10);
         //最大线程数
         executor.setMaxPoolSize(20);
         //队列容量
         executor.setQueueCapacity(200);
         //活跃时间
         executor.setKeepAliveSeconds(60);
         //线程名字前缀
         executor.setThreadNamePrefix("taskExecutor-");
         executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
         executor.initialize();
         return executor;
     }
 }
```

### 指定线程池名称

在异步调用时，指明需要调用的线程池名称如`@Async("new_task")`,不用默认方案。

```java
 @Configuration
 @EnableAsync
 public class TaskPoolConfig {
    @Bean(name = "new_task")
     public Executor taskExecutor() {
         ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
          //核心线程池大小
         executor.setCorePoolSize(10);
         //最大线程数
         executor.setMaxPoolSize(20);
         //队列容量
         executor.setQueueCapacity(200);
         //活跃时间
         executor.setKeepAliveSeconds(60);
         //线程名字前缀
         executor.setThreadNamePrefix("taskExecutor-");
         executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
         executor.initialize();
         return executor;
     }
 }
```

:::caution `@Async`失效

- 异步方法使用`static`修饰;
- 异步类没有使用`@Component`注解（或其他注解）导致 spring 无法扫描到异步类;
- 异步方法不能与异步方法在同一个类中;
- 类中需要使用`@Autowired`或`@Resource`等注解自动注入，不能自己手动 new 对象;
- 如果使用 SpringBoot 框架必须在启动类中增加`@EnableAsync`注解;
- 在`Async`方法上标注`@Transactional`是没用的。在`Async方法调用的方法上标注`@Transactional`有效;

:::

## 配置定时任务异步任务

源文[SpringBoot 线程池配置 定时任务，异步任务](https://www.cnblogs.com/gaomanito/p/11120164.html)

```java
@Configuration
@EnableAsync
@EnableScheduling
@Slf4j
public class ExecutorConfig implements SchedulingConfigurer, AsyncConfigurer {

    /**
     * 定时任务使用的线程池
     */
    @Bean(destroyMethod = "shutdown", name = "taskScheduler")
    public ThreadPoolTaskScheduler taskScheduler(){
        ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler();
        scheduler.setPoolSize(10);
        scheduler.setThreadNamePrefix("task-");
        scheduler.setAwaitTerminationSeconds(600);
        scheduler.setWaitForTasksToCompleteOnShutdown(true);
        return scheduler;
    }

    /**
     * 异步任务执行线程池
     */
    @Bean(name = "asyncExecutor")
    public ThreadPoolTaskExecutor asyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(10);
        executor.setQueueCapacity(1000);
        executor.setKeepAliveSeconds(600);
        executor.setMaxPoolSize(20);
        executor.setThreadNamePrefix("taskExecutor-");
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        executor.initialize();
        return executor;
    }

    @Override
    public void configureTasks(ScheduledTaskRegistrar scheduledTaskRegistrar) {
        ThreadPoolTaskScheduler taskScheduler = taskScheduler();
        scheduledTaskRegistrar.setTaskScheduler(taskScheduler);
    }

    @Override
    public Executor getAsyncExecutor() {
        return asyncExecutor();
    }

    @Override
    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
        return (throwable, method, objects) -> {
            log.error("异步任务执行出现异常, message:{}, method:{}, params:{}", throwable, method, objects);
        };
    }

}
```
