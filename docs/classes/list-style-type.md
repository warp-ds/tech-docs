> Typography

# List Style Type

Utilities for controlling the bullet/number style of a list.

## Quick reference

<qr-table />

## Basic usage
### Setting the list style type
To create bulleted, checked or numeric lists, use the `list-disc`, `list-checked` and `list-decimal` utilities.

<container>
  <div class="flex flex-col gap-8 p-16">
    <div>
      <span class="s-text dark:s-text-inverted mb-3">list-disc</span>
      <ul class="!list-disc !list-inside s-text dark:s-text-inverted !pl-0">
        <li>An orbit is a regular, repeating path.</li>
        <li>Orbiting objects, include planets, moons, asteroids, and manmade devices.</li>
        <li>Objects orbit each other because of gravity.</li>
      </ul>
    </div>
    <div>
      <span class="s-text dark:s-text-inverted mb-3">list-decimal</span>
      <ul class="!list-decimal !list-inside s-text dark:s-text-inverted !pl-0">
        <li>An orbit is a regular, repeating path.</li>
        <li>Orbiting objects, include planets, moons, asteroids, and manmade devices.</li>
        <li>Objects orbit each other because of gravity.</li>
      </ul>
    </div>
    <div>
      <span class="s-text dark:s-text-inverted mb-3">list-checked</span>
      <ul class="!list-checked !list-inside s-text dark:s-text-inverted !pl-0">
        <li>An orbit is a regular, repeating path.</li>
        <li>Orbiting objects, include planets, moons, asteroids, and manmade devices.</li>
        <li>Objects orbit each other because of gravity.</li>
      </ul>
    </div>
    <div>
      <span class="s-text dark:s-text-inverted mb-3">list-none</span>
      <ul class="!list-none !list-inside s-text dark:s-text-inverted !pl-0">
        <li>An orbit is a regular, repeating path.</li>
        <li>Orbiting objects, include planets, moons, asteroids, and manmade devices.</li>
        <li>Objects orbit each other because of gravity.</li>
      </ul>
    </div>
  </div>
</container>

```html
<ul class="list-disc ...">
  <li>5 warp scientists</li>
  <!-- ... -->
</ul>
<ul class="list-decimal ...">
  <li>5 warp scientists</li>
  <!-- ... -->
</ul>
<ul class="list-checked ...">
  <li>5 warp scientists</li>
  <!-- ... -->
</ul>
<ul class="list-none ...">
  <li>5 warp scientists</li>
  <!-- ... -->
</ul>
```