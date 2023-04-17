<script setup>
  import Vue from './vue.md';
  import Elements from './elements.md';
  import React from './react.md';
</script>

# Button

Buttons are used to perform actions, with different visuals for different needs.

### Example
<theme-switcher />

<button-example />

<tabs-content> 
  <template v-slot:react>
   <react />
  </template>
  <template v-slot:vue>
    <vue />
  </template>
  <template v-slot:elements>
    <elements />
  </template>
</tabs-content>