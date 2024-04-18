> Backgrounds

# Background Repeat

Utilities for controlling the repetition of an element's background image.

## Quick reference

<qr-table />

## Basic usage

### Repeat
Use `bg-repeat` to repeat the background image both vertically and horizontally.

<container class="h-[200] bg-repeat rounded-8 bg-[url(/repeatable.png)]" style="background-size:20%">
</container>

```html
<div class="bg-repeat ..."></div>
```

### No Repeat
Use `bg-no-repeat` when you don’t want to repeat the background image.

<container class="h-[200] bg-no-repeat bg-center rounded-8 bg-[url(/repeatable.png)]" style="background-size:20%">
</container>

```html
<div class="bg-no-repeat ..."></div>
```

### Repeat Horizontally
Use `bg-repeat-x` to repeat the background image only horizontally.

<container class="h-[200] bg-repeat-x bg-center rounded-8 bg-[url(/repeatable.png)]" style="background-size:20%">
</container>

```html
<div class="bg-repeat-x ..."></div>
```

### Repeat Vertically
Use `bg-repeat-y` to repeat the background image only vertically.

<container class="h-[200] bg-repeat-y bg-center rounded-8 bg-[url(/repeatable.png)]" style="background-size:20%">
</container>

```html
<div class="bg-repeat-y ..."></div>
```
