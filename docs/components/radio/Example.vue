<script setup>
  import { wToggle } from '@warp-ds/vue';
  import { ref } from 'vue';

  const toggleModel = ref('')
  const invalidToggleModel = ref('1')
  const disabledToggleModel = ref('2')

  const toggles = [
    { label: 'One', value: 1, 'data-test': 'toggle:1' },
    { label: 'Two', value: 2, 'data-test': 'toggle:2' },
  ]

</script>

<template>
  <h3>Default</h3>
  <div class="component">
    <w-toggle radio v-model="toggleModel" label="A very toggly label" :toggles="toggles" />
  </div>
  <h3>Disabled</h3>
  <div class="component">
    <w-toggle radio disabled v-model="disabledToggleModel" label="A very DISABLED non-toggly label" :toggles="toggles" />
  </div>  
  <h3>Invalid</h3>
  <div class="component">
    <w-toggle radio invalid v-model="invalidToggleModel" label="A very INVALID toggly label" :toggles="toggles" />
  </div>
</template>
