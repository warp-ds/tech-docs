<script setup>
  import { wInput } from '@warp-ds/vue';
  import { wAffix } from '@warp-ds/vue';

</script>

<template>
  <h3>Standard with hint</h3>
  <div class="component">
    <w-input label="A label" hint="A hint" />
  </div>
  <h3>Optional with placeholder</h3>
  <div class="component">
    <w-input label="A label" placeholder="This is a placeholder" optional />
  </div>
  <h3>Disabled</h3>
  <div class="component">
    <w-input label="A label" disabled />
  </div>
  <h3>Read Only</h3>
  <div class="component">
    <w-input label="A label" value="This is a readOnly textfield" readOnly />
  </div>
  <h3>Invalid</h3>
  <div class="component">
    <w-input label="A label" #suffix invalid required >
      <w-affix suffix clear />
    </w-input>
  </div>
  <h3>Suffix + Prefix</h3>
  <div class="component">
    <w-input label="A label" #prefix #suffix  >
      <w-affix suffix clear />
      <w-affix prefix label="kr" />
    </w-input>
  </div>
</template>