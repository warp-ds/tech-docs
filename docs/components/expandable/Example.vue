<script setup>
import { wExpandable } from '@warp-ds/vue';
</script>

<template>
  <div class="component">
    <h3>Default</h3>
    <w-expandable title="I am expandable">
      <p>Expandable contents go here.</p>
    </w-expandable>
  </div>
  <div class="component">
    <h3>Expandable box</h3>
    <w-expandable title="I am an expandable box" box>
      <p>Expandable contents go here.</p>
    </w-expandable>
  </div>
  <div class="component">
    <h3>Expandable animated box</h3>
    <w-expandable title="I am an expandable info box" animated box>
      <p>Expandable contents go here.</p>
    </w-expandable>
  </div>
</template>
