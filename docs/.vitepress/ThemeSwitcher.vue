<script setup>
import { computed } from 'vue';

const themes = {
  'Finn': 'finn-no',
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
  <div class="theme-switcher">
    <label for="themeSelect">Select brand:</label>
    <div class="select">
      <select id="themeSelect" v-model="selectedTheme">
        <option v-for="[name, value] in Object.entries(themes)" :key="name" :value="value">{{ name }}</option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.theme-switcher {
  display: flex;
  margin-top: 24px;
  align-items: center;
}
.select {
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
  width: 300px;
  margin-left: 8px;
  padding: 3px 8px;
  border: 1px solid var(--vp-c-text-2);
  border-radius: 5px;
  background-color: transparent;

  select {
    grid-area: select;
    background-color: transparent;
  }

  &::after {
    grid-area: select;
    content: "";
    justify-self: end;
    width: 8px;
    height: 5px;
    background-color: var(--vp-c-text-1);
    clip-path: polygon(100% 0%, 0 0, 50% 100%);
  }

  &:focus-within {
    border: 2px solid var(--vp-c-brand-1);
    padding: 2px 7px;
  }
}
</style>