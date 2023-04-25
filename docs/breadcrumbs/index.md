<script setup>
  import Usage from './usage.md';
  import Vue from './vue.md';
  import Elements from './elements.md';
  import React from './react.md';
</script>

# Breadcrumbs

Breadcrumbs show the navigation structure for the current location.

## Example

<theme-switcher />

<breadcrumbs-example />

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
    <elements />
  </template>
</tabs-content>
