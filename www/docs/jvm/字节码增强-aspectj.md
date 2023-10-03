## 使用切面文件

```java
//服务编码
public class NameService {
    public void printName(String name){
        System.out.println(name);
        try {
            Thread.sleep(1000L);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

编写切面文件 `WasteTime.aj`：

```java
public aspect WasteTime {

    pointcut print():execution(void NameService.printName(..));

    void around(): print(){
        long cost = System.currentTimeMillis();
        proceed();
        cost = System.currentTimeMillis() - cost;
        System.out.println("method printName cost :" + cost);
    }
}
```

```java
//采用AspectJ编译器编译后执行
public class Main {
    public static void main(String[] args) {
        NameService nameService = new NameService();
        nameService.printName("tiang");
    }
}
/**结果
tiang
method printName cost :1000
**/
```

将编译后的 NamService.class 文件进行反编译:

```java
public class NameService
{
    public void printName(final String name) {
        printName_aroundBody1$advice(this, name, WasteTime.aspectOf(), null);
    }
    // 原方法
    private static final /* synthetic */ void printName_aroundBody0(final NameService ajc$this, final String name) {
        System.out.println(name);
        try {
            Thread.sleep(1000L);
        }
        catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    // 增强的代码与原方法耦合
    private static final /* synthetic */ void printName_aroundBody1$advice(final NameService ajc$this, final String name, final WasteTime ajc$aspectInstance, final AroundClosure ajc$aroundClosure) {
        long cost = System.currentTimeMillis();
        printName_aroundBody0(ajc$this, name);
        cost = System.currentTimeMillis() - cost;
        System.out.println("method printName cost :" + cost);
    }
}
```

从反编译之后的结果可以看出，增强的部分代码被直接编译整合进了原有类的代码中。顺便一提的是，aspectJ 除了支持自定义的`.aj` 文件进行切面之外，还支持直接使用 java 代码通过注解@Before、@Around 等进行编码，这一点也被后来的 spring 所借鉴。

## 使用注解

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
