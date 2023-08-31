## Installation

The Warp Elements package can be installed from NPM.

```shell
npm install @warp-ds/elements
```

## Using Components

Once installed, components can be imported into your app.

```js
import '@warp-ds/elements';
```
> When importing from NPM you will need to ensure you have build tooling in place. If you are working with Podium podlets or layouts, you likely already have Eik in place with Rollup or Esbuild, in which case no further action should be needed.

Then they can be used in your HTML markup.

```html
<f-breadcrumbs class="mt-10">
  <a href="#/url/1">Eiendom</a>
  <a href="#/url/2">Bolig til salgs</a>
  <a href="#/url/3" aria-current="page"> Oslo </a>
</f-breadcrumbs>
```

