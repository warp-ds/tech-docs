### Import

> Use in entire app

```js
import { Attention } from '@warp-ds/vue'
app.use(Attention)
```

> Use in one component and special imports

```js
import { wAttention } from '@warp-ds/vue'
```

### Visual options

#### Callout

```vue
<script>
import { ref } from 'vue'
import { wAttention, wBox } from '#components'

const target = ref(null)
const showing = ref(false)
</script>
<template>
  <w-box
    neutral
    as="h4"
    :ref="target ? target.$el : null"
    aria-details="callout-bubbletext"
    tabindex="0"
  >
    I am a box full of info
  </w-box>
  <w-attention
    callout
    right
    v-model="showing"
    :target-el="target ? target.$el : null"
  >
    <p id="callout-bubbletext">Hello Warp! This thing is new!</p>
  </w-attention>
</template>
```

#### Popover

```vue
<script>
import { ref } from 'vue'
import { wAttention, wBox } from '#components'

const target = ref(null)
const showing = ref(false)
</script>
<template>
  <button
    :aria-expanded="showing"
    aria-controls="popover-example"
    type="button"
    :ref="target ? target.$el : null"
    @click="() => (showing = !showing)"
  >
    Open popover
  </button>
  <w-attention
    popover
    bottom
    :target-el="target ? target.$el : null"
    v-model="showing"
  >
    <p>Hello Warp!</p>
  </w-attention>
</template>
```

#### Tooltip

```vue
<script>
import { ref } from 'vue'
import { wAttention, wBox } from '#components'

const target = ref(null)
const showing = ref(false)
</script>
<template>
  <w-box
    neutral
    as="h4"
    ref="target"
    @mouseenter="showing = true"
    @mouseleave="showing = false"
    @keydown.escape="showing = false"
    @focus="showing = true"
    @blur="showing = false"
    tabindex="0"
  >
    <button
      aria-describedby="tooltip-bubbletext"
      aria-expanded="true"
      type="button"
    >
      Hover over me
    </button>
  </w-box>
  <w-attention
    tooltip
    bottom
    :target-el="target?.$el"
    v-model="showing"
    @focus="showing = true"
    @blur="showing = false"
  >
    <p id="tooltip-bubbletext">Hello Warp!</p>
  </w-attention>
</template>
```

### Props

<api-table type="vue" component="Attention" />
