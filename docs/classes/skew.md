> Transforms

# Skew

Utilities for skewing elements with transform.

## Quick reference

| Class             | Description                  |
|-------------------|------------------------------|
| `skew-x-{amount}` | `transform: skewX({amount})` |
| `skew-y-{amount}` | `transform: skewY({amount})` |

## Basic usage

### Skewing an element
Use the `skew-x-{amount}` and `skew-y-{amount}` utilities to skew an element.

<container>
  <div class="flex items-center justify-around gap-32 sm:gap-16 pd-font-mono font-bold">
    <div class="flex flex-col items-center shrink-0">
      <p class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono text-center mb-24 dark:pd-text-slate-400">
        skew-y-0
      </p>
      <div class="relative">
        <div class="absolute inset-0">
          <img class="w-96 h-96 object-cover rounded-8 opacity-25" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        </div>
        <div class="relative z-10 skew-y-0">
          <img class="w-96 h-96 object-cover rounded-8 pd-shadow-xl" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
          <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center shrink-0">
      <p class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono text-center mb-24 dark:pd-text-slate-400">
        skew-y-3
      </p>
      <div class="relative">
        <div class="absolute inset-0">
          <img class="w-96 h-96 object-cover rounded-8 opacity-25" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        </div>
        <div class="relative z-10 skew-y-3">
          <img class="w-96 h-96 object-cover rounded-8 pd-shadow-xl" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
          <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center shrink-0">
      <p class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono text-center mb-24 dark:pd-text-slate-400">
        skew-y-6
      </p>
      <div class="relative">
        <div class="absolute inset-0">
          <img class="w-96 h-96 object-cover rounded-8 opacity-25" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        </div>
        <div class="relative z-10 skew-y-6">
          <img class="w-96 h-96 object-cover rounded-8 pd-shadow-xl" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
          <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center shrink-0">
      <p class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono text-center mb-24 dark:pd-text-slate-400">
        skew-y-12
      </p>
      <div class="relative">
        <div class="absolute inset-0">
          <img class="w-96 h-96 object-cover rounded-8 opacity-25" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        </div>
        <div class="relative z-10 skew-y-12">
          <img class="w-96 h-96 object-cover rounded-8 pd-shadow-xl" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
          <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
        </div>
      </div>
    </div>
  </div>
</container>

```html
<img class="skew-y-0 ...">
<img class="skew-y-3 ...">
<img class="skew-y-6 ...">
<img class="skew-y-12 ...">
```

### Using negative values
To use a negative skew value, prefix the class name with a dash to convert it to a negative value.

```html
<img class="-skew-y-6 ...">
```

### Removing transforms
To remove all transforms on an element at once, use the `transform-none` utility.

```html
<div class="scale-75 translate-x-16 skew-y-12 md:transform-none">
  <!-- ... -->
</div>
```

### Hardware acceleration
If your transition performs better when rendered by the GPU instead of the CPU, you can force hardware acceleration by adding the `transform-gpu` utility.

Use transform-cpu to force things back to the CPU if you need to undo this conditionally.

```html
<div class="skew-y-12 transform-gpu">
  <!-- ... -->
</div>
```

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:skew-y-12` to only apply the `skew-y-12` utility on hover.

```html
<div class="hover:skew-y-12">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:skew-y-12` to apply the `skew-y-12´ utility at only medium screen sizes and above.

```html
<div class="md:skew-y-12">
  <!-- ... -->
</div>
```
