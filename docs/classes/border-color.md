> Borders

# Border Color

Utilities for controlling the color of an element's borders.

::: tip s-prefix
The `s-` (semantic) prefix signals that the color value of these will change with the brand css.
:::

## Quick reference

<theme-switcher />

<border-color-table />

## Basic usage

### Setting the border color
Control the border color of an element using the `border-{transparent | inherit | current}` or `s-border-{semantic color}` utilities specified in the table above.

<example-container>
  <div class="grid gap-16 justify-items-center">
    <div class="h-80 w-80 border-4 rounded-16 s-border-positive"></div>
  </div>
</example-container>

```html
<div class="s-border-positive border-4 rounded-16 ..."></div>
```

### Individual sides
Use the `border-{l|r|t|b}-{transparent|inherit|current}` or `s-border-{l|r|t|b}-{semantic color}` utilities to set the border color for only one side of an element.

<example-container>
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div class="h-80 w-80 border-4 rounded-16 s-border-l-positive"></div>
    <div class="h-80 w-80 border-4 rounded-16 s-border-r-positive"></div>
    <div class="h-80 w-80 border-4 rounded-16 s-border-t-positive"></div>
    <div class="h-80 w-80 border-4 rounded-16 s-border-b-positive"></div>
  </div>
</example-container>

```html
<div class="s-border-l-positive border-4 ..."></div>
<div class="s-border-r-positive border-4 ..."></div>
<div class="s-border-t-positive border-4 ..."></div>
<div class="s-border-b-positive border-4 ..."></div>
```

### Horizontal and vertical sides
Use the `border-{x|y}-{transparent|inherit|current}` or `s-border-{x|y}-{semantic color}` utilities to set the border color on two sides of an element at the same time.

<example-container>
  <div class="grid grid-cols-2 gap-16 justify-items-center">
    <div class="h-80 w-80 border-4 rounded-16 s-border-x-positive"></div>
    <div class="h-80 w-80 border-4 rounded-16 s-border-y-positive"></div>
   </div>
</example-container>

```html
<div class="s-border-x-positive border-4 ..."></div>
<div class="s-border-y-positive border-4 ..."></div>
```

### Arbitrary values
If you need to use a one-off `border-{color}` value, use square brackets to generate a property on the fly using any arbitrary value.
However, we recommend only using our semantic color tokens.
This also works with or without an optional direction.
`border-{x|y|l|r|t|b}-[{any color value or css var}]`

```html
<div class="border-[--w-s-color-icon]">
  <!-- ... -->
</div>
```

### Opacity
It is possible to control the opacity of an element’s border color by adding an optional alpha modifier.
The modifier accepts any integer percentage value between 0 and 100.
This works for both semantic and arbitrary classes with any primitive `--w-{color}` or semantic `--w-s-color-{name}` css variable.

::: warning Warning
Please be advised that by using primitive variables you will lose theming possibilities, therefor we highly recommend only using semantic classes and tokens.
:::

<example-container class="bg-center bg-[url(/tech-docs/classes/50s-scientists.jpg)]">
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div class="s-border/50 hover:s-border/100 h-80 w-80 border-8 rounded-16 s-bg/10 backdrop-blur-m transition-colors ease-in-out duration-700"></div>
    <div class="s-border-t-primary/55 hover:s-border-t-primary/100 h-80 w-80 border-t-8 rounded-16 s-bg/50 backdrop-blur-m transition-colors ease-in-out duration-700"></div>
    <div class="border-x-[--w-s-color-background-positive/60] hover:border-x-[--w-s-color-background-positive/100] h-80 w-80 border-x-8 rounded-16 s-bg/50 backdrop-blur-m transition-colors ease-in-out duration-700"></div>
    <div class="border-y-[var(--w-black)/40] hover:border-y-[var(--w-black)/100] h-80 w-80 border-y-8 rounded-16 s-bg/50 backdrop-blur-m transition-colors ease-in-out duration-700"></div>
  </div>
</example-container>

```html
<div class="s-border/50 hover:s-border/100 ..."></div>
<div class="s-border-t-primary/55 hover:s-border-t-primary/100 ..."></div>
<div class="border-x-[--w-s-color-background-positive/60] hover:border-x-[--w-s-color-background-positive/100] ..."></div>
<div class="border-y-[var(--w-black)/40] hover:border-y-[var(--w-black)/100] ..."></div>
```

### Hover, focus and other states
Conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:s-border-active` to only apply the `s-border-active` utility on hover.

<example-container>
  <div class="grid gap-16 justify-items-center">
    <div class="h-80 w-80 border-4 rounded-16 s-border hover:s-border-hover"></div>
   </div>
</example-container>

```html
<div class="s-border hover:s-border-hover ..."></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:s-border-positive` to apply the `s-border-positive` utility at only medium screen sizes and above.

<example-container>
  <div class="grid gap-16 justify-items-center">
    <div class="h-80 w-80 border-4 rounded-16 s-border md:s-border-positive"></div>
   </div>
</example-container>

```html
<div class="s-border md:s-border-positive ..."></div>
```
