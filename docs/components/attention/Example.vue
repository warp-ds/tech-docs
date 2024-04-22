<script setup>
import { ref } from 'vue'
import { wAttention, wBox, wButton } from '@warp-ds/vue'
import IconInfo16 from '@warp-ds/icons/vue/info-16'

const tooltipTarget = ref(null)
const popoverTarget = ref(null)
const highlightTarget = ref(null)
const popoverIconTarget = ref(null)

const tooltipShowing = ref(false)
const calloutShowing = ref(true)
const popoverShowing = ref(false)
const highlightShowing = ref(false)
const popoverIconTargetShowing = ref(false)

</script>

<template>
  <div class="component space-y-16">
    <div>
      <h4>Callout</h4>
      <div class="flex items-center">
        <w-box neutral aria-details="callout-bubbletext">
          I am a box full of info
        </w-box>
        <w-attention
          callout
          placement="right"
          v-model="calloutShowing"
          class="ml-8"
        >
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
        placement="right"
        flip
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
        placement="right"
        flip
        cross-axis
        :fallback-placements="['left', 'bottom', 'top']"
        :target-el="popoverTarget ? popoverTarget.$el : null"
        v-model="popoverShowing"
        id="popover-example"
      >
        <p id="popover-bubbletext">This is a popover</p>
      </w-attention>
    </div>
    <div>
      <h4>Popover with icon as target element</h4>
      <w-button
        :aria-expanded="popoverIconTargetShowing"
        aria-controls="popover-icon-target-example"
        type="button"
        utility
        quiet
        ref="popoverIconTarget"
        @click="() => (popoverIconTargetShowing = !popoverIconTargetShowing)"
      >
        <icon-info16 />
      </w-button>
        <w-attention
          popover
          placement="right-end"
          :distance="-6"
          :skidding="15"
          :target-el="popoverIconTarget ? popoverIconTarget.$el : null"
          v-model="popoverIconTargetShowing"
        >
          <p>Hello Warp!</p>
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
        placement="bottom"
        flip
        :fallback-placements="['top']"
        can-close
        @dismiss="highlightShowing = false"
        :target-el="highlightTarget ? highlightTarget.$el : null"
        v-model="highlightShowing"
      >
        <p id="highlighted-bubbletext">I'm a highlight that can close itself</p>
      </w-attention>
    </div>
  </div>
</template>
