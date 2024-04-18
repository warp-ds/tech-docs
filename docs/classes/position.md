> Layout

# Position

Utilities for controlling how an element is positioned in the DOM.

## Quick reference

<qr-table />

## Basic usage

### Statically positioning elements
Use `static` to position an element according to the normal flow of the document.

Any `offsets` will be ignored and the element will not act as a position reference for absolutely positioned children.

<container>
  <div class="relative">
    <box striped class="rounded-8 p-16" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="static pd-bg-fuchsia-500 px-16 py-4 h-144 rounded-4">
        <p class="ex-font">Static parent</p>
        <div class="absolute bottom-0 left-0 pd-bg-purple-600 pd-shadow-lg rounded-4 px-16 py-4 pd-text-white">
          <p class="ex-font">Absolute child</p>
        </div>
      </div>
    </box>
  </div>
</container>

```html
<div class="static ...">
  <p>Static parent</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute child</p>
  </div>
</div>
```

### Relatively positioning elements
Use `relative` to position an element according to the normal flow of the document.

Any `offsets` are calculated relative to the element’s normal position and the element will act as a position reference for absolutely positioned children.

<container>
  <div class="relative">
    <box striped class="rounded-8 p-16" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
      <div class="relative pd-bg-blue-500 px-16 py-4 h-144 rounded-4">
        <p class="ex-font">Relative parent</p>
        <div class="absolute bottom-0 left-0 pd-bg-indigo-600 pd-shadow-lg rounded-4 px-16 py-4 pd-text-white">
          <p class="ex-font">Absolute child</p>
        </div>
      </div>
    </box>
  </div>
</container>

```html
<div class="relative ...">
  <p>Relative parent</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute child</p>
  </div>
</div>
```

### Absolutely positioning elements
Use `absolute` to position an element outside the normal flow of the document, causing neighboring elements to act as if the element doesn't exist.

Any `offsets` are calculated relative to the nearest parent that has a position other than static, and the element will act as a position reference for other absolutely positioned children.

<container>
  <h4 class="mb-8">With static positioning</h4>
  <div class="relative">
    <box striped class="relative rounded-8 p-16" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="ex-font pd-text-black pb-4">Relative parent</div>
      <div class="static pd-bg-fuchsia-500 px-16 py-4 h-144 rounded-4">
        <p class="ex-font">Static parent</p>
        <div class="flex gap-16">
          <div class="static bottom-0 left-0 pd-bg-purple-500 pd-shadow-lg rounded-4 px-16 py-4 pd-text-white">
            <p class="ex-font">Static child</p>
          </div>
          <div class="static bottom-0 left-0 pd-bg-white pd-shadow-lg rounded-4 px-16 py-4 pd-text-black">
            <p class="ex-font pd-text-black!">Static sibling</p>
          </div>
        </div>
      </div>
    </box>
  </div>
  <h4 class="mt-24 mb-8">With absolute positioning</h4>
  <div class="relative">
    <box striped class="relative rounded p-16" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
      <div class="pb-4 ex-font pd-text-black">Relative parent</div>
      <div class="static pd-bg-blue-500 px-16 py-4 h-144 rounded">
        <p class="ex-font">Static parent</p>
        <div class="flex gap-16">
          <div class="absolute top-0 right-0 pd-bg-indigo-500 pd-shadow-lg rounded-4 px-16 py-4 pd-text-white">
            <p class="ex-font">Absolute child</p>
          </div>
          <div class="static bottom-0 left-0 pd-bg-white pd-shadow-lg rounded-4 px-16 py-4 pd-text-black">
            <p class="ex-font pd-text-black">Static sibling</p>
          </div>
        </div>
      </div>
    </box>
  </div>
</container>

```html
<div class="static ...">
  <!-- Static parent -->
  <div class="static ..."><p>Static child</p></div>
  <div class="inline-block ..."><p>Static sibling</p></div>
  <!-- Static parent -->
  <div class="absolute ..."><p>Absolute child</p></div>
  <div class="inline-block ..."><p>Static sibling</p></div>
</div>
```

### Fixed positioning elements
Use `fixed` to position an element relative to the browser window.

Any `offsets` are calculated relative to the viewport and the element will act as a position reference for absolutely positioned children.

<container>
  <div class="flex justify-center -my-32">
    <div class="relative">
      <div style="width:300px;max-height:275px" class="overflow-auto mx-auto pd-bg-white px-16 pd-text-slate-500 dark:pd-bg-slate-800 dark:pd-text-slate-400">
       <div class="absolute left-0 right-0 px-16 py-8 pd-text-slate-900 dark:pd-text-slate-200 pd-bg-slate-50/90 dark:pd-bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10">Warp Scientists</div>
        <div class="flex items-center pt-16">
          <img src="/classes/matter.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
          <div class="">
            <div class="font-bold">Justina Matter</div>
          </div>
        </div>
        <hr class="-mx-16!" />
        <div class="flex items-center ">
          <img src="/classes/profile1.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
          <div class="">
            <div class="font-bold">Narve Hoops</div>
          </div>
        </div>
        <hr class="-mx-16!" />
        <div class="flex items-center ">
          <img src="/classes/profile5.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
          <div class="">
            <div class="font-bold">Dagny Calamity</div>
          </div>
        </div>
        <hr class="-mx-16!" />
        <div class="flex items-center pb-16">
          <img src="/classes/profile2.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
          <div class="">
            <div class="font-bold">Joar Quack</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</container>

