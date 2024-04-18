> Borders

# Outline Offset

Utilities for controlling the offset of an outline of an element.

| Class                   | Description              |
|-------------------------|--------------------------|
| `outline-offset-{size}` | `outline-offset: {size}` |

> Available values <br />
> `{size}`: `0`, `1`, `2`, `4`, `8` <br />

## Basic usage

### Setting the outline offset
Use the `outline-offset-{size}` utilities to set the outline offset for an element.

<container>
  <div class="grid grid-cols-4 gap-16 justify-items-center">
    <div>outline-offset-1</div>
    <div>outline-offset-2</div>
    <div>outline-offset-4</div>
    <div>outline-offset-8</div>
    <div class="pd-bg-violet-400 h-80 w-80 rounded-4 outline outline-offset-1 outline-4"></div>
    <div class="pd-bg-violet-400 h-80 w-80 rounded-4 outline outline-offset-2 outline-4"></div>
    <div class="pd-bg-violet-400 h-80 w-80 rounded-4 outline outline-offset-4 outline-4"></div>
    <div class="pd-bg-violet-400 h-80 w-80 rounded-4 outline outline-offset-8 outline-4"></div>
  </div>
</container>

```html
<div class="outline outline-offset-1 outline-4 ..."></div>
<div class="outline outline-offset-2 outline-4 ..."></div>
<div class="outline outline-offset-4 outline-4 ..."></div>
<div class="outline outline-offset-8 outline-4 ..."></div>
```

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:outline-offset-4` to only apply the `outline-offset-4` utility on hover.

```html
<div class="outline-offset-2 hover:outline-offset-4">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:outline-offset-4` to apply the `outline-offset-4` utility at only medium screen sizes and above.

```html
<div class="outline-offset-2 md:outline-offset-4">
  <!-- ... -->
</div>
```
