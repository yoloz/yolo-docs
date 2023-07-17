Lucene 中包含了四种基本数据类型，分别是：

- **Index**：索引，由很多的 Document 组成。
- **Document**：由很多的 Field 组成，是 Index 和 Search 的最小单位。
- **Field**：由很多的 term 组成，包括 field_name 和 field_value。
- **Term**：由很多的字节组成，可以分词，分词之后每个词即为一个 term。term 是索引的最小单元。

Lucene 中存储的索引主要分为三种类型：

- **Invert Index**，即倒排索引, 通过 term 可以快速查找到包含该 term 的 doc_id。如果 Field 配置分词，则分词后的每个 term 都会进入倒排索引，如果 Field 不指定分词，那该 Field 的 value 值则会作为一个 term 进入倒排。（这里需要注意的是 term 的长度是有限制的，如果对一个 Field 不采取分词，那么不建议该 Field 存储过长的值）
- **DocValues**，即正排索引, 采用的是类似数据库的列式存储。对于一些特殊需求的字段可以选择这种索引方式。
- **Store**，即原文, 存储整个完整 Document 的原始信息。

## 索引

### Invert Index

倒排索引是 lucene 的核心索引类型，采用链表的数据结构，倒排索引中的 key 就是一个 term，value 就是以 doc_id 形成的链表结构。如下：

| Term  | Doc_1 | Doc_2 |
| :---- | :---- | :---- |
| Quick |       | X     |
| The   | X     |       |
| brown | X     | X     |
| dog   | X     |       |
| dogs  |       | X     |

现在，如果我们想搜索 quick brown ，我们只需要查找包含每个词条的文档：

| Term  | Doc_1 | Doc_2 |
| :---- | :---- | :---- |
| brown | X     | X     |
| Quick |       | X     |
| total | 2     | 1     |

这里分别匹配到了 doc1 和 doc2，但是 doc1 匹配度要高于 doc2。

倒排索引中的 value 有四种存储类型：

- **DOCS**：只存储 doc_id。
- **DOCS_AND_FREQS**：存储 doc_id 和词频（Term Freq）。
- **DOCS_AND_FREQS_AND_POSITIONS**：存储 doc_id、词频（Term Freq）和位置。
- **DOCS_AND_FREQS_AND_POSITIONS_AND_OFFSETS**：存储 doc_id、词频（Term Freq）、位置和偏移(offset)

**org.apache.lucene.index.IndexOptions**

```java
public enum IndexOptions {
  NONE,
  DOCS,
  DOCS_AND_FREQS,
  DOCS_AND_FREQS_AND_POSITIONS,
  DOCS_AND_FREQS_AND_POSITIONS_AND_OFFSETS,
}
```

### DocValues

正排索引类似关系型数据库的存储模式，作用是通过 doc_id 和 field_name 可以快速定位到指定 doc 的特定字段值。DocValues 的 key 是 doc_id+field_name，value 是 field_value。

**如果域要进行 facet，gourp，highlight 等查询可以使用 docValue，节省内存。**

### Store

存储的是 Document 的完整信息，包括所有 field_name 和 field_value。Store 的 key 是 doc_id，value 是 field_name+field_value。对于上述中需要聚合和排序的 Field 并没有开启 DocValues 的情况，依然可以实现排序和聚合，会从 Store 中获取要排序聚合的字段值。

## 索引过程

总体来说，索引过程为：

1. **提取**：从原文提取，并创建 Document 和 Field 对象。
2. **分析**：分析文本将文本数据分割成字汇单元串，然后对它们执行一些可选操作。
3. **建立索引**：通过 IndexWriter 的 addDocument 写入到索引中，lucene 将输入数据以一种倒排索引(inverted index)的数据结构存储。

### 索引操作

- **创建 IndexWriter**

`IndexWriter(dir,new WhiteSpaceAnalyser(),IndexWriter.MaxField.UNLIMITED)`

