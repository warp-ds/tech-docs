> Filters

# Backdrop Blur

Utilities for applying backdrop blur filters to an element.

## Quick reference

<qr-table />

## Basic usage
### Blurring behind an element
Use the `backdrop-blur-{size}` utilities to control an element’s backdrop blur.

<container>
  <div class="flex flex-wrap gap-16">
    <div class="w-160 relative">
      <div>backdrop-blur-none</div>
      <div class="absolute backdrop-blur-none left-24 right-24 top-48 bottom-24 rounded-8 border border-white"></div>
      <img class="w-144 rounded-16" src="/classes/20s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1920s" />
    </div>
    <div class="w-160 relative">
    <div>backdrop-blur</div>
      <div class="absolute backdrop-blur left-24 right-24 top-48 bottom-24 rounded-8 border border-white"></div>
      <img class="w-144 rounded-16" src="/classes/20s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1920s" />
    </div>
    <div class="w-160 relative">
      <div>backdrop-blur-s</div>
      <div class="absolute backdrop-blur-s left-24 right-24 top-48 bottom-24 rounded-8 border border-white"></div>
      <img class="w-144 rounded-16" src="/classes/20s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1920s" />
    </div>
    <div class="w-160 relative">
    <div>backdrop-blur-m</div>
      <div class="absolute backdrop-blur-m left-24 right-24 top-48 bottom-24 rounded-8 border border-white"></div>
      <img class="w-144 rounded-16" src="/classes/20s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1920s" />
    </div>
    <div class="w-160 relative">
    <div>backdrop-blur-l</div>
      <div class="absolute backdrop-blur-l left-24 right-24 top-48 bottom-24 rounded-8 border border-white"></div>
      <img class="w-144 rounded-16" src="/classes/20s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1920s" />
    </div>
    <div class="w-160 relative">
    <div>backdrop-blur-xl</div>
      <div class="absolute backdrop-blur-xl left-24 right-24 top-48 bottom-24 rounded-8 border border-white"></div>
      <img class="w-144 rounded-16" src="/classes/20s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1920s" />
    </div>
    <div class="w-160 relative">
    <div>backdrop-blur-xxl</div>
      <div class="absolute backdrop-blur-xxl left-24 right-24 top-48 bottom-24 rounded-8 border border-white"></div>
      <img class="w-144 rounded-16" src="/classes/20s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1920s" />
    </div>
    <div class="w-160 relative">
    <div>backdrop-blur-xxxl</div>
      <div class="absolute backdrop-blur-xxxl left-24 right-24 top-48 bottom-24 rounded-8 border border-white"></div>
      <img class="w-144 rounded-16" src="/classes/20s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1920s" />
    </div>
  </div>
</container>

```html
<div class="backdrop-blur-none ...">
  <!-- ... -->
</div>
<div class="backdrop-blur ...">
  <!-- ... -->
</div>
<div class="backdrop-blur-s ...">
  <!-- ... -->
</div>
```