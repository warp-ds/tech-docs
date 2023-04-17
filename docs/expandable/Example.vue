<script setup>
  import { wExpandable } from '@warp-ds/vue';
</script>

<template>
   <w-expandable title="I am expandable">
    <p>Expandable contents go here.</p>
  </w-expandable>
  <w-expandable title="I am an expandable box" box>
    <p>Expandable contents go here.</p>
  </w-expandable>
  <w-expandable title="I am an expandable info box" info box>
    <p>Expandable contents go here.</p>
  </w-expandable>
</template>