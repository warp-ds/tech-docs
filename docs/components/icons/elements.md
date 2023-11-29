#### Import Elements icons

Import elements icons once to use them in the entire app.
Once imported, run your script through whatever bundling process your app uses (Rollup, Esbuild, etc) after which the component can be used in the page.

```js
import '@warp-ds/icons/elements';
```

```html
<w-icon-attachment-16></w-icon-attachment-16>
<w-icon-attachment-24></w-icon-attachment-24>
```

Or import individual icons:
```js
import "@warp-ds/icons/elements/alert-16";
```

```html
<w-icon-alert-16></w-icon-alert-16>
```

### Syntax

```html
<w-icon-bag-16></w-icon-bag-16>
```

Check out exact imports below in our Examples section

### Colors
The color of the icon will default to `currentColor`.
Colors can be changed using [semantic color classes for icons](https://warp-ds.github.io/css-docs/icon-color#icon-color).

### Fabric to WARP

We have changed the naming for these icons, so the old icons in Fabric were `f-icon-bag16` while the new icons in WARP is named as `w-icon-bag-16`
