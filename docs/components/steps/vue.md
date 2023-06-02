## Import

> Use in entire app

```js
import { Steps } from '@warp-ds/vue';
app.use(Steps);
```

> Use in one component and special imports

```js
import { wSteps, wStep } from '@warp-ds/vue';
```

## Syntax

```js
<w-steps>
  <w-step complete>
    <h3>Step 1</h3>
  </w-step>
  <w-step active>
    <h3>Step 2</h3>
  </w-step>
  <w-step>
    <h3>Step 3</h3>
  </w-step>
</w-steps>
```

### Interactive usage

```js
<script setup>
import { ref } from 'vue';
import { wButton, wSteps, wStep } from '@warp-ds/vue';

const currentStep = ref(1);

const handleClick = () => {
  if (currentStep.value < 4) currentStep.value += 1;
  else currentStep.value = 1;
};
</script>

<template>
  <w-steps>
    <w-step :active="currentStep === 1" :complete="currentStep > 1">
      <p class="font-bold">Step 1</p>
      <p>Describing text</p>
    </w-step>
    <w-step :active="currentStep === 2" :complete="currentStep > 2">
      <p class="font-bold">Step 2</p>
      <p>Describing text</p>
    </w-step>
    <w-step :active="currentStep === 3" :complete="currentStep > 3">
      <p class="font-bold">Step 3</p>
      <p>Describing text</p>
    </w-step>
  </w-steps>
  <w-button primary v-on:click="handleClick">Next step</w-button>
</template>
```

## Props

### Steps

<api-table type="vue" component="Steps" />

### Step

<api-table type="vue" component="Step" />
