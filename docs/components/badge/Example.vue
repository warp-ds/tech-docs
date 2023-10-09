<script setup>
import { wBadge } from '@warp-ds/vue';

const badgeVariants = ['neutral', 'info', 'positive', 'warning', 'negative', 'disabled', 'notification', 'price',];
const badgePositions = ['top-left', 'top-right', 'bottom-left', 'bottom-right',];
</script>

<template>
  <div class="component space-y-24">
    <div>
      <h3 class="h4">Default</h3>
      <w-badge>Rendered as neutral variant as default</w-badge>
    </div>
    <div>
      <h3 class="h4">Variants</h3>
      <div class="space-x-8">
        <w-badge v-for="variant in badgeVariants" :key="variant" :variant="variant">{{ variant }}</w-badge>
      </div>
    </div>
    <div>
      <h3 class="h4">Positioning</h3>
      <div class="relative border border-0 rounded-8 overflow-hidden h-96">
        <img class="w-full h-96 object-cover" src="https://source.unsplash.com/random/768x96" />
        <w-badge v-for="position in badgePositions" :key="position" variant="price" :position="position">position: {{ position }}</w-badge>
      </div>
    </div>
  </div>
</template>
