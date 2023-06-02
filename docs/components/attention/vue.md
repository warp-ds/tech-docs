## Import

> Use in entire app

```js
import { Attention } from '@warp-ds/vue';
app.use(Attention);
```

> Use in one component and special imports

```js
import { wAttention } from '@warp-ds/vue';
```

## Visual options

### Callout

```js
<script>
import { ref } from 'vue'
import { wAttention, wBox } from '#components'

const target = ref(null)
const showing = ref(false)
</script>
<template>
  <w-box neutral class="h4" ref="target" @mouseenter="showing = true" @mouseleave="showing = false">Hover over me</w-box>
  <w-attention callout right :target-el="target?.$el" v-model="showing">
    <p>Hello Warp!</p>
  </w-attention>
</template>
```

### Popover

```js
<script>
import { ref } from 'vue'
import { wAttention, wBox } from '#components'

const target = ref(null)
const showing = ref(false)
</script>
<template>
  <w-box neutral class="h4" ref="target" @mouseenter="showing = true" @mouseleave="showing = false">Hover over me</w-box>
  <w-attention popover right :target-el="target?.$el" v-model="showing">
    <p>Hello Warp!</p>
  </w-attention>
</template>
```

### Tooltip

```js
<script>
import { ref } from 'vue'
import { wAttention, wBox } from '#components'

const target = ref(null)
const showing = ref(false)
</script>
<template>
  <w-box neutral class="h4" ref="target" @mouseenter="showing = true" @mouseleave="showing = false">Hover over me</w-box>
  <w-attention tooltip bottom :target-el="target?.$el" v-model="showing">
    <p>Hello Warp!</p>
  </w-attention>
</template>
```

## Props

<api-table type="vue" component="Attention" />
