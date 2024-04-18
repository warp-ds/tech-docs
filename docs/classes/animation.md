> Transitions & Animation

# Animation

Utilities for animating elements with CSS animations.

## Quick reference

<qr-table />

## Basic usage

### In Progress
Add the `animate-inprogress` utility to add an animated background to indicate that something is in progress.

<container class="flex place-content-center  animate-inprogress">
Saving...
</container>

```html
  <div class="animate-inprogress">Saving...</div>
```

### Spinner
Add the `animate-spinner` utility to add an animated spinner to indicate that something is loading.
You can change the size by adjusting `--spinner-size` (default size is 24px).

<container class="flex gap-32 place-content-center place-items-center">
  <div class="animate-spinner [--spinner-size:16px]"></div>
  <div class="animate-spinner"></div>
  <div class="animate-spinner [--spinner-size:32px]"></div>
</container>

```html
<div class="animate-spinner [--spinner-size:16px]"></div>
<div class="animate-spinner"></div>
<div class="animate-spinner [--spinner-size:32px]"></div>
```