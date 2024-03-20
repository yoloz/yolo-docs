[CVEScannerV2](https://github.com/yoloz/CVEScannerV2.git)

## 准备数据

可以通过 API 查询，此处生成工程里提供的数据

```bash
$ git clone https://github.com/yoloz/CVEScannerV2.git
$ cd CVEScannerV2
# for convenience, a semi-updated database is offered as .sql format in CVEScannerV2DB.
$ git submodule init
$ git submodule update
$ sudo apt install sqlite3
$ cd CVEScannerV2DB/
$ ./build.sh
```

### sqlite3

```bash
$ sqlite3
# SQLite version 3.22.0 2018-01-22 18:45:57
# Enter ".help" for usage hints.
# Connected to a transient in-memory database.
# Use ".open FILENAME" to reopen on a persistent database.
# sqlite> .exit
```

> `.exit`退出交互模式

## luasql 环境

```bash
$ sudo apt install lua-sql-sqlite3
```

**下面方式安装 luasql-sqlite3 后 nmap 脚本找不到 sqlite3**

```bash
# 找不到模块 luasql.sqlite3
$ nmap -sV <target_ip> -p10001 --script ./cvescannerv2.nse --script-args db=./CVEScannerV2DB/cve.db
# Starting Nmap 7.60 ( https://nmap.org ) at 2024-03-19 19:00 CST
# NSE: Failed to load /xxx/CVEScannerV2/cvescannerv2.nse:
# /xxx/CVEScannerV2/cvescannerv2.nse:74: module 'luasql.sqlite3' not found:
# 	NSE failed to find nselib/luasql/sqlite3.lua in search paths.
# 	no field package.preload['luasql.sqlite3']
# 	no file '/usr/local/share/lua/5.3/luasql/sqlite3.lua'
# 	no file '/usr/local/share/lua/5.3/luasql/sqlite3/init.lua'
# 	no file '/usr/local/lib/lua/5.3/luasql/sqlite3.lua'
#     ....
$ lua
# Lua 5.4.6  Copyright (C) 1994-2023 Lua.org, PUC-Rio
> sqlite3=require 'luasql.sqlite3'
> print(sqlite3._VERSION)
# LuaSQL 2.6.0 (for Lua 5.4)
# > os.exit()

```

[LuaRocks](https://luarocks.org/) is the package manager for Lua modules.
[luasql](https://lunarmodules.github.io/luasql/) is a simple interface from Lua to a DBMS.

```bash
$ wget https://luarocks.org/releases/luarocks-3.11.0.tar.gz
$ tar zxpf luarocks-3.11.0.tar.gz
$ cd luarocks-3.11.0
$ ./configure && make && sudo make install
# $ luarocks install luasql-sqlite3
# Error: Could not find header file for SQLITE
#   No file sqlite3.h in /usr/local/include
#   No file sqlite3.h in /usr/include
#   No file sqlite3.h in /include
# You may have to install SQLITE in your system and/or pass SQLITE_DIR or SQLITE_INCDIR to the luarocks command.
# Example: luarocks install luasql-sqlite3 SQLITE_DIR=/usr/local
$ sudo apt install libsqlite3-dev
$ sudo find / -name sqlite3.h
# /usr/include/sqlite3.h
$ sudo luarocks install luasql-sqlite3
```

### Lua

[Lua](https://www.lua.org/) is implemented in pure ANSI C and compiles unmodified in all platforms that have an ANSI C compiler.

建议直接安装：`sudo apt install lua`,源码安装如下:

```bash
$ curl -L -R -O https://www.lua.org/ftp/lua-5.4.6.tar.gz
$ tar zxf lua-5.4.6.tar.gz
$ cd lua-5.4.6
$ make all test
$ lua
# Lua 5.4.6  Copyright (C) 1994-2023 Lua.org, PUC-Rio
# > os.exit()
# 在交互式Lua中结束会话使用os.exit()，没有quit关键字
```

## nmap 环境

```bash
$ sudo apt install nmap
```

## python 环境

略

## 运行

```bash
# 查看想起信息添加-d
$ nmap -sV 192.168.124.251 -p10001 -d --script ./cvescannerv2.nse --script-args http=0,db=./CVEScannerV2DB/cve.db,product-aliases=./product-aliases.json
```

- variable 'format_timestamp' is not declared
  查看脚本：`registry.time = datetime.format_timestamp(os.time(), 0)`

```bash
$ lua
Lua 5.4.6  Copyright (C) 1994-2023 Lua.org, PUC-Rio
> datetime = require 'datetime'
stdin:1: module 'datetime' not found:
	no field package.preload['datetime']
	no file '/usr/local/share/lua/5.4/datetime.lua'
    ...
```

> 未找到 datetime 模块，修改脚本`registry.time = os.date("%Y-%m-%d %H:%M:%S", os.time())`
