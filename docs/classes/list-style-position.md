> Typography

# List Style Position

Utilities for controlling the position of bullets/numbers in lists.

## Quick reference

<qr-table />

## Basic usage
### ​Setting the list style position
Control the position of the markers and text indentation in a list using the `list-inside` and `list-outside` utilities.

<container>
  <div class="relative rounded-8 overflow-auto p-8">
    <div class="flex flex-col sm:flex-row gap-8">
      <box class="rounded-4 relative">
        <div class="absolute left-32 top-[50] bottom-10 w-1 bg-[var(--tw-pink-fg)]"></div>
        <p class=" mb-3 ml-8 s-text dark:s-text-inverted">list-inside</p>
        <ul class="list-disc !list-inside s-text dark:s-text-inverted s-bg dark:s-bg-inverted rounded-8 !p-16 !pl-32">
          <li>5 cups of coffee with enough caffeine to show how the line breaks</li>
          <li>0 cups of tea</li>
          <li>0 cups of water</li>
        </ul>
      </box>
      <box class="rounded-4 relative">
        <div class="absolute left-32 top-[50] bottom-10 w-1 bg-[var(--tw-pink-fg)]"></div>
        <p class=" mb-3 ml-8 s-text dark:s-text-inverted">list-outside</p>
        <ul class="list-disc !list-outside s-text dark:s-text-inverted s-bg dark:s-bg-inverted rounded-8 !p-16 !pl-32">
          <li>5 cups of coffee with enough caffeine to show how the line breaks</li>
          <li>0 cups of tea</li>
          <li>0 cups of water</li>
        </ul>
      </box>
    </div>
  </div>
</container>

```html
<ul class="list-inside ...">
  <li>5 warp scientists</li>
  <!-- ... -->
</ul>
<ul class="list-outside ...">
  <li>5 warp scientists</li>
  <!-- ... -->
</ul>
```