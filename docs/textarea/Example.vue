<script setup>
  import { wTextarea } from '@warp-ds/vue';
</script>

<template>
  <w-textarea label="A label" hint="A hint" v-model="model" />
  <h3>Standard with hint</h3>
  <div class="component">
    <w-textarea label="A label" hint="A hint" />
  </div>
  <h3>Optional</h3>
  <div class="component">
    <w-textarea label="A label" optional />
  </div>
  <h3>Disabled</h3>
  <div class="component">
    <w-textarea label="A label" disabled />
  </div>
  <h3>Read Only</h3>
  <div class="component">
    <w-textarea label="A label" value="This is a readOnly textarea" readOnly />
  </div>
  <h3>Invalid</h3>
  <div class="component">
    <w-textarea label="A label" invalid required />
  </div>
</template>