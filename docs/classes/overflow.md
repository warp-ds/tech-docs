> Layout

# Overflow

Utilities for controlling how an element handles content that is too large for the container.

## Quick reference

<qr-table />

## Basic usage

### Showing content that overflows
Use `overflow-visible` to prevent content within an element from being clipped. Note that any content that overflows the bounds of the element will then be visible.

<container>
  <div class="flex justify-center">
    <div class="relative">
      <div style="width:300px;" class="mx-auto pd-bg-white p-16 rounded pd-text-slate-500 dark:pd-bg-slate-800 dark:pd-text-slate-400">
       <div class="flex items-center overflow-visible">
          <img src="/classes/matter.jpg" class="absolute object-cover h-128 -ml-40 -my-32 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
          <div class="pl-112">
            <div class="font-bold">Justina Matter</div>
            <span>Warp Scientist</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</container>

```html
<div class="overflow-visible ..."></div>
```

### Hiding content that overflows
Use `overflow-hidden` to clip any content within an element that overflows the bounds of that element.

<container>
  <div class="flex justify-center">
    <div class="relative">
      <div style="width:300px;" class="relative overflow-hidden mx-auto pd-bg-white p-16 rounded pd-text-slate-500 dark:pd-bg-slate-800 dark:pd-text-slate-400">
       <div class="flex items-center ">
          <img src="/classes/matter.jpg" class="absolute object-cover h-128 -ml-40 -my-32 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
          <div class="pl-112">
            <div class="font-bold">Justina Matter</div>
            <span>Warp Scientist</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</container>

```html
<div class="overflow-hidden ..."></div>
```

### Scrolling if needed
Use `overflow-auto` to add scrollbars to an element in the event that its content overflows the bounds of that element. Unlike `overflow-scroll`, which always shows scrollbars, this utility will only show them if scrolling is necessary.

<container>
  <div class="flex justify-center">
    <div class="relative">
      <div style="width:300px;max-height:275px" class="relative overflow-auto mx-auto pd-bg-white p-16 rounded pd-text-slate-500 dark:pd-bg-slate-800 dark:pd-text-slate-400">
       <div class="flex items-center ">
          <img src="/classes/matter.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
          <div class="">
            <div class="font-bold">Justina Matter</div>
            <span>Warp Scientist</span>
          </div>
        </div>
        <hr class="-mx-16!" />
        <div class="flex items-center ">
          <img src="/classes/profile1.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
          <div class="">
            <div class="font-bold">Narve Hoops</div>
            <span>Warp Scientist</span>
          </div>
        </div>
        <hr class="-mx-16!" />
        <div class="flex items-center ">
          <img src="/classes/profile5.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
          <div class="">
            <div class="font-bold">Dagny Calamity</div>
            <span>Warp Scientist</span>
          </div>
        </div>
        <hr class="-mx-16!" />
        <div class="flex items-center ">
          <img src="/classes/profile2.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
          <div class="">
            <div class="font-bold">Joar Quack</div>
            <span>Warp Scientist</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</container>

```html
<div class="overflow-y-auto h-[275] ..."></div>
```

### Scrolling horizontally always
Use `overflow-x-scroll` to allow horizontal scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.

<container>
  <div class="flex justify-center ">
    <div class="overflow-x-scroll mx-auto pd-bg-white p-16 rounded pd-text-slate-500 dark:pd-bg-slate-800 dark:pd-text-slate-400" style="max-width:520px">
      <div class="flex cols-6">
        <div class="flex-none py-24 px-12 first:pl-24 last:pr-24">
          <div class="flex flex-col items-center justify-center min-width-64 gap-8">
            <img src="/classes/matter.jpg" class="object-cover w-64 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <div class="font-bold">Matter</div>
          </div>
        </div>
        <div class="flex-none py-24 px-12 first:pl-24 last:pr-24">
          <div class="flex flex-col items-center justify-center min-width-64 gap-8">
            <img src="/classes/profile1.jpg" class="object-cover w-64 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <div class="font-bold">Hoops</div>
          </div>
        </div>
        <div class="flex-none py-24 px-12 first:pl-24 last:pr-24">
          <div class="flex flex-col items-center justify-center min-width-64 gap-8">
            <img src="/classes/profile2.jpg" class="object-cover w-64 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <div class="font-bold">Quack</div>
          </div>
        </div>
        <div class="flex-none py-24 px-12 first:pl-24 last:pr-24">
          <div class="flex flex-col items-center justify-center min-width-64 gap-8">
            <img src="/classes/profile3.jpg" class="object-cover w-64 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <div class="font-bold">Sparks</div>
          </div>
        </div>
        <div class="flex-none py-24 px-12 first:pl-24 last:pr-24">
          <div class="flex flex-col items-center justify-center min-width-64 gap-8">
            <img src="/classes/profile4.jpg" class="object-cover w-64 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <div class="font-bold">Hubble</div>
          </div>
        </div>
        <div class="flex-none py-24 px-12 first:pl-24 last:pr-24">
          <div class="flex flex-col items-center justify-center min-width-64 gap-8">
            <img src="/classes/profile5.jpg" class="object-cover w-64 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <div class="font-bold">Calamity</div>
          </div>
        </div>
        <div class="flex-none py-24 px-12 first:pl-24 last:pr-24">
          <div class="flex flex-col items-center justify-center min-width-64 gap-8">
            <img src="/classes/profile6.jpg" class="object-cover w-64 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <div class="font-bold">Glum</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</container>

### Scrolling vertically always
Use `overflow-y-scroll` to allow vertical scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.

<container>
  <div class="flex justify-center">
    <div class="relative">
      <div style="width:300px;max-height:275px" class="relative overflow-y-scroll mx-auto pd-bg-white p-16 rounded pd-text-slate-500 dark:pd-bg-slate-800 dark:pd-text-slate-400">
       <div class="flex items-center ">
          <img src="/classes/matter.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
          <div class="">
            <div class="font-bold">Justina Matter</div>
            <span>Warp Scientist</span>
          </div>
        </div>
        <hr class="-mx-16!" />
        <div class="flex items-center ">
          <img src="/classes/profile1.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
          <div class="">
            <div class="font-bold">Narve Hoops</div>
            <span>Warp Scientist</span>
          </div>
        </div>
        <hr class="-mx-16!" />
        <div class="flex items-center ">
          <img src="/classes/profile5.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
          <div class="">
            <div class="font-bold">Dagny Calamity</div>
            <span>Warp Scientist</span>
          </div>
        </div>
        <hr class="-mx-16!" />
        <div class="flex items-center ">
          <img src="/classes/profile2.jpg" class="object-cover h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
          <div class="">
            <div class="font-bold">Joar Quack</div>
            <span>Warp Scientist</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</container>

```html
<div class="overflow-y-scroll ..."></div>
```

### Scrolling in all directions
Use `overflow-scroll` to add scrollbars to an element. Unlike `overflow-auto`, which only shows scrollbars if they are necessary, this utility always shows them. Note that some operating systems (like macOS) hide unnecessary scrollbars regardless of this setting.

<container>
  <div class="overflow-scroll" style="max-height:360px;">
    <img style="max-width:800px;width:800px" src="/classes/50s-scientists.jpg" alt="Ai generated picture of warp scientists from the 1950s">
  </div>
</container>

```html
<div class="overflow-scroll ..."></div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:overflow-scroll` to apply the `overflow-scroll` utility at only medium screen sizes and above.

```html
<div class="overflow-auto md:overflow-scroll">
  <!-- ... -->
</div>
```
