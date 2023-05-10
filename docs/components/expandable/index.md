<script setup>
  import Vue from './vue.md';
  import Elements from './elements.md';
  import React from './react.md';
</script>

# Expandable

Expandable is a layout component used for creating expandable content areas on a page.

## Examples

<theme-switcher />

<expandable-example></expandable-example>

<tabs-content>
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
