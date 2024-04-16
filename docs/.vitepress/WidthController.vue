<script setup>
import { provide, watch, ref } from 'vue'
import { useDraggable } from '@vueuse/core'

const props = defineProps({
  minWidth: {
    type: Number,
    default: 240
  }
})

const right = ref(0)
const wrapperEl = ref(null)
const containerEl = ref(null)
const handleEl = ref(null)
provide('widthController', { register: (c) => containerEl.value = c })

const HANDLE_WIDTH = 16
const { x } = useDraggable(handleEl)
watch(x, () => {
  const wrapperRight = wrapperEl.value.getBoundingClientRect().right
  const wrapperWidth = wrapperEl.value.getBoundingClientRect().width
  const newRightValue = wrapperRight - x.value
  const width = wrapperWidth - newRightValue
  if (width < props.minWidth) return
  // we don't return here because it's possible to move the cursor out-of-bounds faster than this function
  // thus the width doesn't go back to 0 but is 'stuck' at the last update
  else if (newRightValue < HANDLE_WIDTH) right.value = HANDLE_WIDTH
  else right.value = newRightValue
})

watch(right, () => {
  const v = right.value - HANDLE_WIDTH
  containerEl.value.style.marginRight = v + 'px'
  handleEl.value.style.transform = `translateX(-${v}px)`
})
</script>

<style>
.wd-resize-wrapper{
  position:relative;
  padding-right:16px;
}
.wd-resize-handle{
    transform: translateX(0px);
    cursor: ew-resize !important;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    display: flex;
    border-radius: 9999px;
}
.wd-resize-handle__span{
    display: block;
    width: 8px;
    height: 48px;
    background-color: var(--vp-button-brand-bg);
    border-radius: 9999px;
}
</style>

<template>
  <div class="wd-resize-wrapper" ref="wrapperEl">
    <slot />
    <button ref="handleEl" @mousedown="handleDragStart" @touchstart="handleDragStart" class="wd-resize-handle">
      <span class="wd-resize-handle__span" />
    </button>
  </div>
</template>
