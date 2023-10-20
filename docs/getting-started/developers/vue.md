## Installation

The Warp Vue package can be installed from NPM.

```shell
npm install @warp-ds/vue
```

## Setup

Since warp components are internationalised, you'd need to either set `NMP_LANGUAGE` for server-side rendering of the component, or set html document lang with a two-letter-code, eg: `<html lang="en">`. The server-side variable is read as `process.env.NMP_LANGUAGE` so you could either define this in your package.json script, or use `.env` files to leverage [dotenv](https://github.com/motdotla/dotenv).


## Using Components

Once installed, components can be imported into your app by name.
You can find the specific import statement to import each component on that
component's documentation page. For example, here's the [button page](/components/buttons/)

### 1. Using in the entire app

```js
import { Box } from '@warp-ds/vue'
app.use(Box)
```

This code is bringing in **an installer** for the Box component, and any additional helper-components (in the case of Box, this would be the Clickable component). It will install the component app-wide, so you never need to import the component again.

### 2. Using in one place, or special exports

```js
import { wBox, wClickable } from '@warp-ds/vue'
```
This code is bringing in the Box and Clickable components themselves, rather than an installer - this is denoted by the `w` prefix of the components. Some edge-case components may be available this way that don't make sense to globally install for everyone.

## Eik support
We publish `@warp-ds/vue` package to EIK cdn, eg:
```
https://assets.finn.no/pkg/@warp-ds/vue/v1/warp-vue.eik.js
```
