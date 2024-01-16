<script setup>
import { useSlots } from 'vue';
import Tabs from './Tabs.vue';

const slots = useSlots();
const tabs = Object.keys(slots);

const formatTabTitle = (tab) => {
  if (tab == 'iOS') {
    return tab;
  } else {
    const capitalizedTab = tab.charAt(0).toUpperCase() + tab.slice(1);
    return capitalizedTab?.replaceAll('_', ' ');
  }
};

const isDisabled = (tab) => {
  const slotContent = slots[tab]?.();
  return !slotContent | slotContent.length === 0;
}

const getInitialTab = () => {
  for (let i = 0; i < tabs.length; i++) {
    if (!isDisabled(tabs[i])) return tabs[i];
  }
  return tabs[0];
}
</script>

<template>
  <Tabs :tabs="tabs" :initialTab="getInitialTab()" :isDisabled="isDisabled">
    <template v-for="tab in tabs" #[`tab-head-${tab}`]>{{ formatTabTitle(tab) }}</template>
    <template v-for="tab in tabs" #[`tab-panel-${tab}`]>
      <slot :name="tab" />
    </template>
  </Tabs>
</template>

