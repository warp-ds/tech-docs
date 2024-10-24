import { defineConfig } from 'vitepress';
import { presetDocs } from '@warp-ds/preset-docs';
import { presetWarp } from '@warp-ds/uno';
import uno from 'unocss/vite';
import { classes as componentClasses } from '@warp-ds/css/component-classes/classes';
import { supported as supportedClasses } from '../supported.js';

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
  'bg-[url(./20s-scientists.jpg)]',
  'bg-[url(./50s-scientists.jpg)]',
  'bg-[url(./50s-scientists_240.jpg)]',
  'bg-[url(./office-warping.png)]',
  'bg-[url(./repeatable.png)]',
  'bg-[--vp-c-bg-soft]', 'bg-[--w-s-color-border]', 'bg-[--tw-pink-fg]', 'bg-[--vp-c-bg-alt]',
  'bg-[--w-s-color-background-positive/40]', 'hover:bg-[--w-s-color-background-positive/100]', 'bg-[var(--w-black)/70]', 'hover:bg-[var(--w-black)/100]',
  'border-x-[--w-s-color-background-positive/60]', 'hover:border-x-[--w-s-color-background-positive/100]',
  'border-y-[var(--w-black)/40]', 'hover:border-y-[var(--w-black)/100]',
  'bottom-[26]',
  'before:content-[\'Before\']', 'after:content-[\'after\']', 'before:content-[\'Hello_World\']', 'before:content-[\'Hello\\_World\']', 'before:content-empty',
  'divide-y-[--w-white/60]',
  'sm:flex-row',
  'font-bold',
  'sm:gap-16', 'sm:gap-32',
  'sm:grid', 'sm:grid-cols-3', 'sm:grid-cols-2',
  'grid-cols-minmax-100px', 'grid-cols-[1fr_2.4rem_1fr_2.4rem_1fr]', 'grid-cols-[1fr_1fr_1fr]', 'grid-rows-[1fr_3fr_1fr]', 'grid-cols-[repeat(2,64px)]', 'md:grid-cols-4',
  'h-[7]', 'h-[200]', 'h-[240]', 'before:h-14',
  'before:inline-block',
  'sm:justify-around',
  'leading-[120]',
  '-m-1', '-m-[19]', '-ml-48', '-my-32', '-mx-8', '-mt-16', '-mb-48',
  'max-w-[300]', 'max-w-[344]', 'max-w-[400]',
  'outline-[--w-s-color-background-positive/40]', 'hover:outline-[--w-s-color-background-positive/100]', 'outline-[--w-black/40]', 'hover:outline-[--w-black/100]',
  'p-0!',
  'right-[26]',
  '-rotate-90',
  'rounded-tl-16',
  's-bg/10', 's-bg/20', 's-bg/50', 's-bg/60', 's-bg/80', 'hover:s-bg/100', 'hover:s-bg-hover', 'active:s-bg-active',
  's-bg-primary/10', 's-bg-primary/50', 'hover:s-bg-primary/100',
  's-bg-positive/10', 'md:s-bg-positive',
  's-bg-negative/10',
  's-bg-warning', 'hover:s-bg-warning-hover', 'active:s-bg-warning-active',
  's-bg-info', 'hover:s-bg-info-hover', 'active:s-bg-info-active',
  'selection:s-bg-positive',
  's-border/50', 'hover:s-border/100',
  's-border-t-primary/55', 'hover:s-border-t-primary/100',
  's-divide-x-primary', 's-divide-x-primary-subtle/60',
  's-icon/60', 'hover:s-icon/100', 's-icon-primary/60', 'hover:s-icon-primary/100',
  's-outline/50', 'hover:s-outline/100', 's-outline-focus/50', 'hover:s-outline-focus/100', 'hover:s-outline-hover', 'md:s-outline-positive',
  's-text/60', 'hover:s-text/100', 's-text-link/50', 'hover:s-text-link/100', 'text-[--w-s-color-text-positive/60]', 'hover:text-[--w-s-color-text-positive/100]', 'text-[var(--w-black)/50]', 'hover:text-[var(--w-black)/100]', 'hover:s-text-positive', 'md:s-text-positive',
  'marker:s-text-negative', 'marker:s-text-positive',
  'hover:scale-110', 'hover:scale-125',
  'skew-y-0', 'skew-x-8', 'skew-y-6', 'skew-y-12',
  '-space-x-24',
  'text-12', 'text-14',
  'text-right!',
  'text-[--vp-c-text-1]',
  'group-hover:translate-x-144', 'translate-x-32', 'translate-y-32', '-translate-y-32',
  'translate-x-1', '-translate-x-1', 'translate-y-1', '-translate-y-1', '-translate-y-[3]', '-translate-x-[3]', 'hover:-translate-y-1',
  'w-[200]', 'w-[300]', 'w-[400]', 'before:w-14',
  '[--w-prefix-width:56px]', '[--spinner-size:16px]', '[--spinner-size:32px]',
  'last:ml-auto!',
  'md:block', 'md:hidden', 'md:s-border-positive',
  'group-hover:visible',

  // presetDocs:
  'ex-box', 'ex-inner-box', 'ex-font', 'ex-font-dark', 'ex-pic-no',
  ...pdColorClasses,
  'pd-border-white', 'pd-border-white/50',
  'pd-bg-white', 'hover:pd-bg-indigo-600', 'hover:pd-bg-indigo-700',
  'before:pd-bg-pink-500',
  'pd-font-mono',
  'pd-shadow-sm', 'pd-shadow-md', 'pd-shadow-lg', 'pd-shadow-xl',
  'pd-text-sm', 'pd-text-xs',
  'pd-text-black', 'pd-text-white', 'pd-text-slate-500', 'pd-text-slate-800', 'pd-text-slate-900', 'pd-text-indigo-600',
  'before:pd-text-indigo-400', 'after:pd-text-indigo-400',
];

