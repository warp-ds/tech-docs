<script setup>
import Tabs from './Tabs.vue';
const tabs = ['react', 'vue', 'elements'];

</script>

<template>
  <Tabs :tabs="tabs" :initialTab="tabs[0]">
    <template #tab-head-react>React</template>
    <template #tab-panel-react>
      <slot name="react" />
    </template>

    <template #tab-head-vue>Vue</template>
    <template #tab-panel-vue>
      <slot name="vue" />
    </template>

    <template #tab-head-elements>Elements</template>
    <template #tab-panel-elements>
      <slot name="elements" />
    </template>
  </Tabs>
</template>

