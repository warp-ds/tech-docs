## Import

> Use in entire app
```js
import { Forms } from '@fabric-ds/vue'
app.use(Forms)
```

> Use in one component and special imports
```js
import { fSelect } from '@fabric-ds/vue'
```

## Vue syntax

```html
<f-select v-model="model" label="A label">
  <option disabled selected value="">Pick something</option>
  <option value="foo">Foo</option>
</f-select>
```

## Props
All typical HTML5 attributes are valid props for select, see Field for additional props.

## Validation
### Validating Elements
Every form element accepts a prop rules which takes an array of functions. These functions will be run in order until one returns an object. If all functions return true the field is considered valid.

```js
[v => v.trim().length > 5 || { valid: false, hint: 'This should be longer' }]
```

The function has one argument, the current value of the form element — and can either return true or an object with attributes described below

| ATTRIBUTE | TYPE    |                                                                                                                                    |
| --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| valid     | boolean | Whether or not to treat the form element as valid                                                                                  |
| hint      | string  | The hint to show when this result is triggered                                                                                     |
| always    | boolean | If true, will show the status/hint even if the form element hasn't been touched yet - normally validation is only shown after blur |


### Collecting Validation from fForm
The fForm component registers element descendants at any level, and provides the aggregate validation status.

| PROP              | TYPE                                                                                                                                                       | DEFAULT |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| v-model           | boolean True when all descendants are valid                                                                                                                |         |
| v-model:completed | boolean True when all descendants are completed - passing their required rule                                                                              |         |
| should-validate   | boolean Can be used to instruct all descendants to immediately validate. Note that this will not update if the should-validate logic is updated elsewhere. |         |
| as                | string The DOM element to emit for the wrapper                                                                                                             | form    |

### Programatic validation
The fField component can provide access to programatic validation beyond what fForm's props can. For information on which methods are available, see the documentation on Field.

```html
<f-field #control="{ form }">
  <button @click="submit(form)">Submit</button>
</f-field>
```

### Validation and required Form Elements
If the form element is marked `required`, a special rule will be inserted before any user-defined rules.
The `required` prop can accept a function that will be used as the required-rule.

