# Class Variants

::: tip Suggested order

While Uno usually handles these variants in any order, we do recommend a consistent pattern to maximize readability:

`{Pseudo}{Breakpoint}{Negative}{Class}{Important}`

For example: `focus:sm:-m-16!`
:::

## Pseudo-classes

As described in [Pseudo-classes](/css/states#pseudo-classes).

For example: `last:mb-0`

## Breakpoints and media queries

### Available breakpoints

| Breakpoint label | Description                                                  |
|------------------|--------------------------------------------------------------|
| `sm`             | Targets `480px` to break on most mobile devices              |
| `md`             | Targets `768px` to break on tablet screen sizes              |
| `lg`             | Targets `990px` for changes targeting desktop screens        |

### Variants targeting breakpoints
There are three ways of targeting these breakpoints to fit a wide variety of use cases.

- **`gt` - Greater than**
 
  This is the default behavior, and aligns with a "mobile first" approach.

  The example below shows how to increase the padding for every larger screen size:

  ```html{1}
  <section class="p-8 sm:p-16 md:p-24 lg:p-32">
    <!-- ... -->
  </section>
  ```

- **`at` - Only at**

  This variant can be used if an exception is needed at only one single breakpoint.

  The example below would have the same padding for every screen size except tablet sizes:

  ```html{1}
  <section class="p-8 at-md:p-24">
    <!-- ... -->
  </section>
  ```

- **`lt` - Less than**

  The reverse of the default behavior, will select screens smaller than the breakpoint specified - this can be useful to target specific behavior only on smaller devices.

  ```html{1}
  <section class="lt-md:sticky top-0">
    <!-- ... -->
  </section>
  ```

## Negative values

Many numeric classes can be prefixed with `-` to use negative values.

For example `-mb-32` would produce `margin-bottom: -3.2rem`.

## Important

Any class can be marked as important by adding an exclamation mark.

For example `mb-32!` would produce `margin-bottom: 3.2rem !important`.
