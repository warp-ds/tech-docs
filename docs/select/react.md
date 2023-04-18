## Import

```js
import { Select } from '@warp-ds/react';
```

## Example

```jsx example
<Select label="Berries">
  <option value="s">Strawberries</option>
  <option value="r">Raspberries</option>
  <option value="c">Cloudberries</option>
</Select>
```

## Value

An initial, uncontrolled, value can be provided using the `defaultValue` prop.
Alternatively, a controlled value can be provided using the `value` prop.

```jsx example
function Example() {
  let [value, setValue] = React.useState('c');

  return (
    <div className="flex flex-col space-y-32">
      <Select label="Berries (uncontrolled)">
        <option value="s">Strawberries</option>
        <option value="r">Raspberries</option>
        <option value="c">Cloudberries</option>
      </Select>

      <Select
        label="Berries (controlled)"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <option value="s">Strawberries</option>
        <option value="r">Raspberries</option>
        <option value="c">Cloudberries</option>
      </Select>
    </div>
  );
}
```

## Labeling

A visual label should be provided for the Select using the `label` prop.


### Optional

Add the optional prop to indicate that the select is not required.

```jsx example
<Select label="Berries" optional>
  <option value="s">Strawberries</option>
  <option value="r">Raspberries</option>
  <option value="c">Cloudberries</option>
</Select>
```

## Hint text

Selects can provide additional context with `hint` if the label and placeholder
aren't enough. You can force the hint text to always display by setting the
`always` prop.

```jsx example
<Select label="Berries" hint="We'll make jam of your selection" always>
  <option value="s">Strawberries</option>
  <option value="r">Raspberries</option>
  <option value="c">Cloudberries</option>
</Select>
```

## Validation

Selects can communicate to the user whether the current value is invalid.
Implement your own validation logic in your app and set the `invalid` prop to
display it as invalid.

`invalid` is often paired with `hint` to provide feedback to the user about the
error.

```jsx example
<Select label="Berries" invalid hint="The wrong selection gets you berried">
  <option value="s">Strawberries</option>
  <option value="r">Raspberries</option>
  <option value="c">Cloudberries</option>
</Select>
```

## Disabled

Using disabled is considered an anti-pattern and is therefore not supported.
There will ALWAYS be users who don't understand why an element is disabled, or
users who can't even see that it is disabled because of poor lighting conditions
or other reasons. Please consider more informative alternatives.

## Props

```props packages/select/src/component.tsx

```