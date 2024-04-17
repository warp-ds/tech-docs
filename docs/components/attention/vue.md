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
  <w-attention callout placement="right" v-model="showing">
    <p id="callout-bubbletext">Hello Warp! This thing is new!</p>
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
    :aria-expanded="showing"
    @mouseenter="
      showing = true
      target = $refs.target
    "
    @mouseleave="showing = false"
    @keydown.escape="showing = false"
    @focus="showing = true"
    @blur="showing = false"
  >
    Hover over me
  </w-button>
  <w-attention
    tooltip
    placement="right"
    flip
    :target-el="target?.$el"
    v-model="showing"
  >
    <p id="tooltip-bubbletext">Hello Warp!</p>
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
    placement="right"
    flip
    :fallback-placements="['left', 'bottom', 'top']"
    :target-el="target ? target.$el : null"
    v-model="showing"
    id="popover-example"
  >
    <p id="popover-bubbletext">Hello Warp!</p>
  </w-attention>
</template>
```

#### Popover with icon as target element

```vue
<script>
import { ref } from 'vue'
import { wAttention, wButton } from '#components'
import IconInfo16 from '@warp-ds/icons/vue/info-16'

const target = ref(null)
const showing = ref(false)
</script>
<template>
 <w-button
  :aria-expanded="popoverIconTargetShowing"
  aria-controls="popover-icon-target-example"
  type="button"
  utility
  quiet
  ref="popoverIconTarget"
  @click="() => (popoverIconTargetShowing = !popoverIconTargetShowing)"
  >
    <icon-info16 />
  </w-button>
  <w-attention
    popover
    placement="right-end"
    :distance="-8"
    :skidding="27"
    :target-el="popoverIconTarget ? popoverIconTarget.$el : null"
    v-model="popoverIconTargetShowing"
  >
    <p>Hello Warp!</p>
  </w-attention>
</template>
```

#### Highlight (with optional close button)

```vue
<script setup>
import { ref } from 'vue'
import { wAttention, wButton } from '#components'

const highlightTarget = ref(null)
const highlightShowing = ref(false)
</script>
<template>
  <w-button
    :aria-expanded="highlightShowing"
    aria-controls="highlight-attention-example"
    aria-details="highlighted-bubbletext"
    ref="highlightTarget"
    @click="highlightShowing = !highlightShowing"
    >Click me</w-button
  >
  <w-attention
    id="highlight-attention-example"
    highlight
    placement="bottom"
    flip
    :fallback-placements="['top']"
    can-close
    @dismiss="highlightShowing = false"
    :target-el="highlightTarget ? highlightTarget.$el : null"
    v-model="highlightShowing"
  >
    <p id="highlighted-bubbletext">I'm a dismissible highlight</p>
  </w-attention>
</template>
```
### Flip prop
The attention component uses the Floating-ui library to calculate its position. By default the `flip` prop is set to `false`, which means that the attention component will not flip its position to the opposite side. When `flip`is set to `false`, it will not recalculate the attention component's position on scroll or resize, meaning that the attention component's position will remain the same. When `flip` is set to `true`, it will instead trigger Floating-ui's flip() function that will make sure that the attention component stays in view by flipping it to the opposite side when there is no space left, meaning that the attention component's position will change. For example, if `placement` prop is set to `right`, then the attention component will prefer to stay on the `right` side, unless there is no longer any space left on the `right` side, which it will then instead try to position it to the `left` side. <a target="_blank" href="https://floating-ui.com/docs/flip#fallbackplacements">Read more about Floating-ui's flip() function here</a>.

### Fallback-placements prop
By defaut, `fallback-placements` is `undefined`. If `flip`is set to `true`, then you have the option to also use `fallback-placements` prop and pass in an array of preferred placements that you want the attention component to try if there is no longer any space left to position it to the initial `placement`. For example, if `placement` is set to `top-start` and `fallback-placements` is set to `['top, left', 'right']`, then it will first try to position the attention component to be on the top-left side of the target-element. If there is no space for the inital `placement`, then it will first try to position the attention component to be top-centered, and then it will instead try to position it to be on the left side, and then on the right-side of the target-element. <a target="_blank" href="https://floating-ui.com/docs/flip#fallbackplacements">Read more about Floating-ui's fallbackPlacements here</a>.

### Accessibility

The attention component handles accessibility automatically by wrapping its slotted content with a `div` that has a default `role` attribute (`role="tooltip"` for tooltip and `role="img"` otherwise), and a default localized `aria-label`.

It is possible to override the `role` and `aria-label` attributes:

```js
<w-attention
  tooltip
  placement='bottom'
  v-model='tooltipShowing'
  role=''
  aria-label=''
>
  <p id='tooltip-bubbletext' role='tooltip'>
    I'm a tooltip speech bubble with overridden role and aria-label attributes
    pointing up.
  </p>
</w-attention>
```

If the user chooses to override the `role` and `aria-label` attributes then it is important to also add `aria-details` on the target element. <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details">Read more about `aria-detail` here</a>

### Props

<api-table type="vue" component="Attention" />
