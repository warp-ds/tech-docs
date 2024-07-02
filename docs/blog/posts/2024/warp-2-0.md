---
title: '@warp-ds v2 - DBA Changes Are Here!'
date: 2024-07-02
---

DBA beta changes are now available on NPM and EIK.

---

### How to Update Your Apps for DBA

#### Packages to Install from NPM

| Package Name       | Version        |
| ------------------ | -------------- |
| `@warp-ds/css`     | `2.0.0-next.1` |
| `@warp-ds/drive`   | `2.0.0`        |
| `@warp-ds/react`   | `2.0.0-next.0` |
| `@warp-ds/vue`     | `2.0.0-next.0` |
| `@warp-ds/elements`| `2.0.0-next.0` |

#### Removing Deprecated Tokens

To ensure your apps use only the supported tokens, install `@warp-ds/preset-migrate`:

```bash
npm install -D @warp-ds/preset-migrate
```

Ensure you have version 2.x.x of @warp-ds/preset-migrate.

:::info Reminder
Uninstall the plugin and clean up the configuration once the migration is complete.
:::

Update your uno.config.js as follows:

```js
import { defineConfig } from 'unocss';
import { presetWarp } from '@warp-ds/uno';
import { presetMigrate } from '@warp-ds/preset-migrate';
import { classes } from '@warp-ds/css/component-classes/classes';

export default defineConfig({
  presets: [
        presetWarp({ externalClasses: classes, skipResets: true }), 
        presetMigrate()
    ],
});
```

If you're using vite.config.js, update it like this:

```js
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import { presetWarp } from '@warp-ds/uno';
import { presetMigrate } from '@warp-ds/preset-migrate';
import { classes } from '@warp-ds/css/component-classes/classes';

export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [
        presetWarp({ externalClasses: classes, skipResets: true }),
        presetMigrate()
      ],
    }),
  ],
});
```

#### Using Fonts and Themes for DBA

Add the DBA font to your app similarly to how the tori font was added:

```js
<link
  rel="stylesheet"
  href="https://assets.finn.no/pkg/@warp-ds/fonts/v1/dba-dk.css"
/>
```

<h3>Brand CSS updates</h3>

:::info Note
All tokens should be updated to v2, not just the DBA token.
:::

- DBA: https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/dba-dk.css
- Finn: https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/finn-no.css
- Tori: https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/tori-fi.css

Also, update the resets and component classes:

```js
<link
  rel="stylesheet"
  href="https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css"
/>
<link
  rel="stylesheet"
  href="https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"
/>
```

#### What's next

Since most packages are in the next branch, expect some bugs. Report any issues on the `#nmp-warp-design-system` Slack channel. We’re here to help!
