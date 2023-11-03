<script setup>
import { ref } from 'vue'
import { wAttention, wBox, wButton } from '@warp-ds/vue'

const tooltipTarget = ref(null)
const popoverTarget = ref(null)
const highlightTarget = ref(null)

const tooltipShowing = ref(false)
const calloutShowing = ref(true)
const popoverShowing = ref(false)
const highlightShowing = ref(false)
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h4>Callout</h4>
      <div class="flex items-center">
        <w-box neutral aria-details="callout-bubbletext">
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
      >
        Hover over me
      </w-button>
      <w-attention
        tooltip
        bottom
        :target-el="tooltipTarget ? tooltipTarget.$el : null"
        v-model="tooltipShowing"
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
        aria-details="popover-bubbletext"
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
        id="popover-example"
      >
        <p id="popover-bubbletext">This is a popover</p>
      </w-attention>
    </div>
    <div>
      <h4>Highlight (with optional close button)</h4>
      <w-button
        utility
        :aria-expanded="highlightShowing"
        aria-controls="highlight-attention-example"
        aria-details="highlighted-bubbletext"
        ref="highlightTarget"
        @click="highlightShowing = !highlightShowing"
      >
        Open highlight
      </w-button>
      <w-attention
        id="highlight-attention-example"
        highlight
        bottom
        canClose
        @dismiss="highlightShowing = false"
        :target-el="highlightTarget ? highlightTarget.$el : null"
        v-model="highlightShowing"
      >
        <p id="highlighted-bubbletext">I'm a highlight that can close itself</p>
      </w-attention>
    </div>
  </div>
</template>
