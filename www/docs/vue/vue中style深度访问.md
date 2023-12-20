## >>>

如果 vue 的 style 使用的是 css，那么则

```css
<style lang="css" scoped>
.a >>> .b {
   /* ... */
}
</style>
```

但是像`scss`等预处理器却无法解析`>>>`,可以使用下面方式：

## /deep/

```css
<style lang="scss" scoped>
.a{
   /deep/ .b {
      /* ... */
   }
}
</style>
```

但是有些开发者反应在`vue-cli3`编译时，deep 的方式会报错或者警告。此时我们可以使用下面方式：

## ::v-deep

切记必须是双冒号

```css
<style lang="scss" scoped>
.a{
   ::v-deep .b {
      /* ... */
   }
}
</style>
```

## :deep()

vue2 从 2.7.0 开始，vue3 一律采用这种方式用来深度访问组件样式。

`:deep()`对于第一层内部组件样式，加不加样式都会生效。
观察下面组件

```html
<div class="responsive-btns">
  <el-input class="btn-item"></el-input>
</div>
```

```css
:deep(.el-input) {
  font-size: 20px;
}
.el-input {
  font-size: 20px;
}
/* 这两个都可以。对于内部组件，第一层加不加 :deep()都可以 */
```

对于除第一层之外的，第二、三...层样式，则必须加`：deep()`，加载自己身上，或者外面父上都可以

```css
.el-input {
  /* 不起作用 */
  .el-input__inner {
    font-size: 40px;
  }
}

.el-input {
  /* 起作用 */
  :deep(.el-input__inner) {
    font-size: 40px;
  }
}

:deep(.el-input) {
  /* 也起作用，外面有 deep */
  .el-input__inner {
    font-size: 40px;
  }
}

:deep(.responsive-btns) {
  .el-input {
    /* 也起作用，外面有 deep */
    .el-input__inner {
      font-size: 40px;
    }
  }
}
```
