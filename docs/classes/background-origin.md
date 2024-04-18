> Backgrounds

# Background Origin

Utilities for controlling how an element's background is positioned relative to borders, padding, and content.

## Quick reference

<qr-table />

## Basic usage

### Setting the background origin
Use `bg-origin-border`, `bg-origin-padding` and `bg-origin-content` to control where an element’s background is rendered.

<container>
  <div class="flex sm:grid sm:grid-cols-3 sm:gap-24 sm:justify-around">
    <div class="flex flex-col justify-self-center place-items-center">
      <h4 class="m-[0_0_16px_0]! font-normal! pd-font-mono">bg-origin-border</h4>
      <div class="bg-origin-border bg-no-repeat w-128 h-128 p-16 rounded-8 pd-shadow-lg border-8 pd-border-white/50 border-dashed bg-[url(/50s-scientists_240.jpg)]"><span class="sr-only">Visual example of <code>bg-origin-border</code></span></div>
    </div>
    <div class="flex flex-col justify-self-center place-items-center">
      <h4 class="m-[0_0_16px_0]! font-normal! pd-font-mono">bg-origin-padding</h4>
      <div class="bg-origin-padding bg-no-repeat w-128 h-128 p-16 rounded-8 pd-shadow-lg border-8 pd-border-indigo-500/50 border-dashed bg-[url(/50s-scientists_240.jpg)]"><span class="sr-only">Visual example of <code>bg-origin-padding</code></span></div>
    </div>
    <div class="flex flex-col justify-self-center place-items-center">
      <h4 class="m-[0_0_16px_0]! font-normal! pd-font-mono">bg-origin-content</h4>
      <div class="bg-origin-content bg-no-repeat w-128 h-128 p-16 pd-bg-indigo-100 rounded-8 border-8 pd-border-indigo-500/50 border-dashed bg-[url(/50s-scientists_240.jpg)]"><span class="sr-only">Visual example of <code>bg-origin-content</code></span></div>
    </div>
  </div>
</container>

```html
<div class="bg-origin-border ... "></div>
<div class="bg-origin-padding ... "></div>
<div class="bg-origin-content ... "></div>
```

