### Import

```js
import { IconBag16 } from '@warp-ds/icons/react';
```

### Syntax

```jsx
<IconBag16 />
```

### Colors
The color of the icon will default to `currentColor`.
Colors can be changed using [semantic color classes for icons](https://warp-ds.github.io/css-docs/icon-color#icon-color).

### Typescript support

You can define an 'icons.d.ts' file in your repo and export the types bundled with the package for the correct namespace. Eg for React:

```
declare module '@warp-ds/icons/react' {
    export * from '@warp-ds/icons/dist/react/index.d.ts'
}
```
