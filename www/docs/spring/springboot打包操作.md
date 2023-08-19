## springboot 打包本地 jar

spring boot 打包将<scope>system</scope>的 jar 包含进去:

```xml
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <configuration>
        <includeSystemScope>true</includeSystemScope>
    </configuration>
</plugin>
```

在`spring maven`打包时，`provided`依赖会排除在包外，但`springboot maven`打包时，还会将这些依赖打进 `war` 包的 `lib-provided` 文件夹里或 `jar` 包的 `lib `文件夹里。

## 通过指定 groupId 和 artifactId 排除某个特定的依赖

```xml
<build>
   <plugins>
       <plugin>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-maven-plugin</artifactId>
           <configuration>
               <excludes>
                   <exclude>
                       <groupId>org.projectlombok</groupId>
                       <artifactId>lombok</artifactId>
                   </exclude>
               </excludes>
           </configuration>
       </plugin>
   </plugins>
</build>
```

## 指定 groupId 排除 groupId 相关的所有依赖

```xml
<build>
   <plugins>
       <plugin>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-maven-plugin</artifactId>
           <configuration>
               <excludeGroupIds>org.projectlombok</excludeGroupIds>
           </configuration>
       </plugin>
   </plugins>
</build>

```
