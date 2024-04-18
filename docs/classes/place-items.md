> Flexbox & Grid

# Place Items

Utilities for controlling how items are justified and aligned at the same time.

## Quick reference

<qr-table />

## Basic usage

### Start
Use `place-items-start` to place grid items on the start of their grid areas on both axes.

<container>
  <div class="grid grid-cols-3  gap-24">
    <box striped class="h-96 rounded-tl-4" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">01</div>
    </box>
    <box striped class="h-96 rounded-tl-4" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">02</div>
    </box>
    <box striped class="h-96 rounded-tl-4" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">03</div>
    </box>
    <box striped class="h-96 rounded-tl-4" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">04</div>
    </box>
    <box striped class="h-96 rounded-tl-4" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">05</div>
    </box>
    <box striped class="h-96 rounded-tl-4" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">06</div>
    </box>
  </div>
</container>

```html{1}
<div class="grid grid-cols-3 gap-24 place-items-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### End
Use `place-items-end` to place grid items on the end of their grid areas on both axes.

<container>
  <div class="grid grid-cols-3 gap-24">
    <box striped class="h-96 grid place-items-end rounded-br-4" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">01</div>
    </box>
    <box striped class="h-96 grid place-items-end rounded-br-4" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">02</div>
    </box>
    <box striped class="h-96 grid place-items-end rounded-br-4" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">03</div>
    </box>
    <box striped class="h-96 grid place-items-end rounded-br-4" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">04</div>
    </box>
    <box striped class="h-96 grid place-items-end rounded-br-4" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">05</div>
    </box>
    <box striped class="h-96 grid place-items-end rounded-br-4" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">06</div>
    </box>
  </div>
</container>

```html{1}
<div class="grid grid-cols-3 gap-24 place-items-end ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Center
Use `place-items-center` to place grid items in the center of their grid areas on both axes.

<container>
  <div class="grid grid-cols-3 gap-24">
    <box striped class="h-96 grid place-items-center" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">01</div>
    </box>
    <box striped class="h-96 grid place-items-center" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">02</div>
    </box>
    <box striped class="h-96 grid place-items-center" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">03</div>
    </box>
    <box striped class="h-96 grid place-items-center" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">04</div>
    </box>
    <box striped class="h-96 grid place-items-center" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">05</div>
    </box>
    <box striped class="h-96 grid place-items-center" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="w-64 pd-bg-fuchsia-500 ex-box">06</div>
    </box>
  </div>
</container>

```html{1}
<div class="grid grid-cols-3 gap-24 place-items-center ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Stretch
Use `place-items-stretch` to stretch items along their grid areas on both axes.

<container>
  <div class="grid grid-cols-3 gap-24">
    <box striped class="h-96 grid place-items-stretch" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="pd-bg-fuchsia-500 ex-box">01</div>
    </box>
    <box striped class="h-96 grid place-items-stretch" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="pd-bg-fuchsia-500 ex-box">02</div>
    </box>
    <box striped class="h-96 grid place-items-stretch" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="pd-bg-fuchsia-500 ex-box">03</div>
    </box>
    <box striped class="h-96 grid place-items-stretch" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="pd-bg-fuchsia-500 ex-box">04</div>
    </box>
    <box striped class="h-96 grid place-items-stretch" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="pd-bg-fuchsia-500 ex-box">05</div>
    </box>
    <box striped class="h-96 grid place-items-stretch" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="pd-bg-fuchsia-500 ex-box">06</div>
    </box>
  </div>
</container>

```html{1}
<div class="grid grid-cols-3 gap-24 place-items-stretch ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:place-items-center` to apply the `place-items-center` utility at only medium screen sizes and above.

```html
<div class="grid place-items-start md:place-items-center">
  <!-- ... -->
</div>
```
