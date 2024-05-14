import DefaultTheme from 'vitepress/theme';
import ApiTable from '../ApiTable.vue';
import TabsContent from '../TabsContent.vue';
import ThemeSwitcher from '../ThemeSwitcher.vue';
import ComponentDesignGuidelines from '../../components/ComponentDesignGuidelines.md';
import ComponentQuestions from '../../components/ComponentQuestions.md';
import ComponentsStatus from '../ComponentsStatus.vue';
import Do from '../Do.vue';
import DoDont from '../DoDont.vue';
import Container from '../Container.vue';
import QrTable from '../qr-table.vue';
import QrColorTable from '../qr-color-table.vue';
import WidthController from '../WidthController.vue';
import Box from '../Box.vue';
import { IconStarFull32 } from '@warp-ds/icons/vue';
import '../bootExamples.js';
import './custom.css';

export default {
  ...DefaultTheme,
  async enhanceApp(ctx) {
    if (!import.meta.env.SSR) {
      const themeSwitcherListener = await import('../theme-switcher-listener.js');
      ctx.app.use(() => themeSwitcherListener);
    }
    ctx.app.component('ApiTable', ApiTable);
    ctx.app.component('ThemeSwitcher', ThemeSwitcher);
    ctx.app.component('TabsContent', TabsContent);
    ctx.app.component('ComponentDesignGuidelines', ComponentDesignGuidelines);
    ctx.app.component('ComponentQuestions', ComponentQuestions);
    ctx.app.component('ComponentsStatus', ComponentsStatus);
    ctx.app.component('Do', Do);
    ctx.app.component('DoDont', DoDont);
    ctx.app.component('Container', Container);
    ctx.app.component('WidthController', WidthController);
    ctx.app.component('QrTable', QrTable);
    ctx.app.component('QrColorTable', QrColorTable);
    ctx.app.component('Box', Box);
    ctx.app.component('IconStarFull32', IconStarFull32);
  },
};
