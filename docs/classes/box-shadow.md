> Effects

# Box Shadow

Utilities for controlling the box shadow of an element.

## Quick reference

<qr-table />

## Basic usage

### Adding an outer shadow
Use the `shadow-s`, `shadow-m`, `shadow-l`, `shadow-xl` utilities to apply different sized outer box shadows to an element.

```html
<div class="shadow-s ...">1</div>
<div class="shadow-m ...">2</div>
<div class="shadow-l ...">3</div>
<div class="shadow-xl ...">4</div>
```

<container>
  <div class="flex space-x-24 flex-wrap items-start justify-center text-white text-sm font-bold xleading-6 -mx-5">
    <div class="p-16 rounded s-bg shadow-s">1</div>
    <div class="p-16 rounded s-bg shadow-m">2</div>
    <div class="p-16 rounded s-bg shadow-l">3</div>
    <div class="p-16 rounded s-bg shadow-xl">4</div>
  </div>
</container>

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:shadow-m` to apply the `shadow-m` utility at only medium screen sizes and above.

```html
<div class="shadow-s md:shadow-m">
  <!-- ... -->
</div>
```
