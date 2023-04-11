import DefaultTheme from 'vitepress/theme';
import ApiTable from '../ApiTable.vue';
import ThemeSwitcher from '../ThemeSwitcher.vue';
import '../bootExamples.js';
import './custom.css';
import '@warp-ds/component-classes/common'


export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ApiTable', ApiTable);
    app.component('ThemeSwitcher', ThemeSwitcher);
  }
}
