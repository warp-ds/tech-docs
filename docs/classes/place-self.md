> Flexbox & Grid

# Place Self
Utilities for controlling how an individual item is justified and aligned at the same time.

## Quick reference

<qr-table />

## Basic usage
### Auto
Use `place-self-auto` to align an item based on the value of the container’s `place-items` property.

<container>
  <div class="grid grid-cols-3 gap-24 place-content-center">
    <div class="pd-bg-blue-600 ex-box">01</div>
    <div class="pd-bg-blue-500 ex-box">02</div>
    <div class="pd-bg-blue-600 ex-box">03</div>
    <div class="pd-bg-blue-600 ex-box">04</div>
    <div class="pd-bg-blue-600 ex-box">05</div>
    <div class="pd-bg-blue-600 ex-box">06</div>
  </div>
</container>

```html{3}
<div class="grid grid-cols-3 gap-24 ...">
  <div>01</div>
  <div class="place-self-auto ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Start
Use `place-self-start` to align an item to the start on both axes.

<container>
  <div class="grid grid-cols-3 gap-24">
    <div class="pd-bg-fuchsia-600 ex-box h-96">01</div>
    <box striped class="grid h-96 rounded tl-4" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="pd-bg-fuchsia-500 ex-box h-64 place-self-start">02</div>
    </box>
    <div class="pd-bg-fuchsia-600 ex-box h-96">03</div>
    <div class="pd-bg-fuchsia-600 ex-box h-96">04</div>
    <div class="pd-bg-fuchsia-600 ex-box h-96">05</div>
    <div class="pd-bg-fuchsia-600 ex-box h-96">06</div>
  </div>
</container>

```html{3}
<div class="grid grid-cols-3 gap-4 ...">
  <div>01</div>
  <div class="place-self-start ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Center
Use `place-self-center` to align an item at the center on both axes.

<container>
  <div class="grid grid-cols-3 gap-24">
    <div class="pd-bg-cyan-600 ex-box h-96">01</div>
    <box striped class="grid h-96" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
      <div class="pd-bg-cyan-500 ex-box h-64 place-self-center">02</div>
    </box>
    <div class="pd-bg-cyan-600 ex-box h-96">03</div>
    <div class="pd-bg-cyan-600 ex-box h-96">04</div>
    <div class="pd-bg-cyan-600 ex-box h-96">05</div>
    <div class="pd-bg-cyan-600 ex-box h-96">06</div>
  </div>
</container>

```html{3}
<div class="grid grid-cols-3 gap-16 ...">
  <div>01</div>
  <div class="place-self-center ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### End
Use `place-self-end` to align an item to the end on both axes.

<container>
  <div class="grid grid-cols-3 gap-24">
    <div class="pd-bg-violet-600 ex-box h-96">01</div>
    <box striped class="grid h-96 rounded-br-4" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
      <div class="pd-bg-violet-500 ex-box h-64 place-self-end">02</div>
    </box>
    <div class="pd-bg-violet-600 ex-box h-96">03</div>
    <div class="pd-bg-violet-600 ex-box h-96">04</div>
    <div class="pd-bg-violet-600 ex-box h-96">05</div>
    <div class="pd-bg-violet-600 ex-box h-96">06</div>
  </div>
</container>

```html{3}
<div class="grid grid-cols-3 gap-24 ...">
  <div>01</div>
  <div class="place-self-center ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Stretch
Use `place-self-stretch` to stretch an item on both axes:

<container>
  <div class="grid grid-cols-3 gap-24">
    <div class="pd-bg-indigo-600 ex-box h-96">01</div>
    <box striped class="grid h-96" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
      <div class="pd-bg-indigo-500 ex-box place-self-stretch">02</div>
    </box>
    <div class="pd-bg-indigo-600 ex-box h-96">03</div>
    <div class="pd-bg-indigo-600 ex-box h-96">04</div>
    <div class="pd-bg-indigo-600 ex-box h-96">05</div>
    <div class="pd-bg-indigo-600 ex-box h-96">06</div>
  </div>
</container>

```html{3}
<div class="grid grid-cols-3 gap-24 ...">
  <div>01</div>
  <div class="place-self-stretch ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:place-self-end` to apply the `place-self-end` utility at only medium screen sizes and above.

```html
<div class="place-self-start md:place-self-end">
  <!-- ... -->
</div>
```
