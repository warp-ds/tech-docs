### Import

```js
import '@warp-ds/elements/components/select';
```

### Syntax

```js
<w-select label="A label">
  <option value='Foo' selected>Foo</option>
  <option value='Bar'>Bar</option>
</w-select>
```

#### Labelling

A visual label should be provided for the w-select using the `label` prop.

#### Auto-focus
The select component will be focused on render when the `auto-focus` prop is true.
```js
<w-select label="A label" auto-focus>
  <option value='Foo' selected>Foo</option>
  <option value='Bar'>Bar</option>
</w-select>
```

#### Invalid
Renders the field in an invalid state.
```js
<w-select label="A label" invalid always>
  <option value='Foo' >Foo</option>
  <option value='Bar'>Bar</option>
</w-select>
```

#### Optional
Add the `optional` prop to indicate that the select is not required.
```js
<w-select label="A label" optional always>
  <option value='Foo' selected>Foo</option>
  <option value='Bar'>Bar</option>
</w-select>
```

#### Hint text
w-select can provide additional context with `hint` if the label and placeholder aren't enough. You can force the hint text to always display by setting the `always` prop.

```js
<w-select label="A label" hint="This is a hint" always>
  <option value="Foo">Foo</option>
  <option value="Bar">Bar</option>
</w-select>
```

### Validation
w-select can communicate to the user whether the current value is invalid. Implement your own validation logic in your app and set the `invalid` prop to display it as invalid.

`invalid` is often paired with `hint` to provide feedback to the user about the
error.

```js
<w-select label="A label" invalid hint="Wrong choice" always>
  <option value="Foo">Foo</option>
  <option value="Bar">Bar</option>
</w-select>
```

<api-table type=elements component="Select" />
