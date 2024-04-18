> Layout

# Visibility

Utilities for controlling the visibility of an element.

## Quick reference

<qr-table />

<!--

#TODO: Collapse doesnt work

Sidenote:  Visibility: collapse used to have / has(?) so many weird quirks that we might wanna keep it ignored(?).
I think Chrome still treats it = visibility: hidden which makes it kinda useless.
https://caniuse.com/mdn-css_properties_visibility_collapse

-->

## Basic usage

### Making elements invisible

Use `invisible` to hide an element, but still maintain its place in the DOM, affecting the layout of other elements (compare with `.hidden` from the `display` documentation).

<container>
  <div class="grid grid-cols-3 gap-16">
   <div class="ex-box pd-bg-fuchsia-500 rounded-4">01</div>
   <div class="ex-box pd-bg-fuchsia-500 rounded-4 invisible">02</div>
   <div class="ex-box pd-bg-fuchsia-500 rounded-4">03</div>
  </div>
</container>

```html
<div class="grid grid-cols-3 gap-16">
  <div>01</div>
  <div class="invisible ...">02</div>
  <div>03</div>
</div>
```

### Collapsing elements

Use `collapse` to hide table rows, row groups, columns, and column groups as if they were set to `display: none`, but without impacting the size of other rows and columns.

This makes it possible to dynamically toggle rows and columns without affecting the table layout.

<container>
  <div>Showing all rows</div>
  <table class="border-collapse table! w-full border-y pd-border-slate-400 dark:pd-border-slate-500 pd-bg-white dark:pd-bg-slate-800">
    <thead class="pd-bg-slate-50 dark:pd-bg-slate-700">
      <tr>
        <th class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold px-16 py-8 pd-text-slate-900 dark:pd-text-slate-200 text-right">#</th>
        <th class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold px-16 py-8 pd-text-slate-900 dark:pd-text-slate-200 text-left">Scientist</th>
        <th class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold px-16 py-8 pd-text-slate-900 dark:pd-text-slate-200 text-left">Title</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">1</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Justina Matter</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Warp Scientist</td>
      </tr>
      <tr>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">2</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Narve Hoops</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Warp Scientist</td>
      </tr>
      <tr>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">3</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Dagny Calamity</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Warp Scientist</td>
      </tr>
    </tbody>
  </table>
  <div>Hiding a row using `collapse`</div>
  <table class="border-collapse table! w-full border-y pd-border-slate-400 dark:pd-border-slate-500 pd-bg-white dark:pd-bg-slate-800 pd-text-sm">
    <thead class="pd-bg-slate-50 dark:pd-bg-slate-700">
      <tr>
        <th class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold px-16 py-8 pd-text-slate-900 dark:pd-text-slate-200 text-right">#</th>
        <th class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold px-16 py-8 pd-text-slate-900 dark:pd-text-slate-200 text-left">Scientist</th>
        <th class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold px-16 py-8 pd-text-slate-900 dark:pd-text-slate-200 text-left">Title</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">1</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Justina Matter</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Warp Scientist</td>
      </tr>
      <tr class="collapse">
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">2</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Narve Hoops</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Warp Scientist</td>
      </tr>
      <tr>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">3</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Dagny Calamity</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Warp Scientist</td>
      </tr>
    </tbody>
  </table>
  <div>Hiding a row using `hidden`</div>
  <table class="border-collapse table! w-full border-y pd-border-slate-400 dark:pd-border-slate-500 pd-bg-white dark:pd-bg-slate-800 pd-text-sm">
    <thead class="pd-bg-slate-50 dark:pd-bg-slate-700">
      <tr>
        <th class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold px-16 py-8 pd-text-slate-900 dark:pd-text-slate-200 text-right">#</th>
        <th class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold px-16 py-8 pd-text-slate-900 dark:pd-text-slate-200 text-left">Scientist</th>
        <th class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-600 pd-font-semibold px-16 py-8 pd-text-slate-900 dark:pd-text-slate-200 text-left">Title</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">1</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Justina Matter</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Warp Scientist</td>
      </tr>
      <tr class="hidden">
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">2</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Narve Hoops</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Warp Scientist</td>
      </tr>
      <tr>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">3</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Dagny Calamity</td>
        <td class="border first:border-l-0 last:border-r-0 pd-border-slate-300 dark:pd-border-slate-700 px-4 py-4 pd-text-slate-500 dark:pd-text-slate-400">Warp Scientist</td>
      </tr>
    </tbody>
  </table>
</container>

```html{15}
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Scientist</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Justina Matter</td>
        <td>Warp Scientist</td>
      </tr>
      <tr class="collapse ...">
        <td>2</td>
        <td>Narve Hoops</td>
        <td>Warp Scientist</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Dagny Calamity</td>
        <td>Warp Scientist</td>
      </tr>
    </tbody>
  </table>
```
### Making elements visible
Use `visible` to make an element visible. This is mostly useful for undoing the `invisible` utility at different screen sizes.

<container>
  <div class="grid grid-cols-3 gap-16">
   <div class="ex-box pd-bg-cyan-500 rounded-4">01</div>
   <div class="ex-box pd-bg-cyan-500 rounded-4 visible">02</div>
   <div class="ex-box pd-bg-cyan-500 rounded-4">03</div>
  </div>
</container>

```html
<div class="grid grid-cols-3 gap-16">
  <div>01</div>
  <div class="visible ...">02</div>
  <div>03</div>
</div>
```
### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:invisible` to apply the `invisible` utility
at only medium screen sizes and above.

```html
<div class="visible md:invisible">
  <!-- ... -->
</div>
```
