<script setup>
import { ref } from 'vue'
import { wAttention, wBox } from '@warp-ds/vue'

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
      <h4>Callout</h4>
      <div class="flex items-center">
        <w-box
          neutral
          ref="calloutTarget"
          aria-details="callout-bubbletext"
          @mouseenter="calloutShowing = true; target = $refs.calloutTarget"
          @mouseleave="calloutShowing = false"
          @keydown.escape="calloutShowing = false"
          @focus="calloutShowing = true"
          @blur="calloutShowing = false"
          tabindex="0"
          >
          <button>Hover over me</button>
          </w-box
        >
        <w-attention
          callout
          right
          :target-el="calloutTarget ? calloutTarget.$el : null"
          v-model="calloutShowing"
          @focus="calloutShowing = true"
          @blur="calloutShowing = false"
          class="ml-8"
        >
          <p id="callout-bubbletext" role="img">This is a callout</p>
        </w-attention>
      </div>
    </div>
    <div>
      <h4>Tooltip</h4>
      <w-box
        neutral
        ref="tooltipTarget"
        aria-describedby="tooltip-text"
        :aria-hidden="!tooltipShowing"
        @mouseenter=" tooltipShowing = true; target = $refs.tooltipTarget"
        @mouseleave="tooltipShowing = false"
        @keydown.escape="tooltipShowing = false"
        @focus="tooltipShowing = true"
        @blur="tooltipShowing = false"
        tabindex="0"
        >
        <button>Hover over me</button>
        </w-box
      >
      <w-attention
        tooltip
        bottom
        :target-el="tooltipTarget ? tooltipTarget.$el : null"
        v-model="tooltipShowing"
        @focus="tooltipShowing = true"
        @blur="tooltipShowing = false"
      >
        <p id="tooltip-text" role="tooltip">This is a tooltip</p>
      </w-attention>
    </div>
    <div>
      <h4>Popover</h4>
      <w-box
        neutral
        ref="popoverTarget"
        :aria-expanded="popoverShowing"
        aria-controls="pop-over-attention-example"
        aria-details="popover-bubbletext"
        @mouseenter="popoverShowing = true; target = $refs.popoverTarget"
        @mouseleave="popoverShowing = false"
        @keydown.escape="popoverShowing = false"
        @focus="popoverShowing = true"
        @blur="popoverShowing = false"
        tabindex="0"
        >
        <button>Hover over me</button>
        </w-box
      >
      <w-attention
        popover
        bottom
        :target-el="popoverTarget ? popoverTarget.$el : null"
        v-model="popoverShowing"
        @focus="popoverShowing = true"
        @blur="popoverShowing = false"
      >
        <p id="popover-bubbletext" role="img">This is a popover</p>
      </w-attention>
    </div>
  </div>
</template>
