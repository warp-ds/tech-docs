import { h } from 'vue'
import DefaultTheme from 'vitepress/theme';
import ApiTable from '../ApiTable.vue';
import TabsContent from '../TabsContent.vue';
import ThemeSwitcher from '../ThemeSwitcher.vue';
import ComponentDesignGuidelines from '../../components/ComponentDesignGuidelines.md';
import ComponentQuestions from '../../components/ComponentQuestions.md';
import ComponentsStatus from '../ComponentsStatus.vue';
import Do from '../Do.vue';
import DoDont from '../DoDont.vue';
import QrTable from '../qr-table.vue';
import QrColorTable from '../qr-color-table.vue';
import WidthController from '../WidthController.vue';
import { IconStarFull32 } from '@warp-ds/icons/vue';
import '../bootExamples.js';
import './custom.css';
import warpThemeSwitcher from "../warp-theme-switcher.js";

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-before': () => h(ThemeSwitcher),
      'nav-screen-content-before': () => h(ThemeSwitcher)
    })
  },
  async enhanceApp(ctx) {
    ctx.app.use(warpThemeSwitcher);
    ctx.app.component('ApiTable', ApiTable);
    ctx.app.component('ThemeSwitcher', ThemeSwitcher);
    ctx.app.component('TabsContent', TabsContent);
    ctx.app.component('ComponentDesignGuidelines', ComponentDesignGuidelines);
    ctx.app.component('ComponentQuestions', ComponentQuestions);
    ctx.app.component('ComponentsStatus', ComponentsStatus);
    ctx.app.component('Do', Do);
    ctx.app.component('DoDont', DoDont);
    ctx.app.component('WidthController', WidthController);
    ctx.app.component('QrTable', QrTable);
    ctx.app.component('QrColorTable', QrColorTable);
    ctx.app.component('IconStarFull32', IconStarFull32);
  },
};
