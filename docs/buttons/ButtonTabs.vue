<script setup>
import Tabs from '../.vitepress/Tabs.vue';
import Usage from './usage.md'
import Elements from './elements.md';
import React from './react.md';
import Vue from './vue.md';

const tabs = ['usage','elements','react', 'vue'];
</script>

<template>
  <Tabs :tabs="tabs" :initialTab="tabs[0]">
    <template #tab-head-usage>Usage</template>
    <template #tab-panel-usage>
      <usage />
    </template>
    <template #tab-head-elements>Elements</template>
    <template #tab-panel-elements>
      <elements />
    </template>

    <template #tab-head-react>React</template>
    <template #tab-panel-react>
      <react />
    </template>

    <template #tab-head-vue>Vue</template>
    <template #tab-panel-vue>
      <vue />
    </template>
  </Tabs>
</template>

