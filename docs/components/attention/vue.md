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

const showing = ref(false)
</script>
<template>
  <w-box neutral as="h4" aria-details="callout-bubbletext">
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
    aria-details="popover-bubbletext"
    ref="target"
    @click="() => (showing = !showing)"
  >
    Open popover
  </w-button>
  <w-attention
    popover
    bottom
    :target-el="target ? target.$el : null"
    v-model="showing"
    id="popover-example"
  >
    <p id="popover-bubbletext">Hello Warp!</p>
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
    ref="target"
    aria-describedby="tooltip-bubbletext"
    @aria-expanded="showing"
    @mouseenter="showing = true; target = $refs.target"
    @mouseleave="showing = false"
    @keydown.escape="showing = false"
    @focus="showing = true"
    @blur="showing = false"
  >
    Hover over me
  </w-button>
  <w-attention
    tooltip
    bottom
    :target-el="target?.$el"
    v-model="showing"
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

If the user chooses to override the `role` and `aria-label` attributes then it is important to also add `aria-details` on the target element. <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details">Read more about `aria-detail` here</a>

### Props

<api-table type="vue" component="Attention" />
