<script setup>
    import { wAlert } from '@warp-ds/vue';
    
    const showAlert = true;
</script>

<template>
  <h3>Info</h3>
  <w-alert v-model="showAlert" info title="This is the info variant of the alert element">
    <p>I am an excellent message for the user.</p>
  </w-alert>
  <h3>Positive</h3>
  <w-alert  v-model="showAlert" positive info title="This is the positive variant of the alert element">
    <p>With an additional description</p>
  </w-alert>
  <h3>Negative</h3>
  <w-alert  v-model="showAlert" negative title="This is the negative variant of the alert element">
    <p>With an additional description</p>
  </w-alert>
  <h3>Warning</h3>
  <w-alert  v-model="showAlert" warning title="This is the warning variant of the alert element">
    <p>With an additional description</p>
  </w-alert>
</template>
