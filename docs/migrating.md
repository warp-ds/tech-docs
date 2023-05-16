# Migrating from Fabric

## CSS changes

While Warp maintains as much backward-compatibility as possible from Fabric,
some breaking changes were necessary or justified.

### How to migrate
1. Make sure to install warp to your project. Follow the instructions on [getting started](https://warp-ds.github.io/tech-docs/getting-started/)
2. Remove Fabric as a dependency from your project
3. Remove any mentions of Fabric, e.g. `fabric.css`
4. Change the prefixes `f-` to `w-` for your component names. The icons should still use the `f-` prefix. Use the [migration plugin](https://warp-ds.github.io/tech-docs/getting-started/#migration-plugin) to help with this (see further down this page for further instructions on using the plugin)

Don't include Fabric and Warp in the same context, instead use either one of them to avoid conflicts, overlapping styles and unintended visual inconsistencies.
If it is necessary to include both libraries, it is recommended to encapsulate one of them within a shadow DOM to prevent conflicts and ensure proper isolation.

### Icons
Warp does not currently support icons. Until Warp icons being available, continue import the icons from Fabric.

### Migration plugin

The migration plugin is available to use to detect all deprecated CSS classes and provide warnings with useful hints.

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

#### Output
The output provides a description of the necessary changes or removals required when migrating from Fabric to Warp. The process requires to be done manually, so make sure that these modifications are applied to all relevant class names and component names.

```js
[REPLACED] flex-shrink -> use shrink
[REPLACED] flex-grow -> use grow
[REPLACED] last-child:mb-0 -> use last:mb-0
[REMOVED] button -> use Warp button component instead
[REMOVED] button--primary -> use Warp button component instead
[REMOVED] button--small -> use Warp button component instead
```
Look in the [CSS docs](https://warp-ds.github.io/css-docs/) to find the correct class names, and in [Tech docs](https://warp-ds.github.io/tech-docs/) for the component names. 

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
