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
  <w-box neutral as="h4" aria-details="callout-bubbletext" tabindex="0">
    I am a box full of info
  </w-box>
  <w-attention callout right v-model="showing">
    <p id="callout-bubbletext">Hello Warp! This thing is new!</p>
  </w-attention>
</template>
```

#### Popover

```vue
<script>
import { ref } from 'vue'
import { wAttention, wButton } from '#components'

const target = ref(null)
const showing = ref(false)
</script>
<template>
  <w-button
    utility
    :aria-expanded="showing"
    aria-controls="popover-example"
    type="button"
    :ref="target ? target.$el : null"
    @click="() => (showing = !showing)"
  >
    Open popover
  </w-button>
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
import { wAttention, wButton } from '#components'

const target = ref(null)
const showing = ref(false)
</script>
<template>
  <w-button
    utility
    :ref="target ? target.$el : null"
    aria-describedby="tooltip-bubbletext"
    aria-expanded="true"
    @mouseenter="showing = true; target = $refs.target"
    @mouseleave="showing = false"
    @keydown.escape="showing = false"
    @focus="showing = true"
    @blur="showing = false"
    tabindex="0"
    type="button"
  >
    Hover over me
  </w-button>
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

### Accessibility

The attention component handles accessibility automatically by wrapping its slotted content with a `div` that has a default `role` attribute (`role="tooltip"` for tooltip and `role="img"` otherwise), and a default localized `aria-label`.

It is possible to override the `role` and `aria-label` attributes:

```js
<w-attention tooltip bottom v-model='tooltipShowing' role='' ariaLabel=''>
  <p id='tooltip-bubbletext' role='tooltip'>
    I'm a tooltip speech bubble with overridden role and aria-label attributes
    pointing up.
  </p>
</w-attention>
```

### Props

<api-table type="vue" component="Attention" />
