### Import

```js
import { Slider } from '@warp-ds/react';
```

### Examples

#### Enabled
```js
function Example() {
  const [value, setValue] = React.useState(2_500_000);

  return (
    <div>
      <output>{value}</output>
      <Slider
        onChange={(value) => setValue(value)}
        value={value}
        min={1000}
        max={10_000_000}
        step={1000}
      />
    </div>
  );
}
```

#### Disabled

```jsx
<div>
  <Slider aria-label="Disabled slider" value={50} disabled />
</div>
```

### Props

<api-table type="react" component="Slider" />
