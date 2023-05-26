<script setup>
import { ref } from 'vue';
import { wAttention, wBox } from '@warp-ds/vue';

const tooltipTarget = ref(null)
const calloutTarget = ref(null)
const popoverTarget = ref(null)

const tooltipShowing = ref(false)
const calloutShowing = ref(false)
const popoverShowing = ref(false)
</script>

<template>
  <h2>Callout</h2>
  <div class="component flex items-center">
    <w-box neutral class="h4" ref="calloutTarget" @mouseenter="calloutShowing = true; target = $refs.calloutTarget" @mouseleave="calloutShowing = false">Hover over me</w-box>
    <w-attention callout right :target-el="calloutTarget ? calloutTarget.$el : null" v-model="calloutShowing" class="ml-8">
      <p>This is a callout</p>
    </w-attention>
  </div>
  <h2>Tooltip</h2>
  <div class="component">
    <w-box neutral class="h4" ref="tooltipTarget" @mouseenter="tooltipShowing = true; target = $refs.tooltipTarget" @mouseleave="tooltipShowing = false">Hover over me</w-box>
    <w-attention tooltip bottom :target-el="tooltipTarget ? tooltipTarget.$el : null" v-model="tooltipShowing">
      <p>This is a tooltip</p>
    </w-attention>
  </div>
  <h2>Popover</h2>
  <div class="component">
    <w-box neutral class="h4" ref="popoverTarget" @mouseenter="popoverShowing = true; target = $refs.popoverTarget" @mouseleave="popoverShowing = false">Hover over me</w-box>
    <w-attention popover bottom :target-el="popoverTarget ? popoverTarget.$el : null" v-model="popoverShowing">
      <p>This is a popover</p>
    </w-attention>
  </div>
</template>
