> Effects

# Box Shadow

Utilities for controlling the box shadow of an element.

## Quick reference

<qr-table />

## Basic usage

### Adding an outer shadow
Use the `shadow-s`, `shadow-m`, `shadow-l`, `shadow-xl` utilities to apply different sized outer box shadows to an element.

<example-container>
  <div class="grid md:grid-cols-4 grid-cols-2 justify-items-center gap-24 my-8">
    <div class="w-80 h-80 ex-box s-bg pd-text-slate-900 shadow-s">s</div>
    <div class="w-80 h-80 ex-box s-bg pd-text-slate-900 shadow-m">m</div>
    <div class="w-80 h-80 ex-box s-bg pd-text-slate-900 shadow-l">l</div>
    <div class="w-80 h-80 ex-box s-bg pd-text-slate-900 shadow-xl">xl</div>
  </div>
</example-container>

```html
<div class="shadow-s ...">s</div>
<div class="shadow-m ...">m</div>
<div class="shadow-l ...">l</div>
<div class="shadow-xl ...">xl</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:shadow-m` to apply the `shadow-m` utility at only medium screen sizes and above.

```html
<div class="shadow-s md:shadow-m"></div>
```
