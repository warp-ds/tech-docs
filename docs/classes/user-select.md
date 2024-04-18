> Interactivity

# User Select
Utilities for controlling whether the user can select text in an element.

## Quick reference
<qr-table />

## Basic usage
### Disabling text selection
Use `select-none` to prevent selecting text in an element and its children.

<container>
  <div class="flex justify-center">
    <div class="ex-box select-none inline-flex text-center pd-bg-white pd-text-slate-900 pd-font-semibold pd-shadow-xl rounded-8 dark:pd-bg-slate-800 dark:pd-highlight-white/5 dark:pd-text-slate-200 pd-border pd-border-slate-900/5 dark:pd-border-slate-100/5">
     The quick smart warp scientist drinks the hazy coffee.
    </div>
  </div>
</container>

```html
<div class="select-none ...">
  The quick smart warp scientist drinks the hazy coffee.
</div>
```

### Allowing text selection
Use `select-text` to allow selecting text in an element and its children.

<container>
  <div class="flex justify-center">
    <div class="ex-box select-text inline-flex text-center pd-bg-white pd-text-slate-900 pd-font-semibold pd-shadow-xl rounded-8 dark:pd-bg-slate-800 dark:pd-highlight-white/5 dark:pd-text-slate-200 pd-border pd-border-slate-900/5 dark:pd-border-slate-100/5">
     The quick smart warp scientist drinks the hazy coffee.
    </div>
  </div>
</container>

```html
<div class="select-text ...">
  The quick smart warp scientist drinks the hazy coffee.
</div>
```

### Selecting all text in one click
Use `select-all` to automatically select all the text in an element when a user clicks.

<container>
  <div class="flex justify-center">
    <div class="ex-box select-all inline-flex text-center pd-bg-white pd-text-slate-900 pd-font-semibold pd-shadow-xl rounded-8 dark:pd-bg-slate-800 dark:pd-highlight-white/5 dark:pd-text-slate-200 pd-border pd-border-slate-900/5 dark:pd-border-slate-100/5">
     The quick smart warp scientist drinks the hazy coffee.
    </div>
  </div>
</container>

```html
<div class="select-all ...">
  The quick smart warp scientist drinks the hazy coffee.
</div>
```

### Using auto select behaviour
Use `select-auto` to use the default browser behavior for selecting text. Useful for undoing other classes like `select-none` at different breakpoints or whatever.

<container>
  <div class="flex justify-center">
    <div class="ex-box select-auto inline-flex text-center pd-bg-white pd-text-slate-900 pd-font-semibold pd-shadow-xl rounded-8 dark:pd-bg-slate-800 dark:pd-highlight-white/5 dark:pd-text-slate-200 pd-border pd-border-slate-900/5 dark:pd-border-slate-100/5">
     The quick smart warp scientist drinks the hazy coffee.
    </div>
  </div>
</container>

```html
<div class="select-auto ...">
  The quick smart warp scientist drinks the hazy coffee.
</div>
```

## Applying conditionally

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:select-all` to only apply the `select-all` utility on hover.

```html
<div class="hover:select-all">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:select-all` to apply the `select-all` utility at only medium screen sizes and above.

```html
<div class="md:select-all">
  <!-- ... -->
</div>
```
