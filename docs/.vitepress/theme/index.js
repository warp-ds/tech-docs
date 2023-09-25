import DefaultTheme from 'vitepress/theme';
import ApiTable from '../ApiTable.vue';
import TabsContent from '../TabsContent.vue';
import ThemeSwitcher from '../ThemeSwitcher.vue';
import ComponentDesignGuidelines from '../../components/ComponentDesignGuidelines.md';
import ComponentQuestions from '../../components/ComponentQuestions.md';
import ComponentsStatus from '../ComponentsStatus.vue';
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
  },
};
