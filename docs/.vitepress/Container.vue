<script setup>
import { inject, ref, onMounted } from 'vue'

const widthController = inject('widthController', null)
const el = ref(null)
const registerSelf = () => widthController?.register(el.value)
onMounted(registerSelf)
</script>

<style>
.wd-container{
  margin-right: 0px;
  border-color: var(--vp-c-border);
  --w-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--w-bg-opacity));
  border-width: 1px;
  border-style: solid;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 8px;
}
.dark .wd-container {
    --w-bg-opacity: 1;
    background-color: rgba(31, 41, 55, var(--w-bg-opacity));
}
</style>

<template>
  <section class="wd-container" ref="el">
    <slot />
  </section>
</template>
