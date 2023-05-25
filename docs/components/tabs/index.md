<script setup>
import Vue from './vue.md';
import React from './react.md';
import Usage from './usage.md';
</script>

# Tabs

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
</tabs-content>