_dir 是索引的保存路径，WhiteSpaceAnalyser 是基于空白的分词 ，最后部限定 Field 的数量。_

- **创建文档 Document 和 Field**

```java
Document doc = new Document();
doc.add(new Filed(key,value,STORE?,INDEX?)
```

_key 是 field 的检索字段名，value 是待写入/分析的文本;_

- **更新索引**

`updateDocument(xxxx)` luncene 只支持全部替换，即整个 Docuemnt 要被替换掉，没法更新单独的 Field

### 域(Field)选项

#### 域索引选项

域索引选项(Field.Index.\*)通过倒排索引来控制域文本是否可被搜索。具体选项如下：

- **Index. ANALYZED**：使用分析器将域值分解成独立的词汇单元流，并使每个词汇单元能被搜索。该选项适用于普通文本域(如正文、标题、摘要等)；
- **Index. NOT_ANALYZED**：对域进行索引，但不对 String 值进行分析。该操作实际上将域值作为单一词汇单元并使之能被搜索。该选项适用于索引那些不能被分解的域值，如 URL，文件路径，日期，人名，社保号码和电话号码等。该选项尤其适用于“精确匹配”搜索；
- **Index. ANALYZED_NO_NORMS**：这是 Index. ANALYZED 选项的一个变体，它不会在索引中存储 norms 信息。norms 记录了索引中的 index-time boost 信息，但是当你进行搜索时可能会比较耗费内存；
- **Index. NOT_ANALYZED_NO_NORMS**：与 Index. NOT_ANALYZED 类似，但也是不存储 norms。该选项常用于在搜索期间节省索引空间和减少内存耗费，因为 single-token 域并不需要 norms 信息，除非它们已被进行加权操作；
- **Index. No**: 使对应的域值不被搜索。

当 lucene 建立起倒排索引后，默认情况下它会保存所有必要信息以实施 Vector Space Modal。该 Modal 需要计算文档中出现的 term 数，以及它们出现的位置(这是必要的，比如通过词组搜索时用到)。但有时候这些域只是在布尔搜索时用到，它们并不为相关评分做贡献，一个常见的例子是域只是被用作过滤，如权限过滤和日期过滤。在这种情况下，可以通过调用`Field.setOmitTermFreqAndPositions(true)` 方法让 lucene 跳过对该项的出现频率和出现位置的索引。该方法可以节省一些索引在磁盘上的存储空间，还可以加速搜索和过滤过程，但会悄悄地阻止需要位置信息的搜索，如阻止 PhraseQuery 和 SpanQuery 类的运行。

**加权基准(Norms)**

在索引期间，文档中域的所有加权都被合并成一个单一的浮点数。除了域，文档也有自己的加权值，lucene 会基于域的词汇单元数量自动计算出这些加权值(更短的域具有更高的加权)。这些加权被合并到一处，并被编码(量化)成一个单一的字节值，作为域或文档信息的一部分存储起来。在搜索期间，被搜索域的 norms 都被加载到内存并被解码还原为浮点数，然后用于计算相关性评分(relevance score)。

需要注意如果索引进行一半时关闭 norms 选项，那么必须对整个索引进行重建，因为即使只有一个文档在索引时包含了 norms 选项，那么随后的段合并操作中，这个情况会“扩散”，从而使得所有文档都会占用一个字节 norms 空间，即使它们在此前的索引操作中挂比了 norms 选项。

#### 域存储选项

域存储选项(Field. Store.\*)用来确定是否需要存储域的真实值，以便后续搜索时能恢复这个值。

- **Store. YES**: 指定存储域值。该情况下，原始的字符串值全部被保存在索引中，并可以由 IndexReader 类恢复。该选项对于需要展示搜索结果的一些域很有用(如 UEL，标题或数据库主键)。如果索引的大小在搜索程序考虑之列的话，不要存储太大的域值，因为存储这些域值会消耗掉索引的存储空间;
- **Store. NO**: 指定不存储域值。该选项通常跟 Index. ANALYZED 选项共同用来索引大的文本域值，通常这些域值不用恢复为初始格式，如 Web 页面的正文或其他类型的文本文档。

