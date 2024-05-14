> Flexbox & Grid

# Flex Shrink

Utilities for controlling how flex items shrink.

## Quick reference

<qr-table />

## Basic usage

### Shrink
Use `shrink` to allow a flex item to shrink if needed.

<width-controller>
  <box striped class="flex gap-24 rounded-4" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
    <div class="flex-none pd-bg-indigo-800 ex-box">01</div>
    <div class="w-128 shrink pd-bg-indigo-500 ex-box">02</div>
    <div class="flex-none pd-bg-indigo-800 ex-box">03</div>
  </box>
</width-controller>

```html
<div class="flex">
  <div class="flex-none ...">
    01
  </div>
  <div class="shrink ...">
    02
  </div>
  <div class="flex-none ...">
    03
  </div>
</div>
```

### Don't shrink
Use `shrink-0` to prevent a flex item from shrinking

<width-controller>
  <box striped class="flex gap-24 rounded-4" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
    <div class="flex-1 pd-bg-pink-800 ex-box">01</div>
    <div class="w-128 shrink-0 pd-bg-pink-500 ex-box">02</div>
    <div class="flex-1 pd-bg-pink-800 ex-box">03</div>
  </box>
</width-controller>

```html
  <div class="flex">
    <div class="flex-1 ...">
      01
    </div>
    <div class="shrink-0 w-32 ...">
      02
    </div>
    <div class="flex-1 ...">
      03
    </div>
  </div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:shrink-0` to apply the `shrink-0` utility at only medium screen sizes and above.

```html
<div class="shrink md:shrink-0">
  <!-- ... -->
</div>
```

### Arbitrary values
If you need to use a one-off flex-shrink value, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="shrink-[2]">
  <!-- ... -->
</div>
```

