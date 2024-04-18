> Backgrounds

# Background Clip

Utilities for controlling the bounding box of an element's background.

## Quick reference

<qr-table />

## Basic usage

### Setting the background clip
Use the `bg-clip-{keyword}` utilities to control the bounding box of an element’s background.

<container>
  <div class="flex sm:grid sm:grid-cols-3 sm:gap-24 sm:justify-around">
    <div class="flex flex-col justify-self-center place-items-center">
      <h4 class="m-[0_0_16px_0]! font-normal! pd-font-mono">bg-clip-border</h4>
      <div class="w-128 h-128 bg-clip-border p-16 rounded-8 pd-shadow-lg pd-bg-indigo-500 border-8 pd-border-white/50 border-dashed"><span class="sr-only">Visual example of <code>bg-clip-border</code></span></div>
    </div>
    <div class="flex flex-col justify-self-center place-items-center">
      <h4 class="m-[0_0_16px_0]! font-normal! pd-font-mono">bg-clip-padding</h4>
      <div class="w-128 h-128 bg-clip-padding p-16 rounded-8 pd-shadow-lg pd-bg-indigo-500 border-8 pd-border-indigo-500/50 border-dashed"><span class="sr-only">Visual example of <code>bg-clip-padding</code></span></div>
    </div>
    <div class="flex flex-col justify-self-center place-items-center">
      <h4 class="m-[0_0_16px_0]! font-normal! pd-font-mono">bg-clip-content</h4>
      <div class="w-128 h-128 bg-clip-content p-16 rounded-8 pd-bg-indigo-500 border-8 pd-border-indigo-500/50 border-dashed"><span class="sr-only">Visual example of <code>bg-clip-content</code></span></div>
    </div>
  </div>
</container>

```html
<div class="bg-clip-border ... "></div>
<div class="bg-clip-padding ... "></div>
<div class="bg-clip-content ... "></div>
```

### Cropping to text
Use `bg-clip-text` to crop an element’s background to match the shape of the text. Useful for effects where you want a background image to be visible through the text.

<container>
  <div class="pd-text-5xl pd-font-extrabold text-center">
    <span class="bg-clip-text bg-cover text-transparent bg-[url(/office-warping.png)]">
      Warp speed
    </span>
  </div>
</container>

```html
<span class="bg-clip-text bg-cover text-transparent bg-[url(...)]">
  Warp speed
</span>
```


