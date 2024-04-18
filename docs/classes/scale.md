> Transforms

# Scale

Utilities for scaling elements with transform.

## Quick reference

| Class                  | Description                                                                      |
|------------------------|----------------------------------------------------------------------------------|
| `scale-{percentage}`   | `transform: translateX({percentage})`<br />`transform: translateY({percentage})` |
| `scale-x-{percentage}` | `transform: translateX({percentage})`                                            |
| `scale-y-{percentage}` | `transform: translateY({percentage})`                                            |

> Available values <br />
> `{percentage}`: Accepts any percentage value. <br />

## Basic usage

### Scaling an element
Use the `scale-{percentage}`, `scale-x-{percentage}`, and `scale-y-{percentage}` utilities to scale an element.

<container>
<div class="flex items-center justify-around gap-16 sm:gap-4 pd-font-mono font-bold p-8 px-12 sm:px-8 pb-10 shrink-0">
<div class="flex flex-col items-center shrink-0">
  <p class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono text-center mb-32 dark:pd-text-slate-400">scale-75</p>
  <div class="relative">
    <div class="absolute inset-0">
      <img class="w-128 h-128 object-cover rounded-8 opacity-25" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
    </div>
    <div class="relative z-10 scale-75">
      <img class="w-128 h-128 object-cover rounded-8 pd-shadow-xl" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
      <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
    </div>
  </div>
</div>
<div class="flex flex-col items-center shrink-0">
 <p class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono text-center mb-32 dark:pd-text-slate-400">scale-100</p>
  <div class="relative">
    <div class="relative z-10 scale-100">
      <img class="w-128 h-128 object-cover rounded-8 pd-shadow-xl" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
      <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
    </div>
  </div>
</div>
<div class="flex flex-col items-center shrink-0">
 <p class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono text-center mb-32 dark:pd-text-slate-400">scale-125</p>
  <div class="relative">
    <div class="relative z-10 scale-125">
      <img class="w-128 h-128 object-cover rounded-8 pd-shadow-xl" src="/classes/20s-scientists.jpg" alt="Ai generated image of 1920s scientists working on a warp drive">
      <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
    </div>
  </div>
</div>
</div>
</container>

```html
<img class="scale-75 ...">
<img class="scale-100 ...">
<img class="scale-125 ...">
```

### Using negative values
To use a negative scale value, prefix the class name with a dash to convert it to a negative value.

```html
<img class="-scale-50">
```

### Removing transforms
To remove all transforms on an element at once, use the `transform-none` utility.
This can be useful when you want to remove transforms conditionally, such as on hover or at a particular breakpoint.

```html
<div class="scale-75 translate-x-16 skew-y-16 md:transform-none">
  <!-- ... -->
</div>
```

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:scale-125` to only apply the `scale-125` utility on hover.

```html
<div class="hover:scale-125">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:scale-125` to apply the `scale-125` utility at only medium screen sizes and above.

```html
<div class="md:scale-125">
  <!-- ... -->
</div>
```
