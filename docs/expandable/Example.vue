<script setup>
import { wExpandable } from "@warp-ds/vue";
</script>

<template>
  <h3 classname="m-12">Default</h3>
  <w-expandable title="I am expandable">
    <p>Expandable contents go here.</p>
  </w-expandable>
  <h3>Expandable box</h3>
  <w-expandable title="I am an expandable box" box>
    <p>Expandable contents go here.</p>
  </w-expandable>
  <h3>Expandable animated box</h3>
  <w-expandable title="I am an expandable info box" animated box>
    <p>Expandable contents go here.</p>
  </w-expandable>
</template>
