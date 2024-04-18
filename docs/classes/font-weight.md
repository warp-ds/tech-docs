> Typography

# Font Weight

Utilities for controlling the font weight of an element.

## Quick reference

| Class          | Description        |
|----------------|--------------------|
| `font-normal`  | `font-weight: 400` |
| `font-bold`    | `font-weight: 700` |

## Basic usage

### Setting the font size
Control the font size of an element using the `text-{size}` utilities.

<container>
  <div class="mx-24">
    <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">font-normal</span>
    <p class="text-t1 font-normal mt-0!">The quick smart warp scientist</p>
    <span class="pd-font-medium pd-text-sm pd-text-slate-500 pd-font-mono dark:pd-text-slate-400">font-bold</span>
    <p class="text-t2 font-bold mt-0!">The quick smart warp scientist</p>
  </div>
</container>

```html
<p class="font-normal ...">The quick smart warp scientist ...</p>
<p class="font-bold ...">The quick smart warp scientist ...</p>
```
