> Flexbox & Grid

# Flex Grow
Utilities for controlling how flex items grow.

## Quick reference

<qr-table />

## Basic usage
### Grow
Use `grow` to allow a flex item to grow to fill any available space.

<width-controller>
  <box striped class="flex gap-24 rounded-4" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
    <div class="flex-none pd-bg-indigo-800 ex-box">01</div>
    <div class="grow pd-bg-indigo-500 ex-box">02</div>
    <div class="flex-none pd-bg-indigo-800 ex-box">03</div>
  </box>
</width-controller>

```html
<div class="flex">
  <div class="flex-none ...">
    01
  </div>
  <div class="grow ...">
    02
  </div>
  <div class="flex-none ...">
    03
  </div>
</div>
```

### Do not grow
Use `grow-0` to prevent a flex item from growing

<width-controller>
  <box striped class="flex gap-24 rounded-4" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
    <div class="grow pd-bg-pink-800 ex-box">01</div>
    <div class="grow-0 flex-1 pd-bg-pink-500 ex-box">02</div>
    <div class="grow pd-bg-pink-800 ex-box">03</div>
  </box>
</width-controller>

```html
<div class="flex">
  <div class="grow ...">
    01
  </div>
  <div class="grow-0 ...">
    02
  </div>
  <div class="grow ...">
    03
  </div>
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:grow-0` to apply the `grow-0` utility at only medium screen sizes and above.

```html
<div class="grow md:grow-0">
  <!-- ... -->
</div>
```

### Arbitrary values
If you need to use a one-off flex-grow value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="grow-[2]">
  <!-- ... -->
</div>
```
