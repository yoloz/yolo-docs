[Microsoft JDBC Driver for SQL Server 支持矩阵](https://learn.microsoft.com/zh-cn/sql/connect/jdbc/microsoft-jdbc-driver-for-sql-server-support-matrix?view=sql-server-ver16&source=recommendations)

## Microsoft JDBC Driver 支持生命周期矩阵和策略

| 驱动程序名称                              | 驱动程序包版本 | 适用的 JAR                                                                                                     | 主要支持结束日期   |
| ----------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------- | ------------------ |
| Microsoft JDBC Driver 12.4 for SQL Server | 12.4           | mssql-jdbc-12.4.0.jre11.jar mssql-jdbc-12.4.0.jre8.jar                                                         | 2028 年 7 月 31 日 |
| Microsoft JDBC Driver 12.2 for SQL Server | 12.2           | mssql-jdbc-12.2.0.jre11.jar mssql-jdbc-12.2.0.jre8.jar                                                         | 2028 年 1 月 31 日 |
| Microsoft JDBC Driver 11.2 for SQL Server | 11.2           | mssql-jdbc-11.2.0.jre18.jar mssql-jdbc-11.2.0.jre17.jar mssql-jdbc-11.2.0.jre11.jar mssql-jdbc-11.2.0.jre8.jar | 2027 年 8 月 4 日  |
| Microsoft JDBC Driver 10.2 for SQL Server | 10.2           | mssql-jdbc-10.2.0.jre17.jar mssql-jdbc-10.2.0.jre11.jar mssql-jdbc-10.2.0.jre8.jar                             | 2027 年 1 月 31 日 |
| Microsoft JDBC Driver 9.4 for SQL Server  | 9.4            | mssql-jdbc-9.4.1.jre16.jar mssql-jdbc-9.4.1.jre11.jar mssql-jdbc-9.4.1.jre8.jar                                | 2026 年 7 月 30 日 |
| Microsoft JDBC Driver 9.2 for SQL Server  | 9.2            | mssql-jdbc-9.2.1.jre15.jar mssql-jdbc-9.2.1.jre11.jar mssql-jdbc-9.2.1.jre8.jar                                | 2026 年 1 月 29 日 |
| Microsoft JDBC Driver 8.4 for SQL Server  | 8.4            | mssql-jdbc-8.4.1.jre14.jar mssql-jdbc-8.4.1.jre11.jar mssql-jdbc-8.4.1.jre8.jar                                | 2025 年 7 月 31 日 |
| Microsoft JDBC Driver 8.2 for SQL Server  | 8.2            | mssql-jdbc-8.2.2.jre13.jar mssql-jdbc-8.2.2.jre11.jar mssql-jdbc-8.2.2.jre8.jar                                | 2025 年 1 月 31 日 |
| Microsoft JDBC Driver 7.4 for SQL Server  | 7.4            | mssql-jdbc-7.4.1.jre12.jar mssql-jdbc-7.4.1.jre11.jar mssql-jdbc-7.4.1.jre8.jar                                | 2024 年 7 月 31 日 |
| Microsoft JDBC Driver 7.2 for SQL Server  | 7.2            | mssql-jdbc-7.2.2.jre11.jar mssql-jdbc-7.2.2.jre8.jar                                                           | 2024 年 1 月 31 日 |

## SQL 版本兼容性

| 驱动程序版本 | Azure SQL 数据库 | Azure Synapse Analytics | Azure SQL 托管实例 | SQL Server 2022 | SQL Server 2019 | SQL Server 2017 | SQL Server 2016 | SQL Server 2014 | SQL Server 2012 | PDW 2008R2 AU34 | SQL Server 2008 R2 | SQL Server 2008 |
| ------------ | ---------------- | ----------------------- | ------------------ | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | ------------------ | --------------- |
| 12.4         | 是               | 是                      | 是                 | 是              | 是              | 是              | 是              | 是              |                 |                 |                    |
| 12.2         | 是               | 是                      | 是                 | 是              | 是              | 是              | 是              | 是              |                 |                 |                    |
| 11.2         | 是               | 是                      | 是                 |                 | 是              | 是              | 是              | 是              |                 |                 |                    |
| 10.2         | 是               | 是                      | 是                 |                 | 是              | 是              | 是              | 是              | 是              |                 |                    |
| 9.4          | 是               | 是                      | 是                 |                 | 是              | 是              | 是              | 是              | 是              |                 |                    |
| 9.2          | 是               | 是                      | 是                 |                 | 是              | 是              | 是              | 是              | 是              |                 |                    |
| 8.4          | 是               | 是                      | 是                 |                 | 是              | 是              | 是              | 是              | 是              | 是              |                    |
| 8.2          | 是               | 是                      | 是                 |                 | 是              | 是              | 是              | 是              | 是              | 是              |                    |
| 7.4          | 是               | 是                      | 是                 |                 | 是              | 是              | 是              | 是              | 是              | 是              |                    |
| 7.2          | 是               | 是                      | 是                 |                 |                 | 是              | 是              | 是              | 是              | 是              | 是                 |
| 7.0          | 是               | 是                      | 是                 |                 |                 | 是              | 是              | 是              | 是              | 是              | 是                 |
| 6.4          | 是               | 是                      | 是                 |                 |                 | 是              | 是              | 是              | 是              | 是              | 是                 |
| 6.2          | 是               | 是                      |                    |                 |                 | 是              | 是              | 是              | 是              | 是              | 是                 | 是              |

> `6.2`及以下版本可查看官方文件(页头链接)
