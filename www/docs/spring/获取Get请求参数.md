## 参数直接在路径中

```java
// http://localhost:8080/hello/hangge

@RestController
public class HelloController {
    @GetMapping("/hello/{name}")
    public String hello(@PathVariable("name") String name) {
        return "获取到的name是：" + name;
    }
}
```

## 参数跟在`?`号后面

```java
// http://localhost:8080/hello?name=hangge

@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello(@RequestParam("name") String name) {
        return "获取到的name是：" + name;
    }
}
```

## 参数非必要的情况

- 可以使用`required=false`标注参数是非必须的

```java
@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello(@RequestParam(name = "name", required = false) String name) {
        return "获取到的name是：" + name;
    }
}
```

- 可以指定个默认值，当没有传递参数时自动使用默认值

```java
@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello(@RequestParam(name = "name", defaultValue = "xxx") String name) {
        return "获取到的name是：" + name;
    }
}
```

## 接收一个数组

请求地址有多个同名参数

```java
// http://localhost:8080/hello?name=hangge&name=google

@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello(@RequestParam("name") String[] names) {
        String result = "";
        for(String name:names){
            result += name + "<br>";
        }
        return result;
    }
}
```

## 使用`map`来接收对象参数

```java
// http://localhost:8080/hello?name=hangge&age=111

@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello(@RequestParam Map<String, Object> params) {
        return "name：" + params.get("name") + "<br>age：" + params.get("age");
    }
}
```

## 使用`Bean`来接收对象参数

```java
// http://localhost:8080/hello?name=hangge&age=111

@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello(User user) {
        return "name：" + user.getName() + "<br> age：" + user.getAge();
    }
}

@Getter
@Setter
public class User {
    private String name;
    private Integer age;
}
```

> 如果传递的参数有前缀且前缀与接收实体类的名称相同，那么参数也是可以正常传递的：`http://localhost:8080/hello?user.name=hangge&user.age=111`

### 指定参数前缀

如果传递的参数有前缀且前缀与接收实体类的名称不同:`http://localhost:8080/hello?test.name=hangge&test.age=111`

```java
@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello(@ModelAttribute("test") User user) {
        return "name：" + user.getName() + "<br> age：" + user.getAge();
    }

    @InitBinder("test")
    private void initBinder(WebDataBinder binder) {
        binder.setFieldDefaultPrefix("test.");
    }
}
```

更多信息可参考[@ControllerAdvice 的使用详解 3](https://www.hangge.com/blog/cache/detail_2483.html)

## 接受多个对象参数

```java
// http://localhost:8080/hello?name=hangge&age=111&number=123456

@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello(User user, Phone phone) {
        return "name：" + user.getName() + "<br> age：" + user.getAge()
                + "<br> number：" + phone.getNumber();
    }
}

@Getter
@Setter
public class User {
    private String name;
    private Integer age;
}

@Getter
@Setter
public class Phone {
    private String number;
}
```

### 多个对象属性相同处理

有两个实体类 `User` 和 `Book`：

```java
@Getter
@Setter
public class User {
    private String name;
    private Integer age;
}

@Getter
@Setter
public class Book {
    private String name;
    private Float price;
}
```

`Contoller`上需要接收两个实体类的数据，接收方法定义如下：

```java
// http://localhost:8080/hello?name=hangge&age=111&name=bookname&price=66.6

@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello(User user, Book book) {
        return "name：" + user.getName() + " | age：" + user.getAge() + "<br>"
                + "name：" + book.getName() + " | price：" + book.getPrice();
    }
}
```

由于两个实体类中都有`name`属性，那么参数传递时就会发生混淆。

使用`@ControllerAdvice`结合`@InitBinder`解决上面的问题，这里我们创建一个全局的参数预处理配置:

> 也可以在`Cotroller`里面使用`@InitBinder`来单独定义预处理方法,见上文[指定参数前缀](#指定参数前缀)

```java
@ControllerAdvice
public class GlobalConfig {

    // @InitBinder("user") 表示该方法是处理 Controller 中 @ModelAttribute("user") 对应的参数。
    // 方法中给相应的 Filed 设置一个前缀
    @InitBinder("user")
    public void init1(WebDataBinder binder) {
        binder.setFieldDefaultPrefix("user.");
    }

    //  @InitBinder("book") 表示该方法是处理 Controller 中 @ModelAttribute("book") 对应的参数
    // 方法中给相应的 Filed 设置一个前缀
    @InitBinder("book")
    public void init2(WebDataBinder binder) {
        binder.setFieldDefaultPrefix("book.");
    }
}
```

> 在`WebDataBinder`对象中，除了可以设置前缀，还可以设置允许、禁止的字段、必填字段以及验证器等等。

`Controller`的定义更新：`http://localhost:8080/hello?user.name=hangge&user.age=111&book.name=bookname&book.price=66.6`

```java
@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello(@ModelAttribute("user") User user,
                        @ModelAttribute("book") Book book) {
        return "name：" + user.getName() + " | age：" + user.getAge() + "<br>"
                + "name：" + book.getName() + " | price：" + book.getPrice();
    }
}
```
