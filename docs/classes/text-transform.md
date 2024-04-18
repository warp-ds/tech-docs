> Typography

# Text Transform
Utilities for controlling the transformation of text.

## Quick reference

<qr-table />

## Basic usage
### Transforming text
The `uppercase` and `lowercase` will uppercase and lowercase text respectively, whereas `capitalize` utility will convert text to title-case. The `normal-case` utility can be used to preserve the original casing — typically to reset capitalization at different breakpoints.

<container>
  <div class="mx-24">
    <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">normal-case</span>
    <p class="text-t1 mt-0! normal-case">The quick smart warp scientist</p>
    <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">uppercase</span>
    <p class="text-t3 mt-0! uppercase">The quick smart warp scientist</p>
    <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">lowercase</span>
    <p class="text-t4 mt-0! lowercase">The quick smart warp scientist</p>
    <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">capitalize</span>
    <p class="text-t4 mt-0! capitalize">The quick smart warp scientist</p>
  </div>
</container>

```html
<p class="normal-case...">The quick smart warp scientist ...</p>
<p class="uppercase ...">The quick smart warp scientist ...</p>
<p class="lowercase ...">The quick smart warp scientist ...</p>
<p class="capitalize ...">The quick smart warp scientist ...</p>
```
