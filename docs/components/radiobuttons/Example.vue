<script setup>
  import { wToggle, wButton } from '@warp-ds/vue';
  import { ref } from 'vue';

  const isJustified = ref(false);
  const multiToggleModel = ref('');

  const toggles = [
    { label: 'One', value: 1, 'data-test': 'toggle:1' },
    { label: 'Two', value: 2, 'data-test': 'toggle:2' },
  ]

</script>

<template>
  <h3>Default</h3>
  <div class="component">
    <w-toggle radio-button :equal-width="isJustified" v-model="multiToggleModel" label="A very toggly label" :toggles="toggles" />
    <w-button class="mt-16" small utility @click="isJustified = !isJustified">{{ isJustified ? 'Unjustify' : 'Justify' }}</w-button>
  </div>
</template>
