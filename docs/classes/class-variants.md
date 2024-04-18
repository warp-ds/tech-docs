# Class Variants

## Suggested order

While Uno usually handles these variants in any order, we do recommend a consistent pattern to maximize readability.

`{Pseudo}{Breakpoint}{Negative}{Class}{Important}`

For example: `focus:sm:-m-16!`

## Important

Any class can be marked as important by prefixing the entire class with an exclamation mark.

For example `!mb-32` would produce `margin-bottom: 3.2rem !important`.

## Breakpoints and media queries

### Available breakpoints

| Breakpoint label | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| `sm`             | Targets `480px` to break on most mobile devices              |
| `md`             | Targets `768px` to break on tablet screen sizes              |
| `lg`             | Targets `990px` for changes targeting desktop screens        |

### Variants targeting breakpoints

There are three ways of targeting these breakpoints to fit a wide variety of use cases.

#### gt

This is the default behavior, likely because it aligns best with responsive design.

An example of these variants is below, where for every larger screen size we're increasing padding.

```html{1}
<section class="p-8 sm:p-16 md:p-24 lg:p-32">
  <!-- ... -->
</section>
```

#### at

This variant can be used if an exceptional class is needed at only one single breakpoint.

The example below would have the same padding for every screen size except tablet sizes.

```html{1}
<section class="p-8 at-md:p-24">
  <!-- ... -->
</section>
```

#### lt

The reverse of the default behavior, will select screens smaller than the breakpoint specified - this can be useful to target specific behavior (f.ex) on mobile/tablets only.

```html{1}
<section class="lt-md:sticky top-0">
  <!-- ... -->
</section>
```

## Pseudo-classes

`last:mb-0`

## Negative values

This variant is effectively invisible, but many numeric classes can be prefixed with `-` to use negative values.

Because this is a variant, it does not need to be placed directly on the class itself (e.g. `-top-8`) when being used with multiple variants (e.g. `-sm:top-8`).
