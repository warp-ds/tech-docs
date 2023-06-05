import { defineConfig } from 'vitepress';
import { presetWarp } from '@warp-ds/uno';
import uno from 'unocss/vite';
import { classes } from '@warp-ds/component-classes/classes';

// Classes of documentation-related elements used within Warp component examples
const docsClasses = ['text-12', 'font-bold', 'space-y-24', 'space-x-24','mt-16','w-max','p-24', 'flex', 'ml-12',
'mb-8','py-4', 'py-8', 'px-12','flex','items-center', 'mb-0', 'text-14', 'h-128','w-full','object-cover','absolute',
'top-12','left-12','bg-aqua-200','text-aqua-900','p-4','rounded-4','p-16','font-bold','my-8', 'gap-10', 'w-100'];

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
        isCustomElement: (tag) => tag.includes('-example'),
      },
    },
  },
  vite: {
    plugins: [
      uno({
        presets: [presetWarp({ usePreflight: true })],
        mode: 'shadow-dom',
        safelist: [...classes, ...docsClasses],
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
    socialLinks: [{ icon: 'github', link: 'https://github.com/warp-ds' }],
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
            { text: 'Welcome to Warp', link: '/welcome/' },
          ],
        },
        {
          text: 'Getting started',
          collabsible: true,
          collapsed: true,
          items: [
            { text: 'Developers', link: '/getting-started/developers/' },
            { text: 'Designers', link: '/getting-started/designers/' },
          ],
        },
        {
          text: 'Migration to Warp',
          collabsible: true,
          collapsed: true,
          items: [
            { text: 'Developers guide', link: '/migration/developers/' },
            { text: 'Designers guide', link: '/migration/designers/' },
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
                { text: 'Button Group', link: '/components/buttongroup/' },
                { text: 'Pill', link: '/components/pill/' },
              ],
            },
            {
              text: 'Forms',
              collapsible: true,
              items: [
                { text: 'Checkbox', link: '/components/checkbox/' },
                { text: 'Combobox', link: '/components/combobox/' },
                { text: 'Radio', link: '/components/radio/' },
                { text: 'Radio Buttons', link: '/components/radiobuttons/' },
                { text: 'Select', link: '/components/select/' },
                { text: 'Slider', link: '/components/slider/' },
                { text: 'Switch', link: '/components/switch/' },
                { text: 'Textarea', link: '/components/textarea/' },
                { text: 'Textfield', link: '/components/textfield/' },
              ],
            },
            {
              text: 'Feedback',
              collapsible: true,
              items: [
                { text: 'Alert', link: '/components/alert/' },
                { text: 'Steps', link: '/components/steps/' },
              ],
            },
            {
              text: 'Layout',
              collapsible: true,
              items: [
                { text: 'Box', link: '/components/box/' },
                {
                  text: 'Broadcast',
                  link: '/components/broadcast/',
                },
                { text: 'Card', link: '/components/card/' },
                {
                  text: 'Expandable',
                  link: '/components/expandable/',
                },
                {
                  text: 'Tabs',
                  link: '/components/tabs/',
                },
                {
                  text: 'Toast',
                  link: '/components/toast/',
                },
                {
                  text: 'Utilities',
                  link: '/components/utilities/',
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
            {
              text: 'Overlays',
              collapsible: true,
              items: [
                {
                  text: 'Attention',
                  link: '/components/attention/'
                },
                {
                  text: 'Modal',
                  link: '/components/modal/',
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
            { text: 'Designing with a system', link: '/guidelines/design-system/' },
            {
              text: 'Data vizualisation',
              collapsible: true,
              items: [
                {
                  text: 'Getting Started',
                  link: '/guidelines/data-visualization/getting-started/',
                },
                {
                  text: 'Chart types',
                  link: '/guidelines/data-visualization/chart-types/',
                },
                {
                  text: 'Colour Usage',
                  link: '/guidelines/data-visualization/colour-usage/',
                },
                {
                  text: 'Success criteria',
                  link: '/guidelines/data-visualization/success-criteria/',
                },
              ],
            },
          ],
        },
      ],
    },
  },
});
