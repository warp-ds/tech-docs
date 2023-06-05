## Import

> Use in entire app
```js
import { Tabs } from '@warp-ds/vue';
app.use(Tabs);
```

> Use in one component and special imports

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
    <w-tab label="Tab 1" name="one" />
    <w-tab label="Tab 2" name="two" />
    <w-tab label="Tab 3" name="three" />
  </w-tabs>
  <div>
    <w-tab-panel name="one" v-if="model === 'one'">
      <p>First tab content</p>
    </w-tab-panel>
    <w-tab-panel name="two" v-if="model === 'two'">
      <p>Second tab content</p>
      </w-tab-panel>
    <w-tab-panel name="three" v-if="model === 'three'">
      <p>Third tab content</p>
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

const model = ref("first");
</script>

<template>
  <token :state="[model]">
    <w-tabs v-model="model">
      <w-tab label="Tab 1" name="one">
        <iconSvg />
      </w-tab>
      <w-tab label="Tab 2" name="two">
        <iconSvg />
      </w-tab>
      <w-tab label="Tab 3" name="three">
        <iconSvg />
      </w-tab>
    </w-tabs>
    <div>
      <w-tab-panel name="one" v-if="model === 'one'">
        <p class="mb-0">First tab content</p>
        </w-tab-panel>
      <w-tab-panel name="two" v-if="model === 'two'">
        <p class="mb-0">Second tab content</p></w-tab-panel>
      <w-tab-panel name="three" v-if="model === 'three'">
        <p class="mb-0">Third tab content</p>
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
