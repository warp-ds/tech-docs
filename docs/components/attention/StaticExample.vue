<script setup>
import { ref } from 'vue'
import { wAttention, wBox } from '@warp-ds/vue'


const popoverTarget = ref(null)

const popoverShowing = ref(true)

</script>

<template>
  <div>
    <div>
      <w-box bordered as="h4" aria-details="popover-bubbletext" ref="popoverTarget">
       Look at this static popover!
      </w-box>
      <w-attention
        popover
        placement="bottom-start"
        :target-el="popoverTarget ? popoverTarget.$el : null"
        v-model="popoverShowing"
        id="popover-example"
      >
        <p id="popover-bubbletext">This is a popover</p>
      </w-attention>
    </div>
  </div>
    
</template>
