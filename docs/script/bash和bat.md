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
