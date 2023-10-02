### Import

> Use in entire app

```js
import { Tabs } from '@warp-ds/vue';
app.use(Tabs);
```

> Use in one component and special imports

```js
import { wTabs } from '@warp-ds/vue';
```

### Syntax

The following examples demonstrates how the `Tab`, `Tabs`, and `TabPanel` components can be used to switch between panels.

#### Default

```vue
<w-tabs>
  <w-tab label="Tab 1" name="one" isActive />
  <w-tab label="Tab 2" name="two" />
  <w-tab label="Tab 3" name="three" />
</w-tabs>
```
#### Tabs with panel content

```vue
<w-tabs v-model="selectedTab">
  <w-tab label="Tab 1" name="one" />
  <w-tab label="Tab 2" name="two" />
  <w-tab label="Tab 3" name="three" />
</w-tabs>
<div>
  <w-tab-panel name="one" v-if="selectedTab === 'one'">
    First tab content
  </w-tab-panel>
  <w-tab-panel name="two" v-if="selectedTab === 'two'">
    Second tab content
  </w-tab-panel>
  <w-tab-panel name="three" v-if="selectedTab === 'three'">
    Third tab content
  </w-tab-panel>
</div>
```
#### Tabs with icons and panel content

```vue
<script setup>
import { wTabs, wTab, wTabPanel } from '@warp-ds/vue';
import { ref } from 'vue';
import { iconSvg } from '/icons';

const selectedTab = ref("first");
</script>

<template>
  <w-tabs v-model="selectedTab">
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
    <w-tab-panel name="one" v-if="selectedTab === 'one'">
      First tab content
    </w-tab-panel>
    <w-tab-panel name="two" v-if="selectedTab === 'two'">
      Second tab content
    </w-tab-panel>
    <w-tab-panel name="three" v-if="selectedTab === 'three'">
      Third tab content
    </w-tab-panel>
  </div>
</template>
```

### Props

#### Tabs
<api-table type="vue" component="Tabs" />

#### Tab
<api-table type="vue" component="Tab" />

#### TabPanel
<api-table type="vue" component="TabPanel" />
