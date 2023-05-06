<script setup>
  import { wPill } from '@warp-ds/vue';
</script>

<template>
  <h3>Standard</h3>
  <w-pill label="Standard pill" />

  <h3>Suggestion</h3>
  <w-pill suggestion label="Suggestion pill" />

  <h3>Closable</h3>
  <w-pill can-close label="Closable pill" />
</template>