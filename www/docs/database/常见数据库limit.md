## mysql

```sql
SELECT
    column1,column2,...
FROM
    table
LIMIT offset , count;
```

> - offset 参数指定要返回的第一行的偏移量（第一行的偏移量为 0);
> - count 指定要返回的最大行数;
> - 在使用 limit 的时候不指定 order by， 那么每次的结果可能是不确定的;

## pgsql

```sql
SELECT column1, column2, columnN
FROM table_name
LIMIT [count]
-- LIMIT 子句与 OFFSET 子句一起使用
SELECT column1, column2, columnN
FROM table_name
LIMIT [count] OFFSET [offset]
```

> - offset 参数指定要返回的第一行的偏移量（第一行的偏移量为 0);
> - count 指定要返回的最大行数;
> - 在使用 limit 的时候不指定 order by， 那么每次的结果可能是不确定的;

## oracle

```sql
--  查询前10行记录
SELECT t1.* FROM XXX t1 WHERE ROWNUM <= 10;

--  查询从11行到20行的记录
SELECT * FROM XXX WHERE ROWNUM < 21 MINUS SELECT * FROM XXX WHERE ROWNUM < 11;
或者
-- rownum不可以以任何表的名称作为前缀， 因此子查询中的rownum必须起别名
SELECT * FROM (SELECT ROWNUM NO, t1.* FROM XXX t1) t2 WHERE t2.NO > 10 AND t2.NO < 21;

-- select * from XXX where rownum > 10 and rownum < 21 会返回空结果集
```

> - rownum 是根据 sql 查询出的结果给每行分配一个逻辑编号；
> - rowid 是物理结构上的，在每条记录 insert 到数据库中时生成，查询的时候必须起别名，不然不会显示;

## mssql

```sql
SELECT TOP count column_name(s)
FROM table_name;

--前5行
select top 5 * from table
--后5行
select top 5 * from table order by id desc
```

> - count 指定要返回的最大行数;

## db2

```sql
SELECT select_list
FROM table_name
ORDER BY sort_expression
LIMIT count [OFFSET offset];
-- 简化用法同mysql
SELECT select_list
FROM table_name
ORDER BY sort_expression
LIMIT count，offset;
```

> - offset 参数指定要返回的第一行的偏移量（第一行的偏移量为 0);
> - count 指定要返回的最大行数;
> - 在使用 limit 的时候不指定 order by， 那么每次的结果可能是不确定的;

## vertica

同 db2

> When a SELECT statement specifies both LIMIT and OFFSET, Vertica first processes the OFFSET statement, and then applies the LIMIT statement to the remaining rows.
