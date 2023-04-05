import DefaultTheme from 'vitepress/theme'
import ApiTable from '../ApiTable.vue'
import '../bootExamples.js'
import './custom.css'
import 'uno.css'


export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ApiTable', ApiTable)
  }
}
