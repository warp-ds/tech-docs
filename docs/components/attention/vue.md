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
    ref="target"
    @mouseenter="showing = true"
    @mouseleave="showing = false"
    @keydown.escape="showing = false"
    @focus="showing = true"
    @blur="showing = false"
    tabindex="0"
  >
    <button aria-describedby="callout-bubbletext" aria-expanded="true" type="button">
      Hover over me
    </button>

  </w-box>
  <w-attention
    callout
    right
    :target-el="target?.$el"
    v-model="showing"
    @focus="showing = true"
    @blur="showing = false"
  >
    <p id="callout-bubbletext">Hello Warp!</p>
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
  <w-box
    neutral
    as="h4"
    ref="target"
    :aria-expanded="showing"
    aria-controls="pop-over-attention-example"
    aria-details="popover-bubbletext"
    @mouseenter="showing = true"
    @mouseleave="showing = false"
    @keydown.escape="showing = false"
    @focus="showing = true"
    @blur="showing = false"
    tabindex="0"
  >
  <button aria-describedby="popover-bubbletext" aria-expanded="true" type="button"
    Hover over me
  </button>

  </w-box>
  <w-attention
    popover
    right
    :target-el="target?.$el"
    v-model="showing"
    @focus="showing = true"
    @blur="showing = false"
  >
    <p id="popover-bubbletext">Hello Warp!</p>
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
  <button aria-describedby="tooltip-bubbletext" aria-expanded="true" type="button">
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
