<script setup>
import { inject, ref, onMounted } from 'vue';

const widthController = inject('widthController', null);
const el = ref(null);

onMounted(() => widthController?.register(el.value));
</script>

<style scoped>
.wd-container {
  --w-bg-opacity: 1;
  margin-right: 0;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 32px 16px;
  background-color: rgba(243, 244, 246, var(--w-bg-opacity));
}
.dark .wd-container {
  background-color: rgba(31, 41, 55, var(--w-bg-opacity));
}
</style>

<template>
  <section class="wd-container" ref="el">
    <slot />
  </section>
</template>
