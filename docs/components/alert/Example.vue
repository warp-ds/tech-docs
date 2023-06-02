<script setup>
  import { wAlert } from '@warp-ds/vue';
  import { ref } from 'vue';

  const showAlert = ref(true);
</script>

<template>
  <h3>Info</h3>
  <div class="component">
    <w-alert v-model="showAlert" info title="This is the info variant of the alert element">
      <p>I am an excellent message for the user.</p>
    </w-alert>
  </div>
  <h3>Positive</h3>
  <div class="component">
    <w-alert v-model="showAlert" positive title="This is the positive variant of the alert element">
      <p>With an additional description</p>
    </w-alert>
  </div>
  <h3>Negative</h3>
  <div class="component">
    <w-alert v-model="showAlert" negative title="This is the negative variant of the alert element">
      <p>With an additional description</p>
    </w-alert>
  </div>
  <h3>Warning</h3>
  <div class="component">
    <w-alert v-model="showAlert" warning title="This is the warning variant of the alert element">
      <p>With an additional description</p>
    </w-alert>
  </div>
</template>