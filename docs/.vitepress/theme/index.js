import DefaultTheme from 'vitepress/theme'
import CompHead from '../CompHead.vue'
import ApiTable from '../ApiTable.vue'
import '../bootExamples.js'
// import './custom.css'
// import 'uno.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
  }
}
