<template>
  <div>
    <Tabs :tabs="tabs" :initialTab="initialTab">
      <template v-slot:tab-head-react>
        React
      </template>
      <template v-slot:tab-panel-react>
      <react />
      </template>
      <template v-slot:tab-head-vue>
        Vue
      </template>
      <template v-slot:tab-panel-vue>
        <vue />
      </template>
      <template v-slot:tab-head-elements>
        Elements
      </template>
      <template v-slot:tab-panel-elements>
        <elements />
      </template>
    </Tabs>
  </div>
</template>


<script setup>

import Tabs from '../.vitepress/Tabs.vue';
import Vue from './vue.md';
import Elements from './elements.md';
import React from './react.md';

const initialTab = 'react';
const tabs = ['react', 'vue', 'elements'];
</script>

