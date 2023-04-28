<script setup>
  import { wSelect } from '@warp-ds/vue';
</script>

<template>
  <h3>Standard with hint and disabled first option</h3>
  <div class="component">
    <w-select label="A label" hint="A hint" v-model="model" >
      <option disabled selected value="">Pick something</option>
      <option value="foo">Foo</option>
      <option value="bar">Bar</option>
    </w-select>
  </div>
  <h3>Optional</h3>
  <div class="component">
    <w-select optional v-model="selectModel" label="A useful and informative label">
      <option selected value="">Pick something</option>
      <option value="foo">Foo</option>
      <option value="bar">Bar</option>
    </w-select>
  </div>
  <h3>Disabled</h3>
  <div class="component">
    <w-select :disabled="true" v-model="selectModel" label="Disabled select">
      <option selected value="">Pick something</option>
      <option value="foo">Foo</option>
      <option value="bar">Bar</option>
    </w-select>
  </div>
  <h3>Invalid</h3>
  <div class="component">
    <w-select required invalid v-model="selectModel" label="Invalid">
      <option selected value="">Pick something</option>
      <option value="foo">Foo</option>
      <option value="bar">Bar</option>
    </w-select>
  </div>
</template>