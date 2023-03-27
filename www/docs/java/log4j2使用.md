## ERROR StatusLogger Unrecognized conversion specifier [d]

log4j2 是采用的插件式编程，当 log4j2 包编译时或含有 log4j2 插件的包编译时，会将需要加载的插件信息放在 `META-INF/org/apache/logging/log4j/core/config/plugins/Log4j2Plugins.dat` 这个文件中（包括官方 logj42 的原生插件），然后项目启动的时候 log4j2 会在各个 jar 包的 META-INF 目录下扫描这个插件信息文件，然后去加载插件。

当项目被打成一个 jar 包时，如果两个不同的 jar 包中都有 Log4j2Plugins.dat 这个文件，就会出现问题，其中一个文件会被另一个覆盖，导致项目启动的时候有一个文件中的插件不能被正常加载，导致报错。

解决这个问题就是当所有 jar 包被打成一个 jar 包时，需要对各个 jar 包中的 Log4j2Plugins.dat 进行合并，使用`maven-shade-plugin.log4j2-cachefile-transformer`这个包

:::caution 注意
maven-shade-plugin.log4j2-cachefile-transformer 不同版本之间有差异，要注意使用的 log4j2 版本和 maven-shade-plugin 版本的匹配关系
:::

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-shade-plugin</artifactId>
    <version>3.2.3</version>
    <executions>
        <execution>
            <phase>package</phase>
            <goals>
                <goal>shade</goal>
            </goals>
            <configuration>
                <transformers>
                    <transformer
                            implementation="com.github.edwgiz.mavenShadePlugin.log4j2CacheTransformer.PluginsCacheFileTransformer"/>
                </transformers>
                <filters>
                    <filter>
                        <artifact>*:*</artifact>

                        <excludes>
                            <exclude>META-INF/*.SF</exclude>
                            <exclude>META-INF/*.DSA</exclude>
                            <exclude>META-INF/*.RSA</exclude>
                        </excludes>

                    </filter>
                </filters>
            </configuration>
        </execution>
    </executions>
    <dependencies>
        <dependency>
            <groupId>com.github.edwgiz</groupId>
            <artifactId>maven-shade-plugin.log4j2-cachefile-transformer</artifactId>
            <version>2.6.1</version>
        </dependency>
    </dependencies>
</plugin>
```

:::note
对于的 maven-shade-plugin 版本为 3.2.3，这个对应关系在 maven-shade-plugin.log4j2-cachefile-transformer 包中的 META-INF 中可以找到
:::
