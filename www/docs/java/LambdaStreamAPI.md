## Stream.collect()

Stream.collect()是 java 8 stream api 中的终止方法,一般用于流处理中的最后一步。它实现对流实例中保存的数据元素执行可变的折叠操作(将元素重新包装至特定的数据结构中，并应用一些额外逻辑将它们连接起来，等等)。此操作的策略由 Collector 接口实现提供。

### toMap

ToMap 收集器用于收集流元素至 Map 实例
第一个参数就是用来生成 key 值的
第二个参数就是用来生成 value 值的
第三个参数用在 key 值冲突的情况下：如果新元素产生的 key 在 Map 中已经出现过了，第三个参数就会定义解决的办法。
`.collect(Collectors.toMap(UserBo::getUserId, v -> v, (old, new) -> old))`
第一个参数 UserBo::getUserId 表示选择 UserBo 的 getUserId 作为 map 的 key 值；
第二个参数 v -> v 表示选择将原来的对象作为 map 的 value 值；
第三个参数(v1, v2) -> v1 中，如果 v1 与 v2 的 key 值相同，选择 v1 作为那个 key 所对应的 value 值,否则出现 key 重复时，会抛出异常：`Exception in thread "main" java.lang.IllegalStateException: Duplicate key xxx`
**第四个参数**默认是 HashMap::new,可以指定返回类型
`.collect(Collectors.toMap(UserBo::getUserId, v -> v, (old, new) -> old,LinkedHaspMap::new))`

### toList/toSet

ToList 方法可以收集所有流中元素至 List 实例。
ToSet 方法可以收集所有流中元素至 Set 实例。
需要注意的是，使用该方法不能假设任何 List 或 Set 的特定实现，如果你想指定 List 或 Set 实现，需要使用 toCollection 代替.下面示例创建一个流实例表示元素序列，然后收集至 List/Set 实例对象中
`List<String>=Stream.of("a", "b", "c","a").collect(Collectors.toList())`

Set 不包含重复元素。如果集合中有重复元素，则 set 中仅保留一个：

```java
List<String> listWithDuplicates = Arrays.asList("a", "bb", "c", "d", "bb");
Set<String> result = listWithDuplicates.stream().collect(toSet());
assertThat(result).hasSize(4);
```

### toCollection

转换成特定的集合
`List<String> treeSet = Stream.of("a", "c", "b", "a").collect(Collectors.toCollection(LinkedList::new))`
**注意这里不能使用不可变集合实现。通过自定义 Collector 实现或使用 collectingAndThen。**

### minBy

MaxBy/MinBy 收集器根据提供的 Comparator 实例，返回流中最大和最小元素

```java
Optional<Integer> i = Stream.of(3, 5, 2, 1).collect(Collectors.minBy(Integer::compare));
Optional<Integer> i = Stream.of(3, 5, 2, 1).min(Integer::compare);
```

### averagingX

返回流中抽取元素的平均值，下面示例计算字符串长度平均值：
`Double result = Arrays.asList("a", "bb", "ccc", "dd").stream().collect(averagingDouble(String::length));`
averagingInt,averagingDouble...

### summingX

返回抽取元素之和，下面计算所有字符串长度之和：
`Double result = Arrays.asList("a", "bb", "ccc", "dd").stream().collect(summingDouble(String::length));`

summingInt,summingLong...

### summarizingX

返回流中抽取的数值元素的统计结果类型。下面示例获取字符串长度信息：
`
DoubleSummaryStatistics result = Arrays.asList("a", "bb", "ccc", "dd").stream().collect(summarizingDouble(String::length));`
可以获取最大值、最小值、平均值、总和值、总数

```java
DoubleSummaryStatistics summaryStatistics = Stream.of(1, 3, 4).collect(Collectors.summarizingDouble(x -> x));
System.out.println(summaryStatistics .getAverage());
```

summarizingInt,summarizingDouble...

### groupingBy

