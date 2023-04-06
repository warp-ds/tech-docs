## Import

```js
import { Button } from '@warp-ds/react';
```

## Example

```jsx example
<Button>Save</Button>
```

## Migrating from Troika

- You should no longer include or import any Troika button CSS.
- The variants are no longer different named exports. Use component properties
  instead.
- There is now a single button component for all cases. As a quick guide:
  - `<CallToAction>` should be migrated to `<Button primary>`.
  - `<DestructiveButton>` should be migrated to `<Button negative>`.
  - `<DestructiveFlatButton>` should be migrated to `<Button negative>`.
  - `<FlatButton>` should be migrated to `<Button>`.
  - `<LinkButton>` should be migrated to `<Button href="...">`.
- The `inProgress` property should be changed to `loading`.
- The `disabled` has been removed as it is an anti-pattern (see below).

## Accessibility

If the button doesn't have visible text content, such as when used with only an
icon, an `aria-label` prop must be provided for accessibility.

## Visual options

### Primary

The primary button is a call to action. As a general rule, there should only be
one of them on the screen. This guides the user towards the happy path.

```jsx example
<Button primary>Save</Button>
```

### Negative

Used for destructive actions, like deletion. Shouldn't be used on the same
screen as a primary button.

```jsx example
<Button negative>Delete</Button>
```

### Secondary

Secondary buttons are without an outline, and are often used for secondary or
tertiary actions. This is the default so you may simply omit the secondary
property

```jsx example
<div className="flex space-x-32">
  <Button secondary>Save</Button>
  <Button>Save</Button>
</div>
```

### Loading/In progress

Used for visual feedback that the action the user triggered is loading.

```jsx example
<Button loading>Save</Button>
```

### Small

```jsx example
<Button small>Small</Button>
```

### Pill

```jsx example
<Button pill>Pill</Button>
```

### Link

Buttons will be rendered as an anchor (a tag) if they use an `href` attribute.

```jsx example
<Button href="https://google.no">Link</Button>
```

But if you need a button to look like a link, use the `link` property.

```jsx example
<Button link>Link</Button>
```

### Disabled

Disabled is an anti-pattern and is not supported. There will ALWAYS be users who
don't understand why an element is disabled, or users who can't even see that it
is disabled because of poor lighting conditions or other reasons.


### Props

<api-table react component="Button" />
