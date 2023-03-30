<script setup>
import { computed } from 'vue'

const props = defineProps({ title: String, linkName: String })
const linkSuffix = computed(() => (props.linkName || props.title).toLowerCase())
</script>

<template>
  <div class="comp-title">
    <h1>{{ title }}</h1>
    <a class="design" :href="`https://www.fabric-ds.io/${linkSuffix}`" :aria-label="`Link to design documentation for ${title}`">
      <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 2917 2917">
        <title>A pen drawing a curve</title>
        <path d="M1276 1622.4a182.4 182.4 0 1 0 364.8 0 182.4 182.4 0 0 0-364.8 0Zm291.7 0a109.4 109.4 0 1 1-218.8 0 109.4 109.4 0 0 1 218.8 0Zm-109.4 218.7a36.5 36.5 0 0 0-36.4 36.5v36.5a36.5 36.5 0 0 0 72.9 0v-36.5a36.5 36.5 0 0 0-36.5-36.5Z"/>
        <path d="M1491.5 659.5a36.5 36.5 0 0 0-66.4 0L914.7 1789.7a36.5 36.5 0 0 0 3.2 35.7l288.5 416.8h-39.7a36.5 36.5 0 0 0-36.5 36.4V2388h-73a36.5 36.5 0 0 0-36.4 36.5v145.8a36.5 36.5 0 0 0 36.5 36.5h802a36.5 36.5 0 0 0 36.5-36.5v-145.8a36.5 36.5 0 0 0-36.4-36.5h-73v-109.4a36.5 36.5 0 0 0-36.4-36.4h-7.7l257.5-418.4c6.3-10.3 7.1-23 2.2-34L1491.5 659.4ZM1823 2533.9h-729.2v-73H1823v73ZM1203.1 2388v-72.9h510.4v73h-510.4Zm453.6-145.8h-162v-218.8a36.5 36.5 0 0 0-72.8 0v218.8H1295L989.6 1801l468.7-1038 469.2 1039.2-270.8 440Z"/>
        <path d="M2552 1403.7h-37.3c-18.9-534.9-449.2-998-947-1019.8v-37.5a36.5 36.5 0 0 0-36.4-36.5h-145.9a36.5 36.5 0 0 0-36.4 36.5v37.5c-497.8 21.7-928.2 484.9-947 1019.8h-37.4A36.5 36.5 0 0 0 328 1440v146a36.5 36.5 0 0 0 36.5 36.4h145.8A36.5 36.5 0 0 0 547 1586v-146a36.5 36.5 0 0 0-36.5-36.4H475c18.6-495.9 415.1-925.1 874-946.9v35.4a36.5 36.5 0 0 0 36.5 36.5h145.9a36.5 36.5 0 0 0 36.4-36.5v-35.4c459 21.8 855.4 451 874 946.9h-35.5a36.5 36.5 0 0 0-36.4 36.4v146a36.5 36.5 0 0 0 36.4 36.4h145.9a36.5 36.5 0 0 0 36.4-36.4v-146a36.5 36.5 0 0 0-36.4-36.4ZM474 1549.5h-73v-73h73v73ZM1494.8 455.8h-73v-73h73v73Zm1020.8 1093.7h-72.9v-73h73v73Z"/>
      </svg>
    </a>
    <a :href="`https://vue.fabric-ds.io/${linkSuffix}`" class="vue-icon">
      <svg class="logo" viewBox="0 0 128 128" width="36" height="36"><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"></path><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"></path></svg>
    </a>
  </div>
</template>

<style scoped>
.comp-title {
  display: grid;
  grid-template-columns: 1fr 40px 40px;
  gap: 8px;
  align-items: center;
}
.design svg {
  fill: var(--vp-c-text-1);
}
.design:hover svg {
  fill: var(--vp-c-brand-dark);
}
.vue-icon {
  filter: grayscale(1);
}
.vue-icon:hover {
  filter: grayscale(0);
}
</style>
