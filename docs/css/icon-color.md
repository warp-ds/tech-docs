> Iconography

# Icon Color

Utilities for controlling the icon color.

::: tip s-prefix
The `s-` (semantic) prefix signals that the color value of these will change with the brand css.
:::

## Quick reference

<icon-color-table />

## Basic usage

### Setting the icon color
Control the color of an icon using the `s-icon-{semantic color}` utilities specified in the table above.

<example-container>
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <icon-star-full-32 class="s-icon text-xxl h-64 w-64" />
    <icon-star-full-32 class="s-icon-primary text-xxl h-64 w-64" />
    <icon-star-full-32 class="s-icon-positive text-xxl h-64 w-64" />
    <icon-star-full-32 class="s-icon-warning text-xxl h-64 w-64" />
  </div>
</example-container>

```html
<icon-star-full-32 class="s-icon ..." />
<icon-star-full-32 class="s-icon-primary ..." />
<icon-star-full-32 class="s-icon-positive ..." />
<icon-star-full-32 class="s-icon-warning ..." />
```

### Arbitrary values
If you need to use a one-off `icon-{color}` value, use the text utility class with square brackets to set the `color` css property.
We recommend only using our semantic color tokens for this.

```html
<p class="text-[--w-s-color-border]"></p>
```

### Opacity
It is possible to control the opacity of the icon color by adding an optional alpha modifier.
The modifier accepts any integer percentage value between 0 and 100.
This works for the semantic icon classes, and you can also use the arbitrary text classes with any primitive `--w-{color}` or semantic `--w-s-color-{name}` css variable.

::: warning Warning
Please be advised that by using primitive variables you will lose theming possibilities, therefor we highly recommend only using semantic classes and tokens.

The examples below are inaccessible and purely for technical reference.
Always make sure to have sufficient contrast.
:::

<example-container class="bg-center bg-[url(./50s-scientists.jpg)]">
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div class="s-icon/60 hover:s-icon/100 transition-colors ease-in-out duration-700 text-xxl font-bold backdrop-blur-s s-bg/20 p-16 rounded-16"><icon-star-full-32 class="h-64 w-64" /></div>
    <div class="s-icon-primary/60 hover:s-icon-primary/100 transition-colors ease-in-out duration-700 text-xxl font-bold backdrop-blur-s s-bg/20 p-16 rounded-16"><icon-star-full-32 class="h-64 w-64" /></div>
    <div class="text-[--w-s-color-text-positive/60] hover:text-[--w-s-color-text-positive/100] transition-colors ease-in-out duration-700 text-xxl font-bold backdrop-blur-s s-bg/20 p-16 rounded-16"><icon-star-full-32 class="h-64 w-64" /></div>
    <div class="text-[var(--w-black)/50] hover:text-[var(--w-black)/100] transition-colors ease-in-out duration-700 text-xxl font-bold backdrop-blur-s s-bg/20 p-16 rounded-16"><icon-star-full-32 class="h-64 w-64" /></div>
  </div>
</example-container>

```html
<icon-star-full-32 class="s-icon/60 hover:s-icon/100 ..." />
<icon-star-full-32 class="s-icon-primary/60 hover:s-icon-primary/100 ... ..." />
<icon-star-full-32 class="text-[--w-s-color-text-positive/60] hover:text-[--w-s-color-text-positive/100] ..." />
<icon-star-full-32 class="text-[var(--w-black)/50] hover:text-[var(--w-black)/100] ..." />
```
