import { defineConfig } from 'vitepress';
import { presetDocs } from '@warp-ds/preset-docs';
import { presetWarp } from '@warp-ds/uno';
import uno from 'unocss/vite';
import { classes } from '@warp-ds/css/component-classes/classes';
import { supported } from '../supported.js';

const base = '/tech-docs';

// Classes of documentation-related elements used within Warp component examples
// These classes are for styling our docs within the shadow DOM
// if you add a class somewhere in code and it doesn't work, add that class here (no time to explain)
const docsClasses = ['text-12', 'font-bold', 'space-y-24', 'space-x-24','mt-16','w-max','p-24', 'flex', 'ml-12',
'mb-8','py-4', 'py-8', 'px-12','flex','items-center', 'mb-0', 'text-14', 'h-128','w-full','object-cover','absolute',
'top-12','left-12','p-4','rounded-4','p-16','font-bold','my-8', 'gap-10', 'w-100',
'max-w-screen-xl', 'mx-auto', 'px-32', 's-bg-active', 'rounded-8', 'p-24', 'mb-24', 'grid', 'gap-24', 'mx-auto', 'mb-8',
's-bg', 'rounded-4', 'h-56', 'flex', 'items-center', 'justify-center', 'flex-col', 's-icon', 'grid-cols-minmax-100px',
'last:ml-auto!','[--w-prefix-width:56px]', 'md:block', 'md:hidden', 's-bg-primary', 's-text-inverted', 's-text-link', 'text-display',
't1', 't2', 't3', 't4', 't5', 't6', 'text-preamble', 'text-body', 'text-caption', 'text-detail', 's-bg-inverted', 'text-center', 's-text-negative',
'flex-1'];

