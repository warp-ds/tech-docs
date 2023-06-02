## React Implementation

### Import

```js
import { Switch } from "@warp-ds/react";
```

### Usage

```js
    <Switch
        value={value}
        onClick={() => setValue(!value)}
        aria-label="Toggle switch"
    />
```

### Accessibility

The Switch needs either `aria-label` or `aria-labelledby` to be accessible to screen readers.

#### Disabled property

There is no visual styling to a disabled button.
It is recommended to display a message to the user, for example a modal or toast, stating why the user cannot toggle the switch.


### Props

<api-table type="react" component="Switch" />
