<script setup>
import { wToggle, wButton } from '@warp-ds/vue';
import { ref } from 'vue';

const isJustified = ref(false);
const multiToggleModelSmall = ref('');
const multiToggleModel = ref('');

const toggles = [
  { label: 'One', value: 1, 'data-test': 'toggle:1' },
  { label: 'Two', value: 2, 'data-test': 'toggle:2' },
]
</script>

<template>
  <div class="component">
    <h3 class="h4">Default</h3>
    <w-toggle id="radio-button-group" radio-button :equal-width="isJustified" v-model="multiToggleModel" label="Radio-button Toggle" :toggles="toggles" class="mb-32" />

    <h3 class="h4">Small</h3>
    <w-toggle id="radio-button-group" small radio-button :equal-width="isJustified" v-model="multiToggleModelSmall" label="Radio-button Toggle small" :toggles="toggles" class="mb-32" />

    <demo-controls>
      <w-button aria-controls="radio-button-group" small utility @click="isJustified = !isJustified">{{ isJustified ? 'Unjustify radio button group' : 'Justify radio button group' }}</w-button>
    </demo-controls>
  </div>
</template>