export default defineConfig({
  lang: 'en',
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
          'ex-font-dark': 'pd-text-sm font-bold pd-font-mono pd-text-slate-900',
          'ex-box': 'ex-font p-24 rounded pd-shadow-xl flex items-center justify-center',
          'ex-inner-box': 'p-24 rounded pd-shadow-xl mx-auto pd-bg-white pd-text-slate-500 max-w-[300]',
          'ex-pic-no': 'absolute top-10 left-10 h-32 w-32 text-center pd-bg-white rounded-full pd-text-slate-800 leading-[32]',
        }],
        safelist: [...componentClasses, ...supportedClasses, ...docsClasses],
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
        href: 'https://assets.finn.no/pkg/@warp-ds/fonts/v1/dba-dk.css',
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
        href: 'https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/finn-no.css',
      },
    ],
    [
      'meta',
      {
        'http-equiv': 'refresh',
        content: '0;url=https://warp-ds.github.io/docs/',
      }
    ]
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
          text: 'CSS',
          collapsed: true,
          items: [
            {
              text: 'Introduction',
              collapsed: true,
              items: [
                { text: 'UnoCSS - what\'s that?', link: '/css/unocss' },
                { text: 'Class Variants', link: '/css/class-variants' },
                { text: 'Hover, Focus and other states', link: '/css/states' },
                { text: 'Helper classes', link: '/css/helpers' },
              ],
            },
            {
              text: 'Layout',
              collapsed: true,
              items: [
                { text: 'Aspect Ratio', link: '/css/aspect-ratio' },
                { text: 'Columns', link: '/css/columns' },
                { text: 'Break After', link: '/css/break-after' },
                { text: 'Break Before', link: '/css/break-before' },
                { text: 'Break Inside', link: '/css/break-inside' },
                { text: 'Box Sizing', link: '/css/box-sizing' },
                { text: 'Display', link: '/css/display' },
                { text: 'Floats', link: '/css/floats' },
                { text: 'Clear', link: '/css/clear' },
                { text: 'Isolate', link: '/css/isolate' },
                { text: 'Object Fit', link: '/css/object-fit' },
                { text: 'Object Position', link: '/css/object-position' },
                { text: 'Overflow', link: '/css/overflow' },
                { text: 'Overscroll', link: '/css/overscroll' },
                { text: 'Position', link: '/css/position' },
                {
                  text: 'Top / Right / Bottom / Left',
                  link: '/css/top-right-bottom-left',
                },
                { text: 'Visibility', link: '/css/visibility' },
                { text: 'Z-Index', link: '/css/z-index' },
              ],
            },
            {
              text: 'Sizing',
              collapsed: true,
              items: [
                { text: 'Width', link: '/css/width' },
                { text: 'Min-Width', link: '/css/min-width' },
                { text: 'Max-Width', link: '/css/max-width' },
                { text: 'Height', link: '/css/height' },
                { text: 'Min-Height', link: '/css/min-height' },
                { text: 'Max-Height', link: '/css/max-height' },
              ],
            },
            {
              text: 'Typography',
              collapsed: true,
              items: [
                { text: 'Font Size', link: '/css/font-size' },
                { text: 'Font Style', link: '/css/font-style' },
                { text: 'Font Weight', link: '/css/font-weight' },
                {
                  text: 'Font Variant Numeric',
                  link: '/css/font-variant-numeric',
                },
                { text: 'Line Height', link: '/css/line-height' },
                { text: 'List Style Position', link: '/css/list-style-position' },
                { text: 'List Style Type', link: '/css/list-style-type' },
                { text: 'Text Align', link: '/css/text-align' },
                { text: 'Text Color', link: '/css/text-color' },
                { text: 'Text Decoration', link: '/css/text-decoration' },
                { text: 'Text Transform', link: '/css/text-transform' },
                { text: 'Text Overflow', link: '/css/text-overflow' },
                { text: 'Vertical Align', link: '/css/vertical-align' },
                { text: 'Whitespace', link: '/css/whitespace' },
                { text: 'Word Break', link: '/css/word-break' },
                { text: 'Content', link: '/css/content' },
              ],
            },
            {
              text: 'Iconography',
              collapsed: true,
              items: [
                { text: 'Icon Color', link: '/css/icon-color' },
              ],
            },
            {
              text: 'Backgrounds',
              collapsed: true,
              items: [
                {
                  text: 'Background Attachment',
                  link: '/css/background-attachment',
                },
                { text: 'Background Clip', link: '/css/background-clip' },
                { text: 'Background Color', link: '/css/background-color' },
                { text: 'Background Origin', link: '/css/background-origin' },
                {
                  text: 'Background Position',
                  link: '/css/background-position',
                },
                { text: 'Background Repeat', link: '/css/background-repeat' },
                { text: 'Background Size', link: '/css/background-size' },
                { text: 'Background Image', link: '/css/background-image' },
              ],
            },
            {
              text: 'Spacing',
              collapsed: true,
              items: [
                { text: 'Padding', link: '/css/padding' },
                { text: 'Margin', link: '/css/margin' },
                { text: 'Space between', link: '/css/space-between' },
              ],
            },
            {
              text: 'Flexbox & Grid',
              collapsed: true,
              items: [
                { text: 'Flex', link: '/css/flex' },
                { text: 'Flex Basis', link: '/css/flex-basis' },
                { text: 'Flex Direction', link: '/css/flex-direction' },
                { text: 'Flex Grow', link: '/css/flex-grow' },
                { text: 'Flex Shrink', link: '/css/flex-shrink' },
                { text: 'Flex Wrap', link: '/css/flex-wrap' },
                { text: 'Order', link: '/css/order' },
                {
                  text: 'Grid Template Columns',
                  link: '/css/grid-template-columns',
                },
                {
                  text: 'Grid Column Start / End',
                  link: '/css/grid-column-se',
                },
                {
                  text: 'Grid Template Rows',
                  link: '/css/grid-template-rows',
                },
                { text: 'Grid Row Start / End', link: '/css/grid-row-se' },
                { text: 'Grid Auto Flow', link: '/css/grid-auto-flow' },
                { text: 'Grid Auto Columns', link: '/css/grid-auto-columns' },
                { text: 'Grid Auto Rows', link: '/css/grid-auto-rows' },
                { text: 'Gap', link: '/css/gap' },
                { text: 'Justify Content', link: '/css/justify-content' },
                { text: 'Justify Items', link: '/css/justify-items' },
                { text: 'Justify Self', link: '/css/justify-self' },
                { text: 'Align Content', link: '/css/align-content' },
                { text: 'Align Items', link: '/css/align-items' },
                { text: 'Align Self', link: '/css/align-self' },
                { text: 'Place Content', link: '/css/place-content' },
                { text: 'Place Items', link: '/css/place-items' },
                { text: 'Place Self', link: '/css/place-self' },
              ],
            },
            {
              text: 'Border',
              collapsed: true,
              items: [
                { text: 'Border Radius', link: '/css/border-radius' },
                { text: 'Border Width', link: '/css/border-width' },
                { text: 'Border Color', link: '/css/border-color' },
                { text: 'Border Style', link: '/css/border-style' },
                { text: 'Divide Width', link: '/css/divide-width' },
                { text: 'Divide Color', link: '/css/divide-color' },
                { text: 'Divide Style', link: '/css/divide-style' },
                { text: 'Outline Style', link: '/css/outline-style' },
                { text: 'Outline Width', link: '/css/outline-width' },
                { text: 'Outline Color', link: '/css/outline-color' },
                { text: 'Outline Offset', link: '/css/outline-offset' },
              ],
            },
            {
              text: 'Effects',
              collapsed: true,
              items: [
                { text: 'Box Shadow', link: '/css/box-shadow' },
                { text: 'Drop Shadow', link: '/css/drop-shadow' },
                { text: 'Opacity', link: '/css/opacity' },
              ],
            },        {
              text: 'Filters',
              collapsed: true,
              items: [
                { text: 'Backdrop Blur', link: '/css/backdrop-blur' },
              ],
            },
            {
              text: 'Tables',
              collapsed: true,
              items: [
                { text: 'Border Collapse', link: '/css/border-collapse' },
                { text: 'Border Spacing', link: '/css/border-spacing' },
                { text: 'Table Layout', link: '/css/table-layout' },
              ],
            },
            {
              text: 'Transitions & Animation',
              collapsed: true,
              items: [
                {
                  text: 'Transition Property',
                  link: '/css/transition-property',
                },
                {
                  text: 'Transition Duration',
                  link: '/css/transition-duration',
                },
                {
                  text: 'Transition Timing',
                  link: '/css/transition-timing',
                },
                {
                  text: 'Transition Delay',
                  link: '/css/transition-delay',
                },
                {
                  text: 'Animation',
                  link: '/css/animation',
                },
              ],
            },
            {
              text: 'Transforms',
              collapsed: true,
              items: [
                { text: 'Scale', link: '/css/scale' },
                { text: 'Rotate', link: '/css/rotate' },
                { text: 'Translate', link: '/css/translate' },
                { text: 'Skew', link: '/css/skew' },
                { text: 'Transform Origin', link: '/css/transform-origin' },
              ],
            },
            {
              text: 'Interactivity',
              collapsed: true,
              items: [
                { text: 'Appearance', link: '/css/appearance' },
                { text: 'Caret', link: '/css/caret' },
                { text: 'Cursor', link: '/css/cursor' },
                { text: 'Pointer Events', link: '/css/pointer-events' },
                { text: 'Resize', link: '/css/resize' },
                { text: 'Scroll Behavior', link: '/css/scroll-behavior' },
                { text: 'Scroll Snap Align', link: '/css/scroll-snap-align' },
                { text: 'Scroll Snap Stop', link: '/css/scroll-snap-stop' },
                { text: 'Scroll Snap Type', link: '/css/scroll-snap-type' },
                { text: 'Touch Action', link: '/css/touch-action' },
                { text: 'User Select', link: '/css/user-select' },
                { text: 'Will Change', link: '/css/will-change' },
              ],
            },
            {
              text: 'Accessibility',
              collapsed: true,
              items: [
                { text: 'Screen Readers', link: '/css/screen-readers' },
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
                  text: 'Callout',
                  link: '/components/callout/',
                },
                {
                  text: 'Modal',
                  link: '/components/modal/',
                },
                {
                  text: 'Spinner',
                  link: '/components/spinner/',
                },
                {
                  text: 'Tooltip',
                  link: '/components/tooltip/',
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
