> Layout

# Z-Index

Utilities for controlling the stack order of an element.

## Quick reference

| Class       | Description           |
|-------------|-----------------------|
| `z-{index}` | `z-index: {index}`    |

> Available values <br />
> `{index}`: `0`, `10`, `20`, `30`, `40`, `50` , `auto`

## The NMP and the z-index
For the site to behave in a predictable way we need to follow a strict scheme when it comes to the z-index. The z-index should be kept in these layers:

z-30: Modals and overlays that are supposed to lay onto of all other parts.<br />
z-20: Header<br />
z-10: The rest<br />

<!--
#TODO: Z-index should probably be kept to a bare minimum. Everything has a defined place within the 3 values used today in the FINN platform. Suggest we just support 0, 10, 20, 30, and Auto unless there is a reason to support more.  We might want to make these 3 into semantic z-index classes and maybe have some free-range z-indexes z-0 to z-9 including negatives, these would never interfere with the important ones mentioned above no matter if used in the same stacking-context (which is unlikely anyways)
-->

## Basic usage

### Setting the z-index

Control the stack order (or three-dimensional positioning) of an element in warp, regardless of order it has been displayed, using the `z-{index}` utilities.

<example-container>
  <div class="flex justify-center -space-x-24">
    <div class="w-80 h-80 rounded-full ex-box border s-border-inverted pd-bg-pink-500">01</div>
    <div class="w-80 h-80 rounded-full ex-box border s-border-inverted pd-bg-fuchsia-500 pd-shadow-md">02</div>
    <div class="w-80 h-80 rounded-full ex-box border s-border-inverted pd-bg-purple-500 pd-shadow-md">03</div>
    <div class="w-80 h-80 rounded-full ex-box border s-border-inverted pd-bg-violet-500 pd-shadow-md z-30">04</div>
    <div class="w-80 h-80 rounded-full ex-box border s-border-inverted pd-bg-indigo-500 pd-shadow-md z-20">05</div>
    <div class="w-80 h-80 rounded-full ex-box border s-border-inverted pd-bg-blue-500 pd-shadow-md z-10">06</div>
    <div class="w-80 h-80 rounded-full ex-box border s-border-inverted pd-bg-cyan-500 pd-shadow-md z-0">07</div>
  </div>
</example-container>

```html
<div>01</div>
<div>02</div>
<div>03</div>
<div class="z-30 ...">04</div>
<div class="z-20 ...">05</div>
<div class="z-10 ...">06</div>
<div class="z-0 ...">07</div>
```

### Using negative values
To use a negative z-index value, prefix the class name with a dash to convert it to a negative value.

```html
<div class="-z-50">
  <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries
You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use `md:z-50` to apply the `z-50` utility at only medium screen sizes and above.

```html
<div class="z-0 md:z-50">
  <!-- ... -->
</div>
```
