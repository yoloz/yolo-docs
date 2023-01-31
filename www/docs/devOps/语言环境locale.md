Locale 是某一个地域内的人们的语言习惯和文化传统和生活习惯，是根据计算机用户所使用的语言，所在国家或者地区，以及当地的文化传统所定义的一个软件运行时的语言环境。

Locale 是软件在运行时的语言环境, 它包括语言(Language), 地域 (Territory) 和字符集(Codeset)。一个 locale 的书写格式为: `语言[_地域[.字符集]]`,完全的 locale 表达方式是 `[语言[_地域][.字符集][@修正值]`。如：zh*CN.GB2312 ＝中文*中华人民共和国＋国标 2312 字符集。

在 Linux 中通过 locale 来设置程序运行的不同语言环境，locale 由 ANSI C 提供支持。locale 的命名规则为<语言>\_<地区>.<字符集编码>，如 zh_CN.UTF-8，zh 代表中文，CN 代表大陆地区，UTF-8 表示字符集。

## 变量

在 locale 环境中，有一组变量，代表国际化环境中的不同设置：

- LC_COLLATE
  定义该环境的排序和比较规则

- LC_CTYPE
  用于字符分类和字符串处理，控制所有字符的处理方式，包括字符编码，字符是单字节还是多字节，如何打印等。**是最重要的一个环境变量。**

- LC_MONETARY
  货币格式

- LC_NUMERIC
  非货币的数字显示格式

- LC_TIME
  时间和日期格式

- LC_MESSAGES
  提示信息的语言。另外还有一个 LANGUAGE 参数，它与 LC_MESSAGES 相似，但如果该参数一旦设置，则 LC_MESSAGES 参数就会失效。LANGUAGE 参数可同时设置多种语言信息，如 LANGUANE="zh_CN.GB18030:zh_CN.GB2312:zh_CN"。

- LANG
  `LC_*`的默认值，是最低级别的设置，如果 `LC_*`没有设置，则使用该值。类似于 LC_ALL。

- `LC_ALL`
  `它是一个宏，如果该值设置了，则该值会覆盖所有 LC_*的设置值。注意，LANG 的值不受该宏影响。`

:::tip
LC_ALL=C,"C"是系统默认的 locale，"POSIX"是"C"的别名。所以当我们新安装完一个系统时，默认的 locale 就是 C 或 POSIX。
:::

## 设定

locale 的设定：

**LC_ALL 和 LANG 优先级**的关系： `LC_ALL > LC_* > LANG`

:::tip

- 如果需要一个纯中文的系统的话，设定 LC_ALL= zh_CN.XXXX，或者 LANG=zh_CN.XXXX 都可以。

- 如果只想要一个可以输入中文的环境，而保持菜单、标题，系统信息等等为英文界面，那么只需要设定 LC_CTYPE ＝ zh_CN.XXXX，LANG=en_US.XXXX 就可以了。

- 假如什么也不做的话，也就是 `LC_ALL，LANG 和 LC_*`均不指定特定值的话，系统将采用 POSIX 作为 lcoale，也就是 C locale。

:::

**LANG 和 LANGUAGE 的区别**：

LANG - Specifies the default locale for all unset locale variables

LANGUAGE - Most programs use this for the language of its interface

LANGUAGE 是设置应用程序的界面语言。而 LANG 是优先级很低的一个变量，它指定所有与 locale 有关的变量的默认值

## 使用

- How to view the current locale setting `locale`

- How to change the locale setting

- - Via the CDE login locale
- - As a user-specific locale
- - As a system default locale

To change the current locale setting, first confirm that the desired locale is installed on the system with:

```bash
[roc@roclinux ~]$ locale -a
de
en_AU
en_CA
en_UK
C
```

If the desired locale is not in the list, you will need to install the
appropriate packages for that locale. See the Note below for more information about locale packages.

- How to change the locale via the CDE login locale

On the CDE login banner:  
Choose options - languages  
Under languages - choose the new locale  
The CDE banner will re-cycle and then you can login to the selected locale.

> NOTE: If a user has a different default locale set in their environment, the
> that locale setting will override the selected CDE login locale.

- How to set a user-specific locale

Note:
For sh, ksh:

```ksh
# LANG=C; export LANG
# LC_ALL=C; export LC_ALL
```

For csh:

```csh
# setenv LANG C
# setenv LC_ALL C
```

> Note: To set a default locale for a user's environment, set the LANG or LC\_\* variables in a user's shell intialization file such as $HOME/.profile or $HOME/.cshrc or \$HOME/.bashrc

- How to change the locale by setting the system default locale

```
LANG=C
LC_ALL=C
```

Example from the /etc/default/init file:

```
# Lines of this file should be of the form VAR=value, where VAR is one of
# TZ, LANG, or any of the LC_* environment variables.
LANG=C
LC_ALL=C
```

> Note: The system must be rebooted after making changes to the /etc/default/init file in order for the changes to take effect.

- How to verify the locale setting

After setting or changing the locale, verify that the locale is set correctly,Check if the locale is set correctly by running the locale command without any options:

```bash
[roc@roclinux ~]$ locale
LANG=C
LC_CTYPE= "C"
LC_NUMERIC= "C"
LC_TIME= "C"
LC_COLLATE= "C"
LC_MONETARY= "C"
LC_MESSAGES= "C"
LC_ALL=C
```
