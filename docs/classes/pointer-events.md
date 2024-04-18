> Interactivity

# Pointer Events
Utilities for controlling whether an element responds to pointer events.

## Quick reference
<qr-table />

## Basic usage
### Controlling pointer event behavior
Use `pointer-events-auto` to revert to the default browser behavior for pointer events (like `:hover` and `click`).

Use `pointer-events-none` to make an element ignore pointer events. The pointer events will still trigger on child elements and pass-through to elements that are “beneath” the target.

<container>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-24 px-0 sm:px-10 pd-font-mono font-bold">
    <div class="flex flex-col">
      <p class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono mb-3 dark:pd-text-slate-400">pointer-events-auto</p>
      <div class="relative rounded-8 pd-shadow-xl w-full">
        <div class="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-auto">
          <svg class="absolute pd-text-slate-400 h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <input type="text" placeholder="Search" class="pd-font-sans block pd-text-sm w-full pl-32 py-8 px-6 pd-border pd-border-slate-900/10 dark:pd-border-slate-100/10 pd-text-slate-500 rounded-8 dark:pd-bg-slate-800 dark:pd-highlight-white/5 dark:pd-text-slate-400">
      </div>
    </div>
    <div class="flex flex-col">
      <p class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono mb-3 dark:pd-text-slate-400">pointer-events-none</p>
      <div class="relative rounded-8 pd-shadow-xl w-full">
        <div class="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none">
          <svg class="absolute pd-text-slate-400 h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <input type="text" placeholder="Search" class="pd-font-sans block pd-text-sm w-full pl-32 py-8 px-6 pd-border pd-border-slate-900/10 dark:pd-border-slate-100/10 pd-text-slate-500 rounded-8 dark:pd-bg-slate-800 dark:pd-highlight-white/5 dark:pd-text-slate-400">
      </div>
    </div>
  </div>
</container>

```html
<div class="...">
  <div class="pointer-events-auto ...">
    <svg>...</svg>
  </div>
  <input type="text" placeholder="Search" class="...">
</div>

<div class="...">
  <div class="pointer-events-none ...">
    <svg>...</svg>
  </div>
  <input type="text" placeholder="Search" class="...">
</div>
```

## Applying conditionally
### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `focus:pointer-events-auto` to only apply the `pointer-events-auto` utility on focus.

```html
<div class="pointer-events-none focus:pointer-events-auto">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:pointer-events-auto` to apply the `pointer-events-auto` utility at only medium screen sizes and above.

```html
<div class="pointer-events-none md:pointer-events-auto">
  <!-- ... -->
</div>
```

