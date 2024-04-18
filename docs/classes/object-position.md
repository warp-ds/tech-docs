> Layout

# Object Position

Utilities for controlling how a replaced element's content should be positioned within its container.

## Quick reference

<qr-table />

## Basic usage

### Positioning a replaced element
Use the `object-{side}` utilities to specify how a replaced element’s content should be positioned within its container.

<container>
  <div class="flex sm:grid sm:grid-cols-3 sm:gap-24 sm:justify-around">
    <div class="flex flex-col justify-self-start place-items-start">
      <div class="pb-8">.object-left-top</div>
      <div class="h-128 w-128">
        <img width="300" src="/classes/50s-scientists_240.jpg" class="object-none object-top-left rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
      </div>
    </div>
    <div class="flex flex-col justify-self-center place-items-center">
      <div class="pb-8">.object-top</div>
      <div class="h-128 w-128">
        <img src="/classes/50s-scientists_240.jpg" class="object-none object-top rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
      </div>
    </div>
    <div class="flex flex-col justify-self-end place-items-end">
      <div class="pb-8">.object-right-top</div>
      <div class="h-128 w-128">
        <img src="/classes/50s-scientists_240.jpg" class="object-none object-right-top rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
      </div>
    </div>
    <div class="flex flex-col justify-self-start place-items-start">
      <div class="pb-8">.object-left</div>
      <div class="h-128 w-128">
        <img src="/classes/50s-scientists_240.jpg" class="object-none object-left rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
      </div>
    </div>
    <div class="flex flex-col justify-self-center place-items-center">
      <div class="pb-8">.object-center</div>
      <div class="h-128 w-128">
        <img src="/classes/50s-scientists_240.jpg" class="object-none object-center rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
      </div>
    </div>
    <div class="flex flex-col justify-self-end place-items-end">
      <div class="pb-8">.object-right</div>
      <div class="h-128 w-128">
        <img src="/classes/50s-scientists_240.jpg" class="object-none object-right rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
      </div>
    </div>
     <div class="flex flex-col justify-self-start place-items-start">
      <div class="pb-8">.object-bottom-left</div>
      <div class="h-128 w-128">
        <img src="/classes/50s-scientists_240.jpg" class="object-none object-bottom-left rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
      </div>
    </div>
    <div class="flex flex-col justify-self-center place-items-center">
      <div class="pb-8">.object-bottom-center</div>
      <div class="h-128 w-128">
        <img src="/classes/50s-scientists_240.jpg" class="object-none object-bottom-center rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
      </div>
    </div>
    <div class="flex flex-col justify-self-end place-items-end">
      <div class="pb-8">.object-bottom-right</div>
      <div class="h-128 w-128">
        <img src="/classes/50s-scientists_240.jpg" class="object-none object-bottom-right rounded" alt="AI generated picture of 1950s scientists working on a warp drive" />
      </div>
    </div>
  </div>
</container>

```html
<img class="object-none object-left-top ..." src="..." alt="..." />
<img class="object-none object-top ..." src="..." alt="..." />
<img class="object-none object-right-top ..." src="..." alt="..." />
<img class="object-none object-left ..." src="..." alt="..." />
<img class="object-none object-center ..." src="..." alt="..." />
<img class="object-none object-right" src="..." alt="..." />
<img class="object-none object-left-bottom ..." src="..." alt="..." />
<img class="object-none object-bottom ..." src="..." alt="..." />>
<img class="object-none object-right-bottom ..." src="..." alt="..." />
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:object-top` to apply the `object-top` utility at only medium screen sizes and above.

```html
<img class="object-center md:object-top" src="...">
```
