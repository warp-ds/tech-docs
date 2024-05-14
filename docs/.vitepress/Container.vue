<script setup>
import { inject, ref, onMounted } from 'vue';

const widthController = inject('widthController', null);
const el = ref(null);

onMounted(() => widthController?.register(el.value));
</script>

<template>
  <section class="component" ref="el">
    <slot />
  </section>
</template>
