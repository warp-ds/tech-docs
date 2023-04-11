import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Warp Tech',
  description: 'Documentation for Warp Design System technical platform',
  lastUpdated: false,
  cleanUrls: true,
  base: '/tech-docs/',
  markdown: { theme: 'nord' },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-example')
      }
    }
  },
  head: [
    ['link', { rel: 'preload', as: 'style', href: 'https://assets.finn.no/pkg/@warp-ds/tokens/v1/finn-no.css' }],
    ['link', { rel: 'preload', as: 'font', type: 'font/woff2', href: 'https://static.finncdn.no/_c/static/fonts/FINNTypeStrippet-Light.woff2' }],
    ['link', { rel: 'preload', as: 'font', type: 'font/woff2', href: 'https://static.finncdn.no/_c/static/fonts/FINNTypeStrippet-Medium.woff2' }]
  ],
  themeConfig: {
    logo: '/warp-logo-small.svg',
    outline: 'deep',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/warp-ds' }
    ],
    footer: {
      message: 'Released under the Apache 2.0 License.',
      copyright: 'Copyright © 2023-present Schibsted'
    },
    nav: [
      { text: 'Warp CSS', link: 'https://warp-ds.github.io/css-docs' },
      {
        text: 'Implementations',
        items: [
          { text: 'React', link: 'https://github.com/warp-ds' },
          { text: 'Vue', link: 'https://github.com/warp-ds' },
          { text: 'Elements', link: 'https://github.com/warp-ds' },
        ]
      }
    ],
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          collabsible: true,
          items: [            
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'Migrating from Fabric', link: '/migrating' },
          ]
        },
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
      ]
    }
  }
})