分组收集器用于根据属性对元素进行分组并存储在 Map 实例中。第二个参数默认 HashMap::new 第三个参数默认 Collectors.toList()

```java
Map<Integer, List<Integer>> map = Stream.of(1, 3, 3, 2).collect(Collectors.groupingBy(Function.identity()));
// map:{1:[1],2:[2],3:[3,3]}
Map<Integer, Integer> map = Stream.of(1, 3, 3, 2).collect(Collectors.groupingBy(Function.identity(), Collectors.summingInt(x -> x)));
// map:{1:1,2:2,3:6}
HashMap<Integer, List<Integer>> map = Stream.of(1, 3, 3, 2).collect(Collectors.groupingBy(Function.identity(), HashMap::new, Collectors.mapping(x -> x + 1, Collectors.toList())));
// map:{1:[2],2:[3],3:[4,4]}
```

**identity()是 Function 类的静态方法,和 x->x 是一个意思**

### partitioningBy

PartitioningBy 是一个特殊分组收集器，依据 Predicate 实例收集流元素至 Map 中，存储 Boolean 值作为 key，值为集合。 “true” 键对应值为已匹配元素的集合，“false” 键为非匹配元素集合。第二个参数默认为 Collectors.toList()

```java
Map<Boolean, List<Integer>> map = Stream.of(1, 3, 3, 2).collect(Collectors.partitioningBy(x -> x > 2));
Map<Boolean, Long> longMap = Stream.of(1, 3, 3, 2).collect(Collectors.partitioningBy(x -> x > 1, Collectors.counting()));
```

### joining

拼接字符串
`Stream.of("1", "3", "3", "2").collect(Collectors.joining(","))`

### collectingAndThen

`Integer integer = Stream.of("1", "2", "3").collect(Collectors.collectingAndThen(Collectors.toList(), x -> x.size()));`
先执行 collect 操作后再执行第二个参数的表达式,这里是先塞到集合，再得出集合长度.

### mapping

跟 Stream 的 map 操作类似，只是参数有点区别

```java
 List<Integer> list = Stream.of(1, 3, 5).collect(Collectors.mapping(x -> x + 1, Collectors.toList()));
List<Integer> list = Stream.of(1, 3, 5).map(x -> x + 1).collect(Collectors.toList());
/**list:[2,4,6]*/
```

### counting

Counting 是一个简单收集器，返回元素数量

### teeing

根据目前我们已经学习的内容求最大值和最小值：

```java
List<Integer> numbers = Arrays.asList(42, 4, 2, 24);
Optional<Integer> min = numbers.stream().collect(minBy(Integer::compareTo));
Optional<Integer> max = numbers.stream().collect(maxBy(Integer::compareTo));
// do something useful with min and max
```

这里，我们使用两个不用的收集器，然后合并集合去实现相应业务。在 Java 12 之前,为了实现这样功能必须对流执行两次操作，把中间结果存储至临时对象中，最后合并返回。
幸运的是，java 12 提供了内置收集器帮助我们处理这些步骤：我们仅需提供两个收集器和合并函数。
因为新的收集器 tee 对流执行两个不用方向的操作，故称为 T 收集器：

```java
numbers.stream().collect(teeing(
  minBy(Integer::compareTo), // The first collector
  maxBy(Integer::compareTo), // The second collector
  (min, max) -> // Receives the result from those collectors and combines them
));
```

## flatMap 和 map 的区别

map:Returns a stream consisting of the results of applying the given function to the elements of this stream.
_返回一个流，包含给定函数应用在流中每一个元素后的结果_

flatmap:Returns a stream consisting of the results of replacing each element of this stream with the contents of a mapped stream produced by applying the provided mapping function to each element.
_返回一个流，包含将此流中的每个元素替换为通过给定函数映射应用于每个元素而生成的映射流的内容_

例子：有二箱鸡蛋，每箱 5 个，现在要把鸡蛋加工成煎蛋，然后分给学生。

map 做的事情：把二箱鸡蛋分别加工成煎蛋，还是放成原来的两箱，分给 2 组学生；

