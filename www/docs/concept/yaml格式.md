YAML 的意思其实是："Yet Another Markup Language"（仍是一种置标语言）的缩写。

首先 YAML 中允许表示三种格式，分别是常量值，对象和数组，如：

```yaml
#即表示url属性值；
url: http://www.baidu.com
#即表示server.host属性的值；
server:
    host: http://www.baidu.com
#数组，即表示server为[a,b,c]
server:
    - a
    - b
    - c
#常量
pi: 3.14   #定义一个数值3.14
hasChild: true  #定义一个boolean值
name: '你好YAML'   #定义一个字符串

```

## 注释

和 properties 相同，使用#作为注释，YAML 中只有行注释

## 基本格式要求

- YAML 大小写敏感；
- 使用缩进代表层级关系；
- 缩进只能使用空格，不能使用 TAB，不要求空格个数，只需要相同层级左对齐；

## 对象

使用冒号代表，格式为`key: value`，**冒号后面要加一个空格** `key: value` ，可以使用缩进表示层级关系：

```yaml
key:
  child-key: value
  child-key2: value2
```

YAML 中还支持流式(flow)语法表示对象，比如上面例子可以写为 `key: {child-key: value, child-key2: value2}`

较为复杂的对象格式，可以使用问号加一个空格代表一个复杂的 key，配合一个冒号加一个空格代表一个 value：

```yaml
? - complexkey1
  - complexkey2
: - complexvalue1
  - complexvalue2
```

意思即对象的属性是一个数组`[complexkey1, complexkey2]`，对应的值也是一个数组`[complexvalue1, complexvalue2]`

## 数组

使用**一个短横线加一个空格**代表一个数组项：

```yaml
hobby:
  - Java
  - LOL
```

`[[Java, LOL]]`可以这样写：

```yaml
- - Java
  - LOL
```

一个相对复杂的例子:

```yaml
companies:
  - id: 1
    name: company1
    price: 200W
  - id: 2
    name: company2
    price: 500W
```

使用流式(flow)的方式表示 `companies: [{id: 1,name: company1,price: 200W},{id: 2,name: company2,price: 500W}]`

## 常量

YAML 中提供了多种常量结构，包括：整数，浮点数，字符串，NULL，日期，布尔，时间。

```yaml
boolean:
  - TRUE #true,True都可以
  - FALSE #false，False都可以
float:
  - 3.14
  - 6.8523015e+5 #可以使用科学计数法
int:
  - 123
  - 0b1010_0111_0100_1010_1110 #二进制表示
null:
  nodeName: "node"
  parent: ~ #使用~表示null
string:
  - 哈哈
  - "Hello world" #可以使用双引号或者单引号包裹特殊字符
  - newline
    newline2 #字符串可以拆成多行，每一行会被转化成一个空格
date:
  - 2018-02-17 #日期必须使用ISO 8601格式，即yyyy-MM-dd
datetime:
  - 2018-02-17T15:02:31+08:00 #时间使用ISO 8601格式，时间和日期之间使用T连接，最后使用+代表时区
```

## 一些特殊符号

YAML 中提供了很多特殊符号，在这里简单介绍常用的一些：

### `---`

YAML 可以在同一个文件中，使用`---`表示一个文档的开始, 比如 Springboot 中 profile 的定义：

```yaml
server:
  address: 192.168.1.100
---
spring:
  profiles: development
  server:
    address: 127.0.0.1
---
spring:
  profiles: production
  server:
    address: 192.168.1.120
```

代表定义了两个 profile，一个是 development，一个 production；

也常常使用`---`来分割不同的内容，比如记录日志：

```yaml
---
Time: 2018-02-17T15:02:31+08:00
User: ed
Warning: This is an error message for the log file
---
Time: 2018-02-17T15:05:21+08:00
User: ed
Warning: A slightly different error message.
```

### `!!`

YAML 中使用`!!` 做类型强行转换：

```yaml
string:
  - !!str 54321
  - !!str true
```

