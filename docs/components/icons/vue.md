### Import

Import Vue icons individually to optimize your JS bundle size by adding only the icons you need:

```js
import IconBag16 from '@warp-ds/icons/vue/bag-16';
```

Don't import icons directly from the `@warp-ds/icons/vue` package, since this will add every Warp icon, and bloat your bundle.

### Syntax

```html
<icon-bag-16 />
```

Check out exact imports below in our Examples section

### Colors

The color of the icon will default to `currentColor`. 
Colors can be changed using [semantic color classes for icons](https://warp-ds.github.io/css-docs/icon-color#icon-color).
