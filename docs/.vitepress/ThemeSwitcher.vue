<script setup>
import { computed } from 'vue';

const themes = {
  'Finn': 'finn-no',
  'Blocket': 'blocket-se',
  'Tori': 'tori-fi'
};

if (typeof window !== 'undefined') {
  window.theme = themes.Finn;
}

const selectedTheme = computed({
  get: () => window.theme,
  set: (value) => { window.theme = value; }
});
</script>

<template>
  <div class="select">
    <select v-model="selectedTheme" name="themes">
      <option v-for="[name, value] in Object.entries(themes)" :key="name" :value="value">{{ name }}</option>
    </select>
  </div>  
</template>

<style lang="scss" scoped>
.select {
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
  width: 300px;
  height: 30px;
  margin-top: 24px;
  padding: 4px 8px;
  border: 1px solid var(--vp-c-text-2);
  border-radius: 5px;

  select,
  &::after {
    grid-area: select;
  }

  &::after {
    content: "";
    justify-self: end;
    width: 8px;
    height: 5px;
    background-color: var(--vp-code-block-bg);
    clip-path: polygon(100% 0%, 0 0, 50% 100%);
  }

  &:focus-within {
    border: 2px solid var(--vp-c-brand);
    padding: 3px 7px;
  }
}
</style>