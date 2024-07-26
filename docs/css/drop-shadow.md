> Effects

# Drop Shadow

Utilities for controlling the drop shadow of an element.

## Quick reference

<qr-table />

## Basic usage

### Adding a drop shadow
Use the `drop-shadow-s`, `drop-shadow-m`, `drop-shadow-l`, `drop-shadow-xl` utilities to apply different sized drop shadows to images.

<example-container>
  <div class="grid md:grid-cols-4 grid-cols-2 justify-items-center gap-24 my-8">
    <div class="flex flex-col items-center shrink-0">
      <h4 class="ex-heading">drop-shadow-s</h4>
      <img class="w-96 drop-shadow-s" src="/warp-logo-small.svg" alt="Warp logo with a small drop shadow" />
    </div>
    <div class="flex flex-col items-center shrink-0">
      <h4 class="ex-heading">drop-shadow-m</h4>
      <img class="w-96 drop-shadow-m" src="/warp-logo-small.svg" alt="Warp logo with a medium drop shadow" />
    </div>
    <div class="flex flex-col items-center shrink-0">
      <h4 class="ex-heading">drop-shadow-l</h4>
      <img class="w-96 drop-shadow-l" src="/warp-logo-small.svg" alt="Warp logo with a large drop shadow" />
    </div>
    <div class="flex flex-col items-center shrink-0">
      <h4 class="ex-heading">drop-shadow-xl</h4>
      <img class="w-96 drop-shadow-xl" src="/warp-logo-small.svg" alt="Warp logo with an extra large drop shadow" />
    </div>
  </div>
</example-container>

```html
<img src="..." class="drop-shadow-s ..." />
<img src="..." class="drop-shadow-m ..." />
<img src="..." class="drop-shadow-l ..." />
<img src="..." class="drop-shadow-xl ..." />
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:drop-shadow-m` to apply the `drop-shadow-m` utility at only medium screen sizes and above.

```html
<div class="drop-shadow-s md:drop-shadow-m"></div>
```
