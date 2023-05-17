## Import

### Use in entire app
```js
import { Tabs } from '@warp-ds/vue';
app.use(Tabs);
```

### Use in one component and special imports

```js
import { wTabs } from '@warp-ds/vue';
```

## Visual options

### Examples
The following examples demonstrates how the `Tab`, `Tabs`, and `TabPanel` components can be used to switch between panels.

#### Default

```js
<w-tabs>
  <w-tab label="Tab 1" name="one" isActive />
  <w-tab label="Tab 2" name="two" />
  <w-tab label="Tab 3" name="three" />
</w-tabs>
```
#### Tabs with panel content

```js
<token :state="[model]">
  <w-tabs v-model="model">
    <w-tab label="Home" name="home" />
    <w-tab label="Car" name="car" />
    <w-tab label="Motorcycle" name="motorcycle" />
  </w-tabs>
  <div>
    <w-tab-panel name="home" v-if="model === 'home'">
      <h3>Welcome home!</h3>
    </w-tab-panel>
    <w-tab-panel name="car" v-if="model === 'car'">
      <h3>I am a car page</h3>
      </w-tab-panel>
    <w-tab-panel name="motorcycle" v-if="model === 'motorcycle'">
      <h3>Something something two wheels</h3>
    </w-tab-panel>
  </div>
</token>
```
#### Tabs with icons and panel content

```js
<script setup>
import { wTabs, wTab, wTabPanel } from '@warp-ds/vue';
import { ref } from 'vue';
import { iconSvg } from '/icons';

const model = ref("home");
</script>

<template>
  <token :state="[model]">
    <w-tabs v-model="model">
      <w-tab label="Home" name="home">
        <iconSvg />
      </w-tab>
      <w-tab label="Car" name="car">
        <iconSvg />
      </w-tab>
      <w-tab label="Motorcycle" name="motorcycle">
        <iconSvg />
      </w-tab>
    </w-tabs>
    <div>
      <w-tab-panel name="home" v-if="model === 'home'">
        <h3 class="mb-0">Welcome home!</h3>
        </w-tab-panel>
      <w-tab-panel name="car" v-if="model === 'car'">
        <h3 class="mb-0">I am a car page</h3></w-tab-panel>
      <w-tab-panel name="motorcycle" v-if="model === 'motorcycle'">
        <h3 class="mb-0">Something something two wheels</h3>
        </w-tab-panel>
    </div>
  </token>
</template>
```


## Props

### Tabs
<api-table type="vue" component="Tabs" />

### Tab
<api-table type="vue" component="Tab" />
