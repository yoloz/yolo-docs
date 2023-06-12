## NSIS

NSIS (Nullsoft Scriptable Install System) 是一个专业开源的制作 windows 安装程序的工具。

[NSIS Homepage](https://nsis.sourceforge.io/Main_Page)

[GitHub](https://github.com/kichik/nsis)

NSIS 基于脚本文件，支持变量、函数和字符串操作，就像一种普通的编程语言一样，但它是为创建安装程序而设计的。
[脚本文件样例](https://nsis.sourceforge.io/Category:Code_Examples)，其中安装卸载脚本[A simple installer with start menu shortcut and uninstaller](https://nsis.sourceforge.io/A_simple_installer_with_start_menu_shortcut_and_uninstaller)

:::note

- 图形工具生成脚本文件: [nisedit2.0.3.exe](https://sourceforge.net/projects/hmne/files/HM%20NIS%20Edit/2.0.3/)，工具日期停留在 2005-03-28;
- 脚本开发环境[Development Environments](https://nsis.sourceforge.io/Category:Development_Environments),比如 vscode,搜索插件 nsis 即可;

:::

- 7998： ANSI targets are deprecated：在脚本开始加入一行：Unicode true，重新编译即可;
- 安装过程中中文协议乱码，txt 格式：带 BOM 的 UTF-8;

### 注册表

```log
#WriteRegStr root_key subkey key_name value
WriteRegStr HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "TestAddKey" "$INSTDIR\Test.exe"

#如果subkey自定义，则可以整个删除，否则使用DeleteRegValue
DeleteRegKey HKCU "Software\Microsoft\Windows\CurrentVersion\Run"

DeleteRegValue HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "TestAddKey"
```

- root_key,注册表根键值:

  - HKCR 或 HKEY_CLASSES_ROOT
  - HKLM 或 HKEY_LOCAL_MACHINE
  - HKCU 或 HKEY_CURRENT_USER
  - HKU 或 HKEY_USERS
  - HKCC 或 HKEY_CURRENT_CONFIG
  - HKDD 或 HKEY_DYN_DATA
  - HKPD 或 HKEY_PERFORMANCE_DATA
  - SHCTX 或 SHELL_CONTEXT

- subkey,子键值;
- key_name,新增键名称;
- value,新增键值;

## 后台运行

前提是已经生成打包脚本。添加 `function .onInstSuccess`如下：

```log
section "install"
	#...
sectionEnd

function .onInstSuccess
  ExecShell "open" "$INSTDIR\envaware.exe"
  #多个执行文件写多个
  #ExecShell "open" "$INSTDIR\other.exe"
functionEnd
```

:::caution 注意

- 如果已经定义`!define MUI_FINISHPAGE_RUN "$INSTDIR\${PRODUCT_NAME}.exe"`则无需在写 function;
- `go build -ldflags “-H windowsgui” main.go`,不添加参数直接编译运行是以 cmd 的窗口形式运行;

:::

## 卸载结束停止后台进程

确认 NSIS 安装目录下的 Plugins 目录下存在[FindProcDLL](https://nsis.sourceforge.io/FindProcDLL_plug-in),[KillProcDLL](https://nsis.sourceforge.io/KillProcDLL_plug-in),如果不存在则下载后放入即可(x86-ansi,x86-unicode 这两个目录都放入,ansi has deprecated),然后脚本`uninstall`里添加关闭进程，如下：

```log
section "uninstall"
	; stop process
	FindProcDLL::FindProc "envaware.exe"
	Push "envaware.exe"
	KillProcDLL::KillProc

    #关闭多个进程，写多个
	#FindProcDLL::FindProc "other.exe"
	#Push "other.exe"
	#KillProcDLL::KillProc
	# ....
sectionEnd
```

:::info
卸载程序或者安装程序时杀死进程的方法,可以一次性杀死多个进程:

NSIS 使用 exec 调用 windows 指令去杀死进程，好处在于可以杀死多个进程，十分方便:

```log
section "install"
    ; kill process
	nsExec::Exec "taskkill /im envaware.exe /f"
	# ...
sectionEnd

section "uninstall"
	; kill process
	nsExec::Exec "taskkill /im envaware.exe /f"
	# ...
sectionEnd
```

**后台运行的进程，使用`FindProcDLL`然后`KillProcDLL`没有退出，请使用`taskkill`方式**
:::

## 开机自启动

在安装完成界面设置添加如下代码，务必要添加在 `!insertmacro MUI_PAGE_FINISH`之前:

```log
#...
!define MUI_FINISHPAGE_SHOWREADME
!define MUI_FINISHPAGE_SHOWREADME_Function AutoBoot
!define MUI_FINISHPAGE_SHOWREADME_TEXT "开机自动启动"
#...
!insertmacro MUI_PAGE_FINISH
#...
```

在 Section 后区段的后面添加 Function 部分（在 Section 之后，是为了避免产生未知的错误），主要是把信息写入系统注册表，代码如下：

```log
#...
Section -Post
  #...
  WriteRegStr ${PRODUCT_UNINST_ROOT_KEY} "${PRODUCT_UNINST_KEY}" "UninstallString" "$INSTDIR\uninst.exe"
  #...
SectionEnd

Function AutoBoot
    WriteRegStr HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "EnvAware" "$INSTDIR\envaware.exe"
    #多个启动项写多个
    #WriteRegStr HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "PkiApiService" "$INSTDIR\PkiApiService.exe"
FunctionEnd
#...
```

:::note

- 启动项(用户不选择)：`WriteRegStr HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "TestAddKey" "$INSTDIR\Test.exe"`，该命令放在安装区域(Section、"MainSection" SEC01), 或者注册区域(Section -Post)都可以;
- 删除启动项：`DeleteRegValue HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "TestAddKey"`,该命令放在卸载命令区域(Section Uninstall);

:::

最后一步，在卸载时删除启动项注册记录，如下：

```log
#...
Section Uninstall
  #...

  DeleteRegValue HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "EnvAware"

  #...
SectionEnd
```

:::caution 注意

- 注册表`\HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run`里添加后，如果是需要管理员权限启动的程序无法自启动(即执行程序有个盾)，具体可以看下方的执行权限，这里修改安装路径到普通目录避免了执行权限的提升;
- win + r 打开运行;搜索 shell:startup;将要自启软件的快捷方式拖到打开的目录;
- 默认安装路径:[PROGRAMFILES](https://nsis.sourceforge.io/Reference/$PROGRAMFILES)
- 执行权限:[RequestExecutionLevel](https://nsis.sourceforge.io/Reference/RequestExecutionLevel#:~:text=The%20value%20is%20embedded%20in%20the%20installer%20and,to%20prompt%20the%20user%20to%20verify%20privilege%20escalation.)

:::
