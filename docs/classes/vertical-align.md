> Typography

# Vertical Align

Utilities for controlling the vertical alignment of an inline or table-cell box.

## Quick reference

<qr-table />

## Basic usage

### Baseline
Use `align-baseline` to align the baseline of an element with the baseline of its parent.

<container>
  <div class="mx-24">
    <div class="pd-bg-white py-4 max-w-md mx-auto dark:pd-bg-slate-800">
      <div class="leading-none relative" style="line-height: 1">
        <span class="w-0 h-32 inline-block align-baseline">
          <span class="absolute top-0 pd-border-slate-200 border-t border-b border-dashed w-full h-32 dark:pd-border-slate-700"></span>
          <span class="absolute top-0 pd-border-slate-200 border-b border-dashed w-full h-16 dark:pd-border-slate-700"></span>
        </span>
        <span class="relative z-10 pd-text-slate-700 px-8 dark:pd-text-slate-200 font-bold">
        The quick smart warp scientist drinks the hazy coffee.</span>
      </div>
    </div>
  </div>
</container>

```html
<span class="inline-block align-baseline ...">...</span>
```

### Top
Use `align-top` to align the top of an element and its descendants with the top of the entire line.

<container>
  <div class="mx-24">
    <div class="pd-bg-white py-4 max-w-md mx-auto dark:pd-bg-slate-800">
      <div class="leading-none relative" style="line-height: 1">
        <box class="w-0 h-32 inline-block align-top">
          <span class="absolute top-0 pd-border-slate-200 border-t border-b border-dashed w-full h-32 dark:pd-border-slate-700"></span>
          <span class="absolute top-0 pd-border-slate-200 border-b border-dashed w-full h-16 dark:pd-border-slate-700"></span>
        </box>
        <span class="relative z-10 pd-text-slate-700 px-8 dark:pd-text-slate-200 font-bold">
        The quick smart warp scientist drinks the hazy coffee.</span>
      </div>
    </div>
  </div>
</container>

### Middle
Use `align-middle` to align the middle of an element with the baseline plus half the x-height of the parent.

<container>
  <div class="mx-24">
    <div class="pd-bg-white py-4 max-w-md mx-auto dark:pd-bg-slate-800">
      <div class="leading-none relative" style="line-height: 1">
        <box class="w-0 h-32 inline-block align-middle">
          <span class="absolute top-0 pd-border-slate-200 border-t border-b border-dashed w-full h-32 dark:pd-border-slate-700"></span>
          <span class="absolute top-0 pd-border-slate-200 border-b border-dashed w-full h-16 dark:pd-border-slate-700"></span>
        </box>
        <span class="relative z-10 pd-text-slate-700 px-8 dark:pd-text-slate-200 font-bold">
        The quick smart warp scientist drinks the hazy coffee.</span>
      </div>
    </div>
  </div>
</container>

### Bottom
Use `align-bottom` to align the bottom of an element and its descendants with the bottom of the entire line.

<container>
  <div class="mx-24">
    <div class="pd-bg-white py-4 max-w-md mx-auto dark:pd-bg-slate-800">
      <div class="leading-none relative" style="line-height: 1">
        <box class="w-0 h-32 inline-block align-bottom">
          <span class="absolute top-0 pd-border-slate-200 border-t border-b border-dashed w-full h-32 dark:pd-border-slate-700"></span>
          <span class="absolute top-0 pd-border-slate-200 border-b border-dashed w-full h-16 dark:pd-border-slate-700"></span>
        </box>
        <span class="relative z-10 pd-text-slate-700 px-8 dark:pd-text-slate-200 font-bold">
        The quick smart warp scientist drinks the hazy coffee.</span>
      </div>
    </div>
  </div>
</container>

### Text Top
Use `align-text-top` to align the top of an element with the top of the parent element’s font.

<container>
  <div class="mx-24">
    <div class="pd-bg-white py-4 max-w-md mx-auto dark:pd-bg-slate-800">
      <div class="leading-none relative" style="line-height: 1">
        <box class="w-0 h-32 inline-block align-text-top">
          <span class="absolute top-0 pd-border-slate-200 border-t border-b border-dashed w-full h-32 dark:pd-border-slate-700"></span>
          <span class="absolute top-0 pd-border-slate-200 border-b border-dashed w-full h-16 dark:pd-border-slate-700"></span>
        </box>
        <span class="relative z-10 pd-text-slate-700 px-8 dark:pd-text-slate-200 font-bold">
        The quick smart warp scientist drinks the hazy coffee.</span>
      </div>
    </div>
  </div>
</container>

### Text Bottom
Use `align-text-bottom` to align the bottom of an element with the bottom of the parent element’s font.

<container>
  <div class="mx-24">
    <div class="pd-bg-white py-4 max-w-md mx-auto dark:pd-bg-slate-800">
      <div class="leading-none relative" style="line-height: 1">
        <box class="w-0 h-32 inline-block align-text-bottom">
          <span class="absolute top-0 pd-border-slate-200 border-t border-b border-dashed w-full h-32 dark:pd-border-slate-700"></span>
          <span class="absolute top-0 pd-border-slate-200 border-b border-dashed w-full h-16 dark:pd-border-slate-700"></span>
        </box>
        <span class="relative z-10 pd-text-slate-700 px-8 dark:pd-text-slate-200 font-bold">
        The quick smart warp scientist drinks the hazy coffee.</span>
      </div>
    </div>
  </div>
</container>

### Sub
Use `align-sub` to align the bottom of an element with the subscript-baseline of its parent.

<container>
  <div class="mx-24">
    <div class="pd-bg-white py-4 max-w-md mx-auto dark:pd-bg-slate-800">
      <div class="leading-none relative" style="line-height: 1">
        <box class="w-0 h-32 inline-block align-sub">
          <span class="absolute top-0 pd-border-slate-200 border-t border-b border-dashed w-full h-32 dark:pd-border-slate-700"></span>
          <span class="absolute top-0 pd-border-slate-200 border-b border-dashed w-full h-16 dark:pd-border-slate-700"></span>
        </box>
        <span class="relative z-10 pd-text-slate-700 px-8 dark:pd-text-slate-200 font-bold">
        The quick smart warp scientist drinks the hazy coffee.</span>
      </div>
    </div>
  </div>
</container>

### Super
Use `align-super` to align the bottom of an element with the superscript-baseline of its parent.

<container>
  <div class="mx-24">
    <div class="pd-bg-white py-4 max-w-md mx-auto dark:pd-bg-slate-800">
      <div class="leading-none relative" style="line-height: 1">
        <box class="w-0 h-32 inline-block align-super">
          <span class="absolute top-0 pd-border-slate-200 border-t border-b border-dashed w-full h-32 dark:pd-border-slate-700"></span>
          <span class="absolute top-0 pd-border-slate-200 border-b border-dashed w-full h-16 dark:pd-border-slate-700"></span>
        </box>
        <span class="relative z-10 pd-text-slate-700 px-8 dark:pd-text-slate-200 font-bold">
        The quick smart warp scientist drinks the hazy coffee.</span>
      </div>
    </div>
  </div>
</container>
