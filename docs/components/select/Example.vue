<script setup>
  import { wSelect } from '@warp-ds/vue';
</script>

<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Standard with hint and disabled first option</h3>
      <w-select label="A label" hint="A hint" v-model="model" >
        <option disabled selected value="">Pick something</option>
        <option value="foo">Foo</option>
        <option value="bar">Bar</option>
      </w-select>
    </div>
    <div>
      <h3 class="h4">Optional</h3>
      <w-select optional v-model="selectModel" label="A useful and informative label">
        <option selected value="">Pick something</option>
        <option value="foo">Foo</option>
        <option value="bar">Bar</option>
      </w-select>
    </div>
    <div>
      <h3 class="h4">Disabled</h3>
      <w-select :disabled="true" v-model="selectModel" label="Disabled select">
        <option selected value="">Pick something</option>
        <option value="foo">Foo</option>
        <option value="bar">Bar</option>
      </w-select>
    </div>
    <div>
      <h3 class="h4">Invalid</h3>
      <w-select required invalid v-model="selectModel" label="Invalid">
        <option selected value="">Pick something</option>
        <option value="foo">Foo</option>
        <option value="bar">Bar</option>
      </w-select>
    </div>
  </div>
</template>