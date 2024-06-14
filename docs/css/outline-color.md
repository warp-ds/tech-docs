> Borders

# Outline Color

Utilities for controlling the color of an outline of an element.

::: tip s-prefix
The `s-` (semantic) prefix signals that the color value of these will change with the brand css.
:::

## Quick reference

<outline-color-table />

## Basic usage

### Setting the outline color
Control the outline color of an element using the `s-outline-{semantic color}` utilities specified in the table above.

<example-container>
  <div class="grid gap-16 justify-items-center">
    <div class="s-outline-focused s-bg h-80 w-80 rounded-4 outline outline-offset-2 outline-4"></div>
  </div>
</example-container>

```html
<div class="s-outline-focused outline-4 ..."></div>
```

### Arbitrary values
If you need to use a one-off `outline-{color}` value, use square brackets to generate a property on the fly using any arbitrary value. However, we recommend only using our semantic color tokens.

```html
<div class="outline-[--w-s-color-border]">
  <!-- ... -->
</div>
```

### Opacity
It is possible to control the opacity of an element’s outline color by adding an optional alpha modifier.
The modifier accepts any integer percentage value between 0 and 100.
This works for both semantic and arbitrary classes with any primitive `--w-{color}` or semantic `--w-s-color-{name}` css variable.

::: warning Warning
Please be advised that by using primitive variables you will lose theming possibilities, therefore we highly recommend only using semantic classes and tokens.
:::

<example-container class="bg-center bg-[url(./50s-scientists.jpg)]">
  <div class="grid grid-cols-4 gap-16 justify-items-center my-8">
    <div class="s-outline/50 hover:s-outline/100 s-bg backdrop-blur-m h-80 w-80 rounded-4 outline outline-offset-4 outline-8 transition-all ease-in-out duration-700"></div>
    <div class="s-outline-focused/50 hover:s-outline-focused/100 s-bg backdrop-blur-m h-80 w-80 rounded-4 outline outline-offset-4 outline-8 transition-all ease-in-out duration-700"></div>
    <div class="outline-[--w-s-color-background-positive/40] hover:outline-[--w-s-color-background-positive/100] s-bg backdrop-blur-m h-80 w-80 rounded-4 outline outline-offset-4 outline-8 transition-all ease-in-out duration-700"></div>
    <div class="outline-[--w-black/40] hover:outline-[--w-black/100] s-bg backdrop-blur-m h-80 w-80 rounded-4 outline outline-offset-4 outline-8 transition-all ease-in-out duration-700"></div>
  </div>
</example-container>

```html
<div class="s-outline/50 hover:s-outline/100 ..."></div>
<div class="s-outline-focused/50 hover:s-outline-focused/100 ..."></div>
<div class="outline-[--w-s-color-background-positive/40] hover:bg-[--w-s-color-background-positive/100] ..."></div>
<div class="outline-[--w-black/40] hover:outline-[--w-black/100] ..."></div>
```

## Applying conditionally

### Hover, focus and other states
Conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:s-outline-active` to only apply the `s-outline-active` utility on hover.

<example-container>
  <div class="grid gap-16 justify-items-center">
    <div class="s-outline hover:s-outline-hover s-bg h-80 w-80 rounded-4 outline outline-offset-2 outline-4"></div>
   </div>
</example-container>

```html
<div class="s-outline hover:s-outline-hover ..."></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:s-outline-positive` to apply the `s-outline-positive` utility at only medium screen sizes and above.

<example-container>
  <div class="grid gap-16 justify-items-center">
    <div class="s-outline md:s-outline-positive s-bg h-80 w-80 rounded-4 outline outline-offset-2 outline-4"></div>
   </div>
</example-container>

```html
<div class="s-outline md:s-outline-positive ..."></div>
```
