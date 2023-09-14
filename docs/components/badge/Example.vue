<script setup>
  import { wBox } from '@warp-ds/vue';
</script>

<template>
  <h4>Neutral</h4>
  <div class="component">
    <w-box neutral>
      <div class="badge">This is a badge</div>
      <p>This is the <strong>neutral</strong> variant of the box element</p>
    </w-box>
  </div>

  <h4>Info</h4>
  <div class="component">
    <w-box info>
      <p>This is the <strong>info</strong> variant of the box element</p>
    </w-box>
  </div>

  <h4>Bordered</h4>
  <div class="component">
    <w-box bordered>
      <p>This is the <strong>bordered</strong> variant of the box element</p>
    </w-box>
  </div>
</template>