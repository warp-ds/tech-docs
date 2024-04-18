> Sizing

# Min-Height

Utilities for setting the minimum height of an element.

## Quick reference

<qr-table />

## Basic usage

### Setting the minimum height
Set the minimum height of an element using the `min-h-0`, `min-h-full`, or `min-h-screen` utilities.

```html
<div class="h-48">
  <div class="h-24 min-h-full">
    <!-- ... -->
  </div>
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:min-h-full` to apply the `min-h-full` utility at only medium screen sizes and above.

```html
<div class="h-24 min-h-0 md:min-h-full">
  <!-- ... -->
</div>
```

### Arbitrary values
If you need to use a one-off `min-height` value that doesn't make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="min-h-[50]">
  <!-- ... -->
</div>
```

