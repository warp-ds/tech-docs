> Flexbox & Grid

# Order

Utilities for controlling the order of flex and grid items.

## Quick reference

| Class            | Description       |
|------------------|-------------------|
| `order-{value}`  | `order: {value}`  |
| `order-none`     | `order: 0`        |
| `order-first`    | `order: -9999`    |
| `order-last`     | `order: 9999`     |

> Available values <br />
> `{value}`: `1` through `12` <br />

## Basic usage

### Ordering flex and grid items
Use `order-{order}` to render flex and grid items in a different order than they appear in the DOM.

<container>
  <box class="flex justify-between gap-24 rounded-4">
    <div class="pd-bg-indigo-500 ex-box order-last">01</div>
    <div class="pd-bg-indigo-500 ex-box">02</div>
    <div class="pd-bg-indigo-500 ex-box">03</div>
  </box>
</container>

```html{2}
<div class="flex justify-between">
  <div class="order-last">01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Using negative values
To use a negative order value, prefix the class name with a dash to convert it to a negative value.

```html{1}
<div class="-order-1">
  <!-- ... -->
</div>
```

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:row-span-4` to apply the `row-span-4` utility at only medium screen sizes and above.

```html
<div class="row-span-3 md:row-span-4">
  <!-- ... -->
</div>
```

### Arbitrary values
If you need to use a one-off order value that doesn't make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.

```html
<div class="order-[14]">
  <!-- ... -->
</div>
```
