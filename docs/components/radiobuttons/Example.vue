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
  <div class="component">
    <h3 class="h4">Default</h3>
    <w-toggle radio-button :equal-width="isJustified" v-model="multiToggleModel" label="A very toggly label" :toggles="toggles" class="mb-32" />

    <demo-controls>
      <w-button small utility @click="isJustified = !isJustified">{{ isJustified ? 'Unjustify' : 'Justify' }}</w-button>
    </demo-controls>
  </div>
</template>
