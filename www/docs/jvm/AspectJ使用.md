## spring boot

```xml
<dependency>
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjweaver</artifactId>
    <version>1.9.19</version>
</dependency>
```

- @Before: 前置通知, 在方法执行之前执行;
- @After: 后置通知, 在方法执行之后执行;
- @AfterRunning: 返回通知, 在方法返回结果之后执行;
- @AfterThrowing: 异常通知, 在方法抛出异常之后;
- @Around: 环绕通知, 围绕着方法执行;

### Before

用@Before 标识的方法为前置方法，在目标方法的执行之前执行，即在连接点之前进行执行

```java
@Component
@Aspect
public class AspectTest {
// 配置切入点
@Pointcut("@annotation(com.xxxxx.annotation.Permission)")
public void pointcut() {
}

@Before("pointcut()")
public void checkPermission(JoinPoint joinPoint) throws Throwable {
    // ...
    if (!permissions.contains(permission.value())) {
        throw new Exception("无权限操作!");
    }
}
}
```

或者：

```java
@Before("execution(public int com.xxx.*(int, int))")
public void beforMethod(JoinPoint point){
    String methodName = point.getSignature().getName();
    List<Object> args = Arrays.asList(point.getArgs());
    System.out.println("调用前连接点方法为：" + methodName + ",参数为：" + args);
}
```

### @After

后置方法在连接点方法完成之后执行，无论连接点方法执行成功还是出现异常，都将执行后置方法

```java
@Component
@Aspect
public class AspectTest {
@After(("execution(public int com.xxx.*(int, int))"))
public void afterMethod(JoinPoint point){
    String methodName = point.getSignature().getName();
    List<Object> args = Arrays.asList(point.getArgs());
    System.out.println("调用后连接点方法为：" + methodName + ",参数为：" + args);
}
}
```

### @AfterRunning

当连接点方法成功执行后，返回通知方法才会执行，如果连接点方法出现异常，则返回通知方法不执行。所以可以拿到目标方法(连接点方法)执行后的结果

```java
@Component
@Aspect
public class AspectTest {
 /*通过returning属性指定连接点方法返回的结果放置在result变量中，在返回通知方法中可以从result变量中获取连接点方法的返回结果了。*/
@AfterReturning(value="execution(public int com.xxx.*(int, int))", returning="result")
public void afterReturning(JoinPoint point, Object result){
    String methodName = point.getSignature().getName();
    List<Object> args = Arrays.asList(point.getArgs());
    System.out.println("连接点方法为：" + methodName + ",参数为：" + args + ",目标方法执行结果为：" + result);
}
}
```

### @AfterThrowing

异常通知方法只在连接点方法出现异常后才会执行，否则不执行

```java
@Component
@Aspect
public class AspectTest {
/*通过throwing属性指定连接点方法出现异常信息存储在ex变量中，在异常通知方法中就可以从ex变量中获取异常信息了*/
@AfterThrowing(value="execution(public int com.xxx.*(int, int))", throwing="ex")
public void afterReturning(JoinPoint point, Exception ex){
    String methodName = point.getSignature().getName();
    List<Object> args = Arrays.asList(point.getArgs());
    System.out.println("连接点方法为：" + methodName + ",参数为：" + args + ",异常为：" + ex);
}
}
```

### @Around

环绕通知方法可以包含上面四种通知方法，环绕通知的功能最全面。

环绕通知需要携带 ProceedingJoinPoint 类型的参数，且环绕通知必须有返回值, 返回值即为目标方法的返回值。

```java
@Component
@Aspect
public class AspectTest {
@Around("execution(public int com.xxx.*(int, int))")
public Object aroundMethod(ProceedingJoinPoint pdj){
    /*result为连接点的放回结果*/
    Object result = null;
    String methodName = pdj.getSignature().getName();

    /*前置通知方法*/
    System.out.println("前置通知方法>目标方法名：" + methodName + ",参数为：" + Arrays.asList(pdj.getArgs()));

    /*执行目标方法*/
    try {
        result = pdj.proceed();

        /*返回通知方法*/
        System.out.println("返回通知方法>目标方法名" + methodName + ",返回结果为：" + result);
    } catch (Throwable e) {
        /*异常通知方法*/
        System.out.println("异常通知方法>目标方法名" + methodName + ",异常为：" + e);
    }

    /*后置通知*/
    System.out.println("后置通知方法>目标方法名" + methodName);

    return result;
}
}
```
