### Import

```js
import { IconBag16 } from '@warp-ds/icons/vue';
```

### Syntax

```html
<icon-bag-16 />
```

### Colors

The color of the icon will default to `currentColor`. 
Colors can be changed using [semantic color classes for icons](https://warp-ds.github.io/css-docs/icon-color#icon-color).

### Typescript support

You can define an 'icons.d.ts' file in your repo and export the types bundled with the package for the correct namespace. Eg for Vue:

```
declare module '@warp-ds/icons/vue' {
    export * from '@warp-ds/icons/dist/types/vue'
}
```
