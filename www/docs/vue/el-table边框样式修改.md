在表格外层包一层自定义的`div class="table-wrapper"`

```css
/* *表格背景透明 */
/* //透明化整体 */
.table-wrapper /deep/.el-table,
.el-table__expanded-cell {
  background-color: transparent !important;
}
/* //透明化行、单元格,删除表头下横线 */
.table-wrapper /deep/ tr,
.table-wrapper /deep/ th,
.table-wrapper /deep/ td {
  background: #1439391c !important;
  color: #fff;
  border-bottom: 0px;
  /* //删除表头下横线 */
}
/* //hover时样式 */
.table-wrapper /deep/ .el-table tbody tr:hover > td {
  background-color: #367f7f78 !important;
}
/* // 表格内容(有用) */
.table-wrapper /deep/ .el-table__row {
  background: #1439391c !important;
  color: #46d4ff;
}
/**表格背景透明end */
.table-wrapper >>> .el-table__row > td {
  /* 去除表格线 */
  border: none;
}
.table-wrapper >>> .el-table th.el-table__cell.is-leaf {
  /* 去除上边框 */
  border-bottom: none !important;
}
.table-wrapper >>> .el-table__inner-wrapper::before {
  /* 去除下边框 */
  height: 0;
}
```

可查看[vue 中 style 深度访问](./vue中style深度访问.md)

## 表格去除分割线后无数据下边框去除

```css
<style scoped>

:deep(.el-table__inner-wrapper::before){
    height: 0;
}

</style>
```

## 无数据时缩小表格高度

```css
<style scoped>

:deep(.el-table .el-table__empty-block){
    min-height: 50px;
}

</style>
```
