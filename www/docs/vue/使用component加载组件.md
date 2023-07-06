## 不使用 setup 语法糖，这种方式和 vue2 差不多，is 可以是个字符串

```js
<script lang="ts">

import { storeToRefs } from 'pinia'

import { useSystemStore } from '@/stores/systemStore'

import Double from './double/double-index.vue'
import Classic from './classic/classic-index.vue'

export default {
    components: { Double, Classic },
    setup() {
        const systemStore = useSystemStore()
        const { getLayout } = storeToRefs(systemStore)
        return {
            getLayout
        }
    }
}
</script>

<template>
    <component :is="getLayout.layoutMode"></component>
</template>
```

## 使用 setup 语法糖，这时候的 is 如果使用字符串会加载不出来，得使用组件实例

### 方式一

```js
<script lang="ts" setup>

import { storeToRefs } from 'pinia'
import { onMounted, shallowRef, watch } from 'vue'

import { useSystemStore } from '@/stores/systemStore'

import Double from './double/double-index.vue'
import Classic from './classic/classic-index.vue'

const systemStore = useSystemStore()
const { getLayout } = storeToRefs(systemStore)

// 这里用ref的话，vue给出警告接收到一个组件，该组件被制成反应对象。这可能会导致不必要的性能开销，应该通过将组件标记为“markRaw”或使用“shallowRef”而不是“ref”来避免。
// 如果使用 markRaw 那么currentComp将永远不会再成为响应式对象。 所以得使用 shallowRef
const currentComp = shallowRef()

watch(getLayout, (ly) => {
    if (ly.layoutMode === 'Classic') {
        currentComp.value = Classic
    } else {
        currentComp.value = Double
    }
})

onMounted(() => {
    if (getLayout.value.layoutMode === 'Classic') {
        currentComp.value = Classic
    } else {
        currentComp.value = Double
    }
})
</script>

<template>
    <component :is="currentComp"></component>
</template>
```

### 方式二

```js
<script lang="ts" setup>

import { storeToRefs } from 'pinia'

import { useSystemStore } from '@/stores/systemStore'

import Double from './double/double-index.vue'
import Classic from './classic/classic-index.vue'

const systemStore = useSystemStore()
const { getLayout } = storeToRefs(systemStore)

</script>

<template>
    <component :is="getLayout.layoutMode"></component>
</template>

<!-- 只有在 components 选项中的组件可以被动态组件使用-->
<script lang="ts">
export default {
    components: { Double, Classic }
}
</script>
```
