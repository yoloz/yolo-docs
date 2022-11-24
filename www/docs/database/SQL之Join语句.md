建表 table1,table2：

```sql
create table table1(id int,name varchar(10))
create table table2(id int,score int)
insert into table1 select 1,'lee'
insert into table1 select 2,'zhang'
insert into table1 select 4,'wang'
insert into table2 select 1,90
insert into table2 select 2,100
insert into table2 select 3,70
```

如表:

| table1  | table2   |
| :------ | :------- |
| id name | id score |
| 1 lee   | 1 90     |
| 2 zhang | 2 100    |
| 4 wang  | 3 70     |

## 外连接

包括左向外联接、右向外联接或完整外部联接

### 左连接

_left \[outer\] join_

左向外联接的结果集包括指定的左表的所有行，而不仅仅是联接列所匹配的行。如果左表的某行在右表中没有匹配行，则在相关联的结果集行中右表的所有选择列表列均为空值(null)。sql 语句:

```sql
select * from table1 left join table2 on table1.id=table2.id
```

结果:

| id name | id score  |
| :------ | :-------- |
| 1 lee   | 1 90      |
| 2 zhang | 2 100     |
| 4 wang  | NULL NULL |

:::note
包含 table1 的所有子句，根据指定条件返回 table2 相应的字段，不符合的以 null 显示。即并不会根据条件过滤 table1 的内容。
:::

### 右连接

_right \[outer\] join_

右向外联接是左向外联接的反向联接。返回右表的所有行。如果右表的某行在左表中没有匹配行，则左表返回空值。sql 语句:

```sql
select * from table1 right join table2 on table1.id=table2.id
```

结果:

| id name   | id score |
| :-------- | :------- |
| 1 lee     | 1 90     |
| 2 zhang   | 2 100    |
| NULL NULL | 3 70     |

:::note
包含 table2 的所有子句，根据指定条件返回 table1 相应的字段，不符合的以 null 显示
:::

### 完整外部联接

_full \[outer\] join_

完整外部联接返回左表和右表中的所有行。当某行在另一个表中没有匹配行时，则另一个表的选择列表列包含空值。sql 语句:

```sql
select * from table1 full join table2 on table1.id=table2.id
```

结果:

| id name   | id score  |
| :-------- | :-------- |
| 1 lee     | 1 90      |
| 2 zhang   | 2 100     |
| 4 wang    | NULL NULL |
| NULL NULL | 3 70      |

:::note
返回左右连接的和
:::

## 内连接

_\[inner\] join_

内联接是用比较运算符比较要联接列的值的联接。sql 语句:

```sql
select * from table1 join table2 on table1.id=table2.id
#等价（与下列执行效果相同）
select a.*,b.* from table1 a,table2 b where a.id=b.id
select * from table1 cross join table2 where table1.id=table2.id
```

结果:

| id name | id score |
| :------ | :------- |
| 1 lee 1 | 90       |
| 2 zhang | 2 100    |

:::note

- 只返回符合条件的 table1 和 table2 的列
- cross join 后加条件只能用 where,不能用 on

:::

## 交叉连接

_cross join_

:::caution 注意
没有 WHERE 子句的交叉联接将产生联接所涉及的表的笛卡尔积。
:::

第一个表的行数乘以第二个表的行数等于笛卡尔积结果集的大小。（table1 和 table2 交叉连接产生 3\*3=9 条记录）。sql 语句:

```sql
select * from table1 cross join table2
#等价（与下列执行效果相同）
select * from table1,table2
```

结果:

| id name | id score |
| :------ | :------- |
| 1 lee   | 1 90     |
| 2 zhang | 1 90     |
| 4 wang  | 1 90     |
| 1 lee   | 2 100    |
| 2 zhang | 2 100    |
| 4 wang  | 2 100    |
| 1 lee   | 3 70     |
| 2 zhang | 3 70     |
| 4 wang  | 3 70     |

:::note
返回 3\*3=9 条记录，即笛卡尔积
:::
