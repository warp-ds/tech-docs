<script setup>
  import Drive from './repos/drive.md';
  import Css from './repos/css.md';
  import Vue from './repos/vue.md';
  import Elements from './repos/elements.md';
  import React from './repos/react.md';
</script>

<tabs-content> 
  <template #drive>
   <drive />
  </template>
  <template #css>
    <css />
  </template>
  <template #react>
    <react />
  </template>
  <template #vue>
    <vue />
  </template>
  <template #elements>
    <elements />
  </template>
</tabs-content>
