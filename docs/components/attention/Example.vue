<script setup>
import { ref } from 'vue'
import { wAttention, wBox, wButton } from '@warp-ds/vue'

const tooltipTarget = ref(null)
const popoverTarget = ref(null)

const tooltipShowing = ref(false)
const calloutShowing = ref(true)
const popoverShowing = ref(false)
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h4>Callout</h4>
      <div class="flex items-center">
        <w-box neutral aria-details="callout-bubbletext" tabindex="0">
          I am a box full of info
        </w-box>
        <w-attention callout right v-model="calloutShowing" class="ml-8">
          <p id="callout-bubbletext">This is a callout</p>
        </w-attention>
      </div>
    </div>
    <div>
      <h4>Tooltip</h4>
      <w-button
        utility
        ref="tooltipTarget"
        aria-describedby="tooltip-bubbletext"
        aria-expanded="true"
        @mouseenter="tooltipShowing = true; target = $refs.tooltipTarget"
        @mouseleave="tooltipShowing = false"
        @keydown.escape="tooltipShowing = false"
        @focus="tooltipShowing = true"
        @blur="tooltipShowing = false"
        tabindex="0"
        type="button"
      >
        Hover over me
      </w-button>
      <w-attention
        tooltip
        bottom
        :target-el="tooltipTarget ? tooltipTarget.$el : null"
        v-model="tooltipShowing"
        @focus="tooltipShowing = true"
        @blur="tooltipShowing = false"
      >
        <p id="tooltip-bubbletext">This is a tooltip</p>
      </w-attention>
    </div>
    <div>
      <h4>Popover</h4>
      <w-button
        utility
        :aria-expanded="popoverShowing"
        aria-controls="popover-example"
        type="button"
        ref="popoverTarget"
        @click="() => (popoverShowing = !popoverShowing)"
      >
        Open popover
      </w-button>
      <w-attention
        popover
        bottom
        :target-el="popoverTarget ? popoverTarget.$el : null"
        v-model="popoverShowing"
      >
        <p>Hello Warp!</p>
      </w-attention>
    </div>
  </div>
</template>
