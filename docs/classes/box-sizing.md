> Layout

# Box Sizing
Utilities for controlling how the browser should calculate an element's total size.

## Quick reference

<qr-table />

## Basic usage
### Including borders and padding
Use `box-border` to set an element’s `box-sizing` to `border-box`, telling the browser to include the element’s borders and padding when you give it a height or width.

This means a 100px × 100px element with a 2px border and 4px of padding on all sides will be rendered as 100px × 100px, with an internal content area of 88px × 88px.

Warp makes this the default for all elements in the preflight base styles.

<container>
  <div style="max-width:320px" class="relative grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_3fr_1fr] gap-1 pd-font-mono font-bold max-w-[300] mx-auto w-full">
    <div class="col-start-1 row-start-1 pd-bg-white dark:pd-bg-slate-800"></div>
    <div class="relative col-start-2 row-start-1 pd-bg-white dark:pd-bg-slate-800">
    <!-- -->
    <!-- w-indicator -->
      <div class="absolute flex bottom-2 left-0 right-0">
        <!-- H. line -->
        <div class="pd-bg-indigo-400 h-1 absolute left-0 top-1/2 -translate-y-1 right-0"></div>
        <!-- Left mesh -->
        <div class="w-full">
          <div class="rounded-full h-8 pd-bg-indigo-400 w-1 absolute left-0 top-1/2 -translate-x-1 -translate-y-1"></div>
        </div>
        <!-- measurement -->
        <div class="relative flex-auto pd-font-mono font-bold w-full pd-bg-white pd-text-xs pd-text-indigo-600 px-4 flex items-center justify-center leading-none dark:pd-bg-slate-800 dark:pd-text-indigo-400">128px</div>
        <!-- Right mesh -->
        <div class="w-full">
          <div class="rounded-full h-8 pd-bg-indigo-400 w-1 absolute right-0 top-1/2 translate-x-1 -translate-y-1"></div>
        </div>
      </div>
    <!-- -->
    </div>
    <div class="col-start-3 row-start-1 pd-bg-white dark:pd-bg-slate-800"></div>
    <div class="relative col-start-1 row-start-2 pd-bg-white dark:pd-bg-slate-800">
      <!-- -->
      <!-- h-measure indicator -->
      <div class="absolute flex top-0 bottom-0 -right-10 w-3">
        <!-- Vertical line -->
        <div class="pd-bg-indigo-400 w-1 absolute top-0 left-1/2 bottom-0"></div>
        <!-- Top chip -->
        <div class="w-full">
          <div class="rounded-full w-8 pd-bg-indigo-400 h-1 absolute top-0 left-1/2 -translate-y-1"></div>
        </div>
        <!-- Badge -->
        <div class="relative -rotate-90 h-3 flex flex-auto pd-font-mono font-bold pd-bg-white pd-text-indigo-600 pd-text-xs px-2 items-center justify-center leading-none dark:pd-bg-slate-800 dark:pd-text-indigo-400">128px</div>
        <!-- Bottom chip -->
        <div class="w-full">
          <div class="rounded-full w-8 pd-bg-indigo-400 h-1 absolute bottom-0 left-1/2 translate-y-1"></div>
        </div>
      </div>
      <!-- -->
    </div>
    <div class="col-start-2 row-start-2 w-128 h-128 pd-bg-white dark:pd-bg-slate-800">
      <box striped style="border:3px solid white"  class="relative p-16 w-128 h-128" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)" >
        <div class="w-full h-full pd-bg-sky-500"></div>
      </box>
    </div>
    <div class="pd-bg-white col-start-3 row-start-2 dark:pd-bg-slate-800"></div>
    <div class="pd-bg-white col-start-1 row-start-3 dark:pd-bg-slate-800"></div>
    <div class="pd-bg-white col-start-2 row-start-3 dark:pd-bg-slate-800"></div>
    <div class="pd-bg-white col-start-3 row-start-3 dark:pd-bg-slate-800"></div>
  </div>
</container>

```html
<div class="box-border h-128 w-128 p-16 border-3 ...">
  <!-- ... -->
</div>
```

