> Flexbox & Grid

# Flex Wrap
Utilities for controlling how flex items wrap.

## Quick reference

<qr-table />

## Basic usage
### Don't wrap
Use `flex-nowrap` to prevent flex items from wrapping, causing inflexible items to overflow the container if necessary.

<container class="overflow-auto">
  <box class="flex flex-nowrap gap-24 rounded-4">
    <div class="w-2/5 flex-none pd-bg-sky-500 ex-box">01</div>
    <div class="w-2/5 flex-none pd-bg-sky-500 ex-box">02</div>
    <div class="w-2/5 flex-none pd-bg-sky-500 ex-box">03</div>
  </box>
</container>

```html
<div class="flex flex-nowrap ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Wrap normally
Use `flex-wrap` to allow flex items to wrap.

<container>
  <box class="flex flex-wrap gap-24 rounded-4">
    <div class="w-2/5 flex-none pd-bg-indigo-500 ex-box">01</div>
    <div class="w-2/5 flex-none pd-bg-indigo-500 ex-box">02</div>
    <div class="w-2/5 flex-none pd-bg-indigo-500 ex-box">03</div>
  </box>
</container>

```html
<div class="flex flex-wrap ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Wrap reversed
Use `flex-wrap-reverse` to wrap flex items in the reverse direction.

<container>
  <box class="flex flex-wrap-reverse gap-24 rounded-4">
    <div class="w-2/5 flex-none pd-bg-fuchsia-500 ex-box">01</div>
    <div class="w-2/5 flex-none pd-bg-fuchsia-500 ex-box">02</div>
    <div class="w-2/5 flex-none pd-bg-fuchsia-500 ex-box">03</div>
  </box>
</container>

```html
<div class="flex flex-wrap-reverse ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:flex-wrap-reverse` to apply the `flex-wrap-reverse` utility at only medium screen sizes and above.

```html
<div class="flex flex-wrap md:flex-wrap-reverse">
  <!-- ... -->
</div>
```