flatMap 做的事情：把二箱鸡蛋分别加工成煎蛋，然后放到一起【10 个煎蛋】，分给 10 个学生；

测试代码如下：

```java
public class Map_FlatMap {
    List<String[]> eggs = new ArrayList<>();
    @Before
    public void init() {
        // 第一箱鸡蛋
        eggs.add(new String[]{"鸡蛋_1", "鸡蛋_1", "鸡蛋_1", "鸡蛋_1", "鸡蛋_1"});
        // 第二箱鸡蛋
        eggs.add(new String[]{"鸡蛋_2", "鸡蛋_2", "鸡蛋_2", "鸡蛋_2", "鸡蛋_2"});
    }

    // 自增生成组编号
    static int group = 1;
    // 自增生成学生编号
    static int student = 1;

    /**
     * 把二箱鸡蛋分别加工成煎蛋，还是放在原来的两箱，分给2组学生
     */
    @Test
    public void map() {
        eggs.stream()
                .map(x -> Arrays.stream(x).map(y -> y.replace("鸡", "煎")))
                .forEach(x -> System.out.println("组" + group++ + ":" + Arrays.toString(x.toArray())));
        /*
        控制台打印：------------
        组1:[煎蛋_1, 煎蛋_1, 煎蛋_1, 煎蛋_1, 煎蛋_1]
        组2:[煎蛋_2, 煎蛋_2, 煎蛋_2, 煎蛋_2, 煎蛋_2]
         */
    }

    /**
     * 把二箱鸡蛋分别加工成煎蛋，然后放到一起【10个煎蛋】，分给10个学生
     */
    @Test
    public void flatMap() {
        eggs.stream()
                .flatMap(x -> Arrays.stream(x).map(y -> y.replace("鸡", "煎")))
                .forEach(x -> System.out.println("学生" + student++ + ":" + x));
        /*
        控制台打印：------------
        学生1:煎蛋_1
        学生2:煎蛋_1
        学生3:煎蛋_1
        学生4:煎蛋_1
        学生5:煎蛋_1
        学生6:煎蛋_2
        学生7:煎蛋_2
        学生8:煎蛋_2
        学生9:煎蛋_2
        学生10:煎蛋_2
         */
    }
}
```

## Stream.reduce()

Stream.reduce()合并流的元素并产生单个值

- 数学运算

```java
int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
int sum = Arrays.stream(numbers).reduce(0, (a, b) -> a + b);    // 55
int sum2 = Arrays.stream(numbers).reduce(0, Integer::sum);      // 55
int sum3 = Arrays.stream(numbers).reduce(0, (a, b) -> a - b);   // -55
int sum4 = Arrays.stream(numbers).reduce(0, (a, b) -> a * b);   // 0, initial is 0, 0 * whatever = 0
int sum5 = Arrays.stream(numbers).reduce(0, (a, b) -> a / b);   // 0
```

- 最大和最小

```java
int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
int max = Arrays.stream(numbers).reduce(0, (a, b) -> a > b ? a : b);  // 10
int max1 = Arrays.stream(numbers).reduce(0, Integer::max);            // 10
int min = Arrays.stream(numbers).reduce(0, (a, b) -> a < b ? a : b);  // 0
int min1 = Arrays.stream(numbers).reduce(0, Integer::min);            // 0
```

- 连接字符串

```java
String[] strings = {"a", "b", "c", "d", "e"};
  // |a|b|c|d|e , the initial | join is not what we want
  String reduce = Arrays.stream(strings).reduce("", (a, b) -> a + "|" + b);

  // a|b|c|d|e, filter the initial "" empty string
  String reduce2 = Arrays.stream(strings).reduce("", (a, b) -> {
      if (!"".equals(a)) {
          return a + "|" + b;
      } else {
          return b;
      }
  });
  // a|b|c|d|e , better uses the Java 8 String.join :)  （最好使用 Java 8 的 String.join）
  String join = String.join("|", strings);
```
