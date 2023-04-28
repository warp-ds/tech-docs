<script setup>
import { wSteps } from '@warp-ds/vue';
</script>

<template>
  <w-steps>
    <w-step complete>
      <h3>Step 1</h3>
    </w-step>
    <w-step active>
      <h3>Step 2</h3>
    </w-step>
    <w-step>
      <h3>Step 3</h3>
    </w-step>
  </w-steps>
</template>
