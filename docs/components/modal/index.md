<script setup>
  import Vue from './vue.md';
  import React from './react.md';
  import Elements from './elements.md';
</script>

# Modal

Modals (or dialogs) display important information that users need to acknowledge. They are overlays that prevent users from interacting with the rest of the application until a specific action is taken. They can be disruptive because they require merchants to take an action before they can continue interacting with the rest of the site. It should be used thoughtfully and sparingly.


## Example

<theme-switcher />

<modal-example />

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