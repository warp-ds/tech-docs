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
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          collabsible: true,
          items: [
            { text: 'Getting Started', link: '/getting-started' },
          ]
        }
      ]
    }
  },
})

