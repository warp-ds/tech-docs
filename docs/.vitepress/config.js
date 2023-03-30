import { defineConfig } from 'vitepress'


export default defineConfig({
  lang: 'en-US',
  title: 'Fabric Technology',
  description: 'Tech docs for Fabric design system',
  lastUpdated: false,
  markdown: { theme: 'nord' },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-example') || tag.includes('w-')
      }
    }
  },
//   vite: {
//     plugins: [
//         uno({
//           presets: [
//             presetWarp({ usePreflight: true })
//           ],
//           mode: 'shadow-dom',
//           safelist: buttonSafelist,
//         }),
//       ],
// },
  head: [
    ['link', { rel: 'preload', as: 'style', href: 'https://assets.finn.no/pkg/@warp-ds/tokens/v1/finn-no.css' }],
    ['link', { rel: 'preload', as: 'font', type: 'font/woff2', href: 'https://static.finncdn.no/_c/static/fonts/FINNTypeStrippet-Light.woff2' }],
    ['link', { rel: 'preload', as: 'font', type: 'font/woff2', href: 'https://static.finncdn.no/_c/static/fonts/FINNTypeStrippet-Medium.woff2' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Getting Started', link: '/introduction' },
      { text: 'Fabric Design', link: 'https://www.fabric-ds.io' },
    ],
    sidebar: {
      '/': [
        {
          text: 'Actions',
          collapsible: true,
          items: [
            { text: 'Button', link: '/buttons/' },
            { text: 'Button Group', link: '/button-group/' },
            { text: 'Pill', link: '/pill/' }
          ]
        },
        {
          text: 'Forms',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Input', link: '/input/' },
            { text: 'Select', link: '/select/' },
            { text: 'Slider', link: '/slider/' },
            { text: 'Switch', link: '/switch/' },
            { text: 'Textarea', link: '/textarea/' },
            { text: 'Toggle', link: '/toggle/' },
          ]
        },
        {
          text: 'Feedback',
          collapsible: true,
          items: [
            { text: 'Alert', link: '/alert/' },
            { text: 'Steps', link: '/steps/' },
          ]
        },
        {
          text: 'Layout',
          collapsible: true,
          items: [
            { text: 'Box', link: '/box/' },
            { text: 'Card', link: '/card/' },
            { text: 'Expandable', link: '/expandable/' },
            { text: 'Tabs', link: '/tabs/' },
          ]
        },
        {
          text: 'Foundations',
          collapsible: true,
          items: [
            { text: 'Icons', link: '/icons/' },
            { text: 'Spinner', link: '/spinner/' },
            { text: 'Ribbon', link: '/ribbon/' },
            { text: 'Clickable', link: '/clickable/' },
            { text: 'Dead Toggle', link: '/dead-toggle/' },
            { text: 'Toggle Item', link: '/toggle-item/' },
          ]
        }
      ]
    }
  }
})