相当于把数字和布尔类型强转为字符串。当然允许转型的类型很多，比如：

```yaml
---
!!set
- Mark McGwire: 65
- Sammy Sosa: 63
- Sammy Sosa: 63
- Ken Griffy: 58
```

将数组解析为 set，简单理解，转化的内容就是：[{Ken Griffy=58}, {Mark McGwire=65}, {Sammy Sosa=63}]，重复的 Sammy Sosa 去掉。

### `>`与`|`

`>` 在字符串中折叠换行，`|` 保留换行符，这两个符号是 YAML 中字符串经常使用的符号，比如：

```yaml
cmd: docker run
  --name my-nginx
  -d nginx
accomplishment: >
  Mark set a major league
  home run record in 1998.
stats: |
  65 Home Runs
  0.278 Batting Average
```

- YAML 默认会把换行符转换成空格，`cmd=docker run --name my-nginx -d nginx `
- `|`符号保留了换行符`stats=65 Home Runs\n0.278 Batting Average`，
- accomplishment 的结果为 `accomplishment=Mark set a major league home run record in 1998.`即将换行符转化成了空格；

**要注意一点的是，每行的文本前一定要有一个空格**。

`|`符号常见用于在 YAML 中配置 HTML 片段：

```yaml
phraseTemplate: |
  <p style="color: red">
    some template ${msg}
  </p>
```

### 引用(`&`, `*`)

重复的内容在 YAML 中可以使用`&`来完成锚点定义，使用`*`来完成锚点引用，例如：

```yaml
hr:
  - Mark McGwire
  - &SS Sammy Sosa
rbi:
  - *SS
  - Ken Griffey
```

可以看到，在 hr 中，使用`&SS` 为 Sammy Sosa 设置了一个锚点（引用），名称为 SS，在 rbi 中，使用`*SS` 完成了锚点使用，那么结果为 `{rbi=[Sammy Sosa, Ken Griffey], hr=[Mark McGwire, Sammy Sosa]}` 我们也可以这样定义：

```yaml
SS: &SS Sammy Sosa
hr:
  - Mark McGwire
  - *SS
rbi:
  - *SS
  - Ken Griffey
```

注意，不能独立的定义锚点，比如不能直接这样写 `&SS Sammy Sosa` ；另外，锚点能够定义更复杂的内容，比如：

```yaml
default: &default
  - Mark McGwire
  - Sammy Sosa
hr: *default
```

那么 hr 相当于引用了 default 的数组，注意，hr: `*default` 要写在同一行。

### 合并内容

主要和锚点配合使用，可以将一个锚点内容直接合并到一个对象中，看一个示例：

```yaml
merge:
  - &CENTER { x: 1, y: 2 }
  - &LEFT { x: 0, y: 2 }
  - &BIG { r: 10 }
  - &SMALL { r: 1 }

sample1:
  <<: *CENTER
  r: 10

sample2:
  <<: [*CENTER, *BIG]
  other: haha

sample3:
  <<: [*CENTER, *BIG]
  r: 100
```

在 merge 中，定义了四个锚点，分别在 sample 中使用。  
sample1 中，<<: `*CENTER` 意思是引用{x: 1, y: 2}，并且合并到 sample1 中，那么合并的结果为：sample1={r=10, y=2, x=1}。  
sample2 中，<<: `[*CENTER, *BIG]` 意思是联合引用{x: 1, y: 2}和{r: 10}，并且合并到 sample2 中，那么合并的结果为：sample2={other=haha, x=1, y=2, r=10}。  
sample3 中，引入了`*CENTER, *BIG`，还使用了 r: 100 覆盖了引入的 r: 10，所以 sample3 值为：sample3={r=100, y=2, x=1}。  
有了合并，我们就可以在配置中，把相同的基础配置抽取出来，在不同的子配置中合并引用即可。

## More

- [YAML1.2 规范](http://yaml.org/spec/1.2/spec.pdf)
- [JS-YAML 在线示例](http://nodeca.github.io/js-yaml/)
