<script setup>
import { wButton } from '@warp-ds/vue';
import { ref } from 'vue';

const toggleTheme = ref('finn-no');

const toggle = (theme) => {
  window.theme = theme;
  toggleTheme.value = theme;
};
</script>

<template>
<div class="ui buttons big">
  <button
    class="ui button toggle"
    @click="toggle('finn-no')"
  >Finn no</button>
  <button
    class="ui button toggle"
    @click="toggle('blocket-se')"
  >Blocket</button>
</div>  
<div class="space-x-8">
  <w-button primary>Click me</w-button>
  <w-button>Click me</w-button>
  <w-button quiet>Click me</w-button>
  <w-button quiet small>Click me</w-button>
  <w-button negative>Click me</w-button>
  <w-button primary loading>Click me</w-button>
</div>
</template>