export default defineConfig({
  lang: 'en-US',
  title: 'Warp Tech',
  description: 'Documentation for Warp Design System technical platform',
  lastUpdated: false,
  cleanUrls: true,
  base: `${base}/`,
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
  },
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
        presets: [presetWarp()],
        mode: 'shadow-dom',
        safelist: [...classes, ...docsClasses],
      }),
      uno({
        presets: [presetWarp({ skipResets: true }), presetDocs()],
        shortcuts: [{
          'ex-font': 'pd-text-sm font-bold pd-font-mono pd-text-white',
          'ex-box': 'ex-font p-24 rounded-4 pd-shadow-xl flex items-center justify-center',
        }],
        safelist: supported,
      }),
    ],
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: `${base}/warp-logo-small.svg`,
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://assets.finn.no/pkg/@warp-ds/fonts/v1/finn-no.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://assets.finn.no/pkg/@warp-ds/fonts/v1/tori-fi.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://assets.finn.no/pkg/@warp-ds/css/v1/tokens/finn-no.css',
      },
    ],
  ],
  themeConfig: {
    search: { provider: 'local' },
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
          { text: 'React', link: 'https://github.com/warp-ds/react' },
          { text: 'Vue', link: 'https://github.com/warp-ds/vue' },
          { text: 'Elements', link: 'https://github.com/warp-ds/elements' },
        ],
      },
      {
        text: 'What\'s new',
        link: '/blog/',
        activeMatch: '/blog/$',
      },
    ],
    sidebar: {
      '/': [
        {
          items: [
            { text: 'Welcome to Warp', link: '/welcome/' },
          ],
        },
        {
          text: 'Getting started',
          collapsed: true,
          items: [
            { text: 'Developers',
            collapsed: true,
            items: [
              { text: 'Web', link: '/getting-started/developers/' },
              { text: 'Android', link: '/getting-started/android/' },
              { text: 'iOS', link: '/getting-started/ios/' },
            ],
            },
            { text: 'Designers', link: '/getting-started/designers/' },
          ],
        },
        {
          text: 'Migration to Warp',
          collapsed: true,
          items: [
            { text: 'Developers guide', link: '/migration/developers/' },
            { text: 'Designers guide', link: '/migration/designers/' },
          ],
        },
        {
          text: 'Classes',
          collapsed: true,
          items: [
            {
              text: 'Introduction',
              collapsed: true,
              items: [
                { text: 'Class Variants', link: '/classes/class-variants' },
                { text: 'Hover, Focus and other states', link: '/classes/states' },
                { text: 'Helper classes', link: '/classes/helpers' },
              ],
            },
            {
              text: 'Layout',
              collapsed: true,
              items: [
                { text: 'Aspect Ratio', link: '/classes/aspect-ratio' },
                { text: 'Columns', link: '/classes/columns' },
                { text: 'Break After', link: '/classes/break-after' },
                { text: 'Break Before', link: '/classes/break-before' },
                { text: 'Break Inside', link: '/classes/break-inside' },
                { text: 'Box sizing', link: '/classes/box-sizing' },
                { text: 'Display', link: '/classes/display' },
                { text: 'Floats', link: '/classes/floats' },
                { text: 'Clear', link: '/classes/clear' },
                { text: 'Isolate', link: '/classes/isolate' },
                { text: 'Object Fit', link: '/classes/object-fit' },
                { text: 'Object Position', link: '/classes/object-position' },
                { text: 'Overflow', link: '/classes/overflow' },
                { text: 'Overscroll', link: '/classes/overscroll' },
                { text: 'Position', link: '/classes/position' },
                {
                  text: 'Top / Right / Bottom / Left',
                  link: '/classes/top-right-bottom-left',
                },
                { text: 'Visibility', link: '/classes/visibility' },
                { text: 'Z-Index', link: '/classes/z-index' },
              ],
            },
            {
              text: 'Sizing',
              collapsed: true,
              items: [
                { text: 'Width', link: '/classes/width' },
                { text: 'Min-Width', link: '/classes/min-width' },
                { text: 'Max-Width', link: '/classes/max-width' },
                { text: 'Height', link: '/classes/height' },
                { text: 'Min-Height', link: '/classes/min-height' },
                { text: 'Max-Height', link: '/classes/max-height' },
              ],
            },
            {
              text: 'Typography',
              collapsed: true,
              items: [
                { text: 'Font Size', link: '/classes/font-size' },
                { text: 'Font Style', link: '/classes/font-style' },
                { text: 'Font Weight', link: '/classes/font-weight' },
                {
                  text: 'Font Variant Numeric',
                  link: '/classes/font-variant-numeric',
                },
                { text: 'Line Height', link: '/classes/line-height' },
                { text: 'List Style Position', link: '/classes/list-style-position' },
                { text: 'List Style Type', link: '/classes/list-style-type' },
                { text: 'Text Align', link: '/classes/text-align' },
                { text: 'Text Color', link: '/classes/text-color' },
                { text: 'Text Decoration', link: '/classes/text-decoration' },
                { text: 'Text Transform', link: '/classes/text-transform' },
                { text: 'Text Overflow', link: '/classes/text-overflow' },
                { text: 'Vertical Align', link: '/classes/vertical-align' },
                { text: 'Whitespace', link: '/classes/whitespace' },
                { text: 'Word Break', link: '/classes/word-break' },
                { text: 'Content', link: '/classes/content' },
              ],
            },
            {
              text: 'Iconography',
              collapsed: true,
              items: [
                { text: 'Icon Color', link: '/classes/icon-color' },
              ],
            },
            {
              text: 'Backgrounds',
              collapsed: true,
              items: [
                {
                  text: 'Background Attachment',
                  link: '/classes/background-attachment',
                },
                { text: 'Background Clip', link: '/classes/background-clip' },
                { text: 'Background Color', link: '/classes/background-color' },
                { text: 'Background Origin', link: '/classes/background-origin' },
                {
                  text: 'Background Position',
                  link: '/classes/background-position',
                },
                { text: 'Background Repeat', link: '/classes/background-repeat' },
                { text: 'Background Size', link: '/classes/background-size' },
                { text: 'Background Image', link: '/classes/background-image' },
              ],
            },
            {
              text: 'Spacing',
              collapsed: true,
              items: [
                { text: 'Padding', link: '/classes/padding' },
                { text: 'Margin', link: '/classes/margin' },
                { text: 'Space between', link: '/classes/space-between' },
              ],
            },
            {
              text: 'Flexbox & Grid',
              collapsed: true,
              items: [
                { text: 'Flex', link: '/classes/flex' },
                { text: 'Flex Basis', link: '/classes/flex-basis' },
                { text: 'Flex Direction', link: '/classes/flex-direction' },
                { text: 'Flex Grow', link: '/classes/flex-grow' },
                { text: 'Flex Shrink', link: '/classes/flex-shrink' },
                { text: 'Flex Wrap', link: '/classes/flex-wrap' },
                { text: 'Order', link: '/classes/order' },
                {
                  text: 'Grid Template Columns',
                  link: '/classes/grid-template-columns',
                },
                {
                  text: 'Grid Column Start / End',
                  link: '/classes/grid-column-se',
                },
                {
                  text: 'Grid Template Rows',
                  link: '/classes/grid-template-rows',
                },
                { text: 'Grid Row Start / End', link: '/classes/grid-row-se' },
                { text: 'Grid Auto Flow', link: '/classes/grid-auto-flow' },
                { text: 'Grid Auto Columns', link: '/classes/grid-auto-columns' },
                { text: 'Grid Auto Rows', link: '/classes/grid-auto-rows' },
                { text: 'Gap', link: '/classes/gap' },
                { text: 'Justify Content', link: '/classes/justify-content' },
                { text: 'Justify Items', link: '/classes/justify-items' },
                { text: 'Justify Self', link: '/classes/justify-self' },
                { text: 'Align Content', link: '/classes/align-content' },
                { text: 'Align Items', link: '/classes/align-items' },
                { text: 'Align Self', link: '/classes/align-self' },
                { text: 'Place Content', link: '/classes/place-content' },
                { text: 'Place Items', link: '/classes/place-items' },
                { text: 'Place Self', link: '/classes/place-self' },
              ],
            },
            {
              text: 'Border',
              collapsed: true,
              items: [
                { text: 'Border Radius', link: '/classes/border-radius' },
                { text: 'Border Width', link: '/classes/border-width' },
                { text: 'Border Color', link: '/classes/border-color' },
                { text: 'Border Style', link: '/classes/border-style' },
                { text: 'Divide Width', link: '/classes/divide-width' },
                { text: 'Divide Color', link: '/classes/divide-color' },
                { text: 'Divide Style', link: '/classes/divide-style' },
                { text: 'Outline Style', link: '/classes/outline-style' },
                { text: 'Outline Width', link: '/classes/outline-width' },
                { text: 'Outline Color', link: '/classes/outline-color' },
                { text: 'Outline Offset', link: '/classes/outline-offset' },
              ],
            },
            {
              text: 'Effects',
              collapsed: true,
              items: [
                { text: 'Box Shadow', link: '/box-shadow' },
                { text: 'Opacity', link: '/classes/opacity' },
              ],
            },        {
              text: 'Filters',
              collapsed: true,
              items: [
                { text: 'Backdrop Blur', link: '/classes/backdrop-blur' },
              ],
            },
            {
              text: 'Tables',
              collapsed: true,
              items: [
                { text: 'Border Collapse', link: '/classes/border-collapse' },
                { text: 'Border Spacing', link: '/classes/border-spacing' },
                { text: 'Table Layout', link: '/classes/table-layout' },
              ],
            },
            {
              text: 'Transitions & Animation',
              collapsed: true,
              items: [
                {
                  text: 'Transition Property',
                  link: '/classes/transition-property',
                },
                {
                  text: 'Transition Duration',
                  link: '/classes/transition-duration',
                },
                {
                  text: 'Transition Timing',
                  link: '/classes/transition-timing',
                },
                {
                  text: 'Transition Delay',
                  link: '/classes/transition-delay',
                },
                {
                  text: 'Animation',
                  link: '/classes/animation',
                },
              ],
            },
            {
              text: 'Transforms',
              collapsed: true,
              items: [
                { text: 'Scale', link: '/classes/scale' },
                { text: 'Rotate', link: '/classes/rotate' },
                { text: 'Translate', link: '/classes/translate' },
                { text: 'Skew', link: '/classes/skew' },
                { text: 'Transform Origin', link: '/classes/transform-origin' },
              ],
            },
            {
              text: 'Interactivity',
              collapsed: true,
              items: [
                { text: 'Appearance', link: '/classes/appearance' },
                { text: 'Caret', link: '/classes/caret' },
                { text: 'Cursor', link: '/classes/cursor' },
                { text: 'Pointer Events', link: '/classes/pointer-events' },
                { text: 'Resize', link: '/classes/resize' },
                { text: 'Scroll Behavior', link: '/classes/scroll-behavior' },
                { text: 'Scroll Snap Align', link: '/classes/scroll-snap-align' },
                { text: 'Scroll Snap Stop', link: '/classes/scroll-snap-stop' },
                { text: 'Scroll Snap Type', link: '/classes/scroll-snap-type' },
                { text: 'Touch Action', link: '/classes/touch-action' },
                { text: 'User Select', link: '/classes/user-select' },
                { text: 'Will Change', link: '/classes/will-change' },
              ],
            },
            {
              text: 'Accessibility',
              collapsed: true,
              items: [
                { text: 'Screen Readers', link: '/classes/screen-readers' },
              ],
            },
          ],
        },
        {
          text: 'Components',
          collapsed: true,
          items: [
            {
              text: 'Actions',
              collapsed: true,
              items: [
                { text: 'Button', link: '/components/buttons/' },
                { text: 'Button Group', link: '/components/buttongroup/' },
                { text: 'Pill', link: '/components/pill/' },
              ],
            },
            {
              text: 'Forms',
              collapsed: true,
              items: [
                { text: 'Checkbox', link: '/components/checkbox/' },
                { text: 'Combobox', link: '/components/combobox/' },
                { text: 'Radio', link: '/components/radio/' },
                { text: 'Radio Buttons', link: '/components/radiobuttons/' },
                { text: 'Select', link: '/components/select/' },
                { text: 'Slider', link: '/components/slider/' },
                { text: 'Switch', link: '/components/switch/' },
                { text: 'Text Area', link: '/components/textarea/' },
                { text: 'Text Field', link: '/components/textfield/' },
              ],
            },
            {
              text: 'Feedback',
              collapsed: true,
              items: [
                { text: 'Alert', link: '/components/alert/' },
                { text: 'Steps', link: '/components/steps/' },
              ],
            },
            {
              text: "Icons",
              link: "/components/icons/",
            },
            {
              text: 'Layout',
              collapsed: true,
              items: [
                { text: 'Badge', link: '/components/badge/' },
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
                  text: 'Text',
                  link: '/components/text/',
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
              collapsed: true,
              items: [
                {
                  text: 'Breadcrumbs',
                  link: '/components/breadcrumbs/',
                },
                {
                  text: 'Pagination',
                  link: '/components/pagination/',
                },
              ],
            },
            {
              text: 'Overlays',
              collapsed: true,
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
          collapsed: true,
          items: [
            { text: 'Designing with a system', link: '/guidelines/design-system/' },
            { text: 'Building Custom Elements with Warp', link: '/guidelines/custom-elements-warp/' },
            {
              text: 'Data visualisation',
              collapsed: true,
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
        {
          text: 'Collaborate with us',
          collapsed: true,
          items: [
            { text: 'Contribute to Warp', link: '/collaborate/contribute/' },
            { text: 'Join the community ', link: '/collaborate/community/' },
          ],
        },
      ],
    },
  },
});
