执行 protoc 编译器生成 go 文件：

```bash
protoc --proto_path=./src/protobufDemo/demo1/ --proto_path=./src/protobufDemo/demo2 --go_out=./src/protobufDemo/demo2 ./*.proto
```

> --proto_path: 指定了要去哪个目录中搜索 import 中导入的和要编译为.go 的 proto 文件，可以定义多个

## proto2

[protobuf-2.6.1](https://github.com/protocolbuffers/protobuf/releases?page=9)
[protoc-2.6.1](https://repo1.maven.org/maven2/com/google/protobuf/protoc/2.6.1-build2/)

```log
.
├── bin
│   └── protoc -> ../protoc-2.6.1-build2-linux-x86_64.exe
├── protobuf-2.6.1   ##官方proto=>protobuf-2.6.1/src/google/protobuf/*.proto
└── protoc-2.6.1-build2-linux-x86_64.exe
```

## proto3

[protoc-3.19.1](https://github.com/protocolbuffers/protobuf/releases?page=1)

```log
.
├── bin
│   └── protoc
├── include
│   └── google ##官方proto=>include/google/protobuf/*.proto
└── readme.txt
```

## maven plugin

```xml
<plugin>
<groupId>com.github.os72</groupId>
<artifactId>protoc-jar-maven-plugin</artifactId>
<version>${protoc.maven.plugin.version}</version>
<executions>
    <execution>
        <id>generate-sources</id>
        <phase>generate-sources</phase>
        <goals>
            <goal>run</goal>
        </goals>
        <configuration>
            <protocVersion>${protobuf.version}</protocVersion>
            <addSources>none</addSources>
            <includeStdTypes>true</includeStdTypes>
            <outputDirectory>src/main/java</outputDirectory>
            <inputDirectories>
                <include>src/main/proto</include>
            </inputDirectories>
        </configuration>
    </execution>
    <execution>
        <id>generate-test-sources</id>
        <phase>generate-test-sources</phase>
        <goals>
            <goal>run</goal>
        </goals>
        <configuration>
            <protocVersion>${protobuf.version}</protocVersion>
            <includeStdTypes>true</includeStdTypes>
            <addSources>none</addSources>
            <outputDirectory>src/test/java</outputDirectory>
            <inputDirectories>
                <include>src/test/proto</include>
            </inputDirectories>
        </configuration>
    </execution>
</executions>
</plugin>
```
