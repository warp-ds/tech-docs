<script setup>
  import Usage from './usage.md';
  import Vue from './vue.md';
  import React from './react.md';
</script>

# Radio

Radio buttons allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare.

## Example

<theme-switcher />

<select-example />

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