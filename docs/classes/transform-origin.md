> Transforms

# Transform Origin
Utilities for specifying the origin for an element's transformations.

## Quick reference

<qr-table />

## Basic usage
### Changing the transform origin
Specify an element’s transform origin using the `origin-{keyword}` utilities.

<container>
  <div class="flex items-center justify-around gap-32 sm:gap-16 pd-font-mono font-bold pb-32">
    <div class="flex flex-col items-center shrink-0">
      <p class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono text-center mb-24 dark:pd-text-slate-400">
        origin-center
      </p>
      <div class="relative">
        <div class="absolute inset-0">
          <img class="w-96 h-96 object-cover rounded-8 opacity-25" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        </div>
        <div class="relative z-10 origin-center rotate-30">
          <img class="w-96 h-96 object-cover rounded-8 pd-shadow-xl" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
          <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center shrink-0">
      <p class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono text-center mb-24 dark:pd-text-slate-400">
        origin-top-left
      </p>
      <div class="relative">
        <div class="absolute inset-0">
          <img class="w-96 h-96 object-cover rounded-8 opacity-25" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        </div>
        <div class="relative z-10 origin-top-left rotate-30">
          <img class="w-96 h-96 object-cover rounded-8 pd-shadow-xl" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
          <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center shrink-0">
      <p class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono text-center mb-24 dark:pd-text-slate-400">
        origin-bottom
      </p>
      <div class="relative">
        <div class="absolute inset-0">
          <img class="w-96 h-96 object-cover rounded-8 opacity-25" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        </div>
        <div class="relative z-10 origin-bottom rotate-30">
          <img class="w-96 h-96 object-cover rounded-8 pd-shadow-xl" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
          <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
        </div>
      </div>
    </div>

  </div>
</container>

```html
<img class="rotate-30 origin-center ...">
<img class="rotate-30 origin-top-left ...">
<img class="rotate-30 origin-bottom ...">
```

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:origin-top` to only apply the `origin-top` utility on hover.

```html
<div class="origin-center hover:origin-top">
  <!-- ... -->
</div>
```
​
### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:origin-top` to apply the `origin-top` utility at only medium screen sizes and above.

```html
<div class="origin-center md:origin-top">
  <!-- ... -->
</div>
```