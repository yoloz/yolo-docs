**elasticsearch sql**

| SQL    | Elasticsearch |
| ------ | ------------- |
| Table  | Index         |
| Row    | Dcoument      |
| Column | Field         |

## x-pack-sql

> JDBC client requires a Platinum subscription. Please ensure that you have a Trial or Platinum license installed on your cluster before proceeding.

## NLPchina

[https://github.com/NLPchina/elasticsearch-sql](https://github.com/NLPchina/elasticsearch-sql)

> Please note, this project is no longer in active development, and is deprecated, please use official version x-pack-sql and OpenDistro for Elasticsearch SQL supported by AWS and licensed under Apache 2.

## opendistro-for-elasticsearch

[https://github.com/opendistro-for-elasticsearch/sql](https://github.com/opendistro-for-elasticsearch/sql)

### 安装 SQL 插件

[Standalone Elasticsearch plugin installation](https://opendistro.github.io/for-elasticsearch-docs/docs/install/plugins/)

```bash
$ sudo bin/elasticsearch-plugin install https://d3g5vo6xdbdb9a.cloudfront.net/downloads/elasticsearch-plugins/opendistro-sql/opendistro-sql-1.13.2.0.zip

$ sudo bin/elasticsearch-plugin install file:///home/ylz/opendistro-sql-1.13.2.0.zip

$ sudo bin/elasticsearch-plugin remove <plugin-name>

```

### 查询

```sql
POST _opendistro/_sql
{
  "query": "SELECT * FROM my-index1,myindex2,myindex3 LIMIT 50"
}

POST _opendistro/_sql
{
  "query": "SELECT * FROM my-index* LIMIT 50"
}

# By default, queries return data in JDBC format, but you can also return data in standard Elasticsearch JSON, CSV, or raw formats:

POST _opendistro/_sql?format=json|csv|raw
{
  "query": "SELECT * FROM my-index LIMIT 50"
}

#returns Elasticsearch query DSL

POST _opendistro/_sql/_explain
{
  "query": "SELECT * FROM test LIMIT  50"
}

```

```bash
curl -XPOST https://localhost:9200/_opendistro/_sql -u 'admin:admin' -k -H 'Content-Type: application/json' -d '{"query": "SELECT * FROM kibana_sample_data_flights LIMIT 10"}'
```
