> Transitions & Animation

# Transition Property

Utilities for controlling which CSS properties transition.

## Quick reference

<qr-table />

## Basic usage

### Controlling transitioned properties
Use the `transition-{properties}` utilities to specify which properties should transition when they change.

<example-container>
  <div class="max-w-[230] mx-a ex-box transition ease-in-out delay-150 pd-bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:pd-bg-indigo-600 duration-300">
    I'm a nice box, why are you not hovering over me?
  </div>
</example-container>

```html
  <div class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300 ...">
    I'm a nice box, why are you not hovering over me?
  </div>
```

## Applying conditionally

### Prefers-reduced-motion
For situations where the user has specified that they prefer reduced motion, you can conditionally apply animations and transitions using the motion-safe and motion-reduce variants.

```html
<button class="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
  <!-- ... -->
</button>
```

### Hover, focus, and other states
Warp lets you conditionally apply utility classes in different states using variant modifiers.
For example, use `hover:transition-all` to only apply the `transition-all` utility on hover.

```html
<div class="hover:transition-all">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:transition-all` to apply the `transition-all` utility at only medium screen sizes and above.

```html
<div class="md:transition-all">
  <!-- ... -->
</div>
```




