## 方式一

```bash
while read line
do
  echo $line
done < fileName(待读取的文件)
```

## 方式二

```bash
cat fileName(待读取的文件) | while read line
do
  echo $line
done
```

## 方式三

```bash
for line in `cat fileName(待读取的文件)`
do
  echo $line
done
```

:::caution 注意
while 是完全按行读取，不管行内有多少段文字；  
for 是按行读取，如果行内有空格则分开读取，即一次读取一个字符串;
:::