```html
<div class="relative">
  <div class="fixed top-0 left-0 right-0">Warp Scientists</div>
  <div>
    <div>
      <img src="..." />
      <div>Justina Matter</div>
    </div>
    <div>
      <img src="..." />
      <div>Narve Hoops</div>
    </div>
    <!-- ... -->
  </div>
</div>
```

### Sticky positioning elements
Use `sticky` to position an element as `relative` until it crosses a specified threshold, then treat it as fixed until its parent is off screen.

Any `offsets` are calculated relative to the element’s normal position and the element will act as a position reference for absolutely positioned children.

<container class="relative">
  <div class="flex justify-center -my-32">
    <div class="relative">
      <div style="width:300px;max-height:275px" class="overflow-auto mx-auto pd-bg-white px-16 pd-text-slate-500 dark:pd-bg-slate-800 dark:pd-text-slate-400">
        <div class="relative">
          <div class="sticky top-0 px-16 -mx-16 py-8 pd-text-slate-900 dark:pd-text-slate-200 pd-bg-slate-50/90 dark:pd-bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10">
            A - Warp Scientists
          </div>
          <div class="flex items-center pt-16">
            <img src="/classes/matter.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <div class="">
              <div class="font-bold">Ainsley Matter</div>
            </div>
          </div>
          <hr class="-mx-16!" />
          <div class="flex items-center ">
            <img src="/classes/profile1.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <div class="">
              <div class="font-bold">Alarik Hoops</div>
            </div>
          </div>
          <hr class="-mx-16!" />
          <div class="flex items-center ">
            <img src="/classes/profile5.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <div class="">
              <div class="font-bold">Ambrose Calamity</div>
            </div>
          </div>
          <hr class="-mx-16!" />
          <div class="flex items-center pb-16">
            <img src="/classes/profile2.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <div class="">
              <div class="font-bold">Anders Quack</div>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="sticky top-0 px-16 -mx-16 py-8 pd-text-slate-900 dark:pd-text-slate-200 pd-bg-slate-50/90 dark:pd-bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10">
            B - Warp Scientists
          </div>
          <div class="flex items-center pt-16">
            <img src="/classes/matter.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <div class="">
              <div class="font-bold">Bella Matter</div>
            </div>
          </div>
          <hr class="-mx-16!" />
          <div class="flex items-center ">
            <img src="/classes/profile1.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <div class="">
              <div class="font-bold">Brayden Hoops</div>
            </div>
          </div>
          <hr class="-mx-16!" />
          <div class="flex items-center ">
            <img src="/classes/profile5.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <div class="">
              <div class="font-bold">Bailey Calamity</div>
            </div>
          </div>
          <hr class="-mx-16!" />
          <div class="flex items-center pb-16">
            <img src="/classes/profile2.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <div class="">
              <div class="font-bold">Bentley Quack</div>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="sticky top-0 px-16 -mx-16 py-8 pd-text-slate-900 dark:pd-text-slate-200 pd-bg-slate-50/90 dark:pd-bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10">
            C - Warp Scientists
          </div>
          <div class="flex items-center pt-16">
            <img src="/classes/matter.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <div class="">
              <div class="font-bold">Charlotte Matter</div>
            </div>
          </div>
          <hr class="-mx-16!" />
          <div class="flex items-center ">
            <img src="/classes/profile1.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <div class="">
              <div class="font-bold">Carter Hoops</div>
            </div>
          </div>
          <hr class="-mx-16!" />
          <div class="flex items-center ">
            <img src="/classes/profile5.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <div class="">
              <div class="font-bold">Claire Calamity</div>
            </div>
          </div>
          <hr class="-mx-16!" />
          <div class="flex items-center pb-16">
            <img src="/classes/profile2.jpg" class="h-48 mr-16 rounded-full" alt="AI generated picture of 1950s scientists working on a warp drive" />
            <div class="">
              <div class="font-bold">Cora Quack</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</container>

```html
<div>
  <div>
    <div class="sticky top-0 ...">A</div>
    <div>
      <div>
        <img src="..." />
        <strong>Ainsley Matter</strong>
      </div>
      <div>
        <img src="..." />
        <strong>Alarik Hoops</strong>
      </div>
      <!-- ... -->
    </div>
  </div>
  <div>
    <div class="sticky top-0">B</div>
    <div>
      <div>
        <img src="..." />
        <strong>Bella Matter</strong>
      </div>
      <!-- ... -->
    </div>
  </div>
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:absolute` to apply the `absolute` utility at only medium screen sizes and above.

```html
<div class="relative md:absolute">
  <!-- ... -->
</div>
```
