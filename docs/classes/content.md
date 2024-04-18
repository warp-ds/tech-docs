> Typography

# Content

Utilities for controlling the content of the before and after pseudo-elements.

## Quick reference

| Class             | Description      |
|-------------------|------------------|
| `content-none`    | `content: none`  |
| `content-empty`   | `content: ""`    |
| `content-[{str}]` | `content: {str}` |

> Available values <br />
> `{str}`: Can be any string, will usually contain single-quotes as seen in the examples below

## Basic usage

### Setting a pseudo-element's content
Use the `content-{value}` utilities along with the before and after variant modifiers
to set the contents of the `::before` and `::after` pseudo-elements.

Use the square bracket notation to define any arbitrary content value on the fly.

<container>
  <div class="text-center">
    <span class="before:content-['Before'] after:content-['after'] before:pd-text-indigo-400 after:pd-text-indigo-400"> I am </span>.
  </div>
</container>

```html
<span class="before:content-['Before'] after:content-['after'] ..."> I am </span>
```

### Using spaces and underscores
Since whitespace denotes the end of a class in HTML, replace any spaces in an arbitrary value with an underscore.

<container>
  <div class="text-center">
    <span class="before:content-['Hello_World!']"></span>
  </div>
</container>

```html
<div class="before:content-['Hello_World!']">
  <!-- ... -->
</div>
```

If you need to include an actual underscore, you can do this by escaping it with a backslash.

<container>
  <div class="text-center">
    <span class="before:content-['Hello\_World!']"></span>
  </div>
</container>

```html
<div class="before:content-['Hello\_World!']">
  <!-- ... -->
</div>
```

