> Backgrounds

# Background Attachment

Utilities for controlling how a background image behaves when scrolling.

## Quick reference

<qr-table />

## Basic usage

### Fixed
Use `bg-fixed` to fix the background image relative to the viewport.

<container class="bg-fixed bg-[url(/classes/office-warping.png)] overflow-hidden h-[240] overflow-y-scroll overscroll-contain">
  <div class="pd-bg-slate-800/80 pd-shadow-lg p-32 rounded-8 text-center sm:mx-[10%] sm:my-32 pd-text-white">
    <h3 class="mt-8! h1!">The science</h3>
    <p class="pd-text-sm pd-text-gray-300">March 9th, 2023 · 14 min read</p>
    <p class="pd-text-lg">General Relativity states that space and time are fused and that nothing can travel faster than the speed of light. General relativity also describes how mass and energy warp spacetime – hefty objects like stars and black holes curve spacetime around them. This curvature is what you feel as gravity and why many space-faring heroes worry about “getting stuck in” or “falling into” a gravity well.</p>
    <p class="pd-text-lg">In some respects the force was electricity, but it was of a higher energy order, containing inherent magnetic properties in a complete union of a kind only vaguely suggested by the term “electromagnetic,” in which the two forces involved are more or less mutually exclusive, the one giving rise to the other.</p>
  </div>
</container>

```html
<div class="bg-fixed ..."></div>
```

### Local
Use `bg-local` to scroll the background image with the container and the viewport.

<container class="bg-local bg-[url(/classes/office-warping.png)] overflow-hidden h-[240] overflow-y-scroll overscroll-contain">
  <div class="pd-bg-slate-800/80 pd-shadow-lg p-32 rounded-8 text-center sm:mx-[10%] sm:my-32 pd-text-white">
    <h3 class="mt-8! h1!">The science</h3>
    <p class="pd-text-sm pd-text-gray-300">March 9th, 2023 · 14 min read</p>
    <p class="pd-text-lg">General Relativity states that space and time are fused and that nothing can travel faster than the speed of light. General relativity also describes how mass and energy warp spacetime – hefty objects like stars and black holes curve spacetime around them. This curvature is what you feel as gravity and why many space-faring heroes worry about “getting stuck in” or “falling into” a gravity well.</p>
    <p class="pd-text-lg">In some respects the force was electricity, but it was of a higher energy order, containing inherent magnetic properties in a complete union of a kind only vaguely suggested by the term “electromagnetic,” in which the two forces involved are more or less mutually exclusive, the one giving rise to the other.</p>
  </div>
</container>

```html
<div class="bg-local ..."></div>
```

### Scroll
Use `bg-scroll` to scroll the background image with the viewport, but not with the container.

<container class="bg-scroll bg-[url(/classes/office-warping.png)] overflow-hidden h-[240] overflow-y-scroll overscroll-contain">
  <div class="pd-bg-slate-800/80 pd-shadow-lg p-32 rounded-8 text-center sm:mx-[10%] sm:my-32 pd-text-white">
    <h3 class="mt-8! h1!">The science</h3>
    <p class="pd-text-sm pd-text-gray-300">March 9th, 2023 · 14 min read</p>
    <p class="pd-text-lg">General Relativity states that space and time are fused and that nothing can travel faster than the speed of light. General relativity also describes how mass and energy warp spacetime – hefty objects like stars and black holes curve spacetime around them. This curvature is what you feel as gravity and why many space-faring heroes worry about “getting stuck in” or “falling into” a gravity well.</p>
    <p class="pd-text-lg">In some respects the force was electricity, but it was of a higher energy order, containing inherent magnetic properties in a complete union of a kind only vaguely suggested by the term “electromagnetic,” in which the two forces involved are more or less mutually exclusive, the one giving rise to the other.</p>
  </div>
</container>

```html
<div class="bg-scroll ..."></div>
```
