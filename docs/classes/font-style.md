> Typography

# Font Style
Utilities for controlling the style of text.

## Quick reference

<qr-table />

## Basic usage
### Italicizing text
The `italic` utility can be used to make text italic. Likewise, the `not-italic` utility can be used to display text normally — typically to reset italic text at different breakpoints.

<container>
  <div class="mx-24">
    <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">italic</span>
    <p class="text-t2 mt-0! italic">The quick smart warp scientist</p>
    <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">not-italic</span>
    <p class="text-t2 mt-0! not-italic">The quick smart warp scientist</p>
  </div>
</container>

```html
<p class="italic ...">The quick smart warp scientist ...</p>
<p class="not-italic ...">The quick smart warp scientist ...</p>
```
