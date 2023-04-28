## Import

### Use in entire app

```js
import { Steps } from '@warp-ds/vue';
app.use(Steps);
```

### Use in one component and special imports

```js
import { wSteps, wStep } from '@warp-ds/vue';
```

## Usage

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

## Props

### Steps

<api-table type="vue" component="Steps" />

### Step

<api-table type="vue" component="Step" />
