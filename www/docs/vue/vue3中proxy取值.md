vue3 中的对象为 proxy 对象如何获取值:

- 第一种获取 target 值的方式

```js
import { toRaw } from "@vue/reactivity";
var list = toRaw(proxyobject);
```

- 第二种获取 target 值的方式，通过 json 序列化之后可获取值

```js
JSON.parse(JSON.stringify(proxyobject));
```
