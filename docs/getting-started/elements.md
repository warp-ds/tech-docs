## Installation

The Warp Elements package can be installed from NPM.
`alpha` versions of @warp-ds packages should be installed until major versions are available.

### with npm: 
```shell
npm install @warp-ds/elements@alpha
```

### with pnpm
```shell
pnpm add @warp-ds/elements@alpha
```

## Using Components

Once installed, components can be used in your HTML markup.

```js
<f-breadcrumbs class="mt-10">
  <a href="#/url/1">Eiendom</a>
  <a href="#/url/2">Bolig til salgs</a>
  <a href="#/url/3" aria-current="page"> Oslo </a>
</f-breadcrumbs>
```

### Importing from the NPM package
👉 _**This is the most common method and should be used in most cases**_ 

When importing from NPM you will need to ensure you have build tooling in place. If you are working with Podium podlets or layouts, you likely already have Eik in place with Rollup or Esbuild, in which case no further action should be needed.
Example
```
import '@warp-ds/elements';
```
