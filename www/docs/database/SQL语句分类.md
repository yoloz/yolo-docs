SQL(Structure Query Language)语言是数据库的核心语言。

SQL 的发展是从 1974 年开始的，其发展过程如下：  
1974 年-----由 Boyce 和 Chamberlin 提出，当时称 SEQUEL。  
1976 年-----IBM 公司的 Sanjase 研究所在研制 RDBMS SYSTEM R 时改为 SQL。  
1979 年-----ORACLE 公司发表第一个基于 SQL 的商业化 RDBMS 产品。  
1982 年-----IBM 公司出版第一个 RDBMS 语言 SQL/DS。  
1985 年-----IBM 公司出版第一个 RDBMS 语言 DB2。  
1986 年-----美国国家标准化组织 ANSI 宣布 SQL 作为数据库工业标准。

SQL 是一个标准的数据库语言，是面向集合的描述性非过程化语言，即大多数语句都是独立执行的，与上下文无关，而绝大部分应用都是一个完整的过程，显然用 SQL 完全实现这些功能是很困难的。所以大多数数据库公司为了解决此问题，作了如下两方面的工作：(1)扩充 SQL，在 SQL 中引入过程性结构；(2)把 SQL 嵌入到高级语言中，以便一起完成一个完整的应用。

SQL 语言共分为四大类：数据查询语言 DQL，数据操纵语言 DML，数据定义语言 DDL，数据控制语言 DCL。

## 数据查询语言 DQL

数据查询语言 DQL 基本结构是由 SELECT 子句，FROM 子句，WHERE 子句组成的查询块：

SELECT <字段名表> FROM <表或视图名> WHERE <查询条件>

## 数据操纵语言 DML

数据操纵语言 DML 主要有三种形式：

- 插入：INSERT
- 更新：UPDATE
- 删除：DELETE

## 数据定义语言 DDL

数据定义语言 DDL 用来创建数据库中的各种对象-----表、视图、索引、同义词、聚簇等如: CREATE TABLE/VIEW/INDEX/SYN/CLUSTER

:::caution 注意
DDL 操作是隐性提交的,不能 rollback
:::

## 数据控制语言 DCL

数据控制语言 DCL 用来授予或回收访问数据库的某种特权，并控制数据库操纵事务发生的时间及效果，对数据库实行监视等。如：

- GRANT：授权
- ROLLBACK [WORK] TO [SAVEPOINT]：回退到某一点

> 回滚命令使数据库状态回到上次最后提交的状态

- COMMIT [WORK]：提交

在数据库的插入、删除和修改操作时，只有当事务在提交到数据库时才算完成。在事务提交前,只有操作数据库的这个人才能有权看到所做的事情，别人只有在最后提交完成后才可以看到。

:::tip
提交数据有三种类型：显式提交、隐式提交及自动提交。下面分别说明这三种类型:

- 显式提交

用 COMMIT 命令直接完成的提交为显式提交。其格式为：SQL>COMMIT；

- 隐式提交

用 SQL 命令间接完成的提交为隐式提交。这些命令是：
ALTER，AUDIT，COMMENT，CONNECT，CREATE，DISCONNECT，DROP，
EXIT，GRANT，NOAUDIT，QUIT，REVOKE，RENAME。

- 自动提交

若把 AUTOCOMMIT 设置为 ON，则在插入、修改、删除语句执行后，系统将自动进行提交，这就是自动提交。其格式为：SQL>SET AUTOCOMMIT ON；
:::
