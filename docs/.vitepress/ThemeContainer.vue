/*  Theme switcher from css-docs */

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
    <label for="themeSelect">Select theme:</label>
    <div class="select">
      <select id="themeSelect" v-model="selectedTheme">
        <option v-for="[name, value] in Object.entries(themes)" :key="name" :value="value">{{ name }}</option>
      </select>
    </div>
  </div>
  <slot />
</template>

<style lang="scss" scoped>
.theme-switcher {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 16px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}
.select {
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
  width: 300px;
  margin-left: 8px;
  margin-bottom: 24px;
  padding: 3px 8px;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-text-2);
  border-radius: 5px;

  &:last-child {
    margin-bottom: 0;
  }

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