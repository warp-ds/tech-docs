> Flexbox & Grid

# Justify Self
Utilities for controlling how an individual grid item is aligned along its inline axis.

## Quick reference

<qr-table />

## Basic usage

### Auto
Use `justify-self-auto` to align an item based on the value of the grid’s `justify-items` property.

<container>
  <div class="grid grid-cols-3 gap-24">
    <div class="pd-bg-purple-500 ex-box">01</div>
    <div class="pd-bg-purple-400 ex-box justify-self-auto">02</div>
    <div class="pd-bg-purple-500 ex-box">03</div>
    <div class="pd-bg-purple-500 ex-box">04</div>
    <div class="pd-bg-purple-500 ex-box">05</div>
    <div class="pd-bg-purple-500 ex-box">06</div>
  </div>
</container>

```html{3}
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-auto ...">02</div>
  <!-- ... -->
  <!-- ... -->
  <!-- ... -->
  <!-- ... -->
</div>
```

### Start
Use `justify-self-start` to align a grid item to the start its inline axis.

<container>
  <div class="grid grid-cols-3 gap-24">
    <div class="pd-bg-cyan-700 ex-box">01</div>
    <box striped class="flex rounded-l-4" fg-color="var(--tw-cyan-fg)" bg-color="var(--tw-cyan-bg)">
      <div class="w-64 pd-bg-cyan-500 ex-box">02</div>
    </box>
    <div class="pd-bg-cyan-700 ex-box">03</div>
    <div class="pd-bg-cyan-700 ex-box">04</div>
    <div class="pd-bg-cyan-700 ex-box">05</div>
    <div class="pd-bg-cyan-700 ex-box">06</div>
  </div>
</container>

```html{3}
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-start ...">02</div>
  <!-- ... -->
  <!-- ... -->
  <!-- ... -->
  <!-- ... -->
</div>
```

### Center
Use `justify-self-center` to align a grid item along the center its inline axis:

<container>
  <div class="grid grid-cols-3 gap-24">
    <div class="pd-bg-pink-500 ex-box">01</div>
    <box striped class="flex justify-center" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
      <div class="w-64 pd-bg-pink-400 ex-box">02</div>
    </box>
    <div class="pd-bg-pink-500 ex-box">03</div>
    <div class="pd-bg-pink-500 ex-box">04</div>
    <div class="pd-bg-pink-500 ex-box">05</div>
    <div class="pd-bg-pink-500 ex-box">06</div>
  </div>
</container>

```html{3}
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-center ...">02</div>
  <!-- ... -->
  <!-- ... -->
  <!-- ... -->
  <!-- ... -->
</div>
```

### End
Use `justify-self-end` to align a grid item to the end its inline axis:

<container>
  <div class="grid grid-cols-3 gap-24">
    <div class="pd-bg-indigo-500 ex-box">01</div>
    <box striped class="flex justify-end rounded-r-4" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
      <div class="w-64 pd-bg-indigo-400 ex-box">02</div>
    </box>
    <div class="pd-bg-indigo-500 ex-box">03</div>
    <div class="pd-bg-indigo-500 ex-box">04</div>
    <div class="pd-bg-indigo-500 ex-box">05</div>
    <div class="pd-bg-indigo-500 ex-box">06</div>
  </div>
</container>

```html{3}
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-center ...">02</div>
  <!-- ... -->
  <!-- ... -->
  <!-- ... -->
  <!-- ... -->
</div>
```

### Stretch
Use `justify-self-stretch` to stretch a grid item to fill the grid area on its inline axis:

<container>
  <div class="grid grid-cols-3 gap-24">
    <box striped class="flex justify-end rounded-r-4" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
      <div class="w-64 pd-bg-violet-500 ex-box">01</div>
    </box>
    <div class="pd-bg-violet-400 ex-box">02</div>
    <box striped class="flex justify-end rounded-r-4" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
      <div class="w-64 pd-bg-violet-500 ex-box">03</div>
    </box>
    <box striped class="flex justify-end rounded-r-4" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
      <div class="w-64 pd-bg-violet-500 ex-box">03</div>
    </box>
    <box striped class="flex justify-end rounded-r-4" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
      <div class="w-64 pd-bg-violet-500 ex-box">04</div>
    </box>
    <box striped class="flex justify-end rounded-r-4" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
      <div class="w-64 pd-bg-violet-500 ex-box">05</div>
    </box>
  </div>
</container>

```html{3}
<div class="grid justify-items-start ...">
  <!-- ... -->
  <div class="justify-self-stretch ...">02</div>
  <!-- ... -->
  <!-- ... -->
  <!-- ... -->
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:justify-self-end` to apply the `justify-self-end` utility at only medium screen sizes and above.

```html
<div class="justify-self-start md:justify-self-end">
  <!-- ... -->
</div>
```
