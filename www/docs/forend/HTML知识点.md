## 浏览器 Tab 上的图标

html 代码的 header 中

```css
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
<link rel="icon" href="/favicon.ico" type="image/x-icon">
```

[将图片转化为 icon 格式的图片](https://www.favicon-generator.org/)

## Data URI scheme

Data URI scheme 是在 RFC2397 中定义的，目的是将一些小的数据，直接嵌入到网页中，从而不用再从外部文件载入.

```html
<img
src=“data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAkCAYAAABIdFAMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNo8zjsOxCAMBFB/KEAUFFR0Cbng3nQPw68ArZdAlOZppPFIBhH5EAB8b+Tlt9MYQ6i1BuqFaq1CKSVcxZ2Acs6406KUgpt5/LCKuVgz5BDCSb13ZO99ZOdcZGvt4mJjzMVKqcha68iIePB86GAiOv8CDADlIUQBs7MD3wAAAABJRU5ErkJggg%3D%3D”
/>
```

在上面的 Data URI 中，data 表示取得数据的协定名称，image/png 是数据类型名称，base64 是数据的编码方法，逗号后面就是这个 image/png 文件 base64 编码后的数据。目前，Data URI scheme 支持的类型有：

```
data:,文本数据
data:text/plain,文本数据
data:text/html,HTML代码
data:text/html;base64,base64编码的HTML代码
data:text/css,CSS代码
data:text/css;base64,base64编码的CSS代码
data:text/JavaScript,javascript代码
data:text/javascript;base64,base64编码的Javascript代码
data:image/gif;base64,base64编码的gif图片数据
data:image/png;base64,base64编码的png图片数据
data:image/jpeg;base64,base64编码的jpeg图片数据
data:image/x-icon;base64,base64编码的icon图片数据
```

把图像文件的内容直接写在了 HTML 文件中，这样做的好处是，节省了一个 HTTP 请求,坏处呢，就是浏览器不会缓存这种图像。

## CSS 之 100%和 100vh 的区别

- height：100%是铺满父容器的高度；
- height：100vh 是指铺满屏幕的高度；

> 较好的习惯从最外层到里层，逐级设置 hight,width,避免错位；

```css
.body-view {
  // height: calc(100vh - var(--tag-view-height) - - $top-header-height);
  height: calc(100% - $tag-view-height);
  background: var(--main-body-bg-color);
  margin-top: 10px;
  padding: 10px;
  overflow: auto;
}
```

> `100vh`使用后存在滚动条，换用`100%`
