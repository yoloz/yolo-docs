读取 inputStream 生成字符串方式

## JDK

### Scanner

```java
Scanner s = new Scanner(inputStream).useDelimiter("\A");
String result = s.hasNext() ? s.next() : "";
```

### Stream Api

```java
String result = new BufferedReader(new InputStreamReader(inputStream)).lines().collect(Collectors.joining("\n"));
String result = new BufferedReader(new InputStreamReader(inputStream)).lines().parallel().collect(Collectors.joining("\n"));  //并行
```

:::caution 注意
会将将不同的换行符（如\r\n）转换为\n
:::

### InputStreamReader 和 StringBuilder

```java
final int bufferSize = 1024;
final char[] buffer = new char[bufferSize];
final StringBuilder out = new StringBuilder();
Reader in = new InputStreamReader(inputStream, "UTF-8");
for (; ;) {
    int rsz = in.read(buffer, 0, buffer.length);
    if (rsz < 0) break;
    out.append(buffer, 0, rsz);
}
return out.toString();
```

### ByteArrayOutputStream

```java
ByteArrayOutputStream result = new ByteArrayOutputStream();
byte[] buffer = new byte[1024];
int length;
while ((length = inputStream.read(buffer)) != -1) result.write(buffer, 0, length);
// StandardCharsets. UTF_8.name() > JDK 7
return result.toString("UTF-8");
```

### BufferedReader

```java
String newLine = System.getProperty("line.separator");
BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
StringBuilder result = new StringBuilder();
String line; boolean flag = false;
while ((line = reader.readLine()) != null) {
    result.append(flag? newLine: "").append(line);
    flag = true;
}
return result.toString();
```

:::caution 注意
会将不同的换行符（如\n\r）转换为 line.separator 系统属性（例如，在 Windows 中为“\ r \ n”）
:::

### BufferedInputStream 和 ByteArrayOutputStream

```java
BufferedInputStream bis = new BufferedInputStream(inputStream);
ByteArrayOutputStream buf = new ByteArrayOutputStream();
int result = bis.read();
while(result != -1) {
    buf.write((byte) result);
    result = bis.read();
}
// StandardCharsets.UTF_8.name() > JDK 7
return buf.toString("UTF-8");
```

### StringBuilder

```java
int ch;
StringBuilder sb = new StringBuilder();
while((ch = inputStream.read()) != -1) sb.append((char)ch);
reset();
return sb.toString();
```

:::caution
存在 Unicode 问题，例如使用文本（只能使用非 Unicode 文本正常工作）
:::

## 工具包

### IOUtils.toString(Apache Utils)

`String result = IOUtils.toString(inputStream, StandardCharsets.UTF_8);`

### CharStreams(guava)

`String result = CharStreams.toString(new InputStreamReader(inputStream, Charsets.UTF_8));`

### IOUtils.copy(Apache Commons)

```java
StringWriter writer = new StringWriter();
IOUtils.copy(inputStream, writer, "UTF-8");
return writer.toString();
```

## 比较

### 对于小型 String（长度=175）

| Benchmark                                    | Mode | Cnt | Score          |
| :------------------------------------------- | :--- | :-- | :------------- |
| ByteArrayOutputStream                        | avgt | 10  | 1,343 ± 0,028  |
| InputStreamReader and StringBuilder          | avgt | 10  | 6,980 ± 0,404  |
| BufferedInputStream 和 ByteArrayOutputStream | avgt | 10  | 7,437 ± 0,735  |
| StringBuilder                                | avgt | 10  | 8,977 ± 0,328  |
| IOUtils.copy                                 | avgt | 10  | 10,613 ± 0,599 |
| IOUtils.toString                             | avgt | 10  | 10,605 ± 0,527 |
| Scanner                                      | avgt | 10  | 12,083 ± 0,293 |
| CharStreams                                  | avgt | 10  | 12,999 ± 0,514 |
| Stream Api                                   | avgt | 10  | 15,811 ± 0,605 |
| BufferedReader                               | avgt | 10  | 16,038 ± 0,711 |
| parallel Stream Api                          | avgt | 10  | 21,544 ± 0,583 |

### 对于大 String（长=50100）

| Benchmark                                    | Mode | Cnt | Score               |
| :------------------------------------------- | :--- | :-- | :------------------ |
| ByteArrayOutputStream                        | avgt | 10  | 200,715 ± 18,103    |
| IOUtils.toString                             | avgt | 10  | 300,019 ± 8,751     |
| InputStreamReader and StringBuilder          | avgt | 10  | 347,616 ± 130,348   |
| IOUtils.copy                                 | avgt | 10  | 352,791 ± 105,337   |
| CharStreams                                  | avgt | 10  | 420,137 ± 59,877    |
| BufferedReader                               | avgt | 10  | 632,028 ± 17,002    |
| parallel Stream Api                          | avgt | 10  | 662,999 ± 46,199    |
| Stream Api                                   | avgt | 10  | 701,269 ± 82,296    |
| BufferedInputStream 和 ByteArrayOutputStream | avgt | 10  | 740,837 ± 5,613     |
| Scanner                                      | avgt | 10  | 751,417 ± 62,026    |
| StringBuilder                                | avgt | 10  | 2919,350 ± 1101,942 |
