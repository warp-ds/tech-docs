<script setup>
import { useSlots } from 'vue';
import Tabs from './Tabs.vue';

const slots = useSlots();
const tabs = Object.keys(slots);

const formatTabTitle = (tab) => {
  const capitalizedTab = tab.charAt(0).toUpperCase() + tab.slice(1);
  return capitalizedTab?.replaceAll('_', ' ');
};

</script>

<template>
  <Tabs :tabs="tabs" :initialTab="tabs[0]">
    <template v-for="tab in tabs" #[`tab-head-${tab}`]>{{ formatTabTitle(tab) }}</template>
    <template v-for="tab in tabs" #[`tab-panel-${tab}`]>
      <slot :name="tab" />
    </template>
  </Tabs>
</template>

