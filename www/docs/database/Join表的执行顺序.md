原文:[《SqlServer 与 MySql 的 JOIN、Left JOIN、Right Join 表的执行顺序问题》](https://blog.csdn.net/hutao1101175783/article/details/118605557)

## SqlServer

- tEBay_Trade=》数据量 500W
- tPublic_Shop=》数据量 30

### join

```sql
select * from tPublic_Shop s
join tEBay_Trade t on s.id=t.ShopID
where s.Id>10
```

![ssqljoin1.png](/docs/database/ssqljoin1.png)

```sql
select * from tPublic_Shop s
join tEBay_Trade t on s.id=t.ShopID
where t.CreateDate>'2021-01-01'
```

![ssqljoin2.png](/docs/database/ssqljoin2.png)

:::info
如果 where 条件命中索引且只有一个索引,关于 join 不管是大表在前还是小表在前，查询顺序总是以 where 索引所在表为第一扫描的表
:::

```sql

select * from tPublic_Shop s
join tEBay_Trade t on s.id=t.ShopID
where s.Id>10 and t.CreateDate>'2021-01-01'
-------------
select * from tEBay_Trade t
join tPublic_Shop s on s.id=t.ShopID
where t.CreateDate>'2021-01-01' and s.Id>10
```

![ssqljoin3.png](/docs/database/ssqljoin3.png)

:::info
如果 where 条件命中索引且有多个索引,关于 join 不管大表在前还是小表在后，如果有多个 where 条件命中索引，那么会以索引对应的最大的那个表为第一扫描表
:::

```sql
select * from tPublic_Shop s
join tEBay_Trade t on s.id=t.ShopID
-----------------
select * from tEBay_Trade t
join tPublic_Shop s on s.id=t.ShopID
```

![ssqljoin4.png](/docs/database/ssqljoin4.png)

:::info
如果没有索引或 where 条件未命中索引，系统会自动选择小表作为第一扫描表
:::

### left/right join

```sql
select * from tEBay_Trade t
left join tPublic_Shop s on s.id=t.ShopID
where t.CreateDate>'2021-01-01'
---------------
select * from tPublic_Shop s
right join tEBay_Trade t on s.id=t.ShopID
where t.CreateDate>'2021-01-01'
```

![ssqllrjoin1.png](/docs/database/ssqllrjoin1.png)

:::info
对于 left join 和 right join 总是会以 where 条件索引所在的表为第一扫描表
:::

```sql
select * from tEBay_Trade t
left join tPublic_Shop s on s.id=t.ShopID
--------------
select * from tPublic_Shop s
left join tEBay_Trade t on s.id=t.ShopID
--------------------
select * from tPublic_Shop s
right join tEBay_Trade t on s.id=t.ShopID
```

![ssqllrjoin2.png](/docs/database/ssqllrjoin2.png)

:::info
left join 和 right join 如果没有索引或 where 条件未命中索引，系统会自动选择小表作为第一扫描表
:::

## Mysql

- tuser=>数据量 33954
- torder=>数据量 4612

```sql
select * from tuser u
join torder t on u.id=t.uid
where u.id>500
--------------
select * from torder t
join tuser u on u.id=t.uid
where u.id>500
```

![mysqljoin1.png](/docs/database/mysqljoin1.png)

```sql
select * from tuser u
join torder t on u.id=t.uid
where t.createtime>='2021-07-01'
```

![mysqljoin2.png](/docs/database/mysqljoin2.png)

:::info
关于 join 不管索引是不是加在主表上，总是先扫描最小的表
:::

```sql
select * from torder t
left join tuser u on u.id=t.uid
-----------------
select * from tuser u
right join torder t on u.id=t.uid
```

![mysqllrjoin1.png](/docs/database/mysqllrjoin1.png)

```sql
select * from tuser u
right join torder t on u.id=t.uid
```

![mysqllrjoin2.png](/docs/database/mysqllrjoin2.png)

:::info
不管是 left join 还是 right join，如果没有条件命中索引，都是以**主表**为第一扫描的表
:::

```sql
select * from torder t
right join tuser u on u.id=t.uid
where t.createtime>='2021-07-01'
---------------------
select * from tuser u
left join torder t on u.id=t.uid
where t.createtime>='2021-07-01'
```

![mysqllrjoin3.png](/docs/database/mysqllrjoin3.png)

```sql
select * from torder t
right join tuser u on u.id=t.uid
where u.id>500
----------------------
select * from tuser u
left join torder t on u.id=t.uid
where u.id>500
```

![mysqllrjoin4.png](/docs/database/mysqllrjoin4.png)

:::info
不管是 left join 还是 right left,如果 where 条件命中索引，会以这个索引对应的表为第一扫描的表
:::

## 总结

### 关于 SqlServer

- 对于 join,left join,right join,不管是大表在前还是小表在前，如果 where 条件命中索引，以 where 条件索引所在表为第一扫描的表；
- 对于 join,left join,right join,不管是大表在前还是小表在前，如果 where 条件命中索引，而且是多个索引，会以索引对应的最大的那个表为扫描的第一个表；
- 对于 join,left join,right join,不管是大表在前还是小表在前，如果 where 条件没有命中索引，系统会自动选择小表作为第一扫描表

### 关于 MySql

- 对于 join,不管是大表在前还是小表在前，不管是不是有条件索引匹配，总是先扫描小表，而不是条件所在的表;
- 对于 left join 和 right join,不管是大表在前还是小表在前，如果 where 条件命中索引，会以索引对应的这个表为第一扫描的表；
- 对于 left join 和 right join,不管是大表在前还是小表在前，如果没有条件命中索引，都是以**主表**为第一扫描的表；
