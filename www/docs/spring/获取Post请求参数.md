## 接收`form-data`格式的数据

### 接收`Form`表单数据

```java
@RestController
public class HelloController {
    @PostMapping("/hello")
    public String hello(@RequestParam("name") String name,
                        @RequestParam("age") Integer age) {
        return "name：" + name + "\nage：" + age;
    }
}
```

> 可以简写`(String name,Integer age)`

### 参数非必需的情况

- 使用`required=false`标注参数是非必须的;
- 使用`defaultValue`给参数指定个默认值;

```java
@RestController
public class HelloController {
    @PostMapping("/hello")
    public String hello(@RequestParam(name = "name", defaultValue = "xxx") String name,
                        @RequestParam(name = "age", required = false) Integer age) {
        return "name：" + name + "\nage：" + age;
    }
}
```

### 接收一个数组

```java
@RestController
public class HelloController {
    @PostMapping("/hello")
    public String hello(@RequestParam("name") String[] names) {
        String result = "";
        for(String name:names){
            result += name + "\n";
        }
        return result;
    }
}
```

### 使用`map`来接收对象

```java
@RestController
public class HelloController {
    @PostMapping("/hello")
    public String hello(@RequestParam Map<String,Object> params) {
        return "name：" + params.get("name") + "\nage：" + params.get("age");
    }
}
```

### 使用`bean`来接受对象

```java
@RestController
public class HelloController {
    @PostMapping("/hello")
    public String hello(User user) {
        return "name：" + user.getName() + "\nage：" + user.getAge();
    }
}

@Getter
@Setter
public class User {
    private String name;
    private Integer age;
}
```

> 如果传递的参数有前缀，且前缀与接收实体类的名称相同，那么参数也是可以正常传递的 key(user.name,user.aget)

- 如果请求的参数分属不同的对象，也可以使用多个对象来接收参数

```java
@RestController
public class HelloController {
    @PostMapping("/hello")
    public String hello(User user, Phone phone) {
        return "name：" + user.getName() + "\nage：" + user.getAge()
                + "\nnumber：" + phone.getNumber();
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

- 使用对象接收时指定参数前缀

```java
@RestController
public class HelloController {
    @PostMapping("/hello")
    public String hello(@ModelAttribute("u") User user) {
        return "name：" + user.getName() + "\nage：" + user.getAge();
    }

    @InitBinder("u")
    private void initBinder(WebDataBinder binder) {
        binder.setFieldDefaultPrefix("u.");
    }
}
```

更多`InitBinder`信息可见[获取 Get 请求参数](./获取Get请求参数.md)

## 接收字符串文本数据

如果传递过来的是`Text`文本，我们可以通过`HttpServletRequest`获取输入流从而读取文本内容

```java
@RestController
public class HelloController {
    @PostMapping("/hello")
    public String hello(HttpServletRequest request) {
        ServletInputStream is = null;
        try {
            is = request.getInputStream();
            StringBuilder sb = new StringBuilder();
            byte[] buf = new byte[1024];
            int len = 0;
            while ((len = is.read(buf)) != -1) {
                sb.append(new String(buf, 0, len));
            }
            System.out.println(sb.toString());
            return "获取到的文本内容为：" + sb.toString();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (is != null) {
                    is.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;
    }
}
```

## 接收`JSON`数据

### 基本类型数据

使用`@requestbody`接收参数将数据转换为基本类型

```java
@RestController
public class HelloController {
    @PostMapping("/hello")
    public String hello(@RequestBody Integer id) {
        return "id: " + id;
    }
}
```

### 使用`Map`来接收数据

使用`@requestbody`接收参数将数据转换`Map`

```java
@RestController
public class HelloController {
    @PostMapping("/hello")
    public String hello(@RequestBody Map params) {
        return "name：" + params.get("name") + "\n age：" + params.get("age");
    }
}
```

### 使用`Bean`对象来接收数据

使用`@requestbody`接收参数将数据直接转换成对象

```java
@RestController
public class HelloController {
    @PostMapping("/hello")
    public String hello(@RequestBody User user){
        return user.getName() + " " + user.getAge();
    }
}

@Getter
@Setter
public class User {
    private String name;
    private Integer age;
}
```

### 接收`JOSN`数组

```java
@RestController
public class HelloController {
    @PostMapping("/hello")
    public String hello(@RequestBody List<User> users){
        String result = "";
        for(User user:users){
            result += user.getName() + " " + user.getAge() + "\n";
        }
        return result;
    }
}

@Getter
@Setter
public class User {
    private String name;
    private Integer age;
}
```

> 基本类型:`(@RequestBody List<Integer> ids)`
