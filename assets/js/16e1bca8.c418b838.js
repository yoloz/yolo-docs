"use strict";(self.webpackChunkyolo_docs=self.webpackChunkyolo_docs||[]).push([[4838],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},21665:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={},i=void 0,l={unversionedId:"database/vertica\u4e86\u89e3",id:"database/vertica\u4e86\u89e3",title:"vertica\u4e86\u89e3",description:"Vertica Architecture Basics",source:"@site/docs/database/vertica\u4e86\u89e3.md",sourceDirName:"database",slug:"/database/vertica\u4e86\u89e3",permalink:"/docs/database/vertica\u4e86\u89e3",draft:!1,editUrl:"https://github.com/yoloz/yolo-docs/tree/docusaurus/docs/database/vertica\u4e86\u89e3.md",tags:[],version:"current",lastUpdatedAt:1689650905,formattedLastUpdatedAt:"2023\u5e747\u670818\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SQL\u8fde\u63a5\u8bed\u53e5",permalink:"/docs/database/SQL\u8fde\u63a5\u8bed\u53e5"},next:{title:"vertica\u4f7f\u7528",permalink:"/docs/database/vertica\u4f7f\u7528"}},s={},c=[{value:"Column Storage",id:"column-storage",level:2},{value:"Data Encoding and Compression",id:"data-encoding-and-compression",level:2},{value:"Clustering",id:"clustering",level:2},{value:"Projections",id:"projections",level:2},{value:"Projection Types",id:"projection-types",level:3},{value:"Logical and Physical Schema",id:"logical-and-physical-schema",level:2},{value:"Terminology(\u672f\u8bed)",id:"terminology\u672f\u8bed",level:2},{value:"Host",id:"host",level:3},{value:"Instance",id:"instance",level:3},{value:"Node",id:"node",level:3},{value:"Cluster",id:"cluster",level:3},{value:"Database",id:"database",level:3},{value:"Data Types",id:"data-types",level:2},{value:"Structured Data(\u7ed3\u6784\u5316\u6570\u636e)",id:"structured-data\u7ed3\u6784\u5316\u6570\u636e",level:3},{value:"Semi-structured Data(\u534a\u7ed3\u6784\u5316\u6570\u636e)",id:"semi-structured-data\u534a\u7ed3\u6784\u5316\u6570\u636e",level:3},{value:"Unstructured Data",id:"unstructured-data",level:3},{value:"Using Flex Tables",id:"using-flex-tables",level:2},{value:"Create a Simple JSON File",id:"create-a-simple-json-file",level:3},{value:"Create a Flex Table and Load Data",id:"create-a-flex-table-and-load-data",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Vertica Architecture Basics")),(0,o.kt)("h2",{id:"column-storage"},"Column Storage"),(0,o.kt)("p",null,"Vertica reads only the columns needed to answer the query. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"=> SELECT avg(price) FROM tickstore WHERE symbol = 'AAPL' and date = '5/31/13';\n")),(0,o.kt)("p",null,"For this example query, a column store reads only three columns while a row store reads all columns"),(0,o.kt)("h2",{id:"data-encoding-and-compression"},"Data Encoding and Compression"),(0,o.kt)("p",null,"Vertica uses encoding and compression to optimize query performance and save storage space."),(0,o.kt)("h2",{id:"clustering"},"Clustering"),(0,o.kt)("p",null,"Clustering supports scaling and redundancy. You can scale your database cluster by adding more nodes, and you can improve reliability by distributing and replicating data across your cluster."),(0,o.kt)("h2",{id:"projections"},"Projections"),(0,o.kt)("p",null,"A projection consists of a set of columns with the same sort order, defined by a column to sort by or a sequence of columns by which to sort. Like an index or materialized view in a traditional database, a projection accelerates query processing. When you write queries in terms of the original tables, the query uses the projections to return query results."),(0,o.kt)("p",null,"Projections are distributed and replicated across nodes in your cluster, ensuring that if one node becomes unavailable, another copy of the data remains available."),(0,o.kt)("h3",{id:"projection-types"},"Projection Types"),(0,o.kt)("p",null,"A Vertica table typically has multiple projections, each defined to contain different content.Content for the projections of a given table can differ in scope and how it is organized.These differences can generally be divided into the following projection types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Superprojections")),(0,o.kt)("p",null,"For each table in the database, Vertica requires at least one superprojection that contains all columns in the table. In the absence of query-specific projection, Vertica uses the table's superprojection, which can support any query and DML operation."),(0,o.kt)("p",null,"Under certain conditions, Vertica automatically creates a table's superprojection immediately on table creation. Vertica also creates a superprojection when you first load data into that table, if none already exists. CREATE PROJECTION can create a superprojection if it specifies to include all table columns. A table can have multiple superprojections."),(0,o.kt)("p",null,"While superprojections can support all queries on a table, they do not facilitate optimal execution of specific queries."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Query-specific projections")),(0,o.kt)("p",null,"A query-specific projection is a projection that contains only the subset of table columns to process a given query. Query-specific projections significantly improve the performance of those queries for which they are optimized."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Aggregate projections")),(0,o.kt)("p",null,"Queries that include expressions or aggregate functions such as SUM and COUNT can perform more efficiently when they use projections that already contain the aggregated data. This is especially true for queries on large quantities of data."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"CREATE PROJECTION")," defines a projection,\u7565")),(0,o.kt)("h2",{id:"logical-and-physical-schema"},"Logical and Physical Schema"),(0,o.kt)("p",null,"Vertica stores information about database objects in the logical schema and the physical schema. The difference between the two schemas and how they relate to data storage is an important and unique aspect of the Vertica architecture."),(0,o.kt)("p",null,"A logical schema consists of objects such as tables, constraints, and views. Vertica supports any relational schema design that you choose. A physical schema consists of collections of table columns called projections. A projection can contain some or all of the columns of a table."),(0,o.kt)("h2",{id:"terminology\u672f\u8bed"},"Terminology(\u672f\u8bed)"),(0,o.kt)("p",null,"It is helpful to understand the following terms when using Vertica:"),(0,o.kt)("h3",{id:"host"},"Host"),(0,o.kt)("p",null,"A computer system with a 64-bit Intel or AMD processor, RAM, hard disk, and TCP/IP network interface (IP address and hostname). Hosts share neither disk space nor main memory with each other."),(0,o.kt)("h3",{id:"instance"},"Instance"),(0,o.kt)("p",null,"An instance of Vertica consists of the running Vertica process and disk storage (catalog and\ndata) on a host."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Only one instance of Vertica can be running on a host at any time.")),(0,o.kt)("h3",{id:"node"},"Node"),(0,o.kt)("p",null,"A host configured to run an instance of Vertica. It is a member of the database cluster. For a database to have the ability to recover from the failure of a node requires a database K-safety value of at least 1 (3+ nodes)."),(0,o.kt)("h3",{id:"cluster"},"Cluster"),(0,o.kt)("p",null,"The concept of Cluster in the Vertica Analytics Platform is a collection of hosts with the Vertica software packages (RPM or DEB) that are in one admin tools domain. You can access and manage a cluster from one admintools initiator host."),(0,o.kt)("h3",{id:"database"},"Database"),(0,o.kt)("p",null,"A cluster of nodes that, when active, can perform distributed data storage and SQL statement execution through administrative, interactive, and programmatic user interfaces."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Although you can define more than one database on a cluster, Vertica supports running only one database per cluster at a time.")),(0,o.kt)("h2",{id:"data-types"},"Data Types"),(0,o.kt)("h3",{id:"structured-data\u7ed3\u6784\u5316\u6570\u636e"},"Structured Data(\u7ed3\u6784\u5316\u6570\u636e)"),(0,o.kt)("p",null,"Structured data consists of all data that can be stored in a relational database. it is stored in rows and column and have relational keys that can be easily mapped to pre-designed fields.including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Binary"),(0,o.kt)("li",{parentName:"ul"},"Boolean"),(0,o.kt)("li",{parentName:"ul"},"Character"),(0,o.kt)("li",{parentName:"ul"},"Date/Time"),(0,o.kt)("li",{parentName:"ul"},"Long"),(0,o.kt)("li",{parentName:"ul"},"Numeric")),(0,o.kt)("h3",{id:"semi-structured-data\u534a\u7ed3\u6784\u5316\u6570\u636e"},"Semi-structured Data(\u534a\u7ed3\u6784\u5316\u6570\u636e)"),(0,o.kt)("p",null,"Data that does not reside in a relational database, but contains properties that allow it to be analyzed. Examples of semi-structured data are XML and JSON ."),(0,o.kt)("h3",{id:"unstructured-data"},"Unstructured Data"),(0,o.kt)("p",null,"Represents the majority of existing data. Unstructured data does not have a pre-defined structure. It typically includes text and multi-media content, for example emails, video files, and audio files."),(0,o.kt)("h2",{id:"using-flex-tables"},"Using Flex Tables"),(0,o.kt)("p",null,"See Using Flex Tables for information on using unstructured data in Vertica."),(0,o.kt)("h3",{id:"create-a-simple-json-file"},"Create a Simple JSON File"),(0,o.kt)("p",null,"Use this JSON data for the exercises in the rest of this section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"name": "Everest", "type":"mountain", "height":29029, "hike_safety": 34.1}\n{"name": "Mt St Helens", "type":"volcano", "height":29029, "hike_safety": 15.4}\n{"name": "Denali", "type":"mountain", "height":17000, "hike_safety": 12.2}\n{"name": "Kilimanjaro", "type":"mountain", "height":14000 }\n{"name": "Mt Washington", "type":"mountain", "hike_safety": 50.6}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy and paste the JSON data into your favorite editor."),(0,o.kt)("li",{parentName:"ol"},"Save the file in any convenient location for loading into your Vertica database.")),(0,o.kt)("h3",{id:"create-a-flex-table-and-load-data"},"Create a Flex Table and Load Data"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a flex table called mountains:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"   => CREATE flex table mountains();\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Load the JSON file you saved, using the flex table parser fjsonparser:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"   => COPY mountains from '/home/dbadmin/data/flex/mountains.json'\n    parser fjsonparser();\n    Rows Loaded\n    -------------\n    5\n    (1 row)\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Query values from the sample file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"   => SELECT name, type, height from mountains;\n   name | type | height\n   ---------------+----------+--------\n   Everest | mountain | 29029\n   Mt St Helens | volcano | 29029\n   Denali | mountain | 17000\n   Kilimanjaro | mountain | 14000\n   Mt Washington | mountain |\n   (5 rows)\n")))}p.isMDXComponent=!0}}]);