> Typography

# Line Height

Utilities for controlling the leading (line height) of an element.

## Quick reference

<qr-table />

## Basic usage

### Setting the line-height
Control the Line-height of an element using the `leading-{size}` utilities.

<container>
  <div class="mx-24">
    <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">text-body leading-xs</span>
    <box striped fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <p class="leading-xs! text-body mt-0!">The quick smart warp scientist</p>
    </box>
    <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">text-body leading-s</span>
    <box striped fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <p class="leading-s! text-body mt-0!">The quick smart warp scientist</p>
    </box>
    <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">text-body leading-m</span>
    <box striped fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <p class="leading-m! text-body mt-0!">The quick smart warp scientist</p>
    </box>
    <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">text-body leading-ml</span>
    <box striped fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <p class="leading-ml! text-body mt-0!">The quick smart warp scientist</p>
    </box>
    <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">text-body leading-l</span>
    <box striped fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <p class="leading-l! text-body mt-0!">The quick smart warp scientist</p>
    </box>
    <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">text-body leading-l</span>
    <box striped fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <p class="leading-xl! text-body mt-0!">The quick smart warp scientist</p>
    </box>
    <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">text-body leading-xl</span>
    <box striped fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <p class="leading-xxl! text-body mt-0!">The quick smart warp scientist</p>
    </box>
    <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">text-body leading-xxl</span>
    <box striped fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <p class="leading-xxl! text-body mt-0!">The quick smart warp scientist</p>
    </box>
    <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">text-body leading-xxxl</span>
    <box striped fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <p class="leading-xxxl! text-body mt-0!">The quick smart warp scientist</p>
    </box>
  </div>
</container>

```html
<p class="text-body leading-xs ...">The quick smart warp scientist ...</p>
<p class="text-body leading-s ...">The quick smart warp scientist ...</p>
...
<p class="text-body leading-xxl ...">The quick smart warp scientist ...</p>
<p class="text-body leading-xxxl ...">The quick smart warp scientist ...</p>
```

### Arbitrary values
If you need to use a one-off `line-height` value, use square brackets to generate a property on the fly using any arbitrary value.

<container>
  <div class="mx-24">
    <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">text-body leading-[120]</span>
    <box striped fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <p class="leading-[120]! text-body mt-0!">The quick smart warp scientist</p>
    </box>
  </div>
</container>

```html
<p class="leading-[120]"></p>
```


