<script setup>
    import { wAlert } from '@warp-ds/vue';
    
    const showAlert = true;
</script>

<template>
  <div>
    <p>Hej hej</p>
    <w-alert  v-model="showAlert" info="true" show="true" title="I am a title">
      <p>I am an excellent message for the user.</p>
    </w-alert>
  </div>
</template>
