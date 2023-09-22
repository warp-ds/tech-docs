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
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Callout</h3>
      <div class="flex items-center">
        <w-box neutral ref="calloutTarget" @mouseenter="calloutShowing = true; target = $refs.calloutTarget" @mouseleave="calloutShowing = false">Hover over me</w-box>
        <w-attention callout right :target-el="calloutTarget ? calloutTarget.$el : null" v-model="calloutShowing" class="ml-8">
          <p>This is a callout</p>
        </w-attention>
      </div>
    </div>
    <div>
      <h3 class="h4">Tooltip</h3>
      <w-box neutral ref="tooltipTarget" @mouseenter="tooltipShowing = true; target = $refs.tooltipTarget" @mouseleave="tooltipShowing = false">Hover over me</w-box>
      <w-attention tooltip bottom :target-el="tooltipTarget ? tooltipTarget.$el : null" v-model="tooltipShowing">
        <p>This is a tooltip</p>
      </w-attention>
    </div>
    <div>
      <h3 class="h4">Popover</h3>
      <w-box neutral ref="popoverTarget" @mouseenter="popoverShowing = true; target = $refs.popoverTarget" @mouseleave="popoverShowing = false">Hover over me</w-box>
      <w-attention popover bottom :target-el="popoverTarget ? popoverTarget.$el : null" v-model="popoverShowing">
        <p>This is a popover</p>
      </w-attention>
    </div>
  </div>
</template>
