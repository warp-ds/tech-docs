<script setup>
import Tabs from '../.vitepress/Tabs.vue';
import Vue from './vue.md';
import Elements from './elements.md';
import React from './react.md';

const tabs = ['react', 'vue', 'elements'];
</script>

<template>
  <Tabs :tabs="tabs" :initialTab="tabs[0]">
    <template #tab-head-react>React</template>
    <template #tab-panel-react>
      <react />
    </template>

    <template #tab-head-vue>Vue</template>
    <template #tab-panel-vue>
      <vue />
    </template>

    <template #tab-head-elements>Elements</template>
    <template #tab-panel-elements>
      <elements />
    </template>
  </Tabs>
</template>