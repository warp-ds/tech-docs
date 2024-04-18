> Flexbox & Grid

# Place Content

Utilities for controlling how content is justified and aligned at the same time.

## Quick reference

<qr-table />

## Basic usage

### Center
Use `place-content-center` to pack items in the center of the block axis.

<container>
  <box striped class="grid grid-cols-[repeat(2,56px)] gap-24 py-64 place-content-center" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
    <div class="pd-bg-blue-500 ex-box">01</div>
    <div class="pd-bg-blue-500 ex-box">02</div>
    <div class="pd-bg-blue-500 ex-box">03</div>
    <div class="pd-bg-blue-500 ex-box">04</div>
  </box>
</container>

```html{1}
<div class="grid grid-cols-2 gap-16 place-content-center ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Start
Use `place-content-start` to pack items against the start of the block axis.

<container>
  <box striped class="grid grid-cols-[repeat(2,56px)] gap-24 pb-128 place-content-start" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
    <div class="pd-bg-fuchsia-500 ex-box">01</div>
    <div class="pd-bg-fuchsia-500 ex-box">02</div>
    <div class="pd-bg-fuchsia-500 ex-box">03</div>
    <div class="pd-bg-fuchsia-500 ex-box">04</div>
  </box>
</container>

```html{1}
<div class="grid grid-cols-2 gap-16 place-content-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### End
Use `place-content-end` to pack items against the end of the block axis.

<container>
  <box striped class="grid grid-cols-[repeat(2,56px)] gap-24 rounded-4 pt-128 place-content-start" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
    <div class="pd-bg-cyan-500 ex-box">01</div>
    <div class="pd-bg-cyan-500 ex-box">02</div>
    <div class="pd-bg-cyan-500 ex-box">03</div>
    <div class="pd-bg-cyan-500 ex-box">04</div>
  </box>
</container>

```html{1}
<div class="grid grid-cols-2 gap-16 place-content-end ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Space between
Use `place-content-between` to distribute grid items along the block axis so that there is an equal amount of space between each row on the block axis.

<container>
  <box striped class="grid grid-cols-[repeat(2,56px)] place-content-between rounded-4" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
    <div class="pd-bg-pink-500 ex-box mb-64">01</div>
    <div class="pd-bg-pink-500 ex-box mb-64">02</div>
    <div class="pd-bg-pink-500 ex-box">03</div>
    <div class="pd-bg-pink-500 ex-box">04</div>
  </box>
</container>

```html{1}
<div class="grid grid-cols-2 place-content-between ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Space around
Use `place-content-around` distribute grid items such that there is an equal amount of space around each row on the block axis.
<container>
  <box striped class="grid grid-cols-[repeat(2,56px)] place-content-around rounded-4" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
    <div class="pd-bg-violet-500 ex-box my-16">01</div>
    <div class="pd-bg-violet-500 ex-box my-16">02</div>
    <div class="pd-bg-violet-500 ex-box my-16">03</div>
    <div class="pd-bg-violet-500 ex-box my-16">04</div>
  </box>
</container>

```html{1}
<div class="grid grid-cols-2 place-content-around ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Space evenly
Use `place-content-evenly` to distribute grid items such that they are evenly spaced on the block axis.

<container>
  <box striped class="grid grid-cols-[repeat(2,56px)] place-content-evenly rounded-4" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
    <div class="pd-bg-indigo-500 ex-box my-32">01</div>
    <div class="pd-bg-indigo-500 ex-box my-32">02</div>
    <div class="pd-bg-indigo-500 ex-box mb-32">03</div>
    <div class="pd-bg-indigo-500 ex-box mb-32">04</div>
  </box>
</container>

```html{1}
<div class="grid grid-cols-2 place-content-evenly ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### stretch
Use `place-content-stretch` to stretch grid items along their grid areas on the block axis.

<container>
  <box striped class="grid grid-cols-2 place-content-stretch gap-24 rounded-4" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
    <div class="pd-bg-blue-500 ex-box">01</div>
    <div class="pd-bg-blue-500 ex-box">02</div>
    <div class="pd-bg-blue-500 ex-box">03</div>
    <div class="pd-bg-blue-500 ex-box">04</div>
  </box>
</container>

```html{1}
<div class="grid grid-cols-2 place-content-stretch ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:place-content-center` to apply the `place-content-center` utility at only medium screen sizes and above.

```html
<div class="grid place-content-start md:place-content-center">
  <!-- ... -->
</div>
```
