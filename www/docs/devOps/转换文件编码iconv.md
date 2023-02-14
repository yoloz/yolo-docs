## 用途说明

iconv 命令是用来转换文件的编码方式的，比如它可以将 UTF8 编码的转换成 GB18030 的编码，反过来也行。JDK 中也提供了类似的工具 native2ascii。

## 常用参数

格式：`iconv -f from-encoding -t to-encoding inputfile`会把输出打印在屏幕上，如果要输出到文件：`iconv -f from-encoding -t to-encoding inputfile -o outputfile`

:::tip

- `iconv -l`查看支持的字符编码；
- `file -i inputfile`查看文件的编码

:::

## 用例

```bash
#将Google香港的Big5编码转换成GBK编码
yoloz@debian:~$ curl -s http://www.google.com.hk/ | iconv -f big5 -t gbk
yoloz@debian:~$ iconv -f utf-16le -t utf-8  2023_2_10.log -o test.log
```

:::caution

- 如果输出编码后面添加了 //IGNORE 字符串，那些不能被转换的字符将不会被转换，并且在转换后，程序会显示一条错误信息。如：`iconv -f ISO-8859-1 -t UTF-8//IGNORE input.file -o out.file`
- 如果字符串 //TRANSLIT 被添加到了上面例子中的输出编码之后 (UTF-8//TRANSLIT)，待转换的字符会尽量采用形译原则。也就是说，如果某个字符在输出编码方案中不能被表示的话，它将会被替换为一个形状比较相似的字符。而且如果一个字符不在输出编码中，而且不能被形译，它将会在输出文件中被一个问号标记 ? 代替。

:::
