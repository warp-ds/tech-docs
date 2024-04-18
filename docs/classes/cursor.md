> Interactivity

# Cursor

Utilities for controlling the cursor style when hovering over an element.

## Quick reference

<qr-table />

## Basic usage

### Setting the cursor style
Use the `cursor-{style}` to control which cursor is displayed when hovering over an element.

<container>
  <div class="grid grid-cols-2 sm:grid-cols-3 flex-wrap gap-16 items-center justify-around">
    <div class="ex-box pd-bg-indigo-600 hover:pd-bg-indigo-700 disabled:pd-bg-indigo-300 dark:disabled:pd-bg-indigo-800 pd-text-white dark:disabled:pd-text-indigo-400 cursor-auto" tabindex="-1">
      cursor-auto
    </div>
    <div class="ex-box pd-bg-indigo-600 hover:pd-bg-indigo-700 disabled:pd-bg-indigo-300 dark:disabled:pd-bg-indigo-800 pd-text-white dark:disabled:pd-text-indigo-400 cursor-pointer" tabindex="-1">
      cursor-pointer
    </div>
    <div class="ex-box pd-bg-indigo-600 hover:pd-bg-indigo-700 disabled:pd-bg-indigo-300 dark:disabled:pd-bg-indigo-800 pd-text-white dark:disabled:pd-text-indigo-400 cursor-none" tabindex="-1">
      cursor-none
    </div>
  </div>
</container>

```html
<div class="cursor-auto ...">cursor-auto</div>
<div class="cursor-pointer ...">cursor-pointer</div>
<div class="cursor-none ...">cursor-none</div>
```

## Applying conditional

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers.
For example, use `focus:cursor-auto` to only apply the `cursor-auto` utility on focus.

```html
<div class="cursor-not-allowed focus:cursor-auto">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
For example, use `md:cursor-auto` to apply the `cursor-auto` utility at only medium screen sizes and above.

```html
<div class="cursor-not-allowed md:cursor-auto">
  <!-- ... -->
</div>
```
