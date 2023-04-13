| 格式                         | 说明                                                                         |
| ---------------------------- | ---------------------------------------------------------------------------- |
| `${string: start :length}`   | 从 string 字符串的左边第 start 个字符开始，向右截取 length 个字符。          |
| `${string: start}`           | 从 string 字符串的左边第 start 个字符开始截取，直到最后。                    |
| `${string: 0-start :length}` | 从 string 字符串的右边第 start 个字符开始，向右截取 length 个字符。          |
| `${string: 0-start}`         | 从 string 字符串的右边第 start 个字符开始截取，直到最后。                    |
| `${string#*chars}`           | 从 string 字符串第一次出现 *chars 的位置开始，截取 *chars 右边的所有字符。   |
| `${string##*chars}`          | 从 string 字符串最后一次出现 *chars 的位置开始，截取 *chars 右边的所有字符。 |
| `${string%*chars}`           | 从 string 字符串第一次出现 *chars 的位置开始，截取 *chars 左边的所有字符。   |
| `${string%%*chars}`          | 从 string 字符串最后一次出现 *chars 的位置开始，截取 *chars 左边的所有字符。 |

例子：
**字符串要定义**

```bash
url="c.biancheng.net"
echo ${url: 2: 9}
#biancheng

url="c.biancheng.net"
echo ${url: 2}
#biancheng.net

url="c.biancheng.net"
echo ${url: 0-13: 9}
#biancheng。从右边数，b是第 13 个字符

url="c.biancheng.net"
echo ${url: 0-13}
#biancheng.net

url="http://c.biancheng.net/index.html"
echo ${url#*:}
echo ${url#*p:}
echo ${url#*ttp:}
echo ${url#http:}
#//c.biancheng.net/index.html

url="http://c.biancheng.net/index.html"
echo ${url%/*}  #结果为 http://c.biancheng.net
echo ${url%%/*}  #结果为 http:
```
