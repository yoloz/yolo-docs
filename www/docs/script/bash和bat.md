启动一个jar为例说明，两者功能一致：

## bash

```bash
#!/usr/bin/env bash
path=$(
   cd $(dirname $0)
   pwd
)
# export JAVA_HOME=""
if [ ! "x$JAVA_HOME" = "x" ]; then
   # echo "JAVA_HOME is not configured, please configure and then execute again!"
   # exit 1
   export java=${JAVA_HOME}/bin/java
fi
CLASSPATH=$(echo ${path}/lib/*.jar | tr ' ' ':')
# echo 'classpath='${CLASSPATH}

# gatherInfo=${path}"/GatherInfoTest"
# if [ -f ${gatherInfo}".class" ]; then
#    rm -f ${gatherInfo}".class"
# fi

# javac -cp ${CLASSPATH} ${gatherInfo}".java"
java -cp .:${CLASSPATH} -Dlog4j.configuration="file:${path}/log4j.properties" GatherInfoTest "$@"
```

## bat

**bat文件编写注意使用换行符CRLF**

```shell
@echo off

setLocal EnableDelayedExpansion

rem set path=%cd%

@REM set JAVA_HOME=""
@REM if exist "%JAVA_HOME%" (
   @REM echo "JAVA_HOME is not configured, please configure and then execute again!"
   @REM exit 1
   @REM pause
@REM )

set CLASSPATH="
for /R "%~dp0lib" %%a in (*.jar) do (
set CLASSPATH=!CLASSPATH!;%%a
)
set CLASSPATH=!CLASSPATH!"

@REM echo !CLASSPATH!

@REM set gatherInfo=%path%"\\GatherInfoTest"
@REM if exist %gatherInfo%".class" (
@REM     del /f /s /q %gatherInfo%".class"
@REM )

@REM "%JAVA_HOME%\\bin\\javac.exe" -cp %CLASSPATH% %gatherInfo%.java

if ["%JAVA_HOME%"] EQU [""] (
	set JAVA=java
) else (
	set JAVA="%JAVA_HOME%/bin/java"
)

set COMMAND=%JAVA% -cp .;%CLASSPATH% -Dlog4j.configuration="file:%~dp0log4j.properties" GatherInfoTest %*

%COMMAND%
```
:::info
rem、@rem和::用法都很简单，直接在命令后加上要注释的语句即可。

语言前加了rem，运行BAT时就会自动忽略这个句子。需要注释多行时，每行前面都要加上rem、@rem和::

当echo回显处于打开状态，也就是`echo on`时，使用rem注释的语言会被打印出来，使用@rem注释的语言则不会打印出来, 使用::注释的语言也不打印出来。
 
当echo回显处于关闭状态，也就是`echo off`时，不论是rem、@rem和::注释的语句都不会打印出来。
:::

### win中系统变量列表

| 变量 |	描述 |
| --- | --- |
| %WINDIR% | {系统目录 - C:\WINDOWS} |
| %SYSTEMROOT% | {系统目录 - C:\WINDOWS} |
| %SYSTEMDRIVE% | {系统根目录 - C:} |
| %HOMEDRIVE% | {当前用户根目录 - C:} |
| %USERPROFILE% | {当前用户目录 - C:\Users\test} |
| %HOMEPATH% | {当前用户路径 - \Users\test} |
| %TMP% | {当前用户临时文件夹 - C:\DOCUME~1\test\LOCALS~1\Temp} |
| %TEMP% | {当前用户临时文件夹 - C:\DOCUME~1\test\LOCALS~1\Temp} |
| %APPDATA% | {当前用户数据文件夹 - C:\Users\test\Application Data} |
| %PROGRAMFILES% | {程序默认安装目录 - C:\Program Files} |
| %COMMONPROGRAMFILES% | {文件通用目录 - C:\Program Files\Common Files} |
| %USERNAME% | {当前用户名 - test} |
| %ALLUSERSPROFILE% | {所有用户文件目录 - C:\Documents and Settings\All Users} |
| %OS% | {操作系统名 - Windows_NT} |
| %COMPUTERNAME% | {计算机名 - IBM-B63851E95C9} |
| %NUMBER_OF_PROCESSORS% | {处理器个数 - 1} |
| %PROCESSOR_ARCHITECTURE% | {处理器芯片架构 - x86} |
| %PROCESSOR_LEVEL% | {处理器型号 - 6} |
| %PROCESSOR_REVISION% | {处理器修订号 - 0905} |
| %USERDOMAIN% | {包含用户帐号的域 - IBM-B63851E95C9} |
| %COMSPEC% | {C:\WINDOWS\system32\cmd.exe} |
| %PATHEXT% | {执行文件类型 - .COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.pyo;.pyc;.py;.pyw} |
| %PATH% | {搜索路径} |

### 复制删除

* 复制: `copy cd.dll %windir%\system32`
* 删除(只能删文件，不能删文件夹): `del %windir%\system32\cd.dll`
* 删除目录(只能删除空文件夹): `rd %windir%\system32`,要删除文件夹及其里面的所有子目录和文件，用命令`rd virtualbox /s /q`，/s参数表示删除该文件夹及其下面的子目录和文件,/q参数表示，不需要确认
* 创建目录(支持多层): `md %%USERPROFILE%%\testp\testc`

### 执行打开操作

* 打开指定目录，如C:\Test:`start C:\Test`
* 执行C盘下的WinWord.exe程序:`start C:\WinWord.exe`
* 用某个程序打开某个文件，如用TheWorld.exe打开一个htm文件:`start d:\TheWorld\TheWorld.EXE C:\我有一个恋爱.htm`

:::caution
不论是程序或文件路径中含有空格，都必须用引号括起来：`start d:\TheWorld\TheWorld.EXE "e:\My documents\我有一个恋爱.htm"`

所有程序中的引号不能是全角的，必须用半角的格式，所以输入引号前最好关闭汉字输入系统
:::

### 拷贝文件夹 XCOPY
XCOPY命令可用于复制文件和目录，包括子目录,`XCOPY source [destination]`
:::note
source 指定要复制的文件;
destination 指定新文件的位置和/或名称;
:::

功能通过增加参数来实现,`xcopy .VirtualBox virtualbox /s /e` :
:::info
/s 复制目录和子目录，除了空的;
/e 复制目录和子目录，包括空的;
:::

[xcopy-参数详解](https://www.cnblogs.com/yang-hao/p/6003308.html)