import { defineConfig } from 'vitepress';
import { presetDocs } from '@warp-ds/preset-docs';
import { presetWarp } from '@warp-ds/uno';
import uno from 'unocss/vite';
import { classes } from '@warp-ds/css/component-classes/classes';
import { supported } from '../supported.js';

const base = '/tech-docs';

const pdColorClasses = ['blue', 'cyan', 'fuchsia', 'indigo', 'pink', 'purple', 'sky', 'violet'].reduce(
  (colorResult, color) => [
    ...colorResult,
    ...['bg','border'].reduce(
      (partResult, part) => [
        ...partResult,
        [100,200,300,400,500,600,700,800,900].map((value) => `pd-${part}-${color}-${value}`)
      ],
      []
    )
  ],
  []
)

// Classes of documentation-related elements used within Warp component examples
// These classes are for styling our docs within the shadow DOM
// if you add a class somewhere in code, and it doesn't work, add that class here (no time to explain)
const docsClasses = [
  'aspect-square', 'aspect-1/1', 'aspect-2/1',
  'bg-[url(/tech-docs/classes/50s-scientists.jpg)]', 'bg-[url(/tech-docs/classes/office-warping.png)]', 'bg-[url(/tech-docs/classes/50s-scientists_240.jpg)]', 'bg-[url(/tech-docs/classes/repeatable.png)]', 'bg-[url(/tech-docs/classes/20s-scientists.jpg)]',
  'bg-[--vp-c-bg-soft]', 'bg-[--w-s-color-border]', 'bg-[--tw-pink-fg]',
  'bg-[--w-s-color-background-positive/40]', 'hover:bg-[--w-s-color-background-positive/100]', 'bg-[var(--w-black)/70]', 'hover:bg-[var(--w-black)/100]',
  'border-x-[--w-s-color-background-positive/60]', 'hover:border-x-[--w-s-color-background-positive/100]',
  'border-y-[var(--w-black)/40]', 'hover:border-y-[var(--w-black)/100]',
  'bottom-[26]',
  'before:content-[\'Before\']', 'after:content-[\'after\']', 'before:content-[\'Hello_World\']', 'before:content-[\'Hello\\_World\']', 'before:content-empty',
  'duration-700',
  'sm:flex-row',
  'font-bold',
  'sm:gap-16',
  'sm:grid',
  'sm:grid-cols-3',
  'grid-cols-minmax-100px', 'grid-cols-[1fr_2.4rem_1fr_2.4rem_1fr]', 'grid-cols-[1fr_1fr_1fr]', 'grid-rows-[1fr_3fr_1fr]',
  'grid-cols-minmax-100px', 'grid-cols-[1fr_2.4rem_1fr_2.4rem_1fr]', 'grid-cols-[1fr_1fr_1fr]', 'grid-rows-[1fr_3fr_1fr]',
  'h-[7]', 'h-[200]', 'h-[240]', 'before:h-14',
  'before:inline-block',
  'sm:justify-around',
  'leading-[120]',
  '-m-1', '-m-[19]', '-ml-48', '-my-32', '-mx-8', '-mt-16', '-mb-48',
  'max-w-screen-xl', 'max-w-[300]', 'max-w-[400]',
  'p-0!',
  'right-[26]',
  '-rotate-90',
  's-bg/10', 's-bg/20', 's-bg/50', 's-bg/60', 's-bg/80', 'hover:s-bg/100', 'hover:s-bg-hover', 'active:s-bg-active',
  's-bg-primary/10', 's-bg-primary/50', 'hover:s-bg-primary/100',
  's-bg-positive/10',
  's-bg-negative/10',
  's-bg-warning', 'hover:s-bg-warning-hover', 'active:s-bg-warning-active',
  's-bg-info', 'hover:s-bg-info-hover', 'active:s-bg-info-active',
  's-border/50', 'hover:s-border/100',
  's-border-t-primary/55', 'hover:s-border-t-primary/100',
  's-icon/60', 'hover:s-icon/100', 's-icon-primary/60', 'hover:s-icon-primary/100',
  's-text/60', 'hover:s-text/100', 's-text-link/50', 'hover:s-text-link/100', 'text-[--w-s-color-text-positive/60]', 'hover:text-[--w-s-color-text-positive/100]', 'text-[var(--w-black)/50]', 'hover:text-[var(--w-black)/100]', 'hover:s-text-positive', 'md:s-text-positive',
  '-space-x-24',
  'text-12', 'text-14',
  'text-right!',
  'transition-colors',
  'translate-x-1', '-translate-x-1', 'translate-y-1', '-translate-y-1', '-translate-y-[3]', '-translate-x-[3]',
  'w-[400]', 'before:w-14',
  '[--w-prefix-width:56px]',
  'last:ml-auto!',
  'md:block', 'md:hidden', 'md:s-border-positive',
  'group-hover:visible',

  // presetDocs:
  'ex-box', 'ex-inner-box', 'ex-font', 'ex-pic-no',
  ...pdColorClasses,
  'pd-border-white/50',
  'pd-bg-white',
  'before:pd-bg-pink-500',
  'pd-font-mono',
  'pd-shadow-sm', 'pd-shadow-md', 'pd-shadow-lg', 'pd-shadow-xl',
  'pd-text-sm', 'pd-text-xs',
  'pd-text-black', 'pd-text-white', 'pd-text-slate-500', 'pd-text-slate-800', 'pd-text-slate-900', 'pd-text-indigo-600',
  'before:pd-text-indigo-400', 'after:pd-text-indigo-400',
];

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
        isCustomElement: (tag) => /(-example|-color-table|example-container)$/.test(tag),
      },
    },
  },
  vite: {
    plugins: [
      uno({
        presets: [presetWarp(), presetDocs()],
        mode: 'shadow-dom',
        shortcuts: [{
          'ex-font': 'pd-text-sm font-bold pd-font-mono pd-text-white',
          'ex-box': 'ex-font p-24 rounded pd-shadow-xl flex items-center justify-center',
          'ex-inner-box': 'p-24 rounded pd-shadow-xl mx-auto pd-bg-white pd-text-slate-500 max-w-[300]',
          'ex-pic-no': 'absolute top-10 left-10 h-32 w-32 text-center pd-bg-white rounded-full pd-text-slate-800 leading-[32]',
        }],
        safelist: [...classes, ...supported, ...docsClasses],
      }),
      // uno({
      //   presets: [presetWarp({ skipResets: true }), presetDocs()],
      //   shortcuts: [{
      //     'ex-font': 'pd-text-sm font-bold pd-font-mono pd-text-white',
      //     'ex-box': 'ex-font p-24 rounded-4 pd-shadow-xl flex items-center justify-center',
      //   }],
      //   safelist: supported,
      // }),
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
                { text: 'UnoCSS - what\'s that?', link: '/classes/unocss' },
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
