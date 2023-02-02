同 logstash，filebeat 默认生成`filebeat-*`的索引以及使用解压目录下的`fields.yml`(二进制压缩包)

## 自定义模板及索引

- 不同的文件生成不同的索引；
- json 记录展开到最外层，否则 filbeat 会将日志内容放在 msg 里;

```yml
setup.template.name: custom_name
setup.template.pattern: custom_name_*
setup.template.enabled: true
setup.template.overwrite: true
setup.template.fields: customFields.yml
setup.ilm.enabled: false
processors:
  - drop_fields:
      fields: [log, host, input, agent, ecs]
      ignore_missing: false
filebeat.inputs:
  - close_removed: true
    close_inactive: 5m
    type: log
    tags: [t1]
    clean_removed: true
    enabled: true
    json: { keys_under_root: true, overwrite_keys: true }
    paths: [/data/t1_*]
  - close_removed: true
    close_inactive: 5m
    type: log
    tags: [t2]
    clean_removed: true
    enabled: true
    json: { keys_under_root: true, overwrite_keys: true }
    paths: [/data/t2_*]
output.elasticsearch:
  indices:
    - index: custom_name_t1
      when.contains: { tags: t1 }
    - when.contains: { tags: t2 }
      index: custom_name_t2
  hosts: ['127.0.0.1:9200']
```

:::info

- setup.template.name 设置一个新的模板，模板的名称
- setup.template.pattern 模板匹配那些索引
- setup.template.enabled: false 关掉默认的模板配置
- setup.template.overwrite: false 是否覆盖现有模板
- when.contains: 包含
- json.keys_under_root: true 将 field 展开到最外层(the custom fields are stored as top-level fields in the output document)

:::

自定义模板请查看：[Configuration-template](https://www.elastic.co/guide/en/beats/filebeat/current/configuration-template.html#configuration-template)

文件路径请查看：[Configure project paths](https://www.elastic.co/guide/en/beats/filebeat/current/configuration-path.html#configuration-path)

## 字段定义

类型自定义(默认模板使用的是小于 1024 是 keyword,反之是 text，如果要当作`keyword`使用则是`fieldName.keyword`)

`setup.template.fields: customFields.yml`(路径请查看上述链接)，文件格式如下：

```yml
- key: custom_name
  title: custom_name
  description: >
    custom fields
  fields:
    # some desc
    - name: t1
      type: keyword
    - name: t2
      type: keyword
    - name: t3
      type: ip
    - name: t4
      type: integer
    - name: t5
      type: ip
    - name: t6
      type: integer
    - name: t7
      type: ip
    - name: t8
      type: text
    - name: t9
      type: date
    - name: t10
      type: long
```

## 启动

```bash
$ ./filebeat -e -c config/customConf.yml
```

## 采集 Log 配置

registry 是用来记录日志文件的 state 信息，如记录读取到文件位置的的 offset，文件的 inode、modify time 等，如果配置不好会导致此文件越来越大。

- harvester_buffer_size

  The size in bytes of the buffer that each harvester uses when fetching a file. The default is 16384.

- max_bytes

  The maximum number of bytes that a single log message can have. All bytes after max_bytes are discarded and not sent. This setting is especially useful for multiline log messages, which can get large. **The default is 10MB (10485760).**

- ignore_older

  If this option is enabled, Filebeat ignores any files that were modified before the specified timespan. Configuring ignore_older can be especially useful if you keep log files for a long time. For example, if you want to start Filebeat, but only want to send the newest files and files from last week, you can configure this option.

:::caution

- You must set ignore_older to be greater than close_inactive.
- To remove the state of previously harvested files from the registry file, use the clean_inactive configuration option.

:::

The `close_*` configuration options are used to close the harvester after a certain criteria or time. Closing the harvester means closing the file handler.

- close_inactive

  When this option is enabled, Filebeat closes the file handle if a file has not been harvested for the specified duration.We recommended that you set close_inactive to a value that is larger than the least frequent updates to your log files.

- close_removed

  When this option is enabled, Filebeat closes the harvester when a file is removed. Normally a file should only be removed after it’s inactive for the duration specified by close_inactive.

:::caution
This option is enabled by default. If you disable this option, you must also disable clean_removed.
:::

- close_timeout

  When this option is enabled, Filebeat gives every harvester a predefined lifetime. Regardless of where the reader is in the file, reading will stop after the close_timeout period has elapsed.

:::caution

- If you set close_timeout to equal ignore_older, the file will not be picked up if it’s modified while the harvester is closed. This
  combination of settings normally leads to data loss, and the complete file is not sent.

- This option is set to 0 by default which means it is disabled.

:::

The `clean_*` options are used to clean up the state entries in the registry file. These settings help to reduce the size of the registry file and can prevent a potential inode reuse issue.

**registry 文件内容修改在下一次使用此文件的时候生效**

- clean_inactive

  When this option is enabled, Filebeat removes the state of a file after the specified period of inactivity has elapsed.

:::caution

- The clean_inactive setting must be greater than `ignore_older + scan_frequency` to make sure that no states are removed while a file is still being harvested.
- ignore_older must be enabled when clean_inactive is used.
- 在测试期间，您可能会注意到注册表包含本应根据 clean_inactive 设置而被删除的状态条目。发生这种情况是因为**Filebeat 直到再次打开注册表以读取其他文件时才删除条目**。如果要测试 clean_inactive 设置，请确保 Filebeat 配置为从多个文件中读取，否则文件状态永远不会从注册表中删除。

:::

- clean_removed

  When this option is enabled, Filebeat cleans files from the registry if they cannot be found on disk anymore under the last known name.

- scan_frequency

  How often Filebeat checks for new files in the paths that are specified for harvesting.The default setting is 10s.

## 配置日志

配置文件 filebeat.yml 中的 logging 部分包含用于配置日志记录输出的选项。日志记录系统可用将日志写入 syslog，如果未明确配置日志记录，则使用文件输出。

```log
logging.level: info
logging.to_files: true
logging.files:
  path: /var/log/filebeat
  name: filebeat
  keepfiles: 7
  permissions: 0644
logging.metrics.enabled: false
```

:::note 选项：

- logging.to_syslog

如果为 true，则将所有日志记录输出写入 syslog

- logging.to_eventlog

如果为 true，则将所有日志记录输出写入 windows 事件日志。

- logging.to_files

如果为 true，则将所有日志记录输出写入文件，达到日志文件大小限制时，日志文件会自动限制替换（轮转）。

- logging.level

最低日志级别。debug、info、warning、error。默认日志级别为 info。

- logging.metrics.enabled

如果启动，filebeat 会定期记录上一时期内已更改的内部指标，对于更改的每个度量标准，将记录该期间开头的值的增量，此外，关闭时会记录所有非零内部指标的总值。默认值为 true。

- logging.metrics.period

记录内部指标的时间段。默认值为 30 秒。

- logging.files.path

写入日志文件的目录。默认为日志路径。

- logging.files.name

写入日志的文件的名称。

- logging.files.rotateeverybytes

日志文件的最大大小，如果达到限制，则会生成新的日志文件，默认大小限制为 10M。

- logging.files.permissions

旋转日志文件时要应用的权限掩码。默认值为 0600。

- logging.files.keepfiles

要保留在磁盘上的最新轮换日志文件数。在日志轮换期间删除旧文件。默认值为 7.keepfiles 选项必须在 2 到 1024 个文件的范围。

- logging.json

如果为 true，则以 json 格式记录消息。默认值为 false。

:::
