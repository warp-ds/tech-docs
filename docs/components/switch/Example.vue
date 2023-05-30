<script setup>
  import { wSwitch, wField } from '@warp-ds/vue';
  import { ref } from "vue";

  const toggle = ref(false);
</script>

<template>
  <w-field label="Switch it" #default="{ labelFor }">
    <w-switch v-model="toggle" :id="labelFor" />
  </w-field>
</template>