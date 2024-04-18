> Transforms

# Rotate

Utilities for rotating elements with transform.

## Quick reference

| Class                  | Description                         |
|------------------------|-------------------------------------|
| `rotate-{deg}`         | `transform: rotate({deg})`          |

> Available values <br />
> `{deg}`: Accepts any degree (120 rotates 120 degrees with the clock). <br />

## Basic usage

### Rotating an element
Use the `rotate-{angle}` utilities to rotate an element.

<container>
  <div class="flex items-center justify-around gap-32 sm:gap-16 pd-font-mono font-bold">
    <div class="flex flex-col items-center shrink-0">
      <p class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono text-center mb-24 dark:pd-text-slate-400">
        rotate-0
      </p>
      <div class="relative">
        <div class="absolute inset-0">
          <img class="w-96 h-96 object-cover rounded-8 opacity-25" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        </div>
        <div class="relative z-10 rotate-0">
          <img class="w-96 h-96 object-cover rounded-8 pd-shadow-xl" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
          <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center shrink-0">
      <p class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono text-center mb-24 dark:pd-text-slate-400">
        rotate-45
      </p>
      <div class="relative">
        <div class="absolute inset-0">
          <img class="w-96 h-96 object-cover rounded-8 opacity-25" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        </div>
        <div class="relative z-10 rotate-45">
          <img class="w-96 h-96 object-cover rounded-8 pd-shadow-xl" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
          <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center shrink-0">
      <p class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono text-center mb-24 dark:pd-text-slate-400">
        rotate-90
      </p>
      <div class="relative">
        <div class="absolute inset-0">
          <img class="w-96 h-96 object-cover rounded-8 opacity-25" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        </div>
        <div class="relative z-10 rotate-90">
          <img class="w-96 h-96 object-cover rounded-8 pd-shadow-xl" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
          <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center shrink-0">
      <p class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono text-center mb-24 dark:pd-text-slate-400">
        rotate-180
      </p>
      <div class="relative">
        <div class="absolute inset-0">
          <img class="w-96 h-96 object-cover rounded-8 opacity-25" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
        </div>
        <div class="relative z-10 rotate-180">
          <img class="w-96 h-96 object-cover rounded-8 pd-shadow-xl" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
          <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
        </div>
      </div>
    </div>
  </div>
</container>

```html
<img class="rotate-0 ...">
<img class="rotate-45 ...">
<img class="rotate-90 ...">
<img class="rotate-180 ...">
```

### Using negative values
To use a negative rotate value, prefix the class name with a dash to convert it to a negative value.

```html
<img class="-rotate-45 ..." />​
```

### Removing transforms
To remove all transforms on an element at once, use the `transform-none` utility.
This can be useful when you want to remove transforms conditionally, such as on hover or at a particular breakpoint.

```html
<div class="scale-75 translate-x-4 skew-y-3 md:transform-none">
  <!-- ... -->
</div>
```

### Hardware acceleration
If your transition performs better when rendered by the GPU instead of the CPU, you can force hardware acceleration by adding the `transform-gpu` utility.

Use `transform-cpu` to force things back to the CPU if you need to undo this conditionally.

```html
<div class="rotate-45 transform-gpu">
  <!-- ... -->
</div>
```

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:rotate-45 to only apply the rotate-45 utility on hover.

```html
<div class="hover:rotate-45">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:rotate-45` to apply the `rotate-45` utility at only medium screen sizes and above.

```html
<div class="md:rotate-45">
  <!-- ... -->
</div>
```
