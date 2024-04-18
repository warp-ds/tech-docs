> Sizing

# Min-Width

Utilities for setting the minimum width of an element.

## Quick reference

<qr-table />

## Basic usage

### Setting the minimum width
Set the minimum width of an element using the `min-w-{width}` utilities.

```html
<span class="min-w-full ...">
  <!-- ... -->
</span>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:min-w-0` to apply the `min-w-0` utility at only medium screen sizes and above.

```html
<div class="w-24 min-w-full md:min-w-0">
  <!-- ... -->
</div>
```

### Arbitrary values
If you need to use a one-off `min-width` value that doesn't make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="min-w-[50]">
  <!-- ... -->
</div>
```
