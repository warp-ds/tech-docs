> Interactivity

# Resize
Utilities for controlling how an element can be resized.

## Quick reference
<qr-table />

## Basic usage
### Resizing in all directions
Use `resize` to make an element horizontally and vertically resizable.

<container>
  <div class="relative overflow-auto">
    <div class="w-full flex items-center justify-center">
      <textarea class="resize pd-text-sm p-16 mb-32 w-144 border-1 pd-border-slate-900/10 pd-shadow-xl rounded-8 dark:pd-bg-slate-800 dark:pd-border-slate-100/10 dark:pd-highlight-white/5" rows="3" style="height: 134px; width: 226px;"></textarea>
    </div>
  </div>
</container>

```html
<textarea class="resize ..."></textarea>
```

### Resizing vertically
Use `resize-y` to make an element vertically resizable.

<container>
  <div class="relative overflow-auto">
    <div class="w-full flex items-center justify-center">
      <textarea class="resize-y pd-text-sm p-16 mb-32 w-144 border-1 pd-border-slate-900/10 pd-shadow-xl rounded-8 dark:pd-bg-slate-800 dark:pd-border-slate-100/10 dark:pd-highlight-white/5" rows="3" style="height: 134px; width: 226px;"></textarea>
    </div>
  </div>
</container>

```html
<textarea class="resize-y ..."></textarea>
````

### Resizing horizontally
Use `resize-x` to make an element horizontally resizable.

<container>
  <div class="relative overflow-auto">
    <div class="w-full flex items-center justify-center">
      <textarea class="resize-x pd-text-sm p-16 mb-32 w-144 border-1 pd-border-slate-900/10 pd-shadow-xl rounded-8 dark:pd-bg-slate-800 dark:pd-border-slate-100/10 dark:pd-highlight-white/5" rows="3" style="height: 134px; width: 226px;">
      </textarea>
    </div>
  </div>
</container>

```html
<textarea class="resize-x ..."></textarea>
```

### Preventing resizing
Use `resize-none` to prevent an element from being resizable.

<container>
  <div class="relative overflow-auto">
    <div class="w-full flex items-center justify-center">
      <textarea class="resize-none pd-text-sm p-16 mb-32 w-144 border-1 pd-border-slate-900/10 pd-shadow-xl rounded-8 dark:pd-bg-slate-800 dark:pd-border-slate-100/10 dark:pd-highlight-white/5" rows="3" style="height: 134px; width: 226px;"></textarea>
    </div>
  </div>
</container>

```html
<textarea class="resize-none ..."></textarea>
```

## Applying conditionally

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:resize` to only apply the `resize` utility on hover.
```html
<div class="resize-none hover:resize">
  <!-- ... -->
</div>
```


### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:resize` to apply the `resize` utility at only medium screen sizes and above.

```html
<div class="resize-none md:resize">
  <!-- ... -->
</div>
```
