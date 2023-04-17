<script setup>
import { useSlots } from 'vue';
import Tabs from './Tabs.vue';

const tabs = ['usage', 'react', 'vue', 'elements'];
const slots = useSlots();

</script>

<template>
  <Tabs :tabs="tabs" :initialTab="tabs[0]">
      <template v-if="slots.usage" #tab-head-usage>Usage</template>
      <template v-if="slots.usage" #tab-panel-usage>
        <slot name="usage" />
      </template>
      <template v-if="slots.react" #tab-head-react>React</template>
      <template v-if="slots.react" #tab-panel-react>
        <slot name="react" />
      </template>
      <template v-if="slots.vue" #tab-head-vue>Vue</template>
      <template v-if="slots.vue" #tab-panel-vue>
        <slot name="vue" />
      </template>
      <template v-if="slots.elements" #tab-head-elements>Elements</template>
      <template v-if="slots.elements" #tab-panel-elements>
        <slot name="elements" />
      </template>
  </Tabs>
</template>

