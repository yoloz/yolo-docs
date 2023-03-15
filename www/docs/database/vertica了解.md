**Vertica Architecture Basics**

## Column Storage

Vertica reads only the columns needed to answer the query. For example:

```sql
=> SELECT avg(price) FROM tickstore WHERE symbol = 'AAPL' and date = '5/31/13';
```

For this example query, a column store reads only three columns while a row store reads all columns

## Data Encoding and Compression

Vertica uses encoding and compression to optimize query performance and save storage space.

## Clustering

Clustering supports scaling and redundancy. You can scale your database cluster by adding more nodes, and you can improve reliability by distributing and replicating data across your cluster.

## Projections

A projection consists of a set of columns with the same sort order, defined by a column to sort by or a sequence of columns by which to sort. Like an index or materialized view in a traditional database, a projection accelerates query processing. When you write queries in terms of the original tables, the query uses the projections to return query results.

Projections are distributed and replicated across nodes in your cluster, ensuring that if one node becomes unavailable, another copy of the data remains available.

### Projection Types

A Vertica table typically has multiple projections, each defined to contain different content.Content for the projections of a given table can differ in scope and how it is organized.These differences can generally be divided into the following projection types:

- Superprojections

For each table in the database, Vertica requires at least one superprojection that contains all columns in the table. In the absence of query-specific projection, Vertica uses the table's superprojection, which can support any query and DML operation.

Under certain conditions, Vertica automatically creates a table's superprojection immediately on table creation. Vertica also creates a superprojection when you first load data into that table, if none already exists. CREATE PROJECTION can create a superprojection if it specifies to include all table columns. A table can have multiple superprojections.

While superprojections can support all queries on a table, they do not facilitate optimal execution of specific queries.

- Query-specific projections

A query-specific projection is a projection that contains only the subset of table columns to process a given query. Query-specific projections significantly improve the performance of those queries for which they are optimized.

- Aggregate projections

Queries that include expressions or aggregate functions such as SUM and COUNT can perform more efficiently when they use projections that already contain the aggregated data. This is especially true for queries on large quantities of data.

:::note
`CREATE PROJECTION` defines a projection,略
:::

## Logical and Physical Schema

Vertica stores information about database objects in the logical schema and the physical schema. The difference between the two schemas and how they relate to data storage is an important and unique aspect of the Vertica architecture.

A logical schema consists of objects such as tables, constraints, and views. Vertica supports any relational schema design that you choose. A physical schema consists of collections of table columns called projections. A projection can contain some or all of the columns of a table.

## Terminology(术语)

It is helpful to understand the following terms when using Vertica:

### Host

A computer system with a 64-bit Intel or AMD processor, RAM, hard disk, and TCP/IP network interface (IP address and hostname). Hosts share neither disk space nor main memory with each other.

### Instance

An instance of Vertica consists of the running Vertica process and disk storage (catalog and
data) on a host.
:::caution
Only one instance of Vertica can be running on a host at any time.
:::

### Node

A host configured to run an instance of Vertica. It is a member of the database cluster. For a database to have the ability to recover from the failure of a node requires a database K-safety value of at least 1 (3+ nodes).

### Cluster

The concept of Cluster in the Vertica Analytics Platform is a collection of hosts with the Vertica software packages (RPM or DEB) that are in one admin tools domain. You can access and manage a cluster from one admintools initiator host.

### Database

A cluster of nodes that, when active, can perform distributed data storage and SQL statement execution through administrative, interactive, and programmatic user interfaces.
:::caution
Although you can define more than one database on a cluster, Vertica supports running only one database per cluster at a time.
:::

## Data Types

### Structured Data(结构化数据)

Structured data consists of all data that can be stored in a relational database. it is stored in rows and column and have relational keys that can be easily mapped to pre-designed fields.including:

- Binary
- Boolean
- Character
- Date/Time
- Long
- Numeric

### Semi-structured Data(半结构化数据)

Data that does not reside in a relational database, but contains properties that allow it to be analyzed. Examples of semi-structured data are XML and JSON .

### Unstructured Data

Represents the majority of existing data. Unstructured data does not have a pre-defined structure. It typically includes text and multi-media content, for example emails, video files, and audio files.

## Using Flex Tables

See Using Flex Tables for information on using unstructured data in Vertica.

### Create a Simple JSON File

Use this JSON data for the exercises in the rest of this section:

```json
{"name": "Everest", "type":"mountain", "height":29029, "hike_safety": 34.1}
{"name": "Mt St Helens", "type":"volcano", "height":29029, "hike_safety": 15.4}
{"name": "Denali", "type":"mountain", "height":17000, "hike_safety": 12.2}
{"name": "Kilimanjaro", "type":"mountain", "height":14000 }
{"name": "Mt Washington", "type":"mountain", "hike_safety": 50.6}
```

1. Copy and paste the JSON data into your favorite editor.
2. Save the file in any convenient location for loading into your Vertica database.

### Create a Flex Table and Load Data

1. Create a flex table called mountains:

```sql
   => CREATE flex table mountains();
```

2. Load the JSON file you saved, using the flex table parser fjsonparser:

```sql
   => COPY mountains from '/home/dbadmin/data/flex/mountains.json'
    parser fjsonparser();
    Rows Loaded
    -------------
    5
    (1 row)
```

3. Query values from the sample file:

```sql
   => SELECT name, type, height from mountains;
   name | type | height
   ---------------+----------+--------
   Everest | mountain | 29029
   Mt St Helens | volcano | 29029
   Denali | mountain | 17000
   Kilimanjaro | mountain | 14000
   Mt Washington | mountain |
   (5 rows)
```
