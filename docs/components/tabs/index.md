<script setup>
import Vue from './vue.md';
import React from './react.md';
import Usage from './usage.md';
</script>

# Tabs

<components-status react='released' vue='released' />

## Examples

<theme-switcher />

<tabs-example></tabs-example>

<tabs-content>
  <template #usage>
   <usage />
  </template>
  <template #react>
   <react />
  </template>
  <template #vue>
    <vue />
  </template>
  <template #elements>
  </template>
</tabs-content>
