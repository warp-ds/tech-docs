<script setup>
import { inject } from 'vue';

const { current: currentTheme, themes: warpThemes  } = inject('warpThemeSwitcher');
</script>

<template>
  <div class="theme-switcher">
    <label class="label" for="themeSelect">Example theme:</label>
    <div class="select">
      <select id="themeSelect" v-model="currentTheme">
        <option v-for="[name, value] in Object.entries(warpThemes)" :key="name" :value="value">{{ name }}</option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.theme-switcher {
  display: flex;
  align-items: center;
  padding: 6px 16px;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}
.label {
  font-size: 14px;
}
.select {
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
  width: 150px;
  margin-left: 8px;
  padding: 1px 8px;
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