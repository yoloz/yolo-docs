从标准输入或文件中读取数据，根据指定的格式来转换数据，再输出到文件、设备或标准输出。

## 向一个指定的目录下面产生指定大小的文件

```bash
#从/dev/zero这个文件中拷贝两个块大小为2M的数据块到./hello.txt文件中，结果就是产生./hello.txt文件，这个文件大小是4M
yoloz@debian:~$ dd   if=/dev/zero   of=./hello.txt   bs=2M   count=2
#/dev/zero特殊的字符设备，返回0值字节（\0)
```

:::note

- if（input file）：输入文件
- of（output file）：输出文件
- bs（block size）：块大小
- count ：块数

:::

## 将文件中的所有英文字母转换为大写

```bash
#将testfile文件中的所有英文字母转换为大写，然后转成为testfile_1文件
yoloz@debian:~$ dd if=testfile_2 of=testfile_1 conv=ucase
```

:::note

- ucase:把小写字符转换为大写字符.其他关键字略

:::
