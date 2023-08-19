java 代码规范检查，常用方案如下：

- 在客户端做检查： 利用`git hook`添加`pre-commit`钩子，如前端项目中常见的 `husky` 就是基于此实现的。但缺点也很明显，就是在本地把这个钩子删了或者 `git commit --no-verify` 就绕开了；
- 在服务端做检查： 还是利用`git hook`添加`pre-receive`这个钩子；
- CI/CD 工作流上做限制检查：如 gitlab 提供有图形化配置;

> 前两点添加钩子需要写 Shell 脚本

## 常用到代码规约

语法配置:[https://checkstyle.sourceforge.io/config.html](https://checkstyle.sourceforge.io/config.html)

> 文档中`LineLength`新版规则提取到`TreeWalker`外面

## google checkstyle

[https://github.com/checkstyle/checkstyle/blob/master/src/main/resources/google_checks.xml](https://github.com/checkstyle/checkstyle/blob/master/src/main/resources/google_checks.xml)

## sun checkstyle

[https://github.com/checkstyle/checkstyle/blob/master/src/main/resources/sun_checks.xml](https://github.com/checkstyle/checkstyle/blob/master/src/main/resources/sun_checks.xml)

## 阿里巴巴

[符合阿里巴巴代码规范的 checkstyle 检测文件](https://blog.csdn.net/KingBoyWorld/article/details/76082399)

## maven-checkstyle-plugin

[Apache Maven Checkstyle Plugin](https://maven.apache.org/plugins/maven-checkstyle-plugin/)

The Checkstyle Plugin has three goals:

- `checkstyle:checkstyle` is a reporting goal that performs Checkstyle analysis and generates a report on violations.
- `checkstyle:checkstyle-aggregate` is a reporting goal that performs Checkstyle analysis and generates an aggregate HTML report on violations in a multi-module reactor build.
- `checkstyle:check` is a goal that performs Checkstyle analysis and outputs violations or a count of violations to the console, potentially failing the build. It can also be configured to re-use an earlier analysis.

> mvn checkstyle:help 查看帮助
>
> mvn checkstyle:check 查看工程是否满足检查。如果不满足，检查失败，可以通过 target/checkstyle-result.xml 来查看
>
> mvn checkstyle:checkstyle 查看工程是否满足检查。如果不满足，不会失败，可以通过 target/site/checkstyle.html 查看检查信息
>
> mvn checkstyle:checkstyle-aggregate 检查工程是否满足检查。如果不满足，不会失败，可以通过 target/site/checkstyle.html 查看

例子：

```xml
<plugin>
   <groupId>org.apache.maven.plugins</groupId>
   <artifactId>maven-checkstyle-plugin</artifactId>
   <version>3.3.0</version>
   <configuration>
     <configLocation>sun_checks.xml</configLocation>
     <!-- <configLocation>google_checks.xml</configLocation> -->
     <encoding>UTF-8</encoding>
     <consoleOutput>true</consoleOutput>
     <failsOnError>true</failsOnError>
     <linkXRef>false</linkXRef>
   </configuration>
   <executions>
     <execution>
       <id>validate</id>
       <phase>validate</phase>
       <goals>
         <goal>check</goal>
       </goals>
     </execution>
   </executions>
 </plugin>
```

> If you want to report to the console or fail the build, you must add an execution of `checkstyle::check` to the `<build>` element and configure any options that you need.  
> 插件提供两种预先定义的规则：`sun_checks.xml`和`google_checks.xml`,当然你也可以指定自定义的规则集。
