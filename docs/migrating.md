# Migrating from Fabric

## CSS changes

While Warp maintains as much backward-compatibility as possible,
some breaking changes were necessary or justified.

### Migration plugin

There is a plugin available that will detect all deprecated CSS classes and provide warnings with useful hints.

#### Install the plugin

```shell
pnpm add -D @warp-ds/migrate
```

#### Use the plugin in your Uno config

```js
import { defineConfig } from 'unocss'
import { presetWarp } from '@warp-ds/uno'
import { presetMigrate } from '@warp-ds/migrate'

export default defineConfig({
  presets: [
    presetMigrate(),
    presetWarp()
  ]
})
```
