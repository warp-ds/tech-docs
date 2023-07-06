<script setup>
  import Vue from './vue.md';
  import Elements from './elements.md';
  import React from './react.md';
</script>

# Getting started for developers

This page describes how to get started building an application with Warp components.

If you are migrating from Fabric to Warp, please visit the [Migration page](/migration/developers/).

If you have any questions or need clarification, please don't hesitate to reach out to the Warp team on the #nmp-warp-design-system channel on Slack!

Warp is still a **work in progress**. We kindly ask that you refrain from deploying Warpified Finn apps to production until further notice. Some breaking changes are expected during the summer, and it would be great to have this completed before teams begin merging to the main branch.

For now the primary focus with Warp is to support the existing styling and components that were available in Fabric. Adding new features to Warp is not our current priority.

## 1. Integrate with UnoCSS and Warp

A guide on how to integrate your project with UnoCSS and Warp.

### Build time

#### Installation

`alpha` versions of @warp-ds packages should be installed until major versions are available.

> With npm:

```shell
npm install -D unocss @warp-ds/uno@alpha @warp-ds/component-classes@alpha
```

> With pnpm

```shell
pnpm add -D unocss @warp-ds/uno@alpha @warp-ds/component-classes@alpha
```

#### If you are using Webpack

In addition to the installation of the Warp packages, Webpack based projects should also install `@unocss/webpack`

```shell
pnpm add -D @unocss/webpack
```

See [UnoCSS docs](https://unocss.dev/integrations/webpack) for more information.

---

#### Configuration and setup

When setting up Warp in your project, you can choose to create an `uno.config` file, or you can include the UnoCSS configuration settings directly in the build tool. Below, the two different alternatives are described.

- **Alternative 1: Add a uno.config file**

Create a `uno.config.[js,ts,mjs,mts]` file with the following content. This file will configure UnoCSS with our Warp preset, including a safelist of component classes, which will add styling to Warp components. See all configuration options for `presetWarp` in the [Warp CSS docs](https://warp-ds.github.io/css-docs/plugin-api).

> uno.config.js

```js
import { defineConfig } from 'unocss';
import { presetWarp } from '@warp-ds/uno';
import { classes } from '@warp-ds/component-classes/classes';

export default defineConfig({
  presets: [presetWarp()],
  safelist: classes,
});
```

By default, UnoCSS will automatically look in the root directory of your project for `uno.config.[js,ts,mjs,mts]` or `unocss.config.[js,ts,mjs,mts]`.

#### Add UnoCSS to your build tool

Then add UnoCSS to your build tool

> vite.config.js

```ts
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

export default defineConfig({
  plugins: [UnoCSS()],
});
```

- **Alternative 2: Include UnoCSS directly in the build setup**

You can also specify the configuration file manually and in that case you won't need a separate `uno.config` file.

Below is an example for Vite:

> vite.config.js

```ts
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import { presetWarp } from '@warp-ds/uno';
import { classes } from '@warp-ds/component-classes/classes';

export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [presetWarp()],
      safelist: classes,
    }),
  ],
});
```

For more examples how to configure other building tools, please refer to the [examples](https://github.com/unocss/unocss/tree/main/examples) found in the UnoCSS project. We will eventually have in-depth install guides for frameworks on the golden path.

---

#### Add uno.css to your main entry

Depending on the build tool you have chosen this step can look different. The example below is applicable if you build UnoCSS together with Vite. If
you for example use PostCSS as a build tool you would need to add `@unocss` to the main stylesheet. Please take a look at the [examples](https://github.com/unocss/unocss/tree/main/examples)
and see what is needed to be added in your setup.

> e.g. main.js or main.ts

```js
import 'uno.css';
```

---

### Runtime

UnoCSS also provides a CSS-in-JS runtime module which runs the UnoCSS engine right in the browser. It will detect the DOM changes and generate the styles on the fly. See ['Runtime' section of UnoCSS docs](https://unocss.dev/integrations/runtime#runtime) for more information and examples.

#### Bundler usage

```shell
pnpm install @unocss/runtime @warp-ds/uno
```

```js
import initUnocssRuntime from '@unocss/runtime';
import { presetWarp } from '@warp-ds/uno';

window.__unocss = {
  presets: [presetWarp()],
};

initUnossRuntime();
```

---

### UnoCSS CLI

With the custom configurations in `uno.config.js`, you can also generate styles at build step using UnoCSS's standalone client.
See [UnoCSS CLI](https://unocss.dev/integrations/cli) for more information and examples.

---

### Use with Shadow DOM and Vite

In case of apps using Vite where Warp components are used inside Shadow DOM, the css generated by the UnoCSS plugin needs to be inlined into the Shadow DOM style. See [UnoCSS Vite plugin's shadow-dom mode](https://unocss.dev/integrations/vite#shadow-dom) for more information.

## 2. Apply theme

In order for components to apply your application's theme, a respective theme stylesheet should be added to the document. Theme specific stylesheets are vailable via our Eik CDN server:

- Finn: https://assets.finn.no/pkg/@warp-ds/tokens/v1/finn-no.css
- Tori: https://assets.finn.no/pkg/@warp-ds/tokens/v1/tori-fi.css
- Blocket: https://assets.finn.no/pkg/@warp-ds/tokens/v1/blocket-se.css

Add this to your `index.html`:

```js
<link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/tokens/v1/finn-no.css">
```

## 3. Use Warp components

Select which Warp component library you wish to set up.

<tabs-content> 
  <template v-slot:react>
   <react />
  </template>
  <template v-slot:vue>
    <vue />
  </template>
  <template v-slot:elements>
    <elements />
  </template>
</tabs-content>
