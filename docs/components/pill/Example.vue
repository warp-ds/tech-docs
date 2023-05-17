<script setup>
  import { wPill } from '@warp-ds/vue';
</script>

<template>
  <div class="flex space-x-8">
    <w-pill label="Standard pill" />
    <w-pill suggestion label="Suggestion pill" />
    <w-pill can-close label="Closable pill" />
  </div>
</template>