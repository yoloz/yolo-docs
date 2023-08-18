从[NERD FONTS](https://www.nerdfonts.com/font-downloads)下载所需字体
:::note
个人推荐 `DejaVuSans Mono`或`JetBrainsMonoNL NF` 字体
:::

## window 安装字体

如下二选一:

- 下载的字体放入`C:\Windows\Fonts`里，会自动安装;
- 设置=>个性化=>字体,可以安装;

## linux 安装字体

系统级别: 在`/usr/share/fonts/truetype`下创建字体目录，然后将字体文件放入
用户级别: 在`~/.local/share/fonts`下创建字体目录，然后将字体文件放入

```bash
#更新字体缓存
$ fc-cache -fv
#查看字体列表
$ fc-list
```

## vscode 更换字体

在 Settings=>Text Editor=>Font=>Font Family 里单引号加入字体名称(最前面)

## tabby 更换字体

在 Settings=>Appearance=>Font 里选择字体