### Excluding borders and padding
Use `box-content` to set an element’s `box-sizing` to `content-box`, telling the browser to add borders and padding on top of the element’s specified width or height.

This means a 100px × 100px element with a 2px border and 4px of padding on all sides will actually be rendered as 112px × 112px, with an internal content area of 100px × 100px.

<container>
  <div style="max-width:320px" class="relative grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_2fr_1fr] gap-1 pd-font-mono pd-text-sm font-bold max-w-[300] mx-auto w-full dark:pd-bg-slate-700">
    <div class="pd-bg-white col-start-1 row-start-1 dark:pd-bg-slate-800"></div>
    <div class="relative pd-bg-white col-start-2 row-start-1 dark:pd-bg-slate-800">
      <!-- -->
    <!-- w-indicator -->
      <div class="absolute flex bottom-24 left-0 right-0">
        <!-- H. line -->
        <div class="pd-bg-indigo-400 h-1 absolute left-0 top-1/2 -translate-y-1 right-0"></div>
        <!-- Left mesh -->
        <div class="w-full">
          <div class="rounded-full h-8 pd-bg-indigo-400 w-1 absolute left-0 top-1/2 -translate-x-1 -translate-y-1"></div>
        </div>
        <!-- measurement -->
        <div class="relative flex-auto pd-font-mono font-bold w-full pd-bg-white pd-text-xs pd-text-indigo-600 px-4 flex items-center justify-center leading-none dark:pd-bg-slate-800 dark:pd-text-indigo-400">128px</div>
        <!-- Right mesh -->
        <div class="w-full">
          <div class="rounded-full h-8 pd-bg-indigo-400 w-1 absolute right-0 top-1/2 translate-x-1 -translate-y-1"></div>
        </div>
      </div>
    <!-- -->
    </div>
    <div class="pd-bg-white col-start-3 row-start-1 dark:pd-bg-slate-800"></div>
    <div class="relative pd-bg-white col-start-1 row-start-2 dark:pd-bg-slate-800">
     <!-- -->
      <!-- h-measure indicator -->
      <div class="absolute flex top-0 bottom-0 right-8 w-3">
        <!-- Vertical line -->
        <div class="pd-bg-indigo-400 w-1 absolute top-0 left-1/2 bottom-0"></div>
        <!-- Top chip -->
        <div class="w-full">
          <div class="rounded-full w-8 pd-bg-indigo-400 h-1 absolute top-0 left-1/2 -translate-y-1"></div>
        </div>
        <!-- Badge -->
        <div class="relative -rotate-90 h-3 flex flex-auto pd-font-mono font-bold pd-bg-white pd-text-indigo-600 pd-text-xs px-2 items-center justify-center leading-none dark:pd-bg-slate-800 dark:pd-text-indigo-400">128px</div>
        <!-- Bottom chip -->
        <div class="w-full">
          <div class="rounded-full w-8 pd-bg-indigo-400 h-1 absolute bottom-0 left-1/2 translate-y-1"></div>
        </div>
      </div>
      <!-- -->
    </div>
    <div class="pd-bg-white col-start-2 row-start-2 w-128 h-128">
      <box striped style="transform: translateX(-19px) translateY(-19px);border:3px solid white" class="box-content relative bg-stripes-blue w-128 h-128 p-16" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)" >
        <div class="w-full h-full pd-bg-blue-500 ring-1 ring-blue-500"></div>
      </box>
    </div>
    <div class="pd-bg-white col-start-3 row-start-2 dark:pd-bg-slate-800"></div>
    <div class="pd-bg-white col-start-1 row-start-3 dark:pd-bg-slate-800"></div>
    <div class="pd-bg-white col-start-2 row-start-3 dark:pd-bg-slate-800"></div>
    <div class="pd-bg-white col-start-3 row-start-3 dark:pd-bg-slate-800"></div>
  </div>
</container>

```html
<div class="box-content h-128 w-128 p-16 border-3 ...">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:box-content` to apply the `box-content` utility at only medium screen sizes and above.

```html
<div class="box-border md:box-content">
  <!-- ... -->
</div>
```
