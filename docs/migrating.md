# Migrating from Fabric

## CSS changes

While Warp maintains as much backward-compatibility as possible,
some breaking changes were necessary or justified.

### Migration plugin

There is a plugin available that will detect all deprecated CSS classes and provide warnings with useful hints.

#### Install the plugin

```shell
pnpm add -D @warp-ds/preset-migrate
```

#### Use the plugin in your Uno config

```js
import { defineConfig } from 'unocss'
import { presetWarp } from '@warp-ds/uno'
import { presetMigrate } from '@warp-ds/preset-migrate'

export default defineConfig({
  presets: [
    presetMigrate(),
    presetWarp()
  ]
})
```

## Component changes

### Validation messages

In Fabric, both hints and errors would be displayed at the same time, and were concatenated with a `,`.

For example, when the hint was "Please fill out your 11-digit SSN"; and the error was "This field must be filled out".

> This field must be filled out, Please fill out your 11-digit SSN

This was suboptimal because it required managing of capitalization, and also messages could become quite long and at times unclear to the user.

In Warp, errors will show when the field is invalid, otherwise the hint will show. This means your errors may need editing to ensure they are clear to the user.

Using the previous example's error as an example, it should be rewritten (f.ex) as

> This field must be filled out with your 11-digit SSN

and the hint can remain the same.
