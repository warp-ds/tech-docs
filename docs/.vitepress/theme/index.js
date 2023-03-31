import DefaultTheme from 'vitepress/theme'
import '../bootExamples.js'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    console.log({ctx})
    DefaultTheme.enhanceApp(ctx)
  }
}
