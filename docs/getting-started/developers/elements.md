## Installation

The Warp Elements package can be installed from NPM.

```shell
npm install @warp-ds/elements
```

## Setup

Since warp components are internationalised, you'd need to either set `NMP_LANGUAGE` for server-side rendering of the component, or set html document lang with a two-letter-code, eg: `<html lang="en">`. The server-side variable is read as `process.env.NMP_LANGUAGE` so you could either define this in your package.json script, or use `.env` files to leverage [dotenv](https://github.com/motdotla/dotenv).


## Using Components

Once installed, components can be imported into your app like so:

```js
import '@warp-ds/elements';
```
> When importing from NPM you will need to ensure you have build tooling in place. If you are working with Podium podlets or layouts, you likely already have Eik in place with Rollup or Esbuild, in which case no further action should be needed.

You can also import them individually to optimize your JS bundle size by adding only the components you need:

```js
import '@warp-ds/elements/components/breadcrumbs'
```

Then they can be used in your HTML markup.

```html
<w-breadcrumbs>
  <a href="/url/1">Page 1</a>
  <a href="/url/2">Page 2</a>
  <span aria-current="page">Page 3</span>
</w-breadcrumbs>
```

## Eik support
We publish `@warp-ds/elements` package to EIK cdn, eg:
```
https://assets.finn.no/pkg/@warp-ds/elements/v1/index.js
```

### Import mapping

We publish a Warp import map for use with Eik. Be sure to include the Lit import map first.

```json
{
	"name": "my-app",
	"version": "1.0.0",
	"server": "https://assets.finn.no",
	"import-map": [
		"https://assets.finn.no/map/lit/v3",
		"https://assets.finn.no/map/warp/v2"
	]
}
```