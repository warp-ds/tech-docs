> Typography

# Line Height

Utilities for controlling the leading (line height) of an element.

## Quick reference

<qr-table />

## Basic usage

### Setting the line-height
Control the Line-height of an element using the `leading-{size}` utilities.

<example-container>
  <div class="ex-inner-box max-w-full s-text">
    <strong>leading-xs</strong>
    <p class="leading-xs ex-bg--striped ex-bg--fuchsia">The quick smart warp scientist</p>
    <strong>leading-s</strong>
    <p class="leading-s ex-bg--striped ex-bg--fuchsia">The quick smart warp scientist</p>
    <strong>leading-m</strong>
    <p class="leading-m ex-bg--striped ex-bg--fuchsia">The quick smart warp scientist</p>
    <strong>leading-ml</strong>
    <p class="leading-ml ex-bg--striped ex-bg--fuchsia">The quick smart warp scientist</p>
    <strong>leading-l</strong>
    <p class="leading-l ex-bg--striped ex-bg--fuchsia">The quick smart warp scientist</p>
    <strong>leading-xl</strong>
    <p class="leading-xl ex-bg--striped ex-bg--fuchsia">The quick smart warp scientist</p>
    <strong>leading-xxl</strong>
    <p class="leading-xxl ex-bg--striped ex-bg--fuchsia">The quick smart warp scientist</p>
    <strong>leading-xxxl</strong>
    <p class="leading-xxxl ex-bg--striped ex-bg--fuchsia">The quick smart warp scientist</p>
  </div>
</example-container>

```html
<p class="leading-xs ...">The quick smart warp scientist ...</p>
<p class="leading-s ...">The quick smart warp scientist ...</p>
...
<p class="leading-xxl ...">The quick smart warp scientist ...</p>
<p class="leading-xxxl ...">The quick smart warp scientist ...</p>
```

### Arbitrary values
If you need to use a one-off `line-height` value, use square brackets to generate a property on the fly using any arbitrary value.

<example-container>
  <div class="ex-inner-box max-w-full s-text">
    <p class="ex-bg--striped ex-bg--fuchsia leading-[120] mb-0">The quick smart warp scientist</p>
  </div>
</example-container>

```html
<p class="leading-[120]"></p>
```


