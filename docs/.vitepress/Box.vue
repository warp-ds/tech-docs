<script setup>
import { computed } from 'vue'

const props = defineProps({
  dotted: Boolean,
  striped: Boolean,
  size: {
    default: 16,
    type: Number
  },
  fgColor: {
    default: '#3b82f680',
    type: String
  },
  bgColor: {
    default: '#60a5fa1a',
    type: String
  }
})

const dotSize = computed(() => props.size + 'px')
</script>

<template>
  <div class="box pd-font-mono" :class="{ dotted, striped }"><slot /></div>
</template>

<style scoped>
.box {
  --tw-purple-fg: #a855f780;
  --tw-purple-bg: #c084fc1a;
  --tw-violet-fg: #8b5cf680;  
  --tw-violet-bg: #a78bfa1a;
  --tw-pink-fg: #ec489980;
  --tw-pink-bg: #f472b61a;
  --tw-indigo-fg: #6366f180;
  --tw-indigo-bg: #818cf81a;
  --tw-blue-fg: #3b82f680;
  --tw-blue-bg: #60a5fa1a;
  --tw-cyan-fg: #06b6d480;
  --tw-cyan-bg: #22d3ee1a;
  --tw-fuchsia-fg: #d946ef80;
  --tw-fuchsia-bg: #e879f91a; 
  --tw-white-fg: #ffffffbf;
  --el-color: v-bind(fgColor);
  --bg-color: v-bind(bgColor);
}
.dotted {
  --dot-size: v-bind(dotSize);
  --bg-size: var(--dot-size) var(--dot-size);
  --dot-position: 0px 0px, calc(var(--dot-size) / 2) calc(var(--dot-size) / 2);
  background-image:
    radial-gradient(var(--el-color) 30%, transparent 30%),
    radial-gradient(var(--el-color) 30%, transparent 30%);
  background-size: var(--bg-size);
  background-position: var(--dot-position);
  background-color: var(--bg-color);
}
.striped {
  background-color: var(--bg-color);
  background-size: 7px 7px;
  background-image:
    linear-gradient(135deg,
      var(--el-color) 10%,
      transparent 0,
      transparent 50%,
      var(--el-color) 0,
      var(--el-color) 60%,
      transparent 0,
      transparent);
}
</style>
