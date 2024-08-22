<script setup>
import { ref } from 'vue'
import { wAttention, wBox } from '@warp-ds/vue'

const calloutShowing = ref(true)
</script>

<template>
  <div class="component space-y-32">
    <div>
      <h3 class="t4">Callout</h3>
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
  </div>
</template>
