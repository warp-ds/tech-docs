## Import

### Use in entire app

```js
import { Slider } from '@warp-ds/vue';
app.use(Slider);
```

### Use in one component and special imports

```js
import { wSlider } from '@warp-ds/vue';
```

## Visual options

### Examples

#### Enabled
```js
<script setup>
  import { ref } from 'vue';
  import { wSlider } from '@warp-ds/vue';

  const currentValue = ref(5_000_000);
</script>

<template>
  <div :state="currentValue">
    <w-slider
      v-model="currentValue"
      :min="1000"
      :max="10_000_000"
      :step="1000"
      label="slider"
    />
  </div>
</template>
```

#### Disabled
```js
<w-slider
  disabled
  v-model="50"
  label="Disabled slider"
/>
```

## Props

<api-table type="vue" component="Slider" />
