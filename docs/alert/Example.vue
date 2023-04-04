<script setup>
    import { wAlert } from '@warp-ds/vue';
    console.log("Alert", wAlert);
</script>

<template>
  <div>
    <p>Hej hej</p>
    <w-alert info show title="I am a title">
      <p>I am an excellent message for the user.</p>
    </w-alert>
  </div>
</template>
