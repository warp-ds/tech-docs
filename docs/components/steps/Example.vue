<script setup>
import { ref } from 'vue';
import { wButton, wSteps, wStep } from '@warp-ds/vue';

const alignment = {
  vertical: 'Vertical',
  horizontal: 'Horizontal',
};

const position = {
  left: 'Left',
  right: 'Right',
};

const currentStep = ref(1);
const currentAlignment = ref(alignment.vertical);
const currentPosition = ref(position.left);

const handleClick = () => {
  if (currentStep.value < 4) currentStep.value += 1;
  else currentStep.value = 1;
};
</script>

<template>
  <div class="options">
    <label v-for="[name, value] in Object.entries(alignment)" :key="name">
      <input
        type="radio"
        :id="name"
        :value="value"
        v-model="currentAlignment"
      />
      <span>{{ value }}</span>
    </label>
  </div>
  <div class="options">
    <label v-for="[name, value] in Object.entries(position)" :key="name">
      <input type="radio" :id="name" :value="value" v-model="currentPosition" />
      <span>{{ value }}</span>
    </label>
  </div>
  <div>
    <w-steps
      class="component"
      :horizontal="currentAlignment === alignment.horizontal"
      :right="currentPosition === position.right"
    >
      <w-step :active="currentStep === 1" :complete="currentStep > 1">
        <p class="font-bold">Step 1</p>
        <p>Describing text</p>
      </w-step>
      <w-step :active="currentStep === 2" :complete="currentStep > 2">
        <p class="font-bold">Step 2</p>
        <p>Describing text</p>
      </w-step>
      <w-step :active="currentStep === 3" :complete="currentStep > 3">
        <p class="font-bold">Step 3</p>
        <p>Describing text</p>
      </w-step>
    </w-steps>
    <w-button primary v-on:click="handleClick">Next step</w-button>
  </div>
</template>
