> Backgrounds

# Background Color

Utilities for controlling an element's background color.

::: tip s-prefix
The `s-` (semantic) prefix signals that the color value of these will change with the brand css.
:::

## Quick reference

<background-color-table />

## Basic usage

### Setting the background color
Control the background color of an element using the `bg-{transparent|inherit|current}` or `s-bg-{semantic color}` utilities specified in the table above.

<example-container>
  <div class="grid grid-cols-5 gap-16 justify-items-center">
    <div class="h-80 w-80 border rounded-16 s-bg"></div>
    <div class="h-80 w-80 border rounded-16 s-bg-subtle"></div>
    <div class="h-80 w-80 border rounded-16 s-bg-primary"></div>
    <div class="h-80 w-80 border rounded-16 s-bg-positive"></div>
    <div class="h-80 w-80 border rounded-16 s-bg-negative"></div>
  </div>
</example-container>

```html
<div class="s-bg ..."></div>
<div class="s-bg-subtle ..."></div>
<div class="s-bg-primary ..."></div>
<div class="s-bg-positive ..."></div>
<div class="s-bg-negative ..."></div>
```

### Arbitrary values
If you need to use a one-off `bg-{color}` value, use square brackets to generate a property on the fly using any arbitrary value.
However, we recommend only using our semantic color tokens.

```html
<div class="bg-[--w-s-color-background]"></div>
```

### Opacity
It is possible to control the opacity of an element’s background color by adding an optional alpha modifier.
The modifier accepts any integer percentage value between 0 and 100.
This works for both semantic and arbitrary classes with any primitive `--w-{color}` or semantic `--w-s-color-{name}` css variable.

::: warning Warning
Please be advised that by using primitive variables you will lose theming possibilities, therefor we highly recommend only using semantic classes and tokens.
:::

<example-container class="bg-center bg-[url(./50s-scientists.jpg)]">
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div class="s-bg/20 hover:s-bg/100 border h-80 w-80 rounded-16 backdrop-blur-s transition-colors ease-in-out duration-700"></div>
    <div class="s-bg-primary/50 hover:s-bg-primary/100 h-80 w-80 rounded-16 backdrop-blur-s transition-colors ease-in-out duration-700"></div>
    <div class="bg-[--w-s-color-background-positive/40] hover:bg-[--w-s-color-background-positive/100] h-80 w-80 rounded-16 backdrop-blur-s transition-colors ease-in-out duration-700"></div>
    <div class="bg-[var(--w-black)/70] hover:bg-[var(--w-black)/100] h-80 w-80 rounded-16 backdrop-blur-s transition-colors ease-in-out duration-700"></div>
  </div>
</example-container>

```html
<div class="s-bg/20 hover:s-bg/100 ..."></div>
<div class="s-bg-primary/50 hover:s-bg-primary/100 ..."></div>
<div class="bg-[--w-s-color-background-positive/40] hover:bg-[--w-s-color-background-positive/100] ..."></div>
<div class="bg-[var(--w-black)/70] hover:bg-[var(--w-black)/100] ..."></div>
```

## Applying conditionally

### Hover, focus and other states
Conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:s-bg-hover` to only apply the `s-bg-hover` utility on hover.

<example-container>
  <div class="grid grid-cols-3 gap-16 justify-items-center">
    <div class="h-80 w-80 border rounded-16 s-bg hover:s-bg-hover active:s-bg-active"></div>
    <div class="h-80 w-80 border rounded-16 s-bg-info hover:s-bg-info-hover active:s-bg-info-active"></div>
    <div class="h-80 w-80 border rounded-16 s-bg-warning hover:s-bg-warning-hover active:s-bg-warning-active"></div>
  </div>
</example-container>

```html
<div class="s-bg hover:s-bg-hover active:s-bg-active ..."></div>
<div class="s-bg-info hover:s-bg-info-hover active:s-bg-info-active ..."></div>
<div class="s-bg-warning hover:s-bg-warning-hover active:s-bg-warning-active ..."></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:s-bg-positive` to apply the `s-bg-positive` utility at only medium screen sizes and above.

<example-container>
  <div class="grid gap-16 justify-items-center">
    <div class="h-80 w-80 border rounded-16 s-bg md:s-bg-positive"></div>
  </div>
</example-container>

```html
<div class="s-bg md:s-bg-positive ..."></div>
```
