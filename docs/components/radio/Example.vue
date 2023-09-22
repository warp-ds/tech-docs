<script setup>
  import { wToggle } from '@warp-ds/vue';
  import { ref } from 'vue';

  const toggleModel = ref('')
  const invalidToggleModel = ref('1')
  const disabledToggleModel = ref('2')

  const toggles = [
    { label: 'One', value: 1, 'data-test': 'toggle:1' },
    { label: 'Two', value: 2, 'data-test': 'toggle:2' },
  ]

</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Default</h3>
      <w-toggle radio v-model="toggleModel" label="A very toggly label" :toggles="toggles" />
    </div>
    <div>
      <h3 class="h4">Disabled</h3>
      <w-toggle radio disabled v-model="disabledToggleModel" label="A very DISABLED non-toggly label" :toggles="toggles" />
    </div>
    <div>
      <h3 class="h4">Invalid</h3>
      <w-toggle radio invalid v-model="invalidToggleModel" label="A very INVALID toggly label" :toggles="toggles" />
    </div>
  </div>
</template>
