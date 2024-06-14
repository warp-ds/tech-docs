> Typography

# List Style Type

Utilities for controlling the bullet/number style of a list.

## Quick reference

<qr-table />

## Basic usage

### Setting the list style type
To create bulleted, checked or numeric lists, use the `list-disc`, `list-checked` and `list-decimal` utilities.

<example-container>
  <div class="ex-inner-box max-w-full flex flex-col gap-16">
    <div>
      <strong>list-disc</strong>
      <ul class="list-disc list-inside">
        <li>An orbit is a regular, repeating path.</li>
        <li>Orbiting objects, include planets, moons, asteroids, and man-made devices.</li>
        <li>Objects orbit each other because of gravity.</li>
      </ul>
    </div>
    <div>
      <strong>list-decimal</strong>
      <ul class="list-decimal list-inside">
        <li>An orbit is a regular, repeating path.</li>
        <li>Orbiting objects, include planets, moons, asteroids, and man-made devices.</li>
        <li>Objects orbit each other because of gravity.</li>
      </ul>
    </div>
    <div>
      <strong>list-checked</strong>
      <ul class="list-checked list-inside">
        <li>An orbit is a regular, repeating path.</li>
        <li>Orbiting objects, include planets, moons, asteroids, and man-made devices.</li>
        <li>Objects orbit each other because of gravity.</li>
      </ul>
    </div>
    <div>
      <strong>list-none</strong>
      <ul class="list-none">
        <li>An orbit is a regular, repeating path.</li>
        <li>Orbiting objects, include planets, moons, asteroids, and man-made devices.</li>
        <li>Objects orbit each other because of gravity.</li>
      </ul>
    </div>
  </div>
</example-container>

```html
<ul class="list-disc ...">
  <li>An orbit is ...</li>
  <!-- ... -->
</ul>
<ul class="list-decimal ...">
  <li>An orbit is ...</li>
  <!-- ... -->
</ul>
<ul class="list-checked ...">
  <li>An orbit is ...</li>
  <!-- ... -->
</ul>
<ul class="list-none ...">
  <li>An orbit is ...</li>
  <!-- ... -->
</ul>
```