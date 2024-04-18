> Backgrounds

# Background Size

Utilities for controlling the background size of an element's background image.

## Quick reference

<qr-table />

## Basic usage

### Auto

Use `bg-auto` to display the background image at its default size.

<container class="p-0! overflow-hidden">
  <box striped>
    <div class="h-144 bg-auto bg-center bg-no-repeat bg-[url(/20s-scientists.jpg)]">
    </div>
  </box>
</container>

```html
<div class="bg-auto bg-no-repeat bg-center bg-[url(...)] ..."/>
```

### Cover
Use `bg-cover` to scale the background image until it fills the background layer.

<container class="p-0! overflow-hidden">
  <box striped>
    <div class="h-144 bg-cover bg-center bg-no-repeat bg-[url(/20s-scientists.jpg)]"></div>
  </box>
</container>

```html
<div class="bg-cover bg-center bg-[url(...)] ...">
```

### Contain
Use `bg-contain` to scale the background image to the outer edges without cropping or stretching.

<container class="p-0! overflow-hidden">
  <box striped>
    <div class="h-144 bg-contain bg-center bg-no-repeat bg-[url(/20s-scientists.jpg)]"></div>
  </box>
</container>

```html
<div class="bg-contain bg-center bg-[url(...)] ..."></div>
```
