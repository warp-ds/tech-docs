import { defineConfig } from 'vitepress';
import { presetWarp } from '@warp-ds/uno';
import uno from 'unocss/vite';
import { classes } from '@warp-ds/component-classes/classes';

export default defineConfig({
  lang: 'en-US',
  title: 'Warp Tech',
  description:
    'Documentation for Warp Design System technical platform',
  lastUpdated: false,
  cleanUrls: true,
  base: '/tech-docs/',
  markdown: { theme: 'nord' },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-example'),
      },
    },
  },
  vite: {
    plugins: [
      uno({
        presets: [presetWarp({ usePreflight: true })],
        mode: 'shadow-dom',
        safelist: classes,
      }),
    ],
  },
  head: [
    [
      'link',
      {
        rel: 'preload',
        as: 'style',
        href: 'https://assets.finn.no/pkg/@warp-ds/tokens/v1/finn-no.css',
      },
    ],
    [
      'link',
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: 'https://static.finncdn.no/_c/static/fonts/FINNTypeStrippet-Light.woff2',
      },
    ],
    [
      'link',
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: 'https://static.finncdn.no/_c/static/fonts/FINNTypeStrippet-Medium.woff2',
      },
    ],
  ],
  themeConfig: {
    logo: '/warp-logo-small.svg',
    outline: 'deep',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/warp-ds' },
    ],
    footer: {
      message: 'Released under the Apache 2.0 License.',
      copyright: 'Copyright © 2023-present Schibsted',
    },
    nav: [
      {
        text: 'Warp CSS',
        link: 'https://warp-ds.github.io/css-docs',
      },
      {
        text: 'Implementations',
        items: [
          { text: 'React', link: 'https://github.com/warp-ds' },
          { text: 'Vue', link: 'https://github.com/warp-ds' },
          { text: 'Elements', link: 'https://github.com/warp-ds' },
        ],
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          collabsible: true,
          items: [
            { text: 'Getting Started', link: '/getting-started/' },
            { text: 'Migrating from Fabric', link: '/migrating' },
          ],
        },
        {
          text: 'Components',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'Actions',
              collapsible: true,
              items: [
                { text: 'Button', link: '/components/buttons/' },
              ],
            },
            {
              text: 'Forms',
              collapsible: true,
              items: [
                { text: 'Select', link: '/components/select/' },
                { text: 'Textarea', link: '/components/textarea/' },
                { text: 'Textfield', link: '/components/textfield/' },
              ],
            },
            {
              text: 'Feedback',
              collapsible: true,
              items: [{ text: 'Alert', link: '/components/alert/' }],
            },
            {
              text: 'Layout',
              collapsible: true,
              items: [
                { text: 'Box', link: '/components/box/' },
                {
                  text: 'Expandable',
                  link: '/components/expandable/',
                },
              ],
            },
            {
              text: 'Navigation',
              collapsible: true,
              items: [
                {
                  text: 'Breadcrumbs',
                  link: '/components/breadcrumbs/',
                },
              ],
            },
          ],
        },
        {
          text: 'Guidelines',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'Data vizualisation',
              collapsible: true,
              items: [
                {
                  text: 'Getting Started',
                  link: '/guidelines/data-visualization/getting-started/',
                },
                {
                  text: 'Color Usage',
                  link: '/guidelines/data-visualization/color-usage/',
                },
                {
                  text: 'Chart types',
                  link: '/guidelines/data-visualization/chart-types/',
                },
                {
                  text: 'Best Practices',
                  link: '/guidelines/data-visualization/best-practices/',
                },
              ],
            },
          ],
        },
      ],
    },
  },
});
