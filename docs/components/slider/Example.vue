<script setup>
import { ref } from 'vue';
import { wSlider } from '@warp-ds/vue';

const maximum = 10_000_000;
const minimum = 1000;

const currentValueEnabled = ref(5_000_000);
const currentValueDisabled = ref(1_000_000);
</script>

<template>
  <h3 class="font-bold">Enabled</h3>
  <div class="component" :state="currentValueEnabled">
    <p>{{ currentValueEnabled }}</p>
    <w-slider
      v-model="currentValueEnabled"
      :min="minimum"
      :max="maximum"
      :step="1000"
      label="a large number slider"
    />
  </div>
  <h3 class="font-bold">Disabled</h3>
  <div class="component" :state="currentValueDisabled">
    <p>{{ currentValueDisabled }}</p>
    <w-slider
      disabled
      v-model="currentValueDisabled"
      :min="minimum"
      :max="maximum"
      :step="1000"
      label="a large number slider"
    />
  </div>
</template>
