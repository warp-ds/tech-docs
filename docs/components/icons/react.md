### Import

Import React icons individually to optimize your JS bundle size by adding only the icons you need:

```js
import IconBag16 from '@warp-ds/icons/react/bag-16';
```

Don't import icons directly from the `@warp-ds/icons/react` package, since this will add every Warp icon, and bloat your bundle.

### Syntax

```jsx
<IconBag16 />
```

Check out exact imports below in our Examples section

### Colors
The color of the icon will default to `currentColor`.
Colors can be changed using [semantic color classes for icons](/classes/icon-color#icon-color).
