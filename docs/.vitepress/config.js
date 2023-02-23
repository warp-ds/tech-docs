import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Warp Tech',
  description: 'Documentation for Warp Design System technical platform',
  lastUpdated: false,
  cleanUrls: true,
  markdown: { theme: 'nord' },
  base: '/tech-docs/',
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
        }
      ]
    }
  },
})