lucene 包含一个很实用的工具类 `CompressionTools` ，该类提供静态方法压缩和解压缩字节数组。该类运行时会后台调用 java 内置的 `java.util.zip` 类。你可以使用它在存储域值之前进行压缩。注意，尽管该方法可以为索引节省一些空间，但节省的幅度跟域值的可被压缩程度有关，而且该方法会降低索引和搜索速度。其实是通过消耗更多 CPU 计算能力来换取更多的磁盘空间，对于很多程序来说，需要仔细权衡一下，如果域值占用空间不是很大，建议少用压缩。

#### 域的项向量选项

域的项向量(Field. TermVector.\*)主要用于高亮显示及相似搜索，它是介于索引域和存储域的一个中间结构。

- **TermVector. YES**: 记录 Term Vector;
- **TermVector. WITH_POSITIONS**: 记录 Term Vector 以及每个 Term 出现的位置;
- **TermVector. WITH_OFFSETS**: 记录 Term Vector 以及每个 Term 出现的偏移;
- **TermVector. WITH_POSITIONS_OFFSETS**: 记录 Term Vector 以及出现的位置+偏移;
- **TermVector. NO**: 不存储 TermVector

**如果 Index 选择了 No，则 TermVector 必须选择 No**

#### Reader、TokenStream 和 byte\[\]域值

Field 对象还有其他几个初始化方法，允许传入除 String 以外的其他参数。

- `Field(String name, Reader reader, IndexableFieldType type)` 域值是不能被存储的(域存储选项被硬编码成 Store. NO), 并且该域会一直用于分析和索引(Index. ANALYZES)。如果内存中保存 String 代价高或者不太方便时，如果存储的域值较大时，使用这个初始化方法则比较有效。
- `Field(String name, TokenStream tokenStream, IndexableFieldType type)` 允许程序对域值进行预分析并生成 TokenStream 对象。此外这个域不会被存储并将一直用于分析和索引。
- `Field(String name, byte[] value, IndexableFieldType type)`

#### 域选项组合

3 类域选项(索引、存储和项向量)设置完会形成若干可能的组合，常见如下：

| 索引选项              | 存储选项 | 项向量                 | 使用范例                                                                        |
| :-------------------- | :------- | :--------------------- | :------------------------------------------------------------------------------ |
| NOT_ANALYZED_NO_NORMS | YES      | NO                     | 标识符(文件名、主键)，电话号码和社会安全号码、URL、姓名、日期、用于排序的文本域 |
| ANALYZED              | YES      | WITH_POSITIONS_OFFSETS | 文档标题、摘要                                                                  |
| ANALYZED              | NO       | WITH_POSITIONS_OFFSETS | 文档正文                                                                        |
| NO                    | YES      | NO                     | 文档类型、数据库主键(如果没有用于搜索)                                          |
| NOT_ANALYZED          | NO       | NO                     | 隐藏的关键词                                                                    |

#### 域排序选项

用于排序的域是必须进行索引的，而且每个对应文档必须包含一个词汇单元。通常这意味着使用 `Field.Index.NOT_ANALYZED` 或 `Field.Index.NOT_ANALYZED_NO_NORMS` 。

#### 多值域

### 对数字、日期、时间等进行索引

lucene 为我们装备了一个处理日期的利器：DateTools, 通过它我们可以便捷的把 Date 型转换成 String 型。DateTools 可以把日期和时间转换成 YYYYMMDDhhmmss 的格式，并根据指定的 resolution 去除相应后缀; 也可以将其转成 long 值处理;

[样例 Demo](https://github.com/yoloz/searchSSDB.git)

[lucene 开发](http://codepub.cn/tags/Lucene/)
