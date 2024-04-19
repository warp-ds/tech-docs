<script setup>
import { ref } from 'vue'
import { wAttention, wBox } from '@warp-ds/vue'

const popoverTarget = ref(null)

const popoverShowing = ref(true)
</script>

<template>
  <div class="py-40">
    <div>
      <w-box bordered as="h4" aria-details="popover-bubbletext" ref="popoverTarget">
        Look at how this popover moves!
      </w-box>
      <w-attention
        popover
        placement="bottom-start"
        flip
        :target-el="popoverTarget ? popoverTarget.$el : null"
        v-model="popoverShowing"
        id="popover-example"
      >
        <p id="popover-bubbletext">This is a popover</p>
      </w-attention>
    </div>
  </div>
</template>
