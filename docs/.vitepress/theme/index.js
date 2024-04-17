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
import '../bootExamples.js';
import './custom.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ApiTable', ApiTable);
    app.component('ThemeSwitcher', ThemeSwitcher);
    app.component('TabsContent', TabsContent);
    app.component('ComponentDesignGuidelines', ComponentDesignGuidelines);
    app.component('ComponentQuestions', ComponentQuestions);
    app.component('ComponentsStatus', ComponentsStatus);
    app.component('Do', Do);
    app.component('DoDont', DoDont);
    app.component('Container', Container);
    app.component('WidthController', WidthController);
    app.component('QrTable', QrTable);
    app.component('QrColorTable', QrColorTable);
    app.component('Box', Box);
  },
};
